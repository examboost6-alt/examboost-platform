"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    PlayCircle, Clock, FileText, CheckCircle, Trophy, TrendingUp, 
    Target, BookOpen, ChevronRight, Activity, Filter, BrainCircuit,
    Crosshair, ShieldCheck, PieChart, Star, Users
} from 'lucide-react';

const categories = ["All Exams", "Engineering", "Medical", "SSC", "Banking", "UPSC", "Teaching"];

const mockTests = [
    { id: 1, category: "SSC", exam: 'SSC CGL', title: 'Tier 1 Full Mock', q: 100, t: 60, difficulty: "Moderate", users: "45K+" },
    { id: 2, category: "Engineering", exam: 'JEE Main', title: 'Complete Physics', q: 30, t: 60, difficulty: "Hard", users: "32K+" },
    { id: 3, category: "Medical", exam: 'NEET UG', title: 'Biology Chapter 1', q: 90, t: 45, difficulty: "Easy", users: "60K+" },
    { id: 4, category: "UPSC", exam: 'UPSC CSE', title: 'Polity Basics', q: 50, t: 60, difficulty: "Crucial", users: "20K+" },
    { id: 5, category: "Banking", exam: 'Banking PO', title: 'Quant Speed Test', q: 35, t: 20, difficulty: "Advanced", users: "55K+" },
    { id: 6, category: "All Exams", exam: 'CUET UG', title: 'General Ability', q: 60, t: 60, difficulty: "Moderate", users: "80K+" },
    { id: 7, category: "Teaching", exam: 'CTET', title: 'Child Development (CDP)', q: 30, t: 30, difficulty: "Crucial", users: "15K+" },
    { id: 8, category: "SSC", exam: 'SSC CHSL', title: 'English Reading Comp.', q: 25, t: 20, difficulty: "Easy", users: "25K+" },
    { id: 9, category: "Banking", exam: 'SBI Clerk', title: 'Logical Reasoning', q: 35, t: 20, difficulty: "Advanced", users: "40K+" },
];

export default function FreeMockTestsPage() {
    const [activeTab, setActiveTab] = useState("All Exams");

    const filteredTests = activeTab === "All Exams" 
        ? mockTests 
        : mockTests.filter(test => test.category === activeTab);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
            
            {/* 1. Ultra Premium Hero Section */}
            <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Emerald/Teal Background Blobs representing 'Go/Start/Free' */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
                <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-sm font-semibold mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800 backdrop-blur-sm"
                >
                    <Trophy className="w-4 h-4 animate-pulse" />
                    <span>No Credit Card Required</span>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
                >
                    Experience India's Most <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">Accurate Test Engine.</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
                >
                    Diagnose your preparation level before you commit. Attempt premium-quality mocks simulating exact CBT patterns for absolutely zero cost.
                </motion.p>
            </section>

            {/* Scrolling Stats Banner */}
            <section className="w-full bg-slate-900 py-4 md:py-6 overflow-hidden border-y border-slate-800 flex items-center shadow-inner relative z-10 pointer-events-none">
                <div className="flex w-[400%] md:w-[200%] animate-[slide_20s_linear_infinite] whitespace-nowrap">
                   <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-emerald-100 font-bold text-sm md:text-xl">
                     <span className="flex items-center gap-3"><Users className="w-6 h-6 text-teal-400" /> 2M+ Attempts Recorded</span>
                     <span className="flex items-center gap-3"><PieChart className="w-6 h-6 text-teal-400" /> Detailed AI Analytics</span>
                     <span className="flex items-center gap-3"><Crosshair className="w-6 h-6 text-teal-400" /> Exact Exam Interface</span>
                     <span className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-teal-400" /> 100% Free Forever</span>
                     <span className="flex items-center gap-3"><Users className="w-6 h-6 text-teal-400" /> 2M+ Attempts Recorded</span>
                     <span className="flex items-center gap-3"><PieChart className="w-6 h-6 text-teal-400" /> Detailed AI Analytics</span>
                     <span className="flex items-center gap-3"><Crosshair className="w-6 h-6 text-teal-400" /> Exact Exam Interface</span>
                     <span className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-teal-400" /> 100% Free Forever</span>
                   </div>
                </div>
                 <style dangerouslySetInnerHTML={{__html: `
                    @keyframes slide {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  `}} />
            </section>

            {/* 2. Interactive Test Library */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Free Mock Library</h2>
                        <p className="text-slate-600 dark:text-slate-400">Select your target category to start practicing instantly.</p>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-nowrap overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar">
                    {categories.map((cat, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveTab(cat)}
                            className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border select-none ${
                                activeTab === cat 
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20' 
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-500/50'
                            }`}
                        >
                            {cat === "All Exams" ? <Filter className="w-4 h-4" /> : null}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredTests.map((test) => (
                            <motion.div 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={test.id} 
                                className="bg-white dark:bg-[#0f172a] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-400/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-black uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 px-3 py-1.5 rounded-lg tracking-wider">
                                        {test.exam}
                                    </span>
                                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded-md">
                                        <Activity className="w-3 h-3" /> {test.users} Attempted
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-1">{test.title}</h3>

                                <div className="flex items-center justify-between text-sm font-semibold text-slate-600 dark:text-slate-400 mb-8 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase text-slate-500 font-bold">Questions</span>
                                        <div className="flex items-center gap-1.5 text-slate-900 dark:text-white"><FileText className="w-4 h-4 text-emerald-500" /> {test.q} Qs</div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase text-slate-500 font-bold">Duration</span>
                                        <div className="flex items-center gap-1.5 text-slate-900 dark:text-white"><Clock className="w-4 h-4 text-teal-500" /> {test.t} Mins</div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase text-slate-500 font-bold">Level</span>
                                        <div className="flex items-center gap-1.5 text-slate-900 dark:text-white">
                                            <TrendingUp className={`w-4 h-4 ${test.difficulty === 'Hard' || test.difficulty === 'Advanced' ? 'text-rose-500' : 'text-amber-500'}`} /> {test.difficulty}
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full mt-auto py-3.5 bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-900/20 text-slate-900 hover:text-emerald-700 dark:text-white dark:hover:text-emerald-400 font-bold rounded-xl transition-colors border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-emerald-600 dark:group-hover:text-white dark:group-hover:border-transparent">
                                    Start Test <PlayCircle className="w-5 h-5 transition-transform" />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* 3. Value Proposition Section */}
            <section className="py-20 bg-emerald-900 dark:bg-slate-900 border-y border-emerald-800 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">More Than Just Free Practice.</h2>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto mb-16">
                        Every free attempt provides the same high-end analytics and detailed video solutions as our paid dashboard.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            { icon: Target, title: "All India Ranking (AIR)", desc: "See exactly where you stand among thousands of serious aspirants the moment you hit submit." },
                            { icon: BrainCircuit, title: "Smart Actionable Analytics", desc: "We don't just show right/wrong. We show you exactly how many seconds you wasted on questions you got wrong." },
                            { icon: BookOpen, title: "Detailed Step-by-step Solutions", desc: "Every tricky quant equation and logical puzzle comes fully solved with alternative short-tricks." }
                        ].map((feat, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-400/30 text-emerald-300">
                                    <feat.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                                <p className="text-emerald-100/80 leading-relaxed text-sm">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Student Reviews */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Don't Take Our Word For It</h2>
                    <p className="text-slate-600 dark:text-slate-400">Thousands converted their free diagnostic attempts into final selections.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Rahul S.", exam: "SSC CGL AIR 45", text: "I started with the Free Tier 1 diagnostic mock. The interface was so identical to TCS iON that it removed my exam phobia instantly." },
                        { name: "Meena K.", exam: "SBI PO Selected", text: "The free quant speed test showed me that I was taking 2 minutes per DI question. The analytics dashboard is an absolute eye-opener!" },
                        { name: "Ankit Y.", exam: "JEE Main 99.8%ile", text: "Most platforms give simple questions in free tests to trap you. ExamBoost gave an insane Rotational Mechanics paper for free. Pure respect." }
                    ].map((r, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl flex flex-col gap-6 shadow-sm">
                            <div className="flex text-amber-500 gap-1">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed flex-grow italic">"{r.text}"</p>
                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{r.exam}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Minimal CTA */}
            <section className="pb-24 pt-12">
                 <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-800/80 p-12 rounded-[3rem] border border-emerald-100 dark:border-slate-700 shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Ready to Benchmark Yourself?</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                            Sign up requires absolutely no payment details. Jump straight into the computer based testing environment.
                        </p>
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 mx-auto hover:-translate-y-1">
                            Create Free Account <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
