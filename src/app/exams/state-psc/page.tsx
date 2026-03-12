"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  MapPin, Landmark, ScrollText, Globe, LayoutDashboard, Compass
} from 'lucide-react';

const popularExams = [
  {
    name: 'UPPSC PCS',
    fullName: 'Uttar Pradesh Public Service Commission',
    desc: 'The most prestigious state administrative exam with heavy UP-GK weightage.',
    tests: 110,
    pattern: 'Prelims, Mains & Interview',
    subjects: ['General Studies', 'UP Special', 'CSAT'],
    href: '/exams/state-psc/uppsc-pcs',
    icon: Landmark,
    popular: true
  },
  {
    name: 'BPSC (Bihar)',
    fullName: 'Bihar Public Service Commission',
    desc: 'Recruitment for key administrative posts in Bihar with extensive historical focus.',
    tests: 95,
    pattern: 'Prelims, Mains & Interview',
    subjects: ['History', 'Bihar Special', 'Current Affairs'],
    href: '/exams/state-psc/bpsc',
    icon: ScrollText
  },
  {
    name: 'MPSC',
    fullName: 'Maharashtra Public Service Commission',
    desc: 'Highly competitive exam for Maharashtra State Services.',
    tests: 80,
    pattern: 'Prelims, Mains & Interview',
    subjects: ['History of MH', 'Geography', 'Polity'],
    href: '/exams/state-psc/mpsc',
    icon: MapPin
  },
  {
    name: 'RPSC RAS',
    fullName: 'Rajasthan Administrative Service',
    desc: 'The top administrative exam of Rajasthan with a vast dynamic syllabus.',
    tests: 85,
    pattern: 'Prelims, Mains & Interview',
    subjects: ['Rajasthan Art & Culture', 'Science', 'Economy'],
    href: '/exams/state-psc/rpsc-ras',
    icon: Compass
  }
];

const freeTests = [
  { name: 'UPPSC PCS Prelims All-India Live Mock', q: 150, t: 120, level: 'Advanced' },
  { name: 'BPSC Bihar Specific History Sectional', q: 50, t: 30, level: 'Moderate' },
  { name: 'State Current Affairs Booster', q: 40, t: 20, level: 'Crucial' }
];

const reviews = [
  { name: 'Sanjay Rajput', exam: 'UPPSC SDM', rating: 5, text: 'The state-specific GK and UP budget questions in ExamBoost mocks matched the exact tone and difficulty of the real exam. Their detailed solution PDFs are gold for revision.' },
  { name: 'Megha Singh', exam: 'BPSC Selected Officer', rating: 5, text: 'ExamBoost helped me cover the vast BPSC syllabus systematically. The new AI analytics dashboard showed exactly where I was weak in Bihar Special Geography.' },
  { name: 'Kirti Jha', exam: 'RPSC RAS Top Ranker', rating: 5, text: 'The Mains answer writing evaluation and descriptive mock tests prepared me to handle the actual pressure perfectly. Their feedback is brutally honest and highly actionable.' },
];

const faqs = [
  { q: "Is State Special GK covered extensively in the mock tests?", a: "Yes. General Studies is incomplete without State-specific knowledge. We dedicate a heavy percentage of questions solely to the respective state's history, geography, and current budget." },
  { q: "Are the Mains descriptive papers evaluated manually?", a: "Yes, our 'Mains Ready' Ultimate Pass includes manual evaluation of your subjective answer sheets by experts who have previously cleared the PSC mains." },
  { q: "Do the tests align with recent syllabus changes?", a: "Absolutely. Whether it's the removal of optional subjects in UPPSC or the changing pattern of BPSC, our test series is updated within weeks of official notifications." },
  { q: "Can I attempt the tests in regional languages?", a: "Yes, we fully support bilingual testing. You can switch between English and Hindi. For specific states, we are also actively rolling out Bengali and Marathi support." }
];

export default function StatePSCExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Teal/Emerald Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-green-400/20 dark:bg-green-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-sm font-semibold mb-6 shadow-sm border border-teal-200 dark:border-teal-800 backdrop-blur-sm"
        >
          <Compass className="w-4 h-4 animate-pulse" />
          <span>India's Most Focused State PSC Platform</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Rule Your Home State's <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400">Administrative Services</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Master highly localized and dynamic syllabuses for UPPSC, BPSC, MPSC, and RPSC. Experience AI-driven analytics that pinpoint your exact weaknesses.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Choose Your State <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free Mock Test
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-slate-900 py-4 md:py-5 overflow-hidden border-y border-slate-800 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-teal-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><Globe className="w-6 h-6 text-emerald-400" /> State-Specific GK Focus</span>
             <span className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-400" /> Manual Mains Checking</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-emerald-400" /> Latest Govt Budgets</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-emerald-400" /> 2 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-emerald-400" /> CSAT Modules</span>
             <span className="flex items-center gap-3"><Globe className="w-6 h-6 text-emerald-400" /> State-Specific GK Focus</span>
             <span className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-400" /> Manual Mains Checking</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-emerald-400" /> Latest Govt Budgets</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-emerald-400" /> 2 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-emerald-400" /> CSAT Modules</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Target State PSC</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored to accurately replicate different regional notifications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-teal-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-teal-600 dark:text-teal-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-teal-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/40 text-teal-300 text-sm font-semibold mb-6 border border-teal-800">
                  <BarChart className="w-4 h-4" />
                  <span>Deep Subject Analytics</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Because General Studies is <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Deep & Vast.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  You can't memorize everything. Our AI dashboard isolates precisely which micro-topics (e.g., Medieval History vs Modern India) you are losing the most marks in.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Globe, title: 'State GK Micro-tracking', desc: 'Identify whether you are weak in State Geography, Local Arts, or State Government Schemes.' },
                   { icon: Target, title: 'CSAT Competitor Benchmark', desc: 'Compare your CSAT (Aptitude) scores to ensure you comfortably clear the qualifying threshold.' },
                   { icon: Activity, title: 'Current Affairs Timeline', desc: 'Track your accuracy in timeline-based questions, separating recent vs older current events.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-teal-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-teal-400" /></div>
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
                      <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                        <LayoutDashboard className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Concept Mastery</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">UPPSC GS Paper-1 Mock</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-teal-400 text-2xl tracking-tight">105/150</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Cut-off Cleared
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'Polity & Governance', score: 94, color: 'bg-teal-500' },
                      { name: 'UP Special GK', score: 72, color: 'bg-emerald-500' },
                      { name: 'Modern History', score: 88, color: 'bg-green-500' },
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
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Warning: UP-GK is Weak</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>State Specialized Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost Ultimate Pass?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A generic test series will fail you in State exams. Our tests are uniquely crafted by regional experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Globe, title: 'Regional Focus', desc: 'Weightage correctly heavily skewed towards local history, budget, and culture.' },
            { icon: BookOpen, title: 'In-Depth Solutions', desc: 'Not just answers. Every solution is a miniature revision note covering all 4 options.' },
            { icon: Target, title: 'CSAT Coverage', desc: 'Specialized Aptitude/Hindi tests ensuring you do not fail the tricky qualifying papers.' },
            { icon: FileText, title: 'Mains Evaluation', desc: 'Subjective answer copy checking by previously selected candidates & esteemed faculty.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/20 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
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
                  Experience the interface, the local-GK focus, and the deep AI analytics with our free premium mocks.
                </p>
                <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-teal-700 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-slate-800 dark:bg-slate-50 border border-slate-700 dark:border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-50 dark:text-slate-900 text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-slate-400 dark:text-slate-500">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-slate-900 dark:text-teal-700 bg-white hover:bg-slate-100 dark:bg-white border border-transparent dark:border-slate-200 dark:hover:border-teal-600 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0 shadow-sm">
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
          <p className="text-slate-600 dark:text-slate-400">Hear from aspirants who successfully fetched administrative posts in their home states.</p>
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
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">{r.exam}</p>
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
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-teal-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
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
