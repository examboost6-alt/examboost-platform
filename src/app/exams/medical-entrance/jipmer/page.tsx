import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, BarChart, Clock, Layout,
    Calendar, Layers, Zap, Star, Award, Stethoscope
} from 'lucide-react';
import JipmerTestSeriesCards from '@/components/JipmerTestSeriesCards';

export const metadata = {
    title: 'JIPMER Nursing & Paramedical 2026 - ExamBoost',
    description: 'Comprehensive preparation resources, full-length CBT mock tests, complete exam information, syllabus, and study materials for JIPMER 2026.'
};

export default function JipmerPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full">

            {/* 1. Modern Clean Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-20 pt-4 md:pt-8">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 flex-wrap mb-8">
                        <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams/medical-entrance" className="hover:text-primary dark:hover:text-accent transition-colors">Medical</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-white">JIPMER</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">JIPMER Standard 2026</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">Computer Based Test (CBT)</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                                    Conquer <span className="text-violet-600 dark:text-violet-500">JIPMER</span> Puducherry.
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                                    Excel in the JIPMER Allied Health Sciences and Paramedical Entrance. Master your core science subjects alongside crucial English Language and Logical Reasoning elements.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#test-series" className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                                    <Star className="w-5 h-5 fill-current" /> Explore Mock Tests
                                </a>
                                <a href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5" /> Exam Details & Syllabus
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                                <div className="flex -space-x-3">
                                    {[4, 5, 2].map(i => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 22}`} alt="Student" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-xs font-bold text-violet-700 dark:text-violet-400">
                                        25k+
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                    Trusted by <span className="font-bold text-slate-900 dark:text-white">25k+</span> <br /> Priority JIPMER Aspirants
                                </div>
                            </div>
                        </div>

                        {/* Infographic Hero Image replacement */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none">
                            <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">
                                {/* Decorative background grid */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

                                {/* Main floating card */}
                                <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-500 rounded-xl flex items-center justify-center">
                                                <Stethoscope className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">Target Score Goal</div>
                                                <div className="text-xs font-medium text-slate-500">Allied Health Sciences</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-black text-violet-600 dark:text-violet-500">320+</div>
                                            <div className="text-xs font-bold text-slate-500">/ 400 Marks</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Core Sciences (P/C/B)</span> <span>~220/240</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-green-500 w-[90%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>English Language</span> <span>~50/80</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-sky-500 w-[62%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Logical & Quantitative</span> <span>~50/80</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-orange-400 w-[62%] h-full rounded-full"></div></div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> JIPMER Main Campus Target</span>
                                    </div>
                                </div>

                                {/* small floating elements */}
                                <div className="absolute top-12 left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
                                    <Zap className="w-4 h-4 text-amber-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">90 Minutes (1.5 Hr)</span>
                                </div>
                                <div className="absolute bottom-12 right-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_4s_infinite_1s]">
                                    <Layout className="w-4 h-4 text-violet-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Section English & Logic Included</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. Clear Information Cards */}
            <div id="exam-info" className="py-20 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Everything About JIPMER Entrance</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Crucial information covering JIPMER specific format for allied courses not covered completely via NEET.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Layout, title: "Exam Mode", desc: "Online Computer Based Test (CBT), Medium: English Only." },
                            { icon: Target, title: "Total Questions", desc: "100 Multiple Choice Questions (MCQs) in total." },
                            { icon: ShieldCheck, title: "Marking Scheme", desc: "+4 marks for correct choice, -1 mark deducted for mistakes." },
                            { icon: Clock, title: "Duration", desc: "Strictly 90 minutes (1 hour 30 mins) time limit constraint." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-violet-50 dark:bg-violet-900/20 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-[250px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Section Pattern Overview */}
            <div className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

                        <div className="flex-1 space-y-6 lg:max-w-xl">
                            <span className="text-violet-600 dark:text-violet-500 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <BarChart className="w-4 h-4" /> Exam Strategy
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Section Breakdown Details
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                While B.Sc. Nursing mostly accepts NEET UG scores, JIPMER conducts its own exclusive exams for Paramedical and Allied Health Sciences introducing distinct sections you must prepare for.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-500 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">Core Sciences:</strong> Physics, Chemistry, and Biology form the bulk (60% weightage).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-500 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">English and Logistics:</strong> English Language & Comprehension, Logic & Quantitative Aptitude cover massive 40% weightage.</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold italic">
                                    "Only 90 minutes for 100 questions. Your speed over comprehension and quantitative logic sections will define your final JIPMER rank."
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 w-full bg-slate-50 dark:bg-slate-800/30 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Questions Weightage</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { sub: "Biology", total: "80 Marks", items: 20, color: "bg-green-500" },
                                    { sub: "Physics", total: "80 Marks", items: 20, color: "bg-indigo-500" },
                                    { sub: "Chemistry", total: "80 Marks", items: 20, color: "bg-cyan-500" },
                                    { sub: "English Comprehension", total: "80 Marks", items: 20, color: "bg-violet-500" },
                                    { sub: "Logical & Quant Reasoning", total: "80 Marks", items: 20, color: "bg-orange-400" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center group">
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1.5">
                                                <span className="font-bold text-slate-900 dark:text-white">{item.sub}</span>
                                                <span className="font-semibold text-slate-500">{item.total}</span>
                                            </div>
                                            <div className="flex h-3 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                                <div className={`${item.color} w-full h-full group-hover:opacity-90 transition-opacity`} />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">
                                                <span>{item.items} Questions</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                    <span className="font-black text-violet-600 dark:text-violet-500">Maximum Possible</span>
                                    <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 font-bold px-3 py-1 rounded">400 Marks</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4. Preparation Focus Sections */}
            <div className="py-20 bg-slate-100 dark:bg-slate-950/50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-violet-600 dark:text-violet-500 font-bold tracking-wider uppercase text-sm mb-4 block">Important Guidelines</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">JIPMER Action Plan</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">English Focus</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                Basic grammar, antonyms/synonyms, reading comprehension, and error spotting are crucial. JIPMER tests standard 12th curriculum English heavily compared to pure medical tests.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Aptitude & Reasoning</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                Practice basic sequences, number patterns, generic logic puzzles, and quantitative relations. This section often surprises medical students who lack math/aptitude backgrounds.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Extreme Time Crunch</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                100 questions in 90 minutes. That means less than 1 minute to read, understand, and select. Accuracy is key since there's a negative (-1) marking penalty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Main Test Series Call to Action */}
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 font-bold tracking-wider uppercase text-xs mb-6 inline-block shadow-sm">Your Dream College Awaits</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">JIPMER Preparation Series</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Practice under exact CBT time pressure with logic & english sections included. 100-Questions simulator sets exclusively curated for Puducherry campus aspirants.
                        </p>
                    </div>

                    <JipmerTestSeriesCards examName="JIPMER" />
                </div>
            </div>

        </div>
    );
}
