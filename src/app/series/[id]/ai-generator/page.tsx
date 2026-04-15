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
    { subject: 'Physics', color: 'blue', chapters: [
        { name: 'Physical World & Measurement', class: '11th' }, { name: 'Kinematics', class: '11th' }, { name: 'Laws of Motion', class: '11th' }, { name: 'Work, Energy & Power', class: '11th' }, { name: 'Rotational Motion', class: '11th' }, { name: 'Gravitation', class: '11th' }, { name: 'Properties of Solids & Liquids', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Kinetic Theory of Gases', class: '11th' }, { name: 'Oscillations & Waves', class: '11th' },
        { name: 'Electric Charges and Fields', class: '12th' }, { name: 'Electrostatic Potential and Capacitance', class: '12th' }, { name: 'Current Electricity', class: '12th' }, { name: 'Moving Charges and Magnetism', class: '12th' }, { name: 'Magnetism and Matter', class: '12th' }, { name: 'Electromagnetic Induction', class: '12th' }, { name: 'Alternating Current', class: '12th' }, { name: 'Electromagnetic Waves', class: '12th' }, { name: 'Ray Optics and Optical Instruments', class: '12th' }, { name: 'Wave Optics', class: '12th' }, { name: 'Dual Nature of Radiation and Matter', class: '12th' }, { name: 'Atoms', class: '12th' }, { name: 'Nuclei', class: '12th' }, { name: 'Semiconductor Electronics: Materials, Devices and Simple Circuits', class: '12th' }
    ] },
    { subject: 'Chemistry', color: 'orange', chapters: [
        { name: 'Some Basic Concepts of Chemistry', class: '11th' }, { name: 'Structure of Atom', class: '11th' }, { name: 'Periodic Table & Periodicity', class: '11th' }, { name: 'Chemical Bonding', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Equilibrium', class: '11th' }, { name: 'Redox Reactions', class: '11th' }, { name: 'p-Block Elements', class: '11th' }, { name: 'Organic Chemistry Basics', class: '11th' }, { name: 'Hydrocarbons', class: '11th' },
        { name: 'Solutions', class: '12th' }, { name: 'Electrochemistry', class: '12th' }, { name: 'Chemical Kinetics', class: '12th' }, { name: 'd- and f-Block Elements', class: '12th' }, { name: 'Coordination Compounds', class: '12th' }, { name: 'Haloalkanes and Haloarenes', class: '12th' }, { name: 'Alcohols, Phenols and Ethers', class: '12th' }, { name: 'Aldehydes, Ketones and Carboxylic Acids', class: '12th' }, { name: 'Amines', class: '12th' }, { name: 'Biomolecules', class: '12th' }
    ] },
    { subject: 'Mathematics', color: 'rose', chapters: [
        { name: 'Sets, Relations & Functions', class: '11th' }, { name: 'Complex Numbers & Quadratics', class: '11th' }, { name: 'Permutations & Combinations', class: '11th' }, { name: 'Binomial Theorem', class: '11th' }, { name: 'Sequence & Series', class: '11th' }, { name: 'Straight Lines', class: '11th' }, { name: 'Conic Sections', class: '11th' }, { name: 'Limits & Derivatives', class: '11th' }, { name: 'Statistics', class: '11th' },
        { name: 'Relations and Functions', class: '12th' }, { name: 'Inverse Trigonometric Functions', class: '12th' }, { name: 'Matrices', class: '12th' }, { name: 'Determinants', class: '12th' }, { name: 'Continuity and Differentiability', class: '12th' }, { name: 'Application of Derivatives', class: '12th' }, { name: 'Integrals', class: '12th' }, { name: 'Application of Integrals', class: '12th' }, { name: 'Differential Equations', class: '12th' }, { name: 'Vector Algebra', class: '12th' }, { name: 'Three Dimensional Geometry', class: '12th' }, { name: 'Linear Programming', class: '12th' }, { name: 'Probability', class: '12th' }
    ] }
  ],
  Medical: [
    { subject: 'Physics', color: 'blue', chapters: [
        { name: 'Physical World & Measurement', class: '11th' }, { name: 'Kinematics', class: '11th' }, { name: 'Laws of Motion', class: '11th' }, { name: 'Work, Energy & Power', class: '11th' }, { name: 'Rotational Motion', class: '11th' }, { name: 'Gravitation', class: '11th' }, { name: 'Properties of Solids & Liquids', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Kinetic Theory of Gases', class: '11th' }, { name: 'Oscillations & Waves', class: '11th' },
        { name: 'Electric Charges and Fields', class: '12th' }, { name: 'Electrostatic Potential and Capacitance', class: '12th' }, { name: 'Current Electricity', class: '12th' }, { name: 'Moving Charges and Magnetism', class: '12th' }, { name: 'Magnetism and Matter', class: '12th' }, { name: 'Electromagnetic Induction', class: '12th' }, { name: 'Alternating Current', class: '12th' }, { name: 'Electromagnetic Waves', class: '12th' }, { name: 'Ray Optics and Optical Instruments', class: '12th' }, { name: 'Wave Optics', class: '12th' }, { name: 'Dual Nature of Radiation and Matter', class: '12th' }, { name: 'Atoms', class: '12th' }, { name: 'Nuclei', class: '12th' }, { name: 'Semiconductor Electronics: Materials, Devices and Simple Circuits', class: '12th' }
    ] },
    { subject: 'Chemistry', color: 'orange', chapters: [
        { name: 'Some Basic Concepts of Chemistry', class: '11th' }, { name: 'Structure of Atom', class: '11th' }, { name: 'Periodic Table & Periodicity', class: '11th' }, { name: 'Chemical Bonding', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Equilibrium', class: '11th' }, { name: 'Redox Reactions', class: '11th' }, { name: 'p-Block Elements', class: '11th' }, { name: 'Organic Chemistry Basics', class: '11th' }, { name: 'Hydrocarbons', class: '11th' },
        { name: 'Solutions', class: '12th' }, { name: 'Electrochemistry', class: '12th' }, { name: 'Chemical Kinetics', class: '12th' }, { name: 'd- and f-Block Elements', class: '12th' }, { name: 'Coordination Compounds', class: '12th' }, { name: 'Haloalkanes and Haloarenes', class: '12th' }, { name: 'Alcohols, Phenols and Ethers', class: '12th' }, { name: 'Aldehydes, Ketones and Carboxylic Acids', class: '12th' }, { name: 'Amines', class: '12th' }, { name: 'Biomolecules', class: '12th' }
    ] },
    { subject: 'Biology', color: 'emerald', chapters: [
        { name: 'The Living World', class: '11th' }, { name: 'Biological Classification', class: '11th' }, { name: 'Plant Kingdom', class: '11th' }, { name: 'Animal Kingdom', class: '11th' }, { name: 'Morphology of Flowering Plants', class: '11th' }, { name: 'Anatomy of Flowering Plants', class: '11th' }, { name: 'Structural Organisation', class: '11th' }, { name: 'Cell: The Unit of Life', class: '11th' }, { name: 'Biomolecules (11th)', class: '11th' }, { name: 'Cell Cycle and Division', class: '11th' }, { name: 'Photosynthesis', class: '11th' }, { name: 'Respiration in Plants', class: '11th' }, { name: 'Plant Growth', class: '11th' }, { name: 'Breathing & Exchange', class: '11th' }, { name: 'Body Fluids & Circulation', class: '11th' }, { name: 'Excretory Products', class: '11th' }, { name: 'Locomotion & Movement', class: '11th' }, { name: 'Neural Control', class: '11th' }, { name: 'Chemical Coordination', class: '11th' },
        { name: 'Reproduction in Organisms', class: '12th' }, { name: 'Sexual Reproduction in Plants', class: '12th' }, { name: 'Human Reproduction', class: '12th' }, { name: 'Reproductive Health', class: '12th' }, { name: 'Principles of Inheritance', class: '12th' }, { name: 'Molecular Basis of Inheritance', class: '12th' }, { name: 'Evolution', class: '12th' }, { name: 'Human Health & Disease', class: '12th' }, { name: 'Microbes in Human Welfare', class: '12th' }, { name: 'Biotechnology: Principles', class: '12th' }, { name: 'Biotechnology Applications', class: '12th' }, { name: 'Organisms & Populations', class: '12th' }, { name: 'Ecosystem', class: '12th' }, { name: 'Biodiversity & Conservation', class: '12th' }
    ] }
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
  const [classFilter, setClassFilter] = useState<'All' | '11th' | '12th'>('All');
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
    
    // Save settings to sessionStorage so the test engine can read them
    sessionStorage.setItem('aiMockParams', JSON.stringify({
      selectedChapters,
      difficulty,
      questionCount,
      examType: courseData.exam
    }));

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
          <div className="w-full min-h-[70vh] flex flex-col items-center justify-center relative animate-in zoom-in duration-1000 pt-10">
            {/* Immersive background glows instead of a restrictive box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-emerald-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
            
            {/* The core animated icon - floating seamlessly */}
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-20 group-hover:opacity-40 rounded-full transition-opacity duration-700"></div>
              <div className="relative w-32 h-32 text-emerald-500 flex items-center justify-center filter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform duration-500">
                <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-emerald-400 animate-[spin_6s_linear_infinite]" />
                <Sparkles className="absolute -bottom-2 -left-4 w-5 h-5 text-indigo-400/70 animate-[spin_4s_linear_infinite_reverse]" />
                <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500 z-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" className="animate-[dash_3s_ease-in-out_infinite] opacity-30"></path>
                  <circle cx="50" cy="50" r="28" fill="currentColor" fillOpacity="0.1" className="animate-pulse"></circle>
                  <path d="M38 52 L46 60 L62 42" strokeWidth="6" stroke="#10b981"></path>
                </svg>
              </div>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-[4.5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-indigo-900 dark:from-white dark:via-slate-200 dark:to-indigo-300 mb-4 tracking-[-0.04em] leading-tight text-center relative z-10">
              Exam Compiled.
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-16 text-center max-w-2xl relative z-10">
              Your customized simulation engine is ready.
            </p>
            
            {/* Floating Info Elements - No hard boxes */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-16 relative z-10">
              <div className="flex flex-col items-center gap-2 group">
                <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400 group-hover:-translate-y-1 transition-transform">{selectedChapters.length}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> Chapters</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 group-hover:-translate-y-1 transition-transform">{questionCount}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> Target Qs</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="text-3xl font-black text-rose-600 dark:text-rose-400 group-hover:-translate-y-1 transition-transform capitalize mt-1.5">{difficulty}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> Difficulty</div>
              </div>
            </div>

            {/* Seamless Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md relative z-20">
              <button
                onClick={() => router.push(`/test/${seriesId}-ai-mock/instructions`)} 
                className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 px-8 py-5 rounded-full font-black text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] transition-all transform active:scale-95 flex items-center justify-center gap-3"
              >
                Start Simulation <PlayCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setShowSuccess(false);
                }} 
                className="w-full sm:w-auto text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-8 py-4 rounded-full font-bold text-sm transition-colors flex items-center justify-center shrink-0 border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
              >
                Edit Parameters
              </button>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes dash { 0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; } 50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; } 100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; } }
            `}} />
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
                    const subChapters = sub.chapters.map((c: any) => c.name);
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
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
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

                    <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700/50 self-start sm:self-auto shrink-0 overflow-x-auto w-full sm:w-auto">
                      {['All', '11th', '12th'].map(cls => (
                        <button
                          key={cls}
                          onClick={() => setClassFilter(cls as 'All' | '11th' | '12th')}
                          className={`flex-1 sm:flex-none px-4 py-2.5 sm:py-2 text-xs font-black rounded-lg transition-all whitespace-nowrap ${
                            classFilter === cls 
                              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800'
                          }`}
                        >
                          {cls === 'All' ? 'All Classes' : `Class ${cls}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                       <Layers className="w-4 h-4 hidden sm:block" /> {classFilter === 'All' ? 'All Chapters' : `Class ${classFilter} Syllabus`}
                    </div>
                    <button
                      onClick={() => {
                        const displayedChaps = activeSubject.chapters.filter((c: any) => classFilter === 'All' || c.class === classFilter);
                        const displayedChapNames = displayedChaps.map((c: any) => c.name);
                        const hasAll = displayedChapNames.every((c: string) => selectedChapters.includes(c));
                        if (hasAll) {
                          setSelectedChapters(prev => prev.filter(c => !displayedChapNames.includes(c)));
                        } else {
                          const newAdditions = displayedChapNames.filter((c: string) => !selectedChapters.includes(c));
                          setSelectedChapters(prev => [...prev, ...newAdditions]);
                        }
                      }}
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-xs font-bold transition-colors bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1.5 rounded-md"
                    >
                      Toggle All (Current View)
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {activeSubject.chapters
                      .filter((chapObj: any) => classFilter === 'All' || chapObj.class === classFilter)
                      .map((chapObj: any) => {
                      const chap = chapObj.name;
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
