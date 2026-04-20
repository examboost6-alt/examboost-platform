"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, BellOff } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function LiveVisitorNotifier() {
  const [enabled, setEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play a "pop/ding" sound synthetically using AudioContext
  const playNotificationSound = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      // Start at a high frequency (ping)
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);

      // Attack / Decay for a bell-like "ding"
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.error("Could not play notification sound", e);
    }
  };

  const handleToggle = async () => {
    if (!enabled) {
      // Prompt for notifications
      if ("Notification" in window) {
        const perm = await Notification.requestPermission();
        if (perm === "granted") {
          setEnabled(true);
          playNotificationSound(); // Immediate feedback
          new Notification("Notifications Enabled", {
            body: "You will now receive alerts for live web traffic.",
            icon: '/logo.png'
          });
        } else {
          alert("Please allow notification permissions in your browser to use this feature.");
        }
      } else {
        alert("Your browser does not support Desktop Notifications.");
      }
    } else {
      setEnabled(false);
    }
  };

  useEffect(() => {
    if (!enabled) return;

    const supabase = getSupabaseClient();
    if (!supabase) return;

    const channel = supabase
      .channel('live-visitors')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'page_views' },
        (payload: any) => {
          const newVisit = payload.new;
          
          playNotificationSound();

          if ("Notification" in window && Notification.permission === "granted") {
            const loc = newVisit.city ? `from ${newVisit.city}, ${newVisit.country}` : 'Unknown Location';
            const device = newVisit.device_type || 'Device';
            
            new Notification(`New Visitor! 🚀`, {
              body: `A visitor ${loc} using a ${device} just landed on: ${newVisit.path}`,
              icon: '/logo.png',
              silent: false, // We usually handle sound ourselves using the AudioContext
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [enabled]);

  return (
    <button 
      onClick={handleToggle}
      aria-label="Notifications" 
      title={enabled ? "Disable Live Traffic Notifications" : "Enable Live Traffic Notifications"}
      className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
    >
      {enabled ? <Bell className="w-5 h-5 text-emerald-500" /> : <BellOff className="w-5 h-5" />}
      {enabled && <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse" />}
    </button>
  );
}
