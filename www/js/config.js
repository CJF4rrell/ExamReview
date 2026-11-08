/* App configuration.
 * To turn on cloud accounts, create a free Supabase project, run supabase/schema.sql in its SQL editor,
 * then paste the Project URL and the anon (public) key below. The anon key is safe to publish:
 * Row Level Security in schema.sql ensures each student can only read and write their own rows.
 * Leave them blank to run in "local mode" (profiles and progress stored on this device only).
 */
window.APP_CONFIG = {
  APP_NAME: 'Ardú',
  TAGLINE: 'Leaving Cert revision, one small win at a time',
  SUPABASE_URL: '',
  SUPABASE_ANON_KEY: '',
  ENABLE_GOOGLE_LOGIN: false, // set true after enabling the Google provider in Supabase Auth settings

  // Defaults — students can change these in Settings to match their school's mock timetable.
  DEFAULT_MOCKS_DATE: '2027-02-08',
  DEFAULT_LC_DATE: '2027-06-02',
  DEFAULT_DAILY_XP_GOAL: 60,
  QUIZ_LENGTH: 6
};
