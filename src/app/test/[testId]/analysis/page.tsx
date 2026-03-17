'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { Target, Clock, Activity, ArrowLeft, Medal, CheckCircle2, X, Globe, AlertCircle } from 'lucide-react';
import { jeeMockQuestions, neetMockQuestions, QuestionType } from '../mockData';

function AnalysisContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = useParams();
    const testId = (params?.testId as string) || '';
    
    const [stats, setStats] = useState({
        score: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        isNeet: false
    });

    const [predictedRank, setPredictedRank] = useState(0);
    const [responses, setResponses] = useState<Record<number, number | string>>({});
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [language, setLanguage] = useState<'english' | 'hindi'>('english');

    useEffect(() => {
        const queryAttemptId = searchParams.get('attemptId');
        let useFallback = true;
        
        let loadedScore = parseInt(searchParams.get('score') || '0', 10);
        let loadedCorrect = parseInt(searchParams.get('correct') || '0', 10);
        let loadedIncorrect = parseInt(searchParams.get('incorrect') || '0', 10);
        let loadedUnattempted = parseInt(searchParams.get('unattempted') || '0', 10);
        let loadedIsNeet = searchParams.get('isNeet') === 'true';
        let loadedResponses: Record<number, number | string> = {};

        if (queryAttemptId && testId) {
            try {
                const seriesId = testId.split('-test')[0];
                const historyStr = localStorage.getItem(`exam_history_${seriesId}`);
                if (historyStr) {
                    const existingHistory = JSON.parse(historyStr);
                    const foundAttempt = existingHistory.find((a: any) => a.attemptId.toString() === queryAttemptId);
                    if (foundAttempt) {
                        loadedScore = foundAttempt.score;
                        loadedCorrect = foundAttempt.correct;
                        loadedIncorrect = foundAttempt.incorrect;
                        loadedUnattempted = foundAttempt.unattempted;
                        loadedIsNeet = foundAttempt.isNeet;
                        loadedResponses = foundAttempt.responses || {};
                        useFallback = false;
                    }
                }
            } catch (e) { console.error("Could not load from history"); }
        }

        if (useFallback) {
            const storedResponses = sessionStorage.getItem('examResponses');
            if (storedResponses) {
                try { loadedResponses = JSON.parse(storedResponses); } catch (e) {}
            }
        }

        setStats({
            score: loadedScore,
            correct: loadedCorrect,
            incorrect: loadedIncorrect,
            unattempted: loadedUnattempted,
            isNeet: loadedIsNeet
        });
        setResponses(loadedResponses);
        setQuestions(loadedIsNeet ? neetMockQuestions : jeeMockQuestions);

        // Calculate Realistic Rank based on historical normalization (out of ~5 Lakh)
        if (loadedIsNeet) {
            // Simplified logic for NEET (out of 720 approx)
            if (loadedScore >= 700) setPredictedRank(Math.floor(Math.random() * 100) + 1);
            else if (loadedScore >= 600) setPredictedRank(Math.floor(5000 + ((700 - loadedScore) / 100) * 15000));
            else if (loadedScore >= 400) setPredictedRank(Math.floor(20000 + ((600 - loadedScore) / 200) * 80000));
            else if (loadedScore >= 200) setPredictedRank(Math.floor(100000 + ((400 - loadedScore) / 200) * 200000));
            else setPredictedRank(Math.floor(300000 + ((200 - Math.max(0, loadedScore)) / 200) * 200000));
        } else {
            // Realistic JEE Mains Rank out of ~500,000 for realistic validation
            if (loadedScore >= 300) setPredictedRank(1);
            else if (loadedScore >= 280) setPredictedRank(Math.floor(2 + ((300 - loadedScore) / 20) * 500));
            else if (loadedScore >= 250) setPredictedRank(Math.floor(502 + ((280 - loadedScore) / 30) * 4500));
            else if (loadedScore >= 200) setPredictedRank(Math.floor(5002 + ((250 - loadedScore) / 50) * 10000));
            else if (loadedScore >= 160) setPredictedRank(Math.floor(15002 + ((200 - loadedScore) / 40) * 25000));
            else if (loadedScore >= 120) setPredictedRank(Math.floor(40002 + ((160 - loadedScore) / 40) * 40000));
            else if (loadedScore >= 80) setPredictedRank(Math.floor(80002 + ((120 - loadedScore) / 40) * 80000));
            else if (loadedScore >= 40) setPredictedRank(Math.floor(160002 + ((80 - loadedScore) / 40) * 150000));
            else setPredictedRank(Math.floor(310002 + ((40 - Math.max(-75, loadedScore)) / 115) * 190000));
        }
    }, [searchParams, testId]);

    const maxScore = stats.isNeet ? 720 : 300;
    const accuracy = stats.correct + stats.incorrect > 0 
                     ? Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100) 
                     : 0;

    return (
        <div className="min-h-screen bg-[#f3f4f6] font-sans pb-10">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white px-6 py-4 shadow-lg sticky top-0 z-50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <button onClick={() => router.push('/dashboard')} className="p-2 bg-indigo-900/40 rounded-full hover:bg-indigo-900/60 transition">
                        <ArrowLeft className="w-5 h-5 text-indigo-100" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold tracking-wide">Test Analysis</h1>
                        <p className="text-xs text-indigo-200">Shikhar {stats.isNeet ? 'NEET' : 'JEE Main'} 2026 Test Series</p>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
                {/* Hero Section */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center cursor-default">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-4">
                            <CheckCircle2 className="w-4 h-4" />
                            Successfully Completed
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-2">Performance Report</h2>
                        <p className="text-slate-500 font-medium">Your detailed analytics and dynamically predicted AI rankings based on historical test data distributions.</p>
                        
                        <div className="mt-8 flex gap-4">
                            <button onClick={() => router.push('/dashboard')} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95 text-center">
                                Back to Dashboard
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 h-full">
                        {/* Score Card */}
                        <div className="flex-1 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-6 text-white shadow-lg shadow-indigo-500/30 flex flex-col justify-center items-center relative overflow-hidden transition-transform hover:scale-[1.02]">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Target className="w-24 h-24" />
                            </div>
                            <span className="text-indigo-100 font-bold tracking-wider mb-2 z-10">TOTAL SCORE</span>
                            <div className="flex items-baseline gap-1 z-10">
                                <span className={stats.score < 0 ? 'text-5xl font-black text-red-100' : 'text-6xl font-black'}>{stats.score}</span>
                                <span className="text-xl font-semibold opacity-70">/{maxScore}</span>
                            </div>
                        </div>

                        {/* Rank Card */}
                        <div className="flex-1 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl p-6 text-white shadow-lg shadow-amber-500/30 flex flex-col justify-center items-center relative overflow-hidden transition-transform hover:scale-[1.02]">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Medal className="w-24 h-24" />
                            </div>
                            <span className="text-amber-100 font-bold tracking-wider mb-2 z-10 relative text-center">PREDICTED AIR<br/><span className="text-[10px] leading-tight font-medium opacity-80">(Out of 5 Lakhs)</span></span>
                            <div className="flex items-center gap-2 z-10">
                                <span className="text-4xl lg:text-4xl xl:text-5xl font-black tracking-tight drop-shadow-sm">
                                    {predictedRank > 0 ? `#${predictedRank.toLocaleString()}` : '-'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <h3 className="text-xl font-bold text-slate-800 ml-2">Attempt Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black text-slate-800 mb-1">{stats.correct}</span>
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">Correct</span>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3">
                            <X className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black text-slate-800 mb-1">{stats.incorrect}</span>
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">Incorrect</span>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md">
                        <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mb-3">
                            <Clock className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black text-slate-800 mb-1">{stats.unattempted}</span>
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">Skipped</span>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                            <Activity className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black text-slate-800 mb-1">{accuracy}%</span>
                        <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">Accuracy</span>
                    </div>
                </div>

                {/* Detailed Analysis Section */}
                <div className="mt-12 space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h3 className="text-2xl font-black text-slate-800">Question Breakdown</h3>
                        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-200">
                            <Globe className="w-4 h-4 text-indigo-500" />
                            <select 
                                value={language}
                                onChange={(e) => setLanguage(e.target.value as 'english' | 'hindi')}
                                className="bg-transparent border-none outline-none text-sm font-bold text-slate-700 cursor-pointer"
                            >
                                <option value="english">English</option>
                                <option value="hindi">Hindi (हिंदी)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {questions.map((q, idx) => {
                            const userAns = responses[q.id];
                            const isAttempted = userAns !== undefined && userAns !== '';
                            let isCorrect = false;
                            
                            if (q.type === 'MCQ') {
                                isCorrect = userAns === q.correctOption;
                            } else {
                                isCorrect = parseFloat(userAns as string) === parseFloat(q.correctAnswer as string);
                            }

                            // Find text for MCQ options
                            const userOptionObj = q.type === 'MCQ' && isAttempted ? q.options?.find(o => o.id === userAns) : null;
                            const correctOptionObj = q.type === 'MCQ' ? q.options?.find(o => o.id === q.correctOption) : null;

                            const getStatusBadge = () => {
                                if (!isAttempted) return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide"><AlertCircle className="w-3.5 h-3.5"/> Skipped</span>;
                                if (isCorrect) return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide"><CheckCircle2 className="w-3.5 h-3.5"/> Correct</span>;
                                return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wide"><X className="w-3.5 h-3.5"/> Incorrect</span>;
                            };

                            return (
                                <div key={q.id} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
                                    <div className="flex justify-between items-start gap-4 border-b border-slate-100 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-700 font-black flex items-center justify-center shrink-0">
                                                {q.id}
                                            </div>
                                            <div className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-bold tracking-wider">
                                                {q.subject.toUpperCase()} • {q.type}
                                            </div>
                                        </div>
                                        <div>
                                            {getStatusBadge()}
                                        </div>
                                    </div>

                                    <div className="text-slate-800 font-semibold text-sm sm:text-base leading-relaxed">
                                        {language === 'hindi' ? q.textHi : q.textEn}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 bg-slate-50 rounded-xl p-4">
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Your Answer</div>
                                            {isAttempted ? (
                                                <div className={`font-medium ${isCorrect ? 'text-emerald-600' : 'text-red-500'}`}>
                                                    {q.type === 'MCQ' ? (
                                                        language === 'hindi' ? userOptionObj?.textHi : userOptionObj?.textEn
                                                    ) : (
                                                        <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">{userAns}</span>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-slate-400 font-medium italic">Unanswered</div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Correct Answer</div>
                                            <div className="font-medium text-emerald-600">
                                                {q.type === 'MCQ' ? (
                                                    language === 'hindi' ? correctOptionObj?.textHi : correctOptionObj?.textEn
                                                ) : (
                                                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">{q.correctAnswer}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </main>
        </div>
    );
}

export default function ExamAnalysis() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center text-slate-600 font-bold">Loading Analysis...</div>}>
            <AnalysisContent />
        </Suspense>
    );
}

