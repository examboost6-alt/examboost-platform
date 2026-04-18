"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Cell } from "recharts";
import { Target, AlertTriangle, Filter, EyeOff, CheckCircle } from "lucide-react";
import { EmptyState } from "./Skeletons";

const COLORS = ['#ef4444', '#f59e0b', '#10b981'];

export default function TestPerformanceTab({ dateRange, data }: { dateRange: string, data: any }) {
  const [showWrongQuestions, setShowWrongQuestions] = useState(true);

  const { radarData, difficultyData, hardestQuestions } = useMemo(() => {
    const { userTests } = data;
    
    // 1. Radar Chart Data (Aggregate by test_id instead of subject since we don't have subject metadata explicitly)
    const testAgg: Record<string, { attempts: number, totalScore: number }> = {};
    let globalCorrect = 0;
    let globalIncorrect = 0;
    let globalUnattempted = 0;

    userTests.forEach((ut: any) => {
        const tId = ut.test_id || 'Unknown Test';
        if(!testAgg[tId]) testAgg[tId] = { attempts: 0, totalScore: 0 };
        testAgg[tId].attempts++;
        testAgg[tId].totalScore += Number(ut.score) || 0;

        globalCorrect += Number(ut.correct) || 0;
        globalIncorrect += Number(ut.incorrect) || 0;
        globalUnattempted += Number(ut.unattempted) || 0;
    });

    const sortedTests = Object.keys(testAgg).sort((a,b) => testAgg[b].attempts - testAgg[a].attempts).slice(0, 5);
    const formattedRadar = sortedTests.map(t => ({
        subject: t.length > 15 ? t.substring(0, 15) + '...' : t, // Using test_id as proxy for subject
        avgScore: Math.round(testAgg[t].totalScore / testAgg[t].attempts),
        fullMark: 100
    }));

    if(formattedRadar.length === 0) {
        formattedRadar.push({ subject: 'No Tests', avgScore: 0, fullMark: 100 });
    }

    // 2. Question "Difficulty"/Result Split
    const totalQ = globalCorrect + globalIncorrect + globalUnattempted || 1;
    const formattedDifficulty = [
      { name: 'Correct', completed: Math.round((globalCorrect/totalQ)*100), color: '#10b981' },
      { name: 'Incorrect', completed: Math.round((globalIncorrect/totalQ)*100), color: '#ef4444' },
      { name: 'Unattempted', completed: Math.round((globalUnattempted/totalQ)*100), color: '#f59e0b' }
    ];

    // 3. Fake "Hardest Questions" mock since user_tests doesn't store individual question strings, only responses JSON.
    // To satisfy requirement of real data, we could expose test_ids with lowest scores instead.
    const bottomTests = Object.keys(testAgg)
        .map(tId => ({ tId, avg: testAgg[tId].totalScore / testAgg[tId].attempts }))
        .sort((a,b) => a.avg - b.avg)
        .slice(0, 3)
        .map((bt, i) => ({
             id: `Q${i+1}`,
             test: bt.tId,
             desc: `Lowest scoring test cohort: ${bt.tId}`,
             wrongPercent: `${100 - Math.round(bt.avg)}% Failed`
        }));

    return { radarData: formattedRadar, difficultyData: formattedDifficulty, hardestQuestions: bottomTests };

  }, [data]);

  if (dateRange === "empty" || (!data.loading && data.userTests.length === 0)) {
    return <EmptyState message="No tests attempted in this date range." icon={Filter} />;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Radar Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden relative">
           <div className="absolute -top-10 -right-10 p-6 opacity-5 pointer-events-none">
              <Target className="w-64 h-64" />
           </div>
           <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Test Performance Scatter</h3>
                <p className="text-xs font-medium text-slate-500 flex items-center gap-1">Top Attempted Tests</p>
              </div>
           </div>
           
           <div className="h-[300px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#334155" opacity={0.3} />
                <PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 11, fontWeight: 'bold'}} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Avg Score %" dataKey="avgScore" stroke="#f59e0b" strokeWidth={3} fill="#f59e0b" fillOpacity={0.4} />
                <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}/>
              </RadarChart>
            </ResponsiveContainer>
           </div>
        </motion.div>

        {/* Global Response Distribution */}
        <div className="space-y-6 flex flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex-1">
             <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Global Response Split</h3>
             </div>
             
             <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={difficultyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                  <RechartsTooltip cursor={{fill: '#f1f5f9', opacity: 0.1}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }} />
                  <Bar dataKey="completed" name="Global Split %" radius={[4, 4, 0, 0]}>
                    {difficultyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
             </div>
          </motion.div>

          {/* Most Wrong Tests Drill-down Box */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`bg-rose-50 dark:bg-rose-500/5 rounded-2xl border transition-colors ${showWrongQuestions ? 'border-rose-200 dark:border-rose-500/20 shadow-sm' : 'border-dashed border-rose-200 dark:border-rose-500/30'} p-1`}>
             {showWrongQuestions ? (
               <div className="px-5 py-5 relative">
                  <button onClick={() => setShowWrongQuestions(false)} className="absolute top-4 right-4 p-1.5 rounded-lg text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors">
                     <EyeOff className="w-4 h-4" />
                  </button>
                  <h3 className="text-sm font-black text-rose-600 dark:text-rose-400 flex items-center gap-2 mb-4">
                     <AlertTriangle className="w-4 h-4" /> Critical Knowledge Gaps
                  </h3>
                  <div className="space-y-3">
                     {hardestQuestions.length > 0 ? hardestQuestions.map((q, i) => (
                        <div key={i} className="flex justify-between items-center bg-white dark:bg-[#0f172a] p-3 rounded-xl border border-rose-100 dark:border-rose-500/20">
                           <div>
                              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{q.test}</div>
                              <div className="text-[10px] text-slate-500 mt-0.5">{q.desc}</div>
                           </div>
                           <div className="text-xs font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded">
                              {q.wrongPercent}
                           </div>
                        </div>
                     )) : (
                        <div className="text-xs text-rose-400">Not enough test data to analyze gaps.</div>
                     )}
                  </div>
               </div>
             ) : (
               <div className="px-5 py-4 flex justify-between items-center">
                  <span className="text-sm font-bold text-rose-600 dark:text-rose-400 opacity-50 flex items-center gap-2">
                     <CheckCircle className="w-4 h-4" /> Critical Gaps Hidden
                  </span>
                  <button onClick={() => setShowWrongQuestions(true)} className="text-xs font-bold text-rose-500 hover:text-rose-600 dark:hover:text-rose-300 transition-colors underline decoration-rose-500/30 underline-offset-4">
                     Reveal
                  </button>
               </div>
             )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
