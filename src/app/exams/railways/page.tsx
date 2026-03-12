"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  TrainFront, Wrench, Activity as ActivityIcon, Orbit, LayoutDashboard, MonitorSmartphone
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
    desc: 'Specialized exam for running staff requiring technical aptitude and psycho tests.',
    tests: 100,
    pattern: 'CBT-1, CBT-2 & CBAT',
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
  { name: 'RRB Group D Science Sectional', q: 25, t: 15, level: 'Moderate' },
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Red/Rose Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-red-400/20 dark:bg-red-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-rose-400/20 dark:bg-rose-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 text-sm font-semibold mb-6 shadow-sm border border-red-200 dark:border-red-800 backdrop-blur-sm"
        >
          <TrainFront className="w-4 h-4 animate-pulse" />
          <span>India's Most Accurate Railway Mock Platform</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Board the Success Express to <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400">Indian Railways</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Clear NTPC, Group D, and ALP with ExamBoost mock tests. Practice with the exact RRB TCS interface and Master NCERT-level Science patterns.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(225,29,72,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore Master Pass <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free Mock Test
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-red-950 py-4 md:py-5 overflow-hidden border-y border-red-900 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-red-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-rose-400" /> Exact TCS CBT Interface</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-rose-400" /> NCERT General Science</span>
             <span className="flex items-center gap-3"><ActivityIcon className="w-6 h-6 text-rose-400" /> CBAT Psycho Tests</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-rose-400" /> 1 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><Wrench className="w-6 h-6 text-rose-400" /> Trade Specific Mocks</span>
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-rose-400" /> Exact TCS CBT Interface</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-rose-400" /> NCERT General Science</span>
             <span className="flex items-center gap-3"><ActivityIcon className="w-6 h-6 text-rose-400" /> CBAT Psycho Tests</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-rose-400" /> 1 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><Wrench className="w-6 h-6 text-rose-400" /> Trade Specific Mocks</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Target RRB Exam</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored to accurately replicate different Railway notifications.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-red-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-red-600 dark:text-red-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-red-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-rose-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-900/40 text-red-300 text-sm font-semibold mb-6 border border-red-800">
                  <BarChart className="w-4 h-4" />
                  <span>CBT Phase Analysis</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Because Railway Exams Demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Extreme Speed.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Scoring high is not enough; saving fractions of a second per question determines your selection. Our AI dashboard precisely tracks your speed and highlights weaker areas.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Target, title: 'Negative Marking Tracker', desc: 'Identify which topics generate the highest number of 1/3 penalty deductions.' },
                   { icon: ActivityIcon, title: 'NCERT Science Proficiency', desc: 'Detailed breakdown of Physics, Chemistry, and Life Science accuracy against toppers.' },
                   { icon: Zap, title: 'Time vs Accuracy Matrix', desc: 'Learn which tricky Maths or Reasoning questions drain your time without netting marks.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-red-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-red-400" /></div>
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
                      <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
                        <LayoutDashboard className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">CBT Readiness</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">RRB NTPC Mock 09</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-red-400 text-2xl tracking-tight">85/100</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Safe Zone
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'General Science', score: 94, color: 'bg-red-500' },
                      { name: 'Mathematics', score: 88, color: 'bg-rose-500' },
                      { name: 'General Intelligence', score: 92, color: 'bg-orange-500' },
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Speed: +18% Above Avg</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Premium Railway Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost Master Pass?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A single comprehensive subscription designed to combat massive competition across all Railway zones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MonitorSmartphone, title: 'Real TCS UI', desc: 'Exact functioning replica of the physical Computer Based Test (CBT) interface.' },
            { icon: BookOpen, title: 'NCERT Science Core', desc: 'Intensive focus on 10th-grade General Science strictly adhering to NCERT patterns.' },
            { icon: Wrench, title: 'Technical Trades', desc: 'Distinct mocks included for ALP Part-B and Junior Engineer trade subjects.' },
            { icon: Activity, title: 'Psycho CBAT Mocks', desc: 'Specialized visual and cognitive battery tests exclusively formatted for ALP candidates.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-red-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
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
          <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-[2rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Try Before You Commit</h2>
                <p className="text-red-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience the interface, the difficulty level, and the deep AI analytics with our free premium mocks.
                </p>
                <button className="bg-white text-red-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-red-50 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/20 transition-colors">
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-red-100">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-red-900 bg-white hover:bg-red-50 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0">
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
          <p className="text-slate-600 dark:text-slate-400">Thousands have boarded the success express to Indian Railways.</p>
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
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">{r.exam}</p>
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
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
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
