"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Save, 
  ShieldCheck, 
  Globe, 
  Server, 
  Database,
  Webhook, 
  Key, 
  Bell, 
  CreditCard,
  Mail,
  MessageSquare,
  Lock,
  Smartphone,
  RefreshCw,
  Power,
  AlertTriangle,
  History,
  CheckCircle2
} from "lucide-react";

export default function EnterpriseSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    { id: "general", label: "Global Configurations", icon: Globe, desc: "Platform naming, regions, and basic policies" },
    { id: "security", label: "Security & Access", icon: ShieldCheck, desc: "2FA, IP Whitelists, Session policies" },
    { id: "integrations", label: "API & Integrations", icon: Webhook, desc: "Payment gateways, SMS, and Email CRM" },
    { id: "infrastructure", label: "Infrastructure", icon: Server, desc: "Caching, CDN, and Database backups" },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Enterprise Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">System Preferences</h1>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest border border-amber-200 dark:border-amber-500/20">
              Admin Only Level 5
            </span>
          </div>
          <p className="text-slate-500 font-medium text-sm">Configure global platform behavior, security protocols, and third-party API webhooks.</p>
        </div>
        
        <div className="flex gap-3 relative z-10">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm transition-colors border border-slate-200 dark:border-slate-700">
            <History className="w-4 h-4" /> Audit Logs
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold text-sm shadow-md transition-all ${
              isSaving 
                ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                : 'bg-primary hover:bg-secondary text-white shadow-primary/20'
            }`}
          >
            {isSaving ? <CheckCircle2 className="w-4 h-4 animate-in zoom-in" /> : <Save className="w-4 h-4" />}
            {isSaving ? 'Changes Applied' : 'Commit Changes'}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Advanced Navigation Sidebar */}
        <div className="lg:w-72 shrink-0 flex flex-col gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-start p-4 rounded-xl text-left transition-all duration-200 border ${
                  isActive
                    ? "bg-white dark:bg-[#0f172a] border-primary/50 dark:border-accent/50 shadow-sm"
                    : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-[#0f172a]/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <div className={`flex items-center gap-2.5 font-bold mb-1 ${isActive ? "text-primary dark:text-accent" : ""}`}>
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </div>
                <p className={`text-xs font-semibold ${isActive ? "text-slate-500" : "text-slate-500/70"}`}>
                  {tab.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Forms Container */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            
            {/* 1. Global Configurations */}
            {activeTab === "general" && (
              <motion.div 
                key="general"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="bg-slate-50/50 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 p-5 p-px-6 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Globe className="w-5 h-5 text-slate-400" /> Platform Identity
                    </h2>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Enterprise Entity Name</label>
                      <input type="text" defaultValue="ExamBoost Premium Ltd." className="px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-semibold transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Public Domain Root</label>
                      <input type="text" defaultValue="https://www.examboost.in" className="px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-semibold transition-colors font-mono" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Global Announcement Banner</label>
                      <textarea rows={2} defaultValue="Special 50% discount on all JEE & NEET courses. Use code DIWALI50." className="px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-semibold transition-colors resize-none" />
                      <div className="flex items-center gap-2 mt-1">
                        <input type="checkbox" id="banner" defaultChecked className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                        <label htmlFor="banner" className="text-xs font-bold text-slate-500">Enable banner on public site</label>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-rose-200 dark:border-rose-900/30 shadow-sm overflow-hidden">
                  <div className="bg-rose-50/50 dark:bg-rose-500/5 border-b border-rose-100 dark:border-rose-900/30 p-5 p-px-6">
                    <h2 className="text-lg font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> Danger Zone Actions
                    </h2>
                  </div>
                  <div className="p-6 flex flex-col gap-0 divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="flex justify-between items-center py-4 first:pt-0">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">System Maintenance Mode</h4>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">Locks all non-admin traffic. Queues active tests safely.</p>
                      </div>
                      <button className="w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 relative transition-colors shadow-inner">
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm absolute top-1 left-1 transition-transform" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center py-4 pb-0">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Force Global Invalidation</h4>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">Logs out all active users. Requires re-authentication.</p>
                      </div>
                      <button className="px-4 py-2 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-bold text-xs rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors">
                        Execute Flush
                      </button>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {/* 2. Security & Access */}
            {activeTab === "security" && (
              <motion.div 
                key="security"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="bg-slate-50/50 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 p-5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 dark:bg-secondary/20 text-secondary dark:text-secondary rounded-lg"><Lock className="w-5 h-5"/></div>
                      <div>
                        <h2 className="text-md font-bold text-slate-900 dark:text-white">Authentication Policies</h2>
                        <p className="text-xs font-semibold text-slate-500">Enforce strict rules for login and sessions</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-5">
                    {[
                      { title: "Require 2FA for 'Admin' Role", desc: "Mandates OTP or Authenticator app for Level-5 access.", icon: Smartphone, enabled: true },
                      { title: "Strict Device Binding", desc: "Prevents a student from sharing acc. Logs out from previous device automatically.", icon: Smartphone, enabled: true },
                      { title: "Block VPN / Proxy IPs", desc: "Drops traffic from known VPN datacenters using Cloudflare Threat Intel.", icon: Globe, enabled: false },
                    ].map((feature, i) => {
                      const FeatIcon = feature.icon;
                      return (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 dark:border-slate-800/50 last:border-0 last:pb-0">
                          <div className="flex gap-4 items-start">
                            <FeatIcon className="w-5 h-5 text-slate-400 mt-0.5" />
                            <div>
                              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{feature.title}</h4>
                              <p className="text-xs text-slate-500 font-medium mt-0.5 max-w-md">{feature.desc}</p>
                            </div>
                          </div>
                          <button className={`w-12 h-6 rounded-full relative transition-colors ${feature.enabled ? 'bg-secondary' : 'bg-slate-200 dark:bg-slate-700'}`}>
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm absolute top-1 transition-transform duration-300 ${feature.enabled ? 'translate-x-7' : 'translate-x-1'}`} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-6">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4">Admin Office IP Whitelisting</h3>
                  <div className="flex gap-3">
                    <input type="text" placeholder="e.g. 192.168.1.1/24" className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-secondary/50 text-sm font-mono transition-colors" />
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 rounded-xl font-bold text-sm shadow-sm transition-all">Add IP</button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono font-bold text-slate-600 dark:text-slate-300 flexItems-center gap-2">
                      103.24.180.12/32 <button className="hover:text-rose-500"><AlertTriangle className="w-3 h-3 inline ml-1"/></button>
                    </span>
                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono font-bold text-slate-600 dark:text-slate-300 flexItems-center gap-2">
                      115.112.98.0/24 <button className="hover:text-rose-500"><AlertTriangle className="w-3 h-3 inline ml-1"/></button>
                    </span>
                  </div>
                </section>
              </motion.div>
            )}

            {/* 3. API & Integrations */}
            {activeTab === "integrations" && (
              <motion.div 
                key="integrations"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                {[
                  { title: "Payment Gateways", desc: "Razorpay / Stripe Credentials", icon: CreditCard, color: "text-primary", bg: "bg-blue-100 dark:bg-primary/20", fields: ["rzp_live_key_id", "rzp_webhook_secret"] },
                  { title: "SMS Service (OTP)", desc: "Twilio / Fast2SMS Routing", icon: MessageSquare, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-500/20", fields: ["sms_api_key", "sms_sender_id"] },
                  { title: "Transactional Emails", desc: "AWS SES / SendGrid Configs", icon: Mail, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-500/20", fields: ["smtp_host", "ses_access_key"] },
                ].map((integ, i) => {
                  const Icon = integ.icon;
                  return (
                    <section key={i} className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/30 dark:bg-[#020617]/30">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${integ.bg} ${integ.color}`}><Icon className="w-5 h-5"/></div>
                          <div>
                            <h3 className="text-md font-bold text-slate-800 dark:text-white">{integ.title}</h3>
                            <p className="text-xs font-semibold text-slate-500">{integ.desc}</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">Connected</span>
                      </div>
                      <div className="p-6 flex flex-col gap-4">
                        {integ.fields.map(field => (
                          <div key={field} className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold font-mono text-slate-500 uppercase">{field}</label>
                            <div className="relative">
                              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input type="password" defaultValue="************************" className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-mono transition-colors text-slate-600 dark:text-slate-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )
                })}
              </motion.div>
            )}

            {/* 4. Infrastructure Options */}
            {activeTab === "infrastructure" && (
              <motion.div 
                key="infrastructure"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-accent/20 text-accent dark:text-accent flex items-center justify-center mb-2">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Database Snapshots</h3>
                  <p className="text-sm font-medium text-slate-500 line-clamp-2">Configure automated RDS backups and retention policies.</p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Last run: 45m ago</span>
                    <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Trigger Now</button>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mb-2">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Redis Cache Clear</h3>
                  <p className="text-sm font-medium text-slate-500 line-clamp-2">Purge question banks edge cache globally across endpoints.</p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                     <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Memory: 4.2GB / 8GB</span>
                    <button className="px-3 py-1.5 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg text-xs font-bold hover:bg-rose-100">Purge Cache</button>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 md:col-span-2">
                   <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                    <Server className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Compute Auto-Scaling</h3>
                  <div className="p-4 bg-slate-50 dark:bg-[#020617] rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
                    <div className="flex justify-between text-sm font-bold text-slate-700 dark:text-slate-300">
                      <span>Scale up threshold: 75% CPU</span>
                      <span>Max nodes: 32</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full w-full overflow-hidden flex">
                      <div className="h-full bg-emerald-500 w-1/4" />
                      <div className="h-full bg-slate-300 dark:bg-slate-600 w-2/4" />
                    </div>
                     <span className="text-xs font-semibold text-slate-500">Currently operating at 8 active cluster nodes (Healthy).</span>
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
