"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdChevronRight,
  MdEngineering,
  MdCheckCircleOutline,
  MdArrowForward,
  MdPlayCircleOutline,
  MdArticle,
  MdGpsFixed,
  MdVerifiedUser,
  MdSpeed,
  MdStar,
  MdMenuBook,
  MdTimeline,
  MdLaptopMac,
  MdInsights,
  MdPeople,
  MdExpandMore
} from 'react-icons/md';

const popularExams = [
  {
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination (Main)',
    desc: 'For admission to NITs, IIITs, and other Centrally Funded Technical Institutions.',
    tests: 45,
    pattern: 'NTA Pattern (MCQs + Numerical)',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/exams/engineering-entrance/jee/jee-main'
  },
  {
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Examination (Advanced)',
    desc: 'The exclusive entrance exam for admission to the prestigious IITs.',
    tests: 30,
    pattern: 'Paper 1 & 2 (Multi-Correct, Integer, Comprehension)',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    href: '/exams/engineering-entrance/jee/jee-advanced'
  },
  {
    name: 'BITSAT',
    fullName: 'BITS Admission Test',
    desc: 'Computer-based test for admission to BITS Pilani, Goa, and Hyderabad.',
    tests: 25,
    pattern: 'Speed & Accuracy (Includes English & LR)',
    subjects: ['PCM', 'English Proficiency', 'Logical Reasoning'],
    href: '/exams/engineering-entrance/bitsat'
  },
  {
    name: 'VITEEE',
    fullName: 'VIT Engineering Entrance Exam',
    desc: 'For admission to B.Tech programs at VIT Vellore, Chennai, AP, and Bhopal.',
    tests: 20,
    pattern: 'No Negative Marking (MCQ format)',
    subjects: ['Maths/Biology', 'Physics', 'Chemistry', 'English', 'Aptitude'],
    href: '/exams/engineering-entrance/viteee'
  }
];

const freeTests = [
  { name: 'JEE Main 2024 Full Mock Test - 1', q: 90, t: 180, level: 'Moderate' },
  { name: 'BITSAT Mini Mock - Physics & LR', q: 45, t: 60, level: 'Easy-Moderate' },
  { name: 'VITEEE Full Length Practice Test', q: 125, t: 150, level: 'Moderate' }
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 md:pt-24 w-full overflow-x-hidden selection:bg-primary/30 font-sans">

      {/* 1. Hero Section (Image + Content) */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pb-16 pt-10 md:pt-14 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 md:mb-12">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <MdChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:text-primary transition-colors">All Exams</Link>
            <MdChevronRight className="w-4 h-4" />
            <span className="text-primary dark:text-accent">Engineering Entrance</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 w-full order-1 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs tracking-widest uppercase mb-6 border border-slate-200 dark:border-slate-700">
                <MdEngineering className="w-4 h-4 text-primary dark:text-accent" /> Premium Test Series
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.05] font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                <span className="block">Engineering</span>
                <span className="block"><span className="text-primary">Entrance</span> Exams</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
                Real exam UI, verified questions, and analytics that show exactly what to improve.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg">
                  View Exam Packages <MdArrowForward className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Try Free Mock Test
                </button>
              </div>

              {/* Trust Stats */}
              <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2"><MdVerifiedUser className="w-5 h-5 text-primary dark:text-accent" /> 50k+ aspirants</span>
                <span className="inline-flex items-center gap-2"><MdCheckCircleOutline className="w-5 h-5 text-primary dark:text-accent" /> Verified solutions</span>
                <span className="inline-flex items-center gap-2"><MdLaptopMac className="w-5 h-5 text-primary dark:text-accent" /> Real CBT UI</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full relative order-2 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 aspect-[16/10] md:aspect-[4/3] flex items-center justify-center p-4 sm:p-6">
                <img src="/jee-mains-banner.svg" alt="Engineering Entrance Preparation" className="w-full h-full object-contain" />
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-2.5 w-full">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1.5"><MdGpsFixed className="w-4 h-4" /> Top Exams:</span>
              {popularExams.map((exam) => (
                <Link
                  key={exam.name}
                  href={exam.href}
                  className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  {exam.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Advanced Analytics Walkthrough Section */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full order-2 lg:order-1 relative"
            >
              {/* Analytics Image */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 relative z-10">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Analytics Dashboard" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            <div className="flex-1 w-full order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6">AI-Powered Insights That Guarantee Selection</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed">
                Mere practice is not enough. Our proprietary AI engine analyzes over 40+ data points per test attempt to give you actionable insights you won't find anywhere else.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MdSpeed className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pacing & Time Trap Analysis</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">We highlight exactly which questions you overspent time on relative to toppers, helping you avoid time-wasting traps in the real exam.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <MdInsights className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Topic-Level Mastery Score</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Stop guessing your weaknesses. Get a precise percentage mastery score for every single sub-topic in Physics, Chemistry, and Math.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                    <MdPeople className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Peer Comparison & All India Rank</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Instantly know where you stand amongst lakhs of serious aspirants with our deeply calibrated AIR prediction algorithms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Detailed Exam Categories Grid */}
      <div className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Targeted Exam Packages</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
              We provide highly specialized and segregated test series for individual engineering entrance examinations to maintain the exact difficulty level and syllabus weightage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {popularExams.map((exam, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent">{exam.fullName}</p>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">{exam.name}</h3>
                  </div>
                  <div className="px-3 py-1.5 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-xs font-black rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
                    {exam.tests}+ Tests
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-[15px] font-medium leading-relaxed mb-7 flex-grow">
                  {exam.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pattern Focus</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-2 leading-snug">{exam.pattern}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Subjects</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exam.subjects.map((sub, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={exam.href}
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2 text-center"
                >
                  View full details <MdArrowForward className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Core Technical Features */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Technical Excellence in Preparation</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
              We aren't just a question bank. Our platform is built specifically to address the nuances of modern computer-based tests (CBT).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MdLaptopMac, title: 'Real Test Interface', desc: 'Identical NTA/TCS iON interface. Never get confused by buttons or zooming during the real exam.' },
              { icon: MdVerifiedUser, title: 'Error-Free Content', desc: 'Questions curated and multi-verified by IITians to ensure zero conceptual errors.' },
              { icon: MdArticle, title: 'Step-by-Step Solutions', desc: 'Every question includes a textual solution, short-tricks, and video explanation for hard ones.' },
              { icon: MdCheckCircleOutline, title: 'Updated Syllabus', desc: 'Strictly aligned with the revised syllabus announced recently by NTA and other bodies.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center text-primary dark:text-accent mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Free Mock Tests */}
      <div className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl">

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-widest mb-6 border border-white/30 backdrop-blur-md">
                  Experience The Platform
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Try Our Free Mock Tests</h2>
                <p className="text-white/80 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto lg:mx-0">
                  Attempt a full-length mock test without any commitment. Evaluate the quality of our questions, get your All India Rank, and check the detailed AI performance analysis instantly.
                </p>
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg active:scale-95 duration-200">
                  Sign Up For Free Trial
                </button>
              </div>

              <div className="flex-1 w-full flex flex-col gap-4">
                {freeTests.map((test, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/15 transition-colors">
                    <div>
                      <h4 className="font-bold text-white text-xl mb-3">{test.name}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-white/80">
                        <span className="flex items-center gap-1.5"><MdArticle className="w-4 h-4 text-accent" /> {test.q} Questions</span>
                        <span className="flex items-center gap-1.5"><MdSpeed className="w-4 h-4 text-accent" /> {test.t} Minutes</span>
                        <span className="px-2.5 py-1 bg-black/20 rounded-md text-xs">{test.level}</span>
                      </div>
                    </div>
                    <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-xl font-bold transition-colors shrink-0 flex items-center justify-center gap-2">
                      Start <MdPlayCircleOutline className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Student Reviews */}
      <div className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">From Aspirants to Achievers</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Stories that inspire us to keep building.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex text-amber-500 mb-6">
                  {[...Array(r.rating)].map((_, idx) => (
                    <MdStar key={idx} className="w-6 h-6" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-[15px] leading-relaxed mb-8 flex-grow">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 font-bold flex items-center justify-center text-slate-600 dark:text-slate-300 text-xl">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{r.name}</h4>
                    <p className="text-xs font-bold text-primary dark:text-accent mt-1 uppercase tracking-wider">{r.exam}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. FAQs Section (Interactive) */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Got a doubt? We're here to clear it.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white focus:outline-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  <MdExpandMore className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
                    >
                      <p className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
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
