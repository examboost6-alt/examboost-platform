"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, PlayCircle, BookOpen, TrendingUp, Tags, FileText, Bookmark, Clock, Search, ChevronRight, Star, Target } from 'lucide-react';

export default function BlogClient() {
    // Dummy Data for the main featured post
    const featuredPost = {
        title: "The Ultimate 6-Month Strategy to Clear SSC CGL 2026",
        excerpt: "Preparing for SSC CGL requires a mix of smart work and consistency. Find out our expert's day-by-day plan to ensure a top 100 rank this year.",
        category: "SSC Strategy",
        date: "Oct 24, 2026",
        author: "Prakash Sir",
        readTime: "8 min read",
        image: "/exam-cgl.jpg"
    };

    // Dummy Data for Recent/Trending Posts
    const recentPosts = [
        { title: 'UPSC Preparation Strategy for Working Professionals', cat: 'UPSC', date: 'Oct 15', author: 'Meera S.', readTime: "12 min read" },
        { title: 'Banking Exams: Expected Changes in Pattern 2026', cat: 'Banking', date: 'Oct 10', author: 'Rahul M.', readTime: "5 min read" },
        { title: 'How to Crack JEE Main in Just 3 Months?', cat: 'Engineering', date: 'Oct 08', author: 'Dr. Anita', readTime: "10 min read" },
        { title: 'NEET UG Biology Last Month Revision Plan', cat: 'Medical', date: 'Oct 05', author: 'Dr. Anita', readTime: "7 min read" },
        { title: 'Mastering Current Affairs for State PSC Exams', cat: 'State PSC', date: 'Oct 01', author: 'Karan B.', readTime: "6 min read" },
        { title: 'Top 10 Mistakes to Avoid During Your CAT Preparation', cat: 'MBA Entrance', date: 'Sep 28', author: 'Team ExamBoost', readTime: "9 min read" },
    ];

    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#0B1120] pt-20 flex flex-col font-sans selection:bg-[#F97316]/30">

            {/* 1. HERO SECTION (Premium Header) */}
            <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-28 overflow-hidden bg-white dark:bg-[#060D1A] border-b border-slate-200 dark:border-slate-800/80">
                {/* Hero-like Grid Background */}
                <div 
                    className="absolute inset-0 z-0 opacity-[0.3] dark:opacity-[0.05] pointer-events-none" 
                    style={{ 
                        backgroundImage: 'linear-gradient(to right, #64748b22 1px, transparent 1px), linear-gradient(to bottom, #64748b22 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }}
                />

                {/* Soft Flowing Light Blue/Orange Background Shapes */}
                <svg className="absolute top-[0%] right-[0%] w-[100%] h-[120%] text-orange-50 dark:text-[#F97316]/5 pointer-events-none z-0 rotate-180" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="180" strokeLinecap="round" d="M-200,800 C150,800 350,100 600,200 C850,300 800,900 1200,800" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-orange-100/50 dark:bg-[#F97316]/10 blur-[140px] rounded-full pointer-events-none z-0" />

                {/* Orange Floating Stars */}
                <svg className="absolute top-[20%] right-[20%] w-6 h-6 text-[#F97316]/60 animate-[pulse-slow_3s_ease-in-out_infinite] z-0 hidden md:block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
                <svg className="absolute bottom-[20%] left-[10%] w-4 h-4 text-[#F97316]/40 animate-[pulse-slow_4s_ease-in-out_infinite] delay-700 z-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>
                <svg className="absolute top-[40%] left-[20%] w-5 h-5 text-[#F97316]/50 animate-[pulse-slow_5s_ease-in-out_infinite] delay-300 z-0 hidden lg:block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" /></svg>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center max-w-4xl pt-8">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-50 dark:bg-[#F97316]/10 border border-orange-200 dark:border-[#F97316]/20 text-sm font-bold tracking-widest uppercase text-[#F97316] mb-8 shadow-sm"
                    >
                        <FileText className="w-4 h-4" /> ExamBoost Resources
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[4.5rem] font-serif font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.05]"
                    >
                        Insights, Strategies & <br className="hidden md:block"/>
                        <span className="text-[#F97316] relative">
                            Updates
                            {/* Hand-drawn underline */}
                            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-orange-300 dark:text-orange-500/50 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <motion.path 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M5,15 Q50,5 95,15" 
                                />
                            </svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium mb-12"
                    >
                        Your ultimate destination for exam notifications, topper interviews, and expert preparation strategies.
                    </motion.p>

                    {/* Premium Search Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="w-7 h-7 text-slate-400 group-focus-within:text-[#F97316] transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search 'JEE Tips', 'SSC Results'..."
                            className="w-full bg-white dark:bg-slate-900 border-[3px] border-slate-100 dark:border-slate-800 rounded-full py-5 pl-16 pr-24 text-lg md:text-xl font-bold text-slate-900 dark:text-white placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-none"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#F97316] text-white px-6 py-3 rounded-full hidden sm:flex items-center justify-center shadow-lg font-bold hover:bg-[#EA580C] transition-colors cursor-pointer">
                            Search
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* 2. MAIN LAYOUT (Featured + Sidebar) */}
            <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* LEFT COLUMN: Featured Article & Latest Feed */}
                    <div className="lg:w-[65%] space-y-20">

                        {/* Featured Post Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white flex items-center gap-3">
                                    <Star className="w-8 h-8 text-amber-500 fill-amber-500" /> Featured Reading
                                </h2>
                            </div>

                            <Link href="/blog/featured" className="block group">
                                <div className="bg-white dark:bg-[#0F172A] rounded-[2rem] border-[1.5px] border-slate-100 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#F97316]/50 dark:hover:border-[#F97316]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col md:flex-row h-auto md:h-80">
                                    {/* Image Area */}
                                    <div className="w-full md:w-5/12 bg-slate-200 dark:bg-slate-800 relative overflow-hidden flex-shrink-0">
                                        {/* Mocking an image with a solid color & icon for now */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-[#ea580c] flex flex-col items-center justify-center text-white p-6 text-center transform group-hover:scale-105 transition-transform duration-700">
                                            <Target className="w-20 h-20 mb-4 opacity-90" />
                                            <span className="font-black tracking-widest uppercase opacity-90 text-sm">SSC CGL Special</span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4 mb-5">
                                                <span className="px-4 py-1.5 bg-orange-50 text-[#F97316] dark:bg-[#F97316]/10 font-bold text-xs rounded-full uppercase tracking-widest">{featuredPost.category}</span>
                                                <span className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                                            </div>
                                            <h3 className="text-3xl font-serif font-black text-slate-900 dark:text-white mb-4 group-hover:text-[#F97316] transition-colors leading-[1.2]">
                                                {featuredPost.title}
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
                                                {featuredPost.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                                    <User className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-black text-slate-700 dark:text-slate-300">{featuredPost.author}</span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-400 dark:text-slate-500">{featuredPost.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Recent Articles Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white flex items-center gap-3">
                                    <TrendingUp className="w-8 h-8 text-[#F97316]" /> Latest Articles
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {recentPosts.map((post, idx) => (
                                    <Link href={`/blog/${idx}`} key={idx} className="group flex flex-col bg-white dark:bg-[#0F172A] rounded-[2rem] border-[1.5px] border-slate-100 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#F97316]/50 dark:hover:border-[#F97316]/50 transition-all duration-300 h-full">
                                        <div className="h-52 bg-slate-50 dark:bg-slate-800 relative w-full overflow-hidden flex items-center justify-center">
                                            <BookOpen className="w-16 h-16 text-slate-200 dark:text-slate-700 group-hover:scale-110 group-hover:text-amber-100 dark:group-hover:text-slate-600 transition-all duration-500" />
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-[10px] font-black text-[#F97316] uppercase tracking-widest bg-orange-50 dark:bg-[#F97316]/10 px-3 py-1.5 rounded-full">{post.cat}</span>
                                                <Bookmark className="w-5 h-5 text-slate-400 hover:text-[#F97316] cursor-pointer transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-serif font-black text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-[#F97316] transition-colors leading-[1.3]">
                                                {post.title}
                                            </h3>
                                            <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400">
                                                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
                                                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-14 text-center">
                                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl font-black text-slate-700 dark:text-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-[#F97316] dark:hover:border-[#F97316] hover:text-[#F97316] dark:hover:text-[#F97316] transition-all duration-300">
                                    Load More Articles <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN: Sidebar (Categories, Tags, Newsletter) */}
                    <div className="lg:w-[35%] space-y-10">

                        {/* Categories Box */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white dark:bg-[#0F172A] rounded-[2rem] border-[1.5px] border-slate-100 dark:border-slate-700/80 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <Search className="w-6 h-6 text-[#F97316]" /> Topics
                            </h3>
                            <ul className="space-y-3">
                                {['SSC Exams', 'Banking & Insurance', 'UPSC CSE', 'State PSC', 'Engineering (JEE)', 'Medical (NEET)', 'Defense (NDA/CDS)', 'Exam Notifications'].map((cat, i) => (
                                    <li key={i}>
                                        <Link href="/blog" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-bold transition-all group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                            <span className="group-hover:text-[#F97316] transition-colors">{cat}</span>
                                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-black px-3 py-1.5 rounded-lg group-hover:bg-[#F97316] group-hover:text-white transition-colors shadow-sm">
                                                {Math.floor(Math.random() * 50) + 10}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Video / Webinar Promo */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-slate-900 rounded-[2rem] border border-slate-800 p-8 md:p-10 relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                            {/* Animated glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                            
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 mx-auto bg-[#F97316] text-white rounded-full flex items-center justify-center mb-6 cursor-pointer transform group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                                    <PlayCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-serif font-black text-white mb-3 tracking-wide">Watch Free Masterclasses</h3>
                                <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">Learn tips & tricks directly from the top educators and rankers.</p>
                                <button className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 font-black rounded-xl transition-all shadow-md">
                                    Explore Library
                                </button>
                            </div>
                        </motion.div>

                        {/* Popular Tags */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-white dark:bg-[#0F172A] rounded-[2rem] border-[1.5px] border-slate-100 dark:border-slate-700/80 p-8 shadow-sm"
                        >
                            <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <Tags className="w-6 h-6 text-[#F97316]" /> Popular Tags
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['#Strategy', '#TimeManagement', '#SSC_CGL', '#Syllabus', '#MockTests', '#InterviewTips', '#Results', '#CurrentAffairs'].map((tag, i) => (
                                    <Link href="/blog" key={i} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#F97316] hover:text-white dark:hover:bg-[#F97316] dark:hover:text-white text-sm font-bold rounded-xl transition-all hover:shadow-md hover:-translate-y-1">
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                    {/* End Sidebar */}
                </div>
            </main>

            {/* 3. CTA / NEWSLETTER SECTION */}
            <section className="bg-white dark:bg-[#060D1A] border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
                {/* Hero-like Grid overlay */}
                <div 
                    className="absolute inset-0 z-0 opacity-[0.2] dark:opacity-[0.05] pointer-events-none" 
                    style={{ 
                        backgroundImage: 'linear-gradient(to right, #64748b22 1px, transparent 1px), linear-gradient(to bottom, #64748b22 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }}
                />
                <div className="container mx-auto px-4 py-24 text-center relative z-10">
                    <div className="max-w-4xl mx-auto bg-[#F97316] rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-[#F97316]/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-[80px] rounded-full pointer-events-none" />
                        
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6 leading-tight relative z-10">Never Miss an Update!</h2>
                        <p className="text-orange-50/90 font-medium max-w-2xl mx-auto mb-10 text-lg md:text-xl relative z-10">
                            Get the latest exam notifications, preparation strategies, and exclusive study materials directly in your inbox.
                        </p>
                        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 focus:border-white font-bold text-lg transition-colors"
                            />
                            <button type="submit" className="px-8 py-4 bg-white text-slate-900 font-black text-lg rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-lg">
                                Subscribe Now
                            </button>
                        </form>
                        <p className="text-white/60 text-sm mt-6 font-bold relative z-10 uppercase tracking-widest">*We respect your privacy. No spam ever.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
