import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, BarChart, Clock, Layout,
    Calendar, Layers, Zap, Star, Award, Stethoscope, UserCheck
} from 'lucide-react';
import AfmcTestSeriesCards from '@/components/AfmcTestSeriesCards';

export const metadata = {
    title: 'AFMC Pune MBBS Admission & ToELR 2026 - ExamBoost',
    description: 'Complete AFMC Pune admission guide, ToELR test mock series, PAT simulators, exact syllabus, marking scheme, and PI transcripts for Armed Forces Medical College 2026.'
};

export default function AfmcPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full">

            {/* 1. Modern Clean Hero Section with Military Aesthetic */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-20 pt-4 md:pt-8">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 flex-wrap mb-8">
                        <Link href="/" className="hover:text-[#4b5320] dark:hover:text-[#6a752e] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams" className="hover:text-[#4b5320] dark:hover:text-[#6a752e] transition-colors">Exams</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams/medical-entrance" className="hover:text-[#4b5320] dark:hover:text-[#6a752e] transition-colors">Medical</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-white">AFMC Pune</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-[#4b5320]/10 text-[#4b5320] dark:bg-[#6a752e]/30 dark:text-[#a0af4d] px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase border border-[#4b5320]/20">Forces Medical Corps 2026</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase border border-slate-200 dark:border-slate-700">NEET + ToELR + PAT</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                                    Earn the Uniform. <br /> <span className="text-[#4b5320] dark:text-[#7f8c37]">AFMC Pune.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                                    NEET UG is only the first step. To secure a seat at the prestigious Armed Forces Medical College, you must conquer the rigorous ToELR CBT format, clear the psychological assessments, and excel in the medical interview.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#test-series" className="bg-[#4b5320] hover:bg-[#3d441a] text-white dark:bg-[#7f8c37] dark:hover:bg-[#92a13f] px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-[#4b5320]/20">
                                    <ShieldCheck className="w-5 h-5" /> Start ToELR Mocks
                                </a>
                                <a href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5" /> Screening Process Details
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                                <div className="flex -space-x-3">
                                    {[2, 7, 5].map(i => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 33}`} alt="Candidate" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-[#ebecd8] dark:bg-[#4b5320]/50 flex items-center justify-center text-xs font-bold text-[#4b5320] dark:text-[#a0af4d]">
                                        10k+
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                    Practiced by <span className="font-bold text-slate-900 dark:text-white">10,000+</span> <br /> Armed Forces Aspirants
                                </div>
                            </div>
                        </div>

                        {/* Infographic Hero Image replacement - Military styled */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none">
                            <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-[#f2f4e8] to-[#e4e8d3] dark:from-[#2a2e12] dark:to-[#1a1c0b] border border-[#dce0c5] dark:border-[#383e18] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">
                                {/* Decorative background grid */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-10"></div>

                                {/* Main floating card */}
                                <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(75,83,32,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-[#f2f4e8] dark:bg-[#4b5320]/30 text-[#4b5320] dark:text-[#a0af4d] rounded-xl flex items-center justify-center border border-[#dce0c5] dark:border-[#4b5320]/50">
                                                <UserCheck className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">Final Normalized Merit</div>
                                                <div className="text-xs font-medium text-slate-500">Shortlisted for Admission</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-black text-[#4b5320] dark:text-[#8a993c]">215+</div>
                                            <div className="text-xs font-bold text-slate-500">/ 250 Total</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>NEET UG Score</span> <span className="text-[#4b5320] dark:text-[#a0af4d]">~640/720</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-blue-500 w-[88%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>ToELR Entrance</span> <span className="text-[#4b5320] dark:text-[#a0af4d]">~70/80</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-emerald-500 w-[87%] h-full rounded-full"></div></div>
                                            <p className="text-[10px] text-slate-400 mt-1 italic text-right">(NEET + ToELR) ÷ 4 = ~177.5 / 200</p>
                                        </div>
                                        <div className="pt-2 border-t border-slate-50 dark:border-slate-800/50">
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Personal Interview (PI)</span> <span className="text-[#4b5320] dark:text-[#a0af4d]">~38/50</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-orange-400 w-[76%] h-full rounded-full"></div></div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#4b5320]" /> Psych Assessment Test: <strong className="text-emerald-500">Cleared</strong></span>
                                    </div>
                                </div>

                                {/* small floating elements */}
                                <div className="absolute top-12 left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
                                    <Clock className="w-4 h-4 text-amber-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">ToELR: 80 Mins</span>
                                </div>
                                <div className="absolute bottom-12 right-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_4s_infinite_1s]">
                                    <Target className="w-4 h-4 text-[#4b5320]" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">+2 / -0.5 Marking</span>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">The 3-Step AFMC Selection Process</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">After giving your standard NEET UG exam, shortlisted candidates undergo intense screening directly via military protocols.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Step 1 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative z-0 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-black text-xl rounded-2xl flex items-center justify-center border-4 border-slate-50 dark:border-slate-950 z-10 shadow-sm">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 mt-2">NEET UG Screening</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Candidates must first excel in NEET UG. AFMC releases a high cut-off (usually 610+ for boys and 630+ for girls) to select roughly 1600 candidates for actual screening at Pune.
                            </p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Out of 720 Marks</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Separate Boys/Girls Cutoff</li>
                            </ul>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-[#fcfdf7] dark:bg-slate-900/80 p-8 rounded-2xl border-2 border-[#4b5320]/20 dark:border-[#4b5320]/40 relative z-0 flex flex-col h-full shadow-[0_10px_30px_-15px_rgba(75,83,32,0.2)] hover:-translate-y-1 transition-transform">
                            <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#4b5320] text-white font-black text-xl rounded-2xl flex items-center justify-center border-4 border-slate-50 dark:border-slate-950 z-10 shadow-sm shadow-[#4b5320]/30">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-[#4b5320] dark:text-[#8a993c] mb-2 mt-2">ToELR & PAT (CBT)</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
                                The core AFMC specific exam. <br /><strong>ToELR:</strong> Test of English Language, Comprehension, Logic & Reasoning. Includes 40 MCQs in 80 mins. <br /><strong>PAT:</strong> Psychological test to check military aptitude (Qualifying).
                            </p>
                            <ul className="text-sm font-bold text-slate-700 dark:text-slate-300 space-y-2 bg-[#f2f4e8] dark:bg-[#4b5320]/10 p-4 -mb-4 -mx-4 rounded-b-[14px]">
                                <li className="flex items-center gap-2 text-[#4b5320] dark:text-[#a0af4d]"><ShieldCheck className="w-4 h-4" /> 40 Questions | 80 Marks</li>
                                <li className="flex items-center gap-2 text-[#4b5320] dark:text-[#a0af4d]"><ShieldCheck className="w-4 h-4" /> +2 marks / -0.5 Negative</li>
                            </ul>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative z-0 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -top-5 -left-5 w-12 h-12 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 font-black text-xl rounded-2xl flex items-center justify-center border-4 border-slate-50 dark:border-slate-950 z-10 shadow-sm">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 mt-2">Personal Interview & Medical</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                A high-pressure interview worth massive 50 marks checking extracurriculars, communication, and immediate intellect. Followed by strict military standard medical fitness mapping.
                            </p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Out of 50 Marks (Interview)</li>
                                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Stringent Vision & BMI checks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Section Pattern Overview */}
            <div className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

                        <div className="flex-1 space-y-6 lg:max-w-xl">
                            <span className="text-[#4b5320] dark:text-[#7f8c37] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <BarChart className="w-4 h-4" /> Exam Strategy
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                ToELR Section Details
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                The Test of English Language, Comprehension, Logic & Reasoning has its own separate ranking power to alter the final merit list heavily.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#f2f4e8] dark:bg-[#4b5320]/30 text-[#4b5320] dark:text-[#a0af4d] mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">English Language:</strong> Typically comprises 20 questions mapping reading comprehension, grammar, and vocabulary.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-[#f2f4e8] dark:bg-[#4b5320]/30 text-[#4b5320] dark:text-[#a0af4d] mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">Logic & Reasoning:</strong> Usually contains 20 questions based on verbal/non-verbal sequences, puzzles, and decision making.</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold italic">
                                    "Important Formula: Your final written score is not just added up. It is normalized: [(NEET Out of 720) + (ToELR Out of 80)] / 4 = Written Merit out of 200."
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 w-full bg-[#fafbfa] dark:bg-slate-800/30 p-8 rounded-[2rem] border border-[#eaede1] dark:border-slate-800 shadow-inner">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">ToELR Scoring Metric</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-xl">
                                    <div className="text-2xl font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 w-12 h-12 flex items-center justify-center rounded-lg border border-emerald-100 dark:border-emerald-800/50">+2</div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">Correct Answer</div>
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">2 Marks Rewarded</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-xl">
                                    <div className="text-2xl font-black text-rose-600 bg-rose-50 dark:bg-rose-900/30 w-12 h-12 flex items-center justify-center rounded-lg border border-rose-100 dark:border-rose-800/50">-0.5</div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">Incorrect Answer</div>
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Half Mark Deducted</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-xl">
                                    <div className="text-2xl font-black text-slate-400 bg-slate-100 dark:bg-slate-700 w-12 h-12 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-600/50">0</div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">Unattempted</div>
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">No Penalty Awarded</div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                    <span className="font-black text-[#4b5320] dark:text-[#a0af4d]">Total Exam Questions</span>
                                    <span className="bg-[#4b5320] text-white font-bold px-4 py-1.5 rounded-lg shadow-md">40 Questions (80 Marks)</span>
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
                        <span className="text-[#4b5320] dark:text-[#7f8c37] font-bold tracking-wider uppercase text-sm mb-4 block">Important Guidelines</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">AFMC Interview & English Check</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Reading Comprehensions</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                ToELR has extensive reading comprehensions. Do not spend massive time reading the passages; instead, read the questions first to scan through the passages for matching contexts safely.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Psychological Tactics (PAT)</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                The Psychological Assessment Test has no right or wrong answers, but looking inconsistent across questions can raise red flags. Be brutally honest regarding your personality profile.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-[#e4e8d3] text-[#4b5320] dark:bg-[#4b5320]/30 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Board Interview Presence</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                The 50 Marks PI checks your officer-like qualities (OLQ). Maintain posture, defend your hobbies intelligently. Medical officers value discipline and clear logic over raw academic stutter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Main Test Series Call to Action */}
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-[#f2f4e8] text-[#4b5320] dark:bg-[#4b5320]/30 dark:text-[#a0af4d] font-bold tracking-wider uppercase text-xs mb-6 inline-block shadow-sm">Your Admission To Forces</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">AFMC Preparation Series</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Practice exactly what AFMC asks. Master the ToELR CBT format (+2/-0.5 metric) and simulate the Psychological Assessment Test to conquer the Pune campus.
                        </p>
                    </div>

                    <AfmcTestSeriesCards examName="AFMC Pune" />
                </div>
            </div>

        </div>
    );
}

// Inline missing icon
function Users(props: any) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
