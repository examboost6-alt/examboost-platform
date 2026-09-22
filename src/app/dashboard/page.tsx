"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabaseClient";
import {
  fetchStudentAttempts,
  calculateStudentMetrics,
  launchAiTest,
  launchDailyChallenge,
  StudentMetrics,
} from "@/lib/studentAnalytics";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  ListOrdered,
  FileCheck,
  Sparkles,
  Calendar,
  AlertCircle,
  BarChart2,
  Trophy,
  Bookmark,
  Target,
  Clock,
  ArrowRight,
  ChevronDown,
  Bell,
  CheckCircle2,
  Atom,
  FlaskConical,
  Calculator,
  HelpCircle,
  Star,
  Menu,
  X,
  TrendingUp,
  User,
  LogOut,
  Zap,
  Flame,
  Check,
  Award,
  ChevronRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function StudentDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeRange, setTimeRange] = useState<"10days" | "30days" | "all">("10days");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showDailyModal, setShowDailyModal] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);

  // AI Modal form state
  const [aiSubject, setAiSubject] = useState("Full Mock (PCM Combined)");
  const [aiQuestionCount, setAiQuestionCount] = useState(30);
  const [aiDifficulty, setAiDifficulty] = useState("JEE Main Standard");

  // Dynamic Student Info state
  const [studentInfo, setStudentInfo] = useState({
    name: "Student",
    email: "",
    targetExam: "JEE Main & Advanced 2026",
  });

  // Dynamic student metrics calculated live from DB & localStorage
  const [metrics, setMetrics] = useState<StudentMetrics>(() => calculateStudentMetrics([]));
  const [loadingMetrics, setLoadingMetrics] = useState(true);

  // Fetch student profile and live test attempts on mount
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      // 1. Fetch Auth Profile
      try {
        const supabase = getSupabaseClient();
        if (supabase) {
          const { data } = await supabase.auth.getSession();
          if (data?.session?.user) {
            const user = data.session.user;
            const { data: profile } = await supabase
              .from("profiles")
              .select("*")
              .eq("id", user.id)
              .maybeSingle();

            if (isMounted) {
              if (profile) {
                const fullName =
                  profile.full_name || profile.name || user.email?.split("@")[0] || "Student";
                setStudentInfo((prev) => ({
                  ...prev,
                  name: fullName,
                  email: user.email || "",
                  targetExam: profile.target_exam || prev.targetExam,
                }));
              } else if (user.email) {
                const rawName = user.user_metadata?.full_name || user.email.split("@")[0];
                setStudentInfo((prev) => ({
                  ...prev,
                  name: rawName ? rawName.charAt(0).toUpperCase() + rawName.slice(1) : "Student",
                  email: user.email || "",
                }));
              }
            }
          }
        }
      } catch (err) {
        console.error("Session fetch error:", err);
      }

      // 2. Fetch live test attempts from Supabase & localStorage
      try {
        const attempts = await fetchStudentAttempts();
        if (isMounted) {
          const calculated = calculateStudentMetrics(attempts);
          setMetrics(calculated);
          setLoadingMetrics(false);
        }
      } catch (err) {
        console.error("Error loading test metrics:", err);
        if (isMounted) setLoadingMetrics(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    const supabase = getSupabaseClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    router.push("/login");
  };

  const handleStartAiTest = () => {
    setShowAiModal(false);
    launchAiTest(router, {
      subject: aiSubject,
      questionCount: aiQuestionCount,
      difficulty: aiDifficulty,
    });
  };

  const handleStartDailyChallenge = () => {
    setShowDailyModal(false);
    launchDailyChallenge(router);
  };

  const sidebarMenuItems = [
    { name: "Mock Tests", icon: FileText, href: "/free-mock-tests", badge: "24 Tests" },
    { name: "Subject Tests", icon: BookOpen, href: "/exams" },
    { name: "Chapter Tests", icon: ListOrdered, href: "/exams" },
    { name: "PYQ Practice", icon: FileCheck, href: "/exams", badge: "10 Yrs" },
    { name: "AI Test Generator", icon: Sparkles, action: () => setShowAiModal(true), highlight: true },
    { name: "Daily Challenge", icon: Calendar, action: () => setShowDailyModal(true), badge: "Live" },
    { name: "My Mistakes", icon: AlertCircle, href: "#analytics" },
    { name: "Performance", icon: BarChart2, href: "#analytics" },
    { name: "Rankings", icon: Trophy, action: () => setShowLeaderboardModal(true) },
    { name: "Bookmarks", icon: Bookmark, href: "#" },
  ];

  interface LeaderboardEntry {
    rank: number;
    name: string;
    air: string;
    score: string;
    isUser?: boolean;
  }

  // Dynamic Leaderboard list inserting student based on real attempts
  const baseLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Aarav Sharma", air: "AIR 512", score: "99.6%" },
    { rank: 2, name: "Priya Patel", air: "AIR 1,224", score: "98.9%" },
    { rank: 3, name: "Rohan Verma", air: "AIR 3,760", score: "98.4%" },
  ];

  const userLeaderboardEntry: LeaderboardEntry = {
    rank: 4,
    name: `${studentInfo.name.split(" ")[0]} (You)`,
    air: metrics.hasAttempts ? `AIR ${metrics.airRank}` : "Unranked",
    score: metrics.hasAttempts ? `${metrics.percentile}%` : "--",
    isUser: true,
  };

  const leaderboardData: LeaderboardEntry[] = [
    ...baseLeaderboard,
    userLeaderboardEntry,
    { rank: 5, name: "Ananya Iyer", air: "AIR 5,300", score: "97.8%" },
    { rank: 6, name: "Devansh Gupta", air: "AIR 6,110", score: "97.2%" },
    { rank: 7, name: "Sneha Reddy", air: "AIR 7,420", score: "96.8%" },
  ];

  const currentChartData = metrics.accuracyTrend[timeRange] || [];

  return (
    <div className="flex h-screen h-[100dvh] w-full bg-[#F1F5F9] font-sans text-slate-800 antialiased overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* ========================================================================= */}
      {/* PROFESSIONAL EDTECH DARK NAVY SIDEBAR */}
      {/* ========================================================================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col justify-between w-64 bg-[#0A1128] text-slate-200 transition-all duration-300 ease-in-out lg:static lg:translate-x-0 border-r border-[#162238] shrink-0 ${
          mobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header & Nav */}
        <div className="px-5 pt-6 pb-24 overflow-y-auto custom-scrollbar flex-1">
          {/* Brand Logo */}
          <div className="flex items-center justify-between pb-5 border-b border-[#1E293B]">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-xs">
                <span className="font-extrabold italic text-2xl tracking-tighter">B</span>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-[18px] leading-tight text-white tracking-tight">
                  ExamBoost
                </h1>
                <p className="text-[11px] font-medium text-slate-400">
                  JEE Aspirant Portal
                </p>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Dashboard Button */}
          <div className="mt-5">
            <button
              onClick={() => {
                setActiveMenu("Dashboard");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeMenu === "Dashboard"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <LayoutDashboard className="w-[18px] h-[18px]" />
              <span>Dashboard</span>
            </button>
          </div>

          {/* Section: Practice & Analytics */}
          <div className="mt-6">
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Practice & Analytics
            </p>
            <nav className="space-y-1">
              {sidebarMenuItems.map((item) => {
                const isSelected = activeMenu === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setActiveMenu(item.name);
                      if (item.action) {
                        item.action();
                      } else if (item.href && item.href !== "#") {
                        if (item.href.startsWith("#")) {
                          const elem = document.querySelector(item.href);
                          elem?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          router.push(item.href);
                        }
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] transition-colors group ${
                      isSelected
                        ? "bg-[#1E293B] text-white font-semibold border-l-2 border-[#2563EB]"
                        : "text-slate-300 hover:text-white hover:bg-white/5 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <item.icon
                        className={`w-[17px] h-[17px] shrink-0 transition-colors ${
                          isSelected
                            ? "text-[#60A5FA]"
                            : item.highlight
                            ? "text-purple-400"
                            : "text-slate-400 group-hover:text-white"
                        }`}
                      />
                      <span className="truncate">{item.name}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                          item.badge === "Live"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                            : "bg-[#1E293B] text-slate-300 border border-slate-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Card: Real Streak & Target Card */}
        <div className="p-4 border-t border-[#1E293B] shrink-0">
          <div className="rounded-2xl bg-[#111C38] p-3.5 border border-[#1E2E52] flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-700 flex items-center justify-center">
              <img
                src="/streak_flame_badge.jpg"
                alt="Streak Master"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-white truncate">
                  {metrics.streakDays > 0 ? `${metrics.streakDays}-Day Streak` : "0-Day Streak"}
                </span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                    metrics.streakDays > 0
                      ? "text-amber-400 bg-amber-400/10 border-amber-400/30"
                      : "text-slate-400 bg-slate-400/10 border-slate-400/30"
                  }`}
                >
                  {metrics.streakDays > 0 ? "Active" : "Inactive"}
                </span>
              </div>
              <p className="text-[10.5px] text-slate-300 mt-0.5 truncate">
                Goal: {metrics.questionsAttempted}/50 MCQs
              </p>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1.5">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, Math.round((metrics.questionsAttempted / 50) * 100))}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden transition-opacity backdrop-blur-xs"
        />
      )}

      {/* ========================================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
        {/* TOP HEADER BAR */}
        <header className="shrink-0 h-16 sm:h-18 bg-white border-b border-slate-200/90 px-3.5 sm:px-8 flex items-center justify-between z-20 shadow-xs">
          <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h2 className="font-bold text-sm sm:text-lg text-slate-900 tracking-tight truncate">
                  <span className="sm:hidden">Hi, {studentInfo.name.split(" ")[0]}</span>
                  <span className="hidden sm:inline">Welcome back, {studentInfo.name.split(" ")[0]}</span>
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  {studentInfo.targetExam.includes("JEE") ? "JEE Main 2026" : "Exam Prep 2026"}
                </span>
              </div>
              <p className="hidden sm:block text-xs text-slate-500 font-normal truncate">
                Target IIT JEE Main & Advanced • {metrics.hasAttempts ? `AIR ${metrics.airRank} Active Aspirant` : "Take Mock 1 to benchmark your rank"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6 shrink-0">
            {/* Streak Counter - Dynamic */}
            <div className="flex items-center gap-1 sm:gap-1.5 bg-amber-50 border border-amber-200/80 px-2 sm:px-3 py-1 rounded-full text-amber-800 text-[11px] sm:text-xs font-semibold shrink-0 whitespace-nowrap">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
              <span className="hidden sm:inline">{metrics.streakDays} Days Streak</span>
              <span className="sm:hidden">{metrics.streakDays}d</span>
            </div>

            {/* Overall Syllabus / Mock Completion Widget */}
            <div className="hidden md:flex flex-col items-end">
              <div className="flex items-center justify-between w-36 mb-1">
                <span className="text-[11px] font-medium text-slate-500">Mocks Covered</span>
                <span className="text-xs font-bold text-slate-900">{metrics.progress}%</span>
              </div>
              <div className="w-36 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2563EB] rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(4, metrics.progress)}%` }}
                />
              </div>
            </div>

            {/* Notification Bell */}
            <button
              className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 rounded-lg sm:rounded-xl transition-colors shrink-0"
              title="Notifications"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              {metrics.hasAttempts && (
                <span className="absolute top-1 sm:top-1.5 right-1 sm:right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
              )}
            </button>

            {/* User Profile Avatar with dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-1 sm:gap-2 p-1 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A1128] text-white font-bold text-xs flex items-center justify-center border border-slate-700">
                  {studentInfo.name ? studentInfo.name.charAt(0).toUpperCase() : "S"}
                </div>
                <span className="hidden md:inline font-semibold text-xs text-slate-800">
                  {studentInfo.name.split(" ")[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown Menu with backdrop */}
              {profileDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setProfileDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in duration-100">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900">{studentInfo.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{studentInfo.targetExam}</p>
                    </div>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        router.push("/free-mock-tests");
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4 text-slate-400" /> All Mock Tests
                    </button>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        router.push("/exams");
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4 text-slate-400" /> Explore Exam Library
                    </button>
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-slate-100 mt-1"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* SCROLLABLE DASHBOARD BODY */}
        <main className="flex-1 overflow-y-auto p-3.5 sm:p-6 lg:p-7 space-y-4 sm:space-y-6">
          <div className="max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
            {/* =================================================================== */}
            {/* LEFT / CENTER COLUMN (8 cols out of 12) */}
            {/* =================================================================== */}
            <div className="lg:col-span-8 xl:col-span-8 space-y-4 sm:space-y-6 min-w-0">
              {/* ========================================================================= */}
              {/* SECTION 1: HERO CONTINUE PREPARATION CARD WITH 3D STUDENT ILLUSTRATION */}
              {/* ========================================================================= */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
                  {/* Left Column: Test Details & CTA */}
                  <div className="space-y-3 sm:space-y-4 max-w-xl flex-1 text-left w-full">
                    {/* Top Badges */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-blue-50 text-blue-700 text-[10.5px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-200/70 tracking-wide uppercase">
                        {metrics.hasAttempts ? "Recommended Next Step" : "Diagnostic Step 1"}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-[10.5px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-slate-200">
                        {metrics.nextRecommendedTest.syllabus}
                      </span>
                    </div>

                    {/* Title & 3D Thumbnail on Mobile */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-extrabold text-lg sm:text-2xl lg:text-3xl text-slate-900 tracking-tight leading-tight">
                          {metrics.nextRecommendedTest.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {metrics.hasAttempts
                            ? "Complete CBT simulation with official NTA timer, negative marking scheme, and instant All India Percentile benchmark."
                            : "Take your diagnostic baseline test with official NTA timer and negative marking to evaluate your initial All India Percentile."}
                        </p>
                      </div>

                      {/* 3D Student Thumbnail - Mobile only */}
                      <div className="md:hidden shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-xs p-0.5">
                        <img
                          src="/student_jee_hero.jpg"
                          alt="JEE Student Preparation"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Test Specs Pills */}
                    <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-2.5 text-[11px] sm:text-xs text-slate-700 font-semibold">
                      <span className="flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 bg-slate-50 border border-slate-200/80 px-2 sm:px-3 py-1.5 rounded-xl">
                        <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{metrics.nextRecommendedTest.questions} Qs</span>
                      </span>
                      <span className="flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 bg-slate-50 border border-slate-200/80 px-2 sm:px-3 py-1.5 rounded-xl">
                        <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{metrics.nextRecommendedTest.duration} Mins</span>
                      </span>
                      <span className="flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 bg-slate-50 border border-slate-200/80 px-2 sm:px-3 py-1.5 rounded-xl">
                        <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{metrics.nextRecommendedTest.marks} Marks</span>
                      </span>
                    </div>

                    {/* Target & Score Pill */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl text-xs text-slate-600">
                      <span>Target: <strong className="text-slate-900 font-bold">240/300</strong></span>
                      <span className="text-slate-300">|</span>
                      <span>
                        {metrics.hasAttempts ? (
                          <>
                            Last Score: <strong className="text-emerald-600 font-bold">{metrics.lastScore}/300</strong> (Best: {metrics.bestScore})
                          </>
                        ) : (
                          <>
                            Status: <strong className="text-blue-600 font-bold">Diagnostic Ready</strong>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Primary Action Button (Bottom of card on mobile) */}
                    <div className="pt-1">
                      <Link
                        href={`/test/${metrics.nextRecommendedTest.id}/instructions`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-xs transition-all touch-manipulation"
                      >
                        <span>{metrics.hasAttempts ? "Continue Preparation" : "Start Test 1 (Free)"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: 3D JEE Student Study Illustration (Desktop only) */}
                  <div className="hidden md:flex shrink-0 relative items-center justify-center">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-xs p-1">
                      <img
                        src="/student_jee_hero.jpg"
                        alt="JEE Student Preparation"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 2: 4 ACTION CARDS (THE APPROVED BENCHMARK STYLE) */}
              {/* ========================================================================= */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* 1. Mock Tests (Blue) */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center mb-2.5 sm:mb-3 shadow-xs">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide uppercase truncate">
                      Mock Tests
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 mb-3 sm:mb-4 leading-tight sm:leading-normal line-clamp-1">
                      24 Full NTA Mocks
                    </p>
                  </div>
                  <Link
                    href="/free-mock-tests"
                    className="w-full bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-[11px] sm:text-xs py-2 px-1.5 sm:px-3 rounded-xl flex items-center justify-center gap-1 transition-all whitespace-nowrap touch-manipulation"
                  >
                    <span>View Tests</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>

                {/* 2. PYQ Practice (Emerald) */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#059669] text-white flex items-center justify-center mb-2.5 sm:mb-3 shadow-xs">
                      <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide uppercase truncate">
                      PYQ Practice
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 mb-3 sm:mb-4 leading-tight sm:leading-normal line-clamp-1">
                      Real JEE questions
                    </p>
                  </div>
                  <Link
                    href="/exams"
                    className="w-full bg-[#059669] hover:bg-emerald-700 active:scale-[0.98] text-white font-semibold text-[11px] sm:text-xs py-2 px-1.5 sm:px-3 rounded-xl flex items-center justify-center gap-1 transition-all whitespace-nowrap touch-manipulation"
                  >
                    <span className="hidden sm:inline">Practice PYQs</span>
                    <span className="sm:hidden">Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>

                {/* 3. AI Test Generator (Purple) */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center mb-2.5 sm:mb-3 shadow-xs">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide uppercase truncate">
                      AI Test Gen
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 mb-3 sm:mb-4 leading-tight sm:leading-normal line-clamp-1">
                      Adaptive drill generator
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAiModal(true)}
                    className="w-full bg-[#7C3AED] hover:bg-purple-700 active:scale-[0.98] text-white font-semibold text-[11px] sm:text-xs py-2 px-1.5 sm:px-3 rounded-xl flex items-center justify-center gap-1 transition-all whitespace-nowrap touch-manipulation"
                  >
                    <span className="hidden sm:inline">Generate Test</span>
                    <span className="sm:hidden">Generate</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>

                {/* 4. Daily Challenge (Orange) */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EA580C] text-white flex items-center justify-center mb-2.5 sm:mb-3 shadow-xs">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 tracking-wide uppercase truncate">
                      Daily Challenge
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 mb-3 sm:mb-4 leading-tight sm:leading-normal line-clamp-1">
                      18 Qs • 20 Mins
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDailyModal(true)}
                    className="w-full bg-[#EA580C] hover:bg-orange-700 active:scale-[0.98] text-white font-semibold text-[11px] sm:text-xs py-2 px-1.5 sm:px-3 rounded-xl flex items-center justify-center gap-1 transition-all whitespace-nowrap touch-manipulation"
                  >
                    <span>Start Test</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION 3: PERFORMANCE ANALYTICS */}
              {/* ========================================================================= */}
              <div id="analytics" className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                      Performance Analytics
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Real JEE accuracy, speed, and chapter diagnostics computed from your verified test submissions.
                    </p>
                  </div>

                  {/* Clean Segmented Time Range Tab */}
                  <div className="flex items-center bg-slate-100 p-1 rounded-xl w-full sm:w-fit border border-slate-200/80 justify-between sm:justify-start">
                    {[
                      { id: "10days", label: "Last 10 Days" },
                      { id: "30days", label: "Last 30 Days" },
                      { id: "all", label: "All Time" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setTimeRange(tab.id as any)}
                        className={`text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors flex-1 sm:flex-initial text-center whitespace-nowrap ${
                          timeRange === tab.id
                            ? "bg-white text-slate-900 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Accuracy Chart or Authentic Zero-State */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-slate-700 block">
                          Accuracy Trend
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Percentage of correct responses
                        </span>
                      </div>
                      <span className="text-sm font-bold text-blue-600">
                        {metrics.hasAttempts ? `${metrics.accuracy}%` : "0%"}
                      </span>
                    </div>

                    <div className="h-44 sm:h-48 w-full min-w-0">
                      {currentChartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={currentChartData}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis
                              dataKey="date"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: "#94A3B8", fontSize: 10.5, fontWeight: 500 }}
                              dy={5}
                            />
                            <YAxis
                              domain={[0, 100]}
                              ticks={[0, 25, 50, 75, 100]}
                              width={44}
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: "#94A3B8", fontSize: 10.5, fontWeight: 500 }}
                              tickFormatter={(val) => `${val}%`}
                            />
                            <RechartsTooltip
                              contentStyle={{
                                backgroundColor: "#0F172A",
                                borderRadius: "8px",
                                color: "#fff",
                                border: "none",
                                fontSize: "11px",
                                padding: "6px 10px",
                              }}
                              formatter={(value: any) => [`${value}%`, "Accuracy"]}
                            />
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="#2563EB"
                              strokeWidth={2}
                              fill="#EFF6FF"
                              fillOpacity={0.7}
                              dot={{ r: 3.5, fill: "#2563EB", stroke: "#FFFFFF", strokeWidth: 2 }}
                              activeDot={{ r: 5, fill: "#1D4ED8", stroke: "#FFFFFF", strokeWidth: 2 }}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center bg-slate-50/70 rounded-xl border border-dashed border-slate-200 p-4 text-center">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <p className="text-xs font-bold text-slate-800">No test attempts recorded yet</p>
                          <p className="text-[11px] text-slate-500 max-w-xs mt-0.5 mb-2.5">
                            Complete your first mock test to unlock your accuracy trajectory and analytics.
                          </p>
                          <Link
                            href={`/test/${metrics.nextRecommendedTest.id}/instructions`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-blue-700 px-3.5 py-1.5 rounded-lg transition-colors"
                          >
                            <span>Start Diagnostic Test</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Middle: Subject Breakdown */}
                  <div className="lg:col-span-4 space-y-4">
                    <span className="text-xs font-bold text-slate-700 block mb-1">
                      Subject Mastery
                    </span>

                    {/* Physics */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between text-xs mb-1.5 gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-md bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
                            <Atom className="w-3 h-3" />
                          </div>
                          <span className="font-semibold text-slate-800">Physics</span>
                        </div>
                        <span className="font-bold text-slate-900 shrink-0">
                          {metrics.hasAttempts ? `${metrics.subjectMastery.physics.accuracy}%` : "0%"}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#2563EB] rounded-full transition-all duration-500"
                          style={{ width: `${metrics.subjectMastery.physics.accuracy}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        {metrics.subjectMastery.physics.solved} Questions Solved
                      </span>
                    </div>

                    {/* Chemistry */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between text-xs mb-1.5 gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-md bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0">
                            <FlaskConical className="w-3 h-3" />
                          </div>
                          <span className="font-semibold text-slate-800">Chemistry</span>
                        </div>
                        <span className="font-bold text-slate-900 shrink-0">
                          {metrics.hasAttempts ? `${metrics.subjectMastery.chemistry.accuracy}%` : "0%"}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#059669] rounded-full transition-all duration-500"
                          style={{ width: `${metrics.subjectMastery.chemistry.accuracy}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        {metrics.subjectMastery.chemistry.solved} Questions Solved
                      </span>
                    </div>

                    {/* Mathematics */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between text-xs mb-1.5 gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-md bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0">
                            <Calculator className="w-3 h-3" />
                          </div>
                          <span className="font-semibold text-slate-800">Mathematics</span>
                        </div>
                        <span className="font-bold text-slate-900 shrink-0">
                          {metrics.hasAttempts ? `${metrics.subjectMastery.mathematics.accuracy}%` : "0%"}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#7C3AED] rounded-full transition-all duration-500"
                          style={{ width: `${metrics.subjectMastery.mathematics.accuracy}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        {metrics.subjectMastery.mathematics.solved} Questions Solved
                      </span>
                    </div>
                  </div>

                  {/* Right: Chapter Diagnostics */}
                  <div className="lg:col-span-3 space-y-3">
                    <span className="text-xs font-bold text-slate-700 block mb-1">
                      Chapter Diagnostics
                    </span>

                    {/* Needs Revision */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
                        <span>Needs Revision</span>
                        <span className="text-[10px] text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded font-semibold">
                          Priority
                        </span>
                      </div>
                      {metrics.hasAttempts ? (
                        <ul className="space-y-1.5 text-[11px] text-slate-600">
                          {metrics.chapterDiagnostics.needsRevision.map((item, idx) => (
                            <li key={idx} className="flex items-center justify-between gap-2">
                              <span className="truncate">{item.name}</span>
                              <span className="font-semibold text-red-600 shrink-0">{item.accuracy}%</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[11px] text-slate-500 italic py-1 leading-relaxed">
                          Take Mock 1 to detect priority weak areas automatically.
                        </p>
                      )}
                    </div>

                    {/* Strong Concepts */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
                        <span>Strong Concepts</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-semibold">
                          Mastered
                        </span>
                      </div>
                      {metrics.hasAttempts ? (
                        <ul className="space-y-1.5 text-[11px] text-slate-600">
                          {metrics.chapterDiagnostics.strongConcepts.map((item, idx) => (
                            <li key={idx} className="flex items-center justify-between gap-2">
                              <span className="truncate">{item.name}</span>
                              <span className="font-semibold text-emerald-600 shrink-0">{item.accuracy}%</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[11px] text-slate-500 italic py-1 leading-relaxed">
                          Take Mock 1 to identify your highest scoring concepts.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* RIGHT SIDEBAR COLUMN (4 cols out of 12) */}
            {/* =================================================================== */}
            <div className="lg:col-span-4 xl:col-span-4 space-y-5 sm:space-y-6 min-w-0">
              {/* ========================================================================= */}
              {/* WIDGET 1: UPCOMING TESTS (REAL LINKS TO TESTS) */}
              {/* ========================================================================= */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-700" />
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                      Upcoming Tests
                    </h3>
                  </div>
                  <Link
                    href="/free-mock-tests"
                    className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-2.5">
                  {/* Test 1 */}
                  <Link
                    href="/test/mock-eng-1-test-1/instructions"
                    className="block bg-slate-50 hover:bg-slate-100 rounded-xl p-3 border border-slate-100 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors">
                        JEE Main Full Mock Test 1 (Diagnostic)
                      </h4>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Free Entry • NTA CBT Pattern</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">75 Questions • 180 Minutes • 300 Marks</p>
                  </Link>

                  {/* Test 2 */}
                  <Link
                    href="/test/mock-eng-1-test-2/instructions"
                    className="block bg-slate-50 hover:bg-slate-100 rounded-xl p-3 border border-slate-100 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors">
                        JEE Main Full Mock Test 2
                      </h4>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Full Syllabus • High Weightage</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">75 Questions • 180 Minutes • 300 Marks</p>
                  </Link>

                  {/* Test 3 */}
                  <Link
                    href="/test/mock-eng-1-test-3/instructions"
                    className="block bg-slate-50 hover:bg-slate-100 rounded-xl p-3 border border-slate-100 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors">
                        JEE Main Full Mock Test 3
                      </h4>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Full Syllabus • Advanced Focus</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">75 Questions • 180 Minutes • 300 Marks</p>
                  </Link>
                </div>
              </div>

              {/* WIDGET 2: QUICK STATS */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-3.5 tracking-tight">
                  Quick Stats
                </h3>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Accuracy */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <Target className="w-4 h-4 shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-500">Accuracy</span>
                    </div>
                    <div>
                      <span className="font-bold text-lg text-slate-900">{metrics.accuracy}%</span>
                      <span className="block text-[10px] text-emerald-600 font-medium">
                        {metrics.hasAttempts ? `${metrics.questionsAttempted} Qs Evaluated` : "0 attempts"}
                      </span>
                    </div>
                  </div>

                  {/* Tests Completed */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <FileText className="w-4 h-4 shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-500">Tests Done</span>
                    </div>
                    <div>
                      <span className="font-bold text-lg text-slate-900">{metrics.testsCompleted}</span>
                      <span className="block text-[10px] text-slate-400">
                        {metrics.hasAttempts ? `${metrics.testsCompleted} Full Mocks` : "0 completed"}
                      </span>
                    </div>
                  </div>

                  {/* Questions Attempted */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                      <HelpCircle className="w-4 h-4 shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-500 leading-tight">
                        Questions
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-lg text-slate-900">
                        {metrics.questionsAttempted.toLocaleString()}
                      </span>
                      <span className="block text-[10px] text-slate-400">
                        {metrics.hasAttempts ? `${metrics.accuracy}% Accuracy Rate` : "0 solved"}
                      </span>
                    </div>
                  </div>

                  {/* Average Score */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-500">Avg Score</span>
                    </div>
                    <div>
                      <span className="font-bold text-lg text-slate-900">
                        {metrics.avgScore > 0 ? `${metrics.avgScore}/300` : "0/300"}
                      </span>
                      <span className="block text-[10px] text-slate-400">
                        {metrics.hasAttempts ? `Peak: ${metrics.bestScore}/300` : "No attempts"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* WIDGET 3: JEE ALL INDIA STANDING WITH 3D TROPHY BADGE */}
              {/* ========================================================================= */}
              <div id="rankings" className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                      JEE Performance
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Batch 2026
                  </span>
                </div>

                {/* AIR & 3D Trophy */}
                <div className="flex items-center justify-between gap-3 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                  <div>
                    <span className="font-black text-2xl sm:text-3xl text-slate-900 tracking-tight block">
                      {metrics.hasAttempts ? `AIR ${metrics.airRank}` : "Unranked"}
                    </span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {metrics.hasAttempts ? `${metrics.percentile} Percentile` : "Take Test to Rank"}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-slate-500 mt-1 font-normal">
                      {metrics.hasAttempts
                        ? `Based on peak score ${metrics.bestScore}/300`
                        : "Complete Mock 1 to benchmark your AIR"}
                    </p>
                  </div>

                  {/* 3D Champion Trophy Badge */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0 shadow-xs flex items-center justify-center p-1">
                    <img
                      src="/jee_rank_trophy.jpg"
                      alt="Champion Trophy"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <hr className="my-3.5 border-slate-100" />

                {/* Leaderboard Snippet */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-slate-800">
                      Top Aspirants Leaderboard
                    </span>
                    <button
                      onClick={() => setShowLeaderboardModal(true)}
                      className="text-[11px] font-semibold text-blue-600 hover:underline"
                    >
                      View All Rankings →
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {leaderboardData.slice(0, 4).map((item) => (
                      <div
                        key={item.rank}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                          item.isUser
                            ? "bg-blue-50 text-blue-900 border border-blue-200 font-bold"
                            : "text-slate-600 bg-slate-50 border border-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-4 text-center text-slate-400 font-semibold">
                            {item.rank}
                          </span>
                          <span className="truncate">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-slate-400 font-normal">{item.air}</span>
                          <span className="font-semibold text-slate-800">{item.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ========================================================================= */}
      {/* AI TEST GENERATOR MODAL */}
      {/* ========================================================================= */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-4 sm:p-6 shadow-xl border border-slate-200 max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between mb-3 sm:mb-4 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">AI Test Generator</h3>
                  <p className="text-[10.5px] sm:text-[11px] text-slate-400">Customized JEE practice drill</p>
                </div>
              </div>
              <button
                onClick={() => setShowAiModal(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto custom-scrollbar flex-1 -mr-1 pr-1 space-y-3.5 mb-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                Generate an instant customized test targeting your weak chapters, custom question counts, and difficulty levels.
              </p>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target Subject</label>
                <select
                  value={aiSubject}
                  onChange={(e) => setAiSubject(e.target.value)}
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-purple-600 outline-none"
                >
                  <option value="Full Mock (PCM Combined)">Full Mock (PCM Combined)</option>
                  <option value="Physics">Physics (Mechanics, Electrodynamics & Optics)</option>
                  <option value="Chemistry">Chemistry (Physical, Inorganic & Organic)</option>
                  <option value="Mathematics">Mathematics (Calculus, Algebra & Vectors)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Questions</label>
                  <select
                    value={aiQuestionCount}
                    onChange={(e) => setAiQuestionCount(Number(e.target.value))}
                    className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-purple-600 outline-none"
                  >
                    <option value={15}>15 Questions (Quick Drill)</option>
                    <option value={30}>30 Questions (Standard Section)</option>
                    <option value={75}>75 Questions (Full CBT Mock)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Difficulty</label>
                  <select
                    value={aiDifficulty}
                    onChange={(e) => setAiDifficulty(e.target.value)}
                    className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-purple-600 outline-none"
                  >
                    <option value="JEE Main Standard">JEE Main Standard</option>
                    <option value="Rank Booster (Hard)">Rank Booster (Hard)</option>
                    <option value="JEE Advanced Level">JEE Advanced Level</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowAiModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors touch-manipulation"
              >
                Cancel
              </button>
              <button
                onClick={handleStartAiTest}
                className="flex-1 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-purple-700 active:scale-[0.98] text-white text-xs font-semibold transition-all touch-manipulation"
              >
                Generate & Start
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DAILY CHALLENGE MODAL */}
      {/* ========================================================================= */}
      {showDailyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-4 sm:p-6 shadow-xl border border-slate-200 max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between mb-3 sm:mb-4 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EA580C] text-white flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">Today's Daily Challenge</h3>
                  <p className="text-[10.5px] sm:text-[11px] text-slate-400">Keep your preparation streak active</p>
                </div>
              </div>
              <button
                onClick={() => setShowDailyModal(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto custom-scrollbar flex-1 -mr-1 pr-1 space-y-3 mb-4">
              <div className="bg-slate-50 rounded-xl p-3 sm:p-3.5 border border-slate-200 text-xs space-y-2 text-slate-700">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500 shrink-0">Pattern:</span>
                  <span className="font-semibold text-slate-800 text-right">18 Qs (6 Phy • 6 Chem • 6 Math)</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500 shrink-0">Duration:</span>
                  <span className="font-semibold text-slate-800">20 Minutes</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500 shrink-0">Marking:</span>
                  <span className="font-semibold text-slate-800">+4 / -1 Scheme</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500 shrink-0">Reward:</span>
                  <span className="font-semibold text-orange-600">+50 XP & Streak Increment</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowDailyModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors touch-manipulation"
              >
                Later
              </button>
              <button
                onClick={handleStartDailyChallenge}
                className="flex-1 py-2.5 rounded-xl bg-[#EA580C] hover:bg-orange-700 active:scale-[0.98] text-white text-xs font-semibold transition-all touch-manipulation"
              >
                Start Challenge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ALL INDIA LEADERBOARD MODAL */}
      {/* ========================================================================= */}
      {showLeaderboardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-xl border border-slate-200 max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between mb-3 sm:mb-4 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">All India JEE Leaderboard</h3>
                  <p className="text-[10.5px] sm:text-[11px] text-slate-400">Weekly national rankings based on verified full mocks</p>
                </div>
              </div>
              <button
                onClick={() => setShowLeaderboardModal(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1.5 sm:space-y-2 mb-4 overflow-y-auto custom-scrollbar flex-1 pr-1">
              {leaderboardData.map((item) => (
                <div
                  key={item.rank}
                  className={`flex items-center justify-between px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs transition-colors ${
                    item.isUser
                      ? "bg-blue-50 text-blue-900 border border-blue-200 font-bold"
                      : "text-slate-700 bg-slate-50 border border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="w-4 sm:w-5 text-center text-slate-400 font-bold shrink-0">{item.rank}</span>
                    <span className="font-medium truncate">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="text-[11px] text-slate-500 font-semibold">{item.air}</span>
                    <span className="font-bold text-slate-900">{item.score}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowLeaderboardModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white text-xs font-semibold transition-all touch-manipulation shrink-0"
            >
              Close Leaderboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
