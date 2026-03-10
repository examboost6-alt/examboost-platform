import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star, Users, Calculator, Lightbulb, HelpCircle, Flame, TrendingUp, Award, Map
} from 'lucide-react';
import StatePscTestSeriesCards from '@/components/StatePscTestSeriesCards';

export const metadata = {
    title: 'RPSC RAS Preparation & Mock Tests - ExamBoost',
    description: 'Complete RPSC RAS preparation. Dominate Rajasthan GK, rigorous Prelims MCQs, and detailed Mains answer writing.'
};

const syllabusTopics = [
    { title: "RAS Prelims (150 Qs)", icon: Lightbulb, desc: "A massive chunk is dedicated to Rajasthan's extensive History, Art, Culture, Literature, Tradition, and deep Geography. Negative marking applies." },
    { title: "Mains Papers 1 to 3", icon: Brain, desc: "Highly diverse descriptive subjective analysis covering Indian Economy, Public Administration, Sports, Yoga, and Science with regional perspective." },
    { title: "General Hindi & English", icon: FileText, desc: "Mains Paper 4 focuses purely on language proficiency. 120 Marks for Hindi and 80 Marks for English. Critical for top-digit ranks." }
];

const features = [
    { icon: Map, title: "Rajasthan Art & Culture", desc: "Our test modules dive deep into precise local folklore, temple architecture, specific regional dialects, and detailed history of Rajputana." },
    { icon: FileText, title: "Subjective Evaluation", desc: "RAS Mains has 15-word, 50-word, and 100-word limit questions. We explicitly evaluate your answers based on this precise word constraint." },
    { icon: TrendingUp, title: "Economic Review Tracking", desc: "Direct numerical and scheme-based questions from the latest Rajasthan Economic Review are injected directly into our Prelims Mock tests." }
];

const testimonials = [
    { name: "Vikram Shekhawat", role: "RAS Officer Selected", review: "The Rajasthan specific current affairs and the economic survey data in ExamBoost mocks matched exactly with what was asked in the real Prelims." },
    { name: "Anjali Sharma", role: "Tehsildar", review: "Writing 15-word answers in Mains requires extreme precision without filler. The evaluator feedback taught me how to compress information perfectly." },
    { name: "Kunal Meena", role: "RTS Aspirant", review: "Mains Paper 4 (Language) is a game-changer. The strict checking on my Hindi grammar and English précis writing drastically improved my score." }
];

const faqs = [
    { q: "Is mathematics part of the RAS Prelims?", a: "Yes. Unlike some other states where math is in a qualifying CSAT paper, RPSC integrates 'Reasoning & Mental Ability' directly into the single 150-question Prelims paper. It directly affects the cutoff." },
    { q: "Are there any Optional Subjects in RAS Mains?", a: "No. The RPSC RAS Mains exam consists of 4 strictly compulsory papers (3 General Studies and 1 Language paper). There are no optional subjects allowed." },
    { q: "How much weightage does Rajasthan GK hold?", a: "Huge. At least 35% to 45% of the questions in both Prelims and GS papers of the Mains are exclusively related to the state of Rajasthan (History, Economy, Geography)." },
    { q: "Is the Mains examination conducted in English?", a: "Candidates have the choice to answer the General Studies papers in either Hindi or English. However, Paper 4 has specific language requirements for both Hindi and English sections." }
];

export default function RPSCRASPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl">

                    <div className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2 flex-wrap justify-center lg:justify-start">
                            <Link href="/" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams/state-psc" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">State PSC</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-white font-bold">RPSC RAS</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-rose-500/20 shadow-sm uppercase">
                            <ShieldCheck className="w-4 h-4" /> Rajasthan Administrative Service
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Master the Complex <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">RPSC RAS</span> Exam Strategy
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            Target RAS & RTS positions. Our test series heavily emphasizes the vast history and culture of Rajasthan, alongside precise word-limit constrained Mains evaluation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20">
                                <Star className="w-5 h-5 fill-white" /> Start RAS Series
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <BookOpen className="w-5 h-5" /> Detailed Pattern
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">150 MCQs</div>
                                <div className="text-sm font-medium text-slate-500">Prelims Objective</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">4 Papers</div>
                                <div className="text-sm font-medium text-slate-500">Mains Descriptive</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-12 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-pink-600/30 rounded-full blur-[100px] -z-10"></div>

                        <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                            <div className="h-2 w-full bg-gradient-to-r from-rose-500 to-pink-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md border border-rose-200 dark:border-rose-800/50 flex items-center gap-1">
                                        <Flame className="w-3 h-3" /> Rajasthan GK Review
                                    </div>
                                    <div className="text-slate-500 text-sm font-bold flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 74:25
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">The famous 'Bani Thani' painting, which is considered the Monalisa of India, belongs to which school of Rajasthani Art?</h3>

                                <div className="space-y-3 mb-6">
                                    {['Mewar School', 'Kishangarh School', 'Bundi School', 'Marwar School'].map((opt, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 1 ? 'bg-rose-50 border-rose-500 dark:bg-rose-900/20 dark:border-rose-500/50' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 1 ? 'border-rose-500 bg-rose-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                                {i === 1 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`font-semibold text-sm ${i === 1 ? 'text-rose-800 dark:text-rose-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex flex-col"><span>Attempted</span> <span className="text-green-500">128/150</span></div>
                                    <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md">
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">RPSC RAS Structure</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Strictly following the compulsory 4-paper Mains format with no optional subjects.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 shrink-0 border border-rose-100 dark:border-rose-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 1: Prelims</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Single Screening paper containing General Knowledge and Science.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-rose-500 shrink-0" /> Single Paper: 150 Qs</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-rose-500 shrink-0" /> Total Marks: 200</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-rose-500 shrink-0" /> Math & Reasoning included</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-rose-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">CORE MERIT</div>
                            <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 2: Mains</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Subjective tests requiring absolute precision to word limits. Entirely descriptive.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" /> GS Paper 1, 2, 3 (200 M each)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" /> Language Paper 4 (200 M)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" /> Strictly Compulsory</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6 shrink-0 border border-pink-100 dark:border-pink-800/50">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 3: Interview</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Personality test determining final list integration.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-rose-500 shrink-0" /> Total Marks: 100</li>
                                <li className="flex gap-3 text-xs text-slate-400 mt-2 block pt-4 border-t border-slate-100 dark:border-slate-800">Final merit ranking is completely out of 900 marks (800 Mains + 100 Interview).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Syllabus Breakdown */}
            <div className="py-20 bg-white dark:bg-[#0f172a] w-full border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Crucial RAS Subject Areas</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Master these distinct Rajasthan factors to secure a top 100 rank safely.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {syllabusTopics.map((topic, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-rose-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
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
                                <p className="text-lg text-slate-600 dark:text-slate-400">Because generic preparation drastically fails the exact 15/50/100 word limit writing format that RPSC strictly punishes if violated.</p>
                            </div>
                            <div className="space-y-8">
                                {features.map((feat, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm">
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
                            <div className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                                <Award className="w-14 h-14 text-white/50 mb-8" />
                                <h3 className="text-4xl font-black mb-4 tracking-tight">Focus on Mains Scale</h3>
                                <p className="text-rose-100 text-lg mb-10 font-medium">To clear RAS, evaluating your short format answers is equally as critical as long essays.</p>
                                <ul className="space-y-4 font-bold text-white/95 text-lg">
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Target 15/50 Word Constraints</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Evaluate Paper 4 Language Skills</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Deep Rajasthan Culture Integration</li>
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
                        <span className="text-rose-600 dark:text-rose-500 font-bold tracking-wider uppercase text-sm mb-4 block">State Level Pricing</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">RAS Preparation Packages</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get access to meticulously verified questions and structured checking for both Prelims and Mains.</p>
                    </div>

                    <StatePscTestSeriesCards examName="RPSC RAS" />
                </div>
            </div>

            {/* 6. Testimonials */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Aspirant Success Stories</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">See how localized data structuring helped aspirants clear the fierce cutoff in Rajasthan.</p>
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
                                        <p className="text-xs text-rose-600 dark:text-rose-400 font-bold mt-1 uppercase">{test.role}</p>
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
                        <span className="text-rose-600 dark:text-rose-500 font-bold tracking-wider uppercase text-sm mb-4 block">Clear Your Doubts</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-rose-500/20 transition-colors">
                                <h4 className="flex items-start gap-4 text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    <HelpCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-1" />
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
