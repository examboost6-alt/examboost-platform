import React from 'react';
import Link from 'next/link';
import {
  BookOpen, CheckCircle, ArrowRight, ChevronRight,
  XCircle, Target, Brain, BarChart, Clock, Layout,
  Calendar, TrendingUp, Calculator, ShieldCheck,
  ChevronDown, BookMarked, Layers, Settings,
  GraduationCap, Star, Award, Search, FileText
} from 'lucide-react';
import JeeTestSeriesCards from '@/components/JeeTestSeriesCards';

export const metadata = {
  title: 'JEE Advanced Preparation - ExamBoost',
  description: 'Comprehensive preparation resources, advanced mock tests, complete exam information, and study materials for JEE Advanced to get into IITs.'
};

export default function JeeAdvancedPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full">

      {/* 1. Modern Clean Hero Section */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-20 lg:pb-24 pt-4 md:pt-8">

          {/* Breadcrumb - Clean & Simple */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 flex-wrap mb-8">
            <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams/engineering-entrance" className="hover:text-primary dark:hover:text-accent transition-colors">Engineering</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-white">JEE Advanced</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary text-white dark:bg-accent dark:text-slate-900 px-3 py-1 text-xs font-bold tracking-wider uppercase">Engineering</span>
                  <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 text-xs font-bold tracking-wider uppercase border border-slate-300 dark:border-slate-700">IIT Admission</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
                  Secure Your Seat in <span className="text-primary dark:text-accent">Top IITs</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  Conquer the toughest engineering entrance exam. Master conceptual clarity and problem-solving skills with our expert-designed JEE Advanced mock tests, detailed solutions, and advanced analytics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#test-series" className="bg-primary hover:bg-secondary text-white px-8 py-4 font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-sm">
                  <Star className="w-5 h-5 fill-white" /> Start Preparation
                </a>
                <a href="#exam-info" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-500 px-8 py-4 font-bold text-lg transition-colors flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" /> Exam Details & Pattern
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-12 h-12 border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 border-2 border-white dark:border-slate-950 bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center text-xs font-black">
                    1%
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Trusted by the <span className="font-bold text-slate-900 dark:text-white">Top 2.5 Lakh</span> <br /> JEE Qualifiers
                </div>
              </div>
            </div>

            {/* Nice Clean Infographic Hero Image replacement */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">

                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

                {/* Main floating card */}
                <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Target Rank</div>
                        <div className="text-xs font-medium text-slate-500">All India Rank (AIR)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-primary dark:text-accent">~500</div>
                      <div className="text-xs font-bold text-slate-500">Goal</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase tracking-wide">
                        <span>Paper 1 Preparation</span> <span>80%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-3"><div className="bg-indigo-600 dark:bg-indigo-500 w-[80%] h-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase tracking-wide">
                        <span>Paper 2 Preparation</span> <span>75%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-3"><div className="bg-indigo-600 dark:bg-indigo-500 w-[75%] h-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase tracking-wide">
                        <span>Conceptual Depth</span> <span>90%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-3"><div className="bg-indigo-600 dark:bg-indigo-500 w-[90%] h-full"></div></div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> IIT Bombay (CSE) Tracker Enabled</span>
                  </div>
                </div>

                {/* small floating elements */}
                <div className="absolute top-12 left-4 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
                  <Brain className="w-4 h-4 text-indigo-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">High Weightage</span>
                </div>
                <div className="absolute bottom-12 right-4 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_4s_infinite_1s]">
                  <Layers className="w-4 h-4 text-indigo-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Multi-Concept Qs</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Clear Information Cards */}
      <div id="exam-info" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Everything About JEE Advanced</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Understand the structure of India's most challenging exam for engineering aspirants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: CheckCircle, title: "Eligibility", desc: "Top 2.5 Lakh candidates who qualify JEE Main. Max 2 consecutive attempts." },
              { icon: Layout, title: "Papers", desc: "Two compulsory papers: Paper 1 and Paper 2, held on the same day." },
              { icon: Clock, title: "Duration", desc: "3 Hours for Paper 1 & 3 Hours for Paper 2. Total 6 Hours of intense testing." },
              { icon: Award, title: "Goal", desc: "Gateway to the 23 premier IITs, IISc Bangalore, and IISERs across India." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Unique Predictor/Info Feature - Adapted for IITs */}
      <div className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="bg-indigo-600 dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">

            {/* Background design */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            <div className="flex-1 relative z-10 text-center md:text-left text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 font-bold text-sm mb-6 border border-white/20 backdrop-blur-sm">
                <Target className="w-4 h-4" /> Goal IIT
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Are you ready for <br className="hidden md:block" />
                <span className="text-indigo-200 dark:text-indigo-400">The Ultimate Test?</span>
              </h2>
              <p className="text-white/80 dark:text-slate-300 text-lg mb-8 max-w-md mx-auto md:mx-0">
                JEE Advanced is purely about conceptual depth and application. Our specialized test series gives you exact exam-like interface and difficulty level.
              </p>
            </div>

            {/* Beautiful Interactive Form Simulation */}
            <div className="w-full md:w-[380px] bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl relative z-10 shadow-2xl border border-white/10">
              <div className="mb-6">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 block">Expected Cutoff Insights</label>
                <div className="relative">
                  <div className="w-full h-14 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 flex items-center justify-between font-black text-xl text-slate-900 dark:text-white outline-none">
                    <span>Rank ~1000</span>
                    <span className="text-indigo-600 dark:text-indigo-400 text-base">~45-50% Marks</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500">Secures Admission To</span>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800/50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-500" /> IIT Delhi (Electrical)
                  </div>
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <ShieldCheck className="w-4 h-4 text-indigo-500" /> IIT Kanpur (CSE Dual)
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold transition-transform hover:-translate-y-0.5 mt-2">
                  View Full Cutoff Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Exam Pattern Dynamics - Very clean modern Card Style */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">A Dynamic Exam Pattern</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Unlike JEE Main, JEE Advanced changes its marking scheme and question types every year.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Paper 1 Format',
                time: '09:00 AM - 12:00 Noon',
                types: ['Single Choice Correct', 'Multiple Choice Correct', 'Integer/Numerical Value', 'Matching List/Matrix']
              },
              {
                title: 'Paper 2 Format',
                time: '02:30 PM - 05:30 PM',
                types: ['Single Choice Correct', 'Multiple Choice Correct', 'Comprehension/Paragraph', 'Non-Negative Integer']
              },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                    <FileText className={`w-6 h-6 text-indigo-500`} /> {s.title}
                  </h3>
                  <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2 w-fit">
                    <Clock className="w-4 h-4" /> {s.time}
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">Question Types Appear</h4>
                <div className="space-y-3 bg-white/60 dark:bg-slate-900/40 rounded-xl p-4">
                  {s.types.map((type, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Alert / Warning style marking scheme box */}
          <div className="bg-amber-50 dark:bg-[#201000] p-6 md:p-8 rounded-2xl border border-amber-200 dark:border-amber-900/50 flex flex-col sm:flex-row items-start md:items-center gap-6 relative shadow-sm">
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-xl flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-500 mb-2">Beware of Negative Marking</h3>
              <p className="text-amber-800 dark:text-amber-200/80 min-w-0 font-medium leading-relaxed text-sm">JEE Advanced features strict negative marking, sometimes up to -2 for Multi-Correct questions. Partial marking is often awarded for marking correct options in multiple-correct questions without marking any incorrect option.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Subject Depth Analysis */}
      <div className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="flex-1 w-full order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Physics', desc: 'Focus on Mechanics & Electromagnetism integration. Heavy on multi-concept application.', icon: Settings, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/30' },
                  { name: 'Physical Chemistry', desc: 'Strictly numerical & calculus-based. Thermodynamics & Electrochemistry dominate.', icon: BarChart, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/30' },
                  { name: 'Organic Chemistry', desc: 'Deep reaction mechanisms and multi-step synthesis. Minimal direct questions.', icon: Layers, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/30' },
                  { name: 'Mathematics', desc: 'Calculus intertwined with Algebra/Coordinate Geometry. Extremely time-consuming.', icon: Calculator, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/30' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{item.name}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">Subject Depth Insights</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                JEE Advanced does not test how many formulas you know. It tests how well you can connect multiple concepts from different chapters to solve a single novel problem.
              </p>

              <div className="space-y-6 bg-slate-100 dark:bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white pb-1">Key Strategies</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 text-slate-800 dark:text-slate-300">
                    <CheckCircle className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-base"><strong className="text-slate-900 dark:text-white">Do not rely on memorization.</strong> Derivations and understanding base axioms are critical.</span>
                  </li>
                  <li className="flex gap-4 text-slate-800 dark:text-slate-300">
                    <CheckCircle className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-base"><strong className="text-slate-900 dark:text-white">Mock tests are non-negotiable.</strong> Building stamina to sit for 6 hours with peak concentration is as important as knowledge.</span>
                  </li>
                  <li className="flex gap-4 text-slate-800 dark:text-slate-300">
                    <CheckCircle className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-base"><strong className="text-slate-900 dark:text-white">PYQs are the gold standard.</strong> Solve last 10-15 years' papers religiously.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 6. Main Test Series Call to Action */}
      <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm mb-4 block">Advanced Testing Engine</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Select Your Preparation Plan</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our mock tests mimic the exact shifting patterns, tricky marking schemes, and multi-concept questions of genuine JEE Advanced papers.
            </p>
          </div>

          <JeeTestSeriesCards examName="JEE Advanced" />
        </div>
      </div>

    </div>
  );
}