"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { Globe, Users, Maximize2, X, Filter } from "lucide-react";
import { EmptyState } from "./Skeletons";

const trafficSourceData = [
  { name: 'Google Search', value: 4500, color: '#10b981' },
  { name: 'Direct Traffic', value: 3200, color: '#3b82f6' },
  { name: 'Social Media', value: 2100, color: '#8b5cf6' },
  { name: 'Paid Ads', value: 1500, color: '#f59e0b' },
];

const newVsReturningData = [
  { name: 'New Users', value: 65, color: '#3b82f6' },
  { name: 'Returning', value: 35, color: '#0ea5e9' },
];

// Drill-down data mapping
const drillDownData: Record<string, { page: string, views: number, convRate: string }[]> = {
  'Google Search': [
    { page: '/home', views: 2100, convRate: '4.2%' },
    { page: '/course/jee-mains', views: 1200, convRate: '6.8%' },
    { page: '/blog/study-tips', views: 800, convRate: '1.2%' }
  ],
  'Direct Traffic': [
    { page: '/dashboard', views: 1500, convRate: 'N/A' },
    { page: '/home', views: 1000, convRate: '8.4%' }
  ],
  'Social Media': [
    { page: '/offer/diwali-sale', views: 1800, convRate: '12.5%' },
    { page: '/home', views: 300, convRate: '2.1%' }
  ],
  'Paid Ads': [
    { page: '/landing/neet-crash-course', views: 1000, convRate: '9.2%' },
    { page: '/course/jee-mains', views: 500, convRate: '7.4%' }
  ]
};

export default function UserTrafficTab({ dateRange }: { dateRange: string }) {
  const [activeDrillDown, setActiveDrillDown] = useState<string | null>(null);

  if (dateRange === "empty") {
    return <EmptyState message="No traffic data recorded for this period." icon={Filter} />;
  }

  const handleBarClick = (data: any) => {
    setActiveDrillDown(data.name);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Source Traffic Chart with Drill-down prompt */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">Traffic Sources</h3>
                <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                   <Maximize2 className="w-3 h-3"/> Click any bar for page breakdown
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
                <Bar dataKey="value" radius={[0, 4, 4, 0]} onClick={handleBarClick}>
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={\`cell-\${index}\`} fill={entry.color} className="hover:opacity-80 transition-opacity" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* New vs Returning */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden relative">
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
                         <Cell key={\`pie-\${index}\`} fill={entry.color} />
                      ))}
                   </Pie>
                 </PieChart>
               </ResponsiveContainer>
               <div className="absolute top-1/2 left-[96px] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <span className="block text-2xl font-black text-slate-800 dark:text-white">65%</span>
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
                     Solid retention rate! User return rate is up 4% from last week.
                 </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Drill-down Modal UI directly integrated for seamless feel */}
      <AnimatePresence>
        {activeDrillDown && (
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
                 <Filter className="w-4 h-4" /> Detailed Breakdown: <span className="text-indigo-500">{activeDrillDown}</span>
               </h4>
               
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-400">
                       <th className="p-3 pl-0">Landing Page Path</th>
                       <th className="p-3 text-right">Visitor Volume</th>
                       <th className="p-3 text-right pr-0">Conversion Rate</th>
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
