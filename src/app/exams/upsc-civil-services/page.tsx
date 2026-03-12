"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Award, Users, CheckCircle2, ArrowRight, PlayCircle, FileText,
  Target, ShieldCheck, Zap, Star, Activity, BarChart, ChevronDown, Clock,
  Landmark, Map, Feather, History
} from 'lucide-react';

const popularExams = [
  {
    name: 'UPSC CSE Prelims',
    fullName: 'Civil Services Examination',
    desc: 'The defining test for IAS, IPS, and IFS aspirants. Master GS and CSAT.',
    tests: 40,
    pattern: 'Objective (GS & CSAT)',
    subjects: ['Polity', 'History', 'Economy', 'Geography'],
    href: '/exams/upsc-civil-services/upsc-cse-prelims',
    icon: Landmark,
    popular: true
  },
  {
    name: 'UPSC CSE Mains',
    fullName: 'Civil Services Mains',
    desc: 'Intensive answer writing practice for all GS papers and essays.',
    tests: 25,
    pattern: 'Descriptive',
    subjects: ['GS 1-4', 'Essay', 'Optional'],
    href: '/exams/upsc-civil-services/upsc-cse-mains',
    icon: FileText
  },
  {
    name: 'UPSC CAPF (AC)',
    fullName: 'Central Armed Police Forces',
    desc: 'Commandant level entry. Complete coverage of Paper 1 and descriptive Paper 2.',
    tests: 15,
    pattern: 'Objective + Descriptive',
    subjects: ['GS', 'Essay', 'Comprehension'],
    href: '/exams/upsc-civil-services/upsc-capf',
    icon: ShieldCheck
  },
  {
    name: 'UPSC CDS / NDA',
    fullName: 'Defense Services Exams',
    desc: 'For entries into the prestigious military academies. Focus on Maths & English.',
    tests: 30,
    pattern: 'Objective Pattern',
    subjects: ['Maths', 'English', 'GS'],
    href: '/exams/upsc-civil-services/upsc-cds',
    icon: Target
  }
];

const freeTests = [
  { name: 'UPSC Prelims GS Paper 1 All-India Mock', q: 100, t: 120, level: 'Advanced' },
  { name: 'UPSC CSAT High-Yield Practice', q: 80, t: 120, level: 'Moderate' },
  { name: 'Monthly Current Affairs Digest Test', q: 50, t: 60, level: 'Moderate' }
];

const reviews = [
  { name: 'Ravi Kumar', exam: 'IAS Aspirant', rating: 5, text: 'ExamBoost GS mock tests are remarkably close to the actual UPSC standard. The explanations for current affairs are brilliant and multi-dimensional.' },
  { name: 'Priya S', exam: 'Cleared Prelims 2023', rating: 5, text: 'The detailed All India Ranking and subject-wise analytics helped me realize I was lagging in Environment & Ecology.' },
  { name: 'Saurabh M', exam: 'CAPF Candidate', rating: 5, text: 'Very precise syllabus coverage. The history and polity sections were exceptionally well framed. The paper 2 evaluation was prompt and incredibly insightful.' },
];

const faqs = [
  { q: "Are the mock test standards equivalent to the actual UPSC CSE?", a: "Yes, our subject matter experts rigorously analyze the past 10 years' trends to ensure the difficulty, trickiness, and length of the questions exactly match the real exam." },
  { q: "Is there any evaluation for Mains test series?", a: "Absolutely. Our Ultimate and Masterclass packages include personalized evaluation by candidates who have previously cleared Mains and faced interviews." },
  { q: "How is Current Affairs integrated?", a: "Current Affairs is heavily linked with static topics. Every mock test contains questions that bridge recent news with foundational concepts, mirroring UPSC's current approach." },
  { q: "Can I take the tests on an iPad or mobile?", a: "Yes, the platform is entirely responsive. We provide a distraction-free experience across desktops, tablets, and smartphones, along with an offline mode in our app." }
];

export default function UPSCCivilServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      
      {/* 1. Organic Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Background Blobs for a premium Civil Services look (Amber/Orange/Rose) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-rose-400/20 dark:bg-rose-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-6 shadow-sm border border-amber-200 dark:border-amber-800 backdrop-blur-sm"
        >
          <Landmark className="w-4 h-4 animate-pulse" />
          <span>India's Most Trusted Civil Services Prep</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2"
        >
          Conquer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">UPSC CSE</span> <br className="hidden md:block"/>
          with Absolute Precision
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4"
        >
          Master the UPSC syllabus with dynamic current affairs linkages, expert Mains evaluations, and highly simulated GS & CSAT mock tests.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 relative z-10 w-full sm:w-auto px-4"
        >
          <Link href="#test-series" className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(217,119,6,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore Test Series <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Attempt Free Mock
          </button>
        </motion.div>
      </section>

      {/* Trust Scrolling Ticker */}
      <section className="w-full bg-amber-950 py-4 md:py-5 overflow-hidden border-y border-amber-900 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-amber-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-amber-400" /> Integrated Dynamic Preparation</span>
             <span className="flex items-center gap-3"><FileText className="w-6 h-6 text-amber-400" /> Mains Expert Evaluation</span>
             <span className="flex items-center gap-3"><BarChart className="w-6 h-6 text-amber-400" /> In-depth Analytics</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-amber-400" /> 1,00,000+ Aspirants</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-amber-400" /> Top Toppers' Choice</span>
             <span className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-amber-400" /> Integrated Dynamic Preparation</span>
             <span className="flex items-center gap-3"><FileText className="w-6 h-6 text-amber-400" /> Mains Expert Evaluation</span>
             <span className="flex items-center gap-3"><BarChart className="w-6 h-6 text-amber-400" /> In-depth Analytics</span>
             <span className="flex items-center gap-3"><Users className="w-6 h-6 text-amber-400" /> 1,00,000+ Aspirants</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-amber-400" /> Top Toppers' Choice</span>
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
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored to the exact syllabus and unpredictability of UPSC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-all relative overflow-hidden block hover:shadow-lg">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">CORE</span>
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
                  View Modules <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Analytics Section */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-[#080B14] relative overflow-hidden text-white border-y border-slate-800">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-amber-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-orange-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-900/40 text-amber-300 text-sm font-semibold mb-6 border border-amber-800">
                  <BarChart className="w-4 h-4" />
                  <span>Deep AI Analytics</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Demystify the UPSC Prelims with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Micro-Level Insights.</span>
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Understanding what went wrong is more important than knowing the correct score. We analyze your wild guesses, intelligent eliminations, and time taken per subject.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { icon: Target, title: 'Elimination Tracking', desc: 'Find out if your risk-taking strategies and 50-50 elimination tactics are actually working.' },
                   { icon: Activity, title: 'Topic Mastery Index', desc: 'See your accuracy categorized exactly per UPSC micro-topics (e.g. Modern History vs Art & Culture).' },
                   { icon: Users, title: 'All India Benchmark', desc: 'Secure an All India Rank (AIR) matching the demographic profile of the actual examination.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="bg-amber-500/20 p-3 rounded-xl mt-1"><fp.icon className="w-5 h-5 text-amber-400" /></div>
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
                        <BarChart className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">Performance Overview</h4>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">UPSC GS Paper 1</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h4 className="font-black text-amber-400 text-2xl tracking-tight">108.66</h4>
                      <p className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Cutoff Cleared
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {[
                      { name: 'Polity & Governance', score: 92, color: 'bg-amber-500' },
                      { name: 'Indian Economy', score: 85, color: 'bg-orange-500' },
                      { name: 'History & Culture', score: 76, color: 'bg-rose-500' },
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
                  className="absolute z-30 top-0 right-0 lg:-right-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-5 py-2.5 flex items-center gap-3 -translate-y-4"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Mock AI Evaluation</span>
                </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Offerings */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Comprehensive Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Grade Platform for UPSC</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experience the pressure, pattern, and prestige of the Civil Services exam.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: BookOpen, title: 'Static Syllabus', desc: 'Thorough coverage of standard textbooks (Laxmikanth, Spectrum) via conceptual questions.' },
            { icon: Zap, title: 'Dynamic News', desc: 'Questions intricately linked with the The Hindu and Indian Express monthly compilations.' },
            { icon: FileText, title: 'Detailed Solutions', desc: 'Solutions that act as revision notes. Complete background info provided for every option.' },
            { icon: CheckCircle2, title: 'Mains Checking', desc: 'Thorough evaluation of answer copies with constructive feedback on structure and presentation.' }
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
          <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-[2rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Test Your Preparation</h2>
                <p className="text-amber-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Gauge your current standing against thousands of top-tier candidates with our free diagnostic mock tests.
                </p>
                <button className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto hover:bg-amber-50 shadow-lg flex items-center justify-center gap-2 group mx-auto lg:mx-0">
                  Register For Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/20 transition-colors">
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-sm font-semibold text-amber-100">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {test.t} Mins</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-amber-900 bg-white hover:bg-amber-50 px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Aspirant Experiences</h2>
          <p className="text-slate-600 dark:text-slate-400">Hear from those who navigated the strenuous journey with us.</p>
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
