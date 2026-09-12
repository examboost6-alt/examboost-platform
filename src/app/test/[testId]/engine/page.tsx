'use client';

import React, { useState, useEffect, Suspense, useMemo, useCallback, useRef } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import {
    CheckCircle2,
    X,
    AlertCircle,
    Clock,
    ChevronLeft,
    ChevronRight,
    Bookmark,
    RotateCcw,
    Globe,
    Check,
    Send,
    LayoutGrid,
    Sparkles,
    SlidersHorizontal,
    Flag,
    Maximize2,
    Minimize2,
    HelpCircle,
    Flame,
    Hash,
    Layers,
    Compass
} from 'lucide-react';
import { getSupabaseClient } from '@/lib/supabaseClient';
import {
    jeeSubjectsList,
    neetSubjectsList,
    getJeeMockQuestions,
    getNeetMockQuestions,
    QuestionType,
    generateAIMockQuestions
} from '../mockData';

export default function NTA_JEETestEngineWrapper() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#0A0D14] flex flex-col items-center justify-center text-white gap-4">
                <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center animate-pulse">
                        <Sparkles className="w-6 h-6 text-indigo-400" />
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold tracking-widest uppercase text-slate-300">ExamBoost Studio</p>
                    <p className="text-xs text-slate-500 mt-1">Configuring examination environment...</p>
                </div>
            </div>
        }>
            <UltraModernTestEngine />
        </Suspense>
    );
}

function UltraModernTestEngine() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();
    const testId = (params?.testId as string) || '';
    const isNeet = testId.includes('med');

    const [isCoreLoading, setIsCoreLoading] = useState(true);
    const [mockQuestions, setMockQuestions] = useState<QuestionType[]>([]);
    const [subjectsList, setSubjectsList] = useState<string[]>([]);
    const [examName, setExamName] = useState(isNeet ? 'NEET UG' : 'JEE MAIN');
    const [examPaperName, setExamPaperName] = useState(isNeet ? 'NEET Full Mock Test' : 'JEE Main Full Mock');

    const defaultLang = searchParams.get('lang') === 'hindi' ? 'hindi' : 'english';

    const [userName, setUserName] = useState("Student");
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    const [timeLeft, setTimeLeft] = useState(180 * 60); // 180 mins
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionLang, setQuestionLang] = useState<'english' | 'hindi'>(defaultLang);

    const [responses, setResponses] = useState<Record<number, number | string>>({});
    const [status, setStatus] = useState<Record<number, string>>({});
    const [activeSubject, setActiveSubject] = useState("");

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Initialize Questions
    useEffect(() => {
        let qs: QuestionType[] = [];
        let subs: string[] = [];
        let ename = isNeet ? 'NEET UG' : 'JEE MAIN';
        let epaper = isNeet ? 'NEET Full Mock Test' : 'JEE Main Full Mock';

        if (testId.includes('ai-mock') && typeof sessionStorage !== 'undefined') {
            const paramsStr = sessionStorage.getItem('aiMockParams');
            if (paramsStr) {
                const aiParams = JSON.parse(paramsStr);
                const generated = generateAIMockQuestions(aiParams);
                qs = generated.qs;
                subs = generated.subs;
                epaper = 'AI Custom Mock Test';
            }
        }

        if (qs.length === 0) {
            qs = isNeet ? getNeetMockQuestions(testId) : getJeeMockQuestions(testId);
            subs = isNeet ? neetSubjectsList : jeeSubjectsList;
        }

        setMockQuestions(qs);
        setSubjectsList(subs);
        setExamName(ename);
        setExamPaperName(epaper);
        setStatus({ [qs[0]?.id || 1]: 'not_answered' });
        setActiveSubject(qs[0]?.subject || (subs[0] || 'Physics'));
        setIsCoreLoading(false);
    }, [testId, isNeet]);

    // Fetch User Profile
    useEffect(() => {
        const fetchUser = async () => {
            const supabase = getSupabaseClient();
            if (!supabase) return;
            const { data: authData } = await supabase.auth.getSession();
            if (authData?.session?.user) {
                const uid = authData.session.user.id;
                const { data } = await supabase.from('profiles').select('full_name, photo_path').eq('id', uid).maybeSingle();
                if (data?.full_name) setUserName(data.full_name);
                if (data?.photo_path) {
                    const { data: publicData } = supabase.storage.from('student-photos').getPublicUrl(data.photo_path);
                    if (publicData?.publicUrl) setAvatarUrl(publicData.publicUrl);
                }
            }
        };
        fetchUser();
    }, []);

    // Sync active subject when navigating
    useEffect(() => {
        if (mockQuestions.length === 0) return;
        const currentQ = mockQuestions[currentQuestionIndex];
        if (currentQ && currentQ.subject !== activeSubject) {
            setActiveSubject(currentQ.subject);
        }
        // Scroll question card to top on navigation
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentQuestionIndex, mockQuestions, activeSubject]);

    // Timer Interval
    useEffect(() => {
        if (isSubmitted || isCoreLoading) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    handleFinalSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isSubmitted, isCoreLoading]);

    // Update status to not_answered on first view
    useEffect(() => {
        if (mockQuestions.length === 0) return;
        const currentQ = mockQuestions[currentQuestionIndex];
        if (!currentQ) return;

        setStatus((prev) => {
            if (!prev[currentQ.id] || prev[currentQ.id] === 'not_visited') {
                return { ...prev, [currentQ.id]: 'not_answered' };
            }
            return prev;
        });
    }, [currentQuestionIndex, mockQuestions]);

    const currentQuestion = mockQuestions[currentQuestionIndex] || mockQuestions[0];

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const isUrgent = timeLeft < 900; // < 15 mins

    // Response Handlers
    const handleOptionSelect = (optId: number) => {
        setResponses(prev => ({ ...prev, [currentQuestion.id]: optId }));
        setStatus(prev => {
            const currentStatus = prev[currentQuestion.id];
            if (currentStatus === 'marked' || currentStatus === 'answered_marked') {
                return { ...prev, [currentQuestion.id]: 'answered_marked' };
            }
            return { ...prev, [currentQuestion.id]: 'answered' };
        });
    };

    const handleNumericalInput = (val: string) => {
        setResponses(prev => ({ ...prev, [currentQuestion.id]: val }));
        setStatus(prev => {
            const currentStatus = prev[currentQuestion.id];
            if (val.trim() === '') {
                return { ...prev, [currentQuestion.id]: currentStatus === 'answered_marked' ? 'marked' : 'not_answered' };
            }
            if (currentStatus === 'marked' || currentStatus === 'answered_marked') {
                return { ...prev, [currentQuestion.id]: 'answered_marked' };
            }
            return { ...prev, [currentQuestion.id]: 'answered' };
        });
    };

    const goToNextQuestion = useCallback(() => {
        if (currentQuestionIndex < mockQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    }, [currentQuestionIndex, mockQuestions.length]);

    const goToPrevQuestion = useCallback(() => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    }, [currentQuestionIndex]);

    const isCurrentAnswered = () => {
        const res = responses[currentQuestion?.id];
        return res !== undefined && res !== '';
    };

    const isCurrentMarked = useMemo(() => {
        const st = status[currentQuestion?.id];
        return st === 'marked' || st === 'answered_marked';
    }, [status, currentQuestion]);

    const handleToggleMarkReview = () => {
        const hasAnswer = isCurrentAnswered();
        setStatus(prev => {
            const currentSt = prev[currentQuestion.id];
            if (currentSt === 'marked' || currentSt === 'answered_marked') {
                return { ...prev, [currentQuestion.id]: hasAnswer ? 'answered' : 'not_answered' };
            } else {
                return { ...prev, [currentQuestion.id]: hasAnswer ? 'answered_marked' : 'marked' };
            }
        });
    };

    const handleSaveNext = () => {
        if (isCurrentAnswered()) {
            setStatus(prev => {
                const cur = prev[currentQuestion.id];
                return { ...prev, [currentQuestion.id]: (cur === 'marked' || cur === 'answered_marked') ? 'answered_marked' : 'answered' };
            });
        } else {
            setStatus(prev => {
                const cur = prev[currentQuestion.id];
                return { ...prev, [currentQuestion.id]: (cur === 'marked' || cur === 'answered_marked') ? 'marked' : 'not_answered' };
            });
        }
        goToNextQuestion();
    };

    const handleClearResponse = () => {
        setResponses(prev => {
            const newRes = { ...prev };
            delete newRes[currentQuestion.id];
            return newRes;
        });
        setStatus(prev => {
            const cur = prev[currentQuestion.id];
            return { ...prev, [currentQuestion.id]: (cur === 'answered_marked' || cur === 'marked') ? 'marked' : 'not_answered' };
        });
    };

    const navToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setIsPaletteOpen(false);
    };

    const handleSubjectChange = (subject: string) => {
        setActiveSubject(subject);
        const firstQIndex = mockQuestions.findIndex(q => q.subject === subject);
        if (firstQIndex !== -1) {
            navToQuestion(firstQIndex);
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            setIsFullscreen(true);
        } else {
            document.exitFullscreen().catch(() => {});
            setIsFullscreen(false);
        }
    };

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

            if (e.key === 'ArrowRight' || e.key === 'Enter') {
                e.preventDefault();
                if (currentQuestionIndex === mockQuestions.length - 1) {
                    if (isCurrentAnswered()) {
                        setStatus(prev => {
                            const cur = prev[currentQuestion.id];
                            return { ...prev, [currentQuestion.id]: (cur === 'marked' || cur === 'answered_marked') ? 'answered_marked' : 'answered' };
                        });
                    }
                    setIsConfirmModalOpen(true);
                } else {
                    handleSaveNext();
                }
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToPrevQuestion();
            } else if (['1', 'a', 'A'].includes(e.key) && currentQuestion?.type === 'MCQ' && currentQuestion?.options?.[0]) {
                handleOptionSelect(currentQuestion.options[0].id);
            } else if (['2', 'b', 'B'].includes(e.key) && currentQuestion?.type === 'MCQ' && currentQuestion?.options?.[1]) {
                handleOptionSelect(currentQuestion.options[1].id);
            } else if (['3', 'c', 'C'].includes(e.key) && currentQuestion?.type === 'MCQ' && currentQuestion?.options?.[2]) {
                handleOptionSelect(currentQuestion.options[2].id);
            } else if (['4', 'd', 'D'].includes(e.key) && currentQuestion?.type === 'MCQ' && currentQuestion?.options?.[3]) {
                handleOptionSelect(currentQuestion.options[3].id);
            } else if (e.key === 'm' || e.key === 'M') {
                handleToggleMarkReview();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentQuestion, goToPrevQuestion, handleSaveNext, goToNextQuestion]);

    // Submit Logic
    const handleFinalSubmit = async () => {
        setIsConfirmModalOpen(false);
        let score = 0;
        let correct = 0;
        let incorrect = 0;
        let unattempted = 0;

        mockQuestions.forEach(q => {
            const ans = responses[q.id];
            if (ans !== undefined && ans !== '') {
                if (q.type === 'MCQ') {
                    if (ans === q.correctOption) {
                        score += 4;
                        correct++;
                    } else {
                        score -= 1;
                        incorrect++;
                    }
                } else if (q.type === 'Numerical') {
                    if (parseFloat(ans as string) === parseFloat(q.correctAnswer as string)) {
                        score += 4;
                        correct++;
                    } else {
                        score -= 1;
                        incorrect++;
                    }
                }
            } else {
                unattempted++;
            }
        });

        sessionStorage.setItem('examResponses', JSON.stringify(responses));

        try {
            const attemptId = Date.now();
            const seriesId = testId.split('-test')[0];
            const historyKey = `exam_history_${seriesId}`;
            const existingHistory = JSON.parse(localStorage.getItem(historyKey) || '[]');
            const timeTakenSeconds = (180 * 60) - timeLeft;

            const newAttempt = {
                testId,
                attemptId,
                date: new Date(attemptId).toISOString(),
                score,
                correct,
                incorrect,
                unattempted,
                isNeet,
                timeTakenSeconds,
                responses
            };

            existingHistory.push(newAttempt);
            localStorage.setItem(historyKey, JSON.stringify(existingHistory));
            setIsSubmitted(true);

            const supabase = getSupabaseClient();
            if (supabase) {
                supabase.auth.getSession().then(({ data: authData }: any) => {
                    if (authData?.session?.user) {
                        supabase.from('user_tests').insert({
                            user_id: authData.session.user.id,
                            test_id: testId,
                            score,
                            correct,
                            incorrect,
                            unattempted,
                            time_taken: timeTakenSeconds,
                            responses
                        }).then(({ error }: any) => {
                            if (error) console.error("Error saving user_test:", error);
                        });
                    }
                });
            }

            setTimeout(() => {
                router.push(`/test/${testId}/analysis?score=${score}&correct=${correct}&incorrect=${incorrect}&unattempted=${unattempted}&isNeet=${isNeet}&attemptId=${attemptId}&timeTaken=${timeTakenSeconds}`);
            }, 800);
        } catch (e) {
            console.error("Could not save history", e);
            setIsSubmitted(true);
            setTimeout(() => {
                router.push(`/test/${testId}/analysis?score=${score}&correct=${correct}&incorrect=${incorrect}&unattempted=${unattempted}&isNeet=${isNeet}`);
            }, 800);
        }
    };

    // Calculate Summary Stats
    const counts = useMemo(() => {
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
    }, [mockQuestions, status]);

    const subjectQuestions = useMemo(() => {
        return mockQuestions.filter(q => q.subject === activeSubject);
    }, [mockQuestions, activeSubject]);

    const currentSubjectIndex = useMemo(() => {
        const idx = subjectQuestions.findIndex(q => q.id === currentQuestion?.id);
        return idx !== -1 ? idx + 1 : 1;
    }, [subjectQuestions, currentQuestion]);

    const totalAttempted = counts.answered + counts.answeredMarked;
    const progressPercent = Math.round((totalAttempted / (mockQuestions.length || 1)) * 100);

    if (isCoreLoading || mockQuestions.length === 0) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#090D16]">
                <div className="text-center font-bold text-slate-400 flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-extrabold">Starting Test Session...</span>
                </div>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#090D16] flex items-center justify-center p-4">
                <div className="bg-[#121826] rounded-3xl p-8 max-w-sm w-full text-center border border-white/10 shadow-2xl animate-in fade-in zoom-in-95">
                    <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-1">Test Submitted!</h2>
                    <p className="text-slate-400 text-xs mb-6">Analyzing your answers & generating percentile report...</p>

                    <div className="bg-[#1A2234] p-4 rounded-2xl mb-6 grid grid-cols-3 gap-2 border border-white/5">
                        <div>
                            <span className="block text-2xl font-black text-emerald-400">{totalAttempted}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Attempted</span>
                        </div>
                        <div className="border-x border-white/10">
                            <span className="block text-2xl font-black text-rose-400">{counts.notAnswered + counts.notVisited}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Skipped</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-black text-amber-400">{counts.marked + counts.answeredMarked}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Review</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-indigo-400 font-bold text-xs tracking-wide">
                        <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                        <span>Redirecting to score analysis...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[100dvh] font-sans bg-[#F4F6F9] text-slate-900 overflow-hidden select-none">
            {/* Top Primary Header: Clean, Authoritative, Spacious */}
            <header className="bg-white px-3 sm:px-6 h-13 sm:h-14 border-b border-slate-200/90 flex items-center justify-between shrink-0 z-30 shadow-xs">
                {/* Left: Test Identity */}
                <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs shadow-indigo-500/20">
                        EB
                    </div>
                    <div className="min-w-0">
                        <div className="font-extrabold text-xs sm:text-sm text-slate-900 truncate leading-tight">
                            {examPaperName}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium hidden sm:block leading-none mt-0.5">
                            Official CBT Engine • {examName}
                        </div>
                    </div>
                </div>

                {/* Center: Countdown Timer */}
                <div className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-black tabular-nums transition-colors shadow-xs ${
                    isUrgent
                        ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse'
                        : 'bg-slate-50 text-slate-800 border-slate-200/90'
                }`}>
                    <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-rose-500' : 'text-indigo-600'}`} />
                    <span>{formatTime(timeLeft)}</span>
                </div>

                {/* Right: Controls (Language + Palette Grid) */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    {/* Language Switch */}
                    <button
                        onClick={() => setQuestionLang(l => l === 'english' ? 'hindi' : 'english')}
                        className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                        title="Switch Question Language"
                    >
                        <Globe className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-[11px] font-extrabold">{questionLang === 'english' ? 'EN' : 'HI'}</span>
                    </button>

                    {/* Question Palette Trigger with clear label */}
                    <button
                        onClick={() => setIsPaletteOpen(true)}
                        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200/80 transition-colors shadow-xs"
                        aria-label="Open Question Palette"
                    >
                        <LayoutGrid className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span className="font-extrabold text-[11px] sm:text-xs">Grid</span>
                        <span className="bg-indigo-600 text-white px-1.5 py-0.5 rounded-full text-[10px] font-black leading-none">
                            {currentQuestionIndex + 1}/{mockQuestions.length}
                        </span>
                    </button>
                </div>
            </header>

            {/* Level 2: Dedicated Subject Navigation Strip (Mobile & Laptop) */}
            <div className="bg-slate-50/95 border-b border-slate-200/80 px-3 sm:px-6 py-1.5 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 flex-1 min-w-0">
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider mr-1 hidden sm:inline shrink-0">
                        Sections:
                    </span>
                    {subjectsList.map(sub => {
                        const isActive = activeSubject === sub;
                        const subQs = mockQuestions.filter(q => q.subject === sub);
                        const answeredCount = subQs.filter(q => responses[q.id] !== undefined && responses[q.id] !== '').length;

                        return (
                            <button
                                key={sub}
                                onClick={() => handleSubjectChange(sub)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                                    isActive
                                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25 font-extrabold'
                                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-100/60'
                                }`}
                            >
                                <span>{sub}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold leading-none ${
                                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                                }`}>
                                    {answeredCount}/{subQs.length}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Laptop Fullscreen button */}
                <button
                    onClick={toggleFullscreen}
                    className="hidden lg:flex items-center gap-1 text-slate-500 hover:text-slate-800 text-xs font-semibold px-2 py-1 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-colors shrink-0"
                >
                    {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                    <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
                </button>
            </div>

            {/* Main Stage: Focused, Clean, Room to Breathe */}
            <div className="flex flex-1 overflow-hidden relative">
                <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F4F6F9]">
                    {/* Scrollable Question Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 sm:py-6 max-w-3xl w-full mx-auto"
                    >
                        {/* Question Metadata Bar */}
                        <div className="flex items-center justify-between mb-3 px-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-black text-slate-900 text-base sm:text-lg">
                                    Q{currentSubjectIndex}
                                </span>
                                <span className="text-xs text-slate-400 font-semibold">
                                    of {subjectQuestions.length} in {activeSubject}
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider hidden xs:inline">
                                    Single Choice
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-2">
                                {isCurrentMarked && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                                        <Bookmark className="w-3 h-3 fill-purple-600 text-purple-600" />
                                        <span className="hidden sm:inline">Marked</span>
                                    </span>
                                )}
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                                    <span className="font-black">+4</span>
                                    <span className="text-[10px] opacity-75 hidden xs:inline">Marks</span>
                                </span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                                    <span className="font-black">-1</span>
                                    <span className="text-[10px] opacity-75 hidden xs:inline">Mark</span>
                                </span>
                            </div>
                        </div>

                        {/* Question Text Box (Clean, Elegant, Readable Sans-Serif) */}
                        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-xs mb-4">
                            <h2 className="text-slate-900 font-medium text-base sm:text-lg leading-relaxed select-text font-sans">
                                {questionLang === 'hindi' ? currentQuestion?.textHi : currentQuestion?.textEn}
                            </h2>
                        </div>

                        {/* MCQ Options List */}
                        {currentQuestion?.type === 'MCQ' && (
                            <div className="space-y-2.5">
                                {currentQuestion.options?.map((opt, idx) => {
                                    const letters = ['A', 'B', 'C', 'D'];
                                    const letter = letters[idx] || `${idx + 1}`;
                                    const isSelected = responses[currentQuestion.id] === opt.id;

                                    return (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => handleOptionSelect(opt.id)}
                                            className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center gap-3.5 group cursor-pointer ${
                                                isSelected
                                                    ? 'bg-indigo-50/70 border-indigo-600 ring-2 ring-indigo-600/30 shadow-xs'
                                                    : 'bg-white hover:bg-slate-50 border-slate-200/80 hover:border-slate-300'
                                            }`}
                                        >
                                            {/* Option Badge */}
                                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-all ${
                                                isSelected
                                                    ? 'bg-indigo-600 text-white shadow-xs'
                                                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                                            }`}>
                                                {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : letter}
                                            </div>

                                            {/* Option Text */}
                                            <div className="flex-1 pr-2">
                                                <span className={`text-sm sm:text-base font-medium leading-normal ${
                                                    isSelected ? 'text-indigo-950 font-bold' : 'text-slate-800'
                                                }`}>
                                                    {questionLang === 'hindi' ? opt.textHi : opt.textEn}
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Numerical Value Input */}
                        {currentQuestion?.type === 'Numerical' && (
                            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-xs">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    Type Numerical Answer:
                                </label>
                                <div className="max-w-xs">
                                    <input
                                        type="number"
                                        value={(responses[currentQuestion.id] as string) || ''}
                                        onChange={(e) => handleNumericalInput(e.target.value)}
                                        className="w-full text-xl sm:text-2xl font-black text-slate-900 border-2 border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 rounded-xl px-4 py-3 outline-none transition-all bg-slate-50 focus:bg-white"
                                        placeholder="e.g. 24.5"
                                        step="any"
                                        autoFocus
                                    />
                                    <span className="block text-[11px] text-slate-400 mt-2 font-medium">
                                        Use decimal point (.) for non-integers. No units required.
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Laptop Navigation Hints */}
                        <div className="hidden md:flex items-center justify-center gap-4 text-[11px] text-slate-400 mt-8">
                            <span>Keys <strong>A, B, C, D</strong> to pick</span>
                            <span>•</span>
                            <span><strong>Enter / →</strong> for Next</span>
                            <span>•</span>
                            <span><strong>←</strong> for Prev</span>
                            <span>•</span>
                            <span><strong>M</strong> for Bookmark</span>
                        </div>
                    </div>

                    {/* Bottom Floating Navigation Dock */}
                    <footer className="bg-white border-t border-slate-200/80 px-4 sm:px-6 py-2.5 shrink-0 z-20 shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
                        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
                            {/* Left: Clear & Bookmark */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleClearResponse}
                                    disabled={!isCurrentAnswered()}
                                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                                        isCurrentAnswered()
                                            ? 'text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200'
                                            : 'text-slate-300 border border-transparent cursor-not-allowed opacity-40'
                                    }`}
                                >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Clear</span>
                                </button>

                                <button
                                    onClick={handleToggleMarkReview}
                                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                                        isCurrentMarked
                                            ? 'bg-purple-50 text-purple-700 border-purple-300 ring-1 ring-purple-300'
                                            : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                                    }`}
                                >
                                    <Bookmark className={`w-3.5 h-3.5 ${isCurrentMarked ? 'fill-purple-600 text-purple-600' : 'text-slate-400'}`} />
                                    <span>{isCurrentMarked ? 'Bookmarked' : 'Bookmark'}</span>
                                </button>
                            </div>

                            {/* Right: Prev & Next/Submit */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={goToPrevQuestion}
                                    disabled={currentQuestionIndex === 0}
                                    className={`flex items-center gap-1 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                                        currentQuestionIndex === 0
                                            ? 'text-slate-300 border-slate-100 cursor-not-allowed opacity-40'
                                            : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-200'
                                    }`}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="hidden xs:inline">Prev</span>
                                </button>

                                {currentQuestionIndex === mockQuestions.length - 1 ? (
                                    <button
                                        onClick={() => {
                                            if (isCurrentAnswered()) {
                                                setStatus(prev => {
                                                    const cur = prev[currentQuestion.id];
                                                    return { ...prev, [currentQuestion.id]: (cur === 'marked' || cur === 'answered_marked') ? 'answered_marked' : 'answered' };
                                                });
                                            }
                                            setIsConfirmModalOpen(true);
                                        }}
                                        className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-5 sm:px-7 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <Send className="w-3.5 h-3.5" />
                                        <span>Submit Test</span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSaveNext}
                                        className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span>Save & Next</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </footer>
                </main>

                {/* Right: Slide-in Question Palette Sheet */}
                <aside className={`fixed lg:relative inset-y-0 right-0 z-50 w-[290px] sm:w-[310px] bg-white border-l border-slate-200 flex flex-col shrink-0 transform transition-transform duration-200 ease-out shadow-2xl lg:shadow-none ${
                    isPaletteOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
                }`}>
                    {/* Palette Header */}
                    <div className="p-3.5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
                        <div className="flex items-center gap-2">
                            <LayoutGrid className="w-4 h-4 text-indigo-600" />
                            <span className="font-extrabold text-slate-800 text-xs tracking-wide">
                                Question Palette
                            </span>
                        </div>
                        <button
                            onClick={() => setIsPaletteOpen(false)}
                            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Compact Status Matrix */}
                    <div className="p-3 border-b border-slate-100 grid grid-cols-2 gap-1.5 text-[11px] font-bold text-slate-600 shrink-0">
                        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-2.5 py-1.5 rounded-lg border border-emerald-100/60">
                            <span className="w-4 h-4 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">
                                {counts.answered}
                            </span>
                            <span>Answered</span>
                        </div>
                        <div className="flex items-center gap-2 bg-rose-50 text-rose-800 px-2.5 py-1.5 rounded-lg border border-rose-100/60">
                            <span className="w-4 h-4 rounded bg-rose-500 text-white flex items-center justify-center text-[10px] font-black">
                                {counts.notAnswered}
                            </span>
                            <span>Unanswered</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-50 text-purple-800 px-2.5 py-1.5 rounded-lg border border-purple-100/60">
                            <span className="w-4 h-4 rounded bg-purple-600 text-white flex items-center justify-center text-[10px] font-black">
                                {counts.marked + counts.answeredMarked}
                            </span>
                            <span>Bookmarked</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200/60">
                            <span className="w-4 h-4 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-black">
                                {counts.notVisited}
                            </span>
                            <span>Not Visited</span>
                        </div>
                    </div>

                    {/* Section Switcher in Palette */}
                    <div className="px-3.5 py-2 bg-indigo-50/30 border-b border-indigo-100/60 flex items-center justify-between shrink-0">
                        <span className="text-[11px] font-bold text-indigo-950">
                            {activeSubject}
                        </span>
                        <span className="text-[10px] font-bold text-indigo-600">
                            {subjectQuestions.length} Questions
                        </span>
                    </div>

                    {/* Question Grid */}
                    <div className="flex-1 overflow-y-auto p-3 hide-scrollbar">
                        <div className="grid grid-cols-5 gap-2">
                            {subjectQuestions.map((q) => {
                                const isCurrent = currentQuestion?.id === q.id;
                                const st = status[q.id] || 'not_visited';

                                let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';
                                if (st === 'answered') {
                                    badgeStyle = 'bg-emerald-600 text-white border-emerald-600 shadow-xs';
                                } else if (st === 'not_answered') {
                                    badgeStyle = 'bg-rose-500 text-white border-rose-500 shadow-xs';
                                } else if (st === 'marked') {
                                    badgeStyle = 'bg-purple-600 text-white border-purple-600 shadow-xs';
                                } else if (st === 'answered_marked') {
                                    badgeStyle = 'bg-purple-600 text-white border-purple-600 shadow-xs';
                                }

                                const globalIdx = mockQuestions.findIndex(mq => mq.id === q.id);

                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => navToQuestion(globalIdx)}
                                        className={`w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center border transition-all relative ${badgeStyle} ${
                                            isCurrent
                                                ? 'ring-2 ring-indigo-600 ring-offset-2 scale-105 font-black z-10'
                                                : 'active:scale-95'
                                        }`}
                                    >
                                        {q.id}
                                        {st === 'answered_marked' && (
                                            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full"></span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Finish in Palette */}
                    <div className="p-3 border-t border-slate-100 bg-slate-50/70 shrink-0">
                        <button
                            onClick={() => setIsConfirmModalOpen(true)}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
                        >
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Full Exam</span>
                        </button>
                    </div>
                </aside>
            </div>

            {/* Mobile Backdrop Overlay */}
            {isPaletteOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/40 backdrop-blur-2xs z-40 lg:hidden animate-in fade-in duration-200"
                    onClick={() => setIsPaletteOpen(false)}
                />
            )}

            {/* Submit Confirmation Modal */}
            {isConfirmModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
                        onClick={() => setIsConfirmModalOpen(false)}
                    />
                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all p-6 border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
                        <div className="w-12 h-12 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-3 border border-amber-100">
                            <AlertCircle className="w-6 h-6" />
                        </div>

                        <h3 className="text-lg font-black text-center text-slate-900 mb-1">
                            Submit Exam Attempt?
                        </h3>
                        <p className="text-slate-500 text-center text-xs mb-4">
                            Review your summary before submitting.
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-3.5 mb-5 border border-slate-200/60">
                            <div className="grid grid-cols-2 gap-2 text-center pb-2.5 mb-2.5 border-b border-slate-200/60">
                                <div>
                                    <div className="text-2xl font-black text-emerald-600">{totalAttempted}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Attempted</div>
                                </div>
                                <div className="border-l border-slate-200/60">
                                    <div className="text-2xl font-black text-rose-500">{counts.notAnswered + counts.notVisited}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Unattempted</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center">
                                <div>
                                    <div className="text-base font-bold text-purple-600">{counts.marked + counts.answeredMarked}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Bookmarked</div>
                                </div>
                                <div className="border-l border-slate-200/60">
                                    <div className="text-base font-bold text-slate-700">{formatTime(timeLeft)}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Time Left</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2.5">
                            <button
                                onClick={() => setIsConfirmModalOpen(false)}
                                className="flex-1 bg-white text-slate-700 font-bold py-2.5 px-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-xs"
                            >
                                Resume
                            </button>
                            <button
                                onClick={handleFinalSubmit}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl transition-all shadow-xs text-xs"
                            >
                                Submit Exam
                            </button>
                        </div>
                    </div>
                </div>
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
