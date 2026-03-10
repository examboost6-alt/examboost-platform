import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star
} from 'lucide-react';
import SscTestSeriesCards from '@/components/SscTestSeriesCards';

export const metadata = {
    title: 'SSC MTS Preparation & Mock Tests - ExamBoost',
    description: 'Complete SSC MTS (Multi Tasking Staff) & Havaldar preparation. Practice with TCS iON interface mock tests, previous year papers, and detailed analytics.'
};

export default function SSCMTSPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col items-center text-center">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8 mx-auto flex-wrap justify-center">
                        <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams/ssc-exams" className="hover:text-primary dark:hover:text-accent transition-colors">SSC Exams</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-white">SSC MTS</span>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-blue-500/20 shadow-sm">
                            <Target className="w-4 h-4" /> Target SSC MTS & Havaldar
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Start Your Central Government Journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">SSC MTS</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl text-center">
                            The biggest 10th-pass recruitment drive in India. Master Session-I (Qualifying) & dominate Session-II (Merit-based) with exact TCS iON replica mock tests.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-lg">
                            <Link href="#test-series" className="bg-blue-600 hover:bg-blue-700 text-white w-full px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 border border-blue-500">
                                <Star className="w-5 h-5 fill-white" /> Start Free Mock
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                <BookOpen className="w-5 h-5" /> View Syllabus
                            </Link>
                        </div>

                        {/* Trust Metrics */}
                        <div className="flex flex-wrap items-center justify-center gap-6 pt-10 border-t border-slate-100 dark:border-slate-800/50 w-full max-w-xl mx-auto">
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-black text-slate-900 dark:text-white">10th</div>
                                <div className="text-sm font-medium text-slate-500">Pass Based</div>
                            </div>
                            <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-black text-slate-900 dark:text-white">45 Mins</div>
                                <div className="text-sm font-medium text-slate-500">Per Session</div>
                            </div>
                            <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-black text-slate-900 dark:text-white">100%</div>
                                <div className="text-sm font-medium text-slate-500">Pattern Match</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Key Information Highlights */}
            <div id="exam-info" className="py-20 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">SSC MTS at a Glance</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Essential details for the Multi Tasking (Non-Technical) Staff Examination.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Layout, title: "Exam Pattern", desc: "Single CBT divided into strictly timed Session-I & Session-II." },
                            { icon: FileText, title: "Session-I (Qualifying)", desc: "Maths & Reasoning. No negative marking. Crucial to clear." },
                            { icon: ShieldCheck, title: "Session-II (Merit)", desc: "GK & English. Final selection based solely on this score. Has negative marking." },
                            { icon: Clock, title: "Timing Limits", desc: "45 Minutes for each session. Sessions automatically submit." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col text-left shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shrink-0 border border-blue-100 dark:border-blue-800">
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
            <div className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Understanding the New MTS Pattern</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The exam is conducted in two mandatory sessions on the same day.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Session 1 */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 p-2 overflow-hidden shadow-sm">
                            <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-[1.5rem] flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-black text-xl shrink-0">1</div>
                                <div>
                                    <h3 className="text-xl font-bold">Session I (Qualifying)</h3>
                                    <p className="text-slate-400 text-sm mt-1">45 Minutes | No Negative Marking</p>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">Numerical Aptitude</h4>
                                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Questions: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">20</strong></span>
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Marks: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">60</strong></span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">Reasoning Ability</h4>
                                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Questions: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">20</strong></span>
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Marks: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">60</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Session 2 */}
                        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-200 dark:border-blue-800 p-2 overflow-hidden shadow-sm relative">
                            <div className="absolute top-6 right-6 lg:right-10 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full z-10">Merit Decider</div>
                            <div className="bg-blue-600 text-white p-6 rounded-[1.5rem] flex items-center gap-4 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                                <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center font-black text-xl shrink-0">2</div>
                                <div>
                                    <h3 className="text-xl font-bold">Session II (Merit Scoring)</h3>
                                    <p className="text-blue-200 text-sm mt-1">45 Minutes | Negative Marking: 1 mark per wrong answer</p>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">General Awareness</h4>
                                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Questions: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">25</strong></span>
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Marks: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">75</strong></span>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">English Language</h4>
                                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Questions: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">25</strong></span>
                                        <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">Marks: <strong className="text-slate-900 dark:text-white font-black ml-1 text-lg">75</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Why ExamBoost for SSC MTS */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Strategic Preparation</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Since only Session-II decides your job, your testing platform must clearly analyze where you rank.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 w-full order-2 lg:order-1 flex justify-center">
                            <div className="w-full max-w-sm rounded-3xl bg-blue-600 p-8 shadow-2xl relative overflow-hidden transition-transform hover:scale-105 duration-300">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-white rounded-2xl mb-6 flex items-center justify-center">
                                        <Target className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-2">Session-II Mocks</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed mb-8">Access thousands of dedicated English & GA questions specifically targeted at maximizing your merit score.</p>
                                    <div className="w-full bg-blue-700/50 rounded-xl p-4 text-left border border-blue-400/30">
                                        <div className="flex justify-between text-blue-100 text-xs font-bold mb-2"><span>Your Score Predictor</span> <span>135/150</span></div>
                                        <div className="w-full h-2 rounded-full bg-blue-900 overflow-hidden"><div className="h-full bg-white w-[90%] rounded-full"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                            {[
                                { icon: Presentation, title: "Exact Session Constraints", desc: "Our platform correctly implements the 45-minute strict timeout per session. It forces you to manage time precisely like the real TCS iON platform." },
                                { icon: Brain, title: "Qualifying Threshold Guard", desc: "Analytics explicitly warn you if your Session-I (Maths/Reasoning) score dips dangerously close to the failure threshold." },
                                { icon: Zap, title: "MTS Previous Year Mocks", desc: "MTS highly repeats its GK questions. We provide every single shift from 2019-2023 configured as executable mock evaluations." }
                            ].map((feat, idx) => (
                                <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-5 shadow-sm hover:border-blue-500/50 transition-colors">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                        <feat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{feat.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Test Series Call from Component */}
            <div id="test-series" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Select Your Battle Plan</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">SSC MTS Series Plans</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Affordable packages giving you exact simulated environments and immense PYQ practice.</p>
                    </div>

                    <SscTestSeriesCards examName="SSC MTS" />
                </div>
            </div>

            {/* 6. Footer Call to Action */}
            <div className="bg-blue-900 dark:bg-[#020617] py-24 relative overflow-hidden border-t border-blue-950/20 dark:border-slate-800 w-full">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/20 mb-8">
                        <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 max-w-3xl mx-auto leading-tight">Secure Your Name in the Merit List</h2>
                    <p className="text-blue-100/90 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        General Awareness and English demand intense practice. Stop reading passively—start mock-testing actively today.
                    </p>
                    <Link href="/pricing" className="bg-white text-blue-900 hover:bg-slate-100 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 px-10 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2 border border-transparent dark:border-blue-500 w-full sm:w-auto">
                        Get Your Test Pass <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

        </div>
    );
}
