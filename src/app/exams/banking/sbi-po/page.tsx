import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star
} from 'lucide-react';
import BankingTestSeriesCards from '@/components/BankingTestSeriesCards';

export const metadata = {
    title: 'SBI PO Preparation & Mock Tests - ExamBoost',
    description: 'Complete SBI PO (Probationary Officer) preparation. Dominate the hardest banking entrance exam with our advanced Mains mock tests and exact test interface.'
};

export default function SBIPOPage() {
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
                            <span className="text-slate-900 dark:text-white">SBI PO</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-cyan-500/20 shadow-sm">
                            <ShieldCheck className="w-4 h-4" /> The Premier Banking Exam
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Conquer the Toughest Puzzles with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400">SBI PO</span> Mock Tests
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            SBI introduces the most surprising patterns every year. Build an unbreakable conceptual foundation and absolute speed with India&lsquo;s highest-quality mock test series.
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
                                <div className="text-2xl font-black text-slate-900 dark:text-white">High Level</div>
                                <div className="text-sm font-medium text-slate-500">Advanced DIs & Puzzles</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-6 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-[80px] -z-10"></div>
                        <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5"><Brain className="w-32 h-32" /></div>
                            <div>
                                <div className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md inline-block mb-4 border border-cyan-200 dark:border-cyan-800/50">Mains : Reasoning & Comp Apt</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">10 people sit in two concentric circular arrays. The inner radius is 10cm, outer is 20cm.</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium italic border-l-4 border-cyan-500 pl-4 py-1">&quot;If A shifts 15 degrees clockwise and faces B on the outer ring, what is the distance...?&quot;</p>
                            </div>

                            <div className="space-y-3">
                                {['Cannot be determined', '5π cm', '10π cm', '20π cm'].map((opt, i) => (
                                    <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 1 ? 'bg-cyan-50 border-cyan-500 dark:bg-cyan-900/20' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 1 ? 'border-cyan-500 bg-cyan-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                            {i === 1 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                        </div>
                                        <span className={`font-semibold text-sm ${i === 1 ? 'text-cyan-800 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">SBI PO Examination Phases</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Essential details based on the official State Bank of India notification.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 shrink-0 border border-cyan-100 dark:border-cyan-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phase I: Prelims</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">100 Multiple Choice Questions spread across English, Quant, and Reasoning.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> English: 30Qs / 20 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Quant: 35Qs / 20 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Reasoning: 35Qs / 20 mins</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-cyan-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-cyan-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">Merit Phase</div>
                            <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phase II: Mains (Objective)</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">A gruelling 3-hour test involving experimental reasoning puzzles and logical DIs.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-cyan-500" /> Reasoning & Comp: 40Qs / 50 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-cyan-500" /> Data Analysis (DI): 30Qs / 45 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-cyan-500" /> GK/Economy: 50Qs / 45 mins</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-cyan-500" /> English: 35Qs / 40 mins</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 shrink-0 border border-cyan-100 dark:border-cyan-800/50">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phase III: Psycometric, GE & Interview</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">The final hurdle after a typed Descriptive English paper.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-2 mt-auto">
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Descriptive English: 50 Marks</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Group Exercise: 20 Marks</li>
                                <li className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> Interview: 30 Marks</li>
                                <li className="flex gap-2 text-xs text-slate-400 mt-2 block pt-2 border-t border-slate-100 dark:border-slate-800">Final merit combines Phase II and Phase III.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Why ExamBoost for SBI PO */}
            <div className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Engineered for SBI&lsquo;s Surprises</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">SBI is infamous for introducing new puzzle variations every year. Our team analyzes these trends to build mock tests that are always slightly ahead of the actual exam.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: Brain, title: "Next-Gen Variable Puzzles", desc: "We train you on 3-variable and 4-variable seating arrangements combined with blood relations—the exact terrifying level expected in SBI Mains." },
                            { icon: Layout, title: "No Interface Shock", desc: "Our platform simulates the SBI testing interface flawlessly. You won't waste precious seconds figuring out the review/mark/clear buttons on exam day." },
                            { icon: FileText, title: "Descriptive Typing Simulator", desc: "Letters to Bank Managers, Editorials, Economic Essays—all typed in a strict 30-minute block that counts your words and mimics the archaic exam text box." },
                            { icon: Zap, title: "Real-time Percentile Rank", desc: "SBI PO is a purely percentile game. We show you exactly where you stand against 50,000+ competitors on every single sectional mock." }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-cyan-500/50">
                                <div className="flex gap-5">
                                    <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shrink-0">
                                        <feat.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feat.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{feat.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. Test Series Call from Component */}
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-cyan-600 dark:text-cyan-500 font-bold tracking-wider uppercase text-sm mb-4 block">Select Your Arsenal</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">SBI PO Premium Plans</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Unlock thousands of updated questions capable of passing the strict SBI standards.</p>
                    </div>

                    <BankingTestSeriesCards examName="SBI PO" />
                </div>
            </div>

            {/* 6. Footer Call to Action */}
            <div className="bg-cyan-900 dark:bg-[#020617] py-24 relative overflow-hidden border-t border-cyan-950/20 dark:border-slate-800 w-full">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[400px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 max-w-3xl mx-auto leading-tight">Become a Probationary Officer</h2>
                    <p className="text-cyan-100/90 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        If you consistently score high percentiles on ExamBoost SBI Mains Mocks, your selection is nearly mathematically guaranteed.
                    </p>
                    <Link href="/pricing" className="bg-white text-cyan-900 hover:bg-slate-100 dark:bg-cyan-600 dark:text-white dark:hover:bg-cyan-500 px-10 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2 border border-transparent dark:border-cyan-500 w-full sm:w-auto">
                        Enroll in SBI PO Series <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

        </div>
    );
}
