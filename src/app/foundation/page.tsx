import React from 'react';
import Link from 'next/link';
import { BookOpen, Target, FileText, CheckCircle2, TrendingUp, Trophy, PlaySquare, Settings, Award, Zap, Library, BarChart3, ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'School & Foundation (Class 5 to 12) - ExamBoost',
    description: 'Comprehensive digital study materials, mock tests, and smart analytics for Class 5th to 12th students to build a rock-solid foundation for Olympiads and competitive exams.'
};

export default function FoundationPage() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans">

            {/* 1. HERO SECTION */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm tracking-wide uppercase mb-6 border border-emerald-200 dark:border-emerald-800">
                        <Trophy className="w-4 h-4" /> ExamBoost Foundation
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight max-w-5xl mx-auto leading-tight">
                        Build a Rock-Solid Foundation <br className="hidden md:block" />
                        <span className="text-primary dark:text-accent">for Class 5th to 12th</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
                        Top your school exams and prepare for future competitive exams (JEE, NEET, CUET, NDA) early with premium digital study materials, smart mock tests, and detailed Analytics.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/signup" className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                            Start Learning for Free <ChevronRight className="w-5 h-5" />
                        </Link>
                        <a href="#offerings" className="px-8 py-4 bg-white dark:bg-[#0f172a] hover:bg-slate-50 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-lg transition-all w-full sm:w-auto">
                            Explore Study Material
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. THE NEED FOR FOUNDATION (Stats/Boxes) */}
            <section className="-mt-12 relative z-10 container mx-auto px-4 md:px-6 lg:px-8 mb-20">
                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
                        <div className="pt-4 md:pt-0 pb-4 md:pb-0 px-4">
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2">95%+</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Board Exam Scores</p>
                        </div>
                        <div className="pt-8 md:pt-0 pb-4 md:pb-0 px-4">
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2">3x</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Higher Success in JEE/NEET</p>
                        </div>
                        <div className="pt-8 md:pt-0 px-4">
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Olympiads</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Level Preparation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE OFFER (Ecosystem without Live Classes) */}
            <section id="offerings" className="py-20 bg-slate-100 dark:bg-[#060c21] border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Everything You Need to Excel</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                            A complete 360° digital ecosystem designed for self-paced learning. Practice at your own speed, anywhere, anytime.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Library className="w-8 h-8" />,
                                title: "Premium E-Books & Notes",
                                desc: "Highly structured digital notes, formula sheets, and mind maps designed for quick revision before exams."
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Chapter-wise Mock Tests",
                                desc: "Unlimited chapter-level and full-syllabus mock tests simulating real patterns to build exam temperament."
                            },
                            {
                                icon: <PlaySquare className="w-8 h-8" />,
                                title: "Pre-recorded Video Solutions",
                                desc: "High-quality video solutions and concept explainers for difficult questions and core topics from expert educators."
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8" />,
                                title: "AI-Powered Analytics",
                                desc: "Track your speed, accuracy, and identify weak areas precisely. Get personalized improvement recommendations."
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "NCERT & PYQ Archive",
                                desc: "Detailed step-by-step solutions for NCERT textbooks and all Previous Year Question papers of Board exams."
                            },
                            {
                                icon: <Award className="w-8 h-8" />,
                                title: "Olympiad & NTSE Track",
                                desc: "Extra edge material containing high-order thinking skills (HOTS) questions to prepare for national-level talent searches."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:border-primary/50 dark:hover:border-accent/50 transition-all group">
                                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-primary dark:text-accent mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CLASS SEGMENTS */}
            <section className="py-20 lg:py-24 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Choose Your Grade</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                        Targeted preparation modules covering the complete syllabus of CBSE, ICSE, and major State Boards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Primary Foundation */}
                    <div className="flex flex-col bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Class 5th to 8th</h3>
                            <p className="text-slate-500 font-bold text-sm tracking-wider uppercase">Early Edge</p>
                        </div>
                        <div className="p-8 flex-1">
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Fun & Interactive Science/Math modules',
                                    'Mental Ability & Logical Reasoning',
                                    'Olympiads (NSO, IMO) Preparation',
                                    'Gamified Chapter Quizzes',
                                    'Detailed Subject PDF Notes'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
                            <button className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-slate-900 dark:text-white rounded-lg transition-colors">Select Classes</button>
                        </div>
                    </div>

                    {/* Secondary Foundation */}
                    <div className="flex flex-col bg-white dark:bg-[#0f172a] border border-primary dark:border-accent rounded-2xl shadow-xl shadow-primary/5 hover:-translate-y-2 transition-transform overflow-hidden relative">
                        <div className="absolute top-0 inset-x-0 h-1 bg-primary dark:bg-accent"></div>
                        <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center">
                            <div className="text-xs font-bold bg-primary text-white rounded-full px-3 py-1 inline-block mb-4">MOST POPULAR</div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Class 9th & 10th</h3>
                            <p className="text-slate-500 font-bold text-sm tracking-wider uppercase">Boards + NTSE</p>
                        </div>
                        <div className="p-8 flex-1">
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Strictly Board (CBSE/State) patterned Tests',
                                    'Class 10th Board PYQs & Analysis',
                                    'NTSE Stage 1 & 2 Mock Tests',
                                    'Concept Explainer Video Library',
                                    'Detailed step-by-step NCERT Solutions'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary dark:text-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
                            <button className="w-full py-3 bg-primary hover:bg-secondary text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/30">Start Preparation</button>
                        </div>
                    </div>

                    {/* Senior Secondary Foundation */}
                    <div className="flex flex-col bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Class 11th & 12th</h3>
                            <p className="text-slate-500 font-bold text-sm tracking-wider uppercase">Boards + JEE/NEET</p>
                        </div>
                        <div className="p-8 flex-1">
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Subjective & Objective Combined Papers',
                                    'JEE Main/Advanced & NEET Module',
                                    'CUET Domain Subjects Preparation',
                                    'Toppers handwritten notes PDFs',
                                    'Board Expected Questions Bank'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
                            <button className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-slate-900 dark:text-white rounded-lg transition-colors">View Courses</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. EXAMS & OLYMPIADS COVERED */}
            <section className="py-20 bg-white dark:bg-[#0f172a] border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Exams & Olympiads Covered</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto mb-12">
                        Comprehensive preparation material mapping the syllabus of all major competitive tests at the school level.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {['NTSE', 'KVPY', 'NSO (Science Olympiad)', 'IMO (Math Olympiad)', 'NSTSE', 'PRMO', 'CBSE Boards', 'ICSE Boards', 'State Boards'].map((exam, i) => (
                            <span key={i} className="px-5 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-accent transition-colors cursor-default">
                                {exam}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION */}
            <section className="py-20 lg:py-24 bg-[#0a1128] text-center border-t border-slate-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Secure Your Child's Future Today!</h2>
                    <p className="text-lg md:text-xl text-slate-300 font-medium mb-10">
                        Join lakhs of students who are building a strong academic foundation with ExamBoost's premium digital resources.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/signup" className="px-10 py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-primary/20 w-full sm:w-auto">
                            Create Free Account
                        </Link>
                        <Link href="/contact" className="px-10 py-4 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white rounded-xl font-bold text-lg transition-colors w-full sm:w-auto">
                            Talk to Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
