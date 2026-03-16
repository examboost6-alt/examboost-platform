'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
    CheckCircle2, 
    Menu,
    X,
} from 'lucide-react';

export default function NTA_JEETestEngineWrapper() {
    return (
        <Suspense fallback={<div className="min-vh-100 bg-slate-900 flex items-center justify-center text-white">Loading Test Engine...</div>}>
            <JEE_NTA_TestEngine />
        </Suspense>
    );
}

// Generate some mock questions (90 for JEE: 30 Math, 30 Physics, 30 Chem)
const subjectsList = ['Physics', 'Chemistry', 'Mathematics'];
const mockQuestions = Array.from({ length: 90 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 30 && i < 60) subject = 'Chemistry';
    if (i >= 60) subject = 'Mathematics';
    
    return {
        id: i + 1,
        subject: subject,
        textEn: `This is a sample question number ${i + 1} for ${subject}. In this question, which of the following refers to the correct concept?`,
        textHi: `यह ${subject} के लिए एक नमूना प्रश्न संख्या ${i + 1} है। इस प्रश्न में, निम्नलिखित में से कौन सही अवधारणा को संदर्भित करता है?`,
        options: [
            { id: 1, textEn: `Option 1 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 1` },
            { id: 2, textEn: `Option 2 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 2` },
            { id: 3, textEn: `Option 3 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 3` },
            { id: 4, textEn: `Option 4 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 4` }
        ],
        correctOption: (i % 4) + 1
    };
});

function JEE_NTA_TestEngine() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const defaultLang = searchParams.get('lang') === 'hindi' ? 'hindi' : 'english';

    const [timeLeft, setTimeLeft] = useState(180 * 60); // 180 mins for JEE
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);
    
    // State for questions
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionLang, setQuestionLang] = useState<'english' | 'hindi'>(defaultLang);
    
    const [responses, setResponses] = useState<Record<number, number>>({});
    const [status, setStatus] = useState<Record<number, string>>({
        [mockQuestions[0].id]: 'not_answered'
    });

    const currentQuestion = mockQuestions[currentQuestionIndex];
    const [activeSubject, setActiveSubject] = useState(currentQuestion.subject);

    useEffect(() => {
        // Sync active subject tab when question changes via Next/Back
        if (currentQuestion.subject !== activeSubject) {
            setActiveSubject(currentQuestion.subject);
        }
    }, [currentQuestionIndex]);

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
        setStatus((prev) => {
            if (!prev[currentQuestion.id] || prev[currentQuestion.id] === 'not_visited') {
                return { ...prev, [currentQuestion.id]: 'not_answered' };
            }
            return prev;
        });
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
        }
    };
    
    const goToPrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
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

    const handleSaveMarkReview = () => {
        if (responses[currentQuestion.id] !== undefined) {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'answered_marked' }));
        } else {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'marked' }));
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

    const handleSubjectChange = (subject: string) => {
        setActiveSubject(subject);
        // Find first question of this subject
        const firstQIndex = mockQuestions.findIndex(q => q.subject === subject);
        if (firstQIndex !== -1) {
            navToQuestion(firstQIndex);
        }
    };

    const handleSubmit = () => {
        if (confirm("Are you sure you want to submit the exam?")) {
            setIsSubmitted(true);
        }
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

    const getStatusShapeClasses = (questionId: number) => {
        const s = status[questionId] || 'not_visited';
        if (s === 'not_visited') return 'bg-[#e2e2e2] text-black border border-[#d4d4d4] rounded-sm';
        if (s === 'not_answered') return 'bg-[#e74c3c] text-white rounded-b-lg rounded-t-sm';
        if (s === 'answered') return 'bg-[#2ecc71] text-white rounded-t-lg rounded-b-sm';
        if (s === 'marked') return 'bg-[#9b59b6] text-white rounded-full flex items-center justify-center';
        if (s === 'answered_marked') return 'bg-[#9b59b6] text-white rounded-full relative';
        return 'bg-gray-200';
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#f4f7fe] flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-md w-full text-center shadow-2xl shadow-indigo-500/10 border border-slate-200">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Test Submitted!</h1>
                    <p className="text-slate-500 text-sm sm:text-base font-medium mb-8">Your responses have been recorded successfully. Analytics are being generated.</p>
                    
                    <div className="bg-slate-50 p-4 rounded-xl mb-8 flex justify-between px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-700">
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
                        className="w-full bg-[#337ab7] hover:bg-[#286090] text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg transition-all active:scale-95 text-sm sm:text-base"
                    >
                        Return to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen font-sans bg-white overflow-hidden text-[13px] md:text-sm select-none">
            {/* Header */}
            <header className="flex justify-between items-center bg-[#2B579A] text-white px-4 py-2 border-b-4 border-[#1c3a66] shrink-0">
                <div className="flex items-center gap-3">
                    <div className="text-lg md:text-xl font-bold uppercase tracking-wide hidden sm:block">ExamBoost NTA Simulator</div>
                    <div className="text-lg md:text-xl font-bold uppercase tracking-wide sm:hidden">NTA Simulator</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right leading-tight hidden md:block">
                        <div className="text-xs text-blue-100">Candidate Name: <span className="text-yellow-300 font-bold ml-1 text-sm tracking-wide">Test Aspirant</span></div>
                        <div className="text-xs text-blue-100 mt-0.5">Exam Name: <span className="text-yellow-300 font-bold ml-1 text-sm tracking-wide">JEE MAIN</span></div>
                    </div>
                </div>
            </header>
            
            <div className="flex flex-1 overflow-hidden relative">
                {/* Left Panel */}
                <div className="flex-1 flex flex-col border-r border-[#ccc] min-w-0 bg-[#f9f9f9] lg:bg-white z-10 w-full lg:w-auto">
                    <div className="bg-[#e4e8eb] border-b border-[#ccc] flex justify-between items-center px-3 py-2 shrink-0">
                        <div className="font-bold text-[#333] text-sm md:text-base">JEE MAIN PAPER 1</div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#333] hidden sm:inline">Time Left:</span>
                            <span className="bg-white px-2 md:px-3 py-0.5 border border-[#ccc] rounded">
                                <span className="font-bold text-lg md:text-xl text-[#2B579A] tabular-nums tracking-widest">{formatTime(timeLeft)}</span>
                            </span>
                        </div>
                        {/* Mobile right panel toggler in header */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMobilePaletteOpen(true)} className="bg-[#2B579A] p-2 text-white rounded">
                                 <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Subject Tabs */}
                    <div className="bg-[#f0f0f0] flex px-2 pt-2 border-b-2 border-[#2B579A] shrink-0 overflow-x-auto hide-scrollbar">
                        {subjectsList.map(sub => (
                            <button 
                                key={sub}
                                onClick={() => handleSubjectChange(sub)}
                                className={`px-4 md:px-8 py-2 md:py-2.5 font-bold rounded-t-md border-t border-l border-r mr-1 whitespace-nowrap outline-none transition-colors ${activeSubject === sub ? 'bg-[#2B579A] text-white border-[#2B579A]' : 'bg-[#e0e0e0] text-[#333] border-[#ccc] hover:bg-[#d0d0d0]'}`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>

                    {/* Question Header */}
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#ccc] bg-white shrink-0">
                        <div className="font-bold text-red-600 text-xs md:text-sm">Question Type : Multiple Choice Question</div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-semibold text-xs md:text-sm whitespace-nowrap hidden sm:inline">View In : </span>
                            <select 
                                value={questionLang}
                                onChange={(e) => setQuestionLang(e.target.value as 'english' | 'hindi')}
                                className="border border-[#ccc] px-2 py-1 text-xs md:text-sm font-semibold rounded outline-none w-[100px] md:w-[120px] bg-white"
                            >
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-blue-50/50 px-4 py-2 border-b border-[#ccc] shrink-0">
                        <div className="font-bold text-[#2B579A] text-sm md:text-base">
                            Question No. {currentQuestion.id}
                        </div>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 text-sm md:text-base bg-white">
                        <div className="mb-6 md:mb-8 text-black font-semibold text-base md:text-lg leading-relaxed select-text">
                            {questionLang === 'hindi' ? currentQuestion.textHi : currentQuestion.textEn}
                        </div>
                        
                        <div className="space-y-4">
                            {currentQuestion.options.map((opt, idx) => {
                                const isSelected = responses[currentQuestion.id] === opt.id;
                                return (
                                    <label key={opt.id} className={`flex items-start gap-4 cursor-pointer p-4 rounded-md transition-colors border ${isSelected ? 'border-blue-300 bg-blue-50' : 'border-transparent hover:bg-gray-50'}`}>
                                        <div className="flex-shrink-0 pt-0.5">
                                            <input 
                                                type="radio" 
                                                name={`option-${currentQuestion.id}`} 
                                                checked={isSelected}
                                                onChange={() => handleOptionSelect(opt.id)}
                                                className="w-5 h-5 text-[#2B579A] border-gray-400 focus:ring-[#2B579A] cursor-pointer" 
                                            />
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="font-bold text-gray-700 min-w-[20px] text-base md:text-lg">{idx+1})</span>
                                            <span className="text-gray-900 font-medium text-base md:text-lg font-serif">
                                                {questionLang === 'hindi' ? opt.textHi : opt.textEn}
                                            </span>
                                        </div>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="bg-[#f2f4f5] border-t border-[#ccc] p-3 md:p-4 flex flex-wrap md:flex-nowrap justify-between gap-3 shrink-0">
                        <div className="flex flex-wrap md:flex-nowrap gap-2 w-full md:w-auto">
                            <button onClick={handleSaveNext} className="w-full md:w-auto bg-[#5cb85c] hover:bg-[#4cae4c] text-white px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#4cae4c]">
                                Save & Next
                            </button>
                            <button onClick={handleClearResponse} className="w-[48%] md:w-auto bg-white hover:bg-gray-100 text-[#333] px-3 md:px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#ccc]">
                                Clear
                            </button>
                            <button onClick={handleSaveMarkReview} className="w-[48%] md:w-auto bg-[#f0ad4e] hover:bg-[#eea236] text-white px-3 md:px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#eea236] whitespace-nowrap text-xs md:text-sm">
                                Save & Mark For Review
                            </button>
                            <button onClick={handleMarkReview} className="w-full md:w-auto bg-[#337ab7] hover:bg-[#286090] text-white px-3 md:px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#2e6da4]">
                                Mark For Review & Next
                            </button>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0 justify-between md:justify-center">
                            <button onClick={goToPrevQuestion} disabled={currentQuestionIndex === 0} className="w-1/2 md:w-auto bg-white hover:bg-gray-100 text-[#333] disabled:opacity-50 disabled:cursor-not-allowed px-5 md:px-6 py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#ccc]">
                                &lt;&lt; Back
                            </button>
                            <button onClick={goToNextQuestion} disabled={currentQuestionIndex === mockQuestions.length - 1} className="w-1/2 md:w-auto bg-white hover:bg-gray-100 text-[#333] disabled:opacity-50 disabled:cursor-not-allowed px-5 md:px-6 py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#ccc]">
                                Next &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className={`absolute lg:relative inset-y-0 right-0 z-50 w-[300px] lg:w-[320px] bg-[#e4e8eb] flex flex-col shrink-0 transform transition-transform duration-300 ${isMobilePaletteOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} shadow-2xl lg:shadow-none border-l border-[#ccc]`}>
                    
                    {/* Profile Section */}
                    <div className="p-3 bg-white border-b border-[#ccc] flex flex-col shrink-0">
                        <div className="flex justify-end lg:hidden mb-1">
                             <button onClick={() => setIsMobilePaletteOpen(false)} className="bg-gray-200 text-gray-700 p-1.5 rounded"><X className="w-4 h-4"/></button>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-[85px] h-[85px] bg-white border border-[#ccc] p-0.5 shrink-0 overflow-hidden shadow-sm">
                                <img src="https://ui-avatars.com/api/?name=User&background=f3f4f6&color=6b7280&size=100&font-size=0.6" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="font-bold text-[#337ab7] text-xl block truncate leading-none mb-1">Test Aspirant</span>
                                <span className="text-gray-500 font-semibold text-xs uppercase block">JEE MAIN</span>
                            </div>
                        </div>
                    </div>

                    {/* Status Legends */}
                    <div className="p-2 md:p-3 bg-white grid grid-cols-2 gap-x-2 gap-y-2 text-[11px] md:text-xs border-b border-[#ccc] shrink-0 font-bold text-[#555] shadow-sm">
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#f1f1f1] text-black border border-[#d4d4d4] rounded shadow-sm shrink-0">{counts.notVisited}</div>
                           <span className="leading-tight truncate">Not Visited</span>
                       </div>
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#e74c3c] text-white rounded-b-lg rounded-t-sm shadow-sm shrink-0">{counts.notAnswered}</div>
                           <span className="leading-tight truncate">Not Answered</span>
                       </div>
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#2ecc71] text-white rounded-t-lg rounded-b-sm shadow-sm shrink-0">{counts.answered}</div>
                           <span className="leading-tight truncate">Answered</span>
                       </div>
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#9b59b6] text-white rounded-full shadow-sm shrink-0">{counts.marked}</div>
                           <span className="leading-tight truncate">Marked for Review</span>
                       </div>
                       <div className="flex items-start md:items-center gap-2 col-span-2 mt-1 bg-gray-50 p-1.5 border border-gray-100 rounded">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#9b59b6] text-white rounded-full relative shrink-0 shadow-sm mt-0.5 md:mt-0">
                               {counts.answeredMarked}
                               <div className="absolute bottom-0 -right-0.5 w-[10px] h-[10px] bg-[#2ecc71] rounded-full border border-white"></div>
                           </div>
                           <span className="leading-tight text-[10px] md:text-[11px] pr-1">Answered & Marked for Review (will be considered for evaluation)</span>
                       </div>
                    </div>

                    {/* Section Label */}
                    <div className="bg-[#337ab7] text-white px-4 py-2 font-bold text-sm shrink-0 flex justify-between items-center shadow-inner text-center justify-center">
                        <span className="uppercase mx-auto block w-full text-center">{activeSubject}</span>
                    </div>

                    {/* Question Palette */}
                    <div className="flex-1 overflow-y-auto bg-blue-50/20 p-4 hide-scrollbar min-h-0 border-b border-[#ccc]">
                        <div className="font-bold text-[#337ab7] mb-3 text-sm border-b border-[#bce8f1] pb-1">Choose a Question</div>
                        <div className="grid grid-cols-5 gap-y-3 gap-x-2">
                            {mockQuestions.filter(q => q.subject === activeSubject).map((q) => {
                                const isActive = currentQuestion.id === q.id;
                                const shapeClass = getStatusShapeClasses(q.id);
                                return (
                                    <button 
                                        key={q.id}
                                        onClick={() => navToQuestion(mockQuestions.findIndex(mq => mq.id === q.id))}
                                        className={`w-[42px] h-[36px] flex items-center justify-center font-bold text-sm md:text-[15px] transition-all relative mx-auto ${shapeClass} ${isActive ? 'ring-2 ring-[#000] ring-offset-2 z-10 scale-[1.05] font-black' : 'hover:brightness-95 shadow-[0_1px_2px_rgba(0,0,0,0.15)]'}`}
                                    >
                                        {q.id}
                                        {status[q.id] === 'answered_marked' && (
                                            <div className="absolute -bottom-[1px] -right-[2px] w-[12px] h-[12px] bg-[#2ecc71] rounded-full border border-white z-20"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="bg-[#f5f5f5] p-3 md:p-4 shrink-0 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                         <button 
                            onClick={handleSubmit} 
                            className="bg-[#5cb85c] hover:bg-[#4cae4c] w-full text-white py-3 rounded font-bold text-base border border-[#4cae4c] shadow-[0_2px_4px_rgba(0,0,0,0.2)] uppercase tracking-wider transition-colors active:translate-y-px"
                         >
                            Submit Test
                         </button>
                    </div>

                </div>
            </div>

            {/* Mobile Overlay */}
            {isMobilePaletteOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsMobilePaletteOpen(false)}
                />
            )}

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
