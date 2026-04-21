"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSupabaseClient } from "@/lib/supabaseClient";
import UserActivityTimeline from "@/components/UserActivityTimeline";
import {
  Search,
  Eye,
  X,
  Image as ImageIcon,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  BookOpen,
  ShieldCheck,
  Copy,
  Users,
  Globe,
  Smartphone,
  Laptop,
  Clock,
  Activity
} from "lucide-react";

type StudentRow = {
  id: string;
  full_name?: string | null;
  phone?: string | null;
  dob?: string | null;
  state?: string | null;
  target_exam?: string | null;
  preparation_mode?: string | null;
  admission_completed?: boolean | null;
  photo_path?: string | null;
  created_at?: string | null;
  total_visits?: number; // Added from API
};

type AnonymousVisitor = {
  fingerprint: string;
  city: string;
  country: string;
  os: string;
  browser: string;
  device_type: string;
  views: number;
  lastActive: string;
  paths: { path: string; timestamp: string }[];
};

export default function AdminStudentsPage() {
  const [activeTab, setActiveTab] = useState<'registered' | 'anonymous'>('registered');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<StudentRow[]>([]);
  const [anonymousVisitors, setAnonymousVisitors] = useState<AnonymousVisitor[]>([]);
  const [query, setQuery] = useState("");

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedAnonymous, setSelectedAnonymous] = useState<AnonymousVisitor | null>(null);

  const selected = useMemo(() => rows.find((r) => r.id === selectedId) || null, [rows, selectedId]);

  const [signedPhotoUrl, setSignedPhotoUrl] = useState<string | null>(null);
  const [photoLoading, setPhotoLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async (isInitial = true) => {
      if (isInitial) setLoading(true);
      try {
        const res = await fetch("/api/admin/students-data");
        const json = await res.json();
        
        if (!cancelled && json.success) {
          setRows(json.profiles || []);
          setAnonymousVisitors(json.anonymousVisitors || []);
          
          // Smoothly update the sidebar if viewing an anonymous guest live
          setSelectedAnonymous(prev => {
              if (prev && json.anonymousVisitors) {
                  const updated = json.anonymousVisitors.find((v: any) => v.fingerprint === prev.fingerprint);
                  if (updated) return updated;
              }
              return prev;
          });
        }
      } catch (err) {
        console.error("Failed to load students data", err);
      } finally {
        if (!cancelled && isInitial) setLoading(false);
      }
    };

    load(true);
    
    // Near real-time polling every 5 seconds (update details ek dum correct in 5s)
    const interval = setInterval(() => {
        load(false);
    }, 5000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => {
      const name = (r.full_name || "").toLowerCase();
      const phone = (r.phone || "").toLowerCase();
      const id = (r.id || "").toLowerCase();
      const exam = (r.target_exam || "").toLowerCase();
      return name.includes(q) || phone.includes(q) || id.includes(q) || exam.includes(q);
    });
  }, [rows, query]);

  const filteredAnonymous = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return anonymousVisitors;
    return anonymousVisitors.filter((v) => {
      const location = `${v.city} ${v.country}`.toLowerCase();
      const platform = `${v.os} ${v.browser} ${v.device_type}`.toLowerCase();
      return location.includes(q) || platform.includes(q) || v.fingerprint.toLowerCase().includes(q);
    });
  }, [anonymousVisitors, query]);

  // Selected Student Logic
  const [selectedStudentEmail, setSelectedStudentEmail] = useState<string | null>(null);
  const [allSeries, setAllSeries] = useState<{id: string, title: string, exam: string}[]>([]);
  const [ownedSeries, setOwnedSeries] = useState<string[]>([]);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [grantingSeriesId, setGrantingSeriesId] = useState("");
  const [grantLoading, setGrantLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      setSignedPhotoUrl(null);
      setSelectedStudentEmail(null);
      setOwnedSeries([]);
      setGrantingSeriesId("");
      
      if (!selectedId) return;

      const row = rows.find((r) => r.id === selectedId);
      if (!row) return;

      const supabase = getSupabaseClient();
      if (!supabase) return;

      const { data: sess } = await supabase.auth.getSession();
      const token = sess.session?.access_token;
      if (!token) return;

      setLoadingDetails(true);

      try {
        const detailsResp = await fetch("/api/admin/student-details", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId: row.id }),
        });
        const detailsJson = await detailsResp.json();
        
        if (detailsResp.ok && detailsJson.success) {
           setSelectedStudentEmail(detailsJson.email);
           setAllSeries(detailsJson.allSeries || []);
           setOwnedSeries(detailsJson.ownedSeriesIds || []);
        }

        if (row.photo_path) {
          setPhotoLoading(true);
          const photoResp = await fetch("/api/admin/student-photo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ studentId: row.id }),
          });

          const photoJson = await photoResp.json();
          if (photoResp.ok && photoJson?.signedUrl) {
            setSignedPhotoUrl(photoJson.signedUrl);
          } else {
            setSignedPhotoUrl(null);
          }
          setPhotoLoading(false);
        }
      } finally {
        setLoadingDetails(false);
      }
    };

    run();
  }, [selectedId, rows]);

  const handleGrantAccess = async () => {
    if (!selectedId || !grantingSeriesId) return;
    setGrantLoading(true);
    try {
      const res = await fetch('/api/admin/grant-access', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ studentId: selectedId, seriesId: grantingSeriesId })
      });
      const data = await res.json();
      if (data.success) {
         setOwnedSeries(prev => [...prev, grantingSeriesId]);
         alert('Free access granted successfully!');
      } else {
         alert('Error granting access: ' + data.error);
      }
    } catch (e: any) {
      alert('Error: ' + e.message);
    } finally {
      setGrantLoading(false);
    }
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden shrink-0">
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 w-full md:w-auto">
          <div className="flex items-center gap-4 mb-3 flex-wrap">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">User Cohorts</h1>
              <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent dark:bg-accent/20 rounded-full text-xs font-bold tracking-wide border border-accent/20">
                      <Globe className="w-4 h-4" /> Global Footprint
                  </div>
              </div>
          </div>
          <p className="text-slate-500 max-w-2xl text-sm md:text-base leading-relaxed">
            Monitor registered profiles or track anonymous new visitor behavior across the platform securely.
          </p>
        </div>

        <div className="relative z-10 w-full md:w-[420px] shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search footprints or profiles..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary focus:ring-2 ring-primary/20 text-sm font-bold text-slate-800 dark:text-slate-100 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-2xl w-fit shrink-0 shadow-inner border border-slate-200 dark:border-slate-700">
          <button 
              onClick={() => setActiveTab('registered')}
              className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'registered' ? 'bg-white dark:bg-[#0f172a] text-primary shadow-sm border border-slate-200 dark:border-slate-700/50' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
              <Users className="w-4 h-4" /> Registered Profiles
          </button>
          <button 
              onClick={() => setActiveTab('anonymous')}
              className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'anonymous' ? 'bg-white dark:bg-[#0f172a] text-emerald-600 dark:text-emerald-400 shadow-sm border border-slate-200 dark:border-slate-700/50' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
          >
              <Globe className="w-4 h-4" /> Anonymous Visitors
          </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        key={activeTab} // Reset animation on tab switch
        className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col min-h-[400px]"
      >
        <div className="overflow-x-auto flex-1 custom-scrollbar">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            {activeTab === 'registered' ? (
              // REGISTERED STUDENTS TABLE
              <>
                <thead>
                  <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    <th className="p-4 pl-6 font-black uppercase">Enrolled Profile</th>
                    <th className="p-4 font-black uppercase">Verified Contact</th>
                    <th className="p-4 font-black uppercase">Examination Goal</th>
                    <th className="p-4 font-black uppercase text-center">Total Visits</th>
                    <th className="p-4 pr-6 font-black uppercase text-right">Access Controls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                  {loading ? (
                    <tr>
                      <td className="p-6 font-semibold text-slate-600 dark:text-slate-300" colSpan={5}>
                        Loading students...
                      </td>
                    </tr>
                  ) : filteredRows.length === 0 ? (
                    <tr>
                      <td className="p-6 font-semibold text-slate-600 dark:text-slate-300" colSpan={5}>
                        No students found.
                      </td>
                    </tr>
                  ) : (
                    filteredRows.map((r) => (
                      <tr key={r.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 pl-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-primary/20 dark:from-indigo-900/50 dark:to-primary/30 flex items-center justify-center font-black text-primary shrink-0 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                                    {r.photo_path ? (
                                        <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/student-photos/${r.photo_path}`} className="w-full h-full object-cover" />
                                    ) : (r.full_name || "S").charAt(0)}
                                </div>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-slate-800 dark:text-slate-200 hover:text-primary transition-colors cursor-pointer">{r.full_name || "Student"}</p>
                              <p className="font-mono text-[10px] font-bold text-slate-400 mt-0.5 flex items-center gap-2">
                                {r.id}
                                <button
                                  aria-label="Copy user id"
                                  title="Copy user id"
                                  onClick={() => copy(r.id)}
                                  className="text-slate-400 hover:text-primary"
                                >
                                  <Copy className="w-3.5 h-3.5" />
                                </button>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-semibold text-slate-600 dark:text-slate-300">{r.phone || "—"}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-semibold text-slate-600 dark:text-slate-300">{r.target_exam || "—"}</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center min-w-[2rem] bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20 px-2.5 py-1 rounded-lg font-black text-xs shadow-sm">
                            {r.total_visits || 0}
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <button
                            onClick={() => setSelectedId(r.id)}
                            className="text-white bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors py-2 px-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-sm"
                            title="View details"
                          >
                            <Eye className="w-4 h-4" /> View History
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </>
            ) : (
              // ANONYMOUS VISITORS TABLE
              <>
                <thead>
                  <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    <th className="p-4 pl-6 font-black uppercase">Visitor Fingerprint</th>
                    <th className="p-4 font-black uppercase">Inferred Location</th>
                    <th className="p-4 font-black uppercase">Platform Info</th>
                    <th className="p-4 font-black uppercase text-center">Interactions</th>
                    <th className="p-4 font-black uppercase">Last Active</th>
                    <th className="p-4 pr-6 font-black uppercase text-right">Journey</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                  {loading ? (
                    <tr>
                      <td className="p-6 font-semibold text-slate-600 dark:text-slate-300" colSpan={6}>
                        Aggregating visitor telemetry...
                      </td>
                    </tr>
                  ) : filteredAnonymous.length === 0 ? (
                    <tr>
                      <td className="p-6 font-semibold text-slate-600 dark:text-slate-300" colSpan={6}>
                        No anonymous traffic found.
                      </td>
                    </tr>
                  ) : (
                    filteredAnonymous.map((v, idx) => (
                      <tr key={idx} className="hover:bg-emerald-50/20 dark:hover:bg-white/[0.02] transition-colors group cursor-pointer" onClick={() => setSelectedAnonymous(v)}>
                        <td className="p-4 pl-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 flex items-center justify-center font-black shrink-0 border border-orange-200 dark:border-orange-500/20">
                                <Activity className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">Guest Tracker</p>
                              <p className="font-mono text-[10px] font-semibold text-slate-400 mt-0.5 truncate max-w-[120px]">
                                {v.fingerprint}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                           <div className="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300">
                              <MapPin className="w-4 h-4 text-emerald-500" />
                              {v.city !== 'Unknown' ? `${v.city}, ${v.country}` : 'Unknown Location'}
                           </div>
                        </td>
                        <td className="p-4">
                           <div className="flex flex-col gap-0.5">
                              <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                                 {v.device_type === 'Mobile' ? <Smartphone className="w-3.5 h-3.5 text-slate-400" /> : <Laptop className="w-3.5 h-3.5 text-slate-400" />}
                                 {v.device_type}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{v.browser} / {v.os}</span>
                           </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center min-w-[2rem] bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 px-2.5 py-1 rounded-lg font-black text-xs shadow-sm">
                            {v.views}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-semibold text-xs">
                             <Clock className="w-4 h-4" />
                             {new Date(v.lastActive).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedAnonymous(v); }}
                            className="text-white bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 transition-colors py-2 px-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-sm"
                            title="View Anonymous Journey"
                          >
                            <Eye className="w-4 h-4" /> Trace
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </>
            )}
            
          </table>
        </div>
      </motion.div>

      {/* RENDER REGISTERED PROFILE SIDEBAR */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
              onClick={() => setSelectedId(null)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-[520px] bg-white dark:bg-[#0f172a] z-[110] border-l border-slate-200 dark:border-slate-800 flex flex-col"
            >
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-[#0f172a]/80 shrink-0">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2"><User className="w-5 h-5 text-primary"/> Enrolled Profile</h2>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{selected.id}</p>
                </div>
                <button
                  aria-label="Close"
                  title="Close"
                  className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                  onClick={() => setSelectedId(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-md border border-indigo-500/20">
                    {(selected.full_name || "S").charAt(0)}
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">{selected.full_name || "Student"}</div>
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">{selected.target_exam || "—"}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                      <Phone className="w-4 h-4" /> Phone
                    </div>
                    <div className="mt-2 font-bold text-slate-900 dark:text-white">{selected.phone || "—"}</div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                      <Calendar className="w-4 h-4" /> DOB
                    </div>
                    <div className="mt-2 font-bold text-slate-900 dark:text-white">{selected.dob || "—"}</div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                      <MapPin className="w-4 h-4" /> State
                    </div>
                    <div className="mt-2 font-bold text-slate-900 dark:text-white">{selected.state || "—"}</div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                      <BookOpen className="w-4 h-4" /> Mode
                    </div>
                    <div className="mt-2 font-bold text-slate-900 dark:text-white">{selected.preparation_mode || "—"}</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-black text-slate-900 dark:text-white">Student Photo</div>
                    <div className="text-xs font-bold text-slate-400">
                      {selected.photo_path ? "Stored" : "Not uploaded"}
                    </div>
                  </div>

                  {selected.photo_path ? (
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900/40">
                      {photoLoading ? (
                        <div className="p-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Loading photo...</div>
                      ) : signedPhotoUrl ? (
                        <img src={signedPhotoUrl} alt="Student Photo" className="w-full h-[340px] object-cover" />
                      ) : (
                        <div className="p-6 text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                          <ImageIcon className="w-5 h-5" /> Unable to load photo.
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <User className="w-5 h-5" /> No photo uploaded.
                    </div>
                  )}
                  <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 font-medium flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-0.5" />
                    Photo access is provided via short-lived signed URLs.
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white mb-2">
                    <Mail className="w-4 h-4 text-slate-400" /> Account Email
                  </div>
                  {loadingDetails ? (
                    <div className="text-sm font-semibold text-slate-500 animate-pulse">Fetching from auth...</div>
                  ) : (
                    <div className="font-bold text-slate-800 dark:text-slate-200">{selectedStudentEmail || "Not available"}</div>
                  )}
                </div>

                <div className="bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 rounded-2xl p-5 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-2xl rounded-full pointer-events-none"></div>
                   
                   <h3 className="text-sm font-black text-indigo-900 dark:text-indigo-100 mb-1 relative z-10 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-secondary" /> Grant Premium Access
                   </h3>
                   <p className="text-xs font-semibold text-indigo-700/70 dark:text-indigo-300/70 mb-4 relative z-10">
                      Give this user complimentary access to any premium test series.
                   </p>

                   {loadingDetails ? (
                      <div className="h-10 bg-indigo-100/50 dark:bg-indigo-800/20 rounded-xl animate-pulse mb-3"></div>
                   ) : (
                     <div className="space-y-3 relative z-10">
                        <select 
                          value={grantingSeriesId}
                          onChange={(e) => setGrantingSeriesId(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0f172a] border border-indigo-200 dark:border-indigo-800 text-sm font-bold text-slate-700 dark:text-slate-200 outline-none focus:border-secondary transition-colors shadow-sm appearance-none cursor-pointer"
                        >
                           <option value="" disabled>-- Select a Series to Grant --</option>
                           {allSeries.map(s => {
                             const isOwned = ownedSeries.includes(s.id);
                             return (
                               <option key={s.id} value={s.id} disabled={isOwned}>
                                 {s.title} {isOwned ? '(Already Owned)' : ''}
                               </option>
                             );
                           })}
                        </select>
                        <button 
                          onClick={handleGrantAccess}
                          disabled={!grantingSeriesId || grantLoading}
                          className="w-full py-3 bg-secondary hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-secondary transition-colors text-white font-bold text-sm flex items-center justify-center gap-2 rounded-xl shadow-md active:scale-95"
                        >
                           {grantLoading ? "Processing granting..." : "Grant Free Access"}
                        </button>
                     </div>
                   )}
                </div>

                <div className="pt-2">
                   <UserActivityTimeline userId={selected.id} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* RENDER ANONYMOUS VISITOR SIDEBAR */}
      <AnimatePresence>
        {selectedAnonymous && (
           <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
              onClick={() => setSelectedAnonymous(null)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-[520px] bg-white dark:bg-[#0f172a] z-[110] border-l border-slate-200 dark:border-slate-800 flex flex-col"
            >
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-900/10 shrink-0">
                <div>
                  <h2 className="text-lg font-black text-emerald-800 dark:text-emerald-400 flex items-center gap-2"><Activity className="w-5 h-5"/> Guest Path Tracer</h2>
                  <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">{selectedAnonymous.fingerprint}</p>
                </div>
                <button
                  aria-label="Close"
                  title="Close"
                  className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                  onClick={() => setSelectedAnonymous(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto bg-slate-50 dark:bg-[#0a0f1c] flex-1">
                 {/* Metadata Grid */}
                 <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <MapPin className="w-4 h-4 text-emerald-500" /> Approx Location
                        </div>
                        <div className="mt-2 font-bold text-slate-900 dark:text-white">{selectedAnonymous.city}, {selectedAnonymous.country}</div>
                     </div>
                     <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <Laptop className="w-4 h-4 text-emerald-500" /> Platform OS
                        </div>
                        <div className="mt-2 font-bold text-slate-900 dark:text-white">{selectedAnonymous.os}</div>
                     </div>
                     <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <Globe className="w-4 h-4 text-emerald-500" /> Browser Info
                        </div>
                        <div className="mt-2 font-bold text-slate-900 dark:text-white">{selectedAnonymous.browser}</div>
                     </div>
                     <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <Clock className="w-4 h-4 text-emerald-500" /> Latest Activity
                        </div>
                        <div className="mt-2 font-bold text-slate-900 dark:text-white text-xs">{new Date(selectedAnonymous.lastActive).toLocaleDateString()}</div>
                     </div>
                 </div>

                 {/* Disclaimer */}
                 <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <div>
                        <p className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1">Random Guest User</p>
                        <p className="text-xs text-amber-700/80 dark:text-amber-400/80 font-medium">Because this guest did not register, we cannot securely collect personal data such as phone or email. Only aggregated behavioral data is shown.</p>
                    </div>
                 </div>

                 {/* Timeline */}
                 <div>
                    <h3 className="text-sm font-black text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2"><Activity className="w-4 h-4 text-primary" /> Unauthenticated Journey ({selectedAnonymous.views} Views)</h3>
                    
                    <div className="relative border-l-2 border-emerald-100 dark:border-slate-800 ml-4 pb-4">
                        {selectedAnonymous.paths.slice(0, 50).map((p, i) => (
                           <div key={i} className="relative pl-6 pb-6 last:pb-0">
                               <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-50 dark:border-[#0a0f1c] bg-emerald-400 shadow-sm" />
                               <div className="bg-white dark:bg-slate-800/40 rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-colors shadow-sm">
                                  <p className="font-bold text-sm text-emerald-900 dark:text-emerald-100 font-mono break-all">{p.path}</p>
                                  <p className="flex items-center gap-1 mt-2 text-[10px] font-semibold text-slate-500">
                                     <Clock className="w-3 h-3" />
                                     {new Date(p.timestamp).toLocaleString(undefined, {month:'short', day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit'})}
                                  </p>
                               </div>
                           </div>
                        ))}
                        {selectedAnonymous.paths.length > 50 && (
                            <div className="relative pl-6 mt-2">
                               <p className="text-xs font-bold text-slate-400 italic">...and {selectedAnonymous.paths.length - 50} older visits hidden.</p>
                            </div>
                        )}
                    </div>
                 </div>
              </div>
            </motion.div>
           </>
        )}
      </AnimatePresence>
    </div>
  );
}
