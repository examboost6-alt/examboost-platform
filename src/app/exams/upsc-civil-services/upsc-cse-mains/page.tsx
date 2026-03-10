import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, BarChart, Clock, Layout,
    Calendar, Layers, Zap, Star, Award, Landmark,
    PenTool, BrainCircuit, Flag, Compass, ChevronDown, Check,
    Edit3, Filter, FileText, Send, UserCheck, CheckSquare
} from 'lucide-react';
import UpscMainsTestSeriesCards from '@/components/UpscMainsTestSeriesCards';

export const metadata = {
    title: 'UPSC CSE Mains 2026 Strategy & Test Series - ExamBoost',
    description: 'Detailed strategy, syllabus, paper pattern and premium Mains answer writing evaluating program for UPSC Civil Services Mains Examination 2026.'
};

export default function UpscCseMainsPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#050b14] w-full font-sans selection:bg-[#0e3b6d]/30 selection:text-[#0e3b6d] dark:selection:bg-[#2f75bd]/30 dark:selection:text-white">

            {/* 1. Ultra Premium Descriptive Hero Section for Mains */}
            <div className="relative overflow-hidden bg-white dark:bg-[#050b14] border-b border-slate-200/50 dark:border-slate-800/80 pt-20 md:pt-28">
                {/* Subtle Background Elements suited for "Writing/Subjective" feel */}
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#f0f4f8] to-transparent dark:from-[#081221] dark:to-transparent opacity-80 pointer-events-none" />
                <div className="absolute -top-[200px] right-[10%] w-[1000px] h-[600px] rounded-[100%] bg-gradient-to-b from-[#e6f0fa]/80 to-transparent dark:from-[#0e3b6d]/10 blur-[100px] pointer-events-none transform -rotate-12" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-4 md:pt-8 relative z-10">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-500 flex-wrap mb-10 md:mb-14">
                        <Link href="/" className="hover:text-[#0e3b6d] dark:hover:text-[#4290e3] transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams" className="hover:text-[#0e3b6d] dark:hover:text-[#4290e3] transition-colors">Exams</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <Link href="/exams/upsc-civil-services" className="hover:text-[#0e3b6d] dark:hover:text-[#4290e3] transition-colors">Civil Services</Link>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        <span className="text-slate-900 dark:text-slate-300 font-semibold">CSE Mains</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="flex-1 space-y-8 w-full">
                            <div className="space-y-5">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <div className="inline-flex items-center gap-1.5 bg-[#0e3b6d]/5 text-[#0e3b6d] dark:bg-[#2f75bd]/10 dark:text-[#6ba1e8] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#0e3b6d]/10 dark:border-[#2f75bd]/20 shadow-sm backdrop-blur-sm">
                                        <Calendar className="w-3.5 h-3.5" /> August 21, 2026
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-rose-200 dark:border-rose-800/50 shadow-sm backdrop-blur-sm">
                                        <PenTool className="w-3.5 h-3.5" /> 1750 Merit Marks
                                    </div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                                    Master the Art of <br className="hidden sm:block" />
                                    <span className="relative whitespace-nowrap">
                                        <span className="relative z-10 text-[#0e3b6d] dark:text-[#4290e3]">Mains Writing.</span>
                                        <svg className="absolute w-full h-3 -bottom-1 sm:bottom-0 left-0 text-[#0e3b6d]/20 dark:text-[#4290e3]/30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                        </svg>
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed lg:leading-loose">
                                    The Civil Services Mains Examination isn't just about what you know, but <strong className="text-slate-900 dark:text-slate-200 font-semibold">how you express it</strong> within the rigid 3-hour time constraints. 9 Descriptive Papers determining your final merit position over 5 Gruelling Days.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <a href="#evaluation" className="group relative inline-flex items-center justify-center gap-2 bg-[#0e3b6d] hover:bg-[#0a2749] text-white dark:bg-[#1a5b9c] dark:hover:bg-[#134982] px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(14,59,109,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(14,59,109,0.6)] hover:-translate-y-0.5 w-full sm:w-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                    <Edit3 className="w-5 h-5 relative z-10" /> <span className="relative z-10">Start Writing Practice</span>
                                </a>
                                <a href="#syllabus" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-sm w-full sm:w-auto">
                                    <FileText className="w-5 h-5" /> 9 Papers Breakdown
                                </a>
                            </div>

                        </div>

                        {/* Right Desktop Interactive Copy Widget Card (Simulating Answer Sheet) */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-8 lg:mt-0">
                            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]/80 dark:from-[#081221] dark:to-[#02050a] border border-slate-200/80 dark:border-[#132a4a] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 sm:p-10 group">

                                {/* Simulated ruled lines effect */}
                                <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(14, 59, 109, 0.05) 31px, rgba(14, 59, 109, 0.05) 32px)' }}></div>
                                <div className="absolute top-0 bottom-0 left-12 w-px bg-rose-200/50 dark:bg-rose-900/40"></div>
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-transparent via-transparent to-[#0e3b6d]/5 dark:to-[#2f75bd]/10 opacity-70"></div>

                                {/* Main floating widget - Evaluation Style */}
                                <div className="relative z-10 w-[95%] sm:w-[85%] bg-white/95 dark:bg-[#0b1221]/95 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 border-t-8 border-t-[#0e3b6d] dark:border-t-[#4290e3] border-x border-b border-white/50 dark:border-slate-700/50 shadow-[0_25px_50px_-12px_rgba(14,59,109,0.15)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:rotate-1">

                                    <div className="flex items-start sm:items-center justify-between mb-8 pb-5 border-b border-dashed border-slate-200 dark:border-slate-800">
                                        <div>
                                            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">Mains Copy <br /> <span className="text-[#0e3b6d] dark:text-[#4290e3]">Evaluation</span></div>
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">QCAB Simulated Environment</div>
                                        </div>
                                        <div className="w-14 h-14 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-50 dark:bg-green-900/20 transform rotate-12">
                                            <div className="text-green-600 dark:text-green-400 font-extrabold text-sm">A+</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 opacity-80 pl-2 border-l-2 border-amber-300 dark:border-amber-700">
                                        <p>Introduction points clearly established Context and Keywords (2.5/3 marks).</p>
                                        <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                                        <p>Body arguments lack spatial dimensions, kindly integrate Map drawing for Geography GS-1 questions (3/5 marks).</p>
                                        <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                                        <p>Conclusion provides excellent forward-looking optimism using SDG framework (1.5/2 marks).</p>
                                    </div>

                                    <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-sky-50 dark:bg-[#0e3b6d]/10 px-4 py-3 rounded-xl border border-sky-100/50 dark:border-[#0e3b6d]/30">
                                        <span className="text-xs sm:text-sm font-bold text-sky-800 dark:text-sky-300 flex items-center gap-2">
                                            Detailed Feedback Turnaround
                                        </span>
                                        <span className="text-xs font-black text-sky-600 dark:text-sky-400 flex items-center gap-1">5-7 Days</span>
                                    </div>
                                </div>

                                {/* Floating Metrics Badge */}
                                <div className="hidden sm:flex absolute right-4 top-[20%] bg-emerald-50 dark:bg-emerald-900/30 font-bold text-emerald-700 dark:text-emerald-400 text-xs py-2 px-4 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-lg items-center gap-2 transform rotate-3">
                                    <CheckSquare className="w-4 h-4" /> 1750 Targetable Marks
                                </div>

                                <div className="hidden sm:flex absolute bottom-[15%] left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white dark:border-slate-700 items-center gap-2.5 transform -rotate-2">
                                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex flex-col items-center justify-center text-orange-600 dark:text-orange-400 font-black text-xs leading-none">9</div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Descriptive</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">Papers Over 5 Days</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2. Structured Syllabus Breakdown Cards */}
            <div id="syllabus" className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#050b14] relative border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <span className="inline-block mb-4 text-[#0e3b6d] dark:text-[#4290e3] font-bold tracking-widest uppercase text-xs border border-[#0e3b6d]/20 px-3 py-1 rounded-full">Subjective Evaluation</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">The 1750 Merit Points Structure</h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Out of the 9 papers, 2 language papers are strictly qualifying in nature. <strong className="text-slate-800 dark:text-slate-200">Your rank depends solely on the remaining 7 papers</strong>.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

                        {/* Qualifying Papers Group */}
                        <div className="md:col-span-2 lg:col-span-3 bg-slate-100 dark:bg-[#0b1221] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200 dark:border-slate-800/80 mb-4 sm:mb-8 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
                                    <Filter className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">Qualifying Language Papers</h3>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed md:max-w-xl">Paper A (Any Indian Language) & Paper B (English). 300 marks each. You must score a minimum of <strong>25% (75 marks)</strong> to have your other GS papers evaluated.</p>
                                </div>
                            </div>
                            <div className="flex gap-2 shrink-0 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-200 dark:border-slate-800">
                                Not Counted For Merit
                            </div>
                        </div>

                        {/* GS Papers grid */}
                        {[
                            { id: 'I', title: 'Essay Paper', marks: '250', desc: 'Write two structured essays (1000-1200 words each) choosing from a list of abstract, philosophical, or socio-economic topics.', icon: PenTool, color: 'text-purple-600', bg: 'bg-purple-100', darkColor: 'dark:text-purple-400', darkBg: 'dark:bg-purple-900/20' },
                            { id: 'II', title: 'GS Paper I', marks: '250', desc: 'Indian Heritage and Culture, History and Geography of the World and Indian Society.', icon: Compass, color: 'text-amber-600', bg: 'bg-amber-100', darkColor: 'dark:text-amber-400', darkBg: 'dark:bg-amber-900/20' },
                            { id: 'III', title: 'GS Paper II', marks: '250', desc: 'Governance, Constitution, Polity, Social Justice frameworks, and detailed International Relations.', icon: Landmark, color: 'text-blue-600', bg: 'bg-blue-100', darkColor: 'dark:text-blue-400', darkBg: 'dark:bg-blue-900/20' },
                            { id: 'IV', title: 'GS Paper III', marks: '250', desc: 'Technology, Economic Development, Bio-diversity, Environment, Internal Security and Disaster Management.', icon: BarChart, color: 'text-emerald-600', bg: 'bg-emerald-100', darkColor: 'dark:text-emerald-400', darkBg: 'dark:bg-emerald-900/20' },
                            { id: 'V', title: 'GS Paper IV', marks: '250', desc: 'Ethics, Integrity and Aptitude. Involves deep case study resolution under pressure.', icon: ShieldCheck, color: 'text-rose-600', bg: 'bg-rose-100', darkColor: 'dark:text-rose-400', darkBg: 'dark:bg-rose-900/20' },
                            { id: 'VI & VII', title: 'Optional Subject (1 & 2)', marks: '500', desc: 'Two papers of 250 marks each. Deep subject-matter specialization chosen from a list of 48 subjects indicating university honors level competence.', icon: BookOpen, color: 'text-[#0e3b6d]', bg: 'bg-[#0e3b6d]/10', darkColor: 'dark:text-[#4290e3]', darkBg: 'dark:bg-[#4290e3]/10' },
                        ].map((paper, idx) => (
                            <div key={idx} className={`bg-white dark:bg-[#0b1221] p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative ${paper.id === 'VI & VII' ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                                <div className="absolute top-8 right-8 text-xs font-black text-slate-300 dark:text-slate-700 tracking-tighter">PAPER {paper.id}</div>
                                <div className={`w-14 h-14 rounded-2xl ${paper.bg} ${paper.darkBg} ${paper.color} ${paper.darkColor} flex items-center justify-center mb-6`}>
                                    <paper.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{paper.title}</h3>
                                <div className="text-sm font-black text-[#0e3b6d] dark:text-[#6ba1e8] bg-[#0e3b6d]/5 dark:bg-[#4290e3]/10 inline-block px-3 py-1 rounded-md mb-4 border border-[#0e3b6d]/10 dark:border-[#4290e3]/20">{paper.marks} Marks</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                    {paper.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* 3. Expected Pain Points specific to Mains */}
            <div className="py-20 md:py-28 bg-white dark:bg-[#050b14] border-b border-slate-200/50 dark:border-slate-800/30">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">

                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">Closing the Gap: <br /> Knowledge vs Output.</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-10">Mains failure almost never happens because an aspirant lacked knowledge. It happens because they failed to <strong>translate that knowledge into 150/250 words within 7-8 minutes per question.</strong></p>

                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">The Invisible Constraint (Time)</h4>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">Completing 20 intense analytical questions in 3 hours is physically grueling. Missing 2 questions equals a loss of 30 marks directly impacting your rank list viability.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                                        <Layout className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Lack of Intro-Body-Conclusion Structuring</h4>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">Evaluators skim quickly. Without proper heading generation, underlining, and bullet structures, highly intellectual answers receive average markings ranging between 3-4/10.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                                        <UserCheck className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Blind Answer Writing Practice</h4>
                                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">Writing answers without precise feedback from experienced evaluators merely reinforces the same mistakes daily instead of rectifying them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-[#0b1221] p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white dark:from-[#0b1221] to-transparent z-10"></div>

                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">ExamBoost Corrective Methodology</h3>

                            <div className="space-y-6 relative z-0">
                                <div className="bg-white dark:bg-[#131d31] p-5 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col gap-2 relative">
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-50 dark:border-[#0b1221]"></div>
                                    <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-widest pl-2">Step 1</span>
                                    <strong className="text-slate-900 dark:text-white pl-2">Daily Answer Writing (DAW)</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 pl-2">To build muscle memory before attempting full 3 hour tests.</p>
                                </div>

                                <div className="bg-white dark:bg-[#131d31] p-5 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col gap-2 relative">
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sky-500 border-4 border-slate-50 dark:border-[#0b1221]"></div>
                                    <span className="text-xs font-black uppercase text-sky-600 dark:text-sky-400 tracking-widest pl-2">Step 2</span>
                                    <strong className="text-slate-900 dark:text-white pl-2">Sectional Deep Dives</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 pl-2">Isolating subjects like Ethics (Case Studies) to ensure sub-sectional perfection.</p>
                                </div>

                                <div className="bg-white dark:bg-[#131d31] p-5 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col gap-2 relative">
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500 border-4 border-slate-50 dark:border-[#0b1221]"></div>
                                    <span className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 tracking-widest pl-2">Step 3</span>
                                    <strong className="text-slate-900 dark:text-white pl-2">Mains Simulator Experience</strong>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 pl-2">Writing tests exactly in the morning-afternoon schedule to simulate fatigue parameters.</p>
                                </div>
                            </div>

                            <div className="relative z-20 flex justify-center mt-[-40px]">
                                <a href="#evaluation" className="bg-[#0e3b6d] dark:bg-[#2f75bd] text-white px-8 py-3 rounded-full font-bold shadow-xl border border-white/20 flex items-center gap-2 hover:bg-[#0a2749] dark:hover:bg-[#1c4d81] transition-colors">
                                    View Schedule <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Main Evaluated Test Series Call to Action */}
            <div id="evaluation" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#050b14] relative overflow-hidden">
                {/* Soft Background blur */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-slate-200/50 dark:from-[#0a1526]/80 to-transparent pointer-events-none rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400 font-black tracking-widest uppercase text-xs mb-6 border border-rose-200 dark:border-rose-900/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                            Evaluation Open
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                            Get Your Answers Evaluated by <br className="hidden md:block" /> Real Experts.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto">
                            Our Mains evaluation program is distinctively rigorous. We provide line-by-line feedback focusing not just on the content, but structure, presentation, and question demand.
                        </p>
                    </div>

                    <UpscMainsTestSeriesCards examName="UPSC CSE Mains" />
                </div>
            </div>

        </div>
    );
}
