"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Scale, BookMarked, Quote, BookType, LayoutDashboard, ScrollText, Library
} from 'lucide-react';

const popularExams = [
  {
    name: 'CLAT UG',
    fullName: 'Common Law Admission Test',
    desc: 'The gateway to 24 National Law Universities. Highly reading-intensive pattern.',
    tests: 120,
    pattern: '120 Qs, 120 Mins',
    subjects: ['Legal Reasoning', 'English', 'Logical'],
    href: '/exams/law/clat-ug',
    icon: Scale,
    popular: true
  },
  {
    name: 'AILET UG',
    fullName: 'All India Law Entrance Test',
    desc: 'Exclusive entrance exam for NLU Delhi testing deep analytical logic.',
    tests: 85,
    pattern: '150 Qs, 120 Mins',
    subjects: ['Logical Reasoning', 'English', 'GK'],
    href: '/exams/law/ailet-ug',
    icon: Target
  },
  {
    name: 'LSAT India',
    fullName: 'Law School Admission Test',
    desc: 'Tests critical thinking and complex logical reasoning over pure knowledge.',
    tests: 60,
    pattern: '92 Qs, 140 Mins',
    subjects: ['Analytical', 'Logical 1 & 2', 'Reading'],
    href: '#',
    icon: Quote
  },
  {
    name: 'MH CET Law (5 Yr)',
    fullName: 'Maharashtra Common Entrance',
    desc: 'State level exam for prestigious colleges like GLC Mumbai and ILS Pune.',
    tests: 75,
    pattern: '150 Qs, 120 Mins',
    subjects: ['Legal Aptitude', 'GK', 'Maths'],
    href: '#',
    icon: ScrollText
  }
];

const freeTests = [
  { name: 'CLAT UG New Pattern Full Mock', q: 120, t: 120, level: 'Advanced' },
  { name: 'Passage-based Legal Reasoning', q: 30, t: 25, level: 'Crucial' },
  { name: 'AILET Analytical Logic Booster', q: 35, t: 30, level: 'Moderate' }
];

const reviews = [
  { name: 'Ananya Sharma', exam: 'NLSIU Bangalore', rating: 5, text: 'ExamBoost passage-based legal reasoning questions were actually tougher and lengthier than the real CLAT. It built up my reading stamina drastically.' },
  { name: 'Kartik Iyer', exam: 'NLU Delhi (AILET)', rating: 5, text: 'The mock test analytics saved me. Their dashboard pinpointed that my WPM (Words Per Minute) dropped severely in the last 20 minutes due to fatigue.' },
  { name: 'Rishabh Jain', exam: 'Symbiosis Pune', rating: 5, text: 'The Legal Affairs compendium along with mock tests was the only GK source I used. The case-law summaries they integrate into mocks are highly precise.' },
];

const faqs = [
  { q: "Are the CLAT mock tests updated to the new 120-question format?", a: "Yes, 100% of our CLAT test series strictly adheres to the Consortium's latest 120-question, heavily passage-based comprehension format." },
  { q: "Do the mock tests provide reading speed analytics?", a: "Absolutely. Law entrances are tests of reading speed. Our deep analytics dashboard tracks your exact Words Per Minute (WPM) and time spent reading passages vs answering questions." },
  { q: "Does the test series include Quantitative Techniques (Data Interpretation)?", a: "Yes. The CLAT Quant section predominantly features Caselet DIs and paragraph-based numerical data. Our mocks precisely simulate this standard rather than generic math questions." },
  { q: "How are the Current Affairs questions framed?", a: "Instead of one-liners, our GK sections use the 'Passage-Followed-By-Questions' format based entirely on Editorial snippets, simulating the real CLAT pattern." }
];

export default function LawExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-slate-800/30 dark:selection:bg-slate-500/30">
      
      {/* 1. HERO SECTION - Flat Modern UI with Classical Law Authority */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] w-full bg-white dark:bg-[#0A0F1C] border-b-[1.5px] border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Modern Flat Geometric Decorations representing Scales & Columns */}
        <div className="absolute top-10 left-10 md:left-20 w-16 h-40 bg-slate-100 dark:bg-slate-800 rounded-t-full rounded-b-md hidden md:block border-t border-x border-slate-200 dark:border-slate-700 shadow-sm opacity-50"></div>
        <div className="absolute top-10 right-10 md:right-32 w-16 h-40 bg-slate-100 dark:bg-slate-800 rounded-t-full rounded-b-md hidden md:block border-t border-x border-slate-200 dark:border-slate-700 shadow-sm opacity-50"></div>
        <div className="absolute bottom-10 left-10 md:left-40 w-full h-8 bg-slate-100 dark:bg-slate-800 hidden md:block border-t border-slate-200 dark:border-slate-700 z-0 opacity-50"></div>
        
        {/* Abstract Gavel or Star element */}
        <svg className="absolute bottom-32 right-20 md:right-1/4 w-32 h-32 text-slate-800 hidden lg:block opacity-[0.03] dark:opacity-[0.05]" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>

        {/* Floating Outline Circle representing a magnifying glass or law seal */}
        <div className="absolute top-40 left-1/3 w-20 h-20 border-[6px] border-slate-800 rounded-full hidden md:block opacity-[0.03] dark:opacity-[0.1]"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-24">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-300 text-sm font-black tracking-widest uppercase mb-10 border-2 border-slate-200 dark:border-slate-700 shadow-sm"
            >
            <Scale className="w-5 h-5 text-slate-800 dark:text-slate-300" />
            <span>India's Elite Law Prep Platform</span>
            </motion.div>
            
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter"
            >
            Secure Your Seat at a <br className="hidden md:block" />
            <span className="text-slate-800 dark:text-slate-300 relative inline-block italic">
                National Law School
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-4 text-slate-800/30 dark:text-slate-500/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" d="M0,10 L100,10" />
                </svg>
            </span>
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 font-medium leading-relaxed"
            >
            Master the reading-heavy CLAT pattern. Build extreme logical stamina, decipher dense English editorials, and accelerate your exact WPM (Words Per Minute).
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
            >
            <Link href="#law-series" className="px-10 py-5 w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 text-white font-black text-lg transition-transform flex items-center justify-center gap-3 shadow-[4px_4px_0px_#94a3b8] dark:shadow-[4px_4px_0px_#475569] active:translate-y-1 active:translate-x-1 active:shadow-none hover:-translate-y-1">
                Explore The Pass <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-10 py-5 w-full sm:w-auto rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black text-lg hover:border-slate-500 hover:text-slate-900 dark:hover:border-slate-400 dark:hover:text-white transition-all flex items-center justify-center shadow-sm">
                Take Baseline Mock
            </button>
            </motion.div>
        </div>
      </section>

      {/* Trust Scrolling Ticker - Serious Monotone Theme */}
      <section className="w-full bg-slate-900 dark:bg-[#050810] py-6 overflow-hidden flex items-center relative z-10 border-b border-slate-800">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_30s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-slate-200 font-black text-lg md:text-xl uppercase tracking-widest">
             <span className="flex items-center gap-4"><Quote className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> New CLAT Format</span>
             <span className="flex items-center gap-4"><Clock className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> WPM Tracker</span>
             <span className="flex items-center gap-4"><Scale className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> Legal Deductions</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> 60,000+ NLUs Target</span>
             <span className="flex items-center gap-4"><BookType className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> Editorials Extracted</span>
             
             <span className="flex items-center gap-4"><Quote className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> New CLAT Format</span>
             <span className="flex items-center gap-4"><Clock className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> WPM Tracker</span>
             <span className="flex items-center gap-4"><Scale className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> Legal Deductions</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> 60,000+ NLUs Target</span>
             <span className="flex items-center gap-4"><BookType className="w-6 h-6 md:w-8 md:h-8 text-slate-400" /> Editorials Extracted</span>
           </div>
        </div>
      </section>

      {/* 2. Target Exams Grid (Flat Neumorphic Style) */}
      <section id="law-series" className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#030712] scroll-mt-20 relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, #cbd5e1 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Choose Your Target Exam</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:mx-auto">Precision testing tailored mapping the exact passage density and difficulty gradient of Top Law standard exams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 rounded-[2rem] bg-white dark:bg-[#0A0F1C] border-[1.5px] border-slate-200 dark:border-slate-800 hover:border-slate-800 dark:hover:border-slate-500 hover:shadow-xl transition-all duration-300 relative block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-slate-900 dark:bg-slate-200 dark:text-slate-900 text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest shadow-sm">HOT</span>
                )}
                <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-300 mb-6 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-slate-200 dark:group-hover:text-slate-900 transition-colors">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{exam.name}</h3>
                <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-6 min-h-[60px] leading-relaxed">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 border border-transparent px-3 py-1 rounded-md uppercase tracking-wide">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-slate-900 dark:text-slate-100 font-black tracking-wide group-hover:underline">
                  Launch Series <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Prepare With Experts Section (Bespoke AI IMAGE 1) */}
      <section className="py-24 bg-white dark:bg-[#060D1A] overflow-hidden relative border-y-[1.5px] border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full relative flex justify-center lg:justify-start">
             {/* Complex Shaped Image Container */}
             <div className="w-full max-w-[420px] aspect-[4/5] bg-slate-100 dark:bg-slate-900 rounded-t-[4rem] rounded-b-md relative flex items-center justify-center border-[6px] border-slate-900 dark:border-slate-700 shadow-2xl overflow-hidden p-[2px]">
                 <img 
                      src="/law_exam_expert.png" 
                      alt="Supreme Court Advocate and Legal Mentor" 
                      className="w-full h-full object-cover object-top rounded-t-[3.8rem] rounded-b-sm grayscale-[20%]"
                 />
             </div>
             
             {/* Floating Authority Badge */}
             <div className="absolute top-10 -right-4 lg:-right-12 bg-white dark:bg-[#0B1120] p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 border-[2px] border-slate-900 dark:border-slate-700 z-20">
                <div className="w-12 h-12 bg-slate-900 dark:bg-slate-800 rounded-xl flex items-center justify-center text-white">
                    <Scale className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Passage Creators</p>
                   <p className="font-black font-serif text-slate-900 dark:text-white text-lg">NLU Alumni</p>
                </div>
             </div>
             
             {/* Deco Squares */}
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-900 dark:bg-slate-700 -z-10 rounded-xl rotate-12"></div>
             <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-slate-300 dark:border-slate-800 -z-20 rounded-xl -rotate-6"></div>
          </div>

          <div className="flex-[1.2] w-full items-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black font-serif text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight">Set by the <br/><span className="text-slate-500 dark:text-slate-400 italic">Legal Elite.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
               Our legal reasoning passages aren't just copied news. They are complex derivatives of Supreme Court judgments, formulated by practicing appellate lawyers and top NLU graduates to test true judicial aptitude.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-200 transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_#cbd5e1] dark:shadow-[4px_4px_0px_#334155] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  Meet The Board <ArrowRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section (Flat & Structured Dark Theme) */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#030712] relative overflow-hidden">
         {/* Signature Geometric Arrow */}
         <svg className="absolute bottom-10 right-10 w-64 h-64 text-slate-200 dark:text-slate-800 hidden xl:block z-0 pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <path d="M 20,180 L 180,40" />
            <polygon points="180,40 170,30 170,50" fill="currentColor" />
         </svg>

         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 text-sm font-black uppercase tracking-widest mb-8 border border-slate-300 dark:border-slate-700">
                  <Clock className="w-5 h-5" />
                  <span>Stamina & WPM Diagnostics</span>
               </div>
               <h2 className="text-5xl md:text-6xl font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight">
                  CLAT Does Not <br/>Test Knowledge. <br/> <span className="italic text-slate-500">It Tests Speed.</span>
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-xl font-medium mb-10 leading-relaxed max-w-lg">
                  You must read nearly 25,000 words in just 120 minutes. Our dashboard meticulously records your Reading Efficiency and exactly where your passage stamina breaks down.
               </p>
               
               <ul className="space-y-8">
                 {[
                   { icon: Quote, title: 'WPM Tracking per Subject', desc: 'Find out exactly how fast you read heavy Legal principles vs English grammar passages.' },
                   { icon: Activity, title: 'Fatigue Drop-off Metrics', desc: 'Identify if your accuracy plummets during the last 30 minutes of the two-hour rigorous run.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-white dark:bg-slate-900 p-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl mt-1 shadow-sm"><fp.icon className="w-6 h-6 text-slate-800 dark:text-slate-300" /></div>
                     <div>
                       <h4 className="font-black text-xl font-serif text-slate-900 dark:text-white mb-2">{fp.title}</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed">{fp.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="flex-1 w-full max-w-lg aspect-square relative flex items-center justify-center">
                {/* Minimal High Contrast Analytics Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="z-20 w-full bg-slate-900 dark:bg-white rounded-[2rem] border-4 border-slate-900 dark:border-white p-8 sm:p-10 shadow-[20px_20px_0px_#cbd5e1] dark:shadow-[16px_16px_0px_#1e293b]"
                >
                  <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-slate-700 dark:border-slate-200">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-slate-800 dark:bg-slate-100 flex items-center justify-center text-white dark:text-slate-900">
                        <Activity className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-black font-serif text-white dark:text-slate-900 text-2xl mb-1">Endurance</h4>
                        <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">CLAT Grand Mock 8</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black font-serif text-white dark:text-slate-900 text-3xl">P_98</h4>
                      <p className="text-xs font-black text-emerald-500 mt-1 uppercase tracking-widest">
                        NLU Safe Percentile
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars purely flat blocky */}
                  <div className="space-y-8">
                    {[
                      { name: 'Legal Reasoning (WPM)', score: 92, val: '240 wpm', color: 'bg-emerald-500' },
                      { name: 'English Language', score: 85, val: '300 wpm', color: 'bg-slate-400' },
                      { name: 'Logical Critical', score: 55, val: '150 wpm', color: 'bg-rose-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-base font-black text-slate-200 dark:text-slate-800 mb-3">
                          <span>{sub.name}</span>
                          <span>{sub.val}</span>
                        </div>
                        <div className="w-full h-5 bg-slate-800 dark:bg-slate-200 overflow-hidden border-2 border-slate-800 dark:border-slate-200 rounded-md">
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
            </div>
         </div>
      </section>

      {/* 4. Core Offerings (Monochrome Flat Boxes) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 text-sm font-black tracking-widest uppercase mb-6 border border-slate-300 dark:border-slate-700">
            <ShieldCheck className="w-4 h-4" />
            <span>Passage Perfection Architecture</span>
          </div>
          <h2 className="text-4xl md:text-[3.5rem] leading-tight font-black font-serif text-slate-900 dark:text-white mb-6 tracking-tight">Enterprise Standard Pedagogy</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Traditional subject-wise study is obsolete. We strictly train you on passage deduction, cognitive bias detection, and logical endurance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-[2px] border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 bg-white dark:bg-[#0A0F1C] relative">
           
          {[
            { icon: BookMarked, title: 'Dense Passages', desc: '100% of questions (excluding Quant) rely exclusively on extracting data from 450-word editorial walls.' },
            { icon: Scale, title: 'Case Law Memos', desc: 'Legal deductions mapped directly from 2024-25 Supreme Court bench verdicts.' },
            { icon: BookOpen, title: 'The Hindu Corpus', desc: 'GK and Current Affairs derived purely from Op-Eds and reputed journal snippets.' },
            { icon: Activity, title: 'Endurance Building', desc: 'Mocks dynamically designed to break focus, actively training your brain for the 120-min drag.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-[#F8FAFC] dark:bg-slate-900/50 border-[2px] border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 transition-colors group">
               <div className="w-14 h-14 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-800 dark:text-slate-300 mb-6 group-hover:border-slate-700 group-hover:bg-slate-800 group-hover:text-white dark:group-hover:border-slate-300 dark:group-hover:bg-slate-100 dark:group-hover:text-slate-900 transition-colors">
                 <feature.icon className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-black font-serif mb-3 transition-colors">{feature.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-300 dark:group-hover:text-slate-600 font-medium text-base transition-colors">
                 {feature.desc}
               </p>
             </div>
          ))}
        </div>
      </section>

      {/* 5. Free Mock Tests - HUGE SECOND AI IMAGE SECTION! */}
      <section className="py-24 bg-white dark:bg-[#060D1A] border-y-[1.5px] border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-100 dark:bg-[#0A0F1C] border-[3px] border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 md:p-16 text-slate-900 dark:text-white relative overflow-hidden flex flex-col xl:flex-row gap-16 lg:gap-10 items-center shadow-sm">
            
            {/* Minimal Grid BG */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Human Image Inside the Card, properly shaped & bordered */}
            <div className="hidden lg:flex w-[400px] relative items-center justify-center shrink-0">
                <div className="absolute top-4 -right-4 w-full h-full border-[3px] border-slate-300 dark:border-slate-700 rounded-3xl z-0"></div>
                <img 
                    src="/law_exam_aspirant.png" 
                    alt="Law Student Studying CLAT Books in Library" 
                    className="w-full h-[450px] object-cover rounded-3xl border-[3px] border-slate-900 dark:border-slate-600 relative z-10 shadow-xl"
                />
            </div>

            <div className="flex-1 w-full flex flex-col relative z-20">
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-black font-serif mb-6 leading-tight">Witness the <br/>Reading Intensity.</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-xl font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Access our full-length trial mocks. Experience the exact passage density and attempt reasoning traps set by top NLU evaluators, completely free.
                    </p>
                </div>
                
                <div className="w-full flex flex-col gap-4">
                  {freeTests.map((test, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#050810] border-[2px] border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                      <div>
                        <h4 className="font-black font-serif text-slate-900 dark:text-white text-xl mb-3">{test.name}</h4>
                        <div className="flex items-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-wider">
                          <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-slate-800 dark:text-slate-200" /> {test.q} Qs</span>
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-800 dark:text-slate-200" /> {test.t} Mins</span>
                        </div>
                      </div>
                      <button className="text-base font-black text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-sm">
                         Simulate Test <PlayCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Reviews (Ultra Clean Serious aesthetic) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-[3.5rem] font-black font-serif text-slate-900 dark:text-white mb-6">NLU Bound Ranks.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">Hear from thousands of advocates in making who mastered their comprehension speeds with ExamBoost's simulated environments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#0A0F1C] border-[2px] border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
              <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800">
                 <Quote className="w-10 h-10 fill-current" />
              </div>
              <div className="flex text-slate-800 dark:text-white gap-1 z-10">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed flex-grow z-10">
                "{r.text}"
              </p>
              <div className="mt-auto pt-8 border-t-[2px] border-slate-100 dark:border-slate-800/80 flex items-center gap-5 z-10">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center font-black font-serif text-2xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 dark:text-white mb-1">{r.name}</h4>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white">Frequent Inquiries</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F8FAFC] dark:bg-[#0A0F1C] border-[2px] border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black text-lg md:text-xl text-slate-900 dark:text-white"
                >
                  <span className="pr-6 leading-snug">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] transition-all duration-300 ${openFaq === idx ? 'bg-slate-900 text-white border-transparent rotate-180 dark:bg-white dark:text-slate-900' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
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
