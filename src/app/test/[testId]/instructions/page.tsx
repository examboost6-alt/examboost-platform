'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, AlertCircle, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function TestInstructions({ params }: { params: { testId: string } }) {
    const router = useRouter();
    const [language, setLanguage] = useState<'english' | 'hindi'>('english');
    const [agree, setAgree] = useState(false);

    const handleProceed = () => {
        if (!agree) {
            alert('Please check the declaration to proceed.');
            return;
        }
        router.push(`/test/${params.testId}/engine?lang=${language}`);
    };

    return (
        <div className="min-h-screen bg-[#f4f7fe] dark:bg-[#0b1120] font-sans text-slate-900 dark:text-slate-100 py-6 sm:py-10">
            <div className="max-w-4xl mx-auto px-3 sm:px-4">
                <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    
                    {/* Header */}
                    <div className="bg-indigo-600 px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 sm:gap-0">
                        <h1 className="text-lg sm:text-xl font-bold tracking-tight">General Instructions</h1>
                        <span className="text-xs sm:text-sm font-semibold opacity-90">{params.testId.includes('med') ? 'NEET UG' : 'JEE Main'} Format</span>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                        
                        {/* Important Instructions section */}
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">Please read the instructions carefully:</h2>
                            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                                <li className="flex gap-2"><span className="shrink-0">1.</span><span>Total duration of the examination is 200 minutes (for NEET) and 180 minutes (for JEE).</span></li>
                                <li className="flex gap-2"><span className="shrink-0">2.</span><span>The clock will be set at the server. The countdown timer at the top right corner of the screen will display the remaining time available for you to complete the examination.</span></li>
                                <li className="flex gap-2"><span className="shrink-0">3.</span><span>When the timer reaches zero, the examination will end automatically. You do not need to submit the examination explicitly.</span></li>
                            </ul>
                        </div>

                        {/* Status Legend */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-slate-700 dark:text-slate-300">Question Status Panel:</h3>
                            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-[10px] sm:text-xs shrink-0">1</div>
                                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight">Not Visited</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-b-md rounded-t-lg bg-red-500 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs shrink-0">2</div>
                                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight">Not Answered</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-b-md rounded-t-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs shrink-0">3</div>
                                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight">Answered</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs shrink-0">4</div>
                                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight">Marked for Review</span>
                                </div>
                            </div>
                        </div>

                        {/* Marking Scheme */}
                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 text-orange-800 dark:text-orange-200 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-900/30 rounded-xl">
                            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-sm sm:text-base">Marking Scheme (Important)</h4>
                                <p className="text-xs sm:text-sm mt-1 font-medium leading-relaxed">For each correct answer, you will be awarded <strong>+4 marks</strong>. For each incorrect answer, <strong>-1 mark</strong> will be deducted (Negative Marking). Unanswered questions will result in 0 marks.</p>
                            </div>
                        </div>

                        <hr className="border-slate-200 dark:border-slate-800" />

                        {/* Settings & Declaration */}
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Choose your default language:</h3>
                                <select 
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as any)}
                                    className="w-full sm:max-w-xs p-2.5 sm:p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base"
                                >
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi (हिंदी)</option>
                                </select>
                                <p className="text-[11px] sm:text-xs text-red-500 mt-2 font-medium">Please note all questions will appear in the default language. This language can be changed for a particular question later on.</p>
                            </div>

                            <label className="flex items-start gap-2.5 sm:gap-3 cursor-pointer group p-3 sm:p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <input 
                                    type="checkbox" 
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 shrink-0"
                                />
                                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                                    I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc.
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <Link href="/dashboard" className="text-slate-500 bg-slate-50 dark:bg-slate-800/50 sm:bg-transparent dark:sm:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white font-bold text-sm px-4 sm:px-6 py-3.5 sm:py-3 transition-colors text-center border border-slate-200 dark:border-slate-700 sm:border-transparent rounded-xl">
                                Cancel & Return
                            </Link>
                            <button 
                                onClick={handleProceed}
                                className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${agree ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'}`}
                            >
                                Proceed <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
