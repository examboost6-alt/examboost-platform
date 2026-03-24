"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Stethoscope, Scale, Landmark, Shield, Calculator, Train, Briefcase, Presentation, GraduationCap, Star, ChevronRight, Zap, Search, Users, Trophy, Target, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    { name: "Engineering Entrance", href: "/exams/engineering-entrance", icon: Calculator, desc: "JEE Main, JEE Advanced, BITSAT...", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30", popular: true },
    { name: "Medical Entrance", href: "/exams/medical-entrance", icon: Stethoscope, desc: "NEET UG, AIIMS Nursing...", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/30", popular: true },
    { name: "UPSC & Civil Services", href: "/exams/upsc-civil-services", icon: Landmark, desc: "UPSC CSE, CDS, NDA...", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-900/30", popular: true },
    { name: "SSC Exams", href: "/exams/ssc-exams", icon: Landmark, desc: "SSC CGL, CHSL, GD, MTS...", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30", popular: true },
    { name: "Banking", href: "/exams/banking", icon: Briefcase, desc: "IBPS PO, SBI PO, Clerk...", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-100 dark:bg-indigo-900/30" },
    { name: "Railways", href: "/exams/railways", icon: Train, desc: "RRB NTPC, Group D, JE...", color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-100 dark:bg-cyan-900/30" },
    { name: "State PSC", href: "/exams/state-psc", icon: BookOpen, desc: "UPPSC, BPSC, RPSC...", color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-100 dark:bg-teal-900/30" },
    { name: "Police", href: "/exams/police", icon: Shield, desc: "Delhi Police, UP Police...", color: "text-red-600 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/30" },
    { name: "Law", href: "/exams/law", icon: Scale, desc: "CLAT, AILET, SLAT...", color: "text-slate-600 dark:text-slate-400", bg: "bg-slate-200 dark:bg-slate-800" },
    { name: "MBA", href: "/exams/mba", icon: Presentation, desc: "CAT, XAT, CMAT...", color: "text-fuchsia-600 dark:text-fuchsia-400", bg: "bg-fuchsia-100 dark:bg-fuchsia-900/30" },
    { name: "Teaching", href: "/exams/teaching", icon: GraduationCap, desc: "CTET, UPTET, REET...", color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-100 dark:bg-yellow-900/30" },
    { name: "CUET", href: "/exams/cuet", icon: BookOpen, desc: "CUET UG, CUET PG...", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" }
];

const topExams = [
    { name: "SSC CGL 2024", date: "Sep 2024", applicants: "30L+", tag: "Trending", href: "/exams/ssc-exams" },
    { name: "JEE Main 2025", date: "Jan 2025", applicants: "12L+", tag: "Latest", href: "/exams/engineering-entrance" },
    { name: "NEET UG 2025", date: "May 2025", applicants: "24L+", tag: "Popular", href: "/exams/medical-entrance" },
    { name: "UPSC Prelims", date: "May 2025", applicants: "14L+", tag: "Tough", href: "/exams/upsc-civil-services" },
    { name: "IBPS PO", date: "Oct 2024", applicants: "8L+", tag: "New", href: "/exams/banking" }
];

export default function ExamsClient() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = categories.filter(cat => 
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        cat.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 w-full flex flex-col font-sans selection:bg-primary/30">
            {/* Header Section with Premium Hero styling */}
            <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-28 overflow-hidden bg-white dark:bg-[#060D1A] border-b border-slate-200 dark:border-slate-800/80">
                {/* Hero-like Grid Background */}
                <div 
                    className="absolute inset-0 z-0 opacity-[0.3] dark:opacity-[0.05] pointer-events-none" 
                    style={{ 
                        backgroundImage: 'linear-gradient(to right, #64748b22 1px, transparent 1px), linear-gradient(to bottom, #64748b22 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }}
                />

                {/* Soft Flowing Light Blue/Orange Background Shapes */}
                <svg className="absolute top-[0%] right-[0%] w-[100%] h-[120%] text-orange-50 dark:text-[#F97316]/5 pointer-events-none z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="180" strokeLinecap="round" d="M-200,800 C150,800 350,100 600,200 C850,300 800,900 1200,800" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-orange-100/50 dark:bg-[#F97316]/10 blur-[140px] rounded-full pointer-events-none z-0" />

                {/* Orange Floating Stars */}
                <svg className="absolute top-[20%] right-[20%] w-6 h-6 text-[#F97316]/60 animate-[pulse-slow_3s_ease-in-out_infinite] z-0 hidden md:block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
                <svg className="absolute bottom-[20%] left-[10%] w-4 h-4 text-[#F97316]/40 animate-[pulse-slow_4s_ease-in-out_infinite] delay-700 z-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
                <svg className="absolute top-[40%] left-[20%] w-5 h-5 text-[#F97316]/50 animate-[pulse-slow_5s_ease-in-out_infinite] delay-300 z-0 hidden lg:block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center max-w-4xl pt-8">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-50 dark:bg-[#F97316]/10 border border-orange-200 dark:border-[#F97316]/20 text-sm font-bold tracking-widest uppercase text-[#F97316] mb-8 shadow-sm"
                    >
                        <Target className="w-4 h-4" /> Goal Oriented Preparation
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[4.5rem] font-serif font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.05]"
                    >
                        Master Your <br className="hidden md:block"/>
                        <span className="text-[#F97316] relative">
                            Dream Exam
                            {/* Hand-drawn underline */}
                            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-orange-300 dark:text-orange-500/50 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <motion.path 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M5,15 Q50,5 95,15" 
                                />
                            </svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium mb-12"
                    >
                        Join 50M+ students. Search your exam below to get instant access to previous papers, mock tests, and AI-driven analytics.
                    </motion.p>

                    {/* Giant Premium Search Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="w-7 h-7 text-slate-400 group-focus-within:text-[#F97316] transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search 'JEE', 'SSC CGL', 'UPSC'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900 border-[3px] border-slate-100 dark:border-slate-800 rounded-full py-5 pl-16 pr-24 text-lg md:text-xl font-bold text-slate-900 dark:text-white placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-none"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-6 flex items-center text-slate-400 hover:text-slate-600 font-bold px-2"
                            >
                                Clear
                            </button>
                        )}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F97316] text-white p-3 rounded-full hidden sm:flex items-center justify-center shadow-lg transform scale-90 group-focus-within:scale-100 transition-transform">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Platform Stats Block */}
            <div className="bg-white dark:bg-[#060D1A]/50 border-b border-slate-200 dark:border-slate-800 py-8 hidden md:block">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-center gap-12 lg:gap-24">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center"><FileText className="w-6 h-6" /></div>
                            <div>
                                <div className="text-2xl font-black text-slate-900 dark:text-white">10,000+</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Mock Tests</div>
                            </div>
                        </div>
                        <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center"><Users className="w-6 h-6" /></div>
                            <div>
                                <div className="text-2xl font-black text-slate-900 dark:text-white">50M+</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Learners</div>
                            </div>
                        </div>
                        <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center"><Trophy className="w-6 h-6" /></div>
                            <div>
                                <div className="text-2xl font-black text-slate-900 dark:text-white">5,000+</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Top Rankers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                
                {/* Popular / Trending Block (only show if no search filter) */}
                {!searchQuery && (
                    <div className="mb-24">
                        <div className="flex items-center gap-3 mb-8">
                            <Zap className="w-8 h-8 text-amber-500 fill-amber-500" />
                            <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white tracking-tight">Trending Exams Right Now</h2>
                        </div>
                        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x hide-scrollbar">
                            {topExams.map((exam, i) => (
                                <Link key={i} href={exam.href} className="flex flex-col min-w-[300px] bg-white dark:bg-slate-800 border-[1.5px] border-slate-100 dark:border-slate-700/80 rounded-[2rem] p-8 snap-start hover:border-[#F97316]/50 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 group-hover:bg-orange-50 group-hover:text-[#F97316] transition-colors">{exam.tag}</span>
                                        <span className="text-sm font-bold text-slate-400 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-lg">{exam.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-[#F97316] transition-colors">{exam.name}</h3>
                                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-8 flex items-center gap-2">
                                        <Users className="w-4 h-4" /> {exam.applicants} Students Competing
                                    </p>
                                    <div className="w-full text-center mt-auto text-sm font-black text-[#F97316] dark:text-orange-400 group-hover:translate-x-1 flex justify-end items-center transition-transform">Explore Test Series &rarr;</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-900 dark:text-white tracking-tight">
                            {searchQuery ? `Search Results for "${searchQuery}"` : "All Exam Categories"}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-3 font-sans">
                            {searchQuery ? `Found ${filteredCategories.length} matching categories.` : "Select from 50+ central and state level examinations."}
                        </p>
                    </div>
                </div>

                {filteredCategories.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700">
                        <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No categories found</h3>
                        <p className="text-slate-500 font-medium">Try searching with a different keyword like "SSC", "Defense", or "JEE".</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        <AnimatePresence>
                            {filteredCategories.map((cat, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    key={cat.name}
                                >
                                    <Link 
                                        href={cat.href} 
                                        className="h-full group relative bg-white dark:bg-[#0F172A] rounded-[2rem] p-6 md:p-8 border border-slate-100 dark:border-slate-700/80 hover:border-[#F97316]/40 dark:hover:border-[#F97316]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                                    >
                                        {cat.popular && (
                                            <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#F97316] text-white text-[10px] sm:text-[11px] tracking-widest font-black uppercase px-4 py-1.5 rounded-full shadow-md shadow-[#F97316]/30 flex items-center gap-1">
                                                <Zap className="w-3 h-3 fill-white" /> POPULAR
                                            </div>
                                        )}

                                        <div className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center ${cat.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mb-6 shadow-sm`}>
                                            <cat.icon className="w-8 h-8" />
                                        </div>
                                        
                                        <h3 className="text-xl sm:text-2xl font-black font-serif text-slate-900 dark:text-white mb-3 group-hover:text-[#F97316] transition-colors leading-tight">
                                            {cat.name}
                                        </h3>
                                        
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed flex-1">
                                            {cat.desc}
                                        </p>
                                        
                                        <div className="mt-auto flex items-center gap-2 text-[#F97316] dark:text-orange-400 font-bold text-sm bg-orange-50 dark:bg-[#F97316]/10 w-fit px-5 py-2.5 rounded-xl group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                                            View Exams <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Additional Feature Section to enrich the page */}
                <div className="mt-28 bg-[#F97316] text-white rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl shadow-[#F97316]/20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-red-500/20 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h3 className="text-4xl md:text-5xl font-serif font-black mb-6 leading-tight">Didn't find your exam?</h3>
                        <p className="text-orange-50/90 text-lg md:text-xl font-medium leading-relaxed">
                            We are constantly adding new exam categories. Register now to get notified when we launch mock tests for your specific targeted exam.
                        </p>
                    </div>
                    
                    <div className="relative z-10 shrink-0 mt-4 md:mt-0">
                        <Link href="/register" className="bg-white text-slate-900 hover:bg-slate-50 font-black px-10 py-5 rounded-2xl shadow-xl transition-all flex items-center gap-3 text-lg hover:-translate-y-1 group">
                            Register Now <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}
