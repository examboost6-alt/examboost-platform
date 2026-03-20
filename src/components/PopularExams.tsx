"use client";

import { motion } from 'framer-motion';
import { MdPlayArrow, MdPeopleOutline, MdTrendingUp } from 'react-icons/md';
import Link from 'next/link';

const popularExams = [
    { title: "SSC CGL", subtitle: "Tier 1 & 2", enrolled: "5.2L", tags: ["New Pattern", "Live"], color: "bg-blue-500", img: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=600&auto=format&fit=crop", link: "/series/mock-ssc-1" },
    { title: "UPSC CSE", subtitle: "Prelims 2026", enrolled: "4.1L", tags: ["CSAT", "GS Paper I"], color: "bg-emerald-600", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop", link: "/series/mock-upsc-1" },
    { title: "JEE Main", subtitle: "2026 Preparation", enrolled: "2.8L", tags: ["NTA Interface", "PYQs"], color: "bg-orange-500", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop", link: "/series/mock-eng-1" },
    { title: "NEET UG", subtitle: "Medical Entrance", enrolled: "3.5L", tags: ["NCERT Based", "Biology"], color: "bg-rose-500", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop", link: "/series/mock-med-1" },
];

export default function PopularExams() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B1120] relative z-10 border-t border-slate-100 dark:border-slate-800/50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs tracking-wider uppercase mb-5"
                        >
                            <MdTrendingUp className="w-4 h-4 text-primary" /> Most Popular
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
                        >
                            Trending <span className="text-primary">Test Series</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                        >
                            Join millions of aspirants attempting these high-competition mock tests today.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <Link href="/exams" className="group flex items-center gap-2 text-primary font-bold text-lg hover:text-primary/80 transition-colors">
                            View All Exams <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {popularExams.map((exam, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-48 sm:h-52 overflow-hidden w-full">
                                <img 
                                    src={exam.img} 
                                    alt={exam.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {exam.tags.slice(0, 1).map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute bottom-4 left-5 right-5">
                                    <div className="text-white/80 font-semibold text-sm mb-0.5">{exam.subtitle}</div>
                                    <h3 className="text-white font-extrabold text-2xl tracking-tight leading-tight">{exam.title}</h3>
                                </div>
                            </div>

                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium text-sm">
                                        <MdPeopleOutline className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                                        <span className="text-slate-900 dark:text-slate-200 font-bold">{exam.enrolled}</span> Enrolled
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[1,2,3].map((num) => (
                                            <div key={num} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden bg-slate-200">
                                                <img src={`https://i.pravatar.cc/100?img=${i * 3 + num}`} alt="Student" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link href={exam.link} className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-xl font-bold hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300">
                                    Start Practice <MdPlayArrow className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 md:hidden flex justify-center">
                    <Link href="/exams" className="inline-flex items-center gap-2 text-primary dark:text-accent font-bold text-lg hover:underline">
                        View All Exams &rarr;
                    </Link>
                </div>

            </div>
        </section>
    );
}
