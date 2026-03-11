"use client";

import { motion } from 'framer-motion';
import { MdPlayCircleFilled, MdArrowForward, MdStar, MdCheckCircle } from 'react-icons/md';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500">
            {/* Subtle Grid Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05] z-0" />
            
            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 dark:bg-primary/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6"
                        >
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Over 10 Lakh+ Students Enrolled
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[2.75rem] md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6"
                        >
                            Crack Your Dream Exam with <span className="text-primary">Confidence.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
                        >
                            India's most trusted exam preparation platform. Access <strong className="text-slate-900 dark:text-white font-semibold">10,000+ Mock Tests</strong>, live classes, and personalized AI-driven study plans for SSC, UPSC, Banking & Engineering.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
                        >
                            <Link href="/free-mock-tests" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 text-lg">
                                Start Free Test <MdPlayCircleFilled className="w-6 h-6" />
                            </Link>
                            <Link href="/exams" className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 text-lg">
                                Explore Exams <MdArrowForward className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* Trust Metrics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex items-center gap-8 border-t border-slate-200 dark:border-slate-800 pt-8 w-full max-w-lg"
                        >
                            <div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">4.8/5</div>
                                <div className="flex gap-1 text-amber-400 mb-1">
                                    {[1, 2, 3, 4, 5].map((i) => <MdStar key={i} className="w-4 h-4" />)}
                                </div>
                                <div className="text-sm text-slate-500 font-medium">App Rating</div>
                            </div>
                            <div className="w-px h-12 bg-slate-200 dark:bg-slate-800"></div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">50M+</div>
                                <div className="text-sm text-slate-500 font-medium mt-1">Tests Attempted</div>
                            </div>
                            <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                            <div className="hidden sm:block">
                                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Top 100</div>
                                <div className="text-sm text-slate-500 font-medium mt-1">Rankers in 2025</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Hero Visual (Composite UI) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
                        className="w-full lg:w-[45%] relative z-10 flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
                    >
                        <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square lg:aspect-[4/5] bg-gradient-to-br from-primary/5 to-primary/10 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] border border-white/50 dark:border-slate-700/50 shadow-2xl overflow-hidden flex items-center justify-center">
                            
                            {/* Decorative Background Elements inside the frame */}
                            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-accent/20 blur-[80px] rounded-full" />

                            {/* Floating Mockup Card 1: Score Card */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute top-10 right-4 sm:right-10 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 w-48 sm:w-64 z-20"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <MdCheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium pb-0.5">Mock Test 1</div>
                                        <div className="text-sm font-bold text-slate-900 dark:text-white">Score: 185/200</div>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[92%] rounded-full"></div>
                                </div>
                                <div className="text-[10px] text-slate-400 mt-2 text-right font-medium">Top 2% Percentile</div>
                            </motion.div>

                            {/* Floating Mockup Card 2: Live Class */}
                            <motion.div 
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 left-4 sm:left-6 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 w-56 sm:w-72 z-30"
                            >
                                <div className="w-full h-24 sm:h-32 bg-slate-100 dark:bg-slate-700 rounded-xl mb-3 relative overflow-hidden group">
                                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop" alt="Live Class" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                                            <MdPlayCircleFilled className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute top-2 left-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE
                                    </div>
                                </div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1 truncate">Complete Quant Strategy</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">By Rahul Sir • 1.2k watching</div>
                            </motion.div>

                            {/* Base Image underneath */}
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" alt="Student studying" className="w-full h-full object-cover opacity-60 dark:opacity-40 mix-blend-overlay" />
                        
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
