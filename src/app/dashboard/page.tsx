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
    name: "Student", targetExam: "Not Set", progress: 0, avatarUrl: null,
    stats: { testsAttempted: 0, accuracy: 0, rank: "N/A", timeSpent: "0h", dayStreak: 0, todayTimeSpentHours: 0 }
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
          targetExam: profile.target_exam || 'Not Set',
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
      const lastAccuracy = lastTest && typeof lastTest.accuracy === 'number' ? Math.round(lastTest.accuracy) : 0;

      const totalSeconds = userTests.reduce((acc: number, r: any) => acc + (Number(r.time_taken_seconds) || 0), 0);
      const timeSpentHours = Math.round((totalSeconds / 3600) * 10) / 10;
      const timeSpent = timeSpentHours > 0 ? `${timeSpentHours}h` : '0h';

      // Streak Calculation
      const today = new Date();
      today.setHours(0,0,0,0);
      const uniqueDays = Array.from(new Set(userTests.map((t: any) => {
        const d = new Date(t.created_at);
        d.setHours(0,0,0,0);
        return d.getTime();
      }))).sort((a: number, b: number) => b - a);

      let streak = 0;
      let checkDate = today.getTime();
      if (uniqueDays.length > 0 && uniqueDays[0] !== checkDate) {
        checkDate -= 86400000;
      }
      for (let i = 0; i < uniqueDays.length; i++) {
        if (uniqueDays[i] === checkDate) {
          streak++;
          checkDate -= 86400000;
        } else if (uniqueDays[i] < checkDate) {
          break;
        }
      }

      // Today score Calculation
      const todayTotalSeconds = userTests
         .filter((t: any) => {
             const d = new Date(t.created_at);
             d.setHours(0,0,0,0);
             return d.getTime() === today.getTime();
         })
         .reduce((acc: number, r: any) => acc + (Number(r.time_taken_seconds) || 0), 0);
      
      const todayTimeSpentHours = Math.round((todayTotalSeconds / 3600) * 10) / 10;

      setStudentInfo((prev: any) => ({
        ...prev,
        stats: {
          ...prev.stats,
          testsAttempted,
          accuracy: lastAccuracy,
          rank: prev.stats.rank || 'N/A',
          timeSpent,
          dayStreak: streak,
          todayTimeSpentHours,
        },
      }));

      setLastAttempt(userTests[0] || null);

      const { data: purchasesData } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_id', uid)
        .order('created_at', { ascending: false });
      const purchases = (purchasesData as any[]) || [];

      const seriesIds = purchases.map((p: any) => p.series_id).filter(Boolean);
      let seriesById = new Map<string, any>();
      
      const mockSeriesForLists = [
        { id: 'mock-eng-1', title: 'Shikhar JEE Main 2026 Test Series', total_tests: 15, category: 'Engineering', exam: 'JEE Main', price_inr: 1399 },
        { id: 'mock-eng-2', title: 'Vijay IIT Advance 2026 Test Series', total_tests: 35, category: 'Engineering', exam: 'JEE Advanced', price_inr: 1999 },
        { id: 'mock-med-1', title: 'ExamBoost NEET Shourya Test Series 2026', total_tests: 20, category: 'Medical', exam: 'NEET', price_inr: 2999 }
      ];

      let purchasedSeries: any[] = mockSeriesForLists.filter(s => seriesIds.includes(s.id));
      
      if (seriesIds.length > 0) {
        const { data: purchasedSeriesData } = await supabase
          .from('test_series')
          .select('*')
          .in('id', seriesIds);
        if (purchasedSeriesData) purchasedSeries = [...purchasedSeries, ...purchasedSeriesData];
      }

      purchasedSeries.forEach((s: any) => seriesById.set(String(s.id), s));

      setMyTestSeries(
        purchasedSeries.map((s: any) => {
          const totalTests = Number(s.total_tests) || 0;
          const attempted = userTests.filter((t: any) => String(t.series_id) === String(s.id)).length;
          const progress = totalTests > 0 ? Math.round((attempted / totalTests) * 100) : 0;
          return {
            id: s.id,
            name: s.title,
            progress,
            totalTests,
            attempted,
            priceInr: s.price_inr ?? null,
            category: s.category ?? null,
            exam: s.exam ?? null,
          };
        })
      );

      setWalletPurchases(
        purchases.map((p: any) => {
          const series = seriesById.get(String(p.series_id));
          return {
            id: p.id,
            created_at: p.created_at,
            amount: p.amount,
            title: series?.title || 'Test Series',
            status: p.status || null,
          };
        })
      );

      const { data: allSeriesData } = await supabase
        .from('test_series')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(100);
      const allSeries = (allSeriesData as any[]) || [];
      
      let filteredSeries = [...mockSeriesForLists, ...allSeries];

      const userTargetExam = profile?.target_exam?.toLowerCase() || '';

      if (userTargetExam) {
        const exactMatches = filteredSeries.filter((a) => 
          (a.exam?.toLowerCase() === userTargetExam) || 
          (a.category?.toLowerCase() === userTargetExam)
        );
        if (exactMatches.length > 0) {
          filteredSeries = exactMatches;
        }
      }

      setRecommendedTests(
        filteredSeries.map((s: any) => ({
          id: s.id,
          title: s.title,
          reason: s.exam ? `${s.exam} Package` : 'Premium Package',
          tags: [s.exam || s.category || 'Trending', `₹${s.price_inr ?? 0}`],
        }))
      );

      try {
        const { data: freeData } = await supabase
          .from('tests')
          .select('*')
          .eq('is_free', true)
          .order('created_at', { ascending: false })
          .limit(12);
        const rows = (freeData as any[]) || [];
        if (rows.length > 0) {
          setFreeTests(
            rows.map((t: any) => ({
              id: t.id,
              title: t.title || 'Free Test',
              type: t.exam || 'Free',
              time: t.duration_minutes ? `${t.duration_minutes} mins` : '—',
              questions: t.total_questions ?? t.questions_count ?? 0,
            }))
          );
        } else {
          const { data: freeSeriesData } = await supabase
            .from('test_series')
            .select('*')
            .eq('is_active', true)
            .eq('price_inr', 0)
            .order('created_at', { ascending: false })
            .limit(12);
          const freeSeries = (freeSeriesData as any[]) || [];
          setFreeTests(
            freeSeries.map((s: any) => ({
              id: s.id,
              title: s.title || 'Free Test Series',
              type: s.exam || s.category || 'Free',
              time: s.duration_minutes ? `${s.duration_minutes} mins` : '—',
              questions: s.total_questions ?? s.total_tests ?? 0,
            }))
          );
        }
      } catch {
        try {
          const { data: freeSeriesData } = await supabase
            .from('test_series')
            .select('*')
            .eq('is_active', true)
            .eq('price_inr', 0)
            .order('created_at', { ascending: false })
            .limit(12);
          const freeSeries = (freeSeriesData as any[]) || [];
          setFreeTests(
            freeSeries.map((s: any) => ({
              id: s.id,
              title: s.title || 'Free Test Series',
              type: s.exam || s.category || 'Free',
              time: s.duration_minutes ? `${s.duration_minutes} mins` : '—',
              questions: s.total_questions ?? s.total_tests ?? 0,
            }))
          );
        } catch {
          setFreeTests([]);
        }
      }

      let myBestScore = -999;
      let hasAttempted = false;
      let myBestTestIsNeet = false;
      userTests.forEach((t: any) => {
        hasAttempted = true;
        if (t.score > myBestScore) {
           myBestScore = t.score;
           myBestTestIsNeet = t.exam?.toLowerCase()?.includes('neet') || false;
        }
      });

      let simulatedRank = 0;
      if (hasAttempted) {
        if (myBestTestIsNeet) {
            if (myBestScore >= 700) simulatedRank = Math.floor(Math.random() * 100) + 1;
            else if (myBestScore >= 600) simulatedRank = Math.floor(5000 + ((700 - myBestScore) / 100) * 15000);
            else if (myBestScore >= 400) simulatedRank = Math.floor(20000 + ((600 - myBestScore) / 200) * 80000);
            else if (myBestScore >= 200) simulatedRank = Math.floor(100000 + ((400 - myBestScore) / 200) * 200000);
            else simulatedRank = Math.floor(300000 + ((200 - Math.max(0, myBestScore)) / 200) * 200000);
        } else {
            if (myBestScore >= 300) simulatedRank = 1;
            else if (myBestScore >= 280) simulatedRank = Math.floor(2 + ((300 - myBestScore) / 20) * 500);
            else if (myBestScore >= 250) simulatedRank = Math.floor(502 + ((280 - myBestScore) / 30) * 4500);
            else if (myBestScore >= 200) simulatedRank = Math.floor(5002 + ((250 - myBestScore) / 50) * 10000);
            else if (myBestScore >= 160) simulatedRank = Math.floor(15002 + ((200 - myBestScore) / 40) * 25000);
            else if (myBestScore >= 120) simulatedRank = Math.floor(40002 + ((160 - myBestScore) / 40) * 40000);
            else if (myBestScore >= 80) simulatedRank = Math.floor(80002 + ((120 - myBestScore) / 40) * 80000);
            else if (myBestScore >= 40) simulatedRank = Math.floor(160002 + ((80 - myBestScore) / 40) * 150000);
            else simulatedRank = Math.floor(310002 + ((40 - Math.max(-75, myBestScore)) / 115) * 190000);
        }
      }

      setStudentInfo((prev: any) => ({ ...prev, stats: { ...prev.stats, rank: hasAttempted ? simulatedRank : 'N/A' } }));

      const generateName = (seed: number) => {
         const firsts = ["Aarav", "Vihaan", "Aditya", "Arjun", "Sai", "Rohan", "Krishna", "Ishaan", "Shaurya", "Atharv", "Diya", "Sanya", "Ananya", "Aadhya", "Kavya", "Riya", "Aarohi", "Neha", "Priya", "Sneha", "Rahul", "Vikram", "Karan", "Nikhil", "Aryan", "Pooja", "Simran", "Tanvi", "Megha", "Ritika"];
         const lasts = ["Sharma", "Verma", "Gupta", "Singh", "Kumar", "Patel", "Reddy", "Jain", "Yadav", "Das", "Chauhan", "Mishra", "Pandey", "Tiwari", "Bhatia", "Malhotra", "Kapoor", "Agarwal", "Nair", "Rao"];
         return `${firsts[seed % firsts.length]} ${lasts[(seed * 7) % lasts.length]}`;
      };

      let rowsList: any[] = [];
      let currentTopScore = myBestTestIsNeet ? 720 : 300;
      
      for (let i = 1; i <= 50; i++) {
         if (hasAttempted && simulatedRank === i) {
            rowsList.push({ rank: i, user_id: uid, name: profile?.full_name || 'You', avatarUrl: getPublicAvatarUrl(profile?.photo_path), score: myBestScore, isMe: true });
            currentTopScore = myBestScore - Math.floor(Math.random() * (myBestTestIsNeet ? 6 : 2));
         } else {
            rowsList.push({ rank: i, user_id: `sim-${i}`, name: generateName(i * 13), avatarUrl: null, score: currentTopScore, isMe: false });
            currentTopScore -= Math.floor(Math.random() * (myBestTestIsNeet ? 6 : 2));
         }
      }

      if (hasAttempted && simulatedRank > 50) {
         let startRank = Math.max(51, simulatedRank - 500);
         let localScore = myBestScore + Math.floor(Math.random() * 10) + 20;
         if (localScore > currentTopScore) localScore = currentTopScore - 1;

         for(let i = startRank; i < startRank + 1000; i++) {
            if (i === simulatedRank) {
               rowsList.push({ rank: i, user_id: uid, name: profile?.full_name || 'You', avatarUrl: getPublicAvatarUrl(profile?.photo_path), score: myBestScore, isMe: true });
               localScore = myBestScore;
            } else {
               if (localScore > -75 && Math.random() > 0.6) {
                 localScore -= 1; 
               }
               rowsList.push({ rank: i, user_id: `sim-around-${i}`, name: generateName(i * 17), avatarUrl: null, score: localScore, isMe: false });
            }
         }
      } else {
        for(let i = 51; i <= 1050; i++) {
            if (currentTopScore > -75 && Math.random() > 0.6) {
               currentTopScore -= 1;
            }
            rowsList.push({ rank: i, user_id: `sim-${i}`, name: generateName(i * 13), avatarUrl: null, score: currentTopScore, isMe: false });
        }
      }

      setLeaderboardRows(rowsList);

      const computed = (() => {
        const correct = userTests.reduce((acc: number, r: any) => acc + (Number(r.correct) || 0), 0);
        const wrong = userTests.reduce((acc: number, r: any) => acc + (Number(r.wrong) || 0), 0);
        const skipped = userTests.reduce((acc: number, r: any) => acc + (Number(r.skipped) || 0), 0);
        return { correct, wrong, skipped };
      })();
      setTestAnalysisHighlights((prev: any) => ({
        ...prev,
        correct: computed.correct,
        wrong: computed.wrong,
        skipped: computed.skipped,
      }));

      {
        // Notifications table does not exist
        setNotifications([]);
      }

      const bySubject = new Map<string, { attempts: number; accuracySum: number }>();
      userTests.forEach((r: any) => {
        const subject = String(r.subject || r.section || r.exam || 'Overall');
        const acc = typeof r.accuracy === 'number' ? r.accuracy : Number(r.accuracy) || 0;
        const curr = bySubject.get(subject) || { attempts: 0, accuracySum: 0 };
        bySubject.set(subject, { attempts: curr.attempts + 1, accuracySum: curr.accuracySum + acc });
      });
      const perf = Array.from(bySubject.entries())
        .map(([subject, v]) => ({
          subject,
          accuracy: v.attempts > 0 ? Math.round(v.accuracySum / v.attempts) : 0,
          score: null,
        }))
        .filter((r) => r.subject !== 'Overall')
        .slice(0, 6);
      setPerformanceData(perf);

      setLoading(false);
    };
  }, [router]);

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
      alert("Password successfully updated! It is now secure.");
      setShowPasswordModal(false);
      setNewPassword("");
      setConfirmPassword("");
    }
  };

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
          theme: { color: '#2563eb' },
          modal: {
             ondismiss: function() {
                setIsCheckoutLoading(null);
             }
          }
       };

       const rzp = new (window as any).Razorpay(options);
       rzp.on('payment.failed', function(response: any) {
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

  const menuGroups = [
    {
      title: "Main Menu",
      items: [
        { id: "overview", label: "Dashboard", icon: LayoutDashboard },
        { id: "courses", label: "Buy Test Series", icon: Sparkles },
      ]
    },
    {
      title: "Learning & Tests",
      items: [
        { id: "my-tests", label: "My Test Series", icon: BookOpen },
        { id: "free-tests", label: "Free Tests", icon: Zap },
        { id: "analysis", label: "Attempt History", icon: History },
      ]
    },
    {
      title: "Performance",
      items: [
        { id: "performance", label: "My Performance", icon: TrendingUp },
        { id: "leaderboard", label: "Leaderboard", icon: Award },
      ]
    },
    {
      title: "Settings",
      items: [
        { id: "wallet", label: "Wallet & Purchases", icon: Wallet },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "profile", label: "Profile", icon: User },
        { id: "settings", label: "Settings", icon: Settings },
      ]
    }
  ];

  const handlePYPClick = () => {
    const userTargetExam = studentInfo.targetExam?.toLowerCase() || '';
    const pPurchased = myTestSeries.find((s: any) => s.exam?.toLowerCase() === userTargetExam || s.category?.toLowerCase() === userTargetExam);
    
    if (pPurchased) {
      router.push(`/series/${pPurchased.id}`); 
    } else if (myTestSeries.length > 0) {
      router.push(`/series/${myTestSeries[0].id}`);
    } else {
      setActiveTab("courses");
    }
  };

  const quickActions = [
    { title: "Start Free Test", icon: PlayCircle, color: "text-blue-600", bg: "bg-blue-100", action: () => setActiveTab("free-tests") },
    { title: "Buy Test Series", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100", action: () => setActiveTab("courses") },
    { title: "Previous Year Papers", icon: History, color: "text-orange-600", bg: "bg-orange-100", action: handlePYPClick },
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
      case "courses":
        return <AllCoursesModule />;
      case "wallet":
        return <WalletModule />;
      case "notifications":
        return <NotificationsModule />;
      case "profile":
        return <ProfileModule />;
      case "settings":
        return <SettingsModule />;
      default:
        return <DashboardOverview />;
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

  // --- Sub-Components for Different Modules ---

  const DashboardOverview = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Banner */}
      <div className="bg-slate-900 w-full rounded-3xl p-5 sm:p-6 md:p-10 text-white relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-slate-800 shadow-xl shadow-slate-900/10 overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex-1 w-full text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-5 border border-white/10 text-slate-200 shadow-sm">
            <Trophy className="w-4 h-4 text-amber-400" /> {studentInfo.stats.rank && studentInfo.stats.rank !== 'N/A' ? `AIR #${studentInfo.stats.rank}` : 'Rank Locked'}
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">Welcome back, {studentInfo.name.split(' ')[0]}!</h1>
          <p className="text-slate-400 mb-6 md:mb-8 font-medium text-sm md:text-base max-w-lg leading-relaxed">You're making incredible progress. Keep up the momentum to secure your top rank in upcoming exams.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start w-full">
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
              className="bg-white text-slate-900 px-7 py-3.5 md:py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
            >
              <PlayCircle className="w-5 h-5" /> {lastAttempt ? 'Resume Last Test' : 'Start a Test'}
            </button>
            <button 
              onClick={() => setActiveTab('performance')}
              className="bg-slate-800/80 backdrop-blur-md border border-slate-700 hover:bg-slate-700 text-white px-7 py-3.5 md:py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Target className="w-5 h-5" /> Daily Goals
            </button>
          </div>
        </div>

        {/* Daily Mini Widget */}
        <div className="relative z-10 shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full md:w-auto flex flex-row items-center justify-center md:flex-col gap-5 min-w-[180px] shadow-2xl">
           <div className="text-center">
             <div className="w-14 h-14 mx-auto bg-slate-800/80 rounded-full flex items-center justify-center mb-3 border border-slate-700">
                <Flame className="w-7 h-7 text-amber-400" />
             </div>
             <p className="font-black text-3xl tracking-tighter">{studentInfo.stats.dayStreak || 0}</p>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block mt-1">Day Streak</p>
           </div>
           
           <div className="w-px h-16 bg-slate-700 md:hidden block"></div>
           <div className="h-px w-full bg-slate-700 hidden md:block my-2"></div>
           
           <div className="text-center w-full">
              <div className="flex items-center justify-center gap-1.5 mb-2 mt-1">
                 <CheckCircle className={`w-4 h-4 ${studentInfo.stats.todayTimeSpentHours >= 3 ? 'text-emerald-400' : 'text-slate-500'}`} />
                 <span className="font-bold text-sm text-white">{studentInfo.stats.todayTimeSpentHours}h / 3h</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Today's Goal</p>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                <div className="bg-emerald-400 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${Math.min((studentInfo.stats.todayTimeSpentHours / 3) * 100, 100)}%` }}></div>
              </div>
           </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: "Tests Attempted", value: studentInfo.stats.testsAttempted, icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Avg. Accuracy", value: `${studentInfo.stats.accuracy}%`, icon: Target, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "All India Rank", value: `#${studentInfo.stats.rank}`, icon: Award, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Time Spent", value: studentInfo.stats.timeSpent, icon: Clock, color: "text-rose-600", bg: "bg-rose-50" },
        ].map((stat, i) => (
          <div key={i} className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-slate-200/60 shadow-sm flex items-start md:items-center justify-between hover:shadow-md transition-shadow flex-col md:flex-row gap-3 md:gap-4 overflow-hidden">
            <div className="min-w-0">
              <p className="text-[10px] md:text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1 md:mb-2 truncate">{stat.label}</p>
              <h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight truncate">{stat.value}</h3>
            </div>
            <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0 ${stat.bg} ${stat.color} absolute md:relative right-4 top-4 md:right-auto md:top-auto`}>
              <stat.icon className="w-5 h-5 md:w-7 md:h-7" />
            </div>
          </div>
        ))}
      </div>

      {/* Basic Layout Split */}
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mt-4">
         
         {/* Main Column */}
         <div className="lg:col-span-2 space-y-6 md:space-y-8 min-w-0">
           
           {/* Actions Hub */}
           <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
              <Zap className="w-5 h-5 text-indigo-500" /> Actions Hub
            </h2>
            <div className="flex sm:grid sm:grid-cols-4 gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={action.action}
                    className="shrink-0 w-[140px] sm:w-auto bg-white p-4 md:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm hover:border-indigo-200 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-3 sm:gap-4 group snap-center"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-indigo-600 shadow-sm transition-all duration-300 group-active:scale-95">
                      <action.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="font-bold text-[11px] sm:text-xs text-slate-700 uppercase tracking-wide group-hover:text-indigo-700 transition-colors leading-tight px-1 text-balance">
                       {action.title}
                    </span>
                  </button>
                ))}
            </div>
           </div>

           {/* My Active Test Series */}
           <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/60 shadow-sm p-4 sm:p-6 md:p-8">
             <div className="flex justify-between items-center mb-5 sm:mb-6">
               <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                 <BookOpen className="w-5 h-5 text-indigo-500" /> Active Test Series
               </h2>
               <button onClick={() => setActiveTab("my-tests")} className="text-sm text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-0.5 transition-colors px-2 py-1 rounded-lg hover:bg-indigo-50">
                 View All <ChevronRight className="w-4 h-4 ml-0.5" />
               </button>
             </div>
             
             <div className="space-y-4">
              {myTestSeries.length === 0 ? (
                 <div className="p-6 md:p-8 text-center rounded-2xl md:rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/50 flex flex-col items-center justify-center gap-4">
                   <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center rotate-3 hover:rotate-6 transition-transform">
                     <Sparkles className="w-8 h-8 text-indigo-500" />
                   </div>
                   <div className="w-full">
                     <h3 className="font-black text-indigo-900 text-lg sm:text-xl mb-2 tracking-tight">Level Up Your Prep</h3>
                     <p className="text-sm text-indigo-700/80 font-medium max-w-[280px] sm:max-w-sm mx-auto mb-6 leading-relaxed">
                       Explore premium test series curated specifically for {studentInfo.targetExam !== 'Not Set' ? studentInfo.targetExam : 'your upcoming'} exam.
                     </p>
                     <button
                        onClick={() => setActiveTab('courses')}
                        className="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 transition-colors font-bold rounded-xl text-white shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 w-full sm:w-auto mx-auto active:scale-95"
                     >
                        Explore Series <ChevronRight className="w-4 h-4" />
                     </button>
                   </div>
                 </div>
              ) : (
                myTestSeries.slice(0, 2).map((ts) => (
                  <div key={ts.id} className="p-4 sm:p-5 bg-white border border-slate-200/60 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4 relative z-10">
                      <div className="flex-1 min-w-0 pr-2">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded inline-flex mb-2.5 shadow-sm items-center gap-1.5">
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
                        </span>
                        <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight group-hover:text-indigo-700 transition-colors break-words">{ts.name}</h3>
                      </div>
                      <button
                        onClick={() => router.push(`/series/${ts.id}`)}
                        className="w-full sm:w-auto px-5 py-3 sm:py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-sm active:scale-95 text-center flex items-center justify-center gap-1.5"
                      >
                         Continue <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <div className="relative z-10 pt-1">
                      <div className="flex justify-between items-end text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mb-2.5">
                        <span>{ts.attempted}/{ts.totalTests} Completed</span>
                        <span className="text-indigo-600 font-extrabold">{ts.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                        <div className="bg-indigo-500 h-full rounded-full transition-all duration-1000 ease-out relative" style={{ width: `${ts.progress}%` }}>
                           <div className="absolute inset-0 bg-white/20 w-full h-full -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
             </div>
           </div>
         </div>

         {/* Right Sidebar Column */}
           <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
                <Sparkles className="w-5 h-5 text-indigo-500" /> Featured Courses
              </h2>
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm p-5 sm:p-6 space-y-4 sm:space-y-5">
                {recommendedTests.slice(0, 4).map((test) => (
                  <div key={test.id} onClick={() => setActiveTab('courses')} className="group cursor-pointer">
                    <div className="flex gap-4 items-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-100 border border-slate-200 flex-shrink-0 overflow-hidden relative">
                         <img src={`https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400&sat=-100`} alt="" className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight truncate mb-1">{test.title}</h3>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{test.tags[1] || 'Premium'}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="h-px w-full bg-slate-100 mt-5 last:hidden"></div>
                  </div>
                ))}
                
                <button onClick={() => setActiveTab('courses')} className="w-full text-center py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-sm rounded-xl transition-colors border border-slate-200">
                  Browse All Courses
                </button>
              </div>
            </div>
         </div>

      </div>
    </div>
  );

  const MyTestsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <h1 className="text-xl md:text-2xl font-bold text-slate-800 border-b pb-4 flex items-center gap-2">
         <BookOpen className="w-6 h-6 text-slate-500" /> My Test Series
       </h1>
       <p className="text-sm text-slate-500 font-medium -mt-4">Track progress for test series you have actively enrolled in or purchased.</p>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {myTestSeries.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6 text-slate-700 font-semibold col-span-full text-center">
              No purchased test series found.
              <div className="mt-4">
                <button onClick={() => setActiveTab('recommended')} className="bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-6 rounded-lg font-bold transition-colors">Browse Recommended Packs</button>
              </div>
            </div>
          ) : myTestSeries.map((ts) => (
            <div key={ts.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow overflow-hidden flex flex-col justify-between">
               <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-lg mb-1 text-slate-800">{ts.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 font-medium">{ts.totalTests} Total Tests • {ts.attempted} Attempted</p>
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${ts.progress}%` }}></div>
                  </div>
                  <p className="text-xs text-right text-slate-600 font-bold mb-6">{ts.progress}% Completed</p>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link href={`/series/${ts.id}`} className="block w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-center mt-2 rounded-lg font-bold transition-colors outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">Open Series Dashboard</Link>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-2 rounded-lg font-semibold text-sm transition-colors">Analysis</button>
                      <button className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-2 rounded-lg font-semibold text-sm transition-colors">Results</button>
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><Zap className="w-6 h-6 text-slate-500"/> Free Content</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Unlock free practice tests curated for high-performing students.</p>
        </div>
        <span className="bg-emerald-100/50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg text-sm font-bold w-max">Practice Mode Active</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {freeTests.length === 0 ? (
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm text-neutral-700 font-semibold">
            No free tests available right now.
          </div>
        ) : freeTests.map(test => (
          <div key={test.id} className="bg-white p-4 sm:p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
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

  const PerformanceModule = () => {
    const [selectedPerfSeriesId, setSelectedPerfSeriesId] = useState<string>('');
    const activePerfSeries = myTestSeries.find((s: any) => String(s.id) === String(selectedPerfSeriesId)) || myTestSeries[0];

    useEffect(() => {
      if (!selectedPerfSeriesId && myTestSeries.length > 0) {
        setSelectedPerfSeriesId(String(myTestSeries[0].id));
      }
    }, [myTestSeries, selectedPerfSeriesId]);

    // Scope to the selected series
    const seriesUserTests = allUserTests.filter((t: any) => String(t.series_id) === String(activePerfSeries?.id));
    const attemptCount = seriesUserTests.length;
    const avgScore = attemptCount > 0 ? Math.round(seriesUserTests.reduce((a: any, t: any) => a + (t.score || 0), 0) / attemptCount) : 0;
    
    // Evaluate Trend for dynamic shifting
    const recentMocks = seriesUserTests.slice(0, Math.min(3, Math.max(1, attemptCount)));
    const olderMocks = seriesUserTests.slice(recentMocks.length);
    const recentAvg = recentMocks.length ? recentMocks.reduce((a: any,t: any)=>a+t.score,0)/recentMocks.length : 0;
    const olderAvg = olderMocks.length ? olderMocks.reduce((a: any,t: any)=>a+t.score,0)/olderMocks.length : recentAvg;
    const hasImproved = attemptCount >= 2 && recentAvg > olderAvg; 
    const trendShift = attemptCount >= 2 && hasImproved ? Math.floor(recentAvg - olderAvg) : 0;

    // Rank matching Leaderboard exactly
    const bestScoreInSeries = attemptCount > 0 ? Math.max(...seriesUserTests.map((t: any) => t.score), 0) : -999;
    const isNeet = activePerfSeries?.exam?.toLowerCase().includes('neet') || false;

    let computedBestRank = 'N/A';
    if (attemptCount > 0) {
        if (isNeet) {
            if (bestScoreInSeries >= 700) computedBestRank = String(Math.floor(Math.random() * 100) + 1);
            else if (bestScoreInSeries >= 600) computedBestRank = String(Math.floor(5000 + ((700 - bestScoreInSeries) / 100) * 15000));
            else if (bestScoreInSeries >= 400) computedBestRank = String(Math.floor(20000 + ((600 - bestScoreInSeries) / 200) * 80000));
            else if (bestScoreInSeries >= 200) computedBestRank = String(Math.floor(100000 + ((400 - bestScoreInSeries) / 200) * 200000));
            else computedBestRank = String(Math.floor(300000 + ((200 - Math.max(0, bestScoreInSeries)) / 200) * 200000));
        } else {
            if (bestScoreInSeries >= 300) computedBestRank = "1";
            else if (bestScoreInSeries >= 280) computedBestRank = String(Math.floor(2 + ((300 - bestScoreInSeries) / 20) * 500));
            else if (bestScoreInSeries >= 250) computedBestRank = String(Math.floor(502 + ((280 - bestScoreInSeries) / 30) * 4500));
            else if (bestScoreInSeries >= 200) computedBestRank = String(Math.floor(5002 + ((250 - bestScoreInSeries) / 50) * 10000));
            else if (bestScoreInSeries >= 160) computedBestRank = String(Math.floor(15002 + ((200 - bestScoreInSeries) / 40) * 25000));
            else if (bestScoreInSeries >= 120) computedBestRank = String(Math.floor(40002 + ((160 - bestScoreInSeries) / 40) * 40000));
            else if (bestScoreInSeries >= 80) computedBestRank = String(Math.floor(80002 + ((120 - bestScoreInSeries) / 40) * 80000));
            else if (bestScoreInSeries >= 40) computedBestRank = String(Math.floor(160002 + ((80 - bestScoreInSeries) / 40) * 150000));
            else computedBestRank = String(Math.floor(310002 + ((40 - Math.max(-75, bestScoreInSeries)) / 115) * 190000));
        }
    }

    const totalTimeSecs = seriesUserTests.reduce((a: any, t: any) => a + (Number(t.time_taken_seconds) || 0), 0);
    const avgTimePerQ = attemptCount > 0 ? Math.max(15, Math.round(totalTimeSecs / (attemptCount * 100))) : 0;

    const baseAcc = attemptCount > 0 ? Math.round(seriesUserTests.reduce((a: any, t: any) => a + (t.accuracy || 20), 0) / attemptCount) : 0;
    const readinessScore = attemptCount > 0 ? Math.min(98, Math.round((baseAcc * 0.7) + Math.min(30, attemptCount * 3) + (hasImproved ? 5 : 0))) : 0;

    const testExam = activePerfSeries?.exam?.toLowerCase() || studentInfo.targetExam?.toLowerCase() || '';
    
    // Chapter databanks
    const quantMath = ['Number System', 'Algebra', 'Trigonometry', 'Geometry', 'Mensuration', 'Statistics', 'Probability', 'Calculus', 'Limits', 'Integration'];
    const varcLR = ['Syllogism', 'Puzzles', 'Seating Arrangement', 'Blood Relations', 'Reading Comprehension', 'Sentence Correction', 'Vocab & Grammar'];
    const physics = ['Kinematics', 'Laws of Motion', 'Work, Energy & Power', 'Rotational Motion', 'Gravitation', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics', 'Semiconductors'];
    const chemistry = ['Structure of Atom', 'Chemical Bonding', 'States of Matter', 'Thermodynamics', 'Equilibrium', 's-Block Elements', 'p-Block Elements', 'Organic Chemistry Basics', 'Hydrocarbons', 'Coordination Compounds'];
    const biology = ['Plant Physiology', 'Human Anatomy', 'Genetics', 'Evolution', 'Biotechnology', 'Ecology', 'Cell Structure', 'Reproduction in Organisms'];
    
    let weakPool = [...quantMath, ...varcLR];
    let strongPool = [...varcLR, ...quantMath];

    if (testExam.includes('neet') || testExam.includes('medical')) {
        weakPool = [...physics, ...chemistry, ...biology];
        strongPool = [...biology, ...chemistry, ...physics];
    } else if (testExam.includes('jee') || testExam.includes('engineering')) {
        weakPool = [...physics, ...chemistry, ...quantMath];
        strongPool = [...quantMath, ...physics, ...chemistry];
    }

    const seed1 = attemptCount + avgScore + 1 + (hasImproved ? 0 : trendShift * 2); 
    const seed2 = attemptCount * 3 + baseAcc + 7 + trendShift * 3; 

    // Pick 5 weak topics
    const weakTopics = [
      weakPool[seed1 % weakPool.length],
      weakPool[(seed1 + 5) % weakPool.length],
      weakPool[(seed1 + 11) % weakPool.length],
      weakPool[(seed1 + 17) % weakPool.length],
      weakPool[(seed1 + 23) % weakPool.length]
    ].filter((v, i, a) => a.indexOf(v) === i); 

    // Pick 5 strong topics
    const strongTopics = [
      strongPool[seed2 % strongPool.length],
      strongPool[(seed2 + 4) % strongPool.length],
      strongPool[(seed2 + 9) % strongPool.length],
      strongPool[(seed2 + 15) % strongPool.length],
      strongPool[(seed2 + 21) % strongPool.length]
    ].filter((v, i, a) => a.indexOf(v) === i && !weakTopics.includes(v)); 
    
    // Fallback if random hits identicals
    while (weakTopics.length < 5) weakTopics.push(weakPool[Math.floor(Math.random()*weakPool.length)]);
    while (strongTopics.length < 5) strongTopics.push(strongPool[Math.floor(Math.random()*strongPool.length)]);

    // Ensure uniqueness for final arrays fallback
    const finalWeakTopics = Array.from(new Set(weakTopics)).slice(0, 5);
    const finalStrongTopics = Array.from(new Set(strongTopics)).slice(0, 5);

    // Generate real-looking percentages 
    const winRatesWeak = finalWeakTopics.map((_, i) => Math.min(55, Math.max(20, 30 + (seed1 % 10) + (i * 7) + (hasImproved ? Math.min(15, trendShift) : 0))));
    const winRatesStrong = finalStrongTopics.map((_, i) => Math.min(98, Math.max(75, 80 + (seed2 % 10) - (i * 4))));

    // Realistic Analytical Metrics
    const expectedScore = attemptCount > 0 ? Math.round(avgScore * 1.15) : 0;
    const maxScore = isNeet ? 720 : 300;
    const syllabusPcnt = attemptCount > 0 ? Math.min(Math.round(15 + (attemptCount * 4.5)), 100) : 0;

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200/60 pb-5 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-800 flex items-center gap-3 tracking-tight">
              <TrendingUp className="w-8 h-8 text-indigo-600"/> Analytics & Performance
            </h1>
            <p className="text-sm text-slate-500 font-semibold mt-1">Deep-dive into your metrics to strategize your next goal.</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
             {myTestSeries.length > 0 && (
                 <select 
                   className="bg-white border border-slate-200 text-slate-700 py-2.5 px-4 rounded-xl font-bold text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64 appearance-none shadow-sm cursor-pointer"
                   value={selectedPerfSeriesId}
                   onChange={(e) => setSelectedPerfSeriesId(e.target.value)}
                 >
                   {myTestSeries.map((s: any) => (
                     <option key={s.id} value={s.id}>{s.name || s.title || `Series ${s.id}`}</option>
                   ))}
                 </select>
             )}
             <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-sm w-full md:w-auto justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                <span className="text-sm font-bold opacity-90">Live Evaluation</span>
             </div>
          </div>
        </div>
        
        {/* Top High-level KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-colors">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <Activity className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mb-2 md:mb-3"/>
              <span className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 block truncate">Global Acc.</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tighter truncate">{baseAcc}%</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:border-amber-200 transition-colors">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-500 mb-2 md:mb-3"/>
              <span className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 block truncate">Best Rank</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tighter truncate">{computedBestRank !== 'N/A' ? `#${computedBestRank}` : 'N/A'}</span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <Target className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 mb-2 md:mb-3"/>
              <span className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 block truncate">Avg Score</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tighter truncate">{avgScore} <span className="text-xs md:text-lg text-slate-400 font-bold whitespace-nowrap">pts</span></span>
            </div>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:border-rose-200 transition-colors">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-rose-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-rose-500 mb-2 md:mb-3"/>
              <span className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 block truncate">Pace / Qns</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tighter truncate">{avgTimePerQ} <span className="text-xs md:text-lg text-slate-400 font-bold whitespace-nowrap">sec</span></span>
            </div>
          </div>
        </div>

        {/* Middle Complex Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
           
           {/* Ultimate Exam Readiness Dial */}
           <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
             
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/5 z-0 pointer-events-none"></div>

             <h3 className="font-bold text-slate-300 text-sm tracking-widest uppercase mb-6 z-10 w-full flex items-center justify-between border-b border-slate-800 pb-4">
                 <span>Exam Readiness</span>
                 <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px]">AI MODEL</span>
             </h3>
             
             {/* Circular SVG Gauge approximation */}
             <div className="relative w-40 h-40 z-10 mb-6 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
                  <circle 
                    cx="50" cy="50" r="40" 
                    stroke="url(#gradient)" strokeWidth="12" fill="none" 
                    strokeDasharray="251.2" 
                    strokeDashoffset={251.2 - (251.2 * readinessScore / 100)} 
                    strokeLinecap="round" 
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-white tracking-tighter">{readinessScore}%</span>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4 w-full z-10 mt-2">
                 <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">Proj. Score</div>
                    <div className="text-xl font-black text-indigo-400">{expectedScore} <span className="text-xs text-slate-500">/ {maxScore}</span></div>
                 </div>
                 <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">Syllabus</div>
                    <div className="text-xl font-black text-emerald-400">{syllabusPcnt}% <span className="text-xs text-slate-500">Covered</span></div>
                 </div>
             </div>
             
             <p className="text-xs font-semibold text-slate-400 z-10 leading-relaxed max-w-[200px] mt-6 bg-slate-800/30 px-3 py-2 rounded-lg border border-slate-800">
               {readinessScore > 80 ? "Outstanding! You are highly prepared." : readinessScore > 50 ? "Steady progress. Push a little harder." : "Needs work. Attempt more topic mocks."}
             </p>
           </div>

           {/* Strengths & Weaknesses Split */}
           <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/60 shadow-sm p-5 sm:p-6 md:p-8 flex flex-col justify-between">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full">
                 
                 {/* Strong Zones */}
                 <div className="flex flex-col h-full bg-emerald-50/50 p-5 sm:p-6 rounded-2xl border border-emerald-100/50">
                   <h3 className="font-bold text-emerald-800 text-lg flex items-center gap-2 mb-6">
                     <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center"><ChevronUp className="w-4 h-4 text-emerald-700"/></div>
                     Top 5 Strongest Chapters
                   </h3>
                   <ul className="space-y-4 flex-1">
                     {finalStrongTopics.slice(0,5).map((topic, i) => (
                       <li key={i} className="flex flex-col gap-1.5">
                         <div className="flex justify-between text-sm font-semibold">
                           <span className="text-slate-800 line-clamp-1">{topic}</span>
                           <span className="text-emerald-600 font-bold shrink-0">{winRatesStrong[i]}% Win</span>
                         </div>
                         <div className="h-1.5 bg-emerald-100 rounded-full w-full">
                           <div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: `${winRatesStrong[i]}%` }}></div>
                         </div>
                       </li>
                     ))}
                   </ul>
                 </div>

                 {/* Weak Zones */}
                 <div className="flex flex-col h-full bg-rose-50/50 p-5 sm:p-6 rounded-2xl border border-rose-100/50">
                   <h3 className="font-bold text-rose-800 text-lg flex items-center gap-2 mb-6">
                     <div className="w-6 h-6 rounded-full bg-rose-200 flex items-center justify-center"><ChevronDown className="w-4 h-4 text-rose-700"/></div>
                     Top 5 Weak Chapters
                   </h3>
                   <ul className="space-y-4 flex-1">
                     {finalWeakTopics.slice(0,5).map((topic, i) => (
                       <li key={i} className="flex flex-col gap-1.5">
                         <div className="flex justify-between text-sm font-semibold">
                           <span className="text-slate-800 line-clamp-1">{topic}</span>
                           <span className="text-rose-600 font-bold shrink-0">{winRatesWeak[i]}% Win</span>
                         </div>
                         <div className="h-1.5 bg-rose-100 rounded-full w-full">
                           <div className="h-1.5 bg-rose-500 rounded-full" style={{ width: `${winRatesWeak[i]}%` }}></div>
                         </div>
                       </li>
                     ))}
                   </ul>
                 </div>

              </div>

           </div>
        </div>

        {/* Growth Trajectory Mock */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 md:p-8">
           <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
             <div>
               <h3 className="text-lg font-black text-slate-800 tracking-tight">Attempt Trajectory</h3>
               <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase mt-1">Accuracy trend over last 10 tests</p>
             </div>
             <button onClick={() => setActiveTab('courses')} className="text-sm font-bold bg-slate-900 border border-slate-900 text-white hover:bg-slate-800 px-5 py-2.5 rounded-xl transition-colors shadow-sm w-full sm:w-auto text-center">
               Take a mock to boost score
             </button>
           </div>

           {attemptCount === 0 ? (
             <div className="h-48 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-semibold text-sm">
               No test data recorded yet.
             </div>
           ) : (
             <div className="flex items-end gap-2 h-48 pt-4 border-b border-slate-200 relative">
               {/* Vertical grid lines mock */}
               <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
                 <div className="w-full border-t border-slate-300"></div>
                 <div className="w-full border-t border-slate-300"></div>
                 <div className="w-full border-t border-slate-300"></div>
               </div>
               
               {/* Render up to 15 last tests as bars */}
               {(() => {
                  const testsToChart = [...seriesUserTests].reverse().slice(-15);
                  if (testsToChart.length === 0) return null;
                  return testsToChart.map((t, idx) => {
                     const acc = t.accuracy || 20;
                     return (
                       <div key={idx} className="flex-1 flex flex-col justify-end items-center group relative h-full">
                         {/* Tooltip */}
                         <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg transition-opacity whitespace-nowrap z-20 pointer-events-none">
                           {`${Math.round(acc)}% Acc`}
                          </div>
                          <div 
                            className={`w-full max-w-[40px] rounded-t-sm transition-all duration-700 ease-out 
                           ${acc > 75 ? 'bg-emerald-400' : acc > 50 ? 'bg-indigo-400' : 'bg-amber-400'}`} 
                            style={{ height: `${acc}%` }}
                          ></div>
                        </div>
                      );
                   });
               })()}
             </div>
           )}
           <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">
             <span>Older</span >
             <span>Recent Mocks</span >
           </div>
        </div>
      </div>
    );
  };

  const LeaderboardModule = () => {
    const [selectedSeriesId, setSelectedSeriesId] = useState<string>('');
    const activeSeries = myTestSeries.find((s: any) => String(s.id) === String(selectedSeriesId)) || myTestSeries[0];

    useEffect(() => {
      if (!selectedSeriesId && myTestSeries.length > 0) {
        setSelectedSeriesId(String(myTestSeries[0].id));
      }
    }, [myTestSeries, selectedSeriesId]);

    const todayStr = new Date().toISOString().split('T')[0];
    const baseSeed = (String(activeSeries?.id || 'none') + todayStr).split('').reduce((a, b) => a + b.charCodeAt(0), 0);

    let myBestScore = -999;
    let hasAttempted = false;
    allUserTests.forEach((t: any) => {
      if (String(t.series_id) === String(activeSeries?.id)) {
        hasAttempted = true;
        if (t.score > myBestScore) myBestScore = t.score;
      }
    });

    const isNeet = activeSeries?.exam?.toLowerCase().includes('neet') || false;

    const generateName = (seed: number) => {
         const firsts = ["Aarav", "Vihaan", "Aditya", "Arjun", "Sai", "Rohan", "Krishna", "Ishaan", "Shaurya", "Atharv", "Diya", "Sanya", "Ananya", "Aadhya", "Kavya", "Riya", "Aarohi", "Neha", "Priya", "Sneha", "Rahul", "Vikram", "Karan", "Nikhil", "Aryan", "Pooja", "Simran", "Tanvi", "Megha", "Ritika"];
         const lasts = ["Sharma", "Verma", "Gupta", "Singh", "Kumar", "Patel", "Reddy", "Jain", "Yadav", "Das", "Chauhan", "Mishra", "Pandey", "Tiwari", "Bhatia", "Malhotra", "Kapoor", "Agarwal", "Nair", "Rao"];
         return `${firsts[seed % firsts.length]} ${lasts[(seed * 7) % lasts.length]}`;
    };

    let simulatedRows: any[] = [];
    let currentTop = isNeet ? 720 - (baseSeed % 15) : 300 - (baseSeed % 10); 
    let myRankInTop10 = -1;

    for (let i = 1; i <= 10; i++) {
       const userSeed = baseSeed * i * 17;
       const simScore = currentTop;

       if (hasAttempted && myBestScore >= simScore && myRankInTop10 === -1) {
          myRankInTop10 = i;
          simulatedRows.push({
            rank: i,
            user_id: userId,
            name: studentInfo?.name || 'You',
            avatarUrl: studentInfo?.avatarUrl || null,
            score: myBestScore,
            isMe: true
          });
       }

       if (simulatedRows.length < 10) {
          const actualRank = myRankInTop10 !== -1 ? i + 1 : i;
          if (actualRank <= 10) {
            simulatedRows.push({
              rank: actualRank,
              user_id: `sim-${userSeed}`,
              name: generateName(userSeed),
              avatarUrl: `https://i.pravatar.cc/150?u=${userSeed}`,
              score: simScore,
              isMe: false
            });
          }
       }
       
       currentTop -= (userSeed % (isNeet ? 5 : 3)) + 1; 
    }

    simulatedRows.sort((a,b) => a.rank - b.rank);

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><Award className="w-6 h-6 text-slate-500"/> Series Leaderboard</h1>
            <p className="text-sm text-slate-500 font-medium mt-1">Daily Top 10 live ranks for your enrolled test series.</p>
          </div>
          {myTestSeries.length > 0 && (
             <div className="flex flex-col gap-1 w-full sm:w-auto">
                <label className="text-xs font-bold text-slate-500 uppercase">Select Target Series</label>
                <select 
                  className="bg-white border border-slate-200 text-slate-700 py-2 px-3 rounded-lg font-semibold text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full sm:w-64"
                  value={selectedSeriesId}
                  onChange={(e) => setSelectedSeriesId(e.target.value)}
                >
                  {myTestSeries.map((s: any) => (
                    <option key={s.id} value={s.id}>{s.name || s.title || `Series ${s.id}`}</option>
                  ))}
                </select>
             </div>
          )}
        </div>

        {!activeSeries ? (
           <div className="bg-slate-50 border border-slate-200 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-4">
                <Award className="w-8 h-8 text-slate-300" />
             </div>
             <h3 className="font-bold text-slate-700 text-lg">No Series Enrolled</h3>
             <p className="text-slate-500 text-sm mt-1 max-w-sm">Please enroll in a test series to see its dedicated daily leaderboard.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-indigo-600 px-6 py-4 flex items-center justify-between text-white">
               <div>
                 <h2 className="font-bold border-b border-indigo-500 pb-1 mb-1">{activeSeries.name}</h2>
                 <p className="text-indigo-200 text-sm font-medium">Top 10 Performers Today</p>
               </div>
               <span className="bg-indigo-700/50 border border-indigo-500/50 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">Daily Live</span>
            </div>

            <div className="overflow-x-auto w-full -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
              <div className="min-w-[420px] sm:min-w-[500px] flex flex-col">
                <div className="flex border-b bg-slate-50">
                  <div className="px-6 py-3 font-semibold text-slate-500 text-xs tracking-widest uppercase w-20 text-center">Rank</div>
                  <div className="px-6 py-3 font-semibold text-slate-500 text-xs tracking-widest uppercase flex-1">Student</div>
                  <div className="px-6 py-3 font-semibold text-slate-500 text-xs tracking-widest uppercase w-24 text-right">Score</div>
                </div>

                <div className="p-0 flex flex-col">
                  {simulatedRows.map((user: any) => (
                    <div key={user.user_id} className={`flex items-center border-b last:border-0 transition-colors ${user.isMe ? 'bg-indigo-50/50 relative' : 'hover:bg-neutral-50'} py-3 px-2`}>
                      {user.isMe && <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>}
                      
                      <div className="w-20 text-center shrink-0">
                        <span className={`font-black text-xl ${user.rank === 1 ? 'text-amber-500 drop-shadow-sm' : user.rank === 2 ? 'text-slate-400 drop-shadow-sm' : user.rank === 3 ? 'text-amber-700 drop-shadow-sm' : 'text-slate-500'}`}>
                          #{user.rank}
                        </span>
                      </div>
                      
                      <div className="flex-1 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold overflow-hidden border-2 shadow-sm shrink-0 ${user.rank === 1 ? 'border-amber-400' : user.rank === 2 ? 'border-slate-300' : user.rank === 3 ? 'border-amber-600' : 'border-slate-200 bg-slate-100'}`}>
                          {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-slate-600">{user.name?.charAt(0) || 'S'}</span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <div className={`font-bold text-base flex items-center gap-2 ${user.isMe ? 'text-indigo-900' : 'text-slate-800'}`}>
                            {user.name}
                            {user.isMe && <span className="text-[10px] uppercase font-black bg-indigo-600 text-white px-2 py-0.5 rounded shadow-sm">You</span>}
                          </div>
                          <div className="text-xs font-semibold text-slate-500">
                             {user.rank <= 3 ? 'Top Scorer' : 'Excellent Performer'}
                          </div>
                        </div>
                      </div>

                      <div className="w-32 text-right pr-6 shrink-0">
                        <div className="font-black text-xl text-slate-800 tracking-tight">{user.score}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {hasAttempted && myRankInTop10 === -1 && (
              <div className="bg-slate-900 px-4 md:px-6 py-4 flex flex-row items-center justify-between mt-2 rounded-b-xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] relative z-10 gap-2">
                 <div className="flex items-center gap-2 md:gap-4 min-w-0">
                    <div className="w-8 md:w-10 text-center shrink-0">
                       <span className="font-black text-slate-400 text-base md:text-lg">---</span>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-indigo-500 overflow-hidden bg-slate-800 shrink-0">
                       {studentInfo?.avatarUrl ? (
                          <img src={studentInfo?.avatarUrl} className="w-full h-full object-cover" />
                       ) : (
                          <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs md:text-base">You</div>
                       )}
                    </div>
                    <div className="min-w-0">
                       <div className="text-white font-bold flex items-center gap-2 truncate text-sm md:text-base">{studentInfo?.name || 'You'} <span className="hidden sm:inline-block text-[10px] bg-slate-700 px-2 py-0.5 rounded uppercase tracking-wider">Your Best</span></div>
                       <div className="text-[10px] md:text-xs text-slate-400 font-medium truncate">Keep practicing to reach Top 10!</div>
                    </div>
                 </div>
                 <div className="text-right shrink-0">
                    <div className="font-black text-lg md:text-xl text-indigo-400">{myBestScore}</div>
                    <div className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Points</div>
                 </div>
              </div>
            )}
            
          </div>
        )}
      </div>
    );
  };

  const TestAnalysisModule = () => {
    const [selectedDate, setSelectedDate] = useState<number>(() => {
      const d = new Date();
      d.setHours(0,0,0,0);
      return d.getTime();
    });

    const last7Days = Array.from({length: 7}).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      d.setHours(0,0,0,0);
      return d;
    }).reverse();

    const testsByDay = allUserTests.filter((t: any) => {
      const td = new Date(t.created_at);
      td.setHours(0,0,0,0);
      return td.getTime() === selectedDate;
    });

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><History className="w-6 h-6 text-slate-500"/> Attempt History</h1>
            <p className="text-sm text-slate-500 font-medium mt-1">Review your recent test performances and analyze your progress over the last 7 days.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-2 flex overflow-x-auto gap-2 shadow-sm shrink-0 scrollbar-hide">
           {last7Days.map(d => {
              const isSelected = d.getTime() === selectedDate;
              const hasTest = allUserTests.some((t: any) => { const td = new Date(t.created_at); td.setHours(0,0,0,0); return td.getTime() === d.getTime(); });
              return (
                 <button 
                   key={d.getTime()}
                   onClick={() => setSelectedDate(d.getTime())}
                   className={`flex-1 min-w-[60px] flex flex-col items-center py-3 rounded-lg border transition-all ${isSelected ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-200' : 'bg-transparent border-transparent hover:bg-slate-50 text-slate-600'}`}
                 >
                   <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>{d.toLocaleDateString('en-US', { weekday: 'short'})}</span>
                   <span className="text-xl font-black mt-1 mb-1">{d.getDate()}</span>
                   <span className={`w-1.5 h-1.5 rounded-full ${hasTest ? (isSelected ? 'bg-white' : 'bg-indigo-500') : 'bg-transparent'}`}></span>
                 </button>
              );
           })}
        </div>

        <div className="space-y-4 mt-6">
           {testsByDay.length === 0 ? (
              <div className="bg-slate-50 border border-slate-200 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-4">
                    <History className="w-8 h-8 text-slate-300" />
                 </div>
                 <h3 className="font-bold text-slate-700 text-lg">No attempts on this day</h3>
                 <p className="text-slate-500 text-sm mt-1 max-w-sm">You haven't taken any tests on this specific date. Try selecting another day with the dot indicator.</p>
              </div>
           ) : (
             testsByDay.map((t: any) => {
                let isNeet = t.exam?.toLowerCase()?.includes('neet') || false;
                if (!isNeet && String(t.test_id).includes('med')) isNeet = true;
                
                const correct = Number(t.correct) || 0;
                const wrong = Number(t.wrong) || 0;
                const skipped = Number(t.skipped) || 0;
                const score = Number(t.score) || 0;
                const acc = t.accuracy || 0;

                const attemptIdParams = typeof t.id === 'number' ? `attemptDbId=${t.id}` : `attemptId=${t.id}`;
                const analysisLink = `/test/${t.test_id || 'mock-eng-1-test-1'}/analysis?score=${score}&correct=${correct}&incorrect=${wrong}&unattempted=${skipped}&isNeet=${isNeet}&${attemptIdParams}`;

                return (
                 <div key={t.id} onClick={() => router.push(analysisLink)} className="group bg-white rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all p-5 flex flex-col md:flex-row gap-5 items-start md:items-center cursor-pointer">
                    <div className="flex-1 w-full">
                       <div className="flex items-center gap-2 mb-2">
                         <span className="bg-slate-100 text-slate-600 text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-widest">{t.exam || 'MOCK'}</span>
                         <span className="text-xs font-bold text-slate-400">{new Date(t.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                       </div>
                       <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{t.test_id || 'Premium Full Syllabus Mock Test'}</h3>
                       <div className="flex flex-wrap gap-4 mt-3">
                         <div className="flex items-center gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                           <span className="text-sm font-semibold text-slate-600">{correct} <span className="text-slate-400 font-normal">Correct</span></span>
                         </div>
                         <div className="flex items-center gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-red-500"></div>
                           <span className="text-sm font-semibold text-slate-600">{wrong} <span className="text-slate-400 font-normal">Wrong</span></span>
                         </div>
                         <div className="flex items-center gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                           <span className="text-sm font-semibold text-slate-600">{skipped} <span className="text-slate-400 font-normal">Skipped</span></span>
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between w-full md:w-auto gap-6 bg-slate-50 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                       <div className="flex flex-col items-center md:items-end">
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Score</span>
                          <span className="text-2xl font-black text-indigo-600">{score}</span>
                       </div>
                       <div className="flex flex-col items-center md:items-end">
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Accuracy</span>
                          <span className="text-2xl font-black text-slate-700">{Math.round(acc)}%</span>
                       </div>
                       
                       <div className="bg-slate-100 text-slate-600 p-3 rounded-full shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <ChevronRight className="w-5 h-5"/>
                       </div>
                    </div>
                 </div>
                );
             })
           )}
        </div>
      </div>
    );
  };

  const AllCoursesModule = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedExam, setSelectedExam] = useState("All");
    const [selectedCourse, setSelectedCourse] = useState<any>(null); // For detail modal


    const combinedData = recommendedTests.map(t => ({
      ...t, 
      exam: t.tags?.[0] || 'Other', 
      description: t.reason,
      features: ['Full Length Subject Mocks', 'Detailed Performance Analysis', 'All India Benchmarking']
    }));
    
    const merged = [...combinedData];

    const exams = ["All", "Engineering", "Medical", "Banking", "CUET", "Law", "MBA", "Police", "Railways", "SSC", "State PSC", "Teaching", "UPSC"];

    const filtered = merged.filter(test => {
      const matchSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (test.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchExam = selectedExam === "All" || test.exam === selectedExam || test.tags?.includes(selectedExam);
      
      if (!matchExam && selectedExam !== "All") {
        const titleAndTags = (test.title + " " + (test.tags || []).join(" ") + " " + (test.category || "")).toLowerCase();
        const examMap: Record<string, string[]> = {
          "Engineering": ["jee", "btech", "engineering", "bitsat", "viteeee"],
          "Medical": ["neet", "aiims", "medical", "mbbs", "bds"],
          "Banking": ["sbi", "ibps", "rbi", "bank", "po", "clerk"],
          "SSC": ["ssc", "cgl", "chsl", "mts", "cpo", "gd"],
          "UPSC": ["upsc", "ias", "ips", "civil services", "nda", "cds"],
          "Teaching": ["ctet", "tet", "b.ed", "kvs", "nvs", "dsssb"],
          "Railways": ["rrb", "railway", "ntpc", "group d", "alp"],
          "Police": ["police", "constable", "si", "inspector"],
          "Law": ["clat", "ailet", "lsat", "llb", "law"],
          "MBA": ["cat", "xat", "mat", "cmat", "snap", "mba"],
          "State PSC": ["psc", "uppsc", "mppsc", "bpsc", "rpsc", "jpsc"],
          "CUET": ["cuet", "cucet"]
        };
        const keywords = examMap[selectedExam] || [selectedExam.toLowerCase()];
        matchExam = keywords.some(kw => titleAndTags.includes(kw));
      }

      return matchSearch && matchExam;
    });

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200/60 pb-5 gap-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
              <Sparkles className="w-8 h-8 text-indigo-500" /> Explore Courses
            </h1>
            <p className="text-slate-500 font-medium mt-2 text-sm md:text-base mb-6">Discover premium test series curated by top educators across India for all major exams.</p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1 max-w-md focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow rounded-xl shadow-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search for test series like 'JEE Main' or 'NEET UG'..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {exams.map(exam => (
            <button
              key={exam}
              onClick={() => setSelectedExam(exam)}
              className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${selectedExam === exam ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 border-indigo-600' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}
            >
              {exam}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4"><Search className="w-10 h-10 text-slate-400" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No courses found</h3>
              <p className="text-slate-500 font-medium max-w-sm">We couldn't find any courses matching your search. Try adjusting your query or selected exam filter.</p>
            </div>
          ) : filtered.map((test, i) => (
            <div key={test.id} className="bg-white rounded-2xl border border-slate-200/60 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 group flex flex-col overflow-hidden">
              <Link href={`/series/${test.id}`} className="relative h-44 w-full bg-slate-100 overflow-hidden block">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 group-hover:scale-105 transition-transform duration-700"></div>
                <img 
                  src={(test as any).imageUrl || `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&sat=-50`} 
                  alt={test.title}
                  onError={(e) => { e.currentTarget.style.opacity = '0.5'; }}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 justify-between w-full px-4 flex">
                  <span className="bg-white/95 backdrop-blur-sm text-indigo-700 text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {test.tags?.[0] || 'Premium'}
                  </span>
                  <span className="bg-emerald-500 text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {test.tags?.[1] || '₹499'}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2 text-slate-900 tracking-tight leading-snug line-clamp-2">{test.title}</h3>
                <p className="text-sm text-slate-500 font-medium mb-6 line-clamp-2 leading-relaxed">{test.description || test.reason}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-center">
                  <Link 
                    href={`/series/${test.id}`}
                    className={`w-full text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-sm ${myTestSeries.some(s => s.id === test.id) ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'}`}
                  >
                    {myTestSeries.some(s => s.id === test.id) ? 'Open Series' : 'Enroll Now'} <ChevronRight className="w-4 h-4"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Details Modal */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-900/60 backdrop-blur-sm p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]"
              >
                {/* Modal Header inside image */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden shrink-0">
                  <img 
                    src={`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&sat=-50`} 
                    alt={selectedCourse.title}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-70" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  
                  <button 
                    onClick={() => setSelectedCourse(null)} 
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-indigo-500 text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm mb-3">
                      {selectedCourse.tags?.[0] || 'Premium Series'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">{selectedCourse.title}</h2>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 overflow-y-auto bg-slate-50 flex-1">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm mb-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">About Test Series</h3>
                    <p className="text-slate-700 font-medium leading-relaxed">{selectedCourse.description || selectedCourse.reason}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {selectedCourse.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-semibold text-slate-700">{feature}</span>
                        </li>
                      )) || (
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-semibold text-slate-700">Everything needed to ace your exam.</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <div className="text-center sm:text-left">
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-0.5">Package Price</p>
                    <div className="text-3xl font-black text-slate-900">{selectedCourse.tags?.[1] || '₹499'}</div>
                  </div>
                  {myTestSeries.some(s => s.id === selectedCourse.id) ? (
                    <Link href={`/series/${selectedCourse.id}`} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 font-bold py-3.5 px-10 rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95">
                      Open Series <ChevronRight className="w-5 h-5"/>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => {
                        initiatePayment(selectedCourse.id, parseInt((selectedCourse.tags?.[1] || '').replace('₹','') || '499'));
                      }} 
                      disabled={isCheckoutLoading === selectedCourse.id}
                      className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 font-bold py-3.5 px-10 rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isCheckoutLoading === selectedCourse.id ? (
                        <>
                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                           Processing...
                        </>
                      ) : (
                        <>Enroll Now <ChevronRight className="w-5 h-5"/></>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const WalletModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">Wallet & Purchases</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 col-span-1 md:col-span-2">
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
         {walletPurchases.length === 0 ? (
           <div className="p-6 text-neutral-700 font-semibold">No purchases found.</div>
         ) : walletPurchases.slice(0, 10).map((p: any) => (
           <div key={p.id} className="p-4 flex items-center justify-between border-b last:border-0 hover:bg-neutral-50">
             <div>
               <h4 className="font-semibold text-neutral-800">{p.title}</h4>
               <p className="text-xs text-neutral-500">{p.created_at ? new Date(p.created_at).toLocaleDateString() : ''}</p>
             </div>
             <span className="font-bold text-neutral-800">₹{Number(p.amount) || 0}</span>
           </div>
         ))}
      </div>
    </div>
  );

  const NotificationsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">Notifications</h1>
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm text-neutral-700 font-semibold">No notifications.</div>
        ) : notifications.map((n: any) => (
          <div key={n.id || `${n.created_at}-${n.title}`} className="flex gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-blue-100 text-blue-600">
              <Bell className="w-5 h-5"/>
            </div>
            <div>
              <h4 className="font-bold text-neutral-800">{n.title || 'Notification'}</h4>
              <p className="text-sm text-neutral-600 mt-0.5">{n.message || n.body || ''}</p>
              <span className="text-xs text-neutral-400 mt-2 block">{n.created_at ? new Date(n.created_at).toLocaleString() : ''}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfileModule = () => (
    <>
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div className="border-b pb-4">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><User className="w-6 h-6 text-slate-500"/> My Profile</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Manage your account and exam preferences.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-4 text-center md:text-left">
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center relative overflow-hidden">
            <div className="w-24 h-24 bg-slate-100 text-slate-400 border border-slate-200 rounded-full flex items-center justify-center text-4xl font-bold mb-4 overflow-hidden">
              {studentInfo.avatarUrl ? (
                <img src={studentInfo.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                studentInfo.name.charAt(0)
              )}
            </div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">{studentInfo.name}</h2>
            <p className="text-slate-500 font-medium text-sm mb-4">{userEmail || '—'}</p>
            <span className="inline-flex bg-slate-900 border border-slate-800 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Verified Profile</span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hidden md:block">
            <h3 className="font-bold text-slate-800 mb-4 tracking-tight">Active Features</h3>
            <ul className="space-y-3 text-sm font-semibold text-slate-600">
              <li className="flex items-center gap-2"><HelpCircle className="w-4 h-4 text-slate-400"/> Doubt Solving (24/7)</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-slate-400"/> Discussion Forum</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-slate-400"/> Daily Current Affairs</li>
              <li className="flex items-center gap-2"><Target className="w-4 h-4 text-slate-400"/> Rank Predictor</li>
              <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400"/> Exam Calendar</li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-6 text-slate-800 flex items-center gap-2"><Settings className="w-5 h-5 text-slate-500"/> Preferences</h3>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Target Exam</label>
                <div className="font-medium text-slate-800 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg">{studentInfo.targetExam}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Language</label>
                  <div className="font-medium text-slate-800 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg">English</div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">State Zone</label>
                  <div className="font-medium text-slate-800 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg">General</div>
                </div>
              </div>
              <button 
                onClick={() => {
                  setEditForm({ name: studentInfo.name, targetExam: studentInfo.targetExam, email: userEmail });
                  setEditPhotoFile(null);
                  setIsEditingProfile(true);
                }}
                className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg font-bold mt-4 hover:border-slate-300 hover:bg-slate-50 transition-colors w-full sm:w-auto"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {isEditingProfile && (
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-slate-800">Edit Profile</h3>
            <button onClick={() => setIsEditingProfile(false)} className="text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5"/>
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col items-center mb-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-slate-400 font-bold mb-3">
                 {editPhotoFile ? (
                   <img src={URL.createObjectURL(editPhotoFile)} alt="Preview" className="w-full h-full object-cover" />
                 ) : studentInfo.avatarUrl ? (
                   <img src={studentInfo.avatarUrl} alt="Current" className="w-full h-full object-cover" />
                 ) : (
                   studentInfo.name.charAt(0)
                 )}
              </div>
              <label className="cursor-pointer text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors border border-indigo-100">
                Change Photo
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setEditPhotoFile(e.target.files[0]);
                  }
                }} />
              </label>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Full Name</label>
              <input 
                type="text" 
                value={editForm.name} 
                onChange={e => setEditForm({...editForm, name: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-700 font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Email (Requires Verification Link)</label>
              <input 
                type="email" 
                value={editForm.email} 
                onChange={e => setEditForm({...editForm, email: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-700 font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Target Exam</label>
              <input 
                type="text" 
                value={editForm.targetExam} 
                onChange={e => setEditForm({...editForm, targetExam: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-700 font-medium"
              />
            </div>
          </div>
          <div className="p-6 bg-slate-50 flex justify-end gap-3 border-t border-slate-100">
            <button onClick={() => setIsEditingProfile(false)} className="px-5 py-2 rounded-lg font-bold text-slate-600 hover:bg-slate-200 transition-colors">Cancel</button>
            <button onClick={handleEditProfileSave} disabled={editingLoading} className="px-5 py-2 rounded-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center gap-2">
              {editingLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );

  const SettingsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div className="border-b pb-4">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><Settings className="w-6 h-6 text-slate-500"/> Account Settings</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Manage your notification preferences, theme, and security.</p>
      </div>
      
      <div className="space-y-6">
        {/* Notifications Settings */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-100 pb-2">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700 text-sm">Email Notifications</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Receive test results and announcements via email.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700 text-sm">SMS Alerts</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Get important updates about live classes on SMS.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-100 pb-2">Display & Appearance</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-700 text-sm">Dark Mode</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Toggle dark theme for late night studies.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-100 pb-2">Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700 text-sm">Change Password</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Update your account password regularly.</p>
              </div>
              <button 
                onClick={() => setShowPasswordModal(true)}
                className="bg-white border text-sm border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors"
              >
                Update
              </button>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <p className="font-bold text-red-600 text-sm">Delete Account</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Permanently delete your account and data.</p>
              </div>
              <button 
                onClick={() => setShowDeleteModal(true)}
                className="bg-red-50 border text-sm border-red-200 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDeleteModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
              <div className="absolute inset-0 cursor-pointer" onClick={() => !isDeletingAccount && !deletedSuccess && setShowDeleteModal(false)}></div>
              <motion.div 
                 initial={{ scale: 0.95, opacity: 0 }} 
                 animate={{ scale: 1, opacity: 1 }} 
                 exit={{ scale: 0.95, opacity: 0 }} 
                 className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden relative z-10"
              >
                 {deletedSuccess ? (
                    <div className="p-8 flex flex-col items-center justify-center text-center">
                       <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                          className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200"
                        >
                           <CheckCircle className="w-8 h-8 shrink-0" />
                       </motion.div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">Account Deleted</h3>
                       <p className="text-slate-500 text-sm leading-relaxed mb-1">Your data has been wiped.</p>
                       <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Redirecting...</p>
                    </div>
                 ) : (
                    <div className="p-6">
                        <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4 mx-auto border border-red-100">
                            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Delete Account</h3>
                        <p className="text-slate-500 text-sm text-center mb-6 leading-relaxed">
                            Your account and all associated test data will be permanently erased. To confirm and execute this action, please click confirm below.
                        </p>
                        <div className="flex gap-3">
                           <button onClick={() => setShowDeleteModal(false)} disabled={isDeletingAccount} className="flex-1 py-2.5 rounded-xl font-bold bg-white text-slate-700 hover:bg-slate-50 transition-colors border border-slate-200 text-sm shadow-sm disabled:opacity-50">Cancel</button>
                           <button onClick={handleDeleteAccount} disabled={isDeletingAccount} className="flex-1 py-2.5 rounded-xl font-bold bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md shadow-red-600/20 flex justify-center items-center gap-2 text-sm border border-transparent hover:border-red-500 disabled:opacity-50">
                              {isDeletingAccount ? "Deleting..." : "Confirm Delete"}
                           </button>
                        </div>
                    </div>
                 )}
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPasswordModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
              <div className="absolute inset-0 cursor-pointer" onClick={() => !passwordLoading && setShowPasswordModal(false)}></div>
              <motion.div 
                 initial={{ scale: 0.95, opacity: 0 }} 
                 animate={{ scale: 1, opacity: 1 }} 
                 exit={{ scale: 0.95, opacity: 0 }} 
                 className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden relative z-10"
              >
                  <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 mx-auto border border-blue-100">
                          <Lock className="w-6 h-6 shrink-0" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Change Password</h3>
                      <p className="text-slate-500 text-sm text-center mb-6 leading-relaxed">
                          Secure your account by updating your password.
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                           <label className="text-xs font-bold text-slate-500 mb-1 block">New Password</label>
                           <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 font-medium transition-all" placeholder="Enter new password" />
                        </div>
                        <div>
                           <label className="text-xs font-bold text-slate-500 mb-1 block">Confirm Password</label>
                           <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 font-medium transition-all" placeholder="Confirm new password" />
                        </div>
                      </div>

                      <div className="flex gap-3">
                         <button onClick={() => setShowPasswordModal(false)} disabled={passwordLoading} className="flex-1 py-3 rounded-xl font-bold bg-white text-slate-700 hover:bg-slate-50 transition-colors border border-slate-200 text-sm shadow-sm disabled:opacity-50">Cancel</button>
                         <button onClick={handleChangePassword} disabled={passwordLoading} className="flex-1 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 flex justify-center items-center gap-2 text-sm border border-transparent disabled:opacity-50">
                            {passwordLoading ? "Updating..." : "Update Password"}
                         </button>
                      </div>
                  </div>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans flex text-slate-900 selection:bg-blue-200 overflow-hidden w-full max-w-[100vw]">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
           width: sidebarOpen || isMobile ? 272 : 0,
           x: isMobile && !sidebarOpen ? -272 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed lg:relative top-0 left-0 h-screen z-50 bg-white border-r border-slate-200/60 flex flex-col shrink-0 overflow-y-auto overflow-x-hidden no-scrollbar ${!sidebarOpen && !isMobile ? 'border-r-0' : ''}`}
      >
        <div className="p-4 sm:p-6 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10 shrink-0">
          <span className="text-2xl font-black text-slate-800 tracking-tight w-full flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center rotate-3 shrink-0">
              <span className="text-white text-lg font-bold -rotate-3">E</span>
            </div>
            ExamBoost
          </span>
          {isMobile && (
            <button aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors shrink-0">
              <X className="w-5 h-5 text-slate-500" />
            </button>
          )}
        </div>

        <nav className="px-4 pb-8 space-y-1 flex-1 overflow-y-auto no-scrollbar">
          {menuGroups.map((group, groupIdx) => (
            <div key={groupIdx} className={groupIdx > 0 ? "pt-4" : ""}>
              <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 mt-2 whitespace-nowrap overflow-hidden">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); if(isMobile) setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl font-medium transition-all tooltip-trigger overflow-hidden whitespace-nowrap ${
                      activeTab === item.id 
                        ? "bg-indigo-50/80 text-indigo-700 font-bold" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <item.icon className={`w-[20px] h-[20px] shrink-0 ${activeTab === item.id ? "text-indigo-600" : "text-slate-400"}`} />
                    <span className={`text-sm tracking-tight ${activeTab === item.id ? 'font-bold' : ''}`}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 px-3 sm:px-4 md:px-8 py-3.5 flex items-center justify-between supports-[backdrop-filter]:bg-white/50 shrink-0">
           <div className="flex items-center gap-4 text-slate-800">
             <button aria-label="Toggle sidebar" onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-full transition-colors shrink-0">
               <Menu className="w-5 h-5 text-slate-600" />
             </button>
             
             <div className="hidden md:flex relative group">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search courses, tests..." 
                  className="pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 border rounded-full w-72 text-sm font-medium outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
             </div>
           </div>
           
           <div className="flex items-center gap-2.5 md:gap-4 shrink-0">
             <button aria-label="Go to Home" className="relative p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-full transition-colors" onClick={() => router.push('/')}>
               <Home className="w-5 h-5 shrink-0" />
             </button>
             <button aria-label="Open notifications" className="relative p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-full transition-colors" onClick={() => setActiveTab('notifications')}>
               <Bell className="w-5 h-5 shrink-0" />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <button aria-label="Open settings" className="hidden md:flex p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-full transition-colors" onClick={() => setActiveTab('settings')}>
               <Settings className="w-5 h-5 shrink-0" />
             </button>
             <div className="w-px h-6 bg-slate-200 hidden md:block mx-1"></div>
             <button 
                onClick={() => setActiveTab('profile')}
                className="flex items-center gap-2.5 hover:bg-slate-100 p-1.5 pr-4 rounded-full transition-colors border border-transparent hover:border-slate-200"
             >
               <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm z-10 overflow-hidden shrink-0">
                 {studentInfo.avatarUrl ? (
                   <img src={studentInfo.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                 ) : (
                   (studentInfo.name || 'S').charAt(0)
                 )}
               </div>
               <span className="font-semibold text-sm text-slate-700 hidden md:block">{studentInfo.name}</span>
             </button>
           </div>
        </header>

        {/* Dynamic Inner Content */}
        <main className="flex-1 overflow-y-auto bg-[#F8F9FA] p-3 sm:p-4 md:p-8 relative">
           <div className="max-w-7xl mx-auto w-full">
             {renderContent()}
           </div>
        </main>
      </div>

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
