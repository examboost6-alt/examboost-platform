import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, BarChart, Clock, Layout,
    Calendar, Layers, Zap, Star, Award, Landmark,
    PenTool, BrainCircuit, Flag, Compass, ChevronDown, Check
} from 'lucide-react';
import UpscTestSeriesCards from '@/components/UpscTestSeriesCards';

export const metadata = {
    title: 'UPSC CSE Prelims 2026 - ExamBoost',
    description: 'Complete guide for UPSC Civil Services Examination (CSE) Prelims 2026. Exam pattern, marking scheme, CSAT details, and full length mock test series.'
};

export default function UpscCsePrelimsPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#050b14] w-full font-sans selection:bg-[#0e3b6d]/30 selection:text-[#0e3b6d] dark:selection:bg-[#2f75bd]/30 dark:selection:text-white">

            {/* 1. Ultra Premium Hero Section */}
            <div className="relative overflow-hidden bg-white dark:bg-[#050b14] border-b border-slate-200/50 dark:border-slate-800/80 pt-20 md:pt-28">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#f0f4f8] to-transparent dark:from-[#0a1526] dark:to-transparent opacity-80 pointer-events-none" />
                <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-[#0e3b6d]/5 to-transparent dark:from-[#2f75bd]/10 blur-3xl pointer-events-none" />
                <div className="absolute top-[20%] -left-[100px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-rose-500/5 to-transparent dark:from-rose-500/10 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-4 md:pt-8 relative z-10">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 flex-wrap mb-10 md:mb-14">
                        <Link href="/" className="hover:text-[#0e3b6d] dark:hover:text-[#4290e3] transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams" className="hover:text-[#0e3b6d] dark:hover:text-[#4290e3] transition-colors">Exams</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams/upsc-civil-services" className="hover:text-[#0e3b6d] dark:hover:text-[#4290e3] transition-colors">Civil Services</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <span className="text-slate-900 dark:text-slate-300 font-semibold">CSE Prelims</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="flex-1 space-y-8 w-full">
                            <div className="space-y-5">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <div className="inline-flex items-center gap-1.5 bg-[#0e3b6d]/5 text-[#0e3b6d] dark:bg-[#2f75bd]/10 dark:text-[#6ba1e8] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#0e3b6d]/10 dark:border-[#2f75bd]/20 shadow-sm backdrop-blur-sm">
                                        <Calendar className="w-3.5 h-3.5" /> Target 2026
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                                        <Layout className="w-3.5 h-3.5" /> OMR Offline
                                    </div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                                    Clear the First Hurdle. <br className="hidden sm:block" />
                                    <span className="relative whitespace-nowrap">
                                        <span className="relative z-10 text-[#0e3b6d] dark:text-[#4290e3]">UPSC Prelims.</span>
                                        <svg className="absolute w-full h-3 -bottom-1 sm:bottom-0 left-0 text-[#0e3b6d]/20 dark:text-[#4290e3]/30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                        </svg>
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed lg:leading-loose">
                                    The Civil Services Preliminary Examination is a rigorous screening test. Prepare with absolute precision for the decisive <strong className="text-slate-900 dark:text-slate-200 font-semibold">May 24, 2026</strong> evaluation covering General Studies and CSAT.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <a href="#test-series" className="group relative inline-flex items-center justify-center gap-2 bg-[#0e3b6d] hover:bg-[#0a2749] text-white dark:bg-[#1a5b9c] dark:hover:bg-[#134982] px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(14,59,109,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(14,59,109,0.6)] hover:-translate-y-0.5 w-full sm:w-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                    <Landmark className="w-5 h-5 relative z-10" /> <span className="relative z-10">Start Prelims Mocks</span>
                                </a>
                                <a href="#exam-info" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm w-full sm:w-auto">
                                    <BookOpen className="w-5 h-5" /> Exam Pattern
                                </a>
                            </div>

                            {/* Handcrafted Trust Indicator */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-8 border-t border-slate-200/60 dark:border-slate-800/60">
                                <div className="flex -space-x-3 isolate">
                                    {[1, 9, 3, 5].map(i => (
                                        <div key={i} className={`w-11 h-11 rounded-full border-2 border-white dark:border-[#050b14] bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden shadow-sm hover:-translate-y-1 transition-transform relative z-[${10 - i}]`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 13}`} alt="UPSC Aspirant" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-11 h-11 rounded-full border-2 border-white dark:border-[#050b14] bg-gradient-to-br from-[#e6f0fa] to-[#d2e4f5] dark:from-[#0e3b6d]/60 dark:to-[#0a2749]/80 flex items-center justify-center text-xs font-black text-[#0e3b6d] dark:text-[#6ba1e8] shadow-sm z-0">
                                        50k+
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                                    </div>
                                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                        Trusted by <span className="font-bold text-slate-900 dark:text-white">50,000+</span> serious aspirants
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Desktop Interactive Widget Card */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-8 lg:mt-0">
                            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]/50 dark:from-[#0a1526] dark:to-[#02050a] border border-slate-200/80 dark:border-[#132a4a] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 sm:p-10 group">

                                {/* Dynamic Background */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.05] dark:group-hover:opacity-[0.08] transition-opacity duration-1000"></div>
                                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-br from-transparent to-[#0e3b6d]/5 dark:to-[#2f75bd]/10 opacity-50 mix-blend-multiply dark:mix-blend-lighten"></div>

                                {/* Main floating widget */}
                                <div className="relative z-10 w-full max-w-md bg-white/95 dark:bg-[#0b1221]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/50 dark:border-slate-700/50 shadow-[0_25px_50px_-12px_rgba(14,59,109,0.1)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transform transition-transform duration-700 hover:scale-[1.02]">

                                    <div className="flex items-start sm:items-center justify-between mb-8 pb-5 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#e6f0fa] to-[#d0e1f3] dark:from-[#0e3b6d]/50 dark:to-[#0a2749]/50 text-[#0e3b6d] dark:text-[#4290e3] rounded-2xl flex items-center justify-center shadow-inner">
                                                <PenTool className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Target Safe Score</div>
                                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">GS Paper 1 (Est.)</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl sm:text-4xl font-black text-[#0e3b6d] dark:text-[#4290e3] tracking-tighter">100<span className="text-xl">+</span></div>
                                            <div className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1">/ 200 Marks</div>
                                        </div>
                                    </div>

                                    <div className="space-y-5 sm:space-y-6">
                                        {/* Progress Bar 1 */}
                                        <div className="group/bar">
                                            <div className="flex justify-between text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                                                <span>Polity, History & Geo Core</span> <span className="text-[#0e3b6d] dark:text-[#4290e3] opacity-0 group-hover/bar:opacity-100 transition-opacity">~40 Questions</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2.5 rounded-full overflow-hidden shrink-0 shadow-inner">
                                                <div className="bg-gradient-to-r from-sky-400 to-blue-500 w-[90%] h-full rounded-full relative overflow-hidden">
                                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Progress Bar 2 */}
                                        <div className="group/bar">
                                            <div className="flex justify-between text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                                                <span>Economy, Env. & Current</span> <span className="text-[#0e3b6d] dark:text-[#4290e3] opacity-0 group-hover/bar:opacity-100 transition-opacity">~35 Questions</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2.5 rounded-full overflow-hidden shrink-0 shadow-inner">
                                                <div className="bg-gradient-to-r from-blue-500 to-[#0e3b6d] dark:to-[#2f75bd] w-[85%] h-full rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* CSAT Special Indicator */}
                                        <div className="pt-4 sm:pt-5 border-t border-slate-100 dark:border-slate-800/80 group/bar">
                                            <div className="flex justify-between items-end mb-2">
                                                <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">CSAT (Paper II) Minimum</div>
                                                <div className="text-emerald-600 dark:text-emerald-400 text-xs font-black bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-800/30">66+ / 200</div>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-3 rounded-full relative shadow-inner overflow-hidden">
                                                <div className="absolute left-[33%] top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-rose-600 z-10 shadow-[0_0_5px_rgba(244,63,94,0.5)]"></div>
                                                <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 w-[45%] h-full relative z-0"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-[#070e1c] px-4 py-3 rounded-xl border border-slate-100/50 dark:border-slate-800/50">
                                        <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            Qualifying logic active
                                        </span>
                                        <span className="text-xs font-bold text-slate-400 flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5" /> Mains</span>
                                    </div>
                                </div>

                                {/* Floating Elements (Hidden on very small screens) */}
                                <div className="hidden sm:flex absolute top-[10%] left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white dark:border-slate-700 items-center gap-2.5 animate-[float_4s_ease-in-out_infinite]">
                                    <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/50 flex flex-col items-center justify-center text-rose-600 dark:text-rose-400 font-black text-xs leading-none">-0.66</div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Penalty</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">1/3rd Negative</div>
                                    </div>
                                </div>

                                <div className="hidden sm:flex absolute bottom-[15%] right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white dark:border-slate-700 items-center gap-2.5 animate-[float_5s_ease-in-out_infinite_1s]">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Duration</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">2 + 2 Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. Structured Information Cards */}
            <div id="exam-info" className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#050b14] relative border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <span className="inline-block mb-4 text-[#0e3b6d] dark:text-[#4290e3] font-bold tracking-widest uppercase text-xs">Official Evaluation Criteria</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Understanding The Prelims Architecture</h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">The Preliminary Examination comprises two objective type papers. Marks obtained here act as a screening filter and are <span className="text-rose-500 font-bold dark:text-rose-400">not counted</span> towards your final merit ranking.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* GS Paper 1 */}
                        <div className="bg-white dark:bg-[#0b1221] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-[#0e3b6d] dark:to-[#4290e3]"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                                        <Compass className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">General Studies <br /><span className="text-lg font-bold text-slate-500 dark:text-slate-400">(Paper I)</span></h3>
                                </div>
                                <span className="bg-[#e6f0fa] text-[#0e3b6d] dark:bg-[#0e3b6d]/30 dark:text-[#6ba1e8] px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider self-start sm:self-auto border border-[#0e3b6d]/10 dark:border-[#2f75bd]/20">Merit Deciding</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Questions</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">100</div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">Multiple Choice</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Marks</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">200</div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">2 Marks / Question</div>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <Clock className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                                    <span>Conducted in Morning Shift (<strong>120 Minutes</strong>)</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <Zap className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                    <span>Stringent <strong>-0.66</strong> marks negative penalty</span>
                                </li>
                            </ul>

                            <div className="p-5 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-[#0b1221] rounded-2xl border border-slate-200 dark:border-slate-700">
                                <strong className="text-slate-800 dark:text-slate-200 block mb-2 text-sm uppercase tracking-wide">Core Syllabus Mapping</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Current Events, History of India & National Movement, Indian & World Geography, Polity, Economic & Social Development, Environment Ecology, and General Science.
                                </p>
                            </div>
                        </div>

                        {/* CSAT Paper 2 */}
                        <div className="bg-white dark:bg-[#0b1221] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center">
                                        <BrainCircuit className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">Aptitude Test (CSAT) <br /><span className="text-lg font-bold text-slate-500 dark:text-slate-400">(Paper II)</span></h3>
                                </div>
                                <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider self-start sm:self-auto border border-emerald-200 dark:border-emerald-800/50">Qualifying Only</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Questions</div>
                                    <div className="text-2xl font-black text-slate-900 dark:text-white">80</div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">Multiple Choice</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full border-b border-l border-emerald-500/20"></div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Passing Mark</div>
                                    <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">66<span className="text-sm text-slate-500 font-bold ml-1">/ 200</span></div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1">Strict 33% Threshold</div>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>2.5 Marks awarded per correct answer.</span>
                                </li>
                                <li className="flex gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <Zap className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                    <span>Stringent <strong>-0.83</strong> marks negative penalty</span>
                                </li>
                            </ul>

                            <div className="p-5 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-[#0b1221] rounded-2xl border border-slate-200 dark:border-slate-700">
                                <strong className="text-slate-800 dark:text-slate-200 block mb-2 text-sm uppercase tracking-wide">Aptitude Syllabus (Class X Level)</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Comprehension, Interpersonal Skills, Logical Reasoning, Analytical Ability, Decision Making, Mental Ability, Basic Numeracy, and Data Interpretation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 3. Deep Preparation Focus */}
            <div className="py-20 md:py-28 bg-white dark:bg-[#050b14]/50 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <span className="text-[#0e3b6d] dark:text-[#4290e3] font-bold tracking-widest uppercase text-xs mb-4 block">Actionable Insights</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Prelims Masterplan Tactics</h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 w-full max-w-2xl mx-auto">Tactics strictly implemented in our Mock Series to help you survive the toughest examination in the country.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {/* Tactic 1 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Flag className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">The Art of <br />Option Elimination</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium mb-6">
                                UPSC papers are fundamentally built to test logic over direct memory. You will rarely know 100% of the answers. Practice eliminating extreme statements ("only", "always", "never") from multi-statement questions.
                            </p>
                        </div>

                        {/* Tactic 2 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Do Not Ignore <br />The CSAT Filter</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium mb-6">
                                CSAT difficulty is skyrocketing towards CAT-level logic and number systems. Even if you score 140+ in GS Paper 1, failing to get 66 marks in CSAT disqualifies you completely from writing the Mains.
                            </p>
                        </div>

                        {/* Tactic 3 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">Static Core vs <br />Current Dynamics</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-medium mb-6">
                                Your static core (Polity, History, Geo) must be rock solid to clear the foundational cutoff. Current affairs simply provide the edge. Prioritize standard NCERTs and reference Books before magazines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Test Series Pitch */}
            <div id="test-series" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#050b14] relative overflow-hidden">
                {/* Decorative Background for Cards section */}
                <div className="absolute top-40 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0e3b6d]/20 dark:via-[#4290e3]/20 to-transparent"></div>
                <div className="absolute bottom-40 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0e3b6d]/10 dark:via-[#4290e3]/10 to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0e3b6d]/5 text-[#0e3b6d] dark:bg-[#4290e3]/10 dark:text-[#6ba1e8] font-bold tracking-widest uppercase text-xs mb-6 border border-[#0e3b6d]/10 dark:border-[#4290e3]/20">
                            UPSC CSE Test Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                            Evaluate Yourself Before <br className="hidden md:block" /> UPSC Evaluates You.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                            Choose a testing architecture curated by selected candidates and subject matter experts. Master time pressure, negative marking, and the elimination technique.
                        </p>
                    </div>

                    <UpscTestSeriesCards examName="UPSC CSE Prelims" />
                </div>
            </div>

        </div>
    );
}
