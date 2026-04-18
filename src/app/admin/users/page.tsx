"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MoreVertical, UserCheck, UserX, UserPlus, ShieldCheck, Download, Users as UsersIcon, Smartphone, MapPin, AlertTriangle, Activity, Loader2, Clock, Upload, ChevronRight, X, ChevronLeft, Calendar, FileText, Ban, Trash2, PowerOff, Power } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";
import UserActivityTimeline from "@/components/UserActivityTimeline";

// -------------------------------------------------------------
// HELPER: Quick CSV Export
// -------------------------------------------------------------
function exportToCSV(data: any[], filename: string) {
    if (data.length === 0) return;
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    for (const row of data) {
        const values = headers.map(header => {
            const escaped = ('' + (row[header] || '')).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// -------------------------------------------------------------
// COMPONENTS
// -------------------------------------------------------------
export default function AdvancedUserManagement() {
    const supabase = getSupabaseClient();

    // Raw Data Sets
    const [rawUsers, setRawUsers] = useState<any[]>([]);
    const [rawPurchases, setRawPurchases] = useState<any[]>([]);
    const [rawViews, setRawViews] = useState<any[]>([]);
    const [rawTests, setRawTests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [searchQuery, setSearchQuery] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [subFilter, setSubFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    // Pagination
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // Deep View Modal
    const [selectedUser, setSelectedUser] = useState<any | null>(null);
    const [confirmDialog, setConfirmDialog] = useState<{ isOpen: boolean; title: string; message: string; action: () => void } | null>(null);
    const [isActionLoading, setIsActionLoading] = useState(false);

    // Initial Fetch
    useEffect(() => {
        const fetchSystemData = async () => {
            setLoading(true);
            if (!supabase) return;
            try {
                const [usersRes, purchRes, viewsRes, testsRes] = await Promise.all([
                    supabase.from('profiles').select('*').order('created_at', { ascending: false }),
                    supabase.from('purchases').select('*'),
                    supabase.from('page_views').select('*').order('created_at', { ascending: false }).limit(2500),
                    supabase.from('user_tests').select('id, user_id, test_id, score, created_at').order('created_at', { ascending: false })
                ]);
                
                setRawUsers(usersRes.data || []);
                setRawPurchases(purchRes.data || []);
                setRawViews(viewsRes.data || []);
                setRawTests(testsRes.data || []);
            } catch (error) {
                console.error("Critical Engine failure:", error);
            }
            setLoading(false);
        };
        fetchSystemData();
        
        // Polling for live states
        const interval = setInterval(fetchSystemData, 15000);
        return () => clearInterval(interval);
    }, [supabase]);

    // Data Aggregation Engine
    const aggregatedUsers = useMemo(() => {
        return rawUsers.map(profile => {
            // Is user Paid?
            const userPayments = rawPurchases.filter(p => p.user_id === profile.id && p.status === 'success');
            const totalSpent = userPayments.reduce((acc, p) => acc + (Number(p.amount) || 0), 0);
            const isPaid = totalSpent > 0;

            // Determine Live Activity mapping (Online in last 10 mins)
            const latestView = rawViews.find(v => v.user_id === profile.id);
            let isOnline = false;
            let lastLoginStr = 'Never';
            if (latestView) {
                const viewedAt = new Date(latestView.created_at);
                const diffMins = (Date.now() - viewedAt.getTime()) / 60000;
                isOnline = diffMins <= 10;
                lastLoginStr = diffMins < 60 ? `${Math.floor(diffMins)}m ago` : diffMins < 1440 ? `${Math.floor(diffMins/60)}h ago` : viewedAt.toLocaleDateString();
            } else if (profile.last_sign_in_at) {
                lastLoginStr = new Date(profile.last_sign_in_at).toLocaleDateString();
            }

            // Stats
            const testCount = rawTests.filter(t => t.user_id === profile.id).length;

            return {
                ...profile,
                isPaid,
                totalSpent,
                isOnline,
                lastLoginStr,
                device: latestView?.device_type || 'Unknown Desktop',
                city: latestView?.city || 'Unknown Geo',
                testCount
            };
        });
    }, [rawUsers, rawPurchases, rawViews, rawTests]);

    // Derived Statistics
    const kpi = useMemo(() => {
        const todayStr = new Date().toDateString();
        return {
            total: aggregatedUsers.length,
            activeToday: aggregatedUsers.filter(u => new Date(u.created_at).toDateString() === todayStr || (u.last_sign_in_at && new Date(u.last_sign_in_at).toDateString() === todayStr) || u.isOnline).length,
            paid: aggregatedUsers.filter(u => u.isPaid).length,
            newToday: aggregatedUsers.filter(u => new Date(u.created_at).toDateString() === todayStr).length
        };
    }, [aggregatedUsers]);

    // Filters Processing
    const processedList = useMemo(() => {
        let list = aggregatedUsers;
        
        // Search
        if (searchQuery) {
            const sq = searchQuery.toLowerCase();
            list = list.filter(u => (u.full_name?.toLowerCase().includes(sq) || u.email?.toLowerCase().includes(sq) || String(u.id).includes(sq)));
        }
        
        // Filters
        if (roleFilter !== "All") list = list.filter(u => (u.role || 'Student') === roleFilter);
        if (subFilter !== "All") {
            if (subFilter === "Paid") list = list.filter(u => u.isPaid);
            if (subFilter === "Free") list = list.filter(u => !u.isPaid);
        }
        if (statusFilter !== "All") list = list.filter(u => (u.status || 'Active') === statusFilter);

        return list;
    }, [aggregatedUsers, searchQuery, roleFilter, subFilter, statusFilter]);

    // Pagination Calculation
    const totalPages = Math.ceil(processedList.length / pageSize) || 1;
    const paginatedList = processedList.slice((page - 1) * pageSize, page * pageSize);

    useEffect(() => {
        if (page > totalPages) setPage(totalPages);
    }, [totalPages, page]);


    // Action Handlers
    const executeBan = async (uid: string) => {
        setIsActionLoading(true);
        try {
            const res = await fetch('/api/admin/ban-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: uid, action: 'ban' })
            });
            const data = await res.json();
            if(data.success) {
               // Update UI optimistically
               setRawUsers(rawUsers.map(u => u.id === uid ? { ...u, status: 'Banned', risk: 'Critical' } : u));
               if(selectedUser?.id === uid) setSelectedUser({...selectedUser, status: 'Banned'});
            } else {
               alert(`Failed to ban: ${data.error}`);
            }
        } catch (e) {
            alert("API Error");
        }
        setConfirmDialog(null);
        setIsActionLoading(false);
    };

    const executeUnban = async (uid: string) => {
        setIsActionLoading(true);
        try {
            const res = await fetch('/api/admin/ban-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: uid, action: 'unban' })
            });
            const data = await res.json();
            if(data.success) {
               setRawUsers(rawUsers.map(u => u.id === uid ? { ...u, status: 'Active', risk: 'Low' } : u));
               if(selectedUser?.id === uid) setSelectedUser({...selectedUser, status: 'Active'});
            }
        } catch (e) {}
        setConfirmDialog(null);
        setIsActionLoading(false);
    };

    const confirmBan = (user: any) => {
        setConfirmDialog({
            isOpen: true,
            title: "Ban User Access?",
            message: `Are you entirely sure you want to suspend access for ${user.full_name || user.email}? This revokes token privileges physically and locks their account out immediately.`,
            action: () => executeBan(user.id)
        });
    };

    const triggerBulkExport = () => {
        const payload = processedList.map(u => ({
            "System ID": u.id,
            "Full Name": u.full_name,
            "Email Address": u.email,
            "Contact Number": u.phone || 'N/A',
            "Profile Role": u.role || 'Student',
            "Subscription Level": u.isPaid ? 'Premium (Paid)' : 'Free Tier',
            "Total LTV (Generated)": u.totalSpent,
            "Account Status": u.status || 'Active',
            "Join Date": new Date(u.created_at).toISOString(),
            "Last Known Login": u.lastLoginStr,
            "Device Imprint": u.device
        }));
        exportToCSV(payload, `user_database_export_${new Date().getTime()}.csv`);
    };

    return (
        <div className="flex flex-col gap-6 pb-8 min-h-screen relative">
            
            {/* Header Module */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white dark:bg-[#0f172a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10 w-full sm:w-auto">
                    <div className="flex items-center gap-3 mb-1">
                        <UsersIcon className="w-7 h-7 text-primary" />
                        <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Enterprise User Profiles</h1>
                    </div>
                    <p className="text-slate-500 font-medium text-sm">Deploy policies, monitor telemetry maps, and execute robust identity checks globally.</p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 relative z-10 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm transition-colors shadow-sm">
                        <Upload className="w-4 h-4" /> Import CSV
                    </button>
                    <button onClick={triggerBulkExport} className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 rounded-xl font-bold text-sm transition-colors shadow-sm">
                        <Download className="w-4 h-4" /> Export Data
                    </button>
                    <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all">
                        <UserPlus className="w-4 h-4" /> Provision Account
                    </button>
                </div>
            </div>

            {/* Smart KPI Top Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Platform Scholars", val: kpi.total, icon: UsersIcon, color: "text-blue-500", bg: "bg-blue-500/10" },
                    { label: "Active Live / Today", val: kpi.activeToday, icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    { label: "Subscribed (Paid)", val: kpi.paid, icon: ShieldCheck, color: "text-indigo-500", bg: "bg-indigo-500/10" },
                    { label: "New Admissions", val: kpi.newToday, icon: UserPlus, color: "text-purple-500", bg: "bg-purple-500/10" }
                ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} key={stat.label} className="bg-white dark:bg-[#0f172a] rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                            <div className={`p-3 rounded-full ${stat.bg} ${stat.color} shrink-0`}><Icon className="w-5 h-5" /></div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">{stat.label}</p>
                                <p className="text-xl font-black text-slate-900 dark:text-white leading-none">{stat.val.toLocaleString()}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Advanced Filters & Table */}
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                
                {/* Complex Filter Header */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0f172a]/50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 shrink-0">
                    <div className="relative w-full lg:w-[350px]">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" placeholder="Lookup Name, ID, or Auth Email..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                           className="w-full bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 ring-primary/20 rounded-xl px-9 py-2 text-sm font-semibold text-slate-800 dark:text-slate-100 outline-none transition-all shadow-sm"
                        />
                    </div>
                    
                    <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
                        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 outline-none cursor-pointer focus:ring-2 ring-primary/20 shadow-sm flex-1 sm:flex-none">
                            <option value="All">Role: All</option>
                            <option value="Student">Role: Student</option>
                            <option value="Admin">Role: Admin</option>
                        </select>
                        <select value={subFilter} onChange={(e) => setSubFilter(e.target.value)} className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 outline-none cursor-pointer focus:ring-2 ring-primary/20 shadow-sm flex-1 sm:flex-none">
                            <option value="All">Plan: All Tiers</option>
                            <option value="Paid">Plan: Paid/Premium</option>
                            <option value="Free">Plan: Free Only</option>
                        </select>
                        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 outline-none cursor-pointer focus:ring-2 ring-primary/20 shadow-sm flex-1 sm:flex-none">
                            <option value="All">Status: Any</option>
                            <option value="Active">Status: Active</option>
                            <option value="Banned">Status: Flagged/Banned</option>
                        </select>
                    </div>
                </div>

                {/* Table Component */}
                <div className="overflow-x-auto flex-1 relative min-h-[300px]">
                    <table className="w-full text-left whitespace-nowrap table-auto border-collapse">
                        <thead>
                            <tr className="bg-slate-50/80 dark:bg-[#020617]/80 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                                <th className="p-4 pl-6 font-black uppercase">Core Identity</th>
                                <th className="p-4 font-black uppercase">Connectivity & Device</th>
                                <th className="p-4 font-black uppercase">Sub Ledger</th>
                                <th className="p-4 font-black uppercase">Health Status</th>
                                <th className="p-4 font-black uppercase text-right pr-6">Engage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                            {loading ? (
                                /* SKELETON SHIMMER LOADER */
                                Array.from({length: pageSize}).map((_, idx) => (
                                    <tr key={idx} className="animate-pulse bg-white dark:bg-[#0f172a]">
                                        <td className="p-4 pl-6 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0"></div>
                                            <div className="flex flex-col gap-2"><div className="w-32 h-3 bg-slate-200 dark:bg-slate-800 rounded"></div><div className="w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded"></div></div>
                                        </td>
                                        <td className="p-4"><div className="w-32 h-3 bg-slate-200 dark:bg-slate-800 rounded"></div></td>
                                        <td className="p-4"><div className="w-20 h-4 bg-slate-200 dark:bg-slate-800 rounded-md"></div></td>
                                        <td className="p-4"><div className="w-24 h-3 bg-slate-200 dark:bg-slate-800 rounded"></div></td>
                                        <td className="p-4 text-right pr-6"><div className="w-6 h-6 bg-slate-200 dark:bg-slate-800 rounded-md ml-auto"></div></td>
                                    </tr>
                                ))
                            ) : paginatedList.length === 0 ? (
                                <tr>
                                    <td colSpan={5}>
                                        <div className="flex flex-col items-center justify-center py-24 text-center">
                                            <div className="w-24 h-24 mb-4 opacity-50 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                                                <Search className="w-10 h-10 text-slate-400" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-800 dark:text-white mb-2">No Profiles Mapped</h3>
                                            <p className="text-sm font-semibold text-slate-500 max-w-sm">We couldn't find any students matching those exact metric constraints. Try clearing filters.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                paginatedList.map((u) => {
                                    const statStr = u.status || 'Active';
                                    return (
                                        <tr onClick={() => setSelectedUser(u)} key={u.id} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] cursor-pointer transition-colors group">
                                            <td className="p-4 pl-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative">
                                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-indigo-900/50 dark:to-blue-900/30 flex items-center justify-center font-black text-indigo-700 dark:text-indigo-300 shrink-0 overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
                                                            {u.photo_path ? (
                                                                <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/student-photos/${u.photo_path}`} className="w-full h-full object-cover" />
                                                            ) : (u.full_name?.charAt(0) || '?').toUpperCase()}
                                                        </div>
                                                        {u.isOnline && <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-[#0f172a] rounded-full shadow-sm"></div>}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors flex items-center gap-2">
                                                            {u.full_name || 'Hidden Architect'}
                                                        </p>
                                                        <p className="font-medium text-xs text-slate-500 font-mono tracking-tight">{u.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-col gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400">
                                                    <div className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-slate-400" /> {u.device}</div>
                                                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {u.lastLoginStr}</div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border shadow-sm ${
                                                    u.isPaid ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400' : 'bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'
                                                }`}>
                                                    {u.isPaid ? 'Premium Tier' : 'Free Default'}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`flex items-center justify-center w-2 h-2 rounded-full shadow-sm ${statStr === 'Active' ? 'bg-emerald-500 shadow-emerald-500/50' : 'bg-rose-500 shadow-rose-500/50'}`}></span>
                                                    <span className={`font-bold text-xs uppercase tracking-wider ${statStr === 'Active' ? 'text-slate-700 dark:text-slate-300' : 'text-rose-600 dark:text-rose-400'}`}>{statStr}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 pr-6 text-right" onClick={(e) => e.stopPropagation()}>
                                                <button onClick={() => setSelectedUser(u)} className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Secure Pagination */}
                <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0f172a]/50 gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Show rows:</span>
                        <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }} className="bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 px-2 py-1 outline-none">
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                        </select>
                        <span className="text-xs font-semibold text-slate-500 border-l border-slate-200 dark:border-slate-700 pl-3">Showing {(page-1)*pageSize + 1} to {Math.min(page * pageSize, processedList.length)} of {processedList.length}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-white dark:bg-[#020617] p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="p-1.5 rounded-lg text-slate-500 hover:text-primary hover:bg-primary/10 disabled:opacity-30 transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 font-mono font-bold text-sm text-slate-800 dark:text-slate-200">Pg {page}</span>
                        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)} className="p-1.5 rounded-lg text-slate-500 hover:text-primary hover:bg-primary/10 disabled:opacity-30 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------------- 
               PROFILE SLIDE-OVER MODAL PRO 
               ------------------------------------------------------------- */}
            <AnimatePresence>
                {selectedUser && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedUser(null)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]" />
                        
                        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 right-0 w-full max-w-md bg-white dark:bg-[#0f172a] shadow-2xl z-[110] border-l border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#020617] flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-primary/30 relative">
                                            {selectedUser.photo_path ? (
                                                <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/student-photos/${selectedUser.photo_path}`} className="w-full h-full object-cover rounded-2xl" />
                                            ) : (selectedUser.full_name?.charAt(0) || 'U')}
                                            {selectedUser.isOnline && <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-emerald-500 border-4 border-white dark:border-[#020617] rounded-full shadow-sm"></div>}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{selectedUser.full_name || 'Anonymous User'}</h2>
                                    <p className="text-sm font-semibold text-slate-500 break-all">{selectedUser.email}</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className={`text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded border ${selectedUser.status === 'Banned' ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20'}`}>
                                            {selectedUser.status || 'Active'}
                                        </span>
                                        <span className="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded border bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700">
                                            {selectedUser.role || 'Student'}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedUser(null)} className="p-2 bg-white dark:bg-[#0f172a] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 transition-colors shadow-sm">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar flex flex-col gap-8">
                                
                                {/* Info Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                                        <Calendar className="w-5 h-5 text-indigo-500 mb-2" />
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Joined</p>
                                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{new Date(selectedUser.created_at).toLocaleDateString()}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                                        <MapPin className="w-5 h-5 text-amber-500 mb-2" />
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Last Intel</p>
                                        <p className="font-bold text-sm text-slate-800 dark:text-slate-200 truncate">{selectedUser.city || 'Unknown'}, {selectedUser.device}</p>
                                    </div>
                                </div>

                                {/* Advanced Pro Activity Timeline */}
                                <UserActivityTimeline userId={selectedUser.id} />

                                {/* Admin Force Actions */}
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 pt-4 border-t border-slate-100 dark:border-slate-800">Dangerous Policies Constraints</h3>
                                    <div className="flex flex-col gap-3">
                                        <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-left transition-colors font-bold text-sm text-slate-700 dark:text-slate-300">
                                            <FileText className="w-4 h-4 text-blue-500" /> Force Inject Manual Course
                                        </button>
                                        
                                        {selectedUser.status === 'Banned' ? (
                                            <button onClick={() => executeUnban(selectedUser.id)} className="flex items-center gap-3 w-full p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/20 text-left transition-colors font-bold text-sm text-emerald-700 dark:text-emerald-400">
                                                {isActionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Power className="w-4 h-4 text-emerald-500" />} Pardon & Restore Handshake
                                            </button>
                                        ) : (
                                            <button onClick={() => confirmBan(selectedUser)} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-500/10 border border-slate-200 dark:border-rose-500/20 text-left transition-colors font-bold text-sm text-slate-700 dark:text-rose-400 group">
                                                <Ban className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-colors" /> Temporarily Ban & Disconnect Session
                                            </button>
                                        )}
                                        
                                        <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-orange-50 hover:bg-rose-50 dark:bg-rose-500/10 border border-orange-200 dark:border-rose-500/20 text-left transition-colors font-bold text-sm text-orange-700 dark:text-rose-400 mt-2">
                                            <Trash2 className="w-4 h-4 text-orange-500 dark:text-rose-500" /> Hard Wipe Database Vector
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ------------------------------------------------------------- 
               CONFIRMATION DIALOG 
               ------------------------------------------------------------- */}
            <AnimatePresence>
                {confirmDialog && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
                       <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white dark:bg-[#0f172a] rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-[40px]" />
                           <AlertTriangle className="w-12 h-12 text-rose-500 mb-4" />
                           <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{confirmDialog.title}</h3>
                           <p className="text-sm font-semibold text-slate-500 mb-8 leading-relaxed">{confirmDialog.message}</p>
                           <div className="flex gap-3">
                               <button onClick={() => setConfirmDialog(null)} className="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                               <button onClick={confirmDialog.action} disabled={isActionLoading} className="flex-1 py-3 px-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm shadow-md transition-colors flex justify-center">
                                   {isActionLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirm Strike"}
                               </button>
                           </div>
                       </motion.div>
                   </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
