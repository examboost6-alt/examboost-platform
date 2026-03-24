"use client";

import React from 'react';
import Link from 'next/link';
import { Target, FileText, CheckCircle2, Trophy, PlaySquare, Award, Library, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FoundationClient() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#0B1120] pt-20 font-sans selection:bg-[#F97316]/30 overflow-hidden">
            
            {/* 1. HERO SECTION */}
            <section className="relative bg-white dark:bg-[#060D1A] border-b border-slate-200 dark:border-slate-800/80 pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-50 dark:opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-50 via-white to-blue-50 dark:from-orange-900/10 dark:via-[#060D1A] dark:to-blue-900/10" />
                <svg className="absolute top-[0%] left-[0%] w-[100%] h-[120%] text-orange-50 dark:text-[#F97316]/5 pointer-events-none z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="150" strokeLinecap="round" d="M-200,800 C150,800 350,100 600,200 C850,300 800,900 1200,800" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#F97316]/20 blur-[150px] rounded-full pointer-events-none z-0" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 dark:bg-[#F97316]/10 border border-orange-200 dark:border-[#F97316]/20 text-sm font-black tracking-widest uppercase text-[#F97316] mb-8 shadow-sm"
                    >
                        <Trophy className="w-4 h-4 fill-[#F97316]" /> ExamBoost Foundation
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight max-w-5xl mx-auto"
                    >
                        Build a Rock-Solid Foundation <br className="hidden md:block" />
                        <span className="text-[#F97316] relative inline-block">
                            for Class 5th to 12th
                            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-orange-300 dark:text-[#F97316]/50 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <motion.path 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M5,15 Q50,5 95,15" 
                                />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-10"
                    >
                        Top your school exams and prepare for future competitive exams (JEE, NEET, CUET, NDA) early with premium digital study materials, smart mock tests, and detailed Analytics.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-6"
                    >
                        <Link href="/signup" className="px-10 py-5 bg-[#F97316] hover:bg-[#ea580c] text-white rounded-2xl font-black text-lg transition-all shadow-lg shadow-[#F97316]/20 flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1">
                            Start Learning for Free <ChevronRight className="w-5 h-5" />
                        </Link>
                        <a href="#offerings" className="px-10 py-5 bg-transparent border-[1.5px] border-slate-300 dark:border-slate-700 hover:border-[#F97316] dark:hover:border-[#F97316] text-slate-700 dark:text-slate-200 rounded-2xl font-black text-lg transition-all w-full sm:w-auto hover:-translate-y-1">
                            Explore Study Material
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE NEED FOR FOUNDATION (Stats/Boxes) */}
            <section className="-mt-16 relative z-20 container mx-auto px-4 md:px-6 lg:px-8 mb-32">
                <div className="bg-white dark:bg-[#0F172A] rounded-[3rem] border-[1.5px] border-slate-100 dark:border-slate-800 p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/5 blur-[80px] rounded-full pointer-events-none" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x-2 divide-slate-100 dark:divide-slate-800 text-center relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-4 md:pt-0 pb-4 md:pb-0 px-4 group">
                            <h3 className="text-5xl lg:text-6xl font-black font-serif text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#F97316] transition-colors">95%+</h3>
                            <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Board Exam Scores</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="pt-8 md:pt-0 pb-4 md:pb-0 px-4 group">
                            <h3 className="text-5xl lg:text-6xl font-black font-serif text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#F97316] transition-colors">3x</h3>
                            <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Higher Success in JEE/NEET</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="pt-8 md:pt-0 px-4 group">
                            <h3 className="text-4xl lg:text-5xl font-black font-serif text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#F97316] transition-colors mt-2">Olympiads</h3>
                            <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Level Preparation</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE OFFER (Ecosystem) */}
            <section id="offerings" className="py-24 bg-white dark:bg-[#060D1A] relative overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#F97316]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Everything You Need to Excel</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                            A complete 360° digital ecosystem designed for self-paced learning. Practice at your own speed, anywhere, anytime.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Library className="w-8 h-8"/>,
                                title: "Premium E-Books & Notes",
                                desc: "Highly structured digital notes, formula sheets, and mind maps designed for quick revision before exams."
                            },
                            {
                                icon: <Target className="w-8 h-8"/>,
                                title: "Chapter-wise Tests",
                                desc: "Unlimited chapter-level and full-syllabus mock tests simulating real patterns to build exam temperament."
                            },
                            {
                                icon: <PlaySquare className="w-8 h-8"/>,
                                title: "Pre-recorded Solutions",
                                desc: "High-quality video solutions and concept explainers for difficult questions and core topics."
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8"/>,
                                title: "AI-Powered Analytics",
                                desc: "Track your speed, accuracy, and identify weak areas precisely. Get personalized improvement recommendations."
                            },
                            {
                                icon: <FileText className="w-8 h-8"/>,
                                title: "NCERT & PYQ Archive",
                                desc: "Detailed step-by-step solutions for NCERT textbooks and all Previous Year Question papers of Board exams."
                            },
                            {
                                icon: <Award className="w-8 h-8"/>,
                                title: "Olympiad & NTSE Track",
                                desc: "Extra edge material containing premium HOTS questions to prepare for national-level talent searches."
                            }
                        ].map((feature, i) => (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                key={i} 
                                className="bg-slate-50 dark:bg-[#0F172A] rounded-[2.5rem] border-[1.5px] border-slate-200/50 dark:border-slate-800 p-10 shadow-sm hover:border-[#F97316]/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="w-16 h-16 bg-white dark:bg-[#060D1A] border-[1.5px] border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#F97316] group-hover:bg-[#F97316]/10 mb-8 group-hover:scale-110 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-4 group-hover:text-[#F97316] transition-colors">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CLASS SEGMENTS */}
            <section className="py-32 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Choose Your Grade</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                        Targeted preparation modules covering the complete syllabus of CBSE, ICSE, and major State Boards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

                    {/* Primary Foundation */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 overflow-hidden relative group">
                        <div className="p-10 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10 transition-colors">
                            <h3 className="text-3xl font-black font-serif text-slate-900 dark:text-white mb-3">Class 5th <span className="opacity-50">to</span> 8th</h3>
                            <p className="text-[#F97316] font-black text-sm tracking-widest uppercase">Early Edge</p>
                        </div>
                        <div className="p-10 flex-1">
                            <ul className="space-y-6 mb-8">
                                {[
                                    'Fun & Interactive Science/Math modules',
                                    'Mental Ability & Logical Reasoning',
                                    'Olympiads (NSO, IMO) Preparation',
                                    'Gamified Chapter Quizzes',
                                    'Detailed Subject PDF Notes'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 border-t border-slate-100 dark:border-slate-800 mt-auto bg-slate-50/50 dark:bg-[#060D1A]/50">
                            <button className="w-full py-5 bg-slate-100 dark:bg-slate-800 hover:bg-[#F97316] hover:text-white font-black text-slate-900 dark:text-white rounded-2xl transition-all shadow-sm">Select Classes</button>
                        </div>
                    </motion.div>

                    {/* Secondary Foundation (Highlighted) */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col bg-white dark:bg-[#0F172A] border-2 border-[#F97316] rounded-[3rem] shadow-2xl shadow-[#F97316]/5 hover:-translate-y-3 transition-transform duration-300 overflow-hidden relative z-10 group">
                        <div className="absolute top-0 inset-x-0 h-2 bg-[#F97316]"></div>
                        <div className="p-10 border-b border-slate-100 dark:border-slate-800 bg-orange-50/50 dark:bg-[#F97316]/5 text-center">
                            <div className="text-xs font-black bg-[#F97316] text-white rounded-full px-4 py-1.5 inline-block mb-5 shadow-sm">MOST POPULAR</div>
                            <h3 className="text-3xl font-black font-serif text-slate-900 dark:text-white mb-3">Class 9th <span className="opacity-50">&</span> 10th</h3>
                            <p className="text-[#F97316] font-black text-sm tracking-widest uppercase">Boards + NTSE</p>
                        </div>
                        <div className="p-10 flex-1">
                            <ul className="space-y-6 mb-8">
                                {[
                                    'Strictly Board (CBSE/State) patterned Tests',
                                    'Class 10th Board PYQs & Analysis',
                                    'NTSE Stage 1 & 2 Mock Tests',
                                    'Concept Explainer Video Library',
                                    'Detailed step-by-step NCERT Solutions'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-[#F97316]/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 border-t border-slate-100 dark:border-slate-800 mt-auto bg-orange-50/30 dark:bg-[#060D1A]/50">
                            <button className="w-full py-5 bg-[#F97316] hover:bg-[#ea580c] text-white font-black rounded-2xl transition-all shadow-lg shadow-[#F97316]/20">Start Preparation</button>
                        </div>
                    </motion.div>

                    {/* Senior Secondary Foundation */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 overflow-hidden relative group">
                        <div className="p-10 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-900/10 transition-colors">
                            <h3 className="text-3xl font-black font-serif text-slate-900 dark:text-white mb-3">Class 11th <span className="opacity-50">&</span> 12th</h3>
                            <p className="text-[#F97316] font-black text-sm tracking-widest uppercase">Boards + JEE/NEET</p>
                        </div>
                        <div className="p-10 flex-1">
                            <ul className="space-y-6 mb-8">
                                {[
                                    'Subjective & Objective Combined Papers',
                                    'JEE Main/Advanced & NEET Module',
                                    'CUET Domain Subjects Preparation',
                                    'Toppers handwritten notes PDFs',
                                    'Board Expected Questions Bank'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 border-t border-slate-100 dark:border-slate-800 mt-auto bg-slate-50/50 dark:bg-[#060D1A]/50">
                            <button className="w-full py-5 bg-slate-100 dark:bg-slate-800 hover:bg-[#F97316] hover:text-white font-black text-slate-900 dark:text-white rounded-2xl transition-all shadow-sm">View Courses</button>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 5. EXAMS & OLYMPIADS COVERED */}
            <section className="py-24 bg-white dark:bg-[#060D1A] border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Exams & Olympiads Covered</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl mx-auto mb-16">
                        Comprehensive preparation material mapping the syllabus of all major competitive tests at the school level.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                        {['NTSE', 'KVPY', 'NSO (Science Olympiad)', 'IMO (Math Olympiad)', 'NSTSE', 'PRMO', 'CBSE Boards', 'ICSE Boards', 'State Boards'].map((exam, i) => (
                            <motion.span 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                key={i} 
                                className="px-6 py-4 bg-slate-50 dark:bg-[#0F172A] text-slate-700 dark:text-slate-300 font-black rounded-2xl border-[1.5px] border-slate-200 dark:border-slate-800 hover:border-[#F97316] dark:hover:border-[#F97316] hover:text-[#F97316] dark:hover:text-[#F97316] transition-all cursor-default shadow-sm hover:shadow-lg hover:-translate-y-1"
                            >
                                {exam}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION (Premium Box) */}
            <section className="py-24 bg-slate-50 dark:bg-[#0B1120] text-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-[#0a1128] dark:bg-[#060D1A] rounded-[3rem] p-12 md:p-24 shadow-2xl border-[1.5px] border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F97316]/20 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
                        
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif text-white mb-8 leading-tight relative z-10">Secure Your Child's<br/>Future Today!</h2>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto mb-16 relative z-10">
                            Join lakhs of students who are building a strong academic foundation with ExamBoost's premium digital resources.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
                            <Link href="/signup" className="px-10 py-5 bg-[#F97316] hover:bg-[#ea580c] text-white rounded-2xl font-black text-lg transition-all shadow-lg shadow-[#F97316]/20 w-full sm:w-auto hover:-translate-y-1 flex items-center justify-center gap-2">
                                Create Free Account <ChevronRight className="w-5 h-5"/>
                            </Link>
                            <Link href="/contact" className="px-10 py-5 bg-transparent border-[1.5px] border-slate-600 hover:border-slate-400 text-white rounded-2xl font-black text-lg transition-all w-full sm:w-auto hover:-translate-y-1 flex items-center justify-center">
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
