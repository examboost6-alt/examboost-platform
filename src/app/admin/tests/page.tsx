"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, BookOpen, Clock, FileText, CheckCircle, Search, Filter, MoreVertical, Edit, Trash2, ArrowUpRight, BarChart2, ShieldCheck, Tag } from "lucide-react";
import Link from 'next/link';
import { getSupabaseClient } from "@/lib/supabaseClient";

type TestSeriesRow = {
  id: string;
  title: string;
  category: string | null;
  exam: string | null;
  price_inr: number;
  is_active: boolean;
  created_at: string;
};

export default function AdminTests() {
  const [rows, setRows] = useState<TestSeriesRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const [creating, setCreating] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newExam, setNewExam] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newPrice, setNewPrice] = useState<number | "">("");
  const [newActive, setNewActive] = useState(true);

  const [showCreator, setShowCreator] = useState(false);

  const supabase = useMemo(() => getSupabaseClient(), []);

  const fetchSeries = async () => {
    if (!supabase) return;
    setLoading(true);
    setError(null);
    const { data, error: e } = await supabase
      .from("test_series")
      .select("id,title,category,exam,price_inr,is_active,created_at")
      .order("created_at", { ascending: false });
    if (e) {
      setError(e.message);
      setRows([]);
    } else {
      setRows((data || []) as TestSeriesRow[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      const matchesQuery = !q || r.title.toLowerCase().includes(q) || (r.exam || "").toLowerCase().includes(q);
      const matchesCategory = categoryFilter === "All Categories" || (r.category || "") === categoryFilter;
      return matchesQuery && matchesCategory;
    });
  }, [rows, query, categoryFilter]);

  const onCreateSeries = async () => {
    if (!supabase) return;
    if (!newTitle.trim()) {
      setError("Title is highly required for a test series.");
      return;
    }

    setCreating(true);
    setError(null);
    const priceVal = typeof newPrice === 'string' ? parseFloat(newPrice) || 0 : newPrice;
    
    const { error: e } = await supabase.from("test_series").insert({
      title: newTitle.trim(),
      exam: newExam.trim() || null,
      category: newCategory.trim() || null,
      price_inr: Number.isFinite(priceVal) ? priceVal : 0,
      is_active: !!newActive,
    });
    setCreating(false);

    if (e) {
      setError(e.message);
      return;
    }

    setNewTitle("");
    setNewExam("");
    setNewCategory("");
    setNewPrice("");
    setNewActive(true);
    setShowCreator(false);
    await fetchSeries();
  };

  const toggleActive = async (id: string, next: boolean) => {
    if (!supabase) return;
    const { error: e } = await supabase.from("test_series").update({ is_active: next }).eq("id", id);
    if (e) {
      setError(e.message);
      return;
    }
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, is_active: next } : r)));
  };

  // Pagination Logic (Client-side)
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginatedList = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
     if(page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  return (
    <div className="flex flex-col gap-6 pb-8 h-full relative">
      
      {/* Header Module */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white dark:bg-[#0f172a] p-6 lg:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
        
        <div className="relative z-10 w-full sm:w-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-primary/20 to-blue-500/10 text-primary dark:text-blue-400 border border-primary/10">
              <BookOpen className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Test Packages</h1>
          </div>
          <p className="text-slate-500 font-medium max-w-xl leading-relaxed">Orchestrate your examination hierarchy, bundle test packages, and orchestrate pricing mechanics seamlessly.</p>
        </div>
        
        <div className="relative z-10 flex flex-wrap lg:flex-nowrap gap-3 items-center w-full md:w-auto">
            <Link href="/admin/tests/upload" className="flex-1 md:flex-none justify-center flex items-center gap-2 px-5 py-3 bg-white dark:bg-[#020617] hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm transition-all focus:ring-4 focus:ring-slate-100 dark:focus:ring-slate-800 whitespace-nowrap active:scale-[0.98]">
                <FileText className="w-4 h-4" /> Bulk JSON Upload
            </Link>
            <button 
                onClick={() => setShowCreator(!showCreator)} 
                className={`flex-1 md:flex-none justify-center flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all whitespace-nowrap active:scale-[0.98] ${
                    showCreator 
                    ? 'bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-700 dark:hover:bg-slate-600'
                    : 'bg-primary hover:bg-secondary text-white focus:ring-4 focus:ring-primary/20'
                }`}
            >
                <Plus className={`w-5 h-5 transition-transform duration-300 ${showCreator ? 'rotate-45' : ''}`} /> 
                {showCreator ? "Close Form" : "New Test Series"}
            </button>
        </div>
      </div>

      {/* Analytics Cluster */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Test Packages", count: String(rows.length), icon: BookOpen, color: "text-primary", bg: "bg-primary/10 dark:bg-primary/20", border: 'border-primary/20' },
          { label: "Active Packages", count: String(rows.filter((r) => r.is_active).length), icon: FileText, color: "text-secondary", bg: "bg-secondary/10 dark:bg-secondary/20", border: 'border-secondary/20' },
          { label: "Fully Published", count: "124", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10 dark:bg-emerald-500/20", border: 'border-emerald-500/20' },
          { label: "Offline Packages", count: String(rows.filter((r) => !r.is_active).length), icon: Clock, color: "text-accent", bg: "bg-accent/10 dark:bg-accent/20", border: 'border-accent/20' }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
              key={stat.label} 
              className="bg-white dark:bg-[#0f172a] rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 rotate-12 scale-150 transform origin-top-right">
                  <Icon className={`w-32 h-32 ${stat.color}`} />
              </div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} ${stat.border} border`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg">
                    <ArrowUpRight className="w-3.5 h-3.5" /> 12%
                </div>
              </div>
              <div className="relative z-10">
                  <p className="text-slate-500 font-bold tracking-wider text-[10px] uppercase mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{stat.count}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Creation Console Module */}
      <AnimatePresence>
        {showCreator && (
            <motion.div
                initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                animate={{ height: 'auto', opacity: 1, overflow: 'visible' }}
                exit={{ height: 0, opacity: 0, overflow: 'hidden' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="bg-white dark:bg-[#0f172a] rounded-3xl border-2 border-primary/20 dark:border-primary/30 shadow-xl shadow-primary/5 p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                            <Plus className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-slate-900 dark:text-white">Create New Package</h2>
                            <p className="text-sm font-medium text-slate-500">Deploy a new test series bundle instantly.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="lg:col-span-2 space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Series Title <span className="text-rose-500">*</span></label>
                            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="e.g. Complete JEE Main 2027 Mock Tests" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all placeholder:text-slate-400 placeholder:font-medium" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Assigned Exam</label>
                            <input value={newExam} onChange={(e) => setNewExam(e.target.value)} placeholder="e.g. JEE Main" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all placeholder:text-slate-400 placeholder:font-medium" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Core Category</label>
                            <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="e.g. Engineering" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all placeholder:text-slate-400 placeholder:font-medium" />
                        </div>
                        <div className="lg:col-span-1 space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Pricing (INR)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-slate-400">₹</span>
                                <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value === "" ? "" : Number(e.target.value))} placeholder="0.00" className="w-full pl-9 pr-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-sm font-bold text-slate-800 dark:text-slate-200 transition-all placeholder:text-slate-400 placeholder:font-medium" />
                            </div>
                        </div>

                        <div className="lg:col-span-3 flex items-end justify-between gap-4">
                            <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-[#020617] rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors w-fit">
                                <div className={`relative w-12 h-6 flex items-center rounded-full transition-colors ${newActive ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`}>
                                    <div className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${newActive ? 'translate-x-7' : 'translate-x-1 shadow-md'}`} />
                                    <input type="checkbox" checked={newActive} onChange={(e) => setNewActive(e.target.checked)} className="sr-only" />
                                </div>
                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mr-2">Publish Immediately</span>
                            </label>

                            <button onClick={onCreateSeries} disabled={creating || !supabase} className="flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-secondary disabled:opacity-50 text-white rounded-xl font-black text-sm shadow-lg transition-all shadow-primary/30 w-full sm:w-auto justify-center active:scale-[0.98]">
                                {creating ? "Deploying..." : "Launch Series"} <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    {error && (
                        <div className="mt-4 p-3 rounded-lg bg-rose-50 text-rose-600 text-sm font-bold border border-rose-200 flex items-center gap-2">
                            <Trash2 className="w-4 h-4" /> {error}
                        </div>
                    )}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* Main List Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col flex-1"
      >
        <div className="p-4 lg:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between lg:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50 rounded-t-3xl">
          <div className="relative w-full lg:w-[400px] shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search packages by ID, name or exam..." 
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-sm font-semibold transition-all shadow-sm"
            />
          </div>
          <div className="flex gap-3 h-full items-stretch">
            <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select aria-label="Filter by category" value={categoryFilter} onChange={(e) => { setCategoryFilter(e.target.value); setPage(1); }} className="pl-9 pr-8 py-3 h-full bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 outline-none appearance-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all cursor-pointer">
                    <option>All Categories</option>
                    {Array.from(new Set(rows.map((r) => r.category).filter(Boolean))).map((c) => (
                        <option key={c as string}>{c as string}</option>
                    ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                <th className="p-4 pl-6 lg:pl-8">Package Identification</th>
                <th className="p-4">Taxonomy</th>
                <th className="p-4">Metrics</th>
                <th className="p-4">Revenue Config</th>
                <th className="p-4">Operational Status</th>
                <th className="p-4 pr-6 lg:pr-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {loading ? (
                <tr>
                  <td className="p-8 text-center" colSpan={6}>
                      <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-3"></div>
                      <span className="font-bold text-slate-500 text-sm">Fetching package registry...</span>
                  </td>
                </tr>
              ) : paginatedList.length === 0 ? (
                <tr>
                  <td className="p-12 text-center" colSpan={6}>
                      <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mx-auto mb-4 flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-lg mb-1">No Packages Found</p>
                      <p className="text-slate-500 text-sm font-medium">Try adjusting your filters or create a new test series.</p>
                  </td>
                </tr>
              ) : (
                paginatedList.map((series) => (
                  <tr key={series.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="p-4 pl-6 lg:pl-8">
                        <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                            <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-black text-sm text-slate-800 dark:text-white group-hover:text-primary transition-colors cursor-pointer mb-0.5 line-clamp-1 max-w-[250px]">{series.title}</p>
                            <p className="font-bold text-[10px] text-slate-400 tracking-wider font-mono">{series.id}</p>
                        </div>
                        </div>
                    </td>
                    <td className="p-4">
                        <div className="flex flex-col gap-1.5 items-start">
                            {series.category ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-blue-300 text-[10px] font-black uppercase tracking-wider border border-secondary/20">
                                    {series.category}
                                </span>
                            ) : <span className="text-slate-400 font-bold text-xs">-</span>}
                            {series.exam && (
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 max-w-[150px] truncate">{series.exam}</span>
                            )}
                        </div>
                    </td>
                    <td className="p-4">
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                                <BarChart2 className="w-3.5 h-3.5 text-slate-400" /> 0 Tests Linked
                            </div>
                            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                                <Search className="w-3.5 h-3.5 text-slate-400" /> 0 Enrollments
                            </div>
                        </div>
                    </td>
                    <td className="p-4">
                        {series.price_inr > 0 ? (
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">₹{series.price_inr.toLocaleString()}</span>
                                <span className="text-[10px] font-bold tracking-widest text-emerald-500/70 uppercase">Paid Tier</span>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-black text-slate-800 dark:text-slate-200">₹0</span>
                                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Free Access</span>
                            </div>
                        )}
                    </td>
                    <td className="p-4">
                        <button 
                            onClick={() => toggleActive(series.id, !series.is_active)} 
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                                series.is_active 
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 dark:hover:bg-emerald-500/20' 
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700'
                            }`}
                        >
                            <div className={`w-2 h-2 rounded-full ${series.is_active ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-slate-400'}`} />
                            {series.is_active ? "Live / Active" : "Suspended"}
                        </button>
                    </td>
                    <td className="p-4 pr-6 lg:pr-8">
                        <div className="flex items-center justify-end gap-2">
                        <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-600" title="Manage Structure">
                            <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-slate-400 hover:text-rose-500 transition-colors p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-600" title="Decommission">
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-600" title="Advanced Options">
                            <MoreVertical className="w-4 h-4" />
                        </button>
                        </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Console */}
        <div className="p-4 lg:px-6 lg:py-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50 rounded-b-3xl">
          <span className="text-sm font-bold text-slate-500">
            Showing <span className="text-slate-800 dark:text-slate-200">{filtered.length > 0 ? (page - 1) * pageSize + 1 : 0}</span> to <span className="text-slate-800 dark:text-slate-200">{Math.min(page * pageSize, filtered.length)}</span> of <span className="text-slate-800 dark:text-slate-200">{filtered.length}</span> registries
          </span>
          <div className="flex gap-2">
            <button 
                onClick={() => setPage(page - 1)} disabled={page === 1} 
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
                Previous
            </button>
            <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
                    const pageNum = i + 1;
                    return (
                        <button 
                            key={pageNum}
                            onClick={() => setPage(pageNum)}
                            className={`w-9 h-9 rounded-xl text-sm font-bold flex items-center justify-center transition-colors ${
                                page === pageNum 
                                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                            }`}
                        >
                            {pageNum}
                        </button>
                    )
                })}
            </div>
            <button 
                onClick={() => setPage(page + 1)} disabled={page >= totalPages} 
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
                Next Step
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
