"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    PlayCircle, Clock, FileText, CheckCircle, Trophy, TrendingUp, 
    Target, BookOpen, ChevronRight, Activity, Filter, BrainCircuit,
    Crosshair, ShieldCheck, PieChart, Star, Users, Award, LayoutGrid, Zap, Quote
} from 'lucide-react';

const categories = ["All Exams", "SSC", "Banking", "UPSC", "CUET", "Teaching", "Defense"];

const mockTests = [
    { id: 1, category: "SSC", exam: 'SSC CGL', title: 'Tier-1 Diagnostic Trial', q: 100, t: 60, difficulty: "Moderate", seriesTotal: 45, users: "85K" },
    { id: 2, category: "UPSC", exam: 'UPSC CSE', title: 'GS Prelims Mini-Mock', q: 50, t: 60, difficulty: "Hard", seriesTotal: 25, users: "32K" },
    { id: 3, category: "Banking", exam: 'SBI PO', title: 'Prelims Quant Speed Run', q: 35, t: 20, difficulty: "Advanced", seriesTotal: 30, users: "60K" },
    { id: 4, category: "CUET", exam: 'CUET UG', title: 'General Test CBT Mock', q: 60, t: 60, difficulty: "Moderate", seriesTotal: 20, users: "92K" },
    { id: 5, category: "Teaching", exam: 'CTET', title: 'CDP Core Application', q: 30, t: 30, difficulty: "Crucial", seriesTotal: 15, users: "41K" },
    { id: 6, category: "SSC", exam: 'SSC CHSL', title: 'English Grammar Marathon', q: 25, t: 15, difficulty: "Easy", seriesTotal: 30, users: "55K" },
    { id: 7, category: "Defense", exam: 'NDA / NA', title: 'GAT Geography & History', q: 50, t: 45, difficulty: "Moderate", seriesTotal: 10, users: "15K" },
    { id: 8, category: "Banking", exam: 'IBPS Clerk', title: 'Logical Reasoning Fast-Track', q: 35, t: 20, difficulty: "Advanced", seriesTotal: 40, users: "48K" },
];

export default function FreeMockTestsPage() {
    const [activeTab, setActiveTab] = useState("All Exams");

    const filteredTests = activeTab === "All Exams" 
        ? mockTests 
        : mockTests.filter(test => test.category === activeTab);

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#06040A] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-orange-500/30">
            
            {/* 1. Ultra Premium Hero Section (Flat Modern Orange/Black) */}
            {/* 1. Website-Aligned Professional Flat Modern Hero Section */}
            <section className="relative pt-24 pb-24 w-full min-h-[90vh] bg-white dark:bg-[#06040A] overflow-hidden flex flex-col items-center border-b-[2px] border-slate-200 dark:border-orange-900/40">
                
                {/* Advanced Flat Decorative Elements (Consistent with website) */}
                <div className="absolute top-20 left-10 md:left-24 w-12 h-32 bg-orange-100/50 dark:bg-orange-900/30 rounded-full hidden md:flex border-[2px] border-orange-200 dark:border-orange-800"></div>
                <div className="absolute top-10 right-32 md:right-40 w-16 h-16 bg-amber-100/50 dark:bg-amber-900/30 rounded-xl rotate-12 hidden md:flex border-[2px] border-amber-200 dark:border-amber-800"></div>
                <div className="absolute bottom-40 right-10 md:right-20 w-24 h-24 bg-sky-50/50 dark:bg-sky-950/40 rounded-full hidden md:block border-[2px] border-sky-200 dark:border-sky-900"></div>
                <div className="absolute top-1/3 left-5 md:left-10 w-20 h-20 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-tr-[2rem] rounded-bl-[2rem] hidden lg:block border-[2px] border-emerald-200 dark:border-emerald-800"></div>

                {/* Dotted Pattern Background Container to add texture but keep it clean */}
                <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e293b 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-orange-400/10 dark:bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-8 md:mt-12 w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-orange-50 dark:bg-orange-950/80 text-orange-800 dark:text-orange-300 text-sm font-black tracking-widest uppercase mb-10 border-[2px] border-orange-200 dark:border-orange-800 shadow-sm"
                    >
                        <ShieldCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <span>The Ultimate Diagnostic Hub</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter"
                    >
                        Diagnose Before You <br className="hidden md:block"/>
                        <span className="relative inline-block mx-1 text-orange-600 dark:text-orange-500 mt-2 md:mt-4">
                            Commit.
                            <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-orange-600/30 dark:text-orange-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="square" d="M0,10 L100,10" />
                            </svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 font-medium leading-relaxed"
                    >
                        Every core test series on our platform offers its first diagnostic mock completely free. Analyze and evaluate the precision of our engine simulation.
                    </motion.p>
                    
                    {/* Floating Decorative UI Line */}
                    <div className="absolute right-[5%] top-[15%] hidden xl:block w-px h-32 bg-gradient-to-b from-transparent via-orange-300 dark:via-orange-700 to-transparent"></div>
                    <div className="absolute left-[5%] top-[40%] hidden xl:block w-32 h-px bg-gradient-to-r from-transparent via-amber-300 dark:via-amber-700 to-transparent"></div>

                    {/* Highly Professional Display Element (Organic Liquid Shape) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-full max-w-5xl mt-12 relative group"
                    >
                        {/* Liquid Morphing Decorative Underlay (Flat Modern Style) */}
                        <div 
                            className="absolute top-2 -right-4 md:top-8 md:-right-8 w-full h-full border-[3px] border-amber-300 dark:border-orange-500/60 z-0 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-2 shadow-sm"
                            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                        ></div>
                        <div 
                            className="absolute -bottom-4 -left-2 md:-bottom-8 md:-left-8 w-full h-full bg-orange-100 dark:bg-orange-900/30 z-0 hidden sm:block transition-transform duration-700 group-hover:-translate-x-4 group-hover:translate-y-2 border border-orange-200 dark:border-orange-800 backdrop-blur-sm"
                            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
                        ></div>

                        {/* Liquid Organic Image Container */}
                        <div 
                            className="relative z-10 w-full aspect-[21/9] border-[4px] border-slate-900 dark:border-white overflow-hidden shadow-2xl bg-slate-900 flex items-center justify-center p-1.5 focus-within:ring-0 transition-all duration-[1.5s] ease-in-out"
                            style={{ borderRadius: '70% 30% 64% 36% / 46% 62% 38% 54%' }}
                        >
                            <img 
                                src="/free_mock_diagnostic.png" 
                                alt="Advanced Diagnostics Dashboard" 
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                            />
                            
                            {/* Hover Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Action Button inside image */}
                            <Link href="#trial-grid" className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0 text-white font-black bg-orange-600 hover:bg-orange-500 px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(234,88,12,0.6)] border-2 border-orange-400 flex items-center gap-3 w-max active:scale-95">
                                Select A Diagnostic <ChevronRight className="w-6 h-6" />
                            </Link>
                        </div>
                        
                        {/* Floating Professional Stat Card */}
                        <div className="absolute -left-2 md:-left-12 top-20 bg-white dark:bg-[#0A0711] p-5 md:p-6 rounded-[2rem] border-[3px] border-slate-200 dark:border-orange-900/50 flex items-center gap-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-20 transition-transform duration-500 group-hover:-translate-y-4">
                            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center rounded-2xl border-2 border-emerald-200 dark:border-emerald-800">
                                <PieChart className="w-7 h-7" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-black text-slate-500 uppercase tracking-widest pl-1 mb-1">CBT Architecture</p>
                                <p className="font-black font-serif text-slate-900 dark:text-white text-xl">100% Replication</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Performance Ticker */}
            <section className="w-full bg-[#180a02] py-5 overflow-hidden flex items-center relative z-10 border-b-[3px] border-orange-600 mt-2">
                <div className="flex w-[400%] md:w-[200%] animate-[slide_30s_linear_infinite] whitespace-nowrap">
                   <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-orange-100 font-black text-sm md:text-xl uppercase tracking-widest">
                     <span className="flex items-center gap-4"><Crosshair className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> CBT Simulations</span>
                     <span className="flex items-center gap-4"><Trophy className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> Free All India Rank</span>
                     <span className="flex items-center gap-4"><Activity className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> Time Analytics</span>
                     <span className="flex items-center gap-4"><ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> No Card Required</span>
                     <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> 10L+ Attempts</span>
                     
                     <span className="flex items-center gap-4"><Crosshair className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> CBT Simulations</span>
                     <span className="flex items-center gap-4"><Trophy className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> Free All India Rank</span>
                     <span className="flex items-center gap-4"><Activity className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> Time Analytics</span>
                     <span className="flex items-center gap-4"><ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> No Card Required</span>
                     <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> 10L+ Attempts</span>
                   </div>
                </div>
            </section>

            {/* 2. Interactive Test Library Grid */}
            <section id="trial-grid" className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#06040A] scroll-mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-orange-900/30 text-orange-800 dark:text-amber-400 text-sm font-black tracking-widest uppercase mb-6 border border-amber-300 dark:border-orange-800/50">
                                <LayoutGrid className="w-4 h-4" />
                                <span>Complete Directory</span>
                            </div>
                            <h2 className="text-4xl md:text-[3rem] font-black font-serif text-slate-900 dark:text-white leading-tight">Pick Your Free Diagnostic.</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mt-4">Browse and attempt the First Mock Test from any premium series instantly.</p>
                        </div>
                    </div>

                    {/* Highly Styled Premium Filter Tabs */}
                    <div className="flex flex-nowrap overflow-x-auto pb-6 mb-8 gap-4 no-scrollbar items-center">
                        {categories.map((cat, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveTab(cat)}
                                className={`whitespace-nowrap px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all flex items-center gap-2 select-none border-2 shrink-0 ${
                                    activeTab === cat 
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.2)]' 
                                    : 'bg-white dark:bg-[#0f0914] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-orange-400 hover:text-orange-600 dark:hover:border-orange-500 dark:hover:text-orange-400 shadow-sm'
                                }`}
                            >
                                {cat === "All Exams" ? <Filter className={`w-4 h-4 ${activeTab === cat ? '' : 'text-orange-500'}`} /> : null}
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* The Free Mock Flat Modern Cards */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence mode='popLayout'>
                            {filteredTests.map((test) => (
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    key={test.id} 
                                    className="bg-white dark:bg-[#0A0711] rounded-3xl p-6 border-[1.5px] border-slate-200 dark:border-orange-900/30 hover:border-orange-500 dark:hover:border-orange-400 shadow-sm hover:shadow-[10px_10px_0px_#ea580c] dark:hover:shadow-[8px_8px_0px_#9a3412] transition-all duration-300 flex flex-col group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl rounded-tr-[1.3rem] uppercase tracking-widest shadow-sm">
                                        FREE ACCESS
                                    </div>
                                    
                                    <div className="flex justify-between items-start mb-6 pt-2">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase text-orange-600 dark:text-amber-500 tracking-wider mb-1">
                                                {test.category} Series
                                            </span>
                                            <span className="text-xl font-black font-serif text-slate-900 dark:text-white">
                                                {test.exam}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-6 group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">{test.title}</h3>

                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                                            <span className="block text-[10px] uppercase text-slate-400 font-bold mb-1">Items</span>
                                            <div className="flex items-center gap-1.5 text-sm font-black text-slate-800 dark:text-white">
                                                <FileText className="w-4 h-4 text-orange-500" /> {test.q} Qns
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                                            <span className="block text-[10px] uppercase text-slate-400 font-bold mb-1">Time</span>
                                            <div className="flex items-center gap-1.5 text-sm font-black text-slate-800 dark:text-white">
                                                <Clock className="w-4 h-4 text-amber-500" /> {test.t} Mins
                                            </div>
                                        </div>
                                        <div className="col-span-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                            <span className="text-[10px] uppercase text-slate-400 font-bold">Total Tests in Series</span>
                                            <span className="text-sm font-black text-slate-800 dark:text-white">{test.seriesTotal} Mocks</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-auto py-4 bg-slate-900 hover:bg-orange-600 dark:bg-white dark:hover:bg-amber-500 text-white hover:text-white dark:text-slate-900 dark:hover:text-slate-900 font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider text-sm">
                                        Launch Test <PlayCircle className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* 3. Value Proposition Section (Monochrome Flat Boxes) */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 relative">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 text-sm font-black tracking-widest uppercase mb-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <PieChart className="w-4 h-4" />
                        <span>Why evaluate?</span>
                    </div>
                    <h2 className="text-4xl md:text-[3.5rem] leading-tight font-black font-serif text-slate-900 dark:text-white mb-6">More Than Just a Free Try.</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Every free attempt unlocks the exact same high-end analytics and detailed diagnostic reports as our paid dashboards. 
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-[2px] border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 bg-white dark:bg-[#0A0711] shadow-sm">
                    {[
                        { icon: Award, title: "All India Ranking", desc: "See exactly where you stand against thousands of active serious aspirants instantly after submitting." },
                        { icon: Activity, title: "Actionable Analytics", desc: "We track exactly how many extra seconds you wasted on negatively marked questions so you can fix pacing." },
                        { icon: BookOpen, title: "Deep Solutions", desc: "Every tricky quant equation and logical trap comes fully solved with shortcut alternatives." }
                    ].map((feat, i) => (
                        <div key={i} className="bg-[#F8FAFC] dark:bg-[#110B1A] border-[2px] border-slate-200 dark:border-slate-800/80 p-8 rounded-2xl hover:bg-orange-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-slate-900 transition-colors group">
                            <div className="w-14 h-14 bg-white dark:bg-[#1C132B] border-2 border-slate-200 dark:border-slate-800/50 rounded-xl flex items-center justify-center text-orange-600 dark:text-amber-500 mb-6 group-hover:border-transparent group-hover:bg-orange-800 group-hover:text-orange-200 dark:group-hover:bg-amber-900 dark:group-hover:text-amber-100 transition-colors">
                                <feat.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black font-serif mb-3 transition-colors">{feat.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 group-hover:text-orange-100 dark:group-hover:text-amber-900/80 font-medium text-base transition-colors">
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Student Reviews */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-[3.5rem] font-black font-serif text-slate-900 dark:text-white mb-6">Proven by Toppers.</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">Thousands analyzed their weak points through our free diagnostics and cleared their target exams.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Rahul S.", exam: "SSC CGL AIR 45", text: "I started with the Free Tier 1 diagnostic mock. The interface was so identical to TCS iON that it removed my exam phobia instantly." },
                        { name: "Meena K.", exam: "SBI PO Selected", text: "The free quant speed test showed me that I was taking 2 minutes per DI question. The analytics dashboard is an absolute eye-opener!" },
                        { name: "Ankit Y.", exam: "JEE Main 99.8%ile", text: "Most platforms give simple questions in free tests to trap you. ExamBoost gave an insane Rotational Mechanics paper for free. Pure respect." }
                    ].map((r, i) => (
                        <div key={i} className="bg-white dark:bg-[#0A0711] border-[2px] border-slate-200 dark:border-orange-900/40 p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 relative">
                            <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800">
                                <Quote className="w-10 h-10 fill-current" />
                            </div>
                            <div className="flex text-amber-500 gap-1 z-10">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed flex-grow z-10 italic">
                                "{r.text}"
                            </p>
                            <div className="mt-auto pt-8 border-t-[2px] border-slate-100 dark:border-slate-800 flex items-center gap-5 z-10">
                                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center font-black font-serif text-2xl">
                                    {r.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-black text-xl text-slate-900 dark:text-white mb-1">{r.name}</h4>
                                    <p className="text-xs font-black text-orange-600 dark:text-amber-500 uppercase tracking-widest">{r.exam}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
