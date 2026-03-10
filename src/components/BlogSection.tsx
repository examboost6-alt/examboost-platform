"use client";

import { motion } from 'framer-motion';
import { MdArrowForward, MdPerson } from 'react-icons/md';
import Link from 'next/link';

const articles = [
    {
        category: 'Exam Tips',
        title: '7 Proven Strategies to Increase Speed in Quantitative Aptitude',
        date: 'Oct 15, 2024',
        author: 'Rahul Verma',
        img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        category: 'Current Affairs',
        title: 'Weekly Roundup: Top 50 Current Affairs Questions for SSC CGL',
        date: 'Oct 12, 2024',
        author: 'Neha Singh',
        img: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        category: 'Strategy',
        title: 'How to Read NCERTs effectively for UPSC CSE Prelims',
        date: 'Oct 10, 2024',
        author: 'Amit Desai',
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
];

export default function BlogSection() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-block bg-primary/10 dark:bg-accent/10 border border-primary/20 dark:border-accent/20 text-primary dark:text-accent font-bold px-4 py-2 rounded-full mb-6 text-xs tracking-widest uppercase">
                            Latest Resources
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-darkText dark:text-white mb-6 tracking-tight leading-[1.1]">
                            Exam Strategies & <span className="text-primary">Updates</span>
                        </h2>
                        <p className="text-lg text-grayText dark:text-slate-400 font-medium leading-relaxed">
                            Stay ahead of the curve with our expert articles, preparation tips, and latest exam notifications.
                        </p>
                    </div>

                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary dark:text-accent font-bold hover:text-secondary hover:underline transition-colors shrink-0">
                        View All Posts <MdArrowForward className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 dark:border-slate-700 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 relative"
                        >
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={article.img}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary dark:text-accent shadow-sm border border-white/50 dark:border-slate-700">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-darkText dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                                    {article.title}
                                </h3>
                                <p className="text-grayText dark:text-slate-400 mb-6 line-clamp-2 text-sm font-medium flex-grow">
                                    Master the key techniques and understand the fundamental concepts with our expert breakdown.
                                </p>

                                <div className="flex items-center justify-between text-grayText dark:text-slate-400 text-sm mt-auto border-t border-slate-100 dark:border-slate-700 pt-4 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-primary dark:text-accent"><MdPerson className="w-3 h-3" /></div>
                                        <span className="text-darkText dark:text-slate-300">{article.author}</span>
                                    </div>
                                    <span className="text-primary/70 dark:text-accent/70">{article.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
