"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { getSupabaseClient } from "@/lib/supabaseClient";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  PlayCircle,
  FileText,
  Video,
  Wallet,
  Bell,
  User,
  Zap,
  Activity,
  History,
  MessageCircle,
  Calendar,
  Sparkles,
  Search,
  ChevronRight,
  Menu,
  X,
  Settings,
  HelpCircle,
  Flame,
  CheckCircle,
  Trophy,
} from "lucide-react";

// --- Real Data Setup ---
export default function StudentDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string>('');

  const [studentInfo, setStudentInfo] = useState<any>({
    name: "Student", targetExam: "Not Set", progress: 0,
    stats: { testsAttempted: 0, accuracy: 0, rank: 0, timeSpent: "0h" }
  });
  const [myTestSeries, setMyTestSeries] = useState<any[]>([]);
  const [freeTests, setFreeTests] = useState<any[]>([
    { id: 1, title: "Daily Current Affairs Quiz", type: "Daily Quiz", time: "15 mins", questions: 15 },
  ]);
  const [recommendedTests, setRecommendedTests] = useState<any[]>([]);
  const [performanceData, setPerformanceData] = useState<any[]>([
    { subject: "Quant", accuracy: 78, score: 35 },
    { subject: "Reasoning", accuracy: 92, score: 45 },
  ]);
  const [testAnalysisHighlights, setTestAnalysisHighlights] = useState<any>({
    correct: 145, wrong: 32, skipped: 23, strongTopics: ["Puzzles"], weakTopics: ["Geometry"],
  });

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }: { data: any }) => {
      if (!data.session) {
        router.replace('/login');
      } else {
        setUserId(data.session.user.id);
        fetchDashboardData(data.session.user.id);
      }
    });

    const fetchDashboardData = async (uid: string) => {
      setLoading(true);
      const { data: profileData } = await supabase.from('profiles').select('*').eq('id', uid).single();
      const profile = profileData as any;
      if (profile) {
        setStudentInfo((prev: any) => ({ ...prev, name: profile.full_name || 'Student', targetExam: profile.target_exam || 'Not Set' }));
      }
      
      const { data: userTestsData } = await supabase.from('user_tests').select('*').eq('user_id', uid);
      const userTests = userTestsData as any[];
      if (userTests && userTests.length > 0) {
        setStudentInfo((prev: any) => ({
          ...prev, stats: { ...prev.stats, testsAttempted: userTests.length }
        }));
      }

      const { data: purchasesData } = await supabase.from('purchases').select('series_id').eq('user_id', uid);
      const purchases = purchasesData as any[];
      let seriesIds = purchases?.map((p: any) => p.series_id) || [];
      
      if (seriesIds.length > 0) {
        const { data: purchasedSeriesData } = await supabase.from('test_series').select('*').in('id', seriesIds);
        const purchasedSeries = purchasedSeriesData as any[];
        if (purchasedSeries) {
          setMyTestSeries(purchasedSeries.map((s: any) => ({
            id: s.id, name: s.title, progress: 0, totalTests: s.total_tests, attempted: 0
          })));
        }
      }

      const { data: allSeriesData } = await supabase.from('test_series').select('*').eq('is_active', true).limit(5);
      const allSeries = allSeriesData as any[];
      if (allSeries && allSeries.length > 0) {
         setRecommendedTests(allSeries.map((s: any) => ({
           id: s.id, title: s.title, reason: 'Highly Rated Package', tags: ['Trending', `₹${s.price}`]
         })));
      } else {
         setRecommendedTests([
           { id: 1, title: 'SSC CGL Pro Mocks', reason: 'Master Tier 1', tags: ['Trending', '₹499'] }
         ]);
      }
      setLoading(false);
    };
  }, [router]);

  const initiatePayment = async (seriesId: number, amount: number) => {
    if (!userId) {
       alert('Please login first');
       return;
    }
    try {
       const res = await fetch('/api/razorpay/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, seriesId })
       });
       const data = await res.json();
       if (!data.success) { alert('Order creation failed'); return; }

       const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'dummy_key',
          amount: data.order.amount,
          currency: data.order.currency,
          name: 'ExamBoost',
          description: 'Test Series Purchase',
          order_id: data.order.id,
          handler: async function (response: any) {
             const verifyRes = await fetch('/api/razorpay/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                   razorpay_order_id: response.razorpay_order_id,
                   razorpay_payment_id: response.razorpay_payment_id,
                   razorpay_signature: response.razorpay_signature,
                   userId, seriesId, amount
                })
             });
             const verifyData = await verifyRes.json();
             if (verifyData.success) {
                alert('Payment successful! Series added to your dashboard.');
                window.location.reload();
             } else {
                alert('Payment verification failed.');
             }
          },
          prefill: {
             name: studentInfo.name,
             email: 'student@example.com',
          },
          theme: { color: '#2563eb' }
       };

       const rzp = new (window as any).Razorpay(options);
       rzp.open();
    } catch (e) {
       console.error(e);
       alert('Something went wrong setting up razorpay.');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { id: "overview", label: "Dashboard",icon: LayoutDashboard },
    { id: "my-tests", label: "My Test Series", icon: BookOpen },
    { id: "free-tests", label: "Free Tests", icon: Zap },
    { id: "performance", label: "My Performance", icon: TrendingUp },
    { id: "leaderboard", label: "Leaderboard", icon: Award },
    { id: "analysis", label: "Test Analysis", icon: BarChart3 },
    { id: "recommended", label: "Recommended", icon: Sparkles },
    { id: "courses", label: "My Courses", icon: Video },
    { id: "wallet", label: "Wallet & Purchases", icon: Wallet },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: User },
  ];

  const quickActions = [
    { title: "Start Free Test", icon: PlayCircle, color: "text-blue-600", bg: "bg-blue-100", action: () => setActiveTab("free-tests") },
    { title: "Buy Test Series", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100", action: () => setActiveTab("recommended") },
    { title: "Previous Tests", icon: History, color: "text-orange-600", bg: "bg-orange-100", action: () => setActiveTab("my-tests") },
    { title: "Leaderboard", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100", action: () => setActiveTab("leaderboard") },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "my-tests":
        return <MyTestsModule />;
      case "free-tests":
        return <FreeTestsModule />;
      case "performance":
        return <PerformanceModule />;
      case "leaderboard":
        return <LeaderboardModule />;
      case "analysis":
        return <TestAnalysisModule />;
      case "recommended":
        return <RecommendedModule />;
      case "courses":
        return <CoursesModule />;
      case "wallet":
        return <WalletModule />;
      case "notifications":
        return <NotificationsModule />;
      case "profile":
        return <ProfileModule />;
      default:
        return <DashboardOverview />;
    }
  };

  // --- Sub-Components for Different Modules ---

  const DashboardOverview = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-indigo-900 dark:to-slate-900 w-full rounded-3xl p-6 md:p-8 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-500/20 dark:border-indigo-800">
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-xl"></div>
        
        <div className="relative z-10 flex-1 w-full text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Trophy className="w-3.5 h-3.5 text-amber-300" /> Top 5% Learner
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Welcome back, {studentInfo.name} 👋</h1>
          <p className="text-blue-100 dark:text-indigo-200 mb-6 font-medium text-sm md:text-base max-w-md">You're making incredible progress! Keep up the momentum to secure your top rank.</p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-black text-sm shadow-md hover:bg-neutral-50 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> Resume Last Test
            </button>
            <button className="bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-sm transition-all inline-flex items-center gap-2">
              <Target className="w-5 h-5" /> Daily Goals
            </button>
          </div>
        </div>

        {/* Daily Mini Widget */}
        <div className="relative z-10 shrink-0 bg-white/10 border border-white/20 backdrop-blur-xl p-5 rounded-2xl w-full md:w-auto flex flex-row items-center justify-center md:flex-col gap-4 min-w-[160px]">
           <div className="text-center">
             <div className="w-14 h-14 mx-auto bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 mb-2 transform hover:scale-110 transition-transform">
                <Flame className="w-7 h-7 text-white fill-white" />
             </div>
             <p className="font-black text-2xl tracking-tighter">14 Days</p>
             <p className="text-xs font-bold text-blue-100 uppercase tracking-widest hidden md:block">Active Streak</p>
           </div>
           
           <div className="w-px h-16 bg-white/20 md:hidden block"></div>
           <div className="h-px w-full bg-white/20 hidden md:block my-1"></div>
           
           <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1.5 mt-1">
                 <CheckCircle className="w-4 h-4 text-emerald-400" />
                 <span className="font-bold text-sm">2h / 3h</span>
              </div>
              <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest leading-tight">Today's<br/>Study Goal</p>
              <div className="w-full bg-black/20 rounded-full h-1.5 mt-2">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: `66%` }}></div>
              </div>
           </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Tests Attempted", value: studentInfo.stats.testsAttempted, icon: FileText, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { label: "Avg. Accuracy", value: `${studentInfo.stats.accuracy}%`, icon: Target, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
          { label: "All India Rank", value: `#${studentInfo.stats.rank}`, icon: Award, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
          { label: "Time Spent", value: studentInfo.stats.timeSpent, icon: Clock, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/20" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Basic Layout Split */}
      <div className="grid lg:grid-cols-3 gap-6">
         
         {/* Main Column */}
         <div className="lg:col-span-2 space-y-6">
           <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
             <Zap className="w-5 h-5 text-amber-500 fill-amber-500" /> Actions Hub
           </h2>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={action.action}
                  className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all flex flex-col items-center justify-center text-center gap-3 group"
                >
                  <div className={`p-3.5 rounded-xl ${action.bg} ${action.color} group-hover:scale-110 transition-transform dark:bg-opacity-10`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm text-slate-700 dark:text-slate-200 tracking-tight">{action.title}</span>
                </button>
              ))}
           </div>

           {/* My Active Test Series */}
           <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-6">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-lg font-black text-slate-800 dark:text-white">Active Test Series</h2>
               <button onClick={() => setActiveTab("my-tests")} className="text-sm text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-0.5">
                 View All <ChevronRight className="w-4 h-4" />
               </button>
             </div>
             <div className="space-y-4">
               {myTestSeries.slice(0, 2).map((ts) => (
                 <div key={ts.id} className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                   <div className="flex justify-between items-start mb-3">
                     <div>
                       <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{ts.name}</h3>
                       <span className="text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2.5 py-1 rounded inline-block">Pro Active</span>
                     </div>
                     <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">
                       Resume
                     </button>
                   </div>
                   
                   <div className="flex justify-between items-end text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
                     <span>{ts.attempted}/{ts.totalTests} Mocks Complete</span>
                     <span className="font-bold text-slate-800 dark:text-slate-200">{ts.progress}%</span>
                   </div>
                   <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                     <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: `${ts.progress}%` }}></div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>

         {/* Right Sidebar Column */}
         <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500 fill-purple-500" /> AI Recommended
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 space-y-4">
              {recommendedTests.slice(0, 3).map((test) => (
                <div key={test.id} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl relative group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors cursor-pointer border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 pr-8 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors tracking-tight">{test.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 mb-3">{test.reason}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {test.tags?.map((tag: string, idx: number) => (
                      <span key={idx} className="text-[10px] font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="absolute top-4 right-4 text-slate-300 dark:text-slate-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <PlayCircle className="w-6 h-6 fill-current" />
                  </button>
                </div>
              ))}
            </div>
         </div>

      </div>
    </div>
  );

  const MyTestsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">My Test Series</h1>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTestSeries.map((ts) => (
            <div key={ts.id} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
               <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{ts.name}</h3>
                  <p className="text-sm text-neutral-500 mb-4">{ts.totalTests} Total Tests • {ts.attempted} Attempted</p>
                  <div className="w-full bg-neutral-100 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${ts.progress}%` }}></div>
                  </div>
                  <p className="text-xs text-right text-neutral-600 font-medium mb-4">{ts.progress}% Completed</p>
                  
                  <div className="flex flex-col gap-2">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">Start Test</button>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-2 rounded-lg font-medium text-sm transition-colors">Analysis</button>
                      <button className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-2 rounded-lg font-medium text-sm transition-colors">Results</button>
                    </div>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  );

  const FreeTestsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold text-neutral-800">Free Test Section</h1>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Essential for Growth 📈</span>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {freeTests.map(test => (
          <div key={test.id} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">{test.type}</span>
              <div className="flex items-center text-neutral-500 text-sm gap-1">
                <Clock className="w-4 h-4" /> {test.time}
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">{test.title}</h3>
            <p className="text-neutral-500 text-sm mb-5">{test.questions} Questions • All India Ranking</p>
            <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 rounded-lg transition-colors">
              Attempt Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const PerformanceModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">My Performance</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center justify-center text-center">
          <Activity className="w-8 h-8 text-blue-500 mb-2"/>
          <span className="text-neutral-500 text-sm font-medium">Overall Accuracy</span>
          <span className="text-2xl font-bold">{studentInfo.stats.accuracy}%</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center justify-center text-center">
          <Award className="w-8 h-8 text-yellow-500 mb-2"/>
          <span className="text-neutral-500 text-sm font-medium">Current Rank</span>
          <span className="text-2xl font-bold">#{studentInfo.stats.rank}</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center justify-center text-center">
          <Target className="w-8 h-8 text-green-500 mb-2"/>
          <span className="text-neutral-500 text-sm font-medium">Avg. Score</span>
          <span className="text-2xl font-bold">124.5</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center justify-center text-center">
          <Clock className="w-8 h-8 text-orange-500 mb-2"/>
          <span className="text-neutral-500 text-sm font-medium">Avg. Time/Q</span>
          <span className="text-2xl font-bold">42s</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
         <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
           <h3 className="font-bold text-lg mb-4">Subject Wise Accuracy</h3>
           <div className="space-y-4">
              {performanceData.map(d => (
                <div key={d.subject}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-neutral-700">{d.subject}</span>
                    <span className="font-bold text-neutral-900">{d.accuracy}%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className={`h-2 rounded-full ${d.accuracy > 80 ? 'bg-green-500' : d.accuracy > 70 ? 'bg-blue-500' : 'bg-orange-500'}`} style={{ width: `${d.accuracy}%` }}></div>
                  </div>
                </div>
              ))}
           </div>
         </div>

         <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2"><Target className="w-5 h-5"/> Weak Topics to Improve</h3>
            <ul className="space-y-3">
              {testAnalysisHighlights.weakTopics?.map((topic: string, i: number) => (
                <li key={i} className="flex items-center justify-between p-3 bg-red-50 text-red-800 rounded-lg text-sm font-medium">
                  {topic}
                  <button className="px-3 py-1 bg-white text-red-600 rounded text-xs font-bold hover:bg-red-100">Practice</button>
                </li>
              ))}
            </ul>
         </div>
      </div>
    </div>
  );

  const LeaderboardModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold text-neutral-800">Leaderboard</h1>
        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><Award className="w-4 h-4"/> Gamification Active</span>
      </div>
      
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="flex border-b bg-neutral-50">
          <button className="px-6 py-3 font-semibold text-blue-600 border-b-2 border-blue-600">Weekly Rank</button>
          <button className="px-6 py-3 font-semibold text-neutral-500 hover:text-neutral-700">All India Rank</button>
          <button className="px-6 py-3 font-semibold text-neutral-500 hover:text-neutral-700">Top Students</button>
        </div>
        
        <div className="p-0">
          {[
            { rank: 1, name: "Arjun Kumar", score: 99.8, trend: "up" },
            { rank: 2, name: "Sneha Reddy", score: 98.5, trend: "up" },
            { rank: 3, name: "Vikram Singh", score: 97.2, trend: "down" },
            { rank: 4, name: "Pooja Sharma", score: 96.0, trend: "same" },
            { rank: 1205, name: studentInfo.name, score: 82.4, trend: "up", isMe: true },
          ].map((user, i) => (
            <div key={i} className={`flex items-center p-4 border-b last:border-0 ${user.isMe ? 'bg-blue-50 border-blue-100' : 'hover:bg-neutral-50'}`}>
               <div className="w-12 text-center font-bold text-lg text-neutral-500">#{user.rank}</div>
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold mx-4">
                 {user.name.charAt(0)}
               </div>
               <div className="flex-1 font-semibold text-neutral-800">{user.name} {user.isMe && <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded ml-2">You</span>}</div>
               <div className="font-bold text-neutral-800 mr-4">{user.score}</div>
               <div className="w-8 flex justify-center">
                 {user.trend === 'up' && <TrendingUp className="w-5 h-5 text-green-500"/>}
                 {user.trend === 'down' && <TrendingUp className="w-5 h-5 text-red-500 rotate-180"/>}
                 {user.trend === 'same' && <div className="w-3 h-0.5 bg-neutral-400"></div>}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TestAnalysisModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold text-neutral-800">Test Analysis</h1>
        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Testbook's Most Powerful Feature</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-8 border-green-500 flex flex-col items-center justify-center mb-4 text-green-600">
            <span className="text-2xl font-bold">{testAnalysisHighlights.correct}</span>
          </div>
          <h3 className="font-bold text-neutral-700">Correct Questions</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-8 border-red-500 flex flex-col items-center justify-center mb-4 text-red-600">
            <span className="text-2xl font-bold">{testAnalysisHighlights.wrong}</span>
          </div>
          <h3 className="font-bold text-neutral-700">Wrong Questions</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-8 border-neutral-300 flex flex-col items-center justify-center mb-4 text-neutral-500">
            <span className="text-2xl font-bold">{testAnalysisHighlights.skipped}</span>
          </div>
          <h3 className="font-bold text-neutral-700">Skipped Questions</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 mt-6">
        <h3 className="text-lg font-bold mb-4">Topic-wise Analysis (Recent SSC CGL Test)</h3>
        <div className="space-y-4">
           {['Quantitative Aptitude', 'General Intelligence', 'English Language', 'General Awareness'].map(subject => (
             <div key={subject} className="flex flex-col gap-2">
               <div className="flex justify-between font-medium text-sm text-neutral-700">
                 <span>{subject}</span>
                 <span>Avg. Score: 32/50</span>
               </div>
               <div className="flex h-3 rounded-full overflow-hidden">
                 <div className="bg-green-500" style={{ width: '60%' }} title="Correct"></div>
                 <div className="bg-red-500" style={{ width: '20%' }} title="Wrong"></div>
                 <div className="bg-neutral-300" style={{ width: '20%' }} title="Skipped"></div>
               </div>
             </div>
           ))}
        </div>
        <div className="flex gap-4 mt-4 text-xs font-medium text-neutral-500 justify-center">
          <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> Correct</span>
          <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> Wrong</span>
          <span className="flex items-center gap-1"><div className="w-3 h-3 bg-neutral-300 rounded-sm"></div> Skipped</span>
        </div>
      </div>
    </div>
  );

  const RecommendedModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold text-neutral-800">Buy Test Series</h1>
        <span className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
          <Sparkles className="w-4 h-4"/> Premium Packages
        </span>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedTests.map((test, i) => (
          <div key={test.id} className="bg-white rounded-xl border-2 border-transparent hover:border-purple-300 shadow-sm p-5 transition-all hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
            <h3 className="font-bold text-lg mb-2 text-neutral-800">{test.title}</h3>
            <p className="text-sm text-neutral-600 mb-4">{test.reason}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {test.tags.map((tag: string) => (
                 <span key={tag} className="text-xs font-semibold bg-neutral-100 text-neutral-600 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <button 
              onClick={() => initiatePayment(test.id, parseInt(test.tags[1]?.replace('₹','') || '499'))} 
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              <Wallet className="w-4 h-4"/> Pay with Razorpay
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const CoursesModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">My Courses</h1>
       <div className="grid md:grid-cols-3 gap-6">
         {['SSC Foundation Batch 2024', 'Banking Quant Masterclass', 'Current Affairs Yearly Roundup'].map((course, i) => (
           <div key={i} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden group cursor-pointer">
             <div className="h-32 bg-neutral-800 relative">
               <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                 <PlayCircle className="w-6 h-6 text-white"/>
               </div>
             </div>
             <div className="p-4">
               <h3 className="font-bold text-neutral-800 mb-1">{course}</h3>
               <p className="text-xs text-neutral-500 mb-3 ml-1">Video Courses • PDF Notes • Recorded</p>
               <div className="w-full bg-neutral-100 rounded-full h-1.5 mb-2">
                 <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${Math.random() * 80 + 10}%` }}></div>
               </div>
               <div className="flex justify-between items-center mt-3">
                 <span className="text-sm font-semibold text-blue-600">Resume</span>
                 <span className="text-xs text-neutral-500">Live at 6 PM</span>
               </div>
             </div>
           </div>
         ))}
       </div>
    </div>
  );

  const WalletModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">Wallet & Purchases</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-6 rounded-xl shadow-lg col-span-1 md:col-span-2">
          <h3 className="text-neutral-400 font-medium mb-1">Active Subscription</h3>
          <h2 className="text-3xl font-bold mb-4">Examboost Pro Max</h2>
          <div className="flex gap-8 border-t border-neutral-700 pt-4 mt-4">
             <div>
               <p className="text-xs text-neutral-400">Valid Till</p>
               <p className="font-semibold">24 Dec 2026</p>
             </div>
             <div>
               <p className="text-xs text-neutral-400">Auto-Renew</p>
               <p className="font-semibold text-green-400">Enabled</p>
             </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 flex flex-col justify-center gap-4">
           <button className="w-full font-semibold border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">Upgrade Plan</button>
           <button className="w-full font-semibold text-neutral-600 bg-neutral-100 py-3 rounded-lg hover:bg-neutral-200 transition-colors">View Invoices</button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mt-6">
         <div className="p-4 border-b bg-neutral-50 font-bold text-neutral-700">Recent Purchases</div>
         <div className="p-4 flex items-center justify-between border-b last:border-0 hover:bg-neutral-50">
           <div>
             <h4 className="font-semibold text-neutral-800">SSC CGL Tier 1 Test Series</h4>
             <p className="text-xs text-neutral-500">12 Jan 2026</p>
           </div>
           <span className="font-bold text-neutral-800">₹299</span>
         </div>
         <div className="p-4 flex items-center justify-between border-b last:border-0 hover:bg-neutral-50">
           <div>
             <h4 className="font-semibold text-neutral-800">Examboost Monthly Pass</h4>
             <p className="text-xs text-neutral-500">01 Jan 2026</p>
           </div>
           <span className="font-bold text-neutral-800">₹499</span>
         </div>
      </div>
    </div>
  );

  const NotificationsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">Notifications</h1>
      <div className="space-y-4">
        {[
          { icon: Zap, color: "text-amber-500", bg: "bg-amber-100", title: "New SSC CGL Mock Available", desc: "Full Length Mock #15 is now live. Attempt now!", time: "2 hours ago" },
          { icon: Calendar, color: "text-blue-500", bg: "bg-blue-100", title: "Upcoming Exam: SBI PO Prelims", desc: "Your exam is in exactly 14 days. View last-minute tips.", time: "1 day ago" },
          { icon: Target, color: "text-green-500", bg: "bg-green-100", title: "50% Off on Engineering Package", desc: "Special festival discount applied to your account.", time: "2 days ago" },
        ].map((notif, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
              <notif.icon className="w-5 h-5"/>
            </div>
            <div>
              <h4 className="font-bold text-neutral-800">{notif.title}</h4>
              <p className="text-sm text-neutral-600 mt-0.5">{notif.desc}</p>
              <span className="text-xs text-neutral-400 mt-2 block">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfileModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">My Profile</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-4">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
              {studentInfo.name.charAt(0)}
            </div>
            <h2 className="text-xl font-bold text-neutral-800">{studentInfo.name}</h2>
            <p className="text-neutral-500 text-sm mb-4">student@examboost.com</p>
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Pro Member</span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hidden md:block">
            <h3 className="font-bold text-neutral-800 mb-4">Features</h3>
            <ul className="space-y-3 text-sm font-medium text-neutral-600">
              <li className="flex items-center gap-2 text-indigo-600"><HelpCircle className="w-4 h-4"/> Doubt Solving (24/7)</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4"/> Discussion Forum</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4"/> Daily Current Affairs</li>
              <li className="flex items-center gap-2"><Target className="w-4 h-4"/> Rank Predictor</li>
              <li className="flex items-center gap-2"><Calendar className="w-4 h-4"/> Exam Calendar</li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-neutral-800">Exam Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Target Exam</label>
                <div className="mt-1 font-medium text-neutral-800 bg-neutral-50 p-3 rounded border border-neutral-100">{studentInfo.targetExam}</div>
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Default Language</label>
                <div className="mt-1 font-medium text-neutral-800 bg-neutral-50 p-3 rounded border border-neutral-100">English</div>
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">State Option</label>
                <div className="mt-1 font-medium text-neutral-800 bg-neutral-50 p-3 rounded border border-neutral-100">Delhi</div>
              </div>
              <button className="bg-neutral-900 text-white px-6 py-2 rounded-lg font-semibold mt-4 hover:bg-neutral-800 transition-colors">
                Edit Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 font-sans flex text-neutral-900 selection:bg-blue-200">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-neutral-900/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? "16rem" : "0rem" }}
        className={`fixed lg:sticky top-0 left-0 h-screen z-50 bg-white border-r border-neutral-200 overflow-y-auto no-scrollbar lg:transition-all lg:duration-300 ${!sidebarOpen && !isMobile ? 'border-r-0' : ''}`}
        style={{ transform: (isMobile && !sidebarOpen) ? 'translateX(-100%)' : 'translateX(0)' }}
      >
        <div className="p-6 flex items-center justify-between">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tighter w-full overflow-hidden whitespace-nowrap">
            ExamBoost.
          </span>
          {isMobile && <button onClick={() => setSidebarOpen(false)}><X className="w-6 h-6 text-neutral-500"/></button>}
        </div>

        <nav className="px-4 pb-6 space-y-1">
          <p className="px-4 text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 mt-4 whitespace-nowrap overflow-hidden">Menu</p>
          {menuItems.slice(0, 7).map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); if(isMobile) setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all tooltip-trigger overflow-hidden whitespace-nowrap ${
                activeTab === item.id 
                  ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100" 
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <item.icon className={`w-5 h-5 shrink-0 ${activeTab === item.id ? "text-blue-600" : "text-neutral-500"}`} />
              {item.label}
            </button>
          ))}

          <p className="px-4 text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 mt-8 whitespace-nowrap overflow-hidden">Account & Settings</p>
          {menuItems.slice(7).map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); if(isMobile) setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all overflow-hidden whitespace-nowrap ${
                activeTab === item.id 
                  ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100" 
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <item.icon className={`w-5 h-5 shrink-0 ${activeTab === item.id ? "text-blue-600" : "text-neutral-500"}`} />
              {item.label}
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden w-full lg:max-w-[calc(100vw-16rem)] transition-all duration-300">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 md:px-8 py-4 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-4 text-neutral-800">
             <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
               <Menu className="w-6 h-6" />
             </button>
             
             <div className="hidden md:flex relative group">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search mock tests..." 
                  className="pl-10 pr-4 py-2 bg-neutral-100 border-transparent focus:bg-white focus:border-blue-500 border rounded-full w-64 text-sm font-medium outline-none transition-all shadow-sm focus:shadow"
                />
             </div>
           </div>
           
           <div className="flex items-center gap-3 md:gap-4">
             <button className="relative p-2 text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors" onClick={() => setActiveTab('notifications')}>
               <Bell className="w-6 h-6" />
               <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <button className="hidden md:flex p-2 text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors">
               <Settings className="w-6 h-6" />
             </button>
             <div className="w-px h-8 bg-neutral-300 hidden md:block"></div>
             <button 
                onClick={() => setActiveTab('profile')}
                className="flex items-center gap-3 hover:bg-neutral-100 p-1.5 pr-4 rounded-full transition-colors border border-transparent hover:border-neutral-200"
             >
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm z-10">
                 R
               </div>
               <span className="font-bold text-neutral-700 hidden md:block">{studentInfo.name}</span>
             </button>
           </div>
        </header>

        {/* Dynamic Inner Content */}
        <div className="p-4 md:p-8 flex-1 w-full max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

    </div>
  );
}

// Reusable dummy globe icon component for Profile
const Globe = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);
