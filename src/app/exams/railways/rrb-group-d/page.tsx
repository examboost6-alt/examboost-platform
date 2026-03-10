import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star, Users, Calculator, Lightbulb, HelpCircle, Flame, TrendingUp, Award
} from 'lucide-react';
import RailwaysTestSeriesCards from '@/components/RailwaysTestSeriesCards';

export const metadata = {
    title: 'RRB Group D (Level-1) Preparation & Mock Tests - ExamBoost',
    description: 'Complete RRB Group D preparation. Focus on General Science and Math to secure your selection in the massive RRC Group D recruitment.'
};

const syllabusTopics = [
    { title: "General Science (25 Qs)", icon: Zap, desc: "Strictly 10th Standard Physics, Chemistry, and Life Sciences (Biology) based completely on CBSE/NCERT." },
    { title: "Mathematics (25 Qs)", icon: Calculator, desc: "BODMAS, Decimals, Fractions, LCM, HCF, Ratio, Percentages, Mensuration, Time and Work, basic Geometry." },
    { title: "Gen. Intelligence (30 Qs)", icon: Brain, desc: "Logical reasoning, Coding, Series. Massive weightage means you must attempt these rapidly." }
];

const features = [
    { icon: Layout, title: "Exact RRC CBT UI", desc: "Our exam engine exactly mirrors the official RRC CBT digital interface, including standard color palettes." },
    { icon: FileText, title: "NCERT Science Coverage", desc: "Since Science is the maker or breaker here, our mocks contain exclusively 10th standard NCERT formula-based questions." },
    { icon: TrendingUp, title: "Real Volume Ranking", desc: "Group D sees 1Cr+ applicants. Our All India Rank gives you a true standing among serious mass participants." }
];

const testimonials = [
    { name: "Manish Yadav", role: "Track Maintainer IV", review: "The General Science section in ExamBoost mocks was a lifesaver. Direct numericals from their Physics mocks appeared in my shift." },
    { name: "Sunita Roy", role: "Assistant (Works)", review: "Since there's only one CBT, competition is fierce. The daily live mocks trained me to solve 100 questions comfortably in 80 mins." },
    { name: "Ravi Kumar", role: "Assistant Pointsman", review: "Their detailed solutions for Math and Reasoning were better than any online course I bought. Purely self-study and ExamBoost." }
];

const faqs = [
    { q: "Is there any CBT-2 for Group D?", a: "No, RRB Group D involves only a single stage Computer Based Test (CBT), followed by a Physical Efficiency Test (PET)." },
    { q: "What is the standard of General Science?", a: "The official syllabus explicitely mentions 10th standard level Science (Physics, Chemistry, and Life Sciences) of CBSE or NCERT boards." },
    { q: "Is PET marks added to final merit?", a: "No, the Physical Efficiency Test (PET) is strictly qualifying in nature. Your final merit ranking is solely based on your Computer Based Test score." },
    { q: "What is PET for male and female candidates?", a: "Males: Lift 35kg for 100m, run 1000m in 4m15s. Females: Lift 20kg for 100m, run 1000m in 5m40s." }
];

export default function RRBGroupDPage() {
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
                            <span className="text-slate-900 dark:text-white font-bold">RRB Group D</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-red-500/20 shadow-sm uppercase">
                            <ShieldCheck className="w-4 h-4" /> Level-1 Track Maintainer / Assistant
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            One Exam Between You & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400">Indian Railways</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            Unlike NTPC, Group D involves only one CBT. Master 10th-standard Science and fast Mathematics. Practice with the only test platform that strictly adheres to actual RRC difficulty levels.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                                <Star className="w-5 h-5 fill-white" /> Access Free Mock
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <BookOpen className="w-5 h-5" /> View Exam Pattern
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">100 Qs</div>
                                <div className="text-sm font-medium text-slate-500">Single Stage CBT</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">Massive Target</div>
                                <div className="text-sm font-medium text-slate-500">1 Lakh+ Vacancies generally</div>
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
                                        <Flame className="w-3 h-3" /> Level-1 Standard
                                    </div>
                                    <div className="text-slate-500 text-sm font-bold flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 74:10
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">An object is placed at a distance of 10 cm from a convex mirror of focal length 15 cm. Find the image distance.</h3>

                                <div className="space-y-3 mb-6">
                                    {['6 cm behind mirror', '-6 cm in front', '15 cm behind mirror', '30 cm behind mirror'].map((opt, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 0 ? 'bg-red-50 border-red-500 dark:bg-red-900/20 dark:border-red-500/50' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 0 ? 'border-red-500 bg-red-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                                {i === 0 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`font-semibold text-sm ${i === 0 ? 'text-red-800 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex flex-col"><span>Attempted</span> <span className="text-green-500">22/100</span></div>
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">RRB Group D Structure</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">The crucial single stage CBT that decides your fate before the Physical Efficiency Test (PET).</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 shrink-0 border border-red-100 dark:border-red-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Subject Breakdown</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Total 100 questions. Exceptionally high emphasis on General Science.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> General Science: 25 Qs</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Mathematics: 25 Qs</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Reasoning: 30 Qs & GA: 20 Qs</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-red-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">CRITICAL CBT</div>
                            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Scoring Strategy</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Science and Fast Reasoning are the absolute main scoring domains here to pass the cut.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Total Time: 90 Minutes</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Negative Marking: -1/3</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Total Marks: 100</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-red-500 shrink-0" /> Set up for PET</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 shrink-0 border border-rose-100 dark:border-rose-800/50">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Physical Efficiency (PET)</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">You must pass a physical endurance test immediately following CBT selection.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Male: Lift 35kg for 100m</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Run: 1000m dash</li>
                                <li className="flex gap-3 text-xs text-slate-400 mt-2 block pt-4 border-t border-slate-100 dark:border-slate-800">Only candidates performing well in CBT are shortlisted for PET in 1:3 ratio.</li>
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
                        <p className="text-lg text-slate-600 dark:text-slate-400">Master these intense topics to ensure you comfortably break previous merit ceilings easily.</p>
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
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> 10th NCERT Focus</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> 10+ Years Memory PYQs</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Direct Formula Coverage</li>
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
                        <span className="text-red-600 dark:text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">10th Level Preparation packs</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">RRB Group D Passes</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get hundreds of mock tests with extremely detailed NCERT based science solutions immediately.</p>
                    </div>

                    <RailwaysTestSeriesCards examName="RRB Group D" />
                </div>
            </div>

            {/* 6. Testimonials */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Candidate Success Stories</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Hear from track maintainers and pointsmen who successfully crossed the finish line relying entirely on our testing engine.</p>
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
