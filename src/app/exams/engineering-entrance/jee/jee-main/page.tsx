"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, ChevronRight, Layout, ShieldCheck,
  BarChart3, Users, Sparkles, CheckCircle2,
  TrendingUp, ChevronDown, Lock, CalendarDays, ArrowRight, XCircle
} from 'lucide-react';
import JeeTestSeriesCards from '@/components/JeeTestSeriesCards';
import JeeMainGuide from '@/components/JeeMainGuide';

const features = [
  { icon: Layout, title: 'NTA CBT Replica', desc: 'The exact font, scrollbars, color palettes, and mark-for-review toggles as the real TCS iON testing software.' },
  { icon: ShieldCheck, title: 'Error-Free Numericals', desc: 'Every numerical value type question is verified by IITian subject matter experts. Stop wasting time on bad question banks.' },
  { icon: BarChart3, title: 'Micro-Analytics', desc: 'We don\'t just give an AIR. We isolate variables like time-spent-on-unattempted-questions to fix your strategy.' },
  { icon: Users, title: 'Elite Competition', desc: 'Benchmark your physics percentile directly against 50,000+ serious aspirants who are your actual shift competition.' }
];

const faqs = [
  { q: "Is the interface really identical to the NTA CBT?", a: "Yes. The color-coding (Green for answered, Red for unanswered), the on-screen calculator, and the exact screen layout are completely replicated to eliminate exam-day UI anxiety." },
  { q: "Do the mock tests include the new numerical value type questions?", a: "Absolutely. 100% of our mock tests feature the mandatory Section B consisting of numerical value type questions with no negative marking, exactly aligned with the latest JEE Main circulars." },
  { q: "How accurate is the Percentile Predictor?", a: "Extremely accurate. Because JEE Main relies heavily on shift-wise normalization rather than raw scores, we calculate your predicted percentile by comparing your performance dynamically against our massive active user base." },
  { q: "Are solutions provided for every single question?", a: "Yes, immediately upon submitting the test, you receive detailed, step-by-step text and video solutions. We also provide alternative 'short-trick' methods wherever applicable to save time." }
];

const testimonials = [
  { name: "Rahul S.", rank: "AIR 842", text: "The interface was exactly like the real exam. It completely removed my exam-day anxiety. Highly recommend for serious aspirants." },
  { name: "Priya M.", rank: "99.8 Percentile", text: "The numerical type questions are of very high quality. The detailed solutions helped me catch my silly mistakes." },
  { name: "Aman K.", rank: "99.5 Percentile", text: "ExamBoost's analytics are unmatched. Identifying where I wasted time was the key to improving my score. The mock test simulation is flawless." }
];

export default function JeeMainStudentHubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedMockAnswer, setSelectedMockAnswer] = useState<number | null>(null);

  const handleMockAnswer = (index: number) => {
    if (selectedMockAnswer === null) {
      setSelectedMockAnswer(index);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] w-full font-sans selection:bg-blue-200 dark:selection:bg-blue-900 overflow-x-hidden">
      
      {/* 1. Hero Section - Professional & Clean */}
      <section className="relative px-4 sm:px-6 pt-[88px] md:pt-[104px] lg:pt-[120px] pb-16 md:pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 w-full">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams/engineering-entrance" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Engineering</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-gray-100 font-semibold">JEE Main 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.2] mb-6 tracking-tight">
            Crack JEE Main 2026 <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-500 mt-2 block">With India's Top Test Series</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Get official NTA syllabus updates, exact chapter weightage, exam dates, and practice on an interface that perfectly replicates the real TCS iON platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="#test-series" className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg py-3.5 px-8 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/25">
              View Test Packages <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#info-hub" className="w-full sm:w-auto justify-center text-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-lg py-3.5 px-8 transition-colors">
              Syllabus & Details
            </Link>
          </div>
        </div>

        {/* Info Cards Side */}
        <div className="w-full lg:w-[450px] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-left">
              <CalendarDays className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-4" />
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Session 1 Target</div>
              <div className="text-gray-900 dark:text-white font-bold text-lg">Jan 21-30, 2026</div>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-left">
              <Layout className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-4" />
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Exam Mode</div>
              <div className="text-gray-900 dark:text-white font-bold text-lg">Computer Based (CBT)</div>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-left sm:col-span-2 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Target Safe Score (NIT)</div>
                <div className="text-gray-900 dark:text-white font-bold text-xl">185+ / 300 Marks</div>
              </div>
          </div>
        </div>
      </section>

      {/* Trust Banner / Stats */}
      <section className="py-10 bg-white dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-gray-200 dark:divide-gray-800">
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">50k+</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">Active Aspirants</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-500 mb-2">100%</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">NTA UI Replica</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">4.9/5</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">Student Rating</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-500 mb-2">IITian</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">Curated Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL IN ONE GUIDE (Syllabus, Pattern, News) */}
      <section className="py-16 bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-gray-800" id="info-hub">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="mb-10 text-center">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Official NTA Updates & Information</h2>
             <p className="text-gray-600 dark:text-gray-400 text-lg">Read the exact syllabus, date sheets, and exam pattern rules without leaving this page.</p>
           </div>
           
           <div className="w-full">
             <JeeMainGuide />
           </div>
         </div>
      </section>

      {/* 3. Competitive Advantage Features Grid */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Thousands of Students Choose ExamBoost</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stop practicing with outdated PDFs. Experience our pixel-perfect interface that matches the real exam.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
               <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                   <feature.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                 <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                   {feature.desc}
                 </p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Problem/Solution Matrix - Redesigned cleanly */}
      <section className="py-24 bg-gray-50 dark:bg-[#111] border-t border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold text-sm mb-6 border border-blue-200 dark:border-blue-800 transition-all">
                  <TrendingUp className="w-4 h-4"/> 10x Your Prep Efficiency
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.15] tracking-tight">
                  Reading the Syllabus <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Isn't Enough.</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                  Solving static textbooks won't prepare you for the intense time pressure and interface nuances of the real NTA test player. You need proper simulation.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-red-100 dark:border-red-900/30 shadow-sm transition-all hover:shadow-md">
                    <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 shrink-0">
                      <XCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-1.5 flex items-center gap-2">The Old Way <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 uppercase tracking-wide">PDFs & Books</span></h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">No strict time tracking, outdated question patterns, and absolute zero familiarity with the CBT "Mark for Review" mechanics.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200 dark:border-blue-800/40 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-1.5 flex items-center gap-2 flex-wrap">The ExamBoost Way <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 uppercase tracking-wide">Recommended</span></h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">100% accurate NTA software clone, strict time tracking for numericals, predictive normalization ranks, and updated 2026 syllabus compliance.</p>
                    </div>
                  </div>
                </div>
             </div>
             <div className="order-1 lg:order-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden group w-full max-w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                {/* Mock UI representation - NTA Style */}
                <div className="flex border-b border-gray-100 dark:border-gray-800 pb-3 mb-4 items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center font-bold text-[10px] shadow-sm">JEE</div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 dark:text-gray-100">JEE Main 2026 Simulator</div>
                        <div className="text-[10px] text-gray-500 font-medium mt-0.5">Physics • Section A (MCQ)</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-[11px] font-mono font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
                        01:45:10
                     </span>
                   </div>
                </div>

                <div className="flex gap-5">
                  {/* Question Area */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-start gap-2 mb-4">
                      <span className="text-sm font-bold text-gray-900 dark:text-white mt-0.5 shrink-0">Q1.</span>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                        A particle of mass <span className="italic">m</span> is projected with a velocity <span className="italic">v</span> making an angle of 45° with the horizontal. What is the magnitude of the angular momentum of the projectile about the point of projection at its maximum height?
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {['A)  m√(2gh³)', 'B)  mv³ / (4√2 g)', 'C)  zero', 'D)  m√(gh³/2)'].map((opt, i) => {
                        const isSelected = selectedMockAnswer === i;
                        const isCorrect = i === 1;
                        const showResult = selectedMockAnswer !== null;
                        
                        let bgClass = "hover:bg-gray-50 dark:hover:bg-gray-800/50 border-gray-100 dark:border-gray-800";
                        let ringClass = "border-gray-300 dark:border-gray-600";
                        let textClass = "text-gray-700 dark:text-gray-300";

                        if (showResult) {
                          if (isCorrect) {
                            bgClass = "bg-green-50/80 dark:bg-green-900/20 border-green-200 dark:border-green-800/50";
                            ringClass = "border-[5px] border-green-500 bg-white dark:bg-gray-900";
                            textClass = "text-green-800 dark:text-green-300 font-semibold";
                          } else if (isSelected && !isCorrect) {
                            bgClass = "bg-red-50/80 dark:bg-red-900/20 border-red-200 dark:border-red-800/50";
                            ringClass = "border-[5px] border-red-500 bg-white dark:bg-gray-900";
                            textClass = "text-red-800 dark:text-red-300 font-semibold";
                          }
                        }

                        return (
                          <div 
                            key={i}
                            onClick={() => handleMockAnswer(i)}
                            className={`flex gap-3 items-center p-2.5 rounded-lg border cursor-pointer transition-all ${bgClass}`}
                          >
                            <div className={`w-4 h-4 rounded-full border-2 shrink-0 transition-all ${ringClass}`}></div>
                            <div className={`text-xs font-medium ${textClass}`}>{opt}</div>
                          </div>
                        )
                      })}
                    </div>
                    
                    <AnimatePresence>
                      {selectedMockAnswer !== null && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                          className="bg-blue-50/50 dark:bg-blue-900/10 rounded-lg p-4 border border-blue-100 dark:border-gray-700 overflow-hidden"
                        >
                          <div className="flex gap-2 items-center mb-3">
                             {selectedMockAnswer === 1 ? (
                               <div className="flex items-center gap-1.5 text-green-600 font-bold text-sm bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                                 <CheckCircle2 className="w-4 h-4"/> Correct Formulation!
                               </div>
                             ) : (
                               <div className="flex items-center gap-1.5 text-red-600 font-bold text-sm bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">
                                 <div className="w-4 h-4 flex items-center justify-center rounded-full bg-red-600 text-white text-[10px]">X</div> 
                                 Incorrect Approach
                               </div>
                             )}
                          </div>
                          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            <strong className="text-gray-900 dark:text-gray-100 block mb-1">Detailed Solution:</strong>
                            Velocity at max height is strictly horizontal: <span className="font-semibold">v_x = v cos(45°) = v/√2</span>. <br/>
                            The max height attained is <span className="font-semibold">H = v² sin²(45°) / 2g = v² / 4g</span>. <br/>
                            Angular momentum about projection point: <span className="font-semibold text-blue-700 dark:text-blue-400">L = m(v_x)(H) = m(v/√2)(v²/4g) = mv³ / 4√2g</span>. 
                            <br/><br/>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1"><Sparkles className="w-3 h-3"/>Topper's Tip:</span> Always remember L = m(v_perpendicular)r to save 30 seconds!
                          </p>
                          <Link href="#test-series" className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-md text-sm transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
                            Practice More Questions & Unlock Test Series
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Question Palette */}
                  <div className="w-[84px] border-l border-gray-100 dark:border-gray-800 pl-4 hidden sm:block shrink-0">
                     <div className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-wider text-center">Palette</div>
                     <div className="grid grid-cols-2 gap-2">
                        <div className="w-7 h-7 rounded-t-md rounded-br-md bg-emerald-500 shadow-sm shadow-emerald-500/20 text-white flex items-center justify-center text-[10px] font-bold">1</div>
                        <div className="w-7 h-7 rounded-t-md rounded-br-md bg-red-500 shadow-sm shadow-red-500/20 text-white flex items-center justify-center text-[10px] font-bold">2</div>
                        <div className="w-7 h-7 bg-gray-50 dark:bg-gray-800 text-gray-500 flex items-center justify-center text-[10px] font-bold border border-gray-200 dark:border-gray-700 rounded-md">3</div>
                        <div className="w-7 h-7 rounded-full bg-purple-500 shadow-sm shadow-purple-500/20 text-white flex items-center justify-center text-[10px] font-bold">4</div>
                        <div className="w-7 h-7 rounded-t-md rounded-br-md bg-emerald-500 shadow-sm shadow-emerald-500/20 text-white flex items-center justify-center text-[10px] font-bold">5</div>
                        <div className="w-7 h-7 bg-gray-50 dark:bg-gray-800 text-gray-500 flex items-center justify-center text-[10px] font-bold border border-gray-200 dark:border-gray-700 rounded-md">6</div>
                     </div>
                  </div>
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing / Packages Panel */}
      <section id="test-series" className="py-24 bg-white dark:bg-[#0A0A0A] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-bold text-sm mb-4">
              <Lock className="w-4 h-4"/> Registration Open for 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Premium Test Series Packages
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl text-lg">
              Select the targeted practice package below to get instant access to the NTA simulator interface and verified solutions.
            </p>
          </div>

          <div className="w-full">
            <JeeTestSeriesCards examName="JEE Main" />
          </div>
        </div>
      </section>

      {/* 6. Success Stories / Testimonials */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Top Rankers</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from students who achieved their dream NITs and IITs using our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-400 mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">{t.rank}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-gray-50 dark:bg-[#111] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
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