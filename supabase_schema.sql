-- Create Profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  name text not null,
  handle text not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Profiles
alter table public.profiles enable row level security;

-- Create Posts table
create table public.posts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  content text not null,
  media_type text, -- 'movie', 'book', 'tv'
  media_title text,
  media_image_src text,
  likes integer default 0,
  reposts integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Posts
alter table public.posts enable row level security;

-- Create Comments table
create table public.comments (
  id uuid default gen_random_uuid() primary key,
  post_id uuid references public.posts(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for Comments
alter table public.comments enable row level security;

-- Create Favorites table
create table public.favorites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  item_id text not null, -- External API ID
  item_type text not null, -- 'movie', 'tv', 'book'
  title text not null,
  poster_path text,
  overview text,
  release_date text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, item_id, item_type)
);

-- Enable RLS for Favorites
alter table public.favorites enable row level security;

-- Policies (Public Read / Authenticated Insert/Update)
-- For simplicity in this demo, we allow public read/write if not using strict auth yet.
-- Ideally:
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

create policy "Posts are viewable by everyone." on public.posts for select using (true);
create policy "Authenticated users can insert posts." on public.posts for insert with check (auth.role() = 'authenticated');

create policy "Comments are viewable by everyone." on public.comments for select using (true);
create policy "Authenticated users can insert comments." on public.comments for insert with check (auth.role() = 'authenticated');

create policy "Favorites are viewable by everyone." on public.favorites for select using (true);
create policy "Users can insert their own favorites." on public.favorites for insert with check (auth.uid() = user_id);
create policy "Users can delete their own favorites." on public.favorites for delete using (auth.uid() = user_id);

-- Insert a dummy user for 'guest' usage if needed, or we rely on Auth.
-- For this demo, let's assume we will use a specific UUID for the current user if not logged in, 
-- or better, we will implement a simple "Sign In" that creates a user.
