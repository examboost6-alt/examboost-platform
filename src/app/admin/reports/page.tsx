"use client";

import React, { useState, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Calendar, Loader2, LayoutDashboard, Target, CircleDollarSign, Users } from "lucide-react";
import { ChartSkeleton, KPISkeleton, TableSkeleton } from "./components/Skeletons";
import { getSupabaseClient } from "@/lib/supabaseClient";

// Lazy load feature tabs for Performance Optimization
const OverviewTab = React.lazy(() => import('./components/OverviewTab'));
const UserTrafficTab = React.lazy(() => import('./components/UserTrafficTab'));
const RevenueTab = React.lazy(() => import('./components/RevenueTab'));
const TestPerformanceTab = React.lazy(() => import('./components/TestPerformanceTab'));

export interface AnalyticsPayload {
  loading: boolean;
  pageViews: any[];
  userTests: any[];
  purchases: any[];
  profiles: any[];
}

export default function AnalyticsCommandCenter() {
  const [activeTab, setActiveTab] = useState<'overview' | 'traffic' | 'revenue' | 'performance'>('overview');
  const [dateRange, setDateRange] = useState('7d');
  const [isExporting, setIsExporting] = useState(false);
  
  // Real data state
  const [data, setData] = useState<AnalyticsPayload>({
    loading: true,
    pageViews: [],
    userTests: [],
    purchases: [],
    profiles: []
  });

  const supabase = getSupabaseClient();

  useEffect(() => {
    let isMounted = true;
    async function fetchRealData() {
      if (!supabase) return;
      if (dateRange === "empty") {
        setData({ loading: false, pageViews: [], userTests: [], purchases: [], profiles: [] });
        return;
      }
      
      setData(prev => ({ ...prev, loading: true }));
      
      try {
        const now = new Date();
        if (dateRange === '24h') now.setHours(now.getHours() - 24);
        else if (dateRange === '7d') now.setDate(now.getDate() - 7);
        else if (dateRange === '30d') now.setDate(now.getDate() - 30);
        else if (dateRange === '90d') now.setDate(now.getDate() - 90);
        const isoThreshold = now.toISOString();

        const [pvRes, utRes, pRes, profRes] = await Promise.all([
          supabase.from('page_views').select('*').gte('created_at', isoThreshold),
          supabase.from('user_tests').select('*').gte('created_at', isoThreshold),
          supabase.from('purchases').select('*').gte('created_at', isoThreshold),
          supabase.from('profiles').select('id, full_name, email, created_at')
        ]);

        if (isMounted) {
          setData({
            loading: false,
            pageViews: pvRes.data || [],
            userTests: utRes.data || [],
            purchases: pRes.data || [],
            profiles: profRes.data || []
          });
        }
      } catch (e) {
        console.error("Error fetching analytics data", e);
        if (isMounted) setData(prev => ({ ...prev, loading: false }));
      }
    }
    
    fetchRealData();
    return () => { isMounted = false; };
  }, [dateRange, supabase]);

  const mockExportCSV = () => {
    setIsExporting(true);
    setTimeout(() => {
      const csvContent = "data:text/csv;charset=utf-8,Date,Metric,Value\\n2026-04-18,Revenue,425000\\n2026-04-18,Active Users,1240\\n";
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `examboost_report_${dateRange}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsExporting(false);
    }, 1500);
  };

  const handleExportPDF = () => window.print();

  const FullPageSkeleton = () => (
    <div className="space-y-6">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6"><KPISkeleton/><KPISkeleton/><KPISkeleton/><KPISkeleton/></div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><ChartSkeleton/><ChartSkeleton/></div>
       <TableSkeleton/>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 mb-8 shadow-sm shadow-slate-200/50 dark:shadow-none mx-auto max-w-[1600px]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                 Command Center <span className="px-2 py-0.5 rounded-md bg-secondary/10 text-secondary text-[10px] uppercase tracking-widest border border-secondary/20">Live</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="pl-9 pr-8 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer shadow-sm appearance-none"
                >
                  <option value="24h">Today</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="empty">Empty Test Range</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-3">
                 <button onClick={mockExportCSV} disabled={isExporting} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#0f172a] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold shadow-sm transition-colors disabled:opacity-50">
                   {isExporting ? <Loader2 className="w-4 h-4 animate-spin"/> : <Download className="w-4 h-4" />} CSV
                 </button>
                 <button onClick={handleExportPDF} className="flex items-center gap-2 px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-sm shadow-indigo-500/20 transition-colors">
                   <FileText className="w-4 h-4" /> PDF
                 </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 overflow-x-auto custom-scrollbar-dark pb-1 w-full">
            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'traffic', label: 'User Analytics', icon: Users },
              { id: 'revenue', label: 'Revenue', icon: CircleDollarSign },
              { id: 'performance', label: 'Test Telemetry', icon: Target },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'traffic' | 'revenue' | 'performance')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-[#0f172a] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`}/>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 w-full max-w-[1600px] mx-auto">
          {data.loading ? (
             <FullPageSkeleton />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + dateRange}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Suspense fallback={<FullPageSkeleton />}>
                  {activeTab === 'overview' && <OverviewTab dateRange={dateRange} data={data} />}
                  {activeTab === 'traffic' && <UserTrafficTab dateRange={dateRange} data={data} />}
                  {activeTab === 'revenue' && <RevenueTab dateRange={dateRange} data={data} />}
                  {activeTab === 'performance' && <TestPerformanceTab dateRange={dateRange} data={data} />}
                </Suspense>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
    </div>
  );
}
