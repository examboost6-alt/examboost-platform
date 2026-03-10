"use client";

import React, { useState } from 'react';
import { CheckCircle, Target, Award, X, ShoppingCart, Eye, Calendar, Clock, BookOpen, Layers, ShieldCheck, Download, Crosshair, CheckSquare, Compass } from 'lucide-react';

export default function CdsTestSeriesCards({ examName = 'UPSC CDS' }: { examName?: string }) {
    const [selectedPackage, setSelectedPackage] = useState<"ota" | "ima" | null>(null);

    // Deep, detailed data for UPSC CDS
    const packages = {
        ota: {
            name: `ExamBoost ${examName} OTA Special`,
            price: "₹899", // Competitive pricing
            image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?auto=format&fit=crop&q=80&w=800",
            description: `Targeted practice for Officers Training Academy (OTA) - English & GK Only.`,
            testsIncluded: [
                "15 Full Length OTA Mock Tests (Eng + GK)",
                "50 Sectional Tests (Vocab, History, GS)",
                "Last 7 Years PYQ Mocks",
                "Detailed Performance Analytics"
            ],
            detailedPapers: [
                { title: "OTA Full Length Simulators", count: 15, detail: "Matching exact 120 Questions each for English and GK, 200 Marks total format." },
                { title: "English Vocab Focus", count: 30, detail: "Special emphasis on Antonyms/Synonyms, Idioms, and Error Spotting." },
                { title: "PYQ OTA Mocks", count: 7, detail: "Actual UPSC OTA papers from 2019-2025 simulated as timed tests." },
                { title: "Analytics Engine", count: "∞", detail: "Topic-wise weakness detection to boost the 105+ safe score chances." },
            ],
            features: [
                { title: "Bilingual GS Solutions", detail: "Step-by-step explanations for General Knowledge in both English and Hindi." },
                { title: "Rank Prediction", detail: "Compare performance with other serious OTA aspirants." },
                { title: "Current Affairs Coverage", detail: "Dedicated tests for recent defense news and international events." },
            ],
            otherFeatures: [
                "Unlimited Attempts",
                "Mobile & Desktop Access",
                "Current Affairs Magazine PDFs",
                "SSB Basic Guide PDF"
            ],
            bestFor: ["Female Candidates", "Non-Math background students", "Targeting Short Service Commission"]
        },
        ima: {
            name: `ExamBoost ${examName} Complete Foundation`,
            price: "₹1299", // Premium covering Maths
            image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
            description: "The complete 3-Paper solution including Elementary Mathematics for IMA, INA, and AFA.",
            testsIncluded: [
                "20 Full Length Mock Tests (Eng + GK + Math)",
                "80 Sectional & Topic-wise Tests",
                "Math Short-Tricks Masterclasses",
                "SSB Screening (OIR) Practice"
            ],
            detailedPapers: [
                { title: "Complete Simulation", count: 20, detail: "Write English, GK, and Math back-to-back simulating the exact 6-hour D-day fatigue." },
                { title: "Advanced Math Sectionals", count: 40, detail: "Focused tests on Trigonometry, Geometry, and Mensuration." },
                { title: "PYQ IMA Mocks", count: 10, detail: "Last 10 years papers solved and simulated." },
                { title: "OIR & PPDT Practice", count: 15, detail: "Exclusive material for SSB Day 1 screening." },
            ],
            features: [
                { title: "Math Trick Solutions", detail: "Detailed video & text solutions showing conventional plus shortcut methods." },
                { title: "One-to-One Mentor Session", detail: "Strategy call with recently recommended candidates (IMA/AFA)." },
                { title: "Doubt Resolution Engine", detail: "Get your math doubts solved within 24 hours." },
            ],
            otherFeatures: [
                "Everything in OTA Special",
                "Live Model Test Discussions",
                "Dedicated Doubt Group",
                "Math Formula Cheat Sheet",
                "Toppers Time Management Guide"
            ],
            bestFor: ["Air Force Academy (AFA) aspirants", "Science/Math background students", "Targeting Permanent Commission"]
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {/* OTA Card */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1.5 flex flex-col group relative">
                    <div className="p-8 md:p-10 pb-0">
                        <div className="inline-flex px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-widest mb-6 border border-slate-200 dark:border-slate-700">
                            OTA Only
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">{packages.ota.name}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 min-h-[4rem]">
                            {packages.ota.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">{packages.ota.price}</span>
                            <span className="text-slate-500 font-semibold tracking-wide uppercase text-xs">/ English + GK</span>
                        </div>
                    </div>

                    <div className="px-8 md:px-10 flex flex-col flex-1">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.ota.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                    <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-500 shrink-0 mt-0.5" />
                                    <span className="leading-snug">{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium opacity-60 pt-2">
                                <Target className="w-5 h-5 text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
                                <span className="leading-snug">No Mathematics Tests</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8 md:pb-10">
                            <button
                                onClick={() => setSelectedPackage('ota')}
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

                {/* IMA Card */}
                <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] dark:from-[#0c0a20] dark:to-[#020617] border border-indigo-900/50 dark:border-indigo-500/20 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 shadow-[0_20px_40px_-15px_rgba(30,27,75,0.4)] flex flex-col relative group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors"></div>
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>

                    <div className="absolute top-8 right-8 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500 hidden sm:flex">
                        <Compass className="w-8 h-8 text-indigo-400" />
                    </div>

                    <div className="p-8 md:p-10 pb-0 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 font-black text-xs uppercase tracking-widest mb-6 shadow-sm border border-indigo-400/30">
                            <ShieldCheck className="w-4 h-4" /> IMA / AFA / INA
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">{packages.ima.name}</h3>
                        <p className="text-white/80 text-base leading-relaxed mb-6 min-h-[4rem] font-medium">
                            {packages.ima.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                            <span className="text-4xl font-black text-white">{packages.ima.price}</span>
                            <span className="text-white/50 font-semibold tracking-wide uppercase text-xs">/ All 3 Papers</span>
                        </div>
                    </div>

                    <div className="px-8 md:px-10 flex flex-col flex-1 relative z-10">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.ima.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/95 font-medium">
                                    <div className="p-0.5 rounded-full bg-indigo-500/20 shrink-0 mt-0.5 border border-indigo-500/30"><CheckCircle className="w-4 h-4 text-indigo-400" /></div>
                                    <span className="leading-snug">{test}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8 md:pb-10">
                            <button
                                onClick={() => setSelectedPackage('ima')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> Detailed View
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-black bg-indigo-500 text-white hover:bg-indigo-400 transition-transform shadow-[0_10px_20px_rgba(99,102,241,0.2)] text-sm md:text-base shrink-0">
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
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/10 to-transparent blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner shrink-0 hidden sm:flex">
                                        <ShieldCheck className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
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
                                        <div className="text-indigo-700 dark:text-indigo-400 font-black text-4xl">{packages[selectedPackage].price}</div>
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
                                            <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Detailed Deliverables
                                        </h4>

                                        <div className="space-y-4">
                                            {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center shrink-0 shadow-sm">
                                                        <div className="text-xl font-black text-indigo-600 dark:text-indigo-400 leading-none">{paper.count}</div>
                                                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{paper.count === '∞' ? 'Access' : 'Tests'}</div>
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
                                            <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Value Additions
                                        </h4>
                                        <ul className="space-y-6">
                                            {packages[selectedPackage].features.map((feature, idx) => (
                                                <li key={idx} className="flex gap-4 group">
                                                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 border border-indigo-200 dark:border-indigo-800 group-hover:scale-110 transition-transform">
                                                        <CheckSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
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
                                            <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Inclusive Features
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div> {feat}
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
                                    <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Target CDS 2026
                                </span>
                            </div>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10 rounded-2xl font-black text-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(79,70,229,0.5)] shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Proceed to Enrollment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
