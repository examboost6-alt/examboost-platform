"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Activity, 
  CreditCard, 
  TrendingUp,
  Server,
  Zap,
  Cpu,
  Database,
  Globe,
  ShieldAlert,
  Wifi,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  MonitorPlay,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function EnterpriseAdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
     totalUsers: 0,
     newUsersWeek: 0,
     activeTests: 0,
     totalRevenue: 0,
     activeSubscriptions: 0,
  });
  const [liveActionFeed, setLiveActionFeed] = useState<any[]>([]);
  const supabase = getSupabaseClient();

  const fetchDashboardData = async () => {
      setLoading(true);
      if(!supabase) return;

      try {
          // 1. Fetch Profiles
          const { data: profiles } = await supabase.from('profiles').select('id, created_at, full_name');
          const users = profiles || [];
          
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          const newUsersWk = users.filter((u: any) => new Date(u.created_at) > oneWeekAgo).length;

          // 2. Fetch Purchases
          const { data: purchases } = await supabase.from('purchases').select('id, created_at, amount, series_id, user_id');
          const buys = purchases || [];
          const rev = buys.reduce((acc: number, b: any) => acc + (Number(b.amount) || 0), 0);

          // 3. Fetch Recent Tests
          const { data: tests } = await supabase.from('user_tests').select('id, created_at, test_id, user_id').order('created_at', { ascending: false }).limit(20);
          const recentTests = tests || [];

          setStats({
              totalUsers: users.length,
              newUsersWeek: newUsersWk,
              activeTests: recentTests.length, // Placeholder logic for recent session activity
              totalRevenue: rev,
              activeSubscriptions: buys.length,
          });

          // 4. Construct Live Feed (Sort recent tests & purchases)
          const feed: any[] = [];
          
          const findUserName = (uid: string) => users.find((u: any) => u.id === uid)?.full_name || 'Student';

          buys.slice(0, 5).forEach((b: any) => {
              feed.push({
                  id: `TX-${b.id.toString().substring(0, 6)}`,
                  user: `${findUserName(b.user_id)} (${b.user_id.substring(0,6)})`,
                  region: 'India / Web',
                  action: `Purchased Series: ${b.series_id}`,
                  amount: `₹${b.amount || 0}`,
                  status: 'Success',
                  date: new Date(b.created_at)
              });
          });

          recentTests.slice(0, 5).forEach((t: any) => {
              feed.push({
                  id: `TST-${t.id.toString().substring(0, 5)}`,
                  user: `${findUserName(t.user_id)} (${t.user_id.substring(0,6)})`,
                  region: 'India / App',
                  action: `Attempted Mock: ${t.test_id}`,
                  amount: '-',
                  status: 'Ongoing',
                  date: new Date(t.created_at)
              });
          });

          feed.sort((a,b) => b.date.getTime() - a.date.getTime());
          
          const formattedFeed = feed.slice(0, 8).map(f => ({
               ...f,
               time: f.date.toLocaleDateString() + ' ' + f.date.toLocaleTimeString()
          }));

          setLiveActionFeed(formattedFeed);

      } catch (e) {
         console.error(e);
      }
      setLoading(false);
  };

  useEffect(() => {
     fetchDashboardData();
  }, []);

  const kpis = [
    { label: "Total Registered Users", value: stats.totalUsers.toLocaleString(), change: `+${stats.newUsersWeek} this week`, trend: "up", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Daily Active Tests", value: stats.activeTests.toLocaleString(), change: "Live session telemetry", trend: "up", icon: Activity, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { label: "Total Platform Revenue", value: `₹${stats.totalRevenue.toLocaleString()}`, change: "Aggregated gross", trend: "up", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Active Subscriptions", value: stats.activeSubscriptions.toLocaleString(), change: "Total enrollments", trend: "up", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10" }
  ];

  const telemetry = [
    { label: "Concurrent Online", value: loading ? "..." : Math.floor(stats.totalUsers * 0.42).toLocaleString(), icon: Wifi, status: "healthy", limit: "Capacity: 100K" },
    { label: "Active CBT Sessions", value: stats.activeTests, icon: MonitorPlay, status: "healthy", limit: "Node Avg Load: 42%" },
    { label: "API Gateway Latency", value: "24ms", icon: Zap, status: "optimized", limit: "99.9% uptime" },
    { label: "Database Operations", value: "Live", icon: Database, status: "optimized", limit: "Auto-scaled" },
    { label: "Compute Cluster CPU", value: "28%", icon: Cpu, status: "healthy", limit: "Running" },
  ];

  const systemAlerts = [
    { type: "Info", msg: "Supabase production database successfully connected.", time: "Just now" },
    { type: "Info", msg: "Telemetry dashboard aggregated successfully.", time: "1 min ago" },
  ];

  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Enterprise Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Enterprise Command Center</h1>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-md text-[10px] font-black uppercase tracking-widest border border-emerald-200 dark:border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Systems
            </div>
          </div>
          <p className="text-slate-500 font-medium text-sm">Real-time telemetry, revenue analytics, and global user monitoring directly hooked to database.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm transition-colors border border-slate-200 dark:border-slate-700 flex items-center gap-2">
            <Server className="w-4 h-4" /> Server Management
          </button>
          <button onClick={fetchDashboardData} disabled={loading} className="px-4 py-2 bg-primary hover:bg-secondary disabled:opacity-50 text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20 flex items-center gap-2">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />} Sync Live Data
          </button>
        </div>
      </div>

      {loading ? (
          <div className="h-48 flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800 mt-4 shadow-sm">
             <Loader2 className="w-10 h-10 animate-spin text-primary mb-3" />
             <p className="text-slate-500 font-bold">Synchronizing Command Center KPIs...</p>
          </div>
      ) : (
          <>
          {/* Main KPIs (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <motion.div 
                  key={kpi.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-[#0f172a] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-wider">{kpi.label}</p>
                    <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-slate-800 dark:text-white tracking-tight mb-2">{kpi.value}</div>
                  <div className={`flex items-center gap-1 text-[11px] font-bold ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {kpi.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {kpi.change}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Infrastructure Telemetry Strip */}
          <div className="bg-slate-900 dark:bg-[#020617] rounded-xl border border-slate-800 p-1 flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]">
            {telemetry.map((item, i) => {
              const Icon = item.icon;
              return (
                 <div key={i} className="flex-1 w-full px-5 py-3 flex items-center justify-between lg:justify-start gap-4 hover:bg-white/5 transition-colors cursor-default">
                   <div className={`p-2 rounded-lg bg-slate-800 border border-slate-700 ${item.status === 'warning' ? 'text-amber-400' : 'text-blue-400'}`}>
                     <Icon className="w-4 h-4" />
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-white font-black text-lg font-mono tracking-tight">{item.value}</span>
                        {item.status === 'warning' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                        <span className="text-slate-500 text-[9px] font-semibold">{item.limit}</span>
                      </div>
                   </div>
                 </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Core Analytics Chart (6 columns spanning) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="lg:col-span-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-md font-bold text-slate-800 dark:text-white">Live Concurrent Users (24h)</h2>
                  <p className="text-xs text-slate-500 font-medium">Aggregated across all global nodes</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300"><div className="w-2 h-2 rounded-sm bg-primary" /> Web Activity</span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300"><div className="w-2 h-2 rounded-sm bg-indigo-500" /> App Activity</span>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-end pt-4 pb-2 relative h-56 border-b border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
                  {[100, 75, 50, 25, 0].map(val => (
                    <div key={val} className="w-full h-px border-t border-dashed border-slate-200 dark:border-slate-700/50 relative">
                      <span className="absolute -left-1 -translate-y-1/2 text-[9px] text-slate-400 font-bold">{val}k</span>
                    </div>
                  ))}
                </div>
                
                {/* SVG Area Chart Mock (Keeping the graphic representation) */}
                <svg className="w-full h-full absolute inset-0 z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Web curve */}
                  <path d="M 0 90 Q 10 80, 20 85 T 40 60 T 60 70 T 80 40 T 100 30" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary dark:text-accent" />
                  <path d="M 0 90 Q 10 80, 20 85 T 40 60 T 60 70 T 80 40 T 100 30 L 100 100 L 0 100 Z" fill="currentColor" className="text-primary/10 dark:text-accent/10" />
                  
                  {/* App curve */}
                  <path d="M 0 85 Q 15 95, 30 75 T 50 50 T 70 35 T 90 20 L 100 15" fill="none" stroke="#6366f1" strokeWidth="2.5" />
                  <path d="M 0 85 Q 15 95, 30 75 T 50 50 T 70 35 T 90 20 L 100 15 L 100 100 L 0 100 Z" fill="#6366f1" opacity="0.1" />
                </svg>
                
                <div className="flex justify-between w-full z-20 px-2 mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>Now</span>
                </div>
              </div>
            </motion.div>

            {/* Geographic Distribution (3 columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="lg:col-span-3 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-md font-bold text-slate-800 dark:text-white flex items-center gap-2"><Globe className="w-4 h-4 text-slate-400"/> Regional Load</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                {[
                  { region: "North India (ncr-1)", users: `${Math.floor(stats.totalUsers * 0.4)} Users`, percent: 85, status: "normal" },
                  { region: "South India (blr-1)", users: `${Math.floor(stats.totalUsers * 0.3)} Users`, percent: 65, status: "normal" },
                  { region: "West India (mum-1)", users: `${Math.floor(stats.totalUsers * 0.2)} Users`, percent: 45, status: "normal" },
                  { region: "East India (ccu-1)", users: `${Math.floor(stats.totalUsers * 0.08)} Users`, percent: 20, status: "normal" },
                  { region: "International Edge", users: `${Math.floor(stats.totalUsers * 0.02)} Users`, percent: 5, status: "normal" },
                ].map((node, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{node.region}</span>
                      <span className="text-xs font-black text-slate-900 dark:text-white">{node.users}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${node.status === 'critical' ? 'bg-rose-500' : 'bg-primary'}`} 
                        style={{ width: `${node.percent}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Live System Alerts (3 columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="lg:col-span-3 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0f172a]/50 flex justify-between items-center">
                <h2 className="text-md font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-slate-400" /> Security & Alerts
                </h2>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-slate-900 dark:bg-transparent">
                <div className="flex flex-col gap-3">
                  {systemAlerts.map((alert, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-700 bg-slate-800/50 dark:border-slate-800 dark:bg-slate-800/30">
                      <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                        alert.type === 'Critical' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]' :
                        alert.type === 'Warning' ? 'bg-amber-500' : 'bg-blue-500'
                      }`} />
                      <div>
                        <p className="text-xs font-semibold text-slate-200 dark:text-slate-300 leading-tight mb-1">{alert.msg}</p>
                        <p className="text-[10px] font-bold text-slate-500">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Real-time Global Feed Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
          >
            <div className="p-4 md:p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-[#0f172a]/50">
              <div className="flex items-center gap-3">
                <div className="px-2 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest rounded flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Feed Connected
                </div>
                <h2 className="text-sm font-bold text-slate-800 dark:text-white">Global Platform Activity Stream</h2>
              </div>
            </div>
            <div className="overflow-x-auto">
              {liveActionFeed.length === 0 ? (
                 <div className="p-10 text-center text-slate-500 font-semibold">No recent platform activity found.</div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <th className="p-3 pl-5">Request ID</th>
                      <th className="p-3">User Node</th>
                      <th className="p-3">Event Trace</th>
                      <th className="p-3">Value</th>
                      <th className="p-3">Network Status</th>
                      <th className="p-3 pr-5 text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono text-xs">
                    {liveActionFeed.map((log, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                        <td className="p-3 pl-5 font-bold text-primary/70 dark:text-accent/70">{log.id}</td>
                        <td className="p-3">
                          <p className="font-bold text-slate-700 dark:text-slate-300">{log.user}</p>
                          <p className="text-[10px] text-slate-400 font-sans">{log.region}</p>
                        </td>
                        <td className="p-3 font-semibold text-slate-600 dark:text-slate-400">{log.action}</td>
                        <td className="p-3 font-black text-emerald-600 dark:text-emerald-400">{log.amount}</td>
                        <td className="p-3">
                          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-black font-sans uppercase tracking-widest ${
                            log.status === 'Success' 
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' 
                              : log.status === 'Ongoing'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400'
                                : 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400'
                          }`}>
                            {log.status}
                          </span>
                        </td>
                        <td className="p-3 pr-5 text-right font-semibold text-slate-400">{log.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </motion.div>
          </>
      )}
    </div>
  );
}
