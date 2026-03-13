"use client";

import { motion } from "framer-motion";
import { Search, Filter, MoreHorizontal, UserCheck, UserX, UserPlus, Settings2 } from "lucide-react";

const users = [
  { id: "USR-001", name: "Rahul Sharma", email: "rahul.s@example.com", role: "Student", joined: "Oct 12, 2025", status: "Active", courses: 2 },
  { id: "USR-002", name: "Priya Patel", email: "priya.p@example.com", role: "Student", joined: "Oct 14, 2025", status: "Online", courses: 1 },
  { id: "USR-003", name: "Amit Kumar", email: "amit.k@example.com", role: "Teacher", joined: "Sep 20, 2025", status: "Active", courses: 5 },
  { id: "USR-004", name: "Sneha Reddy", email: "sneha.r@example.com", role: "Student", joined: "Nov 02, 2025", status: "Inactive", courses: 0 },
  { id: "USR-005", name: "Vikram Singh", email: "vikram.s@example.com", role: "Admin", joined: "Jan 10, 2023", status: "Active", courses: 42 },
  { id: "USR-006", name: "Anjali Gupta", email: "anjali.g@example.com", role: "Student", joined: "Nov 15, 2025", status: "Active", courses: 3 },
  { id: "USR-007", name: "Rohan Verma", email: "rohan.v@example.com", role: "Student", joined: "Dec 01, 2025", status: "Banned", courses: 1 },
];

export default function AdminUsers() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">User Management</h1>
          <p className="text-slate-500 font-medium">Manage students, teachers, and admins on the platform.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <Settings2 className="w-4 h-4" /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
            <UserPlus className="w-4 h-4" /> Add User
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Users", count: "25,842", icon: UserCheck, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
          { label: "Active Now", count: "1,204", icon: UserPlus, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
          { label: "Suspended", count: "48", icon: UserX, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10" }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              key={stat.label} 
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white">{stat.count}</h3>
              </div>
              <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </motion.div>
          );
        })}
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
              placeholder="Search by name, email, ID..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>All Roles</option>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
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
                <th className="p-4 pl-6">User Info</th>
                <th className="p-4">UserID</th>
                <th className="p-4">Role</th>
                <th className="p-4">Enrolled Courses</th>
                <th className="p-4">Joined On</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-primary/20 dark:from-indigo-900/50 dark:to-primary/30 flex items-center justify-center font-bold text-primary shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors cursor-pointer">{user.name}</p>
                        <p className="font-medium text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {user.id}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold ${
                      user.role === 'Admin' 
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400' 
                        : user.role === 'Teacher'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {user.courses}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500 tracking-tight">
                    {user.joined}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${
                        user.status === 'Active' || user.status === 'Online'
                          ? 'bg-emerald-500' 
                          : user.status === 'Banned'
                            ? 'bg-rose-500'
                            : 'bg-amber-500'
                      }`} />
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{user.status}</span>
                    </div>
                  </td>
                  <td className="p-4 pr-6">
                    <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm font-medium text-slate-500 bg-white dark:bg-[#0f172a]">
            <span>Showing 1 to 7 of 25,842 entries</span>
            <div className="flex gap-1">
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
