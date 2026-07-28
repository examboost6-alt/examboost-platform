"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, ShieldCheck, ArrowRight, BookOpen, ChevronLeft, Eye, EyeOff, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginClient() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resending, setResending] = useState(false);
    const [resendMessage, setResendMessage] = useState<string | null>(null);
    const [resendCooldownUntil, setResendCooldownUntil] = useState<number | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setResendMessage(null);

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

        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (signInError) {
            setError(signInError.message);
            return;
        }

        const userId = signInData.user?.id;
        if (!userId) {
            router.replace('/onboarding');
            router.refresh();
            return;
        }

        const { data: profileData } = await supabase
            .from('profiles')
            .select('admission_completed')
            .eq('id', userId)
            .maybeSingle();

        const admissionCompleted = Boolean((profileData as any)?.admission_completed);
        router.replace(admissionCompleted ? '/dashboard' : '/onboarding');
        router.refresh();
    };

    const onResendConfirmation = async () => {
        setError(null);
        setResendMessage(null);

        const now = Date.now();
        if (resendCooldownUntil && now < resendCooldownUntil) {
            const remainingSeconds = Math.ceil((resendCooldownUntil - now) / 1000);
            setError(`Please wait ${remainingSeconds}s before resending again.`);
            return;
        }

        const supabase = getSupabaseClient();
        if (!supabase) {
            setError('Auth is not configured. Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.');
            return;
        }

        if (!email) {
            setError('Please enter your email first.');
            return;
        }

        setResending(true);
        const { error: resendError } = await supabase.auth.resend({
            type: 'signup',
            email,
        });
        setResending(false);

        if (resendError) {
            setError(resendError.message);
            return;
        }

        setResendCooldownUntil(Date.now() + 60_000);
        setResendMessage('Confirmation email sent. Please check your inbox and spam folder.');
    };

    return (
        <div className="w-full min-h-screen bg-white dark:bg-[#060D1A] flex flex-col lg:flex-row font-sans overflow-x-hidden">
            
            {/* Left Side Instagram-Style Full-Bleed Banner */}
            <div className="hidden lg:flex flex-col justify-between w-1/2 xl:w-[55%] min-h-screen bg-slate-900 dark:bg-[#080D1A] text-white p-10 xl:p-14 relative overflow-hidden border-r border-slate-800/80 shrink-0">
                {/* Soft Gradient Lighting */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Decorative Vector Lines */}
                <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none z-0" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
                    <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" />
                    <circle cx="300" cy="300" r="100" stroke="currentColor" strokeWidth="0.75" />
                </svg>

                {/* Top Logo */}
                <div className="relative z-10 shrink-0 pt-2">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-9 object-contain" />
                    </Link>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 max-w-xl my-auto py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4 text-orange-400" /> Welcome Back Aspirant
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-4xl xl:text-5xl font-black font-serif text-white leading-[1.15] mb-6 tracking-tight"
                    >
                        Master Every Exam with <br />
                        <span className="text-[#F97316] inline-block mt-1">Real TCS CBT Analytics.</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-slate-300 font-medium text-base xl:text-lg leading-relaxed mb-8 max-w-lg"
                    >
                        Login to access your personal dashboard, review test analytics, and compete with over 10 Lakh+ serious students nationwide.
                    </motion.p>

                    <div className="space-y-4">
                        {[
                            { icon: <Target className="w-5 h-5" />, title: 'AIR Rank & Percentile', desc: 'Real-time competitive ranking after every mock test.' },
                            { icon: <BookOpen className="w-5 h-5" />, title: 'Resume Tests Instantly', desc: 'Never lose your test progress across any device.' },
                            { icon: <ShieldCheck className="w-5 h-5" />, title: '100% Verified Content', desc: 'Questions prepared strictly according to 2025 exam patterns.' },
                        ].map((feature, i) => (
                            <motion.div 
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 + (i * 0.08) }}
                                key={i} 
                                className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                            >
                                <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center text-orange-400 shrink-0 shadow-sm mt-0.5">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-0.5">{feature.title}</h3>
                                    <p className="text-slate-400 font-medium text-xs xl:text-sm leading-snug">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Testimonial */}
                <div className="relative z-10 shrink-0 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold">© 2026 ExamBoost Inc. All rights reserved.</span>
                    <span className="font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">Privacy & Terms</span>
                </div>
            </div>

            {/* Right Side Form Column - Rich, Legible Inputs & Proportional Spacing */}
            <div className="w-full lg:w-1/2 xl:w-[45%] min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white dark:bg-[#0B1120] relative z-10">
                
                {/* Header Navigation */}
                <div className="flex items-center justify-between w-full mb-6 shrink-0">
                    <Link href="/" className="inline-block">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-8 sm:h-9 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 sm:h-9 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#F97316] dark:hover:text-orange-400 transition-colors group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                </div>

                {/* Main Form Center Box */}
                <div className="w-full max-w-md xl:max-w-lg mx-auto my-auto py-6">
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Log In</h1>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium mb-8">Enter your credentials to access your ExamBoost dashboard.</p>

                    <form className="space-y-5" onSubmit={onSubmit}>
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
                                    <div className="text-xs sm:text-sm font-medium text-red-800 dark:text-red-200 leading-snug">
                                        {error === 'Invalid login credentials' ? (
                                            <span>
                                                Incorrect email or password. Please check your details and try again, or{' '}
                                                <Link href="/signup" className="underline font-bold hover:text-red-900 dark:hover:text-red-100 transition-colors">
                                                    create a new account
                                                </Link>.
                                            </span>
                                        ) : (
                                            error
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {resendMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="rounded-xl border border-orange-200/60 dark:border-orange-500/20 bg-orange-50/80 dark:bg-orange-500/10 p-4 flex gap-3 items-start shadow-sm"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                                    <div className="text-xs sm:text-sm font-medium text-orange-800 dark:text-orange-200 leading-snug">
                                        {resendMessage}
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
                                className="w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium placeholder:text-slate-400 shadow-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Password <span className="text-red-500">*</span></label>
                                <Link href="/forgot-password" className="text-xs sm:text-sm font-bold text-[#F97316] dark:text-orange-400 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium placeholder:text-slate-400 pr-12 shadow-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none p-1.5"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 py-1">
                            <input type="checkbox" id="rem" className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 dark:bg-slate-900 dark:border-slate-700" />
                            <label htmlFor="rem" className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 select-none cursor-pointer">Keep me logged in on this device</label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5 mt-2"
                        >
                            {loading ? 'Logging in...' : 'Login securely'} <ArrowRight className="w-5 h-5" />
                        </button>

                        {error?.toLowerCase().includes('not confirmed') ? (
                            <button
                                type="button"
                                onClick={onResendConfirmation}
                                disabled={resending || (resendCooldownUntil ? Date.now() < resendCooldownUntil : false)}
                                className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-colors"
                            >
                                {resending
                                    ? 'Sending...'
                                    : resendCooldownUntil && Date.now() < resendCooldownUntil
                                        ? 'Please wait...'
                                        : 'Resend confirmation email'}
                            </button>
                        ) : null}
                    </form>
                </div>

                {/* Footer Link Box */}
                <div className="w-full max-w-md xl:max-w-lg mx-auto pt-6 border-t border-slate-200 dark:border-slate-800 shrink-0 text-center font-medium text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Don't have an account yet?{' '}
                    <Link href="/signup" className="text-[#F97316] dark:text-orange-400 hover:underline font-bold">
                        Create a free account
                    </Link>
                </div>
            </div>
        </div>
    );
}
