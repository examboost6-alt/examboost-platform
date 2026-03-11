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

      {/* 1. High-Converting Trust Hero Section (Clean Light UI) */}
      <div className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full">

          {/* Clean Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500 mb-8 md:mb-12">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/exams/engineering-entrance" className="hover:text-primary transition-colors">Engineering</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-bold">JEE Main</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">

            {/* Left Content Column - Aggressive Sales Copy */}
            <div className="flex-1 space-y-8 w-full order-1 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 mx-auto lg:mx-0">
                  <span className="bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 px-3 py-1.5 rounded-lg text-xs font-black tracking-widest border border-rose-200 dark:border-rose-500/20 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Bestseller
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-black tracking-widest border border-slate-200 dark:border-slate-700 shadow-sm">
                    Updated for 2026 NTA Pattern
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  Stop Practicing Blindly.<br />
                  Get the <span className="text-primary underline decoration-primary/30 underline-offset-8">Exact NTA Level</span> Mock Tests.
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mx-auto lg:mx-0 max-w-2xl">
                  92% of students fail because they practice irrelevant questions on outdated interfaces. Our test series perfectly clones the JEE Main difficulty, distribution, and CBT UI to guarantee your 99+ percentile.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                <a href="#test-series" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4.5 rounded-xl font-black text-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(225,29,72,0.5)]">
                  Enroll in Test Series <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#complete-guide" className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4.5 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  View Free Guide
                </a>
              </div>

              {/* Concrete Trust Metrics */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
                 <div className="flex flex-col gap-1">
                    <div className="text-3xl font-black text-slate-900 dark:text-white">14L+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Aspirants</div>
                 </div>
                 <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                 <div className="flex flex-col gap-1">
                    <div className="text-3xl font-black text-slate-900 dark:text-white">30k+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Selections</div>
                 </div>
                 <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
                 <div className="flex flex-col gap-1">
                    <div className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-1">4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400"/></div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Student Rating</div>
                 </div>
              </div>
            </div>

            {/* Right Column - Premium Clean App Mockup showing high value */}
            <div className="flex-1 w-full relative order-2 lg:max-w-lg mx-auto">
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-200 dark:border-slate-800 p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                 
                 <div className="mb-6 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Your Potential Dashboard</h3>
                    <div className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> AIR 14,203
                    </div>
                 </div>

                 <div className="space-y-4 relative z-10">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
                       <div className="flex justify-between items-end mb-2">
                          <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Current Readiness</span>
                          <span className="text-2xl font-black text-primary">82%</span>
                       </div>
                       <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-[82%] h-full bg-primary rounded-full"></div>
                       </div>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/20 rounded-2xl p-5 border border-rose-100 dark:border-rose-900/50">
                       <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center shrink-0">
                             <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Rotational Dynamics is weak</h4>
                             <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Our AI detected you waste 3.5 mins/question here. Practice specific rotational mock tests to improve.</p>
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                       <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                          <Clock className="w-5 h-5 text-slate-400 mb-2" />
                          <div className="text-lg font-black text-slate-900 dark:text-white mb-0.5">2.1 mins</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase">Avg Time/Q</div>
                       </div>
                       <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                          <Target className="w-5 h-5 text-slate-400 mb-2" />
                          <div className="text-lg font-black text-slate-900 dark:text-white mb-0.5">+45 Marks</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase">Proj. Improvement</div>
                       </div>
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
      <div id="test-series" className="py-24 bg-white dark:bg-[#020617] relative z-20">
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