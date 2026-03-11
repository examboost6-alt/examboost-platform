"use client";

import { motion } from 'framer-motion';
import { MdPsychology, MdAdsClick, MdLeaderboard, MdLightbulbCircle, MdOutlineVerified } from 'react-icons/md';

const features = [
    {
        icon: <MdPsychology className="w-10 h-10" />,
        title: "AI Performance Analytics",
        desc: "Identify weak chapters instantly. Our AI models analyze your attempts to generate customized study plans that focus on topics where you lose marks.",
        color: "text-purple-600 dark:text-purple-400",
        bgClass: "bg-purple-100 dark:bg-purple-900/40",
    },
    {
        icon: <MdAdsClick className="w-10 h-10" />,
        title: "TCS / NTA Exam Interface",
        desc: "Practice on the exact same interface used in real exams (SSC, JEE, NEET). Eliminate exam-day anxiety and get familiar with actual testing environments.",
        color: "text-blue-600 dark:text-blue-400",
        bgClass: "bg-blue-100 dark:bg-blue-900/40",
    },
    {
        icon: <MdLeaderboard className="w-10 h-10" />,
        title: "All India Ranking",
        desc: "Know exactly where you stand. Compete with over 10 Lakh aspirants nationwide with our real-time leaderboard and multi-dimensional rank analysis.",
        color: "text-rose-600 dark:text-rose-400",
        bgClass: "bg-rose-100 dark:bg-rose-900/40",
    },
    {
        icon: <MdLightbulbCircle className="w-10 h-10" />,
        title: "Detailed Video Solutions",
        desc: "Don't just see the answer, understand the logic behind it. Get access to comprehensive step-by-step video solutions by top educators for tough questions.",
        color: "text-amber-600 dark:text-amber-400",
        bgClass: "bg-amber-100 dark:bg-amber-900/40",
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B1120] relative z-10">

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
                    
                    {/* Left Text Column */}
                    <div className="w-full lg:w-5/12 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6"
                        >
                            <MdOutlineVerified className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">The Examboost Advantage</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
                        >
                            Why Choose <span className="text-primary block mt-2">Us?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Stop practicing blindly. Our platform uses advanced technology to optimize your revision, significantly increasing your chances of clearing the cut-off.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:flex"
                        >
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" alt="Analysis Dashboard" className="w-full rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 object-cover aspect-video" />
                        </motion.div>
                    </div>

                    {/* Right Features Grid */}
                    <div className="w-full lg:w-7/12 grid sm:grid-cols-2 gap-6 lg:gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="bg-white dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col items-start text-left"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/50 ${feature.bgClass}`}>
                                    <div className={`${feature.color} transition-transform duration-500 hover:scale-110 flex items-center justify-center`}>
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                                    {feature.title}
                               </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-[15px] font-medium leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
