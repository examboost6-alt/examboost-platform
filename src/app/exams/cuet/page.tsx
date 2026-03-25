"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  GraduationCap, Beaker, Calculator, Globe, LayoutDashboard, BrainCircuit, Lightbulb, Library, Quote
} from 'lucide-react';

const popularExams = [
  {
    name: 'CUET UG - Science',
    fullName: 'Physics, Chemistry, Maths/Bio',
    desc: 'Target B.Sc (Hons) in DU/BHU. Hardcore NCERT line-by-line MCQs.',
    tests: 120,
    pattern: '40/50 Qs per Domain',
    subjects: ['Physics', 'Chemistry', 'Math/Bio'],
    href: '/exams/cuet/science',
    icon: Beaker,
    popular: true
  },
  {
    name: 'CUET UG - Commerce',
    fullName: 'Accountancy, BST, Economics',
    desc: 'The SRCC Dream. Highly competitive domains requiring 100% accuracy.',
    tests: 100,
    pattern: '40/50 Qs per Domain',
    subjects: ['Accountancy', 'Business St.', 'Economics'],
    href: '/exams/cuet/commerce',
    icon: Calculator
  },
  {
    name: 'CUET UG - Humanities',
    fullName: 'History, Pol. Science, Geog',
    desc: 'Targeting JNU & Hindu College. Deep factual NCERT chronology tests.',
    tests: 110,
    pattern: '40/50 Qs per Domain',
    subjects: ['History', 'Pol. Science', 'Geography'],
    href: '#',
    icon: Globe
  },
  {
    name: 'General Test (GT)',
    fullName: 'Section III - Aptitude',
    desc: 'Mandatory for many courses. Tests Quant, Reasoning, and Current Affairs.',
    tests: 130,
    pattern: '50/60 Qs, 60 Mins',
    subjects: ['Quant', 'Reasoning', 'GK'],
    href: '#',
    icon: Zap
  }
];

const freeTests = [
  { name: 'General Test (GT) Speed Booster', q: 50, t: 60, level: 'Crucial' },
  { name: 'English Language Reading Comprehension', q: 40, t: 45, level: 'Advanced' },
  { name: 'Physics / Accounts Domain NCERT Test', q: 40, t: 45, level: 'Moderate' }
];

const reviews = [
  { name: 'Arjun S.', exam: 'Hindu College (100%ile)', rating: 5, text: 'The Domain specific tests for Physics and Maths matched the exact NCERT line-by-line framing used by NTA. The interface is literally a clone of the real exam.' },
  { name: 'Simran K.', exam: 'SRCC DU', rating: 5, text: 'The Accountancy mocks were brilliant. I used the analytics dashboard to realize I was spending too much time on Partnership questions. Fixed it and got 200/200.' },
  { name: 'Rohan Gupta', exam: 'JNU Political Science', rating: 5, text: 'If you want to clear Humanities, you need to read NCERT like a holy book. ExamBoost framed MCQs from the deepest, hidden paragraphs of the textbook.' },
];

const faqs = [
  { q: "Is the interface exactly like the NTA CBT?", a: "Yes, our mock test interface uses the exact same color palette, 'Mark for Review' buttons, and navigation panel layout as the official NTA (National Testing Agency) software to reduce UI anxiety." },
  { q: "Are the domain subjects strictly NCERT based?", a: "100%. NTA guidelines explicitly state that CUET UG domain questions are framed only from Class 12 NCERT. We do not include out-of-syllabus JEE/NEET level questions in CUET mocks." },
  { q: "How does the Percentile Predictor work for CUET?", a: "CUET uses normalization across multiple shifts. We calculate your normalized percentile by pitting your scores against our active user base of 60,000+ CUET aspirants." },
  { q: "Can I customize which domains I want in my package?", a: "Yes, our 'CUET Target Package' allows you to select 1 Language, the General Test, and up to 4 Domain Specific subjects of your choice to create a personalized bundle." }
];

export default function CUETExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-indigo-500/30">
      
      {/* 1. HERO SECTION - Ultra Modern Flat Aesthetic */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] w-full bg-white dark:bg-[#03061A] border-b-[1.5px] border-slate-200 dark:border-indigo-900/40 overflow-hidden">
        
        {/* Flat Geometric Decorations representing Campus & Technology */}
        <div className="absolute top-16 left-10 md:left-24 w-12 h-32 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-full hidden md:flex border border-indigo-200 dark:border-indigo-800"></div>
        <div className="absolute top-10 left-32 md:left-40 w-16 h-16 bg-sky-100/50 dark:bg-sky-900/30 rounded-xl rotate-12 hidden md:flex border border-sky-200 dark:border-sky-800"></div>
        <div className="absolute top-40 right-[10%] md:right-[15%] w-24 h-24 bg-indigo-50/50 dark:bg-indigo-950/40 rounded-full hidden md:block border border-indigo-200 dark:border-indigo-900"></div>

        <div className="absolute bottom-10 left-10 md:left-20 w-[80%] h-8 bg-indigo-50 dark:bg-[#060B24] hidden md:block border border-indigo-200 dark:border-indigo-900/50 z-0"></div>
        
        {/* Floating Geometric Wireframe representing Logic/Connection */}
        <svg className="absolute bottom-20 right-10 md:right-1/5 w-40 h-40 text-indigo-600 dark:text-indigo-500 hidden lg:block opacity-[0.05] dark:opacity-[0.1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
           <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
           <rect x="25" y="25" width="50" height="50" rx="4" />
        </svg>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-24">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-sm font-black tracking-widest uppercase mb-10 border-2 border-indigo-200 dark:border-indigo-800 shadow-sm"
            >
            <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span>NTA Simulation Engine</span>
            </motion.div>
            
            {/* Mature Academic Typography Layout */}
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tighter relative z-10"
            >
            Target 100%ile. <br className="hidden md:block" />
            <div className="mt-4 sm:mt-6 flex flex-col items-center justify-center">
              <span className="relative inline-flex items-center gap-3 text-indigo-700 dark:text-sky-400 pr-2">
                  <span className="text-slate-700 dark:text-slate-300">Secure</span> 
                  <span className="relative inline-block mx-1">
                      DU, BHU, & JNU
                      {/* Clean and mature academic underline */}
                      <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-indigo-600/30 dark:text-sky-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <path fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="square" d="M0,10 L100,10" />
                      </svg>
                  </span>
                  {/* Elegant Academic Target Icon */}
                  <Target className="w-10 h-10 md:w-14 md:h-14 text-indigo-600 dark:text-sky-400 drop-shadow-sm -mt-2" />
              </span>
            </div>
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 font-medium leading-relaxed"
            >
            Practice on the exact NTA UI mockup. Master pure Class 12 NCERT domains, ace the mandatory General Test (GT), and beat 1.5 million young aspirants.
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
            >
            <Link href="#cuet-series" className="px-10 py-5 w-full sm:w-auto rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-sky-500 dark:text-slate-900 dark:hover:bg-sky-400 text-white font-black text-lg transition-transform flex items-center justify-center gap-3 shadow-[4px_4px_0px_#3730a3] dark:shadow-[4px_4px_0px_#0284c7] active:translate-y-1 active:translate-x-1 active:shadow-none hover:-translate-y-1">
                Explore Elite Pass <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-10 py-5 w-full sm:w-auto rounded-xl bg-white dark:bg-[#03061A] border-2 border-slate-300 dark:border-indigo-800 text-slate-800 dark:text-indigo-100 font-black text-lg hover:border-indigo-500 hover:text-indigo-700 dark:hover:border-sky-500 dark:hover:text-sky-400 transition-all flex items-center justify-center shadow-sm">
                Take Diagnostic Mock
            </button>
            </motion.div>
        </div>
      </section>

      {/* University Excellence Ticker */}
      <section className="w-full bg-[#1e1b4b] py-6 overflow-hidden flex items-center relative z-10 border-b-4 border-indigo-600">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_30s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-indigo-100 font-black text-lg md:text-xl uppercase tracking-widest">
             <span className="flex items-center gap-4"><BookOpen className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Pure NCERT Focus</span>
             <span className="flex items-center gap-4"><Target className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Target 200/200</span>
             <span className="flex items-center gap-4"><LayoutDashboard className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Exact NTA Layout</span>
             <span className="flex items-center gap-4"><Zap className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Speed GT Tech</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> 15 Lakh+ Apps</span>
             
             <span className="flex items-center gap-4"><BookOpen className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Pure NCERT Focus</span>
             <span className="flex items-center gap-4"><Target className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Target 200/200</span>
             <span className="flex items-center gap-4"><LayoutDashboard className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Exact NTA Layout</span>
             <span className="flex items-center gap-4"><Zap className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> Speed GT Tech</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-sky-400" /> 15 Lakh+ Apps</span>
           </div>
        </div>
      </section>

      {/* 2. Target Exams Grid (Flat Neumorphic Style) */}
      <section id="cuet-series" className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#020617] scroll-mt-20 relative">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, #6366f1 1.5px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Choose Your Domain Area</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:mx-auto">Assemble the perfect combination map tailored specifically to your dream university course requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 rounded-[2rem] bg-white dark:bg-[#060B24] border-[1.5px] border-slate-200 dark:border-indigo-900/40 hover:border-indigo-500 dark:hover:border-sky-400 hover:shadow-xl transition-all duration-300 relative block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-indigo-600 dark:bg-sky-500 dark:text-slate-900 text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest shadow-sm">HOT</span>
                )}
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-[#10143a] flex items-center justify-center text-indigo-600 dark:text-sky-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-sky-400 dark:group-hover:text-slate-900 transition-colors">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3 group-hover:text-indigo-700 dark:group-hover:text-sky-300 transition-colors">{exam.name}</h3>
                <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-6 min-h-[60px] leading-relaxed">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-transparent px-3 py-1 rounded-md uppercase tracking-wide">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-slate-900 dark:text-slate-100 font-black tracking-wide group-hover:underline">
                  View Series <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Prepare With Experts Section (Bespoke AI IMAGE 1) */}
      <section className="py-24 bg-white dark:bg-[#03061A] overflow-hidden relative border-y-[1.5px] border-slate-200 dark:border-indigo-900/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full relative flex justify-center lg:justify-start">
             
             {/* Beautiful Shaped Container */}
             <div className="w-full max-w-[420px] aspect-[4/5] bg-indigo-50 dark:bg-[#090D2B] rounded-tr-[5rem] rounded-bl-[5rem] relative flex items-center justify-center border-[5px] border-indigo-800 dark:border-indigo-600 shadow-2xl overflow-hidden p-[2px]">
                 <img 
                      src="/cuet_exam_campus.png" 
                      alt="Confident Student Entering DU Campus" 
                      className="w-full h-full object-cover object-top rounded-tr-[4.5rem] rounded-bl-[4.5rem] grayscale-[10%]"
                 />
             </div>
             
             {/* Floating Authority Badge */}
             <div className="absolute top-10 -left-4 lg:-left-12 bg-white dark:bg-[#10143A] p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 border-[2px] border-slate-200 dark:border-indigo-800 z-20">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-sky-400">
                    <Award className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Campus Legacy</p>
                   <p className="font-black font-serif text-slate-900 dark:text-white text-lg">Top 1% Percentile</p>
                </div>
             </div>
             
             {/* Deco Dots */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sky-600 dark:bg-sky-500 -z-10 rounded-full blur-xl opacity-20"></div>
          </div>

          <div className="flex-[1.2] w-full items-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black font-serif text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight">The North Campus <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400 italic">Distinction.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
               Securing St. Stephen's or SRCC means dropping effectively ZERO marks. Traditional board pre-boards condition you for subjective steps. Our CUET CBT mimics the unforgiving, purely objective NTA interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-200 transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_#94a3b8] dark:shadow-[4px_4px_0px_#cbd5e1] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  Check Normalization <ArrowRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Tech Immersive Analytics Section */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#020617] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-indigo-900/30 text-sky-800 dark:text-sky-300 text-sm font-black uppercase tracking-widest mb-8 border border-sky-200 dark:border-indigo-800/50">
                  <BarChart className="w-5 h-5" />
                  <span>NTA UI Diagnostic Output</span>
               </div>
               <h2 className="text-5xl md:text-6xl font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight">
                  Because Every Millisecond <br/> <span className="text-sky-600 dark:text-sky-400 italic">Changes Ranks.</span>
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-xl font-medium mb-10 leading-relaxed max-w-lg">
                  CUET is ruthlessly fast. Our dashboard highlights not just incorrect answers, but options where you burned too much time compared to toppers.
               </p>
               
               <ul className="space-y-8">
                 {[
                   { icon: ShieldCheck, title: 'NCERT Deviation Scanner', desc: 'Identify if you are getting questions wrong because you missed tiny caveat lines in Class 12 books.' },
                   { icon: Target, title: 'Marking Scheme Optimization', desc: 'CUET penalizes -1 for wrong answers. We analyze your guessing penalty.' },
                   { icon: Activity, title: 'General Test (GT) Speed', desc: 'Section III gives you barely any time per question. Track your quantitative speed limit.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-white dark:bg-[#060B24] p-4 border-2 border-slate-200 dark:border-indigo-900/30 rounded-xl mt-1 shadow-sm"><fp.icon className="w-6 h-6 text-sky-600 dark:text-sky-400" /></div>
                     <div>
                       <h4 className="font-black font-serif text-xl text-slate-900 dark:text-white mb-2">{fp.title}</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed">{fp.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="flex-1 w-full max-w-lg aspect-square relative flex items-center justify-center">
                {/* Tech Dashboard Window */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="z-20 w-full bg-slate-900 dark:bg-white rounded-[2rem] border-4 border-slate-900 dark:border-white p-8 sm:p-10 shadow-[20px_20px_0px_#4f46e5] dark:shadow-[16px_16px_0px_#0ea5e9]"
                >
                  <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-slate-800 dark:border-slate-200">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-slate-800 dark:bg-slate-100 flex items-center justify-center text-sky-400 dark:text-slate-900">
                        <LayoutDashboard className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-black text-white dark:text-slate-900 text-2xl mb-1">Commerce Domain</h4>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">SRCC Normalization</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-sky-400 dark:text-sky-600 text-3xl">785/800</h4>
                      <p className="text-xs font-black text-emerald-500 mt-1 uppercase tracking-widest">
                        Perfect Match
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars */}
                  <div className="space-y-8">
                    {[
                      { name: 'English Core', score: 100, val: '200', color: 'bg-emerald-500' },
                      { name: 'Accountancy', score: 94, val: '188', color: 'bg-indigo-500' },
                      { name: 'Economics', score: 100, val: '200', color: 'bg-sky-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-base font-black text-slate-200 dark:text-slate-800 mb-3">
                          <span>{sub.name}</span>
                          <span className="text-slate-400 dark:text-slate-500">{sub.val} Scores</span>
                        </div>
                        <div className="w-full h-4 bg-slate-800 dark:bg-slate-200 overflow-hidden rounded-full border border-slate-700 dark:border-transparent">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${sub.score}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: "easeOut" }}
                            className={`h-full ${sub.color}`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute z-30 top-0 right-0 bg-white dark:bg-slate-900 border-2 border-amber-500 rounded-full px-5 py-3 flex items-center gap-3 -translate-y-4 translate-x-4 shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </div>
                  <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Alert: Partnership Time High</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings (Monochrome Flat Boxes) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-black tracking-widest uppercase mb-6 border border-indigo-300 dark:border-indigo-800/50">
            <ShieldCheck className="w-4 h-4" />
            <span>The NTA Advantage</span>
          </div>
          <h2 className="text-4xl md:text-[3.5rem] leading-tight font-black font-serif text-slate-900 dark:text-white mb-6 tracking-tight">CBT Authenticity</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            CBSE Pre-Boards assess derivatives. CUET assesses absolute factual accuracy under intense time constraints.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-[2px] border-slate-200 dark:border-indigo-900/50 rounded-[2rem] p-6 bg-white dark:bg-[#03061A] relative shadow-sm">
           
          {[
            { icon: LayoutDashboard, title: 'NTA UI Replica', desc: 'Our mock window perfectly matches NTA styling, preventing exam-day navigation panic.' },
            { icon: BookOpen, title: 'NCERT Distillation', desc: '100% domain drafting avoids JEE/NEET deviations, focusing strictly on Class 12 texts.' },
            { icon: Zap, title: 'General Test Edge', desc: 'Section III GT mocks with intense logical reasoning and fresh current affairs modules.' },
            { icon: Globe, title: '23+ Vast Domains', desc: 'From Psychology to Legal Studies, we map every single micro-domain required.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-[#F8FAFC] dark:bg-[#060B24] border-[2px] border-slate-200 dark:border-indigo-900/30 p-8 rounded-2xl hover:bg-indigo-900 hover:text-white dark:hover:bg-sky-900 dark:hover:text-white transition-colors group">
               <div className="w-14 h-14 bg-white dark:bg-[#10143A] border-2 border-slate-200 dark:border-indigo-900/50 rounded-xl flex items-center justify-center text-indigo-600 dark:text-sky-400 mb-6 group-hover:border-transparent group-hover:bg-indigo-800 group-hover:text-sky-300 transition-colors">
                 <feature.icon className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-black font-serif mb-3 transition-colors">{feature.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 group-hover:text-indigo-100 dark:group-hover:text-sky-200 font-medium text-base transition-colors">
                 {feature.desc}
               </p>
             </div>
          ))}
        </div>
      </section>

      {/* 5. Free Mock Tests - HUGE SECOND AI IMAGE SECTION! */}
      <section className="py-24 bg-white dark:bg-[#03061A] border-y-[1.5px] border-slate-200 dark:border-indigo-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 dark:bg-slate-100 border-[3px] border-slate-800 dark:border-slate-300 rounded-[3rem] p-10 md:p-16 text-white dark:text-slate-900 relative overflow-hidden flex flex-col xl:flex-row gap-16 lg:gap-10 items-center shadow-sm">
            
            {/* Minimal Grid BG */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Human Image Inside the Card */}
            <div className="hidden lg:flex w-[400px] relative items-center justify-center shrink-0">
                <div className="absolute top-4 -right-4 w-full h-full border-[3px] border-sky-500/50 dark:border-sky-400 rounded-3xl z-0"></div>
                <img 
                    src="/cuet_exam_student.png" 
                    alt="Young Student taking CUET CBT Screen mock" 
                    className="w-full h-[450px] object-cover rounded-3xl border-[3px] border-slate-800 dark:border-slate-300 relative z-10 shadow-xl"
                />
            </div>

            <div className="flex-1 w-full flex flex-col relative z-20">
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-black font-serif mb-6 leading-tight">Quantify Your <br/>Normalization.</h2>
                    <p className="text-slate-400 dark:text-slate-600 text-xl font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Access full-length trial domains. Calculate how you manage the 45-minute countdown clock directly mapped against live student data.
                    </p>
                </div>
                
                <div className="w-full flex flex-col gap-4">
                  {freeTests.map((test, idx) => (
                    <div key={idx} className="bg-slate-800/80 dark:bg-white border-[2px] border-slate-700 dark:border-slate-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                      <div>
                        <h4 className="font-black font-serif text-white dark:text-slate-900 text-xl mb-3">{test.name}</h4>
                        <div className="flex items-center gap-4 text-sm font-bold text-sky-400 dark:text-indigo-600 uppercase tracking-wider">
                          <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                        </div>
                      </div>
                      <button className="text-base font-black text-slate-900 dark:text-white bg-white dark:bg-slate-900 hover:bg-indigo-100 dark:hover:bg-indigo-900 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-sm">
                         Boot Module <PlayCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Reviews */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-[3.5rem] font-black font-serif text-slate-900 dark:text-white mb-6">Central Uni Achievers.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">See how students seamlessly flipped their Board Exam rote learning into CBT accuracy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#060B24] border-[2px] border-slate-200 dark:border-indigo-900/40 p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-2 hover:border-indigo-500 transition-all duration-300 relative">
              <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800">
                 <Quote className="w-10 h-10 fill-current" />
              </div>
              <div className="flex text-amber-500 gap-1 z-10">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed flex-grow z-10 italic">
                "{r.text}"
              </p>
              <div className="mt-auto pt-8 border-t-[2px] border-slate-100 dark:border-slate-800 flex items-center gap-5 z-10">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center font-black font-serif text-2xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 dark:text-white mb-1">{r.name}</h4>
                  <p className="text-xs font-black text-indigo-600 dark:text-sky-400 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white">Admission Guidelines</h2>
            <p className="text-slate-500 font-bold mt-4">Frequently Asked Questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#060B24] border-[2px] border-slate-200 dark:border-indigo-900/30 rounded-2xl overflow-hidden shadow-sm hover:border-indigo-400 dark:hover:border-sky-700 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black font-serif text-lg md:text-xl text-slate-900 dark:text-white"
                >
                  <span className="pr-6 leading-snug">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] transition-all duration-300 ${openFaq === idx ? 'bg-slate-900 text-white border-transparent rotate-180 dark:bg-sky-500 dark:text-slate-900' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
