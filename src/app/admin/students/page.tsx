"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSupabaseClient } from "@/lib/supabaseClient";
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
};

export default function AdminStudentsPage() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<StudentRow[]>([]);
  const [query, setQuery] = useState("");

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = useMemo(() => rows.find((r) => r.id === selectedId) || null, [rows, selectedId]);

  const [signedPhotoUrl, setSignedPhotoUrl] = useState<string | null>(null);
  const [photoLoading, setPhotoLoading] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select(
          "id, full_name, phone, dob, state, target_exam, preparation_mode, admission_completed, photo_path, created_at"
        )
        .order("created_at", { ascending: false })
        .limit(500);

      if (!cancelled) {
        if (error) {
          setRows([]);
          setLoading(false);
          return;
        }
        setRows((data as StudentRow[]) || []);
        setLoading(false);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
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

  useEffect(() => {
    const run = async () => {
      setSignedPhotoUrl(null);
      if (!selectedId) return;

      const row = rows.find((r) => r.id === selectedId);
      if (!row?.photo_path) return;

      const supabase = getSupabaseClient();
      if (!supabase) return;

      const { data: sess } = await supabase.auth.getSession();
      const token = sess.session?.access_token;
      if (!token) return;

      setPhotoLoading(true);
      try {
        const resp = await fetch("/api/admin/student-photo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ studentId: row.id }),
        });

        const json = await resp.json();
        if (resp.ok && json?.signedUrl) {
          setSignedPhotoUrl(json.signedUrl);
        } else {
          setSignedPhotoUrl(null);
        }
      } finally {
        setPhotoLoading(false);
      }
    };

    run();
  }, [selectedId, rows]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Students</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
            View onboarding submissions and securely preview student photos.
          </p>
        </div>

        <div className="relative w-full md:w-[420px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, phone, exam, or user id..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-bold transition-colors shadow-sm"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                <th className="p-4 pl-6">Student</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Target Exam</th>
                <th className="p-4">Admission</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
              {loading ? (
                <tr>
                  <td className="p-6 font-semibold text-slate-600 dark:text-slate-300" colSpan={5}>
                    Loading students...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td className="p-6 font-semibold text-slate-600 dark:text-slate-300" colSpan={5}>
                    No students found.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-primary/20 dark:from-indigo-900/50 dark:to-primary/30 flex items-center justify-center font-black text-primary shrink-0">
                          {(r.full_name || "S").charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{r.full_name || "Student"}</p>
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
                    <td className="p-4">
                      {r.admission_completed ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4" /> Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-[10px] uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4" /> Pending
                        </span>
                      )}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <button
                        onClick={() => setSelectedId(r.id)}
                        className="text-white bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors py-2 px-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-sm"
                        title="View details"
                      >
                        <Eye className="w-4 h-4" /> View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

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
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Student Details</h2>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{selected.id}</p>
                </div>
                <button
                  aria-label="Close"
                  title="Close"
                  className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setSelectedId(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl">
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

                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-2xl p-4 text-sm font-semibold text-amber-800 dark:text-amber-400 flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5" />
                  Email is not stored in profiles by default. If you need email in admin panel, we can copy it from auth.users using a server admin endpoint.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
