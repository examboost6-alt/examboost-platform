"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Activity, DollarSign, MousePointerClick, Filter } from "lucide-react";
import { EmptyState } from "./Skeletons";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function OverviewTab({ dateRange, data }: { dateRange: string, data: any }) {
  
  const { kpis, revenueData, funnelData } = useMemo(() => {
    const { pageViews, purchases, userTests, profiles } = data;
    
    // 1. KPIs
    const totalRevenue = purchases.reduce((acc: number, curr: any) => acc + (Number(curr.amount) || 0), 0);
    const uniqueVisitors = new Set(pageViews.map((pv: any) => pv.user_id || pv.city + pv.device_type)).size;
    const convRate = uniqueVisitors > 0 ? ((purchases.length / uniqueVisitors) * 100).toFixed(1) : "0.0";
    
    const avgScore = userTests.length > 0 
       ? (userTests.reduce((acc: number, curr: any) => acc + (Number(curr.score) || 0), 0) / userTests.length).toFixed(1)
       : "0.0";

    const kpis = [
      { label: "Total Revenue", value: `₹${totalRevenue.toLocaleString()}`, change: "Real-time", isUp: true, icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-500" },
      { label: "Active Users", value: uniqueVisitors.toLocaleString(), change: "Real-time", isUp: true, icon: Users, color: "text-blue-500", bg: "bg-blue-500" },
      { label: "Conversion Rate", value: `${convRate}%`, change: "Real-time", isUp: true, icon: MousePointerClick, color: "text-indigo-500", bg: "bg-indigo-500" },
      { label: "Avg Test Score", value: `${avgScore}%`, change: "Real-time", isUp: true, icon: Target, color: "text-amber-500", bg: "bg-amber-500" },
    ];

    // 2. Revenue Trend Chart (Group by Day)
    const trendMap: Record<string, { name: string, revenue: number, active: number }> = {};
    pageViews.forEach((pv: any) => {
        const d = new Date(pv.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        if (!trendMap[d]) trendMap[d] = { name: d, revenue: 0, active: 0 };
        trendMap[d].active += 1;
    });
    purchases.forEach((p: any) => {
        const d = new Date(p.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        if (!trendMap[d]) trendMap[d] = { name: d, revenue: 0, active: 0 };
        trendMap[d].revenue += Number(p.amount) || 0;
    });
    
    // Sort array chronologically by creating dates and parsing them to sort
    const revenueData = Object.values(trendMap).sort((a,b) => new Date(`${a.name} ${new Date().getFullYear()}`).getTime() - new Date(`${b.name} ${new Date().getFullYear()}`).getTime());
    // Fallback empty scale
    if(revenueData.length === 0) {
      revenueData.push({ name: 'No Data', revenue: 0, active: 0 });
    }

    // 3. Funnel Data
    const signedUp = profiles.length;
    const boughtCourse = new Set(purchases.map((p:any) => p.user_id)).size;
    const attemptedTest = new Set(userTests.map((u:any) => u.user_id)).size;

    const funnelData = [
      { step: 'Visited Website', count: uniqueVisitors, percentage: 100 },
      { step: 'Signed Up', count: signedUp, percentage: uniqueVisitors ? Math.min(100, Math.round((signedUp / uniqueVisitors) * 100)) : 0 },
      { step: 'Bought Course', count: boughtCourse, percentage: uniqueVisitors ? Math.min(100, Math.round((boughtCourse / uniqueVisitors) * 100)) : 0 },
      { step: 'Attempted Test', count: attemptedTest, percentage: uniqueVisitors ? Math.min(100, Math.round((attemptedTest / uniqueVisitors) * 100)) : 0 },
    ];

    return { kpis, revenueData, funnelData };
  }, [data]);

  if (dateRange === "empty" || (!data.loading && data.pageViews.length === 0 && data.purchases.length === 0)) {
    return <EmptyState message="No traffic or activity logged for the selected dates." icon={Filter} />;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      
      {/* 1. KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${kpi.bg}/10 blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${kpi.bg}/10 ${kpi.color}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
              <div className={`px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold ${kpi.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                {kpi.change}
              </div>
            </div>
            <div className="text-3xl font-black text-slate-800 dark:text-white mb-1 relative z-10">{kpi.value}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest relative z-10">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* 2. Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        
        {/* Main Area Chart */}
        <div className="lg:col-span-5 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden view-chart">
           <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Revenue & Activity Pulse</h3>
                <p className="text-xs font-medium text-slate-500">Dual-axis aggregation for the current period.</p>
              </div>
           </div>
           
           <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area yAxisId="right" type="monotone" dataKey="active" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorActive)" />
              </AreaChart>
            </ResponsiveContainer>
           </div>
        </div>

        {/* Funnel Widget */}
        <div className="lg:col-span-2 bg-gradient-to-b from-indigo-900 to-slate-900 rounded-2xl border border-indigo-800 shadow-sm p-6 text-white relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <div className="mb-6 relative z-10">
             <h3 className="text-lg font-black tracking-tight">Conversion Funnel</h3>
             <p className="text-xs font-medium text-indigo-300 mt-1">Student journey drop-offs.</p>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10 w-full mt-2">
             {funnelData.map((step, i) => (
               <div key={i} className="flex flex-col relative group">
                  {i !== 0 && (
                     <div className="absolute -top-3 left-6 w-0.5 h-3 bg-indigo-800 z-0"></div>
                  )}
                  <div className="flex justify-between items-center z-10">
                     <span className="text-xs font-bold text-indigo-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> {step.step}
                     </span>
                     <span className="text-xs font-black text-white">{step.count.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2 mt-1.5 overflow-hidden">
                     <motion.div initial={{ width: 0 }} animate={{ width: `${step.percentage}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full bg-gradient-to-r from-indigo-500 to-blue-400"></motion.div>
                  </div>
                  <div className="text-[10px] text-indigo-400 font-bold mt-1 text-right">{step.percentage}% Retained</div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
