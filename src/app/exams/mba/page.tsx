"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Briefcase, TrendingUp, PieChart, BrainCircuit, LayoutDashboard, Compass
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
    desc: '純 speed-based test for SIBM Pune. Requires lightning-fast analytical geometry.',
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Fuchsia/Pink/Purple Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-fuchsia-400/20 dark:bg-fuchsia-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-semibold mb-6 shadow-sm border border-fuchsia-200 dark:border-fuchsia-800 backdrop-blur-sm"
        >
          <Briefcase className="w-4 h-4 animate-pulse" />
          <span>India's Most Analytically Rigorous MBA Mocks</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Target the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500 dark:from-fuchsia-400 dark:to-pink-400">99.99th Percentile</span><br className="hidden md:block"/>
          in CAT & OMETs
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Crack IIMs and XLRI with exact exam-level DILR sets, AI-driven attempt optimization algorithms, and normalized percentile predictions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(217,70,239,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            View Pricing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free CAT Mock
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-slate-900 py-4 md:py-5 overflow-hidden border-y border-slate-800 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-fuchsia-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><BrainCircuit className="w-6 h-6 text-pink-400" /> Adaptive GMAC Engine</span>
             <span className="flex items-center gap-3"><PieChart className="w-6 h-6 text-pink-400" /> DILR Selection AI</span>
             <span className="flex items-center gap-3"><Briefcase className="w-6 h-6 text-pink-400" /> XAT Decision Making</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-pink-400" /> 40,000+ Aspirants</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-pink-400" /> Normalized Percentiles</span>
             <span className="flex items-center gap-3"><BrainCircuit className="w-6 h-6 text-pink-400" /> Adaptive GMAC Engine</span>
             <span className="flex items-center gap-3"><PieChart className="w-6 h-6 text-pink-400" /> DILR Selection AI</span>
             <span className="flex items-center gap-3"><Briefcase className="w-6 h-6 text-pink-400" /> XAT Decision Making</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-pink-400" /> 40,000+ Aspirants</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-pink-400" /> Normalized Percentiles</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Target Your Dream B-School</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mocks tailored specifically to the diverse patterns of CAT and OMETs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-fuchsia-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-fuchsia-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-fuchsia-600 dark:text-fuchsia-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-pink-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-fuchsia-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-900/40 text-fuchsia-300 text-sm font-semibold mb-6 border border-fuchsia-800">
                  <BarChart className="w-4 h-4" />
                  <span>Percentile Prediction Ecosystem</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Because CAT is a Game of <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Selecting and Skipping.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  In CAT, avoiding ego-battles with tough DILR sets is more important than solving them. Our AI dashboard isolates precisely where you wasted critical time on dead-end questions.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: BrainCircuit, title: 'Set Selection Analytics', desc: 'Identify if you are picking the "Trap Sets" in DILR instead of the hidden easy ones.' },
                   { icon: Target, title: 'Normalized Percentile', desc: 'Raw score means nothing. We calculate your exact percentile against thousands of active users.' },
                   { icon: Zap, title: 'Attempt vs Accuracy Matrix', desc: 'Visualize your sweet spot—should you attempt 15 questions with 90% accuracy, or 20 at 75%?' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-fuchsia-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-pink-400" /></div>
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
                      <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center border border-fuchsia-500/30">
                        <LayoutDashboard className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">CAT 2026 Analysis</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">All-India Mock 04</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-pink-400 text-2xl tracking-tight">99.1%ile</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> BLACKI Shortlist
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'VARC (Verbal)', score: 98, color: 'bg-fuchsia-500' },
                      { name: 'DILR (Logical)', score: 72, color: 'bg-rose-500' },
                      { name: 'QA (Quant)', score: 91, color: 'bg-pink-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-bold text-slate-300 mb-2">
                          <span>{sub.name}</span>
                          <span>{sub.score}%ile Rank</span>
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
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Feedback: Avoid DILR Set 3</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>IIM Level Calibration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost B-School Pass?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Traditional quant and verbal isn't enough. We train you precisely on the changing Meta of MBA exams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: PieChart, title: 'Original DILR Assets', desc: 'No recycled questions. Every set is uniquely crafted to match the exact grueling ambiguity of recent CAT papers.' },
            { icon: Compass, title: 'XAT Ethical Caselets', desc: 'Decision Making modules focused intensely on stakeholder-maximization principles used by XLRI evaluators.' },
            { icon: BrainCircuit, title: 'Adaptive NMAT Algorithm', desc: 'Our engine reacts to your correct and incorrect clicks dynamically, altering the difficulty curve mid-mock.' },
            { icon: TrendingUp, title: 'SNAP Speed Modifiers', desc: 'Shortened, high-intensity 60-minute burst mocks focusing exclusively on analytical grammar and speed math.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-fuchsia-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-2xl flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 mb-6 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
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
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Test Your Strategy</h2>
                <p className="text-slate-300 dark:text-slate-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience the interface, the unforgiving DILR difficulty, and the AI analytics with our free premium diagnostics.
                </p>
                <button className="bg-fuchsia-600 text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-fuchsia-700 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-slate-800 dark:bg-slate-50 border border-slate-700 dark:border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-fuchsia-500/50 dark:hover:border-fuchsia-500/50 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-50 dark:text-slate-900 text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-slate-400 dark:text-slate-500">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-slate-900 dark:text-fuchsia-700 bg-white hover:bg-slate-100 dark:bg-white border border-transparent dark:border-slate-200 dark:hover:border-fuchsia-600 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0 shadow-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">The Top 1% Club</h2>
          <p className="text-slate-600 dark:text-slate-400">Hear from aspirants who utilized our AI metrics to convert core BLACKI calls.</p>
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
                <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center text-fuchsia-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">{r.exam}</p>
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
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-fuchsia-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
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
