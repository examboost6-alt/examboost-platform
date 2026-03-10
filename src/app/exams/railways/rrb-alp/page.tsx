import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star, Users, Calculator, Lightbulb, HelpCircle, Flame, TrendingUp, Award, Gauge
} from 'lucide-react';
import RailwaysTestSeriesCards from '@/components/RailwaysTestSeriesCards';

export const metadata = {
    title: 'RRB ALP (Asst. Loco Pilot) & Tech Preparation - ExamBoost',
    description: 'Complete RRB ALP preparation. Master CBT-1, the difficult CBT-2 Trade subjects, and the CBAT Psycho Battery tests.'
};

const syllabusTopics = [
    { title: "CBT-1 (75 Qs)", icon: Calculator, desc: "A 60-minute qualifying paper covering Mathematics, Reasoning, General Science, and Current Affairs. High calculation speed is essential here." },
    { title: "CBT-2 Part A (100 Qs)", icon: Brain, desc: "The definitive merit decider. Focuses heavily on Basic Science & Engineering, Engineering drawing, Work/Power/Energy, and IT Literacy." },
    { title: "CBT-2 Part B (75 Qs)", icon: Target, desc: "Strictly qualifying in nature (35%). It features domain-specific questions based on the DGET syllabus of your chosen trade (Electrician, Fitter, etc.)." }
];

const features = [
    { icon: Layout, title: "Exact Trade Tests", desc: "We provide specialized mocks for CBT-2 Part B with domain-specific questions perfectly matching ITI/Diploma official curriculums." },
    { icon: Gauge, title: "CBAT Psycho Battery", desc: "Our platform features an identical simulator for the RDSO Computer Based Aptitude Test including Memory, Depth Perception, and Concentration batteries." },
    { icon: TrendingUp, title: "Stage-Wise Analytics", desc: "Track your performance through all stages. Instantly identify if your technical Part B requires more attention to avoid disqualification." }
];

const testimonials = [
    { name: "Punit Jha", role: "Assistant Loco Pilot", review: "The CBAT psycho test simulator from ExamBoost is exactly the same as the official RDSO interface. I scored a clear T-Score 58 in all 5 batteries." },
    { name: "Ramesh Singh", role: "Technician Grade III", review: "The Electrical Trade Part B mocks were very authentic. Many actual exam questions on DC motors and Transformers came directly from here." },
    { name: "Vikash Sharma", role: "Loco Pilot Selected", review: "CBT-2 Part A's Basic Science & Engineering section mocks closely matched the tough, unexpected numerical-heavy paper we got." }
];

const faqs = [
    { q: "Is ITI/Diploma completely mandatory for ALP?", a: "To apply for Assistant Loco Pilot (ALP), candidates must have completed Matriculation + ITI in specified trades, or possess a Diploma/Degree in Engineering disciplines." },
    { q: "What happens if I fail in CBT-2 Part B (Trade Test)?", a: "Part B is strictly qualifying with a blanket 35% cut-off. If you fail to score 35%, your Part A marks will NOT be evaluated, disqualifying you instantly." },
    { q: "Is there any negative marking in the CBAT (Psycho Test)?", a: "No, there is absolutely no negative marking in the Computer Based Aptitude Test (CBAT). But you must secure a minimum T-Score of 42 in each and every test battery to qualify." },
    { q: "Do Technicians also face the CBAT Psycho test?", a: "No, the CBAT is exclusively applicable for Assistant Loco Pilot (ALP) candidates. Technicians' final merit is formulated based solely on their CBT-2 Part A marks (after qualifying Part B)." }
];

export default function RRBALPPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 dark:bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl">

                    <div className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2 flex-wrap justify-center lg:justify-start">
                            <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams/railways" className="hover:text-primary dark:hover:text-accent transition-colors">Railway</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-white font-bold">RRB ALP & Tech</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-red-500/20 shadow-sm uppercase">
                            <ShieldCheck className="w-4 h-4" /> Technical Recruitment
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Prepping for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400">Assistant Loco Pilot?</span> We got you.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            The ALP exam is a rigorous 3-stage process. We provide everything you need: CBT-1 speed mocks, CBT-2 Technical Trade tests (Electrician/Fitter), and the exact CBAT Psycho Battery simulator.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                                <Star className="w-5 h-5 fill-white" /> View ALP Modules
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <BookOpen className="w-5 h-5" /> View Exam Pattern
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">All 3 Stages</div>
                                <div className="text-sm font-medium text-slate-500">CBT1, CBT2, Psycho</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">Trade Tests</div>
                                <div className="text-sm font-medium text-slate-500">Engineering/ITI Syllabi</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-12 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-rose-600/30 rounded-full blur-[100px] -z-10"></div>

                        <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                            <div className="h-2 w-full bg-gradient-to-r from-red-500 to-rose-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md border border-red-200 dark:border-red-800/50 flex items-center gap-1">
                                        <Flame className="w-3 h-3" /> CBT-2 (Part B) Electrical
                                    </div>
                                    <div className="text-slate-500 text-sm font-bold flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 48:19
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">Which strictly of the following motors is preferred for high-torque cranes and heavy hoists?</h3>

                                <div className="space-y-3 mb-6">
                                    {['DC Shunt Motor', 'AC Squirrel Cage Motor', 'DC Series Motor', 'Synchronous Motor'].map((opt, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 2 ? 'bg-red-50 border-red-500 dark:bg-red-900/20 dark:border-red-500/50' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 2 ? 'border-red-500 bg-red-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                                {i === 2 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`font-semibold text-sm ${i === 2 ? 'text-red-800 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex flex-col"><span>Attempted</span> <span className="text-green-500">62/75</span></div>
                                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md">
                                        Save & Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Key Information Highlights */}
            <div id="exam-info" className="py-20 bg-slate-50 dark:bg-slate-950 w-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Complete 3-Stage Process</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">ALP recruitment is technically heavy and demands specialized preparation across all tiers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 shrink-0 border border-red-100 dark:border-red-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 1: CBT-1</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">A 60-minute qualifying exam covering Math, Reasoning, Science and GA.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Math & Reasoning: 45 Qs</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Science & Current Affairs: 30 Qs</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> 75 Questions in 60 Minutes</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Purely Qualifying stage</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-red-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">TRADE TEST</div>
                            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 2: CBT-2 (Parts A & B)</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">General paper + Technical trade exam happening on the same day.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Part A: 100 Qs / 90 Mins</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Part B (Trade): 75 Qs / 60 Mins</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Part B is Qualifying (35% cutoff)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Part A score counts for Merit</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 shrink-0 border border-amber-100 dark:border-amber-800/50">
                                <Gauge className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 3: CBAT (Psycho)</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Applicable ONLY for ALP posts, not technicians.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Memory & Concentration tests</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Depth perception rules</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Strict T-Score cutoff of 42 per battery</li>
                                <li className="flex gap-3 text-xs text-slate-400 mt-2 block pt-4 border-t border-slate-100 dark:border-slate-800">Final Merit = 70% of CBT-2 Part A + 30% of CBAT overall marks.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Syllabus Breakdown */}
            <div className="py-20 bg-white dark:bg-[#0f172a] w-full border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Crucial Syllabus Areas</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Master these extremely intense topics across the entire 3 phase journey.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {syllabusTopics.map((topic, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-red-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
                                    <topic.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{topic.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{topic.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Why ExamBoost */}
            <div className="py-20 bg-slate-50 dark:bg-slate-950 w-full border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why ExamBoost Mocks?</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">We analyze every single TCS sub-topic shift by shift to guarantee your technical and psychological preparation aligns completely.</p>
                            </div>
                            <div className="space-y-8">
                                {features.map((feat, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm">
                                            <feat.icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">{feat.title}</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full lg:pl-10">
                            <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                                <Award className="w-14 h-14 text-white/50 mb-8" />
                                <h3 className="text-4xl font-black mb-4 tracking-tight">Technical + Psycho</h3>
                                <p className="text-red-100 text-lg mb-10 font-medium">The only platform that handles the full spectrum from standard math to RDSO Psycho simulators.</p>
                                <ul className="space-y-4 font-bold text-white/95 text-lg">
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Specialized Train Simulators</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> ITI/Diploma Trade Focus</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Multi-Stage Analytics engine</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Test Series Call from Component */}
            <div id="test-series" className="py-24 bg-white dark:bg-[#0f172a] w-full border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-red-600 dark:text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">End-to-End Preparation</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">RRB ALP Test Packages</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">From 75Q CBT-1 mocks all the way to complex electrical and fitter trade tests & CBAT simulators.</p>
                    </div>

                    <RailwaysTestSeriesCards examName="RRB ALP Mock Package" />
                </div>
            </div>

            {/* 6. Testimonials */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Candidate Success Stories</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Hear from future Loco Pilots who successfully crossed the finish line relying entirely on our testing engine.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all">
                                <div className="flex text-amber-500 mb-6">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-1 italic">"{test.review}"</p>
                                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500 text-lg">
                                        {test.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{test.name}</h4>
                                        <p className="text-xs text-red-600 dark:text-red-400 font-bold mt-1 uppercase">{test.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 7. FAQs */}
            <div className="py-24 bg-white dark:bg-[#0f172a] w-full border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-red-600 dark:text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">Clear Your Doubts</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-red-500/20 transition-colors">
                                <h4 className="flex items-start gap-4 text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    <HelpCircle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-1" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 pl-10 text-base leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
