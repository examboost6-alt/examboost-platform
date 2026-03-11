"use client";

import { motion } from 'framer-motion';
import { MdStar, MdAutoGraph, MdOutlineVerified } from 'react-icons/md';

const testimonials = [
    {
        name: "Ritesh Agarwal",
        exam: "SSC CGL (AIR 45)",
        text: "The TCS pattern interface is a game changer. Their mock tests were actually slightly tougher than the real exam, which made the actual paper feel like a breeze. Highly recommended for Serious Aspirants.",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
        score: "Score: 185/200"
    },
    {
        name: "Priya Sharma",
        exam: "IBPS PO (Cleared)",
        text: "The detailed analytics dashboard pointed out that I was spending 2 minutes on puzzles that shouldn't take more than 45 seconds. Correcting that alone boosted my marks by 15. Best investment for banking.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        score: "Score: 82/100"
    },
    {
        name: "Amit Patel",
        exam: "NEET UG (Score 680)",
        text: "Video solutions for physics numericals are pure gold. EXAMBOOST doesn't just give you the answer key, they explain the entire logic behind it. Thank you to the dedicated faculty members.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        score: "Score: 680/720"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-[#060D1A] transition-colors duration-500 relative z-10 border-t border-slate-100 dark:border-slate-800">

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6"
                        >
                            <MdAutoGraph className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Results that speak</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                        >
                            Hear From The <span className="text-primary block mt-2">Rank Holders</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                        >
                            Join thousands of students who achieved their dream ranks by trusting ExamBoost's scientifically designed mock tests.
                        </motion.p>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
                        <div className="flex -space-x-3">
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover" />
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover" />
                            <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-white">
                                10k+
                            </div>
                        </div>
                        <div>
                            <div className="flex text-amber-500 mb-1">
                                {[1,2,3,4,5].map(i=><MdStar key={i} />)}
                            </div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Rated 4.9/5 overall</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-slate-50 dark:bg-slate-800/60 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 flex flex-col group relative overflow-hidden"
                        >
                            
                            <div className="absolute top-0 right-0 p-6 text-9xl leading-none text-slate-200/50 dark:text-slate-700/50 select-none font-serif -z-0">
                                "
                            </div>

                            <div className="flex gap-1 mb-6 text-amber-500 relative z-10 w-fit p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <MdStar key={i} className="w-4 h-4" />
                                ))}
                            </div>

                            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed flex-1 text-lg z-10 mb-8 w-full italic">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 bg-white dark:bg-slate-800/90 p-3 rounded-2xl border border-slate-200/50 dark:border-slate-700 shadow-sm z-10">
                                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover group-hover:scale-105 transition-transform" />
                                <div>
                                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight flex items-center gap-1">
                                        {t.name}
                                        <MdOutlineVerified className="text-primary w-4 h-4" />
                                    </h3>
                                    <div className="text-[13px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">{t.exam}</div>
                                    <div className="text-xs text-slate-500 font-medium">{t.score}</div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
