"use client";

import { motion } from "framer-motion";
import { Mail, Search, Filter, CheckCircle2, XCircle, Clock, Trash2, Reply } from "lucide-react";

export default function AdminContacts() {
  const messages = [
    { id: "MSG-8492", name: "Ramesh Sharma", email: "ramesh.sharma@example.com", phone: "+91 9876543210", subject: "Partnership Inquiry", message: "Hi team, we represent a chain of schools in Delhi and would like to partner for JEE prep...", date: "2 hours ago", status: "Unread" },
    { id: "MSG-8491", name: "Sunita Verma", email: "sunita.v@example.com", phone: "+91 8765432109", subject: "Bulk Subscription", message: "Looking for a discount on 50 NEET UG test series for my coaching institute.", date: "5 hours ago", status: "Unread" },
    { id: "MSG-8490", name: "Aarav Singh", email: "aarav123@example.com", phone: "+91 7654321098", subject: "App Bug Report", message: "The android app crashes when I try to attempt the mock test in landscape mode.", date: "1 day ago", status: "Replied" },
    { id: "MSG-8489", name: "Meena Kumari", email: "meena.k@example.com", phone: "+91 6543210987", subject: "Syllabus Update Doubt", message: "Has the newly added chapters in NCERT been updated in the NEET mock tests?", date: "2 days ago", status: "Replied" },
    { id: "MSG-8488", name: "Prakash Tiwari", email: "prakash.t@example.com", phone: "+91 9998887776", subject: "Refund Request", message: "I purchased the wrong course by mistake. Can I please get a refund?", date: "3 days ago", status: "Closed" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Contact Messages</h1>
          <p className="text-slate-500 font-medium">Manage inquiries, partnership proposals, and support requests from the Contact Us page.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Messages", count: "1,420", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
          { label: "Unread / Pending", count: "45", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
          { label: "Replied / Closed", count: "1,375", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{stat.count}</h3>
                <p className="text-slate-500 font-semibold text-sm">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Messages List Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, email or subject..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>Status: All</option>
              <option>Unread</option>
              <option>Replied</option>
              <option>Closed</option>
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
                <th className="p-4 pl-6">Sender Info</th>
                <th className="p-4">Message Details</th>
                <th className="p-4">Received</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {messages.map((msg, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6 align-top">
                    <div>
                      <p className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-0.5">{msg.name}</p>
                      <p className="font-medium text-xs text-slate-500">{msg.email}</p>
                      <p className="font-medium text-xs text-slate-500 mt-0.5">{msg.phone}</p>
                    </div>
                  </td>
                  <td className="p-4 align-top max-w-md">
                    <p className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">{msg.subject}</p>
                    <p className="font-medium text-xs text-slate-500 line-clamp-2 md:line-clamp-3 leading-relaxed">{msg.message}</p>
                  </td>
                  <td className="p-4 align-top">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {msg.date}
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold border ${
                      msg.status === 'Unread' 
                        ? 'border-amber-200 text-amber-600 bg-amber-50 dark:border-amber-500/30 dark:text-amber-400 dark:bg-amber-500/10' 
                        : msg.status === 'Replied'
                          ? 'border-blue-200 text-blue-600 bg-blue-50 dark:border-blue-500/30 dark:text-blue-400 dark:bg-blue-500/10'
                          : 'border-slate-200 text-slate-600 bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:bg-slate-800'
                    }`}>
                      {msg.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 align-top">
                    <div className="flex justify-end gap-2 flex-wrap">
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary dark:bg-accent/10 dark:hover:bg-accent/20 dark:text-accent font-bold text-xs rounded-lg transition-colors">
                        <Reply className="w-3.5 h-3.5" /> Reply
                      </button>
                      {msg.status === 'Unread' && (
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 font-bold text-xs rounded-lg transition-colors" title="Mark as Closed">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Close
                        </button>
                      )}
                      <button className="text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
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
