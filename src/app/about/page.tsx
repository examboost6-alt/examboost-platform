import React from 'react';
import Link from 'next/link';
import { Target, Users, Award, BookOpen, Zap, ShieldCheck, Lightbulb, TrendingUp, Globe, Lock, Heart, Star, Compass, UserCircle2 } from 'lucide-react';

export const metadata = {
    title: 'About Us - ExamBoost',
    description: "Discover the story behind ExamBoost, India's fastest-growing EdTech platform. Learn about our mission, vision, and the team empowering millions of students."
};

export default function AboutPage() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans">

            {/* 1. HERO SECTION */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 lg:py-28 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide uppercase mb-6 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                        <Star className="w-4 h-4" /> Know Our Story
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight max-w-5xl mx-auto tracking-tight">
                        We are building India's most <br className="hidden md:block" />
                        <span className="text-primary dark:text-accent">Trusted Learning Ecosystem</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        ExamBoost is an outcome-driven EdTech platform, democratizing education with highly curated test series, deep analytics, and top-tier mentorship.
                    </p>
                </div>
            </section>

            {/* 2. THE STATS THAT MATTER */}
            <section className="-mt-12 container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-100 dark:divide-slate-800 text-center">
                        {[
                            { label: 'Registered Students', value: '50 Lakh+', icon: Users, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                            { label: 'Mock Tests Attempted', value: '10 Crore+', icon: Target, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
                            { label: 'Student Selections', value: '1.2 Lakh+', icon: Award, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
                            { label: 'Exams Covered', value: '500+', icon: BookOpen, color: 'text-fuchsia-600 dark:text-fuchsia-400', bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/20' },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center px-4">
                                <div className={`w-14 h-14 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-5`}>
                                    <stat.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{stat.value}</h3>
                                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. MISSION & VISION */}
            <section className="py-20 lg:py-24 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center min-h-[400px]">
                            <img src="/logo.png" alt="ExamBoost Light" className="w-1/2 object-contain dark:hidden" />
                            <img src="/white-logo.png" alt="ExamBoost Dark" className="w-1/2 object-contain hidden dark:block" />
                            <div className="mt-12 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 mb-4">
                                    <Compass className="w-8 h-8 text-primary dark:text-accent" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Guided by Purpose</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Founded by educators, for learners.</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-12">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Our Mission</h2>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-emerald-500 pl-6 py-2">
                                To democratize access to high-quality education by building robust and affordable learning tools that eliminate geographical and financial barriers for students across India.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Our Vision</h2>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-blue-500 pl-6 py-2">
                                To become the ultimate companion for every aspirant—where an internet connection is the only requirement to crack the toughest exams and secure a brighter future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR PHILOSOPHY */}
            <section className="py-20 bg-primary dark:bg-slate-900 text-white border-y border-primary/20 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl">
                    <Heart className="w-12 h-12 mx-auto mb-6 text-white/80" />
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Student First, Always</h2>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                        Every feature we build, every question we draft, and every decision we make is guided by one simple question: <br className="hidden md:block" /> "How does this help our students succeed?"
                    </p>
                </div>
            </section>

            {/* 5. WHY EXAMBOOST? (Core Pillars) */}
            <section className="py-20 lg:py-24 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">What Makes Us Different?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">We don't just provide questions; we provide an ecosystem that meticulously identifies your weaknesses and turns them into strengths.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: ShieldCheck, title: "Exam-Exact Interface", desc: "Experience the real CBT environment before the actual exam day. Say goodbye to exam anxiety." },
                        { icon: Zap, title: "Deep Analytics", desc: "Get insights into your speed, accuracy, and topic-wise strengths compared to top aspirants." },
                        { icon: BookOpen, title: "Error-Free Content", desc: "Questions drafted by subject matter experts, strictly aligned with the latest syllabus." },
                        { icon: Globe, title: "Bilingual Platform", desc: "Switch between English and Hindi effortlessly. Language should not be a barrier." },
                        { icon: Lock, title: "Affordable Access", desc: "Premium education and testing shouldn't break the bank. We offer the highest ROI." },
                        { icon: Users, title: "Community Support", desc: "Mentorship sessions and a strong community that supports your overall preparation journey." }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-[#0f172a] p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-accent transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-white dark:bg-[#020617] text-primary dark:text-accent flex items-center justify-center mb-6 border border-slate-200 dark:border-slate-700">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. OUR JOURNEY / TIMELINE */}
            <section className="py-20 bg-slate-100 dark:bg-[#060c21] border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">The ExamBoost Journey</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">From a small vision to India's most loved preparation destination.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { year: '2022', title: 'The Genesis', desc: 'Started with 5 free mock tests for SSC CGL. We hit 10,000 users in the first week through pure word-of-mouth.' },
                            { year: '2023', title: 'Expanding Horizons', desc: 'Launched Banking, Railways, and Defense verticals. Introduced our proprietary Analytics engine.' },
                            { year: '2024', title: '1 Million Strong', desc: 'Crossed the 1 Million active aspirants mark. Launched our mobile app to enable learning on the go.' },
                            { year: '2025+', title: 'The Future', desc: 'Integrating Live Classes and robust mentorship programs. Continuously redefining preparation.' }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:border-primary/50 dark:hover:border-accent/50 transition-colors">
                                <div className="text-primary dark:text-accent font-black text-3xl mb-3">{step.year}</div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. MEET THE LEADERSHIP (Placeholder) */}
            <section className="py-20 lg:py-24 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">The Team Behind ExamBoost</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Passionate educators and technologists working relentlessly for your success.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[1, 2, 3, 4].map((member) => (
                        <div key={member} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                            <div className="w-24 h-24 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 mb-4 flex items-center justify-center text-slate-400 dark:text-slate-500">
                                <UserCircle2 className="w-12 h-12" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Founder / Member {member}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">EdTech Enthusiast</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. CALL TO ACTION */}
            <section className="py-20 lg:py-24 bg-[#0a1128] text-white text-center border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Boost Your Preparation?</h2>
                    <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto mb-10">
                        Join 50 Lakh+ aspirants who have already made ExamBoost their trusted partner for success.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/signup" className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold text-lg transition-colors w-full sm:w-auto">
                            Join For Free Now
                        </Link>
                        <Link href="/exams" className="px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white rounded-lg font-bold text-lg transition-colors w-full sm:w-auto">
                            Explore Test Series
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
