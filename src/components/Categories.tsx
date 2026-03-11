"use client";

import { motion } from 'framer-motion';
import {
    MdWork, MdMedicalServices, MdAccountBalance, MdTrendingUp,
    MdMenuBook, MdTrain, MdPeople, MdShield, MdBalance,
    MdAdsClick, MdSchool, MdLocationOn, MdCategory
} from 'react-icons/md';
import Link from 'next/link';

const categories = [
    { icon: <MdTrendingUp className="w-8 h-8" />, name: "SSC Exams", count: "1,500+", desc: "CGL, CHSL, MTS & more", href: "/exams/ssc-exams" },
    { icon: <MdMedicalServices className="w-8 h-8" />, name: "Medical", count: "800+", desc: "NEET UG, AIIMS, JIPMER", href: "/exams/medical-entrance" },
    { icon: <MdWork className="w-8 h-8" />, name: "Banking", count: "1,200+", desc: "IBPS, SBI PO & Clerk", href: "/exams/banking" },
    { icon: <MdAccountBalance className="w-8 h-8" />, name: "UPSC CSE", count: "500+", desc: "Prelims & Mains Series", href: "/exams/upsc-civil-services" },
    { icon: <MdAdsClick className="w-8 h-8" />, name: "Engineering", count: "2,000+", desc: "JEE Main, Advanced, BITSAT", href: "/exams/engineering-entrance" },
    { icon: <MdTrain className="w-8 h-8" />, name: "Railways", count: "1,100+", desc: "RRB NTPC, Group D, ALP", href: "/exams/railways" },
    { icon: <MdLocationOn className="w-8 h-8" />, name: "State PSC", count: "950+", desc: "UPPSC, BPSC, MPSC, RPSC", href: "/exams/state-psc" },
    { icon: <MdShield className="w-8 h-8" />, name: "Defense / Police", count: "850+", desc: "NDA, CDS, UP Police", href: "/exams/police" },
    { icon: <MdSchool className="w-8 h-8" />, name: "CUET", count: "1,800+", desc: "UG & PG admissions", href: "/exams/cuet" }
];

export default function Categories() {
    return (
        <section className="py-24 bg-slate-50/50 dark:bg-[#060D1A] relative z-10 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6"
                    >
                        <MdCategory className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Top Categories</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
                    >
                        Find Your Targeted <span className="text-primary">Exam</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Explore highly relevant, syllabus-aligned mock tests across 9+ major exam categories designed by top educators.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <Link href={cat.href} className="group block h-full bg-white dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden relative">
                                
                                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-[0.03] group-hover:scale-150 transition-transform duration-700 -z-0 pointer-events-none">
                                    {cat.icon}
                                </div>

                                <div className="relative z-10 flex items-start gap-5">
                                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 dark:bg-slate-700 flex items-center justify-center text-primary dark:text-white mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-primary/20 dark:border-slate-600">
                                        {cat.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                            {cat.name}
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-1 mb-3">
                                            {cat.desc}
                                        </p>
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:bg-primary/5 group-hover:border-primary/20 dark:group-hover:border-primary/30">
                                            {cat.count} Tests <span className="text-primary dark:text-accent">&rarr;</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/exams" className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold py-3 px-8 rounded-xl hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all gap-2 text-lg">
                        Browse All Exams
                    </Link>
                </div>
            </div>
        </section>
    );
}
