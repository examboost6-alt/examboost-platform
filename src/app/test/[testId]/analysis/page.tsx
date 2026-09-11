'use client';

import React, { useEffect, useState, Suspense, useMemo } from 'react';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import {
    Target,
    Clock,
    Activity,
    ArrowLeft,
    Medal,
    CheckCircle2,
    X,
    Globe,
    AlertCircle,
    RotateCcw,
    ChevronRight,
    Sparkles,
    BarChart3,
    BookOpen,
    Share2,
    Check,
    Layers,
    Filter,
    Award
} from 'lucide-react';
import { getJeeMockQuestions, getNeetMockQuestions, QuestionType, jeeSubjectsList, neetSubjectsList } from '../mockData';

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
        isNeet: false,
        timeTaken: 0
    });

    const [predictedRank, setPredictedRank] = useState(0);
    const [responses, setResponses] = useState<Record<number, number | string>>({});
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [language, setLanguage] = useState<'english' | 'hindi'>('english');

    // Filter states for solution review
    const [filterStatus, setFilterStatus] = useState<'all' | 'correct' | 'incorrect' | 'skipped'>('all');
    const [filterSubject, setFilterSubject] = useState<string>('all');

    useEffect(() => {
        const queryAttemptId = searchParams.get('attemptId');
        let useFallback = true;

        let loadedScore = parseInt(searchParams.get('score') || '0', 10);
        let loadedCorrect = parseInt(searchParams.get('correct') || '0', 10);
        let loadedIncorrect = parseInt(searchParams.get('incorrect') || '0', 10);
        let loadedUnattempted = parseInt(searchParams.get('unattempted') || '0', 10);
        let loadedIsNeet = searchParams.get('isNeet') === 'true' || testId.includes('med');
        let loadedTime = parseInt(searchParams.get('timeTaken') || '0', 10);
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
                        loadedTime = foundAttempt.timeTakenSeconds || loadedTime;
                        loadedResponses = foundAttempt.responses || {};
                        useFallback = false;
                    }
                }
            } catch (e) {
                console.error("Could not load from history");
            }
        }

        if (useFallback) {
            const storedResponses = sessionStorage.getItem('examResponses');
            if (storedResponses) {
                try {
                    loadedResponses = JSON.parse(storedResponses);
                } catch (e) {}
            }
        }

        setStats({
            score: loadedScore,
            correct: loadedCorrect,
            incorrect: loadedIncorrect,
            unattempted: loadedUnattempted,
            isNeet: loadedIsNeet,
            timeTaken: loadedTime
        });
        setResponses(loadedResponses);
        setQuestions(loadedIsNeet ? getNeetMockQuestions(testId) : getJeeMockQuestions(testId));

        // Calculate Realistic Rank & Percentile
        if (loadedIsNeet) {
            if (loadedScore >= 700) setPredictedRank(Math.floor(Math.random() * 100) + 1);
            else if (loadedScore >= 600) setPredictedRank(Math.floor(5000 + ((700 - loadedScore) / 100) * 15000));
            else if (loadedScore >= 400) setPredictedRank(Math.floor(20000 + ((600 - loadedScore) / 200) * 80000));
            else if (loadedScore >= 200) setPredictedRank(Math.floor(100000 + ((400 - loadedScore) / 200) * 200000));
            else setPredictedRank(Math.floor(300000 + ((200 - Math.max(0, loadedScore)) / 200) * 200000));
        } else {
            if (loadedScore >= 280) setPredictedRank(Math.floor(1 + ((300 - loadedScore) / 20) * 400));
            else if (loadedScore >= 240) setPredictedRank(Math.floor(400 + ((280 - loadedScore) / 40) * 3500));
            else if (loadedScore >= 180) setPredictedRank(Math.floor(4000 + ((240 - loadedScore) / 60) * 12000));
            else if (loadedScore >= 120) setPredictedRank(Math.floor(16000 + ((180 - loadedScore) / 60) * 35000));
            else if (loadedScore >= 70) setPredictedRank(Math.floor(51000 + ((120 - loadedScore) / 50) * 80000));
            else if (loadedScore >= 30) setPredictedRank(Math.floor(131000 + ((70 - loadedScore) / 40) * 150000));
            else setPredictedRank(Math.floor(281000 + ((30 - Math.max(-75, loadedScore)) / 105) * 200000));
        }
    }, [searchParams, testId]);

    const maxScore = stats.isNeet ? 720 : 300;
    const totalQuestions = questions.length || 75;
    const attemptedCount = stats.correct + stats.incorrect;
    const accuracy = attemptedCount > 0 ? Math.round((stats.correct / attemptedCount) * 100) : 0;

    // Percentile calculation
    const calculatedPercentile = useMemo(() => {
        if (stats.score <= 0) return '0.00';
        const ratio = Math.min(1, Math.max(0, stats.score / maxScore));
        const p = 60 + Math.pow(ratio, 0.7) * 39.9;
        return p.toFixed(2);
    }, [stats.score, maxScore]);

    const formatSeconds = (totalSec: number) => {
        if (!totalSec || totalSec <= 0) return '0m';
        const mins = Math.floor(totalSec / 60);
        const secs = totalSec % 60;
        if (mins === 0) return `${secs}s`;
        return `${mins}m ${secs}s`;
    };

    // Subjects list for tabs
    const subjects = stats.isNeet ? neetSubjectsList : jeeSubjectsList;

    // Subject-wise stats computation
    const subjectWiseStats = useMemo(() => {
        const res: Record<string, { total: number; correct: number; incorrect: number; unattempted: number; score: number }> = {};
        subjects.forEach(s => {
            res[s] = { total: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 };
        });

        questions.forEach(q => {
            const sub = q.subject || 'Physics';
            if (!res[sub]) res[sub] = { total: 0, correct: 0, incorrect: 0, unattempted: 0, score: 0 };
            res[sub].total++;

            const ans = responses[q.id];
            if (ans !== undefined && ans !== '') {
                let isRight = false;
                if (q.type === 'MCQ') {
                    isRight = ans === q.correctOption;
                } else {
                    isRight = parseFloat(ans as string) === parseFloat(q.correctAnswer as string);
                }

                if (isRight) {
                    res[sub].correct++;
                    res[sub].score += 4;
                } else {
                    res[sub].incorrect++;
                    res[sub].score -= 1;
                }
            } else {
                res[sub].unattempted++;
            }
        });

        return res;
    }, [questions, responses, subjects]);

    // Filtered questions for the solution list
    const filteredQuestions = useMemo(() => {
        return questions.filter(q => {
            // Subject filter
            if (filterSubject !== 'all' && q.subject !== filterSubject) return false;

            // Status filter
            const userAns = responses[q.id];
            const isAttempted = userAns !== undefined && userAns !== '';
            let isCorrect = false;
            if (isAttempted) {
                if (q.type === 'MCQ') isCorrect = userAns === q.correctOption;
                else isCorrect = parseFloat(userAns as string) === parseFloat(q.correctAnswer as string);
            }

            if (filterStatus === 'correct') return isAttempted && isCorrect;
            if (filterStatus === 'incorrect') return isAttempted && !isCorrect;
            if (filterStatus === 'skipped') return !isAttempted;
            return true;
        });
    }, [questions, responses, filterStatus, filterSubject]);

    const scrollToSolutions = () => {
        const el = document.getElementById('solutions-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleRetake = () => {
        router.push(`/test/${testId}/instructions`);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans pb-16 text-slate-900 select-none">
            {/* Minimal App Header */}
            <header className="bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3 sticky top-0 z-40 shadow-xs">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => router.push('/dashboard')}
                            className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                            title="Back to Dashboard"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                                    Exam Scorecard & Analysis
                                </h1>
                                <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-100">
                                    {stats.isNeet ? 'NEET UG' : 'JEE MAIN'}
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">
                                Comprehensive test analytics & detailed solutions
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleRetake}
                            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all active:scale-95"
                        >
                            <RotateCcw className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Retake Test</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
                {/* Hero Score & Rank Banner */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        {/* Left Summary Info */}
                        <div className="lg:col-span-6 space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black border border-emerald-100">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Exam Completed Successfully</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                                {stats.score > (maxScore * 0.4) ? 'Great Job! Keep Practicing!' : 'Test Completed! Review Your Mistakes'}
                            </h2>
                            <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
                                Detailed analysis of your mock attempt. Review the question-by-question explanations below to bridge concept gaps.
                            </p>

                            <div className="pt-2 flex flex-wrap gap-2.5">
                                <button
                                    onClick={scrollToSolutions}
                                    className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs shadow-indigo-200 transition-all flex items-center gap-2"
                                >
                                    <BookOpen className="w-4 h-4" />
                                    <span>Review Solutions</span>
                                </button>
                                <button
                                    onClick={() => router.push('/dashboard')}
                                    className="bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 transition-colors"
                                >
                                    Dashboard
                                </button>
                            </div>
                        </div>

                        {/* Right Highlight Cards */}
                        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {/* Score Box */}
                            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-4 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
                                <div className="text-indigo-100 text-[11px] font-black uppercase tracking-wider">
                                    Your Score
                                </div>
                                <div className="my-2">
                                    <span className="text-3xl sm:text-4xl font-black">{stats.score}</span>
                                    <span className="text-xs text-indigo-200 font-bold ml-1">/{maxScore}</span>
                                </div>
                                <div className="text-[10px] text-indigo-100/90 font-semibold">
                                    {Math.round((stats.score / maxScore) * 100)}% of total marks
                                </div>
                            </div>

                            {/* Rank Box */}
                            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
                                <div className="text-amber-100 text-[11px] font-black uppercase tracking-wider">
                                    Predicted AIR
                                </div>
                                <div className="my-2">
                                    <span className="text-2xl sm:text-3xl font-black">
                                        {predictedRank > 0 ? `#${predictedRank.toLocaleString()}` : '-'}
                                    </span>
                                </div>
                                <div className="text-[10px] text-amber-100/90 font-semibold">
                                    Out of ~5 Lakh aspirants
                                </div>
                            </div>

                            {/* Percentile Box */}
                            <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white shadow-sm flex flex-col justify-between relative overflow-hidden">
                                <div className="text-purple-100 text-[11px] font-black uppercase tracking-wider">
                                    Percentile
                                </div>
                                <div className="my-2">
                                    <span className="text-3xl sm:text-4xl font-black">{calculatedPercentile}</span>
                                    <span className="text-xs text-purple-200 font-bold ml-0.5">%ile</span>
                                </div>
                                <div className="text-[10px] text-purple-100/90 font-semibold">
                                    Top tier performance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5 Core Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {/* Correct */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-xl font-black text-slate-900 leading-none mb-1">
                                {stats.correct}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                Correct (+{stats.correct * 4})
                            </span>
                        </div>
                    </div>

                    {/* Incorrect */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                            <X className="w-5 h-5 stroke-[2.5]" />
                        </div>
                        <div>
                            <span className="block text-xl font-black text-slate-900 leading-none mb-1">
                                {stats.incorrect}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                Incorrect (-{stats.incorrect})
                            </span>
                        </div>
                    </div>

                    {/* Skipped */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-xl font-black text-slate-900 leading-none mb-1">
                                {stats.unattempted}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                Skipped
                            </span>
                        </div>
                    </div>

                    {/* Accuracy */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-xl font-black text-slate-900 leading-none mb-1">
                                {accuracy}%
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                Accuracy
                            </span>
                        </div>
                    </div>

                    {/* Time Taken */}
                    <div className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-lg font-black text-slate-900 leading-none mb-1">
                                {formatSeconds(stats.timeTaken)}
                            </span>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                                Time Spent
                            </span>
                        </div>
                    </div>
                </div>

                {/* Subject-Wise Performance Breakdown */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                            Subject-wise Breakdown
                        </h3>
                        <span className="text-xs text-slate-400 font-medium">
                            {subjects.length} Subjects Evaluated
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {subjects.map(sub => {
                            const subStat = subjectWiseStats[sub] || { total: 25, correct: 0, incorrect: 0, unattempted: 25, score: 0 };
                            const subAttempted = subStat.correct + subStat.incorrect;
                            const subAcc = subAttempted > 0 ? Math.round((subStat.correct / subAttempted) * 100) : 0;
                            const maxSubMarks = subStat.total * 4;

                            return (
                                <div key={sub} className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/70 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-black text-slate-900 text-sm">{sub}</span>
                                        <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                                            subStat.score > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            {subStat.score} / {maxSubMarks}
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                                        <div
                                            className="bg-emerald-500 h-full"
                                            style={{ width: `${(subStat.correct / (subStat.total || 1)) * 100}%` }}
                                            title={`Correct: ${subStat.correct}`}
                                        />
                                        <div
                                            className="bg-rose-500 h-full"
                                            style={{ width: `${(subStat.incorrect / (subStat.total || 1)) * 100}%` }}
                                            title={`Incorrect: ${subStat.incorrect}`}
                                        />
                                    </div>

                                    {/* Sub Stats Row */}
                                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pt-1">
                                        <span className="text-emerald-600">{subStat.correct} Correct</span>
                                        <span className="text-rose-500">{subStat.incorrect} Wrong</span>
                                        <span>{subStat.unattempted} Skipped</span>
                                        <span className="text-indigo-600 font-extrabold">{subAcc}% Acc</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Question Breakdown & Solutions Section */}
                <div id="solutions-section" className="space-y-4 pt-4">
                    {/* Filter & Controls Bar */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
                        {/* Status Filter Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
                            <button
                                onClick={() => setFilterStatus('all')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                                    filterStatus === 'all'
                                        ? 'bg-slate-900 text-white shadow-xs'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                }`}
                            >
                                All ({questions.length})
                            </button>
                            <button
                                onClick={() => setFilterStatus('incorrect')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                                    filterStatus === 'incorrect'
                                        ? 'bg-rose-600 text-white shadow-xs'
                                        : 'bg-rose-50 hover:bg-rose-100 text-rose-700'
                                }`}
                            >
                                <X className="w-3.5 h-3.5" />
                                <span>Incorrect ({stats.incorrect})</span>
                            </button>
                            <button
                                onClick={() => setFilterStatus('correct')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                                    filterStatus === 'correct'
                                        ? 'bg-emerald-600 text-white shadow-xs'
                                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
                                }`}
                            >
                                <Check className="w-3.5 h-3.5" />
                                <span>Correct ({stats.correct})</span>
                            </button>
                            <button
                                onClick={() => setFilterStatus('skipped')}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                                    filterStatus === 'skipped'
                                        ? 'bg-slate-600 text-white shadow-xs'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                                }`}
                            >
                                Skipped ({stats.unattempted})
                            </button>
                        </div>

                        {/* Right: Subject Filter & Language */}
                        <div className="flex items-center gap-2 self-end md:self-auto">
                            {/* Subject Filter */}
                            <select
                                value={filterSubject}
                                onChange={(e) => setFilterSubject(e.target.value)}
                                className="bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 py-1.5 px-2.5 rounded-xl outline-none"
                            >
                                <option value="all">All Subjects</option>
                                {subjects.map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>

                            {/* Language Switch */}
                            <button
                                onClick={() => setLanguage(l => l === 'english' ? 'hindi' : 'english')}
                                className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 py-1.5 px-2.5 rounded-xl transition-colors"
                            >
                                <Globe className="w-3.5 h-3.5 text-indigo-600" />
                                <span>{language === 'english' ? 'EN' : 'हिंदी'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Questions Solution List */}
                    <div className="space-y-4">
                        {filteredQuestions.length === 0 ? (
                            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200/80">
                                <p className="text-sm font-bold text-slate-500">No questions found for this filter.</p>
                            </div>
                        ) : (
                            filteredQuestions.map((q) => {
                                const userAns = responses[q.id];
                                const isAttempted = userAns !== undefined && userAns !== '';
                                let isCorrect = false;

                                if (isAttempted) {
                                    if (q.type === 'MCQ') {
                                        isCorrect = userAns === q.correctOption;
                                    } else {
                                        isCorrect = parseFloat(userAns as string) === parseFloat(q.correctAnswer as string);
                                    }
                                }

                                return (
                                    <div
                                        key={q.id}
                                        className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4"
                                    >
                                        {/* Question Card Header */}
                                        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center">
                                                    Q{q.id}
                                                </span>
                                                <span className="text-xs font-extrabold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                                                    {q.subject}
                                                </span>
                                                <span className="text-[11px] font-semibold text-slate-400">
                                                    {q.type === 'MCQ' ? 'Single Choice' : 'Numerical'}
                                                </span>
                                            </div>

                                            {/* Status Badge */}
                                            <div>
                                                {!isAttempted ? (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                                                        <AlertCircle className="w-3 h-3" />
                                                        Skipped (0)
                                                    </span>
                                                ) : isCorrect ? (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                        <Check className="w-3 h-3 stroke-[3]" />
                                                        Correct (+4)
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                                                        <X className="w-3 h-3 stroke-[3]" />
                                                        Incorrect (-1)
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Question Content */}
                                        <div className="text-slate-900 font-semibold text-sm sm:text-base leading-relaxed font-serif select-text">
                                            {language === 'hindi' ? q.textHi : q.textEn}
                                        </div>

                                        {/* Options Grid (For MCQ) */}
                                        {q.type === 'MCQ' && (
                                            <div className="space-y-2 pt-1">
                                                {q.options?.map((opt, optIdx) => {
                                                    const letters = ['A', 'B', 'C', 'D'];
                                                    const letter = letters[optIdx] || `${optIdx + 1}`;
                                                    const isUserPick = userAns === opt.id;
                                                    const isAnswerKey = q.correctOption === opt.id;

                                                    let cardStyle = 'bg-slate-50 border-slate-200/80 text-slate-700';
                                                    let badgeStyle = 'bg-slate-200 text-slate-700';

                                                    if (isAnswerKey) {
                                                        cardStyle = 'bg-emerald-50/80 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500/20';
                                                        badgeStyle = 'bg-emerald-600 text-white';
                                                    } else if (isUserPick && !isCorrect) {
                                                        cardStyle = 'bg-rose-50/80 border-rose-500 text-rose-950 ring-1 ring-rose-500/20';
                                                        badgeStyle = 'bg-rose-600 text-white';
                                                    }

                                                    return (
                                                        <div
                                                            key={opt.id}
                                                            className={`p-3 rounded-xl border flex items-center gap-3 text-xs sm:text-sm font-medium transition-all ${cardStyle}`}
                                                        >
                                                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${badgeStyle}`}>
                                                                {letter}
                                                            </div>
                                                            <div className="flex-1">
                                                                {language === 'hindi' ? opt.textHi : opt.textEn}
                                                            </div>
                                                            {isAnswerKey && (
                                                                <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                                                                    Correct Option
                                                                </span>
                                                            )}
                                                            {isUserPick && !isCorrect && (
                                                                <span className="text-[10px] font-black uppercase text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                                                                    Your Choice
                                                                </span>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {/* Numerical Solution Box */}
                                        {q.type === 'Numerical' && (
                                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-4 text-xs sm:text-sm">
                                                <div>
                                                    <span className="block text-slate-400 font-bold uppercase text-[10px] mb-1">
                                                        Your Response:
                                                    </span>
                                                    <span className={`font-mono font-black text-base ${isAttempted ? (isCorrect ? 'text-emerald-600' : 'text-rose-500') : 'text-slate-400'}`}>
                                                        {isAttempted ? userAns : 'Not Attempted'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-slate-400 font-bold uppercase text-[10px] mb-1">
                                                        Correct Key:
                                                    </span>
                                                    <span className="font-mono font-black text-base text-emerald-600">
                                                        {q.correctAnswer}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function ExamAnalysis() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center gap-3 text-slate-600 font-bold">
                <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs uppercase tracking-wider text-slate-400">Loading Analysis...</span>
            </div>
        }>
            <AnalysisContent />
        </Suspense>
    );
}
