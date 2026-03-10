"use client";

import { motion } from 'framer-motion';
import { MdPeople, MdArticle, MdHeadset, MdVerifiedUser } from 'react-icons/md';

const stats = [
    { icon: <MdPeople className="w-full h-full" />, count: "1 Lakh+", label: "Active Students" },
    { icon: <MdArticle className="w-full h-full" />, count: "10,000+", label: "Attempted Tests" },
    { icon: <MdHeadset className="w-full h-full" />, count: "24/7", label: "Doubt Support" },
    { icon: <MdVerifiedUser className="w-full h-full" />, count: "100%", label: "Secure Payments" },
];

export default function TrustIndicators() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative z-10 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-primary dark:text-accent flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                <div className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {stat.icon}
                                </div>
                            </div>
                            <h4 className="text-3xl md:text-4xl font-black text-darkText dark:text-white mb-2 tracking-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                {stat.count}
                            </h4>
                            <p className="text-sm font-semibold uppercase tracking-widest text-grayText dark:text-slate-400">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
