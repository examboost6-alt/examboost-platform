"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, ShieldCheck, ArrowRight, BookOpen, ChevronLeft, AlertCircle, Unlock, Sparkles } from 'lucide-react';
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
        if (!emailRegex.test(email.trim())) {
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
            const checkRes = await fetch('/api/auth/check-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() })
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

            const redirectTo = `${window.location.origin}/reset-password`;
            const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo });

            if (resetError) {
                setError(resetError.message);
            } else {
                setSuccess(`Success`);
            }
        } catch (err: any) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-screen max-h-screen bg-white dark:bg-[#060D1A] flex flex-col lg:flex-row font-sans overflow-hidden">
            
            {/* Left Side Instagram-Style Full-Bleed Banner */}
            <div className="hidden lg:flex flex-col justify-between w-1/2 xl:w-[55%] h-screen max-h-screen bg-slate-900 dark:bg-[#080D1A] text-white p-8 xl:p-12 relative overflow-hidden border-r border-slate-800/80 shrink-0">
                {/* Soft Gradient Lighting */}
                <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                {/* Top Logo */}
                <div className="relative z-10 shrink-0">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain" />
                    </Link>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 max-w-xl my-auto py-4">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-orange-400" /> Account Recovery
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-3xl xl:text-4xl font-black font-serif text-white leading-[1.15] mb-4 tracking-tight"
                    >
                        Securely Recover Your <br />
                        <span className="text-[#F97316] inline-block mt-1">ExamBoost Account.</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-slate-300 font-medium text-sm xl:text-base leading-relaxed mb-6 max-w-lg"
                    >
                        Don't worry, we've got you covered. Enter your registered email address to receive an instant, high-security password reset link.
                    </motion.p>

                    <div className="space-y-3.5">
                        {[
                            { icon: <ShieldCheck className="w-4 h-4" />, title: 'Encrypted Recovery Link', desc: 'Single-use cryptographic reset token sent directly to your inbox.' },
                            { icon: <Target className="w-4 h-4" />, title: 'Instant Account Restoral', desc: 'Set your new password and regain access to all your test series in seconds.' },
                            { icon: <BookOpen className="w-4 h-4" />, title: 'Zero Progress Loss', desc: 'Your saved tests, performance history, and analytics remain 100% intact.' },
                        ].map((feature, i) => (
                            <motion.div 
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + (i * 0.08) }}
                                key={i} 
                                className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                            >
                                <div className="w-9 h-9 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-400 shrink-0 shadow-sm mt-0.5">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white mb-0.5">{feature.title}</h3>
                                    <p className="text-slate-400 font-medium text-xs leading-snug">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Testimonial */}
                <div className="relative z-10 shrink-0 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold">© 2026 ExamBoost Inc.</span>
                    <span className="font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">Privacy & Terms</span>
                </div>
            </div>

            {/* Right Side Form Column - Fits 100% Without Scroll */}
            <div className="w-full lg:w-1/2 xl:w-[45%] h-screen max-h-screen flex flex-col justify-between p-5 sm:p-8 lg:p-10 bg-white dark:bg-[#0B1120] relative z-10 overflow-y-auto">
                
                {/* Header Navigation */}
                <div className="flex items-center justify-between w-full mb-3 shrink-0">
                    <Link href="/" className="inline-block">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-7 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-7 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/login" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#F97316] dark:hover:text-orange-400 transition-colors group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Login
                    </Link>
                </div>

                {/* Main Form Center Box */}
                <div className="w-full max-w-md mx-auto my-auto py-1 shrink-0">
                    <AnimatePresence mode="wait">
                        {!success ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">Reset Password</h1>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-5">
                                    Enter your registered email address and we'll verify it to send a secure reset link.
                                </p>

                                <form className="space-y-3.5" onSubmit={onSubmit}>
                                    <AnimatePresence mode="popLayout">
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="rounded-xl border border-red-200/60 dark:border-red-500/20 bg-red-50/80 dark:bg-red-500/10 p-3 flex gap-2.5 items-start shadow-sm"
                                            >
                                                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                                <div className="text-xs font-medium text-red-800 dark:text-red-200 leading-snug">
                                                    {error}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            placeholder="student@example.com"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-xs sm:text-sm text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5 mt-1"
                                    >
                                        {loading ? 'Verifying email...' : 'Verify & Send Link'} <ArrowRight className="w-4 h-4" />
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                                className="flex flex-col items-center justify-center text-center py-2 w-full"
                            >
                                <motion.div 
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                                    className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-blue-500/20"
                                >
                                    <Unlock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </motion.div>
                                
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1.5 tracking-tight">Check Your Inbox!</h2>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-md mx-auto leading-relaxed">
                                    A secure password reset link has been sent to <br/>
                                    <span className="font-bold text-slate-900 dark:text-white px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded inline-block mt-1">{email}</span>
                                </p>
                                
                                <div className="w-full max-w-xs">
                                    <Link
                                        href="/login"
                                        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                                    >
                                        Return to Login <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Link Box */}
                <div className="w-full max-w-md mx-auto pt-3 border-t border-slate-200 dark:border-slate-800 shrink-0 text-center font-medium text-xs text-slate-600 dark:text-slate-400">
                    Don't have an account yet?{' '}
                    <Link href="/signup" className="text-[#F97316] dark:text-orange-400 hover:underline font-bold">
                        Create a free account
                    </Link>
                </div>
            </div>
        </div>
    );
}
