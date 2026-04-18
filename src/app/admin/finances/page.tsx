"use client";

import { motion } from "framer-motion";
import { DollarSign, Download, Calendar, Filter, CreditCard, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";

export default function AdminFinances() {
  const transactions = [
    { id: "TRX-9482", user: "Rahul Sharma", item: "JEE Main Ultimate Mock", amount: "₹1,299", date: "Oct 24, 2025 · 14:32", status: "Success", method: "UPI" },
    { id: "TRX-9481", user: "Priya Patel", item: "NEET UG Dropper Series", amount: "₹999", date: "Oct 24, 2025 · 13:15", status: "Success", method: "Card" },
    { id: "TRX-9480", user: "Amit Kumar", item: "UPSC Prelims Master", amount: "₹1,499", date: "Oct 24, 2025 · 11:45", status: "Failed", method: "Netbanking" },
    { id: "TRX-9479", user: "Sneha Reddy", item: "SSC CGL Tier 1", amount: "₹499", date: "Oct 24, 2025 · 09:20", status: "Success", method: "UPI" },
    { id: "TRX-9478", user: "Vikram Singh", item: "Banking PO Mock", amount: "₹399", date: "Oct 23, 2025 · 21:10", status: "Refunded", method: "Card" },
    { id: "TRX-9477", user: "Anjali Gupta", item: "JEE Advanced Target", amount: "₹1,999", date: "Oct 23, 2025 · 18:45", status: "Success", method: "UPI" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Finance & Sales</h1>
          <p className="text-slate-500 font-medium">Track revenue, manage transactions, and review sales performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <Calendar className="w-4 h-4" /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", amount: "₹42.5L", change: "+15.2%", trend: "up", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
          { label: "Monthly Recurring", amount: "₹18.4L", change: "+8.4%", trend: "up", icon: TrendingUp, color: "text-primary", bg: "bg-blue-50 dark:bg-primary/10" },
          { label: "Successful Sales", amount: "12,450", change: "+12.1%", trend: "up", icon: CreditCard, color: "text-secondary", bg: "bg-indigo-50 dark:bg-secondary/10" },
          { label: "Refunds", amount: "₹45K", change: "-2.5%", trend: "down", icon: TrendingDown, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10" }
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
                <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                  stat.trend === 'up' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' 
                    : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' // Using green for refunds down too
                }`}>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${stat.trend === 'down' ? 'rotate-90' : ''}`} />
                  {stat.change}
                </div>
              </div>
              <p className="text-slate-500 font-semibold text-sm mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{stat.amount}</h3>
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
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">Recent Transactions</h2>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>Status: All</option>
              <option>Success</option>
              <option>Failed</option>
              <option>Refunded</option>
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
                <th className="p-4 pl-6">Transaction ID & Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Purchased Item</th>
                <th className="p-4">Method</th>
                <th className="p-4">Amount</th>
                <th className="p-4 pr-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {transactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <p className="font-bold text-sm text-primary dark:text-accent cursor-pointer mb-0.5">{trx.id}</p>
                    <p className="font-medium text-[11px] text-slate-500 tracking-tight">{trx.date}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{trx.user}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-sm text-slate-700 dark:text-slate-300 line-clamp-1">{trx.item}</p>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400">
                      {trx.method}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-black text-slate-800 dark:text-white">
                    {trx.amount}
                  </td>
                  <td className="p-4 pr-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold ${
                      trx.status === 'Success' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' 
                        : trx.status === 'Failed'
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm font-medium text-slate-500 bg-white dark:bg-[#0f172a]">
          <span>Showing 1 to 6 of 12,450 transactions</span>
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
