"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Activity, CreditCard, TrendingUp, TrendingDown,
  MonitorPlay, CheckCircle2, Loader2, ArrowUpRight, ArrowDownRight,
  Globe, ShieldAlert, BookOpen, AlertTriangle, Video, PlusCircle,
  BarChart3, Medal, ExternalLink, Zap, BrainCircuit, Search
} from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";
import Link from "next/link";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

// --- MOCK DATA FOR VISUALIZATIONS ---
const revData = [
  { name: 'Mon', revenue: 14500, target: 12000 },
  { name: 'Tue', revenue: 23000, target: 14000 },
  { name: 'Wed', revenue: 18000, target: 16000 },
  { name: 'Thu', revenue: 29000, target: 18000 }, // Spike!
  { name: 'Fri', revenue: 22000, target: 20000 },
  { name: 'Sat', revenue: 34000, target: 22000 },
  { name: 'Sun', revenue: 41000, target: 25000 },
];

const trafficData = [
  { name: 'Google Organic', value: 45 },
  { name: 'Ads (Paid)', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Direct', value: 10 },
];
const TRAFFIC_COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'];

const userGrowthData = [
  { month: 'Jan', new: 400, returning: 240 },
  { month: 'Feb', new: 600, returning: 339 },
  { month: 'Mar', new: 900, returning: 580 },
  { month: 'Apr', new: 1278, returning: 890 },
  { month: 'May', new: 1889, returning: 1280 },
  { month: 'Jun', new: 2539, returning: 1980 },
];

const testActivityData = [
  { time: '08:00', attempts: 120 },
  { time: '12:00', attempts: 450 },
  { time: '16:00', attempts: 890 },
  { time: '20:00', attempts: 1200 },
  { time: '23:00', attempts: 600 },
];

export default function AdvancedAdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersWeek: 0,
    activeTests: 0,
    totalRevenue: 0,
    todaysRevenue: 0,
    classesAttended: 0,
  });

  const [activeTab, setActiveTab] = useState("overview");
  const supabase = getSupabaseClient();

  const fetchRealData = async () => {
    setLoading(true);
    if (!supabase) return;
    try {
      // 1. Users
      const { data: profiles } = await supabase.from('profiles').select('id, created_at');
      const totalUsers = profiles?.length || 0;
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const newUsersWeek = (profiles || []).filter((u: any) => new Date(u.created_at) > oneWeekAgo).length;

      // 2. Revenue
      const { data: purchases } = await supabase.from('purchases').select('amount, created_at');
      const totalRevenue = (purchases || []).reduce((acc: number, p: any) => acc + (Number(p.amount) || 0), 0);
      
      const today = new Date();
      today.setHours(0,0,0,0);
      const todaysRevenue = (purchases || []).filter((p: any) => new Date(p.created_at) >= today).reduce((acc: number, p: any) => acc + (Number(p.amount) || 0), 0);

      // 3. Tests
      const { data: tests } = await supabase.from('user_tests').select('id');
      const activeTests = tests?.length || 0;

      setStats({
        totalUsers,
        newUsersWeek,
        activeTests,
        totalRevenue,
        todaysRevenue,
        classesAttended: Math.floor(totalUsers * 3.4), // Appx mock
      });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRealData();
  }, []);

  const kpis = [
    { label: "Total Students", value: stats.totalUsers.toLocaleString(), change: "+12.5%", trend: "up", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", link: "/admin/users" },
    { label: "New Registrations (Week)", value: stats.newUsersWeek.toLocaleString(), change: "+5.1%", trend: "up", icon: Activity, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20", link: "/admin/users" },
    { label: "Total Revenue", value: `₹${(stats.totalRevenue/100000).toFixed(2)}L`, change: "+18.2%", trend: "up", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", link: "/admin/finances" },
    { label: "Today's Revenue", value: `₹${stats.todaysRevenue.toLocaleString()}`, change: "-2.4%", trend: "down", icon: TrendingUp, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20", link: "/admin/finances" },
    { label: "Tests Attempted", value: stats.activeTests.toLocaleString(), change: "+24.5%", trend: "up", icon: CheckCircle2, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", link: "/admin/tests" },
    { label: "Classes Attended", value: stats.classesAttended.toLocaleString(), change: "+10.1%", trend: "up", icon: MonitorPlay, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", link: "/admin/analytics" },
  ];

  return (
    <div className="flex flex-col gap-6 pb-12 min-h-screen bg-slate-50 dark:bg-[#020617]">
      
      {/* 🚀 QUICK ACTIONS & HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 bg-white dark:bg-[#0f172a] p-6 lg:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="z-10 w-full xl:w-auto flex flex-col gap-4 xl:gap-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">System Command Center</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-full text-[11px] font-black uppercase tracking-widest border border-emerald-200 dark:border-emerald-500/20 shadow-sm shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" /> Updating every 5 sec
              </span>
            </div>
          </div>
          <p className="text-slate-500 font-medium text-sm">Real-time health, insights, and global telemetry for your platform.</p>
          
          {/* ⚡ A. Global Search Bar */}
          <div className="mt-4 flex items-center bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 max-w-md w-full focus-within:ring-2 ring-primary/20 transition-all shadow-inner">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input type="text" placeholder="Search Users, Courses, or Tests (Shortcut: /)" className="bg-transparent border-none outline-none text-sm font-semibold text-slate-700 dark:text-slate-200 w-full placeholder:text-slate-400" />
          </div>
        </div>

        {/* ⚡ 10. Quick Actions (SUPER IMPORTANT) */}
        <div className="flex flex-wrap gap-3 z-10">
          <button className="px-4 py-2.5 bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border border-blue-200 dark:border-blue-500/20">
            <BookOpen className="w-4 h-4" /> Add Course
          </button>
          <button className="px-4 py-2.5 bg-purple-50 hover:bg-purple-100 dark:bg-purple-500/10 dark:hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border border-purple-200 dark:border-purple-500/20">
            <CheckCircle2 className="w-4 h-4" /> Create Test
          </button>
          <button className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border border-amber-200 dark:border-amber-500/20">
            <Video className="w-4 h-4" /> Upload Lecture
          </button>
          <button className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2">
            <PlusCircle className="w-4 h-4" /> Add User
          </button>
        </div>
      </div>

      {loading ? (
        <div className="h-64 flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800 mt-4 shadow-sm">
            <Loader2 className="w-10 h-10 animate-spin text-primary mb-3" />
            <p className="text-slate-500 font-bold">Booting Command Center...</p>
        </div>
      ) : (
        <>
          {/* 🔥 9. Notifications / Alerts Panel (Animated Ticker) */}
          <div className="flex items-center gap-4 bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/20 p-3 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-black text-xs uppercase tracking-widest px-3 border-r border-rose-200 dark:border-rose-500/20 shrink-0">
               <AlertTriangle className="w-4 h-4" /> Alerts
            </div>
            <div className="flex-1 overflow-hidden relative h-6">
              <motion.div 
                animate={{ y: [0, -24, -48, -72, -96] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="flex flex-col h-full absolute w-full top-1"
              >
                <div className="h-6 flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Payment Gateway experiencing high latency. 2 failed transactions in last 5 mins.</div>
                <div className="h-6 flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Traffic spike detected from Node NCR-1 (Organic).</div>
                <div className="h-6 flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> 140 Users' JEE Crash Course Subscription expiring in 24 hours.</div>
                <div className="h-6 flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Database backup scheduled in 30 minutes.</div>
                <div className="h-6 flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Payment Gateway experiencing high latency. 2 failed transactions in last 5 mins.</div>
              </motion.div>
            </div>
          </div>

          {/* 🔥 2. Top Section (KPI Cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <Link href={kpi.link || "#"} key={kpi.label} className="block group">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className={`bg-white dark:bg-[#0f172a] rounded-2xl p-5 border ${kpi.border} shadow-sm group-hover:shadow-md transition-all relative overflow-hidden h-full group-hover:-translate-y-1`}
                  >
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className={`w-3.5 h-3.5 ${kpi.color} opacity-50`} />
                    </div>
                    <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity bg-current" style={{ color: kpi.color }} />
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest z-10">{kpi.label}</p>
                      <div className={`p-2 rounded-xl ${kpi.bg} ${kpi.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-white tracking-tight mb-2 z-10 relative">{kpi.value}</div>
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-1 text-[11px] font-black ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {kpi.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {kpi.change}
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase">vs last 7d</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* ⚡ PRO Insights Strip */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-px shadow-lg shadow-indigo-500/20">
            <div className="bg-white dark:bg-[#0f172a] rounded-[15px] p-4 flex flex-col md:flex-row items-center gap-4 justify-between">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-indigo-500/10 rounded-xl">
                   <BrainCircuit className="w-5 h-5 text-indigo-500" />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-800 dark:text-white text-sm">AI Platform Insights</h3>
                   <p className="text-xs text-slate-500 font-medium">Smart analytics detecting anomalies in user behavior.</p>
                 </div>
               </div>
               <div className="flex gap-2 flex-wrap text-xs">
                 <div className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-600 font-semibold flex items-center gap-2 shadow-sm font-mono tracking-tight">
                   🔥 Course XYZ is trending (+45% sales this week)
                 </div>
                 <div className="px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 text-rose-600 font-semibold flex items-center gap-2 shadow-sm font-mono tracking-tight">
                   ⚠️ 23% users dropped off completely after 'Test 3 - Advanced Thermo'.
                 </div>
               </div>
            </div>
          </div>

          {/* MAIN GRID - 3 Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 📈 3. Graph Section (Growth Visualization) - 8 Cols */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Revenue & Growth Chart */}
              <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative overflow-hidden">
                <div className="flex justify-between items-end mb-8 relative z-10">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Financial & Growth Trajectory</h2>
                    <p className="text-xs font-semibold text-slate-500">Daily Revenue Performance vs Target</p>
                  </div>
                  <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 outline-none">
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Year</option>
                  </select>
                </div>
                
                <div className="h-72 w-full relative z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} tickFormatter={(val) => `₹${val/1000}k`} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', fontWeight: 'bold' }}
                        itemStyle={{ fontSize: '12px' }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                      <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Grid for Bottom Graphs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* User Growth Graph */}
                <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <h2 className="text-md font-bold text-slate-800 dark:text-white mb-1">User Acquisition Flow</h2>
                  <p className="text-xs text-slate-500 mb-6 font-semibold">New Signups vs Returning (6 Months)</p>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: '1px solid #334155', background: '#0f172a' }} />
                        <Bar dataKey="new" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="returning" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Test Activity Graph */}
                <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-md font-bold text-slate-800 dark:text-white mb-1">Testing Telemetry</h2>
                      <p className="text-xs text-slate-500 font-semibold">Server load by daily test attempts</p>
                    </div>
                    <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg"><Zap className="w-4 h-4" /></div>
                  </div>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={testActivityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} />
                        <Tooltip />
                        <Line type="stepAfter" dataKey="attempts" stroke="#a855f7" strokeWidth={3} dot={{r: 4, strokeWidth: 2, fill: '#0f172a'}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Sidebar - 4 Cols */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* 🌍 4. Traffic Source Section */}
              <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                <h2 className="text-md font-bold text-slate-800 dark:text-white mb-1 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-400" /> Visitor Demographics (GA4)
                </h2>
                <p className="text-xs text-slate-500 mb-6 font-semibold">Traffic channels for last 30 days</p>
                
                <div className="h-40 w-full relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {trafficData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={TRAFFIC_COLORS[index % TRAFFIC_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-lg font-black text-slate-800 dark:text-white">100%</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 mt-4">
                  {trafficData.map((source, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: TRAFFIC_COLORS[i] }} />
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{source.name}</span>
                      </div>
                      <span className="text-xs font-black text-slate-900 dark:text-white">{source.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 💰 5. Revenue Breakdown */}
              <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex-1">
                <h2 className="text-md font-bold text-slate-800 dark:text-white mb-4">Financial Drilldown</h2>
                
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Top Selling Course</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-black text-slate-800 dark:text-white">JEE Main Crash Course 2027</p>
                      <p className="text-emerald-500 font-black text-sm">₹8.4L</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Recurring Subscriptions</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-black text-slate-800 dark:text-white">All-India Test Series</p>
                      <p className="text-blue-500 font-black text-sm">₹4.2L</p>
                    </div>
                  </div>

                  <div className="p-4 bg-rose-50 dark:bg-rose-500/5 rounded-2xl border border-rose-100 dark:border-rose-500/10">
                    <p className="text-[10px] text-rose-500 font-bold uppercase tracking-widest mb-1">Failed Payments (24H)</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-black text-rose-700 dark:text-rose-400">14 Transactions</p>
                      <p className="text-rose-700 dark:text-rose-400 font-black text-sm">₹54,000 Risk</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM GRID - 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* 👨‍🎓 6. User Activity Section */}
            <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-md font-bold text-slate-800 dark:text-white">Live User Activity</h2>
                  <p className="text-xs text-slate-500 font-semibold">Real-time socket connections & recent logins</p>
                </div>
                <div className="flex items-center gap-2">
                   <div className="flex -space-x-2">
                     <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-[#0f172a]" alt=""/>
                     <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-[#0f172a]" alt=""/>
                     <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-[#0f172a]" alt=""/>
                   </div>
                   <span className="text-xs font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">42 Active Now</span>
                </div>
              </div>

              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] uppercase font-black text-slate-400 tracking-widest">
                      <th className="pb-3 px-2">Student</th>
                      <th className="pb-3 px-2">Course Enrolled</th>
                      <th className="pb-3 px-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                    {[
                      { name: 'Rahul Sharma', time: 'Just now', course: 'JEE Masterclass', status: 'Online' },
                      { name: 'Priya Patel', time: '2 mins ago', course: 'NEET Droppers', status: 'Attempting Test' },
                      { name: 'Aman Singh', time: '15 mins ago', course: 'Free Trial', status: 'Idle' },
                      { name: 'Neha Gupta', time: '1 hour ago', course: 'Class 12 Boards', status: 'Offline' }
                    ].map((u, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-2">
                          <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{u.name}</p>
                          <p className="text-[10px] text-slate-500">{u.time}</p>
                        </td>
                        <td className="py-3 px-2 text-xs font-semibold text-slate-600 dark:text-slate-400">{u.course}</td>
                        <td className="py-3 px-2 text-right">
                          <span className={`inline-flex px-2 py-1 rounded text-[10px] font-bold ${
                            u.status === 'Online' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' :
                            u.status === 'Attempting Test' ? 'bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400' :
                            'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                          }`}>
                            {u.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 🏆 7. Test & Learning & Leaderboard */}
            <div className="bg-gradient-to-br from-slate-900 to-black rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-xl">
              {/* Decorative Background */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-4 right-4"><Medal className="w-12 h-12 text-yellow-500/30" strokeWidth={1} /></div>

              <div className="mb-6 z-10 relative">
                <h2 className="text-xl font-black text-white tracking-tight mb-1">Global Leaderboard Snapshot</h2>
                <p className="text-xs text-slate-400 font-semibold">Top performers & testing analytics today</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Tests Today</p>
                  <p className="text-2xl font-black text-white">1,482</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Avg Score</p>
                  <p className="text-2xl font-black text-emerald-400">76.4%</p>
                </div>
              </div>

              <div className="z-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Top 3 Students</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { rank: 1, name: "Kunal Verma", score: "99.8%", badge: "bg-yellow-500" },
                    { rank: 2, name: "Ishita Roy", score: "98.5%", badge: "bg-slate-300" },
                    { rank: 3, name: "Mohit Jain", score: "97.2%", badge: "bg-amber-600" },
                  ].map((student, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-slate-900 ${student.badge}`}>{student.rank}</div>
                        <span className="text-sm font-bold text-slate-200">{student.name}</span>
                      </div>
                      <span className="text-sm font-black text-white">{student.score}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </>
      )}
    </div>
  );
}
