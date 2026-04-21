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

        // Strict Email Validation (Restricts weird TLDs like .commm)
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
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row mb-10 mt-16 md:mt-24 min-h-[700px]">
                
                {/* Left Form Area */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 order-2 md:order-1">
                    <Link href="/" className="md:hidden inline-block mb-8">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
                    </Link>

                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-8 group w-fit">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    <AnimatePresence mode="wait">
                        {!success ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Create an Account</h1>
                                <p className="text-slate-600 dark:text-slate-400 font-medium mb-8">Start your preparation journey with ExamBoost today.</p>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                                    <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider">Or register with email</span>
                                    <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                                </div>

                                <form className="space-y-5" onSubmit={onSubmit}>
                                    <AnimatePresence mode="popLayout">
                                        {error && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="rounded-xl border border-red-200/60 dark:border-red-500/20 bg-red-50/80 dark:bg-red-500/10 p-4 flex gap-3 items-start shadow-sm mb-4"
                                            >
                                                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                                <div className="text-sm font-medium text-red-800 dark:text-red-200 leading-snug">
                                                    {error}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">First Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
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
                                            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Create Password <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400 pr-12"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1 font-medium">Must be at least 8 characters long.</p>
                                    </div>

                                    <div className="flex items-start gap-3 py-2">
                                        <input type="checkbox" id="terms" required className="w-5 h-5 mt-0.5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 dark:bg-slate-900 dark:border-slate-700 shrink-0" />
                                        <label htmlFor="terms" className="text-sm font-medium text-slate-600 dark:text-slate-400 select-none cursor-pointer">
                                            I agree to the <Link href="#" className="font-bold text-orange-600 dark:text-orange-400 hover:underline">Terms of Service</Link> and <Link href="#" className="font-bold text-orange-600 dark:text-orange-400 hover:underline">Privacy Policy</Link>.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                                    >
                                        {loading ? 'Creating account...' : 'Create Free Account'} <ArrowRight className="w-5 h-5" />
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center font-medium text-slate-600 dark:text-slate-400">
                                    Already have an account?{' '}
                                    <Link href="/login" className="text-orange-600 dark:text-orange-400 hover:underline font-bold">
                                        Login instead
                                    </Link>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                                className="flex flex-col items-center justify-center text-center py-10 w-full"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                                    className="w-24 h-24 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20"
                                >
                                    <Mail className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                                </motion.div>
                                
                                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Check Your Inbox!</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
                                    We've sent a secure verification link to <br/>
                                    <span className="font-bold text-slate-900 dark:text-white px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg inline-block mt-2">{email}</span>
                                </p>
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-10 w-full max-w-sm shadow-sm"
                                >
                                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center justify-center gap-2">
                                        <AlertCircle className="w-5 h-5 text-orange-500" /> Next Steps
                                    </h3>
                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3 text-left">
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-black flex items-center justify-center shrink-0 text-xs">1</div>
                                            <span>Open your email inbox (or spam folder).</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-black flex items-center justify-center shrink-0 text-xs">2</div>
                                            <span>Click the <strong>Verify Email</strong> button inside.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-black flex items-center justify-center shrink-0 text-xs">3</div>
                                            <span>Return here to log in and start your journey!</span>
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="w-full max-w-sm"
                                >
                                    <Link
                                        href="/login"
                                        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                                    >
                                        Proceed to Login <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Decorative Area */}
                <div className="hidden md:flex flex-col justify-between w-1/2 bg-slate-50 dark:bg-[#060c21] border-l border-slate-200 dark:border-slate-800 p-12 relative overflow-hidden order-1 md:order-2">
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
                        <div className="flex justify-end pt-4">
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
                                Join 50 Lakh+ Students <br />
                                <span className="text-[#F97316] dark:text-orange-400 inline-block mt-2">Cracking Exams Daily.</span>
                            </motion.h2>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed mb-10 max-w-[90%]"
                            >
                                Get absolute access to India's most powerful test series platform. Your dream rank is just a registration away.
                            </motion.p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Sparkles className="w-5 h-5" />, title: 'Premium Free Mocks', desc: 'Experience full length mocks for your target exams 100% free.' },
                                    { icon: <Trophy className="w-5 h-5" />, title: 'Real Time AIR', desc: 'Know exactly where you stand among lakhs of actual aspirants.' },
                                    { icon: <Users className="w-5 h-5" />, title: 'Expert Community', desc: 'Direct interaction with top percentile scorers and elite faculty.' },
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
            </div>
        </div>
    );
}
