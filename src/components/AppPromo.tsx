"use client";

import { motion } from 'framer-motion';
import { MdSmartphone, MdCheckCircleOutline } from 'react-icons/md';

export default function AppPromo() {
    return (
        <section className="py-24 bg-primary dark:bg-slate-900 transition-colors duration-300 relative z-10 overflow-hidden text-white">

            {/* Abstract Backgrounds */}
            <div className="absolute inset-0 bg-primary/20 opacity-50 pointer-events-none -z-10" />


            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex flex-col items-start gap-6"
                        >
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 dark:bg-accent/10 backdrop-blur-md shadow-sm border border-white/20 text-sm font-bold tracking-widest uppercase mb-2">
                                <MdSmartphone className="w-4 h-4 text-accent" /> Start Learning on the go
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                                Download the App for <br />
                                <span className="text-white">Seamless Preparation</span>
                            </h2>

                            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-xl">
                                Practice mock tests, attend live classes, and get AI performance reports anytime, anywhere.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {['Daily Current Affairs PDF', 'Instant Post-Exam Notifications', 'Offline Mode Available'].map((feat, i) => (
                                    <li key={i} className="flex flex-row items-center gap-3">
                                        <MdCheckCircleOutline className="w-5 h-5 text-accent shrink-0" />
                                        <span className="font-semibold text-white/90">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4">
                                <button className="bg-[#020617] hover:bg-black text-white px-8 py-3.5 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] group border border-slate-800">
                                    <svg viewBox="0 0 512 512" className="w-7 h-7 fill-current group-hover:scale-110 transition-transform">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                                    </svg>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Get it on</span>
                                        <span className="text-lg font-black leading-none mt-0.5">Google Play</span>
                                    </div>
                                </button>

                                <button className="bg-white text-darkText hover:bg-slate-50 px-8 py-3.5 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] group border border-transparent hover:border-slate-200">
                                    <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current group-hover:scale-110 transition-transform">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                    </svg>
                                    <div className="flex flex-col text-left">
                                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Download on the</span>
                                        <span className="text-lg font-black leading-none mt-0.5">App Store</span>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative w-full max-w-md perspective-1000"
                        >
                            {/* Phone Mockup Frame */}
                            <div className="relative border-[10px] border-darkText dark:border-slate-800 rounded-[3rem] shadow-2xl bg-white overflow-hidden aspect-[9/19] transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 z-20">
                                {/* Notch */}
                                <div className="absolute top-0 inset-x-0 h-7 bg-darkText dark:border-slate-800 rounded-b-3xl w-40 mx-auto z-30" />

                                {/* Screen Content: Live Website Iframe Preview */}
                                <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[2.2rem] overflow-hidden pt-7 relative z-10">
                                    <div className="absolute inset-0 top-7 w-[400px] h-[850px] origin-top-left scale-[0.65] md:scale-[0.65] xl:scale-[0.70] pointer-events-none select-none">
                                        <iframe 
                                            src="/" 
                                            className="w-full h-full border-none pointer-events-none" 
                                            scrolling="no" 
                                            tabIndex={-1}
                                            title="Website Mobile Preview"
                                        />
                                    </div>
                                    
                                    {/* Glass reflection overlay for realism */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-20"></div>
                                </div>
                            </div>

                            {/* Floating Notif */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1 }}
                                className="hidden md:flex absolute -left-12 bottom-1/4 bg-white/10 dark:bg-slate-900/80 backdrop-blur-md p-3 rounded-xl items-center gap-3 shadow-2xl border border-white/20 z-30"
                            >
                                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white"><MdCheckCircleOutline className="w-5 h-5" /></div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Experience the App</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium pt-0.5">Smooth, Fast, and Mobile Ready</p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
