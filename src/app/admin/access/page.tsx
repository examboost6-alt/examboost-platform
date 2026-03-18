"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Unlock, UserCheck, CheckCircle2, AlertCircle, PlusCircle, Loader2, Trash2, XCircle } from "lucide-react";

export default function AdminAccess() {
  const [demoName, setDemoName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoPassword, setDemoPassword] = useState("");
  const [grantAllAccess, setGrantAllAccess] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{type: "error"|"success", text: string} | null>(null);

  const [demoUsers, setDemoUsers] = useState<any[]>([]);
  const [fetchingDemos, setFetchingDemos] = useState(true);

  const fetchDemos = async () => {
    setFetchingDemos(true);
    try {
      const res = await fetch("/api/admin/manage-demos");
      const data = await res.json();
      if (data.success) {
        setDemoUsers(data.users || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setFetchingDemos(false);
    }
  };

  useEffect(() => {
    fetchDemos();
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
        fetchDemos();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to create account" });
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleRevoke = async (userId: string) => {
    if (!confirm("Are you sure you want to revoke free access for this user?")) return;
    try {
      const res = await fetch("/api/admin/manage-demos", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId })
      });
      const data = await res.json();
      if (data.success) {
        alert("Access revoked");
        fetchDemos();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  const handleDelete = async (userId: string) => {
    if (!confirm("Are you sure you want to completely delete this user? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/admin/manage-demos?userId=${userId}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        alert("User deleted");
        fetchDemos();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Free Access Management</h1>
          <p className="text-slate-500 font-medium">Create verified demo accounts and manage free test series access.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Create Demo Account Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <PlusCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Create Demo Account</h2>
              <p className="text-xs text-slate-500 font-medium">Auto-verified account bypassing OTP</p>
            </div>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleCreateDemo}>
            
            {message && (
              <div className={`p-4 rounded-xl border font-semibold text-sm ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                {message.text}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
              <input 
                type="text" 
                required
                value={demoName}
                onChange={(e) => setDemoName(e.target.value)}
                placeholder="e.g. Demo User" 
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
              <input 
                type="email" 
                required
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                placeholder="e.g. demo@examboost.in" 
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
              <input 
                type="text" 
                required
                value={demoPassword}
                onChange={(e) => setDemoPassword(e.target.value)}
                placeholder="Min 6 characters" 
                minLength={6}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-[#020617]/50 hover:border-primary/50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={grantAllAccess}
                  onChange={(e) => setGrantAllAccess(e.target.checked)}
                  className="w-5 h-5 accent-primary rounded" 
                />
                <div>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Grant ALL Test Series Access</span>
                  <span className="text-xs text-slate-500 font-medium">Instantly add 40+ mock test series packages for free</span>
                </div>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full mt-2 py-3 bg-primary hover:bg-secondary disabled:bg-slate-400 text-white rounded-xl font-bold shadow-md transition-colors shadow-primary/20 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Unlock className="w-5 h-5" />} 
              {loading ? 'Creating Account & Granting Access...' : 'Create Demo Account'}
            </button>
          </form>
        </motion.div>

        {/* Demo Accounts List */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col h-full"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">Active Demo Accounts</h2>
                <p className="text-xs text-slate-500 font-medium">Manage access and delete test users</p>
              </div>
            </div>
            {fetchingDemos && <Loader2 className="w-5 h-5 animate-spin text-slate-400" />}
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {demoUsers.length === 0 && !fetchingDemos ? (
              <div className="flex flex-col gap-4 text-center items-center justify-center h-full text-slate-500 mt-10">
                 <AlertCircle className="w-10 h-10 mb-2 opacity-20" />
                 <p className="text-sm font-medium">No demo accounts found.</p>
                 <p className="text-xs">Create one using the panel on the left.</p>
               </div>
            ) : (
              <div className="flex flex-col gap-4">
                {demoUsers.map(user => (
                  <div key={user.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#020617]/50 hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{user.name}</h4>
                        <p className="text-xs font-semibold text-slate-500">{user.email}</p>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        {user.hasFreeAccess ? (
                          <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-100 px-2 py-1 rounded">Has Full Access</span>
                        ) : (
                          <span className="text-[10px] font-black uppercase text-slate-500 bg-slate-200 px-2 py-1 rounded">No Extra Access</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {user.hasFreeAccess && (
                          <button 
                            onClick={() => handleRevoke(user.id)}
                            className="text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex gap-1 items-center"
                          >
                            <XCircle className="w-3.5 h-3.5" /> Revoke Access
                          </button>
                        )}
                        <button 
                          onClick={() => handleDelete(user.id)}
                          className="text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex gap-1 items-center"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
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
