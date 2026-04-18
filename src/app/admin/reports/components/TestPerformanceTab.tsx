"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Cell } from "recharts";
import { Target, AlertTriangle, CheckCircle2, ChevronRight, X, Filter } from "lucide-react";
import { EmptyState } from "./Skeletons";

const subjectPerformanceData = [
  { subject: 'Physics', score: 65, fullMark: 100 },
  { subject: 'Chemistry', score: 78, fullMark: 100 },
  { subject: 'Math', score: 55, fullMark: 100 },
  { subject: 'Biology', score: 85, fullMark: 100 },
  { subject: 'English', score: 92, fullMark: 100 },
];

const difficultyData = [
  { name: 'Easy', completed: 85, failed: 15, color: '#10b981' },
  { name: 'Medium', completed: 60, failed: 40, color: '#f59e0b' },
  { name: 'Hard', completed: 25, failed: 75, color: '#ef4444' },
];

// Drill-down for most wrong questions context
const wrongQuestionsMockData = [
  { topic: 'Rotational Mechanics', wrongCount: 420 },
  { topic: 'Organic Synthesis', wrongCount: 380 },
  { topic: 'Calculus - Integration', wrongCount: 310 },
  { topic: 'Thermodynamics', wrongCount: 290 }
];

export default function TestPerformanceTab({ dateRange }: { dateRange: string }) {
  const [showWrongQuestions, setShowWrongQuestions] = useState(true);

  if (dateRange === "empty") {
    return <EmptyState message="No tests attempted in this period." icon={Filter} />;
  }

  return (
    <div className="space-y-6">
      
      {/* Top Banner indicating EdTech specific metric */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Target className="absolute -left-10 -bottom-10 w-48 h-48 opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl font-black tracking-tight mb-1 flex items-center gap-2"><CheckCircle2 className="w-6 h-6"/> Platform Quality Index</h2>
          <p className="text-amber-100 font-medium text-sm">Aggregated testing accuracy stands at <strong className="text-white">64.5%</strong> globally. Adjust test difficulties accordingly to optimize retention.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Radar Chart: Subject Performance */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight mb-6">Subject Weakness Matrix</h3>
          
          <div className="flex-1 h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={subjectPerformanceData}>
                <PolarGrid stroke="#cbd5e1" strokeOpacity={0.2} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }} />
                <Radar name="Avg Score" dataKey="score" stroke="#3b82f6" strokeWidth={2} fill="#3b82f6" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Difficulty Analysis & Most Wrong Questions */}
        <div className="space-y-6 flex flex-col">
          
          {/* Difficulty Bar Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative overflow-hidden flex-1">
             <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight mb-6">Success Rate by Difficulty</h3>
             <div className="w-full h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={difficultyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b', fontWeight: 'bold'}} dy={5}/>
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                    <RechartsTooltip cursor={{fill: '#f1f5f9', opacity: 0.1}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }} />
                    <Bar dataKey="completed" name="Success %" radius={[4, 4, 0, 0]}>
                      {difficultyData.map((entry, index) => (
                        <Cell key={\`cell-\${index}\`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </motion.div>

          {/* Most Wrong Questions Drill-down Box */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={\`bg-rose-50 dark:bg-rose-500/5 rounded-2xl border transition-colors \${showWrongQuestions ? 'border-rose-200 dark:border-rose-500/20 shadow-sm' : 'border-dashed border-rose-200 dark:border-rose-500/30'} p-1\`}>
             {showWrongQuestions ? (
               <div className="px-5 py-5 relative">
                  <button onClick={() => setShowWrongQuestions(false)} className="absolute top-4 right-4 p-1.5 rounded-lg text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors">
                     <X className="w-4 h-4" />
                  </button>
                  <h3 className="text-sm font-black text-rose-700 dark:text-rose-400 leading-tight mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <AlertTriangle className="w-4 h-4" /> Critical Knowledge Gaps
                  </h3>
                  <div className="space-y-3">
                     {wrongQuestionsMockData.map((gap, i) => (
                        <div key={i} className="flex justify-between items-center bg-white dark:bg-[#0f172a] p-3 rounded-xl border border-rose-100 dark:border-rose-500/10 shadow-sm">
                           <span className="font-bold text-slate-800 dark:text-white text-sm">{gap.topic}</span>
                           <span className="text-xs font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded">{gap.wrongCount} Fails</span>
                        </div>
                     ))}
                  </div>
               </div>
             ) : (
                <button onClick={() => setShowWrongQuestions(true)} className="w-full p-4 flex items-center justify-between text-rose-600 dark:text-rose-400 font-bold text-sm hover:bg-rose-100 dark:hover:bg-rose-500/10 rounded-xl transition-colors">
                   <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Reveal Critical Knowledge Gaps</span>
                   <ChevronRight className="w-4 h-4" />
                </button>
             )}
          </motion.div>

        </div>
      </div>

    </div>
  );
}
