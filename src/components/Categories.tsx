"use client";

import { motion } from 'framer-motion';
import {
    MdWork, MdMedicalServices, MdAccountBalance, MdTrendingUp,
    MdMenuBook, MdTrain, MdPeople, MdShield, MdBalance,
    MdAdsClick, MdSchool, MdLocationOn, MdCategory
} from 'react-icons/md';
import Link from 'next/link';

const categories = [
    { icon: <MdTrendingUp className="w-6 h-6" />, name: "SSC Exams", count: "1,500+", href: "/exams/ssc-exams" },
    { icon: <MdMedicalServices className="w-6 h-6" />, name: "Medical", count: "800+", href: "/exams/medical-entrance" },
    { icon: <MdWork className="w-6 h-6" />, name: "Banking", count: "1,200+", href: "/exams/banking" },
    { icon: <MdAccountBalance className="w-6 h-6" />, name: "UPSC CSE", count: "500+", href: "/exams/upsc-civil-services" },
    { icon: <MdAdsClick className="w-6 h-6" />, name: "Engineering", count: "2,000+", href: "/exams/engineering-entrance" },
    { icon: <MdTrain className="w-6 h-6" />, name: "Railways", count: "1,100+", href: "/exams/railways" },
    { icon: <MdLocationOn className="w-6 h-6" />, name: "State PSC", count: "950+", href: "/exams/state-psc" },
    { icon: <MdShield className="w-6 h-6" />, name: "Police", count: "850+", href: "/exams/police" },
    { icon: <MdBalance className="w-6 h-6" />, name: "Law / CLAT", count: "300+", href: "/exams/law" },
    { icon: <MdPeople className="w-6 h-6" />, name: "MBA / CAT", count: "450+", href: "/exams/mba" },
    { icon: <MdMenuBook className="w-6 h-6" />, name: "Teaching", count: "650+", href: "/exams/teaching" },
    { icon: <MdSchool className="w-6 h-6" />, name: "CUET", count: "1,800+", href: "/exams/cuet" }
];

export default function Categories() {
    return (
        <section className="py-24 bg-transparent transition-colors duration-500 border-t border-primary/5 dark:border-primary/10 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 text-darkText dark:text-slate-200 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm"
                    >
                        <MdCategory className="w-4 h-4" /> 12+ Categories
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter text-darkText dark:text-white leading-[1.1] mb-6"
                    >
                        Explore Test Series by <span className="text-primary">Category</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-grayText dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Find the perfect mock tests tailored for your specific exam. Over <strong className="text-darkText dark:text-slate-200">10,000+ tests</strong> updated with the latest syllabus.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 relative z-10">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.5, type: "spring", stiffness: 100 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative"
                        >
                            <Link href={cat.href} className="block h-full outline-none">
                                <div className="relative rounded-3xl glass-card overflow-hidden h-full border border-slate-200/70 dark:border-slate-800/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                                    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-0 dark:opacity-0 rounded-bl-full group-hover:opacity-10 dark:group-hover:opacity-20 group-hover:scale-150 transition-all duration-700 ease-in-out`}></div>

                                    <div className="relative z-10 flex flex-col items-center p-6 sm:p-8">
                                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-primary text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                            <span className="relative z-10">{cat.icon}</span>
                                        </div>

                                        <h3 className="text-base sm:text-lg text-center font-bold text-darkText dark:text-white mb-2 sm:mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{cat.name}</h3>
                                        <p className="text-xs sm:text-sm whitespace-nowrap font-bold text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50">{cat.count} Tests</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
