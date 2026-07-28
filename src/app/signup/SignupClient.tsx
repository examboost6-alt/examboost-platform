"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Trophy, Users, ArrowRight, ChevronLeft, Eye, EyeOff, Mail, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignupClient() {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Strict Name Validation
        const nameRegex = /^[A-Za-z\s]{2,40}$/;
        if (!nameRegex.test(firstName.trim()) || /asdf|qwer|zxcv/i.test(firstName)) {
            setError('Please enter a real, valid first name (letters only, min 2 characters).');
            return;
        }
        if (lastName.trim() && !nameRegex.test(lastName.trim())) {
            setError('Please enter a real, valid last name (letters only).');
            return;
        }

        // Strict Email Validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email.trim())) {
            setError('Please enter a valid, real email address (e.g. yourname@gmail.com).');
            return;
        }

        const supabase = getSupabaseClient();
        if (!supabase) {
            setError('Auth is not configured. Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.');
            return;
        }

        setLoading(true);

        const emailRedirectTo = `${window.location.origin}/auth/callback`;

        const { error: signUpError } = await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
                emailRedirectTo,
                data: {
                    first_name: firstName.trim(),
                    last_name: lastName.trim(),
                },
            },
        });

        setLoading(false);

        if (signUpError) {
            setError(signUpError.message);
            return;
        }

        setSuccess(`Success`);
    };

    return (
        <div className="w-full min-h-screen bg-white dark:bg-[#060D1A] flex flex-col lg:flex-row font-sans overflow-x-hidden">
            
            {/* Left Form Area - Rich, Legible Inputs & Proportional Spacing */}
            <div className="w-full lg:w-1/2 xl:w-[45%] min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white dark:bg-[#0B1120] relative z-10 order-2 lg:order-1">
                
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
                <div className="w-full max-w-md xl:max-w-lg mx-auto my-auto py-4">
                    <AnimatePresence mode="wait">
                        {!success ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Create Account</h1>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium mb-6 sm:mb-8">Start your exam preparation journey with ExamBoost today.</p>

                                <form className="space-y-4 sm:space-y-5" onSubmit={onSubmit}>
                                    <AnimatePresence mode="popLayout">
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="rounded-xl border border-red-200/60 dark:border-red-500/20 bg-red-50/80 dark:bg-red-500/10 p-3.5 flex gap-3 items-start shadow-sm mb-2"
                                            >
                                                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                                <div className="text-xs sm:text-sm font-medium text-red-800 dark:text-red-200 leading-snug">
                                                    {error}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">First Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium placeholder:text-slate-400 shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium placeholder:text-slate-400 shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            placeholder="student@example.com"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium placeholder:text-slate-400 shadow-sm"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Create Password <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/20 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 dark:text-white font-medium placeholder:text-slate-400 pr-12 shadow-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none p-1.5"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Must be at least 8 characters long.</p>
                                    </div>

                                    <div className="flex items-start gap-2.5 py-1">
                                        <input type="checkbox" id="terms" required className="w-4 h-4 mt-0.5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 dark:bg-slate-900 dark:border-slate-700 shrink-0" />
                                        <label htmlFor="terms" className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 select-none cursor-pointer">
                                            I agree to the <Link href="#" className="font-bold text-[#F97316] dark:text-orange-400 hover:underline">Terms of Service</Link> and <Link href="#" className="font-bold text-[#F97316] dark:text-orange-400 hover:underline">Privacy Policy</Link>.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5 mt-2"
                                    >
                                        {loading ? 'Creating account...' : 'Create Free Account'} <ArrowRight className="w-5 h-5" />
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                                className="flex flex-col items-center justify-center text-center py-4 w-full"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                                    className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20"
                                >
                                    <Mail className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                                </motion.div>
                                
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Check Your Inbox!</h2>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
                                    We've sent a secure verification link to <br/>
                                    <span className="font-bold text-slate-900 dark:text-white px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg inline-block mt-2">{email}</span>
                                </p>

                                <div className="w-full max-w-sm mb-6">
                                    <Link
                                        href="/login"
                                        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-2"
                                    >
                                        Proceed to Login <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Link Box */}
                <div className="w-full max-w-md xl:max-w-lg mx-auto pt-6 border-t border-slate-200 dark:border-slate-800 shrink-0 text-center font-medium text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#F97316] dark:text-orange-400 hover:underline font-bold">
                        Login instead
                    </Link>
                </div>
            </div>

            {/* Right Side Instagram-Style Full-Bleed Banner */}
            <div className="hidden lg:flex flex-col justify-between w-1/2 xl:w-[55%] min-h-screen bg-slate-900 dark:bg-[#080D1A] text-white p-10 xl:p-14 relative overflow-hidden border-l border-slate-800/80 shrink-0 order-1 lg:order-2">
                {/* Soft Gradient Lighting */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                {/* Top Logo */}
                <div className="relative z-10 shrink-0 flex justify-end pt-2">
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
                        <Sparkles className="w-4 h-4 text-orange-400" /> Free Registration
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-4xl xl:text-5xl font-black font-serif text-white leading-[1.15] mb-6 tracking-tight"
                    >
                        Join 50 Lakh+ Students <br />
                        <span className="text-[#F97316] inline-block mt-1">Cracking Exams Daily.</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-slate-300 font-medium text-base xl:text-lg leading-relaxed mb-8 max-w-lg"
                    >
                        Get absolute access to India's most powerful test series platform. Your target rank is just one free sign-up away.
                    </motion.p>

                    <div className="space-y-4">
                        {[
                            { icon: <Sparkles className="w-5 h-5" />, title: '100% Free Mock Tests', desc: 'Experience actual exam standard full-length test series at zero cost.' },
                            { icon: <Trophy className="w-5 h-5" />, title: 'Real Time AIR Ranking', desc: 'Know your exact national standing among lakhs of serious aspirants.' },
                            { icon: <Users className="w-5 h-5" />, title: 'Topper & Expert Community', desc: 'Direct guidance from top rankers and experienced faculty.' },
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
        </div>
    );
}
