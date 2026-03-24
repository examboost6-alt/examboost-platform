"use client";

import { motion } from 'framer-motion';
import { MdAutoStories, MdGpsFixed, MdEmojiEvents, MdPeople, MdArrowForward, MdFlashOn, MdCheckCircleOutline } from 'react-icons/md';
import Link from 'next/link';

const benefits = [
    {
        icon: <MdPeople className="w-6 h-6" />,
        title: "10 Lakh+ Aspirants",
        desc: "Join India's largest community of serious exam aspirants. Learn, compete, and grow together.",
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-800/50"
    },
    {
        icon: <MdGpsFixed className="w-6 h-6" />,
        title: "Precision Analytics",
        desc: "Identify your exact weak areas with our AI-powered performance analysis and get actionable insights.",
        color: "text-orange-600",
        bg: "bg-orange-50 dark:bg-orange-900/30",
        border: "border-orange-200 dark:border-orange-800/50"
    },
    {
        icon: <MdAutoStories className="w-6 h-6" />,
        title: "Updated Content",
        desc: "All mock tests and study materials are strictly aligned with the latest 2024-2025 exam patterns.",
        color: "text-green-600",
        bg: "bg-green-50 dark:bg-green-900/30",
        border: "border-green-200 dark:border-green-800/50"
    },
    {
        icon: <MdEmojiEvents className="w-6 h-6" />,
        title: "Topper's Choice",
        desc: "Over 50,000+ selections in top government and competitive exams last year alone.",
        color: "text-yellow-600",
        bg: "bg-yellow-50 dark:bg-yellow-900/30",
        border: "border-yellow-200 dark:border-yellow-800/50"
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#0B1120] relative z-10 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-5 pointer-events-none mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-6 shadow-sm"
                    >
                        <MdFlashOn className="w-5 h-5 text-[#F97316]" /> ExamBoost Ecosystem
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Why Toppers Choose <span className="text-[#F97316] block mt-2">ExamBoost</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                    >
                        We don't just provide mock tests; we provide a complete ecosystem designed specifically to maximize your score.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-slate-800/80 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group shadow-sm"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${benefit.bg} ${benefit.color} border ${benefit.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">{benefit.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700"
                >
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100 to-transparent dark:from-orange-900/10 pointer-events-none opacity-50"></div>
                    <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>

                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <h3 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-6 leading-tight">Ready to boost your score?</h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 mt-6">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold text-lg"><MdCheckCircleOutline className="w-6 h-6 text-[#F97316]" /> 10,000+ Questions</div>
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold text-lg"><MdCheckCircleOutline className="w-6 h-6 text-[#F97316]" /> Free Registration</div>
                        </div>
                    </div>

                    <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center">
                        <Link href="/free-mock-tests" className="w-full sm:w-auto bg-[#F97316] text-white hover:bg-[#EA580C] font-black py-4 px-10 rounded-full transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                            Start Learning <MdArrowForward className="w-6 h-6" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
