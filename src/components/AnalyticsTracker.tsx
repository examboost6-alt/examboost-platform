'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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

                // Hit our custom API route to insert into Supabase securely
                await fetch('/api/analytics/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        path: pathname,
                        device_type: deviceType,
                        browser,
                        os
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
