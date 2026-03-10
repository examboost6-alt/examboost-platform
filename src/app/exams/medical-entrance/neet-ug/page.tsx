import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, BarChart, Clock, Layout,
    Calendar, Layers, Zap, Star, Award, Stethoscope
} from 'lucide-react';
import MedicalTestSeriesCards from '@/components/MedicalTestSeriesCards';

export const metadata = {
    title: 'NEET UG Preparation 2026 - ExamBoost',
    description: 'Comprehensive preparation resources, full-length mock tests, complete exam information, syllabus, and NCERT-based study materials for NEET UG 2026.'
};

export default function NeetUgPage() {
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
                        <span className="text-slate-900 dark:text-white">NEET UG</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">Mission MBBS 2026</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">Pen & Paper (OMR) mode</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                                    Score <span className="text-rose-600 dark:text-rose-500">680+</span> in NEET UG 2026.
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                                    Conquer the ultimate medical entrance test with ExamBoost. Experience strictly NCERT-aligned content, 180-question pattern simulators, and error-free biology tests to seal your seat in a Government Medical College.
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
                                    {[2, 3, 4].map(i => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="Student" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs font-bold text-rose-700 dark:text-rose-400">
                                        5L+
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                    Trusted by <span className="font-bold text-slate-900 dark:text-white">5 Lakh+</span> <br /> Medical Aspirants
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
                                            <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-500 rounded-xl flex items-center justify-center">
                                                <Stethoscope className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">Target Score</div>
                                                <div className="text-xs font-medium text-slate-500">Government Medical College</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-black text-rose-600 dark:text-rose-500">685</div>
                                            <div className="text-xs font-bold text-slate-500">/ 720 Goal</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Biology (Botany + Zoology)</span> <span>350/360</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-rose-500 w-[95%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Chemistry</span> <span>170/180</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-indigo-500 w-[94%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Physics</span> <span>165/180</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-teal-500 w-[91%] h-full rounded-full"></div></div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Safe Zone for Top 5000 Rank</span>
                                    </div>
                                </div>

                                {/* small floating elements */}
                                <div className="absolute top-12 left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
                                    <Zap className="w-4 h-4 text-amber-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">180 Mins</span>
                                </div>
                                <div className="absolute bottom-12 right-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_4s_infinite_1s]">
                                    <BookOpen className="w-4 h-4 text-rose-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Revised NCERT</span>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Everything About NEET UG 2026</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Mastering the largest medical entrance examination requires knowing the rules thoroughly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Layout, title: "Exam Mode", desc: "Offline Pen and Paper based test using OMR sheets." },
                            { icon: Target, title: "Format", desc: "180 Mandatory Multiple Choice Questions. No optional choices." },
                            { icon: ShieldCheck, title: "Total Marks", desc: "Exam is out of 720 (+4 for correct, -1 for incorrect answers)." },
                            { icon: Clock, title: "Duration", desc: "You have strictly 3 hours & 20 mins (200 minutes) to conclude." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6">
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
                            <span className="text-rose-600 dark:text-rose-500 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <BarChart className="w-4 h-4" /> Exam Strategy
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Revised 2026 Exam Format
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                NTA has reverted to the pre-COVID examination pattern for NEET UG. Starting from 2025/2026, there are no longer any optional questions in the examination.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-500 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">180 Questions:</strong> All 180 questions provided in the exam are now strictly mandatory.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-500 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">Uniform Division:</strong> Exactly 45 questions each from Physics, Chemistry, Botany, and Zoology.</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold italic">
                                    "With the removal of optional questions, maintaining accuracy across all chapters is more critical than ever, as you can no longer skip difficult questions by choice."
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 w-full bg-slate-50 dark:bg-slate-800/30 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Official Weightage</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { sub: "Botany", total: "180 Marks", items: 45, color: "bg-green-500" },
                                    { sub: "Zoology", total: "180 Marks", items: 45, color: "bg-emerald-600" },
                                    { sub: "Chemistry", total: "180 Marks", items: 45, color: "bg-indigo-500" },
                                    { sub: "Physics", total: "180 Marks", items: 45, color: "bg-teal-500" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center group">
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1.5">
                                                <span className="font-bold text-slate-900 dark:text-white">{item.sub}</span>
                                                <span className="font-semibold text-slate-500">{item.total}</span>
                                            </div>
                                            <div className="flex h-3 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                                <div className={`${item.color} w-full h-full group-hover:opacity-90 transition-opacity`} title={`${item.items} Questions`} />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">
                                                <span>{item.items} Mandatory Questions</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                    <span className="font-black text-rose-600 dark:text-rose-500">Grand Total</span>
                                    <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 font-bold px-3 py-1 rounded">720 Marks</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4. Subject Focus Sections */}
            <div className="py-20 bg-slate-100 dark:bg-slate-950/50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-rose-600 dark:text-rose-500 font-bold tracking-wider uppercase text-sm mb-4 block">Preparation Strategy</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Focus on Core Topics</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Biology Supremacy</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                Comprising exactly 50% of the entire paper (360 Marks), Biology is purely NCERT-centric. Read between the lines. Botany and Zoology requires extensive revision, not rote deciphering.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> Focus on Genetics & Ecology</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-500" /> Human Physiology weightage</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Chemistry Logic</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                Divide your focus effectively between Organic (reactions & mechanisms), Inorganic (periodic trends & exact NCERT facts) and Physical chemistry (concept based derivations).
                            </p>
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-indigo-500" /> Name Reactions are crucial</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-indigo-500" /> NCERT back exercises pattern</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/30 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Physics Speed</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                The rank decider section. Rather than deep JEE-Advanced derivations, NEET emphasizes rapid formula application, dimensional analysis, and error calculations. Focus on Mechanics and Electrodynamics.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Modern Physics ensures easy marks</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Formula sheets daily revision</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Main Test Series Call to Action */}
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 font-bold tracking-wider uppercase text-xs mb-6 inline-block shadow-sm">Over 1,50,000 Aspirants Trust Us</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Select Your Preparation Plan</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            High Quantity block tests matching real NTA exam interface & standards. Smashed the market price by 10% to empower your prep.
                        </p>
                    </div>

                    <MedicalTestSeriesCards examName="NEET UG" />
                </div>
            </div>

        </div>
    );
}
