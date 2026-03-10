import React from 'react';
import Link from 'next/link';
import { PlayCircle, Clock, FileText, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'Free Mock Tests - ExamBoost',
    description: 'Attempt free mock tests for JEE, NEET, SSC, UPSC and more.'
};

export default function FreeMockTestsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 w-full">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Attempt <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary">Free Mock Tests</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Assess where you stand before diving deep. Our free tests perfectly match real exam patterns.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { exam: 'SSC CGL', title: 'Tier 1 Full Mock', q: 100, t: 60 },
                        { exam: 'JEE Main', title: 'Complete Physics', q: 30, t: 60 },
                        { exam: 'NEET UG', title: 'Biology Chapter 1', q: 90, t: 45 },
                        { exam: 'UPSC CSE', title: 'Polity Basics', q: 50, t: 60 },
                        { exam: 'Banking PO', title: 'Quant Speed Test', q: 35, t: 20 },
                        { exam: 'CUET UG', title: 'General Ability', q: 60, t: 60 }
                    ].map((test, idx) => (
                        <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                                <span className="text-xs font-black uppercase text-accent tracking-wider bg-accent/10 px-3 py-1 rounded-md">{test.exam}</span>
                                <span className="text-[10px] font-bold uppercase text-slate-400">Free Access</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">{test.title}</h3>

                            <div className="flex items-center gap-4 text-sm font-semibold text-slate-600 dark:text-slate-400 mb-6">
                                <div className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</div>
                                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</div>
                            </div>

                            <button className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
                                <PlayCircle className="w-5 h-5 text-primary dark:text-accent group-hover:scale-110 transition-transform" /> Attempt Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
