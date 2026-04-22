import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, CheckCircle, ArrowRight, PlayCircle, FileText, ChevronRight } from 'lucide-react';
import TestSeriesPackages from '@/components/TestSeriesPackages';

export const metadata = {
  title: 'JEE Preparation & Crash Course 2026 - ExamBoost',
  description: 'Comprehensive preparation resources, JEE crash course 2026, JEE mock test free, and study materials for JEE Main & Advanced.',
  keywords: ['JEE crash course 2026', 'JEE mock test free', 'JEE preparation', 'JEE Main mock test'],
  alternates: {
    canonical: 'https://www.examboost.in/exams/engineering-entrance/jee'
  }
};

export default function JeePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent mb-6 flex-wrap">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:underline">Exams</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams/engineering-entrance" className="hover:underline">Engineering</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-500 dark:text-slate-400">JEE</span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary">JEE</span> with our Crash Course 2026
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Top-tier study materials, interactive mock tests, and expert guidance to help you secure top ranks in your JEE journey.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                Start Preparing <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {/* Subcategories Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Subcategories for JEE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
            <Link href="/series/mock-eng-1" className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg text-primary dark:text-accent">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">JEE Main</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Explore preparation materials, tests and more for JEE Main.</p>
            </Link>
          
            <Link href="/exams/engineering-entrance/jee/jee-advanced" className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg text-primary dark:text-accent">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">JEE Advanced</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Explore preparation materials, tests and more for JEE Advanced.</p>
            </Link>
          
        </div>
      </div>
      

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Popular Resources for JEE</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Attempt subject-wise and full-length mock tests designed by experts to match the latest exam pattern.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">New Pattern</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">JEE Material {item}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Interactive and expert-designed resource</p>
              
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                <button className="text-primary dark:text-accent font-bold text-sm bg-primary/10 dark:bg-accent/10 px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-slate-900 transition-colors w-full">
                  Access Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test Series Packages Section */}
      <TestSeriesPackages examName="JEE" />
      
    </div>
  );
}
