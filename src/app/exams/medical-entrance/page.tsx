"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  PlayCircle,
  FileText,
  Target,
  ShieldCheck,
  Activity,
  Star,
  CheckCircle2,
  Laptop,
  Users,
  ChevronDown,
  Award,
  Clock,
  BarChart,
  BrainCircuit,
  Microscope,
  Stethoscope,
  HeartPulse,
  Syringe
} from 'lucide-react';

const popularExams = [
  {
    name: 'NEET UG',
    fullName: 'National Eligibility cum Entrance Test',
    desc: 'The single gateway for MBBS, BDS, and AYUSH courses in top Indian medical colleges.',
    tests: 65,
    pattern: 'NTA Pattern',
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    href: '/series/mock-neet-1',
    icon: Stethoscope,
    popular: true
  },
  {
    name: 'AIIMS Nursing',
    fullName: 'AIIMS B.Sc (Hons.) Nursing',
    desc: 'Entrance test for the highly prestigious nursing programs across all AIIMS institutes.',
    tests: 25,
    pattern: 'CBT Mode',
    subjects: ['Physics', 'Chemistry', 'Biology', 'GK'],
    href: '/exams/medical-entrance/aiims-nursing',
    icon: HeartPulse
  },
  {
    name: 'JIPMER',
    fullName: 'JIPMER Paramedical',
    desc: 'Specialized test series targeting JIPMER nursing and allied health science courses.',
    tests: 15,
    pattern: 'Speed & Accuracy',
    subjects: ['Core Sciences', 'English'],
    href: '/exams/medical-entrance/jipmer',
    icon: Syringe
  },
  {
    name: 'AFMC',
    fullName: 'Armed Forces Medical College',
    desc: 'Special screening tests covering TOELR and psychological assessments for AFMC.',
    tests: 20,
    pattern: 'Interview Prep',
    subjects: ['Logic', 'English', 'Science'],
    href: '/exams/medical-entrance/afmc',
    icon: ShieldCheck
  }
];

const freeTests = [
  { name: 'NEET 2024 Full Syllabus Mock - 1', q: 200, t: 200, level: 'NTA Level' },
  { name: 'Human Physiology Part Test', q: 90, t: 90, level: 'Advanced NCERT' },
  { name: 'Physical Chemistry Mini Mock', q: 50, t: 60, level: 'Moderate' }
];

const reviews = [
  { name: 'Kavya Verma', exam: 'NEET Score: 685', rating: 5, text: 'The NCERT-line-by-line concept matching in these mock tests is unparalleled. Every biology question felt exactly like the real NEET paper.' },
  { name: 'Arjun Nair', exam: 'AIIMS Delhi', rating: 5, text: 'The assertion-reasoning questions practiced here gave me the highest confidence. Analytics isolated my physics calculation errors perfectly.' },
  { name: 'Snigdha Dev', exam: 'NEET Score: 650', rating: 5, text: 'No extra syllabus fluff. Only highly concentrated, relevant questions that actually test your pressure-handling capabilities.' },
];

const faqs = [
  { q: "Do the mock tests follow the latest NCERT rationalized syllabus?", a: "Yes, our academic team strictly updates every single question bank to align completely with the latest NMC guidelines and rationalized NCERT chapters." },
  { q: "Is the interface similar to the actual NTA exam?", a: "Absolutely. We simulate the exact graphical user interface of the NTA CBT, including the color coding for visited, unattempted, and flagged questions." },
  { q: "How detailed are the Botany and Zoology solutions?", a: "Every single biology question comes with a mapped NCERT page number reference, along with detailed diagrams and explanations to ensure zero conceptual gaps." },
  { q: "Can I take part-tests if I haven't completed my syllabus?", a: "Yes, our series includes 50+ part tests and half-syllabus tests that you can tackle parallel to your coaching institute's curriculum." }
];

export default function MedicalEntrancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 pb-12 w-full overflow-x-hidden font-sans selection:bg-[#14B8A6]/30">
      
      {/* 1. HERO SECTION - Medical Flat UI Variant */}
      <section className="relative px-4 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] w-full bg-white dark:bg-[#060D1A] border-b-[1.5px] border-slate-100 dark:border-slate-800 overflow-hidden">
        
        {/* Medical Specific Geometric Decors (Pills & Crosses instead of half-circles) */}
        <div className="absolute top-20 left-[10%] w-24 h-48 bg-teal-50 dark:bg-[#14B8A6]/10 rounded-full hidden lg:block border-[3px] border-[#14B8A6]/20 rotate-45 transform origin-center"></div>
        <div className="absolute bottom-20 right-[15%] w-32 h-32 bg-teal-50 dark:bg-[#14B8A6]/10 rounded-3xl hidden md:block border-[3px] border-[#14B8A6]/20 rotate-12"></div>
        
        {/* Medical Cross Graphic (+) */}
        <div className="absolute top-40 right-[25%] opacity-20 hidden lg:block z-0">
            <div className="w-16 h-4 bg-[#14B8A6] absolute top-6 -left-6 rounded-full"></div>
            <div className="w-4 h-16 bg-[#14B8A6] rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 py-20">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-teal-50 dark:bg-[#14B8A6]/10 text-slate-800 dark:text-[#14B8A6] text-sm font-black tracking-widest uppercase mb-10 border-2 border-teal-200 dark:border-[#14B8A6]/20"
            >
            <Microscope className="w-4 h-4 text-[#14B8A6]" />
            <span>Target NEET UG 2024-25</span>
            </motion.div>
            
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter"
            >
            Secure Your <br className="hidden md:block" />
            <span className="text-[#14B8A6] relative inline-block">
                White Coat
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-[#14B8A6]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" d="M10,10 L30,5 L50,15 L70,8 L90,12" />
                </svg>
            </span>
            <br className="hidden md:block" /> This Year.
            </motion.h1>
            
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-medium"
            >
            NCERT line-by-line questions, flawless answer keys, and completely flat data analytics to identify every single misconception.
            </motion.p>
            
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4"
            >
            <Link href="#medical-series" className="px-10 py-5 w-full sm:w-auto rounded-xl bg-[#14B8A6] hover:bg-[#0f766e] text-white font-black text-lg transition-colors flex items-center justify-center gap-3">
                Explore Series <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-10 py-5 w-full sm:w-auto rounded-xl bg-transparent border-[3px] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-black text-lg hover:border-[#14B8A6] hover:text-[#14B8A6] transition-colors flex items-center justify-center gap-3">
                Attempt Diagnostic Test <HeartPulse className="w-5 h-5" />
            </button>
            </motion.div>
        </div>
      </section>

      {/* Trust Scrolling Ticker - Solid colors */}
      <section className="w-full bg-[#14B8A6] py-6 overflow-hidden flex items-center relative z-10">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-white font-black text-lg md:text-2xl uppercase tracking-widest">
             <span className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" /> 100% NCERT Aligned</span>
             <span className="flex items-center gap-4"><Stethoscope className="w-6 h-6 md:w-8 md:h-8" /> Verified By Doctors</span>
             <span className="flex items-center gap-4"><BarChart className="w-6 h-6 md:w-8 md:h-8" /> Precision Analytics</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8" /> 1,50,000+ Aspirants</span>
             <span className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" /> 100% NCERT Aligned</span>
             <span className="flex items-center gap-4"><Stethoscope className="w-6 h-6 md:w-8 md:h-8" /> Verified By Doctors</span>
             <span className="flex items-center gap-4"><BarChart className="w-6 h-6 md:w-8 md:h-8" /> Precision Analytics</span>
             <span className="flex items-center gap-4"><Users className="w-6 h-6 md:w-8 md:h-8" /> 1,50,000+ Aspirants</span>
           </div>
        </div>
      </section>

      {/* 2. Structured by Top Performers (MEDICAL VARIANT) */}
      <section className="py-24 bg-white dark:bg-[#060D1A] overflow-hidden relative border-b-[1.5px] border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-[1.2] w-full items-center text-center md:text-left order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">Vetted by <br/><span className="text-[#14B8A6]">Top Medical</span> Faculty.</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
               Every paper is rigorously screened by a board of seasoned doctors and elite biology educators to ensure zero ambiguity and perfect syllabus correlation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-[#14B8A6] dark:hover:bg-[#14B8A6] dark:hover:text-white transition-colors shadow-sm">
                  View Our Panel <ArrowRight className="w-5 h-5" />
                </button>
            </div>
          </div>

          <div className="flex-1 w-full relative flex justify-center lg:justify-end order-1 md:order-2">
             {/* Abstract Medical Cutout (Soft rounded square matrix) */}
             <div className="w-full max-w-[400px] aspect-square relative grid grid-cols-2 grid-rows-2 gap-4">
                 <div className="col-span-1 row-span-2 bg-[#14B8A6] rounded-l-[3rem] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Doctor" />
                 </div>
                 <div className="col-span-1 row-span-1 bg-slate-900 dark:bg-slate-800 rounded-tr-[3rem] flex items-center justify-center p-6 text-white text-center flex-col gap-2 relative overflow-hidden">
                    <Award className="w-10 h-10 text-[#14B8A6]" />
                    <span className="font-black text-lg">AIIMS Delhi</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Mentors</span>
                 </div>
                 <div className="col-span-1 row-span-1 bg-teal-50 dark:bg-[#0F172A] rounded-br-[3rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581594693702-fbdc51f12d83?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Study" />
                 </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* 3. Target Exams Grid (Flat Neumorphic/Clean Box Style) */}
      <section id="medical-series" className="py-24 md:py-32 bg-slate-50 dark:bg-[#0B1120] scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Choose Your Mission</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:mx-auto">Tailored mock test series focused intensively on the unique constraints of each major exam.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularExams.map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-8 rounded-[2rem] bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 hover:border-[#14B8A6] dark:hover:border-[#14B8A6] transition-colors relative block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-[#14B8A6] text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest">HIGHEST YIELD</span>
                )}
                <div className="w-16 h-16 rounded-2xl bg-teal-50 dark:bg-slate-800 flex items-center justify-center text-[#14B8A6] mb-6 group-hover:bg-[#14B8A6] group-hover:text-white transition-colors">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3 group-hover:text-[#14B8A6] transition-colors">{exam.name}</h3>
                <p className="text-base font-medium text-slate-600 dark:text-slate-400 mb-6 min-h-[60px]">{exam.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {exam.subjects.map((sub, i) => (
                      <span key={i} className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-transparent px-3 py-1 rounded-md">{sub}</span>
                    ))}
                </div>

                <div className="flex items-center text-[#14B8A6] font-black tracking-wide group-hover:underline">
                  View Test Series <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Anatomy of Analytics Section (Flat & Structured) */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#060D1A] border-y-[1.5px] border-slate-100 dark:border-slate-800/80 relative overflow-hidden">
         {/* Decoration: Flat Grid line */}
         <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px', color: '#14B8A6' }}>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 w-full max-w-lg relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
                {/* Visual Representation of Analytics (Pill bars instead of normal bars) */}
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="z-20 w-full bg-slate-50 dark:bg-[#0F172A] rounded-[3rem] border-[4px] border-slate-200 dark:border-slate-800 p-8 pt-10"
                >
                  <div className="flex justify-between items-end mb-10">
                      <div>
                          <h4 className="font-black font-serif text-slate-900 dark:text-white text-2xl mb-1">Concept Mastery</h4>
                          <p className="text-sm font-bold text-[#14B8A6] uppercase tracking-widest">Botany Unit V</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-[6px] border-[#14B8A6] flex items-center justify-center font-black text-xl text-slate-900 dark:text-white">A+</div>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { name: 'Genetics', score: 95, color: 'bg-emerald-500' },
                      { name: 'Ecology', score: 80, color: 'bg-[#14B8A6]' },
                      { name: 'Cell Unit', score: 65, color: 'bg-rose-500' },
                    ].map((sub, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex justify-between text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                          <span>{sub.name}</span>
                          <span>{sub.score}%</span>
                        </div>
                        {/* Segmented flat bar */}
                        <div className="w-full flex gap-1 h-5">
                            {[1,2,3,4,5,6,7,8,9,10].map((block) => (
                                <div key={block} className={`flex-1 rounded-sm ${block * 10 <= sub.score ? sub.color : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
            </div>

            <div className="flex-[1.2] order-1 lg:order-2">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-[#14B8A6]/10 text-teal-700 dark:text-[#14B8A6] text-sm font-black uppercase tracking-widest mb-8 border-2 border-teal-200 dark:border-[#14B8A6]/20">
                  <Activity className="w-5 h-5" />
                  <span>Clinical Precision</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
                  Autopsy of Your <br/> Performance.
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-xl md:text-2xl font-medium mb-10 leading-relaxed">
                  Go beyond just "marks scored". We dissect your attempts to reveal negative marking hotspots, topic-level weaknesses, and time-sync issues.
               </p>
               
               <ul className="space-y-8">
                 {[
                   { icon: Microscope, title: 'Concept Isolation', desc: 'Pinpoint exactly which paragraph or concept from NCERT is consistently dragging scoring down.' },
                   { icon: HeartPulse, title: 'Pressure Metrics', desc: 'Track your accuracy trajectory in the final 30 minutes of the exam simulation.' }
                 ].map((fp, i) => (
                   <li key={i} className="flex items-start gap-5">
                     <div className="bg-slate-100 dark:bg-slate-800 p-4 border-[3px] border-slate-200 dark:border-slate-700 rounded-[20px] mt-1"><fp.icon className="w-6 h-6 text-[#14B8A6]" /></div>
                     <div>
                       <h4 className="font-black text-2xl font-serif text-slate-900 dark:text-white mb-2">{fp.title}</h4>
                       <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">{fp.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
         </div>
      </section>

      {/* 5. Free Mock Tests - Medical Section Solid Block */}
      <section className="py-24 bg-slate-100 dark:bg-[#0B1120] border-y-[1.5px] border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 dark:bg-[#060D1A] border-[4px] border-[#14B8A6] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col xl:flex-row gap-10 xl:gap-16 items-center shadow-lg pt-16 xl:pt-16">
            
            {/* Flat Geo Decors - Medical Crosses */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-[8px] border-[#14B8A6] rounded-[3rem] opacity-20 transform rotate-12"></div>
            <div className="absolute bottom-10 center w-full flex justify-center opacity-5 gap-10 pointer-events-none">
                 <div className="text-[10rem] font-black font-serif text-[#14B8A6]">+</div>
                 <div className="text-[10rem] font-black font-serif text-[#14B8A6]">+</div>
                 <div className="text-[10rem] font-black font-serif text-[#14B8A6]">+</div>
            </div>

            {/* Inset Photo */}
            <div className="hidden xl:flex w-[320px] relative items-center justify-center shrink-0">
                <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Evaluation Student" 
                    className="w-full h-[400px] object-cover rounded-full border-4 border-[#14B8A6] shadow-[0_0_0_10px_rgba(20,184,166,0.1)] grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <div className="flex-1 text-center xl:text-left relative z-20 w-full pl-0">
              <h2 className="text-4xl lg:text-5xl font-black font-serif mb-6 leading-tight">Evaluate The <br/>Standard For Free.</h2>
              <p className="text-slate-300 text-xl font-medium mb-10 max-w-lg mx-auto xl:mx-0 leading-relaxed">
                Take a fully functional diagnostic mock paper right now. No credit card, no commitments. Just flawless NCERT-backed questions.
              </p>
              <button className="bg-[#14B8A6] text-white px-10 py-5 rounded-2xl font-black transition-colors w-full sm:w-auto hover:bg-[#0f766e] flex items-center justify-center gap-3">
                Create Free Account <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-[1.2] w-full flex flex-col gap-5 relative z-20">
              {freeTests.map((test, idx) => (
                <div key={idx} className="bg-slate-800 dark:bg-slate-800/80 border-l-[6px] border-[#14B8A6] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:translate-x-2 transition-transform">
                  <div>
                    <h4 className="font-black font-serif text-white text-xl mb-3">{test.name}</h4>
                    <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-wider">
                      <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-[#14B8A6]" /> {test.q} Qs</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#14B8A6]" /> {test.t} Mins</span>
                    </div>
                  </div>
                  <button className="text-sm font-black text-slate-900 bg-white hover:bg-slate-200 px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0">
                     Start <PlayCircle className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Reviews (Clean bordered cards) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
           <div className="inline-flex items-center mx-auto gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-black tracking-widest uppercase mb-6 border-2 border-slate-200 dark:border-slate-700">
             <Star className="w-4 h-4 text-[#14B8A6]" />
             <span>Proven Impact</span>
           </div>
          <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-6">Future Doctors Trust Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#0F172A] border-[3px] border-slate-200 dark:border-slate-800 p-8 rounded-br-[3rem] rounded-tl-[3rem] rounded-bl-xl rounded-tr-xl flex flex-col gap-8 hover:-translate-y-2 hover:border-[#14B8A6]/50 transition-all duration-300">
              <div className="flex text-[#14B8A6] gap-2">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed flex-grow">
                "{r.text}"
              </p>
              <div className="mt-auto pt-6 border-t-[3px] border-slate-100 dark:border-slate-800 border-dashed flex items-center gap-5">
                <div className="w-14 h-14 bg-teal-50 dark:bg-slate-900 text-[#14B8A6] dark:text-[#14B8A6] rounded-full flex items-center justify-center font-black text-2xl border-2 border-[#14B8A6]">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-lg text-slate-900 dark:text-white mb-1 group-hover:text-[#14B8A6] transition-colors">{r.name}</h4>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{r.exam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-800/80 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-serif text-slate-900 dark:text-white">Frequently Asked</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0F172A] border-[2px] border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:border-[#14B8A6]/30 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-8 flex items-center justify-between font-black text-lg md:text-xl text-slate-900 dark:text-white hover:text-[#14B8A6] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <span className="pr-6">{faq.q}</span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-[2px] transition-all duration-300 ${openFaq === idx ? 'bg-[#14B8A6] text-white border-transparent rotate-180' : 'bg-transparent border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'}`}>
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
                      <p className="px-8 pb-8 text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed pt-2 border-t-[1.5px] border-dashed border-slate-200 dark:border-slate-800 mx-8 mt-2">
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
