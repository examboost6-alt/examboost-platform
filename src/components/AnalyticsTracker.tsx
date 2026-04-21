'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';
import UAParser from 'ua-parser-js';

function getOrCreateVisitorId() {
    if (typeof window === 'undefined') return 'unknown-visitor';
    let visitorId = localStorage.getItem('examboost_visitor_id');
    if (!visitorId) {
        // Generate a random 16-char string
        visitorId = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
        localStorage.setItem('examboost_visitor_id', visitorId);
    }
    return visitorId;
}

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;

        // Skip tracking for admin paths to avoid polluting user stats
        if (pathname.startsWith('/admin')) return;

        const trackView = async () => {
            try {
                // Get extremely exact device info using UAParser
                const parser = new UAParser();
                const result = parser.getResult();
                
                const deviceType = result.device.type ? (result.device.type.charAt(0).toUpperCase() + result.device.type.slice(1)) : 'Desktop';
                const browser = result.browser.name ? `${result.browser.name} ${result.browser.version?.split('.')[0] || ''}`.trim() : 'Other';
                const os = result.os.name ? `${result.os.name} ${result.os.version || ''}`.trim() : 'Other';

                // Get User ID
                let userId = null;
                try {
                    const supabase = getSupabaseClient();
                    if (supabase) {
                        const { data } = await supabase.auth.getSession();
                        userId = data?.session?.user?.id || null;
                    }
                } catch (authErr) {
                    // silently handle
                }

                const visitorId = getOrCreateVisitorId();

                // Advanced location tracking is now moved to the server-side to avoid Adblockers!
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
                        visitor_id: visitorId,
                        client_tz: Intl.DateTimeFormat().resolvedOptions().timeZone
                    })
                });
            } catch (err) {
                console.error("Failed to track analytics:", err);
            }
        };

        // Adding a slight delay so it doesn't block critical rendering
        const timer = setTimeout(() => {
            trackView();
        }, 800);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null; // Invisible component
}
