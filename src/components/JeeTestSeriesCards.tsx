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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
                {/* Essential Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col group hover:shadow-md transition-shadow">
                    <div className="p-8 pb-0">
                        <div className="inline-flex px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold text-xs uppercase tracking-wider mb-4 border border-gray-200 dark:border-gray-700">
                            Starter Plan
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{packages.essential.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 min-h-[3rem]">
                            {packages.essential.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                            <span className="text-4xl font-black text-gray-900 dark:text-white">{packages.essential.price}</span>
                            <span className="text-gray-500 font-medium">/ Complete Validity</span>
                        </div>
                    </div>

                    <div className="px-8 flex flex-col flex-1">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.essential.testsIncluded.map((test, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
                                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span>{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-gray-500 dark:text-gray-500 text-sm font-medium line-through">
                                <CheckCircle className="w-5 h-5 text-gray-300 dark:text-gray-700 shrink-0 mt-0.5" />
                                <span>No Previous Year Papers</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500 dark:text-gray-500 text-sm font-medium line-through">
                                <CheckCircle className="w-5 h-5 text-gray-300 dark:text-gray-700 shrink-0 mt-0.5" />
                                <span>Basic Analytics Only</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 pb-8">
                            <button
                                onClick={() => setSelectedPackage('essential')}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 text-sm"
                            >
                                <Eye className="w-4 h-4" /> View Details
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm">
                                <ShoppingCart className="w-4 h-4" /> Enroll Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ultimate Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-blue-600 shadow-xl flex flex-col relative group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <Award className="w-48 h-48 text-blue-600 dark:text-blue-500" />
                    </div>

                    <div className="p-8 pb-0 relative z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-4 border border-amber-200 dark:border-amber-800/50">
                            <Target className="w-3.5 h-3.5" /> Recommended
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{packages.ultimate.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 min-h-[3rem]">
                            {packages.ultimate.description}
                        </p>
                        <div className="flex items-baseline gap-2 mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                            <span className="text-4xl font-black text-gray-900 dark:text-white">{packages.ultimate.price}</span>
                            <span className="text-gray-500 font-medium">/ Complete Validity</span>
                        </div>
                    </div>

                    <div className="px-8 flex flex-col flex-1 relative z-10">
                        <ul className="space-y-4 mb-10 flex-1">
                            {packages.ultimate.testsIncluded.slice(0, 4).map((test, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
                                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span>{test}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 font-medium text-amber-700 dark:text-amber-400 text-sm">
                                <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                <span>Advanced AI Performance Analytics Included</span>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 pb-8">
                            <button
                                onClick={() => setSelectedPackage('ultimate')}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 transition-colors text-sm"
                            >
                                <Eye className="w-4 h-4" /> View Details
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm">
                                <ShoppingCart className="w-4 h-4" /> Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Detail Modal Overlay */}
            {selectedPackage && (
                <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 backdrop-blur-sm bg-gray-900/60 dark:bg-black/80 transition-all duration-300">
                    <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedPackage(null)}></div>
                    
                    <div className="bg-white dark:bg-gray-900 w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] flex flex-col sm:rounded-2xl shadow-2xl relative z-10">

                        {/* Modal Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-8 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-t-2xl gap-4 shrink-0 relative">
                            <button
                                onClick={() => setSelectedPackage(null)}
                                className="sm:hidden absolute top-5 right-5 p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="pr-10 sm:pr-0">
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1.5">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                        {packages[selectedPackage].name}
                                    </h3>
                                    {selectedPackage === 'ultimate' && <span className="text-[10px] md:text-xs inline-flex bg-blue-600 text-white px-2.5 py-1 rounded font-bold uppercase tracking-wider">Pro Package</span>}
                                </div>
                                <p className="text-sm md:text-base text-gray-500 font-medium line-clamp-2 md:line-clamp-none">{packages[selectedPackage].description}</p>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-4 border-t sm:border-t-0 border-gray-200 dark:border-gray-700 pt-4 sm:pt-0 mt-2 sm:mt-0">
                                <div className="text-blue-600 font-black text-3xl md:text-4xl">{packages[selectedPackage].price}</div>
                                <button
                                    onClick={() => setSelectedPackage(null)}
                                    className="hidden sm:flex p-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors shrink-0"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Detailed Breakdown */}
                        <div className="flex-1 overflow-y-auto w-full">
                            <div className="flex flex-col lg:flex-row w-full m-0 p-0">

                                {/* Left Column: Detailed Papers */}
                                <div className="lg:w-7/12 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800 p-5 md:p-8 bg-white dark:bg-gray-950">
                                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-5 md:mb-6">
                                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-600" /> Included Content
                                    </h4>

                                    <div className="space-y-4">
                                        {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 md:p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
                                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center shrink-0">
                                                    <div className="text-xl md:text-2xl font-black text-blue-600 leading-none">{paper.count}</div>
                                                    <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase mt-1">Tests</div>
                                                </div>
                                                <div>
                                                    <h5 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">{paper.title}</h5>
                                                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{paper.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mock Exam Teaser Banner */}
                                    <div className="mt-8 p-5 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/50 flex gap-4 items-start">
                                        <Layers className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h5 className="text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1">Authentic CBT Interface</h5>
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Tests are conducted on an interface that perfectly simulates the real test player, complete with question palettes, mark-for-review toggles, and strict time limits.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Features & Specs */}
                                <div className="lg:w-5/12 p-5 md:p-8 bg-gray-50 dark:bg-gray-900">
                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-gray-900 dark:text-white mb-4">
                                            <Target className="w-4 h-4 md:w-5 md:h-5 text-blue-600" /> Key Features
                                        </h4>
                                        <ul className="space-y-4 md:space-y-5">
                                            {packages[selectedPackage].features.map((feature, idx) => (
                                                <li key={idx} className="flex gap-3 md:gap-4">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <span className="block text-sm md:text-base font-bold text-gray-900 dark:text-white">{feature.title}</span>
                                                        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-0.5 md:mt-1 block leading-relaxed">{feature.detail}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-2 text-base md:text-lg font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                                            <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-600" /> Platform Highlights
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-2 px-3 py-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 w-full">
                                                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-sm">
                                        <h4 className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2.5">Best Suited For</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {packages[selectedPackage].bestFor.map((tag, idx) => (
                                                <span key={idx} className="px-2.5 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded text-[10px] md:text-xs font-bold border border-gray-200 dark:border-gray-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 md:p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 rounded-b-2xl">
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium w-full sm:w-auto justify-center sm:justify-start">
                                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gray-400" /> Validity: {examName} '26</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gray-400" /> Instant Access</span>
                            </div>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-10 rounded-lg font-bold text-base md:text-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shrink-0">
                                <ShoppingCart className="w-5 h-5" /> Buy Now
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
