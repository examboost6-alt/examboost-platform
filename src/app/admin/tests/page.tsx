"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, BookOpen, Clock, FileText, CheckCircle, Search, Filter, MoreVertical, Edit, Trash2 } from "lucide-react";
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
  const [newPrice, setNewPrice] = useState<number>(0);
  const [newActive, setNewActive] = useState(true);

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
      setError("Title is required");
      return;
    }

    setCreating(true);
    setError(null);
    const { error: e } = await supabase.from("test_series").insert({
      title: newTitle.trim(),
      exam: newExam.trim() || null,
      category: newCategory.trim() || null,
      price_inr: Number.isFinite(newPrice) ? newPrice : 0,
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
    setNewPrice(0);
    setNewActive(true);
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

  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Test Series</h1>
          <p className="text-slate-500 font-medium">Create, edit, and manage all your exam categories and mock tests.</p>
        </div>
        <div className="flex gap-3 items-center">
            <Link href="/admin/tests/upload" className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-50 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-sm shadow-sm transition-all whitespace-nowrap">
                <FileText className="w-4 h-4" /> Bulk Upload JSON
            </Link>
            <button onClick={onCreateSeries} disabled={creating || !supabase} className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary disabled:opacity-50 text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20 whitespace-nowrap">
                <Plus className="w-5 h-5" /> {creating ? "Creating..." : "Create New Series"}
            </button>
        </div>
      </div>

      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="series-title" className="text-xs font-bold uppercase tracking-wider text-slate-500">Title</label>
            <input id="series-title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="mt-1 w-full px-4 py-2.5 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors" />
          </div>
          <div>
            <label htmlFor="series-exam" className="text-xs font-bold uppercase tracking-wider text-slate-500">Exam</label>
            <input id="series-exam" value={newExam} onChange={(e) => setNewExam(e.target.value)} className="mt-1 w-full px-4 py-2.5 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors" />
          </div>
          <div>
            <label htmlFor="series-category" className="text-xs font-bold uppercase tracking-wider text-slate-500">Category</label>
            <input id="series-category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="mt-1 w-full px-4 py-2.5 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors" />
          </div>
          <div>
            <label htmlFor="series-price" className="text-xs font-bold uppercase tracking-wider text-slate-500">Price (INR)</label>
            <input id="series-price" type="number" value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))} className="mt-1 w-full px-4 py-2.5 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300">
            <input type="checkbox" checked={newActive} onChange={(e) => setNewActive(e.target.checked)} className="h-4 w-4" />
            Active
          </label>

          {error && <div className="text-sm font-bold text-rose-600">{error}</div>}
          {!supabase && <div className="text-sm font-bold text-rose-600">Supabase env vars missing</div>}
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Test Series", count: String(rows.length), icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
          { label: "Active Series", count: String(rows.filter((r) => r.is_active).length), icon: FileText, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
          { label: "Published Tests", count: "0", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
          { label: "Inactive Series", count: String(rows.filter((r) => !r.is_active).length), icon: Clock, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              key={stat.label} 
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-slate-500 font-semibold text-sm mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{stat.count}</h3>
            </motion.div>
          );
        })}
      </div>

      {/* Main List Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search test series..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select aria-label="Filter by category" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>All Categories</option>
              {Array.from(new Set(rows.map((r) => r.category).filter(Boolean))).map((c) => (
                <option key={c as string}>{c as string}</option>
              ))}
            </select>
            <button aria-label="Advanced filters" className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 flex items-center justify-center transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">Title & ID</th>
                <th className="p-4">Category</th>
                <th className="p-4">Stats</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {loading ? (
                <tr>
                  <td className="p-6 text-sm font-bold text-slate-500" colSpan={6}>Loading...</td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td className="p-6 text-sm font-bold text-slate-500" colSpan={6}>No test series found</td>
                </tr>
              ) : (
                filtered.map((series) => (
                  <tr key={series.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                        <BookOpen className="w-6 h-6 text-primary dark:text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors cursor-pointer mb-0.5 line-clamp-1">{series.title}</p>
                        <p className="font-medium text-[11px] text-slate-500 uppercase tracking-widest">{series.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex px-2 py-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
                      {series.category || "-"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-500">
                        <span>Exam:</span> <span className="text-slate-700 dark:text-slate-300">{series.exam || "-"}</span>
                      </div>
                      <div className="flex justify-between text-xs font-semibold text-slate-500">
                        <span>Active:</span> <span className="text-slate-700 dark:text-slate-300">{series.is_active ? "Yes" : "No"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-black text-emerald-600 dark:text-emerald-400">
                    ₹{series.price_inr}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${series.is_active ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                      <button onClick={() => toggleActive(series.id, !series.is_active)} className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:underline">
                        {series.is_active ? "Active" : "Inactive"}
                      </button>
                    </div>
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" title="More">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm font-medium text-slate-500 bg-white dark:bg-[#0f172a]">
          <span>Showing 1 to 6 of 142 series</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
