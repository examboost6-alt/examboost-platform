"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Users, Award, BookOpen, Zap, ShieldCheck, Lightbulb, TrendingUp, Globe, Lock, Heart, Star, Compass, UserCircle2, ArrowRight } from 'lucide-react';

export default function AboutClient() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#0B1120] pt-20 font-sans selection:bg-[#F97316]/30 overflow-hidden">

            {/* 1. HERO SECTION (Advanced Premium) */}
            <section className="relative bg-white dark:bg-[#060D1A] border-b border-slate-200 dark:border-slate-800/80 pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
                {/* Background Details */}
                <div 
                    className="absolute inset-0 z-0 opacity-[0.3] dark:opacity-[0.05] pointer-events-none" 
                    style={{ 
                        backgroundImage: 'linear-gradient(to right, #64748b22 1px, transparent 1px), linear-gradient(to bottom, #64748b22 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }}
                />
                <svg className="absolute top-[0%] left-[0%] w-[100%] h-[120%] text-orange-50 dark:text-[#F97316]/5 pointer-events-none z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="150" strokeLinecap="round" d="M-200,800 C150,800 350,100 600,200 C850,300 800,900 1200,800" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#F97316]/20 blur-[150px] rounded-full pointer-events-none z-0" />
                
                {/* Floating Stars */}
                <svg className="absolute top-[15%] right-[25%] w-6 h-6 text-[#F97316]/60 animate-[pulse-slow_3s_ease-in-out_infinite] z-0 hidden md:block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
                <svg className="absolute bottom-[20%] left-[15%] w-4 h-4 text-[#F97316]/40 animate-[pulse-slow_4s_ease-in-out_infinite] delay-700 z-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 dark:bg-[#F97316]/10 border border-orange-200 dark:border-[#F97316]/20 text-sm font-black tracking-widest uppercase text-[#F97316] mb-8 shadow-sm"
                            >
                                <Star className="w-4 h-4 fill-[#F97316]" /> Know Our Story
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight"
                            >
                                Building India's <br className="hidden md:block"/>
                                <span className="text-[#F97316] relative inline-block">
                                    Trusted Ecosystem
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
                                className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
                            >
                                ExamBoost is an outcome-driven EdTech platform, democratizing education with highly curated test series, deep analytics, and top-tier mentorship.
                            </motion.p>
                        </div>

                        {/* Animated SVG Composition: Man with Arrow */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="lg:w-1/2 w-full relative h-[400px] md:h-[500px] flex items-center justify-center perspective-1000"
                        >
                            <div className="relative w-full h-full max-w-lg mx-auto">
                                {/* Base Platform Circle */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#F97316]/20 rounded-[100%] blur-2xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-[3rem] shadow-2xl border-[4px] border-white dark:border-slate-700/50 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                                    
                                    {/* The SVG Illustration */}
                                    <svg viewBox="0 0 400 400" className="w-full h-full p-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Background Grid inside the card */}
                                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200 dark:text-slate-700" />
                                        </pattern>
                                        <rect width="400" height="400" fill="url(#smallGrid)" />
                                        
                                        {/* Target / Goal */}
                                        <motion.circle 
                                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                                            cx="320" cy="80" r="40" className="fill-orange-100 dark:fill-[#F97316]/20" 
                                        />
                                        <motion.circle 
                                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring", stiffness: 100 }}
                                            cx="320" cy="80" r="25" className="fill-orange-200 dark:fill-[#F97316]/40" 
                                        />
                                        <motion.circle 
                                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                                            cx="320" cy="80" r="10" className="fill-[#F97316]" 
                                        />

                                        {/* The Big Upward Arrow */}
                                        <motion.path 
                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                                            d="M 80 320 C 150 320, 200 200, 310 90" 
                                            stroke="#F97316" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"
                                        />
                                        <motion.path 
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
                                            d="M 280 80 L 320 80 L 320 120" 
                                            stroke="#F97316" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                        />

                                        {/* The "Man" Icon riding/standing on the growth curve */}
                                        <motion.g 
                                            initial={{ x: -250, y: 250, opacity: 0 }}
                                            animate={{ x: 0, y: 0, opacity: 1 }}
                                            transition={{ delay: 1.5, duration: 1, type: "spring", bounce: 0.4 }}
                                        >
                                            <circle cx="210" cy="180" r="18" className="fill-slate-800 dark:fill-white" />
                                            <path d="M 210 200 C 180 200, 170 230, 170 260 L 250 260 C 250 230, 240 200, 210 200 Z" className="fill-slate-800 dark:fill-white" />
                                            {/* Graduation Cap element on man */}
                                            <path d="M 185 165 L 210 150 L 235 165 L 210 180 Z" className="fill-[#F97316]" />
                                            <rect x="233" y="165" width="2" height="15" className="fill-[#F97316]" />
                                        </motion.g>

                                        {/* Floating elements indicating data/analytics */}
                                        <motion.rect initial={{ height: 0 }} animate={{ height: 40 }} transition={{ delay: 2.2 }} x="100" y="240" width="15" className="fill-indigo-500" rx="4" />
                                        <motion.rect initial={{ height: 0 }} animate={{ height: 60 }} transition={{ delay: 2.3 }} x="125" y="220" width="15" className="fill-teal-500" rx="4" />
                                        <motion.rect initial={{ height: 0 }} animate={{ height: 90 }} transition={{ delay: 2.4 }} x="150" y="190" width="15" className="fill-rose-500" rx="4" />
                                    </svg>
                                </div>
                                {/* Decorative floating icons outside card */}
                                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-8 -right-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                                    <TrendingUp className="w-8 h-8 text-[#F97316]" />
                                </motion.div>
                                <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                                    <Target className="w-8 h-8 text-emerald-500" />
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. THE STATS THAT MATTER (Floating Cards) */}
            <section className="-mt-20 container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
                <div className="bg-white dark:bg-[#0F172A] rounded-[2.5rem] border-[1.5px] border-slate-100 dark:border-slate-700/80 p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/5 blur-[80px] rounded-full pointer-events-none" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-x-0 md:divide-x-2 divide-slate-100 dark:divide-slate-800 text-center relative z-10">
                        {[
                            { label: 'Registered Students', value: '50 Lakh+', icon: Users, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                            { label: 'Mock Tests Attempted', value: '10 Crore+', icon: Target, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
                            { label: 'Student Selections', value: '1.2 Lakh+', icon: Award, color: 'text-[#F97316]', bg: 'bg-orange-50 dark:bg-[#F97316]/10' },
                            { label: 'Exams Covered', value: '500+', icon: BookOpen, color: 'text-fuchsia-600 dark:text-fuchsia-400', bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/20' },
                        ].map((stat, idx) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx} 
                                className="flex flex-col items-center px-4 group p-4 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-black font-serif text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#F97316] transition-colors">{stat.value}</h3>
                                <p className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. MISSION & VISION */}
            <section className="py-32 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 md:order-1 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316] to-amber-400 rounded-[3rem] transform -rotate-6 scale-105 opacity-20 blur-xl"></div>
                        <div className="bg-white dark:bg-[#0F172A] rounded-[3rem] p-12 lg:p-16 border-[1.5px] border-slate-100 dark:border-slate-700/80 flex flex-col items-center justify-center min-h-[450px] relative shadow-xl hover:-translate-y-2 transition-transform duration-500">
                            <h2 className="text-4xl font-serif font-black text-slate-900 dark:text-white mb-8 text-center"><Star className="inline w-10 h-10 text-[#F97316] mb-2"/> <br/>ExamBoost</h2>
                            <div className="mt-8 text-center w-full px-8 py-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h4 className="text-2xl font-black text-[#F97316] mb-2 font-serif">Guided by Purpose</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Founded by educators, for learners.</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="order-1 md:order-2 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white">Our Mission</h2>
                            </div>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed border-l-[6px] rounded-l-md border-emerald-500 pl-8 py-3 bg-emerald-50/50 dark:bg-emerald-900/10 font-medium">
                                To democratize access to high-quality education by building robust and affordable learning tools that eliminate geographical and financial barriers for students across India.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <Lightbulb className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white">Our Vision</h2>
                            </div>
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed border-l-[6px] rounded-l-md border-blue-500 pl-8 py-3 bg-blue-50/50 dark:bg-blue-900/10 font-medium">
                                To become the ultimate companion for every aspirant—where an internet connection is the only requirement to crack the toughest exams and secure a brighter future.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. OUR PHILOSOPHY (Premium Banner) */}
            <section className="py-24 bg-[#F97316] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl relative z-10">
                    <Heart className="w-16 h-16 mx-auto mb-8 text-white/90 drop-shadow-xl" />
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif mb-8 leading-tight">Student First, Always</h2>
                    <p className="text-xl md:text-2xl text-orange-50/90 leading-relaxed font-medium">
                        Every feature we build, every question we draft, and every decision we make is guided by one simple question: <br className="hidden md:block mt-2" /> 
                        <strong className="text-white font-black bg-black/10 px-4 py-2 rounded-xl mt-4 inline-block">"How does this help our students succeed?"</strong>
                    </p>
                </div>
            </section>

            {/* 5. WHY EXAMBOOST? (Core Pillars - Glassmorphic Cards) */}
            <section className="py-32 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black font-serif text-slate-900 dark:text-white mb-8 leading-tight">What Makes Us Different?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">We don't just provide questions; we provide an ecosystem that meticulously identifies your weaknesses and turns them into solid strengths.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Exam-Exact Interface", desc: "Experience the real CBT environment before the actual exam day. Say goodbye to exam anxiety." },
                        { icon: Zap, title: "Deep Analytics", desc: "Get insights into your speed, accuracy, and topic-wise strengths compared to top aspirants." },
                        { icon: BookOpen, title: "Error-Free Content", desc: "Questions drafted by subject matter experts, strictly aligned with the latest syllabus." },
                        { icon: Globe, title: "Bilingual Platform", desc: "Switch between English and Hindi effortlessly. Language should not be a barrier." },
                        { icon: Lock, title: "Affordable Access", desc: "Premium education and testing shouldn't break the bank. We offer the highest ROI." },
                        { icon: Users, title: "Community Support", desc: "Mentorship sessions and a strong community that supports your overall preparation journey." }
                    ].map((feature, idx) => (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx} 
                            className="bg-white dark:bg-[#0F172A] p-10 rounded-[2rem] border-[1.5px] border-slate-100 dark:border-slate-800 hover:border-[#F97316] dark:hover:border-[#F97316] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center mb-8 border border-slate-200 dark:border-slate-700 transition-colors">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-4 group-hover:text-[#F97316] transition-colors">{feature.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 6. OUR JOURNEY / TIMELINE */}
            <section className="py-32 bg-slate-50 dark:bg-[#060D1A] border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/5 blur-[120px] rounded-full"></div>
                
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">The ExamBoost Journey</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">From a small vision to India's most loved preparation destination.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {[
                            { year: '2022', title: 'The Genesis', desc: 'Started with 5 free mock tests for SSC CGL. We hit 10,000 users in the first week through pure word-of-mouth.' },
                            { year: '2023', title: 'Expanding Horizons', desc: 'Launched Banking, Railways, and Defense verticals. Introduced our proprietary Analytics engine.' },
                            { year: '2024', title: '1 Million Strong', desc: 'Crossed the 1 Million active aspirants mark. Launched our mobile app to enable learning on the go.' },
                            { year: '2025+', title: 'The Future', desc: 'Integrating Live Classes and robust mentorship programs. Continuously redefining preparation.' }
                        ].map((step, idx) => (
                            <motion.div 
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx} 
                                className="bg-white dark:bg-[#0F172A] rounded-[2rem] border-[1.5px] border-slate-100 dark:border-slate-800 p-10 hover:border-[#F97316]/50 dark:hover:border-[#F97316]/50 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-[#F97316] font-black font-serif text-4xl mb-4">{step.year}</div>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{step.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CALL TO ACTION (Premium Box) */}
            <section className="py-32 bg-white dark:bg-[#0B1120] text-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-[#0a1128] dark:bg-[#060D1A] rounded-[3rem] p-12 md:p-20 shadow-2xl border-[1.5px] border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F97316]/20 blur-[100px] rounded-full pointer-events-none" />
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-white mb-8 leading-tight relative z-10">Ready to Boost Your <br/> Preparation?</h2>
                        <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-12 relative z-10">
                            Join 50 Lakh+ aspirants who have already made ExamBoost their trusted partner for success.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
                            <Link href="/signup" className="px-10 py-5 bg-[#F97316] hover:bg-[#ea580c] text-white rounded-2xl font-black text-lg transition-all w-full sm:w-auto hover:-translate-y-1 shadow-lg shadow-[#F97316]/20 flex justify-center items-center gap-2">
                                Join For Free Now <ArrowRight className="w-5 h-5"/>
                            </Link>
                            <Link href="/exams" className="px-10 py-5 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white rounded-2xl font-black text-lg transition-all w-full sm:w-auto hover:-translate-y-1">
                                Explore Test Series
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
