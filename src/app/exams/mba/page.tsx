import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, CheckCircle, ArrowRight, PlayCircle, FileText, ChevronRight, Target, ShieldCheck, Zap, Star } from 'lucide-react';

export const metadata = {
  title: 'MBA Entrance Exams Test Series - ExamBoost',
  description: 'Practice with ExamBoost mock tests for CAT, XAT, NMAT, SNAP, MAT, and other top management entrance exams.'
};

const popularExams = [
  { name: 'CAT', tests: 150, icon: 'MBA' },
  { name: 'XAT', tests: 40, icon: 'MBA' },
  { name: 'NMAT by GMAC', tests: 60, icon: 'MBA' },
  { name: 'SNAP', tests: 45, icon: 'MBA' },
  { name: 'MAT', tests: 30, icon: 'MBA' },
  { name: 'CMAT', tests: 25, icon: 'MBA' },
  { name: 'TISSNET', tests: 20, icon: 'MBA' },
  { name: 'MHT CET (MBA)', tests: 35, icon: 'MBA' }
];

const freeTests = [
  { name: 'CAT Full Length Mock 1', q: 66, t: 120 },
  { name: 'SNAP Speed Test (Logical)', q: 25, t: 30 },
  { name: 'XAT Decision Making Sectional', q: 21, t: 45 }
];

const reviews = [
  { name: 'Vaibhav, IIM Ahmedabad', rating: 5, text: 'The DILR sets provided by ExamBoost were an exact replica of the grueling CAT 2025 level. Highly recommended.' },
  { name: 'Neha, XLRI Jamshedpur', rating: 5, text: 'The Decision Making caselets for XAT are the best in the market. It fundamentally changed my elimination approach.' },
  { name: 'Siddharth, NMIMS Mumbai', rating: 4, text: 'Adaptive mock tests for NMAT felt exactly like the real GMAC algorithm. It really helped pace my exam perfectly.' },
  { name: 'Pooja, SIBM Pune', rating: 5, text: 'SNAP is all about speed and accuracy. ExamBoost analytical reasoning questions gave me the edge I needed.' }
];

export default function MBAExamsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 w-full overflow-x-hidden">

      {/* 1. Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-primary dark:text-accent mb-6 flex-wrap">
              <Link href="/" className="hover:underline shrink-0">Home</Link>
              <ChevronRight className="w-4 h-4 shrink-0" />
              <Link href="/exams" className="hover:underline shrink-0">All Exams</Link>
              <ChevronRight className="w-4 h-4 shrink-0" />
              <span className="text-slate-500 dark:text-slate-400">MBA Entrance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              MBA Entrance <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500 dark:from-fuchsia-400 dark:to-pink-400 block mt-2">Test Series</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Crack CAT, XAT, NMAT, and SNAP with AI-driven percentile prediction, exact DILR caselets, and adaptive testing algorithms.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-fuchsia-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shrink-0">
                Start Free Mock Test <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shrink-0">
                Explore Exams
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden group p-4 border border-fuchsia-100 dark:border-fuchsia-900/30 bg-gradient-to-br from-fuchsia-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-2xl flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 mix-blend-overlay z-0 rounded-3xl"></div>
              <img src="/mba-banner.png" alt="MBA Exams Banner" className="w-full h-3/4 sm:h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 mb-8 sm:mb-0" />
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg rounded-2xl z-20 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1.5 sm:gap-2 text-fuchsia-600 dark:text-fuchsia-400 font-bold mb-1">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
                  <span className="text-sm sm:text-base">Target 99+ Percentile</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-snug">Advanced DILR & Decision Making Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Popular MBA Exams */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Top Management Exams</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Secure your berth in IIMs, XLRI, NMIMS, and Symbiosis.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {popularExams.map((exam, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-3xl lg:rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-fuchsia-500/30 dark:hover:border-fuchsia-400/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-2xl flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors mb-6 ring-4 ring-white dark:ring-[#0f172a] shadow-sm">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{exam.name}</h3>
              <div className="mb-8 empty:hidden">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-lg">{exam.tests} Mock Tests</span>
              </div>
              <button className="w-full mt-auto py-3.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-fuchsia-600 dark:text-fuchsia-400 font-bold rounded-xl transition-colors border border-slate-200 dark:border-slate-700 group-hover:border-fuchsia-500/20">
                Start Practice
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Featured Test Series Overview */}
      <div className="bg-white dark:bg-[#0f172a] py-20 border-y border-slate-200 dark:border-slate-800 w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 font-bold text-sm mb-4">
              Premium B-School Target
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              ExamBoost <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">B-School Master</span> Series
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From CAT’s intense DILR to XAT’s Decision Making and NMAT’s Adaptive speed tests—everything included in one master pass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-[#020617] rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">CAT Qualifier</h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">Extensive tests solely devoted to cracking IIM levels.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['50+ CAT Full Length Mock Tests', 'Sectionals: 30 VARC, 30 DILR, 30 QA', 'Video solutions for difficult DILR sets', 'AI Percentile Predictor based on peers', 'Topic-wise practice for Arithmetic & Algebra'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-fuchsia-500 mt-0.5 shrink-0" />
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 dark:border-slate-700 hover:border-fuchsia-600 hover:text-fuchsia-600 dark:hover:border-fuchsia-500 dark:hover:text-fuchsia-500 transition-colors text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
                View Schedule <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-700 to-fuchsia-950 dark:from-slate-800 dark:to-slate-900 rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-fuchsia-500/20 shadow-2xl relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-xs py-1 px-10 rotate-45 shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> ALL-IN-ONE
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">OMETS + CAT Elite</h3>
              <p className="text-sm font-semibold text-fuchsia-100 dark:text-slate-400 mb-8 border-b border-white/10 dark:border-slate-700 pb-4">Cover Other Management Entrance Tests seamlessly.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['Everything in CAT Qualifier', '30 XAT Mocks with Decision Making', '20 NMAT Adaptive Pattern Mocks', '15 SNAP Speed Test Mocks', 'GDPI Prep & SOP Review sessions'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <div className="p-0.5 rounded-full bg-white/20 mt-0.5 shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold bg-white text-fuchsia-700 dark:text-slate-900 hover:bg-slate-100 transition-colors shadow-xl flex items-center justify-center gap-2">
                Explore Features <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Free Mock Test Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24 w-full">
        <div className="bg-gradient-to-br from-slate-900 to-fuchsia-950 rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="flex-1 relative z-10 w-full text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/20 text-fuchsia-400 font-bold text-sm mb-4 border border-fuchsia-500/30">
              Diagnostic Tests
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Free MBA Mock Tests</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Test where you stand in QA speed, VARC accuracy, and DILR logic selection. Attempt premium level diagnostic Mocks for free.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
              {freeTests.map((t, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm gap-4">
                  <div>
                    <h4 className="font-bold text-white text-left">{t.name}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-fuchsia-200 mt-2 sm:mt-1">
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3 shrink-0" /> {t.q} Qs</span>
                      <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3 shrink-0" /> {t.t} Mins</span>
                    </div>
                  </div>
                  <button className="bg-fuchsia-600 text-white hover:bg-fuchsia-500 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all shrink-0">
                    Attempt
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center relative z-10 hidden md:flex">
            <div className="w-full aspect-square max-w-sm rounded-3xl lg:rounded-[2rem] bg-gradient-to-b from-fuchsia-500 to-pink-700 p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-slate-900 rounded-[1.8rem] p-6 flex flex-col">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                  <h4 className="text-white font-bold">DILR Caselet</h4>
                  <span className="text-fuchsia-400 font-bold">00:39:20 left</span>
                </div>
                <p className="text-slate-300 text-sm flex-1 leading-relaxed">
                  Four friends A, B, C, D sit around a circular table. A is not opposite to C. B is to the immediate right of A...
                </p>
                <div className="space-y-2 mb-4">
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-fuchsia-500 cursor-pointer transition-colors">(A) D is opposite to A</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-fuchsia-500 cursor-pointer transition-colors">(B) C is opposite to B</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-fuchsia-500 cursor-pointer transition-colors">(C) D is to the immediate left of C</div>
                </div>
                <button className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-xl font-bold transition-colors shadow-lg">Save & Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Complete MBA Exams List */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">All Management Exams Covered</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg pt-2">Extensive test series modules prepared for IIMs and other top tier B-schools.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {['CAT (Common Admission Test)', 'XAT (XLRI)', 'NMAT by GMAC', 'SNAP (Symbiosis)', 'MAT (Management Aptitude)', 'CMAT (AICTE)', 'TISSNET / TISS MAT', 'IIFT', 'MHT CET (MBA)'].map((examName, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-fuchsia-500 dark:hover:border-fuchsia-400 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">{examName}</span>
              </div>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:bg-fuchsia-600 group-hover:text-white dark:group-hover:bg-fuchsia-500 dark:group-hover:text-slate-900 transition-colors shrink-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Why Choose ExamBoost */}
      <div className="bg-slate-100 dark:bg-slate-900/50 py-16 md:py-20 lg:py-24 border-y border-slate-200 dark:border-slate-800 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why ExamBoost for MBA?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">CAT requires strategy and exact difficulty replication, not just solving random questions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: Target, title: 'AI Percentile Predictor', desc: 'Accurate profiling using relative ranking against 50,000+ serious test-takers simulating the normalization.' },
              { icon: Zap, title: 'DILR Simulation', desc: 'Sets that test your constraint satisfaction and logic exactly like recent CAT papers, avoiding irrelevant puzzles.' },
              { icon: BookOpen, title: 'XAT Decision Making', desc: 'High-quality business and ethical caselets modeled perfectly around XLRI’s distinct testing patterns.' },
              { icon: Award, title: 'Adaptive Testing (NMAT)', desc: 'Engine built to simulate NMAT\'s adaptive difficulty increment/decrement based on your question-to-question accuracy.' },
              { icon: CheckCircle, title: 'VARC Detailed Text', desc: 'Passages curated from Aeon, NYT, and WSJ with options so close it forces you to build critical elimination abilities.' },
              { icon: ShieldCheck, title: 'Performance Dashboard', desc: 'Detailed insights on Time Spent / Question, accuracy across sub-topics like Algebra vs Arithmetic.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0f172a] flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400 shadow-sm border border-slate-200 dark:border-slate-800 shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Student Reviews */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Top 1% Club</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Our test series has been the key strategy tool for students converting top BlackI calls.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-3xl lg:rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex text-amber-500 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-current' : 'text-slate-300 dark:text-slate-700'}`} />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-1 italic">"{review.text}"</p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Exam Preparation Guide */}
      <div className="bg-white dark:bg-[#0f172a] py-16 border-t border-slate-200 dark:border-slate-800 w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-8">MBA Preparation Strategy</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'Approaching DILR: Selection is Key',
              'QA: Arithmetic vs Algebra',
              'XAT Decision Making Strategies',
              'NMAT Speed Optimization',
              'VARC: Reading Between The Lines'
            ].map((guide, idx) => (
              <Link key={idx} href="/blog" className="px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-colors block text-center flex-1 min-w-[200px]">
                {guide}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 9. Call To Action */}
      <div className="bg-fuchsia-900 dark:bg-slate-900 py-20 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/40 dark:bg-fuchsia-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Your Route to IIMs Begins Here</h2>
          <p className="text-fuchsia-100 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the most logically rigorous and analytically precise MBA mock test series in the country.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button className="w-full sm:w-auto bg-white text-fuchsia-900 hover:bg-slate-100 dark:bg-fuchsia-600 dark:text-white dark:hover:bg-fuchsia-500 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shrink-0 transition-colors">
              Enroll in B-School Master
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg shrink-0 transition-colors">
              View Demo Test
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
