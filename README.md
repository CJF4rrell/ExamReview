# Ardú — Leaving Cert Revision

A gamified revision app for the Irish Leaving Certificate. It's built for the stretch from the Christmas exams through the Mocks to the June exams.

- **Bite-sized lessons**: each subject is split into exam sections, and each section into short concept cards.
- **Section checks**: a quick quiz at the end of every section. Answers are explained, and every result is logged.
- **Marking-scheme-driven priority**: an "Up next" list ranks sections by *share of exam marks × how often the topic is examined × how much you still have to gain*. Mastery fades if you don't come back to a section (spaced review).
- **Progress tracking**: XP, levels, daily goals, streaks and badges. There's a calendar heat map (activity or performance) running from your first session to the Leaving Cert, week-over-week XP and score charts, and a coverage map of every section.
- **Exam maps**: each subject shows how its marks are split (papers, sections, coursework) at Higher and Ordinary Level, along with what the marking schemes reward.

## Content (v1)

| Subject | Levels | Notes |
|---|---|---|
| English | H / O | 2027 prescribed material: *Othello*, the 8 HL poets, comparative modes, PCLM |
| Irish | H / O | Oral (40%), Sraith Pictiúr, Cluastuiscint, Ceapadóireacht, Léamhthuiscint, grammar |
| Mathematics | H / O | 15 topics across Paper 1 and Paper 2, using the post-2022 choice structure |
| Biology | H / O | **New specification (first exam 2027)**: 40% investigation + 300-mark written paper |
| Business | H / O | **New specification (first exam 2027)**: 40% Business Alive study + 300-mark written paper |
| Geography | H / O | Short questions, physical, regional, electives, HL options, and the 20% Geographical Investigation |

Content totals 6 subjects, ~80 sections, 230 lesson cards and 300+ questions. The other LC subjects appear as "coming soon", with links to the SEC archive. To add a subject, create `www/data/subjects/<id>.js` following the existing files and add a `<script>` tag in `index.html`.

**Sources:** SEC papers, marking schemes and sample papers ([examinations.ie archive](https://www.examinations.ie/exammaterialarchive/)), the *Prescribed Material for LC English 2027*, and the NCCA specifications for Biology and Business on [curriculumonline.ie](https://www.curriculumonline.ie/). The weights and "examined N/10 years" figures are estimates taken from recent papers. Teachers should review the content before students rely on it.

## Run locally

```bash
npm run serve        # http://localhost:8080
```

There's no build step. The app is plain HTML, CSS and JS in `www/`.

## Accounts (Supabase)

Without Supabase keys, the app runs in **local mode**: each profile and its progress are stored in that browser only. To give students real logins that sync across phone and laptop:

1. Create a free project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run `supabase/schema.sql`. This creates the tables and the row-level security rules.
3. Under **Authentication → URL Configuration**, add your GitHub Pages URL as the Site URL and as a Redirect URL.
4. Copy the **Project URL** and **anon public key** (Project Settings → API) into `www/js/config.js`.
5. Optional: enable the Google provider and set `ENABLE_GOOGLE_LOGIN: true`.

The anon key is safe to commit. Row-level security means each student can only read and write their own rows.

## Hosting (GitHub Pages)

`.github/workflows/pages.yml` deploys the `www/` folder on every push to `main`. In the repo, go to **Settings → Pages** and set **Source = GitHub Actions**.

## iOS & Android (Capacitor)

The app is a static web app with a manifest and a service worker, so it already installs as a PWA ("Add to Home Screen"). To build native apps:

```bash
npm install
npx cap add android      # needs Android Studio
npx cap add ios          # needs a Mac with Xcode
npx cap sync
npx cap open android     # or: npx cap open ios
```

Notes for native builds: email/password login works as-is. Magic links and Google sign-in need deep-link redirect URLs (`ie.ardu.revision://`) added in Supabase. The layout already handles safe-area insets for notched phones.

## Structure

```
www/
  index.html            app shell
  css/app.css           styles (light/dark, mobile-first)
  js/config.js          settings + Supabase keys
  js/store.js           data layer (Supabase or local, offline queue)
  js/engine.js          mastery, priority, XP, streaks, badges, stats
  js/app.js             router + views
  data/catalogue.js     all LC subjects
  data/subjects/*.js    subject content (exam maps, sections, lessons, quizzes)
supabase/schema.sql     database + security policies
capacitor.config.json   mobile packaging
```
