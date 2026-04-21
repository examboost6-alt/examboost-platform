import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase with service role or anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { path, device_type, browser, os, user_id, visitor_id, client_tz } = body;

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

        // 2. Server-Side Location Tracking (Immune to Client AdBlockers)
        let city = 'Unknown';
        let country = 'Unknown';
        let region = 'Unknown';

        // Get actual client IP
        const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || '';
        const ipToTrace = (ip && ip.split(',')[0].trim()) || null;
        
        let vercelCity = req.headers.get('x-vercel-ip-city');
        let vercelCountry = req.headers.get('x-vercel-ip-country');
        let vercelRegion = req.headers.get('x-vercel-ip-country-region');

        if (vercelCity) city = decodeURIComponent(vercelCity);
        if (vercelCountry) country = decodeURIComponent(vercelCountry);
        if (vercelRegion) region = decodeURIComponent(vercelRegion);

        // If Vercel headers missed it, do a quick, reliable fallback server-side
        if (city === 'Unknown' || country === 'Unknown') {
            try {
                if (ipToTrace && ipToTrace !== '127.0.0.1' && ipToTrace !== '::1') {
                    const geoRes = await fetch(`http://ip-api.com/json/${ipToTrace}?fields=status,country,regionName,city`, { cache: 'no-store' });
                    if (geoRes.ok) {
                        const geoData = await geoRes.json();
                        if (geoData.status === 'success') {
                            if (geoData.city) city = geoData.city;
                            if (geoData.country) country = geoData.country;
                            if (geoData.regionName) region = geoData.regionName;
                        }
                    }
                } else if (client_tz) {
                    // Absolute last resort: timezone heuristics
                    const parts = client_tz.split('/');
                    if (parts.length >= 2) {
                        city = parts[parts.length - 1].replace('_', ' ');
                        country = parts[0];
                    }
                }
            } catch (err) {
                console.error("Server-side IP location fetch failed.");
            }
        }

        const safeVisitorId = visitor_id ? `visitor_${visitor_id}` : 'unknown';
        const storableRegion = `${region}|${safeVisitorId}`;

        // 3. Insert into Supabase
        const { error } = await supabase.from('page_views').insert({
            path,
            device_type: device_type || 'Desktop',
            browser: browser || 'Other',
            os: os || 'Other',
            city,
            region: storableRegion,
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
