-- Run this script in your Supabase SQL Editor to set up tracking tables for the Admin Analytics Dashboard

-- 1. Create or Update user_tests table
CREATE TABLE IF NOT EXISTS public.user_tests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    test_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    correct INTEGER NOT NULL,
    incorrect INTEGER NOT NULL,
    unattempted INTEGER NOT NULL,
    time_taken INTEGER NOT NULL, -- in seconds
    responses JSONB
);

-- Protect user_tests via RLS
ALTER TABLE public.user_tests ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own tests
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'user_tests' AND policyname = 'Enable insert for authenticated users only'
    ) THEN
        CREATE POLICY "Enable insert for authenticated users only" ON public.user_tests
            FOR INSERT WITH CHECK (auth.role() = 'authenticated');
    END IF;
END $$;

-- Allow users to read their own tests
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'user_tests' AND policyname = 'Enable read for users based on user_id'
    ) THEN
        CREATE POLICY "Enable read for users based on user_id" ON public.user_tests
            FOR SELECT USING (auth.uid() = user_id);
    END IF;
END $$;

-- Allow admin full access (assuming admin checks are handled, giving unrestricted select for dashboard)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'user_tests' AND policyname = 'Enable read for all authenticated users (Admin)'
    ) THEN
        CREATE POLICY "Enable read for all authenticated users (Admin)" ON public.user_tests
            FOR SELECT USING (auth.role() = 'authenticated');
    END IF;
END $$;


-- 2. Create page_views table for web traffic analytics
CREATE TABLE IF NOT EXISTS public.page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    path TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL, -- Nullable if visitor is not logged in
    device_type TEXT, -- 'Desktop', 'Mobile', 'Tablet'
    os TEXT,
    browser TEXT,
    city TEXT,
    region TEXT,
    country TEXT
);

-- Enable RLS for page views
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anonymous and authenticated insertions for page views
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'page_views' AND policyname = 'Enable insert access for all users'
    ) THEN
        CREATE POLICY "Enable insert access for all users" ON public.page_views
            FOR INSERT WITH CHECK (true);
    END IF;
END $$;

-- Allow read for authenticated (Admin)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'page_views' AND policyname = 'Enable read access for authenticated users'
    ) THEN
        CREATE POLICY "Enable read access for authenticated users" ON public.page_views
            FOR SELECT USING (auth.role() = 'authenticated');
    END IF;
END $$;

-- 3. Create contact_messages table to store messages from the public contact page
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'Unread' -- 'Unread', 'Replied', 'Closed'
);

-- Enable RLS for contact messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Note: We do NOT need to add a policy for anonymous users to insert here 
-- because our Next.js /api/contact endpoint securely handles insertions using the Supabase Service Role Key.

-- Allow read/update access for authenticated users (Admins)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'contact_messages' AND policyname = 'Enable access for authenticated users (Admin)'
    ) THEN
        CREATE POLICY "Enable access for authenticated users (Admin)" ON public.contact_messages
            FOR ALL USING (auth.role() = 'authenticated');
    END IF;
END $$;
