import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, Clock, Layout, Play, Briefcase, Award,
    Calendar, Layers, Zap, PenTool, Globe, Fingerprint, Crosshair, ChevronDown, Compass
} from 'lucide-react';
import CdsTestSeriesCards from '@/components/CdsTestSeriesCards';

export const metadata = {
    title: 'UPSC CDS 2026 Preparation & Mock Tests - ExamBoost',
    description: 'Detailed strategy, syllabus, paper pattern and premium Mock Test series for UPSC Combined Defence Services (CDS) Examination 2026. Includes OTA and IMA specific preparation.'
};

export default function UpscCdsPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#030712] w-full font-sans selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-100">

            {/* 1. Ultra Premium Hero Section for CDS - Deep Indigo/AirForce Aesthetic */}
            <div className="relative overflow-hidden bg-white dark:bg-[#030712] border-b border-slate-200/50 dark:border-slate-800/80 pt-20 md:pt-28">
                {/* Subtle Background Elements suited for "Tri-Services/Aviation" feel */}
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-[#080b2a]/80 dark:to-transparent opacity-80 pointer-events-none" />
                <div className="absolute -top-[200px] right-[10%] w-[800px] h-[600px] rounded-[100%] bg-gradient-to-b from-indigo-100/40 to-transparent dark:from-indigo-900/10 blur-[100px] pointer-events-none transform -rotate-12" />
                <div className="absolute top-[20%] -left-[100px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-100/30 to-transparent dark:from-sky-900/10 blur-3xl pointer-events-none" />


                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-4 md:pt-8 relative z-10">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 flex-wrap mb-10 md:mb-14">
                        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Exams</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams/upsc-civil-services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Civil Services & Defense</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <span className="text-slate-900 dark:text-slate-300 font-semibold">UPSC CDS</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="flex-1 space-y-8 w-full">
                            <div className="space-y-5">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-indigo-200 dark:border-indigo-800/50 shadow-sm backdrop-blur-sm">
                                        <Calendar className="w-3.5 h-3.5" /> Target 2026 (I & II)
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                                        <Compass className="w-3.5 h-3.5" /> IMA | INA | AFA | OTA
                                    </div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                                    Earn The <br className="hidden sm:block" />
                                    <span className="relative whitespace-nowrap">
                                        <span className="relative z-10 text-indigo-600 dark:text-indigo-500">Commission.</span>
                                        <svg className="absolute w-full h-3 -bottom-1 sm:bottom-0 left-0 text-indigo-600/20 dark:text-indigo-500/30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                        </svg>
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed lg:leading-loose font-medium">
                                    The Combined Defence Services Exam is the gateway to India's prestigious military academies. Depending on your target (OTA vs IMA), prepare for a grueling 4-to-6 hour objective test covering English, GK, and Elementary Mathematics.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <a href="#test-series" className="group relative inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700 px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 w-full sm:w-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                    <Target className="w-5 h-5 relative z-10" /> <span className="relative z-10">Start Simulation Mocks</span>
                                </a>
                                <a href="#pattern" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm w-full sm:w-auto">
                                    <BookOpen className="w-5 h-5" /> View Exam Pattern
                                </a>
                            </div>

                        </div>

                        {/* Right Desktop Interactive Widget Card */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-8 lg:mt-0">
                            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]/50 dark:from-[#0a0f1d] dark:to-[#030612] border border-slate-200/80 dark:border-indigo-900/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 sm:p-10 group">

                                {/* Dynamic Background */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.05] dark:group-hover:opacity-[0.08] transition-opacity duration-1000"></div>
                                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-br from-transparent to-indigo-500/5 dark:to-indigo-500/10 opacity-50 mix-blend-multiply dark:mix-blend-lighten"></div>

                                {/* Main floating widget */}
                                <div className="relative z-10 w-full max-w-md bg-white/95 dark:bg-[#0b1021]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 dark:border-indigo-800/30 shadow-[0_25px_50px_-12px_rgba(79,70,229,0.1)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transform transition-transform duration-700 hover:scale-[1.02]">

                                    <div className="flex items-start sm:items-center justify-between mb-8 pb-5 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/40 dark:to-indigo-800/40 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center shadow-inner">
                                                <Compass className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">CDS Written Assessment</div>
                                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Offline Mode (OMR)</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-500 tracking-tighter">300</div>
                                            <div className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1">Total Marks (IMA)</div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Progress Bar 1 */}
                                        <div className="group/bar">
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">English Component</div>
                                                <div className="text-indigo-600 dark:text-indigo-400 text-xs font-black">100 Marks</div>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2.5 rounded-full overflow-hidden shrink-0 shadow-inner">
                                                <div className="bg-gradient-to-r from-indigo-400 to-blue-500 w-full h-full rounded-full relative overflow-hidden">
                                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 mt-1.5 font-medium flex justify-between">
                                                <span>120 MCQs</span>
                                                <span>2 Hours</span>
                                            </p>
                                        </div>

                                        {/* Progress Bar 2 */}
                                        <div className="group/bar pt-1 border-t border-slate-50 dark:border-slate-800/50">
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">General Knowledge</div>
                                                <div className="text-sky-600 dark:text-sky-400 text-xs font-black">100 Marks</div>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2.5 rounded-full overflow-hidden shrink-0 shadow-inner">
                                                <div className="bg-gradient-to-r from-sky-400 to-cyan-500 w-full h-full rounded-full"></div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 mt-1.5 font-medium flex justify-between">
                                                <span>120 MCQs</span>
                                                <span>2 Hours</span>
                                            </p>
                                        </div>

                                        {/* Progress Bar 3 */}
                                        <div className="group/bar pt-1 border-t border-slate-50 dark:border-slate-800/50 filter brightness-95 opacity-80">
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                                    Elementary Math <span className="px-1.5 py-[1px] bg-slate-200 dark:bg-slate-700 rounded text-[8px] uppercase tracking-wider text-slate-600 dark:text-slate-300">Not for OTA</span>
                                                </div>
                                                <div className="text-amber-600 dark:text-amber-400 text-xs font-black">100 Marks</div>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2.5 rounded-full overflow-hidden shrink-0 shadow-inner">
                                                <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-full h-full rounded-full"></div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 mt-1.5 font-medium flex justify-between">
                                                <span>100 MCQs</span>
                                                <span>2 Hours</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-indigo-50 dark:bg-[#080b1d] px-4 py-3 rounded-xl border border-indigo-100/50 dark:border-indigo-900/20">
                                        <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                                            Next Stage: SSB Interview (5 Days)
                                        </span>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="hidden sm:flex absolute top-[15%] left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white dark:border-slate-700 items-center gap-2.5 animate-[float_4s_ease-in-out_infinite]">
                                    <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/50 flex flex-col items-center justify-center text-rose-600 dark:text-rose-400 font-black text-xs leading-none">-0.33</div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">In All Papers</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">Negative Mark</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. Detailed Pattern Info */}
            <div id="pattern" className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#030712] relative border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <span className="inline-block mb-4 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs border border-indigo-600/20 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/10 rounded-full">Written Examination Blueprint</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">IMA vs OTA Paper Structure</h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Officers Training Academy (OTA) candidates are <strong className="text-slate-800 dark:text-slate-200">exempted from the Elementary Mathematics paper</strong>, making their total exam out of 200 marks instead of 300.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {/* English Paper */}
                        <div className="bg-white dark:bg-[#0b1021] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-400 to-blue-600"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center">
                                    <BookOpen className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-1">English</h3>
                                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded px-2 py-1 inline-block mt-1">For Both IMA & OTA</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 mb-6">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Questions</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">120</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Marks</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">100</div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                    <Clock className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                    <span>Duration: <strong>2 Hours</strong></span>
                                </li>
                            </ul>

                            <div className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-[#0b1021] rounded-2xl border border-slate-200 dark:border-slate-700">
                                <strong className="text-slate-800 dark:text-slate-200 block mb-1 text-xs uppercase tracking-wide">Key Topics</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Synonyms/Antonyms, Error Spotting, Para Jumbles, Comprehension, Sentence Correction.</p>
                            </div>
                        </div>

                        {/* General Knowledge */}
                        <div className="bg-white dark:bg-[#0b1021] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-sky-500/30 transition-colors">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-sky-400 to-cyan-600"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-2xl flex items-center justify-center">
                                    <Globe className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-1">General Knowledge</h3>
                                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded px-2 py-1 inline-block mt-1">For Both IMA & OTA</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 mb-6">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Questions</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">120</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Marks</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">100</div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                    <Clock className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                                    <span>Duration: <strong>2 Hours</strong></span>
                                </li>
                            </ul>

                            <div className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-[#0b1021] rounded-2xl border border-slate-200 dark:border-slate-700">
                                <strong className="text-slate-800 dark:text-slate-200 block mb-1 text-xs uppercase tracking-wide">Key Topics</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Defense news, Current Affairs, Physics/Chem/Bio, History, Geography, Polity & Economics.</p>
                            </div>
                        </div>

                        {/* Elementary Math */}
                        <div className="bg-white dark:bg-[#0b1021] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-amber-500/30 transition-colors md:col-span-2 lg:col-span-1">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 to-orange-600"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center">
                                    <Layout className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-1">Elementary Math</h3>
                                    <div className="text-xs font-bold text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 rounded px-2 py-1 inline-block mt-1">Not For OTA Candidates</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 mb-6">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Questions</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">100</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Marks</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">100</div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                                    <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>Duration: <strong>2 Hours</strong></span>
                                </li>
                            </ul>

                            <div className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-[#0b1021] rounded-2xl border border-slate-200 dark:border-slate-700">
                                <strong className="text-slate-800 dark:text-slate-200 block mb-1 text-xs uppercase tracking-wide">Key Topics</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Arithmetic, Algebra, Trigonometry, Geometry, Mensuration & Basic Statistics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CAPF Specific Strategy Section */}
            <div className="py-20 md:py-28 bg-white dark:bg-[#030712]/50 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block">Strategic Focus</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Cracking the CDS Code</h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 w-full max-w-2xl mx-auto">Unlike Civil Services, CDS requires speed, accuracy, and endurance to sit through 6 hours of testing in a single day.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {/* Tactic 1 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 flex items-center justify-center mb-8">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">English is the <br /> Rank Maker</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                                Historically, out of the 100 marks, successful candidates consistently score 65-80 in English. It is highly scoring if rules of grammar and vocabulary are practiced exhaustively via PYQs.
                            </p>
                        </div>

                        {/* Tactic 2 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 flex items-center justify-center mb-8">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">GK is the <br /> Eliminator</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                                The GK paper is notoriously tough, often bordering on CSE prelims difficulty. Securing merely 20% sectional cutoff is hard for many. Focus heavily on Basic Sciences (30 Qs) and Defense News.
                            </p>
                        </div>

                        {/* Tactic 3 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 flex items-center justify-center mb-8">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Math Demands <br /> Tricks, Not Steps</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium">
                                Attempting 100 Math questions in 120 minutes gives ~1 minute per question. Conventional methods fail here. You must deploy unit digit methods, option elimination, and direct shortcut formulas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Test Series Pitch */}
            <div id="test-series" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#030712] relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-40 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs mb-6 border border-indigo-200 dark:border-indigo-800/50">
                            UPSC CDS Mock Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                            Test Before You <br className="hidden md:block" /> Get Tested.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                            Select our specialized OTA track, or enroll in the complete IMA package covering Advanced Elementary Mathematics tests and tricks.
                        </p>
                    </div>

                    <CdsTestSeriesCards examName="UPSC CDS" />
                </div>
            </div>

        </div>
    );
}
