"use client";

import { motion } from "framer-motion";
import { Briefcase, Search, Filter, FileText, UserCheck, UserX, ExternalLink, Clock } from "lucide-react";

export default function AdminJobs() {
  const applications = [
    { id: "APP-402", name: "Sunil Kumar", role: "Physics Subject Expert", applyDate: "Oct 25, 2025", exp: "5 Years", status: "Reviewing", ctc: "12 LPA expected", resume: "sunil_physics.pdf" },
    { id: "APP-401", name: "Preeti Singh", role: "Frontend Developer (React)", applyDate: "Oct 24, 2025", exp: "3 Years", status: "Shortlisted", ctc: "15 LPA expected", resume: "preeti_frontend.pdf" },
    { id: "APP-400", name: "Rajat Verma", role: "Content Writer (SSC)", applyDate: "Oct 22, 2025", exp: "2 Years", status: "Rejected", ctc: "6 LPA expected", resume: "rajat_content.pdf" },
    { id: "APP-399", name: "Neha Sharma", role: "Maths Faculty (JEE)", applyDate: "Oct 20, 2025", exp: "8 Years", status: "Hired", ctc: "24 LPA expected", resume: "neha_maths.pdf" },
    { id: "APP-398", name: "Gaurav Das", role: "Digital Marketing Exec", applyDate: "Oct 19, 2025", exp: "1 Year", status: "Reviewing", ctc: "5 LPA expected", resume: "gaurav_marketing.pdf" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Job Applications</h1>
          <p className="text-slate-500 font-medium">Manage candidates applying for various roles from the Careers page.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Applications", count: "402", color: "text-primary", bg: "bg-blue-50 dark:bg-primary/10" },
          { label: "Under Review", count: "45", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
          { label: "Shortlisted", count: "24", color: "text-secondary", bg: "bg-indigo-50 dark:bg-secondary/10" },
          { label: "Hired", count: "12", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <Briefcase className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="text-slate-500 font-semibold text-sm mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{stat.count}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Table Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, role, or ID..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>Status: All</option>
              <option>Reviewing</option>
              <option>Shortlisted</option>
              <option>Rejected</option>
              <option>Hired</option>
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
                <th className="p-4 pl-6">Candidate Details</th>
                <th className="p-4">Applied Role</th>
                <th className="p-4">Applied On</th>
                <th className="p-4">Resume</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {applications.map((app, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-primary dark:text-accent shrink-0 border border-slate-200 dark:border-slate-700">
                        {app.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors cursor-pointer mb-0.5">{app.name}</p>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                          <span>{app.exp} Exp.</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                          <span>{app.ctc}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-0.5 max-w-[200px] truncate" title={app.role}>{app.role}</p>
                    <p className="font-medium text-[11px] text-slate-500 tracking-widest">{app.id}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {app.applyDate}
                    </div>
                  </td>
                  <td className="p-4">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-600 dark:text-slate-300 font-bold text-xs rounded-lg transition-colors group/btn">
                      <FileText className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-primary" />
                      <span className="truncate max-w-[80px]" title={app.resume}>{app.resume}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 ml-1" />
                    </button>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded border text-[11px] font-black uppercase tracking-wider ${
                      app.status === 'Hired' 
                        ? 'border-emerald-200 text-emerald-700 bg-emerald-50 dark:border-emerald-500/30 dark:text-emerald-400 dark:bg-emerald-500/10' 
                        : app.status === 'Shortlisted'
                          ? 'border-blue-200 text-blue-700 bg-blue-50 dark:border-primary/30 dark:text-primary dark:bg-primary/10'
                          : app.status === 'Rejected'
                            ? 'border-rose-200 text-rose-700 bg-rose-50 dark:border-rose-500/30 dark:text-rose-400 dark:bg-rose-500/10'
                            : 'border-amber-200 text-amber-700 bg-amber-50 dark:border-amber-500/30 dark:text-amber-400 dark:bg-amber-500/10'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex justify-end gap-1 flex-wrap">
                      <button className="flex items-center gap-1 px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-400 font-bold text-xs rounded-lg transition-colors" title="Shortlist">
                        <UserCheck className="w-3.5 h-3.5" />
                      </button>
                      <button className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 dark:text-rose-400 font-bold text-xs rounded-lg transition-colors" title="Reject">
                        <UserX className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm font-medium text-slate-500 bg-white dark:bg-[#0f172a]">
            <span>Showing 1 to 5 of 402 applications</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md shadow-sm">1</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
