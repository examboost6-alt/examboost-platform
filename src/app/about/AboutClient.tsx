"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    MonitorPlay, 
    ShieldCheck, 
    Cpu, 
    Timer, 
    Database, 
    Globe, 
    Activity, 
    Award, 
    BarChart2, 
    Clock, 
    Target, 
    TrendingUp, 
    Users,
    BookOpen,
    ArrowRight
} from "lucide-react";

export default function AboutClient() {
    return (
        <div className="min-h-screen w-full bg-[#FAFBFF] dark:bg-[#06040A] pt-16 font-sans selection:bg-orange-500/30 overflow-hidden">
            
            {/* 1. MODERN SIDE-BY-SIDE HERO (Perfectly sized, highly professional) */}
            <section className="relative w-full pt-16 lg:pt-28 pb-20 justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#060D1A]">
                {/* 2. Flowing Light Blue Abstract Shape (Behind everything) */}
                <svg className="absolute left-[-20%] sm:left-[0%] top-[0%] w-[140%] sm:w-[100%] h-[120%] text-[#e0f2fe] dark:text-[#0c4a6e]/30 pointer-events-none z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="180" 
                        strokeLinecap="round" 
                        d="M-200,800 C150,800 350,100 600,200 C850,300 800,900 1200,800" 
                    />
                </svg>

                {/* Orange Floating Stars */}
                <svg className="absolute top-[20%] right-[30%] w-6 h-6 text-orange-500 animate-[pulse-slow_3s_ease-in-out_infinite] z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                </svg>
                <svg className="absolute bottom-[40%] right-[45%] w-4 h-4 text-orange-400 animate-[pulse-slow_4s_ease-in-out_infinite] delay-700 z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                </svg>
                <svg className="absolute top-[35%] right-[5%] w-8 h-8 text-orange-600 animate-[pulse-slow_4s_ease-in-out_infinite] delay-100 hidden lg:block z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                </svg>

                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 relative z-10">
                    
                    {/* Left Typography */}
                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-8 pb-16 z-20">
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2 mr-1"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span></span>
                            <span>The Ultimate CBT Engine</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-[3.25rem] sm:text-[4.5rem] md:text-6xl lg:text-[4.8rem] xl:text-[5.5rem] font-serif font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6"
                        >
                            Master the Exam.<br className="hidden md:block"/>
                            <span className="relative inline-block whitespace-nowrap mt-2 lg:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                                Not The Video.
                                {/* Hand-drawn orange circle around text */}
                                <svg className="absolute -inset-2 lg:-inset-4 w-[calc(100%+16px)] lg:w-[calc(100%+32px)] h-[calc(100%+16px)] lg:h-[calc(100%+32px)] pointer-events-none text-[#F97316] overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <path 
                                        d="M93.3,16.7 c-2.4-7.4-15.6-13-35.8-14.8C35.5,0,15,3.7,5.5,10.6C-3.4,17,0,26.4,12.7,31.5c15.1,6.1,43.2,7,64.2,3.3 c13.4-2.3,19.3-7.5,20.8-11.5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        vectorEffect="non-scaling-stroke"
                                        style={{ animation: 'dash 1.5s ease-out forwards' }}
                                        strokeDasharray="200"
                                        strokeDashoffset="200"
                                    />
                                    <path 
                                        d="M91.3,14.7 c-2.4-7.4-15.6-13-35.8-14.8C35.5,0,15,3.7,5.5,10.6C-3.4,17,0,26.4,12.7,31.5c15.1,6.1,43.2,7,64.2,3.3" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="0.5" 
                                        opacity="0.5"
                                        strokeLinecap="round" 
                                        vectorEffect="non-scaling-stroke"
                                        style={{ animation: 'dash 2s ease-out forwards' }}
                                        strokeDasharray="200"
                                        strokeDashoffset="200"
                                    />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed mb-10"
                        >
                            No long boring lectures. ExamBoost is an active simulation environment for aspirants who want to conquer the timer, eliminate anxiety, and secure actual selections.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="mb-14 w-full sm:w-auto flex flex-col sm:flex-row justify-center lg:justify-start"
                        >
                            <Link 
                                href="/exams" 
                                className="inline-flex bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xl px-10 py-4 border-2 border-[#EA580C] rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(249,115,22,0.6)] justify-center gap-3 items-center"
                            >
                                Explore Setup <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Perfectly Controlled Image Shape */}
                    <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 flex justify-center lg:justify-end items-end lg:min-h-[500px] perspective-[1000px]">
                        
                        {/* Hand-drawn black curly arrow */}
                        <motion.svg 
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ opacity: 1, pathLength: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="absolute right-[5%] lg:right-[15%] top-[10%] lg:-top-[10%] w-24 h-24 text-slate-800 dark:text-slate-300 -rotate-12 hidden md:block z-30" 
                            viewBox="0 0 100 100" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M10,90 Q40,30 90,50" style={{ animation: 'dash 1s ease-out forwards', strokeDasharray: 200, strokeDashoffset: 200 }} />
                            <path d="M70,35 L90,50 L75,70" style={{ animation: 'dash 0.5s ease-out forwards 0.8s', strokeDasharray: 50, strokeDashoffset: 50 }} />
                        </motion.svg>

                        {/* Yellow tilted sticky note badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: -12 }}
                            transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 10 }}
                            className="absolute -left-6 sm:left-[5%] lg:-left-12 top-[15%] lg:top-[20%] w-36 h-36 bg-[#FDE047] border border-yellow-300 rounded-3xl shadow-[0_20px_40px_rgba(253,224,71,0.5)] flex flex-col items-center justify-center text-center p-4 z-40"
                        >
                            <span className="font-extrabold text-slate-900 leading-tight text-lg">High<br/>Performance</span>
                            <TrendingUp className="w-6 h-6 text-slate-900 mt-2" />
                            <div className="absolute top-3 right-3 w-3 h-3 bg-orange-400 rounded-full shadow-inner opacity-70"></div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative aspect-[4/3] w-full max-w-[500px] rounded-[2rem] p-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(234,88,12,0.15)] dark:shadow-none border border-slate-200 dark:border-slate-700/50 flex transform-gpu hover:rotateY-[-5deg] transition-transform duration-700 group z-20"
                        >
                            <img 
                                src="/about_cbt_engine.png" 
                                alt="CBT Engine Examination" 
                                className="w-full h-full object-cover rounded-[1.5rem]"
                            />
                            {/* Inner Highlight Overlay */}
                            <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 transition-colors duration-500 rounded-[2rem] pointer-events-none"></div>
                        </motion.div>

                        {/* Floating Tech Badges */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                            className="absolute -left-6 md:-left-12 bottom-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-700/50 flex items-center gap-4 shadow-xl z-30"
                        >
                            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center rounded-lg border border-emerald-200/50 dark:border-slate-700">
                                <Activity className="w-5 h-5" />
                            </div>
                            <div className="text-left pr-2 whitespace-nowrap">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Latency</p>
                                <p className="font-extrabold font-sans text-slate-800 dark:text-white text-base leading-none">Sub-Millisecond</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="absolute -right-4 md:-right-8 top-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-700/50 flex items-center gap-4 shadow-xl z-30"
                        >
                            <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center rounded-lg border border-orange-200/50 dark:border-slate-700">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div className="text-left pr-2 whitespace-nowrap">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Validated</p>
                                <p className="font-extrabold font-sans text-slate-800 dark:text-white text-base leading-none">100% Replica</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* 2. THE ECOSYSTEM BENTO (Modern Apple-Style Bento Mesh) */}
            <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center w-full max-w-4xl mx-auto mb-16">
                    <span className="text-orange-600 dark:text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Engine Architecture</span>
                    <h2 className="text-4xl md:text-5xl font-black font-sans tracking-tight text-slate-900 dark:text-white mb-6">Proprietary Technology Stack</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                    
                    {/* Tech Bento Box 1 - Wide Server Element */}
                    <div className="md:col-span-2 bg-slate-900 dark:bg-[#110B1A] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-lg">
                        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 transform group-hover:scale-105 transition-transform duration-700">
                            <img src="/about_tech_engine.png" className="w-full h-full object-cover mix-blend-screen" alt="Tech engine" />
                        </div>
                        <div className="relative z-10 w-full h-full flex flex-col justify-between">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center rounded-2xl shadow-[0_10px_20px_rgba(249,115,22,0.4)]">
                                <Cpu className="w-7 h-7" />
                            </div>
                            <div className="max-w-sm">
                                <h3 className="text-3xl font-black font-sans tracking-tight text-white mb-3">0ms Latency Grid</h3>
                                <p className="text-slate-300 font-medium leading-relaxed">Every click, section switch, and answer save is processed instantaneously via clustered regional nodes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Bento Box 2 - Timer Element */}
                    <div className="md:col-span-1 bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-orange-500 transition-colors shadow-sm">
                        <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center rounded-2xl border border-orange-100 dark:border-orange-800 transition-transform">
                            <Timer className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black font-sans tracking-tight text-slate-900 dark:text-white mb-2">Atomic Sync</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">Server-side NTP sync prevents clock freezes or trickery.</p>
                        </div>
                    </div>

                    {/* Tech Bento Box 3 - Vault Element */}
                    <div className="md:col-span-1 bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-emerald-500 transition-colors shadow-sm">
                        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center rounded-2xl border border-emerald-100 dark:border-emerald-800 transition-transform">
                            <Database className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black font-sans tracking-tight text-slate-900 dark:text-white mb-2">Audited Vault</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">1M+ questions mapped strictly to official memorandums.</p>
                        </div>
                    </div>

                    {/* Tech Bento Box 4 - Multilingual Element */}
                    <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-[#0F172A] rounded-[2.5rem] p-8 md:p-10 border border-indigo-100 dark:border-slate-700 relative overflow-hidden flex flex-col justify-between shadow-sm group">
                        <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-2xl z-10 shadow-lg">
                            <Globe className="w-7 h-7" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black font-sans tracking-tight text-slate-900 dark:text-white mb-3">Native Multilingual Engine</h3>
                            <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-md">Instantly toggle your CBT language from English to Hindi (and others) using our sub-second translation matrix dropdown, exactly like real exams.</p>
                        </div>
                        <div className="absolute right-0 bottom-[-15%] flex gap-4 opacity-10 dark:opacity-20 transform group-hover:-translate-x-2 transition-transform duration-700 pointer-events-none">
                            <span className="text-[10rem] font-black text-blue-900 leading-none">A</span>
                            <span className="text-[10rem] font-black font-serif text-blue-900 leading-none">अ</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. MODERN CONNECTED PROTOCOL */}
            <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center w-full max-w-4xl mx-auto mb-16 relative">
                    <span className="text-orange-600 dark:text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Proven Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-black font-sans tracking-tight text-slate-900 dark:text-white mb-6">The Success Protocol</h2>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6 w-full justify-between items-stretch">
                    {/* Absolute connecting continuous line for beautiful modern UI */}
                    <div className="absolute top-1/2 left-[10%] w-[80%] h-1 bg-gradient-to-r from-orange-200 via-amber-200 to-emerald-200 hidden md:block -translate-y-1/2 z-0 rounded-full dark:from-slate-800 dark:via-slate-800 dark:to-slate-800"></div>

                    {[
                        { step: "01", title: "Conditioning", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30", outline: "outline-orange-200 dark:outline-orange-900/50", desc: "Build mental stamina by surviving 2-hour virtual sessions on raw interface." },
                        { step: "02", title: "Diagnosis", color: "text-amber-500 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/30", outline: "outline-amber-200 dark:outline-amber-900/50", desc: "Our engine isolates time-draining domains to fix your micro-strategy." },
                        { step: "03", title: "Correction", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/30", outline: "outline-emerald-200 dark:outline-emerald-900/50", desc: "Review granular 'Zero Wait Time Solutions' instantly." }
                    ].map((s, i) => (
                        <div key={i} className="flex-1 bg-white dark:bg-[#0A0711] p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm relative z-10 group transition-all duration-300">
                            {/* Modern Number Node */}
                            <div className={`w-14 h-14 ${s.bg} text-slate-900 dark:text-white font-black text-xl rounded-2xl flex items-center justify-center outline outline-4 outline-offset-2 ${s.outline} outline-transparent group-hover:outline-offset-4 transition-all mb-8`}>
                                {s.step}
                            </div>
                            <h3 className={`text-2xl font-black font-sans tracking-tight mb-3 ${s.color}`}>{s.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. THE CORE STANCE (Cleaned UI & PERFECTLY PROPORTIONED IMAGE) */}
            <section className="py-24 bg-slate-50 dark:bg-[#080511] border-y border-slate-200 dark:border-slate-800 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Fixed Size Elegant Image Profile */}
                    <div className="w-full lg:w-5/12 max-w-sm mx-auto flex justify-center lg:justify-start relative perspective-[1000px]">
                        <div className="relative w-full aspect-[4/5] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 transform-gpu hover:rotateY-[-5deg] transition-transform duration-700">
                            <img src="/about_analytics.png" alt="Analytics Dashboard" className="w-[150%] h-full object-cover object-left rounded-[2.5rem] mix-blend-darken dark:mix-blend-normal"/>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40"></div>
                            
                            {/* Modern Bottom Tag */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 shadow-sm">
                                <BarChart2 className="w-6 h-6 text-orange-500" />
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest font-bold text-slate-500 pt-0.5">Automated Analysis</p>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm leading-tight">Weakness Diagnostics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold uppercase text-[11px] tracking-widest mb-6 border border-orange-200 dark:border-orange-800">
                            The Methodology
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl font-black font-sans tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            Stop Passively <br className="hidden sm:block"/> Watching.
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 border-l-[3px] border-orange-500 pl-6 leading-relaxed">
                            Watching a tutor solve a 2-minute math problem provides a false sense of security. Real examination temperment is built only by taking action.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Clock, title: "Active Recall", desc: "Interactive testing forces immediate recall, building permanent memory paths." },
                                { icon: ShieldCheck, title: "Eradicate Exam Anxiety", desc: "Routine clock-pressure entirely desensitizes examination fear over time." },
                                { icon: TrendingUp, title: "Mathematical Evidence", desc: "Visual percentiles and ranks never lie about your true progress baseline." }
                            ].map((b, i) => (
                                <div key={i} className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center rounded-xl shrink-0 mt-1">
                                        <b.icon className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-xl font-bold font-sans tracking-tight text-slate-900 dark:text-white mb-1.5">{b.title}</h4>
                                        <p className="text-slate-500 font-medium text-[15px]">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. MODERN METRICS STRIP */}
            <section className="w-full bg-slate-900 dark:bg-[#0A0711] py-8 overflow-hidden flex items-center relative z-10">
                <div className="flex w-[300%] md:w-[200%] animate-[slide_30s_linear_infinite] whitespace-nowrap">
                   <div className="flex gap-16 md:gap-32 px-4 items-center text-slate-400 font-bold text-lg md:text-2xl uppercase tracking-widest">
                     <span className="flex items-center gap-3"><Users className="w-6 h-6 text-orange-500" /> 50 Lakh+ Students</span>
                     <span className="flex items-center gap-3 text-slate-600 dark:text-slate-800">•</span>
                     <span className="flex items-center gap-3"><Target className="w-6 h-6 text-orange-500" /> 10 Crore+ Tests</span>
                     <span className="flex items-center gap-3 text-slate-600 dark:text-slate-800">•</span>
                     <span className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-orange-500" /> 500+ Categories</span>
                     <span className="flex items-center gap-3 text-slate-600 dark:text-slate-800">•</span>
                     <span className="flex items-center gap-3"><Award className="w-6 h-6 text-orange-500" /> 1.2 Lakh+ Selections</span>
                   </div>
                </div>
            </section>

            {/* 7. PLATFORM INTELLIGENCE INFO SECTION */}
            <section className="py-24 max-w-7xl mx-auto px-6 mb-10">
                <div className="w-full relative overflow-hidden flex flex-col gap-12">
                    
                    {/* Header */}
                    <div className="text-center w-full max-w-4xl mx-auto pt-4 relative z-10">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 font-bold tracking-[0.15em] uppercase text-xs mb-6 rounded-full border border-orange-200 dark:border-orange-900/50">
                            Our Core Vision
                        </span>
                        <h2 className="text-4xl md:text-[3.5rem] font-black font-sans tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600">Actual Selections</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            ExamBoost was forged from the realization that millions of deserving candidates fail simply due to poor exam temperament. We bring enterprise-grade test analytics directly to the aspirant.
                        </p>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {/* Info Card 1 */}
                        <div className="bg-slate-900 dark:bg-[#110B1A] border border-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-indigo-900/20">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 blur-[100px] rounded-full group-hover:bg-indigo-500/30 transition-colors duration-700 pointer-events-none"></div>
                            <div className="w-14 h-14 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 flex items-center justify-center rounded-2xl mb-8">
                                <MonitorPlay className="w-7 h-7" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Pioneering Authentic CBT Layouts</h3>
                                <p className="text-slate-400 font-medium leading-relaxed mb-8 text-lg">
                                    Most platforms use generic mock-up layouts. We specifically clone the exact official testing screen dynamics to eliminate the element of surprise on exam day.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Clinically exact color palettes for tracking answers",
                                        "Instantaneous question switching & fast saves",
                                        "Official marking schemes built directly into the engine"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-slate-300 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5"><Activity className="w-3.5 h-3.5" /></div>
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Info Card 2 */}
                        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-xl">
                            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/10 blur-[100px] rounded-full group-hover:bg-orange-400/20 transition-colors duration-700 pointer-events-none"></div>
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 flex items-center justify-center rounded-2xl mb-8">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <div className="relative z-10 w-full h-full flex flex-col">
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Deep Predictive Mentorship</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-auto text-lg">
                                    Our engine automatically constructs a heat map of your syllabus after 3 full mocks. We algorithmically guide you on exactly which chapter will maximize your score next.
                                </p>
                                <div className="mt-8 bg-slate-50 dark:bg-[#0A0711] p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wide">Accuracy Uplift</span>
                                        <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">+42% Avg</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner">
                                        <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 w-[78%] h-full rounded-full"></div>
                                    </div>
                                    <p className="text-[12px] text-slate-400 dark:text-slate-500 font-bold mt-4 tracking-wide uppercase">Based on users completing 15+ mock cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                @keyframes shimmer { 100% { transform: translateX(100%); } }
                @keyframes dash { to { stroke-dashoffset: 0; } }
                @keyframes pulse-slow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
            `}} />
        </div>
    );
}
