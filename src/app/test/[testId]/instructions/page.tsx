'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
    Check, PlayCircle, Clock, FileText, 
    AlertCircle, ShieldCheck, ArrowLeft, ArrowRight, 
    Globe, Award, Laptop
} from 'lucide-react';

export default function TestInstructions({ params }: { params: { testId: string } }) {
    const router = useRouter();
    const [language, setLanguage] = useState<'english' | 'hindi'>('english');
    const [agree, setAgree] = useState(false);

    const testId = params?.testId || 'mock-eng-1-test-1';
    const isNeet = testId.includes('med');
    const seriesId = testId.replace(/-test-\d+$/, '') || 'mock-eng-1';

    const duration = 180; // 3 hours
    const totalQuestions = isNeet ? 180 : 75;
    const totalMarks = isNeet ? 720 : 300;
    const examFormat = isNeet ? 'NEET UG 2026' : 'JEE Main 2026';
    
    // Extract test number
    const testNumMatch = testId.match(/test-(\d+)/);
    const testNumber = testNumMatch ? testNumMatch[1].padStart(2, '0') : '01';
    const testTitle = `${isNeet ? 'Medical' : 'Engineering'} Full Mock Test ${testNumber}`;

    const handleProceed = () => {
        if (!agree) {
            alert('Please check the declaration checkbox to proceed to the examination.');
            return;
        }
        router.push(`/test/${testId}/engine?lang=${language}`);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 font-sans pt-20 md:pt-24 lg:pt-28 pb-16 transition-colors duration-150">
            
            {/* Main Instructions Wrapper */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6">
                
                {/* Back Link & Server Status */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <Link 
                        href={`/series/${seriesId}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        <span>Back to Test Series</span>
                    </Link>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>CBT Exam Mode Active</span>
                    </div>
                </div>

                {/* Exam Title & Overview Hero */}
                <div className="bg-white dark:bg-[#0C1220] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 mb-5">
                        <div>
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-200 dark:border-orange-800/60">
                                    {examFormat} Official Pattern
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800/60">
                                    NTA CBT Simulation
                                </span>
                            </div>
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                {testTitle}
                            </h1>
                        </div>

                        {/* Language Selector in Header */}
                        <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-50 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                            <Globe className="w-4 h-4 text-slate-500 ml-1.5 shrink-0" />
                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Language:</span>
                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    onClick={() => setLanguage('english')}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                        language === 'english'
                                            ? 'bg-orange-600 text-white shadow-sm'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    English
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLanguage('hindi')}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                        language === 'hindi'
                                            ? 'bg-orange-600 text-white shadow-sm'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    हिंदी
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[11px] text-slate-500 uppercase font-bold">Total Time</div>
                                <div className="text-sm font-black text-slate-900 dark:text-white">{duration} Minutes</div>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[11px] text-slate-500 uppercase font-bold">Questions</div>
                                <div className="text-sm font-black text-slate-900 dark:text-white">{totalQuestions} Questions</div>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                <Award className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[11px] text-slate-500 uppercase font-bold">Max Marks</div>
                                <div className="text-sm font-black text-slate-900 dark:text-white">{totalMarks} Marks</div>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                                <Laptop className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[11px] text-slate-500 uppercase font-bold">Interface</div>
                                <div className="text-sm font-black text-slate-900 dark:text-white">Real CBT Engine</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instruction Cards Content */}
                <div className="bg-white dark:bg-[#0C1220] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-sm space-y-7">
                    
                    {/* Section 1: General Exam Flow */}
                    <div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-600 inline-block"></span>
                            General Examination Rules
                        </h2>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-5">
                            <li>
                                The countdown timer in the top right corner of your test engine will display the remaining time available for you to complete the examination.
                            </li>
                            <li>
                                When the timer reaches zero, your examination will end and submit automatically. You do not need to manually terminate unless you finish early.
                            </li>
                            <li>
                                You can navigate freely between sections and questions at any point during the {duration} minutes.
                            </li>
                            <li>
                                You may switch the question language individually between English and Hindi using the language dropdown inside the test screen.
                            </li>
                        </ul>
                    </div>

                    {/* Section 2: Question Palette Legend (Official 5 NTA Shapes) */}
                    <div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-600 inline-block"></span>
                            NTA Question Palette Status Legend
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                            The question palette on the right side of the examination screen will indicate the status of each question using the official NTA symbols:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            
                            {/* Symbol 1: Not Visited */}
                            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-3.5">
                                <div className="w-9 h-9 border border-slate-400 bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-sm text-slate-800 dark:text-slate-200 shrink-0 rounded-sm">
                                    1
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-slate-900 dark:text-white">Not Visited</div>
                                    <div className="text-slate-500 dark:text-slate-400">You have not visited this question yet.</div>
                                </div>
                            </div>

                            {/* Symbol 2: Not Answered */}
                            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-3.5">
                                <div 
                                    className="w-9 h-9 bg-[#ed7e71] flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-sm"
                                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)' }}
                                >
                                    2
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-slate-900 dark:text-white">Not Answered</div>
                                    <div className="text-slate-500 dark:text-slate-400">You visited the question but have not answered it.</div>
                                </div>
                            </div>

                            {/* Symbol 3: Answered */}
                            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-3.5">
                                <div 
                                    className="w-9 h-9 bg-[#5eb662] flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-sm"
                                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)' }}
                                >
                                    3
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-slate-900 dark:text-white">Answered (Evaluated)</div>
                                    <div className="text-slate-500 dark:text-slate-400">You have answered this question. It will be scored.</div>
                                </div>
                            </div>

                            {/* Symbol 4: Marked for Review */}
                            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-3.5">
                                <div className="w-9 h-9 rounded-full bg-[#714c9e] flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-sm">
                                    4
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-slate-900 dark:text-white">Marked for Review</div>
                                    <div className="text-slate-500 dark:text-slate-400">NOT answered, but marked for review (0 marks).</div>
                                </div>
                            </div>

                            {/* Symbol 5: Answered & Marked for Review */}
                            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-3.5 sm:col-span-2">
                                <div className="w-9 h-9 rounded-full bg-[#714c9e] flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-sm relative">
                                    5
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#5eb662] rounded-full border-2 border-white dark:border-slate-900"></div>
                                </div>
                                <div className="text-xs">
                                    <div className="font-bold text-slate-900 dark:text-white">Answered & Marked for Review (Evaluated)</div>
                                    <div className="text-slate-500 dark:text-slate-400">The question is answered AND marked for review. <strong className="text-emerald-600 dark:text-emerald-400">It WILL be considered for evaluation.</strong></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Section 3: Marking Scheme & Subjects */}
                    <div>
                        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-600 inline-block"></span>
                            Marking Scheme
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400">Correct Answer</span>
                                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">+4</span>
                                </div>
                                <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                                    Full marks awarded for selecting the correct option.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-800/60 bg-rose-50/40 dark:bg-rose-950/20">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-rose-800 dark:text-rose-400">Incorrect Answer</span>
                                    <span className="text-lg font-black text-rose-600 dark:text-rose-400">-1</span>
                                </div>
                                <p className="text-[11px] text-rose-700/80 dark:text-rose-400/80">
                                    Negative marking deducted for wrong choices.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Unanswered</span>
                                    <span className="text-lg font-black text-slate-600 dark:text-slate-400">0</span>
                                </div>
                                <p className="text-[11px] text-slate-500">
                                    No penalty for skipped or unvisited questions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Declaration Checkbox */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                        <label className={`block p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                            agree 
                                ? 'bg-orange-50/40 dark:bg-orange-950/20 border-orange-500 shadow-sm' 
                                : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                        }`}>
                            <div className="flex items-start gap-3.5">
                                <input 
                                    type="checkbox" 
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    className="mt-1 w-5 h-5 rounded text-orange-600 focus:ring-orange-500 accent-orange-600 shrink-0 cursor-pointer"
                                />
                                <div className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                                    <strong className="text-slate-900 dark:text-white block mb-0.5">Candidate Declaration:</strong>
                                    I have read and understood all the examination instructions stated above. My computer / browser hardware is in proper working condition. I agree that in case of any unauthorized activity, my test attempt shall stand disqualified.
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Section 5: Action Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-2">
                        <Link 
                            href={`/series/${seriesId}`} 
                            className="px-5 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-bold text-xs sm:text-sm transition-colors text-center w-full sm:w-auto"
                        >
                            Cancel & Return
                        </Link>

                        <button 
                            onClick={handleProceed}
                            className={`w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg ${
                                agree 
                                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98]' 
                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed shadow-none'
                            }`}
                        >
                            <span>I AM READY TO BEGIN</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>

            </main>
        </div>
    );
}
