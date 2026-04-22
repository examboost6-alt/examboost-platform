"use client";

import { motion } from 'framer-motion';
import { MdTrendingUp, MdLibraryBooks } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full bg-white dark:bg-[#060D1A] overflow-hidden pt-16 lg:pt-28 pb-0 selection:bg-orange-500/30">
            {/* 1. Subdued Graph Paper Grid Background (Removed as per user request) */}

            {/* 2. Flowing Light Blue Abstract Shape (Behind everything) */}
            <svg className="absolute left-[-20%] sm:left-[0%] top-[0%] w-[140%] sm:w-[100%] h-[120%] text-[#e0f2fe] dark:text-[#0c4a6e]/30 pointer-events-none z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="180" 
                    strokeLinecap="round" 
                    d="M-200,800 C150,800 350,100 600,200 C850,300 800,900 1200,800" 
                />
            </svg>

            {/* 3. Orange Floating Stars */}
            <svg className="absolute top-[20%] right-[30%] w-6 h-6 text-orange-500 animate-[pulse-slow_3s_ease-in-out_infinite] z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
            </svg>
            <svg className="absolute bottom-[40%] right-[45%] w-4 h-4 text-orange-400 animate-[pulse-slow_4s_ease-in-out_infinite] delay-700 z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
            </svg>
            <svg className="absolute top-[15%] left-[45%] w-5 h-5 text-orange-400 animate-[pulse-slow_5s_ease-in-out_infinite] delay-300 z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
            </svg>
            <svg className="absolute top-[35%] right-[5%] w-8 h-8 text-orange-600 animate-[pulse-slow_4s_ease-in-out_infinite] delay-100 hidden lg:block z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
            </svg>

            {/* 4. Main Container layout */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1300px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    
                    {/* LEFT COLUMN: Typography & Cards */}
                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-8 pb-16 z-20">


                        {/* Huge Headline */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[3.25rem] sm:text-[4.5rem] md:text-6xl lg:text-[4.8rem] xl:text-[5.5rem] font-serif font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6"
                        >
                            Test Series That <br className="hidden md:block" />
                            Powers Your{' '}
                            <span className="relative inline-block whitespace-nowrap mt-2 lg:mt-0">
                                Selection
                                {/* Hand-drawn orange circle around text */}
                                <svg className="absolute -inset-2 lg:-inset-4 w-[calc(100%+16px)] lg:w-[calc(100%+32px)] h-[calc(100%+16px)] lg:h-[calc(100%+32px)] pointer-events-none text-[#F97316] overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <path 
                                        d="M93.3,16.7 c-2.4-7.4-15.6-13-35.8-14.8C35.5,0,15,3.7,5.5,10.6C-3.4,17,0,26.4,12.7,31.5c15.1,6.1,43.2,7,64.2,3.3 c13.4-2.3,19.3-7.5,20.8-11.5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        vectorEffect="non-scaling-stroke"
                                        className="animate-[dash_1.5s_ease-out_forwards]"
                                        strokeDasharray="200"
                                        strokeDashoffset="200"
                                    />
                                    <path 
                                        d="M91.3,14.7 c-2.4-7.4-15.6-13-35.8-14.8C35.5,0,15,3.7,5.5,10.6C-3.4,17,0,26.4,12.7,31.5c15.1,6.1,43.2,7,64.2,3.3" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="0.5" 
                                        opacity="0.5"
                                        strokeLinecap="round" 
                                        vectorEffect="non-scaling-stroke"
                                        className="animate-[dash_2s_ease-out_forwards]"
                                        strokeDasharray="200"
                                        strokeDashoffset="200"
                                    />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg"
                        >
                            Online mock tests & video courses for ambitious aspirants from <span className="font-bold italic text-orange-600 dark:text-orange-400">ExamBoost Platform.</span>
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-14"
                        >
                            <Link 
                                href="/signup" 
                                className="inline-flex bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xl px-10 py-4 border-2 border-[#EA580C] rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(249,115,22,0.6)]"
                            >
                                Apply Now
                            </Link>
                        </motion.div>

                        {/* Refined Bottom Horizontal Cards (Like Online Manipal) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="w-full"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
                                {[
                                    { title: "SSC Exams", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300&auto=format&fit=crop", link: "/exams/ssc-exams" },
                                    { title: "Banking PO", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=300&auto=format&fit=crop", link: "/exams/banking" },
                                    { title: "UPSC CSE", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=300&auto=format&fit=crop", link: "/exams/upsc-civil-services" },
                                    { title: "Engineering", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop", link: "/exams/engineering-entrance" },
                                ].map((card, i) => (
                                    <Link href={card.link} key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-2 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-slate-100">
                                            <Image src={card.img} alt={card.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <h4 className="font-bold text-slate-800 dark:text-white text-center text-[15px] pb-1 font-serif">{card.title}</h4>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Huge Cutout Image & Floating Elements */}
                    <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 flex justify-center lg:justify-end items-end lg:min-h-[500px]">
                        
                        {/* Hand-drawn black curly arrow - moved z-index and position */}
                        <motion.svg 
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ opacity: 1, pathLength: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="absolute right-[10%] lg:right-[20%] top-[0%] lg:-top-[5%] w-24 h-24 text-slate-800 dark:text-slate-300 -rotate-12 hidden md:block z-30" 
                            viewBox="0 0 100 100" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M10,90 Q40,30 90,50" className="animate-[dash_1s_ease-out_forwards]" strokeDasharray="200" strokeDashoffset="200" />
                            <path d="M70,35 L90,50 L75,70" className="animate-[dash_0.5s_ease-out_forwards_0.8s]" strokeDasharray="50" strokeDashoffset="50" />
                        </motion.svg>

                        {/* Signature Graphic - moved z-index and position */}
                        <div className="absolute left-[10%] lg:left-[5%] bottom-[45%] lg:bottom-[50%] text-center hidden sm:block z-30 transform -rotate-6">
                            <svg className="w-32 h-20 text-[#EA580C] dark:text-orange-400 opacity-90" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                <path d="M20,60 C40,20 60,80 80,40 C95,15 110,70 130,50 C150,30 170,80 180,20" className="animate-[dash_2s_ease-out_forwards]" strokeDasharray="400" strokeDashoffset="400" />
                            </svg>
                            <p className="text-[12px] font-bold text-slate-900 dark:text-white mt-1 tracking-widest uppercase font-serif drop-shadow-sm">Top Educator</p>
                        </div>

                        {/* Yellow tilted sticky note badge - moved to top right */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 12 }}
                            transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 10 }}
                            className="absolute right-[5%] sm:right-[15%] lg:-right-8 top-[10%] lg:top-[15%] w-36 h-36 bg-[#FDE047] border border-yellow-300 rounded-3xl shadow-[0_20px_40px_rgba(253,224,71,0.5)] flex flex-col items-center justify-center text-center p-4 z-40"
                        >
                            <span className="font-extrabold text-slate-900 leading-tight text-lg">Onwards<br/>& Upwards</span>
                            <MdTrendingUp className="w-6 h-6 text-slate-900 mt-2" />
                            <div className="absolute top-3 right-3 w-3 h-3 bg-orange-400 rounded-full shadow-inner opacity-70"></div>
                        </motion.div>

                        {/* The Cutout Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative z-20 w-[90%] sm:w-[80%] lg:w-[120%] max-w-[600px] -mr-8"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&auto=format&fit=crop" 
                                alt="Educator" 
                                width={1000}
                                height={1000}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                className="w-full h-auto object-contain mix-blend-darken dark:mix-blend-normal rounded-t-full filter contrast-125 saturate-110"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>

            <style jsx global>{`
                @keyframes dash {
                    to { stroke-dashoffset: 0; }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                }
            `}</style>
        </section>
    );
}
