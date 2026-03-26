"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Unlock, UserCheck, CheckCircle2, AlertCircle, PlusCircle, Loader2, Trash2, XCircle, Search, Mail } from "lucide-react";
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
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Free Access Management</h1>
          <p className="text-slate-500 font-medium">Create demo identities or instantly grant valid students platform-wide premium access directly to their email.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Operations Panels */}
        <div className="flex flex-col gap-6">

            {/* Grant Real User Panel */}
            <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
            >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <Unlock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">Unlock Existing Student</h2>
                <p className="text-xs text-slate-500 font-medium">Bypass gateway and unlock complete database</p>
                </div>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleGrantRealUser}>
                {userMessage && (
                <div className={`p-4 rounded-xl border font-semibold text-sm ${userMessage.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    {userMessage.text}
                </div>
                )}
                <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Registered Student Email</label>
                <div className="relative">
                    <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="email" 
                        required
                        value={targetEmail}
                        onChange={(e) => setTargetEmail(e.target.value)}
                        placeholder="Search specific user..." 
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-indigo-500/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
                    />
                </div>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl flex items-start gap-3">
                   <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                   <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold leading-relaxed">
                     This drops an 'ALL' flag onto their account, unlocking literally every premium mock series (JEE, NEET, SSC) deployed.
                   </p>
                </div>

                <button 
                type="submit" 
                disabled={grantingUser}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white rounded-xl font-bold shadow-md transition-colors shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                {grantingUser ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5 text-indigo-300" />} 
                {grantingUser ? 'Securing Registration...' : 'Authorize Full Account Sync'}
                </button>
            </form>
            </motion.div>

            {/* Create Demo Account Panel */}
            <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
            >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <PlusCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">Create Test Demo Account</h2>
                <p className="text-xs text-slate-500 font-medium">Bypass OTP verification locally</p>
                </div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleCreateDemo}>
                
                {message && (
                <div className={`p-4 rounded-xl border font-semibold text-sm ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    {message.text}
                </div>
                )}

                <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Target User Entity</label>
                <input 
                    type="text" 
                    required
                    value={demoName}
                    onChange={(e) => setDemoName(e.target.value)}
                    placeholder="e.g. Test Admin" 
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
                />
                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col gap-2 w-1/2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Test Email</label>
                    <input 
                        type="email" 
                        required
                        value={demoEmail}
                        onChange={(e) => setDemoEmail(e.target.value)}
                        placeholder="test@examboost.in" 
                        className="w-full px-4 py-2 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
                    />
                    </div>

                    <div className="flex flex-col gap-2 w-1/2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Dummy Pasword</label>
                    <input 
                        type="text" 
                        required
                        value={demoPassword}
                        onChange={(e) => setDemoPassword(e.target.value)}
                        placeholder="Min 6 char" 
                        minLength={6}
                        className="w-full px-4 py-2 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200" 
                    />
                    </div>
                </div>

                <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-2 py-3 border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 rounded-xl font-bold shadow-sm transition-colors flex items-center justify-center gap-2 text-sm"
                >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <PlusCircle className="w-4 h-4" />} 
                {loading ? 'Booting Identity...' : 'Generate Sandbox Account'}
                </button>
            </form>
            </motion.div>
        </div>

        {/* Global Access Ledger List */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col h-full"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">Active Privileged Ledgers</h2>
                <p className="text-xs text-slate-500 font-medium">Global users synchronized with 'ALL' bypass.</p>
              </div>
            </div>
            {fetchingUsers && <Loader2 className="w-5 h-5 animate-spin text-slate-400" />}
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {privilegedUsers.length === 0 && !fetchingUsers ? (
              <div className="flex flex-col gap-4 text-center items-center justify-center h-full text-slate-500 mt-10">
                 <AlertCircle className="w-10 h-10 mb-2 opacity-20" />
                 <p className="text-sm font-medium">No privileged users globally.</p>
                 <p className="text-xs">Identities bypassing payment modules will appear here.</p>
               </div>
            ) : (
              <div className="flex flex-col gap-4">
                {privilegedUsers.map(user => (
                  <div key={user.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#020617]/50 transition-colors relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500 rounded-r-xl"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-black tracking-tight text-slate-800 dark:text-slate-200">{user.full_name || 'Anonymous Platform User'}</h4>
                        <p className="text-xs font-bold text-slate-500 mt-0.5">{user.email}</p>
                      </div>
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        Platform Bypass Auth
                      </span>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                         ID: {user.id.substring(0,8)}...
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleRevoke(user.id)}
                          className="opacity-0 group-hover:opacity-100 text-rose-500 hover:text-white hover:bg-rose-500 border border-rose-200 dark:border-rose-900 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all focus:opacity-100 flex gap-1.5 items-center shadow-sm"
                        >
                          <XCircle className="w-3.5 h-3.5" /> Purge Route
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
import { ShieldCheck } from "lucide-react";
