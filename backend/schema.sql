-- FlagIt Database Schema

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users Table (extends Supabase auth.users or standalone)
create table public.users (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  role text default 'analyst', -- 'admin', 'analyst', 'viewer'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.users enable row level security;

-- Reports Table (Misinformation Cases)
create table public.reports (
  id uuid default uuid_generate_v4() primary key,
  url text not null,
  risk_level text check (risk_level in ('HIGH', 'MEDIUM', 'LOW')),
  verdict text,
  reasons text,
  status text default 'pending', -- 'pending', 'verified', 'archived'
  analyst_id uuid references public.users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tags Table
create table public.tags (
  id uuid default uuid_generate_v4() primary key,
  name text unique not null,
  color text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Report Tags (Many-to-Many)add
create table public.report_tags (
  report_id uuid references public.reports(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,
  primary key (report_id, tag_id)
);

-- Comments Table
create table public.comments (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references public.reports(id) on delete cascade,
  user_id uuid references public.users(id),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Attachments Table
create table public.attachments (
  id uuid default uuid_generate_v4() primary key,
  report_id uuid references public.reports(id) on delete cascade,
  file_url text not null,
  file_type text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Basic RLS Policies (Open for demo, secure for prod)
create policy "Public read access" on public.reports for select using (true);
create policy "Authenticated create access" on public.reports for insert with check (auth.role() = 'authenticated');
create policy "Public read users" on public.users for select using (true);

-- Insert some default tags
insert into public.tags (name, color) values 
('Politics', '#EF4444'),
('Health', '#10B981'),
('Deepfake', '#8B5CF6'),
('Propaganda', '#F59E0B')
on conflict do nothing;
