import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star
} from 'lucide-react';
import BankingTestSeriesCards from '@/components/BankingTestSeriesCards';

export const metadata = {
    title: 'SBI Clerk Preparation & Mock Tests - ExamBoost',
    description: 'Complete SBI Clerk (Junior Associate) preparation. Master the high-speed prelims and the tough Mains pattern with our top quality mock tests.'
};

export default function SBIClerkPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

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
                            <span className="text-slate-900 dark:text-white">SBI Clerk</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-cyan-500/20 shadow-sm">
                            <ShieldCheck className="w-4 h-4" /> Junior Associate Recruitment
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            A Golden Opportunity <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400">SBI Clerk</span> Mock Tests
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            Work for India's largest public sector bank. No interview process. Just clear Prelims and secure high marks in Mains. Our test series guarantees your speed preparation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-cyan-600 hover:bg-cyan-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/20">
                                <Star className="w-5 h-5 fill-white" /> Start Free Mock
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                <BookOpen className="w-5 h-5" /> View Exam Pattern
                            </Link>
                        </div>

                        {/* Trust Metrics */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-100 dark:border-slate-800/50 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">Strict Timers</div>
                                <div className="text-sm font-medium text-slate-500">20 Mins / Section</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">Mains Focus</div>
                                <div className="text-sm font-medium text-slate-500">No Interview Phase</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-6 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-[80px] -z-10"></div>
                        <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><Target className="w-32 h-32" /></div>
                            <div>
                                <div className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md inline-block mb-4 border border-cyan-200 dark:border-cyan-800/50">Prelims : Data Interpretation</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">If the total production by Company A in 2021 was 1200 units, and it increased by 20% in 2022...</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium italic border-l-4 border-cyan-500 pl-4 py-1">"Find the ratio of production in 2021 to 2022."</p>
                            </div>

                            <div className="space-y-3">
                                {['5 : 6', '4 : 5', '6 : 7', 'Cannot be determined'].map((opt, i) => (
                                    <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 0 ? 'bg-cyan-50 border-cyan-500 dark:bg-cyan-900/20' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 0 ? 'border-cyan-500 bg-cyan-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                            {i === 0 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                        </div>
                                        <span className={`font-semibold text-sm ${i === 0 ? 'text-cyan-800 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Test Series Call from Component */}
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-cyan-600 dark:text-cyan-500 font-bold tracking-wider uppercase text-sm mb-4 block">Select Your Ground School</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">SBI Clerk Premium Plans</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get comprehensive access to Prelims speed tests and deep Mains analysis.</p>
                    </div>

                    <BankingTestSeriesCards examName="SBI Clerk" />
                </div>
            </div>

        </div>
    );
}
