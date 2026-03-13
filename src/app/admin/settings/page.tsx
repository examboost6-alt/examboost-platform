"use client";

import { motion } from "framer-motion";
import { Save, User, Bell, Shield, Globe, Palette } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Platform Settings</h1>
          <p className="text-slate-500 font-medium">Manage your platform configurations and preferences.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1 border-r border-slate-200 dark:border-slate-800 pr-4">
          <nav className="flex flex-col gap-2">
            {[
              { id: "general", label: "General", icon: Globe, active: true },
              { id: "appearance", label: "Appearance", icon: Palette, active: false },
              { id: "account", label: "Account Info", icon: User, active: false },
              { id: "notifications", label: "Notifications", icon: Bell, active: false },
              { id: "security", label: "Security", icon: Shield, active: false },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-colors text-left ${
                    item.active
                      ? "bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Form Content */}
        <div className="lg:col-span-3">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-8">
            
            {/* General Settings Section */}
            <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                General Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Platform Name</label>
                  <input 
                    type="text" 
                    defaultValue="ExamBoost" 
                    className="px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
                  />
                  <span className="text-xs text-slate-500">The name of your platform exposed to users.</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Support Email</label>
                  <input 
                    type="email" 
                    defaultValue="support@examboost.in" 
                    className="px-4 py-2.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors text-slate-800 dark:text-slate-200"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Description</label>
                  <textarea 
                    rows={3}
                    defaultValue="Boost your exam preparation with mock tests, real CBT UI, verified solutions, and performance analytics across top competitive exams." 
                    className="px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors resize-none text-slate-800 dark:text-slate-200"
                  />
                </div>
              </div>
            </section>

            {/* Application Settings Section */}
            <section className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                Application Features
              </h2>
              
              <div className="flex flex-col gap-5">
                {[
                  { title: "User Registrations", desc: "Allow new users to sign up on the platform.", enabled: true },
                  { title: "Public Test Series", desc: "Display test series catalogue to non-logged-in users.", enabled: true },
                  { title: "Maintenance Mode", desc: "Show 'under maintenance' page. Only admins can access.", enabled: false },
                  { title: "Enable Real-time Analytics", desc: "Process analytics and generating reports in real-time.", enabled: true },
                ].map((feature, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 dark:border-slate-800/50 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{feature.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{feature.desc}</p>
                    </div>
                    <button 
                      className={`w-12 h-6 rounded-full relative transition-colors ${feature.enabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white shadow-sm absolute top-1 transition-transform duration-300 ${feature.enabled ? 'translate-x-7' : 'translate-x-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
