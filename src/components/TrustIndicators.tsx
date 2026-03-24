"use client";

import { motion } from 'framer-motion';
import { MdOutlineGroups, MdOutlineDescription, MdOutlineSupportAgent, MdOutlineVerifiedUser } from 'react-icons/md';

const stats = [
    { icon: <MdOutlineGroups className="w-8 h-8" />, count: "1 Lakh+", label: "Active Aspirants" },
    { icon: <MdOutlineVerifiedUser className="w-8 h-8" />, count: "10,000+", label: "Govt. Selections" },
    { icon: <MdOutlineSupportAgent className="w-8 h-8" />, count: "95%", label: "Success Rate" },
    { icon: <MdOutlineDescription className="w-8 h-8" />, count: "50 Million+", label: "Tests Attempted" },
];

export default function TrustIndicators() {
    return (
        <section className="py-16 bg-white dark:bg-[#0B1120] relative z-10 border-t border-slate-200 dark:border-slate-800/50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-12 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
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
