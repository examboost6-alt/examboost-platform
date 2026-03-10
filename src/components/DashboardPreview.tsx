"use client";

import { motion } from 'framer-motion';
import { MdTimeline, MdNorthEast, MdEmojiEvents, MdBarChart, MdGpsFixed, MdAccessTime, MdLayers, MdFlashOn } from 'react-icons/md';
import Link from 'next/link';

export default function DashboardPreview() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative z-10 overflow-hidden">

            {/* Background Noise  */}
            {/* Removed radial gradient */}

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 text-sm font-bold tracking-widest uppercase mb-6"
                    >
                        <MdTimeline className="w-4 h-4 text-primary dark:text-accent" /> Live Test Analytics
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-darkText dark:text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Track Your Improvement with <span className="text-primary">Smart Analytics</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-grayText dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Get deep insights into your mock tests. Monitor your speed, accuracy, and subject-wise strength visually.
                    </motion.p>
                </div>

                {/* Big Dashboard Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full max-w-5xl mx-auto glass-card rounded-[2rem] p-4 md:p-8 lg:p-10 shadow-2xl border-t-[8px] border-t-primary dark:border-t-accent relative perspective-1000"
                >
                    {/* Header controls mockup */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary p-[2px]">
                                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-primary dark:text-white font-bold text-lg">AS</div>
                            </div>
                            <div>
                                <h3 className="font-bold text-darkText dark:text-white text-lg">Test Analysis Report</h3>
                                <p className="text-sm font-medium text-grayText dark:text-slate-400">SSC CGL Tier 1 Full Test #12</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-darkText dark:text-slate-200 text-sm font-bold rounded-lg border border-slate-200 dark:border-slate-700">Oct 24, 2024</div>
                            <div className="px-4 py-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-sm font-bold rounded-lg border border-primary/20 dark:border-accent/20 flex items-center gap-2">Print Report <MdNorthEast className="w-4 h-4" /></div>
                        </div>
                    </div>

                    {/* Top Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                        {[
                            { label: "Overall Score", value: "148.5", total: "/200", icon: <MdEmojiEvents className="w-6 h-6" />, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30" },
                            { label: "All India Rank", value: "2,451", total: "/1.2L", icon: <MdBarChart className="w-6 h-6" />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
                            { label: "Total Accuracy", value: "88", total: "%", icon: <MdGpsFixed className="w-6 h-6" />, color: "text-primary", bg: "bg-primary/10 dark:bg-primary/20" },
                            { label: "Avg Time/Q", value: "42", total: "s", icon: <MdAccessTime className="w-6 h-6" />, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                                        {stat.icon}
                                    </div>
                                    <MdNorthEast className="w-4 h-4 text-grayText dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest font-bold text-grayText dark:text-slate-400 mb-1">{stat.label}</p>
                                    <p className="text-2xl font-black text-darkText dark:text-white leading-none">
                                        {stat.value}
                                        <span className="text-sm font-semibold opacity-60 ml-1">{stat.total}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts & Details Area */}
                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Left Column: Subject wise analysis */}
                        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="font-bold text-darkText dark:text-white text-lg flex items-center gap-2"><MdLayers className="w-5 h-5 text-secondary dark:text-accent" /> Sectional Analysis</h4>
                            </div>

                            <div className="space-y-5">
                                {[
                                    { name: "General Intelligence & Reasoning", score: 48, total: 50, color: "bg-primary" },
                                    { name: "Quantitative Aptitude", score: 35, total: 50, color: "bg-amber-500" },
                                    { name: "English Comprehension", score: 42.5, total: 50, color: "bg-blue-500" },
                                    { name: "General Awareness", score: 23, total: 50, color: "bg-rose-500" }
                                ].map((sub, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-semibold text-darkText dark:text-slate-200">{sub.name}</span>
                                            <span className="text-sm font-bold text-darkText dark:text-white">{sub.score} <span className="text-xs text-grayText dark:text-slate-400">/{sub.total}</span></span>
                                        </div>
                                        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(sub.score / sub.total) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className={`h-full rounded-full ${sub.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: AI Suggestion */}
                        <div className="lg:col-span-1 bg-primary rounded-2xl p-6 relative overflow-hidden text-white shadow-lg">


                            <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><MdFlashOn className="w-5 h-5 text-yellow-300" /> AI Insights</h4>

                            <div className="bg-white/10 dark:bg-slate-900/30 rounded-xl p-4 backdrop-blur-md mb-4 border border-white/20">
                                <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-2">Focus Area</p>
                                <p className="font-bold text-white text-base">Geometry & Mensuration</p>
                                <p className="text-sm mt-2 text-white/80">You spent avg 85s per question and accuracy is 40%.</p>
                            </div>

                            <div className="bg-white/10 dark:bg-slate-900/30 rounded-xl p-4 backdrop-blur-md border border-white/20">
                                <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70 mb-2">Study Plan</p>
                                <p className="font-bold text-white text-base">Attempt 5 Sectional Tests</p>
                                <p className="text-sm mt-2 text-white/80">Practicing these can boost your overall score by +8 marks.</p>
                            </div>

                            <Link href="/exams" className="block w-full mt-6 py-3 bg-white text-primary dark:text-secondary font-bold text-center rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                                Start Practice Now
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
