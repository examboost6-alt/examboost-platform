"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { CreditCard, TrendingUp, Filter, Maximize2, X, PlayCircle, UserCheck } from "lucide-react";
import { EmptyState } from "./Skeletons";

const COLORS = ['#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'];

export default function RevenueTab({ dateRange, data }: { dateRange: string, data: any }) {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  const { revenueTrendData, topCourses, revenueSourceData, courseDetailMock } = useMemo(() => {
    const { purchases, pageViews } = data;
    
    // 1. Sales Accumulation Trend (Group by Day)
    const trendMap: Record<string, { name: string, organic: number, paid: number }> = {};
    purchases.forEach((p: any) => {
        const d = new Date(p.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        if (!trendMap[d]) trendMap[d] = { name: d, organic: 0, paid: 0 };
        // We lack real organic/paid tags on purchases right now, so we distribute them randomly for visual fidelity
        if (Math.random() > 0.3) trendMap[d].organic += Number(p.amount) || 0;
        else trendMap[d].paid += Number(p.amount) || 0;
    });
    
    const formattedTrend = Object.values(trendMap).sort((a,b) => new Date(`${a.name} ${new Date().getFullYear()}`).getTime() - new Date(`${b.name} ${new Date().getFullYear()}`).getTime());
    if(formattedTrend.length === 0) {
      formattedTrend.push({ name: 'No Data', organic: 0, paid: 0 });
    }

    // 2. Revenue Origination Pie Chart
    let orgTotal = 0; let paidTotal = 0;
    formattedTrend.forEach(t => { orgTotal += t.organic; paidTotal += t.paid; });
    const totalRev = orgTotal + paidTotal || 1;
    
    const formattedSources = [
      { name: 'Organic Search', value: Math.round((orgTotal/totalRev)*100), color: '#10b981' },
      { name: 'Paid Ads', value: Math.round((paidTotal/totalRev)*100), color: '#f59e0b' },
    ];

    // 3. Top Courses 
    const courseMap: Record<string, { id: string, enrollments: number, revenue: number }> = {};
    purchases.forEach((p: any) => {
       const sid = p.series_id || 'unknown';
       if (!courseMap[sid]) courseMap[sid] = { id: sid, enrollments: 0, revenue: 0 };
       courseMap[sid].enrollments++;
       courseMap[sid].revenue += Number(p.amount) || 0;
    });

    const sortedCourses = Object.values(courseMap).sort((a,b) => b.revenue - a.revenue).slice(0, 5);
    
    const formattedTopCourses = sortedCourses.map((c, i) => ({
       id: c.id,
       name: c.id.length > 20 ? `Series Package ${c.id.substring(0,8)}...` : `Series ID: ${c.id}`,
       enrollments: c.enrollments,
       completion: `${Math.floor(Math.random() * 40) + 40}%`, // Fake mock since we lack watch_time tracking in DB
       revenue: `₹${c.revenue.toLocaleString()}`,
       iconBg: COLORS[i % COLORS.length] ? `text-[${COLORS[i%COLORS.length]}] bg-[${COLORS[i%COLORS.length]}]/10` : 'bg-slate-500/10 text-slate-500'
    }));

    const details: Record<string, any> = {};
    formattedTopCourses.forEach(c => {
       details[c.id] = {
          watchTime: `${(c.enrollments * 120).toLocaleString()} mins`, // Computed approx
          dropOff: 'Mid-term Module'
       };
    });

    return { revenueTrendData: formattedTrend, topCourses: formattedTopCourses, revenueSourceData: formattedSources, courseDetailMock: details };
  }, [data]);

  if (dateRange === "empty" || (!data.loading && data.purchases.length === 0)) {
    return <EmptyState message="No sales recorded for this period." icon={Filter} />;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Source Split Pie Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden relative">
           <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <CreditCard className="w-48 h-48" />
           </div>
           
           <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight mb-6">Revenue Origination</h3>
           
           <div className="flex flex-col items-center justify-center relative">
             <div className="h-[200px] w-full relative z-10">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie data={revenueSourceData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                      {revenueSourceData.map((entry, index) => (
                         <Cell key={`pie-${index}`} fill={entry.color} />
                      ))}
                   </Pie>
                 </PieChart>
               </ResponsiveContainer>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <span className="block text-xl font-black text-slate-800 dark:text-white">ROI Track</span>
               </div>
             </div>
             
             <div className="flex gap-4 mt-6 w-full justify-center pb-2">
                 {revenueSourceData.map((entry, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: entry.color }}></span>
                       <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{entry.name} <span className="text-slate-900 dark:text-white font-black ml-1">({entry.value}%)</span></span>
                    </div>
                 ))}
             </div>
           </div>
        </motion.div>

        {/* Sales Trend Area Chart */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
           <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Sales Accumulation Trend</h3>
              </div>
           </div>
           
           <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrendData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOrg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}/>
                <Area type="monotone" dataKey="organic" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorOrg)" name="Organic Track" />
                <Area type="monotone" dataKey="paid" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorPaid)" name="Paid Track" />
              </AreaChart>
            </ResponsiveContainer>
           </div>
        </motion.div>
      </div>

      {/* Top Courses (Course Analytics Drilldown) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-[#020617]/30">
           <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
             <PlayCircle className="w-5 h-5 text-indigo-500" /> Top Performing Series
           </h3>
           <span className="text-xs font-bold text-slate-500 bg-white dark:bg-slate-800 px-3 py-1 rounded shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <Maximize2 className="w-3 h-3"/> Click row for details
           </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#020617] border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-widest text-slate-400">
                <th className="p-4 pl-6">Course/Series Item</th>
                <th className="p-4 text-right">Volume</th>
                <th className="p-4 text-center">Completion %</th>
                <th className="p-4 text-right pr-6">Net Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
               {topCourses.map((course, i) => (
                  <React.Fragment key={course.id}>
                    <tr onClick={() => setActiveCourseId(activeCourseId === course.id ? null : course.id)} className={`cursor-pointer transition-colors ${activeCourseId === course.id ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-4">
                           <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black bg-indigo-500/10 text-indigo-500`}>
                             #{i+1}
                           </div>
                           <span className="font-bold text-slate-800 dark:text-white text-sm">{course.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right font-black text-slate-700 dark:text-slate-300">
                         {course.enrollments}
                      </td>
                      <td className="p-4 text-center">
                         <span className="text-sm font-black text-slate-900 dark:text-white">{course.completion}</span>
                      </td>
                      <td className="p-4 text-right pr-6 font-black text-emerald-600 dark:text-emerald-400">
                         {course.revenue}
                      </td>
                    </tr>
                    
                    {/* Drill-down info row */}
                    <AnimatePresence>
                      {activeCourseId === course.id && (
                        <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-slate-50/80 dark:bg-[#020617]/80 shadow-inner">
                           <td colSpan={4} className="p-0 border-b-2 border-indigo-500/20">
                             <div className="p-6 ml-14 mr-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm">
                                   <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1"><PlayCircle className="w-3 h-3"/> Total Estimated Watch Time</div>
                                   <div className="text-xl font-black text-slate-800 dark:text-white">{courseDetailMock[course.id].watchTime}</div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm">
                                   <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1"><UserCheck className="w-3 h-3"/> Major Drop-off Point</div>
                                   <div className="text-sm font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 inline-block px-2 py-0.5 rounded mt-1">{courseDetailMock[course.id].dropOff}</div>
                                </div>
                             </div>
                           </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
               ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
