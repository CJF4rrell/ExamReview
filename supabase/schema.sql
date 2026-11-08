-- Ardú — Supabase schema. Paste into Supabase → SQL Editor → Run.
-- Each student can only see and change their own rows (Row Level Security).

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.activity (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  subject text not null,
  section text not null,
  kind text not null check (kind in ('lesson', 'quiz', 'bonus')),
  lesson int,
  score int,
  total int,
  xp int not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists activity_user_time on public.activity (user_id, created_at);

alter table public.profiles enable row level security;
alter table public.activity enable row level security;

drop policy if exists "own profile" on public.profiles;
create policy "own profile" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "own activity" on public.activity;
create policy "own activity" on public.activity
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
