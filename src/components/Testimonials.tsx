"use client";

import { motion } from 'framer-motion';
import { MdStar, MdAutoGraph, MdOutlineVerified, MdFormatQuote } from 'react-icons/md';

const testimonials = [
    {
        name: "Ritesh Agarwal",
        exam: "SSC CGL (AIR 45)",
        text: "The TCS pattern interface is a game changer. Their mock tests were slightly tougher, which made the actual paper feel like a breeze. Highly recommended.",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
        score: "Score: 185/200"
    },
    {
        name: "Priya Sharma",
        exam: "IBPS PO (Cleared)",
        text: "The detailed analytics dashboard pointed out my weak areas instantly. Correcting that alone boosted my marks by 15. Best investment for banking.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        score: "Score: 82/100"
    },
    {
        name: "Amit Patel",
        exam: "NEET UG (Score 680)",
        text: "Video solutions for physics numericals are pure gold. EXAMBOOST doesn't just give you the answer key, they explain the entire logic behind it.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        score: "Score: 680/720"
    },
    {
        name: "Sneha Reddy",
        exam: "UPSC CSE Prelims",
        text: "The current affairs mock tests are brilliantly framed. 40% of the indirect questions in the actual exam matched the concepts taught here.",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
        score: "Qualified"
    },
    {
        name: "Vikas Kumar",
        exam: "JEE Advanced",
        text: "If you want to experience the real NTA interface before the exam day, this is the only platform. It completely removed my exam phobia.",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
        score: "Rank 1204"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-[#060D1A] overflow-hidden relative z-10 border-t border-slate-100 dark:border-slate-800">
            {/* Soft Flowing Background */}
            <div className="absolute inset-0 z-0 opacity-50 dark:opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50 via-white to-white dark:from-orange-900/10 dark:via-[#060D1A] dark:to-[#060D1A]"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative z-20 mb-16 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800/50 text-orange-600 font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">
                        <MdAutoGraph className="w-4 h-4" /> Wall of Fame
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white tracking-tight">
                        Loved by <span className="text-[#F97316] relative inline-block">
                            Toppers
                            <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none text-orange-400 opacity-50" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <path d="M5 20 Q 50 -5 95 20 Q 50 45 5 20" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                            </svg>
                        </span>
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Track container */}
            <div className="relative w-full overflow-hidden group py-6 z-20">
                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-white dark:from-[#060D1A] to-transparent z-30 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-white dark:from-[#060D1A] to-transparent z-30 pointer-events-none"></div>

                {/* Marquee wrapper */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-4">
                    {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                        <div
                            key={idx}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-8 rounded-3xl relative transition-transform hover:-translate-y-1"
                        >
                            <MdFormatQuote className="absolute top-6 right-6 w-12 h-12 text-slate-100 dark:text-slate-700/50" />
                            
                            <div className="flex text-orange-400 mb-6">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <MdStar key={i} className="w-5 h-5" />
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-lg mb-8 italic">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 dark:border-slate-600" />
                                <div>
                                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base flex items-center gap-1 font-serif">
                                        {t.name}
                                        <MdOutlineVerified className="text-blue-500 w-4 h-4" />
                                    </h3>
                                    <div className="text-[13px] font-bold text-orange-600 dark:text-orange-400 mt-0.5">{t.exam}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
