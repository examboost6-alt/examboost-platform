"use plains";
// Removing "use client" as we can keep it standard or use client if needed for animations, but I'll add framer-motion so I will keep "use client"
"use client";

import { motion } from 'framer-motion';
import { MdAutoStories, MdGpsFixed, MdEmojiEvents, MdPeople, MdArrowForward, MdFlashOn, MdCheckCircleOutline } from 'react-icons/md';
import Link from 'next/link';

const benefits = [
    {
        icon: <MdPeople className="w-6 h-6" />,
        title: "10 Lakh+ Aspirants",
        desc: "Join India's largest community of serious exam aspirants. Learn, compete, and grow together.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: <MdGpsFixed className="w-6 h-6" />,
        title: "Precision Analytics",
        desc: "Identify your exact weak areas with our AI-powered performance analysis and get actionable insights.",
        color: "text-rose-500",
        bg: "bg-rose-500/10"
    },
    {
        icon: <MdAutoStories className="w-6 h-6" />,
        title: "Updated Content",
        desc: "All mock tests and study materials are strictly aligned with the latest 2024-2025 exam patterns.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        icon: <MdEmojiEvents className="w-6 h-6" />,
        title: "Topper's Choice",
        desc: "Over 50,000+ selections in top government and competitive exams last year alone.",
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 text-sm font-bold tracking-widest uppercase mb-6 text-darkText dark:text-slate-200"
                    >
                        <MdFlashOn className="w-4 h-4 text-primary dark:text-accent" /> The ExamBoost Advantage
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-darkText dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Why Toppers Choose <span className="text-primary">ExamBoost</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-grayText dark:text-slate-400 font-medium leading-relaxed"
                    >
                        We don't just provide mock tests; we provide a complete ecosystem designed specifically to maximize your score and fix your weaknesses.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                            className="bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-darkText dark:text-white mb-4">{benefit.title}</h3>
                            <p className="text-grayText dark:text-slate-400 font-medium leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 bg-primary rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to boost your score?</h3>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
                            <div className="flex items-center gap-2 text-white/90 font-semibold"><MdCheckCircleOutline className="w-5 h-5 text-accent" /> 10,000+ Free Questions</div>
                            <div className="flex items-center gap-2 text-white/90 font-semibold"><MdCheckCircleOutline className="w-5 h-5 text-accent" /> No Credit Card Required</div>
                        </div>
                    </div>

                    <Link href="/free-mock-tests" className="relative z-10 shrink-0 bg-white text-primary hover:bg-slate-50 font-bold py-4 px-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg group cursor-pointer inline-flex">
                        Start Learning Free <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
