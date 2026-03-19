'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TestInstructions({ params }: { params: { testId: string } }) {
    const router = useRouter();
    const [language, setLanguage] = useState<'english' | 'hindi'>('english');
    const [agree, setAgree] = useState(false);

    const isNeet = params.testId.includes('med');
    const duration = 180; // Both Neet and JEE are 3 hours
    const examFormat = isNeet ? 'NEET UG' : 'JEE Main';

    const handleProceed = () => {
        if (!agree) {
            alert('Please check the declaration to proceed.');
            return;
        }
        router.push(`/test/${params.testId}/engine?lang=${language}`);
    };

    return (
        <div className="min-h-screen bg-[#e9ecef] font-sans text-black py-4 sm:py-8">
            <div className="max-w-5xl mx-auto px-2 sm:px-4">
                <div className="bg-white shadow-md border border-gray-300 overflow-hidden text-[13px] sm:text-[14px] leading-relaxed">
                    
                    {/* Header */}
                    <div className="bg-[#1a5f97] px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 sm:gap-0">
                        <h1 className="text-[16px] sm:text-[18px] font-semibold">General Instructions : {examFormat}</h1>
                    </div>

                    <div className="p-4 sm:p-6 space-y-6">
                        
                        {/* Important Instructions section */}
                        <div className="space-y-4 text-justify">
                            <h2 className="text-[15px] font-bold text-red-600 underline">Please read the instructions carefully:</h2>
                            <h3 className="text-[14px] font-bold">General Instructions:</h3>
                            <ul className="space-y-3 font-medium text-[#333]">
                                <li className="flex gap-2 items-start"><span className="shrink-0 font-bold">1.</span><span>Total duration of examination is {duration} minutes.</span></li>
                                <li className="flex gap-2 items-start"><span className="shrink-0 font-bold">2.</span><span>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</span></li>
                                <li className="flex gap-2 items-start"><span className="shrink-0 font-bold">3.</span><span>The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</span></li>
                            </ul>
                        </div>

                        {/* Status Legend */}
                        <div className="bg-[#f8f9fa] p-4 border border-gray-200 ml-4 sm:ml-6">
                            <ul className="space-y-4 text-[13px] sm:text-[14px]">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 border border-black bg-[url('/nta/not_visited.png')] bg-[#e2e2e2] flex items-center justify-center font-bold text-black shrink-0 relative">
                                        1
                                    </div>
                                    <span className="mt-1 sm:mt-2">You have not visited the question yet.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ed7e71] flex items-center justify-center font-bold text-white shrink-0 relative" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)' }}>
                                        2
                                    </div>
                                    <span className="mt-1 sm:mt-2">You have not answered the question.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5eb662] flex items-center justify-center font-bold text-white shrink-0 relative" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)' }}>
                                        3
                                    </div>
                                    <span className="mt-1 sm:mt-2">You have answered the question.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#714c9e] flex items-center justify-center font-bold text-white shrink-0 relative">
                                        4
                                    </div>
                                    <span className="mt-1 sm:mt-2">You have NOT answered the question, but have marked the question for review.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#714c9e] flex items-center justify-center font-bold text-white shrink-0 relative">
                                        5
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#5eb662] rounded-full border border-white"></div>
                                    </div>
                                    <span className="mt-1 sm:mt-2">The question(s) "Answered and Marked for Review" will be considered for evaluation.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Marking Scheme */}
                        <div className="ml-4 sm:ml-6 mt-4">
                            <h3 className="font-bold mb-2">Marking Scheme:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Correct Answer: <strong>+4</strong></li>
                                <li>Incorrect Answer: <strong>-1</strong> (Negative Marking)</li>
                                <li>Unanswered/Marked for Review: <strong>0</strong></li>
                            </ul>
                        </div>

                        <div className="border border-[#1a5f97] p-2 mt-4 bg-blue-50/30 text-center font-bold text-red-600">
                            Please note all questions will appear in your default language. This language can be changed for a particular question later on.
                        </div>

                        <hr className="border-gray-300" />

                        {/* Settings & Declaration */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <h3 className="font-bold text-[#333]">Choose your default language:</h3>
                                <select 
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value as any)}
                                    className="p-1 px-2 border border-black bg-white outline-none focus:ring-1 focus:ring-blue-600 font-medium text-black text-[14px]"
                                >
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi (हिंदी)</option>
                                </select>
                            </div>

                            <label className="flex items-start gap-3 cursor-pointer p-4 bg-gray-50 border border-gray-200">
                                <input 
                                    type="checkbox" 
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                    className="mt-1 w-4 h-4"
                                />
                                <span className="text-[13px] sm:text-[14px] font-medium text-[#333]">
                                    I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations.
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row justify-center items-stretch sm:items-center gap-4 pt-4 border-t border-gray-300">
                            <Link href="/dashboard" className="text-[#333] hover:underline font-bold text-center px-4 py-2">
                                Cancel & Return
                            </Link>
                            <button 
                                onClick={handleProceed}
                                className={`px-10 py-2 font-bold text-[15px] border border-black ${agree ? 'bg-[#5eb662] hover:bg-[#4a9f4e] text-white shadow-md' : 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300'}`}
                            >
                                PROCEED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
