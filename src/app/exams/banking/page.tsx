"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, CheckCircle2, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Briefcase, GraduationCap, LayoutDashboard, MonitorSmartphone, Landmark,
  LineChart, PiggyBank, Calculator
} from 'lucide-react';

const popularExams = [
  {
    name: 'IBPS PO',
    fullName: 'Probationary Officer',
    desc: 'The gateway to becoming an officer in major public sector banks.',
    tests: 120,
    pattern: 'Prelims & Mains',
    subjects: ['Quant', 'Reasoning', 'English', 'GA'],
    href: '/exams/banking/ibps-po',
    icon: Landmark,
    popular: true
  },
  {
    name: 'SBI PO',
    fullName: 'State Bank of India PO',
    desc: 'The most prestigious and highly competitive banking exam in India.',
    tests: 100,
    pattern: 'Prelims, Mains, Interview',
    subjects: ['Data Analysis', 'English', 'Reasoning'],
    href: '/exams/banking/sbi-po',
    icon: Briefcase
  },
  {
    name: 'RBI Grade B',
    fullName: 'Reserve Bank of India',
    desc: 'Entry level officer post in the central bank. Focus on ESI and FM.',
    tests: 60,
    pattern: 'Phase 1 & Phase 2',
    subjects: ['Gen Awareness', 'ESI', 'Finance'],
    href: '#',
    icon: PiggyBank
  },
  {
    name: 'IBPS Clerk',
    fullName: 'Clerical Cadre',
    desc: 'Recruitment for clerical posts across various participating banks.',
    tests: 150,
    pattern: 'Prelims & Mains',
    subjects: ['Quant', 'Reasoning', 'English', 'GA'],
    href: '/exams/banking/ibps-clerk',
    icon: Calculator
  }
];

const freeTests = [
  { name: 'SBI PO Prelims All-India Live Mock', q: 100, t: 60, level: 'Advanced' },
  { name: 'IBPS Data Interpretation Sectional', q: 35, t: 20, level: 'Moderate' },
  { name: 'Banking Awareness Booster', q: 40, t: 15, level: 'Easy' }
];

const reviews = [
  { name: 'Aditi Verma', exam: 'SBI PO Selected', rating: 5, text: 'ExamBoost puzzles and DIs are an exact replica of the real SBI PO Mains level. It helped me build immense confidence and clear the exam in my first attempt.' },
  { name: 'Prateek Jain', exam: 'IBPS Clerk', rating: 5, text: 'The strict 20-minute sectional timer format in the mocks prepared me perfectly for the real IBPS preliminary exam pressure. Their AI analysis is flawless.' },
  { name: 'Nisha Gupta', exam: 'RBI Grade B Officer', rating: 5, text: 'Phase 2 mock tests and descriptive English guidance were phenomenal. The current affairs and financial coverage is top notch compared to others.' },
];

const faqs = [
  { q: "Do the mock tests follow the sectional timing precisely?", a: "Yes, our mock test interface strictly enforces the 20-minute sectional timers for Prelims just like the real IBPS and SBI exams." },
  { q: "Are the Mains level puzzles and DIs updated?", a: "Absolutely! Our team constantly updates the Mains mock tests with the newest, most complex logical variable-based puzzles seen in recent SBI/IBPS Mains." },
  { q: "Is there guidance for the descriptive paper?", a: "Yes, our Infinity Pass includes evaluated descriptive mocks for English writing, which is crucial for SBI PO and IBPS PO Mains." },
  { q: "Are the tests available in Hindi?", a: "Yes, our platform is fully bilingual. You can toggle between English and Hindi during the test in real-time." }
];

export default function BankingExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Sky/Blue/Cyan Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-semibold mb-6 shadow-sm border border-blue-200 dark:border-blue-800 backdrop-blur-sm"
        >
          <Landmark className="w-4 h-4 animate-pulse" />
          <span>India's Most Trusted Banking Prep Platform</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Clear <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-cyan-400">Bank PO & Clerk</span> <br className="hidden md:block"/>
          in Your First Attempt
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Beat the sectional cut-offs with ExamBoost mock tests for IBPS, SBI, and RBI. Experience the precise exam UI and master complex Mains puzzles.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore Infinity Pass <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free Mock Test
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-slate-900 py-4 md:py-5 overflow-hidden border-y border-slate-800 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-blue-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><Clock className="w-6 h-6 text-sky-400" /> Strict Sectional Timers</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-sky-400" /> Exact Mains Level DIs</span>
             <span className="flex items-center gap-3"><Activity className="w-6 h-6 text-sky-400" /> Percentile Analysis</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-sky-400" /> 3 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-sky-400" /> IBPS Exam Interface</span>
             <span className="flex items-center gap-3"><Clock className="w-6 h-6 text-sky-400" /> Strict Sectional Timers</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-sky-400" /> Exact Mains Level DIs</span>
             <span className="flex items-center gap-3"><Activity className="w-6 h-6 text-sky-400" /> Percentile Analysis</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-sky-400" /> 3 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-sky-400" /> IBPS Exam Interface</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Target Exam</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored to exactly replicate the real IBPS and SBI examinations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all">
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
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/40 text-blue-300 text-sm font-semibold mb-6 border border-blue-800">
                  <BarChart className="w-4 h-4" />
                  <span>Sectional Precision Analytics</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Because Banking is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Game of Cut-offs.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Scoring high in Quant doesn't matter if you miss the Reasoning cut-off. Our AI dashboard precisely tracks your sectional performance against thousands of real aspirants.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Target, title: 'Percentile Tracking', desc: 'Know exactly where you stand. We compare your scores against real toppers, not just averages.' },
                   { icon: Activity, title: 'Variable Puzzle Mastery', desc: 'Identify which complex puzzles (Floor, Box, Circular) drain your time during Mains.' },
                   { icon: Zap, title: 'Question Skip Strategy', desc: 'Learn which time-consuming DIs to skip to maximize attempts within the 20-minute limit.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-blue-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-sky-400" /></div>
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
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <LineChart className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Sectional Percentile</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">SBI PO Prelims Mock 04</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-sky-400 text-2xl tracking-tight">98.4%ile</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Cut-off Cleared
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'Quantitative Aptitude', score: 92, color: 'bg-blue-500' },
                      { name: 'Reasoning Ability', score: 97, color: 'bg-cyan-500' },
                      { name: 'English Language', score: 84, color: 'bg-sky-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-bold text-slate-300 mb-2">
                          <span>{sub.name}</span>
                          <span>{sub.score} %ile</span>
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Rank: 24 / 45,000</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Premium IBPS Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost Infinity Pass?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A single subscription giving you the ultimate arsenal to conquer any Banking examination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MonitorSmartphone, title: 'Real IBPS UI', desc: 'Exact replica of the digital interface used physically in banking test centers.' },
            { icon: LayoutDashboard, title: 'Mains Puzzles & DI', desc: 'High-level, multi-variable logic puzzles matching exact SBI PO Mains standards.' },
            { icon: Zap, title: 'Trick Solutions', desc: 'Alternative short-cut methods provided for simplification & number series.' },
            { icon: FileText, title: 'Descriptive Paper', desc: 'Auto-evaluated mocks for English letter and essay writing modules.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
          <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] p-8 md:p-14 shadow-2xl border border-slate-800 dark:border-slate-200 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Try Before You Commit</h2>
                <p className="text-slate-300 dark:text-slate-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience the interface, the harsh sectional timers, and the deep AI analytics with our free premium mocks.
                </p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-blue-700 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-slate-800 dark:bg-slate-50 border border-slate-700 dark:border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-50 dark:text-slate-900 text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-slate-400 dark:text-slate-500">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-slate-900 dark:text-blue-700 bg-white hover:bg-slate-100 dark:bg-white border border-transparent dark:border-slate-200 dark:hover:border-blue-600 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0 shadow-sm">
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
          <p className="text-slate-600 dark:text-slate-400">Thousands have secured prestigious posts in nationalized banks.</p>
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
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{r.exam}</p>
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
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
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
