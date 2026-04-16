"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Activity,
  Eye,
  Settings,
  Database,
  Shield,
  FileText,
  TrendingUp,
  Globe,
  Monitor,
  Smartphone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  LogOut,
  Bell,
  Search,
  User,
  Sun,
  Moon,
  Zap,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['analytics']));
  const pathname = usePathname();

  const navigationItems = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
      description: 'Main admin dashboard',
      badge: null
    },
    {
      title: 'Analytics',
      href: '/admin/analytics',
      icon: BarChart3,
      description: 'Visitor analytics and insights',
      badge: 'NEW',
      children: [
        { title: 'Visitor Analytics', href: '/admin/analytics', icon: Eye },
        { title: 'User Activity', href: '/admin/analytics?tab=users', icon: Users },
        { title: 'Performance', href: '/admin/analytics?tab=performance', icon: TrendingUp }
      ]
    },
    {
      title: 'Real-time Monitoring',
      href: '/admin/realtime',
      icon: Activity,
      description: 'Live monitoring dashboard',
      badge: 'LIVE'
    },
    {
      title: 'User Management',
      href: '/admin/users',
      icon: Users,
      description: 'Manage registered users',
      badge: null
    },
    {
      title: 'Reports',
      href: '/admin/reports',
      icon: FileText,
      description: 'Generate and view reports',
      badge: null,
      children: [
        { title: 'Test Reports', href: '/admin/reports/tests', icon: Database },
        { title: 'User Reports', href: '/admin/reports/users', icon: Users },
        { title: 'Financial Reports', href: '/admin/reports/financial', icon: TrendingUp }
      ]
    },
    {
      title: 'System',
      href: '/admin/system',
      icon: Settings,
      description: 'System configuration',
      badge: null,
      children: [
        { title: 'Database', href: '/admin/system/database', icon: Database },
        { title: 'Security', href: '/admin/system/security', icon: Shield },
        { title: 'Performance', href: '/admin/system/performance', icon: Monitor }
      ]
    }
  ];

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (href: string) => {
    if (href === pathname) return true;
    if (href.includes('?')) {
      const basePath = href.split('?')[0];
      return pathname === basePath;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a]">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed top-0 left-0 z-50 w-72 h-full bg-white dark:bg-[#1e293b] border-r border-slate-200 dark:border-slate-700 lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">Admin Panel</h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">ExamBoost Control Center</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.title)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary dark:bg-primary/20'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs font-bold rounded ${
                          item.badge === 'LIVE'
                            ? 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400'
                            : item.badge === 'NEW'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                      {expandedSections.has(item.title) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedSections.has(item.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 space-y-1"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                              isActive(child.href)
                                ? 'bg-primary/10 text-primary dark:bg-primary/20'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            <child.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{child.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary dark:bg-primary/20'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{item.description}</div>
                    </div>
                  </div>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      item.badge === 'LIVE'
                        ? 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400'
                        : item.badge === 'NEW'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* System Status */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-900 dark:text-white">All Systems Operational</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              <div>Server Load: 23%</div>
              <div>Database: Connected</div>
              <div>Last Sync: 2 min ago</div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search admin panel..."
                  className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Administrator</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">admin@examboost.in</div>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
