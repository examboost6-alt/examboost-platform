import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star, Users, Calculator, Lightbulb, HelpCircle, Flame, TrendingUp, Award, Map
} from 'lucide-react';
import StatePscTestSeriesCards from '@/components/StatePscTestSeriesCards';

export const metadata = {
    title: 'BPSC (Bihar PSC) Preparation & Mock Tests - ExamBoost',
    description: 'Complete BPSC preparation. Master Bihar special GK, Prelims MCQ twists, and Mains intense descriptive writing.'
};

const syllabusTopics = [
    { title: "General Studies Prelims (150 Qs)", icon: Lightbulb, desc: "Intense focus on Indian History, Bihar specific History, General Science, Indian Polity, and pure Bihar related Geography." },
    { title: "Mains GS Papers (I & II)", icon: Brain, desc: "Detailed descriptive questions on Modern History, Statistical Analysis, Indian Economy, and Science & Tech implications in Bihar." },
    { title: "Essay & Optional Paper", icon: FileText, desc: "300 mark Essay paper acting as a merit booster. Optional subject is now MCQ based and strictly qualifying." }
];

const features = [
    { icon: Map, title: "Pure Bihar Local GK", desc: "Our test modules extensively cover Bihar special data, state economic surveys, local budget mappings, and district-wise details." },
    { icon: FileText, title: "Statistics GS-1 Practice", desc: "The crucial 72-mark statistical analysis section in Mains GS-1 is tackled with dedicated sectional graph and pie-chart exercises." },
    { icon: TrendingUp, title: "Negative Marking Handled", desc: "With BPSC introducing negative marking, our mocks strictly train you in intelligent guesswork elimination without massive penalties." }
];

const testimonials = [
    { name: "Priya Raj", role: "Revenue Officer", review: "BPSC Prelims often has confusing 'Option E' / multiple correct variations. ExamBoost mocks replicated that trickery perfectly." },
    { name: "Amit Kumar", role: "BDO (Bihar)", review: "The Mains evaluation by ExamBoost helped me structure my Indian Economy answers specifically keeping Bihar's poverty data in focus." },
    { name: "Snigdha S", role: "DSP Selected", review: "The sheer amount of high-quality Bihar Current Affairs questions in their sectional tests directly boosted my score by at least 15 marks." }
];

const faqs = [
    { q: "Has the 'Option E' format been changed?", a: "Recent trends show BPSC experimenting with standard 4-option frameworks with negative marking, eliminating the highly confusing 'None of the above / More than one of the above' 5th option format." },
    { q: "What is the new rule for the Optional Subject?", a: "The Optional subject in BPSC Mains is now completely MCQ-based and strictly qualifying (usually 30% or 34% marking). It's no longer added to your final ranking merit." },
    { q: "Is the Essay paper the new game-changer?", a: "Yes. With the optional paper just being qualifying, the 300-mark Essay paper (specifically one essay based wholly on Bihar proverbs/sayings) will dictate who makes it to the final list." },
    { q: "How much weightage does Bihar Special GK carry?", a: "In Prelims, anywhere from 20 to 30 out of 150 questions are directly sourced from Bihar's local history, geography, and current economic conditions." }
];

export default function BPSCPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 dark:bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl">

                    <div className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2 flex-wrap justify-center lg:justify-start">
                            <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams/state-psc" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">State PSC</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-white font-bold">BPSC</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-amber-500/20 shadow-sm uppercase">
                            <ShieldCheck className="w-4 h-4" /> Bihar Elite Administration
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Dominate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">BPSC Combine Services</span> Exam
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            From Prelims MCQs to Mains Essay checking. Clear Bihar's most reputed exam with targeted mock series highly focused on local GK and analytical statistics writing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
                                <Star className="w-5 h-5 fill-white" /> Access BPSC Mocks
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <BookOpen className="w-5 h-5" /> View Exam Pattern
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">150 Qs</div>
                                <div className="text-sm font-medium text-slate-500">Single Prelims Paper</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">900 Marks</div>
                                <div className="text-sm font-medium text-slate-500">Descriptive Merit Phase</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-12 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-600/30 rounded-full blur-[100px] -z-10"></div>

                        <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                            <div className="h-2 w-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md border border-amber-200 dark:border-amber-800/50 flex items-center gap-1">
                                        <Flame className="w-3 h-3" /> Bihar General Studies
                                    </div>
                                    <div className="text-slate-500 text-sm font-bold flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 84:12
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">During the Revolt of 1857, the great leader Kunwar Singh belonged to which district of Bihar?</h3>

                                <div className="space-y-3 mb-6">
                                    {['Patna', 'Gaya', 'Bhojpur (Jagdishpur)', 'Muzaffarpur'].map((opt, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 2 ? 'bg-amber-50 border-amber-500 dark:bg-amber-900/20 dark:border-amber-500/50' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 2 ? 'border-amber-500 bg-amber-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                                {i === 2 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`font-semibold text-sm ${i === 2 ? 'text-amber-800 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex flex-col"><span>Attempted</span> <span className="text-green-500">114/150</span></div>
                                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md">
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">BPSC Exam Structure</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Following the newly reformed BPSC pattern with updated optional rules.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 shrink-0 border border-amber-100 dark:border-amber-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 1: Prelims</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Objective stage consisting of a single comprehensive General Studies paper.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0" /> Total 150 Questions</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0" /> Total Time: 2 Hours</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0" /> Focus on General Science & Bihar GK</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-amber-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">MERIT MAKER</div>
                            <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 2: Mains</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Descriptive tests. Re-structured recently to increase focus on standard General Studies and specific essay writing logic.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" /> GS Paper I (300 Marks)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" /> GS Paper II (300 Marks)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" /> Essay Paper (300 Marks)</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 shrink-0 border border-orange-100 dark:border-orange-800/50">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 3: Interview</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Personality test determining final administrative fit.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-amber-500 shrink-0" /> Total Weightage: 120 Marks</li>
                                <li className="flex gap-3 text-xs text-slate-400 mt-2 block pt-4 border-t border-slate-100 dark:border-slate-800">Final merit ranking is completely out of 1020 marks (900 Mains + 120 Interview).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Syllabus Breakdown */}
            <div className="py-20 bg-white dark:bg-[#0f172a] w-full border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Crucial BPSC Subjects</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">These specific topic areas are consistent high-weightage sections in BPSC.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {syllabusTopics.map((topic, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
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
                                <p className="text-lg text-slate-600 dark:text-slate-400">BPSC evaluates differently. From specific Bihar-centric knowledge to statistics, our mock algorithms mimic actual past year difficulty variances perfectly.</p>
                            </div>
                            <div className="space-y-8">
                                {features.map((feat, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm">
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
                            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                                <Award className="w-14 h-14 text-white/50 mb-8" />
                                <h3 className="text-4xl font-black mb-4 tracking-tight">Descriptive Dominance</h3>
                                <p className="text-amber-100 text-lg mb-10 font-medium">Writing 30-40 page answers in BPSC Mains requires strategy and time management. Build it here.</p>
                                <ul className="space-y-4 font-bold text-white/95 text-lg">
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Comprehensive Mains Evaluation</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Special focus on the Essay Paper</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Exact match with New Negative Marking</li>
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
                        <span className="text-amber-600 dark:text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">State Level Pricing</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">BPSC Preparation Packages</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get rigorously validated BPSC Mock papers at exceptionally affordable prices without compromising quality.</p>
                    </div>

                    <StatePscTestSeriesCards examName="BPSC" />
                </div>
            </div>

            {/* 6. Testimonials */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Aspirant Success Stories</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Hear how proper strategy and state-aligned evaluation helped them secure elite BPSC allocations.</p>
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
                                        <p className="text-xs text-amber-600 dark:text-amber-400 font-bold mt-1 uppercase">{test.role}</p>
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
                        <span className="text-amber-600 dark:text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">Clear Your Doubts</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/20 transition-colors">
                                <h4 className="flex items-start gap-4 text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    <HelpCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
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
