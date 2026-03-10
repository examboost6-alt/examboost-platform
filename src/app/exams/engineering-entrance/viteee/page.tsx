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
  title: 'VITEEE Preparation - ExamBoost',
  description: 'Comprehensive preparation resources, mock tests, complete exam information, syllabus, and study materials for VITEEE.'
};

export default function ViteeePage() {
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
            <span className="text-slate-900 dark:text-white">VITEEE</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">Core Versatility</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-bold tracking-wide uppercase">CBT Mode</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
                  Crack <span className="text-cyan-600 dark:text-cyan-400">VITEEE</span> 2026 Like a Pro
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  Your guaranteed gateway to VIT Vellore and Chennai. Master the unique 125-question format covering Maths/Bio, Physics, Chemistry, English, and Aptitude with our precision mocks.
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
                  {[4, 5, 2].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-xs font-bold text-cyan-700 dark:text-cyan-400">
                    1.5L
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Trusted by <span className="font-bold text-slate-900 dark:text-white">1.5 Lakh+</span> <br /> VITEEE Aspirants
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
                      <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Dream Campus</div>
                        <div className="text-xs font-medium text-slate-500">VIT Vellore (Tier 1)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">CSE Goal</div>
                      <div className="text-xs font-bold text-slate-500">Target Category 1</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>Maths/Biology</span> <span>32/40</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-cyan-500 w-[80%] h-full rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>Phys + Chem</span> <span>60/70</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-cyan-500 w-[85%] h-full rounded-full"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        <span>English & Aptitude</span> <span>13/15</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full"><div className="bg-cyan-500 w-[86%] h-full rounded-full"></div></div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-500" /> High Selection Chance</span>
                  </div>
                </div>

                {/* small floating elements */}
                <div className="absolute top-12 left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_5s_infinite]">
                  <Brain className="w-4 h-4 text-orange-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">125 Qs.</span>
                </div>
                <div className="absolute bottom-12 right-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2 animate-[bounce_4s_infinite_1s]">
                  <Clock className="w-4 h-4 text-cyan-500" /> <span className="text-xs font-bold text-slate-700 dark:text-slate-300">150 Mins</span>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Everything About VITEEE</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Discover all the important details encompassing the pattern, mode, and structure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Layout, title: "Exam Mode", desc: "Online CBT (Computer Based Test) across 125+ centers in India." },
              { icon: Clock, title: "Duration", desc: "150 Minutes (2.5 Hours) to solve 125 questions without sectional limits." },
              { icon: Layers, title: "Unique Topics", desc: "Maths/Bio, Physics, Chemistry, accompanied by Aptitude and English." },
              { icon: Calendar, title: "Occurrence", desc: "Conducted once a year in April over multiple days and slots." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-[250px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Expected Score to Branches Matrix */}
      <div className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

            <div className="flex-1 space-y-6 lg:max-w-xl">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <BarChart className="w-4 h-4" /> Category-Wise Admissions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Understand the VIT Fee Category System
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                VITEEE uses a unique ranking and fee category system mapping Top ranks to lower financial categories (Cat 1 to Cat 5) for leading branches in Vellore and Chennai. Target High for Category 1 CSE.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5">Top 1,00,000 ranks are eligible for counselling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mt-1 shrink-0"><CheckCircle className="w-4 h-4" /></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium pt-0.5">Vellore CSE Category 1 historically demands &lt; 2,000 Rank.</span>
                </li>
              </ul>
              <Link href="#test-series" className="inline-flex mt-6 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-6 py-3 rounded-xl font-bold transition-colors shadow-md">
                Secure Your Rank Today
              </Link>
            </div>

            <div className="flex-1 w-full bg-slate-50 dark:bg-slate-800/30 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white">Trend Estimations</h3>
              </div>
              <div className="space-y-4">
                {[
                  { rank: "Top 1 - 2.5K", branch: "CSE Vellore (Cat 1/2)", width: "w-[95%]", status: "Very High" },
                  { rank: "2.5K - 10K", branch: "CSE Chennai / ECE Vellore", width: "w-[85%]", status: "High" },
                  { rank: "10K - 30K", branch: "Other Branches (Cat 1/2/3)", width: "w-[70%]", status: "Moderate" },
                  { rank: "30K - 50K", branch: "Lower branches or Cat 4/5", width: "w-[50%]", status: "Tough" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                    <div className="relative z-10 flex justify-between items-center mb-2">
                      <span className="font-bold text-slate-900 dark:text-white">{item.rank}</span>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400">
                        {item.status} Focus
                      </span>
                    </div>
                    <div className="relative z-10 text-sm font-medium text-slate-500 mb-3">{item.branch}</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full relative z-10 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 ${item.width} rounded-full transition-all group-hover:scale-x-105 origin-left duration-300`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Complete Exam Pattern Breakdown */}
      <div className="py-20 bg-slate-100 dark:bg-slate-950/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">VITEEE 2026 Exam Pattern</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">VITEEE employs 125 MCQs evaluated in 150 minutes testing precision.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-5 font-bold text-slate-900 dark:text-white whitespace-nowrap">Section</th>
                    <th className="p-5 font-bold text-slate-900 dark:text-white whitespace-nowrap">Subjects</th>
                    <th className="p-5 font-bold text-slate-900 dark:text-white text-center whitespace-nowrap">Questions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm md:text-base">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-bold text-slate-700 dark:text-slate-300">Part 1</td>
                    <td className="p-5 text-slate-600 dark:text-slate-400">Mathematics OR Biology</td>
                    <td className="p-5 font-bold text-slate-900 dark:text-white text-center">40 Qs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-bold text-slate-700 dark:text-slate-300">Part 2</td>
                    <td className="p-5 text-slate-600 dark:text-slate-400">Physics</td>
                    <td className="p-5 font-bold text-slate-900 dark:text-white text-center">35 Qs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-bold text-slate-700 dark:text-slate-300">Part 3</td>
                    <td className="p-5 text-slate-600 dark:text-slate-400">Chemistry</td>
                    <td className="p-5 font-bold text-slate-900 dark:text-white text-center">35 Qs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-bold text-slate-700 dark:text-slate-300">Part 4</td>
                    <td className="p-5 text-slate-600 dark:text-slate-400">English</td>
                    <td className="p-5 font-bold text-slate-900 dark:text-white text-center">5 Qs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 font-bold text-slate-700 dark:text-slate-300">Part 5</td>
                    <td className="p-5 text-slate-600 dark:text-slate-400">Aptitude</td>
                    <td className="p-5 font-bold text-slate-900 dark:text-white text-center">10 Qs</td>
                  </tr>
                  <tr className="bg-cyan-50 dark:bg-cyan-900/10 border-t-2 border-cyan-100 dark:border-cyan-900/30">
                    <td className="p-5 font-black text-slate-900 dark:text-white" colSpan={2}>Total Representation</td>
                    <td className="p-5 font-black text-cyan-600 dark:text-cyan-400 text-center text-lg">125 MCQs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Correct: <strong className="text-slate-900 dark:text-white">+1 or +4 (As Revised) Marks</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <XCircleIcon className="w-5 h-5 text-rose-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Negative: <strong className="text-slate-900 dark:text-white">0 or -1 (As Revised)</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Subject Strategies */}
      <div className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm mb-4 block">Preparation Strategy</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Focus on Core Topics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-800 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-500" /> English & Aptitude (15 Qs)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                These 15 questions act as the major rank booster. Focus on grammar, spelling, pronunciation, logical deductions, data interpretation, and coding-decoding topics to conquer this domain quickly.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-800 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-500" /> Mathematics / Biology (40 Qs)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Carrying maximum weightage, this section dictates your outcome. Focus directly on formula-based and conceptual NCERT questions. VITEEE questions are mostly straightforward but demand rapid arithmetic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Main Test Series Call to Action */}
      <div id="test-series" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-wider uppercase text-sm mb-4 block">Simulate the Real Exam</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Select Your Preparation Plan</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Practice on an interface identical to the real VITEEE. Build your speed, enhance accuracy, and ensure top rankings to qualify for Category 1.
            </p>
          </div>

          <JeeTestSeriesCards examName="VITEEE" />
        </div>
      </div>

    </div>
  );
}

function XCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
