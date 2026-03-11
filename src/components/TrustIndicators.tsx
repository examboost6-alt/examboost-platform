"use client";

import { motion } from 'framer-motion';
import { MdOutlineGroups, MdOutlineDescription, MdOutlineSupportAgent, MdOutlineSecurity } from 'react-icons/md';

const stats = [
    { icon: <MdOutlineGroups className="w-8 h-8" />, count: "10 Lakh+", label: "Happy Students" },
    { icon: <MdOutlineDescription className="w-8 h-8" />, count: "50 Million+", label: "Tests Attempted" },
    { icon: <MdOutlineSupportAgent className="w-8 h-8" />, count: "24/7", label: "Mentor Support" },
    { icon: <MdOutlineSecurity className="w-8 h-8" />, count: "100%", label: "Secure Platform" },
];

export default function TrustIndicators() {
    return (
        <section className="py-16 bg-white dark:bg-[#0B1120] relative z-10 border-t border-slate-200 dark:border-slate-800/50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                
                {/* Exam Board / Partner Strip with Real Logos */}
                <div className="mb-16">
                    <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Trusted by Aspirants Preparing For</p>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Real logos sourced from official websites */}
                        <div className="h-12 w-auto flex items-center justify-center">
                            <img src="https://nta.ac.in/img/National_Testing_Agency_logo.png" alt="NTA" className="max-h-full object-contain" onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/en/e/e0/National_Testing_Agency_logo.png" }} />
                        </div>
                        <div className="h-16 w-auto flex items-center justify-center -my-2">
                            <img src="https://ssc.gov.in/assets/images/ssc-logo.png" alt="SSC" className="max-h-full object-contain" onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Staff_Selection_Commission_Logo.svg/1024px-Staff_Selection_Commission_Logo.svg.png" }} />
                        </div>
                        <div className="h-16 w-auto flex items-center justify-center -my-2">
                            <img src="https://upsc.gov.in/sites/all/themes/upsc/images/upsc_logo.png" alt="UPSC" className="max-h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-black text-3xl">UPSC</span>' }} />
                        </div>
                        <div className="flex items-center gap-2 font-black text-2xl text-slate-800 dark:text-white">
                            <img src="https://www.ibps.in/wp-content/uploads/2023/10/IBPS_logo-transparent-white-bg-300x126.png" alt="IBPS" className="h-10 object-contain mix-blend-multiply dark:mix-blend-lighten filter dark:invert" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-black text-3xl">IBPS</span>' }} />
                        </div>
                        <div className="h-16 w-auto flex items-center justify-center -my-2">
                            <img src="https://indianrailways.gov.in/railwayboard/images/IR_Logo_0.png" alt="RRB" className="max-h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-black italic text-3xl">RRB</span>' }} />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-16"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-12 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                                {stat.count}
                            </h4>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
