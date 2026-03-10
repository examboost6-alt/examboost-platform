import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, Users, CheckCircle, ArrowRight, PlayCircle, FileText, ChevronRight, Target, ShieldCheck, Zap, Star } from 'lucide-react';

export const metadata = {
  title: 'Law Entrance Exams Test Series - ExamBoost',
  description: 'Practice with ExamBoost mock tests for CLAT, AILET, LSAT India, MH CET Law, and other top law entrance exams.'
};

const popularExams = [
  { name: 'CLAT UG', tests: 120, icon: 'Law' },
  { name: 'AILET UG', tests: 85, icon: 'Law' },
  { name: 'LSAT India', tests: 60, icon: 'Law' },
  { name: 'MH CET Law (5 Yrs)', tests: 75, icon: 'Law' },
  { name: 'SLAT', tests: 50, icon: 'Law' },
  { name: 'PU LLB', tests: 40, icon: 'Law' },
  { name: 'CUET UG (Legal)', tests: 100, icon: 'Law' },
  { name: 'CLAT PG (LLM)', tests: 55, icon: 'Law' }
];

const freeTests = [
  { name: 'CLAT UG Full Length Mock 1', q: 120, t: 120 },
  { name: 'Legal Reasoning Speed Test', q: 30, t: 25 },
  { name: 'AILET Logical Reasoning Mock', q: 35, t: 30 }
];

const reviews = [
  { name: 'Ananya, NLS Bangalore Selected', rating: 5, text: 'ExamBoost passage-based legal reasoning questions were tougher than actual CLAT. Made the real exam feel easy.' },
  { name: 'Kartik, AILET Qualifier', rating: 5, text: 'The mock test analytics saved me. I realized I was spending 40 mins on Legal while neglecting Logical Reasoning.' },
  { name: 'Rishabh, Symbiosis Pune', rating: 4, text: 'The current affairs compendium along with mock tests was the only GK source I used. Highly precise.' },
  { name: 'Sneha, MH CET Law', rating: 5, text: 'Very accurate difficulty level for MH CET Law. The user interface simulated the real exam brilliantly.' }
];

export default function LawExamsPage() {
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
              <span className="text-slate-500 dark:text-slate-400">Law Entrance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Law Entrance <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-400 dark:to-yellow-300 block mt-2">Test Series</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Secure your seat in top NLUs. Ace CLAT, AILET, and LSAT with passage-based mock tests, comprehensive legal reasoning, and exact exam-level difficulty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shrink-0">
                Start Free Mock Test <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shrink-0">
                Explore Exams
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img src="/law-banner.png" alt="Law Exams Banner" className="w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>

      {/* 2. Popular Law Exams */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Top Law Entrance Exams</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Target India's most prestigious law schools with dedicated mock tests.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {popularExams.map((exam, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-3xl lg:rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 dark:hover:border-amber-400/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors mb-6 ring-4 ring-white dark:ring-[#0f172a] shadow-sm">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{exam.name}</h3>
              <div className="mb-8 empty:hidden">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-lg">{exam.tests} Mock Tests</span>
              </div>
              <button className="w-full mt-auto py-3.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-amber-600 dark:text-amber-400 font-bold rounded-xl transition-colors border border-slate-200 dark:border-slate-700 group-hover:border-amber-500/20">
                Start Practice
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Featured Test Series Overview */}
      <div className="bg-white dark:bg-[#0f172a] py-20 border-y border-slate-200 dark:border-slate-800 w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-sm mb-4">
              NLU Target Packages
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              ExamBoost <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">Legal Elite</span> Series
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Strictly based on the new comprehension-heavy pattern of CLAT and AILET. Develop intense reading stamina and critical analysis powers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-[#020617] rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Essential Pass</h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">Robust practice and reading stamina building.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['40+ CLAT Full Length Mocks (New Pattern)', '20+ AILET & MH CET Mocks', 'Passage-based Legal Reasoning practice', 'Current Affairs monthly question banks', 'Detailed reading speed analysis'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 dark:border-slate-700 hover:border-amber-600 hover:text-amber-600 dark:hover:border-amber-500 dark:hover:text-amber-500 transition-colors text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2">
                View Schedule <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-yellow-700 dark:from-slate-800 dark:to-slate-900 rounded-3xl lg:rounded-[2rem] p-6 md:p-8 lg:p-10 border border-amber-500/20 shadow-2xl relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xs py-1 px-10 rotate-45 shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> TOP 100 RANK
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Ultimate Pass</h3>
              <p className="text-sm font-semibold text-amber-100 dark:text-slate-400 mb-8 border-b border-white/10 dark:border-slate-700 pb-4">Extensive coverage and advanced analytics.</p>
              <ul className="space-y-4 mb-10 flex-1">
                {['Everything in Essential Pass', 'Hard-level critical reasoning tests', 'LSAT India specific logical modules', '10 Years Past paper analysis modules', '1-on-1 NLU Alumni Mentorship Session'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <div className="p-0.5 rounded-full bg-white/20 mt-0.5 shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold bg-white text-amber-700 dark:text-slate-900 hover:bg-slate-100 transition-colors shadow-xl flex items-center justify-center gap-2">
                Explore Features <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Free Mock Test Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24 w-full">
        <div className="bg-gradient-to-br from-slate-900 to-amber-950 rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="flex-1 relative z-10 w-full text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm mb-4 border border-amber-500/30">
              Test Your Logic
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Free Legal Mock Tests</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Check if you can read 450-word passages and solve 5 questions in under 4 minutes. Try our free diagnostic tests.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
              {freeTests.map((t, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm gap-4">
                  <div>
                    <h4 className="font-bold text-white text-left">{t.name}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-amber-200 mt-2 sm:mt-1">
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3 shrink-0" /> {t.q} Qs</span>
                      <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3 shrink-0" /> {t.t} Mins</span>
                    </div>
                  </div>
                  <button className="bg-amber-600 text-white hover:bg-amber-500 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all shrink-0">
                    Attempt
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center relative z-10 hidden md:flex">
            <div className="w-full aspect-square max-w-sm rounded-3xl lg:rounded-[2rem] bg-gradient-to-b from-amber-500 to-yellow-700 p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-slate-900 rounded-[1.8rem] p-6 flex flex-col">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                  <h4 className="text-white font-bold">Legal Reasoning</h4>
                  <span className="text-amber-400 font-bold">01:45:10 left</span>
                </div>
                <p className="text-slate-300 text-sm flex-1 leading-relaxed">
                  "A contract is an agreement enforceable by law. An agreement not supported by consideration is void..."
                  Apply this rule to the following situation:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-amber-500 cursor-pointer transition-colors">(A) The contract is void</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-amber-500 cursor-pointer transition-colors">(B) The contract is voidable</div>
                  <div className="w-full p-2 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700 hover:border-amber-500 cursor-pointer transition-colors">(C) It is a valid contract</div>
                </div>
                <button className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-colors shadow-lg">Save & Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Complete Law Exams List */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">All Law Entrance Exams Covered</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg pt-2">Comprehensive test series modules for national and state level law entrance tests.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {['CLAT UG (Common Law)', 'AILET (NLU Delhi)', 'LSAT India', 'MH CET Law (5 Year)', 'MH CET Law (3 Year)', 'SLAT (Symbiosis)', 'CUET UG (Legal Studies)', 'Christ University Law', 'PU LLB / BA LLB'].map((examName, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{examName}</span>
              </div>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-slate-900 transition-colors shrink-0">
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
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why ExamBoost for Law?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Because the new CLAT pattern requires heavy reading, skipping traditional rote-learning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: Target, title: 'Passage Based Format', desc: '100% adherence to the new CLAT 120-question comprehensive reading format across all sections.' },
              { icon: Zap, title: 'Reading Speed Analytics', desc: 'Find exactly how many words-per-minute you read and which sections you waste time on.' },
              { icon: BookOpen, title: 'Contemporary Legal Issues', desc: 'Legal reasoning passages derived directly from recent supreme court judgments and bills.' },
              { icon: Award, title: 'AILET Specific Logic', desc: 'Separate question banks for AILET\'s non-passage based heavy analytical and critical logic.' },
              { icon: CheckCircle, title: 'Quantitative Data Interpretation', desc: 'Caselet DIs, bar graphs, and tabular data matching the exact level of CLAT Quant section.' },
              { icon: ShieldCheck, title: 'Current Affairs Compendiums', desc: 'Monthly summary of critical national/international events, legal news, and editorial breakdowns.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0f172a] flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm border border-slate-200 dark:border-slate-800 shrink-0">
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
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Our NLU Achievers</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Hear from students who solved our mock tests and secured Top 500 ranks in CLAT.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <div className="bg-white dark:bg-[#0f172a] rounded-3xl lg:rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all">
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
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-8">Law Preparation Guide</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'How to Attempt CLAT in 120 Mins',
              'Reading The Hindu Editorials',
              'Understanding Legal Maxims',
              'Difference Between CLAT & AILET',
              'Mastering Critical Reasoning'
            ].map((guide, idx) => (
              <Link key={idx} href="/blog" className="px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500 dark:hover:border-amber-500 transition-colors block text-center flex-1 min-w-[200px]">
                {guide}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 9. Call To Action */}
      <div className="bg-amber-800 dark:bg-slate-900 py-20 relative overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/40 dark:bg-amber-900/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Secure Your NLU Dream</h2>
          <p className="text-amber-100 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Stop practicing outdated patterns. Train your brain with the most heavily researched passage-based mock tests in India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button className="w-full sm:w-auto bg-white text-amber-800 hover:bg-slate-100 dark:bg-amber-600 dark:text-white dark:hover:bg-amber-500 px-8 py-4 rounded-xl font-bold text-lg shadow-xl shrink-0 transition-colors">
              Get Law Elite Pass
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg shrink-0 transition-colors">
              Explore Tests
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
