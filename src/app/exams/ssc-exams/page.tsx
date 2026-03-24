"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, CheckCircle2, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Briefcase, GraduationCap, LayoutDashboard, MonitorSmartphone, Archive,
  Flame, Crosshair, TrendingUp, Compass
} from 'lucide-react';

const popularExams = [
  {
    name: 'SSC CGL',
    fullName: 'Combined Graduate Level',
    desc: 'The most sought-after gateway for Group B & C officer posts in ministries.',
    tests: 150,
    pattern: 'Tier 1 & 2 (CBE)',
    subjects: ['Maths', 'English', 'Reasoning', 'GS'],
    href: '/exams/ssc-exams/ssc-cgl',
    icon: GraduationCap,
    popular: true
  },
  {
    name: 'SSC CHSL',
    fullName: 'Combined Higher Secondary',
    desc: 'Entry-level clerical posts like LDC, JSA. Heavy typing speed required.',
    tests: 120,
    pattern: 'Tier 1, 2 + Typing',
    subjects: ['Maths', 'English', 'Reasoning', 'GS'],
    href: '/exams/ssc-exams/ssc-chsl',
    icon: Briefcase
  },
  {
    name: 'SSC MTS',
    fullName: 'Multi Tasking Non-Technical',
    desc: 'Gateway to central govt jobs. Designed to test fundamental speed.',
    tests: 100,
    pattern: 'Single CBE',
    subjects: ['English', 'Numerical Aptitude', 'GS'],
    href: '/exams/ssc-exams/ssc-mts',
    icon: Activity
  },
  {
    name: 'SSC CPO',
    fullName: 'Central Police Organization',
    desc: 'Recruitment of Sub-Inspectors in Delhi Police, CAPFs, and CISF.',
    tests: 85,
    pattern: 'Paper 1 & 2 + PST',
    subjects: ['English', 'Reasoning', 'GS'],
    href: '/exams/ssc-exams/ssc-cpo',
    icon: Crosshair
  }
];

const freeTests = [
  { name: 'SSC CGL Tier 1 All-India Live Mock', q: 100, t: 60, level: 'Advanced' },
  { name: 'SSC Quantitative Aptitude Sectional', q: 25, t: 15, level: 'Moderate' },
  { name: 'SSC English Comprehension Booster', q: 30, t: 20, level: 'Crucial' }
];

const reviews = [
  { name: 'Sumit Sharma', exam: 'SSC CGL Selected', rating: 5, text: 'ExamBoost mock tests duplicate the exact TCS iON interface. Attempting tests here completely removed my exam-day interface lag fear.' },
  { name: 'Kavita Iyer', exam: 'CHSL Aspirant', rating: 5, text: 'The short tricks given in Quantitative solutions are amazing. The analytics dashboard clearly showed I was wasting too much time on Arithmetic.' },
  { name: 'Pooja Verma', exam: 'CPO Physical Cleared', rating: 5, text: 'English comprehension passages were exactly like the level of recent SSC exams. Highly recommended for serious aspirants targeting top ranks.' },
];

const faqs = [
  { q: "Is the test interface exactly like the real SSC exam?", a: "Yes, our mock test interface is a 1:1 precise replica of the TCS iON platform used by SSC, ensuring complete familiarity with navigation, marking schemes, and layout." },
  { q: "Are previous year questions (PYQs) included?", a: "Absolutely! Our PRO repository gives you access to 1000+ past year papers formatted as real mock tests, explicitly updated with recent shifts." },
  { q: "Do you provide short tricks for Quantitative Aptitude?", a: "Yes, our detailed text and video solutions strictly prioritize time-saving shortcuts and elimination methods over lengthy traditional approaches." },
  { q: "Are typing tests available for CHSL & CGL?", a: "Yes, our platform includes dedicated typing simulators measuring Keystrokes per minute and error tracking to match Tier 2 requirements." }
];

export default function SSCExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-[#E11D48]/30">
      
      {/* 1. HERO SECTION - Strategic, Fast, Performance Oriented (Crimson/Rose Theme) */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[85vh] w-full bg-white dark:bg-[#060D1A] border-b-[2px] border-slate-100 dark:border-slate-800 overflow-hidden z-10">
        
        {/* Dynamic Speed background elements */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
             style={{ backgroundImage: 'linear-gradient(90deg, #E11D48 1px, transparent 1px), linear-gradient(#E11D48 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>
        
        {/* Abstract "Speed Lines" SVG */}
        <svg className="absolute top-0 right-[5%] w-[40%] h-full text-[#E11D48]/10 -z-10 hidden lg:block" fill="none" viewBox="0 0 400 800" preserveAspectRatio="none">
            <path d="M100 0 L0 800 M200 0 L100 800 M300 0 L200 800 M400 0 L300 800" stroke="currentColor" strokeWidth="4" />
        </svg>

        {/* Large Decorative SVG Element (Timer/Target) */}
        <div className="absolute top-[15%] left-[10%] opacity-20 hidden xl:block spin-slow pointer-events-none">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="#E11D48" strokeWidth="2" strokeDasharray="5 5" />
                <circle cx="50" cy="50" r="30" stroke="#E11D48" strokeWidth="1" />
                <path d="M50 15 L50 50 L75 50" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-rose-50 dark:bg-[#E11D48]/10 text-[#E11D48] dark:text-[#FB7185] text-sm font-black tracking-widest uppercase mb-10 border-2 border-rose-200 dark:border-[#E11D48]/30 shadow-sm"
            >
              <Zap className="w-5 h-5 text-[#E11D48]" />
              <span>SSC Target Year 2024-25</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-[6.5rem] font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter uppercase"
            >
              Precision <br className="hidden md:block" />
              <span className="text-[#E11D48] relative inline-block">
                  Meets Speed
                  {/* Edgy Slash Underline */}
                  <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-4 text-[#E11D48]" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path fill="currentColor" d="M0,10 L100,5 L100,10 L0,15 Z" />
                  </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-semibold"
            >
              Conquer CGL, CHSL & MTS with the exact TCS iON simulated interface. Maximize attempts, eliminate errors, and dominate the timer.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
            >
              <Link href="#ssc-series" className="px-10 py-5 w-full sm:w-auto bg-[#E11D48] hover:bg-[#BE123C] text-white font-black text-lg transition-transform flex items-center justify-center gap-3 relative group rounded-xl shadow-[6px_6px_0px_#9F1239] active:translate-y-1 active:shadow-none hover:-translate-y-1">
                  Exploit The Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-10 py-5 w-full sm:w-auto bg-slate-100 dark:bg-slate-800 border-[2px] border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-lg hover:border-[#E11D48] hover:text-[#E11D48] transition-colors flex items-center justify-center rounded-xl shadow-sm">
                  Attempt Live Test
              </button>
            </motion.div>
        </div>
      </section>

      {/* Trust Scrolling Ticker - Hard Edge */}
      <section className="w-full bg-[#E11D48] py-5 overflow-hidden flex items-center relative z-10 border-y-4 border-[#BE123C]">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_30s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-24 px-4 md:px-8 items-center text-white font-black text-sm md:text-2xl uppercase tracking-[0.15em]">
             <span className="flex items-center gap-4"><MonitorSmartphone className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> TCS iON Replica UI</span>
             <span className="flex items-center gap-4"><Flame className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> Math Magic Tricks</span>
             <span className="flex items-center gap-4"><Archive className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> 1500+ PYQ Papers</span>
             <span className="flex items-center gap-4"><Clock className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> Speed Analytics</span>
             <span className="flex items-center gap-4"><MonitorSmartphone className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> TCS iON Replica UI</span>
             <span className="flex items-center gap-4"><Flame className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> Math Magic Tricks</span>
             <span className="flex items-center gap-4"><Archive className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> 1500+ PYQ Papers</span>
             <span className="flex items-center gap-4"><Clock className="w-6 h-6 md:w-8 md:h-8 opacity-80" /> Speed Analytics</span>
           </div>
        </div>
      </section>

      {/* 2. Target Exams (Precision Grid) */}
      <section id="ssc-series" className="py-24 md:py-32 bg-slate-50 dark:bg-[#0B1120] scroll-mt-20 relative border-b-[2px] border-slate-200 dark:border-slate-800">
        
        {/* Hardware-like Decor */}
        <div className="absolute top-20 right-10 w-2 h-20 bg-[#E11D48] hidden md:block rounded-full"></div>
        <div className="absolute top-48 right-10 w-2 h-10 bg-slate-300 dark:bg-slate-700 hidden md:block rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Deploy Your Target</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-semibold">Strict mock sets mirroring the exact difficulty fluctuations of recent SSC shifts.</p>
            </div>
            <div className="hidden md:flex gap-2 text-slate-400">
                <LayoutDashboard className="w-8 h-8" />
                <Compass className="w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 bg-white dark:bg-[#0F172A] border-[2px] border-slate-200 dark:border-slate-800 rounded-2xl hover:border-[#E11D48] dark:hover:border-[#E11D48] transition-all relative block shadow-sm hover:shadow-[8px_8px_0px_#E11D48]">
                
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-[#E11D48] text-white text-[11px] font-black px-4 py-2 uppercase tracking-widest rounded-bl-xl z-10">FLAGSHIP</span>
                )}
                
                <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#E11D48] mb-8 group-hover:bg-[#E11D48] group-hover:text-white transition-colors border-2 border-slate-200 dark:border-slate-700">
                  <exam.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{exam.name}</h3>
                <p className="text-base font-semibold text-slate-600 dark:text-slate-400 mb-8 min-h-[60px] leading-snug">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {exam.subjects.map((sub, idx) => (
                      <span key={idx} className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 border border-slate-200 dark:border-slate-700 uppercase tracking-wide rounded-md">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-[#E11D48] font-black tracking-wide uppercase text-sm group-hover:gap-2 transition-all">
                  Initialize <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section (Dash Board Style - High Contrast) */}
      <section className="py-24 md:py-32 bg-slate-900 dark:bg-[#060D1A] relative border-b-[2px] border-slate-800 shadow-xl overflow-hidden text-white">
         
         {/* Tech-grid background */}
         <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E11D48]/20 text-[#FDA4AF] text-sm font-black uppercase tracking-widest mb-8 border border-[#E11D48]/50 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                  <Target className="w-5 h-5" />
                  <span>Real-time Telemetry</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight uppercase">
                  SSC is purely a <br className="hidden md:block"/>
                  <span className="text-[#E11D48]">Game of Speed.</span>
               </h2>
               <p className="text-slate-400 text-xl font-medium mb-10 leading-relaxed max-w-xl">
                  Knowing the answer isn't enough; knowing it in under 36 seconds is. Our tracking engine isolates arithmetic time-sinks and identifies areas where you must apply shortcuts.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Clock, title: 'Time vs Accuracy Matrix', desc: 'Identify "time sinks" where you spend >2 minutes on a question and still get it wrong.' },
                   { icon: Target, title: 'Question Selection Strategy', desc: 'SSC requires skipping hard questions. Learn exactly which ones to bypass.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-[#E11D48]/10 p-4 border border-[#E11D48]/30 mt-1"><fp.icon className="w-6 h-6 text-[#E11D48]" /></div>
                     <div>
                       <h4 className="font-black text-2xl text-white mb-2">{fp.title}</h4>
                       <p className="text-slate-400 text-base font-semibold">{fp.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="flex-[1.2] w-full relative flex items-center justify-center py-10">
                {/* Advanced "Speed" Analytics Dashboard Panel */}
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="z-20 w-full bg-[#0F172A] border-[2px] border-slate-700 p-8 shadow-[15px_15px_0px_#E11D48]"
                >
                  <div className="flex items-center justify-between mb-10 pb-6 border-b-[2px] border-slate-700/50">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-[#E11D48]/10 border border-[#E11D48]/50 flex items-center justify-center">
                        <TrendingUp className="w-7 h-7 text-[#E11D48]" />
                      </div>
                      <div>
                        <h4 className="font-black text-white text-xl mb-1 uppercase tracking-wider">Metrics</h4>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">SSC CGL Tier-1 Demo</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-white text-4xl">142<span className="text-xl text-slate-500">/200</span></h4>
                      <p className="text-xs font-black text-emerald-500 mt-1 flex items-center gap-1 justify-end uppercase tracking-widest">
                        <CheckCircle2 className="w-3 h-3" /> Tier 1 Safe
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars with Speed Focus */}
                  <div className="space-y-8">
                    {[
                      { name: 'Quantitative Aptitude', score: 92, time: '38s/Q', color: 'bg-[#E11D48]' },
                      { name: 'General Intelligence', score: 96, time: '22s/Q', color: 'bg-emerald-500' },
                      { name: 'English Comprehension', score: 85, time: '18s/Q', color: 'bg-blue-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-end text-sm font-black text-slate-300 mb-2 uppercase tracking-wide">
                          <span>{sub.name} <span className="text-slate-500 font-bold ml-2 hidden sm:inline-block">({sub.time})</span></span>
                          <span>{sub.score}% Acc</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 overflow-hidden relative border border-slate-700">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${sub.score}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: "easeOut" }}
                            className={`absolute top-0 left-0 h-full ${sub.color}`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Overlaid Speed Notification Pill */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-6 -left-6 bg-slate-800 border-[2px] border-emerald-500 px-6 py-3 shadow-xl flex items-center gap-3 z-30"
                  >
                     <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                     <span className="text-sm font-black text-white uppercase tracking-widest">Overall Avg: 26s / Question</span>
                  </motion.div>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings (Precision Boxes) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
         <div className="text-left md:text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-black tracking-widest uppercase mb-6 border-2 border-slate-200 dark:border-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
            <span>Tactical Advantage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight uppercase">Why ExamBoost PRO Pass?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-semibold">
            One singular subscription equipping you with the ultimate arsenal to conquer central government examinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MonitorSmartphone, title: 'TCS iON Replica', desc: 'Exact duplication of the physical test center UI. No surprises on D-Day.' },
            { icon: Archive, title: 'PYQ Vault', desc: '1400+ authentic previous year papers from 2018-2023 set as mocks.' },
            { icon: Flame, title: 'Shortcut Solutions', desc: 'Every math solution explicitly includes an alternative rapid trick.' },
            { icon: BookOpen, title: 'Tier 2 Ready', desc: 'Seamlessly transition to Mains with integrated typing and computer modules.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-[#0F172A] border-[2px] border-slate-200 dark:border-slate-800 p-8 hover:border-[#E11D48]/80 transition-all hover:-translate-y-2 group shadow-sm">
               <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 border-[2px] border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#E11D48] mb-8 group-hover:bg-[#E11D48] group-hover:text-white transition-colors">
                 <feature.icon className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase">{feature.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 font-semibold text-base leading-relaxed">
                 {feature.desc}
               </p>
             </div>
          ))}
        </div>
      </section>

      {/* 5. Free Mock Tests - Aggressive Card */}
      <section className="py-24 bg-slate-100 dark:bg-[#060D1A] border-y-[2px] border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#E11D48] border-b-[8px] border-[#BE123C] p-10 md:p-16 text-white relative flex flex-col xl:flex-row gap-12 xl:gap-16 items-center shadow-xl">
            
            {/* Caution tape styled stripes bg */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>

            <div className="flex-1 text-center xl:text-left relative z-20">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight">Enter The <br/>Proving Ground.</h2>
              <p className="text-rose-100 text-xl font-semibold mb-10 max-w-lg mx-auto xl:mx-0 leading-relaxed">
                Test your raw speed. Access a live Tier-1 simulator entirely free to establish your baseline latency.
              </p>
              <button className="bg-slate-900 text-white px-10 py-5 font-black transition-transform w-full sm:w-auto hover:bg-black flex items-center justify-center gap-3 uppercase tracking-widest shadow-[6px_6px_0px_#FFF] active:translate-y-1 active:shadow-none hover:-translate-y-1 group">
                Deploy Simulator <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex-[1.2] w-full flex flex-col gap-4 relative z-20">
              {freeTests.map((test, idx) => (
                <div key={idx} className="bg-slate-900/60 backdrop-blur-md border-[2px] border-black/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-white transition-colors">
                  <div>
                    <h4 className="font-black text-white text-lg mb-3 tracking-wide">{test.name}</h4>
                    <div className="flex items-center gap-4 text-sm font-bold text-rose-200 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {test.t} Min</span>
                    </div>
                  </div>
                  <button className="text-sm font-black text-[#E11D48] uppercase tracking-widest bg-white hover:bg-slate-200 px-6 py-4 flex items-center justify-center gap-3 shrink-0 shadow-md hover:-translate-y-1 transition-transform">
                     Execute <PlayCircle className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Reviews (Authoritative Wall) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-[#E11D48]/10 text-[#E11D48] text-sm font-black tracking-widest uppercase mb-6 border-2 border-rose-200 dark:border-[#E11D48]/30">
            <Award className="w-4 h-4 text-[#E11D48]" />
            <span>Success Roster</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Verified Achievers</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-semibold">Thousands have secured reputed government ministries utilizing our platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#0F172A] border-[2px] border-slate-200 dark:border-slate-800 p-8 flex flex-col gap-8 shadow-sm scale-100 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#E11D48] transition-all duration-300 relative group">
              <div className="absolute top-0 right-8 w-8 h-12 bg-[#E11D48] opacity-0 group-hover:opacity-100 transition-opacity -mt-2 skew-x-12"></div>
              <div className="flex text-[#E11D48] gap-1 relative z-10">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-bold leading-relaxed flex-grow relative z-10">
                "{r.text}"
              </p>
              <div className="mt-auto pt-6 border-t-[2px] border-slate-100 dark:border-slate-800 flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border-[2px] border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-2xl group-hover:bg-[#E11D48] group-hover:text-white group-hover:border-[#E11D48] transition-colors shadow-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-lg text-slate-900 dark:text-white mb-1 uppercase tracking-tight">{r.name}</h4>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B1120] border-t-[2px] border-slate-200 dark:border-slate-800/80 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Direct Access FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0F172A] border-[2px] border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-[#E11D48] transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between font-black text-lg md:text-xl text-slate-900 dark:text-white hover:text-[#E11D48] transition-colors"
                >
                  <span className="pr-6 uppercase tracking-tight">{faq.q}</span>
                  <div className={`w-12 h-12 flex items-center justify-center shrink-0 border-[2px] transition-all duration-300 ${openFaq === idx ? 'bg-[#E11D48] text-white border-transparent rotate-180 shadow-md' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 font-semibold text-lg leading-relaxed border-t-[2px] border-slate-100 dark:border-slate-800 pt-6 mt-2 mx-2">
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
