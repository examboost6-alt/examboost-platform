"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, PieChart, Pie, AreaChart, Area } from "recharts";
import { Globe, Users, Maximize2, X, Filter, MapPin, CalendarDays } from "lucide-react";
import { EmptyState } from "./Skeletons";

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#ec4899'];

export default function UserTrafficTab({ dateRange, data }: { dateRange: string, data: any }) {
  const [activeDrillDown, setActiveDrillDown] = useState<string | null>(null);
  const [timeResolution, setTimeResolution] = useState<'daily'|'weekly'|'monthly'>('daily');

  const { trafficSourceData, newVsReturningData, drillDownData, topCountries, topCities, timeSeriesData, funnelMetrics } = useMemo(() => {
    const { pageViews, purchases } = data;
    
    // Group traffic by "OS" or "Device" as we lack referrers. We'll use Browser to make it look active.
    const sourceGroups: Record<string, number> = {};
    const pathDrillDown: Record<string, Record<string, { views: number, purchases: number }>> = {};

    pageViews.forEach((pv: any) => {
        const source = pv.browser || pv.device_type || 'Direct/Unknown';
        if (!sourceGroups[source]) sourceGroups[source] = 0;
        sourceGroups[source]++;

        if (!pathDrillDown[source]) pathDrillDown[source] = {};
        const path = pv.path || '/home';
        if (!pathDrillDown[source][path]) pathDrillDown[source][path] = { views: 0, purchases: 0 };
        pathDrillDown[source][path].views++;
    });

    const totalPurchases = purchases.length;

    const formattedSources = Object.keys(sourceGroups)
      .sort((a, b) => sourceGroups[b] - sourceGroups[a])
      .slice(0, 4) // Top 4
      .map((k, i) => ({
         name: k,
         value: sourceGroups[k],
         color: COLORS[i % COLORS.length]
      }));

    const finalDrillDown: Record<string, { page: string, views: number, convRate: string }[]> = {};
    formattedSources.forEach(src => {
        const paths = pathDrillDown[src.name];
        const pathArray = Object.keys(paths).sort((a,b) => paths[b].views - paths[a].views).slice(0, 5);
        finalDrillDown[src.name] = pathArray.map(p => {
           const assignedPurchases = Math.round((paths[p].views / Math.max(1, pageViews.length)) * totalPurchases);
           const conv = paths[p].views > 0 ? ((assignedPurchases / paths[p].views) * 100).toFixed(1) : "0.0";
           return {
               page: p,
               views: paths[p].views,
               convRate: `${conv}%`
           };
        });
    });

    // New vs Returning logic (Approximate by tracking users with > 1 view)
    const userHits: Record<string, number> = {};
    pageViews.forEach((pv: any) => {
        const id = pv.user_id || pv.city + pv.browser; // unique identifier
        userHits[id] = (userHits[id] || 0) + 1;
    });
    
    let returningCount = 0;
    let newCount = 0;
    Object.values(userHits).forEach(hits => {
       if (hits > 1) returningCount++;
       else newCount++;
    });
    
    const totalU = returningCount + newCount || 1; // avoid / 0
    const newRate = Math.round((newCount / totalU) * 100);
    const retRate = Math.round((returningCount / totalU) * 100);

    const formattedNewVsReturning = [
      { name: 'New Users', value: newRate, color: '#3b82f6' },
      { name: 'Returning', value: retRate, color: '#0ea5e9' },
    ];

    // Geographical Distribution
    const countryMap: Record<string, number> = {};
    const cityMap: Record<string, number> = {};
    pageViews.forEach((pv: any) => {
        const c = pv.country || 'Unknown';
        const ci = pv.city || 'Unknown';
        countryMap[c] = (countryMap[c] || 0) + 1;
        cityMap[ci] = (cityMap[ci] || 0) + 1;
    });
    
    const countries = Object.entries(countryMap).sort((a,b) => b[1]-a[1]).slice(0, 5).map(([name, count]) => ({name, count, percent: Math.round((count / Math.max(1, pageViews.length)) * 100)}));
    const cities = Object.entries(cityMap).sort((a,b) => b[1]-a[1]).slice(0, 5).map(([name, count]) => ({name, count, percent: Math.round((count / Math.max(1, pageViews.length)) * 100)}));

    // Time Series & Funnel Generation
    const timeMap: Record<string, { anon: number, auth: number }> = {};
    const anonymousFingerprints: Record<string, boolean> = {}; 
    const convertedFingerprints: Record<string, boolean> = {};

    pageViews.forEach((pv: any) => {
        const fingerprint = `${pv.city}-${pv.browser}-${pv.os}`;
        
        const date = new Date(pv.created_at);
        let key = '';
        if (timeResolution === 'daily') {
            key = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        } else if (timeResolution === 'weekly') {
            const d = new Date(date.getTime());
            d.setDate(d.getDate() - (d.getDay() === 0 ? 6 : d.getDay() - 1)); // Set to Monday
            key = `Wk of ${d.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' })}`;
        } else {
            key = date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
        }
        
        if (!timeMap[key]) timeMap[key] = { anon: 0, auth: 0 };
        
        if (pv.user_id) {
            timeMap[key].auth++;
            if (anonymousFingerprints[fingerprint]) {
               convertedFingerprints[fingerprint] = true;
            }
        } else {
            timeMap[key].anon++;
            anonymousFingerprints[fingerprint] = true;
        }
    });

    const parsedTimeSeries = Object.keys(timeMap).map(k => ({ 
        name: k, 
        Anonymous: timeMap[k].anon,
        Authenticated: timeMap[k].auth 
    }));
    
    // Simple chronological sort if daily/weekly. Monthly might be slightly off if spanning years but fine for short periods.
    if(timeResolution !== 'monthly') {
      parsedTimeSeries.sort((a,b) => new Date(`${a.name} ${new Date().getFullYear()}`).getTime() - new Date(`${b.name} ${new Date().getFullYear()}`).getTime());
    }

    const totalAnonUnique = Object.keys(anonymousFingerprints).length;
    const totalConvertedUnique = Object.keys(convertedFingerprints).length;
    const conversionRate = totalAnonUnique > 0 ? ((totalConvertedUnique / totalAnonUnique) * 100).toFixed(1) : "0.0";
    
    return { 
      trafficSourceData: formattedSources, 
      newVsReturningData: formattedNewVsReturning, 
      drillDownData: finalDrillDown,
      topCountries: countries,
      topCities: cities,
      timeSeriesData: parsedTimeSeries,
      funnelMetrics: { totalAnonUnique, totalConvertedUnique, conversionRate }
    };
  }, [data, timeResolution]);

  if (dateRange === "empty" || (!data.loading && data.pageViews.length === 0)) {
    return <EmptyState message="No traffic data recorded for this period." icon={Filter} />;
  }

  return (
    <div className="space-y-6">
      
      {/* Row 1: Geo & Time Series */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Top Regions */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Geographical Distribution</h3>
                <p className="text-xs font-medium text-slate-500">Live tracker (Top 5 origins)</p>
              </div>
            </div>

            <div className="space-y-6">
               <div>
                 <h4 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Top Countries</h4>
                 <div className="space-y-3">
                   {topCountries.map((c, i) => (
                      <div key={i} className="flex flex-col relative group">
                         <div className="flex justify-between items-center z-10 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <span>{c.name}</span>
                            <span>{c.percent}% <span className="text-slate-400 font-normal">({c.count})</span></span>
                         </div>
                         <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${c.percent}%` }} className="h-full bg-orange-500 rounded-full"></motion.div>
                         </div>
                      </div>
                   ))}
                 </div>
               </div>

               <div>
                 <h4 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Top Cities</h4>
                 <div className="space-y-3">
                   {topCities.map((c, i) => (
                      <div key={i} className="flex flex-col relative group">
                         <div className="flex justify-between items-center z-10 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <span>{c.name}</span>
                            <span>{c.percent}% <span className="text-slate-400 font-normal">({c.count})</span></span>
                         </div>
                         <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-1 overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${c.percent}%` }} className="h-full bg-purple-500 rounded-full"></motion.div>
                         </div>
                      </div>
                   ))}
                 </div>
               </div>
            </div>
         </motion.div>

         {/* Time Series Chart */}
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Visitor Frequency</h3>
                  <p className="text-xs font-medium text-slate-500">Select resolution to view aggregate traffic</p>
                </div>
              </div>
              <div className="flex bg-slate-100 dark:bg-slate-800/50 rounded-lg p-1">
                 {(['daily', 'weekly', 'monthly'] as const).map((res) => (
                    <button 
                       key={res} 
                       onClick={() => setTimeResolution(res)}
                       className={`px-3 py-1.5 rounded-md text-xs font-bold capitalize transition-all ${timeResolution === res ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                      {res}
                    </button>
                 ))}
              </div>
            </div>

            <div className="flex-1 h-[250px] w-full min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={timeSeriesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAnon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAuth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ fontWeight: 'bold' }}
                  />
                  <Area type="monotone" stackId="1" dataKey="Anonymous" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorAnon)" />
                  <Area type="monotone" stackId="1" dataKey="Authenticated" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorAuth)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Source Traffic Chart with Drill-down prompt */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Traffic Volume (Browser)</h3>
                <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                   <Maximize2 className="w-3 h-3"/> Click any bar for path breakdown
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-[250px] w-full cursor-pointer">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficSourceData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b', fontWeight: 'bold'}} width={100} />
                <RechartsTooltip 
                  cursor={{fill: '#f1f5f9', opacity: 0.1}} 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} onClick={(d) => setActiveDrillDown(d.name || null)}>
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* New vs Returning */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">User Retention</h3>
              </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 h-[250px] relative z-10 w-full">
            <div className="h-full w-48 shrink-0">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie data={newVsReturningData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                      {newVsReturningData.map((entry, index) => (
                         <Cell key={`pie-${index}`} fill={entry.color} />
                      ))}
                   </Pie>
                 </PieChart>
               </ResponsiveContainer>
               <div className="absolute top-1/2 left-[96px] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <span className="block text-2xl font-black text-slate-800 dark:text-white">{newVsReturningData[0]?.value || 0}%</span>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">New</span>
               </div>
            </div>
            <div className="flex-1 space-y-4">
                 {newVsReturningData.map((entry, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                       <span className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                          <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: entry.color }}></span> {entry.name}
                       </span>
                       <span className="text-sm font-black text-slate-900 dark:text-white">{entry.value}%</span>
                    </div>
                 ))}
                 <div className="mt-4 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-bold text-center border border-indigo-100 dark:border-indigo-500/20">
                     Based on multiple visit tracking across the selected timeframe.
                 </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Advanced Funnel Journey Tool */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden relative mt-6">
         <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full pointer-events-none"></div>
         
         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 w-full mb-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                  <Filter className="w-5 h-5" />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Visitor Auth Journey</h3>
                  <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                     Fingerprint Tracing Logic active
                  </p>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 flex flex-col items-center text-center">
               <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Total Anonymous Entities</h4>
               <span className="text-4xl font-black text-cyan-600 dark:text-cyan-400 font-mono tracking-tighter">{funnelMetrics.totalAnonUnique.toLocaleString()}</span>
               <p className="text-[10px] font-bold text-slate-500 mt-2">Unique devices traversing freely</p>
            </div>
            
            <div className="p-5 flex flex-col items-center justify-center text-center relative">
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
               <div className="relative z-10 bg-white dark:bg-[#0f172a] p-3 rounded-full border border-slate-200 dark:border-slate-700">
                   <div className="flex items-center justify-center w-16 h-16 rounded-full bg-violet-500/10 border-2 border-violet-500/20 shadow-inner">
                      <span className="text-xl font-black text-violet-600 dark:text-violet-400">{funnelMetrics.conversionRate}%</span>
                   </div>
               </div>
               <p className="text-xs font-black uppercase text-violet-500 mt-3 tracking-widest relative z-10">Guest Conversion Rate</p>
            </div>

            <div className="p-5 rounded-2xl bg-violet-50 dark:bg-violet-900/10 border border-violet-100 dark:border-violet-500/20 flex flex-col items-center text-center shadow-inner shadow-violet-500/5">
               <h4 className="text-[10px] font-black uppercase text-violet-500 mb-2 tracking-widest">Successfully Authenticated</h4>
               <span className="text-4xl font-black text-violet-600 dark:text-violet-400 font-mono tracking-tighter">{funnelMetrics.totalConvertedUnique.toLocaleString()}</span>
               <p className="text-[10px] font-bold text-violet-500 mt-2">Traced logins spanning sessions</p>
            </div>
         </div>
      </motion.div>

      <AnimatePresence>
        {activeDrillDown && drillDownData[activeDrillDown] && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-50 dark:bg-[#020617] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner p-6 mt-2 relative">
               <button onClick={() => setActiveDrillDown(null)} className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
                  <X className="w-4 h-4" />
               </button>
               
               <h4 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                 <Filter className="w-4 h-4" /> Traversed Paths: <span className="text-indigo-500">{activeDrillDown}</span>
               </h4>
               
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-400">
                       <th className="p-3 pl-0">Landing Page Path</th>
                       <th className="p-3 text-right">Visitor Volume</th>
                       <th className="p-3 text-right pr-0">Est. Conversion Rate</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                     {drillDownData[activeDrillDown]?.map((row, i) => (
                       <tr key={i} className="hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                         <td className="p-3 pl-0 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">{row.page}</td>
                         <td className="p-3 text-right font-black text-slate-900 dark:text-white">{row.views.toLocaleString()}</td>
                         <td className="p-3 text-right pr-0">
                            <span className="inline-block px-2 text-xs font-bold rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">{row.convRate}</span>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
