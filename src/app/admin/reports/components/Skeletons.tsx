import React from "react";

export function KPISkeleton() {
  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse h-36">
      <div className="flex justify-between items-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800"></div>
        <div className="w-16 h-6 rounded bg-slate-200 dark:bg-slate-800"></div>
      </div>
      <div className="w-1/2 h-8 rounded bg-slate-200 dark:bg-slate-800 mb-2"></div>
      <div className="w-1/3 h-4 rounded bg-slate-200 dark:bg-slate-800"></div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800"></div>
          <div>
            <div className="w-32 h-6 rounded bg-slate-200 dark:bg-slate-800 mb-2"></div>
            <div className="w-24 h-4 rounded bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full bg-slate-100 dark:bg-slate-800/50 rounded-xl mt-4"></div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse">
      <div className="w-48 h-6 rounded bg-slate-200 dark:bg-slate-800 mb-6"></div>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-12 bg-slate-100 dark:bg-slate-800/80 rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}

export function EmptyState({ message, icon: Icon }: { message: string, icon: any }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0f172a]/50 rounded-2xl">
      <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4 shadow-inner">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">No Data Available</h3>
      <p className="text-sm text-slate-500 mt-1">{message}</p>
    </div>
  );
}
