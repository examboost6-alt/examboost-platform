"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MdArrowForward, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
    { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop", name: "Medical (NEET)", count: "800+ Tests", desc: "NEET UG, AIIMS", href: "/exams/medical-entrance", color: "from-blue-500/80" },
    { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", name: "Engineering (JEE)", count: "2,000+ Tests", desc: "JEE Main, Advanced", href: "/exams/engineering-entrance", color: "from-orange-500/80" },
    { image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop", name: "UPSC CSE", count: "500+ Tests", desc: "Prelims & Mains Series", href: "/exams/upsc-civil-services", color: "from-emerald-500/80" },
    { image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", name: "Banking", count: "1,200+ Tests", desc: "IBPS, SBI PO & Clerk", href: "/exams/banking", color: "from-purple-500/80" },
    { image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600&auto=format&fit=crop", name: "SSC Exams", count: "1,500+ Tests", desc: "CGL, CHSL, MTS", href: "/exams/ssc-exams", color: "from-rose-500/80" },
    { image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop", name: "State PSC", count: "950+ Tests", desc: "UPPSC, BPSC, MPSC", href: "/exams/state-psc", color: "from-cyan-500/80" }
];

export default function Categories() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const canScrollLeftRef = useRef(false);
    const canScrollRightRef = useRef(true);

    // Mouse drag state
    const [isDragging, setIsDragging] = useState(false);
    const startXRef = useRef(0);
    const scrollLeftStartRef = useRef(0);
    const dragMovedRef = useRef(false);

    const updateScrollStatus = useCallback(() => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const maxScroll = el.scrollWidth - el.clientWidth;
        const newCanLeft = el.scrollLeft > 10;
        const newCanRight = el.scrollLeft < maxScroll - 10;

        if (newCanLeft !== canScrollLeftRef.current) {
            canScrollLeftRef.current = newCanLeft;
            setCanScrollLeft(newCanLeft);
        }
        if (newCanRight !== canScrollRightRef.current) {
            canScrollRightRef.current = newCanRight;
            setCanScrollRight(newCanRight);
        }

        if (progressBarRef.current && maxScroll > 0) {
            const pct = Math.max(20, Math.min(100, (el.scrollLeft / maxScroll) * 80 + 20));
            progressBarRef.current.style.width = `${pct}%`;
        }
    }, []);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;

        updateScrollStatus();
        el.addEventListener('scroll', updateScrollStatus, { passive: true });
        window.addEventListener('resize', updateScrollStatus, { passive: true });

        return () => {
            el.removeEventListener('scroll', updateScrollStatus);
            window.removeEventListener('resize', updateScrollStatus);
        };
    }, [updateScrollStatus]);

    const scroll = (direction: 'left' | 'right') => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const cardWidth = el.querySelector('.category-card')?.clientWidth || 340;
        const scrollDistance = cardWidth + 24;
        el.scrollBy({
            left: direction === 'left' ? -scrollDistance : scrollDistance,
            behavior: 'smooth'
        });
    };

    // Mouse drag handlers for smooth desktop panning
    const handleMouseDown = (e: React.MouseEvent) => {
        const el = scrollContainerRef.current;
        if (!el) return;
        setIsDragging(true);
        startXRef.current = e.pageX - el.offsetLeft;
        scrollLeftStartRef.current = el.scrollLeft;
        dragMovedRef.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const el = scrollContainerRef.current;
        if (!el) return;
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startXRef.current) * 1.3;
        if (Math.abs(walk) > 5) {
            dragMovedRef.current = true;
        }
        el.scrollLeft = scrollLeftStartRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 relative z-10 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
                
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 sm:mb-12 gap-6">
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
                            className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                        >
                            Explore Top <span className="text-[#F97316]">Exam Categories</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 dark:text-slate-400 mt-4 max-w-lg leading-relaxed text-base sm:text-lg"
                        >
                            From the ultimate <strong>JEE crash course 2026</strong> to an <strong>SSC CGL mock test free</strong> of charge, explore categories designed for guaranteed success.
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 self-stretch sm:self-auto justify-between sm:justify-end">
                        <Link href="/exams" className="group inline-flex items-center gap-2 text-[#F97316] font-bold hover:text-[#EA580C] transition-colors text-base sm:text-lg">
                            See All Categories <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Smooth Navigation Arrow Buttons */}
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                            <button
                                type="button"
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                aria-label="Previous categories"
                                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-orange-50 hover:text-[#F97316] dark:hover:bg-slate-700 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-700 dark:disabled:hover:text-slate-200 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                            >
                                <MdChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                type="button"
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                aria-label="Next categories"
                                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-orange-50 hover:text-[#F97316] dark:hover:bg-slate-700 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-700 dark:disabled:hover:text-slate-200 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                            >
                                <MdChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Container with smooth momentum & drag */}
                <div className="relative -mx-4 md:mx-0">
                    <div 
                        ref={scrollContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        className={`flex overflow-x-auto pb-6 pt-2 px-4 md:px-0 gap-6 snap-x snap-proximity md:snap-mandatory scroll-smooth hide-scroll-bar select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.08, duration: 0.4 }}
                                viewport={{ once: true, margin: "50px" }}
                                className="category-card snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[350px]"
                            >
                                <Link 
                                    href={cat.href} 
                                    onClick={(e) => {
                                        if (dragMovedRef.current) e.preventDefault();
                                    }}
                                    className="group block relative h-[420px] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="absolute inset-0">
                                        <Image 
                                            src={cat.image} 
                                            alt={cat.name} 
                                            fill 
                                            sizes="(max-width: 768px) 100vw, 350px" 
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
                                        />
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                                    
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
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

                    {/* Smooth Horizontal Progress Track */}
                    <div className="w-full max-w-xs mx-auto mt-6 px-4">
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                                ref={progressBarRef}
                                className="h-full bg-[#F97316] rounded-full transition-all duration-150 w-[20%]" 
                            />
                        </div>
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

