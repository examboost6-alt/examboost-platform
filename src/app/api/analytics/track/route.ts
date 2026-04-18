import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase with service role or anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { path, device_type, browser, os, user_id, city: clientCity, country: clientCountry } = body;

        if (!path) {
            return NextResponse.json({ error: 'Path is required' }, { status: 400 });
        }

        // 1. Get User ID if authenticated via headers (Next.js server side auth check)
        const authHeader = req.headers.get('authorization');
        let userId = user_id || null; // Use body's user_id as base
        if (authHeader) {
            const { data: { user } } = await supabase.auth.getUser(authHeader.replace('Bearer ', ''));
            if (user) userId = user.id;
        }

        // 2. Approximate Location via Request IP & Headers
        // In production on Vercel, x-real-ip and x-vercel-ip-* headers are available.
        const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || '127.0.0.1';
        const city = clientCity || req.headers.get('x-vercel-ip-city') || 'Unknown';
        const region = req.headers.get('x-vercel-ip-country-region') || 'Unknown';
        const country = clientCountry || req.headers.get('x-vercel-ip-country') || 'Unknown';

        // 3. Insert into Supabase
        const { error } = await supabase.from('page_views').insert({
            path,
            device_type: device_type || 'Desktop',
            browser: browser || 'Other',
            os: os || 'Other',
            city,
            region,
            country,
            user_id: userId
        });

        if (error) {
            console.error('Supabase track error:', error);
            // Allow failing silently to not disrupt UX
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Analytics track API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
