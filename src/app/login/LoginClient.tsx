"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, ShieldCheck, ArrowRight, BookOpen, ChevronLeft, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';
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
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row mb-10 mt-16 md:mt-24">
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
                                Welcome back to your <br />
                                <span className="text-[#F97316] dark:text-orange-400 inline-block mt-2">Success Journey.</span>
                            </motion.h2>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed mb-10 max-w-[90%]"
                            >
                                Pick up right where you left off. Review your analytics, attempt pending tests, and stay ahead of the curve.
                            </motion.p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Target className="w-5 h-5" />, title: 'Precision Analytics', desc: 'Track your accuracy & speed instantly.' },
                                    { icon: <BookOpen className="w-5 h-5" />, title: 'Resume Preparation', desc: 'Continue tests across all your devices.' },
                                    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Secure Dashboard', desc: 'Your personal data and scores are 100% safe.' },
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

                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                    <Link href="/" className="md:hidden inline-block mb-8">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mb-8 group w-fit">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Log In to Account</h1>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-10">Enter your email and password to access your dashboard.</p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                        <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider">Or login with email</span>
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    </div>

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
                                    <div className="text-sm font-medium text-orange-800 dark:text-orange-200 leading-snug">
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
                                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Password <span className="text-red-500">*</span></label>
                                <Link href="/forgot-password" className="flex items-center gap-1 text-sm font-bold text-orange-600 dark:text-orange-400 hover:underline">
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
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400 pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="rem" className="w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 dark:bg-slate-900 dark:border-slate-700" />
                            <label htmlFor="rem" className="text-sm font-semibold text-slate-600 dark:text-slate-400 select-none cursor-pointer">Keep me logged in on this device</label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                        >
                            {loading ? 'Logging in...' : 'Login securely'} <ArrowRight className="w-5 h-5" />
                        </button>

                        {error?.toLowerCase().includes('not confirmed') ? (
                            <button
                                type="button"
                                onClick={onResendConfirmation}
                                disabled={resending || (resendCooldownUntil ? Date.now() < resendCooldownUntil : false)}
                                className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 py-4 rounded-xl font-bold text-lg transition-colors"
                            >
                                {resending
                                    ? 'Sending...'
                                    : resendCooldownUntil && Date.now() < resendCooldownUntil
                                        ? 'Please wait...'
                                        : 'Resend confirmation email'}
                            </button>
                        ) : null}
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center font-medium text-slate-600 dark:text-slate-400">
                        Don't have an account yet?{' '}
                        <Link href="/signup" className="text-orange-600 dark:text-orange-400 hover:underline font-bold">
                            Create your free account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
