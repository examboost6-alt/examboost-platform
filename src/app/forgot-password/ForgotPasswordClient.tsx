"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, ShieldCheck, ArrowRight, BookOpen, ChevronLeft, AlertCircle, CheckCircle2 } from 'lucide-react';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';

export default function ForgotPasswordClient() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address (e.g. name@example.com).');
            return;
        }

        const supabase = getSupabaseClient();
        if (!supabase) {
            setError('Auth is not configured. Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.');
            return;
        }

        setLoading(true);

        try {
            // Check if email exists first
            const checkRes = await fetch('/api/auth/check-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const checkData = await checkRes.json();

            if (!checkRes.ok || checkData.error) {
                setError('Failed to verify email. Please try again later.');
                setLoading(false);
                return;
            }

            if (!checkData.exists) {
                setError("No account found with this email address. Please check your spelling or create a new account.");
                setLoading(false);
                return;
            }

            // If exists, proceed to send reset link
            const redirectTo = `${window.location.origin}/reset-password`;
            const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });

            if (resetError) {
                setError(resetError.message);
            } else {
                setSuccess(`Success! A password reset link has been sent to ${email}.`);
            }
        } catch (err: any) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row mb-10 mt-16 md:mt-24">
                
                {/* Left Side Decorative Column */}
                <div className="hidden md:flex flex-col justify-between w-1/2 bg-slate-50 dark:bg-[#060c21] border-r border-slate-200 dark:border-slate-800 p-12 relative overflow-hidden">
                    {/* Circle Line Background Decoration */}
                    <svg className="absolute top-[-20%] right-[-20%] w-[120%] h-[120%] text-orange-600/5 dark:text-orange-400/5 pointer-events-none z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" />
                        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                        <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" />
                    </svg>

                    {/* Floating Decorative Elements */}
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-[10%] left-[80%] w-10 h-10 text-orange-400 opacity-60 z-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
                    </motion.svg>
                    <motion.svg animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[35%] right-[10%] w-8 h-8 text-blue-400 opacity-60 z-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
                    </motion.svg>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex justify-start pt-4">
                            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                                <img src="/logo.png" alt="ExamBoost Logo" className="h-[26px] object-contain dark:hidden" />
                                <img src="/white-logo.png" alt="ExamBoost Logo" className="h-[26px] object-contain hidden dark:block" />
                            </Link>
                        </div>

                        <div className="mt-auto pb-4">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-[2.2rem] lg:text-[2.75rem] font-black font-serif text-slate-900 dark:text-white leading-[1.15] mb-6 tracking-tight"
                            >
                                Securely recover your <br />
                                <span className="text-[#F97316] dark:text-orange-400 inline-block mt-2">Account Access.</span>
                            </motion.h2>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed mb-10 max-w-[90%]"
                            >
                                We'll help you get back on track. Just enter your registered email address and follow the simple steps.
                            </motion.p>

                            <div className="space-y-6">
                                {[
                                    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Secure Recovery', desc: 'Your data is protected with industry-standard encryption.' },
                                    { icon: <Target className="w-5 h-5" />, title: 'Instant Access', desc: 'Get a reset link immediately and regain access in seconds.' },
                                    { icon: <BookOpen className="w-5 h-5" />, title: 'Resume Prep', desc: 'Jump straight back into your test series without losing progress.' },
                                ].map((feature, i) => (
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        key={i} 
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200/50 dark:hover:border-slate-700/50"
                                    >
                                        <div className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center text-[#F97316] dark:text-orange-400 shrink-0 shadow-sm mt-0.5">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1.5">{feature.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium text-[15px] leading-snug">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Form Column */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                    <Link href="/" className="md:hidden inline-block mb-8">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/login" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mb-8 group w-fit">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Login
                    </Link>

                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Reset Password</h1>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-10">
                        Enter your registered email address and we'll verify it to send a secure reset link.
                    </p>

                    <form className="space-y-6" onSubmit={onSubmit}>
                        <AnimatePresence mode="popLayout">
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="rounded-xl border border-red-200/60 dark:border-red-500/20 bg-red-50/80 dark:bg-red-500/10 p-4 flex gap-3 items-start shadow-sm"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                    <div className="text-sm font-medium text-red-800 dark:text-red-200 leading-snug">
                                        {error}
                                    </div>
                                </motion.div>
                            )}

                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="rounded-xl border border-emerald-200/60 dark:border-emerald-500/20 bg-emerald-50/80 dark:bg-emerald-500/10 p-4 flex gap-3 items-start shadow-sm"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                    <div className="text-sm font-medium text-emerald-800 dark:text-emerald-200 leading-snug">
                                        {success}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                placeholder="student@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                        >
                            {loading ? 'Verifying email...' : 'Verify & Send Link'} <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center font-medium text-slate-600 dark:text-slate-400">
                        Don't have an account yet?{' '}
                        <Link href="/signup" className="text-orange-600 dark:text-orange-400 hover:underline font-bold">
                            Create a free account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
