"use client";

import { motion } from 'framer-motion';
import { MdPlayCircleFilled, MdCardGiftcard, MdOutlineCheck } from 'react-icons/md';
import Link from 'next/link';

export default function FreeTests() {
    return (
        <section className="py-24 bg-orange-50/50 dark:bg-slate-900/50 transition-colors duration-300 relative z-10 px-4 md:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
            {/* Soft vector shapes in background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100 to-transparent dark:from-orange-900/20 pointer-events-none opacity-60"></div>

            <div className="container mx-auto max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
                >
                    {/* Left Written Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
                            <MdCardGiftcard className="w-4 h-4 text-[#F97316]" /> Start Without Paying
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                            Unlock <span className="text-[#F97316]">Free</span> Premium <br /> Mock Tests
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                            Experience our actual testing environment and powerful post-exam analytics for absolutely zero cost. Establish your baseline now.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            {['Actual TCS Interface', 'Advanced Analytics', 'Current Affairs Vault'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm">
                                    <MdOutlineCheck className="w-5 h-5 text-green-500" /> {item}
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/free-mock-tests"
                            className="inline-flex bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-4 px-8 rounded-full shadow-[0_5px_20px_rgba(249,115,22,0.4)] transform hover:-translate-y-1 transition-all items-center justify-center gap-2 text-lg sm:w-auto w-full group"
                        >
                            Start Free Assessment <MdPlayCircleFilled className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Visual Frame */}
                    <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[500px] aspect-[4/3] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] p-4 sm:p-6 shadow-2xl relative">
                            {/* Inner Screen */}
                            <div className="w-full h-full bg-slate-50 dark:bg-[#060D1A] rounded-[1.5rem] border border-slate-200 dark:border-slate-700 overflow-hidden relative shadow-inner">
                                <div className="absolute top-0 w-full h-10 bg-slate-100 dark:bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-200 dark:border-slate-700">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="pt-12 sm:pt-14 px-4 sm:px-6 pb-6 h-full flex flex-col justify-start">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316]">
                                            <MdPlayCircleFilled className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white font-serif">Free Mock Tests</h4>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 ml-10">Attempt full-length mocks to evaluate your preparation.</p>
                                    
                                    <div className="flex flex-col gap-3">
                                        {/* Test Card 1 */}
                                        <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm group hover:border-[#F97316]/50 transition-colors">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">SSC CGL Tier 1 - Full Mock</div>
                                                    <div className="text-[10px] text-slate-500 mt-1 flex gap-2">
                                                        <span>100 Qs</span> • <span>60 Mins</span>
                                                    </div>
                                                </div>
                                                <div className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[9px] font-bold rounded">LIVE</div>
                                            </div>
                                            <button className="w-full py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-[#F97316] hover:text-white dark:hover:bg-[#F97316] text-slate-700 dark:text-slate-200 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
                                                Start Test Now
                                            </button>
                                        </div>

                                        {/* Test Card 2 */}
                                        <div className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm group hover:border-[#F97316]/50 transition-colors hidden sm:block">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">RRB NTPC Stage 1 CBT</div>
                                                    <div className="text-[10px] text-slate-500 mt-1 flex gap-2">
                                                        <span>100 Qs</span> • <span>90 Mins</span>
                                                    </div>
                                                </div>
                                                <div className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[9px] font-bold rounded">NEW</div>
                                            </div>
                                            <button className="w-full py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-[#F97316] hover:text-white dark:hover:bg-[#F97316] text-slate-700 dark:text-slate-200 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
                                                Start Test Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Badge inside the visual */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-4 -right-4 sm:-right-6 lg:-right-8 bg-[#FDE047] text-slate-900 border border-yellow-400 font-extrabold text-sm px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 transform rotate-6 z-20"
                            >
                                SSC CGL <span className="px-2 py-0.5 bg-yellow-500/40 rounded">100% FREE</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
