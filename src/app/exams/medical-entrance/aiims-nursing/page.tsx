import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, ShieldCheck, BarChart, Clock, Layout,
    Calendar, Layers, Zap, Star, Award, Stethoscope
} from 'lucide-react';
import AiimsTestSeriesCards from '@/components/AiimsTestSeriesCards';

export const metadata = {
    title: 'AIIMS B.Sc Nursing Preparation 2026 - ExamBoost',
    description: 'Comprehensive preparation resources, full-length CBT mock tests, complete exam information, syllabus, and study materials for AIIMS B.Sc Nursing 2026.'
};

export default function AiimsNursingPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full">

            {/* 1. Modern Clean Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-20 pt-4 md:pt-8">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 flex-wrap mb-8">
                        <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/exams/medical-entrance" className="hover:text-primary dark:hover:text-accent transition-colors">Medical</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 dark:text-white">AIIMS Nursing</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">AIIMS Excellence 2026</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">Computer Based Test (CBT)</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                                    Secure <span className="text-fuchsia-600 dark:text-fuchsia-500">AIIMS Delhi</span> Seat.
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                                    Clear the B.Sc. (Hons.) Nursing Entrance with ExamBoost. Experience strictly authentic CBT simulators mimicking the actual 120-minute, 100-question exam format perfectly mapped for fast-paced success.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#test-series" className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                                    <Star className="w-5 h-5 fill-current" /> Explore Mock Tests
                                </a>
                                <a href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5" /> Exam Details & Syllabus
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                                <div className="flex -space-x-3">
                                    {[2, 3, 4].map(i => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Student" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-fuchsia-100 dark:bg-fuchsia-900/50 flex items-center justify-center text-xs font-bold text-fuchsia-700 dark:text-fuchsia-400">
                                        2L+
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                    Trusted by <span className="font-bold text-slate-900 dark:text-white">2 Lakh+</span> <br /> Nursing Aspirants
                                </div>
                            </div>
                        </div>

                        {/* Infographic Hero Image replacement */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none">
                            <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">
                                {/* Decorative background grid */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

                                {/* Main floating card */}
                                <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-500 rounded-xl flex items-center justify-center">
                                                <Stethoscope className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 dark:text-white">Target Rank Score</div>
                                                <div className="text-xs font-medium text-slate-500">AIIMS New Delhi / Jodhpur</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-black text-fuchsia-600 dark:text-fuchsia-500">75+</div>
                                            <div className="text-xs font-bold text-slate-500">/ 100 Marks</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Biology</span> <span>25/30</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-green-500 w-[85%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Chemistry</span> <span>22/30</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-cyan-500 w-[73%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>Physics</span> <span>20/30</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-indigo-500 w-[66%] h-full rounded-full"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                                                <span>General Knowledge</span> <span>8/10</span>
                                            </div>
                                            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-orange-400 w-[80%] h-full rounded-full"></div></div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Safe AIIMS Ranking Cut-off</span>
                                    </div>
                                </div>

                                {/* small floating elements */}
                                <div className="absolute top-12 left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
                                    <Zap className="w-4 h-4 text-amber-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">120 Minutes</span>
                                </div>
                                <div className="absolute bottom-12 right-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_4s_infinite_1s]">
                                    <Layout className="w-4 h-4 text-fuchsia-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Computer Based</span>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Everything About AIIMS B.Sc. Nursing</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Detailed examination format exclusively conducted online across major centers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Layout, title: "Exam Mode", desc: "Online Computer Based Test (CBT) only." },
                            { icon: Target, title: "Total Questions", desc: "100 mandatory Multiple Choice Questions (MCQs)." },
                            { icon: ShieldCheck, title: "Marking Scheme", desc: "+1 for correct answer, -1/3 for incorrect answers." },
                            { icon: Clock, title: "Duration", desc: "Strictly 120 minutes (2 hours) to complete the exam." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-full flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-[250px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Section Pattern Overview */}
            <div className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

                        <div className="flex-1 space-y-6 lg:max-w-xl">
                            <span className="text-fuchsia-600 dark:text-fuchsia-500 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <BarChart className="w-4 h-4" /> Exam Strategy
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Exam Section Breakdown
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                The B.Sc. (Hons) Nursing entrance allocates equal weightage to the three core science subjects combined with a unique General Knowledge segment.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-500 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">Core Sciences:</strong> Physics, Chemistry, and Biology perfectly balanced at 30 questions each.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="p-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-500 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5"><strong className="text-slate-900 dark:text-white">General Knowledge:</strong> 10 Questions focusing on history, current affairs, policies, and general scientific research.</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold italic">
                                    "Due to the steep -1/3 negative marking, blind guessing is strictly discouraged. Attempt the General Knowledge section carefully to maintain an edge."
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 w-full bg-slate-50 dark:bg-slate-800/30 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Subject Marks Weightage</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { sub: "Biology", total: "30 Marks", items: 30, color: "bg-green-500" },
                                    { sub: "Physics", total: "30 Marks", items: 30, color: "bg-indigo-500" },
                                    { sub: "Chemistry", total: "30 Marks", items: 30, color: "bg-cyan-500" },
                                    { sub: "General Knowledge", total: "10 Marks", items: 10, color: "bg-orange-400" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center group">
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1.5">
                                                <span className="font-bold text-slate-900 dark:text-white">{item.sub}</span>
                                                <span className="font-semibold text-slate-500">{item.total}</span>
                                            </div>
                                            <div className="flex h-3 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                                <div className={`${item.color} w-full h-full group-hover:opacity-90 transition-opacity`} />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">
                                                <span>{item.items} Questions</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                    <span className="font-black text-fuchsia-600 dark:text-fuchsia-500">Maximum Possible</span>
                                    <span className="bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400 font-bold px-3 py-1 rounded">100 Marks</span>
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
                        <span className="text-fuchsia-600 dark:text-fuchsia-500 font-bold tracking-wider uppercase text-sm mb-4 block">Important Guidelines</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">AIIMS Nursing Action Plan</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Biology & Sciences</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                Unlike NEET covering a massive 50% chunk for Biology, AIIMS treats PCB almost equally. Do not neglect Physics or Chemistry conceptually to chase only Zoology/Botany facts.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">General Knowledge</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                The defining factor between a good rank and a top rank. Current Affairs over the last 6 months, basic Indian History, Geography, and current Medical/Scientific policies play a massive role.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Speed & Accuracy</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-4">
                                120 minutes for 100 questions gives you slightly more than a minute per question. Beware of the sharp negative marking (1/3 mark deducted) compared to other mainstream tests.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Main Test Series Call to Action */}
            <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="px-4 py-1.5 rounded-full bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 font-bold tracking-wider uppercase text-xs mb-6 inline-block shadow-sm">Your Dream AIIMS Campus Awaits</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">AIIMS Nursing Preparation Plan</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Practice under exact CBT time pressure with negative marking enabled. 100-Questions simulator sets exclusively curated for B.Sc (Hons) nursing entrance prep.
                        </p>
                    </div>

                    <AiimsTestSeriesCards examName="AIIMS Nursing" />
                </div>
            </div>

        </div>
    );
}
