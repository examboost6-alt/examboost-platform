import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star
} from 'lucide-react';
import BankingTestSeriesCards from '@/components/BankingTestSeriesCards';

export const metadata = {
    title: 'IBPS Clerk Preparation & Mock Tests - ExamBoost',
    description: 'Complete IBPS Clerk preparation. Clear the prelims cut-off with our high-speed accuracy-focused mock tests.'
};

export default function IBPSClerkPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    <div className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2 flex-wrap justify-center lg:justify-start">
                            <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams/banking" className="hover:text-primary dark:hover:text-accent transition-colors">Banking Exams</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-white">IBPS Clerk</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-blue-500/20 shadow-sm">
                            <Target className="w-4 h-4" /> State-Wise Banking Recruitment
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Beat the Speed Game with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">IBPS Clerk</span> Mocks
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            IBPS Clerk requires zero conceptual errors and blazing fast calculation speed to beat the immense 80+ marks cut-offs. We build that speed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                                <Star className="w-5 h-5 fill-white" /> Start Free Mock
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                <BookOpen className="w-5 h-5" /> View Exam Pattern
                            </Link>
                        </div>

                        {/* Trust Metrics */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-100 dark:border-slate-800/50 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">High Cut-offs</div>
                                <div className="text-sm font-medium text-slate-500">Speed Focused</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">No Interview</div>
                                <div className="text-sm font-medium text-slate-500">Direct Selection</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-6 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-[80px] -z-10"></div>
                        <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><Zap className="w-32 h-32" /></div>
                            <div>
                                <div className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md inline-block mb-4 border border-blue-200 dark:border-blue-800/50">Prelims : Simplification Speed Drill</div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">14.28% of 343 + 12.5% of 512 = ?</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium italic border-l-4 border-blue-500 pl-4 py-1">Target time: 10 seconds.</p>
                            </div>

                            <div className="space-y-3">
                                {['113', '109', '124', '118'].map((opt, i) => (
                                    <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 0 ? 'bg-blue-50 border-blue-500 dark:bg-blue-900/20' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 0 ? 'border-blue-500 bg-blue-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                            {i === 0 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                        </div>
                                        <span className={`font-semibold text-sm ${i === 0 ? 'text-blue-800 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Key Information Highlights */}
            <div id="exam-info" className="py-20 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">IBPS Clerk Examination Pattern</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Essential details based on the official IBPS notification.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shrink-0 border border-blue-100 dark:border-blue-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phase I: Prelims Speed Test</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">100 Easy to Moderate Level Questions. You need extreme speed to clear state cutoffs.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> English: 30Qs / 20 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Numerical Ability: 35Qs / 20 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Reasoning: 35Qs / 20 mins</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-blue-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">Merit Decider</div>
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phase II: Mains Exam</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">Final selection depends entirely on your Mains score. There is NO interview.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-500" /> Reasoning & Comp Apt: 50Qs / 45 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-500" /> General / Financial Aware: 50Qs / 35 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-500" /> General English: 40Qs / 35 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-blue-500" /> Quantitative Apt: 50Qs / 45 mins</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phase III: Document Verification (LPT)</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">Once you clear the mains, you undergo verification and a Language Proficiency Test.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Ensure Local Language Fluency</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Read, Write, Speak correctly</li>
                                <li className="flex gap-2 text-xs text-slate-400 mt-2 block pt-2 border-t border-slate-100 dark:border-slate-800">Clear LPT, get the joining letter directly.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Test Series Call from Component */}
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">Select Your Package</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">IBPS Clerk Pre + Mains Plans</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Massive number of speed tests and full length mocks designed exclusively to break state cut-offs.</p>
                    </div>

                    <BankingTestSeriesCards examName="IBPS Clerk" />
                </div>
            </div>

        </div>
    );
}
