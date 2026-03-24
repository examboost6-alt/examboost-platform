"use client";

import { motion } from 'framer-motion';
import { MdTimeline, MdNorthEast, MdEmojiEvents, MdBarChart, MdGpsFixed, MdAccessTime, MdLayers, MdFlashOn, MdCheckCircle } from 'react-icons/md';
import Link from 'next/link';

export default function DashboardPreview() {
    return (
        <section className="py-24 bg-white dark:bg-[#060D1A] transition-colors duration-300 relative z-10 overflow-hidden border-t border-slate-100 dark:border-slate-800/80">
            {/* Hero-like Grid Background */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.3] dark:opacity-[0.05] pointer-events-none" 
                style={{ 
                    backgroundImage: 'linear-gradient(to right, #64748b22 1px, transparent 1px), linear-gradient(to bottom, #64748b22 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }}
            />
            {/* Soft Flowing Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-50 to-transparent dark:from-[#F97316]/5 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-50 to-transparent dark:from-blue-900/10 pointer-events-none z-0" />
            
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                {/* 2-Column Layout for Header Section instead of centered text */}
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between mb-16 lg:mb-20">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-[#F97316]/10 shadow-sm border border-orange-200 dark:border-[#F97316]/20 text-sm font-bold tracking-widest uppercase text-[#F97316] mb-6"
                        >
                            <MdTimeline className="w-5 h-5 text-[#F97316]" /> AI-Powered Analytics
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
                        >
                            Decode Performance with <br/><span className="text-[#F97316]">Forensic Precision</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8"
                        >
                            Stop practicing blindly. Our proprietary analytics engine dissects your test attempts, exposing hidden weak areas and generating highly personalized study plans to maximize your exam rank.
                        </motion.p>

                        <motion.ul 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 mb-8"
                        >
                            {['Time-Spent Analysis per Sub-Topic', 'National Percentile & Rank Predictor', 'Automated Weakness Revision Playlists'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                        <MdCheckCircle className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-800 dark:text-slate-200 font-bold">{item}</span>
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    <div className="w-full lg:w-[45%] lg:flex justify-end hidden">
                        {/* Decorative abstract elements replacing the text description side */}
                        <div className="relative w-full aspect-square max-w-[400px]">
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-64 h-64 bg-slate-200 dark:bg-slate-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"
                            />
                            <motion.div 
                                animate={{ x: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-0 left-0 w-64 h-64 bg-[#F97316]/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"
                            />
                            {/* Graphic representing data/charts */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
                                <div className="w-full h-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 shadow-2xl flex flex-col justify-between">
                                    <div className="flex gap-4 items-end h-[60%] border-b border-slate-200 dark:border-slate-700 pb-4">
                                        {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className={`flex-1 rounded-t-md ${i === 3 ? 'bg-[#F97316]' : 'bg-slate-200 dark:bg-slate-700'}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="h-[30%] flex items-center justify-between">
                                        <div className="space-y-2 w-full">
                                            <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                            <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full border-4 border-[#F97316] border-r-transparent animate-spin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big Dashboard Mockup Container - Restyled and simplified for layout change */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full bg-white dark:bg-slate-900 rounded-[2rem] p-4 sm:p-6 md:p-10 shadow-2xl border border-slate-200 dark:border-slate-700/60 relative overflow-hidden"
                >
                    {/* Header controls mockup */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316] font-bold text-lg sm:text-xl border border-[#F97316]/20">
                                RA
                            </div>
                            <div>
                                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl">Detailed Analysis Report</h3>
                                <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5 sm:mt-1">SSC CGL Tier 1 • Full Mock #4</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="px-4 py-2 sm:px-5 sm:py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm flex-1 sm:flex-none text-center">Today, 10:30 AM</div>
                        </div>
                    </div>

                    {/* Top Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
                        {[
                            { label: "Overall Score", value: "152.5", total: "/200", icon: <MdEmojiEvents className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-amber-500", border: "border-amber-100 dark:border-amber-900/50" },
                            { label: "India Rank", value: "1,204", total: "/2.1L", icon: <MdBarChart className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-blue-500", border: "border-blue-100 dark:border-blue-900/50" },
                            { label: "Total Accuracy", value: "92", total: "%", icon: <MdGpsFixed className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-emerald-500", border: "border-emerald-100 dark:border-emerald-900/50" },
                            { label: "Avg Time/Q", value: "40", total: "s", icon: <MdAccessTime className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-purple-500", border: "border-purple-100 dark:border-purple-900/50" }
                        ].map((stat, i) => (
                            <div key={i} className={`bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-2xl sm:rounded-[1.5rem] border ${stat.border} flex flex-col justify-between group hover:shadow-lg transition-all duration-300`}>
                                <div className="flex justify-between items-start mb-4 sm:mb-6">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-xl ${stat.color} flex items-center justify-center shadow-sm`}>
                                        {stat.icon}
                                    </div>
                                    <MdNorthEast className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-slate-500 mb-1 sm:mb-2 line-clamp-1">{stat.label}</p>
                                    <p className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">
                                        {stat.value}
                                        <span className="text-xs sm:text-sm font-bold opacity-50 ml-1">{stat.total}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* Sectional Breakdown */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200 dark:border-slate-700/50">
                            <h4 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg mb-6 flex items-center gap-2">
                                <MdLayers className="w-5 h-5 text-[#F97316]" /> Sectional Breakdown
                            </h4>
                            <div className="space-y-5">
                                {[
                                    { name: "General Intelligence & Reasoning", score: 48, total: 50, color: "bg-emerald-500" },
                                    { name: "Quantitative Aptitude", score: 40, total: 50, color: "bg-amber-500" },
                                    { name: "English Comprehension", score: 45, total: 50, color: "bg-blue-500" },
                                ].map((sub, i) => (
                                    <div key={i}>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1 sm:gap-0">
                                            <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 truncate pr-2">{sub.name}</span>
                                            <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">{sub.score}/{sub.total}</span>
                                        </div>
                                        <div className="w-full h-2 sm:h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(sub.score / sub.total) * 100}%` }}
                                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                                                className={`h-full rounded-full ${sub.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Action Plan */}
                        <div className="bg-[#F97316] hover:bg-[#F97316]/95 transition-colors rounded-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden text-white shadow-xl shadow-[#F97316]/20 flex flex-col justify-center cursor-pointer group">
                            {/* Decorative background logo/icon */}
                            <MdFlashOn className="absolute -right-10 -top-10 w-48 h-48 text-white/5 rotate-12" />
                            
                            <h4 className="font-extrabold text-xl sm:text-2xl mb-2 flex items-center gap-2 relative z-10">
                                <MdFlashOn className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" /> AI Action Plan Ready
                            </h4>
                            <p className="text-[#F97316]-foreground/80 text-sm sm:text-base font-medium mb-6 sm:mb-8 max-w-sm relative z-10">
                                We've identified 3 weak chapters costing you 12 marks. Watch the recommended 20-min revision modules to fix them.
                            </p>
                            
                            <div className="relative z-10 flex items-center justify-center gap-4 bg-white text-[#F97316] text-sm sm:text-base font-black py-3 sm:py-4 px-6 rounded-xl w-full sm:w-fit group-hover:scale-[1.02] transition-transform shadow-lg">
                                Start Revision <MdNorthEast className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
