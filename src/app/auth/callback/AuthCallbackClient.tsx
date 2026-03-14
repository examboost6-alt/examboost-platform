"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';

export default function AuthCallbackClient() {
    const router = useRouter();
    const [message, setMessage] = useState('Completing sign in...');

    useEffect(() => {
        const run = async () => {
            const supabase = getSupabaseClient();
            if (!supabase) {
                setMessage('Auth is not configured.');
                return;
            }

            try {
                const url = new URL(window.location.href);
                const code = url.searchParams.get('code');

                if (code) {
                    const { error } = await supabase.auth.exchangeCodeForSession(code);
                    if (error) {
                        setMessage(error.message);
                        return;
                    }
                } else {
                    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
                    const access_token = hashParams.get('access_token');
                    const refresh_token = hashParams.get('refresh_token');

                    if (access_token && refresh_token) {
                        const { error } = await supabase.auth.setSession({ access_token, refresh_token });
                        if (error) {
                            setMessage(error.message);
                            return;
                        }
                    }
                }

                const { data } = await supabase.auth.getSession();
                if (!data.session) {
                    setMessage('Unable to sign you in. Please log in again.');
                    setTimeout(() => router.replace('/login'), 500);
                    return;
                }

                router.replace('/onboarding');
            } catch {
                setMessage('Something went wrong. Please try again.');
            }
        };

        run();
    }, [router]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-10 text-center">
                <div className="text-lg font-black text-slate-900 dark:text-white">{message}</div>
                <div className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400">Please wait a moment.</div>
            </div>
        </div>
    );
}
