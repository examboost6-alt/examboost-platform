"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Filter, MoreHorizontal, Download, Users as UsersIcon, Smartphone, 
  MapPin, CheckCircle2, FileText, Image as ImageIcon, Briefcase, Eye, 
  UserPlus, FileCheck, X, Activity, AlertTriangle, User, Calendar, Save, Trash2, ShieldCheck, Loader2
} from "lucide-react";

import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AdminAdmissions() {
  const [selectedAdmission, setSelectedAdmission] = useState<number | null>(null);
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchAdmissions = async () => {
    setLoading(true);
    const supabase = getSupabaseClient();
    if(!supabase) {
        setLoading(false);
        return;
    }
    const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

    if(profiles) {
        const mapped = profiles.map((p: any) => {
           let status = "Pending";
           if (!p.photo_path || !p.phone) status = "Incomplete";
           else if (p.admission_completed) status = "Verified";

           return {
               id: `ADM-${p.id.substring(0, 6).toUpperCase()}`,
               authId: p.id,
               name: p.full_name || "Unknown User",
               email: p.email || "No Email Bound",
               phone: p.phone || "No Phone",
               photo: !!p.photo_path,
               photo_path: p.photo_path,
               state: p.state_location || "Not Set",
               exam: p.target_exam || "Unspecified",
               appliedDate: p.created_at ? new Date(p.created_at).toLocaleDateString() : "Unknown",
               status: status,
               dob: p.dob || "Unknown DOB"
           };
        });
        setAdmissions(mapped);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const filteredAdmissions = admissions.filter(a => {
      if(!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return a.id.toLowerCase().includes(q) || a.name.toLowerCase().includes(q) || a.phone.includes(q);
  });

  const admCard = selectedAdmission !== null ? filteredAdmissions[selectedAdmission] : null;

  return (
    <div className="flex flex-col gap-6 pb-8 relative">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white dark:bg-[#0f172a] p-6 lg:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        {/* Decorative BG element */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200 dark:border-emerald-800">
             <Activity className="w-3.5 h-3.5" /> Live Engine
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Admissions Queue</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base max-w-xl leading-relaxed">
            Review submitted student forms. Ensure photo ID verifications strictly match the records before approving exam hall tickets.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 relative z-10">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm transition-colors">
            <Filter className="w-4 h-4" /> Filter Pending
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 shadow-blue-500/20">
            <Download className="w-4 h-4" /> Batch Export CSV
          </button>
        </div>
      </div>

      {/* Analytics KPI Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Submissions", count: admissions.length.toLocaleString(), desc: "Lifetime applications", icon: FileText, color: "text-blue-500 flex-1", bg: "bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20" },
          { label: "Pending Verification", count: admissions.filter(a => a.status === 'Pending').length.toLocaleString(), desc: "Updates in real-time", icon: Eye, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20" },
          { label: "Approved Admissions", count: admissions.filter(a => a.status === 'Verified').length.toLocaleString(), desc: "Identity secured", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20" },
          { label: "Blocked / Incomplete", count: admissions.filter(a => a.status === 'Incomplete').length.toLocaleString(), desc: "Missing photo docs", icon: AlertTriangle, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20" }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              key={stat.label} 
              className={`rounded-2xl p-5 border shadow-sm flex flex-col justify-between group transition-colors ${stat.bg}`}
            >
              <div className="flex items-center justify-between mb-4">
                 <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm ${stat.color} group-hover:scale-110 transition-transform`}>
                   <Icon className="w-5 h-5" />
                 </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight mb-1">{stat.count}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">{stat.label}</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{stat.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full lg:w-[480px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Form ID (e.g., ADM-659), Name, or Phone..." 
              className="w-full pl-12 pr-4 py-2.5 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-blue-500 text-sm font-bold text-slate-800 dark:text-slate-100 transition-colors shadow-sm"
            />
          </div>
          
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort By:</span>
             <select className="bg-transparent border-0 font-bold text-sm text-slate-700 dark:text-slate-300 outline-none cursor-pointer">
                <option>Newest First</option>
                <option>Pending Verification</option>
                <option>Alphabetical A-Z</option>
             </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                <th className="p-5 pl-8 w-10">
                   <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                </th>
                <th className="p-5">Student Information</th>
                <th className="p-5">Geo Tracking</th>
                <th className="p-5">Target Course</th>
                <th className="p-5">KYC Documents</th>
                <th className="p-5">Verification</th>
                <th className="p-5 pr-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
              {loading ? (
                <tr>
                   <td colSpan={7} className="p-8 text-center text-slate-500 font-bold">
                       <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-indigo-500" />
                       Loading Admissions Engine...
                   </td>
                </tr>
              ) : filteredAdmissions.map((adm, index) => (
                <tr key={adm.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors group">
                  <td className="p-5 pl-8">
                     <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer border-slate-300 dark:border-slate-600" />
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black shrink-0 border-2 ${adm.photo ? 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900/50 dark:bg-emerald-900/20' : 'border-rose-100 bg-rose-50 text-rose-500 dark:border-rose-900/30 dark:bg-rose-900/10 text-rose-400'}`}>
                        {adm.photo ? <ImageIcon className="w-5 h-5"/> : <AlertTriangle className="w-5 h-5"/>}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-slate-100 text-base">{adm.name}</span>
                        <div className="flex items-center gap-2 mt-0.5">
                           <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{adm.id}</span>
                           <span className="text-xs font-semibold text-slate-500">{adm.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-semibold">
                       <MapPin className="w-4 h-4 text-slate-400"/> {adm.state}
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="inline-flex items-center px-2.5 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 rounded-lg font-bold text-[11px] uppercase tracking-wide">
                       {adm.exam}
                    </span>
                  </td>
                  <td className="p-5">
                    {adm.photo ? (
                      <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide">
                        <CheckCircle2 className="w-4 h-4"/> Photo 
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-500 font-bold text-xs uppercase tracking-wide">
                        <X className="w-4 h-4"/> Missing 
                      </span>
                    )}
                  </td>
                  <td className="p-5">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${
                          adm.status === 'Verified' ? 'bg-emerald-500 shadow-emerald-500/50 border border-emerald-400' : 
                          adm.status === 'Pending' ? 'bg-amber-500 shadow-amber-500/50 border border-amber-400' : 'bg-rose-500 shadow-rose-500/50 border border-rose-400'
                        }`} />
                        <span className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider">{adm.status}</span>
                      </div>
                      <span className={`text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1`}>
                        <Calendar className="w-3 h-3" /> {adm.appliedDate}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 pr-8 text-right">
                      <button 
                        onClick={() => setSelectedAdmission(index)}
                        className="text-white hover:text-white bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors py-2 px-4 rounded-xl font-bold flex items-center gap-2 ml-auto shadow-sm"
                        title="Review Form & Docs"
                      >
                        <Eye className="w-4 h-4" /> Review
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-5 md:p-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400 bg-white dark:bg-[#0f172a]">
           <span>Showing records 1 - 5 of 842,104</span>
           <div className="flex gap-2 font-sans font-medium text-sm capitalize tracking-normal">
              <button className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50 text-slate-600 dark:text-slate-300" disabled>Previous</button>
              <button className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 dark:text-slate-300">Next</button>
           </div>
        </div>
      </motion.div>

      {/* Profile Viewer Drawer */}
      <AnimatePresence>
         {selectedAdmission !== null && admCard && (
            <>
               <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                 onClick={() => setSelectedAdmission(null)}
               />
               <motion.div 
                 initial={{ x: '100%', boxShadow: '-20px 0 50px rgba(0,0,0,0)' }} 
                 animate={{ x: 0, boxShadow: '-20px 0 50px rgba(0,0,0,0.1)' }} 
                 exit={{ x: '100%', boxShadow: '-20px 0 50px rgba(0,0,0,0)' }}
                 transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                 className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-white dark:bg-[#0f172a] z-[110] border-l border-slate-200 dark:border-slate-800 flex flex-col h-screen"
               >
                 {/* Drawer Header */}
                 <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-[#0f172a]/80 shrink-0">
                    <div>
                      <h2 className="text-xl font-black text-slate-900 dark:text-white">Admission Details</h2>
                      <p className="font-mono text-xs font-bold text-slate-400 mt-1">{admCard.id}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedAdmission(null)}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors text-slate-500"
                    >
                      <X className="w-5 h-5"/>
                    </button>
                 </div>

                 {/* Drawer Content */}
                 <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                    
                    {/* Student Identity Card visual */}
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-1 shadow-xl shadow-indigo-500/20">
                       <div className="bg-white dark:bg-slate-900 rounded-[22px] p-6 relative overflow-hidden">
                          <img src="/grid-pattern.svg" className="absolute inset-0 opacity-5" alt="Background" />
                          <div className="flex justify-between items-start mb-6 border-b border-slate-100 dark:border-slate-800 pb-4 relative z-10">
                            <div>
                               <div className="text-[10px] font-black uppercase text-indigo-600 tracking-widest bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 px-2.5 py-1 rounded inline-block mb-1">Official Test Hall Ticket Data</div>
                               <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{admCard.name}</h3>
                            </div>
                          </div>
                          <div className="flex gap-6 relative z-10">
                             <div className={`w-24 h-28 rounded-xl shrink-0 flex items-center justify-center overflow-hidden border-2 border-slate-100 dark:border-slate-800 ${!admCard.photo ? 'bg-slate-50 dark:bg-slate-800/50' : ''}`}>
                               {!admCard.photo ? <User className="w-8 h-8 text-slate-300"/> : (
                                 <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/student-photos/${admCard.photo_path}`} className="w-full h-full object-cover" alt="Student ID Photo"/>
                               )}
                             </div>
                             <div className="flex-1 grid gap-4 grid-cols-2">
                                <div>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Exam</p>
                                  <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{admCard.exam}</p>
                                </div>
                                <div>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auth ID</p>
                                  <p className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200">{admCard.authId}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date of Birth</p>
                                  <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{admCard.dob}</p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Detailed Data Blocks */}
                    <div className="space-y-6">
                       <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">Contact & Location</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Email Address</span>
                            <span className="font-bold text-sm select-all">{admCard.email}</span>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Phone Number</span>
                            <span className="font-bold text-sm select-all">{admCard.phone}</span>
                          </div>
                          <div className="col-span-1 md:col-span-2 bg-slate-50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Registered State</span>
                            <span className="font-bold text-sm flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400"/> {admCard.state}</span>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">Admin Notes (Internal)</h4>
                       <textarea 
                          placeholder="Add verification notes here... (Not visible to student)"
                          className="w-full bg-slate-50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 min-h-[100px] text-sm font-medium outline-none focus:border-blue-500 resize-none shadow-inner"
                       ></textarea>
                    </div>

                 </div>

                 {/* Drawer Footer Actions */}
                 <div className="px-6 py-5 border-t border-slate-200 dark:border-slate-800 flex gap-3 bg-white dark:bg-[#0f172a] shrink-0">
                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2">
                       <ShieldCheck className="w-5 h-5"/> Verify Form
                    </button>
                    <button className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold px-5 rounded-xl transition-colors shrink-0" title="Download Form PDF">
                       <Download className="w-5 h-5"/>
                    </button>
                    <button className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 font-bold px-5 rounded-xl transition-colors shrink-0" title="Reject Admission">
                       <Trash2 className="w-5 h-5"/>
                    </button>
                 </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>

    </div>
  );
}
