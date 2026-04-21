import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

export async function GET(req: Request) {
    try {
        // 1. Fetch profiles
        const { data: profiles, error: pError } = await supabaseAdmin
            .from("profiles")
            .select("id, full_name, phone, dob, state, target_exam, preparation_mode, admission_completed, photo_path, created_at")
            .order("created_at", { ascending: false })
            .limit(1000);

        if (pError) throw pError;

        // 2. Fetch page_views for both registered and anonymous
        // To avoid bringing down the database, we limit to the most recent 20000 page views
        const { data: pageViews, error: vError } = await supabaseAdmin
            .from("page_views")
            .select("id, path, created_at, city, country, region, os, browser, device_type, user_id")
            .order("created_at", { ascending: false })
            .limit(20000);

        if (vError) throw vError;

        // 3. Process anonymous visitors
        const anonymousMap: Record<string, any> = {};
        const profileViewMap: Record<string, number> = {};

        pageViews.forEach((pv: any) => {
            if (pv.user_id) {
                // Count for registered users
                profileViewMap[pv.user_id] = (profileViewMap[pv.user_id] || 0) + 1;
            } else {
                // Determine accurate fingerprint utilizing the visitor_id that we embedded in `region`
                // region format: "RegionName|visitor_xyz"
                const parts = (pv.region || '').split('|');
                let extractedVisitorId = parts.length > 1 ? parts[1] : null;
                const actualRegion = parts[0] || 'Unknown';

                // Ensure a unique key
                const fp = extractedVisitorId 
                           ? `Guest-${extractedVisitorId.replace('visitor_', '').substring(0, 8)}` 
                           : `${pv.city || 'Unknown'}-${pv.browser || 'Unknown'}-${pv.os || 'Unknown'}-${pv.device_type || 'Desktop'}`;

                if (!anonymousMap[fp]) {
                    anonymousMap[fp] = {
                        fingerprint: fp,
                        city: pv.city || 'Unknown',
                        country: pv.country || 'Unknown',
                        os: pv.os || 'Unknown',
                        browser: pv.browser || 'Unknown',
                        device_type: pv.device_type || 'Desktop',
                        views: 0,
                        lastActive: pv.created_at,
                        paths: []
                    };
                }
                anonymousMap[fp].views++;
                anonymousMap[fp].paths.push({ path: pv.path, timestamp: pv.created_at });
            }
        });

        // Sort anonymous visitors by latest visit descending
        const anonymousVisitors = Object.values(anonymousMap).map(v => {
            // Sort their paths descending
            v.paths.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            return v;
        }).sort((a: any, b: any) => new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime());

        // Enqueue profile total visits
        const enrichedProfiles = (profiles || []).map((p: any) => ({
            ...p,
            total_visits: profileViewMap[p.id] || 0
        }));

        return NextResponse.json({
            success: true,
            profiles: enrichedProfiles,
            anonymousVisitors
        });

    } catch (e: any) {
        console.error("Error fetching students data:", e);
        return NextResponse.json({ success: false, error: e.message }, { status: 500 });
    }
}
