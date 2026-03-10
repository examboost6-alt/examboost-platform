import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Stethoscope, Scale, Landmark, Shield, Calculator, Train, Briefcase, Presentation, GraduationCap } from 'lucide-react';

export const metadata = {
    title: 'All Exams - ExamBoost',
    description: 'Browse all competitive exams test series, syllabus, and study materials.'
};

const categories = [
    { name: "Engineering Entrance", href: "/exams/engineering-entrance", icon: Calculator, desc: "JEE Main, JEE Advanced, BITSAT, VITEEE..." },
    { name: "Medical Entrance", href: "/exams/medical-entrance", icon: Stethoscope, desc: "NEET UG, AIIMS Nursing..." },
    { name: "UPSC & Civil Services", href: "/exams/upsc-civil-services", icon: Landmark, desc: "UPSC CSE, CDS, NDA..." },
    { name: "SSC Exams", href: "/exams/ssc-exams", icon: Landmark, desc: "SSC CGL, CHSL, GD, MTS..." },
    { name: "Banking", href: "/exams/banking", icon: Briefcase, desc: "IBPS PO, SBI PO, Clerk..." },
    { name: "Railways", href: "/exams/railways", icon: Train, desc: "RRB NTPC, Group D, JE..." },
    { name: "State PSC", href: "/exams/state-psc", icon: BookOpen, desc: "UPPSC, BPSC, RPSC..." },
    { name: "Police", href: "/exams/police", icon: Shield, desc: "Delhi Police, UP Police..." },
    { name: "Law", href: "/exams/law", icon: Scale, desc: "CLAT, AILET, SLAT..." },
    { name: "MBA", href: "/exams/mba", icon: Presentation, desc: "CAT, XAT, CMAT..." },
    { name: "Teaching", href: "/exams/teaching", icon: GraduationCap, desc: "CTET, UPTET, REET..." },
    { name: "CUET", href: "/exams/cuet", icon: BookOpen, desc: "CUET UG, CUET PG..." }
];

export default function ExamsListingPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 w-full">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary">All Exam</span> Categories
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Find the perfect test series and study material curated by top faculty for your specific goal.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <Link key={idx} href={cat.href} className="bg-white dark:bg-[#0f172a] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800/80 rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-slate-900 transition-colors mb-6">
                                <cat.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">{cat.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">{cat.desc}</p>
                            <div className="flex items-center text-primary dark:text-accent font-bold text-sm">
                                Explore Exams <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
