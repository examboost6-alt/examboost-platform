"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, CheckCircle2, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Briefcase, GraduationCap, LayoutDashboard, MonitorSmartphone, Archive
} from 'lucide-react';

const popularExams = [
  {
    name: 'SSC CGL',
    fullName: 'Combined Graduate Level',
    desc: 'The most sought-after exam for Group B & C officer posts in ministries.',
    tests: 150,
    pattern: 'Tier 1 & 2 (Computer Based)',
    subjects: ['Maths', 'English', 'Reasoning', 'GS'],
    href: '/exams/ssc-exams/ssc-cgl',
    icon: GraduationCap,
    popular: true
  },
  {
    name: 'SSC CHSL',
    fullName: 'Combined Higher Secondary Level',
    desc: 'Entry-level clerical posts like LDC, JSA, and Postal Assistants.',
    tests: 120,
    pattern: 'Tier 1 & 2 + Typing',
    subjects: ['Maths', 'English', 'Reasoning', 'GS'],
    href: '/exams/ssc-exams/ssc-chsl',
    icon: Briefcase
  },
  {
    name: 'SSC MTS',
    fullName: 'Multi Tasking Non-Technical Staff',
    desc: 'Gateway to central govt jobs. Focus heavily on speed and accuracy.',
    tests: 100,
    pattern: 'Single CBE',
    subjects: ['English', 'Numerical Aptitude', 'GS'],
    href: '/exams/ssc-exams/ssc-mts',
    icon: Activity
  },
  {
    name: 'SSC CPO',
    fullName: 'Central Police Organization',
    desc: 'Recruitment of Sub-Inspectors in Delhi Police, CAPFs, CISF.',
    tests: 85,
    pattern: 'Paper 1 & 2 + PET/PST',
    subjects: ['English', 'Reasoning', 'GS'],
    href: '/exams/ssc-exams/ssc-cpo',
    icon: ShieldCheck
  }
];

const freeTests = [
  { name: 'SSC CGL Tier 1 All-India Live Mock', q: 100, t: 60, level: 'Advanced' },
  { name: 'SSC Quantitative Aptitude Sectional', q: 25, t: 15, level: 'Moderate' },
  { name: 'SSC English Comprehension Booster', q: 30, t: 20, level: 'Moderate' }
];

const reviews = [
  { name: 'Sumit Sharma', exam: 'SSC CGL Selected', rating: 5, text: 'ExamBoost mock tests duplicate the exact TCS iON interface. Attempting tests here completely removed my exam-day fear and improved my navigation speed.' },
  { name: 'Kavita Iyer', exam: 'CHSL Aspirant', rating: 5, text: 'The short tricks given in Quantitative solutions are amazing. The analytics dashboard clearly showed I was wasting too much time on Arithmetic.' },
  { name: 'Pooja Verma', exam: 'CPO Physical Cleared', rating: 5, text: 'English comprehension passages were exactly like the level of recent SSC exams. Highly recommended for serious aspirants targeting top ranks.' },
];

const faqs = [
  { q: "Is the test interface exactly like the real SSC exam?", a: "Yes, our mock test interface is a 1:1 replica of the TCS iON platform used by SSC, ensuring you are completely familiar with the navigation, marking schemes, and layout." },
  { q: "Are previous year questions (PYQs) included?", a: "Absolutely! Our PRO Pass gives you access to 1000+ past year papers formatted as real mock tests, starting from 2018 onwards." },
  { q: "Do you provide short tricks for Quantitative Aptitude?", a: "Yes, our detailed text and video solutions prioritize time-saving shortcuts and elimination methods over lengthy traditional approaches." },
  { q: "Can I take the tests on the mobile app?", a: "Yes, our platform is responsive for mobile browsers and we also offer a dedicated app with offline test download capabilities." }
];

export default function SSCExamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Violet/Fuchsia Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-fuchsia-400/20 dark:bg-fuchsia-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-300 text-sm font-semibold mb-6 shadow-sm border border-violet-200 dark:border-violet-800 backdrop-blur-sm"
        >
          <MonitorSmartphone className="w-4 h-4 animate-pulse" />
          <span>India's Most Accurate SSC Mock Platform</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Crack <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400">SSC Exams</span> <br className="hidden md:block"/>
          in Your First Attempt
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Master speed and accuracy with ExamBoost mock tests for CGL, CHSL, MTS & more. Experience the exact TCS iON interface and latest question patterns.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore PRO Pass <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Take Free Mock Test
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-violet-950 py-4 md:py-5 overflow-hidden border-y border-violet-900 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-violet-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-violet-400" /> Exact TCS iON Interface</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-violet-400" /> Math Shortcut Tricks</span>
             <span className="flex items-center gap-3"><Archive className="w-6 h-6 text-violet-400" /> 1000+ PYQ Papers</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-violet-400" /> 2 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-violet-400" /> Top Rankers' Choice</span>
             <span className="flex items-center gap-3"><MonitorSmartphone className="w-6 h-6 text-violet-400" /> Exact TCS iON Interface</span>
             <span className="flex items-center gap-3"><Zap className="w-6 h-6 text-violet-400" /> Math Shortcut Tricks</span>
             <span className="flex items-center gap-3"><Archive className="w-6 h-6 text-violet-400" /> 1000+ PYQ Papers</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-violet-400" /> 2 Lakh+ Aspirants</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-violet-400" /> Top Rankers' Choice</span>
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
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored to exactly replicate the real SSC examinations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-violet-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-violet-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-14">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-violet-600 dark:text-violet-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-violet-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-fuchsia-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-900/40 text-violet-300 text-sm font-semibold mb-6 border border-violet-800">
                  <BarChart className="w-4 h-4" />
                  <span>AI Speed Analytics</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Because SSC is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Game of Speed.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  You know the concepts, but do you have the speed? Our AI dashboard precisely measures your time per question and highlights areas where you need to apply shortcuts.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Clock, title: 'Time vs Accuracy Matrix', desc: 'Identify "time sinks" where you spend >2 minutes on a question and still get it wrong.' },
                   { icon: Activity, title: 'Sectional Proficiency', desc: 'Detailed breakdown of Maths, Reasoning, English, and GS accuracy against toppers.' },
                   { icon: Target, title: 'Question Selection Strategy', desc: 'Learn which questions to attempt and which to skip to maximize your score.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-violet-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-violet-400" /></div>
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
                      <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                        <LayoutDashboard className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Time Analysis</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">SSC CGL Tier-1</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-violet-400 text-2xl tracking-tight">142/200</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Tier 1 Safe Score
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'Quantitative Aptitude', score: 90, color: 'bg-violet-500' },
                      { name: 'General Intelligence', score: 96, color: 'bg-fuchsia-500' },
                      { name: 'English Comprehension', score: 80, color: 'bg-purple-500' },
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
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Avg Time: 42s/Qn</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-800 dark:text-violet-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Premium Tier Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why ExamBoost PRO Pass?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A single subscription giving you the ultimate arsenal to conquer any SSC examination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MonitorSmartphone, title: 'Real TCS UI', desc: 'Exact replica of the digital interface used physically in SSC test centers.' },
            { icon: Archive, title: 'Previous Year Papers', desc: 'Access 1000+ real PYQs organized as attemptable timed mock tests.' },
            { icon: Zap, title: 'Trick Solutions', desc: 'Alternative short-cut methods provided for quantitative & reasoning questions.' },
            { icon: BookOpen, title: 'Tier 2 Ready', desc: 'Up-to-date with recent SSC syllabus changes including typing and computer modules.' }
          ].map((feature, idx) => (
             <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-violet-900/10 hover:-translate-y-1">
               <div className="w-14 h-14 bg-violet-50 dark:bg-violet-900/20 rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
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
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-700 rounded-[2rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Try Before You Commit</h2>
                <p className="text-violet-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Experience the interface, the difficulty level, and the deep AI analytics with our free premium mocks.
                </p>
                <button className="bg-white text-violet-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-violet-50 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/20 transition-colors">
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-violet-100">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-violet-900 bg-white hover:bg-violet-50 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0">
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
          <p className="text-slate-600 dark:text-slate-400">Thousands have secured reputed government ministries.</p>
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
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 font-bold text-xl">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                  <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">{r.exam}</p>
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
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === idx ? 'bg-violet-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
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
