"use client";

import { motion } from 'framer-motion';
import { Youtube, Instagram, Twitter, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith('/admin') || pathname.startsWith('/dashboard') || pathname.startsWith('/onboarding') || pathname.startsWith('/series') || pathname.startsWith('/test')) {
        return null;
    }

    return (
        <footer className="bg-slate-50/30 dark:bg-[#060D1A] text-slate-800 dark:text-slate-300 pt-20 pb-8 transition-colors duration-300 relative z-10 border-t border-slate-100 dark:border-slate-800/80 mt-12 overflow-hidden">
            
            {/* Soft Flowing Education Background */}
            <div className="absolute inset-0 z-0 opacity-50 dark:opacity-10 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-orange-50 dark:from-blue-900/10 dark:via-[#060D1A] dark:to-orange-900/10" />

            {/* Soft Flowing Light Blue/Orange Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/80 to-transparent dark:from-[#F97316]/5 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none z-0" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Clean Subscription CTA matching the hero cards */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 md:p-12 mb-20 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    {/* Soft orange decorative blur behind CTA text */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-orange-100/50 dark:bg-[#F97316]/10 blur-[60px] rounded-full pointer-events-none" />
                    
                    <div className="text-center md:text-left relative z-10 max-w-2xl">
                        {/* Animated background swirls behind the text */}
                        <svg className="absolute -top-10 -left-10 w-32 h-32 text-orange-200 dark:text-[#F97316]/20 opacity-50 pointer-events-none -rotate-12" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                            <motion.path 
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                                d="M20,60 C40,20 60,80 80,40 C95,15 110,70 130,50 C150,30 170,80 180,20" 
                            />
                        </svg>

                        <h3 className="text-3xl md:text-[2.5rem] font-serif font-black text-slate-900 dark:text-white mb-3 tracking-tight leading-tight relative">
                            Ready to boost your rank?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">
                            Join over <span className="font-bold text-[#F97316]">2 Million+</span> students already preparing with our advanced analytics and premium test series.
                        </p>
                    </div>
                    
                    <div className="shrink-0 relative z-10 hidden lg:block mr-12 mt-4">
                        {/* Hand-drawn Animated Curly Arrow pointing to Button */}
                        <svg className="absolute -left-20 -top-8 w-24 h-24 text-slate-400 dark:text-slate-500 rotate-12 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <motion.path 
                                initial={{ pathLength: 0 }} 
                                whileInView={{ pathLength: 1 }} 
                                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} 
                                viewport={{ once: true }}
                                d="M10,90 Q40,30 90,50" 
                            />
                            <motion.path 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                transition={{ duration: 0.2, delay: 1.5 }} 
                                viewport={{ once: true }}
                                d="M70,35 L90,50 L75,70" 
                            />
                        </svg>
                        
                        <Link href="/signup" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-[#F97316]/30 hover:shadow-xl hover:-translate-y-1 hover:shadow-[#F97316]/40 transition-all duration-300 relative z-10">
                            Start Free Trial
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>

                    <div className="shrink-0 relative z-10 block lg:hidden w-full">
                        <Link href="/signup" className="flex justify-center items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-lg w-full py-4 rounded-2xl shadow-lg shadow-[#F97316]/30 hover:shadow-xl transition-all duration-300 relative z-10">
                            Start Free Trial
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & About */}
                    <div className="lg:col-span-4 pr-0 lg:pr-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex group">
                                <div className="w-32 md:w-36 h-10 flex items-center justify-start group-hover:scale-105 transition-transform duration-300 origin-left relative">
                                    <Image src="/logo.png" alt="ExamBoost Logo" fill sizes="(max-width: 768px) 150px, 200px" className="object-contain dark:hidden" />
                                    <Image src="/white-logo.png" alt="ExamBoost Logo" fill sizes="(max-width: 768px) 150px, 200px" className="object-contain hidden dark:block" />
                                </div>
                            </Link>

                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm leading-relaxed font-medium">
                                Empowering millions of students across India with cutting-edge technology, AI-driven analytics, and expert-crafted test content.
                            </p>

                            <div className="flex items-center gap-3">
                                {[
                                    { icon: <Youtube className="w-5 h-5" />, hover: "hover:bg-red-50 hover:text-red-600 border-transparent hover:border-red-100 dark:hover:bg-red-900/30 dark:hover:border-red-800" },
                                    { icon: <Instagram className="w-5 h-5" />, hover: "hover:bg-pink-50 hover:text-pink-600 border-transparent hover:border-pink-100 dark:hover:bg-pink-900/30 dark:hover:border-pink-800" },
                                    { icon: <Twitter className="w-5 h-5" />, hover: "hover:bg-blue-50 hover:text-blue-500 border-transparent hover:border-blue-100 dark:hover:bg-blue-900/30 dark:hover:border-blue-800" },
                                    { icon: <MessageCircle className="w-5 h-5" />, hover: "hover:bg-orange-50 hover:text-[#F97316] border-transparent hover:border-orange-100 dark:hover:bg-[#F97316]/20 dark:hover:border-[#F97316]/30" },
                                ].map((social, i) => (
                                    <Link
                                        key={i}
                                        href="/contact"
                                        className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 transition-all duration-300 ${social.hover}`}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                            
                            {/* Animated Signature Graphic */}
                            <div className="mt-8 relative hidden md:block opacity-60 hover:opacity-100 transition-opacity duration-300 w-fit cursor-default">
                                <svg className="w-28 h-16 text-[#F97316] dark:text-orange-400 drop-shadow-sm" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                    <motion.path 
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                                        viewport={{ once: true }}
                                        d="M20,70 C40,10 60,90 80,50 C100,20 120,80 140,40 C160,20 180,70 190,30" 
                                    />
                                    <motion.path 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 2.2 }}
                                        viewport={{ once: true }}
                                        d="M100,90 L180,90" strokeWidth="2" strokeDasharray="4 4" 
                                    />
                                </svg>
                                <p className="text-[10px] font-bold text-slate-800 dark:text-slate-400 mt-1 tracking-[0.2em] uppercase font-serif text-center absolute bottom-0 left-0 right-0">ExamBoost Team</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Custom separator line for larger screens */}
                    <div className="hidden lg:block lg:col-span-1 border-r border-slate-100 dark:border-slate-800 mr-8"></div>

                    {/* Links sections */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <h4 className="text-slate-900 dark:text-white font-black mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F97316] inline-block"></span>
                            Company
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">Contact Us</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <h4 className="text-slate-900 dark:text-white font-black mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F97316] inline-block"></span>
                            Exams
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="/exams/ssc-exams" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">SSC CGL</Link></li>
                            <li><Link href="/exams/upsc-civil-services" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">UPSC CSE</Link></li>
                            <li><Link href="/exams/engineering-entrance/jee" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">IIT JEE</Link></li>
                            <li><Link href="/exams/medical-entrance" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">NEET UG</Link></li>
                            <li><Link href="/exams/banking" className="hover:text-[#F97316] transition-colors font-medium text-sm text-slate-600 dark:text-slate-400">Banking (PO)</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <h4 className="text-slate-900 dark:text-white font-black mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#F97316] inline-block"></span>
                            Reach Us
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-[#F97316]/10 flex items-center justify-center shrink-0 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 border border-transparent group-hover:shadow-md">
                                    <MapPin className="w-5 h-5 shrink-0" />
                                </div>
                                <span className="text-sm font-medium leading-relaxed mt-0.5 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                    123 Education Hub, Sector 62, Noida, Uttar Pradesh, 201309
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-[#F97316]/10 flex items-center justify-center shrink-0 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 border border-transparent group-hover:shadow-md">
                                    <Mail className="w-5 h-5 shrink-0" />
                                </div>
                                <span className="text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">support@examboost.in</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-[#F97316]/10 flex items-center justify-center shrink-0 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 border border-transparent group-hover:shadow-md">
                                    <Phone className="w-5 h-5 shrink-0" />
                                </div>
                                <span className="text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">1800-123-4567</span>
                            </li>
                        </ul>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10"
                >
                    <p className="text-slate-500 font-medium text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} EXAMBOOST. All rights reserved. Made with ❤️ in India.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
                        <Link href="/privacy-policy" className="hover:text-[#F97316] hover:underline transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#F97316] hover:underline transition-colors">Terms of Service</Link>
                        <Link href="/refund" className="hover:text-[#F97316] hover:underline transition-colors">Refund Policy</Link>
                        <Link href="/sitemap" className="hover:text-[#F97316] hover:underline transition-colors">Sitemap</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
