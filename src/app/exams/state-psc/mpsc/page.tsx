import React from 'react';
import Link from 'next/link';
import {
    BookOpen, CheckCircle, ArrowRight, ChevronRight,
    Target, Brain, Clock, Layout, Calendar,
    ShieldCheck, Presentation, FileText, Zap, Star, Users, Calculator, Lightbulb, HelpCircle, Flame, TrendingUp, Award, Map
} from 'lucide-react';
import StatePscTestSeriesCards from '@/components/StatePscTestSeriesCards';

export const metadata = {
    title: 'MPSC (Maharashtra PSC) Preparation & Mock Tests - ExamBoost',
    description: 'Complete MPSC Rajyaseva preparation. From CSAT qualifying to heavy descriptive GS Mains and Marathi language proficiency.'
};

const syllabusTopics = [
    { title: "Rajyaseva Prelims (GS & CSAT)", icon: Lightbulb, desc: "Paper 1 (GS) contains 100 Qs deciding the cutoff. Paper 2 (CSAT) contains 80 Qs and is strictly qualifying in nature (33%)." },
    { title: "Languages (Marathi & English)", icon: FileText, desc: "Mains includes compulsory Language papers testing translation, précis writing, essay, and grammar skills." },
    { title: "General Studies (Mains I to IV)", icon: Brain, desc: "Four rigorous descriptive papers extensively covering History, Geography, Indian Constitution, HRD, and Economy with hardcore Maharashtra focus." }
];

const features = [
    { icon: Map, title: "Maharashtra Specific GK", desc: "Detailed focus on the geography of Maharashtra, social reformers of the state, and specialized agro-ecology relevant to MPSC." },
    { icon: FileText, title: "Descriptive Mains Feedback", desc: "Our panel evaluates your handwritten Mains answers in Marathi & English, providing extremely detailed dimensional feedback." },
    { icon: TrendingUp, title: "CSAT Qualifying Strategy", desc: "Since CSAT is now qualifying, our mock tests help you pinpoint exactly where to score the required 66 marks without touching risky sections." }
];

const testimonials = [
    { name: "Rahul Deshmukh", role: "Deputy Collector", review: "The coverage of social reformers and Maharashtra's specific economic survey in ExamBoost's Prelims mocks was exactly like the actual paper." },
    { name: "Pooja Patil", role: "Tahsildar", review: "Writing descriptive answers in Marathi was challenging. The detailed corrections and structural feedback I got here immensely improved my GS-3 scoring." },
    { name: "Siddharth Kate", role: "DySP Selected", review: "Their CSAT mocks properly mimicked the lengthy Marathi comprehension paragraphs that MPSC usually throws at us to waste time." }
];

const faqs = [
    { q: "Is CSAT marks considered for MPSC Prelims cutoff?", a: "No. The MPSC decided to make the CSAT (Paper II) purely qualifying. You only need to score 33% (66 marks out of 200). The final prelims cutoff is decided entirely by GS Paper I." },
    { q: "Are the Mains exams objective or descriptive?", a: "The MPSC State Services (Rajyaseva) Mains exam has transitioned entirely to a Descriptive format, aligning almost identically with the UPSC Civil Services pattern." },
    { q: "Can I give the MPSC exam strictly in English?", a: "Yes, you can write the GS and Optional papers in English. However, there is a compulsory Marathi language paper that tests your grammar, translation, and essay writing skills, which you must clear." },
    { q: "Is there an Optional Subject in MPSC?", a: "Yes, following the new descriptive pattern, candidates must choose one optional subject which comprises two separate papers of 250 marks each." }
];

export default function MPSCPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-hidden">

            {/* 1. Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-8 md:pt-12 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl">

                    <div className="flex-1 w-full space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2 flex-wrap justify-center lg:justify-start">
                            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/exams/state-psc" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">State PSC</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 dark:text-white font-bold">MPSC Rajyaseva</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-black tracking-wide border border-indigo-500/20 shadow-sm uppercase">
                            <ShieldCheck className="w-4 h-4" /> Maharashtra Civil Services
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                            Excel in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">MPSC Rajyaseva</span> Exam
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            Target Deputy Collector & DySP posts. Practice with Maharashtra-specific GS mocks, optimized CSAT tests, and highly calibrated descriptive answer checking.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-lg lg:max-w-none">
                            <Link href="#test-series" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
                                <Star className="w-5 h-5 fill-white" /> MPSC Test Series
                            </Link>
                            <Link href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <BookOpen className="w-5 h-5" /> View New Pattern
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">GS + CSAT</div>
                                <div className="text-sm font-medium text-slate-500">Qualifying Nature</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="flex flex-col items-center lg:items-start text-left">
                                <div className="text-2xl font-black text-slate-900 dark:text-white">Descriptive</div>
                                <div className="text-sm font-medium text-slate-500">Mains Evaluation</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center mt-12 lg:mt-0 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-full blur-[100px] -z-10"></div>

                        <div className="relative w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                            <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md border border-indigo-200 dark:border-indigo-800/50 flex items-center gap-1">
                                        <Flame className="w-3 h-3" /> MPSC Prelims GS-I
                                    </div>
                                    <div className="text-slate-500 text-sm font-bold flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> 58:14
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">Who was the founder of the 'Satyashodhak Samaj' in Maharashtra?</h3>

                                <div className="space-y-3 mb-6">
                                    {['Mahatma Jyotirao Phule', 'Dr. B. R. Ambedkar', 'Gopal Hari Deshmukh', 'Dhondo Keshav Karve'].map((opt, i) => (
                                        <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${i === 0 ? 'bg-indigo-50 border-indigo-500 dark:bg-indigo-900/20 dark:border-indigo-500/50' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`}>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${i === 0 ? 'border-indigo-500 bg-indigo-500' : 'border-slate-400 bg-white dark:bg-slate-800'}`}>
                                                {i === 0 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                            <span className={`font-semibold text-sm ${i === 0 ? 'text-indigo-800 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>({String.fromCharCode(65 + i)}) {opt}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex flex-col"><span>Attempted</span> <span className="text-green-500">76/100</span></div>
                                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md">
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">MPSC Rajyaseva Structure</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Following the newly descriptive pattern that mirrors the central UPSC format.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shrink-0 border border-indigo-100 dark:border-indigo-800/50">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 1: Prelims</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Two major objective papers: General Studies and CSAT (Qualifying).</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" /> GS Paper (100 Qs / 200 Marks)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" /> CSAT (80 Qs / 200 Marks)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" /> CSAT requires mere 33%</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border-2 border-indigo-500 shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">NEW DESCRIPTIVE</div>
                            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shrink-0 shadow-lg">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 2: Mains</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Subjective/Descriptive test deciding the majority of your final rank weighting.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" /> Language Papers (Marathi & Eng)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" /> Essay & 4 GS Papers (250 Marks Each)</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" /> Optional Subject (2 Papers)</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shrink-0 border border-blue-100 dark:border-blue-800/50">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stage 3: Interview</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">The final personality test to evaluate your readiness for state services.</p>
                            <ul className="text-sm font-semibold text-slate-700 dark:text-slate-300 space-y-3 mt-auto">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" /> Total Weightage: 275 Marks</li>
                                <li className="flex gap-3 text-xs text-slate-400 mt-2 block pt-4 border-t border-slate-100 dark:border-slate-800">Final selection relies entirely on the combined score of your Mains and Interview.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Syllabus Breakdown */}
            <div className="py-20 bg-white dark:bg-[#0f172a] w-full border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Crucial MPSC Domains</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Key subject areas that differentiate MPSC heavily from purely central exams.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {syllabusTopics.map((topic, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
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
                                <p className="text-lg text-slate-600 dark:text-slate-400">Because with MPSC switching to descriptive formats, you need more than just multiple choice tests. You need structured, state-oriented answer evaluation.</p>
                            </div>
                            <div className="space-y-8">
                                {features.map((feat, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm">
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
                            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                                <Award className="w-14 h-14 text-white/50 mb-8" />
                                <h3 className="text-4xl font-black mb-4 tracking-tight">Focus on Marathi Content</h3>
                                <p className="text-indigo-100 text-lg mb-10 font-medium">Bilingual mastery is non-negotiable in MPSC. Ensure your language skills are up to administration standards.</p>
                                <ul className="space-y-4 font-bold text-white/95 text-lg">
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Evaluated Marathi descriptive answers</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> Translation and Précis drills</li>
                                    <li className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-400 shrink-0" /> High-yield static Maharashtra specific notes</li>
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
                        <span className="text-indigo-600 dark:text-indigo-500 font-bold tracking-wider uppercase text-sm mb-4 block">Affordable Pricing</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">MPSC Prep Packages</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Access the best localized preparation resources, tailored explicitly for the demanding Rajyaseva exam.</p>
                    </div>

                    <StatePscTestSeriesCards examName="MPSC" />
                </div>
            </div>

            {/* 6. Testimonials */}
            <div className="py-24 bg-slate-50 dark:bg-slate-950 w-full border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Aspirant Success Stories</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Read how disciplined practice and accurate feedback led these candidates to state administration.</p>
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
                                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mt-1 uppercase">{test.role}</p>
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
                        <span className="text-indigo-600 dark:text-indigo-500 font-bold tracking-wider uppercase text-sm mb-4 block">Clear Your Doubts</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/20 transition-colors">
                                <h4 className="flex items-start gap-4 text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
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
