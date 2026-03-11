"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Zap,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  FileText,
  Target,
  ShieldCheck,
  Activity,
  Star,
  BookOpen,
  PieChart,
  Laptop,
  TrendingUp,
  Users,
  ChevronDown,
  Sparkles
} from 'lucide-react';

const popularExams = [
  {
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination',
    desc: 'For admission to NITs, IIITs, and Centrally Funded Technical Institutions.',
    tests: 45,
    pattern: 'NTA Pattern (MCQs + Numerical)',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/exams/engineering-entrance/jee/jee-main',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Exam Advanced',
    desc: 'The exclusive entrance exam for admission to the prestigious IITs.',
    tests: 30,
    pattern: 'Paper 1 & 2 (Multi-Correct, Integer)',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/exams/engineering-entrance/jee/jee-advanced',
    gradient: 'from-purple-600 to-indigo-500'
  },
  {
    name: 'BITSAT',
    fullName: 'BITS Admission Test',
    desc: 'Computer-based test for admission to BITS Pilani, Goa, and Hyderabad.',
    tests: 25,
    pattern: 'Speed & Accuracy (Includes English)',
    subjects: ['PCM', 'English', 'Logic'],
    href: '/exams/engineering-entrance/bitsat',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    name: 'VITEEE',
    fullName: 'VIT Engineering Entrance',
    desc: 'For admission to B.Tech programs at VIT Vellore, Chennai, AP, and Bhopal.',
    tests: 20,
    pattern: 'No Negative Marking (MCQ format)',
    subjects: ['Maths/Bio', 'Phy', 'Chem', 'Eng'],
    href: '/exams/engineering-entrance/viteee',
    gradient: 'from-emerald-500 to-teal-500'
  }
];

const freeTests = [
  { name: 'JEE Main 2024 Full Mock Test - 1', q: 90, t: 180, level: 'Moderate' },
  { name: 'BITSAT Mini Mock - Physics & LR', q: 45, t: 60, level: 'Easy-Moderate' },
  { name: 'VITEEE Full Practice Test', q: 125, t: 150, level: 'Moderate' }
];

const reviews = [
  { name: 'Aman Rajput', exam: 'JEE Main, 99.8 PR', rating: 5, text: 'The mock test interface is completely identical to the real NTA exam. It removed all my exam day anxiety. Highly recommended for serious aspirants.' },
  { name: 'Riya Sharma', exam: 'BITSAT, Score: 320', rating: 5, text: 'Detailed solutions and the logical reasoning section practice gave me an edge. The AI analytics accurately pointed out my weak formulas and careless mistakes.' },
  { name: 'Sahil Verma', exam: 'JEE Advanced Qualified', rating: 5, text: 'Questions in the advanced test series are exactly of the JEE level. Not too hard just to scare you, but conceptually challenging enough to build deep understanding.' },
];

const faqs = [
  { q: "Are the mock test interfaces exactly like the real exams?", a: "Yes, our platform uses the exact same UI as the NTA (for JEE) and TCS iON (for others) to ensure you are completely familiar with the environment on exam day." },
  { q: "Do you provide video solutions?", a: "Yes, for the Ultimate and Masterclass packages, we provide detailed step-by-step video solutions for the hardest questions, along with comprehensive text solutions for all questions." },
  { q: "Can I take the tests on my phone?", a: "Absolutely. Our platform is 100% responsive, and we also have a dedicated Android/iOS app with an offline mode so you can download and attempt tests without internet access." },
  { q: "How does the AI analytics work?", a: "Our AI engine tracks the exact time you spend on each question, predicts your accuracy under pressure, and compares your attempt strategy with toppers to generate a personalized improvement blueprint." }
];

export default function EngineeringEntrancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] w-full overflow-x-hidden selection:bg-primary/30 font-sans">
      
      {/* 1. Ultra Modern Hero Section */}
      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#020617]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm font-bold text-slate-400 mb-8 md:mb-12 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:text-white transition-colors">Exams</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">Engineering</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 w-full order-1 lg:order-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs tracking-widest uppercase mb-8 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-yellow-400" /> Premium Engineering Test Series
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] font-black text-white mb-6 tracking-tight">
                Crack Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Entrance Exams
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Experience real NTA CBT environment with multi-verified questions and hyper-personalized AI analytics that pinpoint your weak areas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                  Explore Packges <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                  Try Free Mock
                </button>
              </div>

              {/* Trust Stats Row */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm font-bold text-slate-300">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-white">50k+</span>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px]">Active Aspirants</span>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-white">100%</span>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px]">Real NTA UI</span>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-white">IIT</span>
                  <span className="text-slate-500 uppercase tracking-wider text-[10px]">Alumni Curated</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full relative order-2 lg:order-2"
            >
              {/* Overlapping Mac UI Mockup style instead of plain image */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center perspective-1000">
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg]"
                >
                  <div className="h-8 bg-slate-900 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <img src="/jee-mains-banner.svg" alt="App Dashboard Preview" className="w-full h-full object-cover opacity-90 mix-blend-screen" />
                  
                  {/* Floating Analytics Card */}
                  <div className="absolute bottom-6 right-6 bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl hidden sm:block">
                     <div className="flex items-center gap-3">
                        <PieChart className="w-8 h-8 text-primary" />
                        <div>
                          <p className="text-white font-bold text-sm">Physics Mastery</p>
                          <p className="text-primary font-black text-xl">84%</p>
                        </div>
                     </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Target Exams (Cards Redesign) */}
      <div className="py-24 bg-slate-50 dark:bg-[#0B1120] relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">Targeted <br/> Exam Packages</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium max-w-md md:text-right">
              Specialized test series retaining the exact difficulty and syllabus weightage of individual exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {popularExams.map((exam, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white dark:bg-slate-900/50 rounded-3xl p-1 border border-slate-200 dark:border-slate-800/80 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow Effect behind card content */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exam.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="bg-white dark:bg-[#0B1120] rounded-[1.4rem] p-6 lg:p-8 h-full flex flex-col relative z-10 border border-transparent group-hover:border-slate-100 dark:group-hover:border-slate-800 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exam.gradient} flex items-center justify-center text-white shadow-lg shrink-0`}>
                        <Target className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">{exam.fullName}</p>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors">{exam.name}</h3>
                      </div>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-black px-3 py-1.5 rounded-lg whitespace-nowrap">
                      {exam.tests}+ Tests
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
                    {exam.desc}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/80 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white tracking-widest uppercase">Exam Details</span>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Pattern Focus:</span>
                          <span className="font-bold text-slate-900 dark:text-white">{exam.pattern}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Subjects:</span>
                          <span className="font-bold text-slate-900 dark:text-white">{exam.subjects.join(", ")}</span>
                       </div>
                    </div>
                  </div>

                  <Link
                    href={exam.href}
                    className="w-full py-4 bg-slate-100 hover:bg-primary dark:bg-slate-800 dark:hover:bg-primary text-slate-900 hover:text-white dark:text-white font-black rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    View Test Series <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Deep Analytics Section (Glassmorphism & Gradients) */}
      <div className="py-24 bg-white dark:bg-[#0B1120] border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1 w-full order-2 lg:order-1 relative">
              <div className="relative aspect-square lg:aspect-[4/3] w-full">
                {/* Abstract Glass Cards replacing plain image */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 w-3/4 h-2/3 bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl z-20"
                >
                  <div className="h-full border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center gap-4 text-center p-6 text-slate-400">
                    <TrendingUp className="w-12 h-12 text-primary" />
                    <p className="font-bold">Accuracy Trend Analysis Chart UI</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-2xl z-30 flex flex-col justify-center"
                >
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4">Time Trap Alert</h4>
                  <div className="space-y-3">
                    <div className="w-full h-10 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center px-4">
                      <div className="w-full h-2 bg-rose-200 dark:bg-rose-800 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-rose-500 rounded-full"></div></div>
                    </div>
                    <p className="text-xs font-bold text-rose-500">You spent too much time on Question 45</p>
                  </div>
                </motion.div>
                
                <div className="absolute inset-x-8 top-16 bottom-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-[3rem] -z-10 blur-xl"></div>
              </div>
            </div>

            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent text-xs font-black uppercase tracking-widest mb-6">
                Forensic Analytics Engine
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                Insights That Guarantee <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Selection</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-lg">
                Mere practice is blinding. Our proprietary AI engine analyzes over 40+ data points per attempt to generate an intelligent roadmap for improvement.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Activity, title: 'Time Trap Analysis', desc: 'Identify exactly which questions ruined your momentum compared to the toppers.' },
                  { icon: Target, title: 'Topic-Level Mastery', desc: 'Get precise percentage scores for isolated sub-topics to know what to revise tonight.' },
                  { icon: Users, title: 'All India Rank Prediction', desc: 'Deeply calibrated algorithms simulate your AIR amongst lakhs of serious competitors.' }
                ].map((ft, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <ft.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">{ft.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm max-w-sm">{ft.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Core Features Grid */}
      <div className="py-24 bg-slate-50 dark:bg-[#020617]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Built for Engineering Excellence</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Delivering the most authentic Computer Based Test (CBT) experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Laptop, title: 'Real Test Interface', desc: 'Cloned NTA/TCS UI so you never fumble on the final exam day.' },
              { icon: ShieldCheck, title: 'Error-Free Content', desc: 'Questions curated and multi-verified by IITians.' },
              { icon: FileText, title: 'Text & Video Solutions', desc: 'Detailed explanations and short-tricks for every single question.' },
              { icon: CheckCircle2, title: 'Updated Syllabus', desc: 'Strictly aligned with the latest revised syllabus layouts.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Free Mock Tests (Modern Banner Style) */}
      <div className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-primary to-blue-800 rounded-[3rem] p-1 lg:p-1.5 shadow-2xl relative overflow-hidden">
            <div className="bg-[#0f172a] rounded-[2.8rem] relative overflow-hidden p-8 md:p-12 lg:p-16 w-full h-full">
                
                {/* Background Pattern inside Dark Card */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest mb-6 border border-white/10">
                      Zero Cost Demo
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">Test Drive <br/> The Platform</h2>
                    <p className="text-slate-400 text-lg font-medium mb-10 max-w-xl mx-auto lg:mx-0">
                      Attempt full-length tests. Experience the real UI, generate your AIR, and unlock the analytical dashboard completely free.
                    </p>
                    <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl w-full sm:w-auto">
                      Create Free Account
                    </button>
                  </div>

                  <div className="flex-1 w-full space-y-4">
                    {freeTests.map((test, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-colors group">
                        <div>
                          <h4 className="font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors">{test.name}</h4>
                          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-400">
                            <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded"><FileText className="w-3 h-3 text-white" /> {test.q} Qs</span>
                            <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded"><Activity className="w-3 h-3 text-white" /> {test.t} Mins</span>
                            <span className="text-emerald-400 uppercase tracking-widest">{test.level}</span>
                          </div>
                        </div>
                        <button className="shrink-0 bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all">
                          <PlayCircle className="w-6 h-6" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Reviews Line-up */}
      <div className="py-24 bg-slate-50 dark:bg-[#020617] border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">The Toppers' Choice</h2>
            <p className="text-slate-500 font-medium">Stories from the frontlines of JEE & BITSAT prep.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full">
                <div className="flex text-amber-400 mb-6 gap-1">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-[15px] leading-relaxed mb-8 flex-grow">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center text-xl">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{r.name}</h4>
                    <p className="text-[10px] font-black text-slate-500 mt-1 uppercase tracking-widest">{r.exam}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. FAQs (Clean Accordion) */}
      <div className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-200 dark:border-slate-800"
                    >
                      <p className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
