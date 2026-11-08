/* Learning engine: mastery, spaced review, marking-scheme-driven priority, XP, levels, streaks, badges, calendar stats. */
(function () {
  const DAY = 86400000;
  const dayKey = d => { const x = new Date(d); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
  const today = () => dayKey(Date.now());
  const daysBetween = (a, b) => Math.round((new Date(dayKey(b)) - new Date(dayKey(a))) / DAY);

  const Engine = {
    dayKey, today, daysBetween,

    level(subjectId) {
      const s = (Store.profile.settings.subjects || []).find(x => x.id === subjectId);
      return s ? s.level : 'H';
    },
    isSkipped(subjectId, sectionId) {
      return ((Store.profile.settings.skipped || {})[subjectId] || []).includes(sectionId);
    },
    sectionsFor(subjectId) {
      const subj = LC.content[subjectId]; if (!subj) return [];
      const lv = this.level(subjectId);
      return subj.sections.filter(s => s.levels.includes(lv));
    },
    lessonsFor(subjectId, sec) { const lv = this.level(subjectId); return sec.lessons.filter(l => !l.lv || l.lv === lv); },
    questionsFor(subjectId, sec) { const lv = this.level(subjectId); return sec.quiz.filter(q => !q.lv || q.lv === lv); },
    weight(subjectId, sec) { const w = sec.weight; return typeof w === 'number' ? w : (w[this.level(subjectId)] || 0); },

    /* Section state from the activity log */
    sectionState(subjectId, sec) {
      const acts = Store.activity.filter(a => a.subject === subjectId && a.section === sec.id);
      const lessons = this.lessonsFor(subjectId, sec);
      const doneLessons = new Set(acts.filter(a => a.kind === 'lesson').map(a => a.lesson));
      const L = lessons.length ? Math.min(1, [...doneLessons].filter(i => i < lessons.length).length / lessons.length) : 0;
      const quizzes = acts.filter(a => a.kind === 'quiz' && a.total > 0);
      const last3 = quizzes.slice(-3).reverse();
      const wts = [0.5, 0.3, 0.2];
      let Q = 0, wsum = 0;
      last3.forEach((q, i) => { Q += (q.score / q.total) * wts[i]; wsum += wts[i]; });
      Q = wsum ? Q / wsum : 0;
      const lastQuiz = quizzes.length ? quizzes[quizzes.length - 1] : null;
      const lastAny = acts.length ? acts[acts.length - 1].created_at : null;
      let M = quizzes.length ? 0.85 * Q + 0.15 * L : 0.25 * L;
      const age = lastQuiz ? daysBetween(lastQuiz.created_at, Date.now()) : null;
      if (age !== null && age > 7) M *= Math.max(0.5, 1 - (age - 7) / 60); // forgetting curve: mastery fades after a week
      const due = !!lastQuiz && age >= 10 && M < 0.85;
      let status = 'todo';
      if (acts.length) status = M >= 0.8 ? 'strong' : M >= 0.6 ? 'ok' : 'weak';
      return { lessonsDone: doneLessons, lessonPct: L, quizCount: quizzes.length, lastPct: lastQuiz ? lastQuiz.score / lastQuiz.total : null,
        bestPct: quizzes.reduce((m, q) => Math.max(m, q.score / q.total), 0), mastery: M, due, status, lastAny, age };
    },

    /* Priority = exam-mark weight × how often it is examined × how much you still have to gain (× review boost) */
    priority(subjectId, sec, st) {
      st = st || this.sectionState(subjectId, sec);
      if (sec.coursework) return 0;
      const w = this.weight(subjectId, sec);
      const f = sec.freq != null ? sec.freq : 8;
      return w * (0.6 + 0.4 * f / 10) * (1 - st.mastery) * (st.due ? 1.25 : 1);
    },
    whyText(subjectId, sec, st) {
      const parts = [];
      const w = this.weight(subjectId, sec);
      if (sec.coursework) parts.push('coursework ' + w + '%');
      else parts.push('≈' + (Math.round(w * 10) / 10) + '% of marks');
      if (sec.freq && !sec.coursework) parts.push('examined ' + sec.freq + '/10 yrs');
      if (st.due) parts.push('due for review');
      return parts.join(' · ');
    },

    subjectMastery(subjectId) {
      const secs = this.sectionsFor(subjectId).filter(s => !s.coursework && !this.isSkipped(subjectId, s.id));
      let tw = 0, m = 0, touched = 0;
      secs.forEach(s => { const w = this.weight(subjectId, s) || 1; const st = this.sectionState(subjectId, s); tw += w; m += w * st.mastery; if (st.status !== 'todo') touched++; });
      return { mastery: tw ? m / tw : 0, touched, total: secs.length };
    },

    upNext(limit) {
      const out = [];
      (Store.profile.settings.subjects || []).forEach(({ id }) => {
        if (!LC.content[id]) return;
        this.sectionsFor(id).forEach(sec => {
          if (sec.coursework || this.isSkipped(id, sec.id)) return;
          const st = this.sectionState(id, sec);
          out.push({ subjectId: id, sec, st, p: this.priority(id, sec, st) });
        });
      });
      // For "choose one" groups (Geography elective/option), only recommend one: the one already started, else the first.
      const seen = {};
      const filtered = out.filter(n => {
        if (!n.sec.choiceGroup) return true;
        const key = n.subjectId + '|' + n.sec.choiceGroup;
        const group = out.filter(m => m.subjectId === n.subjectId && m.sec.choiceGroup === n.sec.choiceGroup);
        const pick = group.find(m => m.st.status !== 'todo') || group[0];
        if (seen[key] || pick !== n) return false;
        return (seen[key] = true);
      });
      return filtered.sort((a, b) => b.p - a.p).slice(0, limit || 5);
    },

    /* XP & levels */
    totalXP() { return Store.activity.reduce((s, a) => s + (a.xp || 0), 0); },
    xpToday() { const t = today(); return Store.activity.filter(a => dayKey(a.created_at) === t).reduce((s, a) => s + (a.xp || 0), 0); },
    levelInfo(xp) {
      let lvl = 1; while (xp >= 50 * lvl * (lvl + 1)) lvl++;
      const floor = 50 * (lvl - 1) * lvl, ceil = 50 * lvl * (lvl + 1);
      return { level: lvl, into: xp - floor, span: ceil - floor, pct: (xp - floor) / (ceil - floor) };
    },
    quizXP(score, total) { return score * 5 + (score === total ? 20 : 0); },

    /* Streak = consecutive days with any activity, ending today (or yesterday if nothing yet today) */
    streak() {
      const days = new Set(Store.activity.map(a => dayKey(a.created_at)));
      let d = new Date(); if (!days.has(dayKey(d))) d = new Date(Date.now() - DAY);
      let n = 0; while (days.has(dayKey(d))) { n++; d = new Date(d.getTime() - DAY); }
      return n;
    },
    bestStreak() {
      const days = [...new Set(Store.activity.map(a => dayKey(a.created_at)))].sort();
      let best = 0, cur = 0, prev = null;
      days.forEach(k => { cur = prev && daysBetween(prev, k) === 1 ? cur + 1 : 1; best = Math.max(best, cur); prev = k; });
      return best;
    },

    /* Calendar stats: per day {count, xp, quizzes, avgPct} */
    byDay(subjectId) {
      const m = {};
      Store.activity.forEach(a => {
        if (subjectId && a.subject !== subjectId) return;
        const k = dayKey(a.created_at); const d = m[k] || (m[k] = { count: 0, xp: 0, quizzes: 0, pctSum: 0 });
        d.count++; d.xp += a.xp || 0;
        if (a.kind === 'quiz' && a.total) { d.quizzes++; d.pctSum += a.score / a.total; }
      });
      Object.values(m).forEach(d => { d.avgPct = d.quizzes ? d.pctSum / d.quizzes : null; });
      return m;
    },
    weekly(weeks) {
      const out = []; const now = new Date(); const dow = (now.getDay() + 6) % 7; // Monday start
      const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dow);
      for (let i = weeks - 1; i >= 0; i--) {
        const start = new Date(monday.getTime() - i * 7 * DAY), end = new Date(start.getTime() + 7 * DAY);
        const acts = Store.activity.filter(a => { const t = new Date(a.created_at); return t >= start && t < end; });
        const qz = acts.filter(a => a.kind === 'quiz' && a.total);
        out.push({ start, sessions: acts.length, xp: acts.reduce((s, a) => s + (a.xp || 0), 0), quizzes: qz.length,
          avgPct: qz.length ? qz.reduce((s, a) => s + a.score / a.total, 0) / qz.length : null });
      }
      return out;
    },

    badges() {
      const acts = Store.activity, quizzes = acts.filter(a => a.kind === 'quiz');
      const subjects = (Store.profile.settings.subjects || []).map(s => s.id).filter(id => LC.content[id]);
      const strongCount = subjects.reduce((n, id) => n + this.sectionsFor(id).filter(s => this.sectionState(id, s).status === 'strong').length, 0);
      const allStarted = subjects.some(id => { const secs = this.sectionsFor(id).filter(s => !s.coursework && !this.isSkipped(id, s.id)); return secs.length && secs.every(s => this.sectionState(id, s).status !== 'todo'); });
      const best = this.bestStreak(), xp = this.totalXP();
      const early = acts.some(a => new Date(a.created_at).getHours() < 8);
      return [
        { id: 'first', ico: '🌱', name: 'First step', desc: 'Finish your first lesson card', got: acts.some(a => a.kind === 'lesson') },
        { id: 'quiz1', ico: '✅', name: 'Checked in', desc: 'Complete a section check', got: quizzes.length > 0 },
        { id: 'perfect', ico: '💯', name: 'Full marks', desc: 'Score 100% on a check', got: quizzes.some(q => q.score === q.total) },
        { id: 'streak3', ico: '🔥', name: '3-day streak', desc: 'Revise 3 days in a row', got: best >= 3 },
        { id: 'streak7', ico: '⚡', name: 'Week warrior', desc: 'Revise 7 days in a row', got: best >= 7 },
        { id: 'streak30', ico: '🏔', name: 'Unstoppable', desc: '30-day streak', got: best >= 30 },
        { id: 'quiz10', ico: '🎯', name: 'Ten checks', desc: 'Complete 10 section checks', got: quizzes.length >= 10 },
        { id: 'quiz50', ico: '🏹', name: 'Fifty checks', desc: 'Complete 50 section checks', got: quizzes.length >= 50 },
        { id: 'strong5', ico: '💪', name: 'Solid ground', desc: '5 sections rated strong', got: strongCount >= 5 },
        { id: 'strong20', ico: '🧠', name: 'Deep roots', desc: '20 sections rated strong', got: strongCount >= 20 },
        { id: 'cover', ico: '🗺', name: 'Full map', desc: 'Start every section of a subject', got: allStarted },
        { id: 'xp1000', ico: '⭐', name: '1,000 XP', desc: 'Earn 1,000 XP', got: xp >= 1000 },
        { id: 'early', ico: '🌅', name: 'Early bird', desc: 'Revise before 8am', got: early }
      ];
    }
  };
  window.Engine = Engine;
})();
