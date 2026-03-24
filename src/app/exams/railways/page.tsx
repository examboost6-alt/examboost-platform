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
  TrainFront,
  Wrench,
  Orbit,
  Zap,
  BookOpen,
  Globe2
} from 'lucide-react';

const popularExams = [
  {
    name: 'RRB NTPC',
    fullName: 'Non-Technical Popular Categories',
    desc: 'The most popular exam for Station Master, Goods Guard, and Clerical posts.',
    tests: 150,
    pattern: 'CBT-1 & CBT-2',
    subjects: ['General Awareness', 'Maths', 'Reasoning'],
    href: '/exams/railways/rrb-ntpc',
    icon: TrainFront,
    popular: true
  },
  {
    name: 'RRB Group D',
    fullName: 'Level-1 Posts',
    desc: 'Massive recruitment drive for maintainers, helpers, and hospital attendants.',
    tests: 120,
    pattern: 'Single CBT + PET',
    subjects: ['Gen Science', 'Maths', 'Reasoning'],
    href: '/exams/railways/rrb-group-d',
    icon: Users
  },
  {
    name: 'RRB ALP',
    fullName: 'Assistant Loco Pilot',
    desc: 'Specialized exam for running staff requiring technical aptitude and psycho testing.',
    tests: 100,
    pattern: 'CBT-1, 2 & Psycho',
    subjects: ['Maths', 'Engg Drawing', 'Basic Science'],
    href: '/exams/railways/rrb-alp',
    icon: Orbit
  },
  {
    name: 'RRB JE',
    fullName: 'Junior Engineer',
    desc: 'Recruitment for technical supervisory roles across various engineering domains.',
    tests: 80,
    pattern: 'CBT-1 & CBT-2',
    subjects: ['General Science', 'Technical Domain', 'Maths'],
    href: '#',
    icon: Wrench
  }
];

const freeTests = [
  { name: 'RRB NTPC CBT-1 All-India Live Mock', q: 100, t: 90, level: 'Advanced' },
  { name: 'RRB Group D Science Sectional', q: 25, t: 15, level: 'Crucial' },
  { name: 'Loco Pilot Basic Science & Engg Booster', q: 40, t: 30, level: 'Moderate' }
];

const reviews = [
  { name: 'Vikash Kumar', exam: 'Station Master', rating: 5, text: 'ExamBoost mock tests duplicate the exact RRB TCS interface down to the color palette. It removed my exam-day fear and improved my navigation speed immensely.' },
  { name: 'Sonali Singh', exam: 'RRB NTPC Selected', rating: 5, text: 'Speed and accuracy distinguish selected candidates in Railways. The AI analysis dashboard highlighted that I was wasting time on tricky Maths questions.' },
  { name: 'Ritesh Sharma', exam: 'ALP Qualified', rating: 5, text: 'Their CBT-2 technical trade coverage and Psycho Battery test simulations are unparalleled. The NCERT-based General Science questions were highly accurate to real exams.' },
];

const faqs = [
  { q: "Is the mock test interface exactly like the real RRB CBT?", a: "Yes, our mock test interface strictly follows the TCS iON layout used by RRB, familiarizing you with the Question Palette, Mark for Review, and language toggle features." },
  { q: "Do you provide tests for technical trades in ALP/JE?", a: "Absolutely! Our Master Pass includes dedicated technical trade test papers for Fitter, Electrician, Electronics Mechanic, and other major trades." },
  { q: "Are the General Science questions aligned with NCERT?", a: "Yes, our team exclusively frames General Science questions strictly mapped to class 9th and 10th NCERT textbooks, which is the gold standard for RRB exams." },
  { q: "Can I take the tests in Hindi?", a: "Yes, all our major mock tests are fully bilingual. Features and solutions are completely available in both Hindi and English." }
];

export default function RailwaysExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-[#D97706]/30">
      
      {/* 1. HERO SECTION - Flat Modern UI without Gradients/Glows */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] w-full bg-white dark:bg-[#060D1A] border-b-[1.5px] border-slate-100 dark:border-slate-800 overflow-hidden">
        
        {/* Modern Flat Geometric Decorations */}
        <div className="absolute top-10 left-10 md:left-20 w-32 h-16 bg-amber-50 dark:bg-[#D97706]/10 rounded-t-full hidden md:block border-t border-x border-[#D97706]/20"></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-40 h-20 bg-amber-50 dark:bg-[#D97706]/10 rounded-b-full hidden md:block border-b border-x border-[#D97706]/20"></div>
        
        {/* Signature-style Hand-drawn Arrow (Top Right) */}
        <svg className="absolute top-32 right-32 md:right-1/4 w-24 h-24 text-[#D97706] hidden lg:block -rotate-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 80 Q 30 20, 80 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M70 25 L 85 42 L 65 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="80" r="4" fill="currentColor" />
        </svg>

        {/* Floating Outline Circle */}
        <div className="absolute bottom-40 left-10 md:left-1/4 w-16 h-16 border-[4px] border-[#D97706] rounded-full hidden md:block opacity-30"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-20">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-amber-50 dark:bg-[#D97706]/10 text-slate-800 dark:text-[#D97706] text-sm font-black tracking-widest uppercase mb-10 border-2 border-amber-200 dark:border-[#D97706]/20"
            >
            <ShieldCheck className="w-4 h-4 text-[#D97706]" />
            <span>Target RRB Notifications 24-25</span>
            </motion.div>
            
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter"
            >
            Board the <br className="hidden md:block" />
            <span className="text-[#D97706] relative inline-block">
                Express
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-[#D97706]/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" d="M5,15 Q50,5 95,15" />
                </svg>
            </span>
            <br className="hidden md:block" /> To Indian Railways.
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-medium"
            >
            Master the extreme competition with our exact TCS replica interface, NCERT-centric General Science, and precise speed analytics.
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
            >
            <Link href="#rrb-series" className="px-10 py-5 w-full sm:w-auto rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-black text-lg transition-colors flex items-center justify-center gap-3">
                Explore Series <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-10 py-5 w-full sm:w-auto rounded-xl bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black text-lg hover:border-[#D97706] hover:text-[#D97706] transition-colors flex items-center justify-center">
                Attempt CBT Mock
            </button>
            </motion.div>
        </div>
      </section>

      {/* Trust Scrolling Ticker - Solid colors */}
      <section className="w-full bg-[#D97706] py-6 overflow-hidden flex items-center relative z-10">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-white font-black text-lg md:text-2xl uppercase tracking-widest">
             <span className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" /> Exact TCS UI Replica</span>
             <span className="flex items-center gap-4"><Zap className="w-6 h-6 md:w-8 md:h-8" /> NCERT General Science</span>
             <span className="flex items-center gap-4"><BarChart className="w-6 h-6 md:w-8 md:h-8" /> CBAT Psycho Mocks</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8" /> 1,50,000+ Aspirants</span>
             <span className="flex items-center gap-4"><Wrench className="w-6 h-6 md:w-8 md:h-8" /> Technical Trade Tests</span>
             <span className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" /> Exact TCS UI Replica</span>
             <span className="flex items-center gap-4"><Zap className="w-6 h-6 md:w-8 md:h-8" /> NCERT General Science</span>
             <span className="flex items-center gap-4"><BarChart className="w-6 h-6 md:w-8 md:h-8" /> CBAT Psycho Mocks</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8" /> 1,50,000+ Aspirants</span>
             <span className="flex items-center gap-4"><Wrench className="w-6 h-6 md:w-8 md:h-8" /> Technical Trade Tests</span>
           </div>
        </div>
      </section>

      {/* 2. Target Exams Grid (Flat Neumorphic/Clean Box Style) */}
      <section id="rrb-series" className="py-24 md:py-32 bg-slate-50 dark:bg-[#0B1120] scroll-mt-20 relative">
        {/* Decorative Half Circles / Dashes */}
        <div className="absolute top-20 right-0 w-16 h-32 bg-[#D97706]/10 rounded-l-full"></div>
        <div className="absolute bottom-20 left-0 border-t-8 border-dashed border-[#D97706]/20 w-32 h-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Determine Your Target</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:mx-auto">Highly specialized, rigorous test series mapping the exact constraints of various Railway Recruitment Boards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 rounded-[2rem] bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 hover:border-[#D97706] dark:hover:border-[#D97706] transition-colors relative block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-[#D97706] text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest">HOT</span>
                )}
                <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-slate-800 flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3 group-hover:text-[#D97706] transition-colors">{exam.name}</h3>
                <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-6 min-h-[60px]">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-transparent px-3 py-1 rounded-md">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-[#D97706] font-black tracking-wide group-hover:underline">
                  Launch Series <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Prepare With Experts Section (First Boxed Image Wrapper) */}
      <section className="py-24 bg-white dark:bg-[#060D1A] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full relative flex justify-center lg:justify-start">
             {/* The beautiful shaped cutout container */}
             <div className="w-full max-w-[400px] aspect-[4/5] bg-amber-50 dark:bg-[#0F172A] rounded-t-full rounded-b-[2.5rem] relative flex items-center justify-center border-[4px] border-[#D97706]/20 dark:border-slate-800 shadow-2xl overflow-hidden p-[2px]">
                 <img 
                      src="/railway_expert.png" 
                      alt="Engineering Railway Prep" 
                      className="w-full h-full object-cover object-center rounded-t-full rounded-b-[2.3rem]"
                 />
             </div>
             
             {/* Floating badge */}
             <div className="absolute bottom-10 -left-4 lg:-left-12 bg-white dark:bg-[#0B1120] p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 border-[1.5px] border-slate-100 dark:border-slate-700 z-20">
                <div className="w-12 h-12 bg-amber-100 dark:bg-[#D97706]/20 rounded-xl flex items-center justify-center text-[#D97706]">
                    <Award className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">CBT Experts</p>
                   <p className="font-black font-serif text-slate-900 dark:text-white text-lg">Ex-Railways Staff</p>
                </div>
             </div>
             {/* Floating deco */}
             <div className="absolute top-10 -right-4 w-12 h-12 border-4 border-[#D97706]/30 rounded-full z-0 hidden lg:block"></div>
          </div>

          <div className="flex-[1.2] w-full items-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">Structured by <br/><span className="text-[#D97706]">Station Masters.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
               Every block test, general science question, and technical trade syllabus is engineered by evaluators who have successfully cleared RRB ALP & NTPC exams themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-[#D97706] dark:hover:bg-[#D97706] dark:hover:text-white transition-colors border shadow-sm">
                  Examine Our Credentials <ArrowRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section (Flat & Structured) */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#0B1120] border-y-[1.5px] border-slate-100 dark:border-slate-800/80 relative overflow-hidden">
         {/* Decoration: Flat Grid line */}
         <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px', color: '#D97706' }}>
         </div>
         {/* Signature Loop Arrow pointing to card */}
         <svg className="absolute bottom-20 left-1/2 w-48 h-48 text-[#D97706] hidden xl:block z-10 -translate-x-full" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 20,180 C 100,180 80,40 180,40" strokeDasharray="6 6" />
            <polygon points="180,40 170,30 170,50" fill="currentColor" />
         </svg>

         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-[#D97706]/10 text-amber-700 dark:text-[#D97706] text-sm font-black uppercase tracking-widest mb-8 border-2 border-amber-200 dark:border-[#D97706]/20">
                  <BarChart className="w-5 h-5" />
                  <span>Deep Analytics</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
                  X-Ray Vision For<br/>Your CBT Phase.
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-xl md:text-2xl font-medium mb-10 leading-relaxed">
                  Stop evaluating yourself on pure marks. We construct a behavioral map of your guessing efficiency, blind spots in NCERT Science vs Technical domains.
               </p>
               
               <ul className="space-y-8">
                 {[
                   { icon: Target, title: 'Speed Precision Tracking', desc: 'Identify if your tricky Maths tactics actually yield positive net marks against the 1/3 negative penalty.' },
                   { icon: Activity, title: 'Micro-Topic Mapping', desc: 'Isolate precision errors down to micro-topics like "Locomotive Engineering" or "Optics".' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-slate-100 dark:bg-slate-800 p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl mt-1"><fp.icon className="w-6 h-6 text-[#D97706]" /></div>
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
                  className="z-20 w-full bg-white dark:bg-[#0F172A] rounded-[2rem] border-[3px] border-[#D97706]/20 dark:border-[#D97706]/30 p-8 shadow-[12px_12px_0px_#D97706] dark:shadow-[12px_12px_0px_rgba(217,119,6,0.5)]"
                >
                  <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-amber-100 dark:bg-[#D97706]/20 flex items-center justify-center">
                        <BarChart className="w-7 h-7 text-[#D97706]" />
                      </div>
                      <div>
                        <h4 className="font-black font-serif text-slate-900 dark:text-white text-xl mb-1">Live Analytics</h4>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">RRB NTPC CBT-1</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black font-serif text-slate-900 dark:text-white text-3xl">85.6<span className="text-xl">M</span></h4>
                      <p className="text-sm font-black text-[#D97706] mt-1 uppercase tracking-widest">
                        Total Score
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars purely flat */}
                  <div className="space-y-8">
                    {[
                      { name: 'General Science', score: 88, color: 'bg-[#D97706]' },
                      { name: 'Mathematics', score: 72, color: 'bg-indigo-500' },
                      { name: 'Reasoning Ability', score: 95, color: 'bg-emerald-500' },
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
            <ShieldCheck className="w-4 h-4 text-[#D97706]" />
            <span>Robust Evaluation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6 tracking-tight">Enterprise Grade Platform</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Engineered to simulate the exact pressure, mass competition, and pattern of Indian Railways.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-[1.5px] border-slate-200/80 dark:border-slate-800 rounded-[3rem] p-6 lg:p-10 bg-white dark:bg-[#0F172A] shadow-sm relative">
           
          {/* Half circle decorator bottom left */}
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#D97706] rounded-full z-[-1] hidden md:block"></div>
          {/* Square decorator top right */}
          <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-[#D97706] z-[-1] hidden md:block rounded-xl"></div>

          {[
            { icon: BookOpen, title: 'NCERT Science Core', desc: 'Intensive focus on 10th-grade General Science strictly adhering to NCERT patterns.' },
            { icon: Globe2, title: 'Authentic TCS UI', desc: 'Exact functioning replica of the physical Computer Based Test interface layout.' },
            { icon: FileText, title: 'Psychometric Mocks', desc: 'Specialized visual and cognitive battery tests formulated exclusively for ALP.' },
            { icon: Activity, title: 'Technical Trades', desc: 'Distinct mocks included for ALP Part-B and Junior Engineer trade subjects.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 border-[1.5px] border-slate-200 dark:border-slate-700 p-8 rounded-3xl hover:border-[#D97706]/50 transition-colors">
               <div className="w-14 h-14 bg-white dark:bg-[#060D1A] border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-[#D97706] mb-6">
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

      {/* 5. Free Mock Tests - Flat solid card with Second Image! */}
      <section className="py-24 bg-slate-100 dark:bg-[#060D1A] border-y-[1.5px] border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 dark:bg-[#0F172A] border-4 border-[#D97706] rounded-[3rem] p-10 md:p-16 pb-0 md:pb-0 text-white relative overflow-hidden flex flex-col xl:flex-row gap-10 xl:gap-8 items-center shadow-lg pt-16 xl:pt-16">
            
            {/* Flat Geo Decors */}
            <div className="absolute top-0 right-10 w-24 h-24 bg-[#D97706] rounded-b-full hidden xl:block z-0"></div>
            <div className="absolute top-10 right-[50%] w-20 h-20 border-4 border-[#D97706]/30 border-dashed rounded-full pointer-events-none z-0"></div>

            {/* Human Image Inside the Card, properly shaped */}
            <div className="hidden xl:flex w-[320px] relative items-center justify-center shrink-0 pr-10">
                <img 
                    src="/railway_aspirant.png" 
                    alt="Railway Aspirant Mock" 
                    className="w-full h-[400px] object-cover rounded-[2rem] border-4 border-[#D97706]/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] transform -rotate-2"
                />
            </div>

            <div className="flex-1 text-center xl:text-left relative z-20 w-full xl:pl-0 pb-10 xl:pb-16 pt-0">
              <h2 className="text-4xl lg:text-5xl font-black font-serif mb-6 leading-tight">Test the Platform<br/>For Free.</h2>
              <p className="text-slate-300 text-xl md:text-2xl font-medium mb-10 max-w-lg mx-auto xl:mx-0 leading-relaxed">
                Experience the brutal interface reality of the Railway examination center absolutely free.
              </p>
              <button className="bg-[#D97706] text-white px-10 py-5 rounded-2xl font-black transition-colors w-full sm:w-auto hover:bg-[#B45309] flex items-center justify-center gap-3">
                Create Account <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-[1.2] w-full flex flex-col gap-5 relative z-20 pb-10 xl:pb-16">
              {freeTests.map((test, idx) => (
                <div key={idx} className="bg-slate-800/80 dark:bg-slate-900/80 border-[1.5px] border-slate-600 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#D97706]/80 transition-colors backdrop-blur-sm">
                  <div>
                    <h4 className="font-black font-serif text-white text-xl mb-3">{test.name}</h4>
                    <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-wider">
                      <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-[#D97706]" /> {test.q} Qs</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D97706]" /> {test.t} Mins</span>
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
          <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Trusted by Achievers</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">No fluff. Just raw verified railway selections.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 p-8 rounded-[2rem] flex flex-col gap-8 shadow-sm scale-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 hover:border-[#D97706]/30 group">
              <div className="flex text-[#D97706] gap-2">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed flex-grow">
                "{r.text}"
              </p>
              <div className="mt-auto pt-6 border-t-[1.5px] border-slate-100 dark:border-slate-800 flex items-center gap-5">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl flex items-center justify-center font-black text-2xl group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-lg text-slate-900 dark:text-white mb-1 group-hover:text-[#D97706] transition-colors">{r.name}</h4>
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
              <div key={idx} className="bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-[#D97706]/50 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black text-lg md:text-xl text-slate-900 dark:text-white hover:text-[#D97706] dark:hover:text-[#D97706] transition-colors"
                >
                  <span className="pr-6">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-[1.5px] transition-all duration-300 ${openFaq === idx ? 'bg-[#D97706] text-white border-transparent rotate-180' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
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
