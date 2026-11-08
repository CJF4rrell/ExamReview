/* Ardú — app shell, router and views. Plain JS, no build step (works on GitHub Pages and inside Capacitor). */
(function () {
  const CFG = window.APP_CONFIG;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = x => Math.round((x || 0) * 100) + '%';
  const view = () => $('#view');
  const go = h => { location.hash = h; };
  const parseDate = s => { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, m - 1, d); };
  const daysTo = s => Math.ceil((parseDate(s) - new Date(new Date().toDateString())) / 86400000);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const PALETTE = ['#13795b', '#3b6fd8', '#c2543a', '#b7791f', '#7c4dcc', '#1f9e89', '#a8456b', '#6b8e23', '#4a5bd1'];
  const STATUS_LABEL = { todo: 'Not started', weak: 'Needs work', ok: 'Getting there', strong: 'Strong' };

  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(() => t.remove(), 2600);
  }
  function applyTheme() {
    const th = Store.profile && Store.profile.settings.theme;
    if (th === 'light' || th === 'dark') document.documentElement.setAttribute('data-theme', th);
    else document.documentElement.removeAttribute('data-theme');
  }
  function subjMeta(id) { return LC.content[id] || LC.catalogue.find(c => c.id === id) || { name: id }; }
  function subjDot(id, size) {
    const s = LC.content[id];
    const style = 'background:' + (s ? s.color : '#9aa0a6') + (size ? ';width:' + size + 'px;height:' + size + 'px;flex-basis:' + size + 'px' : '');
    return '<div class="subj-dot" style="' + style + '" aria-hidden="true">' + esc(s ? s.icon : subjMeta(id).name[0]) + '</div>';
  }
  function bar(p, color) { return '<div class="bar"><span style="width:' + Math.max(0, Math.min(100, p * 100)) + '%' + (color ? ';background:' + color : '') + '"></span></div>'; }

  // ---------------- Chrome ----------------
  function renderChrome(active) {
    const signedIn = !!Store.user;
    $('#topbar').classList.toggle('hidden', !signedIn);
    $('#tabbar').classList.toggle('hidden', !signedIn);
    $('#modeBanner').classList.toggle('hidden', !(signedIn && Store.mode === 'local'));
    if (!signedIn) return;
    const xp = Engine.totalXP(), lv = Engine.levelInfo(xp), st = Engine.streak();
    $('#topStats').innerHTML = '<span class="pill streak" title="Day streak">🔥 ' + st + '</span><span class="pill xp" title="Level ' + lv.level + '">⭐ ' + xp + ' XP</span>';
    $$('#tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === active));
  }

  // ---------------- Router ----------------
  async function route() {
    const parts = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
    const [page, a, b] = parts;
    window.scrollTo(0, 0);
    if (!Store.user) { renderChrome(); return renderLogin(); }
    applyTheme();
    if (!(Store.profile.settings.subjects || []).length && page !== 'onboard') return go('#/onboard');
    const tab = { home: 'home', subjects: 'subjects', subject: 'subjects', learn: 'subjects', quiz: 'subjects', progress: 'progress', settings: 'settings', onboard: 'settings' }[page] || 'home';
    renderChrome(tab);
    switch (page) {
      case 'onboard': return renderOnboard();
      case 'subjects': return renderSubjects();
      case 'subject': return renderSubject(a);
      case 'learn': return renderLearn(a, b, Number(parts[3] || 0));
      case 'quiz': return a === 'mix' ? renderQuiz(null, null) : renderQuiz(a, b);
      case 'progress': return renderProgress();
      case 'settings': return renderSettings();
      default: return renderHome();
    }
  }

  // ---------------- Login ----------------
  function renderLogin() {
    const cloud = Store.cloudConfigured && Store.sb;
    const locals = Store.localUsers();
    const localList = Object.keys(locals).length
      ? '<p class="small muted" style="margin-top:12px">Profiles on this device:</p><div class="row wrap">' + Object.keys(locals).map(id => '<button class="btn" data-local="' + esc(locals[id].name) + '">' + esc(locals[id].name) + '</button>').join('') + '</div>' : '';
    view().innerHTML =
      '<div class="auth-wrap"><div class="auth-card">' +
      '<div class="auth-hero"><div class="brand-mark">A</div><h1>' + esc(CFG.APP_NAME) + '</h1><p class="muted">' + esc(CFG.TAGLINE) + '</p></div>' +
      '<div class="card">' +
      (cloud ?
        '<div class="tabs" role="tablist"><button class="on" data-t="in">Sign in</button><button data-t="up">Create account</button></div>' +
        '<form id="authForm"><label class="field hidden" id="nameField">Your first name<input name="name" autocomplete="given-name"></label>' +
        '<label class="field">Email<input name="email" type="email" required autocomplete="email"></label>' +
        '<label class="field">Password<input name="password" type="password" minlength="6" required autocomplete="current-password"></label>' +
        '<div id="authErr" class="error"></div><button class="btn primary block" type="submit" id="authBtn">Sign in</button></form>' +
        '<div class="row between" style="margin-top:10px"><button class="linkbtn small" id="magic">Email me a sign-in link</button><button class="linkbtn small" id="forgot">Forgot password?</button></div>' +
        (CFG.ENABLE_GOOGLE_LOGIN ? '<button class="btn block" id="google" style="margin-top:10px">Continue with Google</button>' : '') +
        '<hr style="border:0;border-top:1px solid var(--line);margin:16px 0"><p class="small muted">Just looking? Try it without an account — progress stays on this device.</p>'
        : '<p class="notice info small">Progress is saved on this device. (Cloud accounts are switched on once the school/admin adds Supabase keys — see the README.)</p>') +
      '<form id="localForm"><label class="field">' + (cloud ? 'Your first name' : 'What should we call you?') + '<input name="name" required maxlength="30" autocomplete="given-name"></label>' +
      '<button class="btn ' + (cloud ? '' : 'primary') + ' block" type="submit">' + (cloud ? 'Try without an account' : 'Start revising') + '</button></form>' + localList +
      '</div></div></div>';

    let mode = 'in';
    $$('.tabs button').forEach(b => b.onclick = () => {
      mode = b.dataset.t; $$('.tabs button').forEach(x => x.classList.toggle('on', x === b));
      $('#nameField').classList.toggle('hidden', mode !== 'up'); $('#authBtn').textContent = mode === 'up' ? 'Create account' : 'Sign in';
    });
    const form = $('#authForm');
    if (form) form.onsubmit = async e => {
      e.preventDefault(); const f = new FormData(form); $('#authErr').textContent = ''; $('#authBtn').disabled = true;
      try {
        if (mode === 'up') {
          const r = await Store.signUp(f.get('email'), f.get('password'), f.get('name') || '');
          if (r.needsConfirm) { $('#authErr').textContent = ''; toast('Check your email to confirm your account, then sign in.'); $('#authBtn').disabled = false; return; }
        } else await Store.signIn(f.get('email'), f.get('password'));
        go('#/home'); route();
      } catch (err) { $('#authErr').textContent = err.message || 'Something went wrong'; $('#authBtn').disabled = false; }
    };
    const emailVal = () => form && new FormData(form).get('email');
    if ($('#magic')) $('#magic').onclick = async () => { const em = emailVal(); if (!em) return ($('#authErr').textContent = 'Enter your email first.'); try { await Store.magicLink(em); toast('Sign-in link sent — check your email.'); } catch (err) { $('#authErr').textContent = err.message; } };
    if ($('#forgot')) $('#forgot').onclick = async () => { const em = emailVal(); if (!em) return ($('#authErr').textContent = 'Enter your email first.'); try { await Store.resetPassword(em); toast('Password reset email sent.'); } catch (err) { $('#authErr').textContent = err.message; } };
    if ($('#google')) $('#google').onclick = () => Store.google().catch(err => { $('#authErr').textContent = err.message; });
    $('#localForm').onsubmit = e => { e.preventDefault(); const n = new FormData(e.target).get('name').trim(); if (!n) return; Store.localSignIn(n); go('#/home'); route(); };
    $$('[data-local]').forEach(b => b.onclick = () => { Store.localSignIn(b.dataset.local); go('#/home'); route(); });
  }

  // ---------------- Onboarding / subject picker ----------------
  function renderOnboard() {
    const s = Store.profile.settings; const chosen = {}; (s.subjects || []).forEach(x => { chosen[x.id] = x.level; });
    const first = !(s.subjects || []).length;
    const ready = LC.catalogue.filter(c => LC.content[c.id]), soon = LC.catalogue.filter(c => !LC.content[c.id]);
    const pick = c => '<label class="pick' + (chosen[c.id] ? ' on' : '') + '">' +
      '<input type="checkbox" data-id="' + c.id + '"' + (chosen[c.id] ? ' checked' : '') + '>' + subjDot(c.id, 32) +
      '<span class="grow"><b>' + esc(c.name) + '</b>' + (LC.content[c.id] && LC.content[c.id].specNote ? '<br><span class="tiny muted">New specification from 2027</span>' : '') + '</span>' +
      '<select data-lv="' + c.id + '" aria-label="Level for ' + esc(c.name) + '"><option value="H"' + (chosen[c.id] !== 'O' ? ' selected' : '') + '>Higher</option><option value="O"' + (chosen[c.id] === 'O' ? ' selected' : '') + '>Ordinary</option></select></label>';
    view().innerHTML =
      '<h1>' + (first ? 'Fáilte, ' + esc(Store.profile.display_name) + '! 👋' : 'Your subjects') + '</h1>' +
      '<p class="muted">Pick the subjects you want to revise and your level for each. You can change this any time.</p>' +
      '<div class="picker">' + ready.map(pick).join('') + '</div>' +
      '<details class="card" style="margin-top:14px"><summary><b>Other subjects</b> <span class="muted small">(' + soon.length + ' — content coming soon)</span></summary>' +
      '<p class="small muted" style="margin-top:8px">These subjects don’t have revision content yet. Past papers and marking schemes are on the <a href="' + LC.SEC_ARCHIVE + '" target="_blank" rel="noopener">SEC exam material archive</a>.</p>' +
      '<div class="chips">' + soon.map(c => '<span class="chip">' + esc(c.name) + '</span>').join('') + '</div></details>' +
      '<div class="card" style="margin-top:14px"><h2>Key dates</h2><div class="grid grid-2">' +
      '<label class="field">Mock exams start<input type="date" id="mocks" value="' + esc(s.mocksDate) + '"></label>' +
      '<label class="field">Leaving Cert starts<input type="date" id="lc" value="' + esc(s.lcDate) + '"></label></div>' +
      '<label class="field">Daily XP goal<select id="goal">' + [30, 60, 100, 150].map(g => '<option' + (g === s.dailyGoal ? ' selected' : '') + ' value="' + g + '">' + g + ' XP — ' + ({ 30: 'casual', 60: 'steady', 100: 'serious', 150: 'intense' }[g]) + '</option>').join('') + '</select></label>' +
      '<p class="tiny muted">Defaults are typical dates — check your school’s mock timetable and the official SEC timetable.</p></div>' +
      '<div id="obErr" class="error" style="margin-top:10px"></div><button class="btn primary block" id="saveSubj" style="margin-top:12px">' + (first ? 'Let’s go' : 'Save') + '</button>';
    $$('.pick input[type=checkbox]').forEach(cb => cb.onchange = () => cb.closest('.pick').classList.toggle('on', cb.checked));
    $('#saveSubj').onclick = async () => {
      const subjects = $$('.pick input[type=checkbox]').filter(cb => cb.checked).map(cb => ({ id: cb.dataset.id, level: $('[data-lv="' + cb.dataset.id + '"]').value }));
      if (!subjects.length) { $('#obErr').textContent = 'Choose at least one subject.'; return; }
      await Store.saveProfile({ settings: { subjects, mocksDate: $('#mocks').value || s.mocksDate, lcDate: $('#lc').value || s.lcDate, dailyGoal: Number($('#goal').value) } });
      go('#/home');
    };
  }

  // ---------------- Home ----------------
  function goalRing(p) {
    const r = 26, c = 2 * Math.PI * r, v = Math.min(1, p);
    return '<svg class="goal-ring" viewBox="0 0 64 64" role="img" aria-label="Daily goal ' + pct(v) + '"><circle cx="32" cy="32" r="' + r + '" fill="none" stroke="var(--surface-2)" stroke-width="8"/>' +
      '<circle cx="32" cy="32" r="' + r + '" fill="none" stroke="var(--xp)" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + (c * v) + ' ' + c + '" transform="rotate(-90 32 32)"/>' +
      '<text x="32" y="37" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">' + Math.round(v * 100) + '%</text></svg>';
  }
  function nextItem(n) {
    const subj = LC.content[n.subjectId];
    return '<a class="next-item" href="#/learn/' + n.subjectId + '/' + n.sec.id + '">' + subjDot(n.subjectId) +
      '<div class="grow"><div class="ellipsis"><b>' + esc(n.sec.title) + '</b></div><div class="small muted ellipsis">' + esc(subj.name) + ' · ' + esc(Engine.whyText(n.subjectId, n.sec, n.st)) + '</div></div>' +
      '<div class="mastery">' + (n.st.status === 'todo' ? '<span class="chip">New</span>' : pct(n.st.mastery) + bar(n.st.mastery)) + '</div></a>';
  }
  function renderHome() {
    const s = Store.profile.settings, xp = Engine.totalXP(), lv = Engine.levelInfo(xp), today = Engine.xpToday();
    const next = Engine.upNext(5), due = next.filter(n => n.st.due);
    const dm = daysTo(s.mocksDate), dl = daysTo(s.lcDate);
    const hour = new Date().getHours(), greet = hour < 12 ? 'Maidin mhaith' : hour < 18 ? 'Dia duit' : 'Tráthnóna maith';
    view().innerHTML =
      '<h1>' + greet + ', ' + esc(Store.profile.display_name) + '</h1>' +
      '<div class="hero">' +
      '<div class="card level-card"><div class="row between"><div><div class="muted small">Level</div><div style="font-size:2.2rem;font-weight:900;line-height:1">' + lv.level + '</div></div>' +
      '<div style="text-align:right"><div class="muted small">Streak</div><div style="font-size:1.4rem;font-weight:900">🔥 ' + Engine.streak() + ' day' + (Engine.streak() === 1 ? '' : 's') + '</div></div></div>' +
      '<div style="margin-top:14px">' + bar(lv.pct) + '<div class="small muted" style="margin-top:6px">' + lv.into + ' / ' + lv.span + ' XP to level ' + (lv.level + 1) + '</div></div></div>' +
      '<div class="countdowns">' +
      '<div class="card count"><div class="num">' + (dm > 0 ? dm : '✓') + '</div><div class="small muted">' + (dm > 0 ? 'days to the Mocks' : 'Mocks done') + '</div></div>' +
      '<div class="card count"><div class="num">' + Math.max(0, dl) + '</div><div class="small muted">days to the Leaving Cert</div></div></div></div>' +
      '<div class="card" style="margin-top:12px"><div class="row">' + goalRing(today / s.dailyGoal) + '<div class="grow"><b>Today: ' + today + ' / ' + s.dailyGoal + ' XP</b><div class="small muted">' +
      (today >= s.dailyGoal ? 'Daily goal smashed. Maith thú! 🎉' : 'A lesson card is 10 XP; a section check is up to 50 XP.') + '</div></div>' +
      '<a class="btn primary" href="#/quiz/mix">Quick mix ⚡</a></div></div>' +
      '<div class="section-title"><h2>Up next for you</h2><span class="small muted">Ranked by exam marks × how often it’s examined × what you still have to gain</span></div>' +
      (next.length ? next.map(nextItem).join('') : '<p class="muted">Choose some subjects to get started.</p>') +
      (due.length ? '<p class="small muted" style="margin-top:8px">🔁 ' + due.length + ' of these are due for review — your mastery fades if you don’t revisit a section.</p>' : '') +
      '<div class="section-title"><h2>Your last 12 weeks</h2><a class="small" href="#/progress">Full progress →</a></div>' +
      '<div class="card">' + heatmapHTML({ weeksBack: 12, until: 'today', metric: 'activity' }) + '</div>' +
      '<div class="section-title"><h2>My subjects</h2><a class="small" href="#/subjects">All →</a></div>' +
      '<div class="grid grid-3">' + subjectCards() + '</div>';
    scrollHeatToEnd();
  }

  // ---------------- Subjects ----------------
  function subjectCards() {
    return (Store.profile.settings.subjects || []).map(({ id, level }) => {
      const s = LC.content[id];
      if (!s) return '<div class="card subj-card soon"><div class="row">' + subjDot(id) + '<div><b>' + esc(subjMeta(id).name) + '</b><div class="small muted">Content coming soon</div></div></div>' +
        '<a class="small" href="' + LC.SEC_ARCHIVE + '" target="_blank" rel="noopener">Past papers on examinations.ie →</a></div>';
      const m = Engine.subjectMastery(id);
      return '<a class="card subj-card" href="#/subject/' + id + '"><div class="row">' + subjDot(id) + '<div class="grow"><b>' + esc(s.name) + '</b><div class="small muted">' + (level === 'O' ? 'Ordinary' : 'Higher') + ' Level · ' + m.touched + '/' + m.total + ' sections started</div></div></div>' +
        '<div class="row between small"><span>Mastery</span><b>' + pct(m.mastery) + '</b></div>' + bar(m.mastery, s.color) + '</a>';
    }).join('');
  }
  function renderSubjects() {
    view().innerHTML = '<div class="row between"><h1>Subjects</h1><a class="btn" href="#/onboard">Edit subjects</a></div><div class="grid grid-3">' + subjectCards() + '</div>' +
      '<p class="small muted" style="margin-top:16px">Past papers, marking schemes and Chief Examiner’s reports for every subject: <a href="' + LC.SEC_ARCHIVE + '" target="_blank" rel="noopener">SEC exam material archive</a>.</p>';
  }

  function examMapHTML(subj, lvKey) {
    const ex = subj.exam[lvKey] || subj.exam.H; let i = 0;
    const segs = [], lists = [];
    ex.papers.forEach(p => {
      lists.push('<div style="margin-top:12px"><div class="row between"><b>' + esc(p.name) + '</b><span class="small muted">' + p.marks + ' marks' + (p.time ? ' · ' + esc(p.time) : '') + '</span></div><ul class="paper-list">' +
        p.parts.map(pt => { const col = PALETTE[i % PALETTE.length]; i++; segs.push('<div style="flex:' + pt.marks + ';background:' + col + '" title="' + esc(pt.name) + ' — ' + pt.marks + ' marks">' + Math.round(pt.marks / ex.total * 100) + '%</div>');
          return '<li><span><i style="display:inline-block;width:10px;height:10px;border-radius:3px;background:' + col + ';margin-right:6px"></i>' + esc(pt.name) + (pt.note ? '<br><span class="tiny muted">' + esc(pt.note) + '</span>' : '') + '</span><span class="m">' + pt.marks + '</span></li>'; }).join('') + '</ul></div>');
    });
    return '<div class="exam-map" role="img" aria-label="Marks breakdown">' + segs.join('') + '</div><div class="small muted" style="margin-top:6px">Total ' + ex.total + ' marks</div>' + lists.join('');
  }
  function secItem(id, sec) {
    const st = Engine.sectionState(id, sec), skipped = Engine.isSkipped(id, sec.id);
    const chips = [];
    if (sec.coursework) chips.push('<span class="chip cw">Coursework</span>');
    if (sec.choiceGroup) chips.push('<span class="chip">' + esc(sec.choiceGroup) + ' choice</span>');
    if (!sec.coursework && Engine.weight(id, sec) >= 10) chips.push('<span class="chip hot">High marks</span>');
    if (st.due) chips.push('<span class="chip due">Review due</span>');
    chips.push('<span class="chip">' + esc(Engine.whyText(id, sec, st).replace(' · due for review', '')) + '</span>');
    return '<div class="sec-item" style="' + (skipped ? 'opacity:.5' : '') + '"><span class="status st-' + st.status + '" title="' + STATUS_LABEL[st.status] + '"></span>' +
      '<a class="grow" style="text-decoration:none;color:inherit" href="#/learn/' + id + '/' + sec.id + '"><div><b>' + esc(sec.title) + '</b></div><div class="small muted">' + esc(sec.summary) + '</div><div class="chips">' + chips.join('') + '</div></a>' +
      '<div class="mastery">' + (st.status === 'todo' ? '' : pct(st.mastery) + bar(st.mastery)) +
      (sec.choiceGroup || skipped ? '<button class="linkbtn tiny" data-skip="' + sec.id + '">' + (skipped ? 'Restore' : 'Not studying') + '</button>' : '') + '</div></div>';
  }
  let subjSort = 'priority';
  function renderSubject(id) {
    const subj = LC.content[id]; if (!subj) return go('#/subjects');
    const lv = Engine.level(id);
    let secs = Engine.sectionsFor(id);
    if (subjSort === 'priority') secs = secs.slice().sort((a, b) => {
      const sa = Engine.isSkipped(id, a.id), sb = Engine.isSkipped(id, b.id); if (sa !== sb) return sa ? 1 : -1;
      if (a.coursework !== b.coursework) return a.coursework ? 1 : -1;
      return Engine.priority(id, b) - Engine.priority(id, a);
    });
    const m = Engine.subjectMastery(id);
    view().innerHTML =
      '<a class="back" href="#/subjects">← Subjects</a>' +
      '<div class="row">' + subjDot(id, 48) + '<div class="grow"><h1 style="margin:0">' + esc(subj.name) + '</h1><div class="muted small">' + (lv === 'O' ? 'Ordinary' : 'Higher') + ' Level · mastery ' + pct(m.mastery) + ' · ' + m.touched + '/' + m.total + ' sections started</div></div></div>' +
      (subj.specNote ? '<p class="notice" style="margin-top:12px">' + esc(subj.specNote) + '</p>' : '') +
      '<div class="grid grid-2" style="margin-top:12px"><div class="card"><h2>How the exam is marked</h2>' + examMapHTML(subj, lv) + '</div>' +
      '<div class="card"><h2>What the marking schemes tell us</h2><ul style="padding-left:1.1rem;margin:0">' + subj.markingNotes.map(n => '<li class="small" style="margin-bottom:6px">' + esc(n) + '</li>').join('') + '</ul>' +
      '<p class="small" style="margin-top:10px"><a href="' + LC.SEC_ARCHIVE + '" target="_blank" rel="noopener">Past papers, marking schemes & Chief Examiner’s reports →</a></p></div></div>' +
      '<div class="section-title"><h2>Sections</h2><div class="segmented"><button data-sort="priority" class="' + (subjSort === 'priority' ? 'on' : '') + '">Priority</button><button data-sort="order" class="' + (subjSort === 'order' ? 'on' : '') + '">Exam order</button></div></div>' +
      '<div class="legend" style="margin-bottom:10px">' + ['todo', 'weak', 'ok', 'strong'].map(k => '<span class="status st-' + k + '"></span> ' + STATUS_LABEL[k]).join(' &nbsp; ') + '</div>' +
      secs.map(sec => secItem(id, sec)).join('');
    $$('[data-sort]').forEach(b => b.onclick = () => { subjSort = b.dataset.sort; renderSubject(id); });
    $$('[data-skip]').forEach(b => b.onclick = async () => {
      const sk = Object.assign({}, Store.profile.settings.skipped); const list = new Set(sk[id] || []);
      list.has(b.dataset.skip) ? list.delete(b.dataset.skip) : list.add(b.dataset.skip); sk[id] = [...list];
      await Store.saveProfile({ settings: { skipped: sk } }); renderSubject(id);
    });
  }

  // ---------------- Learn (bite-sized lesson cards) ----------------
  function renderLearn(id, secId, idx) {
    const subj = LC.content[id]; if (!subj) return go('#/subjects');
    const sec = subj.sections.find(s => s.id === secId); if (!sec) return go('#/subject/' + id);
    const lessons = Engine.lessonsFor(id, sec), st = Engine.sectionState(id, sec);
    const atEnd = idx >= lessons.length;
    const dots = '<div class="dots">' + lessons.map((_, i) => '<span class="' + (i === idx ? 'on' : st.lessonsDone.has(i) ? 'done' : '') + '"></span>').join('') + '<span class="' + (atEnd ? 'on' : '') + '" style="background:' + (atEnd ? 'var(--xp)' : '') + '"></span></div>';
    let card;
    if (!atEnd) {
      const L = lessons[idx];
      card = '<div class="card lesson-card"><div class="small muted">Card ' + (idx + 1) + ' of ' + lessons.length + '</div><h2 style="margin-top:4px">' + esc(L.t) + '</h2><div class="body">' + L.b + '</div>' +
        '<div class="row between" style="margin-top:12px">' + (idx > 0 ? '<a class="btn ghost" href="#/learn/' + id + '/' + secId + '/' + (idx - 1) + '">← Back</a>' : '<span></span>') +
        '<button class="btn primary" id="gotit">' + (st.lessonsDone.has(idx) ? 'Next →' : 'Got it · +10 XP') + '</button></div></div>';
    } else {
      card = '<div class="card lesson-card"><h2>Ready for the section check?</h2><div class="body"><p>' + Engine.questionsFor(id, sec).length + ' questions in the bank; you’ll get up to ' + CFG.QUIZ_LENGTH + ' at random. Up to 5 XP per correct answer, +20 for full marks.</p>' +
        '<div class="tip"><b>Exam tip:</b> ' + esc(sec.examTip) + '</div>' +
        (st.quizCount ? '<p class="small muted" style="margin-top:10px">Previous checks: ' + st.quizCount + ' · last ' + pct(st.lastPct) + ' · best ' + pct(st.bestPct) + '</p>' : '') + '</div>' +
        '<div class="row between" style="margin-top:12px"><a class="btn ghost" href="#/learn/' + id + '/' + secId + '/' + (lessons.length - 1) + '">← Review cards</a><a class="btn primary" href="#/quiz/' + id + '/' + secId + '">Start the check</a></div></div>';
    }
    view().innerHTML = '<a class="back" href="#/subject/' + id + '">← ' + esc(subj.name) + '</a>' +
      '<div class="row">' + subjDot(id) + '<div class="grow"><h1 style="margin:0;font-size:1.3rem">' + esc(sec.title) + '</h1><div class="small muted">' + esc(Engine.whyText(id, sec, st)) + '</div></div></div>' +
      dots + card +
      (!atEnd && idx === 0 ? '<div class="row between" style="margin-top:10px"><span class="small muted">Know this already?</span><a class="linkbtn small" href="#/quiz/' + id + '/' + secId + '">Skip to the check →</a></div>' : '');
    const btn = $('#gotit');
    if (btn) btn.onclick = async () => {
      btn.disabled = true;
      if (!st.lessonsDone.has(idx)) { await Store.addActivity({ subject: id, section: secId, kind: 'lesson', lesson: idx, xp: 10 }); renderChrome('subjects'); }
      go('#/learn/' + id + '/' + secId + '/' + (idx + 1));
    };
  }

  // ---------------- Quiz ----------------
  function buildQuestions(id, sec, n) {
    return shuffle(Engine.questionsFor(id, sec)).slice(0, n).map(q => {
      const order = shuffle(q.o.map((_, i) => i));
      return { q: q.q, o: order.map(i => q.o[i]), a: order.indexOf(q.a), x: q.x, subject: id, section: sec.id, secTitle: sec.title };
    });
  }
  function renderQuiz(id, secId) {
    let qs, title, back, subj, sec;
    if (id) {
      subj = LC.content[id]; if (!subj) return go('#/subjects');
      sec = subj.sections.find(s => s.id === secId); if (!sec) return go('#/subject/' + id);
      qs = buildQuestions(id, sec, CFG.QUIZ_LENGTH); title = sec.title + ' — section check'; back = '#/learn/' + id + '/' + secId + '/' + Engine.lessonsFor(id, sec).length;
    } else {
      // Quick mix: 2 questions from each of your top priority sections across subjects
      const top = Engine.upNext(5);
      qs = shuffle([].concat(...top.map(n => buildQuestions(n.subjectId, n.sec, 2)))); title = 'Quick mix'; back = '#/home';
      if (!qs.length) { view().innerHTML = '<p>Pick some subjects first.</p>'; return; }
    }
    const before = id ? Engine.sectionState(id, sec).mastery : null;
    const answers = []; let i = 0;
    function draw() {
      const q = qs[i];
      const prog = '<div class="q-progress">' + qs.map((_, k) => '<span class="' + (k < answers.length ? (answers[k] ? 'right' : 'wrong') : k === i ? 'cur' : '') + '"></span>').join('') + '</div>';
      view().innerHTML = '<a class="back" href="' + back + '">← Leave check</a><h1 style="font-size:1.25rem">' + esc(title) + '</h1>' + prog +
        '<div class="card">' + (!id ? '<div class="small muted">' + esc(LC.content[q.subject].name) + ' · ' + esc(q.secTitle) + '</div>' : '') +
        '<div class="small muted">Question ' + (i + 1) + ' of ' + qs.length + '</div><h2 style="margin-top:6px">' + esc(q.q) + '</h2>' +
        q.o.map((o, k) => '<button class="opt" data-k="' + k + '">' + esc(o) + '</button>').join('') + '<div id="after"></div></div>';
      $$('.opt').forEach(b => b.onclick = () => {
        const k = Number(b.dataset.k), ok = k === q.a; answers.push(ok);
        $$('.opt').forEach(x => { x.disabled = true; const kk = Number(x.dataset.k); if (kk === q.a) x.classList.add('right'); else if (kk === k) x.classList.add('wrong'); });
        $('#after').innerHTML = '<div class="explain">' + (ok ? '✅ <b>Correct.</b> ' : '❌ <b>Not quite.</b> ') + esc(q.x || '') + '</div>' +
          '<button class="btn primary block" id="nextQ" style="margin-top:12px">' + (i + 1 < qs.length ? 'Next question' : 'See results') + '</button>';
        $('#nextQ').focus();
        $('#nextQ').onclick = () => { i++; i < qs.length ? draw() : finish(); };
      });
    }
    async function finish() {
      const score = answers.filter(Boolean).length, total = qs.length;
      let xp = 0;
      if (id) {
        xp = Engine.quizXP(score, total);
        await Store.addActivity({ subject: id, section: secId, kind: 'quiz', score, total, xp });
      } else {
        const groups = {};
        qs.forEach((q, k) => { const key = q.subject + '|' + q.section; (groups[key] = groups[key] || { s: 0, t: 0, subject: q.subject, section: q.section }); groups[key].t++; if (answers[k]) groups[key].s++; });
        for (const g of Object.values(groups)) { const gx = g.s * 5; xp += gx; await Store.addActivity({ subject: g.subject, section: g.section, kind: 'quiz', score: g.s, total: g.t, xp: gx }); }
        if (score === total) { xp += 20; await Store.addActivity({ subject: qs[0].subject, section: qs[0].section, kind: 'bonus', xp: 20 }); }
      }
      renderChrome('subjects');
      const p = score / total;
      const after = id ? Engine.sectionState(id, sec).mastery : null;
      const msg = p === 1 ? 'Perfect! Lán marcanna. 💯' : p >= 0.8 ? 'Excellent work — this section is strong.' : p >= 0.6 ? 'Good — a quick review will lock it in.' : 'Worth another pass through the cards, then try again.';
      const wrong = qs.filter((_, k) => !answers[k]);
      const nxt = Engine.upNext(1)[0];
      view().innerHTML = '<a class="back" href="' + (id ? '#/subject/' + id : '#/home') + '">← ' + (id ? esc(subj.name) : 'Home') + '</a>' +
        '<div class="card" style="text-align:center"><div class="small muted">' + esc(title) + '</div><div class="result-score" style="margin:10px 0">' + score + '/' + total + '</div>' +
        '<div class="xp-burst">+' + xp + ' XP</div><p style="margin-top:10px">' + msg + '</p>' +
        (id ? '<div class="small muted">Section mastery ' + pct(before) + ' → <b>' + pct(after) + '</b></div>' : '') + '</div>' +
        (wrong.length ? '<div class="section-title"><h2>Review what you missed</h2></div>' + wrong.map(q => '<div class="card"><b>' + esc(q.q) + '</b><p class="small" style="margin:6px 0 0">Answer: <b>' + esc(q.o[q.a]) + '</b> — ' + esc(q.x || '') + '</p></div>').join('') : '') +
        '<div class="row wrap" style="margin-top:16px">' + (id ? '<a class="btn" href="#/learn/' + id + '/' + secId + '">Review cards</a><button class="btn" id="retry">Try again</button>' : '<button class="btn" id="retry">Another mix</button>') +
        (nxt ? '<a class="btn primary" href="#/learn/' + nxt.subjectId + '/' + nxt.sec.id + '">Next: ' + esc(nxt.sec.title) + ' →</a>' : '') + '</div>';
      $('#retry').onclick = () => renderQuiz(id, secId);
    }
    draw();
  }

  // ---------------- Heatmap ----------------
  function heatColor(d, metric) {
    if (!d) return 'var(--heat-0)';
    if (metric === 'score') {
      if (d.avgPct == null) return 'var(--heat-1)';
      return d.avgPct >= 0.8 ? 'var(--good)' : d.avgPct >= 0.6 ? 'var(--ok)' : 'var(--weak)';
    }
    const x = d.xp; return x >= 100 ? 'var(--heat-4)' : x >= 60 ? 'var(--heat-3)' : x >= 25 ? 'var(--heat-2)' : 'var(--heat-1)';
  }
  function heatmapHTML(opts) {
    const s = Store.profile.settings, data = Engine.byDay(opts.subject || null);
    const now = new Date(new Date().toDateString());
    const firstAct = Store.activity.length ? new Date(new Date(Store.activity[0].created_at).toDateString()) : now;
    let start = new Date(now.getTime() - (opts.weeksBack || 12) * 7 * 86400000);
    if (opts.fromFirst && firstAct < start) start = firstAct;
    start = new Date(start.getTime() - ((start.getDay() + 6) % 7) * 86400000); // Monday
    const end = opts.until === 'lc' ? parseDate(s.lcDate) : now;
    const tk = Engine.today(), mk = s.mocksDate, lk = s.lcDate;
    const cells = [], months = []; let col = 0, lastMonth = -1;
    for (let d = new Date(start); d <= end || d.getDay() !== 1; d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)) {
      if (d.getDay() === 1) { if (d.getMonth() !== lastMonth) { months.push('<span style="grid-column:' + (col + 1) + '">' + d.toLocaleString('en-IE', { month: 'short' }) + '</span>'); lastMonth = d.getMonth(); } col++; }
      const k = Engine.dayKey(d), info = data[k], future = d > now, out = d > end;
      const cls = ['d']; if (out) cls.push('out'); if (k === tk) cls.push('today'); if (k === mk) cls.push('mark-mocks'); if (k === lk) cls.push('mark-lc');
      const tip = d.toDateString() + (info ? ' — ' + info.count + ' activit' + (info.count === 1 ? 'y' : 'ies') + ', ' + info.xp + ' XP' + (info.avgPct != null ? ', avg check ' + pct(info.avgPct) : '') : future ? '' : ' — no revision') + (k === mk ? ' · Mocks start' : '') + (k === lk ? ' · Leaving Cert starts' : '');
      cells.push('<div class="' + cls.join(' ') + '" title="' + esc(tip) + '" style="' + (out ? '' : 'background:' + (future ? 'var(--surface-2)' : heatColor(info, opts.metric))) + '"></div>');
    }
    const legend = opts.metric === 'score'
      ? '<span>Check score:</span><i style="background:var(--weak)"></i>&lt;60% <i style="background:var(--ok)"></i>60–79% <i style="background:var(--good)"></i>80%+ <i style="background:var(--heat-1)"></i>study only'
      : '<span>Less</span><i style="background:var(--heat-0)"></i><i style="background:var(--heat-1)"></i><i style="background:var(--heat-2)"></i><i style="background:var(--heat-3)"></i><i style="background:var(--heat-4)"></i><span>More</span>';
    return '<div class="heat-wrap"><div class="heat-months">' + months.join('') + '</div><div class="heat">' + cells.join('') + '</div></div>' +
      '<div class="legend" style="margin-top:8px">' + legend + (opts.until === 'lc' ? ' &nbsp;<i style="outline:2px solid var(--xp)"></i> Mocks <i style="outline:2px solid var(--weak)"></i> LC' : '') + '</div>';
  }
  function scrollHeatToEnd() { $$('.heat-wrap').forEach(w => { const t = $('.today', w); w.scrollLeft = t ? t.offsetLeft - w.clientWidth + 60 : w.scrollWidth; }); }

  // ---------------- Weekly chart ----------------
  function weeklyChart() {
    const wk = Engine.weekly(10), W = 600, H = 200, pad = 28, bw = (W - pad * 2) / wk.length;
    const maxXP = Math.max(60, ...wk.map(w => w.xp));
    let bars = '', pts = [], labels = '';
    wk.forEach((w, i) => {
      const x = pad + i * bw, h = (w.xp / maxXP) * (H - pad * 2);
      bars += '<rect x="' + (x + bw * 0.18) + '" y="' + (H - pad - h) + '" width="' + bw * 0.64 + '" height="' + h + '" rx="4" fill="var(--heat-2)"><title>Week of ' + w.start.toDateString() + ': ' + w.xp + ' XP, ' + w.sessions + ' activities</title></rect>';
      if (w.avgPct != null) pts.push([x + bw / 2, H - pad - w.avgPct * (H - pad * 2), w]);
      labels += '<text x="' + (x + bw / 2) + '" y="' + (H - 8) + '" text-anchor="middle">' + w.start.getDate() + '/' + (w.start.getMonth() + 1) + '</text>';
    });
    const line = pts.length > 1 ? '<polyline fill="none" stroke="var(--xp)" stroke-width="2.5" points="' + pts.map(p => p[0] + ',' + p[1]).join(' ') + '"/>' : '';
    const dots = pts.map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="var(--xp)"><title>Avg check score ' + pct(p[2].avgPct) + '</title></circle>').join('');
    const grid = [0, 0.5, 1].map(g => { const y = H - pad - g * (H - pad * 2); return '<line x1="' + pad + '" x2="' + (W - pad) + '" y1="' + y + '" y2="' + y + '" stroke="var(--line)"/><text x="' + (W - pad + 4) + '" y="' + (y + 3) + '">' + (g * 100) + '%</text>'; }).join('');
    const last = wk[wk.length - 1], prev = wk[wk.length - 2];
    const delta = (last.avgPct != null && prev.avgPct != null) ? Math.round((last.avgPct - prev.avgPct) * 100) : null;
    return '<div class="row wrap small" style="gap:16px;margin-bottom:8px"><span><i style="display:inline-block;width:10px;height:10px;background:var(--heat-2);border-radius:2px"></i> XP per week</span><span><i style="display:inline-block;width:10px;height:3px;background:var(--xp);vertical-align:middle"></i> Avg check score</span>' +
      '<span class="muted">This week: <b>' + last.xp + ' XP</b>' + (prev ? ' (last week ' + prev.xp + ')' : '') + (delta != null ? ' · score ' + (delta >= 0 ? '▲' : '▼') + Math.abs(delta) + ' pts' : '') + '</span></div>' +
      '<div class="chart"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Weekly XP and average score">' + grid + bars + line + dots + labels + '</svg></div>';
  }

  // ---------------- Progress ----------------
  let heatMetric = 'activity', heatSubject = '';
  function renderProgress() {
    const xp = Engine.totalXP(), lv = Engine.levelInfo(xp);
    const quizzes = Store.activity.filter(a => a.kind === 'quiz' && a.total);
    const recent = quizzes.filter(q => Engine.daysBetween(q.created_at, Date.now()) < 7);
    const avg7 = recent.length ? recent.reduce((s, q) => s + q.score / q.total, 0) / recent.length : null;
    const subs = (Store.profile.settings.subjects || []).filter(s => LC.content[s.id]);
    const tiles = [['⭐', xp + ' XP', 'Level ' + lv.level], ['🔥', Engine.streak() + ' days', 'Best ' + Engine.bestStreak()], ['✅', quizzes.length, 'Checks done'], ['🎯', avg7 == null ? '—' : pct(avg7), 'Avg score, 7 days']];
    view().innerHTML = '<h1>Progress</h1>' +
      '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr))">' + tiles.map(t => '<div class="card"><div style="font-size:1.4rem">' + t[0] + '</div><div style="font-size:1.4rem;font-weight:900">' + t[1] + '</div><div class="small muted">' + t[2] + '</div></div>').join('') + '</div>' +
      '<div class="section-title"><h2>Revision calendar</h2><div class="row wrap"><select id="heatSub" class="pick" style="padding:6px 10px"><option value="">All subjects</option>' + subs.map(s => '<option value="' + s.id + '"' + (heatSubject === s.id ? ' selected' : '') + '>' + esc(LC.content[s.id].name) + '</option>').join('') + '</select>' +
      '<div class="segmented"><button data-m="activity" class="' + (heatMetric === 'activity' ? 'on' : '') + '">Activity</button><button data-m="score" class="' + (heatMetric === 'score' ? 'on' : '') + '">Performance</button></div></div></div>' +
      '<div class="card">' + heatmapHTML({ weeksBack: 8, fromFirst: true, until: 'lc', metric: heatMetric, subject: heatSubject }) +
      '<p class="tiny muted" style="margin:8px 0 0">Runs from your first session to the Leaving Cert. Hover or long-press a day for details.</p></div>' +
      '<div class="section-title"><h2>Week over week</h2></div><div class="card">' + weeklyChart() + '</div>' +
      '<div class="section-title"><h2>Coverage map</h2><span class="small muted">Every section, coloured by your latest result</span></div>' +
      '<div class="card">' + subs.map(s => '<div class="cov-row"><a href="#/subject/' + s.id + '" class="small" style="font-weight:700;color:var(--ink);text-decoration:none">' + esc(LC.content[s.id].name) + '</a><div class="cov-cells">' +
        Engine.sectionsFor(s.id).filter(sec => !sec.coursework).map(sec => { const st = Engine.sectionState(s.id, sec), sk = Engine.isSkipped(s.id, sec.id);
          return '<a href="#/learn/' + s.id + '/' + sec.id + '" class="st-' + st.status + '" style="' + (sk ? 'opacity:.25' : '') + (st.due ? ';outline:2px solid var(--xp);outline-offset:1px' : '') + '" title="' + esc(sec.title + ' — ' + STATUS_LABEL[st.status] + (st.status !== 'todo' ? ' (' + pct(st.mastery) + ')' : '') + (st.due ? ' · review due' : '') + (sk ? ' · not studying' : '')) + '"></a>'; }).join('') + '</div></div>').join('') +
      '<div class="legend" style="margin-top:10px">' + ['todo', 'weak', 'ok', 'strong'].map(k => '<i class="st-' + k + '"></i>' + STATUS_LABEL[k]).join(' ') + ' <i style="outline:2px solid var(--xp)"></i> Review due</div></div>' +
      '<div class="section-title"><h2>Badges</h2></div><div class="card"><div class="badges">' + Engine.badges().map(b => '<div class="badge' + (b.got ? '' : ' locked') + '" title="' + esc(b.desc) + '"><span class="b-ico">' + b.ico + '</span>' + esc(b.name) + '<div class="tiny muted" style="font-weight:500">' + esc(b.desc) + '</div></div>').join('') + '</div></div>';
    $$('[data-m]').forEach(b => b.onclick = () => { heatMetric = b.dataset.m; renderProgress(); });
    $('#heatSub').onchange = e => { heatSubject = e.target.value; renderProgress(); };
    scrollHeatToEnd();
  }

  // ---------------- Settings ----------------
  function renderSettings() {
    const s = Store.profile.settings;
    view().innerHTML = '<h1>Settings</h1>' +
      '<div class="card"><h2>Profile</h2><label class="field">Name<input id="nm" value="' + esc(Store.profile.display_name) + '" maxlength="30"></label>' +
      '<p class="small muted">' + (Store.mode === 'cloud' ? 'Signed in as ' + esc(Store.user.email) + ' — progress syncs across your devices.' : 'Local profile — progress is saved on this device only.') + '</p>' +
      '<div class="grid grid-2"><label class="field">Mock exams start<input type="date" id="mocks" value="' + esc(s.mocksDate) + '"></label><label class="field">Leaving Cert starts<input type="date" id="lc" value="' + esc(s.lcDate) + '"></label></div>' +
      '<div class="grid grid-2"><label class="field">Daily XP goal<select id="goal">' + [30, 60, 100, 150].map(g => '<option' + (g === s.dailyGoal ? ' selected' : '') + '>' + g + '</option>').join('') + '</select></label>' +
      '<label class="field">Theme<select id="theme">' + [['auto', 'Match device'], ['light', 'Light'], ['dark', 'Dark']].map(t => '<option value="' + t[0] + '"' + (s.theme === t[0] ? ' selected' : '') + '>' + t[1] + '</option>').join('') + '</select></label></div>' +
      '<button class="btn primary" id="saveSet">Save</button></div>' +
      '<div class="card"><h2>Subjects & levels</h2><p class="small muted">' + (s.subjects || []).map(x => esc(subjMeta(x.id).name) + ' (' + x.level + ')').join(', ') + '</p><a class="btn" href="#/onboard">Change subjects</a></div>' +
      '<div class="card"><h2>Your data</h2><div class="row wrap"><button class="btn" id="export">Download my data</button><button class="btn" id="reset">Reset progress</button><button class="btn" id="out">Sign out</button></div></div>' +
      '<div class="card"><h2>About the content</h2><p class="small">Exam structures and priorities are built from SEC papers, marking schemes and sample papers, the 2027 prescribed material for English, and the NCCA specifications for the new Biology and Business courses. Topic frequencies are estimates from recent papers — always check the official sources:</p>' +
      '<ul class="small"><li><a href="' + LC.SEC_ARCHIVE + '" target="_blank" rel="noopener">SEC exam material archive</a> — past papers, marking schemes, Chief Examiner’s reports</li><li><a href="https://www.curriculumonline.ie/senior-cycle/" target="_blank" rel="noopener">curriculumonline.ie</a> — specifications and prescribed material</li></ul></div>';
    $('#saveSet').onclick = async () => {
      await Store.saveProfile({ display_name: $('#nm').value.trim() || Store.profile.display_name, settings: { mocksDate: $('#mocks').value, lcDate: $('#lc').value, dailyGoal: Number($('#goal').value), theme: $('#theme').value } });
      applyTheme(); toast('Saved'); renderChrome('settings');
    };
    $('#export').onclick = () => { const blob = new Blob([Store.exportData()], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ardu-progress.json'; a.click(); };
    $('#reset').onclick = async () => { const b = $('#reset'); if (b.dataset.confirm) { await Store.resetProgress(); toast('Progress reset'); renderChrome('settings'); b.textContent = 'Reset progress'; delete b.dataset.confirm; } else { b.dataset.confirm = '1'; b.textContent = 'Tap again to confirm'; } };
    $('#out').onclick = async () => { await Store.signOut(); go('#/'); route(); };
  }

  // ---------------- Boot ----------------
  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', async () => {
    document.title = CFG.APP_NAME + ' — Leaving Cert Revision';
    $('#brandName').textContent = CFG.APP_NAME;
    view().innerHTML = '<p class="muted" style="text-align:center;margin-top:30vh">Loading…</p>';
    try { await Store.init(); } catch (e) { console.error(e); }
    if (Store.sb) Store.sb.auth.onAuthStateChange(async (evt, session) => { if (evt === 'SIGNED_IN' && session && !Store.user) { await Store._startCloud(session.user); route(); } });
    route();
    if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
  });
})();
