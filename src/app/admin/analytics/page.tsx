"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminLayout from "@/components/AdminLayout";
import { 
  Users, Activity, Eye, Clock, MapPin, 
  Smartphone, Monitor, Tablet, Globe, 
  BarChart3, Target, Award, Database, CheckCircle2, 
  RefreshCw, Search, Loader2, ChevronDown, ChevronUp,
  History, Navigation
} from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

interface PageView {
  id: string;
  created_at: string;
  path: string;
  user_id: string | null;
  device_type: string;
  city: string;
  country: string;
}

interface UserTest {
  id: string;
  created_at: string;
  user_id: string;
  test_id: string;
  score: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  time_taken: number;
  responses: any;
}

interface Profile {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
}

export default function AdminAnalytics() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'visitors' | 'users' | 'performance'>('visitors');
  
  // Raw Data
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [userTests, setUserTests] = useState<UserTest[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('7d');
  const [expandedUsers, setExpandedUsers] = useState<Set<string>>(new Set());
  const supabase = getSupabaseClient();

  const fetchAnalyticsData = async () => {
    setLoading(true);
    if (!supabase) return;

    try {
      // Respect Date Range
      const now = new Date();
      if (dateRange === '24h') now.setHours(now.getHours() - 24);
      else if (dateRange === '7d') now.setDate(now.getDate() - 7);
      else if (dateRange === '30d') now.setDate(now.getDate() - 30);
      else if (dateRange === '90d') now.setDate(now.getDate() - 90);
      const isoThreshold = now.toISOString();

      // 1. Fetch Page Views
      const { data: pvData } = await supabase
          .from('page_views')
          .select('*')
          .gte('created_at', isoThreshold)
          .order('created_at', { ascending: false });

      // 2. Fetch User Tests
      const { data: utData } = await supabase
          .from('user_tests')
          .select('*')
          .gte('created_at', isoThreshold)
          .order('created_at', { ascending: false });

      // 3. Fetch Profiles
      const { data: profData } = await supabase
          .from('profiles')
          .select('id, full_name, email, created_at');

      setPageViews(pvData || []);
      setUserTests(utData || []);
      setProfiles(profData || []);

    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange]);

  const toggleRowExpansion = (id: string) => {
    const newExpanded = new Set(expandedUsers);
    if (newExpanded.has(id)) newExpanded.delete(id);
    else newExpanded.add(id);
    setExpandedUsers(newExpanded);
  };

  // --- Derived Analytics Computations ---

  const visitorStats = useMemo(() => {
    const totalVisits = pageViews.length;
    const uniqueIPs = new Set(pageViews.map(v => v.user_id || v.city + v.device_type)).size; // Rough proxy for unique if anon
    const authenticatedVisits = pageViews.filter(v => v.user_id).length;
    
    // Devices
    const desktop = pageViews.filter(v => v.device_type === 'Desktop').length;
    const mobile = pageViews.filter(v => v.device_type === 'Mobile').length;
    const tablet = pageViews.filter(v => v.device_type === 'Tablet').length;

    // Top Pages
    const pagesMap = new Map();
    pageViews.forEach(v => {
        pagesMap.set(v.path, (pagesMap.get(v.path) || 0) + 1);
    });
    const topPages = Array.from(pagesMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([page, views]) => ({ page, views }));

    // Geolocation
    const geoMap = new Map();
    pageViews.forEach(v => {
        if (!v.city || v.city === 'Unknown') return;
        const key = `${v.city}, ${v.country}`;
        geoMap.set(key, (geoMap.get(key) || 0) + 1);
    });
    const topGeos = Array.from(geoMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([loc, views]) => ({ loc, views, percentage: Math.round((views / totalVisits) * 100) }));

    return {
      totalVisits,
      uniqueVisitors: uniqueIPs,
      authenticatedVisits,
      desktop: totalVisits ? Math.round((desktop / totalVisits) * 100) : 0,
      mobile: totalVisits ? Math.round((mobile / totalVisits) * 100) : 0,
      tablet: totalVisits ? Math.round((tablet / totalVisits) * 100) : 0,
      topPages,
      topGeos
    };
  }, [pageViews]);

  const userActivityStats = useMemo(() => {
     let mapped = profiles.map(prof => {
         const userViews = pageViews.filter(v => v.user_id === prof.id);
         const lastSeen = userViews.length > 0 ? userViews[0].created_at : prof.created_at;
         
         // Try to find device preference
         const devices = userViews.map(v => v.device_type);
         const preferredDevice = devices.sort((a,b) =>
              devices.filter(v => v===a).length - devices.filter(v => v===b).length
         ).pop() || 'Unknown';

         const locations = userViews.map(v => v.city).filter(c => c !== 'Unknown');
         const primaryLocation = locations.length > 0 ? locations[0] : 'Unknown';

         return {
             ...prof,
             lastSeen,
             totalVisits: userViews.length,
             preferredDevice,
             primaryLocation,
             history: userViews.slice(0, 5)
         };
     });

     if (searchTerm) {
         const term = searchTerm.toLowerCase();
         mapped = mapped.filter(p => p.full_name?.toLowerCase().includes(term) || p.email?.toLowerCase().includes(term));
     }

     return mapped.sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime()).slice(0, 100);
  }, [profiles, pageViews, searchTerm]);

  const studentPerformanceStats = useMemo(() => {
     let mapped = profiles.map(prof => {
         const tests = userTests.filter(t => t.user_id === prof.id);
         if (tests.length === 0) return null;

         const avgScore = tests.reduce((acc, t) => acc + t.score, 0) / tests.length;
         const bestScore = Math.max(...tests.map(t => t.score));
         const totalQuestions = tests.reduce((acc, t) => acc + t.correct + t.incorrect + t.unattempted, 0);
         const correctAnswers = tests.reduce((acc, t) => acc + t.correct, 0);
         const totalTime = tests.reduce((acc, t) => acc + t.time_taken, 0); // seconds

         return {
             ...prof,
             testsTaken: tests.length,
             avgScore: Math.round(avgScore),
             bestScore,
             totalQuestions,
             accuracy: totalQuestions ? Math.round((correctAnswers / (totalQuestions - tests.reduce((acc,t)=>acc+t.unattempted,0))) * 100) : 0,
             totalTime,
             recentTests: tests.slice(0, 5)
         };
     }).filter(Boolean) as any[];

     if (searchTerm) {
         const term = searchTerm.toLowerCase();
         mapped = mapped.filter(p => p.full_name?.toLowerCase().includes(term) || p.email?.toLowerCase().includes(term));
     }

     return mapped.sort((a, b) => b.testsTaken - a.testsTaken);
  }, [profiles, userTests, searchTerm]);

  if (loading && pageViews.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-widest text-sm">Aggregating Global Telemetry...</p>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 bg-white dark:bg-[#1e293b] p-6 md:p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <Activity className="w-64 h-64" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 rounded-md text-[10px] font-black uppercase tracking-widest mb-3 border border-indigo-200 dark:border-indigo-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" /> Live Telemetry
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Master Analytics</h1>
            <p className="text-slate-500 font-semibold flex items-center gap-2">
                Unified live tracking of visitors, navigations, and CBT metrics.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Find users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64 transition-all"
              />
            </div>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="24h">Past 24 Hours</option>
              <option value="7d">Past 7 Days</option>
              <option value="30d">Past 30 Days</option>
              <option value="90d">Past 90 Days</option>
            </select>
            <button
              onClick={fetchAnalyticsData}
              className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all active:scale-95"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-slate-700 w-fit">
          {[
            { id: 'visitors', label: 'Traffic Hub', icon: Globe },
            { id: 'users', label: 'User Journeys', icon: Navigation },
            { id: 'performance', label: 'CBT Telemetry', icon: Target }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-[#1e293b] text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'visitors' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
            
            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: 'Total Page Views', value: visitorStats.totalVisits.toLocaleString(), icon: Eye, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                { label: 'Unique IPs', value: visitorStats.uniqueVisitors.toLocaleString(), icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                { label: 'Authenticated Hits', value: visitorStats.authenticatedVisits.toLocaleString(), icon: Activity, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                { label: 'Time Filter', value: dateRange.toUpperCase(), icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' }
              ].map((metric, i) => (
                <div key={metric.label} className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className={`p-3 rounded-xl ${metric.bg} ${metric.color}`}>
                      <metric.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight relative z-10">{metric.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-2 relative z-10">{metric.label}</div>
                  <div className={`absolute -bottom-6 -right-6 p-8 rounded-full ${metric.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-150`}></div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Top Pages */}
              <div className="lg:col-span-7 bg-white dark:bg-[#1e293b] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <History className="w-5 h-5 text-indigo-500" /> Hot Pages
                </h3>
                <div className="space-y-4">
                  {visitorStats.topPages.length === 0 ? <p className="text-slate-500 italic">No traffic data yet.</p> :
                   visitorStats.topPages.map((page, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-slate-400 text-xs shrink-0">#{i+1}</div>
                      <div className="flex-1 bg-slate-50 dark:bg-[#0f172a] rounded-xl p-3 border border-slate-100 dark:border-slate-800 flex justify-between items-center group hover:border-indigo-200 transition-colors">
                          <div className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold truncate max-w-[200px] sm:max-w-xs">{page.page}</div>
                          <div className="font-black text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-lg text-sm">{page.views.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Devices & Geo */}
              <div className="lg:col-span-5 space-y-6 flex flex-col">
                  {/* Device Breakdown */}
                  <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-sm font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest flex items-center gap-2">Hardware</h3>
                    <div className="space-y-5">
                      {[
                        { type: 'Desktop OS', value: visitorStats.desktop, icon: Monitor, color: 'bg-blue-500' },
                        { type: 'Mobile Handsets', value: visitorStats.mobile, icon: Smartphone, color: 'bg-indigo-500' },
                        { type: 'Tablets', value: visitorStats.tablet, icon: Tablet, color: 'bg-emerald-500' }
                      ].map((device, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                <device.icon className="w-4 h-4" /> {device.type}
                            </span>
                            <span className="text-sm font-black text-slate-900 dark:text-white">{device.value}%</span>
                          </div>
                          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${device.value}%` }} transition={{ duration: 1, ease: 'easeOut' }} className={`h-full ${device.color}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Geolocation */}
                  <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex-1">
                    <h3 className="text-sm font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest flex items-center gap-2"><MapPin className="w-4 h-4"/> Geolocation (Approximated)</h3>
                    <div className="space-y-4">
                        {visitorStats.topGeos.length === 0 ? <p className="text-slate-500 text-sm">No valid geo-tags found.</p> :
                         visitorStats.topGeos.map((geo, i) => (
                            <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                                <span className="font-semibold text-slate-700 dark:text-slate-300 truncate pr-2">{geo.loc}</span>
                                <span className="font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">{geo.percentage}%</span>
                            </div>
                         ))}
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===================== USER JOURNEY TAB ===================== */}
        {activeTab === 'users' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white dark:bg-[#1e293b] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-transparent">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Active Session Tracker</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Live mapping of authenticated users traversing the platform.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-[#0f172a]/50 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-4 pl-8">Student Identity</th>
                    <th className="p-4">Last Ping</th>
                    <th className="p-4">Total Interactions</th>
                    <th className="p-4">Primary Hardware</th>
                    <th className="p-4">Node Location</th>
                    <th className="p-4 text-right pr-8">View Trail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {userActivityStats.length === 0 ? <tr><td colSpan={6} className="p-8 text-center text-slate-500 font-semibold">No active sessions detected matching criteria.</td></tr> :
                   userActivityStats.map((user) => (
                    <React.Fragment key={user.id}>
                      <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group ${expandedUsers.has(user.id) ? 'bg-indigo-50/30 dark:bg-indigo-900/10' : ''}`}>
                        <td className="p-4 pl-8">
                          <div className="font-bold text-slate-900 dark:text-white text-sm">{user.full_name || 'Anonymous'}</div>
                          <div className="text-xs text-slate-500 font-mono mt-0.5">{user.email}</div>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                              {new Date(user.lastSeen).toLocaleDateString()}
                          </div>
                          <div className="text-xs text-slate-400">{new Date(user.lastSeen).toLocaleTimeString()}</div>
                        </td>
                        <td className="p-4 font-black text-indigo-600 dark:text-indigo-400">{user.totalVisits}</td>
                        <td className="p-4">
                           <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase">
                              {user.preferredDevice === 'Desktop' ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5"/>}
                              {user.preferredDevice}
                           </span>
                        </td>
                        <td className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                           {user.primaryLocation}
                        </td>
                        <td className="p-4 pr-8 text-right">
                          <button onClick={() => toggleRowExpansion(user.id)} className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-500 group-hover:text-indigo-500 transition-all">
                            {expandedUsers.has(user.id) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </td>
                      </tr>
                      
                      {/* Expanded View for User Journey */}
                      <AnimatePresence>
                        {expandedUsers.has(user.id) && (
                           <motion.tr initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-slate-50/80 dark:bg-[#0f172a]/80 shadow-inner">
                              <td colSpan={6} className="p-0 border-b-2 border-indigo-500/20">
                                 <div className="p-6 md:p-8">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><Navigation className="w-4 h-4"/> Recent Navigation Trail</h4>
                                    <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-4">
                                        {user.history.length === 0 ? <p className="pl-6 text-sm text-slate-500 italic">No detailed path history mapped.</p> :
                                         user.history.map((hit: any, i: number) => (
                                            <div key={hit.id} className="relative pl-6">
                                                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-slate-50 dark:ring-[#0f172a]" />
                                                <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 p-3 rounded-xl flex justify-between items-center shadow-sm">
                                                    <span className="font-mono text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{hit.path}</span>
                                                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{new Date(hit.created_at).toLocaleTimeString()} ({hit.os})</span>
                                                </div>
                                            </div>
                                         ))
                                        }
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
        )}

        {/* ===================== CBT TELEMETRY TAB ===================== */}
        {activeTab === 'performance' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
               <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-6 text-white shadow-lg overflow-hidden relative">
                   <Target className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
                   <div className="text-4xl font-black mb-1">{userTests.length}</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-indigo-100">Total CBT Exams Yielded</div>
               </div>
               <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 text-white shadow-lg overflow-hidden relative">
                   <CheckCircle2 className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
                   <div className="text-4xl font-black mb-1">{userTests.reduce((acc, t) => acc + t.correct, 0).toLocaleString()}</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-emerald-100">Questions Cracked</div>
               </div>
               <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 text-white shadow-lg overflow-hidden relative">
                   <Clock className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
                   <div className="text-4xl font-black mb-1">{Math.floor(userTests.reduce((acc, t) => acc + t.time_taken, 0) / 3600)} hrs</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-amber-100">Total Brain Time Logged</div>
               </div>
             </div>

             <div className="bg-white dark:bg-[#1e293b] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-transparent">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">Student CBT Manifest</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">Deep diver into absolute academic integrity and raw metrics.</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-[#0f172a]/50 text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800">
                                <th className="p-4 pl-8">Candidate Profile</th>
                                <th className="p-4">Tests Submitted</th>
                                <th className="p-4">Avg Quality</th>
                                <th className="p-4">Highest Strike</th>
                                <th className="p-4">Precision (Acc.)</th>
                                <th className="p-4 text-right pr-8">Audit Test Logs</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {studentPerformanceStats.length === 0 ? <tr><td colSpan={6} className="p-8 text-center text-slate-500 font-semibold">No test records registered yet.</td></tr> :
                             studentPerformanceStats.map(student => (
                                <React.Fragment key={`perf-${student.id}`}>
                                    <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group ${expandedUsers.has(`perf-${student.id}`) ? 'bg-indigo-50/30 dark:bg-indigo-900/10' : ''}`}>
                                        <td className="p-4 pl-8">
                                            <div className="font-bold text-slate-900 dark:text-white text-sm">{student.full_name || 'Anonymous'}</div>
                                            <div className="text-xs text-slate-500 font-mono mt-0.5">{student.email}</div>
                                        </td>
                                        <td className="p-4 font-black text-slate-700 dark:text-slate-300">{student.testsTaken} Tests</td>
                                        <td className="p-4">
                                             <div className="font-bold text-slate-900 dark:text-white">{student.avgScore} <span className="text-[10px] text-slate-400">pts</span></div>
                                        </td>
                                        <td className="p-4">
                                             <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 rounded text-xs font-black">
                                                <Award className="w-3.5 h-3.5"/> {student.bestScore}
                                             </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${student.accuracy > 75 ? 'bg-emerald-500' : student.accuracy > 40 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${student.accuracy}%` }}/>
                                                </div>
                                                <span className="font-bold text-xs text-slate-600 dark:text-slate-400 w-8">{student.accuracy}%</span>
                                            </div>
                                        </td>
                                        <td className="p-4 pr-8 text-right">
                                            <button onClick={() => toggleRowExpansion(`perf-${student.id}`)} className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:border-indigo-500 group-hover:text-indigo-500 transition-all">
                                                {expandedUsers.has(`perf-${student.id}`) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                            </button>
                                        </td>
                                    </tr>
                                    
                                    <AnimatePresence>
                                      {expandedUsers.has(`perf-${student.id}`) && (
                                         <motion.tr initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-slate-50/80 dark:bg-[#0f172a]/80 shadow-inner">
                                            <td colSpan={6} className="p-0 border-b-2 border-indigo-500/20">
                                               <div className="p-6 md:p-8">
                                                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2"><Database className="w-4 h-4"/> Cryptographic Answer Registry (Last 5 Sessions)</h4>
                                                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                                     {student.recentTests.map((t: any) => (
                                                         <div key={t.id} className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-xl p-4 shadow-sm flex flex-col gap-3">
                                                             <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-3 mb-1">
                                                                 <div>
                                                                     <div className="font-bold text-slate-800 dark:text-white text-sm mb-1">{t.test_id}</div>
                                                                     <div className="text-[10px] font-black uppercase text-slate-400">{new Date(t.created_at).toLocaleString()}</div>
                                                                 </div>
                                                                 <div className="text-right">
                                                                     <div className={`text-xl font-black ${t.score > 0 ? 'text-emerald-500' : 'text-red-500'}`}>{t.score} PTS</div>
                                                                     <div className="text-[10px] font-bold text-slate-500">{Math.floor(t.time_taken/60)}m {t.time_taken%60}s elapsed</div>
                                                                 </div>
                                                             </div>
                                                             <div className="grid grid-cols-3 gap-2">
                                                                 <div className="bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 p-2 rounded-lg text-center">
                                                                     <span className="block text-lg font-black">{t.correct}</span>
                                                                     <span className="block text-[9px] uppercase tracking-wider font-bold">Right</span>
                                                                 </div>
                                                                 <div className="bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 p-2 rounded-lg text-center">
                                                                     <span className="block text-lg font-black">{t.incorrect}</span>
                                                                     <span className="block text-[9px] uppercase tracking-wider font-bold">Wrong</span>
                                                                 </div>
                                                                 <div className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 p-2 rounded-lg text-center">
                                                                     <span className="block text-lg font-black">{t.unattempted}</span>
                                                                     <span className="block text-[9px] uppercase tracking-wider font-bold">Missed</span>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     ))}
                                                  </div>
                                               </div>
                                            </td>
                                         </motion.tr>
                                      )}
                                    </AnimatePresence>

                                </React.Fragment>
                             ))
                            }
                        </tbody>
                    </table>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </AdminLayout>
  );
}
