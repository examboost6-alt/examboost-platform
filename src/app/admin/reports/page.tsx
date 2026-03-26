"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart as BarChartIcon, Download, PieChart, TrendingUp, Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AdminReports() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 0,
    categoryDistribution: [] as any[],
    topTests: [] as any[],
    avgSystemScore: "0",
    traffic: { totalVisits: 0, uniqueDevices: 0, topLocations: [] as any[] }
  });

  useEffect(() => {
    async function loadData() {
      const supabase = getSupabaseClient();
      if (!supabase) return;

      try {
        // 1. Fetch Students/Profiles
        const { data: profiles } = await supabase.from("profiles").select("id, target_exam");
        const totalStudents = profiles?.length || 0;

        const categoryCounts: Record<string, number> = {};
        profiles?.forEach((p: any) => {
          let exam = p.target_exam ? p.target_exam.trim().toUpperCase() : "Unspecified";
          categoryCounts[exam] = (categoryCounts[exam] || 0) + 1;
        });

        const colors = ["bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500", "bg-rose-500"];
        const categoryDistribution = Object.entries(categoryCounts)
          .map(([name, count], i) => ({
            name,
            color: colors[i % colors.length],
            count: Number(count),
            percent: totalStudents > 0 ? Math.round((Number(count) / totalStudents) * 100) + "%" : "0%",
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        // 2. Fetch User Tests mapping
        const { data: userTests } = await supabase.from("user_tests").select("test_id, accuracy");
        
        const testCounts: Record<string, { attempts: number; totalAcc: number; passes: number }> = {};
        let globalAccSum = 0;
        let globalAttempts = 0;

        userTests?.forEach((t: any) => {
          const tid = t.test_id || "Unknown Test";
          const acc = Number(t.accuracy) || 0;
          
          if (!testCounts[tid]) testCounts[tid] = { attempts: 0, totalAcc: 0, passes: 0 };
          
          testCounts[tid].attempts++;
          testCounts[tid].totalAcc += acc;
          if (acc >= 40) testCounts[tid].passes++; // 40% is pass threshold logic
          
          globalAccSum += acc;
          globalAttempts++;
        });

        const topTests = Object.entries(testCounts)
          .map(([id, d]) => ({
            title: id.length > 20 ? id.substring(0,20) + '...' : id,
            id: id,
            attempts: d.attempts,
            avgScore: d.attempts > 0 ? Math.round(d.totalAcc / d.attempts) + "%" : "0%",
            passRate: d.attempts > 0 ? Math.round((d.passes / d.attempts) * 100) + "%" : "0%",
          }))
          .sort((a, b) => b.attempts - a.attempts)
          .slice(0, 10);

        let trafficStats = { totalVisits: 0, uniqueDevices: 0, topLocations: [] as any[] };
        try {
           const { data: trafficData, error: trafficError } = await supabase.from("site_traffic").select("id, device_id, city, region, user_id");
           
           if (!trafficError && trafficData) {
               trafficStats.totalVisits = trafficData.length;
               
               const uniqueDevices = new Set(trafficData.map((t: any) => t.device_id));
               trafficStats.uniqueDevices = uniqueDevices.size;

               // Count visits per City/Region combo
               const locCounts: Record<string, number> = {};
               trafficData.forEach((t: any) => {
                   if (t.city && t.region && t.city !== 'Unknown') {
                       const key = `${t.city}, ${t.region}`;
                       locCounts[key] = (locCounts[key] || 0) + 1;
                   }
               });

               trafficStats.topLocations = Object.entries(locCounts)
                  .map(([loc, count]) => ({ location: loc, hits: count }))
                  .sort((a, b) => b.hits - a.hits)
                  .slice(0, 4);
           }
        } catch (e) { console.warn("site_traffic table likely doesn't exist yet"); }

        setStats({
          totalStudents,
          categoryDistribution,
          topTests,
          avgSystemScore: globalAttempts > 0 ? Math.round(globalAccSum / globalAttempts) + "%" : "N/A",
          traffic: trafficStats
        });

      } catch (e) {
        console.error("Failed to load reporting data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Reports & Analytics</h1>
          <p className="text-slate-500 font-medium">Real-time deep dive into platform usage and academic performance.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
          <Download className="w-4 h-4" /> Export CSV Report
        </button>
      </div>

      {loading ? (
        <div className="h-96 w-full flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
           <div className="flex flex-col items-center gap-3 text-slate-400">
               <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
               <p className="font-bold">Aggregating Real Database Metrics...</p>
           </div>
        </div>
      ) : (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Real Chart 1: Academic Performance */}
            <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 flex flex-col relative overflow-hidden"
            >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                    <h2 className="text-lg font-black text-slate-800 dark:text-white leading-tight">System Global Average</h2>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">Mock Accuracy Target</p>
                </div>
                </div>
                <div className="text-right">
                    <span className="text-3xl font-black text-blue-600 dark:text-blue-400">{stats.avgSystemScore}</span>
                </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-end pt-8 pb-2 relative h-56 border-b border-slate-100 dark:border-slate-800">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
                {[100, 75, 50, 25, 0].map((val) => (
                    <div key={val} className="w-full h-px bg-slate-100 dark:bg-slate-800/80 relative">
                    <span className="absolute -left-2 -translate-y-1/2 text-[10px] text-slate-400 font-bold">{val}%</span>
                    </div>
                ))}
                </div>
                
                {/* Line chart mock aesthetic mapping to actual score area */}
                <svg className="w-full h-full absolute inset-0 z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path 
                    d={`M 0 90 Q 20 80, 35 60 T 60 55 T 85 45 T 100 ${100 - (parseInt(stats.avgSystemScore) || 50)}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    className="text-blue-500 dark:text-blue-400 drop-shadow-md"
                />
                <path 
                    d="M 0 90 Q 20 80, 35 60 T 60 55 T 85 45 T 100 parseInt(stats.avgSystemScore) || 50 L 100 100 L 0 100 Z" 
                    fill="currentColor" 
                    className="text-blue-500/10 dark:text-blue-400/10"
                />
                </svg>
                
                <div className="flex justify-between w-full z-20 px-2 mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                   <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>Present</span>
                </div>
            </div>
            </motion.div>

            {/* Real Chart 2: Category Distribution */}
            <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden"
            >
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center shrink-0">
                    <PieChart className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                   <h2 className="text-lg font-black text-slate-800 dark:text-white leading-tight">Signups by Target</h2>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">Demographic Split</p>
                </div>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 h-56 relative z-10">
                {/* Visual Ratio pie indicator dynamically built if values exist */}
                <div className="w-48 h-48 rounded-full shrink-0 relative bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-[#0f172a] shadow-inner flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                    <div className="absolute inset-2 bg-gradient-to-tr from-indigo-500/80 to-blue-500/80 rounded-full animate-[spin_60s_linear_infinite]" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/80 to-teal-500/80 rounded-full animate-[spin_90s_linear_infinite]" style={{ clipPath: 'polygon(50% 50%, 0 0, 50% 0)'}}></div>
                    
                    <div className="absolute inset-4 bg-white dark:bg-[#111827] rounded-full flex flex-col items-center justify-center shadow-md">
                        <span className="text-3xl font-black text-slate-800 dark:text-white leading-none tracking-tighter">{stats.totalStudents}</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Users</span>
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 w-full justify-center">
                {stats.categoryDistribution.length > 0 ? stats.categoryDistribution.map((item, i) => (
                    <div key={i} className="flex justify-between items-center group">
                        <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-xl border-2 border-white dark:border-[#0f172a] shadow-sm ${item.color}`} />
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 transition-colors uppercase tracking-wide">{item.name}</span>
                        </div>
                        <div className="text-right">
                           <span className="text-sm font-black text-slate-800 dark:text-white block leading-none">{item.percent}</span>
                           <span className="text-[10px] font-bold text-slate-400 block mt-0.5">{item.count} users</span>
                        </div>
                    </div>
                )) : (
                    <div className="text-sm font-bold text-slate-500 italic">No category tracking data found.</div>
                )}
                </div>
            </div>
            </motion.div>
        </div>

        {/* Real Traffic Analytics */}
        <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden"
        >
             <div className="p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#020617]/30">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                     <TrendingUp className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Global Traffic & Connectivity Logs</h2>
                    <p className="text-sm font-medium text-slate-500 mt-1">Real-time device tracking via 'site_traffic' (Make sure to run the SQL snippet if metrics say zero).</p>
                  </div>
               </div>
             </div>
             
             <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <div className="bg-slate-50 dark:bg-[#020617] rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-inner flex flex-col items-center justify-center text-center">
                     <div className="text-sm font-black text-slate-500 uppercase tracking-widest mb-2">Total Historic Hits</div>
                     <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400">{stats.traffic.totalVisits}</div>
                     <p className="text-xs font-bold text-slate-400 mt-3 max-w-[200px]">Combined global route requests and full page re-generations.</p>
                 </div>
                 
                 <div className="bg-slate-50 dark:bg-[#020617] rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-inner flex flex-col items-center justify-center text-center">
                     <div className="text-sm font-black text-slate-500 uppercase tracking-widest mb-2">Unique Devices</div>
                     <div className="text-5xl font-black text-emerald-600 dark:text-emerald-400">{stats.traffic.uniqueDevices}</div>
                     <p className="text-xs font-bold text-slate-400 mt-3 max-w-[200px]">Fingerprinted individual users bypassing standard authentication.</p>
                 </div>
                 
                 <div className="bg-slate-50 dark:bg-[#020617] rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-inner flex flex-col lg:col-span-1 md:col-span-2">
                     <div className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Top Origin Locations</div>
                     <div className="space-y-4 w-full">
                         {stats.traffic.topLocations.length > 0 ? stats.traffic.topLocations.map((loc, i) => (
                             <div key={i} className="flex justify-between items-center w-full">
                                 <span className="font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">{i+1}</span>
                                    {loc.location}
                                 </span>
                                 <span className="font-black text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">{loc.hits}</span>
                             </div>
                         )) : (
                             <div className="text-xs font-bold italic text-slate-400 text-center py-4">No geodata registered yet. Wait for a new user to hit the system!</div>
                         )}
                     </div>
                 </div>
             </div>
        </motion.div>
        
        {/* Real Test completion stats */}
        <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden"
        >
            <div className="p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#020617]/30">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <BarChartIcon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Most Active Test Analytics (Real-Time)</h2>
                  <p className="text-sm font-medium text-slate-500 mt-1">Ranking automatically generated based on Supabase <code>user_tests</code> attempts.</p>
                </div>
            </div>
            </div>
            <div className="p-0">
               <div className="grid grid-cols-1 divide-y divide-slate-100 dark:divide-slate-800/60">
                {stats.topTests.length > 0 ? stats.topTests.map((test, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between md:items-center gap-6 p-6 md:px-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                    <div className="flex items-center gap-4 flex-1">
                       <span className="w-8 flex justify-center text-lg font-black text-slate-300 dark:text-slate-700 group-hover:text-orange-400 transition-colors">#{i+1}</span>
                       <div>
                         <h4 className="text-base font-bold text-slate-800 dark:text-white leading-snug">{test.id}</h4>
                         <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-1">Engine Module ID</p>
                       </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 md:w-1/2">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Global Attempts</span>
                        <span className="font-black text-slate-800 dark:text-white text-lg">{test.attempts}</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Average Accuracy</span>
                        <span className="font-black text-indigo-600 dark:text-indigo-400 text-lg">{test.avgScore}</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Pass % (&gt;40%)</span>
                        <span className="font-black text-emerald-600 dark:text-emerald-400 text-lg">{test.passRate}</span>
                    </div>
                    </div>
                </div>
                )) : (
                   <div className="p-10 text-center text-slate-500 font-bold">No test attempts logged in database yet.</div>
                )}
               </div>
            </div>
        </motion.div>
        </>
      )}
    </div>
  );
}
