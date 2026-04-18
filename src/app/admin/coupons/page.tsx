"use client";

import { motion } from "framer-motion";
import { Plus, Search, Percent, Edit, Trash2, Power } from "lucide-react";

export default function AdminCoupons() {
  const coupons = [
    { code: "DIWALI50", discount: "50%", maxUses: 1000, used: 842, validUntil: "Nov 05, 2025", status: "Active" },
    { code: "NEWUSER20", discount: "20%", maxUses: "Unlimited", used: 2540, validUntil: "Dec 31, 2025", status: "Active" },
    { code: "JEEBOOST", discount: "₹500", maxUses: 500, used: 500, validUntil: "Oct 15, 2025", status: "Expired" },
    { code: "NEETWIN", discount: "30%", maxUses: 2000, used: 120, validUntil: "Jan 10, 2026", status: "Active" },
    { code: "SSCMAINS", discount: "₹200", maxUses: 100, used: 5, validUntil: "Nov 20, 2025", status: "Disabled" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Coupons & Offers</h1>
          <p className="text-slate-500 font-medium">Create and manage marketing discount codes for your students.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
          <Plus className="w-5 h-5" /> Create Coupon
        </button>
      </div>

      {/* Main List Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search coupon codes..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>Status: All</option>
              <option>Active</option>
              <option>Disabled</option>
              <option>Expired</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">Coupon Code</th>
                <th className="p-4">Discount</th>
                <th className="p-4">Usage Limits</th>
                <th className="p-4">Valid Until</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {coupons.map((coupon, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                        <Percent className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-black tracking-widest text-slate-800 dark:text-white group-hover:text-primary transition-colors cursor-pointer">{coupon.code}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{coupon.discount} off</span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        {coupon.used} <span className="text-xs font-medium text-slate-500">/ {coupon.maxUses}</span>
                      </span>
                      <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: coupon.maxUses === "Unlimited" ? "10%" : `${(coupon.used / (coupon.maxUses as number)) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500">
                    {coupon.validUntil}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold ${
                      coupon.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' 
                        : coupon.status === 'Expired'
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex justify-end gap-2">
                      <button className="text-slate-400 hover:text-amber-500 transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="Toggle Status"><Power className="w-4 h-4" /></button>
                      <button className="text-slate-400 hover:text-secondary transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="Edit"><Edit className="w-4 h-4" /></button>
                      <button className="text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10" title="Delete"><Trash2 className="w-4 h-4" /></button>
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
