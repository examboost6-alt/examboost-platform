"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { getSupabaseClient } from "@/lib/supabaseClient";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  TrendingUp,
  FileText,
  Unlock,
  Ticket,
  MessageSquare,
  BarChart,
  Mail,
  Briefcase,
  FileCheck,
} from "lucide-react";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users & Students", icon: Users },
  { href: "/admin/admissions", label: "Admissions", icon: FileCheck },
  { href: "/admin/tests", label: "Test Series", icon: BookOpen },
  { href: "/admin/finances", label: "Finances & Sales", icon: CreditCard },
  { href: "/admin/blogs", label: "Blogs & Content", icon: FileText },
  { href: "/admin/access", label: "Free Access", icon: Unlock },
  { href: "/admin/coupons", label: "Coupons & Offers", icon: Ticket },
  { href: "/admin/support", label: "Student Doubts", icon: MessageSquare },
  { href: "/admin/contacts", label: "Contact Messages", icon: Mail },
  { href: "/admin/jobs", label: "Job Applications", icon: Briefcase },
  { href: "/admin/reports", label: "Reports & Analytics", icon: BarChart },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    let cancelled = false;

    const checkAdmin = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session) {
        if (!cancelled) {
          router.replace("/login");
        }
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (error || !profile || profile.role !== "admin") {
        if (!cancelled) {
          router.replace("/dashboard");
        }
        return;
      }

      if (!cancelled) setAuthChecked(true);
    };

    checkAdmin();

    return () => {
      cancelled = true;
    };
  }, [router]);

  const onLogout = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    await supabase.auth.signOut();
    router.replace("/login");
  };

  const closeMobileSidebar = () => setMobileSidebarOpen(false);

  if (!authChecked) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileSidebar}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: sidebarOpen ? 260 : 80,
          x: mobileSidebarOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -260 : 0)
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed lg:relative z-50 h-full bg-white dark:bg-[#0f172a] border-r border-slate-200 dark:border-slate-800 shadow-sm flex flex-col shrink-0 ${!mobileSidebarOpen ? 'max-lg:-translate-x-full' : ''}`}
      >
        <div className="h-16 flex items-center px-4 border-b border-slate-200 dark:border-slate-800 shrink-0 justify-between">
          <Link href="/admin" className="flex items-center gap-2 overflow-hidden whitespace-nowrap" onClick={closeMobileSidebar}>
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            {sidebarOpen && (
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                className="font-bold text-lg tracking-tight text-slate-800 dark:text-white"
              >
                Admin<span className="text-primary">Boost</span>
              </motion.span>
            )}
          </Link>
          <button aria-label="Close sidebar" className="lg:hidden text-slate-500 hover:text-slate-800 dark:hover:text-white" onClick={closeMobileSidebar}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1 custom-scrollbar">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileSidebar}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
                title={!sidebarOpen ? link.label : undefined}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-white" : "group-hover:text-primary dark:group-hover:text-accent"}`} />
                {sidebarOpen && (
                  <span className="font-semibold text-sm truncate">{link.label}</span>
                )}
                {isActive && sidebarOpen && (
                  <motion.div layoutId="active-indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <button onClick={onLogout} className="flex items-center gap-3 px-3 py-3 w-full rounded-xl text-slate-600 dark:text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400 transition-colors justify-start">
            <LogOut className="w-5 h-5 shrink-0" />
            {sidebarOpen && <span className="font-semibold text-sm">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button aria-label="Toggle sidebar" 
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setMobileSidebarOpen(true);
                } else {
                  setSidebarOpen(!sidebarOpen);
                }
              }} 
              className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="hidden md:flex items-center relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="pl-9 pr-4 py-2 w-64 bg-slate-100 dark:bg-[#020617] border border-transparent focus:border-primary/50 dark:focus:border-accent/50 focus:bg-white rounded-full text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button aria-label="Notifications" className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#0f172a]" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-400 text-white flex items-center justify-center font-bold text-sm ml-2 shadow-sm border-2 border-white dark:border-slate-800">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#020617] p-4 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
