"use client";

import { motion } from 'framer-motion';
import { MdPlayCircleOutline, MdCardGiftcard, MdCheckCircleOutline } from 'react-icons/md';
import Link from 'next/link';

const freeTests = [
    { exam: 'SSC CGL Tier 1', tags: ['Quantitative Aptitude', 'Reasoning'] },
    { exam: 'IBPS PO Prelims', tags: ['English', 'Reasoning'] },
    { exam: 'UPSC CSE Prelims', tags: ['History', 'Polity'] },
    { exam: 'NEET UG 2026', tags: ['Physics', 'Botany'] }
];

export default function FreeTests() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-bold text-xs tracking-widest uppercase mb-6"
                        >
                            <MdCardGiftcard className="w-4 h-4" /> Try Before You Buy
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold tracking-tight text-darkText dark:text-white leading-[1.1] mb-6"
                        >
                            Take 5 Free Full-Length <span className="text-primary dark:text-accent">Mock Tests</span> Today
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-grayText dark:text-slate-400 font-medium leading-relaxed mb-8"
                        >
                            Experience the real exam environment with our free mock tests. No credit card required. Get instant AI detailed analysis and All India Rank tracking.
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 mb-10"
                        >
                            {['Real Exam Interface Simulation', 'Detailed Text & Video Solutions', 'AI Weakness Detection Engine'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent flex items-center justify-center">
                                        <MdCheckCircleOutline className="w-4 h-4" />
                                    </div>
                                    <span className="text-darkText dark:text-slate-200 font-semibold">{item}</span>
                                </li>
                            ))}
                        </motion.ul>

                        <Link
                            href="/free-mock-tests"
                            className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg cursor-pointer"
                        >
                            Attempt Free Test Now <MdPlayCircleOutline className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {freeTests.map((test, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="bg-white dark:bg-slate-900/50 rounded-3xl p-6 sm:p-8 flex flex-col relative group hover:-translate-y-2 transition-all duration-500 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl overflow-hidden"
                                >
                                    {/* Gradient Border top accent */}
                                    <div className={`absolute top-0 inset-x-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                                    <div className="mb-6 flex-grow">
                                        <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-black tracking-widest uppercase text-grayText dark:text-slate-400 mb-3 inline-block">Free Access</span>
                                        <h3 className="font-extrabold text-darkText dark:text-white text-xl group-hover:text-primary transition-colors mb-4">{test.exam}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {test.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 rounded-lg font-bold">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href="/free-mock-tests" className="w-full py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-primary dark:group-hover:bg-primary text-slate-600 dark:text-slate-300 group-hover:text-white font-bold border-transparent transition-all duration-300 text-sm flex justify-center items-center gap-2 group-hover:shadow-md cursor-pointer">
                                        Start Now <MdPlayCircleOutline className="w-4 h-4" />
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
