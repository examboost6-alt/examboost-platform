"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Scale, BookMarked, Quote, BookType, LayoutDashboard, ScrollText
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Amber/Yellow/Orange Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-yellow-400/20 dark:bg-yellow-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-6 shadow-sm border border-amber-200 dark:border-amber-800 backdrop-blur-sm"
        >
          <Scale className="w-4 h-4 animate-pulse" />
          <span>India's Most Rigorous Law Mock Platform</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Secure Your Seat at a <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-400 dark:to-yellow-400">Top National Law University</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Master the new passage-heavy CLAT pattern. Build extreme reading stamina, decipher complex legal maxims, and track your WPM with exact exam-level difficulty.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore Elite Pass <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free Legal Mock
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-slate-900 py-4 md:py-5 overflow-hidden border-y border-slate-800 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-amber-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><Quote className="w-6 h-6 text-yellow-400" /> New CLAT Pattern</span>
             <span className="flex items-center gap-3"><Clock className="w-6 h-6 text-yellow-400" /> Reading Speed Metrics</span>
             <span className="flex items-center gap-3"><Scale className="w-6 h-6 text-yellow-400" /> Advanced Legal Reasoning</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-yellow-400" /> 50,000+ Aspirants</span>
             <span className="flex items-center gap-3"><BookType className="w-6 h-6 text-yellow-400" /> The Hindu Editorials</span>
             <span className="flex items-center gap-3"><Quote className="w-6 h-6 text-yellow-400" /> New CLAT Pattern</span>
             <span className="flex items-center gap-3"><Clock className="w-6 h-6 text-yellow-400" /> Reading Speed Metrics</span>
             <span className="flex items-center gap-3"><Scale className="w-6 h-6 text-yellow-400" /> Advanced Legal Reasoning</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-yellow-400" /> 50,000+ Aspirants</span>
             <span className="flex items-center gap-3"><BookType className="w-6 h-6 text-yellow-400" /> The Hindu Editorials</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Target NLU Exam</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mocks tailored precisely to the radically different patterns of CLAT, AILET, and LSAT.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-amber-600 dark:text-amber-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-yellow-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-amber-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/40 text-amber-300 text-sm font-semibold mb-6 border border-amber-800">
                  <BarChart className="w-4 h-4" />
                  <span>Reading Speed Diagnostics</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Law Entrances Test <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">How Fast You Read.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  CLAT requires you to read and process roughly 24,000 words in 120 minutes. Our AI tracks whether you're losing marks due to lack of knowledge, or pure reading fatigue.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Quote, title: 'WPM (Words Per Minute) Tracking', desc: 'Identify your exact reading speed on Legal vs English passages to optimize sectional timing.' },
                   { icon: Activity, title: 'Question Comprehension Error', desc: 'Find out if you are marking wrong answers because you did not comprehend the "Except" / "Not" directives.' },
                   { icon: Zap, title: 'Attempt Ratio Optimization', desc: 'Our AI calculates the perfect number of risks (guesses) you should take to maximize your final CLAT score.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-amber-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-yellow-400" /></div>
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
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                        <LayoutDashboard className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Pacing Metrics</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">CLAT Mock 24</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-yellow-400 text-2xl tracking-tight">88.5/120</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> NLU Safe Score
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'Legal Reasoning (WPM)', score: 92, color: 'bg-amber-500' },
                      { name: 'Reading Comprehension', score: 85, color: 'bg-yellow-500' },
                      { name: 'Logical Reasoning', score: 68, color: 'bg-orange-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-bold text-slate-300 mb-2">
                          <span>{sub.name}</span>
                          <span>{sub.score}% Efficiency</span>
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
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Warning: Low Logical Speed</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>CLAT/AILET Specialization</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost Elite Pass?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Traditional subject-wise study is obsolete for Law. We train you strictly on passage apprehension and deduction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: BookMarked, title: '100% Passage Based', desc: 'Every single question, except AILET specific logic, relies on complex editorial text.' },
            { icon: Scale, title: 'Case Law Memos', desc: 'Legal principles extracted directly from recent Supreme Court verdicts and major bills.' },
            { icon: BookOpen, title: 'The Hindu Derivations', desc: 'Current affairs and English passages sourced heavily from renowned newspapers.' },
            { icon: Activity, title: 'Stamina Building', desc: 'Tests designed dynamically to fatigue the student, exactly replicating the 2-hour exam toll.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
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
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-[2rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Try Before You Commit</h2>
                <p className="text-amber-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience the reading intensity, the passage density, and the deep AI analytics with our free premium mocks.
                </p>
                <button className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-slate-100 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/20 transition-colors">
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-yellow-100">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-amber-900 bg-white hover:bg-slate-100 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our NLU Achievers</h2>
          <p className="text-slate-600 dark:text-slate-400">Join thousands who bypassed the extreme reading fatigue on exact exam day.</p>
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
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">{r.exam}</p>
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
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-amber-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
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
