"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  { href: "/admin/students", label: "Students", icon: Users },
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
        .maybeSingle();

      const role = (profile as { role?: string } | null)?.role;

      if (error || !role || role !== "admin") {
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
    <div className="h-[100dvh] w-full bg-slate-50 dark:bg-[#020813] text-slate-900 dark:text-slate-100 font-sans flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileSidebar}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Premium Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: sidebarOpen ? 280 : 80,
          x: mobileSidebarOpen ? 0 : (!sidebarOpen && typeof window !== 'undefined' && window.innerWidth < 1024 ? -280 : 0)
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed lg:relative z-50 h-full bg-secondary border-r border-[#193264] shadow-2xl flex flex-col shrink-0 ${!mobileSidebarOpen ? 'max-lg:-translate-x-full' : ''}`}
      >
        <div className="h-20 flex items-center px-6 border-b border-[#193264] shrink-0 justify-between">
          <Link href="/admin" className="flex items-center gap-3 overflow-hidden whitespace-nowrap" onClick={closeMobileSidebar}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                className="font-black text-xl tracking-tight text-white"
              >
                Admin<span className="text-accent">Panel</span>
              </motion.span>
            )}
          </Link>
          <button aria-label="Close sidebar" className="lg:hidden text-slate-400 hover:text-white" onClick={closeMobileSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1.5 custom-scrollbar">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileSidebar}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative ${
                  isActive 
                    ? "bg-[#142d5e] text-white shadow-inner" 
                    : "text-slate-400 hover:bg-[#142d5e]/50 hover:text-slate-100"
                }`}
                title={!sidebarOpen ? link.label : undefined}
              >
                <div className={`relative flex items-center justify-center ${isActive ? 'text-accent' : 'text-slate-400 group-hover:text-accent'} transition-colors`}>
                  <Icon className="w-5 h-5 shrink-0" />
                  {isActive && (
                    <div className="absolute inset-0 bg-accent/20 blur-md rounded-full" />
                  )}
                </div>
                {sidebarOpen && (
                  <span className="font-semibold text-sm tracking-wide truncate">{link.label}</span>
                )}
                {isActive && sidebarOpen && (
                  <motion.div layoutId="active-indicator" className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-[#193264] shrink-0 bg-[#0c1a3b]">
          <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-colors justify-start">
            <LogOut className="w-5 h-5 shrink-0" />
            {sidebarOpen && <span className="font-semibold text-sm tracking-wide">Secure Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-slate-50 dark:bg-[#020617]">
        {/* Premium Header */}
        <header className="h-20 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800/60 flex items-center justify-between px-6 lg:px-10 shrink-0 z-30 shadow-sm">
          <div className="flex items-center gap-6">
            <button aria-label="Toggle sidebar" 
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setMobileSidebarOpen(true);
                } else {
                  setSidebarOpen(!sidebarOpen);
                }
              }} 
              className="p-2.5 -ml-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="hidden md:flex items-center relative group">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources, students, tests..." 
                className="pl-11 pr-4 py-2.5 w-72 lg:w-96 bg-slate-100 dark:bg-[#050b1a] border border-transparent focus:border-primary/30 dark:focus:border-primary/50 focus:bg-white dark:focus:bg-[#020617] focus:ring-4 focus:ring-primary/10 rounded-full text-sm font-medium outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button aria-label="Notifications" className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-white dark:border-slate-900" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-500 text-white flex items-center justify-center font-black text-lg ml-2 shadow-md shadow-primary/20 border-2 border-white dark:border-slate-800 cursor-pointer">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-4 py-8 lg:p-10">
          <div className="max-w-[1600px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

