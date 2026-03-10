import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, CheckCircle, ArrowRight, PlayCircle, FileText, ChevronRight, Target, ShieldCheck, Zap, Star } from 'lucide-react';

export const metadata = {
  title: 'State PSC Exams Test Series - ExamBoost',
  description: 'Practice with ExamBoost mock tests for UPPSC, BPSC, MPSC, RPSC, MPPSC, and other State Public Service Commission exams.'
};

const popularExams = [
  { name: 'UPPSC PCS', tests: 110, icon: 'State', href: '/exams/state-psc/uppsc-pcs' },
  { name: 'BPSC (Bihar)', tests: 95, icon: 'State', href: '/exams/state-psc/bpsc' },
  { name: 'MPSC (Maharashtra)', tests: 80, icon: 'State', href: '/exams/state-psc/mpsc' },
  { name: 'RPSC RAS (Rajasthan)', tests: 85, icon: 'State', href: '/exams/state-psc/rpsc-ras' },
  { name: 'MPPSC (Madhya Pradesh)', tests: 70, icon: 'State', href: '#' },
  { name: 'UKPSC (Uttarakhand)', tests: 50, icon: 'State', href: '#' },
  { name: 'HPSC (Haryana)', tests: 45, icon: 'State', href: '#' },
  { name: 'JPSC (Jharkhand)', tests: 40, icon: 'State', href: '#' }
];

const freeTests = [
  { name: 'UPPSC Pre GS Paper 1 Mock', q: 150, t: 120 },
  { name: 'BPSC Prelims Full Mock Test', q: 150, t: 120 },
  { name: 'State Specific Current Affairs', q: 50, t: 40 }
];

const reviews = [
  { name: 'Sanjay, UPPSC SDM', rating: 5, text: 'The state-specific GK and UP budget questions in the mock tests were extremely accurate and matched the real exam.' },
  { name: 'Megha, BPSC Selected', rating: 5, text: 'ExamBoost helped me cover the vast BPSC syllabus systematically. The detailed explanations are a goldmine.' },
  { name: 'Rahul, MPPSC Aspirant', rating: 4, text: 'Excellent coverage of Madhya Pradesh history and geography. The all-India ranking gives a clear picture of competition.' },
  { name: 'Kirti, RPSC Mains Writer', rating: 5, text: 'The Mains answer writing evaluation and descriptive mock tests prepared me to handle the actual pressure perfectly.' }
];

export default function StatePSCExamsPage() {
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
              <span className="text-slate-500 dark:text-slate-400">State PSC</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              State Public Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 block mt-2">Test Series</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Conquer your state's highest administrative exams. Highly targeted mock tests for UPPSC, BPSC, MPSC, RPSC, with dedicated State GK sections.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-teal-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shrink-0">
                Start Free Mock Test <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shrink-0">
                Explore Exams
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img src="/state-psc.png" alt="State PSC Exams Banner" className="w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>

      {/* 2. Popular State PSC Exams */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Top State PSC Exams</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Target your home state's administrative services with strictly localized and updated mock tests.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {popularExams.map((exam, idx) => (
            <Link href={exam.href} key={idx} className="bg-white dark:bg-[#0f172a] rounded-3xl lg:rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-teal-500/30 dark:hover:border-teal-400/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center block">
              <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/20 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-colors mb-6 ring-4 ring-white dark:ring-[#0f172a] shadow-sm">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{exam.name}</h3>
              <div className="mb-8 empty:hidden">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-lg">{exam.tests} Mock Tests</span>
              </div>
              <button className="w-full mt-auto py-3.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-teal-600 dark:text-teal-400 font-bold rounded-xl transition-colors border border-slate-200 dark:border-slate-700 group-hover:border-teal-500/20">
                Start Practice
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Featured Test Series Overview */}
      <div className="bg-white dark:bg-[#0f172a] py-20 border-y border-slate-200 dark:border-slate-800 w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-sm mb-4">
              Regional Dominance
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              ExamBoost <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">State Master</span> Series
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              India's first test series exclusively tailored for individual state requirements. Mastering static GS and highly dynamic State Current Affairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-[#020617] rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Prelims Essential</h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">Robust practice for General Studies & State Specific queries.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['25 Full Length State Specific Mocks', '50+ State GK Sectional Tests', 'State Budget & Economy Focus', 'Aptitude/CSAT Qualifying Tests', 'Detailed Solution PDFs in Hindi/Eng'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 dark:border-slate-700 hover:border-teal-600 hover:text-teal-600 dark:hover:border-teal-500 dark:hover:text-teal-500 transition-colors text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
                Select Your State <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-emerald-700 dark:from-slate-800 dark:to-slate-900 rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-teal-500/20 shadow-2xl relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-xs py-1 px-10 rotate-45 shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> MAINS READY
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Prelims + Mains Ultimate</h3>
              <p className="text-sm font-semibold text-teal-100 dark:text-slate-400 mb-8 border-b border-white/10 dark:border-slate-700 pb-4">End-to-end guidance including descriptive checking.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['Everything in Prelims Essential', 'Mains Answer Writing Test Series', 'Hindi & Essay Paper Mock Tests', 'Evaluated by Toppers & Experts', 'State Interview Guidance Program'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <div className="p-0.5 rounded-full bg-white/20 mt-0.5 shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold bg-white text-teal-700 dark:text-slate-900 hover:bg-slate-100 transition-colors shadow-xl flex items-center justify-center gap-2">
                Explore Features <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Free Mock Test Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24 w-full">
        <div className="bg-gradient-to-br from-slate-900 to-teal-950 rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="flex-1 relative z-10 w-full text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-400 font-bold text-sm mb-4 border border-teal-500/30">
              Evaluate Yourself
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Free PSC Mock Tests</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Check your grip on State-Specific GK and General Studies. Attempt our free mock tests based on the latest 2026 notifications.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
              {freeTests.map((t, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm gap-4">
                  <div>
                    <h4 className="font-bold text-white text-left">{t.name}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-teal-200 mt-2 sm:mt-1">
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3 shrink-0" /> {t.q} Qs</span>
                      <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3 shrink-0" /> {t.t} Mins</span>
                    </div>
                  </div>
                  <button className="bg-teal-600 text-white hover:bg-teal-500 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all shrink-0">
                    Attempt
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center relative z-10 hidden md:flex">
            <div className="w-full aspect-square max-w-sm rounded-3xl lg:rounded-[2rem] bg-gradient-to-b from-teal-500 to-emerald-700 p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-slate-900 rounded-[1.8rem] p-6 flex flex-col">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                  <h4 className="text-white font-bold">UPPSC Mock</h4>
                  <span className="text-teal-400 font-bold">01:50:00 left</span>
                </div>
                <p className="text-slate-300 text-sm flex-1 leading-relaxed">Consider the following statements regarding the latest Uttar Pradesh State Budget allocation:</p>
                <div className="space-y-2 mb-4">
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-teal-500 cursor-pointer transition-colors">(A) 1 only</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-teal-500 cursor-pointer transition-colors">(B) 2 only</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-teal-500 cursor-pointer transition-colors">(C) Both 1 and 2</div>
                </div>
                <button className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold transition-colors shadow-lg">Submit Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. State PSC Exams List */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">All State PSC Exams Covered</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg pt-2">Extensive test series modules prepared by local experts for respective states.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {[
            { name: 'UPPSC (Uttar Pradesh)', href: '/exams/state-psc/uppsc-pcs' },
            { name: 'BPSC (Bihar)', href: '/exams/state-psc/bpsc' },
            { name: 'MPSC (Maharashtra)', href: '/exams/state-psc/mpsc' },
            { name: 'RPSC (Rajasthan)', href: '/exams/state-psc/rpsc-ras' },
            { name: 'MPPSC (Madhya Pradesh)', href: '#' },
            { name: 'UKPSC (Uttarakhand)', href: '#' },
            { name: 'HPSC (Haryana)', href: '#' },
            { name: 'JPSC (Jharkhand)', href: '#' },
            { name: 'CGPSC (Chhattisgarh)', href: '#' },
            { name: 'OPSC (Odisha)', href: '#' },
            { name: 'WBCS (West Bengal)', href: '#' },
            { name: 'GPSC (Gujarat)', href: '#' }
          ].map((exam, idx) => (
            <Link href={exam.href} key={idx} className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition-all block w-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{exam.name}</span>
              </div>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500 dark:group-hover:text-slate-900 transition-colors shrink-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* 6. Why Choose ExamBoost */}
      <div className="bg-slate-100 dark:bg-slate-900/50 py-16 md:py-20 lg:py-24 border-y border-slate-200 dark:border-slate-800 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why ExamBoost for State PSC?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Because a generic plan doesn't work when every state's syllabus is uniquely diverse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: Target, title: 'State GK Focus', desc: 'Questions highly concentrated on local art, culture, geography, and history of the respective specific state.' },
              { icon: Zap, title: 'Current Affairs Interlinkage', desc: 'State budget, economic surveys, and local schemes linked natively with static General Studies questions.' },
              { icon: BookOpen, title: 'In-Depth Explanations', desc: 'Detailed solution PDFs ensuring every wrong answer acts as a new concept addition for revision.' },
              { icon: Award, title: 'State-Level Ranking', desc: 'Benchmark your preparation aggressively against thousands of serious candidates from your own state.' },
              { icon: CheckCircle, title: 'Mains Evaluation System', desc: 'Detailed, actionable feedback on Mains answer copies covering regional issues by selected experts.' },
              { icon: ShieldCheck, title: 'Bilingual Support', desc: 'Tests and detailed solutions strictly available in both English and state-preferable languages (Hindi/Marathi/Bengali etc).' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0f172a] flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm border border-slate-200 dark:border-slate-800 shrink-0">
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
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Inspiring Selections</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Hear from aspirants who successfully fetched administrative posts in their home states.</p>
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
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-8">State PSC Preparation Guide</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'UPPSC Prelims Specific Strategy',
              'BPSC Mains Answer Writing',
              'How to Approach State GK?',
              'Tackling the CSAT in PCS',
              'Decoding MPPSC Cut-offs'
            ].map((guide, idx) => (
              <Link key={idx} href="/blog" className="px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500 dark:hover:border-teal-500 transition-colors block text-center flex-1 min-w-[200px]">
                {guide}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 9. Call To Action */}
      <div className="bg-teal-800 dark:bg-slate-900 py-20 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/40 dark:bg-teal-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Begin Your Officer Journey Today</h2>
          <p className="text-teal-100 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the most intensive and qualitative testing platform for State Civil Services in India. Serve your home state proudly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button className="w-full sm:w-auto bg-white text-teal-800 hover:bg-slate-100 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-500 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shrink-0 transition-colors">
              Start Evaluation
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg shrink-0 transition-colors">
              Explore Test Series
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
