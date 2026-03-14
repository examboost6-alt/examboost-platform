"use client";

import { motion } from 'framer-motion';
import { Youtube, Instagram, Twitter, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith('/admin') || pathname.startsWith('/dashboard') || pathname.startsWith('/onboarding')) {
        return null;
    }

    return (
        <footer className="bg-darkText dark:bg-slate-950 text-white pt-24 pb-12 transition-colors duration-300 relative z-10 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand & About */}
                    <div className="lg:col-span-5 pr-0 lg:pr-12">
                        <Link href="/" className="flex items-center gap-2 group mb-8 inline-flex">
                            <div className="w-20 md:w-24 h-8 flex items-center justify-start group-hover:scale-105 transition-transform duration-300 origin-left">
                                <img src="/white-logo.png" alt="ExamBoost Logo" className="w-full h-full object-contain filter drop-shadow-lg" />
                            </div>
                        </Link>

                        <p className="text-gray-400 dark:text-gray-500 mb-8 max-w-sm leading-relaxed font-medium">
                            Empowering millions of students across India to achieve their dreams with cutting-edge technology, AI analytics, and expert content.
                        </p>

                        <div className="flex items-center gap-5">
                            {[
                                { icon: <Youtube className="w-5 h-5" />, color: "hover:bg-red-600 hover:text-white" },
                                { icon: <Instagram className="w-5 h-5" />, color: "hover:bg-pink-600 hover:text-white" },
                                { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-blue-400 hover:text-white" },
                                { icon: <MessageCircle className="w-5 h-5" />, color: "hover:bg-accent hover:text-darkText" },
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href="/contact"
                                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 ${social.color}`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links sections */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest">Exams</h4>
                        <ul className="space-y-4">
                            <li><Link href="/exams/ssc-exams" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">SSC CGL</Link></li>
                            <li><Link href="/exams/upsc-civil-services" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">UPSC CSE</Link></li>
                            <li><Link href="/exams/engineering-entrance/jee" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">IIT JEE</Link></li>
                            <li><Link href="/exams/medical-entrance" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">NEET UG</Link></li>
                            <li><Link href="/exams/banking" className="hover:text-accent transition-colors font-medium text-sm text-gray-400 hover:tracking-wide">Banking (PO)</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest">Contact Info</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-sm font-medium leading-relaxed">
                                    123 Education Hub, Sector 62, Noida, Uttar Pradesh, 201309
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">support@examboost.in</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">1800-123-4567</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 font-medium text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} EXAMBOOST Premium. All rights reserved. Made with ❤️ in India.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-gray-500">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
