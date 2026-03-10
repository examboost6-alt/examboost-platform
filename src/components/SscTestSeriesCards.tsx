"use client";

import React, { useState } from 'react';
import { CheckCircle, Target, Award, X, FileText, ShoppingCart, Eye, Calendar, Clock, BookOpen, Layers } from 'lucide-react';
import Link from 'next/link';

export default function SscTestSeriesCards({ examName = 'SSC CGL' }: { examName?: string }) {
    const [selectedPackage, setSelectedPackage] = useState<"essential" | "ultimate" | null>(null);

    const packages = {
        essential: {
            name: `EB Essential`,
            price: examName === 'SSC CHSL' ? "₹149" : examName === 'SSC MTS' ? "₹99" : "₹199",
            originalPrice: examName === 'SSC CHSL' ? "₹499" : examName === 'SSC MTS' ? "₹299" : "₹599",
            description: `Perfect for robust mock test practice to master time management.`,
            testsIncluded: [
                "150+ Full-Length Mocks (Tier 1 & 2)",
                "200+ Sectional & Topic Tests",
                "Exact TCS iON Exam Interface",
                "Detailed Text Solutions with Short Tricks",
                "All India LIVE Tests & Rankings",
                "Valid for 12 Months"
            ],
            detailedPapers: [
                { title: "Tier 1 & 2 Full Mocks", count: 150, detail: "Strictly based on latest TCS pattern with updated General Awareness." },
                { title: "Quantitative Aptitude Tests", count: 50, detail: "Arithmetic and Advanced Maths topic tests with short-trick solutions." },
                { title: "Reasoning & General Intelligence", count: 50, detail: "Focus on non-verbal, number series, and complex puzzles." },
                { title: "English & General Awareness", count: 100, detail: "Vocabulary, grammar, current affairs, and static GK modules." },
            ],
            features: [
                { title: "Instant Solutions", detail: "Detailed text answers immediately after submission." },
                { title: "All India Rank", detail: "Compare your performance with thousands of aspirants." },
                { title: "Performance Analysis", detail: "Check your accuracy and time spent per section." },
            ],
            otherFeatures: [
                "Real Exam Like TCS iON Interface",
                "Unlimited Reattempts",
                "Subject-wise Score Analysis",
                "Desktop & Mobile Access"
            ],
            bestFor: ["Self-studying students", "Improving speed and accuracy", "Regular revision"]
        },
        ultimate: {
            name: `EB Pro Ultimate`,
            price: examName === 'SSC CHSL' ? "₹299" : examName === 'SSC MTS' ? "₹199" : "₹399",
            originalPrice: examName === 'SSC CHSL' ? "₹899" : examName === 'SSC MTS' ? "₹599" : "₹999",
            description: "The complete selection toolkit with PYQs, video solutions, and typing tests.",
            testsIncluded: [
                "Everything in EB Essential",
                "All Previous Year Papers (2018-2023) in Mock Format",
                "Video Solutions by Expert Faculty",
                "Personalized Strengths/Weakness Engine",
                "Typing Test Module Included for Tier 2",
                "Valid till Exam Selection"
            ],
            detailedPapers: [
                { title: "Previous Year Papers", count: 120, detail: `Actual ${examName} papers from 2018 to 2023 in CBT mock format.` },
                { title: "Tier 1 & 2 Full Mocks", count: 150, detail: "Strictly based on latest TCS pattern." },
                { title: "Sectional & Topic Tests", count: 200, detail: "Deep dive into every single concept." },
                { title: "Typing Test Module", count: 50, detail: `Exact ${examName} Tier 2 typing exam interface.` },
            ],
            features: [
                { title: "Video Solutions", detail: "Step-by-step video explanations for tough Quant and Reasoning questions." },
                { title: "AI Weak Topic Detection", detail: "System automatically identifies and flags your weak areas." },
                { title: "Strategic Analytics Dashboard", detail: "Time mapping, accuracy tracking, and selection predictor." },
            ],
            otherFeatures: [
                "Question Bookmark & Review System",
                "All India Advanced Leaderboard",
                "Typing Speed & Accuracy Tracker",
                "Doubt Resolution Priority",
                "Downloadable PDF Reports"
            ],
            bestFor: ["Serious Aspirants targeting Selection", "Comprehensive Preparation", "Mastering Previous Year Trends"]
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
                            <span className="text-slate-500 font-medium line-through">{packages.essential.originalPrice}</span>
                            <span className="text-slate-500 font-medium ml-1">/ 12 Months</span>
                        </div>
                    </div>

                    <div className="px-8 flex flex-col flex-1">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.essential.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium text-sm lg:text-base">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>{test}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8">
                            <button
                                onClick={() => setSelectedPackage('essential')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> View Details
                            </button>
                            <Link href="/pricing" className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-transform hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 text-sm md:text-base shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Ultimate Card */}
                <div className="bg-gradient-to-br from-primary to-indigo-700 dark:from-slate-800 dark:to-slate-900 border border-primary/20 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1.5 shadow-xl shadow-primary/20 flex flex-col relative group">
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
                            <span className="text-white/60 font-medium line-through">{packages.ultimate.originalPrice}</span>
                            <span className="text-white/80 font-medium ml-1">/ Till Selection</span>
                        </div>
                    </div>

                    <div className="px-8 flex flex-col flex-1 relative z-10">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.ultimate.testsIncluded.slice(0, 6).map((test, idx) => (
                                <li key={idx} className={`flex items-start gap-3 text-white font-medium text-sm lg:text-base ${idx === 0 ? '' : ''}`}>
                                    <div className={`p-0.5 rounded-full ${idx === 0 || idx > 1 ? 'bg-white/20' : 'bg-yellow-400/20'} shrink-0 mt-0.5`}>
                                        <CheckCircle className={`w-4 h-4 ${idx === 0 || idx > 1 ? 'text-white' : 'text-yellow-400'}`} />
                                    </div>
                                    <span className={idx === 0 || idx > 1 ? '' : 'text-yellow-300'}>{test}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8">
                            <button
                                onClick={() => setSelectedPackage('ultimate')}
                                className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors text-sm md:text-base shrink-0"
                            >
                                <Eye className="w-5 h-5" /> View Details
                            </button>
                            <Link href="/pricing" className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-50 transition-transform hover:-translate-y-0.5 shadow-xl shadow-white/10 text-sm md:text-base shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Detail Modal Overlay */}
            {selectedPackage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-900/60 dark:bg-slate-950/80 transition-all duration-300 overflow-y-auto">
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200 mt-auto mb-auto sm:my-auto">

                        {/* Modal Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                                        {packages[selectedPackage].name}
                                    </h3>
                                    {selectedPackage === 'ultimate' && <span className="text-xs bg-primary shadow-primary/30 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">Pro Package</span>}
                                </div>
                                <p className="text-slate-500 font-medium">{packages[selectedPackage].description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-primary dark:text-accent font-black text-3xl">{packages[selectedPackage].price}</div>
                                <button
                                    onClick={() => setSelectedPackage(null)}
                                    className="p-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors shadow-sm ml-auto sm:ml-0"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Detailed Breakdown */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden w-full custom-scrollbar">
                            <div className="grid grid-cols-1 lg:grid-cols-12 max-w-none w-full m-0 p-0">

                                {/* Very Detailed Papers Table/Grid Column */}
                                <div className="lg:col-span-7 border-r border-slate-100 dark:border-slate-800 p-6 md:p-8 bg-white dark:bg-slate-950 space-y-8">

                                    <div>
                                        <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
                                            <BookOpen className="w-6 h-6 text-primary dark:text-accent" /> Detailed Testing Material Breakdown
                                        </h4>

                                        <div className="space-y-4">
                                            {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                                                    <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center shrink-0">
                                                        <div className="text-xl font-black text-primary dark:text-accent leading-none">{paper.count}</div>
                                                        <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Tests</div>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{paper.title}</h5>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{paper.detail}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Exam Interface Teaser inside modal */}
                                        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex gap-4">
                                            <Layers className="w-8 h-8 text-blue-500 shrink-0" />
                                            <div>
                                                <h5 className="font-bold text-slate-900 dark:text-white mb-1">Authentic TCS iON CBT Interface</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">All tests are conducted strictly on an interface that perfectly simulates the real TCS iON test player used by Staff Selection Commission.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Features & Specs Column */}
                                <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50/50 dark:bg-slate-900/30 space-y-8">

                                    {/* Advanced Features List */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-5">
                                            <Target className="w-5 h-5 text-primary dark:text-accent" /> Analysis & Solutions
                                        </h4>
                                        <ul className="space-y-5">
                                            {packages[selectedPackage].features.map((feature, idx) => (
                                                <li key={idx} className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500" />
                                                    </div>
                                                    <div>
                                                        <span className="block font-bold text-slate-900 dark:text-white">{feature.title}</span>
                                                        <span className="text-sm text-slate-600 dark:text-slate-400 mt-1 block">{feature.detail}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Platform Features Grid */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
                                            <Award className="w-5 h-5 text-primary dark:text-accent" /> Platform Features
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Audience Banner */}
                                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl">
                                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Target Profile for this Package</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {packages[selectedPackage].bestFor.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.05)] rounded-b-[2rem]">
                            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm font-medium w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                                <span className="flex items-center gap-1.5 shrink-0"><Calendar className="w-4 h-4 text-slate-400" /> {selectedPackage === 'ultimate' ? 'Validity till Selection' : '1 Year Validity'}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0 hidden sm:block"></span>
                                <span className="flex items-center gap-1.5 shrink-0"><Clock className="w-4 h-4 text-slate-400" /> Instant Access</span>
                            </div>
                            <Link href="/pricing" className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10 rounded-xl font-bold text-lg bg-primary hover:bg-primary/90 shadow-primary/30 text-white transition-transform hover:-translate-y-1 shadow-lg shrink-0">
                                <ShoppingCart className="w-6 h-6" /> Proceed to Buy Now
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
