import React from 'react';
import Link from 'next/link';
import {
  BookOpen, CheckCircle, ArrowRight, ChevronRight,
  Target, Brain, BarChart, Clock, Layout,
  Calendar, Layers, ShieldCheck,
  Star, Award, Zap
} from 'lucide-react';
import JeeTestSeriesCards from '@/components/JeeTestSeriesCards';

export const metadata = {
  title: 'BITSAT Preparation - ExamBoost',
  description: 'Comprehensive preparation resources, mock tests, complete exam information, syllabus, and study materials for BITSAT.'
};

export default function BitsatPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full">

      {/* 1. Modern Clean Hero Section */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-20 pt-4 md:pt-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 flex-wrap mb-8">
            <Link href="/" className="hover:text-primary dark:hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:text-primary dark:hover:text-accent transition-colors">Exams</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams/engineering-entrance" className="hover:text-primary dark:hover:text-accent transition-colors">Engineering</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-white">BITSAT</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">Speed & Accuracy</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">CBT Mode</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
                  Score 300+ in <span className="text-emerald-600 dark:text-emerald-400">BITSAT</span> 2026
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  Unlock the gates to BITS Pilani, Goa, and Hyderabad. Master the art of speed and accuracy with our meticulously timed mock tests, English & Logical Reasoning modules, and AI analytics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#test-series" className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                  <Star className="w-5 h-5 fill-current" /> View Test Series
                </a>
                <a href="#exam-info" className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" /> Syllabus & Pattern
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    2L+
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Trusted by <span className="font-bold text-slate-900 dark:text-white">2 Lakh+</span> <br /> BITSAT Aspirants
                </div>
              </div>
            </div>

            {/* Infographic Hero Image replacement */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8">
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

                {/* Main floating card */}
                <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Admission Target</div>
                        <div className="text-xs font-medium text-slate-500">BITS Pilani Campus</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">305</div>
                      <div className="text-xs font-bold text-slate-500">/ 390 Goal</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>Physics</span> <span>75/90</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-emerald-500 w-[83%] h-full rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>Mathematics</span> <span>105/120</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-emerald-500 w-[87%] h-full rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>English & LR</span> <span>70/90</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-emerald-500 w-[77%] h-full rounded-full"></div></div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> CS Eligible (Expected)</span>
                  </div>
                </div>

                {/* small floating elements */}
                <div className="absolute top-12 left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
                  <Zap className="w-4 h-4 text-yellow-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Fast Paced</span>
                </div>
                <div className="absolute bottom-12 right-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_4s_infinite_1s]">
                  <Award className="w-4 h-4 text-emerald-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">12 Bonus Qs</span>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Everything About BITSAT</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">A high-speed, high-accuracy test. Know the structure before you compete.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Layout, title: "Exam Mode", desc: "Online Computer Based Test strictly conducted across designated centers." },
              { icon: Clock, title: "Duration", desc: "180 Minutes (3 Hours) strictly without any sectional time limits." },
              { icon: Layers, title: "New Additions", desc: "Includes English Proficiency and Logical Reasoning uniquely unlike JEE." },
              { icon: Calendar, title: "Sessions", desc: "Conducted in 2 sessions. Candidates can attempt either one or both." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Unique Predictor Feature */}
      <div className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="bg-emerald-700 dark:bg-slate-800 rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
            {/* Background design */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            <div className="flex-1 relative z-10 text-center md:text-left text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 font-bold text-sm mb-6 border border-white/20 backdrop-blur-sm">
                <Target className="w-4 h-4" /> Score Targeter
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Can you conquer <br className="hidden md:block" />
                <span className="text-emerald-200 dark:text-emerald-400">Pilani Campus?</span>
              </h2>
              <p className="text-white/80 dark:text-slate-300 text-lg mb-8 max-w-md mx-auto md:mx-0">
                BITSAT cutoff trends vary slightly every year based on difficulty. Set your target score and see which branches you can unlock across Pilani, Goa, and Hyderabad.
              </p>
            </div>

            {/* Interactive Form Simulation */}
            <div className="w-full md:w-[380px] bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl relative z-10 shadow-2xl border border-white/10">
              <div className="mb-6">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 block">Enter Your Mock Score</label>
                <div className="relative">
                  <div className="w-full h-14 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 flex items-center justify-between font-black text-xl text-slate-900 dark:text-white outline-none">
                    <span>275</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-base">/ 390 Marks</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500">Secures Admission To</span>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-100 dark:border-emerald-800/50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Pilani (Electrical & Electronics)
                  </div>
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Goa (Computer Science)
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold transition-transform hover:-translate-y-0.5 mt-2">
                  View Full Cutoff Planner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Exam Pattern Table */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">BITSAT 130-Question Format</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Total 390 marks divided across 4 crucial sections. Accuracy is key.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { subject: 'Physics', q: 30, mks: 90, color: 'bg-blue-50 dark:bg-blue-900/20', borderColor: 'border-blue-200 dark:border-blue-800/50', iconColor: 'text-blue-500' },
              { subject: 'Chemistry', q: 30, mks: 90, color: 'bg-cyan-50 dark:bg-cyan-900/20', borderColor: 'border-cyan-200 dark:border-cyan-800/50', iconColor: 'text-cyan-500' },
              { subject: 'English & LR', q: '10+20', mks: 90, color: 'bg-amber-50 dark:bg-amber-900/20', borderColor: 'border-amber-200 dark:border-amber-800/50', iconColor: 'text-amber-500' },
              { subject: 'Mathematics', q: 40, mks: 120, color: 'bg-rose-50 dark:bg-rose-900/20', borderColor: 'border-rose-200 dark:border-rose-800/50', iconColor: 'text-rose-500' },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl border ${s.borderColor} ${s.color} p-6`}>
                <div className="flex flex-col mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                    <BookOpen className={`w-5 h-5 ${s.iconColor}`} /> {s.subject}
                  </h3>
                  <div className="space-y-1">
                    <div className="font-extrabold text-xl text-slate-900 dark:text-white">{s.q} <span className="text-xs font-normal text-slate-500">Qs</span></div>
                    <div className="font-bold text-sm text-slate-500 dark:text-slate-400">{s.mks} Marks Total</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Marking scheme */}
          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-black">+3</div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Correct Answer</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-black">-1</div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Incorrect Answer</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-black">0</div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">Unattempted</span>
            </div>
          </div>

          <div className="mt-8 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 flex flex-col sm:flex-row items-start md:items-center gap-6 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-500 mb-1">The 12 Bonus Questions</h3>
              <p className="text-emerald-800 dark:text-emerald-200/80 text-sm font-medium leading-relaxed">If a candidate answers all 130 questions without skipping any, they can unlock 12 extra bonus questions (4 each from Physics, Chem, Math). Note: You cannot return to the main 130 questions once you enter the bonus section.</p>
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
                  { name: 'Physics & Chemistry', desc: 'Mostly formula-based and factual. Direct NCERT lines are often picked in Chemistry.', icon: Layers, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
                  { name: 'Mathematics', desc: 'Lengthy but not exceptionally deep. Speed in solving standard integration/algebra is vital.', icon: BarChart, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
                  { name: 'English Proficiency', desc: 'Tests vocabulary, grammar, and reading speed. Hard to cram, requires steady practice.', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
                  { name: 'Logical Reasoning', desc: 'Pattern recognition, syllogisms, and puzzles. Highly scoring if practiced well.', icon: Brain, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors">
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">Speed is the Ultimate Weapon</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Unlike JEE Advanced which tests deep problem solving, BITSAT is a race against the clock. You have roughly 1.38 minutes per question, meaning rapid recall and quick calculations are completely mandatory.
              </p>

              <div className="space-y-6 bg-slate-100 dark:bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white pb-1">Key BITSAT Strategies</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 text-slate-800 dark:text-slate-300">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-base"><strong className="text-slate-900 dark:text-white">Skip the traps.</strong> If a question takes more than 2 minutes, skip it. You have 130 questions to navigate.</span>
                  </li>
                  <li className="flex gap-4 text-slate-800 dark:text-slate-300">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-base"><strong className="text-slate-900 dark:text-white">Don't ignore English/LR.</strong> It constitutes 30 questions (90 marks) and is usually the deciding factor for CS branches.</span>
                  </li>
                  <li className="flex gap-4 text-slate-800 dark:text-slate-300">
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-base"><strong className="text-slate-900 dark:text-white">Aim for Bonus selectively.</strong> Only attempt to unlock the 12 bonus questions if you are 100% confident in attempting all 130 main questions with high accuracy.</span>
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
            <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">Simulate the Real Exam</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Select Your Preparation Plan</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Practice on an interface identical to the real BITSAT. Build your speed, enhance accuracy, and master the English/LR section.
            </p>
          </div>

          <JeeTestSeriesCards examName="BITSAT" />
        </div>
      </div>

    </div>
  );
}
