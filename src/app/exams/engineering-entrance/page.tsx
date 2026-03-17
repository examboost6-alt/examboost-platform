"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  PlayCircle,
  FileText,
  Target,
  ShieldCheck,
  Activity,
  Star,
  CheckCircle2,
  BookOpen,
  Laptop,
  Users,
  ChevronDown,
  Award,
  Clock,
  BarChart,
  BrainCircuit,
  Zap
} from 'lucide-react';

const popularExams = [
  {
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination',
    desc: 'For admission to NITs, IIITs, and Centrally Funded Technical Institutions.',
    tests: 45,
    pattern: 'NTA Pattern',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/series/mock-eng-1',
    icon: Target,
    popular: true
  },
  {
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Exam Advanced',
    desc: 'The exclusive entrance exam for admission to the prestigious IITs.',
    tests: 30,
    pattern: 'Paper 1 & 2',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/exams/engineering-entrance/jee/jee-advanced',
    icon: BrainCircuit
  },
  {
    name: 'BITSAT',
    fullName: 'BITS Admission Test',
    desc: 'Computer-based test for admission to BITS Pilani, Goa, and Hyderabad.',
    tests: 25,
    pattern: 'Speed & Accuracy',
    subjects: ['PCM', 'English', 'Logic'],
    href: '/exams/engineering-entrance/bitsat',
    icon: Zap
  },
  {
    name: 'VITEEE',
    fullName: 'VIT Engineering Entrance',
    desc: 'For admission to B.Tech programs at VIT Vellore, Chennai, AP, and Bhopal.',
    tests: 20,
    pattern: 'No Negative Marking',
    subjects: ['Maths', 'Phy', 'Chem', 'Eng'],
    href: '/exams/engineering-entrance/viteee',
    icon: Activity
  }
];

const freeTests = [
  { name: 'JEE Main 2024 Full Mock Test - 1', q: 90, t: 180, level: 'Moderate' },
  { name: 'BITSAT Mini Mock - Physics & LR', q: 45, t: 60, level: 'Easy-Moderate' },
  { name: 'VITEEE Full Practice Test', q: 125, t: 150, level: 'Moderate' }
];

const reviews = [
  { name: 'Aman Rajput', exam: 'JEE Main, 99.8 PR', rating: 5, text: 'The mock test interface is completely identical to the real NTA exam. It removed all my exam day anxiety. Highly recommended.' },
  { name: 'Riya Sharma', exam: 'BITSAT, Score: 320', rating: 5, text: 'Detailed solutions and the logical reasoning section practice gave me an edge. The AI analytics accurately pointed out my weak formulas.' },
  { name: 'Sahil Verma', exam: 'JEE Advanced Qualified', rating: 5, text: 'Questions in the advanced test series are exactly of the JEE level. Conceptually challenging enough to build deep understanding.' },
];

const faqs = [
  { q: "Are the mock test interfaces exactly like the real exams?", a: "Yes, our platform uses the exact same UI as the NTA (for JEE) and TCS iON (for others) to ensure you are completely familiar with the environment on exam day." },
  { q: "Do you provide video solutions?", a: "Yes, for the Ultimate and Masterclass packages, we provide detailed step-by-step video solutions for the hardest questions, along with comprehensive text solutions for all questions." },
  { q: "Can I take the tests on my phone?", a: "Absolutely. Our platform is 100% responsive, and we also have a dedicated Android/iOS app with an offline mode so you can download and attempt tests without internet access." },
  { q: "How does the AI analytics work?", a: "Our AI engine tracks the exact time you spend on each question, predicts your accuracy under pressure, and compares your attempt strategy with toppers." }
];

export default function EngineeringEntrancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Medical-Style Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Background Blobs for a clean medical-like aesthetic but with Engineering Colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-semibold mb-6 shadow-sm border border-blue-200 dark:border-blue-800 backdrop-blur-sm"
        >
          <Activity className="w-4 h-4 animate-pulse" />
          <span>India's Most Advanced Engineering Prep</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">Engineering</span> <br className="hidden md:block"/>
          Entrance Exams
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Prepare with exact NTA pattern mock tests, verified solutions curated by IIT alumni, and comprehensive performance analytics to boost your rank.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore Test Series <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free Mock Test
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-indigo-950 py-4 md:py-5 overflow-hidden border-y border-indigo-900 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-indigo-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-indigo-400" /> Error-Free Content</span>
             <span className="flex items-center gap-3"><Laptop className="w-6 h-6 text-indigo-400" /> Real Exam Interface</span>
             <span className="flex items-center gap-3"><BarChart className="w-6 h-6 text-indigo-400" /> In-depth Analytics</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-indigo-400" /> 50,000+ Aspirants</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-indigo-400" /> IIT Alumni Solutions</span>
             <span className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-indigo-400" /> Error-Free Content</span>
             <span className="flex items-center gap-3"><Laptop className="w-6 h-6 text-indigo-400" /> Real Exam Interface</span>
             <span className="flex items-center gap-3"><BarChart className="w-6 h-6 text-indigo-400" /> In-depth Analytics</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-indigo-400" /> 50,000+ Aspirants</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-indigo-400" /> IIT Alumni Solutions</span>
           </div>
        </div>
         <style dangerouslySetInnerHTML={{__html: `
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
      </section>

      {/* 2. Target Exams Grid (Medical Page Style) */}
      <section id="test-series" className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Target Exam</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored to the exact syllabus and difficulty level.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-10">{exam.desc}</p>
                
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

      {/* 3. Immersive Analytics Section (Replacing the hero dashboard) */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/40 text-blue-300 text-sm font-semibold mb-6 border border-blue-800">
                  <BarChart className="w-4 h-4" />
                  <span>Deep AI Analytics</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Move beyond basic scores with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Deep Analytics.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Attempting tests is only half the battle. Our analysis engine breaks down your performance to highlight exact areas where you are losing marks and time.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Clock, title: 'Time Management Graph', desc: 'Identify which question types consume disproportionate amounts of your time.' },
                   { icon: Activity, title: 'Topic Mastery Index', desc: 'See your accuracy categorized by specific physics, chemistry, and math syllabus headers.' },
                   { icon: Users, title: 'Peer Comparison', desc: 'Benchmark your section-wise performance with the top 10% of aspirants.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-blue-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-blue-400" /></div>
                     <div>
                       <h4 className="font-bold text-lg text-white mb-1">{fp.title}</h4>
                       <p className="text-slate-400 text-sm">{fp.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="flex-1 w-full max-w-lg aspect-square relative flex items-center justify-center">
                {/* Main Performance Card (Copied from previous hero but styled beautifully here) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute z-20 w-full md:w-[90%] bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-8"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <BarChart className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Performance Analytics</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">JEE Main Full Test</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-blue-400 text-2xl tracking-tight">99.8 PR</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Top 1%
                      </p>
                    </div>
                  </div>
                  
                  {/* Subject Bars */}
                  <div className="space-y-5">
                    {[
                      { name: 'Physics', score: 88, color: 'bg-blue-500' },
                      { name: 'Chemistry', score: 95, color: 'bg-indigo-500' },
                      { name: 'Mathematics', score: 82, color: 'bg-violet-500' },
                    ].map((sub, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-bold text-slate-300 mb-2">
                          <span>{sub.name}</span>
                          <span>{sub.score}% Accurate</span>
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

                {/* Floating Badge */}
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
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Live Analysis</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings (Medical style boxes) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Comprehensive Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Grade Platform</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Engineered to simulate the exact conditions of national competitive exams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Laptop, title: 'Realistic Interface', desc: 'Familiarize yourself completely with the NTA CBT environment.' },
            { icon: ShieldCheck, title: 'Verified Content', desc: 'Zero error tolerance. Questions structured by subject matter experts.' },
            { icon: FileText, title: 'Detailed Solutions', desc: 'Step-by-step methods and short tricks provided for every question.' },
            { icon: Activity, title: 'Latest Syllabus', desc: 'Test structures continually updated to reflect latest notification changes.' }
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Try Free Mock Tests</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Evaluate our platform's interface, question quality, and analytics dashboard without any upfront commitment.
                </p>
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-blue-50 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Create Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                    <button className="text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Top Achievers</h2>
          <p className="text-slate-600 dark:text-slate-400">Join thousands of successful aspirants.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl flex flex-col gap-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex text-amber-500 gap-1">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed flex-grow">
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
