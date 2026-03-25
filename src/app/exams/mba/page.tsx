"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Briefcase, TrendingUp, PieChart, BrainCircuit, LayoutDashboard, Compass, Quote
} from 'lucide-react';

const popularExams = [
  {
    name: 'CAT 2026',
    fullName: 'Common Admission Test',
    desc: 'The gold standard for IIMs. Tests extreme logic, pressure handling, and accuracy.',
    tests: 150,
    pattern: '66 Qs, 120 Mins',
    subjects: ['VARC', 'DILR', 'Quant'],
    href: '/exams/mba/cat',
    icon: TrendingUp,
    popular: true
  },
  {
    name: 'XAT',
    fullName: 'Xavier Aptitude Test',
    desc: 'Gateway to XLRI. Uniquely features the tricky Decision Making and Poetry sections.',
    tests: 40,
    pattern: '100 Qs, 190 Mins',
    subjects: ['Decision Making', 'VALR', 'QADI'],
    href: '/exams/mba/xat',
    icon: Compass
  },
  {
    name: 'NMAT by GMAC',
    fullName: 'NMIMS Management Aptitude',
    desc: 'A computer-adaptive test where difficulty changes based on your real-time accuracy.',
    tests: 60,
    pattern: '108 Qs, 120 Mins',
    subjects: ['Language', 'Quant', 'Logic'],
    href: '#',
    icon: BrainCircuit
  },
  {
    name: 'SNAP',
    fullName: 'Symbiosis National Aptitude',
    desc: 'Purely speed-based test for SIBM Pune. Requires lightning-fast analytical geometry.',
    tests: 45,
    pattern: '60 Qs, 60 Mins',
    subjects: ['General English', 'A-LR', 'QA-DI'],
    href: '#',
    icon: Zap
  }
];

const freeTests = [
  { name: 'CAT 2026 All-India Open Mock', q: 66, t: 120, level: 'Advanced' },
  { name: 'XAT Decision Making Diagnostic', q: 21, t: 45, level: 'Crucial' },
  { name: 'SNAP 60-Minute Speed Rush', q: 60, t: 60, level: 'Moderate' }
];

const reviews = [
  { name: 'Vaibhav C.', exam: 'IIM Ahmedabad (99.98%ile)', rating: 5, text: 'The DILR sets provided by ExamBoost were an exact replica of the grueling CAT 2025 level. Their analytics taught me exactly which sets to skip—which is the secret to CAT.' },
  { name: 'Neha Reddy', exam: 'XLRI Jamshedpur', rating: 5, text: 'The Decision Making caselets for XAT are the best in the market. They don\'t just give answers, they explain the ethical framework required to eliminate the confusingly close options.' },
  { name: 'Siddharth M.', exam: 'NMIMS Mumbai Core', rating: 5, text: 'Their adaptive engine for NMAT felt exactly like the real GMAC algorithm. It really penalized me for early mistakes, which helped pace my real exam perfectly.' },
];

const faqs = [
  { q: "Is the NMAT mock series actually Computer Adaptive?", a: "Yes! Unlike generic platforms, our NMAT engine is truly adaptive. If you get a question right, the next one is harder and carries more weight. Just like the real GMAC algorithm." },
  { q: "Do the CAT mocks provide percentile predictions?", a: "Yes. Every CAT mock gives you a scaled score and a predicted percentile normalized against our pool of 40,000+ serious test-takers, simulating actual IIM shortlisting metrics." },
  { q: "Are video solutions provided for DILR?", a: "Absolutely. DILR cannot be understood purely through text. Every single Data Interpretation and Logical Reasoning set in our premium series comes with a faculty-led breakdown video." },
  { q: "Do you cover non-CAT exams (OMETs) adequately?", a: "Yes, our 'B-School Master' pass includes highly specialized series for XAT, SNAP, NMAT, TISSNET, and MAT—respecting their unique syllabi (like XAT DM or SNAP Analytical Logic)." }
];

export default function MBAExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-cyan-500/30">
      
      {/* 1. HERO SECTION - Ultra Modern Corporate Analytics UI */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] w-full bg-white dark:bg-[#040D14] border-b-[1.5px] border-slate-200 dark:border-cyan-900/40 overflow-hidden">
        
        {/* Modern Flat Geometric Decorations representing Tech/Consulting Bar Charts */}
        <div className="absolute top-20 left-10 md:left-20 w-8 h-32 bg-cyan-100/50 dark:bg-cyan-900/30 rounded-t-lg items-end hidden md:flex border-t border-x border-cyan-200 dark:border-cyan-800"></div>
        <div className="absolute top-10 left-24 md:left-32 w-8 h-44 bg-cyan-200/50 dark:bg-cyan-800/30 rounded-t-lg items-end hidden md:flex border-t border-x border-cyan-300 dark:border-cyan-700"></div>
        <div className="absolute top-32 left-[140px] md:left-44 w-8 h-20 bg-cyan-50/50 dark:bg-cyan-950/30 rounded-t-lg hidden md:block border-t border-x border-cyan-200 dark:border-cyan-900"></div>

        <div className="absolute bottom-10 left-10 md:left-40 w-full h-8 bg-cyan-50 dark:bg-[#071724] hidden md:block border-t border-cyan-200 dark:border-cyan-900/50 z-0"></div>
        
        {/* Floating Geometric Wireframe */}
        <svg className="absolute bottom-20 right-10 md:right-1/4 w-40 h-40 text-cyan-600 dark:text-cyan-400 hidden lg:block opacity-[0.05] dark:opacity-[0.1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
           <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
           <polyline points="50,5 50,50 90,75" />
           <line x1="10" y1="25" x2="50" y2="50" />
        </svg>

        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-24">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 text-sm font-black tracking-widest uppercase mb-10 border-2 border-cyan-200 dark:border-cyan-800 shadow-sm"
            >
            <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>Top-Tier Quantitative Analytics</span>
            </motion.div>
            
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter"
            >
            Target the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-teal-400 relative inline-block pb-2">
                99.99th Percentile
                <svg className="absolute bottom-0 left-0 w-full h-3 md:h-4 text-cyan-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" d="M0,10 L100,10" />
                </svg>
            </span>
            <br className="hidden md:block" /> in CAT & OMETs
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 font-medium leading-relaxed"
            >
            Crack IIMs and XLRI with exact exam-level DILR sets, AI-driven attempt optimization algorithms, and normalized percentile predictions.
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
            >
            <Link href="#mba-series" className="px-10 py-5 w-full sm:w-auto rounded-xl bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400 text-white font-black text-lg transition-transform flex items-center justify-center gap-3 shadow-[4px_4px_0px_#083344] dark:shadow-[4px_4px_0px_#164E63] active:translate-y-1 active:translate-x-1 active:shadow-none hover:-translate-y-1">
                Explore Elite Pass <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-10 py-5 w-full sm:w-auto rounded-xl bg-white dark:bg-[#071724] border-2 border-slate-300 dark:border-cyan-800 text-slate-800 dark:text-cyan-100 font-black text-lg hover:border-cyan-500 hover:text-cyan-700 dark:hover:border-cyan-500 dark:hover:text-cyan-400 transition-all flex items-center justify-center shadow-sm">
                Take Diagnostic Free Mock
            </button>
            </motion.div>
        </div>
      </section>

      {/* Corporate Ticker */}
      <section className="w-full bg-[#083344] py-6 overflow-hidden flex items-center relative z-10 border-b-4 border-cyan-600">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_30s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-cyan-100 font-black text-lg md:text-xl uppercase tracking-widest">
             <span className="flex items-center gap-4"><BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> Adaptive GMAC Engine</span>
             <span className="flex items-center gap-4"><PieChart className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> DILR AI Selection</span>
             <span className="flex items-center gap-4"><Briefcase className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> XLRI Decision Making</span>
             <span className="flex items-center gap-4"><Target className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> 99.9%ile Normalized</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> 80,000+ IIM Aspirants</span>
             
             <span className="flex items-center gap-4"><BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> Adaptive GMAC Engine</span>
             <span className="flex items-center gap-4"><PieChart className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> DILR AI Selection</span>
             <span className="flex items-center gap-4"><Briefcase className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> XLRI Decision Making</span>
             <span className="flex items-center gap-4"><Target className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> 99.9%ile Normalized</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" /> 80,000+ IIM Aspirants</span>
           </div>
        </div>
      </section>

      {/* 2. Target Exams Grid (Flat Neumorphic Style) */}
      <section id="mba-series" className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#030712] scroll-mt-20 relative">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, #06B6D4 1.5px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Target Your Dream B-School</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:mx-auto">Specialized analytics tailored specifically to the divergent patterns of CAT, XAT, and purely speed-based OMETs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 rounded-[2rem] bg-white dark:bg-[#07111A] border-[1.5px] border-slate-200 dark:border-cyan-900/40 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-xl transition-all duration-300 relative block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-cyan-600 dark:bg-cyan-500 dark:text-slate-900 text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest shadow-sm">CORE</span>
                )}
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:bg-cyan-600 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-900 transition-colors">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">{exam.name}</h3>
                <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-6 min-h-[60px] leading-relaxed">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-transparent px-3 py-1 rounded-md uppercase tracking-wide">{sub}</span>
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
      <section className="py-24 bg-white dark:bg-[#03090F] overflow-hidden relative border-y-[1.5px] border-slate-200 dark:border-cyan-900/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full relative flex justify-center lg:justify-start">
             
             {/* Corporate Shaped Container */}
             <div className="w-full max-w-[420px] aspect-[4/5] bg-cyan-50 dark:bg-cyan-950 rounded-[3rem] rounded-bl-xl relative flex items-center justify-center border-4 border-cyan-900 dark:border-cyan-700 shadow-2xl overflow-hidden p-1">
                 <img 
                      src="/mba_exam_expert.png" 
                      alt="Elite IIM Management Consultant in Boardroom" 
                      className="w-full h-full object-cover object-top rounded-[2.8rem] rounded-bl-lg grayscale-[10%]"
                 />
             </div>
             
             {/* Floating Authority Badge */}
             <div className="absolute bottom-10 -right-4 lg:-right-12 bg-white dark:bg-[#0A1118] p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 border-[2px] border-slate-200 dark:border-cyan-800 z-20">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <PieChart className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">DILR Architects</p>
                   <p className="font-black text-slate-900 dark:text-white text-lg">IIM Alumni Board</p>
                </div>
             </div>
             
             {/* Deco Dots */}
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-600 dark:bg-cyan-500 -z-10 rounded-full blur-xl opacity-20"></div>
          </div>

          <div className="flex-[1.2] w-full items-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight">Formulated by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-teal-400">Consultants.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
               Our Data Interpretation and Logical Reasoning (DILR) sets aren't just repetitive puzzles. They are high-level data abstracts modeled directly from real-world corporate analytics demanded by the MBB firms. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-200 transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_#94a3b8] dark:shadow-[4px_4px_0px_#cbd5e1] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  Meet The Board <ArrowRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Tech Immersive Analytics Section */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#030712] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 text-sm font-black uppercase tracking-widest mb-8 border border-cyan-200 dark:border-cyan-800/50">
                  <BarChart className="w-5 h-5" />
                  <span>Strategic Prediction Ecosystem</span>
               </div>
               <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight">
                  CAT is a Game of <br/> <span className="text-cyan-600 dark:text-cyan-400">Selecting & Skipping.</span>
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-xl font-medium mb-10 leading-relaxed max-w-lg">
                  In CAT, avoiding ego-battles with tough DILR sets is more important than solving them. Our AI dashboard isolates precisely where you wasted critical time on dead-end questions.
               </p>
               
               <ul className="space-y-8">
                 {[
                   { icon: BrainCircuit, title: 'Set Selection Analytics', desc: 'Identify if you are picking the "Trap Sets" in DILR instead of the hidden easy ones.' },
                   { icon: Target, title: 'Normalized Percentile', desc: 'Raw score means nothing. We calculate your exact percentile against thousands of active users.' },
                   { icon: Zap, title: 'Attempt vs Accuracy Matrix', desc: 'Visualize your sweet spot—should you attempt 15 questions with 90% accuracy, or 20 at 75%?' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-white dark:bg-slate-900 p-4 border-2 border-slate-200 dark:border-cyan-900/30 rounded-xl mt-1 shadow-sm"><fp.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /></div>
                     <div>
                       <h4 className="font-black text-xl text-slate-900 dark:text-white mb-2">{fp.title}</h4>
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
                  className="z-20 w-full bg-slate-900 dark:bg-slate-800 rounded-[2rem] border-4 border-slate-800 dark:border-slate-700 p-8 sm:p-10 shadow-[20px_20px_0px_#06B6D4] dark:shadow-[16px_16px_0px_#083344]"
                >
                  <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-slate-800 dark:border-slate-700">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-slate-800 dark:bg-[#050812] border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <LayoutDashboard className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-2xl mb-1">DILR Radar</h4>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">AIMCAT Simulator 9</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-cyan-400 text-3xl">99.42%ile</h4>
                      <p className="text-xs font-black text-emerald-500 mt-1 uppercase tracking-widest">
                        BLACKI Call
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars purely tech flat */}
                  <div className="space-y-8">
                    {[
                      { name: 'VARC (Verbal)', score: 98, val: '+45 Marks', color: 'bg-emerald-500' },
                      { name: 'DILR (Logical)', score: 72, val: '+22 Marks', color: 'bg-rose-500' },
                      { name: 'QA (Quant)', score: 91, val: '+34 Marks', color: 'bg-cyan-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-base font-black text-slate-200 mb-3">
                          <span>{sub.name}</span>
                          <span className="text-slate-400">{sub.val}</span>
                        </div>
                        <div className="w-full h-4 bg-slate-800 dark:bg-[#050812] overflow-hidden rounded-full border border-slate-700">
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

                {/* Cyberpunk warning tag */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute z-30 top-0 right-0 bg-slate-900 border-2 border-cyan-500 rounded-full px-5 py-3 flex items-center gap-3 -translate-y-4 translate-x-4 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </div>
                  <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">Pattern Recognition Overload</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings (Monochrome Flat Boxes) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 text-sm font-black tracking-widest uppercase mb-6 border border-cyan-300 dark:border-cyan-800/50">
            <ShieldCheck className="w-4 h-4" />
            <span>IIM Level Validation</span>
          </div>
          <h2 className="text-4xl md:text-[3.5rem] leading-tight font-black text-slate-900 dark:text-white mb-6 tracking-tight">Enterprise Standard Pedagogy</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Traditional quant and verbal isn't enough. We train you precisely on the changing Meta of high-end MBA exams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-[2px] border-slate-200 dark:border-cyan-900/50 rounded-[2rem] p-6 bg-white dark:bg-[#07111A] relative shadow-sm">
           
          {[
            { icon: PieChart, title: 'Original DILR Sets', desc: 'No recycled questions. Every set is uniquely crafted to match the exact grueling ambiguity of recent CAT papers.' },
            { icon: Compass, title: 'XAT Decision Making', desc: 'Caselets focused intensely on stakeholder-maximization principles used by XLRI evaluators.' },
            { icon: BrainCircuit, title: 'Adaptive NMAT Algorithm', desc: 'Engine reacts to your correct and incorrect clicks dynamically, altering the difficulty curve mid-mock.' },
            { icon: TrendingUp, title: 'SNAP Speed Modifiers', desc: '60-minute burst mocks focusing exclusively on analytical grammar and high-speed data math.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-[#F8FAFC] dark:bg-[#040D14] border-[2px] border-slate-200 dark:border-cyan-900/30 p-8 rounded-2xl hover:bg-cyan-900 hover:text-white dark:hover:bg-cyan-900 dark:hover:text-white transition-colors group">
               <div className="w-14 h-14 bg-white dark:bg-[#07111A] border-2 border-slate-200 dark:border-cyan-900/50 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:border-transparent group-hover:bg-cyan-800 group-hover:text-cyan-300 transition-colors">
                 <feature.icon className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-black mb-3 transition-colors">{feature.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-100 dark:group-hover:text-cyan-200 font-medium text-base transition-colors">
                 {feature.desc}
               </p>
             </div>
          ))}
        </div>
      </section>

      {/* 5. Free Mock Tests - HUGE SECOND AI IMAGE SECTION! */}
      <section className="py-24 bg-white dark:bg-[#03090F] border-y-[1.5px] border-slate-200 dark:border-cyan-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 dark:bg-slate-100 border-[3px] border-slate-800 dark:border-slate-300 rounded-[3rem] p-10 md:p-16 text-white dark:text-slate-900 relative overflow-hidden flex flex-col xl:flex-row gap-16 lg:gap-10 items-center shadow-sm">
            
            {/* Minimal Grid BG */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Human Image Inside the Card, corporate themed */}
            <div className="hidden lg:flex w-[400px] relative items-center justify-center shrink-0">
                <div className="absolute top-4 -right-4 w-full h-full border-[3px] border-cyan-800 dark:border-cyan-300 rounded-3xl z-0"></div>
                <img 
                    src="/mba_exam_aspirant.png" 
                    alt="MBA Aspirant Solving Hard Logical Maps in Coffee Shop" 
                    className="w-full h-[450px] object-cover rounded-3xl border-[3px] border-slate-800 dark:border-slate-300 relative z-10 shadow-xl grayscale-[10%]"
                />
            </div>

            <div className="flex-1 w-full flex flex-col relative z-20">
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Quantify Your <br/>Execution Skills.</h2>
                    <p className="text-slate-400 dark:text-slate-600 text-xl font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Access our full-length trial mocks. Experience the exact DILR passage density and attempt traps set by top IIM evaluators, completely free.
                    </p>
                </div>
                
                <div className="w-full flex flex-col gap-4">
                  {freeTests.map((test, idx) => (
                    <div key={idx} className="bg-slate-800/80 dark:bg-white border-[2px] border-slate-700 dark:border-slate-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                      <div>
                        <h4 className="font-black text-white dark:text-slate-900 text-xl mb-3">{test.name}</h4>
                        <div className="flex items-center gap-4 text-sm font-bold text-cyan-400 dark:text-cyan-600 uppercase tracking-wider">
                          <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                        </div>
                      </div>
                      <button className="text-base font-black text-slate-900 dark:text-white bg-white dark:bg-slate-900 hover:bg-cyan-100 dark:hover:bg-cyan-900 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-sm">
                         Boot Simulator <PlayCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Reviews (Ultra Clean Serious Corporate aesthetic) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-[3.5rem] font-black text-slate-900 dark:text-white mb-6">The 99.9%ile Club.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">Hear from thousands of elite candidates who bypassed extreme DILR traps utilizing our selection algorithms.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#07111A] border-[2px] border-slate-200 dark:border-cyan-900/40 p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-2 hover:border-cyan-500 transition-all duration-300 relative">
              <div className="absolute top-8 right-8 text-slate-200 dark:text-slate-800">
                 <Quote className="w-10 h-10 fill-current" />
              </div>
              <div className="flex text-cyan-500 gap-1 z-10">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed flex-grow z-10 italic">
                "{r.text}"
              </p>
              <div className="mt-auto pt-8 border-t-[2px] border-slate-100 dark:border-slate-800 flex items-center gap-5 z-10">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-2xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 dark:text-white mb-1">{r.name}</h4>
                  <p className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs (Corporate Terminal Style) */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Framework Variables</h2>
            <p className="text-slate-500 font-bold mt-4">Frequently Asked Questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0A0F1C] border-[2px] border-slate-200 dark:border-cyan-900/30 rounded-2xl overflow-hidden shadow-sm hover:border-cyan-400 dark:hover:border-cyan-700 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black text-lg md:text-xl text-slate-900 dark:text-white"
                >
                  <span className="pr-6 leading-snug">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] transition-all duration-300 ${openFaq === idx ? 'bg-slate-900 text-white border-transparent rotate-180 dark:bg-cyan-500 dark:text-slate-900' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
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
