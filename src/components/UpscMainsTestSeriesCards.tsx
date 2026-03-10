"use client";

import React, { useState } from 'react';
import { CheckCircle, Target, Award, X, ShoppingCart, Eye, Calendar, Clock, BookOpen, Layers, PenTool, CheckSquare } from 'lucide-react';

export default function UpscMainsTestSeriesCards({ examName = 'UPSC CSE Mains' }: { examName?: string }) {
    const [selectedPackage, setSelectedPackage] = useState<"essential" | "ultimate" | null>(null);

    // Deep, detailed data for UPSC CSE Mains
    const packages = {
        essential: {
            name: `ExamBoost ${examName} General`,
            price: "₹1499", // Competitive pricing for Mains evaluation
            image: "https://images.unsplash.com/photo-1581373449483-37449f962b6c?auto=format&fit=crop&q=80&w=800",
            description: `Structured answer writing practice with expert evaluation for ${examName} 2026.`,
            testsIncluded: [
                "12 Sectional GS Tests (3 for each GS I, II, III, IV)",
                "4 Full Length GS Mock Tests",
                "2 Essay Mock Tests",
                "Detailed Model Answers PDF"
            ],
            detailedPapers: [
                { title: "GS Sub-sectional Tests", count: 12, detail: "Specific tests for Core Polity, Modern History, Economy, Ethics case studies." },
                { title: "Full Length GS I-IV Mocks", count: 4, detail: "Strictly matching UPSC's 20-question, 250-mark formatted 3-hour tests." },
                { title: "Essay Writing Tests", count: 2, detail: "Philosophical and issue-based topics mirroring recent UPSC trends." },
                { title: "Model Answers", count: 18, detail: "Comprehensive, structured model answers with intro-body-conclusion format." },
            ],
            features: [
                { title: "Expert Evaluation", detail: "Detailed line-by-line feedback from subject experts within 5-7 days." },
                { title: "Value Addition Material", detail: "Data points, constitutional articles, and supreme court judgments cheat sheets." },
                { title: "Focus on Structure", detail: "Guidance on how to structure answers within the word limit (150/250 words)." },
            ],
            otherFeatures: [
                "UPSC Standard Question Framing",
                "Flexible Test Timing",
                "Topper's Answer Copies Access",
                "Web & Mobile PDF Upload"
            ],
            bestFor: ["First time Mains writers", "Improving answer structuring", "Self-driven aspirants"]
        },
        ultimate: {
            name: `ExamBoost ${examName} Mentorship`,
            price: "₹3499", // Premium mentoring
            image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
            description: "Intensive 360° Mains preparation with one-on-one mentorship, Daily Answer Writing (DAW), and Optional subjects overlap.",
            testsIncluded: [
                "20 Full Length Tests (12 GS, 4 Essay, 4 Optional)",
                "Daily Answer Writing (DAW) - 60 Days",
                "One-on-One Mentorship Calls",
                "Live Post-Test Discussions"
            ],
            detailedPapers: [
                { title: "GS Full Length Simulators", count: 12, detail: "3 iterations of GS Paper I, II, III, IV before the actual Mains." },
                { title: "Optional Subject Tests", count: 4, detail: "Available for PubAd, PSIR, Sociology, Geography, Authropy, and History." },
                { title: "Daily Answer Practice", count: 60, detail: "Write 2 questions daily. Evaluated within 24 hours to build muscle memory." },
                { title: "Essay & Ethics Masterclass", count: 8, detail: "Specialized live sessions on tackling philosophical essays and ethics case studies." },
            ],
            features: [
                { title: "Priority Evaluation", detail: "Get your full-length test copies checked and evaluated within 48-72 hours." },
                { title: "Personal Mentor", detail: "Bi-weekly Zoom calls with selected candidates or senior faculties to track progress." },
                { title: "Micro-Syllabus Tracking", detail: "Analytics on your performance across specific micro-topics to identify weak links." },
            ],
            otherFeatures: [
                "Brainstorming Strategy Sessions",
                "Current Affairs Year Down PDFs",
                "Direct Faculty Doubt Resolution",
                "Peer Review Ecosystem",
                "Interview (DAF) Guidance Included"
            ],
            bestFor: ["Repeater candidates seeking a jump in marks", "Aspirants struggling with time management", "Complete hands-on guidance"]
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {/* Essential Card */}
                <div className="bg-white dark:bg-[#0b1221] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1.5 flex flex-col group relative">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600"></div>
                    <div className="p-8 md:p-10 pb-0">
                        <div className="inline-flex px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-widest mb-6 border border-slate-200 dark:border-slate-700">
                            Foundation
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">{packages.essential.name}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 min-h-[4rem]">
                            {packages.essential.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-slate-100 dark:border-slate-800/80 pb-8">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">{packages.essential.price}</span>
                            <span className="text-slate-500 font-semibold tracking-wide uppercase text-xs">/ Mains Eval</span>
                        </div>
                    </div>

                    <div className="px-8 md:px-10 flex flex-col flex-1">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.essential.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                    <CheckSquare className="w-5 h-5 text-sky-600 dark:text-sky-500 shrink-0 mt-0.5" />
                                    <span className="leading-snug">{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 font-medium opacity-60 pt-2">
                                <CheckSquare className="w-5 h-5 text-slate-300 dark:text-slate-700 shrink-0 mt-0.5" />
                                <span className="leading-snug">No Personal Mentorship</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8 md:pb-10">
                            <button
                                onClick={() => setSelectedPackage('essential')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700 text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> View Framework
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-transform hover:-translate-y-0.5 shadow-lg shadow-slate-900/10 text-sm md:text-base shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ultimate Card */}
                <div className="bg-gradient-to-br from-[#0e3b6d] to-[#0a2342] dark:from-[#081b33] dark:to-[#040e1c] border border-[#1c5598]/30 dark:border-[#1c5598]/20 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 shadow-[0_20px_40px_-15px_rgba(14,59,109,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col relative group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>

                    <div className="absolute top-8 right-8 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500 hidden sm:flex">
                        <PenTool className="w-8 h-8 text-amber-400" />
                    </div>

                    <div className="p-8 md:p-10 pb-0 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-widest mb-6 shadow-sm border border-amber-300">
                            <Target className="w-4 h-4" /> Top 100 Rank Focus
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">{packages.ultimate.name}</h3>
                        <p className="text-white/80 text-base leading-relaxed mb-6 min-h-[4rem] font-medium">
                            {packages.ultimate.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                            <span className="text-4xl font-black text-white">{packages.ultimate.price}</span>
                            <span className="text-white/50 font-semibold tracking-wide uppercase text-xs">/ Mains Eval & Mentor</span>
                        </div>
                    </div>

                    <div className="px-8 md:px-10 flex flex-col flex-1 relative z-10">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.ultimate.testsIncluded.slice(0, 4).map((test, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-white/95 font-medium">
                                    <div className="p-0.5 rounded bg-white/10 shrink-0 mt-0.5 border border-white/10"><CheckSquare className="w-4 h-4 text-white" /></div>
                                    <span className="leading-snug">{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-4 font-bold text-amber-300 pt-2">
                                <div className="p-0.5 rounded bg-amber-400/10 shrink-0 mt-0.5 border border-amber-400/20"><CheckSquare className="w-4 h-4 text-amber-400" /></div>
                                <span className="leading-snug">Includes Weekly Mentorship Calls</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8 md:pb-10">
                            <button
                                onClick={() => setSelectedPackage('ultimate')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> View Framework
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-black bg-white text-[#0a2342] dark:bg-amber-400 dark:text-amber-950 hover:scale-[1.02] transition-transform shadow-[0_10px_20px_rgba(0,0,0,0.2)] text-sm md:text-base shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Secure Seat
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Detail Modal Overlay */}
            {selectedPackage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-[#050b14]/80 transition-all duration-300 overflow-y-auto">
                    <div className="bg-white dark:bg-[#0b1221] rounded-[2.5rem] w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl border border-slate-200/50 dark:border-slate-700/50 animate-in fade-in zoom-in-95 duration-200 sm:my-auto">

                        {/* Modal Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 lg:p-10 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070e1c]/50 gap-6 rounded-t-[2.5rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0e3b6d]/5 to-transparent dark:from-[#2f75bd]/10 blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e6f0fa] to-[#d0e1f3] dark:from-[#0e3b6d]/50 dark:to-[#0a2749]/50 flex items-center justify-center border border-[#0e3b6d]/10 dark:border-[#4290e3]/20 shadow-inner shrink-0 hidden sm:flex">
                                        <BookOpen className="w-8 h-8 text-[#0e3b6d] dark:text-[#4290e3]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                                                {packages[selectedPackage].name}
                                            </h3>
                                            {selectedPackage === 'ultimate' && <span className="text-[10px] bg-amber-400 text-amber-950 px-3 py-1 rounded-full font-black uppercase tracking-widest shadow-sm">Mentorship Program</span>}
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{packages[selectedPackage].description}</p>
                                    </div>
                                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-6 mt-2 sm:mt-0">
                                        <div className="text-[#0e3b6d] dark:text-[#4290e3] font-black text-4xl">{packages[selectedPackage].price}</div>
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
                                <div className="lg:col-span-7 border-r border-slate-100 dark:border-slate-800/80 p-6 md:p-8 lg:p-10 bg-white dark:bg-[#0b1221] space-y-10">

                                    <div>
                                        <h4 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
                                            <Layers className="w-5 h-5 text-[#0e3b6d] dark:text-[#4290e3]" /> Deliverables
                                        </h4>

                                        <div className="space-y-4">
                                            {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070e1c] hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#0b1221] border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center shrink-0 shadow-sm">
                                                        <div className="text-xl font-black text-[#0e3b6d] dark:text-[#4290e3] leading-none">{paper.count}</div>
                                                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Items</div>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{paper.title}</h5>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{paper.detail}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Exam Interface Teaser inside modal */}
                                        <div className="mt-8 p-6 bg-slate-50 dark:bg-[#0e3b6d]/5 rounded-2xl border border-slate-200/60 dark:border-[#0e3b6d]/20 flex gap-5">
                                            <PenTool className="w-8 h-8 text-[#0e3b6d] dark:text-[#4290e3] shrink-0" />
                                            <div>
                                                <h5 className="font-bold text-slate-900 dark:text-white mb-2">Simulated UPSC QCAB Format</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Write your answers on our Question-Cum-Answer Booklets (QCAB) formats. Upload scanned PDFs easily via Mobile or Web for immediate evaluation queuing.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Features & Specs Column */}
                                <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 bg-slate-50/50 dark:bg-[#070e1c]/50 space-y-10">

                                    {/* Advanced Features List */}
                                    <div>
                                        <h4 className="flex items-center gap-3 text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-6">
                                            <Target className="w-5 h-5 text-[#0e3b6d] dark:text-[#4290e3]" /> Evaluation Parameters
                                        </h4>
                                        <ul className="space-y-6">
                                            {packages[selectedPackage].features.map((feature, idx) => (
                                                <li key={idx} className="flex gap-4 group">
                                                    <div className="w-8 h-8 rounded-full bg-[#0e3b6d]/10 dark:bg-[#4290e3]/10 flex items-center justify-center shrink-0 border border-[#0e3b6d]/20 dark:border-[#4290e3]/20 group-hover:scale-110 transition-transform">
                                                        <CheckSquare className="w-4 h-4 text-[#0e3b6d] dark:text-[#4290e3]" />
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
                                            <Award className="w-5 h-5 text-[#0e3b6d] dark:text-[#4290e3]" /> Includes
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-3.5 bg-white dark:bg-[#0b1221] rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div> {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#0b1221] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] rounded-b-[2.5rem] relative z-10">
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 dark:text-slate-400 text-sm font-medium w-full sm:w-auto">
                                <span className="flex items-center gap-2 shrink-0 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <Calendar className="w-4 h-4 text-[#0e3b6d] dark:text-[#4290e3]" /> Batch starts <span className="text-slate-900 dark:text-white font-bold">Immediate</span>
                                </span>
                                <span className="flex items-center gap-2 shrink-0 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <Clock className="w-4 h-4 text-amber-500" /> Evaluations in <span className="text-slate-900 dark:text-white font-bold">5 Days</span>
                                </span>
                            </div>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10 rounded-2xl font-black text-lg bg-[#0e3b6d] hover:bg-[#0a2749] dark:bg-[#2f75bd] dark:hover:bg-[#1a5b9c] shadow-[0_10px_20px_-10px_rgba(14,59,109,0.5)] text-white transition-all hover:-translate-y-1 shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Proceed to Enrollment
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
