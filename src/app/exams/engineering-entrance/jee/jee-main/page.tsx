import React from 'react';
import Link from 'next/link';
import {
  BookOpen, ChevronRight, Calculator, ShieldCheck,
  Star, Target, CheckCircle, Clock
} from 'lucide-react';
import JeeTestSeriesCards from '@/components/JeeTestSeriesCards';
import JeeMainGuide from '@/components/JeeMainGuide';

export const metadata = {
  title: 'JEE Main 2026 Preparation - Complete Guide & Mock Tests',
  description: 'Complete guide for JEE Main 2026 including NTA official syllabus, strict exam pattern mock tests, performance analysis and important dates.'
};

export default function JeeMainPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0B] w-full font-sans selection:bg-primary/20 overflow-x-hidden">

      {/* 1. Ultra-Premium Brand Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-[#0A0A0B] border-b border-slate-200/50 dark:border-slate-800/30 pt-24 md:pt-28 isolate">

        {/* Abstract Background Gradients (Similar to top brands) */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-10 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] clip-path-polygon"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-4 md:pt-8 relative z-10 w-full">

          {/* Clean Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 md:mb-12">
            <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams/engineering-entrance" className="hover:text-primary dark:hover:text-accent transition-colors">Engineering</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">JEE Main</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">

            {/* Left Content Column */}
            <div className="flex-1 space-y-8 lg:max-w-xl xl:max-w-2xl w-full">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2.5">
                  <span className="bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent px-3 py-1.5 rounded-lg text-xs md:text-sm font-black tracking-widest uppercase border border-primary/20 dark:border-accent/20">Engineering</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs md:text-sm font-black tracking-widest uppercase border border-slate-200 dark:border-slate-700">NTA Pattern</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  Score <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:from-accent dark:to-blue-400">99+ Percentile</span> <br className="hidden md:block" /> in JEE Main 2026
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
                  Join India's most trusted testing platform. Practice with meticulously crafted NTA-pattern mock tests, complete syllabus coverage, and AI-enabled performance analysis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a href="#test-series" className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-black/10 dark:shadow-white/10 text-center">
                  <Star className="w-5 h-5 fill-current" /> View Test Series
                </a>
                <a href="#complete-guide" className="bg-primary/5 hover:bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent dark:hover:bg-accent/20 border-2 border-primary/20 dark:border-accent/20 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 w-full sm:w-auto text-center">
                  <BookOpen className="w-5 h-5" /> Syllabus & Pattern
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-4 md:gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-transparent hover:z-10 transition-transform hover:scale-110`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Student profile picture" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs md:text-sm font-black text-slate-600 dark:text-slate-400">
                    14L+
                  </div>
                </div>
                <div className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 leading-snug">
                  Trusted by <span className="font-bold text-slate-900 dark:text-white">14 Lakh+</span> <br className="hidden sm:block" /> JEE Aspirants
                </div>
              </div>
            </div>

            {/* Right floating component (Premium Feel) */}
            <div className="flex-1 w-full flex justify-center lg:justify-end lg:max-w-none relative mt-8 lg:mt-0 px-4 sm:px-0">
              {/* Background glow behind the card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-primary/20 dark:bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative w-full max-w-[420px] bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] sm:text-xs font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-widest shadow-lg -rotate-3 border border-white/20">
                  Live Analysis
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-accent/20 dark:to-blue-400/20 rounded-2xl flex items-center justify-center border border-primary/20 dark:border-accent/20 shrink-0">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">AI Rank Predictor</h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">Based on Past 5 Yrs Data</p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 mb-6 border border-slate-100 dark:border-slate-700/50">
                  <div className="flex justify-between items-end mb-5">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Expected %ile</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:from-accent dark:to-blue-400 leading-none">99.9</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-400">%</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { l: 'Physics', v: '98/100', p: 98, clr: 'bg-primary dark:bg-accent', bgClr: 'bg-primary/10 dark:bg-accent/20' },
                      { l: 'Chemistry', v: '95/100', p: 95, clr: 'bg-blue-500 dark:bg-blue-400', bgClr: 'bg-blue-100 dark:bg-blue-900/30' },
                      { l: 'Mathematics', v: '85/100', p: 85, clr: 'bg-rose-500 dark:bg-rose-400', bgClr: 'bg-rose-100 dark:bg-rose-900/30' }
                    ].map((s, idx) => (
                      <div key={idx} className="group">
                        <div className="flex justify-between text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 transition-colors group-hover:text-slate-900 dark:group-hover:text-white">
                          <span>{s.l}</span> <span className="text-slate-900 dark:text-white">{s.v}</span>
                        </div>
                        <div className={`w-full ${s.bgClr} h-1.5 sm:h-2 rounded-full overflow-hidden`}>
                          <div className={`${s.clr} h-full rounded-full transition-all duration-1000 ease-out`} style={{ width: `${s.p}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl p-3 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-default">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-800 dark:text-emerald-300">NIT Eligible</span>
                  </div>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-3 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-default">
                    <Clock className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">100% NCERT</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Predictor Callout Section */}
      <div className="py-16 md:py-28 bg-white dark:bg-[#0A0A0B]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1280px]">
          <div className="bg-gradient-to-br from-slate-900 to-primary dark:from-slate-900 dark:to-slate-800 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-20 shadow-2xl">

            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent opacity-20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="flex-1 relative z-10 text-center md:text-left text-white w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 font-bold text-sm tracking-wide mb-6 border border-white/20 backdrop-blur-md">
                <Calculator className="w-4 h-4" /> ExamBoost College Predictor
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white">
                Will you get into <br className="hidden md:block" />
                <span className="text-yellow-400">Top NITs</span> this year?
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">
                Check your admission chances instantly. Enter your target score and let our AI analyze 5 years of JoSAA cutoffs for you.
              </p>
            </div>

            <div className="w-full md:w-[420px] bg-white dark:bg-[#0A0A0B] p-6 text-left md:p-8 rounded-[2rem] relative z-10 shadow-2xl border border-white/20 dark:border-slate-800">
              <div className="mb-6">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block tracking-wide uppercase">Enter Target Score</label>
                <div className="relative">
                  <input type="text" readOnly value="215" className="w-full h-16 bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl px-5 font-black text-3xl text-slate-900 dark:text-white outline-none cursor-default" />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xl">/ 300</div>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Expected %ile</span>
                  <span className="text-2xl font-black text-primary dark:text-accent">99.5+</span>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-500/20">
                  <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">High Chances For</div>
                  <div className="flex items-center gap-3 font-bold text-slate-900 dark:text-white text-base mb-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" /> NIT Trichy (CSE)
                  </div>
                  <div className="flex items-center gap-3 font-bold text-slate-900 dark:text-white text-base">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" /> NIT Surathkal (IT)
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 mt-4 shadow-lg active:scale-95">
                  Try Predictor Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Custom Complete Guide Section requested by User */}
      <div id="complete-guide" className="py-20 md:py-28 bg-slate-50 dark:bg-[#050505] border-t border-slate-200/50 dark:border-slate-800/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1280px]">
          <JeeMainGuide />
        </div>
      </div>

      {/* 4. Main Test Series Call to Action */}
      <div id="test-series" className="py-24 md:py-32 bg-white dark:bg-[#0A0A0B] border-t border-slate-200/50 dark:border-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent font-black tracking-widest uppercase text-xs md:text-sm mb-6 border border-primary/20 dark:border-accent/20">Preparation Starts Here</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Select Your Preparation Plan
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
              Pick the right test series designed by expert faculties to help you ace JEE Main with flying colors.
            </p>
          </div>

          <JeeTestSeriesCards />
        </div>
      </div>

    </div>
  );
}