"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  GraduationCap, PenTool, LayoutDashboard, BrainCircuit, Library, Lightbulb,
  Quote
} from 'lucide-react';

const popularExams = [
  {
    name: 'CTET (Paper 1 & 2)',
    fullName: 'Central Teacher Eligibility Test',
    desc: 'The essential CBSE qualifying exam. Requires heavy conceptual understanding of CDP.',
    tests: 150,
    pattern: '150 Qs, 150 Mins',
    subjects: ['Child Development', 'EVS / Math', 'Languages'],
    href: '/exams/teaching/ctet',
    icon: GraduationCap,
    popular: true
  },
  {
    name: 'KVS PRT/TGT/PGT',
    fullName: 'Kendriya Vidyalaya Sangathan',
    desc: 'Prestigious recruitment exams testing both subject mastery and leadership perspectives.',
    tests: 120,
    pattern: '180 Qs, 180 Mins',
    subjects: ['Perspectives in Ed.', 'Subject Specific', 'General'],
    href: '/exams/teaching/kvs',
    icon: PenTool
  },
  {
    name: 'DSSSB PRT/TGT',
    fullName: 'Delhi Subordinate Services',
    desc: 'High-speed exam with strict 0.25 negative marking. Part A dominates the selection.',
    tests: 100,
    pattern: '200 Qs, 120 Mins',
    subjects: ['General Part A', 'Subject / Methodology'],
    href: '#',
    icon: Library
  },
  {
    name: 'UPTET & Super TET',
    fullName: 'Uttar Pradesh Teacher Exams',
    desc: 'State-level eligibility and recruitment requiring extreme rote knowledge of UP GK.',
    tests: 85,
    pattern: '150 Qs, 150 Mins',
    subjects: ['Information Tech', 'Life Skills', 'Languages'],
    href: '#',
    icon: BookOpen
  }
];

const freeTests = [
  { name: 'CTET Child Pedagogy (CDP) Chapter Test', q: 30, t: 30, level: 'Advanced' },
  { name: 'DSSSB General Awareness (Part A) Speed Run', q: 20, t: 12, level: 'Crucial' },
  { name: 'KVS Perspectives on Education', q: 40, t: 40, level: 'Moderate' }
];

const reviews = [
  { name: 'Priya Verma', exam: 'KVS PRT Selected', rating: 5, text: 'The CDP and Pedagogy questions exactly match the analytical nature of the new NEP 2020 and KVS pattern. No more rote-learning questions, pure application.' },
  { name: 'Sumit R.', exam: 'DSSSB TGT Maths', rating: 5, text: 'DSSSB Part A (General) needs immense speed because of the 2-hour limit for 200 Qs. ExamBoost sectional tests helped me clear the Part A cutoff without sweating.' },
  { name: 'Kavita Mishra', exam: 'CTET Paper 2 (128/150)', rating: 5, text: 'Their bilingual mock interface is flawless. It was exactly like sitting in the actual TCS iON CBT exam. Being able to toggle between Hindi/English instantly saved me.' },
];

const faqs = [
  { q: "Are the mock interfaces bilingual like the real CTET/DSSSB exams?", a: "Yes. Our testing engine provides a toggle button to instantly switch any question between English and Hindi, exactly matching the real Computer Based Test (CBT) environment." },
  { q: "Do the tests align with the new NEP 2020 syllabus?", a: "Automatically. All pedagogical questions have been revamped to test 'Application based learning' over 'Rote learning', strictly adhering to the National Education Policy 2020 guidelines." },
  { q: "Do you provide sectional tests for DSSSB Part A and Part B separately?", a: "Yes. Given DSSSB's unique pattern, we offer isolated high-speed tests for Part A (General) to build time management, alongside deep conceptual tests for Part B (Subject/Methodology)." },
  { q: "Are the mock solutions detailed for Child Development theories?", a: "Yes, every CDP answer explicitly mentions the derived psychological theory (e.g., Piaget's stages, Vygotsky's Scaffolding) to help you memorize the concept while analyzing." }
];

export default function TeachingExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020905] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-emerald-500/30">
      
      {/* 1. HERO SECTION - Ultra Modern Flat Teaching UI */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] w-full bg-white dark:bg-[#030d08] border-b-[1.5px] border-slate-200 dark:border-emerald-900/40 overflow-hidden">
        
        {/* Flat Geometric Decorations representing Chalkboards & Blocks */}
        <div className="absolute top-16 left-10 md:left-24 w-12 h-32 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-full hidden md:flex border border-emerald-200 dark:border-emerald-800"></div>
        <div className="absolute top-10 left-32 md:left-40 w-16 h-16 bg-teal-100/50 dark:bg-teal-900/30 rounded-xl rotate-12 hidden md:flex border border-teal-200 dark:border-teal-800"></div>
        <div className="absolute top-40 right-[10%] md:right-[15%] w-24 h-24 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-full hidden md:block border border-emerald-200 dark:border-emerald-900"></div>

        <div className="absolute bottom-10 left-10 md:left-20 w-[80%] h-8 bg-emerald-50 dark:bg-[#041a10] hidden md:block border border-emerald-200 dark:border-emerald-900/50 z-0"></div>
        
        {/* Floating Geometric Wireframe representing Growth/Leaves */}
        <svg className="absolute bottom-20 right-10 md:right-1/5 w-40 h-40 text-emerald-600 dark:text-emerald-500 hidden lg:block opacity-[0.05] dark:opacity-[0.1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
           <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
           <rect x="25" y="25" width="50" height="50" rx="4" />
        </svg>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-24">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-sm font-black tracking-widest uppercase mb-10 border-2 border-emerald-200 dark:border-emerald-800 shadow-sm"
            >
            <BrainCircuit className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span>India's Best Pedagogical Series</span>
            </motion.div>
            
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tighter relative z-10"
            >
            Shape the Future. <br className="hidden md:block" />
            <div className="mt-4 sm:mt-6 flex flex-col items-center justify-center">
              <span className="relative inline-flex items-center gap-3 text-emerald-700 dark:text-emerald-400 pr-2">
                  <span className="text-slate-700 dark:text-slate-300">Clear</span> 
                  <span className="relative inline-block mx-1">
                      CTET & DSSSB
                      {/* Clean and mature academic underline */}
                      <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-emerald-600/30 dark:text-emerald-500/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <path fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="square" d="M0,10 L100,10" />
                      </svg>
                  </span>
                  {/* Elegant Academic Laurel/Award Icon */}
                  <Award className="w-10 h-10 md:w-14 md:h-14 text-emerald-600 dark:text-emerald-400 drop-shadow-sm -mt-2" />
              </span>
            </div>
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 font-medium leading-relaxed"
            >
            Master Child Development (CDP) and complex subject methodologies. Practice on an exact bilingual interface simulating the grueling CBSE CBT patterns.
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
            >
            <Link href="#teaching-series" className="px-10 py-5 w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-teal-500 dark:text-slate-900 dark:hover:bg-teal-400 text-white font-black text-lg transition-transform flex items-center justify-center gap-3 shadow-[4px_4px_0px_#047857] dark:shadow-[4px_4px_0px_#10B981] active:translate-y-1 active:translate-x-1 active:shadow-none hover:-translate-y-1">
                Explore Elite Pass <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-10 py-5 w-full sm:w-auto rounded-xl bg-white dark:bg-[#030d08] border-2 border-slate-300 dark:border-emerald-800 text-slate-800 dark:text-emerald-100 font-black text-lg hover:border-emerald-500 hover:text-emerald-700 dark:hover:border-teal-500 dark:hover:text-teal-400 transition-all flex items-center justify-center shadow-sm">
                Take Diagnostic Mock
            </button>
            </motion.div>
        </div>
      </section>

      {/* Nurturing Chalkboard Ticker */}
      <section className="w-full bg-[#064e3b] py-6 overflow-hidden flex items-center relative z-10 border-b-4 border-emerald-600">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_30s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-emerald-100 font-black text-lg md:text-xl uppercase tracking-widest">
             <span className="flex items-center gap-4"><Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> NEP 2020 Compliant</span>
             <span className="flex items-center gap-4"><GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> Analytical CDP</span>
             <span className="flex items-center gap-4"><Library className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> NCERT Derived EVS</span>
             <span className="flex items-center gap-4"><BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> DSSSB Speed Tech</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> 1L+ Aspirants</span>
             
             <span className="flex items-center gap-4"><Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> NEP 2020 Compliant</span>
             <span className="flex items-center gap-4"><GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> Analytical CDP</span>
             <span className="flex items-center gap-4"><Library className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> NCERT Derived EVS</span>
             <span className="flex items-center gap-4"><BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> DSSSB Speed Tech</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8 text-teal-400" /> 1L+ Aspirants</span>
           </div>
        </div>
      </section>

      {/* 2. Target Exams Grid (Flat Neumorphic Style) */}
      <section id="teaching-series" className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#020905] scroll-mt-20 relative">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, #10b981 1.5px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Target Your Teaching Post</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:mx-auto">Precision testing tailored precisely from Central Eligibility (CTET) to Final Recruitment selection.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 rounded-[2rem] bg-white dark:bg-[#030d08] border-[1.5px] border-slate-200 dark:border-emerald-900/40 hover:border-emerald-500 dark:hover:border-teal-400 hover:shadow-xl transition-all duration-300 relative block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-emerald-600 dark:bg-teal-500 dark:text-slate-900 text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest shadow-sm">HOT</span>
                )}
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-teal-400 mb-6 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-teal-400 dark:group-hover:text-slate-900 transition-colors">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3 group-hover:text-emerald-700 dark:group-hover:text-teal-300 transition-colors">{exam.name}</h3>
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
      <section className="py-24 bg-white dark:bg-[#030d08] overflow-hidden relative border-y-[1.5px] border-slate-200 dark:border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full relative flex justify-center lg:justify-start">
             
             {/* Beautiful Shaped Container */}
             <div className="w-full max-w-[420px] aspect-[4/5] bg-emerald-50 dark:bg-[#041a10] rounded-tr-[5rem] rounded-bl-[5rem] relative flex items-center justify-center border-[5px] border-emerald-800 dark:border-emerald-600 shadow-2xl overflow-hidden p-[2px]">
                 <img 
                      src="/teaching_exam_expert.png" 
                      alt="Inspiring Educational Principal" 
                      className="w-full h-full object-cover object-top rounded-tr-[4.5rem] rounded-bl-[4.5rem] grayscale-[10%]"
                 />
             </div>
             
             {/* Floating Authority Badge */}
             <div className="absolute top-10 -left-4 lg:-left-12 bg-white dark:bg-[#051f14] p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 border-[2px] border-slate-200 dark:border-emerald-800 z-20">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-600 dark:text-teal-400">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Pedagogy Design</p>
                   <p className="font-black font-serif text-slate-900 dark:text-white text-lg">CBSE Experts</p>
                </div>
             </div>
             
             {/* Deco Dots */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-600 dark:bg-teal-500 -z-10 rounded-full blur-xl opacity-20"></div>
          </div>

          <div className="flex-[1.2] w-full items-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black font-serif text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight">Structured by <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 italic">Master Educators.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
               Our Child Pedagogy (CDP) frameworks aren't just copy-pasted theories. They are situational, application-based questions formulated directly by principal-level faculty aligning strictly with the New Education Policy 2020.
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
      <section className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#020905] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-emerald-900/30 text-teal-800 dark:text-teal-300 text-sm font-black uppercase tracking-widest mb-8 border border-teal-200 dark:border-emerald-800/50">
                  <BarChart className="w-5 h-5" />
                  <span>Cognitive Diagnostic Dashboard</span>
               </div>
               <h2 className="text-5xl md:text-6xl font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight">
                  Because Teaching Logic <br/> <span className="text-teal-600 dark:text-teal-400 italic">Can Be Tricky.</span>
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-xl font-medium mb-10 leading-relaxed max-w-lg">
                  In CDP, all 4 options often seem correct. Our AI dashboard isolates specifically whether you struggle with 'Piaget's Logic', 'Inclusive Scenarios', or factual blunders.
               </p>
               
               <ul className="space-y-8">
                 {[
                   { icon: BrainCircuit, title: 'Pedagogical Error Tracking', desc: 'Find out if you consistently apply the wrong psychological theory to conceptual scenarios.' },
                   { icon: Target, title: 'DSSSB Precision Timing', desc: 'DSSSB locks sections. We analyze if you spend too much time on Part A causing a Part B fail.' },
                   { icon: Activity, title: 'Bilingual Confidence Matrix', desc: 'Identify your accuracy difference when attempting pedagogy in Hindi vs English.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-white dark:bg-[#030d08] p-4 border-2 border-slate-200 dark:border-emerald-900/30 rounded-xl mt-1 shadow-sm"><fp.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" /></div>
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
                  className="z-20 w-full bg-slate-900 dark:bg-white rounded-[2rem] border-4 border-slate-900 dark:border-white p-8 sm:p-10 shadow-[20px_20px_0px_#14b8a6] dark:shadow-[16px_16px_0px_#10b981]"
                >
                  <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-slate-800 dark:border-slate-200">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-slate-800 dark:bg-slate-100 flex items-center justify-center text-teal-400 dark:text-slate-900">
                        <LayoutDashboard className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-black text-white dark:text-slate-900 text-2xl mb-1">Concept Map</h4>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">CTET Series-5</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-teal-400 dark:text-teal-600 text-3xl">124/150</h4>
                      <p className="text-xs font-black text-emerald-500 mt-1 uppercase tracking-widest">
                        Qualified
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars */}
                  <div className="space-y-8">
                    {[
                      { name: 'Pedagogy (CDP)', score: 94, val: '28/30', color: 'bg-emerald-500' },
                      { name: 'EVS / Math', score: 65, val: '19.5/30', color: 'bg-rose-500' },
                      { name: 'Language I (Hindi)', score: 88, val: '26.4/30', color: 'bg-teal-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-base font-black text-slate-200 dark:text-slate-800 mb-3">
                          <span>{sub.name}</span>
                          <span className="text-slate-400 dark:text-slate-500">{sub.val}</span>
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
                  className="absolute z-30 top-0 right-0 bg-white dark:bg-slate-900 border-2 border-rose-500 rounded-full px-5 py-3 flex items-center gap-3 -translate-y-4 translate-x-4 shadow-[0_4px_20px_rgba(244,63,94,0.3)]"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </div>
                  <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Map-Based Error High</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings (Monochrome Flat Boxes) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-black tracking-widest uppercase mb-6 border border-emerald-300 dark:border-emerald-800/50">
            <ShieldCheck className="w-4 h-4" />
            <span>Teacher Specific Content</span>
          </div>
          <h2 className="text-4xl md:text-[3.5rem] leading-tight font-black font-serif text-slate-900 dark:text-white mb-6 tracking-tight">Structured by the Book</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Traditional exams test what you know. Teaching exams test how you would teach what you know. We prepare you strictly for the latter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-[2px] border-slate-200 dark:border-emerald-900/50 rounded-[2rem] p-6 bg-white dark:bg-[#030d08] relative shadow-sm">
           
          {[
            { icon: Lightbulb, title: 'NEP 2020 Aligned', desc: 'Questions shifted from rote direct theories to outcome-based learning and inclusive classroom logic.' },
            { icon: Library, title: 'NCERT Distillation', desc: 'Our EVS and SST questions are picked literally line-by-line from Class 3 to 8 NCERTs.' },
            { icon: BookOpen, title: '100% Bilingual CBT', desc: 'The exact CBT engine used by TCS. Toggle your tough CDP questions to Hindi with a single click.' },
            { icon: Target, title: 'DSSSB Penalty Mocks', desc: 'Lock-and-submit section timers that train you to survive the brutal DSSSB negative marking structure.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-[#F8FAFC] dark:bg-[#041a10] border-[2px] border-slate-200 dark:border-emerald-900/30 p-8 rounded-2xl hover:bg-emerald-900 hover:text-white dark:hover:bg-teal-900 dark:hover:text-white transition-colors group">
               <div className="w-14 h-14 bg-white dark:bg-[#051f14] border-2 border-slate-200 dark:border-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-600 dark:text-teal-400 mb-6 group-hover:border-transparent group-hover:bg-emerald-800 group-hover:text-teal-300 transition-colors">
                 <feature.icon className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-black font-serif mb-3 transition-colors">{feature.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 group-hover:text-emerald-100 dark:group-hover:text-teal-200 font-medium text-base transition-colors">
                 {feature.desc}
               </p>
             </div>
          ))}
        </div>
      </section>

      {/* 5. Free Mock Tests - HUGE SECOND AI IMAGE SECTION! */}
      <section className="py-24 bg-white dark:bg-[#030d08] border-y-[1.5px] border-slate-200 dark:border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 dark:bg-slate-100 border-[3px] border-slate-800 dark:border-slate-300 rounded-[3rem] p-10 md:p-16 text-white dark:text-slate-900 relative overflow-hidden flex flex-col xl:flex-row gap-16 lg:gap-10 items-center shadow-sm">
            
            {/* Minimal Grid BG */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Human Image Inside the Card */}
            <div className="hidden lg:flex w-[400px] relative items-center justify-center shrink-0">
                <div className="absolute top-4 -right-4 w-full h-full border-[3px] border-teal-500/50 dark:border-teal-400 rounded-3xl z-0"></div>
                <img 
                    src="/teaching_exam_aspirant.png" 
                    alt="Teaching Aspirant Solving Pedagogy in Library" 
                    className="w-full h-[450px] object-cover rounded-3xl border-[3px] border-slate-800 dark:border-slate-300 relative z-10 shadow-xl"
                />
            </div>

            <div className="flex-1 w-full flex flex-col relative z-20">
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-black font-serif mb-6 leading-tight">Quantify Your <br/>Methodology.</h2>
                    <p className="text-slate-400 dark:text-slate-600 text-xl font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Access our full-length trial modules. Experience the exact Hindi/English interface and tricky option combinations built strictly by the board guidelines.
                    </p>
                </div>
                
                <div className="w-full flex flex-col gap-4">
                  {freeTests.map((test, idx) => (
                    <div key={idx} className="bg-slate-800/80 dark:bg-white border-[2px] border-slate-700 dark:border-slate-300 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                      <div>
                        <h4 className="font-black font-serif text-white dark:text-slate-900 text-xl mb-3">{test.name}</h4>
                        <div className="flex items-center gap-4 text-sm font-bold text-teal-400 dark:text-emerald-600 uppercase tracking-wider">
                          <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                        </div>
                      </div>
                      <button className="text-base font-black text-slate-900 dark:text-white bg-white dark:bg-slate-900 hover:bg-emerald-100 dark:hover:bg-emerald-900 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-sm">
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
          <h2 className="text-4xl md:text-[3.5rem] font-black font-serif text-slate-900 dark:text-white mb-6">Inspiring Educators.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">Join thousands who bypassed the overwhelming syllabus, cracked Child Psychology loops, and scored 125+ margins.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#030d08] border-[2px] border-slate-200 dark:border-emerald-900/40 p-8 rounded-[2rem] flex flex-col gap-8 hover:-translate-y-2 hover:border-emerald-500 transition-all duration-300 relative">
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
                  <p className="text-xs font-black text-emerald-600 dark:text-teal-400 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#020905] border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white">Conceptual Guidelines</h2>
            <p className="text-slate-500 font-bold mt-4">Frequently Asked Questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#030d08] border-[2px] border-slate-200 dark:border-emerald-900/30 rounded-2xl overflow-hidden shadow-sm hover:border-emerald-400 dark:hover:border-teal-700 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black font-serif text-lg md:text-xl text-slate-900 dark:text-white"
                >
                  <span className="pr-6 leading-snug">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[2px] transition-all duration-300 ${openFaq === idx ? 'bg-slate-900 text-white border-transparent rotate-180 dark:bg-teal-500 dark:text-slate-900' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
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
