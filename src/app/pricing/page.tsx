import React from 'react';
import Link from 'next/link';
import { Target, Zap, Crown } from 'lucide-react';
import TestSeriesPackages from '@/components/TestSeriesPackages';

export const metadata = {
    title: 'Pricing & Plans - ExamBoost',
    description: 'Choose the right preparation plan for your journey.'
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 w-full">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary">Pricing</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Get access to thousands of mock tests, video solutions, and AI analytics. Select your exam below or view general platform passes.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                {/* We reuse the awesome dynamic component */}
                <TestSeriesPackages examName="All Exam Master Pass" />
            </div>
        </div>
    );
}
