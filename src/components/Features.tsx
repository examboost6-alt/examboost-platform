"use client";

import { motion } from 'framer-motion';
import { MdPsychology, MdAdsClick, MdLeaderboard, MdLightbulbCircle, MdOutlineVerified } from 'react-icons/md';
import Image from 'next/image';

export default function Features() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#0B1120] relative z-10 border-t border-slate-100 dark:border-slate-800">
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900/30 to-transparent pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 shadow-sm mb-6"
                    >
                        <MdOutlineVerified className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">The Examboost Advantage</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
                    >
                        Built to Give You an <span className="text-[#F97316]">Unfair Advantage</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                    >
                        Experience the most powerful testing engine designed specifically to optimize your scores, identify weak spots, and simulate the exact conditions of the official exam.
                    </motion.p>
                </div>

                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    
                    {/* Big Item 1 (Spans 2 cols on MD) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden relative group flex flex-col justify-between"
                    >
                        <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 to-transparent dark:from-blue-900/20 pointer-events-none transition-colors duration-500"></div>
                        
                        <div className="relative z-10 w-full md:w-[50%] lg:w-[45%] mb-4 md:mb-12">
                            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mb-8 border border-blue-200 dark:border-blue-800/50">
                                <MdPsychology className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-serif font-black text-slate-900 dark:text-white mb-4 leading-tight">AI Performance Analytics</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">
                                Identify weak chapters instantly. Our AI models analyze your attempts to generate customized study plans that focus on topics where you lose marks.
                            </p>
                        </div>

                        {/* Complete Visual Mockup inside card */}
                        <div className="absolute -bottom-8 -right-8 w-[60%] md:w-[50%] lg:w-[50%] h-[85%] bg-white dark:bg-slate-900 rounded-tl-3xl border-t border-l border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] p-5 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-500 ease-out hidden md:flex flex-col">
                            {/* Mockup Header */}
                            <div className="flex items-center justify-between mb-4 mt-1">
                                <div>
                                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Chapter Analysis</div>
                                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Physics • Kinematics</div>
                                </div>
                                <div className="px-2 py-0.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800/60 rounded-full text-[10px] font-bold">
                                    Needs Work
                                </div>
                            </div>

                            {/* Mockup Chart/Progress Area */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800 mb-2 flex-1 flex flex-col justify-center">
                                <div className="flex justify-between text-[10px] font-semibold text-slate-500 mb-1.5">
                                    <span>Accuracy</span>
                                    <span className="text-slate-800 dark:text-white">42%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-3">
                                    <div className="w-[42%] h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-2 mt-1">
                                    <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                                        <div className="text-[9px] text-slate-400 font-medium mb-0.5">Time/Ques</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">2m 15s</div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                                        <div className="text-[9px] text-slate-400 font-medium mb-0.5">Attempted</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">18/25</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vertical Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden relative group flex flex-col justify-between"
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/40 text-orange-600 flex items-center justify-center mb-8 border border-orange-200 dark:border-orange-800/50">
                                <MdAdsClick className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-black mb-4 text-slate-900 dark:text-white">Official Exam Interface</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Practice on the exact same UI used in real exams (SSC, JEE, NEET). Eliminate exam-day anxiety.
                            </p>
                            
                            {/* Interactive UI element */}
                            <div className="mt-auto pt-10">
                                <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 p-4 rounded-xl shadow border border-slate-200 dark:border-slate-700 transform rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-between font-bold text-sm">
                                    Mark for Review <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Square Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-[2.5rem] p-8 md:p-10 shadow-sm relative group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/40 text-green-600 flex items-center justify-center mb-8 border border-green-200 dark:border-green-800/50">
                            <MdLeaderboard className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-black mb-4">All India Ranking</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            Compete with over 10 Lakh aspirants nationwide with our real-time leaderboard and multi-dimensional rank analysis.
                        </p>
                    </motion.div>

                    {/* Wide Item 4 (Spans 2 cols on MD) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-2 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden relative flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="w-full md:w-1/2 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 flex items-center justify-center mb-8 border border-yellow-200 dark:border-yellow-800/50">
                                <MdLightbulbCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-4">Detailed Video Solutions</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Don't just see the answer, understand the logic behind it. Get access to comprehensive step-by-step video solutions by top educators for tough questions.
                            </p>
                        </div>
                        
                        <div className="w-full md:w-1/2 bg-white dark:bg-slate-900 rounded-2xl aspect-video relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-sm border border-slate-200 dark:border-slate-700">
                            <Image src="https://images.unsplash.com/photo-1633534571960-93cb741984fb?q=80&w=800&auto=format&fit=crop" alt="Detailed Video Solutions" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 opacity-90 mix-blend-multiply dark:mix-blend-normal" />
                            <div className="absolute bg-white/80 dark:bg-slate-900/80 backdrop-blur w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
