"use client";

import { motion } from "framer-motion";
import { Search, Plus, Filter, Edit, Trash2, Eye, Image as ImageIcon } from "lucide-react";

const blogs = [
  { id: 1, title: "How to Crack JEE Main in 6 Months", category: "Preparation Tips", views: "12,450", status: "Published", date: "Oct 25, 2025" },
  { id: 2, title: "Top 10 Books for NEET Biology", category: "Resources", views: "8,200", status: "Published", date: "Oct 22, 2025" },
  { id: 3, title: "SSC CGL Strategy by Toppers", category: "Strategy", views: "15,800", status: "Draft", date: "Oct 20, 2025" },
  { id: 4, title: "UPSC Prelims Notification Analysis", category: "News", views: "4,100", status: "Published", date: "Oct 18, 2025" },
  { id: 5, title: "Daily Current Affairs - October", category: "Current Affairs", views: "2,050", status: "Review", date: "Oct 15, 2025" },
];

export default function AdminBlogs() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Blogs & Content</h1>
          <p className="text-slate-500 font-medium">Manage articles, study materials, and news for your students.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-all shadow-primary/20">
          <Plus className="w-5 h-5" /> Write New Post
        </button>
      </div>

      {/* Editor Placeholder Area (Mockup for adding new posts) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6"
      >
        <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Quick Draft</h2>
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Post Title..." 
            className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-bold transition-colors text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
          />
          <div className="w-full h-32 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm text-slate-400 font-medium flex items-center justify-center border-dashed">
            <div className="flex flex-col items-center gap-2">
              <ImageIcon className="w-6 h-6 text-slate-400" />
              <span>Drag & Drop Cover Image</span>
            </div>
          </div>
          <textarea 
            placeholder="Start writing your content here..." 
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm transition-colors text-slate-800 dark:text-slate-200 placeholder:text-slate-400 resize-none"
          />
          <div className="flex justify-end gap-3 mt-2">
            <button className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm transition-colors">
              Save as Draft
            </button>
            <button className="px-5 py-2.5 bg-primary hover:bg-secondary text-white rounded-xl font-bold text-sm shadow-md transition-colors shadow-primary/20">
              Publish Post
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main List Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-slate-50/50 dark:bg-[#0f172a]/50">
          <div className="relative w-full md:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-primary/50 text-sm font-medium transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <select className="px-3 py-2 bg-white dark:bg-[#020617] border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 outline-none">
              <option>All Categories</option>
              <option>Preparation Tips</option>
              <option>Strategy</option>
              <option>Current Affairs</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#020617]/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">Post Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Views</th>
                <th className="p-4">Status</th>
                <th className="p-4">Published On</th>
                <th className="p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 pl-6">
                    <p className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors cursor-pointer line-clamp-1">{blog.title}</p>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400">
                      {blog.category}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {blog.views}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold ${
                      blog.status === 'Published' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' 
                        : blog.status === 'Draft' 
                          ? 'bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400'
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400'
                    }`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500">
                    {blog.date}
                  </td>
                  <td className="p-4 pr-6">
                    <div className="flex justify-end gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><Eye className="w-4 h-4" /></button>
                      <button className="text-slate-400 hover:text-indigo-500 transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><Edit className="w-4 h-4" /></button>
                      <button className="text-slate-400 hover:text-rose-500 transition-colors p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
