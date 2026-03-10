import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, PlayCircle, BookOpen, TrendingUp, Tags, FileText, Bookmark, Clock, Search, ChevronRight, Star, Target } from 'lucide-react';

export const metadata = {
    title: 'Blog & Exam Updates - ExamBoost',
    description: 'Latest news, strategy, study materials, and tips for competitive exams by ExamBoost.'
};

export default function BlogPage() {
    // Dummy Data for the main featured post
    const featuredPost = {
        title: "The Ultimate 6-Month Strategy to Clear SSC CGL 2026",
        excerpt: "Preparing for SSC CGL requires a mix of smart work and consistency. Find out our expert's day-by-day plan to ensure a top 100 rank this year.",
        category: "SSC Strategy",
        date: "Oct 24, 2026",
        author: "Prakash Sir",
        readTime: "8 min read",
        image: "/exam-cgl.jpg" // Assuming these placeholder names or we can just use colored divs
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
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans">

            {/* 1. HERO SECTION (Blog Header) */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide uppercase mb-6 border border-slate-200 dark:border-slate-700">
                        <FileText className="w-4 h-4" /> ExamBoost Resources
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Insights, Strategies & <span className="text-primary dark:text-accent">Updates</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        Your ultimate destination for exam notifications, topper interviews, and expert preparation strategies.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-10 max-w-2xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-accent transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for articles, exams, or strategies..."
                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0f172a] focus:bg-white dark:focus:bg-[#020617] text-slate-900 dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent transition-all shadow-sm font-semibold placeholder:text-slate-400 placeholder:font-medium"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-secondary text-white px-6 rounded-lg font-bold transition-colors">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. MAIN LAYOUT (Featured + Sidebar) */}
            <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* LEFT COLUMN: Featured Article & Latest Feed */}
                    <div className="lg:w-2/3 space-y-12">

                        {/* Featured Post Card */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                                    <Star className="w-6 h-6 text-amber-500 fill-current" /> Featured Reading
                                </h2>
                            </div>

                            <Link href="/blog/featured" className="block group">
                                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-accent/30 transition-all flex flex-col md:flex-row h-auto md:h-72">
                                    {/* Image Area */}
                                    <div className="w-full md:w-5/12 bg-slate-200 dark:bg-slate-800 relative overflow-hidden flex-shrink-0">
                                        {/* Mocking an image with a solid color & icon for now */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex flex-col items-center justify-center text-white p-6 text-center transform group-hover:scale-105 transition-transform duration-500">
                                            <Target className="w-16 h-16 mb-4 opacity-80" />
                                            <span className="font-bold tracking-widest uppercase opacity-80 text-sm">SSC CGL Special</span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent font-bold text-xs rounded-full uppercase tracking-wider">{featuredPost.category}</span>
                                                <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors leading-tight">
                                                {featuredPost.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
                                                {featuredPost.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                                                    <User className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{featuredPost.author}</span>
                                            </div>
                                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-500">{featuredPost.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Recent Articles Grid */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-primary dark:text-accent" /> Latest Articles
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {recentPosts.map((post, idx) => (
                                    <Link href={`/blog/${idx}`} key={idx} className="group flex flex-col bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-accent/30 transition-all h-full">
                                        <div className="h-44 bg-slate-100 dark:bg-slate-800 relative w-full overflow-hidden flex items-center justify-center">
                                            <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-xs font-bold text-primary dark:text-accent uppercase tracking-wider">{post.cat}</span>
                                                <Bookmark className="w-4 h-4 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-accent transition-colors leading-snug">
                                                {post.title}
                                            </h3>
                                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                                                <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
                                                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-10 text-center">
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#0f172a] border-2 border-slate-200 dark:border-slate-700 rounded-lg font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary dark:hover:border-accent transition-all">
                                    Load More Articles <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Sidebar (Categories, Tags, Newsletter) */}
                    <div className="lg:w-1/3 space-y-8">

                        {/* Categories Box */}
                        <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Search className="w-5 h-5 text-primary dark:text-accent" /> Categories
                            </h3>
                            <ul className="space-y-2">
                                {['SSC Exams', 'Banking & Insurance', 'UPSC CSE', 'State PSC', 'Engineering (JEE)', 'Medical (NEET)', 'Defense (NDA/CDS)', 'Exam Notifications'].map((cat, i) => (
                                    <li key={i}>
                                        <Link href="/blog" className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-semibold transition-colors group">
                                            <span>{cat}</span>
                                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs px-2 py-1 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
                                                {Math.floor(Math.random() * 50) + 10}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Video / Webinar Promo */}
                        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                            <div className="relative z-10 text-center">
                                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-4 cursor-pointer transform group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                                    <PlayCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Watch Free Masterclasses</h3>
                                <p className="text-slate-400 text-sm font-medium mb-4">Learn tips directly from the toppers and expert faculties.</p>
                                <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-colors">
                                    Explore Library
                                </button>
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Tags className="w-5 h-5 text-primary dark:text-accent" /> Popular Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['#Strategy', '#TimeManagement', '#SSC_CGL', '#Syllabus', '#MockTests', '#InterviewTips', '#Results', '#CurrentAffairs'].map((tag, i) => (
                                    <Link href="/blog" key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-slate-900 text-sm font-bold rounded-lg transition-colors">
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* End Sidebar */}
                </div>
            </section>

            {/* 3. NEWSLETTER SECTION */}
            <section className="bg-primary dark:bg-slate-900 border-t border-primary/20 dark:border-slate-800 mt-12">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Never Miss an Update!</h2>
                    <p className="text-white/80 font-medium max-w-xl mx-auto mb-8 text-lg">
                        Get the latest exam notifications, preparation strategies, and exclusive study materials directly in your inbox.
                    </p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 font-medium"
                        />
                        <button type="submit" className="px-6 py-3 bg-white text-primary dark:text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-white/50 text-xs mt-4 font-medium">*We respect your privacy. No spam ever.</p>
                </div>
            </section>

        </div>
    );
}
