import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star
} from 'lucide-react';
import SscTestSeriesCards from '@/components/SscTestSeriesCards';

export const metadata = {
    title: 'SSC CPO Preparation & Mock Tests - ExamBoost',
    description: 'Complete SSC CPO (Sub-Inspector in Delhi Police & CAPFs) preparation. Dominate Paper 1 and master Paper 2 (English) with our TCS iON interface mock tests.'
};

export default function SSCCPOPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    <div className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2 flex-wrap justify-center lg:justify-start">
                            <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams/ssc-exams" className="hover:text-primary dark:hover:text-accent transition-colors">SSC Exams</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-white">SSC CPO</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-amber-500/20 shadow-sm">
                            <ShieldCheck className="w-4 h-4" /> Target Delhi Police & CAPF SI
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Earn Your Stars with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400">SSC CPO</span> Mock Tests
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            From clearing the grueling Paper 1 cutoff to mastering the 200-mark English gauntlet in Paper 2, we prepare you for every written stage of the Sub-Inspector recruitment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-amber-500 hover:bg-amber-600 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20">
                                <Star className="w-5 h-5 fill-white" /> Start Free Mock
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                <BookOpen className="w-5 h-5" /> View Exam Phases
                            </Link>
                        </div>

                        {/* Trust Metrics */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-100 dark:border-slate-800/50 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">Paper 1 & 2</div>
                                <div className="text-sm font-medium text-slate-500">Dual Prep Covered</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">100%</div>
                                <div className="text-sm font-medium text-slate-500">TCS iON Match</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-6 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-[80px] -z-10"></div>
                        <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><ShieldCheck className="w-32 h-32" /></div>
                            <div>
                                <div className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md inline-block mb-4 border border-amber-200 dark:border-amber-800/50">Paper 2 : English Core</div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">Identify the segment that contains a grammatical error.</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium italic border-l-4 border-amber-500 pl-4 py-1">"The supervisor wanted to known the pros and cons of the issue before making any decision."</p>
                            </div>

                            <div className="space-y-3">
                                {['wanted to known', 'the pros and cons', 'of the issue', 'before making any decision'].map((opt, i) => (
                                    <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 0 ? 'bg-amber-50 border-amber-500 dark:bg-amber-900/20' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 0 ? 'border-amber-500 bg-amber-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                            {i === 0 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                        </div>
                                        <span className={`font-semibold text-sm ${i === 0 ? 'text-amber-800 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>(A) {opt}</span>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">SSC CPO at a Glance</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Essential details for the Sub-Inspector recruitment process.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Layout, title: "Exam Phases", desc: "Paper 1 (CBT) -> PET/PST (Physical) -> Paper 2 (CBT) -> Medical." },
                            { icon: Target, title: "Target Posts", desc: "Sub-Inspector in Delhi Police, CAPF, CISF, CRPF, ITBP, BSF." },
                            { icon: BookOpen, title: "Paper-1 Marking", desc: "200 Questions | 200 Marks | 120 Minutes. Contains Maths, Eng, Reas, GK." },
                            { icon: AlertCircleIcon, title: "Paper-2 Marking", desc: "200 Questions | 200 Marks | 120 Minutes. Exclusively English Language & Comprehension." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 shrink-0 border border-amber-100 dark:border-amber-800/50">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Why ExamBoost for SSC CPO */}
            <div className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Strategic CPO Preparation</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">SSC CPO tests your physical endurance and your English grammar deeply. We take care of the heavy lifting for the written phases.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Presentation, title: "TCS iON Simulation", desc: "Sitting for a 2-hour exam requires focus. Get used to the actual TCS exam player, palette management, and on-screen reading so you do not freeze on D-day." },
                            { icon: CheckCircle, title: "Paper 2 Mastery", desc: "With 200 full marks dedicated purely to English in Phase 2, this decides your rank. Our mocks provide highly curated vocabulary, comprehension, and error-spotting drills." },
                            { icon: Zap, title: "Previous Year Mocks", desc: "CPO shifts often recycle GS facts and grammar rules. Our exhaustive library converts every CPO past-paper since 2018 into a live exam environment." }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
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
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 dark:text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">Select Your Ground School</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">SSC CPO Series Plans</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get comprehensive access to Paper 1 & Paper 2 mocks to guarantee your selection.</p>
                    </div>

                    <SscTestSeriesCards examName="SSC CPO" />
                </div>
            </div>

            {/* 6. Footer Call to Action */}
            <div className="bg-amber-500 dark:bg-slate-900 py-24 relative overflow-hidden border-t border-amber-600 dark:border-slate-800 w-full">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-400 dark:bg-amber-900/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-400 dark:bg-amber-900/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white dark:text-white mb-6 max-w-3xl mx-auto leading-tight">Your Uniform is Waiting.</h2>
                    <p className="text-amber-100 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Do not neglect the written exams for physical preparation. Maximize your Paper 1 & Paper 2 scores with relentless mock practice.
                    </p>
                    <Link href="/pricing" className="bg-white text-amber-600 hover:bg-slate-100 dark:bg-amber-500 dark:text-white dark:hover:bg-amber-600 px-10 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2 border border-transparent dark:border-transparent w-full sm:w-auto">
                        Enroll in CPO Test Series <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

        </div>
    );
}

function AlertCircleIcon(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}
