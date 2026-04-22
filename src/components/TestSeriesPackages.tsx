import React from 'react';
import Link from 'next/link';
import { CheckCircle, Zap, Shield, Crown, PlayCircle, Star, ArrowRight, Eye, ShoppingCart } from 'lucide-react';

interface TestSeriesPackagesProps {
    examName: string;
}

export default function TestSeriesPackages({ examName }: TestSeriesPackagesProps) {
    // Generate a simple pseudo-random realistic price based on examName string length for variety
    const baseEssentialPrice = 299 + (examName.length * 10);
    const finalEssentialPrice = Math.round(baseEssentialPrice / 10) * 10 - 1; // Makes it end in 9
    const originalEssentialPrice = finalEssentialPrice * 2 + 1;

    const baseUltimatePrice = 799 + (examName.length * 20);
    const finalUltimatePrice = Math.round(baseUltimatePrice / 10) * 10 - 1; // Makes it end in 9
    const originalUltimatePrice = finalUltimatePrice * 2 + 1;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: `ExamBoost ${examName} Test Series`,
        description: `Premium mock tests, detailed analytics, and video solutions for ${examName} preparation.`,
        provider: {
            '@type': 'Organization',
            name: 'ExamBoost',
            sameAs: 'https://www.examboost.in'
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            category: 'Free'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '1254'
        }
    };

    return (
        <div className="py-12 md:py-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        ExamBoost <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary">{examName}</span> Test Series
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Choose the perfect plan to accelerate your {examName} preparation. Unlock premium mock tests, detailed analytics, and video solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Essential Plan */}
                    <div className={`bg-white dark:bg-[#0f172a] rounded-3xl p-8 border ${examName === 'BITSAT' ? 'border-emerald-200 dark:border-emerald-800' : 'border-slate-200 dark:border-slate-800'} shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}>
                        <div className={`absolute top-0 right-0 w-32 h-32 ${examName === 'BITSAT' ? 'bg-emerald-500/10 dark:bg-emerald-500/5' : 'bg-blue-500/10 dark:bg-blue-500/5'} rounded-bl-full -z-10 group-hover:scale-110 transition-transform`}></div>

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className={`inline-block px-4 py-1.5 rounded-full ${examName === 'BITSAT' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'} font-bold text-sm mb-4`}>
                                    Most Popular
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <Zap className={`w-6 h-6 ${examName === 'BITSAT' ? 'text-emerald-500' : 'text-blue-500'}`} />
                                    ExamBoost {examName} Essential
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Perfect for targeted practice and self-evaluation.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹{finalEssentialPrice}</span>
                                <span className="text-slate-500 dark:text-slate-400 line-through">₹{originalEssentialPrice}</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Valid till {examName} exam date</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {[
                                `100+ Chapter-wise Tests for ${examName}`,
                                '15 Full-length Mock Tests',
                                'Detailed Solutions & Explanations',
                                'All India Rank & Performance Analysis',
                                'Doubt Solving via Community'
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className={`w-5 h-5 ${examName === 'BITSAT' ? 'text-emerald-500' : 'text-green-500'} shrink-0 mt-0.5`} />
                                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8">
                            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 text-sm md:text-base shrink-0">
                                <Eye className="w-5 h-5" /> View Details
                            </button>
                            <button className={`w-full ${examName === 'BITSAT' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white'} flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-lg text-sm md:text-base shrink-0`}>
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </button>
                        </div>
                    </div>

                    {/* Ultimate Plan */}
                    <div className={`${examName === 'BITSAT' ? 'bg-gradient-to-b from-emerald-500/10 to-teal-500/5 dark:from-emerald-900/20 dark:to-teal-900/10 border-emerald-500/30 dark:border-emerald-500/20' : 'bg-gradient-to-b from-primary/5 to-secondary/5 dark:from-accent/10 dark:to-primary/10 border-primary/20 dark:border-accent/30'} rounded-3xl p-8 border-2 shadow-2xl relative overflow-hidden group`}>
                        <div className={`absolute top-0 right-0 w-32 h-32 ${examName === 'BITSAT' ? 'bg-emerald-500/20 dark:bg-emerald-500/10' : 'bg-primary/10 dark:bg-accent/10'} rounded-bl-full -z-10 group-hover:scale-110 transition-transform`}></div>
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-xs py-1 px-10 rotate-45 shadow-lg flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> BEST VALUE
                        </div>

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className={`inline-block px-4 py-1.5 rounded-full ${examName === 'BITSAT' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent'} font-bold text-sm mb-4`}>
                                    Premium Selection
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <Crown className={`w-6 h-6 ${examName === 'BITSAT' ? 'text-emerald-600 dark:text-emerald-400' : 'text-primary dark:text-accent'}`} />
                                    ExamBoost {examName} Ultimate
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Comprehensive preparation with mentored guidance.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹{finalUltimatePrice}</span>
                                <span className="text-slate-500 dark:text-slate-400 line-through">₹{originalUltimatePrice}</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Valid till {examName} exam date</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {[
                                `Everything in Essential Plan`,
                                `50+ Previous Year Papers for ${examName}`,
                                'Video Solutions by Expert Faculty',
                                'Advanced AI Performance Analytics',
                                '1-on-1 Mentorship Sessions',
                                'Physical Study Material Delivery'
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className={`p-0.5 rounded-full ${examName === 'BITSAT' ? 'bg-emerald-500/20' : 'bg-primary/20 dark:bg-accent/20'} mt-0.5`}>
                                        <CheckCircle className={`w-4 h-4 ${examName === 'BITSAT' ? 'text-emerald-600 dark:text-emerald-400' : 'text-primary dark:text-accent'} shrink-0`} />
                                    </div>
                                    <span className="text-slate-800 dark:text-slate-200 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pb-8">
                            <button className={`w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold bg-white/50 dark:bg-white/10 ${examName === 'BITSAT' ? 'text-emerald-700 dark:text-emerald-300' : 'text-primary dark:text-accent'} hover:bg-white/60 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 backdrop-blur-sm transition-colors text-sm md:text-base shrink-0`}>
                                <Eye className="w-5 h-5" /> View Details
                            </button>
                            <button className={`w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold ${examName === 'BITSAT' ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30' : 'bg-primary hover:bg-secondary dark:bg-accent dark:hover:bg-primary dark:text-slate-900 text-white shadow-primary/30'} transition-transform hover:-translate-y-0.5 shadow-xl text-sm md:text-base shrink-0`}>
                                <ShoppingCart className="w-5 h-5" /> Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
