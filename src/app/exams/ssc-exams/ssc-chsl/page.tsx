import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star
} from 'lucide-react';
import SscTestSeriesCards from '@/components/SscTestSeriesCards';

export const metadata = {
    title: 'SSC CHSL Preparation & Mock Tests - ExamBoost',
    description: 'Complete SSC CHSL Tier 1 & Tier 2 preparation. Practice with TCS iON interface mock tests, typing tests, previous year papers, and detailed analytics.'
};

export default function SSCCHSLPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8 flex-wrap">
                        <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams/ssc-exams" className="hover:text-primary dark:hover:text-accent transition-colors">SSC Exams</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-white">SSC CHSL</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-emerald-500/20">
                                <Target className="w-4 h-4" /> Target SSC CHSL 10+2
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
                                Crack <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">SSC CHSL</span> with the Ultimate Strategy
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                Secure your LDC, JSA, or DEO posting right after 12th. Practice with cutting-edge TCS iON mock tests, PYQs, and an exact replica of the Skill/Typing test module.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="#test-series" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                                    <Star className="w-5 h-5 fill-white" /> Start Free Mock
                                </Link>
                                <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5" /> View Syllabus
                                </Link>
                            </div>

                            {/* Trust Metrics */}
                            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">3 Lakh+</div>
                                    <div className="text-sm font-medium text-slate-500">CHSL Aspirants</div>
                                </div>
                                <div className="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">100%</div>
                                    <div className="text-sm font-medium text-slate-500">Typing Match</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-10 lg:mt-0">
                            <div className="relative w-full aspect-square md:aspect-[4/3] bg-emerald-50 dark:bg-emerald-900/10 rounded-[2rem] border border-emerald-100 dark:border-emerald-800/30 p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent z-0"></div>

                                {/* Floating Mock Test Card */}
                                <div className="relative z-10 w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                                    <div className="bg-emerald-600 text-white p-4 flex justify-between items-center">
                                        <div className="text-sm font-bold">English Comprehension</div>
                                        <div className="text-xs bg-emerald-800 px-2 py-1 rounded font-mono font-bold">04:15 left</div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-4 leading-relaxed line-clamp-3">
                                            Select the most appropriate synonym of the given word. <br /> <br /> <strong>LETHARGIC</strong>
                                        </p>
                                        <div className="space-y-3">
                                            {['(A) Vivacious', '(B) Sluggish', '(C) Energetic', '(D) Animated'].map((opt, i) => (
                                                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${i === 1 ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50'} cursor-pointer transition-colors`}>
                                                    <div className={`w-4 h-4 rounded-full border ${i === 1 ? 'border-emerald-500 bg-emerald-500 flex items-center justify-center' : 'border-slate-400'}`}>
                                                        {i === 1 && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                                    </div>
                                                    <span className={`text-sm font-semibold ${i === 1 ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>{opt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute bottom-10 right-10 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-[bounce_5s_infinite]">
                                    <KeyboardIcon className="w-5 h-5 text-indigo-500" />
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Skill Test Included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Key Information Highlights */}
            <div id="exam-info" className="py-20 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">SSC CHSL at a Glance</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Essential details for the Combined Higher Secondary (10+2) Level Examination.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Layout, title: "Exam Pattern", desc: "Tier I (CBT - Qualifying) & Tier II (CBT + Typing/Skill Test)." },
                            { icon: FileText, title: "Posts Offered", desc: "Lower Divisional Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO)." },
                            { icon: Clock, title: "Exam Duration", desc: "Tier 1: 60 Minutes (100 Qs). Tier 2: 2 Hours 15 Mins." },
                            { icon: Target, title: "Marking Scheme", desc: "+2 for Correct, -0.5 for Incorrect in Tier 1. +3 / -1 in Tier 2." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Detailed Exam Pattern Breakdown */}
            <div className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Tier 1 Exam Pattern</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">100 Questions | 200 Marks | 60 Minutes</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "English Language", desc: "Basic Knowledge", q: 25, mks: 50, color: "border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400" },
                            { title: "General Intelligence", desc: "Reasoning", q: 25, mks: 50, color: "border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-400" },
                            { title: "Quantitative Aptitude", desc: "Basic Arithmetic Skill", q: 25, mks: 50, color: "border-emerald-200 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400" },
                            { title: "General Awareness", desc: "Current Affairs & GK", q: 25, mks: 50, color: "border-rose-200 bg-rose-50 dark:border-rose-900/50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400" }
                        ].map((sec, idx) => (
                            <div key={idx} className={`rounded-2xl border p-6 ${sec.color}`}>
                                <h3 className="text-lg font-bold mb-1">{sec.title}</h3>
                                <p className="text-sm font-medium opacity-80 mb-4">{sec.desc}</p>
                                <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/40 rounded-xl p-4">
                                    <div className="text-center">
                                        <div className="font-black text-2xl text-slate-900 dark:text-white">{sec.q}</div>
                                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 mt-1">Questions</div>
                                    </div>
                                    <div className="w-px h-10 bg-current opacity-20"></div>
                                    <div className="text-center">
                                        <div className="font-black text-2xl text-slate-900 dark:text-white">{sec.mks}</div>
                                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 mt-1">Marks</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Why ExamBoost for SSC CHSL */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Master Every Stage with ExamBoost</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">CHSL requires raw speed in Tier 1 and accuracy in the Typing test. We train you for both.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Presentation, title: "TCS iON Familiarity", desc: "Don't let the exam interface confuse you on the final day. Practice on our platform that mirrors the actual SSC exam software pixel-by-pixel." },
                            { icon: Brain, title: "Typing Test Engine", desc: "Tier 2 typing test is mandatory and qualifying. Our dedicated typing software simulates the exact conditions, paragraph length, and error-calculation of SSC." },
                            { icon: Zap, title: "PYQ Mock Format", desc: "Thousands of questions repeat in CHSL across shifts. We provide all previous year papers from 2018-2023 in an executable mock test format to guarantee pattern familiarity." }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <feat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feat.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. Test Series Call from Component */}
            <div id="test-series" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">Select Your Battle Plan</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">SSC CHSL Series Plans</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need from Tier 1 CBT to Tier 2 Typing Test in one place.</p>
                    </div>

                    <SscTestSeriesCards examName="SSC CHSL" />
                </div>
            </div>

            {/* 6. Footer Call to Action */}
            <div className="bg-emerald-900 dark:bg-slate-950 py-24 relative overflow-hidden border-t border-emerald-950/20 dark:border-slate-800">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Begin Your SSC CHSL Journey</h2>
                    <p className="text-emerald-100/80 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Outperform millions of candidates with structured mock tests and targeted performance analysis.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/pricing" className="bg-white text-emerald-900 hover:bg-slate-100 dark:bg-emerald-500 dark:text-slate-900 dark:hover:bg-emerald-400 px-10 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl flex items-center gap-2">
                            Enroll in Test Series <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

function KeyboardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 8h.01" />
            <path d="M12 12h.01" />
            <path d="M14 8h.01" />
            <path d="M16 12h.01" />
            <path d="M18 8h.01" />
            <path d="M6 8h.01" />
            <path d="M7 16h10" />
            <path d="M8 12h.01" />
            <rect width="20" height="16" x="2" y="4" rx="2" />
        </svg>
    );
}
