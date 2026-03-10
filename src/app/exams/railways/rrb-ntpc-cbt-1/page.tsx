import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star, Users, Calculator, Lightbulb, HelpCircle, Flame, TrendingUp, Award
} from 'lucide-react';
import RailwaysTestSeriesCards from '@/components/RailwaysTestSeriesCards';

export const metadata = {
    title: 'RRB NTPC CBT-1 Preparation & Mock Tests - ExamBoost',
    description: 'Complete RRB NTPC CBT-1 preparation. Cross the fierce cutoffs with our TCS-pattern mock tests.'
};

const syllabusTopics = [
    { title: "Mathematics (30 Qs)", icon: Calculator, desc: "Number System, Decimals, Fractions, LCM, HCF, Ratio & Proportion, Percentage, Mensuration, Time & Work." },
    { title: "General Intelligence (30 Qs)", icon: Brain, desc: "Analogies, Number & Alphabet series, Coding-Decoding, Mathematical Operations, Syllogism." },
    { title: "General Awareness (40 Qs)", icon: Lightbulb, desc: "Current Events, Indian Economy, History, Geography, General Science upto 10th CBSE." }
];

const features = [
    { icon: Layout, title: "Exact TCS Interface", desc: "Our exam engine mirrors the official TCS digital interface, including color palettes and buttons." },
    { icon: TrendingUp, title: "All India Percentile", desc: "Compare your score directly with hundreds of thousands of serious RRB candidates nationwide." },
    { icon: FileText, title: "Detailed Solutions", desc: "Every question comes with a comprehensive bilingual solution and shortcut tricks for Math." }
];

const testimonials = [
    { name: "Suresh Kumar", role: "NTPC Selected (2019)", review: "ExamBoost mocks were exactly the same difficulty as the actual CBT-1. I scored 82/100 purely because of their timed sectional tests mapping my weak zones." },
    { name: "Priya Singh", role: "Station Master Aspirant", review: "The mathematics shortcut tricks provided in the solutions saved me almost 10 minutes in the real exam allowing me to attempt more General Awareness." },
    { name: "Rahul Dev", role: "Railway Employee", review: "Their General Awareness PDFs and topic-wise Current Affairs tests covered almost 90% of the questions asked directly in my shift." }
];

const faqs = [
    { q: "Is normalisation applied in CBT-1?", a: "Yes, since the exam is conducted in multiple shifts over many months, RRB applies a strict normalization formula to calculate final scores, making accuracy very crucial." },
    { q: "Is there any sectional cut-off?", a: "No, there are no sectional cut-offs or sectional timings. You can switch between Math, Reasoning, and GA anytime within the 90 minutes." },
    { q: "Is this qualifying in nature?", a: "Yes, marks scored in CBT-1 are not added to the final merit list. They are only for shortlisting candidates for CBT-2 (20 times the total vacancies)." },
    { q: "Are the mock tests available in Hindi?", a: "Yes, every single mock test on ExamBoost is completely bilingual. You can switch the question language between English and Hindi, just like the real exam." }
];

export default function RRBNTPCCBT1Page() {
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
                            <span className="text-slate-900 dark:text-white font-bold">RRB NTPC CBT-1</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-red-500/20 shadow-sm uppercase">
                            <ShieldCheck className="w-4 h-4" /> 20x Candidates Shortlisted
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Dominate the Screening with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400">NTPC CBT-1</span> Tests
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            CBT-1 is a brutal screening process where millions are rejected. Build unmatched speed in Mathematics and master General Awareness with India's most realistic TCS-pattern mocks.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                                <Star className="w-5 h-5 fill-white" /> Start Free Mock
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <BookOpen className="w-5 h-5" /> View Exam Pattern
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">100 Qs</div>
                                <div className="text-sm font-medium text-slate-500">In 90 Minutes</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">-1/3</div>
                                <div className="text-sm font-medium text-slate-500">Negative Marking</div>
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
                                        <Flame className="w-3 h-3" /> Live Pattern Demo
                                    </div>
                                    <div className="text-slate-500 text-sm font-bold flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 89:59
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">If x + 1/x = 3, then find the value of x³ + 1/x³</h3>

                                <div className="space-y-3 mb-6">
                                    {['18', '27', '24', '30'].map((opt, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 0 ? 'bg-red-50 border-red-500 dark:bg-red-900/20 dark:border-red-500/50' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 0 ? 'border-red-500 bg-red-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                                {i === 0 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`font-semibold text-sm ${i === 0 ? 'text-red-800 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex flex-col"><span>Attempted</span> <span className="text-green-500">45/100</span></div>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">RRB NTPC CBT-1 Structure</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Essential phase-1 details based on the official Indian Railways notification.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 shrink-0 border border-red-100 dark:border-red-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Subject Breakdown</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Total 100 questions. No sectional cut-offs or timing constraints.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> General Awareness: 40 Qs</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Mathematics: 30 Qs</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Gen Intelligence & Reasoning: 30 Qs</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-red-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">CRITICAL PHASE</div>
                            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Scoring & Qualification</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">CBT-1 is strictly qualifying. Marks are not added to final merit.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Total Time: 90 Minutes</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Correct Answer: +1 Mark</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Negative Marking: -1/3 Mark</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Level: 10th/12th difficulty</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 shrink-0 border border-rose-100 dark:border-rose-800/50">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Shortlisting Ratio</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Candidates filter through this stage to reach the CBT-2 exam.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Ratio: 20 times the vacancies</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Category-wise shortlisting</li>
                                <li className="flex gap-3 text-xs text-slate-400 mt-2 block pt-4 border-t border-slate-100 dark:border-slate-800">Normalization will be decisively applied due to multi-shift exams.</li>
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
                        <p className="text-lg text-slate-600 dark:text-slate-400">Master these topics to ensure you comfortably clear the high cut-offs.</p>
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
                                <p className="text-lg text-slate-600 dark:text-slate-400">We analyze every single TCS sub-topic shift by shift to guarantee your preparation aligns perfectly with the current testing trends.</p>
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
                                <h3 className="text-4xl font-black mb-4 tracking-tight">1 Lakh+ Students</h3>
                                <p className="text-red-100 text-lg mb-10 font-medium">Trust ExamBoost for their Indian Railway competitive preparation daily.</p>
                                <ul className="space-y-4 font-bold text-white/95 text-lg">
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> 2000+ Mock Tests</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> 10+ Years Memory PYQs</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> All India Live Rankings</li>
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
                        <span className="text-red-600 dark:text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">10th Level Preparation Packs</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">RRB NTPC CBT-1 Packs</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get familiar with the TCS interface and conquer the massive General Awareness section with our dedicated packs.</p>
                    </div>

                    <RailwaysTestSeriesCards examName="RRB NTPC CBT-1" />
                </div>
            </div>

            {/* 6. Testimonials */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Candidate Success Stories</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Hear from those who successfully crossed the finish line relying entirely on our testing engine.</p>
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
