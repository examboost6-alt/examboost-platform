"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // We only want to track initial visits per device or significant path changes
    // But to keep it simple and fulfill "1 visit per device", we'll generate a 
    // unique device fingerprint using localStorage and send it to our API.
    const trackVisit = async () => {
      // Don't track admin pages to not skew analytics
      if (pathname?.startsWith("/admin")) return;

      try {
         // Get or generate device ID cookie/localstorage
         let deviceId = localStorage.getItem("dev_fp_id");
         if (!deviceId) {
            deviceId = "dev_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
            localStorage.setItem("dev_fp_id", deviceId);
         }

         const supabase = getSupabaseClient();
         let userId = null;
         
         if (supabase) {
             const { data: auth } = await supabase.auth.getSession();
             if (auth?.session?.user) {
                 userId = auth.session.user.id;
             }
         }

         // Send tracking payload
         await fetch("/api/track-visit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               deviceId,
               userId,
               path: pathname,
               userAgent: navigator.userAgent
            }),
         });
      } catch (e) {
         // Silent fail - analytics shouldn't break the app
         console.warn("Analytics tracking bypassed");
      }
    };

    trackVisit();
  }, [pathname]);

  return null;
}
