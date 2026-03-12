"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Shield, ShieldAlert, Crosshair, Map, MonitorSmartphone, Layers
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
  { name: 'UP Police Constable OMR Simulation', q: 150, t: 120, level: 'Advanced' },
  { name: 'Delhi Police Computer Knowledge', q: 50, t: 30, level: 'Crucial' },
  { name: 'UP SI Mool Vidhi & Constitution', q: 40, t: 30, level: 'Moderate' }
];

const reviews = [
  { name: 'Rohan Chaudhary', exam: 'UP Police Selected', rating: 5, text: 'The mock tests exactly matched the offline OMR level. Their Mental Aptitude section is incredibly relevant and literally saved my reasoning score.' },
  { name: 'Shreya Tiwary', exam: 'Delhi Police Constable', rating: 5, text: 'Computer questions in the DP mock tests are perfectly aligned with SSC TCS pattern. The AI analytics showed me I was losing marks in Excel formulas.' },
  { name: 'Alok Singh', exam: 'UP SI Selected', rating: 5, text: 'Mool Vidhi (Law) and Constitution questions are very deep and conceptual. ExamBoost is the only platform that gets the Daroga-level law difficulty right.' },
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Indigo/Sky/Blue Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-sm font-semibold mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800 backdrop-blur-sm"
        >
          <ShieldAlert className="w-4 h-4 animate-pulse" />
          <span>India's #1 Police Recruitment Test Platform</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Wear the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-400">Khaki Uniform</span><br className="hidden md:block"/>
          With Pride & Practice
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Crack UP Police, Delhi Police & State SI exams. Master the mental aptitude sections, Basic Law (Mool Vidhi), and exact TCS Computer modules.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Choose Your Exam <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free Mock Test
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-slate-900 py-4 md:py-5 overflow-hidden border-y border-slate-800 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-indigo-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-sky-400" /> Offline OMR Pattern</span>
             <span className="flex items-center gap-3"><Shield className="w-6 h-6 text-sky-400" /> SI Level Mool Vidhi</span>
             <span className="flex items-center gap-3"><Layers className="w-6 h-6 text-sky-400" /> Mental Aptitude Cases</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-sky-400" /> 2 Lakh+ Constables</span>
             <span className="flex items-center gap-3"><Map className="w-6 h-6 text-sky-400" /> UP/Delhi State GK</span>
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-sky-400" /> Offline OMR Pattern</span>
             <span className="flex items-center gap-3"><Shield className="w-6 h-6 text-sky-400" /> SI Level Mool Vidhi</span>
             <span className="flex items-center gap-3"><Layers className="w-6 h-6 text-sky-400" /> Mental Aptitude Cases</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-sky-400" /> 2 Lakh+ Constables</span>
             <span className="flex items-center gap-3"><Map className="w-6 h-6 text-sky-400" /> UP/Delhi State GK</span>
           </div>
        </div>
         <style dangerouslySetInnerHTML={{__html: `
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
      </section>

      {/* 2. Target Exams Grid */}
      <section id="test-series" className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Target Uniform</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored precisely to state and central police notifications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-sky-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-900/40 text-indigo-300 text-sm font-semibold mb-6 border border-indigo-800">
                  <BarChart className="w-4 h-4" />
                  <span>Mental Aptitude Micro-Analysis</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  A Uniform Requires <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Perfect Instincts.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Police exams uniquely test your psychological and ethical reasoning. Our AI dashboard isolates logic errors in Situation Reaction Tests (SRT) and Basic Law cases.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Layers, title: 'Situation Reaction Accuracy', desc: 'Identify systematic thinking errors in crowded situation / riot control reasoning scenarios.' },
                   { icon: Shield, title: 'Mool Vidhi Error Tracking', desc: 'Find out specifically which IPC/CRPC sections or Constitutional articles you get wrong.' },
                   { icon: Zap, title: 'Negative Marking Analysis', desc: 'State police written exams penalize heavily for guesswork. Track your exact accuracy ratio.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-indigo-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-sky-400" /></div>
                     <div>
                       <h4 className="font-bold text-lg text-white mb-1">{fp.title}</h4>
                       <p className="text-slate-400 text-sm">{fp.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="flex-1 w-full max-w-lg aspect-square relative flex items-center justify-center">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute z-20 w-full md:w-[90%] bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <Activity className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Score Breakdown</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">UP Police Const. Set-04</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-sky-400 text-2xl tracking-tight">210/300</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Cut-off Cleared
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'General Hindi', score: 85, color: 'bg-indigo-500' },
                      { name: 'Mental Aptitude / IQ', score: 62, color: 'bg-rose-500' },
                      { name: 'Numerical Ability', score: 90, color: 'bg-sky-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-bold text-slate-300 mb-2">
                          <span>{sub.name}</span>
                          <span>{sub.score}% Accuracy</span>
                        </div>
                        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${sub.score}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: "easeOut" }}
                            className={`h-full ${sub.color} rounded-full`} 
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
                  className="absolute z-30 top-0 left-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-5 py-2.5 flex items-center gap-3 -translate-y-4 -translate-x-4 md:-translate-x-12"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Focus: Mental Aptitude</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>State Police Specialization</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost Master Pass?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A standard generic test series won't cover state-level variations. We build highly targeted modules for Constables & SIs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Map, title: 'Regional Gen-Knowledge', desc: 'Heavy injection of UP/Delhi/Bihar specific historical and geographical data in mocks.' },
            { icon: BookOpen, title: 'Grammar Heavy Hindi', desc: 'Master Vyakaran, Sandhi, Samas and Literature which forms 25%+ of state police tests.' },
            { icon: Shield, title: 'Constitutional Law', desc: 'Precise difficulty scaling on Articles, Amendments, and Basic Laws for Daroga Aspirants.' },
            { icon: MonitorSmartphone, title: 'Computer Formats', desc: 'Exact TCS framework for Delhi Police 10-mark MS Office and networking questions.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-indigo-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                 <feature.icon className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
               <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                 {feature.desc}
               </p>
             </div>
          ))}
        </div>
      </section>

      {/* 5. Free Mock Tests */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-700 to-sky-700 rounded-[2rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Try Before You Commit</h2>
                <p className="text-indigo-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience the interface, the difficulty of Mental Aptitude cases, and the deep AI analytics with our free premium mocks.
                </p>
                <button className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-slate-100 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/20 transition-colors">
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-sky-100">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-indigo-900 bg-white hover:bg-slate-100 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0">
                       Attempt <PlayCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Reviews */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Inspiring Selections</h2>
          <p className="text-slate-600 dark:text-slate-400">Thousands have donned the Khaki after training their written mechanics with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl flex flex-col gap-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex text-amber-500 gap-1">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed flex-grow italic">
                "{r.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
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
