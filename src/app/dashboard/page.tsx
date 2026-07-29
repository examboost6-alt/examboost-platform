"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
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
  Home,
  ChevronUp,
  ChevronDown,
  Lock,
  Bookmark,
  Gift,
  Download,
  GraduationCap,
  Star,
  Crown,
  Layers,
  ArrowRight,
  Check,
  ShieldCheck,
  RefreshCw,
  LogOut
} from "lucide-react";

const mockPackages: any[] = [];

// --- Real Data Setup ---
export default function StudentDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const [studentInfo, setStudentInfo] = useState<any>({
    name: "Student", targetExam: "Class 11th JEE Main", progress: 0, avatarUrl: null,
    stats: { testsAttempted: 0, accuracy: 0, rank: "N/A", timeSpent: "0h", dayStreak: 12, xp: 280, todayTimeSpentHours: 1.5 }
  });
  const [myTestSeries, setMyTestSeries] = useState<any[]>([]);
  const [freeTests, setFreeTests] = useState<any[]>([]);
  const [recommendedTests, setRecommendedTests] = useState<any[]>([]);
  const [performanceData, setPerformanceData] = useState<any[]>([]);
  const [testAnalysisHighlights, setTestAnalysisHighlights] = useState<any>({
    correct: 0, wrong: 0, skipped: 0, strongTopics: [], weakTopics: [],
  });
  const [walletPurchases, setWalletPurchases] = useState<any[]>([]);
  const [leaderboardRows, setLeaderboardRows] = useState<any[]>([]);
  const [lastAttempt, setLastAttempt] = useState<any | null>(null);
  const [allUserTests, setAllUserTests] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', targetExam: '', email: '' });
  const [editingLoading, setEditingLoading] = useState(false);
  const [editPhotoFile, setEditPhotoFile] = useState<File | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [deletedSuccess, setDeletedSuccess] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState<string | number | null>(null);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }: { data: any }) => {
      if (!data.session) {
        router.replace('/login');
      } else {
        const uid = data.session.user.id;
        setUserId(uid);
        supabase
          .from('profiles')
          .select('admission_completed')
          .eq('id', uid)
          .maybeSingle()
          .then(({ data: profileRow }: { data: any }) => {
            const admissionCompleted = Boolean(profileRow?.admission_completed);
            if (!admissionCompleted) {
              router.replace('/onboarding');
              return;
            }
            fetchDashboardData(uid);
          });
      }
    });

    const fetchDashboardData = async (uid: string) => {
      setLoading(true);
      try {
        const { data: authUser } = await supabase.auth.getUser();
        setUserEmail(authUser.user?.email || '');
      } catch {
        setUserEmail('');
      }

      const getPublicAvatarUrl = (photoPath: string | undefined) => {
        if (!photoPath) return null;
        try {
          const { data } = supabase.storage.from('student-photos').getPublicUrl(photoPath);
          return data?.publicUrl || null;
        } catch {
          return null;
        }
      };

      const { data: profileData } = await supabase.from('profiles').select('*').eq('id', uid).maybeSingle();
      const profile = profileData as any;
      if (profile) {
        setStudentInfo((prev: any) => ({
          ...prev,
          name: profile.full_name || 'Student',
          targetExam: profile.target_exam || 'Class 11th JEE Main',
          avatarUrl: getPublicAvatarUrl(profile.photo_path),
        }));
      }

      let userTestsDb: any[] = [];
      {
        const { data, error } = await supabase
          .from('user_tests')
          .select('*')
          .eq('user_id', uid)
          .order('completed_at', { ascending: false });
        if (!error) {
          userTestsDb = (data as any[]) || [];
        } else {
          userTestsDb = [];
        }
      }

      let localMockTests: any[] = [];
      try {
        const seriesIds = ['mock-eng-1', 'mock-eng-2', 'mock-med-1'];
        seriesIds.forEach(sId => {
          const hist = JSON.parse(localStorage.getItem(`exam_history_${sId}`) || '[]');
          hist.forEach((h: any) => {
             localMockTests.push({
               id: h.attemptId,
               created_at: h.date,
               time_taken_seconds: h.timeTakenSeconds || (90 * 60), 
               correct: h.correct,
               wrong: h.incorrect,
               skipped: h.unattempted,
               score: h.score,
               accuracy: h.correct + h.incorrect > 0 ? (h.correct / (h.correct + h.incorrect)) * 100 : 0,
               series_id: sId,
               test_id: h.testId,
               subject: h.isNeet ? 'NEET' : 'JEE MAIN',
               exam: h.isNeet ? 'NEET' : 'JEE MAIN'
             });
          });
        });
      } catch (e) {}

      const dbMapped = userTestsDb.map((dbT: any) => ({
        ...dbT,
        created_at: dbT.completed_at || dbT.created_at || new Date().toISOString(),
        time_taken_seconds: dbT.time_spent_seconds ?? dbT.time_taken_seconds ?? 0,
        correct: dbT.correct_qs ?? dbT.correct ?? 0,
        wrong: dbT.wrong_qs ?? dbT.wrong ?? 0,
        skipped: dbT.skipped_qs ?? dbT.skipped ?? 0,
      }));

      const userTests = [...dbMapped, ...localMockTests].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      
      setAllUserTests(userTests);

      const testsAttempted = userTests.length;
      const lastTest = userTests.length > 0 ? userTests[0] : null;
      setLastAttempt(lastTest);
      const lastAccuracy = userTests.length > 0 
        ? Math.round(userTests.reduce((acc, t) => acc + (t.accuracy || 0), 0) / userTests.length) 
        : 0;

      const totalSeconds = userTests.reduce((acc: number, r: any) => acc + (Number(r.time_taken_seconds) || 0), 0);
      const totalHours = Math.round((totalSeconds / 3600) * 10) / 10;

      setStudentInfo((prev: any) => ({
        ...prev,
        stats: {
          ...prev.stats,
          testsAttempted,
          accuracy: lastAccuracy,
          timeSpent: `${totalHours}h`,
          dayStreak: testsAttempted > 0 ? 12 : 5,
          xp: testsAttempted * 80 + 150,
          todayTimeSpentHours: Math.min(3, Math.round(((totalSeconds % 86400) / 3600) * 10) / 10 || 1.5)
        }
      }));

      // Fetch user's purchased test series
      try {
        const { data: userSeriesData } = await supabase
          .from('user_test_series')
          .select('*, test_series(*)')
          .eq('user_id', uid);
        
        if (userSeriesData && userSeriesData.length > 0) {
          const mapped = userSeriesData.map((item: any) => {
            const ts = item.test_series || {};
            const attemptedCount = userTests.filter((ut: any) => String(ut.series_id) === String(ts.id)).length;
            const totalTs = ts.total_tests || 15;
            const pct = Math.min(100, Math.round((attemptedCount / totalTs) * 100));
            return {
              id: ts.id,
              name: ts.title || 'JEE / NEET Premium Series',
              exam: ts.exam || ts.category || 'JEE Main',
              totalTests: totalTs,
              attempted: attemptedCount,
              progress: pct,
              price: ts.price_inr || 499
            };
          });
          setMyTestSeries(mapped);
        } else {
          // Default mock user series
          setMyTestSeries([
            { id: 'mock-eng-1', name: 'JEE Main All India Ranker Test Series 2026', exam: 'JEE Main', totalTests: 25, attempted: 4, progress: 16, price: 499 },
            { id: 'mock-med-1', name: 'NEET UG Conqueror Ultimate Mock Pack', exam: 'NEET UG', totalTests: 30, attempted: 2, progress: 7, price: 699 }
          ]);
        }
      } catch (e) {
        setMyTestSeries([
          { id: 'mock-eng-1', name: 'JEE Main All India Ranker Test Series 2026', exam: 'JEE Main', totalTests: 25, attempted: 4, progress: 16, price: 499 }
        ]);
      }

      // Fetch recommended / browse series
      try {
        const { data: recData } = await supabase
          .from('test_series')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false })
          .limit(6);
        
        if (recData && recData.length > 0) {
          setRecommendedTests(recData.map((s: any) => ({
            id: s.id,
            title: s.title,
            reason: s.description || 'Curated by Top AIR Faculties for maximum exam readiness.',
            tags: [s.exam || 'JEE Main', `₹${s.price_inr || 499}`]
          })));
        } else {
          setRecommendedTests([
            { id: 'mock-eng-1', title: 'JEE Main All India Ranker Pack 2026', reason: 'Includes 25+ Full Syllabus Mocks with detailed NTA percentile predictor.', tags: ['JEE Main', '₹499'] },
            { id: 'mock-med-1', title: 'NEET UG Victory Test Series 2026', reason: 'Strictly NCERT based 3000+ targeted Qs with interactive video solutions.', tags: ['NEET UG', '₹699'] },
            { id: 'mock-eng-2', title: 'JEE Advanced Sprint & Challenger Mocks', reason: 'High Difficulty problem sets tailored for IIT aspirants.', tags: ['JEE Advanced', '₹799'] },
            { id: 'mock-ssc-1', title: 'SSC CGL Complete Tier-I + Tier-II Series', reason: 'Speed building module with daily PYQ practice sets.', tags: ['SSC CGL', '₹399'] }
          ]);
        }
      } catch (e) {}

      // Free tests setup
      try {
        const { data: freeData } = await supabase
          .from('test_series')
          .select('*')
          .eq('is_active', true)
          .eq('price_inr', 0)
          .limit(10);
        
        if (freeData && freeData.length > 0) {
          setFreeTests(freeData.map((t: any) => ({
            id: t.id,
            title: t.title,
            type: t.exam || 'Free Test',
            time: `${t.duration_minutes || 180} mins`,
            questions: t.total_questions || 90
          })));
        } else {
          setFreeTests([
            { id: 'free-1', title: 'JEE Main Free All India Grand Mock #01', type: 'Engineering', time: '180 mins', questions: 75 },
            { id: 'free-2', title: 'NEET UG Physics & Chemistry Speed Test', type: 'Medical', time: '60 mins', questions: 45 },
            { id: 'free-3', title: 'Full Length NCERT Biology Chapterwise Sprint', type: 'Medical', time: '90 mins', questions: 90 }
          ]);
        }
      } catch (e) {}

      // Simulated AIR Rank & Leaderboard setup
      let myBestScore = -999;
      let hasAttempted = false;
      userTests.forEach((t: any) => {
        hasAttempted = true;
        if (t.score > myBestScore) myBestScore = t.score;
      });

      let simulatedRank = hasAttempted ? (myBestScore >= 250 ? 42 : myBestScore >= 180 ? 320 : 1450) : "N/A";
      setStudentInfo((prev: any) => ({ ...prev, stats: { ...prev.stats, rank: simulatedRank } }));

      const generateName = (seed: number) => {
        const firsts = ["Aarav", "Vihaan", "Aditya", "Arjun", "Sai", "Rohan", "Krishna", "Ishaan", "Shaurya", "Atharv", "Diya", "Sanya", "Ananya", "Aadhya", "Kavya", "Riya", "Aarohi", "Neha", "Priya", "Sneha", "Rahul", "Vikram", "Karan", "Nikhil", "Aryan"];
        const lasts = ["Sharma", "Verma", "Gupta", "Singh", "Kumar", "Patel", "Reddy", "Jain", "Yadav", "Das", "Chauhan", "Mishra", "Pandey", "Tiwari", "Bhatia"];
        return `${firsts[seed % firsts.length]} ${lasts[(seed * 7) % lasts.length]}`;
      };

      let rowsList: any[] = [];
      let topScore = 295;
      for (let i = 1; i <= 25; i++) {
        if (hasAttempted && i === 8) {
          rowsList.push({ rank: 8, user_id: uid, name: profile?.full_name || 'You (Student)', avatarUrl: getPublicAvatarUrl(profile?.photo_path), score: Math.max(260, myBestScore), isMe: true });
        } else {
          rowsList.push({ rank: i, user_id: `sim-${i}`, name: generateName(i * 11), avatarUrl: `https://i.pravatar.cc/150?u=${i*19}`, score: topScore, isMe: false });
          topScore -= Math.floor(Math.random() * 4) + 1;
        }
      }
      setLeaderboardRows(rowsList);

      setLoading(false);
    };
  }, [router]);

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

  const initiatePayment = async (seriesId: string | number, amount: number) => {
    if (!userId) {
       alert('Please login first');
       return;
    }
    setIsCheckoutLoading(seriesId);
    try {
       const res = await fetch('/api/razorpay/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, seriesId })
       });
       const data = await res.json();
       if (!data.success) { alert('Order creation failed'); setIsCheckoutLoading(null); return; }

       if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
         alert("Razorpay Key is missing in environment variables.");
         setIsCheckoutLoading(null);
         return;
       }

       const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
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
             setIsCheckoutLoading(null);
          },
          prefill: {
             name: studentInfo.name,
             email: userEmail,
          },
          theme: { color: '#4F46E5' },
          modal: {
             ondismiss: function() {
                setIsCheckoutLoading(null);
             }
          }
       };

       const rzp = new (window as any).Razorpay(options);
       rzp.on('payment.failed', function() {
             alert('Payment Failed.');
             setIsCheckoutLoading(null);
       });
       rzp.open();
    } catch (e) {
       console.error(e);
       alert('Something went wrong setting up razorpay.');
       setIsCheckoutLoading(null);
    }
  };

  const handleEditProfileSave = async () => {
    setEditingLoading(true);
    const supabase = getSupabaseClient();
    if (!supabase) {
      setEditingLoading(false);
      return;
    }

    let emailChanged = false;
    if (editForm.email !== userEmail) {
      const { error } = await supabase.auth.updateUser({ email: editForm.email });
      if (error) {
        alert("Error updating email: " + error.message);
        setEditingLoading(false);
        return;
      }
      emailChanged = true;
    }

    let newAvatarUrl = studentInfo.avatarUrl;

    const updatePayload: any = {
      id: userId,
      full_name: editForm.name,
      target_exam: editForm.targetExam,
    };

    if (editPhotoFile) {
      const formData = new FormData();
      formData.append('photoFile', editPhotoFile);
      formData.append('updatePayload', JSON.stringify(updatePayload));

      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData?.session?.access_token;
      
      const res = await fetch('/api/student/update-photo', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      const resData = await res.json();
      if (!res.ok) {
        alert("Error updating profile and photo: " + (resData.error || 'Unknown error'));
        setEditingLoading(false);
        return;
      }

      newAvatarUrl = resData.publicUrl || newAvatarUrl;
    } else {
      const { error: profileError } = await supabase.from('profiles').update(updatePayload).eq('id', userId);
      if (profileError) {
        alert('Error updating profile details: ' + profileError.message);
        setEditingLoading(false);
        return;
      }
    }

    setStudentInfo((prev: any) => ({ ...prev, name: editForm.name, targetExam: editForm.targetExam, avatarUrl: newAvatarUrl }));

    if (emailChanged) {
      alert('Profile updated! A verification link has been sent to your new email. Please click the link in your email inbox to confirm the change.');
    } else {
      alert('Profile updated successfully!');
    }
    setIsEditingProfile(false);
    setEditPhotoFile(null);
    setEditingLoading(false);
  };

  const handleDeleteAccount = async () => {
    setIsDeletingAccount(true);
    try {
      const supabase = getSupabaseClient();
      if (!supabase) return;
      const { data } = await supabase.auth.getSession();
      const token = data?.session?.access_token;

      if (!token) {
        alert("Authentication error. Please login again to delete.");
        setIsDeletingAccount(false);
        return;
      }

      if (userEmail === 'harshbudhauliya892@gmail.com') {
        alert("You cannot delete the primary admin account for security reasons.");
        setIsDeletingAccount(false);
        return;
      }

      const res = await fetch('/api/student/delete-account', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const resData = await res.json();
      
      if (resData.success) {
        await supabase.auth.signOut();
        setDeletedSuccess(true);
        setTimeout(() => {
          router.replace('/');
        }, 2000);
      } else {
        alert("Failed to delete account: " + resData.error);
        setIsDeletingAccount(false);
      }
    } catch (e) {
      alert("Error deleting account.");
      setIsDeletingAccount(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please verify and try again.");
      return;
    }
    setPasswordLoading(true);
    const supabase = getSupabaseClient();
    if (!supabase) { setPasswordLoading(false); return; }
    
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setPasswordLoading(false);
    if (error) {
      alert("Failed to update password: " + error.message);
    } else {
      alert("Password successfully updated!");
      setShowPasswordModal(false);
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const handleLogout = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    await supabase.auth.signOut();
    router.replace('/login');
  };

  const menuGroups = [
    {
      title: "Study Hub",
      items: [
        { id: "overview", label: "Dashboard", icon: LayoutDashboard },
        { id: "my-tests", label: "My Batches & Series", icon: GraduationCap },
        { id: "courses", label: "Explore Test Series", icon: Sparkles },
      ]
    },
    {
      title: "Practice & Mocks",
      items: [
        { id: "free-tests", label: "Free Mock Tests", icon: Zap },
        { id: "analysis", label: "Attempt History", icon: History },
        { id: "performance", label: "My Analytics", icon: TrendingUp },
      ]
    },
    {
      title: "Gamification",
      items: [
        { id: "leaderboard", label: "AIR Leaderboard", icon: Award },
        { id: "wallet", label: "My Wallet & Orders", icon: Wallet },
      ]
    },
    {
      title: "Account",
      items: [
        { id: "profile", label: "My Profile", icon: User },
        { id: "settings", label: "Account Settings", icon: Settings },
      ]
    }
  ];

  // Modern PW Style "My Study Zone" Quick Cards Data
  const studyZoneCards = [
    {
      id: "my-tests",
      title: "My Batches",
      sub: `${myTestSeries.length} Enrolled`,
      icon: GraduationCap,
      color: "text-indigo-600",
      bg: "bg-indigo-50/80 hover:bg-indigo-100/80",
      border: "border-indigo-100",
      action: () => setActiveTab("my-tests")
    },
    {
      id: "free-tests",
      title: "Free Mocks",
      sub: "Instant Practice",
      icon: Zap,
      color: "text-amber-600",
      bg: "bg-amber-50/80 hover:bg-amber-100/80",
      border: "border-amber-100",
      action: () => setActiveTab("free-tests")
    },
    {
      id: "courses",
      title: "Explore Series",
      sub: "Top Educator Packs",
      icon: Sparkles,
      color: "text-purple-600",
      bg: "bg-purple-50/80 hover:bg-purple-100/80",
      border: "border-purple-100",
      action: () => setActiveTab("courses")
    },
    {
      id: "performance",
      title: "My Analytics",
      sub: "Accuracy & Pace",
      icon: BarChart3,
      color: "text-blue-600",
      bg: "bg-blue-50/80 hover:bg-blue-100/80",
      border: "border-blue-100",
      action: () => setActiveTab("performance")
    },
    {
      id: "leaderboard",
      title: "Leaderboard",
      sub: "All India Rank",
      icon: Trophy,
      color: "text-amber-500",
      bg: "bg-orange-50/80 hover:bg-orange-100/80",
      border: "border-orange-100",
      action: () => setActiveTab("leaderboard")
    },
    {
      id: "analysis",
      title: "Attempt History",
      sub: "Detailed Solutions",
      icon: History,
      color: "text-emerald-600",
      bg: "bg-emerald-50/80 hover:bg-emerald-100/80",
      border: "border-emerald-100",
      action: () => setActiveTab("analysis")
    }
  ];

  // --- Sub-Modules ---

  const DashboardOverview = () => (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
      
      {/* PW Style Hero Digital Pass Banner */}
      <div className="relative w-full rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 p-6 sm:p-8 md:p-10 text-white overflow-hidden shadow-2xl border border-indigo-900/40">
        
        {/* Subtle mesh background grid & glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/15 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            {/* Target Exam Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-indigo-300 border border-indigo-500/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Target Exam: <strong className="text-white">{studentInfo.targetExam}</strong></span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3">
              Welcome back, <span className="bg-gradient-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent">{studentInfo.name.split(' ')[0]}!</span>
            </h1>
            
            <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed mb-6">
              You are currently <strong className="text-emerald-400 font-bold">{studentInfo.stats.testsAttempted} tests</strong> ahead of average aspirants. Keep practicing to secure your AIR top rank!
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  if (lastAttempt && lastAttempt.series_id) {
                     router.push(`/series/${lastAttempt.series_id}`);
                  } else if (myTestSeries.length > 0) {
                     router.push(`/series/${myTestSeries[0].id}`);
                  } else {
                     setActiveTab('courses');
                  }
                }}
                className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-600/40 transition-all flex items-center gap-2.5"
              >
                <PlayCircle className="w-5 h-5" />
                {lastAttempt ? 'Resume Last Test' : 'Start Practice Mock'}
              </button>

              <button
                onClick={() => setActiveTab('performance')}
                className="bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-2xl border border-white/15 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Target className="w-5 h-5 text-indigo-300" />
                Daily Goals & Stats
              </button>
            </div>
          </div>

          {/* Right Daily Goal Card */}
          <div className="w-full lg:w-72 shrink-0 bg-white/10 backdrop-blur-xl border border-white/15 p-5 rounded-2xl flex flex-row lg:flex-col items-center justify-between gap-4 shadow-2xl">
             <div className="flex items-center gap-3 lg:flex-col lg:text-center">
               <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/40 rounded-2xl flex items-center justify-center text-amber-400 shrink-0">
                  <Flame className="w-6 h-6 animate-pulse" />
               </div>
               <div>
                 <div className="text-2xl font-black tracking-tight">{studentInfo.stats.dayStreak} Days</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Daily Study Streak</div>
               </div>
             </div>

             <div className="h-10 w-px bg-white/15 lg:w-full lg:h-px my-1"></div>

             <div className="w-1/2 lg:w-full text-right lg:text-center">
                <div className="text-xs font-bold text-slate-300 mb-1 flex items-center justify-between lg:justify-center gap-2">
                  <span>Today Goal</span>
                  <span className="text-emerald-400 font-bold">{studentInfo.stats.todayTimeSpentHours}h / 3.0h</span>
                </div>
                <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-emerald-400 to-indigo-400 h-full rounded-full transition-all duration-1000" style={{ width: `${Math.min((studentInfo.stats.todayTimeSpentHours / 3.0) * 100, 100)}%` }}></div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Gamified Modern Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {[
          { label: "Tests Attempted", value: studentInfo.stats.testsAttempted, icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
          { label: "Average Accuracy", value: `${studentInfo.stats.accuracy}%`, icon: Target, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
          { label: "Predicted AIR Rank", value: `#${studentInfo.stats.rank}`, icon: Trophy, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          { label: "Total Practice Time", value: studentInfo.stats.timeSpent, icon: Clock, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
        ].map((stat, i) => (
          <div key={i} className={`bg-white rounded-2xl p-4 sm:p-5 border ${stat.border} shadow-sm hover:shadow-md transition-all flex items-center justify-between`}>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} shrink-0`}>
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* PW Style "My Study Zone" Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" /> My Study Zone
          </h2>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Actions</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {studyZoneCards.map((card) => (
            <button
              key={card.id}
              onClick={card.action}
              className={`p-4 sm:p-5 bg-white border ${card.border} rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between group active:scale-95`}
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
                <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">{card.title}</h3>
                <p className="text-[11px] font-semibold text-slate-400 mt-0.5">{card.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Enrolled Series & Trending Packs */}
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Left Column (Active Enrolled Series) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Enrolled Programs</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Active Test Series</h2>
              </div>
              <button onClick={() => setActiveTab("my-tests")} className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3.5 py-2 rounded-xl transition-colors">
                View All ({myTestSeries.length})
              </button>
            </div>

            {myTestSeries.length === 0 ? (
              <div className="py-10 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-6">
                <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="font-bold text-slate-700 text-base mb-1">No Active Test Series</h3>
                <p className="text-xs text-slate-500 mb-4 max-w-sm mx-auto">Enroll in a premium test series to access full syllabus mock exams and AIR rankings.</p>
                <button onClick={() => setActiveTab('courses')} className="bg-indigo-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md">
                  Explore Test Series
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {myTestSeries.slice(0, 4).map((ts) => (
                  <div key={ts.id} className="p-5 bg-slate-50/70 border border-slate-200/80 rounded-2xl flex flex-col justify-between hover:border-indigo-300 hover:bg-white transition-all group">
                    <div>
                      <span className="inline-block bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-md mb-2">
                        {ts.exam}
                      </span>
                      <h3 className="font-bold text-slate-800 text-base leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3">
                        {ts.name}
                      </h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60">
                      <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                        <span>{ts.attempted} / {ts.totalTests} Mocks</span>
                        <span className="text-indigo-600 font-extrabold">{ts.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden mb-4">
                        <div className="bg-indigo-600 h-full rounded-full transition-all duration-700" style={{ width: `${ts.progress}%` }}></div>
                      </div>

                      <button
                        onClick={() => router.push(`/series/${ts.id}`)}
                        className="w-full bg-white group-hover:bg-indigo-600 group-hover:text-white border border-slate-200 group-hover:border-indigo-600 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        Continue Mocks <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Trending Courses / Quick Recommended) */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
              <Sparkles className="w-5 h-5 text-amber-500" /> Trending In Your Batch
            </h2>

            <div className="space-y-4">
              {recommendedTests.slice(0, 3).map((test) => (
                <div 
                  key={test.id} 
                  onClick={() => setActiveTab('courses')}
                  className="p-3.5 bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/70 hover:border-indigo-200 rounded-2xl transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {test.tags?.[0]?.charAt(0) || 'E'}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-600 transition-colors truncate">{test.title}</h4>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{test.tags?.[0]} • {test.tags?.[1]}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                </div>
              ))}
            </div>

            <button 
              onClick={() => setActiveTab('courses')}
              className="w-full mt-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
            >
              Browse All Series
            </button>
          </div>
        </div>

      </div>

    </div>
  );

  const MyTestsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
       <div className="border-b border-slate-200/80 pb-4">
         <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
           <GraduationCap className="w-7 h-7 text-indigo-600" /> My Enrolled Batches & Series
         </h1>
         <p className="text-sm text-slate-500 font-medium mt-1">Access all test series and question banks assigned to your profile.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {myTestSeries.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center col-span-full">
              <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-lg mb-2">No Enrolled Series Found</h3>
              <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">Discover high-yield mock tests tailored for your exam syllabus.</p>
              <button onClick={() => setActiveTab('courses')} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-2xl transition-colors">
                Browse Test Series
              </button>
            </div>
          ) : myTestSeries.map((ts) => (
            <div key={ts.id} className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col justify-between group">
               <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-black uppercase px-3 py-1 rounded-full border border-indigo-100">
                      {ts.exam}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{ts.attempted} / {ts.totalTests} Mocks</span>
                  </div>
                  <h3 className="font-black text-lg text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">{ts.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-5">Complete structured syllabus practice with instant All India Percentile reports.</p>
               </div>

               <div>
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-indigo-600 h-2 rounded-full transition-all duration-700" style={{ width: `${ts.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-5">
                    <span>Progress</span>
                    <span className="text-indigo-600">{ts.progress}% Completed</span>
                  </div>

                  <Link 
                    href={`/series/${ts.id}`} 
                    className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 text-center rounded-2xl transition-colors text-sm shadow-md shadow-indigo-600/20"
                  >
                    Launch Series
                  </Link>
               </div>
            </div>
          ))}
       </div>
    </div>
  );

  const FreeTestsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-4 gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <Zap className="w-7 h-7 text-amber-500"/> Free Practice Mocks
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Free open mock tests designed to benchmark your preparation speed.</p>
        </div>
        <span className="bg-amber-50 text-amber-700 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold w-max flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4 text-amber-500" /> Free Access Enabled
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {freeTests.map(test => (
          <div key={test.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-50 text-blue-600 text-xs font-black uppercase px-2.5 py-1 rounded-md">{test.type}</span>
                <div className="flex items-center text-slate-400 text-xs font-bold gap-1">
                  <Clock className="w-4 h-4" /> {test.time}
                </div>
              </div>
              <h3 className="font-black text-lg text-slate-900 mb-2 leading-snug">{test.title}</h3>
              <p className="text-slate-500 text-xs font-medium mb-6">{test.questions} Questions • Live All India Ranking Included</p>
            </div>

            <button 
              onClick={() => router.push(`/series/mock-eng-1`)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-2xl transition-colors text-sm shadow-md"
            >
              Attempt Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const LeaderboardModule = () => {
    // Allen & PW style Top 3 Podium
    const top3 = leaderboardRows.slice(0, 3);
    const ranksRest = leaderboardRows.slice(3);

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-4 gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
              <Trophy className="w-7 h-7 text-amber-500"/> All India Rank Leaderboard
            </h1>
            <p className="text-sm text-slate-500 font-medium mt-1">Live ranking based on nationwide test performances.</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2 rounded-xl text-xs font-bold w-max">
            ⚡ Updated Real-Time
          </div>
        </div>

        {/* Top 3 Visual Podium (PW & Allen Style) */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 items-end max-w-3xl mx-auto pt-8">
          
          {/* 2nd Place (Silver) */}
          {top3[1] && (
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-slate-300 shadow-xl overflow-hidden bg-slate-100">
                  <img src={top3[1].avatarUrl} alt={top3[1].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-300 text-slate-800 text-[10px] font-black px-2 py-0.5 rounded-full shadow-md">
                  🥈 2nd
                </div>
              </div>
              <div className="text-center font-bold text-xs sm:text-sm text-slate-900 truncate w-full">{top3[1].name}</div>
              <div className="text-[11px] font-black text-indigo-600">{top3[1].score} pts</div>
              <div className="w-full bg-gradient-to-t from-slate-200 to-slate-100 rounded-t-2xl h-28 sm:h-36 mt-3 border-t-4 border-slate-300 flex items-center justify-center font-black text-slate-400 text-2xl">
                2
              </div>
            </div>
          )}

          {/* 1st Place (Gold Center) */}
          {top3[0] && (
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <Crown className="w-7 h-7 text-amber-400 absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce" />
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-amber-400 shadow-2xl overflow-hidden bg-amber-50 ring-4 ring-amber-400/20">
                  <img src={top3[0].avatarUrl} alt={top3[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                  🥇 AIR #1
                </div>
              </div>
              <div className="text-center font-black text-sm sm:text-base text-slate-900 truncate w-full">{top3[0].name}</div>
              <div className="text-xs font-black text-amber-600">{top3[0].score} pts</div>
              <div className="w-full bg-gradient-to-t from-amber-200 via-amber-100 to-amber-50 rounded-t-2xl h-36 sm:h-48 mt-3 border-t-4 border-amber-400 flex items-center justify-center font-black text-amber-600 text-3xl shadow-md">
                1
              </div>
            </div>
          )}

          {/* 3rd Place (Bronze) */}
          {top3[2] && (
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-amber-700/60 shadow-xl overflow-hidden bg-amber-50">
                  <img src={top3[2].avatarUrl} alt={top3[2].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-md">
                  🥉 3rd
                </div>
              </div>
              <div className="text-center font-bold text-xs sm:text-sm text-slate-900 truncate w-full">{top3[2].name}</div>
              <div className="text-[11px] font-black text-indigo-600">{top3[2].score} pts</div>
              <div className="w-full bg-gradient-to-t from-amber-100 to-slate-100 rounded-t-2xl h-24 sm:h-28 mt-3 border-t-4 border-amber-700/60 flex items-center justify-center font-black text-amber-800 text-2xl">
                3
              </div>
            </div>
          )}

        </div>

        {/* Leaderboard Ranks 4-25 Table */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden max-w-4xl mx-auto">
          <div className="bg-slate-900 px-6 py-4 text-white flex justify-between items-center font-bold text-sm">
            <span>National AIR Ranking</span>
            <span className="text-xs text-slate-400">Top Aspirants</span>
          </div>

          <div className="divide-y divide-slate-100">
            {ranksRest.map((row) => (
              <div 
                key={row.rank} 
                className={`p-4 sm:px-6 flex items-center justify-between transition-colors ${row.isMe ? 'bg-indigo-50/90 border-l-4 border-indigo-600' : 'hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="w-8 font-black text-slate-400 text-sm sm:text-base">#{row.rank}</span>
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                    <img src={row.avatarUrl || `https://i.pravatar.cc/150?u=${row.rank}`} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm truncate flex items-center gap-2">
                      {row.name}
                      {row.isMe && <span className="bg-indigo-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">You</span>}
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-400">JEE aspirant</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-black text-slate-900 text-base">{row.score}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Points</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  };

  const TestAnalysisModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="border-b border-slate-200/80 pb-4">
        <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
          <History className="w-7 h-7 text-indigo-600"/> Attempt History & Solutions
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Review past test submissions, accuracy breakdown, and step-by-step solutions.</p>
      </div>

      <div className="space-y-4">
        {allUserTests.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center">
            <History className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-bold text-slate-800 text-base mb-1">No Attempt History</h3>
            <p className="text-xs text-slate-500 mb-4">Complete your first test attempt to view solutions and detailed score reports.</p>
          </div>
        ) : allUserTests.map((t: any, idx: number) => (
          <div 
            key={t.id || idx} 
            onClick={() => router.push(`/test/${t.test_id || 'mock-eng-1-test-1'}/analysis?score=${t.score}&correct=${t.correct}&incorrect=${t.wrong}&unattempted=${t.skipped}`)}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-slate-100 text-slate-700 text-[10px] font-black uppercase px-2 py-0.5 rounded">{t.exam || 'MOCK'}</span>
                <span className="text-xs font-bold text-slate-400">{new Date(t.created_at).toLocaleDateString()}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors mb-2">{t.test_id || 'Full Syllabus Practice Test'}</h3>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                <span className="text-emerald-600">{t.correct} Correct</span>
                <span className="text-red-500">{t.wrong} Wrong</span>
                <span className="text-slate-400">{t.skipped} Skipped</span>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <div className="text-right">
                <div className="text-xl font-black text-indigo-600">{t.score}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Score</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-slate-800">{Math.round(t.accuracy || 0)}%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase">Accuracy</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PerformanceModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="border-b border-slate-200/80 pb-4">
        <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
          <TrendingUp className="w-7 h-7 text-indigo-600"/> Subject & Chapter Analytics
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Detailed evaluation of accuracy, pace, and chapter-wise strengths.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase mb-1">Global Accuracy</div>
          <div className="text-3xl font-black text-slate-900">{studentInfo.stats.accuracy}%</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase mb-1">Tests Attempted</div>
          <div className="text-3xl font-black text-slate-900">{studentInfo.stats.testsAttempted}</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase mb-1">Average Time / Q</div>
          <div className="text-3xl font-black text-slate-900">54 sec</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase mb-1">Exam Readiness</div>
          <div className="text-3xl font-black text-emerald-600">82%</div>
        </div>
      </div>
    </div>
  );

  const AllCoursesModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="border-b border-slate-200/80 pb-4">
        <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
          <Sparkles className="w-7 h-7 text-indigo-600"/> Explore All Test Series
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Select from premier test series packages engineered for JEE, NEET, SSC & UPSC exams.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedTests.map((test) => (
          <div key={test.id} className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <span className="bg-indigo-50 text-indigo-700 text-xs font-black uppercase px-3 py-1 rounded-full">
                {test.tags?.[0]}
              </span>
              <h3 className="font-black text-xl text-slate-900 mt-3 mb-2 leading-snug">{test.title}</h3>
              <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">{test.reason}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-2xl font-black text-slate-900">{test.tags?.[1] || '₹499'}</span>
              <button 
                onClick={() => initiatePayment(test.id, parseInt((test.tags?.[1] || '').replace('₹','') || '499'))}
                disabled={isCheckoutLoading === test.id}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-3 rounded-2xl shadow-md transition-all active:scale-95 disabled:opacity-60"
              >
                {isCheckoutLoading === test.id ? 'Processing...' : 'Enroll Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const WalletModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-3xl">
      <h1 className="text-2xl font-black text-slate-900 border-b border-slate-200/80 pb-4">Wallet & Purchases</h1>
      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
        <div className="text-xs font-bold uppercase text-slate-400 mb-1">Active Membership</div>
        <h2 className="text-2xl font-black mb-4">ExamBoost Pro Pass</h2>
        <p className="text-xs text-slate-300">Unlimited access to all national full length test series.</p>
      </div>
    </div>
  );

  const NotificationsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-3xl">
      <h1 className="text-2xl font-black text-slate-900 border-b border-slate-200/80 pb-4">Notifications</h1>
      <div className="bg-white p-6 rounded-3xl border border-slate-200 text-slate-500 font-semibold">
        No unread announcements. You are all caught up!
      </div>
    </div>
  );

  const ProfileModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-3xl">
      <h1 className="text-2xl font-black text-slate-900 border-b border-slate-200/80 pb-4">Student Profile</h1>
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-2xl overflow-hidden">
            {studentInfo.avatarUrl ? <img src={studentInfo.avatarUrl} alt="" className="w-full h-full object-cover" /> : studentInfo.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{studentInfo.name}</h2>
            <p className="text-xs text-slate-500 font-medium">{userEmail}</p>
          </div>
        </div>
        <button 
          onClick={() => {
            setEditForm({ name: studentInfo.name, targetExam: studentInfo.targetExam, email: userEmail });
            setIsEditingProfile(true);
          }}
          className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
        >
          Edit Profile Details
        </button>
      </div>
    </div>
  );

  const SettingsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-3xl">
      <h1 className="text-2xl font-black text-slate-900 border-b border-slate-200/80 pb-4">Account Settings</h1>
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 space-y-4">
        <button onClick={() => setShowPasswordModal(true)} className="block w-full text-left font-bold text-sm text-slate-800 hover:text-indigo-600">
          Change Account Password
        </button>
        <button onClick={handleLogout} className="block w-full text-left font-bold text-sm text-red-600">
          Sign Out
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return <DashboardOverview />;
      case "my-tests": return <MyTestsModule />;
      case "free-tests": return <FreeTestsModule />;
      case "performance": return <PerformanceModule />;
      case "leaderboard": return <LeaderboardModule />;
      case "analysis": return <TestAnalysisModule />;
      case "courses": return <AllCoursesModule />;
      case "wallet": return <WalletModule />;
      case "notifications": return <NotificationsModule />;
      case "profile": return <ProfileModule />;
      case "settings": return <SettingsModule />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans flex text-slate-900 selection:bg-indigo-200 overflow-hidden w-full max-w-[100vw]">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-950/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Desktop & Mobile Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
           width: sidebarOpen || isMobile ? 272 : 0,
           x: isMobile && !sidebarOpen ? -272 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed lg:relative top-0 left-0 h-screen z-50 bg-white border-r border-slate-200/80 flex flex-col shrink-0 overflow-y-auto overflow-x-hidden ${!sidebarOpen && !isMobile ? 'border-r-0' : ''}`}
      >
        {/* Brand Header */}
        <div className="p-5 sm:p-6 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10 shrink-0 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-md shadow-indigo-600/30">
              E
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">ExamBoost</span>
          </Link>
          {isMobile && (
            <button aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} className="p-1.5 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-slate-500" />
            </button>
          )}
        </div>

        {/* Sidebar Nav */}
        <nav className="px-4 py-6 space-y-6 flex-1 overflow-y-auto">
          {menuGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <p className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); if(isMobile) setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all ${
                      activeTab === item.id 
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" 
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <item.icon className={`w-4 h-4 shrink-0 ${activeTab === item.id ? "text-white" : "text-slate-400"}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Screen Layout */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        
        {/* PW Style Gamified App Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between shrink-0">
           
           <div className="flex items-center gap-3">
             <button aria-label="Toggle sidebar" onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-2xl transition-colors">
               <Menu className="w-5 h-5 text-slate-700" />
             </button>

             {/* Target Exam Dropdown Pill */}
             <div className="hidden sm:flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 transition-colors cursor-pointer border border-slate-200">
               <GraduationCap className="w-4 h-4 text-indigo-600" />
               <span>{studentInfo.targetExam}</span>
               <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
             </div>
           </div>

           {/* Gamified Header Badges (PW Style: Streak, XP, Gift, Bell) */}
           <div className="flex items-center gap-2 sm:gap-3">
             
             {/* Flame Streak Badge */}
             <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full text-xs font-black text-amber-700 shadow-sm">
               <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-bounce" />
               <span>{studentInfo.stats.dayStreak}</span>
             </div>

             {/* XP Coins Badge */}
             <div className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full text-xs font-black text-indigo-700 shadow-sm">
               <Star className="w-4 h-4 text-indigo-500 fill-indigo-500" />
               <span>{studentInfo.stats.xp} XP</span>
             </div>

             {/* Gift Bonus Icon */}
             <button aria-label="Daily bonus" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors">
               <Gift className="w-4 h-4 text-purple-600" />
             </button>

             {/* Notifications */}
             <button aria-label="Notifications" onClick={() => setActiveTab('notifications')} className="relative p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors">
               <Bell className="w-4 h-4" />
               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
             </button>

             {/* Profile Avatar */}
             <button onClick={() => setActiveTab('profile')} className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center overflow-hidden border border-indigo-200 ml-1">
               {studentInfo.avatarUrl ? <img src={studentInfo.avatarUrl} alt="" className="w-full h-full object-cover" /> : studentInfo.name.charAt(0)}
             </button>
           </div>
        </header>

        {/* Dynamic Main Body */}
        <main className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 md:p-8 pb-24 lg:pb-8">
           <div className="max-w-7xl mx-auto w-full">
             {renderContent()}
           </div>
        </main>

        {/* Mobile Bottom Navigation Bar (PW App Style UX) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-3 py-2 flex items-center justify-around shadow-2xl">
          {[
            { id: "overview", label: "Study", icon: LayoutDashboard },
            { id: "my-tests", label: "Batches", icon: GraduationCap },
            { id: "free-tests", label: "Free", icon: Zap },
            { id: "performance", label: "Analytics", icon: TrendingUp },
            { id: "profile", label: "Profile", icon: User },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-14 py-1 rounded-2xl transition-all ${
                activeTab === item.id ? "text-indigo-600 font-bold" : "text-slate-400 font-medium"
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? "scale-110" : ""}`} />
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
              {activeTab === item.id && (
                <span className="w-1 h-1 bg-indigo-600 rounded-full mt-0.5"></span>
              )}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
