"use client";

import { motion } from 'framer-motion';
import { MdPsychology, MdAdsClick, MdEmojiEvents, MdLightbulb, MdAutoAwesome } from 'react-icons/md';

const features = [
    {
        icon: <MdPsychology className="w-8 h-8" />,
        title: "AI Performance Analysis",
        desc: "Pinpoint weak topics, calculate accuracy rates, and get tailored study plans powered by machine learning algorithms.",
        color: "text-primary",
        bgClass: "bg-primary/10 dark:bg-primary/20",
        ringStyle: "ring-1 ring-slate-200 dark:ring-slate-800"
    },
    {
        icon: <MdAdsClick className="w-8 h-8" />,
        title: "Real Exam Simulation",
        desc: "Experience the exact real-exam interface (TCS/NTA pattern) so you never panic on the D-day.",
        color: "text-secondary",
        bgClass: "bg-secondary/10 dark:bg-secondary/20",
        ringStyle: "ring-1 ring-slate-200 dark:ring-slate-800"
    },
    {
        icon: <MdEmojiEvents className="w-8 h-8" />,
        title: "All India Rank & Leaderboard",
        desc: "Compete with lakhs of students in Live Tests and gauge your actual standing before the real exam.",
        color: "text-accent",
        bgClass: "bg-accent/10 dark:bg-accent/20",
        ringStyle: "ring-1 ring-slate-200 dark:ring-slate-800"
    },
    {
        icon: <MdLightbulb className="w-8 h-8" />,
        title: "Detailed Solutions & Video Logic",
        desc: "Don't just know the answer, understand the logic. Get step-by-step text and video solutions for tough questions.",
        color: "text-secondary",
        bgClass: "bg-secondary/10 dark:bg-secondary/20",
        ringStyle: "ring-1 ring-slate-200 dark:ring-slate-800"
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden z-10">

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border-slate-200/70 dark:border-slate-800/70 text-darkText dark:text-slate-200 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm"
                    >
                        <MdAutoAwesome className="w-4 h-4 text-primary animate-pulse" /> Why EXAMBOOST is Different
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[4rem] font-black text-darkText dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Designed to Make You <br className="hidden md:block" />
                        <span className="text-primary mt-2 block">Unstoppable</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-grayText dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Every feature has been meticulously crafted to provide you the absolute edge in your competitive exam preparation.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 50 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative flex flex-col md:flex-row items-center md:items-start gap-8 p-8 lg:p-10 rounded-[2rem] glass-panel transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-all duration-700 -z-10" />

                            <div className={`shrink-0 w-24 h-24 rounded-[2rem] flex items-center justify-center p-0.5 relative group-hover:rotate-6 transition-transform duration-500 ${feature.ringStyle}`}>
                                <div className={`w-full h-full rounded-[2rem] ${feature.bgClass} flex items-center justify-center border border-white/20 dark:border-white/5 backdrop-blur-xl`}>
                                    <div className={`${feature.color} group-hover:scale-110 transition-transform duration-500`}>{feature.icon}</div>
                                </div>
                                <div className="absolute inset-0 bg-white dark:bg-primary opacity-0 group-hover:opacity-10 rounded-[2rem] transition-opacity duration-300" />
                            </div>

                            <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                                <h3 className="text-2xl font-bold text-darkText dark:text-white mb-3 group-hover:text-primary transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-grayText dark:text-slate-400 font-medium leading-relaxed text-base">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
