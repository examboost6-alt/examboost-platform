"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Search, Filter, CheckCircle2, XCircle, Clock, Trash2, Reply, Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AdminContacts() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const supabase = getSupabaseClient();

  const fetchMessages = async () => {
    setLoading(true);
    if (!supabase) {
        setLoading(false);
        return;
    }
    const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error("Error fetching messages (table might not exist yet):", error.message);
        setMessages([]);
    } else {
        setMessages(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    if (!supabase) return;
    const { error } = await supabase.from('contact_messages').update({ status: newStatus }).eq('id', id);
    if (!error) {
       setMessages(prev => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
    } else {
       alert("Failed to update status");
    }
  };

  const deleteMessage = async (id: string) => {
    if (!supabase) return;
    if (confirm("Are you sure you want to delete this message?")) {
        const { error } = await supabase.from('contact_messages').delete().eq('id', id);
        if (!error) {
            setMessages(prev => prev.filter(m => m.id !== id));
        } else {
            alert("Failed to delete message");
        }
    }
  };

  const filteredMessages = messages.filter(msg => {
     let matchesSearch = true;
     if (searchQuery) {
         const q = searchQuery.toLowerCase();
         matchesSearch = (msg.name?.toLowerCase().includes(q) || msg.email?.toLowerCase().includes(q) || msg.subject?.toLowerCase().includes(q));
     }
     let matchesFilter = true;
     if (filterStatus !== "All") {
         matchesFilter = msg.status === filterStatus;
     }
     return matchesSearch && matchesFilter;
  });

  const stats = [
    { label: "Total Messages", count: messages.length, color: "text-primary", bg: "bg-blue-50 dark:bg-primary/10" },
    { label: "Unread / Pending", count: messages.filter(m => m.status === 'Unread').length, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
    { label: "Replied / Closed", count: messages.filter(m => m.status === 'Closed' || m.status === 'Replied').length, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-3">Contact Messages</h1>
          <p className="text-slate-500 font-medium">Manage actual live inquiries and support requests.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="bg-white dark:bg-[#0f172a] rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight leading-none mb-1">{stat.count}</h3>
                <p className="text-slate-500 font-semibold text-xs tracking-wide uppercase">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {loading ? (
        <div className="h-64 flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800">
           <Loader2 className="w-10 h-10 animate-spin text-primary mb-3" />
           <p className="text-slate-500 font-bold">Synchronizing Live Database...</p>
        </div>
      ) : (
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#0f172a] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#020617]/30">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search active messages..." 
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select 
               value={filterStatus}
               onChange={(e) => setFilterStatus(e.target.value)}
               className="px-4 py-3 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none hover:border-slate-400 cursor-pointer"
            >
              <option value="All">Status: All Statuses</option>
              <option value="Unread">Unread Actions</option>
              <option value="Replied">Replied Action</option>
              <option value="Closed">Closed Issues</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <th className="p-4 pl-8 py-5">Sender Identity</th>
                <th className="p-4 py-5">Message Context</th>
                <th className="p-4 py-5">Timestamp</th>
                <th className="p-4 py-5">State</th>
                <th className="p-4 pr-8 py-5 text-right">Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredMessages.length === 0 ? (
                  <tr>
                      <td colSpan={5} className="p-10 text-center font-semibold text-slate-500">
                          {searchQuery || filterStatus !== 'All' ? 'No messages match your search criteria.' : 'No messages found in the database.'}
                      </td>
                  </tr>
              ) : filteredMessages.map((msg, i) => (
                <tr key={msg.id || i} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-8 align-top w-64">
                    <div className="flex flex-col">
                      <p className="font-bold text-[15px] text-slate-800 dark:text-slate-200">{msg.name || "Unknown Sender"}</p>
                      <p className="font-medium text-xs text-slate-500 mt-1">{msg.email}</p>
                      {msg.phone && <p className="font-medium text-xs text-slate-500 mt-0.5">{msg.phone}</p>}
                    </div>
                  </td>
                  <td className="p-4 align-top max-w-sm">
                    <p className="font-black text-sm text-slate-800 dark:text-slate-300 mb-1.5 line-clamp-1">{msg.subject || "No Subject"}</p>
                    <p className="font-medium text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">{msg.message}</p>
                  </td>
                  <td className="p-4 align-top">
                    <div className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{new Date(msg.created_at).toLocaleDateString()}</span>
                      <span className="text-slate-400">{new Date(msg.created_at).toLocaleTimeString()}</span>
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    {msg.status === 'Unread' && <span className="inline-flex items-center px-2 py-1 rounded-[6px] text-[10px] font-black border border-amber-200 text-amber-600 bg-amber-50 dark:border-amber-500/30 dark:text-amber-400 dark:bg-amber-500/10 uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"/>Unread</span>}
                    {msg.status === 'Replied' && <span className="inline-flex items-center px-2 py-1 rounded-[6px] text-[10px] font-black border border-blue-200 text-primary bg-blue-50 dark:border-primary/30 dark:text-primary dark:bg-primary/10 uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5"/>Replied</span>}
                    {(msg.status === 'Closed' || !msg.status) && <span className="inline-flex items-center px-2 py-1 rounded-[6px] text-[10px] font-black border border-slate-200 text-slate-600 bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:bg-slate-800 uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-1.5"/>Closed</span>}
                  </td>
                  <td className="p-4 pr-8 align-top">
                    <div className="flex justify-end gap-2 flex-wrap">
                      <a href={`mailto:${msg.email}?subject=RE: ${msg.subject}`} onClick={() => updateStatus(msg.id, 'Replied')} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-primary dark:bg-primary/10 dark:hover:bg-primary/20 dark:text-primary font-bold text-xs rounded-lg transition-colors cursor-pointer">
                        <Reply className="w-3 h-3" /> Reply
                      </a>
                      {msg.status === 'Unread' && (
                        <button onClick={() => updateStatus(msg.id, 'Closed')} className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 font-bold text-xs rounded-lg transition-colors" title="Mark as Closed">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Close
                        </button>
                      )}
                      {msg.status === 'Replied' && (
                        <button onClick={() => updateStatus(msg.id, 'Closed')} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-400 font-bold text-xs rounded-lg transition-colors" title="Mark as Resolved">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Resolve
                        </button>
                      )}
                      
                      <button onClick={() => deleteMessage(msg.id)} className="text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10" title="Delete">
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
      )}
    </div>
  );
}
