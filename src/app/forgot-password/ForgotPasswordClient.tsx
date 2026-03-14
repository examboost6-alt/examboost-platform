"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { getSupabaseClient } from '@/lib/supabaseClient';

export default function ForgotPasswordClient() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const supabase = getSupabaseClient();
        if (!supabase) {
            setError('Auth is not configured. Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.');
            return;
        }

        setLoading(true);

        const redirectTo = `${window.location.origin}/reset-password`;
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });

        setLoading(false);

        if (resetError) {
            setError(resetError.message);
            return;
        }

        setSuccess(`If an account exists for ${email}, you’ll receive a password reset email shortly.`);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden p-8 sm:p-12 mb-10 mt-16 md:mt-24">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary dark:hover:text-accent transition-colors mb-8 group w-fit">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Reset your password</h1>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-10">
                    Enter your email and we’ll send a secure reset link.
                </p>

                <form className="space-y-6" onSubmit={onSubmit}>
                    {error ? (
                        <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 font-semibold text-sm">
                            {error}
                        </div>
                    ) : null}

                    {success ? (
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3 font-semibold text-sm">
                            {success}
                        </div>
                    ) : null}

                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="student@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-secondary disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                    >
                        {loading ? 'Sending...' : 'Send reset link'} <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center font-medium text-slate-600 dark:text-slate-400">
                    Remembered your password?{' '}
                    <Link href="/login" className="text-primary dark:text-accent hover:underline font-bold">
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
}
