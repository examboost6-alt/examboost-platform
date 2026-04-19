"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Unlock, UserCheck, CheckCircle2, AlertCircle, PlusCircle, Loader2, Trash2, XCircle, Search, Mail, ShieldCheck } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AdminAccess() {
  const [demoName, setDemoName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoPassword, setDemoPassword] = useState("");
  const [grantAllAccess, setGrantAllAccess] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{type: "error"|"success", text: string} | null>(null);

  // For Real User Access
  const [targetEmail, setTargetEmail] = useState("");
  const [grantingUser, setGrantingUser] = useState(false);
  const [userMessage, setUserMessage] = useState<{type: "error"|"success", text: string} | null>(null);

  const [privilegedUsers, setPrivilegedUsers] = useState<any[]>([]);
  const [fetchingUsers, setFetchingUsers] = useState(true);
  const [revokeLoading, setRevokeLoading] = useState<Record<string, boolean>>({});

  const fetchPrivilegedUsers = async () => {
    setFetchingUsers(true);
    const supabase = getSupabaseClient();
    if (!supabase) return;
    
    try {
      // Find all users who have an 'ALL' series_id purchase
      const { data: allAccessPurchases } = await supabase
         .from('purchases')
         .select('user_id, created_at')
         .eq('series_id', 0)
         .eq('status', 'success');

      if (!allAccessPurchases || allAccessPurchases.length === 0) {
          setPrivilegedUsers([]);
          return;
      }

      const userIds = Array.from(new Set(allAccessPurchases.map((p: any) => p.user_id)));

      const { data: profiles } = await supabase
         .from('profiles')
         .select('id, email, full_name, created_at')
         .in('id', userIds);

      setPrivilegedUsers(profiles || []);

    } catch (err) {
      console.error(err);
    } finally {
      setFetchingUsers(false);
    }
  };

  useEffect(() => {
    fetchPrivilegedUsers();
  }, []);

  const handleCreateDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/create-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: demoName, email: demoEmail, password: demoPassword, grantAllAccess })
      });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: `Demo account created successfully! All access granted.` });
        setDemoName("");
        setDemoEmail("");
        setDemoPassword("");
        fetchPrivilegedUsers();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to create account" });
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleGrantRealUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setGrantingUser(true);
    setUserMessage(null);
    const supabase = getSupabaseClient();
    if (!supabase) return;

    try {
       // Search user by email
       const { data: profiles, error: profileErr } = await supabase
         .from('profiles')
         .select('id, full_name')
         .eq('email', targetEmail.trim())
         .limit(1);

       if (profileErr || !profiles || profiles.length === 0) {
           setUserMessage({ type: "error", text: "No registered user found with this email completely." });
           setGrantingUser(false);
           return;
       }

       const userId = profiles[0].id;

       // Grant Access via backend API to bypass RLS
       const res = await fetch('/api/admin/grant-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId: userId, seriesId: 0 })
       });
       
       const data = await res.json();

       if (!data.success) {
          setUserMessage({ type: "error", text: data.error || 'Failed to unlock access' });
       } else {
          setUserMessage({ type: "success", text: `Platform-wide access unlocked for ${profiles[0].full_name || targetEmail}!` });
          setTargetEmail("");
          fetchPrivilegedUsers();
       }
    } catch (err: any) {
        setUserMessage({ type: "error", text: err.message });
    }
    setGrantingUser(false);
  };

  const handleRevoke = async (userId: string) => {
    if (!confirm("Are you sure you want to completely revoke platform-wide access from this user?")) return;
    setRevokeLoading(prev => ({ ...prev, [userId]: true }));
    
    try {
        const res = await fetch('/api/admin/revoke-access', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId: userId, seriesId: 0 })
        });
        const data = await res.json();
        
        if (data.success) {
            alert("Platform access revoked securely.");
            fetchPrivilegedUsers();
        } else {
            alert("Error: " + data.error);
        }
    } catch (e: any) {
        alert("Error: " + e.message);
    }
    
    setRevokeLoading(prev => ({ ...prev, [userId]: false }));
  };


  return (
    <div className="flex flex-col gap-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Premium Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 sm:p-10 shadow-2xl border border-indigo-500/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full translate-y-1/3 -translate-x-1/4 mix-blend-screen"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-inner">
                 <ShieldCheck className="w-6 h-6 text-indigo-300" />
               </div>
               <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest shadow-sm shadow-emerald-500/20">
                 Admin Priority Access
               </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-3 tracking-tight">Free Access Authority</h1>
            <p className="text-indigo-200/80 font-medium text-sm sm:text-base leading-relaxed">
              Bypass strict monetization gateways. Create invincible demo identities or instantly grant platform-wide premium access directly to verified students.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Operations Panels (Left Column, span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Grant Real User Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              className="relative bg-white/60 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-indigo-500/5 p-6 sm:p-8 overflow-hidden group"
            >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/30">
                  <Unlock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">Elevate Student</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">Grant complete platform bypass.</p>
                </div>
            </div>

            <form className="relative z-10 flex flex-col gap-5" onSubmit={handleGrantRealUser}>
                {userMessage && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`p-4 rounded-xl border-2 font-semibold text-sm ${userMessage.type === 'success' ? 'bg-emerald-50/50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' : 'bg-red-50/50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20'}`}>
                    {userMessage.text}
                </motion.div>
                )}

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Target Account Email</label>
                  <div className="relative group/input">
                      <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors" />
                      <input 
                          type="email" 
                          required
                          value={targetEmail}
                          onChange={(e) => setTargetEmail(e.target.value)}
                          placeholder="Search unique identifier..." 
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-[#020617] border-2 border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:border-indigo-500/50 focus:bg-white dark:focus:bg-[#0a0f1c] text-sm font-semibold transition-all text-slate-800 dark:text-slate-200 shadow-inner group-focus-within/input:shadow-indigo-500/10"
                      />
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/5 border border-amber-200/50 dark:border-amber-500/20 rounded-2xl flex items-start gap-3 shadow-inner">
                   <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 drop-shadow-sm" />
                   <p className="text-[11px] sm:text-xs text-amber-800 dark:text-amber-300/90 font-semibold leading-relaxed">
                     Injecting an 'ALL' flag onto this account unlocks unrestricted access to premium modules (JEE, NEET, SSC).
                   </p>
                </div>

                <button 
                  type="submit" 
                  disabled={grantingUser}
                  className="w-full mt-2 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 disabled:opacity-50 disabled:grayscale text-white rounded-2xl font-black text-sm shadow-xl shadow-indigo-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {grantingUser ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />} 
                  {grantingUser ? 'Executing Override...' : 'Authorize Full Account Sync'}
                </button>
            </form>
            </motion.div>

            {/* Create Demo Account Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="relative bg-white/60 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none p-6 sm:p-8 overflow-hidden group"
            >
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>

            <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">Identity Sandbox</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">Generate verified accounts instantly.</p>
                </div>
            </div>

            <form className="relative z-10 flex flex-col gap-4" onSubmit={handleCreateDemo}>
                {message && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`p-4 rounded-xl border-2 font-semibold text-sm ${message.type === 'success' ? 'bg-emerald-50/50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' : 'bg-red-50/50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20'}`}>
                    {message.text}
                </motion.div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Sandbox Entity Name</label>
                  <input 
                      type="text" 
                      required
                      value={demoName}
                      onChange={(e) => setDemoName(e.target.value)}
                      placeholder="e.g. Sales Demo Admin" 
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border-2 border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-[#0a0f1c] text-sm font-semibold transition-all text-slate-800 dark:text-slate-200 shadow-inner"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Auth Email</label>
                      <input 
                          type="email" 
                          required
                          value={demoEmail}
                          onChange={(e) => setDemoEmail(e.target.value)}
                          placeholder="test@examboost.in" 
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border-2 border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-[#0a0f1c] text-sm font-semibold transition-all text-slate-800 dark:text-slate-200 shadow-inner"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 w-full sm:w-1/2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Bypass Password</label>
                      <input 
                          type="text" 
                          required
                          value={demoPassword}
                          onChange={(e) => setDemoPassword(e.target.value)}
                          placeholder="Min 6 characters" 
                          minLength={6}
                          className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border-2 border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-[#0a0f1c] text-sm font-semibold transition-all text-slate-800 dark:text-slate-200 shadow-inner" 
                      />
                    </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full mt-3 py-3.5 border-2 border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white disabled:opacity-50 disabled:grayscale rounded-2xl font-black text-sm shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <PlusCircle className="w-5 h-5" />} 
                  {loading ? 'Booting Identity...' : 'Generate Sandbox Account'}
                </button>
            </form>
            </motion.div>
        </div>

        {/* Global Access Ledger List (Right Column, span 7) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="lg:col-span-7 bg-white/60 dark:bg-[#0f172a]/60 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none flex flex-col h-full min-h-[500px]"
        >
          <div className="p-6 sm:p-8 flex items-center gap-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-transparent rounded-t-3xl">
            <div className="relative">
              <div className="absolute inset-0 bg-rose-500 blur-md opacity-20 rounded-full animate-pulse"></div>
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shadow-lg">
                <Search className="w-5 h-5 text-rose-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">Active Privileged Ledgers</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">Identities holding active 'ALL' bypass signatures across nodes.</p>
            </div>
            {fetchingUsers && <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />}
          </div>

          <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar bg-slate-50/30 dark:bg-transparent overflow-x-hidden">
            {privilegedUsers.length === 0 && !fetchingUsers ? (
              <div className="flex flex-col gap-4 text-center items-center justify-center h-full text-slate-500 my-10">
                 <div className="w-20 h-20 rounded-full border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center mb-2 bg-slate-50 dark:bg-slate-800/50">
                    <AlertCircle className="w-8 h-8 opacity-20" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No privileged ledgers detected.</p>
                   <p className="text-xs font-medium mt-1 max-w-[250px]">Identities bypassing payment modules will be continuously tracked and registered here.</p>
                 </div>
               </div>
            ) : (
              <div className="flex flex-col gap-4">
                {privilegedUsers.map(user => (
                  <div key={user.id} className="relative p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-[#020617]/40 hover:bg-slate-50 dark:hover:bg-[#020617]/80 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-r-2xl opacity-80"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-inner">
                          <span className="text-sm font-black text-slate-600 dark:text-slate-300">{user.full_name?.charAt(0) || '?'}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base font-black tracking-tight text-slate-800 dark:text-slate-100">{user.full_name || 'Anonymous Identifier'}</h4>
                            <span className="flex items-center gap-1 text-[9px] font-black uppercase px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-sm shadow-emerald-500/10">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
                            </span>
                          </div>
                          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" />
                            {user.email}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2 shrink-0">
                         <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700/50">
                            ID: {user.id.substring(0,8)}...
                         </div>
                         <button 
                            onClick={() => handleRevoke(user.id)}
                            disabled={revokeLoading[user.id]}
                            className="text-white bg-slate-900 border border-slate-700 hover:bg-rose-600 hover:border-rose-500 disabled:opacity-50 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/10 group/btn mt-1"
                          >
                            {revokeLoading[user.id] ? <Loader2 className="w-4 h-4 animate-spin text-rose-300" /> : <XCircle className="w-4 h-4 text-rose-500 group-hover/btn:text-white transition-colors" />} 
                            {revokeLoading[user.id] ? 'Purging...' : 'Purge Route'}
                          </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
