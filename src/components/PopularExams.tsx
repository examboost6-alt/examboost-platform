"use client";

import { motion } from 'framer-motion';
import { MdPlayCircleOutline, MdPeople } from 'react-icons/md';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const popularExams = [
    { title: "JEE Main 2026", enrolled: "2.5L+", date: "Live Now", banner: "/jee-mains-banner.svg", link: "/exams/engineering-entrance/jee/jee-main" },
    { title: "NEET UG", enrolled: "3.2L+", date: "Attempt 2", banner: "/neet-banner.svg", link: "/exams/medical-entrance/neet-ug" },
    { title: "SSC CGL Tier 1", enrolled: "5L+", date: "Live Now", banner: "/ssc-cgl-banner.svg", link: "/exams/ssc-exams/ssc-cgl" },
    { title: "IBPS PO Prelims", enrolled: "1.8L+", date: "Coming Soon", banner: "/banking-banner.svg", link: "/exams/banking" },
    { title: "CAT 2025", enrolled: "90k+", date: "Latest Pattern", banner: "", link: "/exams/mba" },
    { title: "UPSC CSE Prelims", enrolled: "4L+", date: "Mock #15", banner: "/upsc-banner.svg", link: "/exams/upsc-civil-services" },
];

export default function PopularExams() {
    // Simple horizontal scrolling logic (Optional depending on design)
    return (
        <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-tr-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-darkText dark:text-white leading-[1.1] mb-4">
                            Trending <span className="text-primary dark:text-accent">Test Series</span>
                        </h2>
                        <p className="text-grayText dark:text-slate-400 text-lg font-medium">Join lakhs of aspirants taking these high-competition mock tests right now.</p>
                    </div>
                    <Link href="/exams" className="hidden md:flex text-primary dark:text-accent font-bold hover:text-secondary hover:underline transition-colors shrink-0">
                        View All Exams &rarr;
                    </Link>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {popularExams.map((exam, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] shrink-0 snap-center rounded-3xl p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 shadow-lg flex flex-col relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                        >
                            {exam.banner ? (
                                <img
                                    src={exam.banner}
                                    alt={exam.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.08] pointer-events-none select-none"
                                />
                            ) : null}

                            <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/70 pointer-events-none" />

                            {/* Card Top Accent */}
                            <div className={`absolute top-0 inset-x-0 h-1 bg-primary rounded-t-3xl opacity-80`} />

                            <div className="flex justify-between items-start mb-6">
                                <div className={`px-3 py-1 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm relative z-10`}>
                                    {exam.date === 'Live Now' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                                    {exam.date}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-darkText dark:text-white mb-4 leading-tight relative z-10">
                                {exam.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-8 text-grayText dark:text-slate-400 font-medium relative z-10">
                                <MdPeople className="w-5 h-5 text-primary/70 dark:text-accent/70" />
                                <span><strong className="text-darkText dark:text-white">{exam.enrolled}</strong> Enrolled</span>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 relative z-10">
                                <Link href={exam.link} className="w-full py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-primary dark:hover:bg-accent hover:text-white hover:border-primary dark:hover:border-accent text-darkText dark:text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md">
                                    Start Test <MdPlayCircleOutline className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
