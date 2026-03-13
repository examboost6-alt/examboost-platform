"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, ShieldCheck, ArrowRight, BookOpen, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';

export default function LoginClient() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resending, setResending] = useState(false);
    const [resendMessage, setResendMessage] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setResendMessage(null);

        const supabase = getSupabaseClient();
        if (!supabase) {
            setError('Auth is not configured. Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.');
            return;
        }

        setLoading(true);

        const { error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (signInError) {
            setError(signInError.message);
            return;
        }

        router.push('/');
        router.refresh();
    };

    const onResendConfirmation = async () => {
        setError(null);
        setResendMessage(null);

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

        setResendMessage('Confirmation email sent. Please check your inbox and spam folder.');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row mb-10 mt-16 md:mt-24">
                <div className="hidden md:flex flex-col justify-between w-1/2 bg-slate-100 dark:bg-[#060c21] border-r border-slate-200 dark:border-slate-800 p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-10 z-0"></div>

                    <div className="relative z-10">
                        <Link href="/" className="inline-block mb-12 hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                            <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
                        </Link>

                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                            Welcome back to your <br />
                            <span className="text-primary dark:text-accent">Success Journey.</span>
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg mb-10 max-w-sm">
                            Pick up right where you left off. Review your analytics, attempt pending tests, and stay ahead of the curve.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Target className="w-6 h-6" />, title: 'Precision Analytics', desc: 'Track your accuracy & speed instantly.' },
                                { icon: <BookOpen className="w-6 h-6" />, title: 'Resume Preparation', desc: 'Continue tests across all your devices.' },
                                { icon: <ShieldCheck className="w-6 h-6" />, title: 'Secure Dashboard', desc: 'Your personal data and scores are 100% safe.' },
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-primary dark:text-accent shrink-0 shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                    <Link href="/" className="md:hidden inline-block mb-8">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary dark:hover:text-accent transition-colors mb-8 group w-fit">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Log In to Account</h1>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-10">Enter your credentials to access your dashboard.</p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                        <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider">Or login with email</span>
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    </div>

                    <form className="space-y-6" onSubmit={onSubmit}>
                        {error ? (
                            <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 font-semibold text-sm">
                                {error}
                            </div>
                        ) : null}

                        {resendMessage ? (
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3 font-semibold text-sm">
                                {resendMessage}
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

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Password <span className="text-red-500">*</span></label>
                                <a href="#" className="flex items-center gap-1 text-sm font-bold text-primary dark:text-accent hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                            />
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="rem" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-700" />
                            <label htmlFor="rem" className="text-sm font-semibold text-slate-600 dark:text-slate-400 select-none cursor-pointer">Keep me logged in on this device</label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-secondary disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? 'Logging in...' : 'Login securely'} <ArrowRight className="w-5 h-5" />
                        </button>

                        {error?.toLowerCase().includes('not confirmed') ? (
                            <button
                                type="button"
                                onClick={onResendConfirmation}
                                disabled={resending}
                                className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 py-4 rounded-xl font-bold text-lg transition-colors"
                            >
                                {resending ? 'Sending...' : 'Resend confirmation email'}
                            </button>
                        ) : null}
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center font-medium text-slate-600 dark:text-slate-400">
                        Don't have an account yet?{' '}
                        <Link href="/signup" className="text-primary dark:text-accent hover:underline font-bold">
                            Create your free account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
