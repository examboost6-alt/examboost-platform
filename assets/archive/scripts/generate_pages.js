const fs = require('fs');
const path = require('path');

const exams = [
  { slug: 'engineering-entrance', title: 'Engineering Entrance' },
  { slug: 'medical-entrance', title: 'Medical Entrance' },
  { slug: 'upsc-civil-services', title: 'UPSC & Civil Services' },
  { slug: 'ssc-exams', title: 'SSC Exams' },
  { slug: 'banking', title: 'Banking Exams' },
  { slug: 'railways', title: 'Railways Exams' },
  { slug: 'state-psc', title: 'State PSC Exams' },
  { slug: 'police', title: 'Police Exams' },
  { slug: 'law', title: 'Law Entrance' },
  { slug: 'mba', title: 'MBA Entrance' },
  { slug: 'teaching', title: 'Teaching Exams' },
  { slug: 'cuet', title: 'CUET' }
];

const baseDir = path.join(__dirname, 'src', 'app', 'exams');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

exams.forEach(exam => {
  if (exam.slug === 'engineering-entrance' || exam.slug === 'medical-entrance' || exam.slug === 'upsc-civil-services' || exam.slug === 'ssc-exams' || exam.slug === 'banking' || exam.slug === 'railways' || exam.slug === 'state-psc' || exam.slug === 'police' || exam.slug === 'law' || exam.slug === 'mba' || exam.slug === 'teaching' || exam.slug === 'cuet') return;
  const dirPath = path.join(baseDir, exam.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const componentName = exam.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page';

  const pageContent = `import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, CheckCircle, ArrowRight, PlayCircle, FileText, ChevronRight } from 'lucide-react';
import TestSeriesPackages from '@/components/TestSeriesPackages';

export const metadata = {
  title: '${exam.title} Preparation - ExamBoost',
  description: 'Comprehensive preparation resources, mock tests, and study materials for ${exam.title}.'
};

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:underline">Exams</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-500 dark:text-slate-400">${exam.title}</span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary">${exam.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Top-tier study materials, interactive mock tests, and expert guidance to help you secure top ranks in your ${exam.title} journey.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                Start Preparing <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                View Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats/Features Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white dark:bg-[#0f172a] rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/40 border border-slate-100 dark:border-slate-800 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">10,000+</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Practice Questions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">150+</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Mock Tests</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-xl">
                <PlayCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">500+ Hrs</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Video Lectures</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">50K+</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Active Aspirants</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Popular Test Series</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Attempt subject-wise and full-length mock tests designed by experts to match the latest exam pattern and difficulty level.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">New Pattern</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">Complete Mock Test {item}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">100 Questions • 120 Minutes • 200 Marks</p>
              
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">Free</span>
                </div>
                <button className="text-primary dark:text-accent font-bold text-sm bg-primary/10 dark:bg-accent/10 px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-slate-900 transition-colors">
                  Attempt Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test Series Packages Section */}
      <TestSeriesPackages examName="${exam.title}" />
      
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent, 'utf8');
  console.log('Created page for', exam.title);
});
