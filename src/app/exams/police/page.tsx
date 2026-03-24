"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  PlayCircle,
  FileText,
  Target,
  ShieldCheck,
  Activity,
  Star,
  CheckCircle2,
  Users,
  ChevronDown,
  Award,
  Clock,
  BarChart,
  Shield,
  ShieldAlert,
  Crosshair,
  Map,
  MonitorSmartphone,
  Layers,
  BookOpen
} from 'lucide-react';

const popularExams = [
  {
    name: 'UP Police Constable',
    fullName: 'Uttar Pradesh Police',
    desc: 'Massive recruitment focusing heavily on Mental Aptitude and UP Specific GK.',
    tests: 150,
    pattern: 'Written (OMR) & Physical',
    subjects: ['Mental Aptitude', 'Up GK', 'Hindi'],
    href: '/exams/police/up-police-constable',
    icon: Shield,
    popular: true
  },
  {
    name: 'UP Police SI',
    fullName: 'Sub-Inspector (Daroga)',
    desc: 'Prestigeous officer post testing deep knowledge of Basic Law and Constitution.',
    tests: 120,
    pattern: 'Online CBT & Physical',
    subjects: ['Mool Vidhi', 'Constitution', 'Maths'],
    href: '/exams/police/up-police-si',
    icon: ShieldAlert
  },
  {
    name: 'Delhi Police Constable',
    fullName: 'Executive Constable',
    desc: 'Central level police job testing Computer knowledge and National Current Affairs.',
    tests: 100,
    pattern: 'Online CBT (SSC) & Physical',
    subjects: ['Computer', 'Current Affairs', 'Reasoning'],
    href: '/exams/police/delhi-police',
    icon: Crosshair
  },
  {
    name: 'Bihar Police Constable',
    fullName: 'CSBC Recruitment',
    desc: 'State level written exam where physical marks are primarily considered for merit.',
    tests: 80,
    pattern: 'Written (OMR) & Physical',
    subjects: ['Science', 'General Knowledge', 'Hindi'],
    href: '#',
    icon: ShieldCheck
  }
];

const freeTests = [
  { name: 'UP Police Constable OMR Simulation', q: 150, t: 120, level: 'Crucial' },
  { name: 'Delhi Police Computer Knowledge', q: 50, t: 30, level: 'Advanced' },
  { name: 'UP SI Mool Vidhi & Constitution', q: 40, t: 30, level: 'Moderate' }
];

const reviews = [
  { name: 'Rohan Chaudhary', exam: 'UP Police Selected', rating: 5, text: 'The mock tests exactly matched the offline OMR level. Their Mental Aptitude section is incredibly relevant and literally saved my reasoning score in the main written exam.' },
  { name: 'Shreya Tiwary', exam: 'Delhi Police Constable', rating: 5, text: 'Computer questions in the DP mock tests are perfectly aligned with SSC TCS pattern. The AI analytics showed me I was losing marks in Excel formulas.' },
  { name: 'Alok Singh', exam: 'UP SI Selected', rating: 5, text: 'Mool Vidhi (Law) and Constitution questions are very deep and conceptual. ExamBoost is the only platform that gets the Daroga-level law difficulty exactly right.' },
];

const faqs = [
  { q: "Is the UP Police mock interface like the actual OMR sheet format?", a: "Yes, our UP Police Constable mock tests follow the exact section division and question breakdown of the physical exam. We also provide downloadable OMR sheets for you to practice bubbling at home while attempting our test." },
  { q: "Do you cover the Computer syllabus for Delhi Police?", a: "Absolutely! Delhi Police tests heavily feature MS Word, Excel, and Internet protocols. We have dedicated sectional tests just for the 10-mark computer module." },
  { q: "Are UP-SI Mool Vidhi modules included in the Sub-Inspector package?", a: "Yes. Basic Law (Mool Vidhi) featuring IPC, CRPC, and minor acts is extensively covered with updated amendments in our specialized SI mocks." },
  { q: "Can I take the tests in Hindi?", a: "Yes, Police exams are predominantly attempted in Hindi. Our entire platform, including detailed step-by-step solutions, is 100% bilingual." }
];

export default function PoliceExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-[#15803D]/30">
      
      {/* 1. HERO SECTION - Flat Modern UI without Gradients/Glows */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] w-full bg-white dark:bg-[#060D1A] border-b-[1.5px] border-slate-100 dark:border-slate-800 overflow-hidden">
        
        {/* Modern Flat Geometric Decorations */}
        <div className="absolute top-10 left-10 md:left-20 w-32 h-16 bg-green-50 dark:bg-[#15803D]/10 rounded-t-full hidden md:block border-t border-x border-[#15803D]/20"></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-40 h-20 bg-green-50 dark:bg-[#15803D]/10 rounded-b-full hidden md:block border-b border-x border-[#15803D]/20"></div>
        
        {/* Signature-style Hand-drawn Arrow (Top Right) */}
        <svg className="absolute top-32 right-32 md:right-1/4 w-24 h-24 text-[#15803D] hidden lg:block -rotate-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 80 Q 30 20, 80 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M70 25 L 85 42 L 65 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="80" r="4" fill="currentColor" />
        </svg>

        {/* Floating Outline Circle */}
        <div className="absolute bottom-40 left-10 md:left-1/4 w-16 h-16 border-[4px] border-[#15803D] rounded-full hidden md:block opacity-30"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-20">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-50 dark:bg-[#15803D]/10 text-slate-800 dark:text-[#15803D] text-sm font-black tracking-widest uppercase mb-10 border-2 border-green-200 dark:border-[#15803D]/20"
            >
            <ShieldCheck className="w-4 h-4 text-[#15803D]" />
            <span>Target Police Recruitment 24-25</span>
            </motion.div>
            
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter"
            >
            Don The <br className="hidden md:block" />
            <span className="text-[#15803D] relative inline-block">
                Uniform
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-[#15803D]/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M5,15 Q50,5 95,15" />
                </svg>
            </span>
            <br className="hidden md:block" /> With Pride & Precision.
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-medium"
            >
            Crack UP Police, Delhi Police & State SI exams. Master mental aptitude sections, Basic Law (Mool Vidhi), and precise OMR time management.
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
            >
            <Link href="#police-series" className="px-10 py-5 w-full sm:w-auto rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-black text-lg transition-colors flex items-center justify-center gap-3">
                Explore The Force <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-10 py-5 w-full sm:w-auto rounded-xl bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black text-lg hover:border-[#15803D] hover:text-[#15803D] transition-colors flex items-center justify-center">
                Attempt Baseline Mock
            </button>
            </motion.div>
        </div>
      </section>

      {/* Trust Scrolling Ticker - Solid colors */}
      <section className="w-full bg-[#15803D] py-6 overflow-hidden flex items-center relative z-10">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-white font-black text-lg md:text-2xl uppercase tracking-widest">
             <span className="flex items-center gap-4"><MonitorSmartphone className="w-6 h-6 md:w-8 md:h-8" /> Offline OMR Pattern</span>
             <span className="flex items-center gap-4"><Shield className="w-6 h-6 md:w-8 md:h-8" /> SI Level Mool Vidhi</span>
             <span className="flex items-center gap-4"><Layers className="w-6 h-6 md:w-8 md:h-8" /> Mental Aptitude Logic</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8" /> 2,00,000+ Aspirants</span>
             <span className="flex items-center gap-4"><Map className="w-6 h-6 md:w-8 md:h-8" /> State Level GK Maps</span>
             <span className="flex items-center gap-4"><MonitorSmartphone className="w-6 h-6 md:w-8 md:h-8" /> Offline OMR Pattern</span>
             <span className="flex items-center gap-4"><Shield className="w-6 h-6 md:w-8 md:h-8" /> SI Level Mool Vidhi</span>
             <span className="flex items-center gap-4"><Layers className="w-6 h-6 md:w-8 md:h-8" /> Mental Aptitude Logic</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8" /> 2,00,000+ Aspirants</span>
             <span className="flex items-center gap-4"><Map className="w-6 h-6 md:w-8 md:h-8" /> State Level GK Maps</span>
           </div>
        </div>
      </section>

      {/* 2. Target Exams Grid (Flat Neumorphic/Clean Box Style) */}
      <section id="police-series" className="py-24 md:py-32 bg-slate-50 dark:bg-[#0B1120] scroll-mt-20 relative">
        {/* Decorative Half Circles / Dashes */}
        <div className="absolute top-20 right-0 w-16 h-32 bg-[#15803D]/10 rounded-l-full"></div>
        <div className="absolute bottom-20 left-0 border-t-8 border-dashed border-[#15803D]/20 w-32 h-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Choose Your Target Uniform</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:mx-auto">Highly specialized, rigorous test series mapping the exact constraints and nuances of various regional police boards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 rounded-[2rem] bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 hover:border-[#15803D] dark:hover:border-[#15803D] transition-colors relative block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-[#15803D] text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest">HOT</span>
                )}
                <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-slate-800 flex items-center justify-center text-[#15803D] mb-6 group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3 group-hover:text-[#15803D] transition-colors">{exam.name}</h3>
                <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-6 min-h-[60px]">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-transparent px-3 py-1 rounded-md">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-[#15803D] font-black tracking-wide group-hover:underline">
                  Launch Series <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Prepare With Experts Section (Here is the First Image Shape!) */}
      <section className="py-24 bg-white dark:bg-[#060D1A] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full relative flex justify-center lg:justify-start">
             {/* The beautiful shaped cutout container */}
             <div className="w-full max-w-[400px] aspect-[4/5] bg-green-50 dark:bg-[#0F172A] rounded-t-full rounded-b-[2.5rem] relative flex items-center justify-center border-[4px] border-[#15803D]/20 dark:border-slate-800 shadow-2xl overflow-hidden p-[2px]">
                 <img 
                      src="/police_exam_expert.png" 
                      alt="Police Exam Mentor" 
                      className="w-full h-full object-cover object-center rounded-t-full rounded-b-[2.3rem]"
                 />
             </div>
             
             {/* Floating badge */}
             <div className="absolute bottom-10 -left-4 lg:-left-12 bg-white dark:bg-[#0B1120] p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 border-[1.5px] border-slate-100 dark:border-slate-700 z-20">
                <div className="w-12 h-12 bg-green-100 dark:bg-[#15803D]/20 rounded-xl flex items-center justify-center text-[#15803D]">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Mool Vidhi Experts</p>
                   <p className="font-black font-serif text-slate-900 dark:text-white text-lg">Senior Inspectors</p>
                </div>
             </div>
             {/* Floating deco */}
             <div className="absolute top-10 -right-4 w-12 h-12 border-4 border-[#15803D]/30 rounded-full z-0 hidden lg:block"></div>
          </div>

          <div className="flex-[1.2] w-full items-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">Structured by <br/><span className="text-[#15803D]">Real Officers.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
               Every logic question in mental aptitude, and every constitutional act asked in Mool Vidhi, is cross-checked by currently serving inspectors and retired officers who truly understand the Daroga level difficulty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-[#15803D] dark:hover:bg-[#15803D] dark:hover:text-white transition-colors border shadow-sm">
                  View Our Mentors <ArrowRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section (Flat & Structured) */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1120] border-y-[1.5px] border-slate-100 dark:border-slate-800/80 relative overflow-hidden">
         {/* Decoration: Flat Grid line */}
         <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px', color: '#15803D' }}>
         </div>
         {/* Signature Loop Arrow pointing to card */}
         <svg className="absolute bottom-20 left-1/2 w-48 h-48 text-[#15803D] hidden xl:block z-10 -translate-x-full" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 20,180 C 100,180 80,40 180,40" strokeDasharray="6 6" />
            <polygon points="180,40 170,30 170,50" fill="currentColor" />
         </svg>

         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-[#15803D]/10 text-green-700 dark:text-[#15803D] text-sm font-black uppercase tracking-widest mb-8 border-2 border-green-200 dark:border-[#15803D]/20">
                  <BarChart className="w-5 h-5" />
                  <span>Aptitude Tracking</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
                  A Uniform Requires<br/>Flawless Instincts.
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-xl md:text-2xl font-medium mb-10 leading-relaxed">
                  Police exams uniquely test your psychological and ethical reasoning. Our AI dashboard isolates logic errors in Situation Reaction Tests (SRT) and Basic Legal cases.
               </p>
               
               <ul className="space-y-8">
                 {[
                   { icon: Layers, title: 'Situation Reaction Accuracy', desc: 'Identify systematic thinking errors in crowded situation and riot control reaction cases.' },
                   { icon: ShieldAlert, title: 'Mool Vidhi Error Tracking', desc: 'Find out specifically which IPC/CRPC sections or Constitutional articles you get wrong.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-slate-100 dark:bg-slate-800 p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl mt-1"><fp.icon className="w-6 h-6 text-[#15803D]" /></div>
                     <div>
                       <h4 className="font-black text-2xl font-serif text-slate-900 dark:text-white mb-2">{fp.title}</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">{fp.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="flex-1 w-full max-w-lg aspect-square relative flex items-center justify-center">
                {/* Main Performance Card - Flat styling no blur/shadow */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="z-20 w-full bg-white dark:bg-[#0F172A] rounded-[2rem] border-[3px] border-[#15803D]/20 dark:border-[#15803D]/30 p-8 shadow-[12px_12px_0px_#15803D] dark:shadow-[12px_12px_0px_rgba(21,128,61,0.5)]"
                >
                  <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-[#15803D]/20 flex items-center justify-center">
                        <BarChart className="w-7 h-7 text-[#15803D]" />
                      </div>
                      <div>
                        <h4 className="font-black font-serif text-slate-900 dark:text-white text-xl mb-1">Live Analytics</h4>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">UP Const. OMR Set-04</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black font-serif text-slate-900 dark:text-white text-3xl">210/300</h4>
                      <p className="text-sm font-black text-[#15803D] mt-1 uppercase tracking-widest">
                        Total Marks
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars purely flat */}
                  <div className="space-y-8">
                    {[
                      { name: 'General Hindi', score: 85, color: 'bg-emerald-500' },
                      { name: 'Mental Aptitude', score: 62, color: 'bg-rose-500' },
                      { name: 'Numerical Ability', score: 90, color: 'bg-[#15803D]' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-base font-black text-slate-800 dark:text-slate-200 mb-3">
                          <span>{sub.name}</span>
                          <span>{sub.score}%</span>
                        </div>
                        <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
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

      {/* 4. Core Offerings (Flat Boxes) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-black tracking-widest uppercase mb-6 border-2 border-slate-200 dark:border-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#15803D]" />
            <span>State Police Specialization</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6 tracking-tight">Enterprise Grade Prep Platform</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            A standard generic test series won't cover state-level variations. We build highly targeted modules specifically for SI and Constables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-[1.5px] border-slate-200/80 dark:border-slate-800 rounded-[3rem] p-6 lg:p-10 bg-white dark:bg-[#0F172A] shadow-sm relative">
           
          {/* Half circle decorator bottom left */}
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#15803D] rounded-full z-[-1] hidden md:block"></div>
          {/* Square decorator top right */}
          <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-[#15803D] z-[-1] hidden md:block rounded-xl"></div>

          {[
            { icon: Map, title: 'Regional Gen-Knowledge', desc: 'Heavy injection of state specific historical and geographical data in mocks.' },
            { icon: BookOpen, title: 'Grammar Heavy Hindi', desc: 'Master Vyakaran, Sandhi, Samas which forms 25%+ of state police tests.' },
            { icon: Shield, title: 'Constitutional Law', desc: 'Precise difficulty scaling on Articles, Amendments, and Basic Laws for Darogas.' },
            { icon: MonitorSmartphone, title: 'Computer Formatting', desc: 'Exact TCS format coverage for Delhi Police MS Office and networking chapters.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 border-[1.5px] border-slate-200 dark:border-slate-700 p-8 rounded-3xl hover:border-[#15803D]/50 transition-colors">
               <div className="w-14 h-14 bg-white dark:bg-[#060D1A] border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-[#15803D] mb-6">
                 <feature.icon className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-black font-serif text-slate-900 dark:text-white mb-3">{feature.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 font-medium text-base">
                 {feature.desc}
               </p>
             </div>
          ))}
        </div>
      </section>

      {/* 5. Free Mock Tests - Flat solid card / Second Image Section! */}
      <section className="py-24 bg-slate-100 dark:bg-[#060D1A] border-y-[1.5px] border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 dark:bg-[#0F172A] border-4 border-[#15803D] rounded-[3rem] p-10 md:p-16 pb-0 md:pb-0 text-white relative overflow-hidden flex flex-col xl:flex-row gap-10 xl:gap-8 items-center shadow-lg pt-16 xl:pt-16">
            
            {/* Flat Geo Decors */}
            <div className="absolute top-0 right-10 w-24 h-24 bg-[#15803D] rounded-b-full hidden xl:block z-0"></div>
            <div className="absolute top-10 right-[50%] w-20 h-20 border-4 border-[#15803D]/30 border-dashed rounded-full pointer-events-none z-0"></div>

            {/* Human Image Inside the Card, properly shaped */}
            <div className="hidden xl:flex w-[320px] relative items-center justify-center shrink-0 pr-10">
                <img 
                    src="/police_exam_aspirant.png" 
                    alt="Police Exam Dedicated Aspirant Studying" 
                    className="w-full h-[400px] object-cover rounded-[2rem] border-4 border-[#15803D]/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] transform -rotate-2"
                />
            </div>

            <div className="flex-1 text-center xl:text-left relative z-20 w-full xl:pl-0 pb-10 xl:pb-16 pt-0">
              <h2 className="text-4xl lg:text-5xl font-black font-serif mb-6 leading-tight">Test the Platform<br/>For Free.</h2>
              <p className="text-slate-300 text-xl md:text-2xl font-medium mb-10 max-w-lg mx-auto xl:mx-0 leading-relaxed">
                Experience the brutal interface, the difficulty of Mental Aptitude cases, and OMR timings absolutely free.
              </p>
              <button className="bg-[#15803D] text-white px-10 py-5 rounded-2xl font-black transition-colors w-full sm:w-auto hover:bg-[#166534] flex items-center justify-center gap-3">
                Create Account <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-[1.2] w-full flex flex-col gap-5 relative z-20 pb-10 xl:pb-16">
              {freeTests.map((test, idx) => (
                <div key={idx} className="bg-slate-800/80 dark:bg-slate-900/80 border-[1.5px] border-slate-600 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#15803D]/80 transition-colors backdrop-blur-sm">
                  <div>
                    <h4 className="font-black font-serif text-white text-xl mb-3">{test.name}</h4>
                    <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-wider">
                      <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-[#15803D]" /> {test.q} Qs</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#15803D]" /> {test.t} Mins</span>
                    </div>
                  </div>
                  <button className="text-sm font-black text-slate-900 bg-white hover:bg-slate-200 px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0">
                     Attempt <PlayCircle className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Reviews (Clean bordered cards) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Trusted by Selectees</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Thousands have successfully donned the Khaki after training their written mechanics with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 p-8 rounded-[2rem] flex flex-col gap-8 shadow-sm scale-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-[#15803D]/30 group">
              <div className="flex text-[#15803D] gap-2">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed flex-grow">
                "{r.text}"
              </p>
              <div className="mt-auto pt-6 border-t-[1.5px] border-slate-100 dark:border-slate-800 flex items-center gap-5">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl flex items-center justify-center font-black text-2xl group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-lg text-slate-900 dark:text-white mb-1 group-hover:text-[#15803D] transition-colors">{r.name}</h4>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-800/80 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-serif text-slate-900 dark:text-white">Questions?</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-[#15803D]/50 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black text-lg md:text-xl text-slate-900 dark:text-white hover:text-[#15803D] dark:hover:text-[#15803D] transition-colors"
                >
                  <span className="pr-6">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[1.5px] transition-all duration-300 ${openFaq === idx ? 'bg-[#15803D] text-white border-transparent rotate-180' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
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
