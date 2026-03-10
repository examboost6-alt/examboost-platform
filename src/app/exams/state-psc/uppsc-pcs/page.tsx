import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star, Users, Calculator, Lightbulb, HelpCircle, Flame, TrendingUp, Award, Gauge
} from 'lucide-react';
import StatePscTestSeriesCards from '@/components/StatePscTestSeriesCards';

export const metadata = {
    title: 'UPPSC PCS Preparation & Mock Tests - ExamBoost',
    description: 'Complete UPPSC PCS preparation. Master UPPCS Prelims and Mains with state localized test series and expert answer evaluation.'
};

const syllabusTopics = [
    { title: "General Studies I (150 Qs)", icon: Lightbulb, desc: "History, Indian & World Geography, Polity, Economy, and specifically UP State history, geography, and current affairs (UP Budget)." },
    { title: "CSAT (GS II) (100 Qs)", icon: Brain, desc: "Comprehension, Interpersonal skills, Logical Reasoning, Mental Ability, Elementary Math (Class 10 level), and English/Hindi language." },
    { title: "Mains Examination", icon: FileText, desc: "Consists of Gen. Hindi, Essay, and 6 General Studies papers (GS-1 to GS-6). Massive focus on descriptive writing." }
];

const features = [
    { icon: Target, title: "UP Focused GK", desc: "Our test series dynamically injects UP specific history, geography, and polity based exactly on the latest UPPCS trends." },
    { icon: FileText, title: "Mains Answer Evaluation", desc: "Descriptive answers for GS 1-6 are meticulously checked by selected officers to align with true marking standards." },
    { icon: TrendingUp, title: "Hindi & English Support", desc: "Both the platform interface and detailed solution PDFs are perfectly crafted bilingually in flawless Hindi and English." }
];

const testimonials = [
    { name: "Anurag Singh", role: "UPPSC PCS (SDM)", review: "The coverage of the UP Budget and state-specific geography in their mock tests matched the real Prelims surprisingly well." },
    { name: "Kajal Trivedi", role: "Block Development Officer", review: "The detailed model answers for Mains were phenomenal. It showed me how to structure 125-word and 200-word questions perfectly." },
    { name: "Vivek Yadav", role: "Naib Tehsildar Selected", review: "CSAT was my weak point. Practicing their CSAT qualifying mocks ensured I cleared the 33% hurdle without any pressure on exam day." }
];

const faqs = [
    { q: "Is CSAT marks added to final Prelims merit?", a: "No, CSAT (General Studies Paper II) is strictly qualifying in nature. You must score at least 33% in it, but your Prelims cutoff is entirely decided by GS Paper I." },
    { q: "Is there any negative marking in UPPCS?", a: "Yes, there is a penalty of 1/3rd of the marks assigned to that question for every incorrect answer in both GS Paper I and II." },
    { q: "Are Optional Subjects completely removed?", a: "Yes, the UP Public Service Commission recently eliminated optional subjects from the Mains exam. They are replaced by GS Papers 5 and 6, exclusively covering UP specific knowledge." },
    { q: "Are the mock test interfaces exactly like the real UPPSC digital OMR format?", a: "Yes, our interface ensures you practice with extreme time consciousness, exactly mimicking the pressure of the official examination hall." }
];

export default function UPPSCPCSPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl">

                    <div className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2 flex-wrap justify-center lg:justify-start">
                            <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams/state-psc" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">State PSC</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-white font-bold">UPPSC PCS</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-teal-500/20 shadow-sm uppercase">
                            <ShieldCheck className="w-4 h-4" /> Uttar Pradesh Elite Services
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Succeed in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">UPPSC PCS</span> with Targeted Precision
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            From Prelims to Mains. Experience India's hardest localized exam with flawlessly crafted state-specific mock tests and evaluated answer writing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20">
                                <Star className="w-5 h-5 fill-white" /> UPPSC Mock Modules
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <BookOpen className="w-5 h-5" /> View Latest Syllabus
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">GS I & CSAT</div>
                                <div className="text-sm font-medium text-slate-500">Prelims Objective</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">8 Papers</div>
                                <div className="text-sm font-medium text-slate-500">Mains Descriptive</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-12 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-emerald-600/30 rounded-full blur-[100px] -z-10"></div>

                        <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                            <div className="h-2 w-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md border border-teal-200 dark:border-teal-800/50 flex items-center gap-1">
                                        <Flame className="w-3 h-3" /> GS-1 (History)
                                    </div>
                                    <div className="text-slate-500 text-sm font-bold flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 112:15
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">Which of the following sites of Indus Valley Civilization is located in present-day Uttar Pradesh?</h3>

                                <div className="space-y-3 mb-6">
                                    {['Banawali', 'Kalibangan', 'Alamgirpur', 'Rakhigarhi'].map((opt, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 2 ? 'bg-teal-50 border-teal-500 dark:bg-teal-900/20 dark:border-teal-500/50' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 2 ? 'border-teal-500 bg-teal-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                                {i === 2 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`font-semibold text-sm ${i === 2 ? 'text-teal-800 dark:text-teal-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex flex-col"><span>Attempted</span> <span className="text-green-500">105/150</span></div>
                                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md">
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">UPPSC PCS Exam Structure</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Strictly following the latest updated syllabus eliminating optional subjects entirely.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/20 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 shrink-0 border border-teal-100 dark:border-teal-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 1: Prelims</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Objective type. Comprises two papers taken on a single day.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> GS Paper 1: 150 Qs / 200 Marks</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> GS Paper 2 (CSAT): 100 Qs / 200 Marks</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> CSAT is qualifying (33%)</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-teal-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">CORE MERIT</div>
                            <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 2: Mains</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Subjective/Descriptive tests determining your final selection and ranking.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" /> Gen. Hindi (150 M) & Essay (150 M)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" /> GS Papers 1 to 4: Each 200 Marks</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" /> GS Papers 5 & 6 (UP Specific): 200M</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 3: Interview</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Personality test measuring your traits for administrative services.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Total Weightage: 100 Marks</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Assesses leadership and ethics</li>
                                <li className="flex gap-3 text-xs text-slate-400 mt-2 block pt-4 border-t border-slate-100 dark:border-slate-800">Final merit is Mains (1500) + Interview (100) = 1600 Marks.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Syllabus Breakdown */}
            <div className="py-20 bg-white dark:bg-[#0f172a] w-full border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Mains Papers Detail Breakdown</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Master these extremely intensive subjects to become an elite SDM or DSP.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {syllabusTopics.map((topic, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
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
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why ExamBoost UPPSC Mocks?</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">Because generic UPSC test series entirely fail to capture the nuanced and localized nature of the UP Public Service Commission.</p>
                            </div>
                            <div className="space-y-8">
                                {features.map((feat, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm">
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
                            <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                                <Award className="w-14 h-14 text-white/50 mb-8" />
                                <h3 className="text-4xl font-black mb-4 tracking-tight">Focus on UP State GK</h3>
                                <p className="text-teal-100 text-lg mb-10 font-medium">Since UPPSC updated its syllabus, papers 5 and 6 demand hardcore state competence.</p>
                                <ul className="space-y-4 font-bold text-white/95 text-lg">
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" /> Target Prelims Fact-Based Data</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" /> Over 300+ CSAT Math Checks</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" /> Descriptive Checking Facility</li>
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
                        <span className="text-teal-600 dark:text-teal-500 font-bold tracking-wider uppercase text-sm mb-4 block">Unbeatable Prices</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">UPPSC Test Packages</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get complete end-to-end Prelims and evaluated Mains writing practice at market breaking prices.</p>
                    </div>

                    <StatePscTestSeriesCards examName="UPPSC PCS" />
                </div>
            </div>

            {/* 6. Testimonials */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Officer Success Stories</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Hear directly from candidates currently serving UP administration after using our precise metrics.</p>
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
                                        <p className="text-xs text-teal-600 dark:text-teal-400 font-bold mt-1 uppercase">{test.role}</p>
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
                        <span className="text-teal-600 dark:text-teal-500 font-bold tracking-wider uppercase text-sm mb-4 block">Clear Your Doubts</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/20 transition-colors">
                                <h4 className="flex items-start gap-4 text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    <HelpCircle className="w-6 h-6 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
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
