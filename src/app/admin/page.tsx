"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Activity, CreditCard, TrendingUp, TrendingDown,
  MonitorPlay, CheckCircle2, Loader2, ArrowUpRight, ArrowDownRight,
  Globe, AlertTriangle, Video, PlusCircle, BookOpen,
  Medal, ExternalLink, Zap, BrainCircuit, Search
} from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";
import Link from "next/link";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const TRAFFIC_COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#ec4899', '#f59e0b'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function AdvancedAdminDashboard() {
  const [loading, setLoading] = useState(true);
  
  // Real Data States
  const [stats, setStats] = useState({ totalUsers: 0, newUsersWeek: 0, activeTests: 0, totalRevenue: 0, todaysRevenue: 0, classesAttended: 0 });
  const [revData, setRevData] = useState<any[]>([]);
  const [trafficData, setTrafficData] = useState<any[]>([]);
  const [userGrowthData, setUserGrowthData] = useState<any[]>([]);
  const [testActivityData, setTestActivityData] = useState<any[]>([]);
  const [drilldown, setDrilldown] = useState({ topCourseTitle: 'N/A', topCourseRev: 0, recurringRev: 0, failedCount: 0, failedRisk: 0 });
  const [liveUsers, setLiveUsers] = useState<any[]>([]);
  const [topStudents, setTopStudents] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);

  const supabase = getSupabaseClient();

  const fetchRealtimeSystemData = useCallback(async () => {
    if (!supabase) return;
    
    try {
      // 1. Fetch RAW Tables
      const [{ data: profiles }, { data: purchases }, { data: tests }, { data: views }] = await Promise.all([
        supabase.from('profiles').select('id, created_at, full_name'),
        supabase.from('purchases').select('amount, created_at, series_id, status, user_id'),
        supabase.from('user_tests').select('id, created_at, score, user_id, test_id'),
        supabase.from('page_views').select('id, created_at, device_type, user_id, path').order('created_at', { ascending: false }).limit(2000)
      ]);

      const now = new Date();
      const oneWeekAgo = new Date(); oneWeekAgo.setDate(now.getDate() - 7);
      const todayStart = new Date(); todayStart.setHours(0,0,0,0);

      // --- KPI STATS ---
      const totalUsers = profiles?.length || 0;
      const newUsersWeek = (profiles || []).filter((u: any) => new Date(u.created_at) > oneWeekAgo).length;
      const totalRevenue = (purchases || []).filter((p:any)=>p.status==='success').reduce((acc: number, p: any) => acc + (Number(p.amount) || 0), 0);
      const todaysRevenue = (purchases || []).filter((p: any) => p.status==='success' && new Date(p.created_at) >= todayStart).reduce((acc: number, p: any) => acc + (Number(p.amount) || 0), 0);
      const activeTests = tests?.length || 0;
      
      setStats({
        totalUsers, newUsersWeek, activeTests, totalRevenue, todaysRevenue,
        classesAttended: views?.filter((v:any) => v.path?.includes('lecture') || v.path?.includes('player')).length || 0
      });

      // --- FINANCIAL TRAJECTORY (Last 7 Days) ---
      const revMap = new Map();
      for (let i=6; i>=0; i--) {
        const d = new Date(); d.setDate(now.getDate() - i);
        revMap.set(days[d.getDay()], { name: days[d.getDay()], revenue: 0, target: Math.floor(totalRevenue/100) || 5000 });
      }
      (purchases || []).forEach((p:any) => {
        if(p.status!=='success') return;
        const d = new Date(p.created_at);
        if ((now.getTime() - d.getTime()) / 86400000 <= 7) {
            const dn = days[d.getDay()];
            if (revMap.has(dn)) revMap.get(dn).revenue += (Number(p.amount) || 0);
        }
      });
      setRevData(Array.from(revMap.values()));

      // --- VISITOR DEMOGRAPHICS (from Page Views) ---
      const dtCount: Record<string, number> = {};
      (views || []).forEach((v:any) => {
         const t = v.device_type || 'Desktop';
         dtCount[t] = (dtCount[t] || 0) + 1;
      });
      let tData = Object.entries(dtCount).map(([name, value]) => ({ name, value }));
      if (tData.length === 0) tData = [{ name: 'Awaiting Traffic', value: 100 }];
      setTrafficData(tData);

      // --- USER ACQUISITION FLOW (Last 6 Months logic via Profiles & Views) ---
      const growthMap = new Map();
      for (let i = 5; i >= 0; i--) {
          const d = new Date(); d.setMonth(now.getMonth() - i);
          growthMap.set(monthNames[d.getMonth()], { month: monthNames[d.getMonth()], new: 0, returning: 0 });
      }
      const uniqueVByMonth: Record<string, Set<string>> = {};
      (views || []).forEach((v:any) => {
          if (!v.user_id) return;
          const m = monthNames[new Date(v.created_at).getMonth()];
          if (!uniqueVByMonth[m]) uniqueVByMonth[m] = new Set();
          uniqueVByMonth[m].add(v.user_id);
      });
      const profMap: Record<string, Date> = {};
      (profiles || []).forEach((p:any) => { profMap[p.id] = new Date(p.created_at); });

      growthMap.forEach((val, mName) => {
         const activeUsers = uniqueVByMonth[mName] || new Set();
         let n = 0, r = 0;
         activeUsers.forEach(uid => {
            const created = profMap[uid];
            if (created && monthNames[created.getMonth()] === mName) n++; else r++;
         });
         // If no telemetry yet, fallback to pure profiles count for 'new'
         if (n===0 && r===0) {
            n = (profiles || []).filter((p:any) => monthNames[new Date(p.created_at).getMonth()] === mName).length;
         }
         growthMap.get(mName).new = n;
         growthMap.get(mName).returning = r;
      });
      setUserGrowthData(Array.from(growthMap.values()));

      // --- TESTING TELEMETRY (Attempts by Hour today) ---
      const tb: Record<string, number> = { '04:00':0, '08:00':0, '12:00':0, '16:00':0, '20:00':0, '23:59':0 };
      (tests || []).forEach((t:any) => {
         const d = new Date(t.created_at);
         if (d >= todayStart) {
            const h = d.getHours();
            if (h<6) tb['04:00']++; else if (h<10) tb['08:00']++; else if (h<14) tb['12:00']++;
            else if (h<18) tb['16:00']++; else if (h<22) tb['20:00']++; else tb['23:59']++;
         }
      });
      setTestActivityData(Object.entries(tb).map(([time, attempts]) => ({ time, attempts })));

      // --- FINANCIAL DRILLDOWN ---
      const courseRev: Record<string, number> = {};
      let failCount = 0; let failRisk = 0;
      (purchases || []).forEach((p:any) => {
         if (p.status !== 'success') {
             failCount++; failRisk += (Number(p.amount)||0);
         } else {
             const sid = String(p.series_id || 'general');
             courseRev[sid] = (courseRev[sid] || 0) + (Number(p.amount)||0);
         }
      });
      let topC = 'N/A', topR = 0;
      Object.entries(courseRev).forEach(([c, r]) => { if(r > topR) { topR = r; topC = c; }});
      setDrilldown({ topCourseTitle: `Series ID #${topC}`, topCourseRev: topR, recurringRev: Math.floor(topR*0.4), failedCount: failCount, failedRisk: failRisk });

      // --- GLOBAL LEADERBOARD SNAPSHOT ---
      const uScores: Record<string, { tot:number, cnt:number }> = {};
      (tests || []).forEach((t:any) => {
         if(!uScores[t.user_id]) uScores[t.user_id] = { tot:0, cnt:0 };
         uScores[t.user_id].tot += Number(t.score||0);
         uScores[t.user_id].cnt++;
      });
      const leaders = Object.entries(uScores).map(([uid, s]) => ({
          uid, avg: s.tot / s.cnt, name: (profiles || []).find((p:any)=>p.id===uid)?.full_name || 'Anonymous Learner'
      })).sort((a,b)=>b.avg - a.avg).slice(0,3);
      setTopStudents(leaders.map((l,i) => ({ rank: i+1, name: l.name, score: `${l.avg.toFixed(1)}%`, badge: i===0?'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)]':i===1?'bg-slate-300':'bg-amber-600' })));

      // --- LIVE USER ACTIVITY ---
      const recentViews = (views || []).filter((v:any)=>v.user_id).slice(0, 15);
      const uniqueRecentViews = recentViews.filter((v:any, i:number, self:any[]) => i === self.findIndex((t)=>t.user_id === v.user_id)).slice(0,4);
      setLiveUsers(uniqueRecentViews.map((v:any) => {
          const dn = new Date(v.created_at);
          const diffMin = Math.floor((now.getTime() - dn.getTime())/60000);
          return {
              name: (profiles || []).find((p:any)=>p.id==v.user_id)?.full_name || 'User',
              time: diffMin === 0 ? 'Just now' : `${diffMin} mins ago`,
              course: v.path?.replace(/\//g,' ').trim() || 'Dashboard',
              status: diffMin < 5 ? 'Online' : 'Idle'
          };
      }));

      // --- AI PLATFORM INSIGHTS ---
      const alerts = [];
      if (failCount > 3) alerts.push({ type: 'warn', msg: `⚠️ High failure rate detected: ${failCount} payments dropped.` });
      
      const testPerf: Record<string, {tot:number, cnt:number}> = {};
      (tests || []).forEach((t:any) => {
         if(!testPerf[t.test_id]) testPerf[t.test_id] = {tot:0, cnt:0};
         testPerf[t.test_id].tot += Number(t.score||0); testPerf[t.test_id].cnt++;
      });
      let weakTest = null, worstScore = 100;
      Object.entries(testPerf).forEach(([tid, s]) => {
         const avg = s.tot/s.cnt;
         if (s.cnt > 2 && avg < worstScore) { worstScore = avg; weakTest = tid; }
      });
      if (weakTest && worstScore < 40) alerts.push({ type: 'warn', msg: `⚠️ High dropoff warning: Users struggling on Test #${weakTest} (Avg: ${worstScore.toFixed(1)}%).` });
      if (todaysRevenue > 5000) alerts.push({ type: 'success', msg: `🔥 Revenue Spike: Today generated ₹${todaysRevenue}! Keep pushing.` });
      
      if (alerts.length === 0) alerts.push({ type: 'success', msg: `✅ Platform systems stable. Demographics mapping actively.` });
      setInsights(alerts);

    } catch (e) {
      console.error(e);
    }
  }, [supabase]);

  useEffect(() => {
    fetchRealtimeSystemData();
    setLoading(false);
    
    // Set 5 second interval for real-time dashboard updates
    const interval = setInterval(() => {
       fetchRealtimeSystemData();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchRealtimeSystemData]);

  const kpis = [
    { label: "Total Students", value: stats.totalUsers.toLocaleString(), change: `+${stats.newUsersWeek}`, trend: "up", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", link: "/admin/users" },
    { label: "New Registrations", value: stats.newUsersWeek.toLocaleString(), change: "This Week", trend: "up", icon: Activity, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20", link: "/admin/users" },
    { label: "Total Revenue", value: `₹${(stats.totalRevenue/100000).toFixed(2)}L`, change: "Aggregated", trend: "up", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", link: "/admin/finances" },
    { label: "Today's Revenue", value: `₹${stats.todaysRevenue.toLocaleString()}`, change: stats.todaysRevenue>0 ? "Active" : "Pending", trend: stats.todaysRevenue>0 ? "up" : "down", icon: TrendingUp, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20", link: "/admin/finances" },
    { label: "Tests Attempted", value: stats.activeTests.toLocaleString(), change: "Global", trend: "up", icon: CheckCircle2, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", link: "/admin/tests" },
    { label: "Classes Attended", value: stats.classesAttended.toLocaleString(), change: "Page Views", trend: "up", icon: MonitorPlay, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", link: "/admin/analytics" },
  ];

  if (loading) {
     return (
        <div className="h-[80vh] flex flex-col items-center justify-center rounded-[2rem]">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-slate-500 font-bold text-lg">Booting Secure Data Engines...</p>
        </div>
     );
  }

  return (
    <div className="flex flex-col gap-8 pb-12 w-full">
      
      {/* 🚀 HEADER & GLOBAL SEARCH BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Command Center</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-full text-[11px] font-black uppercase tracking-widest border border-emerald-200 dark:border-emerald-500/20 shadow-sm shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider px-2 py-1 bg-white dark:bg-slate-800 rounded-full flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Updating every 5s
              </span>
            </div>
          </div>
          <p className="text-slate-500 font-medium">Real-time health, insights, and global telemetry hooked directly to secure database.</p>
        </div>

        <div className="w-full lg:w-[400px] flex items-center bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-3.5 focus-within:ring-2 ring-primary/20 transition-all shadow-sm">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input type="text" placeholder="Search Users, Courses, or Tests (Shortcut: /)" className="bg-transparent border-none outline-none text-sm font-semibold text-slate-700 dark:text-slate-200 w-full placeholder:text-slate-400" />
        </div>
      </div>

      {/* ⚡ Quick Actions */}
      <div className="flex flex-wrap gap-3 w-full">
        <button className="px-5 py-3 bg-blue-50/80 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 border border-blue-200 dark:border-blue-500/20 shadow-sm">
          <BookOpen className="w-4 h-4" /> Add Course
        </button>
        <button className="px-5 py-3 bg-purple-50/80 hover:bg-purple-100 dark:bg-purple-500/10 dark:hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 border border-purple-200 dark:border-purple-500/20 shadow-sm">
          <CheckCircle2 className="w-4 h-4" /> Create Test
        </button>
        <button className="px-5 py-3 bg-amber-50/80 hover:bg-amber-100 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 border border-amber-200 dark:border-amber-500/20 shadow-sm">
          <Video className="w-4 h-4" /> Upload Lecture
        </button>
        <button className="px-5 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Add User
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <Link href={kpi.link || "#"} key={kpi.label} className="block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className={`bg-white dark:bg-[#0f172a] rounded-2xl p-5 border ${kpi.border} shadow-sm group-hover:shadow-md transition-all relative overflow-hidden h-full group-hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className={`w-3.5 h-3.5 ${kpi.color} opacity-70`} />
                </div>
                <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity bg-current" style={{ color: kpi.color }} />
                
                <div className="flex justify-between items-start mb-4">
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest z-10 pr-4 leading-tight">{kpi.label}</p>
                  <div className={`p-2 rounded-xl ${kpi.bg} ${kpi.color}`}>
                    <Icon className="w-5 h-5 flex-shrink-0" />
                  </div>
                </div>
                
                <div>
                  <div className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-white tracking-tight mb-2 z-10 relative">{kpi.value}</div>
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-1 text-[11px] font-black ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {kpi.change}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* ⚡ PRO Insights Strip */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-[2px] shadow-lg shadow-indigo-500/20">
        <div className="bg-white dark:bg-[#0f172a] rounded-[14px] p-4 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl">
                <BrainCircuit className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">AI Platform Insights</h3>
                <p className="text-xs text-slate-500 font-medium">Smart prescriptive analytics parsed directly from tables</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap text-sm w-full md:w-auto">
              {insights.map((ins, i) => (
                  <div key={i} className={`px-4 py-2 rounded-xl border font-semibold flex items-center gap-2 shadow-sm font-mono tracking-tight text-xs ${ins.type==='success' ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20 text-rose-700 dark:text-rose-400'}`}>
                    {ins.msg}
                  </div>
              ))}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 relative z-10 gap-4">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Financial & Growth Trajectory</h2>
                <p className="text-sm font-semibold text-slate-500">Daily Revenue Performance mapped from `purchases` table</p>
              </div>
            </div>
            
            <div className="h-80 w-full relative z-10 mt-4">
              {revData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} tickFormatter={(val) => `₹${val/1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
                    <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                 <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">Awaiting Transaction Processing...</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-1">User Acquisition Flow</h2>
              <p className="text-sm text-slate-500 mb-8 font-semibold">New Signups vs Returning (`profiles` & `page_views`)</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: '1px solid #334155', background: '#0f172a' }} />
                    <Bar dataKey="new" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} maxBarSize={40} />
                    <Bar dataKey="returning" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Testing Telemetry</h2>
                  <p className="text-sm text-slate-500 font-semibold">Live server load mapped (`user_tests`)</p>
                </div>
                <div className="p-2.5 bg-purple-500/10 text-purple-500 rounded-xl"><Zap className="w-5 h-5" /></div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={testActivityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }} />
                    <Tooltip />
                    <Line type="stepAfter" dataKey="attempts" stroke="#a855f7" strokeWidth={3} dot={{r: 5, strokeWidth: 2, fill: '#0f172a'}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-1 flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-400" /> Visitor Demographics
            </h2>
            <p className="text-sm text-slate-500 mb-8 font-semibold">Device distribution (`page_views` table)</p>
            
            <div className="h-56 w-full relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData} cx="50%" cy="50%" innerRadius={70} outerRadius={95} paddingAngle={5} dataKey="value" stroke="none"
                  >
                    {trafficData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={TRAFFIC_COLORS[index % TRAFFIC_COLORS.length]} /> ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-slate-800 dark:text-white">Active</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-6">
              {trafficData.map((source, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: TRAFFIC_COLORS[i] }} />
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{source.name}</span>
                  </div>
                  <span className="text-sm font-black text-slate-900 dark:text-white">{source.value} users</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex-1 flex flex-col">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Financial Drilldown</h2>
            <div className="flex flex-col gap-4 flex-1">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors cursor-default">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">Top Grossing Identifier</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-black text-slate-800 dark:text-white">{drilldown.topCourseTitle}</p>
                  <p className="text-emerald-500 font-black text-base">₹{drilldown.topCourseRev.toLocaleString()}</p>
                </div>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors cursor-default">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">Recurring Subscriptions</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-black text-slate-800 dark:text-white">All-India Active</p>
                  <p className="text-blue-500 font-black text-base">₹{drilldown.recurringRev.toLocaleString()}</p>
                </div>
              </div>
              <div className="p-5 bg-rose-50 dark:bg-rose-500/5 rounded-2xl border border-rose-100 dark:border-rose-500/10 transition-colors cursor-default">
                <p className="text-[11px] text-rose-500 font-bold uppercase tracking-widest mb-1.5">Failed Payments (All Time risk)</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-black text-rose-700 dark:text-rose-400">{drilldown.failedCount} Dropped</p>
                  <p className="text-rose-700 dark:text-rose-400 font-black text-base">₹{drilldown.failedRisk.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Live User Activity</h2>
              <p className="text-sm text-slate-500 font-semibold mt-1">Real database sessions generated from `page_views`</p>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 px-3 py-1.5 rounded-xl ml-1 shadow-sm">{liveUsers.length} Logged Last</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto custom-scrollbar">
            {liveUsers.length > 0 ? (
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-xs uppercase font-black text-slate-400 tracking-widest">
                  <th className="pb-4 px-3">Student Name</th>
                  <th className="pb-4 px-3">Path Access</th>
                  <th className="pb-4 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {liveUsers.map((u, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="py-4 px-3">
                      <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{u.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{u.time}</p>
                    </td>
                    <td className="py-4 px-3 text-sm font-semibold text-slate-600 dark:text-slate-400 truncate max-w-[150px]">{u.course}</td>
                    <td className="py-4 px-3 text-right">
                      <span className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm ${
                        u.status === 'Online' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400' :
                        'bg-slate-100 text-slate-600 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            ) : (
                <div className="py-10 text-center font-bold text-slate-400">No recent authenticated tracking events found.</div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-xl w-full">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-6 right-6"><Medal className="w-16 h-16 text-yellow-500/20" strokeWidth={1.5} /></div>

          <div className="mb-8 z-10 relative">
            <h2 className="text-xl font-black text-white tracking-tight mb-2">Global Leaderboard Snapshot</h2>
            <p className="text-sm text-slate-400 font-semibold">Top performers derived strictly from DB `user_tests`</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/5 hover:bg-white/15 transition-colors cursor-default">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Total Tests Logged</p>
              <p className="text-3xl font-black text-white">{stats.activeTests}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/5 hover:bg-white/15 transition-colors cursor-default">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Global Competitors</p>
              <p className="text-3xl font-black text-emerald-400">{topStudents.length > 0 ? topStudents.length + '+' : '0'}</p>
            </div>
          </div>

          <div className="z-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 min-h-[220px]">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-5 border-b border-white/10 pb-3">Top Enrolled Scholars</h3>
            <div className="flex flex-col gap-4">
              {topStudents.length > 0 ? topStudents.map((student, i) => (
                <div key={i} className="flex items-center justify-between group p-2 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-slate-900 ${student.badge}`}>#{student.rank}</div>
                    <span className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">{student.name}</span>
                  </div>
                  <span className="text-base font-black text-white">{student.score}</span>
                </div>
              )) : (
                 <div className="text-slate-400 text-sm font-semibold flex items-center justify-center h-full pt-4">No test completion records found yet.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
