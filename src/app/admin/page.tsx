"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  BookOpen, 
  CreditCard, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Activity
} from "lucide-react";

const stats = [
  { label: "Total Students", value: "24,592", change: "+12%", trend: "up", icon: Users, color: "bg-blue-500" },
  { label: "Active Test Series", value: "156", change: "+4%", trend: "up", icon: BookOpen, color: "bg-indigo-500" },
  { label: "Monthly Revenue", value: "₹18.4L", change: "-2%", trend: "down", icon: CreditCard, color: "bg-emerald-500" },
  { label: "Active Sessions", value: "1,204", change: "+18%", trend: "up", icon: Activity, color: "bg-amber-500" }
];

const recentEnrollments = [
  { id: 1, name: "Rahul Sharma", email: "rahul.s@example.com", course: "JEE Main Ultimate", date: "2 mins ago", status: "Active" },
  { id: 2, name: "Priya Patel", email: "priya.p@example.com", course: "NEET UG dropper", date: "15 mins ago", status: "Active" },
  { id: 3, name: "Amit Kumar", email: "amit.k@example.com", course: "UPSC Prelims Master", date: "1 hour ago", status: "Pending" },
  { id: 4, name: "Sneha Reddy", email: "sneha.r@example.com", course: "SSC CGL Tier 1", date: "3 hours ago", status: "Active" },
  { id: 5, name: "Vikram Singh", email: "vikram.s@example.com", course: "Banking PO Mock", date: "5 hours ago", status: "Expired" },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Dashboard Overview</h1>
          <p className="text-slate-500 font-medium">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            Download Report
          </button>
          <button className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
            Create Test Series
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <Icon className={`w-24 h-24 ${stat.trend === 'up' ? 'text-primary' : 'text-slate-400'}`} />
              </div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3 rounded-xl text-white shadow-sm ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                  stat.trend === 'up' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' 
                    : 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {stat.change}
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-slate-500 font-semibold text-sm mb-1">{stat.label}</h3>
                <div className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{stat.value}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area (Mock) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Revenue & Enrollments</h2>
            <select className="bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-lg px-3 py-1.5 font-medium outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full flex items-end gap-2 pb-6 px-4 border-b border-slate-100 dark:border-slate-800/60 relative">
            {/* Y-axis lines mock */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
              {[4, 3, 2, 1, 0].map(i => (
                <div key={i} className="w-full h-px bg-slate-100 dark:bg-slate-800/50 flex items-center">
                  <span className="absolute -left-2 text-[10px] text-slate-400 font-medium">{i * 25}k</span>
                </div>
              ))}
            </div>
            {/* Mock Bars */}
            {[20, 35, 45, 30, 60, 80, 50, 65, 90, 75, 55, 40].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center group relative z-10 h-full">
                <div 
                  className="w-full max-w-[32px] bg-primary/20 dark:bg-accent/20 rounded-t-sm relative group-hover:bg-primary/40 transition-colors"
                  style={{ height: `${h}%` }}
                >
                  <div 
                    className="absolute bottom-0 w-full bg-primary dark:bg-accent rounded-t-sm"
                    style={{ height: `${h * 0.7}%` }}
                  />
                </div>
                {/* Tooltip mockup */}
                <div className="absolute -top-10 bg-slate-800 text-white text-xs font-bold py-1 px-2 rounded hidden group-hover:block whitespace-nowrap z-20">
                  ₹{h * 1.5}k
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs font-semibold text-slate-400 mt-3 px-4">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </motion.div>

        {/* Popular Test Series */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">Top Performing</h2>
            <button className="text-primary hover:text-secondary p-1"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { title: "JEE Main NTA Simulator", students: "12,400", price: "₹1,299", progress: 85 },
              { title: "NEET UG Ultimate Mock", students: "8,950", price: "₹999", progress: 70 },
              { title: "SSC CGL Tier 1 & 2", students: "5,210", price: "₹499", progress: 45 },
              { title: "UPSC Prelims CSAT", students: "3,100", price: "₹1,499", progress: 30 },
            ].map((course, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white line-clamp-1">{course.title}</h4>
                    <span className="text-xs font-medium text-slate-500">{course.students} students</span>
                  </div>
                  <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400">{course.price}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${course.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2.5 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">
            View All Series
          </button>
        </motion.div>
      </div>

      {/* Recent Enrollments Array */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-[#0f172a]">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">Recent Enrollments</h2>
          <button className="text-sm font-bold text-primary hover:text-secondary group flex items-center gap-1 transition-colors">
            View All <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">Student</th>
                <th className="p-4">Course / Test Series</th>
                <th className="p-4">Enrolled</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {recentEnrollments.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-100 to-primary/20 dark:from-indigo-900/50 dark:to-primary/30 flex items-center justify-center font-bold text-primary text-xs shrink-0 border border-white dark:border-slate-800 shadow-sm">
                        {enrollment.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{enrollment.name}</p>
                        <p className="font-medium text-xs text-slate-500">{enrollment.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {enrollment.course}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500">
                    {enrollment.date}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold ${
                      enrollment.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' 
                        : enrollment.status === 'Pending' 
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' 
                          : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400'
                    }`}>
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
