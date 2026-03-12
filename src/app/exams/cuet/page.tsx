"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  GraduationCap, Beaker, Calculator, Globe, LayoutDashboard, BrainCircuit
} from 'lucide-react';

const popularExams = [
  {
    name: 'CUET UG - Science',
    fullName: 'Physics, Chemistry, Maths/Bio',
    desc: 'Target B.Sc (Hons) in DU/BHU. Hardcore NCERT line-by-line MCQs.',
    tests: 120,
    pattern: '40/50 Qs per Domain',
    subjects: ['Physics', 'Chemistry', 'Math/Bio'],
    href: '/exams/cuet/science',
    icon: Beaker,
    popular: true
  },
  {
    name: 'CUET UG - Commerce',
    fullName: 'Accountancy, BST, Economics',
    desc: 'The SRCC Dream. Highly competitive domains requiring 100% accuracy.',
    tests: 100,
    pattern: '40/50 Qs per Domain',
    subjects: ['Accountancy', 'Business St.', 'Economics'],
    href: '/exams/cuet/commerce',
    icon: Calculator
  },
  {
    name: 'CUET UG - Humanities',
    fullName: 'History, Pol. Science, Geog',
    desc: 'Targeting JNU & Hindu College. Deep factual NCERT chronology tests.',
    tests: 110,
    pattern: '40/50 Qs per Domain',
    subjects: ['History', 'Pol. Science', 'Geography'],
    href: '#',
    icon: Globe
  },
  {
    name: 'General Test (GT)',
    fullName: 'Section III - Aptitude',
    desc: 'Mandatory for many courses. Tests Quant, Reasoning, and Current Affairs.',
    tests: 130,
    pattern: '50/60 Qs, 60 Mins',
    subjects: ['Quant', 'Reasoning', 'GK'],
    href: '#',
    icon: Zap
  }
];

const freeTests = [
  { name: 'General Test (GT) Speed Booster', q: 50, t: 60, level: 'Crucial' },
  { name: 'English Language Reading Comprehension', q: 40, t: 45, level: 'Advanced' },
  { name: 'Physics / Accounts Domain NCERT Test', q: 40, t: 45, level: 'Moderate' }
];

const reviews = [
  { name: 'Arjun S.', exam: 'Hindu College (100%ile)', rating: 5, text: 'The Domain specific tests for Physics and Maths matched the exact NCERT line-by-line framing used by NTA. The interface is literally a clone of the real exam.' },
  { name: 'Simran K.', exam: 'SRCC DU', rating: 5, text: 'The Accountancy mocks were brilliant. I used the analytics dashboard to realize I was spending too much time on Partnership questions. Fixed it and got 200/200.' },
  { name: 'Rohan Gupta', exam: 'JNU Political Science', rating: 5, text: 'If you want to clear Humanities, you need to read NCERT like a holy book. ExamBoost framed MCQs from the deepest, hidden paragraphs of the textbook.' },
];

const faqs = [
  { q: "Is the interface exactly like the NTA CBT?", a: "Yes, our mock test interface uses the exact same color palette, 'Mark for Review' buttons, and navigation panel layout as the official NTA (National Testing Agency) software to reduce UI anxiety." },
  { q: "Are the domain subjects strictly NCERT based?", a: "100%. NTA guidelines explicitly state that CUET UG domain questions are framed only from Class 12 NCERT. We do not include out-of-syllabus JEE/NEET level questions in CUET mocks." },
  { q: "How does the Percentile Predictor work for CUET?", a: "CUET uses normalization across multiple shifts. We calculate your normalized percentile by pitting your scores against our active user base of 60,000+ CUET aspirants." },
  { q: "Can I customize which domains I want in my package?", a: "Yes, our 'CUET Target Package' allows you to select 1 Language, the General Test, and up to 4 Domain Specific subjects of your choice to create a personalized bundle." }
];

export default function CUETExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Cyan/Blue/Sky Target Aesthetic Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 text-sm font-semibold mb-6 shadow-sm border border-cyan-200 dark:border-cyan-800 backdrop-blur-sm"
        >
          <GraduationCap className="w-4 h-4 animate-pulse" />
          <span>India's Largest NTA Simulation Engine</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Target 100%ile. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400">Secure DU, BHU, & JNU.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Practice on the exact NTA UI mockup. Master pure NCERT Class 12 domains, ace the General Test (GT), and beat 1.5 million aspirants.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Pick Your Subjects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take a Free GT Mock
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-slate-900 py-4 md:py-5 overflow-hidden border-y border-slate-800 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-cyan-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-blue-400" /> Pure NCERT Based</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-blue-400" /> Target 200/200</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-blue-400" /> 15 Lakh+ Competitors</span>
             <span className="flex items-center gap-3"><LayoutDashboard className="w-6 h-6 text-blue-400" /> Exact NTA Layout</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-blue-400" /> General Test Speed</span>
             <span className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-blue-400" /> Pure NCERT Based</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-blue-400" /> Target 200/200</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-blue-400" /> 15 Lakh+ Competitors</span>
             <span className="flex items-center gap-3"><LayoutDashboard className="w-6 h-6 text-blue-400" /> Exact NTA Layout</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-blue-400" /> General Test Speed</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Domain Expertise</h2>
            <p className="text-slate-600 dark:text-slate-400">Select combinations mapping directly to Delhi University and BHU admission criteria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-cyan-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-cyan-600 dark:text-cyan-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/40 text-cyan-300 text-sm font-semibold mb-6 border border-cyan-800">
                  <BarChart className="w-4 h-4" />
                  <span>College Normalization Predictor</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  One Mistake. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">10,000 Ranks Lost.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  CUET is ruthlessly competitive. Because domain subjects are easy, the cutoff is often 200/200 for North Campus. Our dashboard ensures your accuracy is flawless.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: ShieldCheck, title: 'NCERT Deviation Scanner', desc: 'Identify if you are getting questions wrong because you missed tiny caveat lines in Class 12 books.' },
                   { icon: Target, title: 'Marking Scheme Optimization', desc: 'CUET penalizes -1 for wrong answers. Learn when to leave a question rather than guess.' },
                   { icon: Activity, title: 'GT Speed Tracker', desc: 'General Test gives you 60 minutes for 50 questions. Track your quantitative speed down to the second.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-cyan-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-blue-400" /></div>
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
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                        <LayoutDashboard className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Commerce Domain</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target: SRCC / Hindu</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-blue-400 text-2xl tracking-tight">785/800</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Safe Zone
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'English Core', score: 100, color: 'bg-cyan-500' },
                      { name: 'Accountancy', score: 94, color: 'bg-indigo-500' },
                      { name: 'Economics', score: 100, color: 'bg-blue-500' },
                      { name: 'Business Studies', score: 96, color: 'bg-sky-500' },
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Alert: Partnership Accounting</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>The CUET NTA Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost over Board Pre-boards?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            CBSE tests subjective derivations. CUET tests objective trap-spotting. The formats are entirely different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: LayoutDashboard, title: 'NTA CBT Interface', desc: 'Mock window is an exact, pixel-perfect clone of the NTA Software (Review palettes, color codes) to prevent misclicks.' },
            { icon: BookOpen, title: 'NCERT Line-by-Line', desc: '100% of domain questions are drafted tracing back to standard Class 12 NCERT curriculum lines. No out-of-syllabus fluff.' },
            { icon: Zap, title: 'General Test (GT) Pro', desc: 'Specialized high-speed tests for Section III covering Quant, Reasoning, and the latest Current Affairs weightage.' },
            { icon: Globe, title: 'Extensive Subjects', desc: 'Provide tests for 23+ domains including specialized ones like Legal Studies, Psychology, and Regional Languages.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
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
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[2rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Test Your Domain</h2>
                <p className="text-cyan-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Try out the NTA interface. See if you can actually finish 40 Accountancy or Physics questions in under 45 minutes.
                </p>
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-slate-100 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/20 transition-colors">
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-blue-100">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-blue-900 bg-white hover:bg-slate-100 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Central University Achievers</h2>
          <p className="text-slate-600 dark:text-slate-400">Join students who flawlessly managed Board Exams alongside CUET preparation.</p>
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
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">{r.exam}</p>
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
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-cyan-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
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
