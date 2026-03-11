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
  PieChart,
  Laptop,
  Users,
  ChevronDown,
  Award,
  Clock,
  BarChart,
  ClipboardList
} from 'lucide-react';

const popularExams = [
  {
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination',
    desc: 'For admission to NITs, IIITs, and Centrally Funded Technical Institutions.',
    tests: 45,
    pattern: 'NTA Pattern (MCQs + Numerical)',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/exams/engineering-entrance/jee/jee-main',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Exam Advanced',
    desc: 'The exclusive entrance exam for admission to the prestigious IITs.',
    tests: 30,
    pattern: 'Paper 1 & 2 (Multi-Correct, Integer)',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/exams/engineering-entrance/jee/jee-advanced',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    name: 'BITSAT',
    fullName: 'BITS Admission Test',
    desc: 'Computer-based test for admission to BITS Pilani, Goa, and Hyderabad.',
    tests: 25,
    pattern: 'Speed & Accuracy (Includes English)',
    subjects: ['PCM', 'English', 'Logic'],
    href: '/exams/engineering-entrance/bitsat',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20'
  },
  {
    name: 'VITEEE',
    fullName: 'VIT Engineering Entrance',
    desc: 'For admission to B.Tech programs at VIT Vellore, Chennai, AP, and Bhopal.',
    tests: 20,
    pattern: 'No Negative Marking (MCQ format)',
    subjects: ['Maths/Bio', 'Phy', 'Chem', 'Eng'],
    href: '/exams/engineering-entrance/viteee',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  }
];

const freeTests = [
  { name: 'JEE Main 2024 Full Mock Test - 1', q: 90, t: 180, level: 'Moderate' },
  { name: 'BITSAT Mini Mock - Physics & LR', q: 45, t: 60, level: 'Easy-Moderate' },
  { name: 'VITEEE Full Practice Test', q: 125, t: 150, level: 'Moderate' }
];

const reviews = [
  { name: 'Aman Rajput', exam: 'JEE Main, 99.8 PR', rating: 5, text: 'The mock test interface is completely identical to the real NTA exam. It removed all my exam day anxiety. Highly recommended for serious aspirants.' },
  { name: 'Riya Sharma', exam: 'BITSAT, Score: 320', rating: 5, text: 'Detailed solutions and the logical reasoning section practice gave me an edge. The AI analytics accurately pointed out my weak formulas and careless mistakes.' },
  { name: 'Sahil Verma', exam: 'JEE Advanced Qualified', rating: 5, text: 'Questions in the advanced test series are exactly of the JEE level. Not too hard just to scare you, but conceptually challenging enough to build deep understanding.' },
];

const faqs = [
  { q: "Are the mock test interfaces exactly like the real exams?", a: "Yes, our platform uses the exact same UI as the NTA (for JEE) and TCS iON (for others) to ensure you are completely familiar with the environment on exam day." },
  { q: "Do you provide video solutions?", a: "Yes, for the Ultimate and Masterclass packages, we provide detailed step-by-step video solutions for the hardest questions, along with comprehensive text solutions for all questions." },
  { q: "Can I take the tests on my phone?", a: "Absolutely. Our platform is 100% responsive, and we also have a dedicated Android/iOS app with an offline mode so you can download and attempt tests without internet access." },
  { q: "How does the AI analytics work?", a: "Our AI engine tracks the exact time you spend on each question, predicts your accuracy under pressure, and compares your attempt strategy with toppers to generate a personalized improvement blueprint." }
];

export default function EngineeringEntrancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 w-full overflow-x-hidden selection:bg-primary/30 font-sans">
      
      {/* 1. Ultra Clean Professional Hero Section */}
      <div className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-8 md:mb-12">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/exams" className="hover:text-primary transition-colors">Exams</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-bold">Engineering</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 w-full order-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100 dark:border-blue-800/50">
                <Target className="w-4 h-4" /> Trusted by 50,000+ Aspirants
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                Engineering <br className="hidden md:block"/>
                <span className="text-primary">Entrance Exams</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Prepare with exact NTA pattern mock tests, verified solutions curated by IIT alumni, and comprehensive performance analytics to boost your rank.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm">
                  Explore Test Series <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  Take Free Mock Test
                </button>
              </div>

              {/* Clean Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Error-Free Content</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Real Exam Interface</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> In-depth Analytics</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex-1 w-full order-2"
            >
              {/* Clean Professional Graphic */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/3] flex items-center justify-center p-6">
                <img src="/jee-mains-banner.svg" alt="Engineering Exam Preparation Dashboard" className="w-full h-full object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Supported Exams Section (Clean Grid) */}
      <div className="py-20 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Target Exam</h2>
            <p className="text-slate-600 dark:text-slate-400">Specialized mock tests tailored to the exact syllabus and difficulty level of each exam.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {popularExams.map((exam, idx) => (
              <Link
                key={idx}
                href={exam.href}
                className="group bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg transition-all duration-200"
              >
                <div className={`w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl flex items-center justify-center ${exam.bg} ${exam.color}`}>
                  <Award className="w-10 h-10" />
                </div>
                <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{exam.name}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {exam.tests}+ Tests
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 block">{exam.fullName}</p>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400 mt-2">
                    <span className="flex items-center gap-1.5"><ClipboardList className="w-4 h-4" /> {exam.pattern}</span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center px-4">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white text-slate-400 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Deep Analytics - Clean Professional Layout */}
      <div className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="flex-1 w-full order-2 lg:order-1">
               <div className="bg-slate-50 dark:bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Detailed Performance Analytics dashboard" className="rounded-xl border border-slate-200 dark:border-slate-700 shadow-md w-full relative z-10" />
               </div>
            </div>

            <div className="flex-1 w-full order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Move beyond basic scores with deep analytics.</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Attempting tests is only half the battle. Our analysis engine breaks down your performance to highlight exact areas where you are losing marks and time.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Clock, title: 'Time Management Graph', desc: 'Identify which question types consume disproportionate amounts of your time.' },
                  { icon: BarChart, title: 'Topic Mastery Index', desc: 'See your accuracy categorized by specific physics, chemistry, and math syllabus headers.' },
                  { icon: Users, title: 'Peer Comparison', desc: 'Benchmark your section-wise performance with the top 10% of aspirants.' }
                ].map((ft, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-800/50">
                      <ft.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{ft.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{ft.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* 4. Core Features Summary */}
       <div className="py-20 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Grade Test Platform</h2>
            <p className="text-slate-600 dark:text-slate-400">Engineered to simulate the exact conditions of national competitive exams.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Laptop, title: 'Realistic CBT Interface', desc: 'Familiarize yourself completely with the NTA testing environment.' },
              { icon: ShieldCheck, title: 'Verified Question Bank', desc: 'Zero error tolerance. Questions structured by subject matter experts.' },
              { icon: FileText, title: 'Comprehensive Solutions', desc: 'Detailed step-by-step methods and short tricks provided for every question.' },
              { icon: Activity, title: 'Latest Syllabus', desc: 'Test structures continually updated to reflect latest notification changes.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 mb-6 border border-slate-100 dark:border-slate-700">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Free Mock Tests - Clean Professional Look */}
      <div className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Try completely free mock tests.</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                  Evaluate our platform's interface, question quality, and analytics dashboard without any upfront commitment.
                </p>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl font-bold transition-all w-full sm:w-auto">
                  Create Free Account
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/50 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-[15px] mb-2">{test.name}</h4>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> {test.q} Qs</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {test.t} Mins</span>
                        <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">{test.level}</span>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-primary flex items-center gap-1.5 shrink-0 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                       Attempt Now <PlayCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Student Reviews - Clean Testimonials */}
      <div className="py-20 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Trusted by Top Achievers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex text-amber-500 mb-4 gap-0.5">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 block italic">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{r.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{r.exam}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. FAQs */}
      <div className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 text-slate-400 ${openFaq === idx ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
