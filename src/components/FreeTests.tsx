"use client";

import { motion } from 'framer-motion';
import { MdPlayCircleOutline, MdCardGiftcard, MdCheckCircle } from 'react-icons/md';
import Link from 'next/link';

const freeTests = [
    { exam: 'SSC CGL Tier 1', tags: ['Quant', 'Reasoning'], users: "1.2k today" },
    { exam: 'IBPS PO Prelims', tags: ['English', 'Data Int.'], users: "850 today" },
    { exam: 'UPSC CSE Prelims', tags: ['History', 'Polity'], users: "3.5k today" },
    { exam: 'NEET UG 2026', tags: ['Physics', 'Botany'], users: "2k today" }
];

export default function FreeTests() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#060D1A] transition-colors duration-300 border-t border-slate-200 dark:border-slate-800 relative z-10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

                    {/* Left Written Content */}
                    <div className="w-full lg:w-[45%]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-bold text-xs tracking-widest uppercase mb-6"
                        >
                            <MdCardGiftcard className="w-4 h-4" /> Try Before You Buy
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
                        >
                            Unlock <span className="text-primary dark:text-accent">Free Full-Length</span> Mock Tests
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8"
                        >
                            Experience our premium testing environment for absolutely zero cost. Find out your baseline score before you officially start your preparation.
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-5 mb-10"
                        >
                            {['Actual exam pattern (TCS/NTA interface)', 'Detailed post-test analytics & text solutions', 'Compare rank with last year cut-offs'].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="shrink-0 w-6 h-6 mt-0.5 text-primary dark:text-accent">
                                        <MdCheckCircle className="w-6 h-6" />
                                    </div>
                                    <span className="text-slate-800 dark:text-slate-200 font-semibold text-lg">{item}</span>
                                </li>
                            ))}
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                href="/free-mock-tests"
                                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-primary/30 transform transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg cursor-pointer border border-primary/20"
                            >
                                Start Free Assessment <MdPlayCircleOutline className="w-6 h-6" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Grid of Mock Tests */}
                    <div className="w-full lg:w-[55%]">
                        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                            {freeTests.map((test, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="bg-white dark:bg-slate-800 rounded-3xl p-6 flex flex-col relative group hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-primary/50 shadow-sm hover:shadow-2xl overflow-hidden"
                                >
                                    <div className="mb-6 flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] font-black tracking-widest uppercase text-slate-500 dark:text-slate-400">
                                                Free Pass
                                            </span>
                                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-800">
                                                {test.users}
                                            </span>
                                        </div>
                                        
                                        <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">{test.exam}</h3>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {test.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[11px] text-slate-600 dark:text-slate-300 rounded-lg font-bold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href="/free-mock-tests" className="w-full py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 group-hover:bg-primary dark:group-hover:bg-primary text-slate-700 dark:text-slate-200 group-hover:text-white font-bold border border-slate-200 dark:border-slate-600 group-hover:border-transparent transition-all duration-300 text-sm flex justify-center items-center gap-2 group-hover:shadow-lg hover:shadow-primary/20">
                                        Attempt Now <MdPlayCircleOutline className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
