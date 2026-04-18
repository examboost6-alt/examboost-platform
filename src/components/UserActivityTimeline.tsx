'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Activity, Clock, Compass, Search, Laptop, Smartphone, CreditCard, PlayCircle, Layers,
    CheckCircle2, AlertCircle, RefreshCw, XCircle
} from 'lucide-react';

interface UserActivityTimelineProps {
    userId: string;
}

export default function UserActivityTimeline({ userId }: UserActivityTimelineProps) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<{
        pageViews: any[];
        purchases: any[];
        userTests: any[];
        allSeries: any[];
    } | null>(null);

    const [activeTab, setActiveTab] = useState<'timeline' | 'tests' | 'payments'>('timeline');

    useEffect(() => {
        const fetchActivity = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/admin/user-activity', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId })
                });
                const json = await res.json();
                if (json.success) {
                    setData(json);
                }
            } catch (err) {
                console.error("Failed to fetch user activity", err);
            }
            setLoading(false);
        };

        if (userId) fetchActivity();
    }, [userId]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin mb-4" />
                <p className="text-sm font-bold text-slate-500 animate-pulse">Assembling Telemetry Data...</p>
            </div>
        );
    }

    if (!data) return null;

    // Helper to format duration
    const formatDuration = (seconds: number) => {
        if (seconds === -1) return "Active Now (Viewing)";
        if (seconds < 60) return `${seconds}s`;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    const getTestName = (testId: number) => {
        // Find from all series
        const series = data.allSeries?.find((s: any) => s.id === testId);
        return series ? series.title : `Test ID: ${testId}`;
    };

    return (
        <div className="flex flex-col gap-6 mt-2">
            
            {/* Header / Tabs */}
            <div className="flex items-center p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl overflow-x-auto no-scrollbar shadow-inner border border-slate-200/50 dark:border-slate-700/50">
                <button 
                    onClick={() => setActiveTab('timeline')}
                    className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === 'timeline' ? 'bg-white dark:bg-[#020617] text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <Activity className="w-3.5 h-3.5" /> Timeline
                </button>
                <button 
                    onClick={() => setActiveTab('tests')}
                    className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === 'tests' ? 'bg-white dark:bg-[#020617] text-purple-600 dark:text-purple-400 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <PlayCircle className="w-3.5 h-3.5" /> Test Attempts
                </button>
                <button 
                    onClick={() => setActiveTab('payments')}
                    className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === 'payments' ? 'bg-white dark:bg-[#020617] text-emerald-600 dark:text-emerald-400 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <CreditCard className="w-3.5 h-3.5" /> Payments
                </button>
            </div>

            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm min-h-[300px]">
                <AnimatePresence mode="wait">
                    
                    {/* TIMELINE TAB */}
                    {activeTab === 'timeline' && (
                        <motion.div key="timeline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-sm font-black text-slate-800 dark:text-slate-200">Page Visit History</h3>
                                    <p className="text-xs font-semibold text-slate-500 mt-1">Detailed breakdown of the user's journey and time spent across the platform.</p>
                                </div>
                                <div className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs rounded-lg border border-indigo-200 dark:border-indigo-500/20">
                                    {data.pageViews.length} Views Logged
                                </div>
                            </div>

                            {data.pageViews.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                                    <Compass className="w-12 h-12 mb-3 opacity-20" />
                                    <p className="text-sm font-bold">No tracking data found for this user.</p>
                                </div>
                            ) : (
                                <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 pb-4">
                                    {data.pageViews.slice(0, 30).map((view, idx) => (
                                        <div key={idx} className="relative pl-6 pb-6 last:pb-0">
                                            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white dark:border-[#0f172a] shadow-sm ${view.durationSeconds === -1 ? 'bg-emerald-500 animate-pulse' : 'bg-indigo-400'}`}></div>
                                            
                                            <div className="bg-slate-50/80 dark:bg-slate-800/30 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/80 hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-800/60 hover:shadow-sm transition-all">
                                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                                                    <div className="min-w-0 flex-1">
                                                        <p className="font-bold text-[13px] text-slate-800 dark:text-slate-200 font-mono break-all leading-relaxed">
                                                            {view.path}
                                                        </p>
                                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-[11px] font-semibold text-slate-500">
                                                            <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                                                                <Clock className="w-3 h-3 text-slate-400" /> 
                                                                {new Date(view.created_at).toLocaleString(undefined, {month:'short', day:'numeric', hour:'2-digit', minute:'2-digit'})}
                                                            </span>
                                                            <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                                                                {view.device_type === 'Mobile' ? <Smartphone className="w-3 h-3 text-slate-400" /> : <Laptop className="w-3 h-3 text-slate-400" />} 
                                                                {view.device_type} <span className="opacity-60 font-medium">({view.os})</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={`shrink-0 self-start px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${view.durationSeconds === -1 ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30' : 'bg-white dark:bg-[#020617] text-slate-500 border-slate-200 dark:text-slate-400 dark:border-slate-700'}`}>
                                                        {formatDuration(view.durationSeconds)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {data.pageViews.length > 30 && (
                                        <div className="relative pl-6 mt-2">
                                           <p className="text-xs font-bold text-slate-400 italic">...and {data.pageViews.length - 30} more older views hidden for performance.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* TESTS TAB */}
                    {activeTab === 'tests' && (
                        <motion.div key="tests" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-sm font-black text-slate-800 dark:text-slate-200">Assessment History</h3>
                                </div>
                                <div className="px-3 py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs rounded-lg border border-purple-200 dark:border-purple-500/20">
                                    {data.userTests.length} Attempts
                                </div>
                            </div>
                            
                            {data.userTests.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                                    <Layers className="w-12 h-12 mb-3 opacity-20" />
                                    <p className="text-sm font-bold">No test attempts registered.</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full whitespace-nowrap text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500">
                                                <th className="py-3 pr-4">Test Profile</th>
                                                <th className="py-3 px-4">Score</th>
                                                <th className="py-3 pl-4 text-right">Submitted At</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                                            {data.userTests.map((test, idx) => (
                                                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                                                    <td className="py-3 pr-4">
                                                        <div className="font-bold text-sm text-slate-800 dark:text-slate-200">
                                                            {getTestName(test.test_id)}
                                                        </div>
                                                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">ID: {test.test_id}</div>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <span className="font-black text-indigo-600 dark:text-indigo-400">
                                                            {test.score !== null ? test.score : 'N/A'} Marks
                                                        </span>
                                                    </td>
                                                    <td className="py-3 pl-4 text-right text-xs font-semibold text-slate-500">
                                                        {new Date(test.created_at).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* PAYMENTS TAB */}
                    {activeTab === 'payments' && (
                        <motion.div key="payments" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-sm font-black text-slate-800 dark:text-slate-200">Financial Ledger</h3>
                                </div>
                                <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs rounded-lg border border-emerald-200 dark:border-emerald-500/20">
                                    ₹{data.purchases.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0).toLocaleString()} LTV
                                </div>
                            </div>
                            
                            {data.purchases.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                                    <CreditCard className="w-12 h-12 mb-3 opacity-20" />
                                    <p className="text-sm font-bold">No purchase history found.</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {data.purchases.map((purchase, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    {purchase.status === 'success' ? (
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                    ) : (
                                                        <AlertCircle className="w-4 h-4 text-amber-500" />
                                                    )}
                                                    <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
                                                        {purchase.test_series?.title || `Series ID: ${purchase.series_id}`}
                                                    </span>
                                                </div>
                                                <div className="text-xs font-semibold text-slate-500 mt-1 flex gap-2 items-center">
                                                    <span>{new Date(purchase.created_at).toLocaleDateString()}</span>
                                                    <span>•</span>
                                                    <span className="font-mono text-[10px]">TXN: {purchase.payment_id || purchase.order_id || 'N/A'}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-black text-lg text-slate-900 dark:text-white">
                                                    ₹{purchase.amount}
                                                </div>
                                                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                                    {purchase.amount === 0 ? 'Free Grant' : 'Paid Auth'}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
