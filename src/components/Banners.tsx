"use client";

import { motion } from 'framer-motion';

import Link from 'next/link';

const banners = [
    { id: 1, src: '/jee-mains-banner.svg', alt: 'JEE Mains Prep', link: '/exams/engineering-entrance/jee/jee-main' },
    { id: 2, src: '/neet-banner.svg', alt: 'NEET UG Prep', link: '/exams/medical-entrance/neet-ug' },
    { id: 3, src: '/ssc-cgl-banner.svg', alt: 'SSC CGL Prep', link: '/exams/ssc-exams/ssc-cgl' },
    { id: 4, src: '/upsc-banner.svg', alt: 'UPSC CSE Prep', link: '/exams/upsc-civil-services' },
    { id: 5, src: '/banking-banner.svg', alt: 'Banking PO Prep', link: '/exams/banking' },
];

export default function Banners() {
    return (
        <section className="py-12 bg-transparent overflow-hidden relative z-10 border-b border-primary/5 dark:border-primary/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                    <h3 className="text-xl md:text-2xl font-black text-darkText dark:text-white">Trending <span className="text-primary">Batches & Packs</span></h3>
                    <div className="h-[2px] flex-1 bg-primary/20" />
                </motion.div>
            </div>

            {/* Infinite scrolling banner track */}
            <div className="relative w-full overflow-hidden group pb-8">
                {/* Edge fade gradients */}


                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-6 px-4">
                    {[...banners, ...banners, ...banners].map((banner, index) => (
                        <Link
                            href={banner.link}
                            key={`${banner.id}-${index}`}
                            className="block w-[300px] sm:w-[450px] md:w-[600px] xl:w-[700px] aspect-[21/9] shrink-0 rounded-2xl md:rounded-[2rem] overflow-hidden glass hover:shadow-2xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                        >
                            <img src={banner.src} alt={banner.alt} className="w-full h-full object-cover" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
