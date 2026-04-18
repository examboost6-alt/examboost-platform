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

const TRAFFIC_COLORS = ['#1A5EA1', '#0F2249', '#F59E0B', '#3b82f6', '#94a3b8'];
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
          uid, avg: s.tot / s.cnt, name: (profiles || []).find((p:any)=>p.id===uid)?.full_name || 'Anonymous Learner',
          cnt: s.cnt
      })).sort((a,b)=>b.avg - a.avg).slice(0,4);
      setTopStudents(leaders.map((l,i) => ({ 
          rank: i+1, 
          name: l.name, 
          score: `${l.avg.toFixed(1)}%`, 
          tests: l.cnt,
          badge: i===0?'bg-accent text-white shadow-md shadow-accent/50':i===1?'bg-slate-300 text-slate-800':i===2?'bg-orange-400 text-white':'bg-slate-100 text-slate-600'
      })));

      // --- AI PLATFORM INSIGHTS ---
      const alerts = [];
      if (failCount > 3) alerts.push({ type: 'warn', msg: `High failure rate detected: ${failCount} dropped payments.` });
      
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
      if (weakTest && worstScore < 40) alerts.push({ type: 'warn', msg: `Users are struggling on Test #${weakTest} (Avg: ${worstScore.toFixed(1)}%).` });
      if (todaysRevenue > 5000) alerts.push({ type: 'success', msg: `Revenue Spike: Today generated ₹${todaysRevenue}! Great job.` });
      
      if (alerts.length === 0) alerts.push({ type: 'success', msg: `Platform is fully stable. Demographics mapped.` });
      setInsights(alerts);

      // --- LIVE USER ACTIVITY ---
      const recentViews = (views || []).filter((v:any)=>v.user_id).slice(0, 15);
      const uniqueRecentViews = recentViews.filter((v:any, i:number, self:any[]) => i === self.findIndex((t)=>t.user_id === v.user_id)).slice(0,5);
      setLiveUsers(uniqueRecentViews.map((v:any) => {
          const dn = new Date(v.created_at);
          const diffMin = Math.floor((now.getTime() - dn.getTime())/60000);
          return {
              name: (profiles || []).find((p:any)=>p.id==v.user_id)?.full_name || 'Anonymous User',
              time: diffMin === 0 ? 'Just now' : `${diffMin} mins ago`,
              course: v.path?.replace(/\//g,' ').trim() || 'Browsing Dashboard',
              status: diffMin < 5 ? 'Online' : 'Idle'
          };
      }));

    } catch (e) {
      console.error(e);
    }
  }, [supabase]);

  useEffect(() => {
    fetchRealtimeSystemData();
    setLoading(false);
    
    const interval = setInterval(() => {
       fetchRealtimeSystemData();
    }, 5000);
    return () => clearInterval(interval);
  }, [fetchRealtimeSystemData]);

  const kpis = [
    { label: "Total Students", value: stats.totalUsers.toLocaleString(), change: `+${stats.newUsersWeek} this week`, trend: "up", icon: Users, link: "/admin/users" },
    { label: "New Registrations", value: stats.newUsersWeek.toLocaleString(), change: "This Week", trend: "up", icon: Activity, link: "/admin/users" },
    { label: "Total Revenue", value: `₹${(stats.totalRevenue/100000).toFixed(2)}L`, change: "Aggregated", trend: "up", icon: CreditCard, link: "/admin/finances" },
    { label: "Today's Revenue", value: `₹${stats.todaysRevenue.toLocaleString()}`, change: stats.todaysRevenue>0 ? "Active" : "Pending", trend: stats.todaysRevenue>0 ? "up" : "down", icon: TrendingUp, link: "/admin/finances" },
    { label: "Tests Attempted", value: stats.activeTests.toLocaleString(), change: "Global Log", trend: "up", icon: CheckCircle2, link: "/admin/tests" },
    { label: "Classes Attended", value: stats.classesAttended.toLocaleString(), change: "Page Views", trend: "up", icon: MonitorPlay, link: "/admin/analytics" },
  ];

  if (loading) {
     return (
        <div className="h-[80vh] flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-6" />
            <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg tracking-wide">Syncing Command Center...</p>
        </div>
     );
  }

  return (
    <div className="flex flex-col gap-10 pb-16 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 🚀 HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-4 mb-3 flex-wrap">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">System Overview</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 rounded-full text-xs font-bold tracking-wide border border-green-200 dark:border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> System Active
              </div>
            </div>
          </div>
          <p className="text-slate-500 max-w-2xl text-sm md:text-base leading-relaxed">
            Monitor real-time metrics, student telemetry, and financial insights across all CollegeBuddy environments.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 w-full lg:w-auto shrink-0">
            <button className="flex-1 lg:flex-none px-5 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border border-transparent shadow-sm">
              <Video className="w-4 h-4" /> Upload
            </button>
            <button className="flex-1 lg:flex-none px-5 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20">
              <PlusCircle className="w-4 h-4" /> Add User
            </button>
        </div>
      </div>

      {/* 📊 KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <Link href={kpi.link || "#"} key={kpi.label} className="block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-[#0b1221] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-primary/50 shadow-sm group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:group-hover:shadow-[0_8px_30px_rgba(26,94,161,0.1)] transition-all relative overflow-hidden h-full flex items-center gap-5 group-hover:-translate-y-1"
              >
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 w-14 h-14 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1 truncate">{kpi.value}</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <p className="text-slate-500 dark:text-slate-400 font-bold text-xs tracking-wide uppercase truncate">{kpi.label}</p>
                    <div className={`flex items-center gap-1 text-[11px] font-black tracking-wide ${kpi.trend === 'up' ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10' : 'text-rose-500 bg-rose-50 dark:bg-rose-500/10'} px-2 py-0.5 rounded w-fit`}>
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
      <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-0.5 shadow-lg shadow-primary/10">
        <div className="bg-white dark:bg-[#020617] rounded-[14px] p-5 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
            <div className="flex items-center gap-4 shrink-0">
              <div className="p-3 bg-primary/10 rounded-xl">
                <BrainCircuit className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-0.5">Automated Intelligence</h3>
                <p className="text-sm text-slate-500 font-medium">Platform insights generated from real-time activity</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap text-sm w-full md:w-auto">
              {insights.map((ins, i) => (
                  <div key={i} className={`px-4 py-2.5 rounded-xl border font-semibold flex items-center gap-2.5 shadow-sm text-sm ${ins.type==='success' ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20 text-rose-700 dark:text-rose-400'}`}>
                    {ins.type === 'warn' && <AlertTriangle className="w-4 h-4" />}
                    {ins.type === 'success' && <CheckCircle2 className="w-4 h-4" />}
                    {ins.msg}
                  </div>
              ))}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Charts */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Financial Trajectory</h2>
                <p className="text-sm font-medium text-slate-500">Last 7 days revenue mapping</p>
              </div>
              <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300">
                Revenue vs Target
              </div>
            </div>
            
            <div className="h-80 w-full mt-4">
              {revData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1A5EA1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#1A5EA1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} tickFormatter={(val) => `₹${val/1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', background: 'var(--background)' }} />
                    <Area type="monotone" dataKey="revenue" stroke="#1A5EA1" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    <Line type="monotone" dataKey="target" stroke="#F59E0B" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                 <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">Awaiting Transaction Processing...</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">User Growth</h2>
              <p className="text-sm text-slate-500 mb-8 font-medium">New vs Returning</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', background: 'var(--background)' }} />
                    <Bar dataKey="new" stackId="a" fill="#1A5EA1" radius={[0, 0, 4, 4]} maxBarSize={40} />
                    <Bar dataKey="returning" stackId="a" fill="#0F2249" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Testing Load</h2>
                  <p className="text-sm text-slate-500 font-medium">Platform stress</p>
                </div>
                <div className="p-2.5 bg-accent/10 text-accent rounded-xl"><Zap className="w-5 h-5" /></div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={testActivityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 500 }} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', background: 'var(--background)' }} />
                    <Line type="stepAfter" dataKey="attempts" stroke="#F59E0B" strokeWidth={3} dot={{r: 5, strokeWidth: 2, fill: 'var(--background)'}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>

        {/* Side panels */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-400" /> Demographics
            </h2>
            <p className="text-sm text-slate-500 mb-8 font-medium">Device Breakdown</p>
            
            <div className="h-56 w-full relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData} cx="50%" cy="50%" innerRadius={65} outerRadius={90} paddingAngle={2} dataKey="value" stroke="none"
                  >
                    {trafficData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={TRAFFIC_COLORS[index % TRAFFIC_COLORS.length]} /> ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', background: 'var(--background)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-black text-slate-900 dark:text-white leading-none mb-1">{stats.classesAttended}</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Views</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
              {trafficData.map((source, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: TRAFFIC_COLORS[i] }} />
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{source.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{source.value} users</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8 flex-1 flex flex-col">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Financial Overview</h2>
            <div className="flex flex-col gap-4 flex-1">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 transition-colors">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Top Course Gross</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{drilldown.topCourseTitle}</p>
                  <p className="text-primary font-black text-lg">₹{drilldown.topCourseRev.toLocaleString()}</p>
                </div>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 transition-colors">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Estimated Recurring</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Active Licenses</p>
                  <p className="text-slate-800 dark:text-white font-black text-lg">₹{drilldown.recurringRev.toLocaleString()}</p>
                </div>
              </div>
              <div className="p-5 bg-rose-50 dark:bg-rose-500/5 rounded-2xl border border-rose-100 dark:border-rose-500/10 transition-colors mt-auto">
                <p className="text-xs text-rose-500 font-bold uppercase tracking-wider mb-2">Payment Failures</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-rose-700 dark:text-rose-400">{drilldown.failedCount} Dropped</p>
                  <p className="text-rose-700 dark:text-rose-400 font-black text-lg">₹{drilldown.failedRisk.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        
        {/* Live Users Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 lg:p-8 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Live Feed</h2>
              <p className="text-sm text-slate-500 font-medium">Currently active sessions</p>
            </div>
            <Link href="/admin/analytics" className="text-sm font-bold text-primary flex items-center gap-1 hover:text-secondary transition-colors">
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="w-full overflow-x-auto custom-scrollbar">
            {liveUsers.length > 0 ? (
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase font-bold text-slate-400 tracking-wider">
                  <th className="pb-4 px-3 w-1/3">Student</th>
                  <th className="pb-4 px-3 w-1/3">Access Point</th>
                  <th className="pb-4 px-3 w-1/3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
                {liveUsers.map((u, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-3">
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">{u.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{u.time}</p>
                    </td>
                    <td className="py-4 px-3 text-sm font-medium text-slate-600 dark:text-slate-400 truncate max-w-[200px]">{u.course}</td>
                    <td className="py-4 px-3 text-right">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                        u.status === 'Online' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400' :
                        'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            ) : (
                <div className="py-12 text-center text-slate-400 font-medium bg-slate-50 dark:bg-slate-800/30 rounded-2xl">
                    No active sessions found right now.
                </div>
            )}
          </div>
        </div>

        {/* Leaderboard Card */}
        <div className="bg-secondary rounded-3xl p-8 relative overflow-hidden flex flex-col shadow-xl border border-primary/20 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-6 right-8"><Medal className="w-16 h-16 text-white/5" strokeWidth={1} /></div>

          <div className="mb-10 z-10 relative">
            <h2 className="text-2xl font-black text-white tracking-tight mb-2">Hall of Fame</h2>
            <p className="text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" /> Live aggregate scores
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10 z-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Evaluations</p>
              <p className="text-3xl font-black text-white">{stats.activeTests}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Top Performers</p>
              <p className="text-3xl font-black text-accent">{topStudents.length}</p>
            </div>
          </div>

          <div className="z-10 flex-1 flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 border-b border-white/10 pb-4">Top 4 Enrolled Scholars</h3>
            <div className="flex flex-col gap-3">
              {topStudents.length > 0 ? topStudents.map((student, i) => (
                <div key={i} className="flex items-center justify-between group p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-white/10">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-sm ${student.badge}`}>#{student.rank}</div>
                    <div>
                      <span className="text-sm font-bold text-white block">{student.name}</span>
                      <span className="text-xs text-slate-400">{student.tests} attempts</span>
                    </div>
                  </div>
                  <span className="text-lg font-black text-white px-3 py-1 bg-white/10 rounded-lg">{student.score}</span>
                </div>
              )) : (
                 <div className="text-slate-400 text-sm font-medium flex items-center justify-center h-40 bg-white/5 rounded-2xl">Awaiting successful test submissions.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
