"use client";

import { motion } from 'framer-motion';
import { MdOutlineGroups, MdOutlineDescription, MdOutlineSupportAgent, MdOutlineSecurity } from 'react-icons/md';

const stats = [
    { icon: <MdOutlineGroups className="w-8 h-8" />, count: "10 Lakh+", label: "Happy Students" },
    { icon: <MdOutlineDescription className="w-8 h-8" />, count: "50 Million+", label: "Tests Attempted" },
    { icon: <MdOutlineSupportAgent className="w-8 h-8" />, count: "24/7", label: "Mentor Support" },
    { icon: <MdOutlineSecurity className="w-8 h-8" />, count: "100%", label: "Secure Platform" },
];

export default function TrustIndicators() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-[#0B1120] relative z-10 border-t border-slate-200 dark:border-slate-800/50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                {/* Exam Board / Partner Strip (Fake logos for design feel) */}
                <div className="mb-20">
                    <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Trusted by Aspirants Preparing For</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Fake board representations for visual trust */}
                        <div className="flex items-center gap-2 font-black text-2xl text-slate-800 dark:text-white">
                            <span className="w-8 h-8 bg-slate-800 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-slate-900 text-sm">N</span> NTA
                        </div>
                        <div className="flex items-center gap-2 font-black text-2xl text-slate-800 dark:text-white">
                            <span className="w-8 h-8 border-2 border-slate-800 dark:border-white rounded-full flex items-center justify-center text-sm">s</span> SSC
                        </div>
                        <div className="flex items-center gap-2 font-black text-2xl text-slate-800 dark:text-white">
                            <span className="w-8 h-8 bg-slate-800 dark:bg-white text-white dark:text-slate-900 rounded-sm flex items-center justify-center text-sm">U</span> UPSC
                        </div>
                        <div className="flex items-center gap-2 font-black text-2xl text-slate-800 dark:text-white">
                            IBPS<span className="w-2 h-2 bg-slate-800 dark:bg-white rounded-full"></span>
                        </div>
                        <div className="flex items-center gap-2 font-black text-2xl text-slate-800 dark:text-white">
                            <span className="italic">RRB</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                                {stat.count}
                            </h4>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
