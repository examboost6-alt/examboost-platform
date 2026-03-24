"use client";

import { motion } from 'framer-motion';
import { MdStar, MdPeople, MdOutlineTimer, MdShoppingCart } from 'react-icons/md';
import Link from 'next/link';

const testSeries = [
    {
        id: 'mock-med-1',
        title: "ExamBoost NEET Shourya Test Series 2026",
        examType: "Medical",
        tests: 20,
        rating: 4.8,
        students: "45,000+",
        price: 2999,
        originalPrice: 4999,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 'mock-eng-1',
        title: "Shikhar JEE Main 2026 Test Series",
        examType: "Engineering",
        tests: 15,
        rating: 4.9,
        students: "38,000+",
        price: 1399,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 'mock-eng-2',
        title: "Vijay IIT Advance 2026 Test Series",
        examType: "Engineering",
        tests: 35,
        rating: 4.7,
        students: "22,000+",
        price: 1999,
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 'mock-ssc-1',
        title: "SSC CGL Tier 1 & 2 Complete Mock Tests",
        examType: "SSC Exams",
        tests: 200,
        rating: 4.6,
        students: "85,000+",
        price: 499,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    }
];

export default function TestSeriesSection() {
    return (
        <section className="py-24 bg-white dark:bg-[#060D1A] relative z-10 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800/50 shadow-sm mb-4"
                        >
                            <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">Premium Tests</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-serif font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                        >
                            Top Recommended <span className="text-[#F97316]">Test Series</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testSeries.map((series, idx) => (
                        <motion.div
                            key={series.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-800/80 rounded-[1.5rem] overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-orange-500/5 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                        >
                            <Link href={`/series/${series.id}`} className="flex flex-col flex-grow">
                                <div className="relative aspect-video overflow-hidden border-b border-slate-100 dark:border-slate-700">
                                    <img src={series.image} alt={series.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm border border-slate-100 dark:border-slate-700">
                                        {series.examType}
                                    </div>
                                </div>
                                
                                <div className="p-5 md:p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-[#F97316] transition-colors">
                                        {series.title}
                                    </h3>
                                    
                                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold pb-4 border-b border-slate-100 dark:border-slate-700">
                                        <div className="flex items-center gap-1.5"><MdOutlineTimer className="w-4 h-4 text-slate-400" /> {series.tests} Tests</div>
                                        <div className="flex items-center gap-1.5"><MdPeople className="w-4 h-4 text-slate-400" /> {series.students}</div>
                                    </div>
                                    
                                    <div className="flex items-center gap-1.5 mb-5 mt-1">
                                        <span className="text-sm font-bold text-amber-500">{series.rating}</span>
                                        <div className="flex text-amber-500 text-sm">
                                            <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-[1.35rem] font-black text-slate-900 dark:text-white">₹{series.price}</span>
                                            <span className="text-sm text-slate-400 line-through font-medium">₹{series.originalPrice}</span>
                                        </div>
                                        
                                        <button className="w-full py-3 rounded-xl bg-orange-50 hover:bg-[#F97316] text-orange-600 hover:text-white dark:bg-slate-700 dark:hover:bg-[#F97316] dark:text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-orange-200 dark:border-slate-600">
                                            <MdShoppingCart className="w-4 h-4" /> Enroll Now
                                        </button>
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
