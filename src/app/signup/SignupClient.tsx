"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Trophy, Users, ArrowRight, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';

export default function SignupClient() {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

        const emailRedirectTo = `${window.location.origin}/auth/callback`;

        const { error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo,
                data: {
                    first_name: firstName,
                    last_name: lastName,
                },
            },
        });

        setLoading(false);

        if (signUpError) {
            setError(signUpError.message);
            return;
        }

        setSuccess(
            `Account created. We've sent a verification link to ${email}. Please confirm your email to activate your account, then return here to log in.`
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row mb-10 mt-16 md:mt-24">
                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 order-2 md:order-1">
                    <Link href="/" className="md:hidden inline-block mb-8">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary dark:hover:text-accent transition-colors mb-8 group w-fit">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Create an Account</h1>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-8">Start your preparation journey with ExamBoost today.</p>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                        <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider">Or register with email</span>
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    </div>

                    <form className="space-y-5" onSubmit={onSubmit}>
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

                        {success ? (
                            <Link
                                href="/login"
                                className="block w-full text-center bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 py-4 rounded-xl font-bold text-lg transition-colors"
                            >
                                Go to Login
                            </Link>
                        ) : null}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">First Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                placeholder="student@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Create Password <span className="text-red-500">*</span></label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                            />
                            <p className="text-xs text-slate-500 mt-1 font-medium">Must be at least 8 characters long.</p>
                        </div>

                        <div className="flex items-start gap-3 py-2">
                            <input type="checkbox" id="terms" required className="w-5 h-5 mt-0.5 rounded border-slate-300 text-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-700 shrink-0" />
                            <label htmlFor="terms" className="text-sm font-medium text-slate-600 dark:text-slate-400 select-none cursor-pointer">
                                I agree to the <Link href="#" className="font-bold text-primary dark:text-accent hover:underline">Terms of Service</Link> and <Link href="#" className="font-bold text-primary dark:text-accent hover:underline">Privacy Policy</Link>.
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? 'Creating account...' : 'Create Free Account'} <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center font-medium text-slate-600 dark:text-slate-400">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary dark:text-accent hover:underline font-bold">
                            Login instead
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex flex-col justify-between w-1/2 bg-slate-100 dark:bg-[#060c21] border-l border-slate-200 dark:border-slate-800 p-12 relative overflow-hidden order-1 md:order-2">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-10 z-0"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-end">
                            <Link href="/" className="inline-block mb-12 hover:opacity-80 transition-opacity">
                                <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                                <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
                            </Link>
                        </div>

                        <div className="mt-auto">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                                Join 50 Lakh+ Students <br />
                                <span className="text-emerald-600 dark:text-emerald-400">Cracking Exams Daily.</span>
                            </h2>

                            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg mb-10 max-w-sm">
                                Get access to India's most comprehensive test series platform and start improving your scores today.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Sparkles className="w-6 h-6" />, title: 'Free Mock Tests', desc: 'Get 1-2 free tests for every major exam.' },
                                    { icon: <Trophy className="w-6 h-6" />, title: 'All India Rank', desc: 'Compete with lakhs of serious aspirants.' },
                                    { icon: <Users className="w-6 h-6" />, title: 'Expert Community', desc: 'Interact with toppers and expert faculties.' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
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
                </div>
            </div>
        </div>
    );
}
