"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, ChevronRight, Layout, ShieldCheck,
  BarChart3, Users, Sparkles, CheckCircle2,
  TrendingUp, CalendarDays, ArrowRight, XCircle
} from 'lucide-react';
import MedicalTestSeriesCards from '@/components/MedicalTestSeriesCards';
import NeetGuide from '@/components/NeetGuide';

const features = [
  { icon: Layout, title: 'NTA OMR Replica Design', desc: 'Detailed, printable mock test interfaces that help you practice bubbling OMR sheets precisely to avoid mis-bubbling panics.' },
  { icon: ShieldCheck, title: 'Error-Free NCERT Focus', desc: 'Every Biology and Chemistry question is strictly line-by-line verified against the latest revised NCERT textbooks.' },
  { icon: BarChart3, title: 'Micro-Analytics', desc: 'We pinpoint exact chapters and sub-topics where you are losing marks, providing targeted revision blueprints to cross the 680+ mark.' },
  { icon: Users, title: 'Elite Competition', desc: 'Benchmark your rank and scores directly against 1,50,000+ serious medical aspirants who are your actual competition.' }
];

export default function NeetUgStudentHubPage() {
  const [selectedMockAnswer, setSelectedMockAnswer] = useState<number | null>(null);

  const handleMockAnswer = (index: number) => {
    if (selectedMockAnswer === null) {
      setSelectedMockAnswer(index);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] w-full font-sans selection:bg-rose-200 dark:selection:bg-rose-900 overflow-x-hidden">
      
      {/* 1. Hero Section - Professional & Clean */}
      <section className="relative px-4 sm:px-6 pt-[88px] md:pt-[104px] lg:pt-[120px] pb-16 md:pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 w-full">
            <Link href="/" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams/medical-entrance" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Medical</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-gray-100 font-semibold">NEET UG 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.2] mb-6 tracking-tight">
            Score 680+ in NEET UG <br className="hidden sm:block" />
            <span className="text-rose-600 dark:text-rose-500 mt-2 block">With India's Top Test Series</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Conquer the ultimate medical entrance test with ExamBoost. Experience strictly NCERT-aligned content, 180-question pattern simulators, and meticulously curated biology tests to seal your seat in a Government Medical College.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="#test-series" className="w-full sm:w-auto justify-center bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg py-3.5 px-8 transition-colors flex items-center gap-2 shadow-lg shadow-rose-500/25">
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
              <CalendarDays className="w-6 h-6 text-rose-600 dark:text-rose-400 mb-4" />
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Target Date</div>
              <div className="text-gray-900 dark:text-white font-bold text-lg">May 2026</div>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-left">
              <Layout className="w-6 h-6 text-orange-500 dark:text-orange-400 mb-4" />
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Exam Mode</div>
              <div className="text-gray-900 dark:text-white font-bold text-lg">Pen & Paper (OMR)</div>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-sm text-left sm:col-span-2 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Government Seat Safe Score</div>
                <div className="text-gray-900 dark:text-white font-bold text-xl">650+ / 720 Marks</div>
              </div>
          </div>
        </div>
      </section>

      {/* Trust Banner / Stats */}
      <section className="py-10 bg-white dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-gray-200 dark:divide-gray-800">
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">150k+</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">Active Aspirants</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-rose-600 dark:text-rose-500 mb-2">100%</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">NCERT Aligned</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">4.8/5</div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">Student Rating</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-500 mb-2">AIIMS</div>
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
             <NeetGuide />
           </div>
         </div>
      </section>

      {/* 3. Competitive Advantage Features Grid */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Thousands of Future Doctors Choose ExamBoost</h2>
            <div className="w-16 h-1 bg-rose-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stop practicing with outdated PDFs. Build speed, eliminate careless errors, and dominate the 180 questions with our targeted ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
               <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 rounded-lg flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 font-bold text-sm mb-6 border border-rose-200 dark:border-rose-800 transition-all">
                  <TrendingUp className="w-4 h-4"/> Stop Losing Easy Marks
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.15] tracking-tight">
                  Reading the NCERT <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Isn't Enough.</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                  Merely reading textbooks won't prepare you for the intense 200-minute marathon. You need proper simulation to avoid silly OMR mistakes and manage time effectively.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-red-100 dark:border-red-900/30 shadow-sm transition-all hover:shadow-md">
                    <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 shrink-0">
                      <XCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-1.5 flex items-center gap-2">The Old Way <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 uppercase tracking-wide">Random Books</span></h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Out-of-syllabus questions, zero proper time tracking, and no realistic analytics to show where you rank against the actual crowd.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/10 dark:to-orange-900/10 border border-rose-200 dark:border-rose-800/40 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-1.5 flex items-center gap-2 flex-wrap">The ExamBoost Way <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 uppercase tracking-wide">Recommended</span></h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">100% strict NCERT alignment, time-tracking analytics to fix slow subjects, and realistic mock scores that reflect actual exam results.</p>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Interactive Biology Question Example Container */}
             <div className="order-1 lg:order-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden group w-full max-w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="flex border-b border-gray-100 dark:border-gray-800 pb-3 mb-4 items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded flex items-center justify-center font-bold text-[10px] shadow-sm">NEET</div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 dark:text-gray-100">NEET Premium Mock 04</div>
                        <div className="text-[10px] text-gray-500 font-medium mt-0.5">Biology • Botany Section A</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-[11px] font-mono font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
                        02:20:45
                     </span>
                   </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-1 pb-4">
                    <div className="flex items-start gap-2 mb-4">
                      <span className="text-sm font-bold text-gray-900 dark:text-white mt-0.5 shrink-0">Q135.</span>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                        Given below are two statements relating to Biotechnology: <br/><br/>
                        <span className="block pl-2 mb-2 italic"><strong className="font-bold not-italic">Statement I:</strong> Restriction endonucleases are also called 'molecular scissors' and they cut the DNA helix at specific sugar-phosphate backbone sites.</span>
                        <span className="block pl-2 mb-2 italic"><strong className="font-bold not-italic">Statement II:</strong> EcoRI cuts the DNA between bases G and A only when the sequence GAATTC is present in the DNA.</span>
                        In the light of the above statements, choose the most appropriate answer from the options given below:
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {['Both Statement I and Statement II are correct', 'Both Statement I and Statement II are incorrect', 'Statement I is correct but Statement II is incorrect', 'Statement I is incorrect but Statement II is correct'].map((opt, i) => {
                        const isSelected = selectedMockAnswer === i;
                        const isCorrect = i === 0; // Option A is correct
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
                          className="bg-rose-50/50 dark:bg-rose-900/10 rounded-lg p-4 border border-rose-100 dark:border-gray-700 overflow-hidden"
                        >
                          <div className="flex gap-2 items-center mb-3">
                             {selectedMockAnswer === 0 ? (
                               <div className="flex items-center gap-1.5 text-green-600 font-bold text-sm bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                                 <CheckCircle2 className="w-4 h-4"/> Perfect Analysis!
                               </div>
                             ) : (
                               <div className="flex items-center gap-1.5 text-red-600 font-bold text-sm bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">
                                 <div className="w-4 h-4 flex items-center justify-center rounded-full bg-red-600 text-white text-[10px]">X</div> 
                                 Incorrect Fact
                               </div>
                             )}
                          </div>
                          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            <strong className="text-gray-900 dark:text-gray-100 block mb-1">Detailed Solution (NCERT Class XII Pg-195,196):</strong>
                            <strong>Statement I is correct.</strong> Restriction enzymes belong to a larger class of enzymes called nucleases. They are referred to as molecular scissors and they cut the DNA by inspecting the length of a DNA sequence to find their specific recognition sequence. <br/>
                            <strong>Statement II is correct.</strong> EcoRI specifically recognises the palindromic sequence GAATTC and cuts the DNA between bases G and A, leaving sticky ends.
                            <br/><br/>
                            <span className="text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1"><Sparkles className="w-3 h-3"/>AIIMS Topper Tip:</span> For "Statement-based" questions, always evaluate each statement completely independently in your mind first before looking at the options. This prevents option-induced confusion!
                          </p>
                          <Link href="#test-series" className="block w-full text-center bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white font-bold py-3 rounded-md text-sm transition-all shadow-md shadow-rose-500/20 hover:shadow-rose-500/40 transform hover:-translate-y-0.5">
                            Practice More Questions & Unlock Test Series
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Premium NEET UG Packages
            </h2>
            <div className="w-16 h-1 bg-rose-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl text-lg">
              Select the targeted practice package below to get instant access to the exact simulation of the medical entrance exam.
            </p>
          </div>
          
          <MedicalTestSeriesCards examName="NEET UG" />
        </div>
      </section>

    </div>
  );
}
