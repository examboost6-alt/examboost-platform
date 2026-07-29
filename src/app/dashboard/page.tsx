"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  LayoutDashboard, BookOpen, Award, BarChart3, TrendingUp, Target,
  Clock, PlayCircle, FileText, Video, Bell, User, Zap, Activity,
  History, MessageCircle, Calendar, Sparkles, Star, Flame, Crown,
  ChevronRight, ArrowRight, Bookmark, Menu, X, Settings, CheckCircle,
  Trophy, Home, Download, GraduationCap, NotebookPen, CircleHelp, FolderOpen
} from "lucide-react";

// Add specific styles
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap');
  .font-poppins { font-family: 'Poppins', sans-serif; }
  .font-inter { font-family: 'Inter', sans-serif; }
  .font-manrope { font-family: 'Manrope', sans-serif; }
  .lucide { stroke-width: 1.5px; }
  .premium-card {
    background: #FFFFFF;
    border-radius: 24px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
    padding: 20px;
  }
`;

export default function StudentDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [studentInfo, setStudentInfo] = useState<any>({
    name: "Student", targetExam: "BCA Semester 1", progress: 0, avatarUrl: null,
    stats: { testsAttempted: 0, accuracy: 0, rank: "N/A", timeSpent: "0h", dayStreak: 12, xp: 240, coins: 580, todayTimeSpentHours: 1.5 }
  });

  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete Lecture: React Hooks", done: true },
    { id: 2, title: "Solve Assignment 04", done: false },
    { id: 3, title: "Revise Notes: JS Basics", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const upcomingClasses = [
    { id: 1, subject: "React JS", time: "Today, 4:00 PM", teacher: "Harsh", avatar: "https://i.pravatar.cc/150?u=react" },
    { id: 2, subject: "Advanced CSS", time: "Tomorrow, 10:00 AM", teacher: "Aman", avatar: "https://i.pravatar.cc/150?u=css" },
  ];

  const recentNotes = [
    { id: 1, title: "React Lifecycle Methods", size: "1.2 MB", date: "Today" },
    { id: 2, title: "Redux Architecture", size: "800 KB", date: "Yesterday" },
  ];

  const weeklyData = [
    { name: 'Mon', hours: 2 },
    { name: 'Tue', hours: 3 },
    { name: 'Wed', hours: 2.5 },
    { name: 'Thu', hours: 4 },
    { name: 'Fri', hours: 1.5 },
    { name: 'Sat', hours: 5 },
    { name: 'Sun', hours: 3 },
  ];

  const badges = [
    { id: 1, title: "7 Day Streak", icon: Flame, color: "text-orange-500", bg: "bg-orange-50" },
    { id: 2, title: "Top Performer", icon: Trophy, color: "text-amber-500", bg: "bg-amber-50" },
    { id: 3, title: "Fast Learner", icon: Zap, color: "text-blue-500", bg: "bg-blue-50" },
    { id: 4, title: "Quiz Master", icon: Star, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate data fetch
    const fetchAuth = async () => {
      const supabase = getSupabaseClient();
      if (!supabase) return;
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace('/login');
      } else {
        const uid = data.session.user.id;
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', uid).maybeSingle();
        if (profile) {
          setStudentInfo((prev: any) => ({
            ...prev,
            name: profile.full_name || "Student",
            targetExam: profile.target_exam || "BCA Semester 1",
            avatarUrl: profile.photo_path ? supabase.storage.from('student-photos').getPublicUrl(profile.photo_path).data.publicUrl : null,
          }));
        }
        setLoading(false);
      }
    };
    fetchAuth();
  }, [router]);

  const HomeView = () => (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500 pb-24">
      {/* Hero Card */}
      <div className="relative w-full rounded-[24px] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] p-6 sm:p-8 md:p-10 text-white overflow-hidden shadow-[0_8px_30px_rgba(79,70,229,0.3)]">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none transform -translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold mb-2">Continue Learning</h1>
            <p className="font-inter text-white/80 text-lg mb-6">React Fundamentals • Lesson 12</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 max-w-sm bg-black/20 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
                <div className="bg-[#22C55E] h-full rounded-full" style={{ width: '78%' }}></div>
              </div>
              <span className="font-manrope font-bold text-sm">78%</span>
            </div>

            <button className="bg-white text-[#4F46E5] hover:bg-slate-50 active:scale-95 transition-all font-poppins font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Resume Video
            </button>
          </div>
          
          <div className="hidden md:flex shrink-0 w-48 h-48 bg-white/10 rounded-[24px] items-center justify-center backdrop-blur-md border border-white/20">
             {/* Simple flat vector illustration placeholder */}
             <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-[#22C55E]/20 rounded-full blur-xl"></div>
                <GraduationCap className="w-full h-full text-white relative z-10" strokeWidth={1} />
             </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h2 className="font-poppins text-xl font-bold text-[#111827] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { title: "My Courses", icon: BookOpen, bg: "bg-indigo-50", color: "text-[#4F46E5]" },
            { title: "Tests", icon: FileText, bg: "bg-rose-50", color: "text-rose-500" },
            { title: "Live Classes", icon: Video, bg: "bg-emerald-50", color: "text-[#22C55E]" },
            { title: "Downloads", icon: Download, bg: "bg-blue-50", color: "text-blue-500" },
            { title: "Doubts", icon: CircleHelp, bg: "bg-amber-50", color: "text-[#F59E0B]" },
            { title: "Leaderboard", icon: Trophy, bg: "bg-orange-50", color: "text-orange-500" },
            { title: "Schedule", icon: Calendar, bg: "bg-cyan-50", color: "text-cyan-500" },
            { title: "Notes", icon: NotebookPen, bg: "bg-purple-50", color: "text-[#7C3AED]" },
            { title: "Progress", icon: BarChart3, bg: "bg-pink-50", color: "text-pink-500" },
            { title: "Goals", icon: Target, bg: "bg-teal-50", color: "text-teal-500" },
          ].map((action, idx) => (
            <button key={idx} className="premium-card flex flex-col items-center justify-center text-center gap-3 hover:scale-[1.02] active:scale-95 transition-transform group">
              <div className={`w-14 h-14 rounded-[16px] ${action.bg} ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <action.icon className="w-6 h-6" />
              </div>
              <span className="font-inter font-semibold text-sm text-[#111827]">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Upcoming Live Classes */}
          <div>
             <div className="flex justify-between items-center mb-4">
               <h2 className="font-poppins text-xl font-bold text-[#111827]">Upcoming Live Classes</h2>
               <button className="text-[#4F46E5] font-inter font-semibold text-sm flex items-center gap-1 hover:underline">View All <ChevronRight className="w-4 h-4"/></button>
             </div>
             <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
               {upcomingClasses.map(cls => (
                 <div key={cls.id} className="premium-card shrink-0 w-80 snap-start border border-slate-100 flex flex-col justify-between">
                   <div className="flex items-center gap-4 mb-4">
                     <img src={cls.avatar} alt={cls.teacher} className="w-12 h-12 rounded-full border-2 border-indigo-100" />
                     <div>
                       <h3 className="font-poppins font-bold text-[#111827] text-lg leading-tight">{cls.subject}</h3>
                       <p className="font-inter text-sm text-slate-500">{cls.teacher}</p>
                     </div>
                   </div>
                   <div className="flex items-center justify-between mt-auto">
                     <div className="flex items-center gap-1.5 text-sm font-manrope font-bold text-slate-600">
                       <Clock className="w-4 h-4 text-orange-500" /> {cls.time}
                     </div>
                     <button className="bg-[#4F46E5] text-white font-poppins font-semibold text-xs px-4 py-2 rounded-xl">Join Live</button>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Weekly Progress Chart */}
          <div className="premium-card border border-slate-100">
             <div className="flex justify-between items-center mb-6">
               <h2 className="font-poppins text-xl font-bold text-[#111827]">Weekly Progress</h2>
               <select className="bg-slate-50 border-none text-sm font-inter font-medium text-slate-600 rounded-lg px-3 py-1.5 focus:ring-0 cursor-pointer">
                 <option>This Week</option>
                 <option>Last Week</option>
               </select>
             </div>
             <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={weeklyData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                   <defs>
                     <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12, fontFamily: 'Inter'}} dy={10} />
                   <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12, fontFamily: 'Inter'}} />
                   <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                   <Area type="monotone" dataKey="hours" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          {/* Today's Tasks */}
          <div className="premium-card border border-slate-100">
             <h2 className="font-poppins text-xl font-bold text-[#111827] mb-4">Today's Tasks</h2>
             <div className="space-y-3">
               {tasks.map(task => (
                 <div key={task.id} onClick={() => toggleTask(task.id)} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-100">
                   <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${task.done ? 'bg-[#22C55E] border-[#22C55E]' : 'border-slate-300'}`}>
                     {task.done && <CheckCircle className="w-4 h-4 text-white" strokeWidth={3} />}
                   </div>
                   <span className={`font-inter text-sm font-medium transition-all ${task.done ? 'text-slate-400 line-through' : 'text-[#111827]'}`}>
                     {task.title}
                   </span>
                 </div>
               ))}
             </div>
          </div>

          {/* Preparation Meter */}
          <div className="premium-card border border-slate-100 flex flex-col items-center text-center">
             <h2 className="font-poppins text-xl font-bold text-[#111827] mb-6 w-full text-left">Preparation Meter</h2>
             <div className="w-48 h-48 relative">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie data={[{value: 75}, {value: 25}]} cx="50%" cy="50%" innerRadius={60} outerRadius={80} startAngle={90} endAngle={-270} dataKey="value" stroke="none">
                     <Cell fill="#22C55E" />
                     <Cell fill="#f1f5f9" />
                   </Pie>
                 </PieChart>
               </ResponsiveContainer>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="font-manrope font-black text-4xl text-[#111827]">75%</span>
                 <span className="font-inter text-xs text-slate-500 font-semibold uppercase tracking-widest">Ready</span>
               </div>
             </div>
          </div>

          {/* Achievement Badges */}
          <div className="premium-card border border-slate-100">
             <h2 className="font-poppins text-xl font-bold text-[#111827] mb-4">Achievements</h2>
             <div className="grid grid-cols-2 gap-3">
               {badges.map(badge => (
                 <div key={badge.id} className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                   <div className={`w-10 h-10 rounded-full ${badge.bg} ${badge.color} flex items-center justify-center mb-2`}>
                     <badge.icon className="w-5 h-5" />
                   </div>
                   <span className="font-inter font-bold text-xs text-slate-700">{badge.title}</span>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-[#111827] selection:bg-indigo-200 overflow-hidden w-full">
      <style>{globalStyles}</style>
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Header (110px Height) */}
        <header className="h-[110px] bg-[#0A0520] text-white px-4 sm:px-6 md:px-8 flex flex-col justify-center shrink-0 shadow-lg relative z-20">
           <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
             
             <div className="flex items-center gap-4">
               <button className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white">
                 <Menu className="w-6 h-6" />
               </button>
               <div className="hidden sm:block">
                 <p className="font-inter text-white/70 text-xs font-semibold">Good Afternoon,</p>
                 <h2 className="font-poppins text-xl font-bold tracking-tight">{studentInfo.name.split(' ')[0]} 👋</h2>
               </div>
               {/* Batch Selector */}
               <div className="hidden md:flex ml-4 items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 cursor-pointer transition-colors">
                 <span className="font-inter font-bold text-sm">{studentInfo.targetExam}</span>
                 <span className="bg-[#EAB308] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full">Pro</span>
               </div>
             </div>

             <div className="flex items-center gap-2 sm:gap-4">
               {/* Gift Icon */}
               <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-[#EAB308] transition-colors hidden sm:block">
                 <Star className="w-5 h-5 fill-current" />
               </button>

               {/* Gamified Badges */}
               <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/10">
                 <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-manrope font-bold text-orange-400">
                   <Flame className="w-4 h-4 fill-current" />
                   <span>{studentInfo.stats.dayStreak}</span>
                 </div>
                 <div className="w-px h-4 bg-white/20 mx-1"></div>
                 <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-manrope font-bold text-slate-300">
                   <div className="w-4 h-4 rounded-full bg-slate-300 text-[#0A0520] flex items-center justify-center font-black text-[8px]">XP</div>
                   <span>{studentInfo.stats.xp}</span>
                 </div>
               </div>

               {/* Notifications */}
               <button className="relative p-2.5 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#EF4444] rounded-full border-2 border-[#0A0520]"></span>
               </button>

               {/* Profile */}
               <button className="w-10 h-10 rounded-full bg-[#4F46E5] flex items-center justify-center overflow-hidden border-2 border-white/20 ml-1">
                 {studentInfo.avatarUrl ? <img src={studentInfo.avatarUrl} alt="" className="w-full h-full object-cover" /> : <User className="w-5 h-5 text-white" />}
               </button>
             </div>
           </div>
        </header>

        {/* Dynamic Main Body */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] p-4 sm:p-6 md:p-8">
           <div className="max-w-7xl mx-auto w-full">
             {activeTab === 'home' && <HomeView />}
           </div>
        </main>

        {/* Floating Bottom Navigation */}
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white premium-card !rounded-[24px] !p-2 flex items-center gap-1 sm:gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.15)] w-[95%] max-w-md border border-slate-100">
          {[
            { id: "home", label: "Home", icon: Home },
            { id: "courses", label: "Courses", icon: BookOpen },
            { id: "tests", label: "Tests", icon: FileText },
            { id: "community", label: "Community", icon: MessageCircle },
            { id: "profile", label: "Profile", icon: User },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-[18px] transition-all ${
                activeTab === item.id ? "bg-indigo-50 text-[#4F46E5]" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              }`}
            >
              <item.icon className={`w-6 h-6 mb-1 ${activeTab === item.id ? "fill-current" : ""}`} />
              <span className={`font-inter text-[10px] sm:text-xs font-semibold ${activeTab === item.id ? "font-bold" : ""}`}>{item.label}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
