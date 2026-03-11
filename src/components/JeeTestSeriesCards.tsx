"use client";

import React, { useState } from 'react';
import { CheckCircle, Target, Award, X, FileText, ShoppingCart, Eye, Calendar, Clock, BookOpen, Layers } from 'lucide-react';

export default function JeeTestSeriesCards({ examName = 'JEE Main' }: { examName?: string }) {
    const [selectedPackage, setSelectedPackage] = useState<"essential" | "ultimate" | null>(null);

    // Deep, detailed data for JEE series
    const packages = {
        essential: {
            name: `ExamBoost ${examName} Essential`,
            price: examName === 'JEE Advanced' ? "₹899" : "₹799",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
            description: `Targeted practice for ${examName} with high-quality mock tests and chapter-wise assessments.`,
            testsIncluded: [
                "10 Full Length NTA Pattern Mock Tests",
                "10 Chapter-wise Tests"
            ],
            detailedPapers: [
                { title: "Full Syllabus Mock Tests", count: 10, detail: "Strictly strictly on latest NTA pattern with new numerical value type questions." },
                { title: "Chapter Tests", count: 10, detail: "Core chapters spanning Physics, Chemistry & Maths." }
            ],
            features: [
                { title: "Instant Solutions", detail: "Detailed text answers immediately after submission." },
                { title: "All India Rank", detail: "Compare your performance with thousands of aspirants." },
                { title: "Performance Analysis", detail: "Check your accuracy and time spent per section." },
            ],
            otherFeatures: [
                "Real Exam Like NTA Interface",
                "Unlimited Reattempts",
                "Subject-wise Score Analysis",
                "Desktop & Mobile Access"
            ],
            bestFor: ["Self-studying students", "Exam pattern familiarization", "Regular revision"]
        },
        ultimate: {
            name: `ExamBoost ${examName} Ultimate`,
            price: examName === 'JEE Advanced' ? "₹1499" : "₹1299",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
            description: "The most comprehensive package with standard and intensive mock papers for ultimate readiness.",
            testsIncluded: [
                "20 Full Length NTA Mock Tests",
                "5 Intensive Level Practice Papers"
            ],
            detailedPapers: [
                { title: "Standard Mock Tests", count: 20, detail: "100% aligned with standard NTA exam difficulty levels." },
                { title: "Intensive Papers", count: 5, detail: "High-level tests for deeper conceptual application and rank boosting." }
            ],
            features: [
                { title: "Video & Text Solutions", detail: "Step-by-step video explanations for tough questions." },
                { title: "AI Weak Topic Detection", detail: "System automatically identifies and flags your weak areas." },
                { title: "Strategic Analytics Dashboard", detail: "Time mapping, accuracy tracking, and Rank Predictor logic." },
            ],
            otherFeatures: [
                "Question Bookmark & Review System",
                "All India Advanced Leaderboard",
                "Smart AI Practice Mode (Targeted weak areas)",
                "Doubt Resolution Priority",
                "Downloadable PDF Reports"
            ],
            bestFor: ["Serious Rankers targeting 99+ %ile", "Deep Concept Building", "Comprehensive Preparation"]
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {/* Essential Card */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1.5 flex flex-col group">
                    <div className="p-8 pb-0">
                        <div className="inline-flex px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-wider mb-4 border border-slate-200 dark:border-slate-700">
                            Starter Plan
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">{packages.essential.name}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 min-h-[3rem]">
                            {packages.essential.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{packages.essential.price}</span>
                            <span className="text-slate-500 font-medium">/ Complete Validity</span>
                        </div>
                    </div>

                    <div className="px-8 flex flex-col flex-1">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.essential.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium opacity-60">
                                <CheckCircle className="w-5 h-5 text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
                                <span>No Previous Year Papers</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium opacity-60">
                                <CheckCircle className="w-5 h-5 text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
                                <span>Basic Analytics Only</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8">
                            <button
                                onClick={() => setSelectedPackage('essential')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> View Details
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-transform hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 text-sm md:text-base shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ultimate Card */}
                <div className={`${examName === 'JEE Advanced' ? 'bg-gradient-to-br from-indigo-600 to-indigo-900 border-indigo-400/30' : examName === 'BITSAT' ? 'bg-gradient-to-br from-emerald-600 to-teal-800 border-emerald-400/30' : examName === 'VITEEE' ? 'bg-gradient-to-br from-cyan-600 to-sky-800 border-cyan-400/30' : 'bg-gradient-to-br from-primary to-indigo-700 dark:from-slate-800 dark:to-slate-900 border-primary/20'} rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1.5 shadow-xl ${examName === 'JEE Advanced' ? 'shadow-indigo-600/30' : examName === 'BITSAT' ? 'shadow-emerald-600/30' : examName === 'VITEEE' ? 'shadow-cyan-600/30' : 'shadow-primary/20'} flex flex-col relative group`}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <Award className="w-48 h-48 text-white" />
                    </div>

                    <div className="p-8 pb-0 relative z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 font-black text-xs uppercase tracking-wider mb-4 shadow-sm">
                            <Target className="w-3.5 h-3.5" /> Recommended
                        </div>
                        <h3 className="text-3xl font-black text-white tracking-tight mb-2">{packages.ultimate.name}</h3>
                        <p className="text-white/80 text-base leading-relaxed mb-6 min-h-[3rem]">
                            {packages.ultimate.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-white/20 pb-8">
                            <span className="text-4xl font-extrabold text-white">{packages.ultimate.price}</span>
                            <span className="text-white/60 font-medium">/ Complete Validity</span>
                        </div>
                    </div>

                    <div className="px-8 flex flex-col flex-1 relative z-10">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.ultimate.testsIncluded.slice(0, 4).map((test, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white font-medium">
                                    <div className="p-0.5 rounded-full bg-white/20 shrink-0 mt-0.5"><CheckCircle className="w-4 h-4 text-white" /></div>
                                    <span>{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 font-medium text-yellow-300">
                                <div className="p-0.5 rounded-full bg-yellow-400/20 shrink-0 mt-0.5"><CheckCircle className="w-4 h-4 text-yellow-400" /></div>
                                <span>Advanced AI Performance Analytics Included</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8">
                            <button
                                onClick={() => setSelectedPackage('ultimate')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> View Details
                            </button>
                            <button className={`w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white ${examName === 'JEE Advanced' ? 'text-indigo-900 hover:bg-indigo-50' : examName === 'BITSAT' ? 'text-emerald-900 hover:bg-emerald-50' : examName === 'VITEEE' ? 'text-cyan-900 hover:bg-cyan-50' : 'text-slate-900 hover:bg-slate-50'} transition-transform hover:-translate-y-0.5 shadow-xl shadow-white/10 text-sm md:text-base shrink-0`}>
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Detail Modal Overlay */}
            {selectedPackage && (
                <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 backdrop-blur-sm bg-slate-900/60 dark:bg-slate-950/80 transition-all duration-300">
                    {/* Click outside to close */}
                    <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedPackage(null)}></div>
                    
                    <div className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] flex flex-col rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl relative z-10 animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300">

                        {/* Modal Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-t-[2rem] gap-4 shrink-0 relative">
                            {/* Mobile close button (top right absolute) */}
                            <button
                                onClick={() => setSelectedPackage(null)}
                                className="sm:hidden absolute top-5 right-5 p-2 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="pr-10 sm:pr-0">
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1.5">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                                        {packages[selectedPackage].name}
                                    </h3>
                                    {selectedPackage === 'ultimate' && <span className={`text-[10px] md:text-xs inline-flex ${examName === 'JEE Advanced' ? 'bg-indigo-600' : examName === 'BITSAT' ? 'bg-emerald-600' : examName === 'VITEEE' ? 'bg-cyan-600' : 'bg-primary'} text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm`}>Pro Package</span>}
                                </div>
                                <p className="text-sm md:text-base text-slate-500 font-medium line-clamp-2 md:line-clamp-none">{packages[selectedPackage].description}</p>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-4 border-t sm:border-t-0 border-slate-200 dark:border-slate-700 pt-4 sm:pt-0 mt-2 sm:mt-0">
                                <div className="text-primary dark:text-accent font-black text-3xl md:text-4xl">{packages[selectedPackage].price}</div>
                                <button
                                    onClick={() => setSelectedPackage(null)}
                                    className="hidden sm:flex p-2.5 bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors shadow-sm shrink-0"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Detailed Breakdown */}
                        <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
                            <div className="flex flex-col lg:flex-row w-full m-0 p-0">

                                {/* Left Column: Detailed Papers */}
                                <div className="lg:w-7/12 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800 p-5 md:p-8 bg-white dark:bg-slate-950">
                                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-5 md:mb-6">
                                        <BookOpen className={`w-5 h-5 md:w-6 md:h-6 ${examName === 'BITSAT' ? 'text-emerald-600 dark:text-emerald-400' : examName === 'VITEEE' ? 'text-cyan-600 dark:text-cyan-400' : examName === 'JEE Advanced' ? 'text-indigo-600 dark:text-indigo-400' : 'text-primary dark:text-accent'}`} /> Included Content
                                    </h4>

                                    <div className="space-y-4">
                                        {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 md:p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-200 dark:hover:border-slate-700 transition-colors">
                                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center shrink-0 shadow-sm">
                                                    <div className={`text-xl md:text-2xl font-black ${examName === 'JEE Advanced' ? 'text-indigo-600 dark:text-indigo-400' : examName === 'BITSAT' ? 'text-emerald-600 dark:text-emerald-400' : examName === 'VITEEE' ? 'text-cyan-600 dark:text-cyan-400' : 'text-primary dark:text-accent'} leading-none`}>{paper.count}</div>
                                                    <div className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase mt-1">Tests</div>
                                                </div>
                                                <div>
                                                    <h5 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">{paper.title}</h5>
                                                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{paper.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mock Exam Teaser Banner */}
                                    <div className="mt-6 md:mt-8 p-4 md:p-5 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex gap-3 md:gap-4 items-start">
                                        <Layers className="w-6 h-6 md:w-8 md:h-8 text-blue-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h5 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mb-1">Authentic CBT Interface</h5>
                                            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Tests are conducted on an interface that perfectly simulates the real test player, complete with question palettes, mark-for-review toggles, and strict time limits.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Features & Specs */}
                                <div className="lg:w-5/12 p-5 md:p-8 bg-slate-50/50 dark:bg-slate-900/30">
                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-slate-900 dark:text-white mb-4">
                                            <Target className={`w-4 h-4 md:w-5 md:h-5 ${examName === 'BITSAT' ? 'text-emerald-600 dark:text-emerald-400' : examName === 'VITEEE' ? 'text-cyan-600 dark:text-cyan-400' : examName === 'JEE Advanced' ? 'text-indigo-600 dark:text-indigo-400' : 'text-primary dark:text-accent'}`} /> Key Features
                                        </h4>
                                        <ul className="space-y-4 md:space-y-5">
                                            {packages[selectedPackage].features.map((feature, idx) => (
                                                <li key={idx} className="flex gap-3 md:gap-4">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-500" />
                                                    </div>
                                                    <div>
                                                        <span className="block text-sm md:text-base font-bold text-slate-900 dark:text-white">{feature.title}</span>
                                                        <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-0.5 md:mt-1 block leading-relaxed">{feature.detail}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                                            <Award className={`w-4 h-4 md:w-5 md:h-5 ${examName === 'BITSAT' ? 'text-emerald-600 dark:text-emerald-400' : examName === 'VITEEE' ? 'text-cyan-600 dark:text-cyan-400' : examName === 'JEE Advanced' ? 'text-indigo-600 dark:text-indigo-400' : 'text-primary dark:text-accent'}`} /> Platform Highlights
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5 md:gap-2 px-3 py-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 w-full">
                                                    <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500 shrink-0" /> {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl shadow-sm">
                                        <h4 className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">Best Suited For</h4>
                                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                                            {packages[selectedPackage].bestFor.map((tag, idx) => (
                                                <span key={idx} className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-md text-[10px] md:text-xs font-bold border border-slate-200 dark:border-slate-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 md:p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 rounded-b-[2rem]">
                            <div className="flex items-center gap-2 sm:gap-3 text-slate-600 dark:text-slate-400 text-xs md:text-sm font-medium w-full sm:w-auto justify-center sm:justify-start">
                                <span className="flex items-center gap-1 md:gap-1.5"><Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" /> Validity: {examName} '26</span>
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                <span className="flex items-center gap-1 md:gap-1.5"><Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" /> Instant Access</span>
                            </div>
                            <button className={`w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 md:py-4 px-8 md:px-12 rounded-xl font-bold text-base md:text-lg ${examName === 'JEE Advanced' ? 'bg-indigo-600 hover:bg-indigo-700' : examName === 'BITSAT' ? 'bg-emerald-600 hover:bg-emerald-700' : examName === 'VITEEE' ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-primary hover:bg-primary/90'} text-white transition-transform hover:-translate-y-1 shadow-md shrink-0`}>
                                <ShoppingCart className="w-5 h-5" /> Buy Now
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
