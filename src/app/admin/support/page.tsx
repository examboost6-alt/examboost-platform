"use client";

import { motion } from "framer-motion";
import { MessageSquare, Check, Reply, Filter, Search, Clock } from "lucide-react";

export default function AdminSupport() {
  const doubts = [
    { id: "TKT-1042", subject: "Math Question #45 in JEE Mock", student: "Rahul Sharma", course: "JEE Main Ultimate", status: "Open", time: "2 hours ago", priority: "High" },
    { id: "TKT-1041", subject: "Login issue with second device", student: "Pooja Reddy", course: "Platform Access", status: "Open", time: "5 hours ago", priority: "Medium" },
    { id: "TKT-1040", subject: "Biology NCERT doubt chapter 4", student: "Anjali Gupta", course: "NEET UG Dropper", status: "Resolved", time: "1 day ago", priority: "Low" },
    { id: "TKT-1039", subject: "SSC CGL test series not activating", student: "Vikram Singh", course: "SSC CGL Tier 1", status: "In Progress", time: "1 day ago", priority: "High" },
    { id: "TKT-1038", subject: "UPSC CSAT Syllabus Query", student: "Amit Kumar", course: "UPSC Prelims Master", status: "Resolved", time: "2 days ago", priority: "Low" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Student Support</h1>
          <p className="text-slate-500 font-medium">Resolve student doubts, platform issues, and technical queries.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Open Doubts", count: "124", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
          { label: "In Progress", count: "45", color: "text-primary", bg: "bg-blue-50 dark:bg-primary/10" },
          { label: "Resolved Today", count: "312", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{stat.count}</h3>
                <p className="text-slate-500 font-semibold text-sm">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Ticket Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Subject or Ticket ID..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>Status: Open</option>
              <option>Status: In Progress</option>
              <option>Status: Resolved</option>
              <option>Status: All</option>
            </select>
            <button className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 flex items-center justify-center transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">Query Subject</th>
                <th className="p-4">Student & Context</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Updated</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {doubts.map((doubt, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <p className="font-bold text-sm text-slate-800 dark:text-white group-hover:text-primary transition-colors cursor-pointer mb-0.5 max-w-[250px] truncate">{doubt.subject}</p>
                    <p className="font-medium text-[11px] text-slate-500 tracking-widest">{doubt.id}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-sm text-slate-700 dark:text-slate-300">{doubt.student}</p>
                    <p className="font-medium text-xs text-slate-400 max-w-[200px] truncate" title={doubt.course}>{doubt.course}</p>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                      doubt.priority === 'High' 
                        ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400' 
                        : doubt.priority === 'Medium'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                    }`}>
                      {doubt.priority}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold border ${
                      doubt.status === 'Open' 
                        ? 'border-amber-200 text-amber-600 bg-amber-50 dark:border-amber-500/30 dark:text-amber-400 dark:bg-amber-500/10' 
                        : doubt.status === 'In Progress'
                          ? 'border-blue-200 text-primary bg-blue-50 dark:border-primary/30 dark:text-primary dark:bg-primary/10'
                          : 'border-emerald-200 text-emerald-600 bg-emerald-50 dark:border-emerald-500/30 dark:text-emerald-400 dark:bg-emerald-500/10'
                    }`}>
                      {doubt.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {doubt.time}
                    </div>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex justify-end gap-2">
                      {doubt.status !== 'Resolved' && (
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary dark:bg-accent/10 dark:hover:bg-accent/20 dark:text-accent font-bold text-xs rounded-lg transition-colors">
                          <Reply className="w-3.5 h-3.5" /> Reply
                        </button>
                      )}
                      {doubt.status !== 'Resolved' && (
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-400 font-bold text-xs rounded-lg transition-colors">
                          <Check className="w-3.5 h-3.5" /> Close
                        </button>
                      )}
                      {doubt.status === 'Resolved' && (
                        <span className="text-xs font-bold text-emerald-500 px-3 py-1.5">Resolved</span>
                      )}
                    </div>
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
