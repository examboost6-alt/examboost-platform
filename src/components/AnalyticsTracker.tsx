'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;

        // Skip tracking for admin paths to avoid polluting user stats
        if (pathname.startsWith('/admin')) return;

        const trackView = async () => {
            try {
                // Get basic device info
                const ua = window.navigator.userAgent;
                let deviceType = 'Desktop';
                if (/Mobi|Android/i.test(ua)) deviceType = 'Mobile';
                if (/Tablet|iPad/i.test(ua)) deviceType = 'Tablet';
                
                let browser = 'Other';
                if (ua.includes('Chrome')) browser = 'Chrome';
                else if (ua.includes('Safari')) browser = 'Safari';
                else if (ua.includes('Firefox')) browser = 'Firefox';
                else if (ua.includes('Edge')) browser = 'Edge';

                let os = 'Other';
                if (ua.includes('Win')) os = 'Windows';
                else if (ua.includes('Mac')) os = 'macOS';
                else if (ua.includes('Linux')) os = 'Linux';
                else if (ua.includes('Android')) os = 'Android';
                else if (ua.includes('iOS') || ua.includes('iPhone')) os = 'iOS';

                // Get User ID
                // Get User ID carefully to not block tracking for anonymous visits
                let userId = null;
                try {
                    const supabase = getSupabaseClient();
                    if (supabase) {
                        const { data } = await supabase.auth.getSession();
                        userId = data?.session?.user?.id || null;
                    }
                } catch (authErr) {
                    console.log("Analytics Auth Check Skipped: Tracking as Anonymous");
                }

                // Fetch Geo IP info gracefully with robust 3-tier cascading fallback
                let geoCity = 'Unknown';
                let geoCountry = 'Unknown';
                try {
                    // Tier 1: Try secure IP resolution API (geojs.io)
                    const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
                    if (geoRes.ok) {
                        const geoData = await geoRes.json();
                        geoCity = geoData.city || 'Unknown';
                        geoCountry = geoData.country || 'Unknown';
                    } else {
                        throw new Error("Tier 1 failed");
                    }
                } catch (e1) {
                    try {
                        // Tier 2: Trial fallback (ipapi.co)
                        const fbRes = await fetch('https://ipapi.co/json/');
                        if (fbRes.ok) {
                            const fbData = await fbRes.json();
                            geoCity = fbData.city || 'Unknown';
                            geoCountry = fbData.country_name || 'Unknown';
                        } else {
                            throw new Error("Tier 2 failed");
                        }
                    } catch (e2) {
                        // Tier 3: Absolute local offline fallback using timezone heuristics
                        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        if (tz) {
                            const parts = tz.split('/');
                            if (parts.length >= 2) {
                                geoCity = parts[parts.length - 1].replace('_', ' ');
                                geoCountry = parts[0];
                            }
                        }
                    }
                }

                // Hit our custom API route to insert into Supabase securely
                await fetch('/api/analytics/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        path: pathname,
                        device_type: deviceType,
                        browser,
                        os,
                        user_id: userId,
                        city: geoCity,
                        country: geoCountry
                    })
                });
            } catch (err) {
                console.error("Failed to track analytics:", err);
            }
        };

        // Adding a slight delay so it doesn't block critical rendering
        const timer = setTimeout(() => {
            trackView();
        }, 1000);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null; // Invisible component
}
