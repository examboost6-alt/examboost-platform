"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ArrowRight, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';

function getFriendlyAuthError(rawError: string | null | undefined): string | null {
    if (!rawError) return null;
    const lower = rawError.toLowerCase();

    if (lower.includes('password should be at least') || lower.includes('weak password')) {
        return 'Password is too short. Please choose a password with at least 8 characters for account security.';
    }
    if (lower.includes('failed to fetch') || lower.includes('network') || lower.includes('connection')) {
        return 'Internet connection error. Please check your Wi-Fi or mobile data and try again.';
    }
    return rawError;
}

export default function ResetPasswordClient() {
    const router = useRouter();
    const [ready, setReady] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        const supabase = getSupabaseClient();
        if (!supabase) {
            setError('Auth service is temporarily unavailable. Please refresh the page.');
            return;
        }

        const { data: sub } = supabase.auth.onAuthStateChange((event: string) => {
            if (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
                setReady(true);
            }
        });

        supabase.auth.getSession().then(({ data }: { data: any }) => {
            if (data.session) setReady(true);
        });

        return () => {
            sub.subscription.unsubscribe();
        };
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const supabase = getSupabaseClient();
        if (!supabase) {
            setError('Auth service is temporarily unavailable. Please refresh the page.');
            return;
        }

        if (!ready) {
            setError('The password reset token is expired or invalid. Please request a new password reset link.');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long for account security.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match. Please retype your new password accurately in both fields.');
            return;
        }

        setLoading(true);
        const { error: updateError } = await supabase.auth.updateUser({ password });
        setLoading(false);

        if (updateError) {
            setError(getFriendlyAuthError(updateError.message));
            return;
        }

        setSuccess('Password updated successfully! Redirecting you to login...');
        setTimeout(() => {
            router.push('/login');
        }, 1200);
    };

    return (
        <div className="w-full min-h-screen bg-slate-50 dark:bg-[#060D1A] flex items-center justify-center p-4 sm:p-6 font-sans">
            <div className="w-full max-w-md bg-white dark:bg-[#0B1120] rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden p-6 sm:p-10 my-auto">
                <div className="flex items-center justify-between w-full mb-6">
                    <Link href="/" className="inline-block">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-7 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-7 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/login" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#F97316] dark:hover:text-orange-400 transition-colors group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Login
                    </Link>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Set New Password</h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-6">
                    Choose a strong password you don’t use elsewhere.
                </p>

                <form className="space-y-4" onSubmit={onSubmit}>
                    <AnimatePresence mode="popLayout">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="rounded-xl border border-red-200/80 dark:border-red-500/30 bg-red-50/90 dark:bg-red-500/10 p-3.5 flex gap-3 items-start shadow-sm"
                            >
                                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                <div className="text-xs sm:text-sm font-medium text-red-800 dark:text-red-200 leading-snug">
                                    {error}
                                </div>
                            </motion.div>
                        )}
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="rounded-xl border border-emerald-200/80 dark:border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-500/10 p-3.5 flex gap-3 items-center font-medium text-xs sm:text-sm text-emerald-800 dark:text-emerald-200"
                            >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <div>{success}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="space-y-1.5">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">New Password <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 rounded-xl outline-none text-sm text-slate-900 dark:text-white font-medium pr-11"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-1"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Confirm New Password <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 rounded-xl outline-none text-sm text-slate-900 dark:text-white font-medium pr-11"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors p-1"
                            >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                    >
                        {loading ? 'Updating Password...' : 'Save New Password'} <ArrowRight className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}
