import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, CheckCircle, ArrowRight, PlayCircle, FileText, ChevronRight, Target, ShieldCheck, Zap, Star } from 'lucide-react';

export const metadata = {
  title: 'CUET UG & PG Test Series - ExamBoost',
  description: 'Practice for CUET UG and PG with ExamBoost mock tests covering English, General Test, and 23+ Domain specific subjects based on NTA guidelines.'
};

const popularExams = [
  { name: 'CUET UG - Science', tests: 120, icon: 'CUET' },
  { name: 'CUET UG - Commerce', tests: 100, icon: 'CUET' },
  { name: 'CUET UG - Humanities', tests: 110, icon: 'CUET' },
  { name: 'CUET PG - MBA', tests: 60, icon: 'CUET' },
  { name: 'CUET PG - LLB', tests: 50, icon: 'CUET' },
  { name: 'CUET PG - Life Science', tests: 40, icon: 'CUET' },
  { name: 'Language (English/Hindi)', tests: 150, icon: 'CUET' },
  { name: 'General Test (GAT)', tests: 130, icon: 'CUET' }
];

const freeTests = [
  { name: 'CUET General Test Mock', q: 50, t: 60 },
  { name: 'English Language Reading Comprehension', q: 40, t: 45 },
  { name: 'Mathematics Domain Specific', q: 40, t: 45 }
];

const reviews = [
  { name: 'Arjun, DU North Campus', rating: 5, text: 'The Domain specific tests for Physics and Maths matched the exact NCERT line-by-line framing used by NTA.' },
  { name: 'Simran, JNU Delhi', rating: 5, text: 'The General Test mock series helped me finish the quant and reasoning questions quickly. Real exam felt easy!' },
  { name: 'Rohan, BHU Selected', rating: 4, text: 'CUET PG MBA mock tests strictly followed the new COQP12 pattern. The analytical reasoning sets were top notch.' },
  { name: 'Kriti, Miranda House', rating: 5, text: 'English vocabulary and reading passages were extremely relevant. Highly accurate difficulty.' }
];

export default function CUETExamsPage() {
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
              <span className="text-slate-500 dark:text-slate-400">CUET Entrance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              CUET UG & PG <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500 dark:from-violet-400 dark:to-purple-400 block mt-2">Test Series</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Get into top Central Universities (DU, JNU, BHU). Practice with exactly simulated NTA computer-based environment for General Test, Languages, and 23+ Domain Subjects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-violet-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shrink-0">
                Start Free Mock Test <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shrink-0">
                Explore Exams
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden group p-4 border border-violet-100 dark:border-violet-900/30 bg-gradient-to-br from-violet-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-2xl flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 mix-blend-overlay z-0 rounded-3xl"></div>
              <img src="/cuet-banner.png" alt="CUET Exams Banner" className="w-full h-3/4 sm:h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700 mb-8 sm:mb-0" />
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg rounded-2xl z-20 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1.5 sm:gap-2 text-violet-600 dark:text-violet-400 font-bold mb-1">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
                  <span className="text-sm sm:text-base">Target 100 Percentile</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-snug">NCERT Level Domains & General Aptitude</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Popular Teaching Exams */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Top CUET Modules</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Pick your specific stream and master the NTA computer-based format.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {popularExams.map((exam, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-3xl lg:rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-violet-500/30 dark:hover:border-violet-400/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-violet-50 dark:bg-violet-900/20 rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors mb-6 ring-4 ring-white dark:ring-[#0f172a] shadow-sm">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{exam.name}</h3>
              <div className="mb-8 empty:hidden">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-lg">{exam.tests} Mock Tests</span>
              </div>
              <button className="w-full mt-auto py-3.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-violet-600 dark:text-violet-400 font-bold rounded-xl transition-colors border border-slate-200 dark:border-slate-700 group-hover:border-violet-500/20">
                Start Practice
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Featured Test Series Overview */}
      <div className="bg-white dark:bg-[#0f172a] py-20 border-y border-slate-200 dark:border-slate-800 w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold text-sm mb-4">
              Central Universities Target
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              ExamBoost <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">CUET Selection</span> Packages
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Build accuracy and speed according to the NTA Exam Interface, with chapter-wise tests and full-length simulated papers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-[#020617] rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">CUET UG Stream Pass</h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">Create your combo of Language + 3 Domains + GAT.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['40+ General Test (GAT) Mocks', '30+ English / Hindi Language Mocks', 'Access to any 4 Domain Specific Subjects', '100% strictly NCERT based coverage', 'Subject-wise detailed performance analytics'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 dark:border-slate-700 hover:border-violet-600 hover:text-violet-600 dark:hover:border-violet-500 dark:hover:text-violet-500 transition-colors text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
                Select Your Subjects <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-violet-700 to-indigo-900 dark:from-slate-800 dark:to-slate-900 rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-violet-500/20 shadow-2xl relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs py-1 px-10 rotate-45 shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> ALL ACCESS
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">CUET Grand Masters</h3>
              <p className="text-sm font-semibold text-violet-100 dark:text-slate-400 mb-8 border-b border-white/10 dark:border-slate-700 pb-4">Unlimited access to UG & PG complete test banks.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['Access to all 23+ UG Domain Subjects', 'CUET PG specific modules (MBA, LLB, etc.)', 'Chapter-wise micro testing for NCERT', 'Previous Year Papers (PYQs) as mock tests', 'Counselling guidance and seat preference help'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <div className="p-0.5 rounded-full bg-white/20 mt-0.5 shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold bg-white text-violet-700 dark:text-slate-900 hover:bg-slate-100 transition-colors shadow-xl flex items-center justify-center gap-2">
                Explore Features <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Free Mock Test Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24 w-full">
        <div className="bg-gradient-to-br from-slate-900 to-violet-950 rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="flex-1 relative z-10 w-full text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 text-violet-400 font-bold text-sm mb-4 border border-violet-500/30">
              Check Readiness
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Free Sectional Tests</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Familiarize yourself with the true NTA CBT interface. Try out the General Aptitude and Domain subjects right now.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
              {freeTests.map((t, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm gap-4">
                  <div>
                    <h4 className="font-bold text-white text-left">{t.name}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-violet-200 mt-2 sm:mt-1">
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3 shrink-0" /> {t.q} Qs</span>
                      <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3 shrink-0" /> {t.t} Mins</span>
                    </div>
                  </div>
                  <button className="bg-violet-600 text-white hover:bg-violet-500 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all shrink-0">
                    Attempt
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center relative z-10 hidden md:flex">
            <div className="w-full aspect-square max-w-sm rounded-3xl lg:rounded-[2rem] bg-gradient-to-b from-violet-500 to-indigo-700 p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-slate-900 rounded-[1.8rem] p-6 flex flex-col">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                  <h4 className="text-white font-bold">General Test (GAT)</h4>
                  <span className="text-violet-400 font-bold">00:41:15 left</span>
                </div>
                <p className="text-slate-300 text-sm flex-1 leading-relaxed">
                  If the sum of a number and its reciprocal is 2.5, find the number among the following options.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-violet-500 cursor-pointer transition-colors">(A) 3/2</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-violet-500 cursor-pointer transition-colors">(B) 2</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-violet-500 cursor-pointer transition-colors">(C) 4/3</div>
                </div>
                <button className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold transition-colors shadow-lg">Save & Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Complete CUET Domains List */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">All Subject Tests Provided</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg pt-2">Vast library of mock tests covering all Section 1, 2, and 3 combinations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {['Languages: English, Hindi', 'General Aptitude Test (GAT)', 'Science: Physics, Chemistry, Maths, Biology', 'Commerce: Accountancy, BS, Economics', 'Arts: History, Political Sc., Geography', 'Legal Studies & Psychology', 'CUET PG: MBA / General', 'CUET PG: Humanities / Social Work', 'CUET PG: Science Streams'].map((examName, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-violet-500 dark:hover:border-violet-400 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{examName}</span>
              </div>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-500 dark:group-hover:text-slate-900 transition-colors shrink-0">
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
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why ExamBoost for CUET?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">NCERT holds the absolute key. We ensure you don't step out of context.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: Target, title: 'NTA CBT Interface', desc: 'Mock window is an exact replica of the NTA Software (Mark for Review, UI layout) to reduce exam-day anxiety.' },
              { icon: Zap, title: 'NCERT Centric Design', desc: '100% of the domain specific questions are drafted ensuring they trace back to standard Class 12 NCERT curriculum.' },
              { icon: BookOpen, title: 'General Test Edge', desc: 'Curated compilation of the most relevant Current Affairs and logical reasoning patterns for maximum GAT marks.' },
              { icon: Award, title: 'Chapter-Level Testing', desc: 'Master one chapter at a time with micro-tests before jumping into 40-question full domain tests.' },
              { icon: CheckCircle, title: 'Extensive PG Coverage', desc: 'We align with the latest COQP schedules and syllabus changes made by NTA regarding PG and MBA domain streams.' },
              { icon: ShieldCheck, title: 'Bilingual Support', desc: 'Switch your General Test and subject domains between English and Hindi effortlessly right inside the mock.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0f172a] flex items-center justify-center text-violet-600 dark:text-violet-400 shadow-sm border border-slate-200 dark:border-slate-800 shrink-0">
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
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Central University Stars</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Users who secured phenomenal 100 percentiles in their chosen CUET domains.</p>
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
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-8">CUET Preparation Hacks</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'Balancing Board Exams with CUET',
              'Choosing the Right Domain Subjects',
              'How to crack the CUET General Test',
              'Normalisation Process in CUET',
              'Delhi University Cutoff Analysis'
            ].map((guide, idx) => (
              <Link key={idx} href="/blog" className="px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500 dark:hover:border-violet-500 transition-colors block text-center flex-1 min-w-[200px]">
                {guide}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 9. Call To Action */}
      <div className="bg-violet-900 dark:bg-slate-900 py-20 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/40 dark:bg-violet-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Your College Journey Awaits</h2>
          <p className="text-violet-100 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Maximize your percentile with mocks built on actual NTA standards and step into top-tier universities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button className="w-full sm:w-auto bg-white text-violet-900 hover:bg-slate-100 dark:bg-violet-600 dark:text-white dark:hover:bg-violet-500 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shrink-0 transition-colors">
              Select Subscriptions
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg shrink-0 transition-colors">
              Attempt Free Mocks
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
