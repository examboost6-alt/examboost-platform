"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  ChevronLeft, Sparkles, BookOpen, Layers,
  ListChecks, Target, BrainCircuit, Activity, CheckCircle2,
  AlertCircle, Moon, Sun, PlayCircle
} from 'lucide-react';

const MOCK_DB: any = {
  'mock-eng-1': { exam: 'Engineering', title: 'Shikhar JEE Main 2026' },
  'mock-eng-2': { exam: 'Engineering', title: 'Vijay IIT Advance 2026' },
  'mock-med-1': { exam: 'Medical', title: 'ExamBoost NEET Shourya 2026' }
};

const SYLLABUS: any = {
  Engineering: [
    {
      subject: 'Physics',
      color: 'blue',
      chapters: ['Units & Measurements', 'Kinematics', 'Laws of Motion', 'Work, Energy & Power', 'Rotational Motion', 'Gravitation', 'Thermodynamics', 'Oscillations & Waves', 'Electrostatics', 'Current Electricity', 'Magnetic Effects', 'Electromagnetic Induction', 'Optics', 'Modern Physics']
    },
    {
      subject: 'Chemistry',
      color: 'orange',
      chapters: ['Structure of Atom', 'Periodic Table', 'Chemical Bonding', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 's & p Block Elements', 'Organic Chemistry Basics', 'Hydrocarbons', 'Alcohols & Phenols', 'Aldehydes & Ketones', 'Amines', 'Biomolecules']
    },
    {
      subject: 'Mathematics',
      color: 'rose',
      chapters: ['Sets & Functions', 'Complex Numbers', 'Matrices & Determinants', 'Permutations & Combinations', 'Binomial Theorem', 'Sequence & Series', 'Limits & Derivatives', 'Integral Calculus', 'Differential Equations', 'Coordinate Geometry', '3D Geometry', 'Vector Algebra', 'Probability', 'Trigonometry']
    }
  ],
  Medical: [
    {
      subject: 'Physics',
      color: 'blue',
      chapters: ['Units & Measurements', 'Kinematics', 'Laws of Motion', 'Work, Energy & Power', 'Rotational Motion', 'Gravitation', 'Thermodynamics', 'Oscillations & Waves', 'Electrostatics', 'Current Electricity', 'Magnetic Effects', 'Electromagnetic Induction', 'Optics', 'Modern Physics']
    },
    {
      subject: 'Chemistry',
      color: 'orange',
      chapters: ['Structure of Atom', 'Periodic Table', 'Chemical Bonding', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 's & p Block Elements', 'Organic Chemistry Basics', 'Hydrocarbons', 'Alcohols & Phenols', 'Aldehydes & Ketones', 'Amines', 'Biomolecules']
    },
    {
      subject: 'Biology',
      color: 'emerald',
      chapters: ['Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Plants', 'Anatomy of Plants', 'Structural Organisation', 'Cell: Unit of Life', 'Biomolecules', 'Cell Cycle', 'Plant Physiology', 'Human Physiology', 'Reproduction', 'Genetics', 'Evolution', 'Biotechnology', 'Ecology']
    }
  ]
};

export default function AIGenerator() {
  const params = useParams();
  const router = useRouter();
  const seriesId = params.id as string;
  const courseData = MOCK_DB[seriesId] || { exam: 'Engineering', title: 'Custom AI Mock' };

  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  const [activeSubjectIndex, setActiveSubjectIndex] = useState(0);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState('Mixed');
  const [questionCount, setQuestionCount] = useState(30);

  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const subjects = SYLLABUS[courseData.exam] || SYLLABUS['Engineering'];
  const activeSubject = subjects[activeSubjectIndex];

  const toggleChapter = (chap: string) => {
    if (selectedChapters.includes(chap)) {
      setSelectedChapters(prev => prev.filter(c => c !== chap));
    } else {
      setSelectedChapters(prev => [...prev, chap]);
    }
  };

  const handleGenerate = () => {
    if (selectedChapters.length === 0) {
      alert("Please select at least one chapter to generate questions.");
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowSuccess(true);
    }, 2500);
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#f4f7fe] dark:bg-[#0b1120] font-sans text-slate-900 dark:text-slate-100 pb-24">
      {/* Top Navbar */}
      <header className="bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-black line-clamp-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">AI Chapter Generator</h1>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">{courseData.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-10">

        {showSuccess ? (
          <div className="relative w-full max-w-4xl mx-auto mt-6 sm:mt-10 rounded-[2.5rem] p-[2px] shadow-2xl overflow-hidden group animate-in zoom-in-95 duration-700">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-indigo-500 to-purple-600 opacity-70 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-2xl rounded-[2.4rem] p-8 sm:p-16 flex flex-col items-center text-center overflow-hidden border border-white/50 dark:border-white/10">
              
              {/* Background ambient light */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              {/* Glowing Icon Pedestal */}
              <div className="relative mb-8 mt-4">
                <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-40 rounded-full animate-pulse"></div>
                <div className="relative w-28 h-28 bg-gradient-to-b from-emerald-50 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-800/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center border-[6px] border-white dark:border-[#0b1120] shadow-2xl">
                  <Sparkles className="absolute top-2 right-2 w-5 h-5 text-emerald-500 animate-[spin_4s_linear_infinite]" />
                  <CheckCircle2 className="w-14 h-14 drop-shadow-md" />
                </div>
              </div>

              <h2 className="text-4xl sm:text-[3.25rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 mb-8 tracking-tight leading-tight">
                Mock Ready to Start
              </h2>
              
              {/* Data Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-3 bg-indigo-50/80 dark:bg-indigo-900/20 border border-indigo-100/80 dark:border-indigo-800/50 pr-6 pl-2 py-2 rounded-2xl shadow-sm backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-800/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner"><Layers className="w-5 h-5" /></div>
                  <div className="text-left"><p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 dark:text-indigo-400/80 line-clamp-1 mb-0.5">Chapters Linked</p><p className="text-base font-black text-indigo-900 dark:text-indigo-200 leading-none">{selectedChapters.length}</p></div>
                </div>
                <div className="flex items-center gap-3 bg-emerald-50/80 dark:bg-emerald-900/20 border border-emerald-100/80 dark:border-emerald-800/50 pr-6 pl-2 py-2 rounded-2xl shadow-sm backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner"><Target className="w-5 h-5" /></div>
                  <div className="text-left"><p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 dark:text-emerald-400/80 line-clamp-1 mb-0.5">Total Questions</p><p className="text-base font-black text-emerald-900 dark:text-emerald-200 leading-none">{questionCount}</p></div>
                </div>
                <div className="flex items-center gap-3 bg-rose-50/80 dark:bg-rose-900/20 border border-rose-100/80 dark:border-rose-800/50 pr-6 pl-2 py-2 rounded-2xl shadow-sm backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-800/50 flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-inner"><Activity className="w-5 h-5" /></div>
                  <div className="text-left"><p className="text-[10px] font-black uppercase tracking-widest text-rose-500 dark:text-rose-400/80 line-clamp-1 mb-0.5">AI Difficulty</p><p className="text-base font-black text-rose-900 dark:text-rose-200 leading-none">{difficulty}</p></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-lg mx-auto">
                <button
                  onClick={() => alert("Normally this would route to /test/CUSTOM_ID/instructions")} 
                  className="w-full relative group overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 md:py-5 rounded-2xl font-black text-lg shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all transform active:scale-95 flex items-center justify-center gap-3"
                >
                  <div className="absolute inset-0 bg-white/20 w-full hover:w-0 transition-all duration-300 opacity-0 group-hover:opacity-100 mix-blend-overlay"></div>
                  <PlayCircle className="w-6 h-6" /> Start Attempt Now
                </button>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                  }} 
                  className="w-full sm:w-auto bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 px-8 py-4 md:py-5 rounded-2xl font-bold text-base transition-all flex items-center justify-center shrink-0 backdrop-blur-sm"
                >
                  Modify Settings
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {/* Context Hero Card */}
            <div className="bg-gradient-to-br from-indigo-900 relative overflow-hidden to-[#0A0521] rounded-[2rem] p-8 sm:p-10 shadow-2xl">
              {/* Animated BG elements */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse"></div>
              <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[11px] font-black uppercase tracking-widest border border-white/10 mb-6 font-sans shadow-sm">
                  <BrainCircuit className="w-3.5 h-3.5 text-purple-300" /> AI Guided Practice
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tight">
                  Design Your Perfect <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Custom Mock Test</span>
                </h2>
                <p className="text-indigo-100/80 font-medium text-lg max-w-2xl leading-relaxed">
                  Pinpoint your weaknesses. Our intelligent algorithm will compile non-repeating questions specifically tailored to the chapters you select.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Settings Column (Diff, Q-Count) */}
              <div className="lg:col-span-1 lg:order-2 flex flex-col gap-6 sticky top-24">
                
                {/* Stats Summary Panel */}
                <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 shadow-sm border border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                      <Target className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">Run Parameters</h3>
                  </div>

                  {/* Difficulty Segment */}
                  <div className="mb-8">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 block">Level of Difficulty</label>
                    <div className="flex flex-col gap-2.5">
                      {['Mixed', 'Focus on Easy', 'Moderate', 'Advanced Hard'].map((level) => (
                        <button
                          key={level}
                          onClick={() => setDifficulty(level)}
                          className={`flex items-center px-4 py-3 rounded-xl border text-sm font-bold transition-all ${
                            difficulty === level 
                              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400' 
                              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded-full border-2 mr-3 flex items-center justify-center ${difficulty === level ? 'border-indigo-500' : 'border-slate-300 dark:border-slate-600'}`}>
                            {difficulty === level && <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>}
                          </div>
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question Count Segment */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Total Questions</label>
                      <span className="font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded text-sm">{questionCount} Qs</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={questionCount}
                      onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 transition-all"
                    />
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                      <span>10</span>
                      <span>Maximum: 100</span>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || selectedChapters.length === 0}
                  className={`w-full py-4 rounded-2xl font-black text-base flex justify-center items-center gap-2 shadow-xl shadow-indigo-600/20 active:scale-[0.98] transition-all relative overflow-hidden ${
                    isGenerating || selectedChapters.length === 0
                      ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed shadow-none'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90'
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-500 border-t-white rounded-full animate-spin"></div>
                      Compiling Neural Mock...
                    </>
                  ) : selectedChapters.length === 0 ? (
                    "Select Chapters First"
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" /> Generate Deep Mock
                    </>
                  )}
                </button>
              </div>

              {/* Right Selection Column */}
              <div className="lg:col-span-2 lg:order-1 flex flex-col gap-6">
                
                {/* Subject Selector Tabs */}
                <div className="flex items-center p-1.5 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-full overflow-x-auto scrollbar-hide">
                  {subjects.map((sub: any, idx: number) => {
                    const isActive = activeSubjectIndex === idx;
                    const subChapters = sub.chapters;
                    const selectedInSub = selectedChapters.filter(c => subChapters.includes(c)).length;
                    
                    const badgeColors: any = {
                      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
                      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
                      rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800',
                      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
                    };

                    return (
                      <button
                        key={sub.subject}
                        onClick={() => setActiveSubjectIndex(idx)}
                        className={`flex-1 min-w-[120px] relative px-4 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none flex flex-col items-center gap-1 ${
                          isActive 
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        {sub.subject}
                        {selectedInSub > 0 && (
                          <span className={`absolute top-1.5 right-1.5 w-5 h-5 text-[10px] flex items-center justify-center rounded-full font-black border ${badgeColors[sub.color] || badgeColors.blue}`}>
                            {selectedInSub}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Chapter List Area */}
                <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 dark:border-slate-800/80 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                    <div>
                      <h3 className="text-xl font-black flex items-center gap-2 mb-1 text-slate-900 dark:text-white">
                        <BookOpen className={`w-5 h-5 ${
                          activeSubject.color === 'blue' ? 'text-blue-500' : 
                          activeSubject.color === 'orange' ? 'text-orange-500' : 
                          activeSubject.color === 'rose' ? 'text-rose-500' : 'text-emerald-500'
                        }`} /> 
                        Select {activeSubject.subject} Chapters
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        Choose the precise chapters you want to train on.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const allChaps = activeSubject.chapters;
                        const hasAll = allChaps.every((c: string) => selectedChapters.includes(c));
                        if (hasAll) {
                          setSelectedChapters(prev => prev.filter(c => !allChaps.includes(c)));
                        } else {
                          const newAdditions = allChaps.filter((c: string) => !selectedChapters.includes(c));
                          setSelectedChapters(prev => [...prev, ...newAdditions]);
                        }
                      }}
                      className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 w-max shrink-0"
                    >
                      Toggle All
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {activeSubject.chapters.map((chap: string) => {
                      const isSelected = selectedChapters.includes(chap);
                      
                      const selectedBg = {
                        blue: 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-300 dark:border-blue-700 shadow-sm',
                        orange: 'bg-orange-50/50 dark:bg-orange-900/10 border-orange-300 dark:border-orange-700 shadow-sm',
                        rose: 'bg-rose-50/50 dark:bg-rose-900/10 border-rose-300 dark:border-rose-700 shadow-sm',
                        emerald: 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-300 dark:border-emerald-700 shadow-sm',
                      };
                      
                      const selectedIconBg = {
                        blue: 'bg-blue-500 border-blue-600 text-white shadow-inner',
                        orange: 'bg-orange-500 border-orange-600 text-white shadow-inner',
                        rose: 'bg-rose-500 border-rose-600 text-white shadow-inner',
                        emerald: 'bg-emerald-500 border-emerald-600 text-white shadow-inner',
                      };
                      
                      const selectedTextColor = {
                        blue: 'text-blue-900 dark:text-blue-100 font-bold',
                        orange: 'text-orange-900 dark:text-orange-100 font-bold',
                        rose: 'text-rose-900 dark:text-rose-100 font-bold',
                        emerald: 'text-emerald-900 dark:text-emerald-100 font-bold',
                      };

                      return (
                        <div
                          key={chap}
                          onClick={() => toggleChapter(chap)}
                          className={`group cursor-pointer rounded-2xl p-4 flex items-center gap-4 transition-all border ${
                            isSelected 
                              ? (selectedBg[activeSubject.color as keyof typeof selectedBg] || selectedBg.blue)
                              : `bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700`
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                            isSelected 
                              ? (selectedIconBg[activeSubject.color as keyof typeof selectedIconBg] || selectedIconBg.blue)
                              : `bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-transparent`
                          }`}>
                            <ListChecks className="w-4 h-4" />
                          </div>
                          <span className={`font-semibold text-sm leading-tight select-none transition-colors ${
                            isSelected 
                              ? (selectedTextColor[activeSubject.color as keyof typeof selectedTextColor] || selectedTextColor.blue)
                              : `text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white`
                          }`}>
                            {chap}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
