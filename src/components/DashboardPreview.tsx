"use client";

import { motion } from 'framer-motion';
import { MdTimeline, MdNorthEast, MdEmojiEvents, MdBarChart, MdGpsFixed, MdAccessTime, MdLayers, MdFlashOn } from 'react-icons/md';
import Link from 'next/link';

export default function DashboardPreview() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B1120] transition-colors duration-300 relative z-10 overflow-hidden border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-6"
                    >
                        <MdTimeline className="w-5 h-5 text-primary" /> Actionable Analytics
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Track Your Improvement with <span className="text-primary block mt-2">Smart Analytics</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        Get deep AI-driven insights into your mock tests. Monitor your speed, accuracy, and subject-wise strength visually to guarantee selection.
                    </motion.p>
                </div>

                {/* Big Dashboard Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full max-w-5xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-5 md:p-8 lg:p-10 shadow-2xl border border-slate-200 dark:border-slate-700 relative"
                >
                    {/* Header controls mockup */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4">
                            <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                                RA
                            </div>
                            <div>
                                <h3 className="font-extrabold text-slate-900 dark:text-white text-xl">Detailed Analysis Report</h3>
                                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">SSC CGL Tier 1 • Full Mock #4</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex-1 sm:flex-none text-center">Today, 10:30 AM</div>
                            <div className="px-5 py-2.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-sm font-bold rounded-xl border border-primary/20 flex items-center justify-center gap-2 cursor-not-allowed">
                                Share <MdNorthEast className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Top Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                        {[
                            { label: "Overall Score", value: "152.5", total: "/200", icon: <MdEmojiEvents className="w-6 h-6" />, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30" },
                            { label: "All India Rank", value: "1,204", total: "/2.1L", icon: <MdBarChart className="w-6 h-6" />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
                            { label: "Total Accuracy", value: "92", total: "%", icon: <MdGpsFixed className="w-6 h-6" />, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
                            { label: "Avg Time/Q", value: "40", total: "s", icon: <MdAccessTime className="w-6 h-6" />, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shadow-inner`}>
                                        {stat.icon}
                                    </div>
                                    <MdNorthEast className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-2">{stat.label}</p>
                                    <p className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                                        {stat.value}
                                        <span className="text-sm font-bold opacity-50 ml-1">{stat.total}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts & Details Area */}
                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Left Column: Subject wise analysis */}
                        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="font-extrabold text-slate-900 dark:text-white text-xl flex items-center gap-2"><MdLayers className="w-6 h-6 text-primary" /> Sectional Breakdown</h4>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { name: "General Intelligence & Reasoning", score: 48, total: 50, color: "bg-emerald-500" },
                                    { name: "Quantitative Aptitude", score: 40, total: 50, color: "bg-amber-500" },
                                    { name: "English Comprehension", score: 45, total: 50, color: "bg-blue-500" },
                                    { name: "General Awareness", score: 19.5, total: 50, color: "bg-rose-500" }
                                ].map((sub, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{sub.name}</span>
                                            <span className="text-sm font-black text-slate-900 dark:text-white">{sub.score} <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">/{sub.total}</span></span>
                                        </div>
                                        <div className="w-full h-3 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden shadow-inner">
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

                        {/* Right Column: AI Suggestion */}
                        <div className="col-span-1 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 md:p-8 relative overflow-hidden text-white shadow-xl shadow-primary/20">

                            <h4 className="font-extrabold text-xl mb-8 flex items-center gap-2"><MdFlashOn className="w-6 h-6 text-yellow-300" /> AI Action Plan</h4>

                            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md mb-4 border border-white/20">
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-2">Weakness Detected</p>
                                <p className="font-black text-white text-lg">General Awareness (Current Affairs)</p>
                                <p className="text-sm mt-2 text-white/80 font-medium">You lost 12 marks here. Accuracy is only 35%.</p>
                            </div>

                            <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/20">
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-2">Recommended Course</p>
                                <p className="font-black text-white text-lg">Watch 2x Revision Video</p>
                                <p className="text-sm mt-2 text-white/80 font-medium">Clear backlogs from last 3 months to secure +15 marks.</p>
                            </div>

                            <Link href="/exams" className="block w-full mt-6 py-4 bg-white text-primary font-black text-center rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                Watch Video Now
                            </Link>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
