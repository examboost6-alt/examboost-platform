"use client";

import { motion } from "framer-motion";
import { Search, Filter, MoreHorizontal, UserCheck, UserX, UserPlus, Settings2, ShieldCheck, Download, Users as UsersIcon, Smartphone, MapPin, AlertTriangle, Activity } from "lucide-react";

export default function EnterpriseAdminUsers() {
  const users = [
    { id: "USR-092410", name: "Rahul Sharma", email: "rahul.sharma@example.com", phone: "+91 9876543210", role: "Student", risk: "Low", lastActive: "2 mins ago", device: "Android / App", loc: "Delhi NCR", status: "Active", ltv: "₹12,400" },
    { id: "USR-040212", name: "Priya Patel", email: "priya.p@example.com", phone: "+91 8765432109", role: "Student", risk: "Medium", lastActive: "15 mins ago", device: "Windows / Web", loc: "Gujarat", status: "Active", ltv: "₹4,999" },
    { id: "USR-009214", name: "Amit Kumar", email: "amit.k@example.com", phone: "+91 7654321098", role: "Teacher", risk: "Low", lastActive: "1 hr ago", device: "MacOS / Web", loc: "Maharashtra", status: "Active", ltv: "Staff" },
    { id: "USR-082190", name: "Sneha Reddy", email: "sneha.r@example.com", phone: "+91 6543210987", role: "Student", risk: "High", lastActive: "14 hrs ago", device: "iOS / App", loc: "Karnataka", status: "Suspended", ltv: "₹999" },
    { id: "USR-010294", name: "Vikram Singh", email: "vikram.s@example.com", phone: "+91 5432109876", role: "Admin", risk: "Low", lastActive: "Just now", device: "Linux / Web", loc: "Rajasthan", status: "Active", ltv: "System" },
    { id: "USR-112349", name: "Anjali Gupta", email: "anjali.g@example.com", phone: "+91 4321098765", role: "Student", risk: "Low", lastActive: "5 mins ago", device: "Android / App", loc: "UP", status: "Active", ltv: "₹1,499" },
    { id: "USR-098231", name: "Rohan Verma", email: "rohan.v@example.com", phone: "+91 3210987654", role: "Student", risk: "Critical", lastActive: "3 days ago", device: "Multiple IPs", loc: "Haryana", status: "Banned", ltv: "₹0" },
  ];

  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Global User Database</h1>
          <p className="text-slate-500 font-medium text-sm">Managing over 1.2+ Crore registered user profiles, roles, and security policies.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Download className="w-4 h-4" /> Bulk Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
            <UserPlus className="w-4 h-4" /> Provision Account
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Registered", count: "12,450,842", icon: UsersIcon, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Active Today", count: "2,845,102", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: " flagged / Suspended", count: "14,082", icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10" },
          { label: "Banned IPs / Users", count: "3,204", icon: UserX, color: "text-rose-500", bg: "bg-rose-500/10" }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              key={stat.label} 
              className="bg-white dark:bg-[#0f172a] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{stat.count}</h3>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Enterprise Data Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full lg:w-[400px] shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Query by UserID, Name, Email, Phone or IP..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-bold transition-colors shadow-sm"
            />
          </div>
          <div className="flex gap-2 lg:gap-3 flex-wrap">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 outline-none shadow-sm cursor-pointer">
              <option>Role: All</option>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 outline-none shadow-sm cursor-pointer">
              <option>Risk: All</option>
              <option>Risk: Low</option>
              <option>Risk: Medium</option>
              <option>Risk: High</option>
              <option>Risk: Critical</option>
            </select>
            <button className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 hover:text-primary flex items-center justify-center transition-colors shadow-sm">
              <Filter className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 hover:text-primary flex items-center justify-center transition-colors shadow-sm">
              <Settings2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <th className="p-4 pl-6">Profile & ID</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Telemetry <span className="lowercase text-slate-400 font-medium">(Device / Geo)</span></th>
                <th className="p-4">Role/LTV</th>
                <th className="p-4">Access Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-primary/20 dark:from-indigo-900/50 dark:to-primary/30 flex items-center justify-center font-black text-primary shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors cursor-pointer">{user.name}</p>
                        <p className="font-mono text-[10px] font-bold text-slate-400 mt-0.5">{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-slate-600 dark:text-slate-300">{user.email}</p>
                    <p className="font-medium text-slate-500">{user.phone}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                        <Smartphone className="w-3.5 h-3.5 text-slate-400" /> <span className="font-semibold">{user.device}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400" /> <span>{user.loc}</span> <span className="text-[10px] ml-1 opacity-70">({user.lastActive})</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-start gap-1.5">
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                        user.role === 'Admin' 
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400' 
                          : user.role === 'Teacher'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {user.role}
                      </span>
                      <span className="font-black text-emerald-600 dark:text-emerald-400 tracking-tight">{user.ltv}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full shadow-sm ${
                          user.status === 'Active'
                            ? 'bg-emerald-500 shadow-emerald-500/50' 
                            : user.status === 'Banned'
                              ? 'bg-rose-500 shadow-rose-500/50'
                              : 'bg-amber-500 shadow-amber-500/50'
                        }`} />
                        <span className="font-bold text-slate-700 dark:text-slate-300">{user.status}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        user.risk === 'Low' ? 'text-emerald-500' :
                        user.risk === 'Medium' ? 'text-amber-500' : 'text-rose-500'
                      }`}>
                        {user.risk} Risk Profile
                      </span>
                    </div>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="text-slate-400 hover:text-emerald-500 transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="Verify Identity">
                        <ShieldCheck className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="More Options">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400 bg-white dark:bg-[#0f172a]">
            <span>Showing records 1 - 7 of 12,450,842</span>
            <div className="flex gap-1 font-sans font-medium text-sm capitalize tracking-normal">
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md shadow-sm">1</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">3</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
