"use client";

import { motion } from "framer-motion";
import { BarChart as BarChartIcon, Download, PieChart, TrendingUp } from "lucide-react";

export default function AdminReports() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Reports & Analytics</h1>
          <p className="text-slate-500 font-medium">Deep dive into platform usage, academic performance, and conversions.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
          <Download className="w-4 h-4" /> Download Full PDF Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mock Chart 1: Academic Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Average Student Scores</h2>
            </div>
            <select className="bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-lg px-3 py-1 font-medium outline-none">
              <option>JEE Main</option>
              <option>NEET UG</option>
              <option>SSC CGL</option>
            </select>
          </div>
          
          <div className="flex-1 flex flex-col justify-end pt-8 pb-2 relative h-64 border-b border-slate-100 dark:border-slate-800">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
              {[100, 75, 50, 25, 0].map(val => (
                <div key={val} className="w-full h-px bg-slate-100 dark:bg-slate-800/50 relative">
                  <span className="absolute -left-2 -translate-y-1/2 text-[10px] text-slate-400 font-medium">{val}%</span>
                </div>
              ))}
            </div>
            
            {/* Line chart mock visualization using CSS */}
            <svg className="w-full h-full absolute inset-0 z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path 
                d="M 0 80 Q 15 70, 25 60 T 50 50 T 75 35 T 100 20" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-primary dark:text-accent"
              />
              <path 
                d="M 0 80 Q 15 70, 25 60 T 50 50 T 75 35 T 100 20 L 100 100 L 0 100 Z" 
                fill="currentColor" 
                className="text-primary/10 dark:text-accent/10"
              />
            </svg>
            
            <div className="flex justify-between w-full z-20 px-2 mt-4 text-xs font-semibold text-slate-400">
              <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Week 5</span><span>Week 6</span>
            </div>
          </div>
        </motion.div>

        {/* Mock Chart 2: Category Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <PieChart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Signups by Category</h2>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 h-64">
            {/* Mock Pie Chart (CSS conic gradient) */}
            <div className="w-48 h-48 rounded-full shrink-0 relative" style={{
              background: `conic-gradient(
                #3b82f6 0% 45%, 
                #10b981 45% 75%, 
                #f59e0b 75% 90%, 
                #8b5cf6 90% 100%
              )`
            }}>
              <div className="absolute inset-4 bg-white dark:bg-[#0f172a] rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-slate-800 dark:text-white">25k</span>
                <span className="text-xs font-semibold text-slate-500">Total</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full">
              {[
                { name: "Engineering (JEE)", color: "bg-blue-500", percent: "45%" },
                { name: "Medical (NEET)", color: "bg-emerald-500", percent: "30%" },
                { name: "SSC & Banking", color: "bg-amber-500", percent: "15%" },
                { name: "UPSC & State PSC", color: "bg-violet-500", percent: "10%" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-black text-slate-800 dark:text-white">{item.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Test completion stats */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <BarChartIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Top Tests Analytics</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {[
              { title: "JEE Main Physics Chapter 4 Mock", attempts: "12,450", avgScore: "68%", passRate: "42%" },
              { title: "NEET Zoology Full Length 1", attempts: "9,800", avgScore: "82%", passRate: "70%" },
              { title: "SSC CGL Math Shortcut Test", attempts: "8,210", avgScore: "55%", passRate: "25%" },
              { title: "UPSC History NCERT Revision", attempts: "4,500", avgScore: "75%", passRate: "65%" },
            ].map((test, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 last:pb-0 last:border-0">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{test.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">Test ID: TS-{1000 + i}</p>
                </div>
                <div className="grid grid-cols-3 gap-6 md:w-1/2">
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">Total Attempts</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{test.attempts}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">Avg Score</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{test.avgScore}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400">Pass Rate</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{test.passRate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
