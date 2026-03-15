'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, Eye, Flag, Save, CheckCircle2, AlertCircle, Bookmark, ChevronLeft, ChevronRight, Calculator, FileText } from 'lucide-react';

export default function NEETTestEngine() {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(200 * 60); // 200 mins in seconds
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isReviewed, setIsReviewed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
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

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const mockQuestion = {
        id: 1,
        subject: "Biology (Botany)",
        text: "The term \"Cell Theory\" was primarily proposed by which two scientists?",
        options: [
            { id: 1, text: "Matthias Schleiden and Theodor Schwann" },
            { id: 2, text: "Robert Hooke and Anton van Leeuwenhoek" },
            { id: 3, text: "Rudolph Virchow and Louis Pasteur" },
            { id: 4, text: "Watson and Crick" }
        ],
        correctOption: 1
    };

    const handleSaveNext = () => {
        setIsReviewed(false);
        alert("Response Saved! (Demo behavior: End of test)");
        handleSubmit();
    };

    const handleMarkReview = () => {
        setIsReviewed(true);
        alert("Marked for Review!");
    };

    const handleClearResponse = () => {
        setSelectedOption(null);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#f4f7fe] dark:bg-[#0b1120] flex items-center justify-center p-4">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 max-w-md w-full text-center shadow-xl shadow-indigo-500/10 border border-slate-200 dark:border-slate-800">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Test Submitted Successfully!</h1>
                    <p className="text-slate-500 font-medium mb-8">Your responses have been recorded successfully. Analytics are being generated.</p>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl mb-8 flex justify-between px-6 text-sm font-bold text-slate-700 dark:text-slate-300">
                        <div className="text-center">
                            <span className="block text-2xl mb-1 text-emerald-600">1</span>
                            Attempted
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl mb-1 text-red-500">0</span>
                            Missed
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl mb-1 text-indigo-500">0</span>
                            Reviewed
                        </div>
                    </div>

                    <button 
                        onClick={() => router.push('/dashboard')}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
                    >
                        Return to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans overflow-hidden">
            {/* Top Toolbar */}
            <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-black text-sm shadow-sm">
                        EB
                    </div>
                    <div>
                        <h1 className="font-bold text-sm tracking-tight leading-tight">ExamBoost NTA Simulator</h1>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{mockQuestion.subject}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 pr-6 border-r border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                        <button className="hover:text-indigo-600 transition-colors p-1" title="Calculator"><Calculator className="w-5 h-5" /></button>
                        <button className="hover:text-indigo-600 transition-colors p-1" title="Question Paper"><FileText className="w-5 h-5" /></button>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Time Left</span>
                        <div className={`font-black text-lg tabular-nums tracking-tight flex items-center gap-2 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-slate-800 dark:text-slate-200'}`}>
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => {
                            if(confirm("Are you sure you want to completely SUBMIT this test? You cannot return back.")) handleSubmit()
                        }}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 text-sm font-bold shadow-sm shadow-teal-500/20 active:scale-95 transition-all"
                    >
                        Submit Test
                    </button>
                </div>
            </header>

            {/* Main Area */}
            <div className="flex flex-1 overflow-hidden">
                
                {/* Left Side: Question Panel */}
                <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 shadow-xl z-0 relative">
                    
                    {/* Section Bar */}
                    <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 bg-slate-50 dark:bg-slate-800/50">
                        <span className="text-xs font-bold text-white bg-indigo-600 px-3 py-1.5 rounded-full shadow-sm">{mockQuestion.subject}</span>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-10 hide-scrollbar">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-between items-start mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                                <h2 className="text-xl font-bold flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center text-sm">Q.1</span>
                                </h2>
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">Single Choice (+4, -1)</span>
                            </div>

                            <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed tracking-tight mb-10">
                                {mockQuestion.text}
                            </p>

                            <div className="space-y-4">
                                {mockQuestion.options.map((opt, idx) => {
                                    const labels = ['A', 'B', 'C', 'D', 'E'];
                                    const isSelected = selectedOption === opt.id;
                                    return (
                                        <label 
                                            key={opt.id}
                                            className={`flex items-center gap-4 p-4 md:p-5 rounded-2xl cursor-pointer transition-all border-2 ${isSelected ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20 dark:border-indigo-500' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm'}`}
                                        >
                                            <div className="relative flex items-center justify-center shrink-0">
                                                <input 
                                                    type="radio" 
                                                    name="option" 
                                                    value={opt.id}
                                                    checked={isSelected}
                                                    onChange={() => setSelectedOption(opt.id)}
                                                    className="w-5 h-5 text-indigo-600 bg-slate-100 border-slate-300 focus:ring-0 focus:ring-offset-0 transition-all opacity-0 absolute inset-0 z-10 cursor-pointer" 
                                                />
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${isSelected ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                                                    {labels[idx]}
                                                </div>
                                            </div>
                                            <span className={`font-medium text-base md:text-lg select-none ${isSelected ? 'text-indigo-900 dark:text-indigo-100 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>{opt.text}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="h-16 md:h-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center px-4 md:px-8 justify-between shrink-0 drop-shadow-2xl">
                        <div className="flex items-center gap-3 md:gap-4">
                            <button 
                                onClick={handleMarkReview}
                                className="px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs md:text-sm uppercase tracking-wider transition-all focus:outline-none"
                            >
                                Mark for Review & Next
                            </button>
                            <button 
                                onClick={handleClearResponse}
                                className="px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 font-bold text-xs md:text-sm uppercase tracking-wider transition-all focus:outline-none"
                            >
                                Clear Response
                            </button>
                        </div>

                        <button 
                            onClick={handleSaveNext}
                            className={`px-8 md:px-12 py-3 md:py-3.5 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg flex items-center gap-2 ${selectedOption !== null ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/30 active:scale-95' : 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/30 active:scale-95'}`}
                        >
                            <Save className="w-5 h-5 relative -left-1" />
                            Save & Next
                        </button>
                    </div>

                </div>

                {/* Right Side: Navigation Palette */}
                <div className="hidden lg:flex flex-col w-80 bg-[#f4f7fe] dark:bg-[#0b1120] border-l border-slate-200 dark:border-slate-800 shrink-0">
                    
                    {/* User Profile Mini */}
                    <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-4 bg-white dark:bg-slate-900">
                        <img src="https://ui-avatars.com/api/?name=Candidate&background=4f46e5&color=fff" className="w-12 h-12 rounded bg-indigo-100" />
                        <div>
                            <p className="font-bold text-sm leading-tight text-slate-800 dark:text-slate-200">Test Aspirant</p>
                            <p className="text-xs text-slate-500 font-medium">NEET UG Pre-Medical</p>
                        </div>
                    </div>

                    {/* Status Info Box */}
                    <div className="p-4 grid grid-cols-2 gap-2 text-xs font-bold text-white bg-slate-100 dark:bg-slate-800/50">
                       <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-b-sm rounded-t flex items-center justify-center bg-green-500 text-white">0</div> Answered</div>
                       <div className="flex items-center gap-2 pr-2"><div className="w-6 h-6 rounded-b-sm rounded-t flex items-center justify-center bg-red-500 text-white">1</div> Not Answered</div>
                       <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400">0</div> Not Visited</div>
                       <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">0</div> Marked for Review</div>
                    </div>
                
                    <div className="px-4 py-2 bg-slate-200 dark:bg-slate-800 font-bold text-xs text-slate-700 dark:text-slate-300 tracking-wider">
                        BIOLOGY (BOTANY)
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Choose a Question</h4>
                        <div className="flex flex-wrap gap-3">
                            {/* Dummy Grid */}
                            <button className={`w-12 h-12 rounded-b-sm rounded-t font-bold text-sm shadow-sm transition-all text-white bg-red-500 ring-2 ring-red-300 ring-offset-1`}>
                                1
                            </button>
                            {/* In a real scenario we map out 90 questions here */}
                        </div>
                    </div>

                </div>
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
