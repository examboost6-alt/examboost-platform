"use client";

import React, { useState } from 'react';
import { CheckCircle, Target, Award, X, ShoppingCart, Eye, Calendar, Clock, BookOpen, Layers, ShieldCheck, Download, Crosshair, CheckSquare } from 'lucide-react';

export default function CapfTestSeriesCards({ examName = 'UPSC CAPF (AC)' }: { examName?: string }) {
    const [selectedPackage, setSelectedPackage] = useState<"essential" | "ultimate" | null>(null);

    // Deep, detailed data for UPSC CAPF (AC)
    const packages = {
        essential: {
            name: `ExamBoost ${examName} Paper 1 Focus`,
            price: "₹899", // Competitive pricing
            image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?auto=format&fit=crop&q=80&w=800",
            description: `Targeted practice for ${examName} 2026 Paper I (Objective) with OMR simulators.`,
            testsIncluded: [
                "15 Full Length Paper I Mock Tests",
                "60 Subject-wise Tests (Science, Geography, Polity)",
                "Last 5 Years PYQ Mocks (Paper I)",
                "Detailed Performance Analytics"
            ],
            detailedPapers: [
                { title: "Paper I Full Length Mocks", count: 15, detail: "Matching exact 125 Questions, 250 Marks format with -1/3rd negative marking." },
                { title: "Science & Current Events focus", count: 20, detail: "Special emphasis on General Science & Internal Security issues." },
                { title: "PYQ Paper 1 Mocks", count: 5, detail: "Actual UPSC papers from 2021-2025 simulated as timed tests." },
                { title: "Analytics Engine", count: "∞", detail: "Topic-wise weakness detection to boost the 120+ safe score chances." },
            ],
            features: [
                { title: "Bilingual Solutions", detail: "Step-by-step explanations in both English and Hindi." },
                { title: "Rank Prediction", detail: "Compare performance with other serious Assistant Commandant aspirants." },
                { title: "NCERT Base Tests", detail: "Basic level tests included bridging the General Studies gap." },
            ],
            otherFeatures: [
                "Unlimited Attempts",
                "Mobile & Desktop Access",
                "Current Affairs Magazine PDFs",
                "Defense News Updates"
            ],
            bestFor: ["Candidates strong in writing but weak in objective", "First attempt familiarization", "Self revising aspirants"]
        },
        ultimate: {
            name: `ExamBoost ${examName} Officer Bundle`,
            price: "₹1899", // Premium covering Paper 2 evaluation
            image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
            description: "The complete 2-Paper solution including subjective evaluation for Paper II (Essay, Precis & Comprehension).",
            testsIncluded: [
                "25 Full Length Paper I Mock Tests",
                "10 Paper II (Descriptive) Tests with Evaluation",
                "Grammar & Precis Masterclasses",
                "Interview (DAF) Guidance"
            ],
            detailedPapers: [
                { title: "Complete Simulation (Paper I + II)", count: 10, detail: "Write Paper I in morning, Paper II in afternoon simulating the exact D-day fatigue." },
                { title: "Paper II Expert Evaluation", count: 10, detail: "Detailed line-by-line checking of Essays, Arguments, and Precis within 5 days." },
                { title: "Grammar & Vocab Practice", count: 30, detail: "Daily mini-tests to secure maximum marks in the objective part of Paper II." },
                { title: "Internal Security Notes", count: "PDF", detail: "Exclusive material covering Left Wing Extremism, Border Management, etc." },
            ],
            features: [
                { title: "Paper 2 Argument structuring", detail: "Feedback specifically focused on For/Against argument questions unique to CAPF." },
                { title: "One-to-One Mentor Session", detail: "Two strategy calls with recently recommended Assistant Commandants." },
                { title: "PET/PST Guidance", detail: "Medical standards and physical test preparation roadmap." },
            ],
            otherFeatures: [
                "Everything in Paper 1 Focus",
                "Live Model Answer Discussions",
                "Dedicated Doubt Group",
                "Toppers Answer Copies",
                "Grammar Rulebook PDF"
            ],
            bestFor: ["Candidates struggling with Paper 2", "Comprehensive Rank 100 target", "Repeater candidates"]
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {/* Essential Card */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1.5 flex flex-col group relative">
                    <div className="p-8 md:p-10 pb-0">
                        <div className="inline-flex px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-widest mb-6 border border-slate-200 dark:border-slate-700">
                            Objective
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">{packages.essential.name}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 min-h-[4rem]">
                            {packages.essential.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">{packages.essential.price}</span>
                            <span className="text-slate-500 font-semibold tracking-wide uppercase text-xs">/ Paper I Only</span>
                        </div>
                    </div>

                    <div className="px-8 md:px-10 flex flex-col flex-1">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.essential.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                    <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="leading-snug">{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium opacity-60 pt-2">
                                <Target className="w-5 h-5 text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
                                <span className="leading-snug">No Paper II Evaluation</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8 md:pb-10">
                            <button
                                onClick={() => setSelectedPackage('essential')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700 text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> Detailed View
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-transform hover:-translate-y-0.5 shadow-lg shadow-slate-900/10 text-sm md:text-base shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ultimate Card */}
                <div className="bg-gradient-to-br from-[#1b3d2b] to-[#0c1e14] dark:from-[#112a1d] dark:to-[#050f09] border border-[#2d6145] dark:border-[#1e4430] rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 shadow-[0_20px_40px_-15px_rgba(27,61,43,0.4)] flex flex-col relative group">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

                    <div className="p-8 md:p-10 pb-0 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400 text-emerald-950 font-black text-xs uppercase tracking-widest mb-6 shadow-sm border border-emerald-300">
                            <ShieldCheck className="w-4 h-4" /> Recommended
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">{packages.ultimate.name}</h3>
                        <p className="text-white/80 text-base leading-relaxed mb-6 min-h-[4rem] font-medium">
                            {packages.ultimate.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                            <span className="text-4xl font-black text-white">{packages.ultimate.price}</span>
                            <span className="text-white/50 font-semibold tracking-wide uppercase text-xs">/ Dual Paper Evaluation</span>
                        </div>
                    </div>

                    <div className="px-8 md:px-10 flex flex-col flex-1 relative z-10">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.ultimate.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/95 font-medium">
                                    <div className="p-0.5 rounded-full bg-emerald-500/20 shrink-0 mt-0.5 border border-emerald-500/30"><CheckCircle className="w-4 h-4 text-emerald-400" /></div>
                                    <span className="leading-snug">{test}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8 md:pb-10">
                            <button
                                onClick={() => setSelectedPackage('ultimate')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> Detailed View
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-black bg-emerald-500 text-emerald-950 hover:bg-emerald-400 transition-transform shadow-[0_10px_20px_rgba(16,185,129,0.2)] text-sm md:text-base shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Secure Seat
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Detail Modal Overlay */}
            {selectedPackage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-slate-900/80 transition-all duration-300 overflow-y-auto">
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl border border-slate-200/50 dark:border-slate-700/50 animate-in fade-in zoom-in-95 duration-200 sm:my-auto">

                        {/* Modal Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 lg:p-10 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/20 gap-6 rounded-t-[2.5rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-emerald-500/5 to-transparent blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner shrink-0 hidden sm:flex">
                                        <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                                                {packages[selectedPackage].name}
                                            </h3>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{packages[selectedPackage].description}</p>
                                    </div>
                                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-6 mt-2 sm:mt-0">
                                        <div className="text-emerald-700 dark:text-emerald-400 font-black text-4xl">{packages[selectedPackage].price}</div>
                                        <button
                                            onClick={() => setSelectedPackage(null)}
                                            className="p-2 sm:p-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 text-slate-600 dark:text-slate-400 transition-all shadow-sm"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body - Detailed Breakdown */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full custom-scrollbar">
                            <div className="grid grid-cols-1 lg:grid-cols-12 max-w-none w-full m-0 p-0">

                                {/* Detailed Papers Grid Column */}
                                <div className="lg:col-span-7 border-r border-slate-100 dark:border-slate-800/80 p-6 md:p-8 lg:p-10 bg-white dark:bg-slate-900 space-y-10">
                                    <div>
                                        <h4 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
                                            <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-500" /> Detailed Deliverables
                                        </h4>

                                        <div className="space-y-4">
                                            {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center shrink-0 shadow-sm">
                                                        <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 leading-none">{paper.count}</div>
                                                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{paper.count === 'PDF' ? 'Docs' : 'Tests'}</div>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{paper.title}</h5>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{paper.detail}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Features & Specs Column */}
                                <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 bg-slate-50/50 dark:bg-slate-800/10 space-y-10">

                                    {/* Advanced Features List */}
                                    <div>
                                        <h4 className="flex items-center gap-3 text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-6">
                                            <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-500" /> Mentorship & Analysis
                                        </h4>
                                        <ul className="space-y-6">
                                            {packages[selectedPackage].features.map((feature, idx) => (
                                                <li key={idx} className="flex gap-4 group">
                                                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800 group-hover:scale-110 transition-transform">
                                                        <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                                                    </div>
                                                    <div>
                                                        <span className="block font-bold text-slate-900 dark:text-white text-base mb-1">{feature.title}</span>
                                                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed block">{feature.detail}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Platform Features Grid */}
                                    <div>
                                        <h4 className="flex items-center gap-3 text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-5">
                                            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-500" /> Inclusive Features
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div> {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] rounded-b-[2.5rem] relative z-10">
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 dark:text-slate-400 text-sm font-medium w-full sm:w-auto">
                                <span className="flex items-center gap-2 shrink-0 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-500" /> Target 2026
                                </span>
                            </div>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10 rounded-2xl font-black text-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Proceed to Enrollment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
