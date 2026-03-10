import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, BarChart, Clock, Layout,
    Calendar, Layers, Zap, Star, Award, Landmark,
    PenTool, BrainCircuit, Flag, Compass, CheckSquare, Crosshair
} from 'lucide-react';
import CapfTestSeriesCards from '@/components/CapfTestSeriesCards';

export const metadata = {
    title: 'UPSC CAPF (AC) 2026 - ExamBoost',
    description: 'Complete guide and test series for UPSC Central Armed Police Forces (Assistant Commandants) Examination 2026. Includes Paper I (Objective) and Paper II (Descriptive) evaluations.'
};

export default function UpscCapfPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#050b14] w-full font-sans selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-100">

            {/* 1. Ultra Premium Hero Section for CAPF - Military/Emerald Aesthetic */}
            <div className="relative overflow-hidden bg-white dark:bg-[#050b14] border-b border-slate-200/50 dark:border-slate-800/80 pt-20 md:pt-28">
                {/* Subtle Background Elements suited for "Forces/Defense" feel */}
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-[#081a11]/80 dark:to-transparent opacity-80 pointer-events-none" />
                <div className="absolute -top-[200px] right-[10%] w-[800px] h-[600px] rounded-[100%] bg-gradient-to-b from-emerald-100/40 to-transparent dark:from-emerald-900/10 blur-[100px] pointer-events-none transform -rotate-12" />
                <div className="absolute top-[20%] -left-[100px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-100/30 to-transparent dark:from-sky-900/10 blur-3xl pointer-events-none" />


                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-4 md:pt-8 relative z-10">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 flex-wrap mb-10 md:mb-14">
                        <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Exams</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams/upsc-civil-services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Civil Services & Defense</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <span className="text-slate-900 dark:text-slate-300 font-semibold">CAPF (AC)</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="flex-1 space-y-8 w-full">
                            <div className="space-y-5">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-emerald-200 dark:border-emerald-800/50 shadow-sm backdrop-blur-sm">
                                        <Calendar className="w-3.5 h-3.5" /> Target 2026
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                                        <ShieldCheck className="w-3.5 h-3.5" /> BSF, CRPF, CISF, ITBP, SSB
                                    </div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                                    Lead The Forces. <br className="hidden sm:block" />
                                    <span className="relative whitespace-nowrap">
                                        <span className="relative z-10 text-emerald-600 dark:text-emerald-500">CAPF (AC).</span>
                                        <svg className="absolute w-full h-3 -bottom-1 sm:bottom-0 left-0 text-emerald-600/20 dark:text-emerald-500/30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                        </svg>
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed lg:leading-loose">
                                    Command the Central Armed Police Forces. The Assistant Commandant examination demands dual expertise: objective precision in <strong className="text-slate-900 dark:text-slate-200 font-semibold">General Ability (Paper I)</strong> and descriptive articulation in <strong className="text-slate-900 dark:text-slate-200 font-semibold">General Studies & Essays (Paper II)</strong>.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <a href="#test-series" className="group relative inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 w-full sm:w-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                    <Crosshair className="w-5 h-5 relative z-10" /> <span className="relative z-10">Start Simulation Mocks</span>
                                </a>
                                <a href="#pattern" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm w-full sm:w-auto">
                                    <BookOpen className="w-5 h-5" /> Both Paper Details
                                </a>
                            </div>

                        </div>

                        {/* Right Desktop Interactive Widget Card */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-8 lg:mt-0">
                            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]/50 dark:from-[#0a1510] dark:to-[#020503] border border-slate-200/80 dark:border-emerald-900/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 sm:p-10 group">

                                {/* Dynamic Background */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.05] dark:group-hover:opacity-[0.08] transition-opacity duration-1000"></div>
                                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-br from-transparent to-emerald-500/5 dark:to-emerald-500/10 opacity-50 mix-blend-multiply dark:mix-blend-lighten"></div>

                                {/* Main floating widget */}
                                <div className="relative z-10 w-full max-w-md bg-white/95 dark:bg-[#0b120e]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 dark:border-emerald-800/30 shadow-[0_25px_50px_-12px_rgba(16,185,129,0.1)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transform transition-transform duration-700 hover:scale-[1.02]">

                                    <div className="flex items-start sm:items-center justify-between mb-8 pb-5 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-800/40 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center shadow-inner">
                                                <Target className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Dual Stage Written</div>
                                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Same Day Exam</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-500 tracking-tighter">450</div>
                                            <div className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1">Total Marks</div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Progress Bar 1 */}
                                        <div className="group/bar">
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">Paper I <span className="font-normal text-slate-500">(Objective)</span></div>
                                                <div className="text-emerald-600 dark:text-emerald-400 text-xs font-black">250 Marks</div>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2.5 rounded-full overflow-hidden shrink-0 shadow-inner">
                                                <div className="bg-gradient-to-r from-emerald-400 to-teal-500 w-full h-full rounded-full relative overflow-hidden">
                                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 mt-1.5 font-medium">125 MCQs • GS & Reasoning • 2 Hours</p>
                                        </div>

                                        {/* Progress Bar 2 */}
                                        <div className="group/bar pt-2">
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">Paper II <span className="font-normal text-slate-500">(Descriptive)</span></div>
                                                <div className="text-sky-600 dark:text-sky-400 text-xs font-black">200 Marks</div>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2.5 rounded-full overflow-hidden shrink-0 shadow-inner">
                                                <div className="bg-gradient-to-r from-sky-400 to-blue-500 w-full h-full rounded-full"></div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 mt-1.5 font-medium">Essay, Precis, Comprehension • 3 Hours</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-[#070e0a] px-4 py-3 rounded-xl border border-slate-100/50 dark:border-emerald-900/20">
                                        <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                                            Next Stage: PST/PET (Qualifying)
                                        </span>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="hidden sm:flex absolute top-[15%] left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white dark:border-slate-700 items-center gap-2.5 animate-[float_4s_ease-in-out_infinite]">
                                    <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/50 flex flex-col items-center justify-center text-rose-600 dark:text-rose-400 font-black text-xs leading-none">-0.33</div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Paper I Only</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">Negative Mark</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. Detailed Pattern Info */}
            <div id="pattern" className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#050b14] relative border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <span className="inline-block mb-4 text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-xs border border-emerald-600/20 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/10 rounded-full">Written Examination Blueprint</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Two Distinct Challenge Parameters</h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Both papers are conducted on the same day in offline mode. <strong className="text-slate-800 dark:text-slate-200">Paper-I is evaluated first. Only if you cross the qualifying cutoff for Paper-I, your Paper-II gets evaluated.</strong></p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Paper 1 */}
                        <div className="bg-white dark:bg-[#0b120e] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-600"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center">
                                        <Target className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-1">Paper I</h3>
                                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400">General Ability & Intelligence</div>
                                    </div>
                                </div>
                                <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider self-start sm:self-auto border border-emerald-200 dark:border-emerald-800/50">Objective (MCQ)</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Questions</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">125</div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">2 Marks Each</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Marks</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">250</div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">1/3rd Negative (-0.66)</div>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>Duration: <strong>2 Hours</strong> (Morning Shift)</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <CheckSquare className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>Bilingual: Set in both English & Hindi.</span>
                                </li>
                            </ul>

                            <div className="p-5 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-[#0b120e] rounded-2xl border border-slate-200 dark:border-slate-700">
                                <strong className="text-slate-800 dark:text-slate-200 block mb-2 text-sm uppercase tracking-wide">Syllabus Focus</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    General Mental Ability (Math/Reasoning), General Science, History of India, Geography, Polity & Economy, and Current Events (National/International).
                                </p>
                            </div>
                        </div>

                        {/* Paper 2 */}
                        <div className="bg-white dark:bg-[#0b1221] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-sky-500/30 transition-colors">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-sky-400 to-blue-600"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-2xl flex items-center justify-center">
                                        <PenTool className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-1">Paper II</h3>
                                        <div className="text-sm font-bold text-slate-500 dark:text-slate-400">GS, Essay & Comprehension</div>
                                    </div>
                                </div>
                                <span className="bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider self-start sm:self-auto border border-sky-200 dark:border-sky-800/50">Subjective Format</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Part A (Essays)</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">80<span className="text-sm text-slate-500 ml-1">Marks</span></div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">Write 4 out of 6 (Eng/Hin)</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Part B</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">120<span className="text-sm text-slate-500 ml-1">Marks</span></div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">Comprehension/Precis (Eng Only)</div>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <Clock className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                                    <span>Duration: <strong>3 Hours</strong> (Afternoon Shift)</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span><strong className="text-slate-900 dark:text-white">No Negative Marking.</strong> Evaluated only if Paper I is passed.</span>
                                </li>
                            </ul>

                            <div className="p-5 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-[#0b1221] rounded-2xl border border-slate-200 dark:border-slate-700">
                                <strong className="text-slate-800 dark:text-slate-200 block mb-2 text-sm uppercase tracking-wide">Syllabus Focus</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Internal Security, Human Rights, History & Geography (Essays). Précis writing, counter-arguments, and basic English Grammar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CAPF Specific Strategy Section */}
            <div className="py-20 md:py-28 bg-white dark:bg-[#050b14]/50 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block">Strategic Focus</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">The Assistant Commandant Approach</h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 w-full max-w-2xl mx-auto">Unlike CSE, CAPF requires a specialized focus on grammar, arguments, and internal security issues.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {/* Tactic 1 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 dark:bg-teal-900/30 flex items-center justify-center mb-8">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Paper I Defines <br /> Your Floor</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                                Historically, general category cutoffs hover around 115-125 for Paper I. You cannot rely solely on the subjective paper. High accuracy in History, Science & Polity is non-negotiable.
                            </p>
                        </div>

                        {/* Tactic 2 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 flex items-center justify-center mb-8">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Grammar is <br /> Free Marks</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                                In Paper II, the 25 marks assigned to Grammar (Active/Passive, Direct/Indirect, clauses) are highly objective. Perfecting these can be the difference between selection and rejection.
                            </p>
                        </div>

                        {/* Tactic 3 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 flex items-center justify-center mb-8">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Argue With <br /> Structure</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                                The 'Arguments For and Against' question in Paper II requires a highly specific format. You must present balanced, rational points devoid of extreme bias, reflecting officer-like qualities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Test Series Pitch */}
            <div id="test-series" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#050b14] relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-40 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 font-bold tracking-widest uppercase text-xs mb-6 border border-emerald-200 dark:border-emerald-800/50">
                            UPSC CAPF Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                            Prepare For Total <br className="hidden md:block" /> Dominance.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                            Select our Objective focus or opt for our comprehensive bundle evaluating your Essays and Arguments to ensure you wear the 3 Stars.
                        </p>
                    </div>

                    <CapfTestSeriesCards examName="UPSC CAPF (AC)" />
                </div>
            </div>

        </div>
    );
}
