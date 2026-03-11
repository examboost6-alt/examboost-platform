import React from 'react';
import Link from 'next/link';
import {
  BookOpen, ChevronRight, Calculator, ShieldCheck,
  Star, Target, CheckCircle, Clock, Trophy, BarChart3,
  Users, Sparkles, CheckCircle2, ArrowRight, TrendingUp, AlertCircle, Layout
} from 'lucide-react';
import JeeTestSeriesCards from '@/components/JeeTestSeriesCards';
import JeeMainGuide from '@/components/JeeMainGuide';

export const metadata = {
  title: 'JEE Main 2026 Guaranteed Selection Test Series - ExamBoost',
  description: 'Join the most trusted JEE Main 2026 test series. Real NTA interface, IITian curated questions, and exact difficulty level to guarantee your 99+ percentile.'
};

export default function JeeMainPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 w-full font-sans selection:bg-primary/20 overflow-x-hidden">

      {/* 1. Exam Specific Course Header (Clean Light UI) */}
      <div className="relative pt-28 pb-16 lg:pt-36 lg:pb-36 bg-white dark:bg-[#050505] border-b border-slate-200 dark:border-slate-800">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] dark:opacity-[0.03]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full flex flex-col items-center lg:items-end lg:flex-row gap-12 lg:gap-16">

          <div className="flex-1 space-y-6 w-full mt-4 lg:mt-0 lg:pb-6">
            {/* Clean Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/exams/engineering-entrance" className="hover:text-primary transition-colors">Engineering</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 dark:text-slate-100 font-bold">JEE Main</span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="bg-rose-50 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest border border-rose-200 dark:border-rose-500/30">
                Bestseller
              </span>
              <span className="text-slate-600 dark:text-slate-300 text-sm font-bold flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 (12,450 Ratings)
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.2] tracking-tight">
              JEE Main 2026: Official NTA Pattern Mock Test Series & Complete Guide
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-2xl">
              Master the exact exam pattern with our precision mock tests, subject-wise analysis, and step-by-step verified solutions curated by IITians.
            </p>

            {/* Exam Quick Meta Info */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
               <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  <div><p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Exam Level</p><p className="text-slate-900 dark:text-white font-bold text-sm">National (NTA)</p></div>
               </div>
               <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div><p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Duration</p><p className="text-slate-900 dark:text-white font-bold text-sm">180 Mins</p></div>
               </div>
               <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <div><p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Total Tests</p><p className="text-slate-900 dark:text-white font-bold text-sm">45+ Included</p></div>
               </div>
            </div>
          </div>

          {/* Right Column - Enrollment / Exam Card (Floating effect) */}
          <div className="w-full lg:w-[400px] shrink-0 relative lg:-mb-48 z-20">
             <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
                {/* Test Series Thumbnail / Graphic */}
                <div className="aspect-[16/7] bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10"></div>
                   <h3 className="text-3xl font-black text-primary dark:text-accent drop-shadow-sm rotate-[-2deg]">ExamBoost</h3>
                   <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white backdrop-blur px-2 py-1 text-xs font-bold rounded">Updated for '26</div>
                </div>
                
                <div className="p-6 md:p-8">
                   <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-black text-slate-900 dark:text-white">₹799</span>
                      <span className="text-sm font-bold text-slate-400 line-through">₹2499</span>
                      <span className="ml-auto bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold border border-green-200 dark:border-green-800">-68% OFF</span>
                   </div>

                   <div className="space-y-3 mb-8">
                      <a href="#test-series" className="w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 active:scale-95 text-center text-lg">
                         View Packages
                      </a>
                      <a href="#test-series" className="w-full flex items-center justify-center bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-bold py-4 rounded-xl transition-all">
                         Try Free Mock Test
                      </a>
                   </div>

                   <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Package Includes</h4>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 20 Full Length NTA Mocks
                      </div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> 25 Chapter-wise Concept Tests
                      </div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Step-by-step Detailed Solutions
                      </div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> AI Priority Rank Predictor
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* 2. Selling Points Grid (Why they MUST buy) */}
      <div className="py-20 bg-slate-50 dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">Why Toppers Only Trust ExamBoost</h2>
               <p className="text-slate-600 dark:text-slate-400 font-medium">Free resources are scattered and inaccurate. Here is exactly what you get when you enroll.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
               {[
                  { icon: Layout, title: 'Absolute NTA Clone', desc: 'The exact exact font, colors, and button placements as the real NTA CBT software. 0 surprises on exam day.'},
                  { icon: ShieldCheck, title: 'Zero-Error Guarantee', desc: 'Every numerical is verified by 3 separate subject matter experts. Stop wasting time on wrong question banks.'},
                  { icon: BarChart3, title: 'Micro-Analytics', desc: 'We don\'t just give an AIR. We tell you exactly which specific sub-topic is draining your marks.'},
                  { icon: Users, title: 'Elite Competition', desc: 'Benchmark your scores against 50,000+ serious aspirants who will be your actual competition.'}
               ].map((ft, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center flex flex-col items-center">
                     <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary mb-6">
                        <ft.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{ft.title}</h3>
                     <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{ft.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* 3. Main Test Series Call to Action - Moved up before the long guide so it's not missed */}
      <div id="test-series" className="py-24 bg-white dark:bg-[#020617] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 bg-white dark:bg-[#020617] relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-rose-50 text-rose-600 font-black tracking-widest uppercase text-xs mb-6 border border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20 shadow-sm">Limited Time Pricing</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Secure Your AIR 1000<br/>With These Packages
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Choose the package that fits your preparation stage. Prices increase heavily as the exam date approaches.
            </p>
          </div>

          <JeeTestSeriesCards examName="JEE Main" />
        </div>
      </div>

      {/* 4. Predictor Callout Section (Lead Gen / Engagement) */}
      <div className="py-20 bg-[#0B1120] dark:bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white max-w-2xl mx-auto">
              Curious about your chances at Top NITs?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-medium">
              Use our AI College Predictor. Enter your expected score, category and home state to see exactly which branch you will get.
            </p>
            <button className="bg-white text-slate-900 px-10 py-4.5 rounded-xl font-black text-lg transition-transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]">
              Launch Free Predictor
            </button>
        </div>
      </div>

      {/* 5. The Free Content / Guide Section - Placed at the very bottom as an SEO/Trust builder */}
      <div id="complete-guide" className="py-24 bg-slate-50 dark:bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">The Complete NTA Exam Guide</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Free resources, dates, syllabus and updates directly from official NTA circulars to keep you informed.</p>
          </div>
          <JeeMainGuide />
        </div>
      </div>

    </div>
  );
}