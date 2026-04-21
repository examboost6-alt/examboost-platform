'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';

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
                // Get basic device info (Client side is fine, but we will enhance on server)
                const ua = window.navigator.userAgent;
                let deviceType = 'Desktop';
                if (/Mobi|Android/i.test(ua)) deviceType = 'Mobile';
                if (/Tablet|iPad/i.test(ua)) deviceType = 'Tablet';
                
                let browser = 'Other';
                if (ua.includes('Chrome') || ua.includes('CriOS')) browser = 'Chrome';
                else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
                else if (ua.includes('Firefox') || ua.includes('FxiOS')) browser = 'Firefox';
                else if (ua.includes('Edg')) browser = 'Edge';
                else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

                let os = 'Other';
                if (ua.includes('Win')) os = 'Windows';
                else if (ua.includes('Mac')) os = 'macOS';
                else if (ua.includes('Linux') && !ua.includes('Android')) os = 'Linux';
                else if (ua.includes('Android')) os = 'Android';
                else if (ua.includes('iOS') || ua.match(/iPhone|iPad|iPod/i)) os = 'iOS';

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
