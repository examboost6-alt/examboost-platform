'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
    Clock, 
    Save, 
    CheckCircle2, 
    Calculator, 
    FileText, 
    Menu,
    X,
    ChevronDown,
    Flag
} from 'lucide-react';

// Wrap the main component in Suspense since we use useSearchParams
export default function NEETTestEngineWrapper() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading Test Engine...</div>}>
            <NEETTestEngine />
        </Suspense>
    );
}

// Generate some mock questions
const mockQuestions = Array.from({ length: 90 }).map((_, i) => ({
    id: i + 1,
    subject: i < 45 ? "Biology" : i < 68 ? "Physics" : "Chemistry",
    textEn: `This is a sample question number ${i + 1} for ${i < 45 ? "Biology" : i < 68 ? "Physics" : "Chemistry"}. Which of the following is the correct statement?`,
    textHi: `यह ${i < 45 ? "जीव विज्ञान" : i < 68 ? "भौतिक विज्ञान" : "रसायन विज्ञान"} के लिए एक नमूना प्रश्न संख्या ${i + 1} है। निम्नलिखित में से कौन सा कथन सही है?`,
    options: [
        { id: 1, textEn: `Option A for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प A` },
        { id: 2, textEn: `Option B for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प B` },
        { id: 3, textEn: `Option C for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प C` },
        { id: 4, textEn: `Option D for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प D` }
    ],
    correctOption: (i % 4) + 1
}));

function NEETTestEngine() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const defaultLang = searchParams.get('lang') === 'hindi' ? 'hindi' : 'english';

    const [timeLeft, setTimeLeft] = useState(200 * 60); // 200 mins in seconds
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);
    
    // State for questions
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionLang, setQuestionLang] = useState<'english' | 'hindi'>(defaultLang);
    
    // Responses and Status tracking
    // Status can be: 'not_visited', 'not_answered', 'answered', 'marked', 'answered_marked'
    const [responses, setResponses] = useState<Record<number, number>>({});
    const [status, setStatus] = useState<Record<number, string>>({
        [mockQuestions[0].id]: 'not_answered'
    });

    const currentQuestion = mockQuestions[currentQuestionIndex];

    // Timer Effect
    useEffect(() => {
        if (isSubmitted) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isSubmitted]);

    useEffect(() => {
        // When question changes, if it's not visited, make it not_answered
        setStatus((prev) => {
            if (!prev[currentQuestion.id] || prev[currentQuestion.id] === 'not_visited') {
                return { ...prev, [currentQuestion.id]: 'not_answered' };
            }
            return prev;
        });
        // Also reset language to default when changing questions
        setQuestionLang(defaultLang);
    }, [currentQuestionIndex, defaultLang, currentQuestion.id]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (optId: number) => {
        setResponses(prev => ({ ...prev, [currentQuestion.id]: optId }));
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < mockQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert("This is the last question. Please submit the test if you are done.");
        }
    };

    const handleSaveNext = () => {
        if (responses[currentQuestion.id] !== undefined) {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'answered' }));
        } else {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'not_answered' }));
        }
        goToNextQuestion();
    };

    const handleMarkReview = () => {
        if (responses[currentQuestion.id] !== undefined) {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'answered_marked' }));
        } else {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'marked' }));
        }
        goToNextQuestion();
    };

    const handleClearResponse = () => {
        setResponses(prev => {
            const newRes = { ...prev };
            delete newRes[currentQuestion.id];
            return newRes;
        });
        setStatus(prev => ({ ...prev, [currentQuestion.id]: 'not_answered' }));
    };

    const navToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setIsMobilePaletteOpen(false);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const getStatusCounts = () => {
        let answered = 0;
        let notAnswered = 0;
        let notVisited = 0;
        let marked = 0;
        let answeredMarked = 0;

        mockQuestions.forEach(q => {
            const s = status[q.id] || 'not_visited';
            if (s === 'answered') answered++;
            else if (s === 'not_answered') notAnswered++;
            else if (s === 'not_visited') notVisited++;
            else if (s === 'marked') marked++;
            else if (s === 'answered_marked') answeredMarked++;
        });

        return { answered, notAnswered, notVisited, marked, answeredMarked };
    };

    const counts = getStatusCounts();

    const getStatusColor = (questionId: number) => {
        const s = status[questionId] || 'not_visited';
        if (s === 'answered') return 'bg-emerald-500 text-white border-transparent';
        if (s === 'not_answered') return 'bg-red-500 text-white border-transparent rounded-b-md rounded-t-lg';
        if (s === 'not_visited') return 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-transparent';
        if (s === 'marked') return 'bg-indigo-500 text-white rounded-full border-transparent';
        if (s === 'answered_marked') return 'bg-indigo-500 text-white rounded-full border-2 border-emerald-400';
        return 'bg-slate-200 dark:bg-slate-800';
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#f4f7fe] dark:bg-[#0b1120] flex items-center justify-center p-4">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 max-w-md w-full text-center shadow-2xl shadow-indigo-500/10 border border-slate-200 dark:border-slate-800">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">Test Submitted!</h1>
                    <p className="text-slate-500 text-sm sm:text-base font-medium mb-8">Your responses have been recorded successfully. Analytics are being generated.</p>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl mb-8 flex justify-between px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                        <div className="text-center">
                            <span className="block text-xl sm:text-2xl mb-1 text-emerald-600">{counts.answered + counts.answeredMarked}</span>
                            Attempted
                        </div>
                        <div className="text-center">
                            <span className="block text-xl sm:text-2xl mb-1 text-red-500">{counts.notAnswered}</span>
                            Missed
                        </div>
                        <div className="text-center">
                            <span className="block text-xl sm:text-2xl mb-1 text-indigo-500">{counts.marked + counts.answeredMarked}</span>
                            Reviewed
                        </div>
                    </div>

                    <button 
                        onClick={() => router.push('/dashboard')}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-95 text-sm sm:text-base"
                    >
                        Return to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col bg-[#f8fafc] dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans overflow-hidden">
            {/* Top Header */}
            <header className="h-14 sm:h-16 bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-3 sm:px-6 shrink-0 shadow-sm z-20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-md">
                        EB
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="font-bold text-sm sm:text-base tracking-tight leading-tight text-slate-800 dark:text-slate-100">ExamBoost NTA Simulator</h1>
                        <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold">NEET UG</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="hidden md:flex items-center gap-4 pr-6 border-r border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                        <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1" title="Calculator"><Calculator className="w-5 h-5" /></button>
                        <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1" title="Question Paper"><FileText className="w-5 h-5" /></button>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Time Left</span>
                        <div className={`font-black text-base sm:text-xl tabular-nums tracking-tight flex items-center gap-1.5 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-slate-800 dark:text-slate-200'}`}>
                            <Clock className="w-4 h-4 sm:hidden" />
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => {
                            if(confirm("Are you sure you want to completely SUBMIT this test? You cannot return back.")) handleSubmit()
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold shadow-sm shadow-red-500/20 active:scale-95 transition-all hidden sm:block"
                    >
                        Submit Test
                    </button>
                    
                    {/* Mobile Menu Toggle for Palette */}
                    <button 
                        className="lg:hidden p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md"
                        onClick={() => setIsMobilePaletteOpen(true)}
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden relative">
                
                {/* Left Side: Question Panel */}
                <div className="flex-1 flex flex-col bg-white dark:bg-[#0f172a] shadow-2xl z-0 relative lg:rounded-tr-2xl lg:mr-1 border-r border-slate-200 dark:border-slate-800 h-full overflow-hidden">
                    
                    {/* Section Bar & Lang Toggle */}
                    <div className="h-12 sm:h-14 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-3 sm:px-6 bg-[#f8fafc] dark:bg-[#1e293b] shrink-0">
                        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                            <span className="text-xs font-bold text-white bg-indigo-600 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                                {currentQuestion.subject}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">View In:</span>
                            <div className="relative">
                                <select 
                                    value={questionLang}
                                    onChange={(e) => setQuestionLang(e.target.value as 'english' | 'hindi')}
                                    className="appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-sm"
                                >
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi (हिंदी)</option>
                                </select>
                                <ChevronDown className="w-3 h-3 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 hide-scrollbar bg-white dark:bg-[#0f172a]">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-slate-100 dark:border-slate-800/60 pb-4">
                                <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-800 dark:text-slate-200">
                                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm sm:text-base border border-slate-200 dark:border-slate-700 shadow-sm">
                                        Q.{currentQuestion.id}
                                    </span>
                                </h2>
                                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-emerald-100 dark:border-emerald-500/20 shadow-sm">
                                    Single Choice (+4, -1)
                                </span>
                            </div>

                            <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-100 leading-relaxed tracking-tight mb-8 sm:mb-10 text-justify">
                                {questionLang === 'hindi' ? currentQuestion.textHi : currentQuestion.textEn}
                            </p>

                            <div className="space-y-3 sm:space-y-4">
                                {currentQuestion.options.map((opt, idx) => {
                                    const labels = ['A', 'B', 'C', 'D'];
                                    const isSelected = responses[currentQuestion.id] === opt.id;
                                    return (
                                        <label 
                                            key={opt.id}
                                            className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl sm:rounded-2xl cursor-pointer transition-all border-2 ${isSelected ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20 dark:border-indigo-500 shadow-inner' : 'border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/80'}`}
                                        >
                                            <div className="relative flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                                                <input 
                                                    type="radio" 
                                                    name={`option-${currentQuestion.id}`} 
                                                    value={opt.id}
                                                    checked={isSelected}
                                                    onChange={() => handleOptionSelect(opt.id)}
                                                    className="w-5 h-5 text-indigo-600 bg-slate-100 border-slate-300 focus:ring-0 focus:ring-offset-0 transition-all opacity-0 absolute inset-0 z-10 cursor-pointer" 
                                                />
                                                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${isSelected ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                                                    {labels[idx]}
                                                </div>
                                            </div>
                                            <span className={`font-medium text-sm sm:text-base md:text-lg select-none pt-0.5 sm:pt-0.5 ${isSelected ? 'text-indigo-950 dark:text-indigo-50 font-semibold' : 'text-slate-700 dark:text-slate-300'}`}>
                                                {questionLang === 'hindi' ? opt.textHi : opt.textEn}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 p-3 sm:p-4 shrink-0 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 justify-between max-w-4xl mx-auto">
                            
                            <div className="flex gap-2 w-full sm:w-auto">
                                <button 
                                    onClick={handleMarkReview}
                                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all focus:outline-none"
                                >
                                    <Flag className="w-3.5 h-3.5" />
                                    <span className="whitespace-nowrap">Mark for Review</span>
                                </button>
                                <button 
                                    onClick={handleClearResponse}
                                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all focus:outline-none text-center"
                                >
                                    Clear
                                </button>
                            </div>

                            <button 
                                onClick={handleSaveNext}
                                className={`w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${responses[currentQuestion.id] !== undefined ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 active:scale-95' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 active:scale-95'}`}
                            >
                                <Save className="w-4 h-4 sm:w-5 sm:h-5" />
                                Save & Next
                            </button>
                            
                            {/* Mobile Submit Button inside action bar */}
                            <button 
                                onClick={() => {
                                    if(confirm("Are you sure you want to completely SUBMIT this test? You cannot return back.")) handleSubmit()
                                }}
                                className="w-full sm:hidden mt-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-sm font-bold shadow-sm shadow-red-500/20 active:scale-95 transition-all text-center"
                            >
                                Submit Test
                            </button>
                        </div>
                    </div>

                </div>

                {/* Right Side: Navigation Palette (Desktop) or Mobile Drawer */}
                <div className={`fixed inset-y-0 right-0 z-50 w-80 bg-[#f8fafc] dark:bg-[#020617] border-l border-slate-200 dark:border-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMobilePaletteOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:flex lg:w-80 shrink-0`}>
                    
                    <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] shrink-0">
                        <div className="flex items-center gap-3">
                            <img src="https://ui-avatars.com/api/?name=Candidate&background=4f46e5&color=fff" className="w-10 h-10 rounded-lg shadow-sm" alt="User" />
                            <div>
                                <p className="font-bold text-sm leading-tight text-slate-800 dark:text-slate-200">Test Aspirant</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">NEET UG</p>
                            </div>
                        </div>
                        <button 
                            className="lg:hidden p-1.5 text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-md"
                            onClick={() => setIsMobilePaletteOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Status Info Box */}
                    <div className="p-4 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-[#0f172a] shadow-sm shrink-0">
                       <div className="flex items-center gap-2">
                           <div className="w-5 h-5 rounded-sm flex items-center justify-center bg-emerald-500 text-white font-bold text-[10px]">{counts.answered}</div> Answered
                        </div>
                       <div className="flex items-center gap-2">
                           <div className="w-5 h-5 rounded-b-sm rounded-t-lg flex items-center justify-center bg-red-500 text-white font-bold text-[10px]">{counts.notAnswered}</div> Not Answered
                        </div>
                       <div className="flex items-center gap-2">
                           <div className="w-5 h-5 rounded-sm bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-[10px]">{counts.notVisited}</div> Not Visited
                        </div>
                       <div className="flex items-center gap-2">
                           <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-[10px]">{counts.marked}</div> Marked for Review
                        </div>
                       <div className="flex items-center gap-2 col-span-2">
                           <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-emerald-400 flex items-center justify-center text-white font-bold text-[10px]">{counts.answeredMarked}</div> Answered & Marked for Review
                        </div>
                    </div>
                
                    <div className="flex-1 overflow-visible flex flex-col min-h-0 bg-[#f8fafc] dark:bg-[#020617]">
                        <div className="px-4 py-3 bg-[#f1f5f9] dark:bg-[#1e293b] border-y border-slate-200 dark:border-slate-700 flex justify-between items-center sticky top-0 z-10">
                            <h4 className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Question Palette</h4>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-4 hide-scrollbar space-y-6">
                            {/* Group by subject */}
                            {['Biology', 'Physics', 'Chemistry'].map((subject, idx) => {
                                const subjectQuestions = mockQuestions.filter(q => q.subject === subject);
                                return (
                                    <div key={subject}>
                                        <h5 className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-wider">{subject}</h5>
                                        <div className="grid grid-cols-5 gap-2.5">
                                            {subjectQuestions.map((q) => {
                                                const isActive = currentQuestion.id === q.id;
                                                return (
                                                    <button 
                                                        key={q.id}
                                                        onClick={() => navToQuestion(mockQuestions.findIndex(mq => mq.id === q.id))}
                                                        className={`w-10 h-10 flex items-center justify-center font-bold text-xs shadow-sm transition-all focus:outline-none 
                                                            ${getStatusColor(q.id)}
                                                            ${(status[q.id] || 'not_visited') === 'not_visited' ? 'rounded-md' : ''}
                                                            ${isActive ? 'ring-2 ring-slate-900 dark:ring-white ring-offset-2 dark:ring-offset-slate-900 scale-110' : 'hover:opacity-80'}
                                                        `}
                                                    >
                                                        {q.id}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

                {/* Mobile Overlay */}
                {isMobilePaletteOpen && (
                    <div 
                        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsMobilePaletteOpen(false)}
                    />
                )}

            </div>

            {/* Global style to hide scrollbars */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
