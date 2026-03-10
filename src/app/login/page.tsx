import React from 'react';
import Link from 'next/link';
import { Target, ShieldCheck, ArrowRight, BookOpen, Presentation, ChevronLeft } from 'lucide-react';

export const metadata = {
    title: 'Login - ExamBoost',
    description: 'Log in to your ExamBoost account to access premium mock tests, live classes, and your personalized dashboard.'
};

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row mb-10 mt-16 md:mt-24">

                {/* LEFT COLUMN: Features / Branding (Hidden on small screens) */}
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
                                { icon: <Target className="w-6 h-6" />, title: "Precision Analytics", desc: "Track your accuracy & speed instantly." },
                                { icon: <BookOpen className="w-6 h-6" />, title: "Resume Preparation", desc: "Continue tests across all your devices." },
                                { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Dashboard", desc: "Your personal data and scores are 100% safe." }
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

                {/* RIGHT COLUMN: The Login Form */}
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

                    {/* Social Logins (Google / Microsoft placeholders) */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button className="flex items-center justify-center gap-2 py-3.5 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-slate-300 transition-colors shadow-sm">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.81 15.72 17.59V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                                <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.72 17.59C14.73 18.25 13.48 18.66 12 18.66C9.13 18.66 6.71001 16.71 5.84001 14.11H2.17001V16.96C3.98001 20.57 7.71 23 12 23Z" fill="#34A853" />
                                <path d="M5.84001 14.11C5.62001 13.45 5.49001 12.74 5.49001 12C5.49001 11.26 5.62001 10.55 5.84001 9.89V7.04H2.17001C1.46001 8.44 1.05001 10.15 1.05001 12C1.05001 13.85 1.46001 15.56 2.17001 16.96L5.84001 14.11Z" fill="#FBBC05" />
                                <path d="M12 5.34C13.62 5.34 15.06 5.89 16.21 6.99L19.36 3.84C17.45 2.05 14.97 1 12 1C7.71 1 3.98001 3.43 2.17001 7.04L5.84001 9.89C6.71001 7.29 9.13 5.34 12 5.34Z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3.5 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-slate-300 transition-colors shadow-sm">
                            <span className="text-[#00a4ef] font-black text-xl leading-none">M</span> Microsoft
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                        <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider">Or login with email</span>
                        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" placeholder="student@example.com" required className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Password <span className="text-red-500">*</span></label>
                                <a href="#" className="flex items-center gap-1 text-sm font-bold text-primary dark:text-accent hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <input type="password" placeholder="••••••••" required className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400" />
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="rem" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-700" />
                            <label htmlFor="rem" className="text-sm font-semibold text-slate-600 dark:text-slate-400 select-none cursor-pointer">Keep me logged in on this device</label>
                        </div>

                        <button type="button" className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                            Login securely <ArrowRight className="w-5 h-5" />
                        </button>
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
