"use client";

import { motion } from "framer-motion";
import { Plus, BookOpen, Clock, FileText, CheckCircle, Search, Filter, MoreVertical, Edit, Trash2 } from "lucide-react";

const testSeries = [
  { id: "TS-101", title: "JEE Main Ultimate Mock 2026", category: "Engineering", tests: 45, students: 12400, price: "₹1,299", status: "Published" },
  { id: "TS-102", title: "NEET UG NCERT Master", category: "Medical", tests: 30, students: 8950, price: "₹999", status: "Published" },
  { id: "TS-103", title: "SSC CGL Tier 1 & 2 Complete", category: "SSC", tests: 120, students: 5210, price: "₹499", status: "Published" },
  { id: "TS-104", title: "UPSC Prelims CSAT", category: "UPSC", tests: 15, students: 3100, price: "₹1,499", status: "Draft" },
  { id: "TS-105", title: "Banking PO Mock Tests", category: "Banking", tests: 50, students: 4800, price: "₹399", status: "Published" },
  { id: "TS-106", title: "CUET General Test", category: "CUET", tests: 25, students: 1050, price: "₹299", status: "Review" },
];

export default function AdminTests() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Test Series</h1>
          <p className="text-slate-500 font-medium">Create, edit, and manage all your exam categories and mock tests.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20 whitespace-nowrap">
          <Plus className="w-5 h-5" /> Create New Series
        </button>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Test Series", count: "142", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
          { label: "Active Tests", count: "3,420", icon: FileText, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
          { label: "Total Questions", count: "125K+", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
          { label: "Draft Series", count: "12", icon: Clock, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              key={stat.label} 
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-slate-500 font-semibold text-sm mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{stat.count}</h3>
            </motion.div>
          );
        })}
      </div>

      {/* Main List Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search test series..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>All Categories</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>UPSC</option>
              <option>SSC</option>
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
                <th className="p-4 pl-6">Title & ID</th>
                <th className="p-4">Category</th>
                <th className="p-4">Stats</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {testSeries.map((series) => (
                <tr key={series.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <BookOpen className="w-6 h-6 text-primary dark:text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors cursor-pointer mb-0.5 line-clamp-1">{series.title}</p>
                        <p className="font-medium text-[11px] text-slate-500 uppercase tracking-widest">{series.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex px-2 py-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
                      {series.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-500">
                        <span>Tests:</span> <span className="text-slate-700 dark:text-slate-300">{series.tests}</span>
                      </div>
                      <div className="flex justify-between text-xs font-semibold text-slate-500">
                        <span>Enrolled:</span> <span className="text-slate-700 dark:text-slate-300">{series.students.toLocaleString()}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-black text-emerald-600 dark:text-emerald-400">
                    {series.price}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${
                        series.status === 'Published' 
                          ? 'bg-emerald-500' 
                          : series.status === 'Draft'
                            ? 'bg-slate-400'
                            : 'bg-amber-500'
                      }`} />
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{series.status}</span>
                    </div>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="More">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm font-medium text-slate-500 bg-white dark:bg-[#0f172a]">
          <span>Showing 1 to 6 of 142 series</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
