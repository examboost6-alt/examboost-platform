import React from 'react';
import Link from 'next/link';
import { Target, Activity, Stethoscope, ArrowRight, FileText, BarChart, Clock, CheckCircle, BrainCircuit, ShieldCheck, Microscope, BookOpen, Award } from 'lucide-react';

export const metadata = {
  title: 'Medical Entrance Exams (NEET UG, AIIMS) - ExamBoost',
  description: 'Comprehensive test series for NEET UG, AIIMS, and other medical entrance exams. Practice with expertly crafted mock tests.',
};

export default function MedicalEntrancePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 pb-12 w-full overflow-x-hidden font-sans">
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Static Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-sm font-semibold mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800 backdrop-blur-sm">
          <Activity className="w-4 h-4 animate-bounce" />
          <span>India's Top Medical Prep</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-6 max-w-5xl tracking-tight px-2">
          Achieve Your Dream of <br className="hidden md:block"/> Becoming a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">Doctor</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed px-4">
          Crack NEET UG and top medical entrance exams with ExamBoost's precision-crafted mock tests, strictly aligned with the latest NCERT syllabus.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 relative z-10">
          <Link href="#test-series" className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore Test Series <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/free-mock-tests" className="px-8 py-4 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg">
            Attempt Free Mock
          </Link>
        </div>
      </section>

      {/* Trust Ticker Section (Organic breaks the box flow) */}
      <section className="w-full bg-emerald-900 py-4 md:py-5 overflow-hidden border-y border-emerald-800 flex items-center shadow-inner relative z-10 pointer-events-none">
        <div className="flex w-[400%] md:w-[200%] animate-[slide_25s_linear_infinite] whitespace-nowrap">
           <div className="flex gap-8 md:gap-32 px-4 md:px-8 items-center text-emerald-100 font-bold text-sm md:text-xl">
             <span className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-emerald-400" /> 2,00,000+ Enrolled Students</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-emerald-400" /> 1500+ Selections Last Year</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-emerald-400" /> 99.9% Top Percentile Achievers</span>
             <span className="flex items-center gap-3"><Activity className="w-6 h-6 text-emerald-400" /> 50+ Live Test Series</span>
             <span className="flex items-center gap-3"><Microscope className="w-6 h-6 text-emerald-400" /> Verified NCERT Curriculum</span>
             <span className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-emerald-400" /> 2,00,000+ Enrolled Students</span>
             <span className="flex items-center gap-3"><Target className="w-6 h-6 text-emerald-400" /> 1500+ Selections Last Year</span>
             <span className="flex items-center gap-3"><Award className="w-6 h-6 text-emerald-400" /> 99.9% Top Percentile Achievers</span>
             <span className="flex items-center gap-3"><Activity className="w-6 h-6 text-emerald-400" /> 50+ Live Test Series</span>
             <span className="flex items-center gap-3"><Microscope className="w-6 h-6 text-emerald-400" /> Verified NCERT Curriculum</span>
           </div>
        </div>
         <style dangerouslySetInnerHTML={{__html: `
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
      </section>

      {/* 2. Top Medical Exams Grid */}
      <section className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Target Exams</h2>
            <p className="text-slate-600 dark:text-slate-400">Choose your examination and access specialized test series.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'NEET UG', desc: 'National Eligibility cum Entrance Test', icon: Stethoscope, popular: true, href: '/exams/medical-entrance/neet-ug' },
              { name: 'AIIMS Nursing', desc: 'B.Sc. (Hons.) Nursing Entrance', icon: Microscope, href: '/exams/medical-entrance/aiims-nursing' },
              { name: 'JIPMER', desc: 'Nursing & Paramedical', icon: Activity, href: '/exams/medical-entrance/jipmer' },
              { name: 'AFMC', desc: 'Armed Forces Medical College', icon: ShieldCheck, href: '/exams/medical-entrance/afmc' },
            ].map((exam, i) => (
              <Link key={i} href={exam.href} className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-all relative overflow-hidden block">
                {exam.popular && (
                  <span className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">HOT</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <exam.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exam.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 h-10">{exam.desc}</p>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  View Series <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Offerings */}
      <section id="test-series" className="py-20 max-w-7xl mx-auto px-6 scroll-mt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Comprehensive Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Everything You Need to Crack Medical Exams</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our platform provides an end-to-end testing ecosystem designed specifically for medical aspirants targeting top-tier government colleges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Chapter-wise Practice', desc: 'Master every single chapter with specialized topic-wise tests for Botany, Zoology, Physics, and Chemistry.', icon: BookOpen },
            { title: 'NTA Pattern Mocks', desc: 'Experience the exact exam interface with 180 mandatory questions, precise timing, and negative marking.', icon: Target },
            { title: 'In-Depth Analytics', desc: 'Identify your weak areas instantly with AI-generated reports analyzing your accuracy, speed, and topic proficiency.', icon: BarChart },
            { title: 'All India Ranking', desc: 'Compare your performance with thousands of serious medical aspirants across the country after every test.', icon: Activity },
            { title: 'Detailed Solutions', desc: 'Get step-by-step text and video solutions for complex Physics numericals and tricky Chemistry reactions.', icon: FileText },
            { title: 'Unlimited Reattempts', desc: 'Practice makes perfect. Reattempt your weak tests unconditionally until you achieve 100% conceptual clarity.', icon: Clock }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl transition-all group hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
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

      {/* 4. Features/Syllabus Alignment */}
      <section className="py-12 md:py-20 bg-slate-900 rounded-3xl md:rounded-[3rem] mx-4 md:mx-auto max-w-7xl px-4 sm:px-6 md:px-12 text-center md:text-left text-white mb-12 md:mb-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[40px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center relative z-10">
          <div className="px-2 md:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Highly Accurate <br className="hidden md:block"/> <span className="text-emerald-400">NCERT Pattern</span></h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
              Our content team stays updated with every minor syllabus change. The test series perfectly simulates the actual difficulty level of Botany, Zoology, Physics, and Chemistry.
            </p>
            <ul className="space-y-4">
              {['Assertion-Reasoning Type Questions', 'Statement Based Questions', 'Match the Following Formats', 'Accurate Weightage to Class 11 & 12'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-slate-200 justify-center md:justify-start">
                  <div className="bg-emerald-500/20 p-1 md:p-1.5 rounded-full"><CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 shrink-0" /></div>
                  <span className="font-semibold text-sm md:text-lg text-left">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:gap-5 justify-center md:items-end mt-8 md:mt-0 w-full">
            {[
              { label: 'Botany & Zoology', icon: Target },
              { label: 'Physics Numericals', icon: Activity },
              { label: 'Chemistry Reactions', icon: Microscope },
              { label: 'Full Syllabus Mocks', icon: BrainCircuit },
            ].map((box, i) => (
              <div key={i} className={`w-full max-w-sm lg:max-w-md bg-white/10 backdrop-blur-md border border-white/10 px-4 py-4 sm:px-6 sm:py-5 rounded-2xl sm:rounded-[2rem] flex items-center gap-4 hover:bg-white/20 transition-all hover:-translate-y-1 cursor-pointer shadow-xl ${i % 2 === 0 ? 'md:mr-12 lg:mr-24' : 'md:mr-4 lg:mr-8'}`}>
                <div className="bg-emerald-400/20 p-3 sm:p-4 rounded-full text-emerald-300">
                  <box.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="font-bold text-base sm:text-xl text-left">{box.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works (Timeline without boxes) */}
      <section className="py-24 max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16 md:mb-20 relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Your Pathway to Success</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Follow our proven 3-step dynamic methodology designed to boost your rank systematically without burning out.</p>
        </div>
        
        <div className="relative mt-12">
          {/* Connecting Line that ignores horizontal layout spacing */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-1.5 bg-gradient-to-r from-emerald-100 via-teal-400 to-emerald-100 dark:from-emerald-900/40 dark:via-teal-600/60 dark:to-emerald-900/40 rounded-full drop-shadow-sm" />
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {[
              { step: '1', title: 'Attempt Tests', desc: 'Real exam-like interface with precise timing, mimicking exact NTA conditions.', icon: Clock, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
              { step: '2', title: 'Deep Analysis', desc: 'Insights into strengths, weaknesses, and a deep-dive into time taken per question.', icon: BarChart, color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-50 dark:bg-teal-900/30' },
              { step: '3', title: 'Review Concepts', desc: 'Understand every concept deeply with step-by-step video & text solutions.', icon: FileText, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-900/30' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-24 h-24 sm:w-36 sm:h-36 rounded-full ${item.bg} flex items-center justify-center mb-6 sm:mb-8 relative border-[6px] sm:border-[10px] border-white dark:border-[#020617] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-500`}>
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-base sm:text-lg flex items-center justify-center shadow-lg transform translate-x-1/4 -translate-y-1/4">{item.step}</div>
                  <item.icon className={`w-10 h-10 sm:w-14 sm:h-14 ${item.color} group-hover:animate-pulse`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-[280px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
