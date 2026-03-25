"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, MoreHorizontal, UserCheck, UserX, UserPlus, Settings2, ShieldCheck, Download, Users as UsersIcon, Smartphone, MapPin, AlertTriangle, Activity, Loader2, Clock } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function EnterpriseAdminUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const supabase = getSupabaseClient();

  const fetchUsers = async () => {
    setLoading(true);
    if (!supabase) {
        setLoading(false);
        return;
    }
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error("Error fetching users:", error.message);
        setUsers([]);
    } else {
        setUsers(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
      let matchesSearch = true;
      if (searchQuery) {
          const q = searchQuery.toLowerCase();
          matchesSearch = (user.full_name?.toLowerCase().includes(q) || user.email?.toLowerCase().includes(q) || user.id?.toLowerCase().includes(q));
      }
      let matchesRole = true;
      if (roleFilter !== "All") {
          const userRole = user.role || 'Student';
          matchesRole = userRole === roleFilter;
      }
      return matchesSearch && matchesRole;
  });

  const activeTodayCount = users.filter(u => {
      if(!u.last_sign_in_at && !u.updated_at && !u.created_at) return false;
      const d = new Date(u.last_sign_in_at || u.updated_at || u.created_at);
      const today = new Date();
      return d.toDateString() === today.toDateString();
  }).length;

  const suspendedCount = users.filter(u => u.status === 'Suspended' || u.risk === 'High').length;
  const bannedCount = users.filter(u => u.status === 'Banned' || u.risk === 'Critical').length;

  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Global User Database</h1>
          <p className="text-slate-500 font-medium text-sm">Managing registered live user profiles, roles, and security policies.</p>
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
          { label: "Total Registered", count: users.length.toLocaleString(), icon: UsersIcon, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Active Today", count: activeTodayCount.toLocaleString(), icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: " flagged / Suspended", count: suspendedCount.toLocaleString(), icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500/10" },
          { label: "Banned IPs / Users", count: bannedCount.toLocaleString(), icon: UserX, color: "text-rose-500", bg: "bg-rose-500/10" }
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

      {loading ? (
          <div className="h-64 flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800 mt-4">
             <Loader2 className="w-10 h-10 animate-spin text-primary mb-3" />
             <p className="text-slate-500 font-bold">Fetching Live User Database...</p>
          </div>
      ) : (
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full lg:w-[400px] shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Query by UserID, Name or Email..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-bold transition-colors shadow-sm"
            />
          </div>
          <div className="flex gap-2 lg:gap-3 flex-wrap">
            <select 
               value={roleFilter}
               onChange={(e) => setRoleFilter(e.target.value)}
               className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 outline-none shadow-sm cursor-pointer"
            >
              <option value="All">Role: All</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 outline-none shadow-sm cursor-pointer">
              <option>Risk: All</option>
              <option>Risk: Low</option>
              <option>Risk: Medium</option>
              <option>Risk: High</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <th className="p-4 pl-6">Profile & ID</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Telemetry <span className="lowercase text-slate-400 font-medium">(Target / Geo)</span></th>
                <th className="p-4">Role/LTV</th>
                <th className="p-4">Access Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
              {filteredUsers.length === 0 ? (
                  <tr>
                      <td colSpan={6} className="p-10 text-center font-bold text-slate-500">
                          No users found matching your criteria.
                      </td>
                  </tr>
              ) : filteredUsers.map((user) => {
                const role = user.role || 'Student';
                const status = user.status || 'Active';
                const risk = user.risk || 'Low';
                const targetExam = user.target_exam || 'Not Set';
                const phone = user.phone || 'No Phone Sync';
                const createdStr = user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Unknown';

                return (
                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-primary/20 dark:from-indigo-900/50 dark:to-primary/30 flex items-center justify-center font-black text-primary shrink-0 overflow-hidden">
                        {user.photo_path ? (
                            <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/student-photos/${user.photo_path}`} className="w-full h-full object-cover" alt="Profile" />
                        ) : (user.full_name?.charAt(0) || user.email?.charAt(0) || '?').toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors cursor-pointer">{user.full_name || 'Anonymous'}</p>
                        <p className="font-mono text-[10px] font-bold text-slate-400 mt-0.5">{user.id.substring(0, 15)}...</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-slate-600 dark:text-slate-300">{user.email}</p>
                    <p className="font-medium text-slate-500">{phone}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                        <Smartphone className="w-3.5 h-3.5 text-slate-400" /> <span className="font-semibold">{targetExam} / User</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3 h-3 text-slate-400" /> <span>Joined</span> <span className="text-[10px] ml-1 opacity-70">({createdStr})</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-start gap-1.5">
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                        role === 'Admin' 
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400' 
                          : role === 'Teacher'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {role}
                      </span>
                      <span className="font-black text-emerald-600 dark:text-emerald-400 tracking-tight">Standard</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full shadow-sm ${
                          status === 'Active'
                            ? 'bg-emerald-500 shadow-emerald-500/50' 
                            : status === 'Banned'
                              ? 'bg-rose-500 shadow-rose-500/50'
                              : 'bg-amber-500 shadow-amber-500/50'
                        }`} />
                        <span className="font-bold text-slate-700 dark:text-slate-300">{status}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        risk === 'Low' ? 'text-emerald-500' :
                        risk === 'Medium' ? 'text-amber-500' : 'text-rose-500'
                      }`}>
                        {risk} Risk Profile
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
              )})}
            </tbody>
          </table>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400 bg-white dark:bg-[#0f172a]">
            <span>Showing records 1 - {filteredUsers.length} of {users.length}</span>
            <div className="flex gap-1 font-sans font-medium text-sm capitalize tracking-normal">
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md shadow-sm">1</button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" disabled>Next</button>
            </div>
          </div>
        </div>
      </motion.div>
      )}
    </div>
  );
}
