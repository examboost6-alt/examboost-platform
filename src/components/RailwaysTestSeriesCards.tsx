"use client";

import React, { useState } from 'react';
import { CheckCircle, Target, Award, X, FileText, ShoppingCart, Eye, Calendar, Clock, BookOpen, Layers } from 'lucide-react';
import Link from 'next/link';

export default function RailwaysTestSeriesCards({ examName = 'RRB NTPC CBT-1' }: { examName?: string }) {
    const [selectedPackage, setSelectedPackage] = useState<"essential" | "ultimate" | null>(null);

    const isAlpContext = examName.includes('ALP');
    const isCbt2 = examName.includes('CBT-2');
    const isGroupD = examName.includes('Group D');

    const getPricing = () => {
        if (isAlpContext) {
            return {
                essential: { price: "₹199", originalPrice: "₹499" },
                ultimate: { price: "₹349", originalPrice: "₹899" }
            };
        } else if (isCbt2) {
            return {
                essential: { price: "₹149", originalPrice: "₹399" },
                ultimate: { price: "₹249", originalPrice: "₹699" }
            };
        } else if (isGroupD) {
            return {
                essential: { price: "₹99", originalPrice: "₹299" },
                ultimate: { price: "₹199", originalPrice: "₹499" }
            };
        } else { // NTPC CBT-1
            return {
                essential: { price: "₹99", originalPrice: "₹349" },
                ultimate: { price: "₹199", originalPrice: "₹599" }
            };
        }
    };

    const pricing = getPricing();

    const packages = {
        essential: {
            name: `EB Starter`,
            price: pricing.essential.price,
            originalPrice: pricing.essential.originalPrice,
            description: `Build speed and accuracy for ${examName} with strict time-bound sectional and full mocks.`,
            testsIncluded: [
                "100+ Full Length Mocks",
                "150+ Subject & Topic Tests",
                "Latest TCS Pattern Interface",
                "Bilingual (Hindi/English) Content",
                "Detailed Text Solutions",
                "Valid for 12 Months"
            ],
            detailedPapers: [
                { title: "Full CBT Mocks", count: 80, detail: "Strictly based on the latest RRB TCS pattern. High precision focus." },
                { title: "General Science Tests", count: 60, detail: "NCERT based rigorous science questions crucial for Indian Railways." },
                { title: "Math & Reasoning", count: 80, detail: "Calculation intensive sectional mocks with tight timers." },
                { title: "Current Affairs", count: "50+", detail: "Last 12 months comprehensive coverage." },
            ],
            features: [
                { title: "Instant Solutions", detail: "Step-by-step math solutions immediately after submission." },
                { title: "All India Rank", detail: "Know your position among thousands of serious candidates." },
                { title: "Accuracy Analysis", detail: "Dashboard tracks negative marking impact on your overall score." },
            ],
            otherFeatures: [
                "Real Exam Like UI",
                "Unlimited Reattempts",
                "Subject-wise Score Analysis",
                "Mobile App Friendly"
            ],
            bestFor: ["First time candidates", "Improving calculation speed", "Regular practice"]
        },
        ultimate: {
            name: `EB Technical Pro`,
            price: pricing.ultimate.price,
            originalPrice: pricing.ultimate.originalPrice,
            description: `The complete toolkit including Previous Year Papers and advanced ${isAlpContext ? 'trade/psycho tests' : 'high-level mocks'}.`,
            testsIncluded: [
                "Everything in EB Starter",
                "All Shift Previous Year Papers (Memory Based)",
                isAlpContext ? "CBT-2 Part B Trade Specific Mocks" : "Advanced Level Tier 2/CBT-2 Style Overload Tests",
                isAlpContext ? "CBAT (Psycho Test) Mock Battery" : "Daily Current Affairs & GK PDF Notes",
                "Video Solutions for Complex Reasoning/Math",
                "Valid till Final Selection"
            ],
            detailedPapers: [
                { title: "Previous Year Papers", count: 120, detail: `Actual ${examName} memory-based papers from past 5 years.` },
                { title: "Full Length Mocks", count: 200, detail: "Maximum volume of practice to ensure you've seen every question type." },
                { title: isAlpContext ? "Trade & Psycho Tests" : "Advanced Difficulty Dash", count: 50, detail: isAlpContext ? "Specialised electrical/mechanical trade tests and exact battery formats." : "Tests set perfectly 15% harder than actual exam to make the real day feel easy." },
                { title: "Granular Topic Tests", count: 400, detail: "Zero-in on extremely specific topics like 'Mensuration' or 'Light/Optics'." },
            ],
            features: [
                { title: "Video Explanations", detail: "Watch expert educators solve the toughest questions you struggled with." },
                { title: "AI Weakness Tracker", detail: "System auto-generates custom practice sets based on your wrong answers." },
                { title: "Normalization Estimator", detail: "Simulates the RRB normalization formula across varying difficulty mocks." },
            ],
            otherFeatures: [
                isAlpContext ? "Psycho Testing Interface" : "TCS Digital Interface Replica",
                "Question Bookmark & Revision",
                "Targeted GK/GS PDF Vault",
                "Doubt Forum Priority Access",
                "Offline Test Downloads"
            ],
            bestFor: ["Serious Aspirants", "Comprehensive Technical/Non-Technical prep", "Targeting Top Merit Lists"]
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
                                    <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
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
                <div className="bg-gradient-to-br from-red-600 to-rose-700 dark:from-slate-800 dark:to-slate-900 border border-red-500/20 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1.5 shadow-xl shadow-red-500/20 flex flex-col relative group">
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
                                    <span className={idx === 0 || idx > 1 ? '' : 'text-yellow-100'}>{test}</span>
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
                            <Link href="/pricing" className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white text-red-700 hover:bg-slate-50 transition-transform hover:-translate-y-0.5 shadow-xl shadow-white/10 text-sm md:text-base shrink-0">
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
                                    {selectedPackage === 'ultimate' && <span className="text-xs bg-red-600 shadow-red-600/30 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">Professional Pack</span>}
                                </div>
                                <p className="text-slate-500 font-medium">{packages[selectedPackage].description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-red-600 dark:text-red-400 font-black text-3xl">{packages[selectedPackage].price}</div>
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

                                {/* Detailed Papers Grid Column */}
                                <div className="lg:col-span-7 border-r border-slate-100 dark:border-slate-800 p-6 md:p-8 bg-white dark:bg-slate-950 space-y-8">

                                    <div>
                                        <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
                                            <BookOpen className="w-6 h-6 text-red-600 dark:text-red-400" /> Detailed Testing Material Breakdown
                                        </h4>

                                        <div className="space-y-4">
                                            {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                                                    <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center shrink-0">
                                                        <div className="text-xl font-black text-red-600 dark:text-red-400 leading-none">{paper.count}</div>
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
                                        <div className="mt-8 p-6 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-900/50 flex gap-4">
                                            <Layers className="w-8 h-8 text-rose-500 shrink-0" />
                                            <div>
                                                <h5 className="font-bold text-slate-900 dark:text-white mb-1">Authentic RRB Interface</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">Our simulator replicates the exact TCS exam engine. Familiarise yourself with the 'Save & Next', 'Mark for Review', and distinct colour palettes.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Features & Specs Column */}
                                <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50/50 dark:bg-slate-900/30 space-y-8">

                                    <div>
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-5">
                                            <Target className="w-5 h-5 text-red-600 dark:text-red-400" /> Analysis & Solutions
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

                                    <div>
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
                                            <Award className="w-5 h-5 text-red-600 dark:text-red-400" /> Platform Features
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {feat}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl">
                                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Target Profile</h4>
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
                            <Link href="/pricing" className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10 rounded-xl font-bold text-lg bg-red-600 hover:bg-red-700 shadow-red-600/30 text-white transition-transform hover:-translate-y-1 shadow-lg shrink-0">
                                <ShoppingCart className="w-6 h-6" /> Proceed to Buy Now
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
