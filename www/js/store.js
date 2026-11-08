/* Data layer. Two interchangeable back-ends with the same async API:
 *   - Supabase (cloud accounts, progress syncs across devices)
 *   - Local (browser storage only; used when no Supabase keys are configured, or for "Try without an account")
 * Writes made while offline are queued and retried on the next load.
 */
(function () {
  const CFG = window.APP_CONFIG;
  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }
  };
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : 'id-' + Date.now() + '-' + Math.random().toString(16).slice(2));
  const cloudConfigured = !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY);

  function defaultSettings() {
    return { subjects: [], skipped: {}, mocksDate: CFG.DEFAULT_MOCKS_DATE, lcDate: CFG.DEFAULT_LC_DATE, dailyGoal: CFG.DEFAULT_DAILY_XP_GOAL, theme: 'auto' };
  }

  function loadScript(src) {
    return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  }

  const Store = {
    mode: null,          // 'cloud' | 'local'
    user: null,          // { id, email, name }
    profile: null,       // { display_name, settings }
    activity: [],        // [{ id, subject, section, kind, lesson, score, total, xp, created_at }]
    sb: null,
    cloudConfigured,

    async init() {
      const localSession = LS.get('ardu:session', null);
      if (localSession && localSession.mode === 'local') { return this._startLocal(localSession.userId); }
      if (cloudConfigured) {
        try {
          await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js');
          this.sb = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, { auth: { persistSession: true, detectSessionInUrl: true } });
          const { data } = await this.sb.auth.getSession();
          if (data && data.session) { await this._startCloud(data.session.user); return true; }
        } catch (e) { console.warn('Supabase unavailable', e); this.sb = null; }
      }
      return false;
    },

    // ---------- Auth ----------
    async signUp(email, password, name) {
      const { data, error } = await this.sb.auth.signUp({ email, password, options: { data: { display_name: name } } });
      if (error) throw error;
      if (!data.session) return { needsConfirm: true };
      await this._startCloud(data.user, name);
      return { ok: true };
    },
    async signIn(email, password) {
      const { data, error } = await this.sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await this._startCloud(data.user);
      return { ok: true };
    },
    async magicLink(email) {
      const { error } = await this.sb.auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin + location.pathname } });
      if (error) throw error;
    },
    async google() {
      const { error } = await this.sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
      if (error) throw error;
    },
    async resetPassword(email) {
      const { error } = await this.sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
      if (error) throw error;
    },
    localSignIn(name) {
      const users = LS.get('ardu:localUsers', {});
      let id = Object.keys(users).find(k => users[k].name.toLowerCase() === name.trim().toLowerCase());
      if (!id) { id = uid(); users[id] = { name: name.trim(), created: new Date().toISOString() }; LS.set('ardu:localUsers', users); }
      LS.set('ardu:session', { mode: 'local', userId: id });
      return this._startLocal(id);
    },
    localUsers() { return LS.get('ardu:localUsers', {}); },
    async signOut() {
      if (this.mode === 'cloud' && this.sb) await this.sb.auth.signOut();
      LS.del('ardu:session');
      this.user = null; this.profile = null; this.activity = []; this.mode = null;
    },

    // ---------- Start sessions ----------
    _startLocal(id) {
      const users = LS.get('ardu:localUsers', {});
      if (!users[id]) { LS.del('ardu:session'); return false; }
      this.mode = 'local';
      this.user = { id, email: null, name: users[id].name };
      const data = LS.get('ardu:data:' + id, null) || { profile: { display_name: users[id].name, settings: defaultSettings() }, activity: [] };
      this.profile = data.profile; this.activity = data.activity;
      this.profile.settings = Object.assign(defaultSettings(), this.profile.settings || {});
      return true;
    },
    _saveLocal() { LS.set('ardu:data:' + this.user.id, { profile: this.profile, activity: this.activity }); },

    async _startCloud(u, nameHint) {
      this.mode = 'cloud';
      this.user = { id: u.id, email: u.email, name: (u.user_metadata && u.user_metadata.display_name) || nameHint || (u.email || '').split('@')[0] };
      let { data: prof } = await this.sb.from('profiles').select('*').eq('id', u.id).maybeSingle();
      if (!prof) {
        prof = { id: u.id, display_name: this.user.name, settings: defaultSettings() };
        await this.sb.from('profiles').upsert(prof);
      }
      this.profile = { display_name: prof.display_name, settings: Object.assign(defaultSettings(), prof.settings || {}) };
      const { data: acts, error } = await this.sb.from('activity').select('*').eq('user_id', u.id).order('created_at', { ascending: true }).limit(10000);
      this.activity = error ? LS.get('ardu:cache:' + u.id, []) : acts;
      await this._flushQueue();
      LS.set('ardu:cache:' + u.id, this.activity);
    },

    // ---------- Profile ----------
    async saveProfile(patch) {
      if (patch.display_name !== undefined) this.profile.display_name = patch.display_name;
      if (patch.settings) this.profile.settings = Object.assign({}, this.profile.settings, patch.settings);
      if (this.mode === 'local') {
        if (patch.display_name) { const users = LS.get('ardu:localUsers', {}); users[this.user.id].name = patch.display_name; LS.set('ardu:localUsers', users); }
        return this._saveLocal();
      }
      const { error } = await this.sb.from('profiles').upsert({ id: this.user.id, display_name: this.profile.display_name, settings: this.profile.settings, updated_at: new Date().toISOString() });
      if (error) console.warn(error);
    },

    // ---------- Activity ----------
    async addActivity(a) {
      const rec = Object.assign({ id: uid(), created_at: new Date().toISOString(), lesson: null, score: null, total: null, xp: 0 }, a);
      this.activity.push(rec);
      if (this.mode === 'local') return this._saveLocal();
      LS.set('ardu:cache:' + this.user.id, this.activity);
      const row = Object.assign({ user_id: this.user.id }, rec);
      const { error } = await this.sb.from('activity').insert(row);
      if (error) { const q = LS.get('ardu:queue:' + this.user.id, []); q.push(row); LS.set('ardu:queue:' + this.user.id, q); }
    },
    async _flushQueue() {
      const key = 'ardu:queue:' + this.user.id; const q = LS.get(key, []);
      if (!q.length) return;
      const { error } = await this.sb.from('activity').upsert(q);
      if (!error) { LS.del(key); const ids = new Set(this.activity.map(a => a.id)); q.forEach(r => { if (!ids.has(r.id)) this.activity.push(r); }); }
    },
    exportData() { return JSON.stringify({ user: this.user, profile: this.profile, activity: this.activity }, null, 2); },
    async resetProgress() {
      this.activity = [];
      if (this.mode === 'local') return this._saveLocal();
      await this.sb.from('activity').delete().eq('user_id', this.user.id);
      LS.set('ardu:cache:' + this.user.id, []);
    }
  };
  window.Store = Store;
})();
