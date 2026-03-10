"use client";

import { motion } from 'framer-motion';
import { MdAutoAwesome, MdArrowForward, MdGpsFixed } from 'react-icons/md';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">

            {/* Subtle Background (no glow) */}
            <div className="absolute top-0 inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 bg-white dark:bg-[#020617]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-slate-200/70 dark:border-slate-800/70 shadow-sm mb-8 group"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-darkText dark:text-slate-200 tracking-wider uppercase flex items-center gap-1">
                                <MdAutoAwesome className="w-3.5 h-3.5 text-primary" /> India's #1 Learning Platform
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                            className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter leading-[1.05] text-darkText dark:text-white mb-6"
                        >
                            Master Your <br className="hidden lg:block" />
                            <span className="text-primary mt-2 block">Real Potential</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-grayText dark:text-slate-400 font-medium leading-relaxed mb-8 max-w-xl"
                        >
                            Dominate your exams with <span className="text-darkText dark:text-slate-200 font-bold">10,000+ Mock Tests</span>, AI-driven performance analytics, and dynamic study plans tailored just for you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
                        >
                            <Link href="/exams/engineering-entrance/jee/jee-main" className="group relative overflow-hidden w-full sm:w-auto bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-primary/30">
                                <span className="relative z-10 flex items-center gap-2">Explore JEE Main <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                            <Link href="/exams/upsc-civil-services" className="group w-full sm:w-auto bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-darkText dark:text-white font-bold py-3.5 px-8 rounded-2xl hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all flex items-center justify-center gap-2 text-lg">
                                Target UPSC
                            </Link>
                        </motion.div>

                        {/* Top Searches Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full max-w-lg mb-8"
                        >
                            <span className="text-sm font-semibold text-grayText dark:text-slate-400 mr-2 flex items-center gap-1.5"><MdGpsFixed className="w-4 h-4" /> Top Exams:</span>
                            {[
                                { name: 'NEET UG', link: '/exams/medical-entrance/neet-ug' },
                                { name: 'SSC CGL', link: '/exams/ssc-exams/ssc-cgl' },
                                { name: 'Banking', link: '/exams/banking' },
                                { name: 'CUET', link: '/exams/cuet' },
                            ].map((exam) => (
                                <Link
                                    key={exam.name}
                                    href={exam.link}
                                    className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                                >
                                    {exam.name}
                                </Link>
                            ))}
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-14 flex items-center gap-6 border-t border-slate-200/50 dark:border-slate-800/50 pt-8 w-full max-w-lg"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="relative w-12 h-12 rounded-full border-2 border-white dark:border-[#020617] shadow-md overflow-hidden hover:z-10 hover:scale-110 transition-transform">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 mb-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span className="font-extrabold text-lg text-darkText dark:text-white leading-none mt-1">10 Lakh+</span>
                                <span className="text-[11px] font-bold text-grayText dark:text-slate-400 uppercase tracking-widest mt-1">Trusted Students</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Hero Image/Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -15 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
                        className="w-full lg:w-[45%] relative z-10 perspective-1000 flex items-center justify-center lg:justify-end"
                    >
                        <img
                            src="/ssc-cgl-banner.svg"
                            alt="ExamBoost Hero Banner"
                            className="w-full max-w-lg object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                            onError={(e) => {
                                // Fallback just in case, since the user said PNG but we saw SVG
                                (e.target as HTMLImageElement).src = '/logo.png';
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
