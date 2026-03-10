"use client";

import { motion } from 'framer-motion';
import { MdStar, MdFormatQuote, MdAutoAwesome } from 'react-icons/md';

const testimonials = [
    {
        name: "Ravi Kumar",
        exam: "SSC CGL (AIR 45)",
        text: "The exact interface simulation gave me immense confidence. The AI analysis helped me focus on my weak areas in Reasoning.",
        img: "https://i.pravatar.cc/150?img=11",
        rating: 5
    },
    {
        name: "Priya Sharma",
        exam: "IBPS PO (Cleared)",
        text: "The level of mock tests is exactly what is needed to clear Mains. The time-spent analytics was an eye-opener.",
        img: "https://i.pravatar.cc/150?img=5",
        rating: 5
    },
    {
        name: "Amit Patel",
        exam: "NEET UG (Score 680)",
        text: "Video solutions for physics numericals are pure gold. EXAMBOOST is definitely the best investment for NEET.",
        img: "https://i.pravatar.cc/150?img=12",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-transparent transition-colors duration-500 relative z-10 overflow-hidden">

            {/* Premium Solid Background */}
            <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50 pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border-slate-200/70 dark:border-slate-800/70 text-darkText dark:text-slate-200 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm"
                    >
                        <MdAutoAwesome className="w-4 h-4 text-primary animate-pulse" /> Student Success Stories
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-black text-darkText dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Hear From The <span className="text-primary">Toppers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-grayText dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Join thousands of students who achieved their dream ranks with EXAMBOOST.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 50 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="glass-panel rounded-3xl p-8 relative flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-slate-200/70 dark:border-slate-800/70 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-all duration-700 -z-10" />

                            <div className="absolute top-6 right-8 text-primary/10 dark:text-primary/10 transition-colors duration-500 group-hover:text-primary/20">
                                <MdFormatQuote className="w-16 h-16 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-500" />
                                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full border-2 border-slate-100 dark:border-slate-800 shadow-sm object-cover relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-darkText dark:text-white text-lg group-hover:text-primary transition-colors duration-300">{t.name}</h3>
                                    <p className="text-sm font-bold text-primary dark:text-accent tracking-wide">{t.exam}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-5 relative z-10 text-amber-400">
                                {[...Array(t.rating)].map((_, i) => (
                                    <MdStar key={i} className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                                ))}
                            </div>

                            <p className="text-grayText dark:text-slate-300 font-medium leading-relaxed flex-1 relative z-10 text-[15px]">
                                "{t.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
