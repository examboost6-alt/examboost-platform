"use client";

import { motion } from 'framer-motion';
import { MdArrowForward, MdChevronRight } from 'react-icons/md';
import Link from 'next/link';

const categories = [
    { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop", name: "Medical (NEET)", count: "800+ Tests", desc: "NEET UG, AIIMS", href: "/exams/medical-entrance", color: "from-blue-500/80" },
    { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", name: "Engineering (JEE)", count: "2,000+ Tests", desc: "JEE Main, Advanced", href: "/exams/engineering-entrance", color: "from-orange-500/80" },
    { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop", name: "UPSC CSE", count: "500+ Tests", desc: "Prelims & Mains Series", href: "/exams/upsc-civil-services", color: "from-emerald-500/80" },
    { image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", name: "Banking", count: "1,200+ Tests", desc: "IBPS, SBI PO & Clerk", href: "/exams/banking", color: "from-purple-500/80" },
    { image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600&auto=format&fit=crop", name: "SSC Exams", count: "1,500+ Tests", desc: "CGL, CHSL, MTS", href: "/exams/ssc-exams", color: "from-rose-500/80" },
    { image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop", name: "State PSC", count: "950+ Tests", desc: "UPPSC, BPSC, MPSC", href: "/exams/state-psc", color: "from-cyan-500/80" }
];

export default function Categories() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative z-10 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
                
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 shadow-sm mb-4"
                        >
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Target Exams</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                        >
                            Explore Target <span className="text-[#F97316]">Categories</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/exams" className="group inline-flex items-center gap-2 text-[#F97316] font-bold hover:text-[#EA580C] transition-colors text-lg">
                            See All Categories <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative -mx-4 md:mx-0">
                    <div className="flex overflow-x-auto pb-8 pt-4 px-4 md:px-0 gap-6 snap-x snap-mandatory hide-scroll-bar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                viewport={{ once: true, margin: "50px" }}
                                className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[350px]"
                            >
                                <Link href={cat.href} className="group block relative h-[420px] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="absolute inset-0">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                                    
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white font-bold text-xs mb-3 border border-white/30">
                                                {cat.count}
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-2 shadow-sm font-serif">
                                                {cat.name}
                                            </h3>
                                            <p className="text-slate-100 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {cat.desc}
                                            </p>
                                            <div className="flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 relative">
                                                Explore <MdChevronRight className="w-5 h-5 bg-white/20 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
            <style jsx global>{`
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
