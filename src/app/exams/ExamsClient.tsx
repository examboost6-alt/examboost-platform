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
            {/* Header Section with Search */}
            <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800/80">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 dark:bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
                
                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-6 shadow-sm"
                    >
                        <Target className="w-4 h-4 text-rose-500" /> Goal Oriented Preparation
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Master Your <span className="text-primary">Dream Exam</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium mb-12"
                    >
                        Join 50M+ students. Search your exam below to get instant access to previous papers, mock tests, and AI-driven analytics.
                    </motion.p>

                    {/* Giant Search Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="w-7 h-7 text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="e.g., 'JEE Main', 'SSC CGL', 'UPSC'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-full py-5 pl-16 pr-6 text-lg md:text-xl font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-6 flex items-center text-slate-400 hover:text-slate-600 font-bold"
                            >
                                Clear
                            </button>
                        )}
                    </motion.div>
                </div>
            </header>

            {/* Platform Stats Block */}
            <div className="bg-white dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 py-8 hidden md:block">
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

            <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-20">
                
                {/* Popular / Trending Block (only show if no search filter) */}
                {!searchQuery && (
                    <div className="mb-20">
                        <div className="flex items-center gap-2 mb-8">
                            <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trending Exams Right Now</h2>
                        </div>
                        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 snap-x hide-scrollbar">
                            {topExams.map((exam, i) => (
                                <Link key={i} href={exam.href} className="flex flex-col min-w-[280px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 snap-start hover:border-primary/50 cursor-pointer shadow-sm hover:shadow-lg transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{exam.tag}</span>
                                        <span className="text-xs font-bold text-slate-400">{exam.date}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{exam.name}</h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">{exam.applicants} Students Competing</p>
                                    <div className="w-full text-center mt-auto text-sm font-bold text-primary dark:text-accent group-hover:underline">Explore Test Series &rarr;</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                            {searchQuery ? `Search Results for "${searchQuery}"` : "All Exam Categories"}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
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
                                        className="h-full group relative bg-white dark:bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700/80 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                    >
                                        {cat.popular && (
                                            <div className="absolute top-0 right-6 -translate-y-1/2 bg-amber-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                                <Zap className="w-3 h-3 fill-white" /> POPULAR
                                            </div>
                                        )}

                                        <div className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform duration-300 mb-6 shadow-sm`}>
                                            <cat.icon className="w-8 h-8" />
                                        </div>
                                        
                                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                            {cat.name}
                                        </h3>
                                        
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed flex-1">
                                            {cat.desc}
                                        </p>
                                        
                                        <div className="mt-auto flex items-center gap-2 text-primary dark:text-accent font-bold text-sm bg-primary/5 dark:bg-primary/10 w-fit px-4 py-2 rounded-xl group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-slate-900 transition-colors">
                                            View Exams <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Additional Feature Section to enrich the page */}
                <div className="mt-24 bg-primary text-white rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Didn't find your exam?</h3>
                        <p className="text-primary-foreground/90 text-lg md:text-xl font-medium">
                            We are constantly adding new exam categories. Register now to get notified when we launch mock tests for your specific exam.
                        </p>
                    </div>
                    
                    <div className="relative z-10 shrink-0">
                        <Link href="/register" className="bg-white text-primary hover:bg-slate-50 font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-2 text-lg hover:-translate-y-1">
                            Register Now <ChevronRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}
