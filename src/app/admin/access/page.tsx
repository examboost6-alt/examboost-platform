"use client";

import { motion } from "framer-motion";
import { Search, Unlock, UserCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminAccess() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Free Access Management</h1>
          <p className="text-slate-500 font-medium">Grant free packages or test series access to specific students manually.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Search and Grant Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Unlock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Grant New Access</h2>
              <p className="text-xs text-slate-500 font-medium">Find a student and assign a package</p>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Find Student</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by Email or User ID..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Select Test Series / Package</label>
              <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors">
                <option value="">-- Choose Package --</option>
                <option value="jee">JEE Main Ultimate 2026</option>
                <option value="neet">NEET UG NCERT Master</option>
                <option value="ssc">SSC CGL Tier 1 & 2</option>
                <option value="upsc">UPSC Prelims CSAT Mock</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Access Duration</label>
              <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors">
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">1 Year</option>
                <option value="lifetime">Lifetime Access</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Reason / Notes (Internal)</label>
              <textarea 
                rows={2}
                placeholder="e.g. Scholarship winner, Refund issue..." 
                className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm transition-colors text-slate-800 dark:text-slate-200 placeholder:text-slate-400 resize-none"
              />
            </div>

            <button type="button" className="w-full mt-2 py-3 bg-primary hover:bg-secondary text-white rounded-xl font-bold shadow-md transition-colors shadow-primary/20 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Grant Free Access
            </button>
          </form>
        </motion.div>

        {/* Recent Grants Log */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col h-full"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Recent Access Logs</h2>
              <p className="text-xs text-slate-500 font-medium">History of access given manually by admins</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex flex-col gap-4">
              {[
                { name: "Suresh Kumar", email: "suresh@example.com", package: "NEET UG NCERT Master", duration: "1 Year", date: "Today, 10:30 AM", admin: "Vikram" },
                { name: "Pooja Reddy", email: "pooja.r@example.com", package: "JEE Main Ultimate", duration: "6 Months", date: "Yesterday, 14:15 PM", admin: "Vikram" },
                { name: "Ravi Shankar", email: "ravi.sh@example.com", package: "SSC CGL Complete", duration: "Lifetime", date: "Oct 20, 2025", admin: "Vikram" },
                { name: "Aman Gupta", email: "aman.g@example.com", package: "UPSC Prelims CSAT", duration: "1 Month", date: "Oct 18, 2025", admin: "Neha" },
              ].map((log, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#020617]/50 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{log.name}</h4>
                      <p className="text-xs text-slate-500">{log.email}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {log.date}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-2 py-1 rounded inline-block">
                      {log.package}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-500">
                    <span>Duration: <strong className="text-slate-700 dark:text-slate-300">{log.duration}</strong></span>
                    <span>By: <strong className="text-slate-700 dark:text-slate-300">{log.admin}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 items-center flex gap-2 text-xs font-medium text-slate-500">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            Logs cannot be deleted for audit and security purposes.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
