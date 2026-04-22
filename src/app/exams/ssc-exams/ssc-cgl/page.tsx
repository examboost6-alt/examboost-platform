import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star
} from 'lucide-react';
import Image from 'next/image';
import SscTestSeriesCards from '@/components/SscTestSeriesCards';

export const metadata = {
    title: 'SSC CGL Preparation & Mock Tests - ExamBoost',
    description: 'Complete SSC CGL Tier 1 & Tier 2 preparation in Delhi. Practice with TCS iON interface, SSC CGL mock test free, previous year papers, and detailed analytics.',
    keywords: ['SSC CGL mock test free', 'SSC preparation Delhi', 'SSC CGL Tier 1 mock test', 'SSC CGL preparation'],
    alternates: {
        canonical: 'https://www.examboost.in/exams/ssc-exams/ssc-cgl'
    }
};

export default function SSCCGLPage() {
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
                        <span className="text-slate-900 dark:text-white">SSC CGL</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                                <Target className="w-4 h-4" /> Target SSC CGL 2024-25
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
                                Master the <span className="text-primary dark:text-accent">SSC CGL</span> with the Best SSC Preparation Delhi
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                                Clear cutoffs confidently with India's most accurate TCS iON pattern mock tests. Detailed performance analytics, short-trick solutions, and complete Tier 1 & 2 coverage.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="#test-series" className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    <Star className="w-5 h-5 fill-white" /> Explore Test Series
                                </Link>
                                <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5" /> View Syllabus
                                </Link>
                            </div>

                            {/* Trust Metrics */}
                            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">5 Lakh+</div>
                                    <div className="text-sm font-medium text-slate-500">Aspirants Trusted</div>
                                </div>
                                <div className="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
                                <div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">100%</div>
                                    <div className="text-sm font-medium text-slate-500">TCS iON Interface</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-10 lg:mt-0">
                            <div className="relative w-full aspect-square md:aspect-[4/3] bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] border border-slate-200 dark:border-slate-700 p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-accent/5 z-0"></div>

                                {/* Floating Mock Test Card */}
                                <div className="relative z-10 w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                                        <div className="text-sm font-bold">Quantitative Aptitude</div>
                                        <div className="text-xs bg-red-500 px-2 py-1 rounded font-mono font-bold animate-pulse">13:45 left</div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-6 leading-relaxed">
                                            Q. A shopkeeper sells an article at a loss of 8%. If he had sold it for Rs. 36 more, he would have gained 10%. The cost price of the article is:
                                        </p>
                                        <div className="space-y-3">
                                            {['(A) Rs. 200', '(B) Rs. 250', '(C) Rs. 180', '(D) Rs. 220'].map((opt, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-accent cursor-pointer transition-colors bg-slate-50 dark:bg-slate-800/50">
                                                    <div className="w-4 h-4 rounded-full border border-slate-400"></div>
                                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{opt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-10 left-10 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-[bounce_4s_infinite]">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Latest Pattern</span>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">SSC CGL at a Glance</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to know about the Combined Graduate Level Examination.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Layout, title: "Exam Tiers", desc: "Tier I (Qualifying) & Tier II (Merit Deciding). Both are Computer Based Tests (CBT)." },
                            { icon: FileText, title: "Posts Offered", desc: "Group B & C posts in various Ministries/Departments (Income Tax Inspector, ASO, etc.)" },
                            { icon: Clock, title: "Duration", desc: "Tier 1: 60 Minutes. Tier 2: 2 Hours 15 Mins (Paper 1)." },
                            { icon: Target, title: "Marking Scheme", desc: "+2 for Correct, -0.5 for Incorrect in Tier 1. +3 / -1 in Tier 2." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary dark:text-accent mb-6">
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
                            { title: "General Intelligence & Reasoning", q: 25, mks: 50, color: "border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400" },
                            { title: "General Awareness", q: 25, mks: 50, color: "border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-400" },
                            { title: "Quantitative Aptitude", q: 25, mks: 50, color: "border-emerald-200 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400" },
                            { title: "English Comprehension", q: 25, mks: 50, color: "border-rose-200 bg-rose-50 dark:border-rose-900/50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400" }
                        ].map((sec, idx) => (
                            <div key={idx} className={`rounded-2xl border p-6 ${sec.color}`}>
                                <h3 className="text-lg font-bold mb-4">{sec.title}</h3>
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

            {/* 4. Why ExamBoost for SSC CGL (Benefits) */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why Choose ExamBoost?</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Our platform is engineered specifically for SSC exams to give you a definitive edge.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Presentation, title: "Exact TCS iON Interface", desc: "Our testing environment perfectly replicates the actual exam portal. Eliminate exam day anxiety by getting familiar with the exact UI, color codes, and navigation." },
                            { icon: Brain, title: "Smart Short Tricks", desc: "Stop doing long calculations. For Quantitative Aptitude and Reasoning, our detailed text and video solutions provide cutting-edge short tricks to solve questions in seconds." },
                            { icon: Zap, title: "AI Performance Analytics", desc: "Identify your weak areas instantly. Compare your section-wise time taken against the top percentiles to understand where you need to improve your speed." }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 bg-primary/10 dark:bg-accent/10 rounded-2xl flex items-center justify-center text-primary dark:text-accent mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <feat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feat.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. The Two Test Series Packages */}
            <div id="test-series" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-primary dark:text-accent font-bold tracking-wider uppercase text-sm mb-4 block">Select Your Battle Plan</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">SSC CGL Test Series Plans</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Choose the plan that fits your preparation needs. Upgrade anytime.</p>
                    </div>

                    <SscTestSeriesCards examName="SSC CGL" />
                </div>
            </div>

            {/* 6. Call to Action Footer Area */}
            <div className="bg-slate-900 dark:bg-slate-950 py-24 relative overflow-hidden border-t border-slate-800">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Crack SSC CGL?</h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">Don't wait for the notification. Start your preparation early and stay ahead of the massive competition.</p>
                    <div className="flex justify-center">
                        <Link href="/pricing" className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl shadow-primary/20 flex items-center gap-2">
                            Start Free Trial Mock <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
