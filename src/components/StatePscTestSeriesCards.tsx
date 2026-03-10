'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Shield, Award, Sparkles, X, Eye, ShoppingCart, Calendar, Clock, BookOpen, Layers, Target } from 'lucide-react';

interface PricingProps {
    examName: string;
}

export default function StatePscTestSeriesCards({ examName }: PricingProps) {
    const [selectedPackage, setSelectedPackage] = useState<"essential" | "ultimate" | null>(null);

    // Dynamic pricing based on the specific state PSC exam to be affordable
    const getPricing = () => {
        if (examName.includes('UPPSC') || examName.includes('MPSC')) {
            return { essential: 299, ultimate: 499, originalEssential: 999, originalUltimate: 1499 };
        }
        if (examName.includes('BPSC') || examName.includes('RPSC')) {
            return { essential: 249, ultimate: 449, originalEssential: 899, originalUltimate: 1299 };
        }
        // Default fallback
        return { essential: 199, ultimate: 399, originalEssential: 799, originalUltimate: 1199 };
    };

    const prices = getPricing();

    const packages = {
        essential: {
            name: `${examName} Prelims Essential`,
            price: `₹${prices.essential}`,
            originalPrice: `₹${prices.originalEssential}`,
            duration: '6 Months Validity',
            description: `Targeted practice for General Studies and State-Specific GK.`,
            features: [
                '25 Full Length Prelims Mocks',
                '50+ State Specific Sectional Tests',
                'State Budget & Economy Focus',
                'CSAT Qualifying Practice',
                'Detailed Bilingual Solutions (Hindi/Eng)'
            ],
            icon: Shield,
            popular: false,
            color: 'blue',
            detailedPapers: [
                { title: "Full Syllabus Mock Tests", count: 25, detail: "Strictly based on your state's latest official syllabus and past trends." },
                { title: "State Specific GK Tests", count: 50, detail: "Deep dive into local history, geography, economy, and polity." },
                { title: "CSAT/Aptitude Practice", count: 15, detail: "Qualifying math, reasoning, and local language comprehension papers." },
                { title: "Current Affairs", count: 12, detail: "Monthly state-specific current affairs tests for the last one year." },
            ],
            advancedFeatures: [
                { title: "Bilingual Solutions", detail: "Detailed text answers immediately after submission in both English and Hindi." },
                { title: "State Level Ranking", detail: "Compare your performance exclusively with students from your state." },
                { title: "Budget & Survey Focus", detail: "Specialized questions from the latest State Budget and Economic Survey." },
            ],
            otherFeatures: [
                "Real Exam Like Interface",
                "Unlimited Reattempts",
                "Subject-wise Score Analysis",
                "Desktop & Mobile Access"
            ],
            bestFor: ["Self-studying students", "First-time aspirants", "Prelims focused preparation"]
        },
        ultimate: {
            name: `${examName} Prelims + Mains Ultimate`,
            price: `₹${prices.ultimate}`,
            originalPrice: `₹${prices.originalUltimate}`,
            duration: '12 Months Validity',
            description: `Complete end-to-end guidance including Mains Answer Writing.`,
            features: [
                'Everything in Prelims Essential',
                'Mains Answer Writing Evaluation',
                'Hindi & Essay Paper Tests',
                'Checked by Selected Experts',
                'State Interview Guidance Program',
                'All India Live Ranking & Analytics'
            ],
            icon: Award,
            popular: true,
            color: 'teal',
            detailedPapers: [
                { title: "Prelims Mock Tests", count: 25, detail: "Complete GS and CSAT coverage." },
                { title: "Mains Answer Writing", count: 40, detail: "Descriptive questions across all GS papers evaluated by experts." },
                { title: "Language & Essay Papers", count: 15, detail: "Specialized focus on compulsory regional language and essay writing." },
                { title: "Previous Year Papers", count: "10+", detail: "Actual past year papers configured as timed mock tests." },
            ],
            advancedFeatures: [
                { title: "Expert Evaluation", detail: "Detailed dimensional feedback on your handwritten descriptive answers." },
                { title: "AI Weak Topic Detection", detail: "System automatically identifies and flags your weak areas in Prelims." },
                { title: "Interview Guidance", detail: "One-on-one sessions and DAF analysis for the final personality test." },
            ],
            otherFeatures: [
                "Question Bookmark & Review System",
                "Topper Answer Copies Access",
                "Smart AI Practice Mode",
                "Doubt Resolution Priority",
                "Downloadable PDF Reports"
            ],
            bestFor: ["Serious Rankers targeting Top 100", "Mains oriented candidates", "Comprehensive Preparation"]
        }
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Essential Package */}
                <div className="bg-white dark:bg-[#0f172a] rounded-[2rem] p-8 md:p-10 border border-slate-200 dark:border-slate-800 relative flex flex-col hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors shadow-lg hover:shadow-xl group">
                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 shrink-0 border border-blue-100 dark:border-blue-800/50">
                        <packages.essential.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{packages.essential.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 min-h-[40px]">{packages.essential.description}</p>

                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{packages.essential.price}</span>
                        <span className="text-lg text-slate-400 line-through font-medium">{packages.essential.originalPrice}</span>
                    </div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">{packages.essential.duration}</p>

                    <ul className="space-y-4 mb-10 flex-1">
                        {packages.essential.features.map((feature, i) => (
                            <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300">
                                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="font-semibold text-[15px]">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col xl:flex-row gap-3 mt-auto">
                        <button
                            onClick={() => setSelectedPackage('essential')}
                            className="flex-1 flex items-center justify-center gap-2 text-center py-3.5 rounded-xl font-bold border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-slate-700 dark:text-slate-300"
                        >
                            <Eye className="w-5 h-5" /> View Details
                        </button>
                        <Link href="/pricing" className="flex-1 flex items-center justify-center gap-2 text-center py-3.5 rounded-xl font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-md">
                            <ShoppingCart className="w-5 h-5" /> Enroll Now
                        </Link>
                    </div>
                </div>

                {/* Ultimate Package */}
                <div className="bg-gradient-to-br from-teal-600 to-emerald-700 dark:from-slate-800 dark:to-slate-900 rounded-[2rem] p-8 md:p-10 border border-teal-500/20 relative flex flex-col shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>

                    <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-xs py-1.5 px-4 rounded-full shadow-lg flex items-center gap-1.5 border border-amber-300/50">
                        <Sparkles className="w-3.5 h-3.5 fill-current" /> MOST POPULAR
                    </div>

                    <div className="w-14 h-14 bg-white/20 dark:bg-teal-900/40 rounded-2xl flex items-center justify-center text-white dark:text-teal-400 mb-6 shrink-0 backdrop-blur-sm shadow-inner">
                        <packages.ultimate.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{packages.ultimate.name}</h3>
                    <p className="text-teal-100 dark:text-slate-400 text-sm mb-6 min-h-[40px]">{packages.ultimate.description}</p>

                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-extrabold text-white">{packages.ultimate.price}</span>
                        <span className="text-lg text-teal-200 dark:text-slate-500 line-through font-medium">{packages.ultimate.originalPrice}</span>
                    </div>
                    <p className="text-sm font-semibold text-teal-100 dark:text-teal-400 mb-8 pb-8 border-b border-white/10 dark:border-slate-700">{packages.ultimate.duration}</p>

                    <ul className="space-y-4 mb-10 flex-1">
                        {packages.ultimate.features.map((feature, i) => (
                            <li key={i} className="flex gap-3 text-white/95">
                                <CheckCircle className="w-5 h-5 text-teal-300 dark:text-teal-500 shrink-0" />
                                <span className="font-semibold text-[15px]">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col xl:flex-row gap-3 mt-auto">
                        <button
                            onClick={() => setSelectedPackage('ultimate')}
                            className="flex-1 flex items-center justify-center gap-2 text-center py-3.5 rounded-xl font-bold border-2 border-white/20 hover:bg-white/10 transition-colors text-white"
                        >
                            <Eye className="w-5 h-5" /> View Details
                        </button>
                        <Link href="/pricing" className="flex-1 flex items-center justify-center gap-2 text-center py-3.5 rounded-xl font-bold bg-white text-teal-700 dark:bg-teal-600 dark:text-white hover:bg-slate-50 dark:hover:bg-teal-500 transition-colors shadow-xl">
                            <ShoppingCart className="w-5 h-5" /> Buy Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Premium Detail Modal Overlay */}
            {selectedPackage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-900/60 dark:bg-slate-950/80 transition-all duration-300 overflow-y-auto">
                    <div className="bg-white dark:bg-slate-900 rounded-[2rem] w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200 mt-auto mb-auto sm:my-auto text-left">

                        {/* Modal Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                                        {packages[selectedPackage].name}
                                    </h3>
                                    {selectedPackage === 'ultimate' && <span className="text-xs bg-teal-600 shadow-teal-600/30 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">Pro Package</span>}
                                </div>
                                <p className="text-slate-500 font-medium max-w-2xl">{packages[selectedPackage].description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-teal-600 dark:text-teal-400 font-black text-3xl">{packages[selectedPackage].price}</div>
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
                                            <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" /> Detailed Material Breakdown
                                        </h4>

                                        <div className="space-y-4">
                                            {packages[selectedPackage].detailedPapers.map((paper, idx) => (
                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                                                    <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center shrink-0">
                                                        <div className="text-xl font-black text-teal-600 dark:text-teal-400 leading-none">{paper.count}</div>
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
                                        <div className="mt-8 p-6 bg-teal-50 dark:bg-teal-900/10 rounded-2xl border border-teal-100 dark:border-teal-900/50 flex gap-4">
                                            <Layers className="w-8 h-8 text-teal-500 shrink-0" />
                                            <div>
                                                <h5 className="font-bold text-slate-900 dark:text-white mb-1">Authentic PSC CBT Interface</h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">All tests are conducted strictly on an interface that perfectly simulates the real exam environment, complete with negative marking algorithms and time constraints.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Features & Specs Column */}
                                <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50/50 dark:bg-slate-900/30 space-y-8">

                                    {/* Advanced Features List */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-5">
                                            <Target className="w-5 h-5 text-teal-600 dark:text-teal-400" /> Analysis & Solutions
                                        </h4>
                                        <ul className="space-y-5">
                                            {packages[selectedPackage].advancedFeatures.map((feature, idx) => (
                                                <li key={idx} className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
                                                        <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-500" />
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
                                            <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" /> Platform Features
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {packages[selectedPackage].otherFeatures.map((feat, idx) => (
                                                <div key={idx} className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" /> {feat}
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
                                <span className="flex items-center gap-1.5 shrink-0"><Calendar className="w-4 h-4 text-slate-400" /> {packages[selectedPackage].duration}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0 hidden sm:block"></span>
                                <span className="flex items-center gap-1.5 shrink-0"><Clock className="w-4 h-4 text-slate-400" /> Instant Access</span>
                            </div>
                            <Link href="/pricing" className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-10 rounded-xl font-bold text-lg bg-teal-600 hover:bg-teal-700 shadow-teal-600/30 text-white transition-transform hover:-translate-y-1 shadow-lg shrink-0">
                                <ShoppingCart className="w-6 h-6" /> Proceed to Buy Now
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
