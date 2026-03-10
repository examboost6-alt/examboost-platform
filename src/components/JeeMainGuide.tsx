"use client";

import React, { useState } from 'react';
import {
    FileText, Calendar, Layout, BookOpen, Zap,
    FileCheck, TrendingUp, CheckCircle2, AlertCircle,
    ArrowRight
} from 'lucide-react';

export default function JeeMainGuide() {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: FileText },
        { id: 'dates', label: 'Important Dates', icon: Calendar },
        { id: 'pattern', label: 'Exam Pattern', icon: Layout },
        { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
        { id: 'updates', label: 'New Updates', icon: Zap },
        { id: 'documents', label: 'Documents', icon: FileCheck },
        { id: 'strategy', label: 'Result & Strategy', icon: TrendingUp },
    ];

    return (
        <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
            <div className="bg-primary/5 dark:bg-accent/10 border-b border-slate-200 dark:border-slate-800 p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center gap-4 mb-2">
                    JEE Main 2026 Complete Guide
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg font-medium flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary dark:text-accent" />
                    Official Information directly from National Testing Agency (NTA)
                </p>
            </div>

            <div className="flex flex-col lg:flex-row">
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-72 bg-slate-50 dark:bg-slate-950/50 border-r border-slate-200 dark:border-slate-800 p-4 lg:p-6 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar snap-x lg:snap-none">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm lg:text-base transition-all whitespace-nowrap lg:whitespace-normal text-left snap-start shrink-0 lg:shrink ${isActive
                                    ? 'bg-primary dark:bg-accent text-white shadow-md'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-5 md:p-10 min-h-[500px] w-full bg-white dark:bg-slate-900 overflow-hidden">

                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">Exam Overview</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                                <strong className="text-slate-900 dark:text-white">Joint Entrance Examination (JEE)</strong> is one of the most prestigious engineering entrance exams in India. It is conducted by the <strong>National Testing Agency (NTA)</strong>.
                            </p>
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-5 md:p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 mt-6 overflow-hidden">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-start gap-2 text-sm md:text-base">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Clearing JEE Main provides students with admission opportunities to:
                                </h4>
                                <ul className="space-y-3">
                                    {['NITs (National Institutes of Technology)', 'IIITs (Indian Institutes of Information Technology)', 'GFTIs (Government Funded Technical Institutes)', 'Qualification for JEE Advanced'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">
                                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary dark:bg-accent shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Dates Tab */}
                    {activeTab === 'dates' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                            <p className="text-slate-500 dark:text-slate-400 italic font-medium mb-4 text-sm md:text-base">* These dates are based on the official NTA schedule.</p>

                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 bg-primary/10 dark:bg-accent/10 p-3 rounded-lg w-max text-primary dark:text-accent">
                                    <Calendar className="w-5 h-5" /> Session 1 (January Attempt)
                                </h3>
                                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                                    <table className="w-full text-left border-collapse min-w-[400px]">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700 text-sm md:text-base">
                                                <th className="p-3 md:p-4">Event</th>
                                                <th className="p-3 md:p-4">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Application Start</td><td className="p-3 md:p-4 font-bold text-slate-900 dark:text-white">31 October 2025</td></tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Last Date Apply</td><td className="p-3 md:p-4 font-bold text-slate-900 dark:text-white">27 November 2025</td></tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Exam Date</td><td className="p-3 md:p-4 font-black text-primary dark:text-accent">21 – 30 January 2026</td></tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Result</td><td className="p-3 md:p-4 font-bold text-slate-900 dark:text-white">12 February 2026</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 bg-rose-500/10 dark:bg-rose-500/20 p-3 rounded-lg w-max text-rose-600 dark:text-rose-400">
                                    <Calendar className="w-5 h-5" /> Session 2 (April Attempt)
                                </h3>
                                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                                    <table className="w-full text-left border-collapse min-w-[400px]">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700 text-sm md:text-base">
                                                <th className="p-3 md:p-4">Event</th>
                                                <th className="p-3 md:p-4">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Application Start</td><td className="p-3 md:p-4 font-bold text-slate-900 dark:text-white">1 February 2026</td></tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Last Date Apply</td><td className="p-3 md:p-4 font-bold text-slate-900 dark:text-white">25 February 2026</td></tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Admit Card</td><td className="p-3 md:p-4 font-medium text-slate-600 dark:text-slate-400">3-4 days before the exam</td></tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Exam Date</td><td className="p-3 md:p-4 font-black text-rose-600 dark:text-rose-400">2 April – 9 April 2026</td></tr>
                                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20"><td className="p-3 md:p-4">Result</td><td className="p-3 md:p-4 font-bold text-slate-900 dark:text-white">Around 20 April 2026</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pattern Tab */}
                    {activeTab === 'pattern' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">Paper 1 (B.E / B.Tech) Pattern</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base md:text-lg">Total Metrics</h4>
                                    <div className="flex gap-4 mt-4">
                                        <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm text-center">
                                            <div className="text-2xl md:text-3xl font-black text-primary dark:text-accent">75</div>
                                            <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase mt-1">Questions</div>
                                        </div>
                                        <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm text-center">
                                            <div className="text-2xl md:text-3xl font-black text-primary dark:text-accent">300</div>
                                            <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase mt-1">Marks</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base md:text-lg">Question Types</h4>
                                    <ul className="mt-4 space-y-3">
                                        <li className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-lg font-bold text-slate-700 dark:text-slate-300 text-sm md:text-base">
                                            <span className="w-6 h-6 rounded bg-primary/20 text-primary dark:bg-accent/20 dark:text-accent flex items-center justify-center text-xs shrink-0">1</span>
                                            Multiple Choice Questions (MCQ)
                                        </li>
                                        <li className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-lg font-bold text-slate-700 dark:text-slate-300 text-sm md:text-base">
                                            <span className="w-6 h-6 rounded bg-primary/20 text-primary dark:bg-accent/20 dark:text-accent flex items-center justify-center text-xs shrink-0">2</span>
                                            Numerical Value Questions
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
                                <table className="w-full text-center border-collapse min-w-[300px]">
                                    <thead>
                                        <tr className="bg-primary text-white font-bold text-sm md:text-base">
                                            <th className="p-3 md:p-4 text-left">Subject</th>
                                            <th className="p-3 md:p-4">Questions</th>
                                            <th className="p-3 md:p-4">Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm md:text-base">
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="p-3 md:p-4 text-left font-bold text-blue-600 dark:text-blue-400">Physics</td>
                                            <td className="p-3 md:p-4">25</td><td className="p-3 md:p-4">100</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="p-3 md:p-4 text-left font-bold text-emerald-600 dark:text-emerald-400">Chemistry</td>
                                            <td className="p-3 md:p-4">25</td><td className="p-3 md:p-4">100</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                            <td className="p-3 md:p-4 text-left font-bold text-rose-600 dark:text-rose-400">Mathematics</td>
                                            <td className="p-3 md:p-4">25</td><td className="p-3 md:p-4">100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Syllabus Tab */}
                    {activeTab === 'syllabus' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 md:space-y-8">
                            <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 p-4 rounded-xl flex gap-3">
                                <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" /></div>
                                <div>
                                    <h4 className="font-bold text-green-900 dark:text-green-300">Good News!</h4>
                                    <p className="text-green-800 dark:text-green-400 font-medium mt-1 text-sm md:text-base">No major changes in the 2026 syllabus (mostly similar to the 2025 syllabus).</p>
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                {/* Physics */}
                                <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                                    <div className="bg-slate-50 dark:bg-slate-800 p-3 md:p-4 font-black text-base md:text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Physics (Major Chapters)</div>
                                    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        <div>
                                            <h5 className="font-bold text-primary dark:text-accent mb-2 text-sm md:text-base">Mechanics</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Kinematics</li><li>Laws of Motion</li><li>Work Energy Power</li><li>Rotational Motion</li><li>Gravitation</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-primary dark:text-accent mb-2 text-sm md:text-base">Heat & Thermodynamics</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Thermodynamics</li><li>Kinetic Theory of Gases</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-primary dark:text-accent mb-2 text-sm md:text-base">Electricity & Magnetism</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Electrostatics</li><li>Current Electricity</li><li>Magnetism</li><li>Electromagnetic Induction</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-primary dark:text-accent mb-2 text-sm md:text-base">Modern Physics</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Dual Nature of Matter</li><li>Atoms and Nuclei</li><li>Semiconductor Electronics</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Chemistry */}
                                <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                                    <div className="bg-slate-50 dark:bg-slate-800 p-3 md:p-4 font-black text-base md:text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Chemistry</div>
                                    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        <div>
                                            <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 text-sm md:text-base">Physical Chemistry</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Mole Concept</li><li>Thermodynamics</li><li>Chemical Equilibrium</li><li>Electrochemistry</li><li>Chemical Kinetics</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 text-sm md:text-base">Organic Chemistry</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Hydrocarbons</li><li>Alcohols, Phenols & Ethers</li><li>Aldehydes & Ketones</li><li>Carboxylic Acids</li><li>Biomolecules</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 text-sm md:text-base">Inorganic Chemistry</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Chemical Bonding</li><li>Coordination Compounds</li><li>Periodic Table</li><li>p-Block & d-Block</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Maths */}
                                <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                                    <div className="bg-slate-50 dark:bg-slate-800 p-3 md:p-4 font-black text-base md:text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Mathematics</div>
                                    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        <div>
                                            <h5 className="font-bold text-rose-600 dark:text-rose-400 mb-2 text-sm md:text-base">Algebra</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Complex Numbers</li><li>Quadratic Equations</li><li>Matrices & Determinants</li><li>Permutation & Combination</li><li>Probability</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-rose-600 dark:text-rose-400 mb-2 text-sm md:text-base">Calculus</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Limits</li><li>Differentiation</li><li>Integration</li><li>Differential Equations</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-rose-600 dark:text-rose-400 mb-2 text-sm md:text-base">Coordinate Geometry</h5>
                                            <ul className="text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 font-medium">
                                                <li>Straight Line & Circle</li><li>Parabola, Ellipse, Hyperbola</li><li>Vectors & 3D Geometry</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* New Updates Tab */}
                    {activeTab === 'updates' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4 md:space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">New Updates for JEE Main 2026</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg mb-4 md:mb-6">Important changes introduced by NTA:</p>

                            <ul className="space-y-3 md:space-y-4">
                                {[
                                    'Changes in examination centers (new centers added)',
                                    'Updated rules for photo and signature upload',
                                    'Improved identity verification process',
                                    'Simplified registration process',
                                    'NTA is introducing facial recognition verification to enhance exam security.'
                                ].map((update, i) => (
                                    <li key={i} className="flex gap-3 md:gap-4 items-start bg-slate-50 dark:bg-slate-800/50 p-3 md:p-4 rounded-xl">
                                        <div className="min-w-[24px] h-6 md:min-w-[32px] md:h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm md:text-base shrink-0">{i + 1}</div>
                                        <div className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed mt-0.5 md:mt-1 text-sm md:text-base">{update}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Documents Tab */}
                    {activeTab === 'documents' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4 md:space-y-6">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">Documents Required</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg mb-4 md:mb-6">Students will need the following documents while filling out the application form:</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {['Aadhaar card', 'Passport size photo', 'Signature', 'Category certificate (if applicable)', 'UDID certificate (for PwD candidates)'].map((doc, i) => (
                                    <div key={i} className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-4 md:p-5 rounded-xl shadow-sm hover:border-primary/30 dark:hover:border-accent/30 transition-colors flex items-center gap-3">
                                        <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-primary dark:text-accent shrink-0" />
                                        <span className="font-bold text-slate-700 dark:text-slate-300 text-sm md:text-base">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Result & Strategy Tab */}
                    {activeTab === 'strategy' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 md:space-y-10">

                            <div className="bg-blue-50 dark:bg-blue-900/10 p-5 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                <h3 className="text-lg md:text-2xl font-black text-blue-900 dark:text-blue-400 mb-3 md:mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> JEE Main Result & Scorecard
                                </h3>
                                <p className="text-blue-800 dark:text-blue-300 font-medium mb-4 text-sm md:text-base">
                                    The result for Session 2 is usually <strong className="font-bold bg-blue-200 dark:bg-blue-800/50 px-2 py-1 rounded">declared around April 20</strong>.
                                </p>
                                <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-2 md:gap-4 text-sm md:text-base">
                                    <span className="font-semibold text-blue-900 dark:text-blue-300">Official Portal:</span>
                                    <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold flex items-center gap-1 w-max">
                                        jeemain.nta.nic.in <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                                    </a>
                                </div>
                                <div className="mt-3 md:mt-4 text-xs md:text-sm font-medium text-blue-700 dark:text-blue-400 leading-relaxed">
                                    From here, students can fill the application form, download the admit card, and check their results.
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4 mb-4 md:mb-6">Preparation Strategy (Short Guide)</h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {[
                                        { tit: 'Solve Previous Year Questions', num: '1️⃣', clr: 'bg-emerald-50 dark:bg-emerald-900/10 text-emerald-900 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800' },
                                        { tit: 'Take Regular Mock Tests', num: '2️⃣', clr: 'bg-amber-50 dark:bg-amber-900/10 text-amber-900 dark:text-amber-300 border-amber-100 dark:border-amber-800' },
                                        { tit: 'Focus on High Weightage Chapters', num: '3️⃣', clr: 'bg-rose-50 dark:bg-rose-900/10 text-rose-900 dark:text-rose-300 border-rose-100 dark:border-rose-800' },
                                        { tit: 'Practice Time Management', num: '4️⃣', clr: 'bg-indigo-50 dark:bg-indigo-900/10 text-indigo-900 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800' },
                                    ].map((s, i) => (
                                        <div key={i} className={`p-3 md:p-4 rounded-xl border-2 font-bold flex items-center gap-3 text-sm md:text-base ${s.clr}`}>
                                            <span className="text-lg md:text-xl shrink-0">{s.num}</span> {s.tit}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
