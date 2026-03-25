"use client";
"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { getSupabaseClient } from '@/lib/supabaseClient';
import {
  Lock, FileText, CheckCircle, ChevronLeft, Award,
  Sun, Moon, Clock, BarChart, Calendar, ShieldCheck,
  PlayCircle, BookOpen, AlertCircle, CheckCircle2,
  ListFilter, RotateCcw, Activity, Info, Sparkles, History, Flame
} from 'lucide-react';

const MOCK_DB: any = {
  'mock-eng-1': {
    title: 'Shikhar JEE Main 2026 Test Series',
    exam: 'Engineering',
    price: 1399,
    originalPrice: 2999,
    description: 'Experience the real NTA interface with 15 Premium Full-Length Mock Tests exclusively for JEE Main preparation.',
    features: [
      '15 Full-Length Mocks strictly based on latest NTA pattern',
      'Advanced Accuracy & Time Analytics',
      'AI Auto Generated Chapter-wise Questions',
      'All India Rank (AIR) Prediction & Percentile'
    ],
    testCount: 15,
    imageUrl: '/shikhar-jee.png'
  },
  'mock-eng-2': {
    title: 'Vijay IIT Advance 2026 Test Series',
    exam: 'Engineering',
    price: 1999,
    originalPrice: 3999,
    description: '35+ Tests + Unlimited Practice exclusively for JEE Advanced',
    features: [
      '25 Full JEE Advanced Mocks',
      '10 Previous Year Papers',
      'Unlimited Chapter Wise Tests',
      'Unlimited Custom Mock Generator'
    ],
    testCount: 35,
    imageUrl: '/vijay-jee.png'
  },
  'mock-med-1': {
    title: 'ExamBoost NEET Shourya Test Series 2026',
    exam: 'Medical',
    price: 2999,
    originalPrice: 4999,
    description: '20 Premium Tests + AI Practice. Build your accuracy with tests simulating the latest NEET UG exam pattern.',
    features: [
      '15 Full NEET Mock Tests',
      '5 Intensive Tests',
      '10 Official Previous Year Papers',
      'Unlimited Custom Mock Generator'
    ],
    testCount: 20,
    imageUrl: '/shourya-neet.png'
  }
};

export default function SeriesPage() {
  const params = useParams();
  const router = useRouter();
  const seriesId = params.id as string;
  const courseData = MOCK_DB[seriesId] || {
    title: 'Premium Mock Test Series',
    exam: 'Preparation',
    price: 1299,
    originalPrice: 2499,
    description: 'Advance your preparation with our premium mock tests designed by expert educators.',
    features: ['Full-Length Mocks', 'Detailed Solutions', 'Rank Prediction'],
    imageUrl: '',
    testCount: 0
  };

  const [activeTab, setActiveTab] = useState('tests');
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  const [historyData, setHistoryData] = useState<any[]>([]);

  useEffect(() => {
    if (!isClient) return;
    try {
      const historyKey = `exam_history_${seriesId}`;
      const localHist = JSON.parse(localStorage.getItem(historyKey) || '[]');
      localHist.sort((a: any, b: any) => b.attemptId - a.attemptId);

      const grouped: Record<string, any> = {};

      localHist.forEach((attempt: any) => {
        const d = new Date(attempt.attemptId);
        const dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

        const now = new Date();
        const diffTime = Math.abs(now.getTime() - d.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        let displayDate = dateStr;
        if (diffDays === 0 && now.getDate() === d.getDate()) displayDate = `Today (${dateStr})`;
        else if (diffDays === 1 || (diffDays === 0 && now.getDate() !== d.getDate())) displayDate = `Yesterday (${dateStr})`;

        const deletesIn = Math.max(0, 7 - diffDays);
        const groupKey = `${displayDate}___${attempt.testId}`;

        if (!grouped[groupKey]) {
          const testParts = attempt.testId.split('-test');
          const testNo = testParts.length > 1 ? testParts[1].replace('-', '') : 'Unknown';
          const testTitleRaw = `Full Mock Test ${testNo}`;

          grouped[groupKey] = {
            date: displayDate,
            deletesIn: `${deletesIn} days`,
            testName: testTitleRaw,
            testId: attempt.testId,
            attempts: []
          };
        }

        const totalQs = attempt.correct + attempt.incorrect + attempt.unattempted;
        const acc = attempt.correct + attempt.incorrect > 0 ? Math.round((attempt.correct / (attempt.correct + attempt.incorrect)) * 100) : 0;

        grouped[groupKey].attempts.push({
          rawAttemptId: attempt.attemptId,
          testId: attempt.testId,
          attemptNo: 0,
          time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          score: attempt.score,
          total: attempt.isNeet ? 720 : 300,
          accuracy: `${acc}%`,
          rank: "View Analytics",
          timeTaken: "-",
          avgTimePerQ: "-",
          stats: [
            { name: "Total Exam", correct: attempt.correct, wrong: attempt.incorrect, skipped: attempt.unattempted, time: "-" }
          ]
        });
      });

      let formattedHistory = Object.values(grouped);
      formattedHistory = formattedHistory.map((group: any) => {
        group.attempts.forEach((att: any, idx: number) => {
          att.attemptNo = group.attempts.length - idx;
        });
        return group;
      });

      setHistoryData(formattedHistory);
    } catch (e) {
      console.error("Could not load history", e);
    }
  }, [seriesId, isClient]);

  const [isPurchased, setIsPurchased] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkPurchase = async () => {
      const supabase = getSupabaseClient();
      if (!supabase) return;
      const { data: auth } = await supabase.auth.getSession();
      if (auth.session) {
        setUserId(auth.session.user.id);

        const { data: purchases } = await supabase
          .from('purchases')
          .select('id')
          .eq('user_id', auth.session.user.id)
          .eq('status', 'success')
          .in('series_id', [seriesId, 'ALL']);

        if (purchases && purchases.length > 0) {
          setIsPurchased(true);
        }
      }
    };
    checkPurchase();
  }, [seriesId]);

  const initiatePayment = async () => {
    if (!userId) {
      setShowLoginModal(true);
      return;
    }
    setIsCheckoutLoading(true);
    try {
      if (!(window as any).Razorpay) {
        alert("Payment gateway failed to load. Please check your connection.");
        setIsCheckoutLoading(false);
        return;
      }

      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: courseData.price, courseId: seriesId }),
      });
      const orderData = await orderRes.json();
      if (!orderData.success) {
        alert("Order creation failed: " + (orderData.error || "Unknown error"));
        setIsCheckoutLoading(false);
        return;
      }

      if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
        alert("Razorpay Key is missing in environment variables.");
        setIsCheckoutLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "ExamBoost Platform",
        description: `Purchase: ${courseData.title}`,
        order_id: orderData.order.id,
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: userId,
              seriesId: seriesId,
              amount: courseData.price
            })
          });
          const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert(`Payment Successful! Your tests are now unlocked.`);
              setIsPurchased(true);
            } else {
              alert(`Payment verification failed: ${verifyData.error}`);
            }
            setIsCheckoutLoading(false);
          },
          prefill: {
            name: "Student Name",
            email: "student@example.com",
            contact: "9999999999",
          },
          theme: { color: "#4f46e5" },
          modal: {
            ondismiss: function() {
              setIsCheckoutLoading(false);
            }
          }
        };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any) {
        alert('Payment Failed. Reason: ' + response.error.description);
        setIsCheckoutLoading(false);
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong during payment initiation.");
      setIsCheckoutLoading(false);
    }
  };

  const tests = Array.from({ length: courseData.testCount }).map((_, i) => {
    let testTitle = `${courseData.exam} Full Mock Test - ${i + 1}`;

    // Custom naming for NEET Shourya Series
    if (seriesId === 'mock-med-1') {
      if (i < 15) {
        testTitle = `NEET Full Length Mock Test - ${i + 1}`;
      } else {
        testTitle = `NEET Intensive Mock Test - ${i - 15 + 1}`;
      }
    }

    return {
      id: `${seriesId}-test-${i + 1}`,
      title: testTitle,
      questions: courseData.exam === 'Medical' ? 180 : courseData.exam === 'Engineering' ? 75 : 100,
      marks: courseData.exam === 'Medical' ? 720 : courseData.exam === 'Engineering' ? 300 : 100,
      duration: courseData.exam === 'Medical' ? '180 Mins' : '180 Mins',
      isLocked: i === 0 ? false : !isPurchased // First mock is free
    };
  });

  if (!isClient) return null;

  const discountPercent = Math.round(((courseData.originalPrice - courseData.price) / courseData.originalPrice) * 100);

  return (
    <>
    <div className="min-h-screen bg-[#f4f7fe] dark:bg-[#0b1120] font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-500/30">
      {/* Script for Razorpay */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      {/* Top Navbar */}
      <header className="bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold line-clamp-1">{courseData.title}</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 relative">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left Content Column */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">

            {/* Header Content Section (Advanced About) */}
            <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 sm:p-10 shadow-xl shadow-indigo-500/5 dark:shadow-none border border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden group">
              {/* Subtle background wave/gradient */}
              <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -m-20 w-80 h-80 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700 pointer-events-none"></div>
              
              {/* Animated Floating Elements */}
              <svg className="absolute top-[10%] right-[20%] w-6 h-6 text-orange-500/80 animate-[pulse-slow_3s_ease-in-out_infinite] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
              </svg>
              <svg className="absolute top-[40%] right-[3%] w-24 h-24 text-indigo-500/10 dark:text-indigo-400/10 -rotate-12 pointer-events-none" 
                  viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10,90 Q40,30 90,50" style={{ animation: 'dash 1.5s ease-out forwards', strokeDasharray: 200, strokeDashoffset: 200 }} />
                  <path d="M70,35 L90,50 L75,70" style={{ animation: 'dash 0.5s ease-out forwards 1s', strokeDasharray: 50, strokeDashoffset: 50 }} />
              </svg>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-[11px] font-black tracking-widest uppercase rounded-full border border-indigo-200/60 dark:border-indigo-500/20 shadow-sm">
                    <BookOpen className="w-3.5 h-3.5" />
                    Test Series
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-black tracking-widest uppercase rounded-full border border-emerald-200/60 dark:border-emerald-500/20 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {courseData.exam} Target
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
                  {courseData.title.split(' ').map((word: string, i: number, arr: string[]) => {
                    if (word.toLowerCase() === 'series' || word.toLowerCase() === 'test' || i === arr.length - 1) {
                      return (
                        <span key={i} className="relative inline-block whitespace-nowrap mr-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 pb-2">
                            {word}
                            <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none text-[#F97316] overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <path 
                                    d="M93.3,16.7 c-2.4-7.4-15.6-13-35.8-14.8C35.5,0,15,3.7,5.5,10.6C-3.4,17,0,26.4,12.7,31.5c15.1,6.1,43.2,7,64.2,3.3 c13.4-2.3,19.3-7.5,20.8-11.5" 
                                    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                                    style={{ animation: 'dash 1.5s ease-out forwards', strokeDasharray: 200, strokeDashoffset: 200 }}
                                />
                                <path 
                                    d="M91.3,14.7 c-2.4-7.4-15.6-13-35.8-14.8C35.5,0,15,3.7,5.5,10.6C-3.4,17,0,26.4,12.7,31.5c15.1,6.1,43.2,7,64.2,3.3" 
                                    fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"
                                    style={{ animation: 'dash 2s ease-out forwards', strokeDasharray: 200, strokeDashoffset: 200 }}
                                />
                            </svg>
                        </span>
                      );
                    }
                    return <span key={i} className="mr-2">{word}</span>;
                  })}
                </h1>
                
                <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed mb-8 font-medium max-w-2xl border-l-[3px] border-indigo-500/80 pl-5">
                  {courseData.description}
                </p>

                <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-col">
                    <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] mb-2">Total Mocks</span>
                    <div className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-lg">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                          <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span>{courseData.testCount} Premium Tests</span>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-slate-200 dark:bg-slate-700/50 hidden sm:block"></div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] mb-2">Language Support</span>
                    <div className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-lg">
                      <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center border border-orange-100 dark:border-orange-500/20">
                          <span className="text-[12px] font-serif font-black text-orange-600 dark:text-orange-400 leading-none">अ</span>
                      </div>
                      <span>English & Hindi</span>
                    </div>
                  </div>
                </div>
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                  @keyframes dash { to { stroke-dashoffset: 0; } }
                  @keyframes pulse-slow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
              `}} />
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 p-2 flex overflow-x-auto scrollbar-hide">
              {[
                { id: 'tests', label: 'Mock Tests', icon: FileText },
                { id: 'syllabus', label: 'Syllabus', icon: Calendar },
                { id: 'pyp', label: 'Previous Years', icon: CheckCircle2 },
                { id: 'aiqb', label: 'AI Chapter Tests', icon: Sparkles },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${activeTab === tab.id
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                      : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-[#111827] rounded-3xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 p-6 sm:p-8">

              {activeTab === 'tests' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Curriculum</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{courseData.testCount} Full Length Mock Tests</p>
                    </div>
                  </div>

                  {/* List of tests */}
                  <div className="flex flex-col gap-4">
                    {tests.map((test, index) => {
                      const isIntensive = test.title.includes('Intensive');
                      return (
                        <div
                          key={test.id}
                          className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl border transition-all gap-4 ${isIntensive
                              ? 'border-orange-300 dark:border-orange-500/50 hover:border-orange-400 bg-orange-50/40 dark:bg-orange-900/10'
                              : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-indigo-50/30 dark:hover:bg-indigo-500/5'
                            }`}
                        >
                          <div className="flex items-start gap-4 w-full">
                            <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 border transition-colors ${isIntensive
                                ? 'bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800/50 text-orange-600 dark:text-orange-400 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 group-hover:bg-white dark:group-hover:bg-slate-700'
                              }`}>
                              {isIntensive ? <Flame className="w-6 h-6" /> : <span className="font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>}
                            </div>
                            <div className="flex-1 mt-0.5">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className={`font-bold text-base transition-colors ${isIntensive
                                    ? 'text-orange-900 dark:text-orange-100'
                                    : 'text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                                  }`}>{test.title}</h3>
                                {isIntensive && (
                                  <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-orange-500 to-rose-500 text-white px-2 py-0.5 rounded-md shadow-sm">
                                    <Flame className="w-3 h-3" /> Hot Questions
                                  </span>
                                )}
                              </div>
                              <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold ${isIntensive
                                  ? 'text-orange-600/80 dark:text-orange-400/80'
                                  : 'text-slate-500 dark:text-slate-400'
                                }`}>
                                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> {test.questions} Qs</span>
                                <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> {test.marks} Marks</span>
                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {test.duration}</span>
                              </div>
                            </div>
                          </div>
                          {!test.isLocked ? (
                            <button
                              onClick={() => {
                                if (!userId) {
                                  setShowLoginModal(true);
                                } else {
                                  router.push(`/test/${test.id}/instructions`);
                                }
                              }}
                              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-all shrink-0 ${isIntensive
                                  ? 'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-md shadow-orange-500/20 text-white border-transparent'
                                  : 'border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                                }`}
                            >
                              <PlayCircle className="w-4 h-4" /> Start
                            </button>
                          ) : (
                            <button
                              onClick={initiatePayment}
                              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all shrink-0"
                            >
                              <Lock className="w-4 h-4" /> Unlock
                            </button>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'syllabus' && (
                <div className="animate-in fade-in duration-500 py-2">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                        <Calendar className="w-6 h-6 text-indigo-500" /> Topic-wise Syllabus Map
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">Complete breakdown of official syllabus dynamically mapped for the 2026 pattern.</p>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-200 dark:border-emerald-500/20 shadow-sm shrink-0 w-max">
                      <CheckCircle2 className="w-4 h-4" /> 100% Updated
                    </div>
                  </div>

                  {(() => {
                    const syllabusData = courseData.exam === 'Medical' ? [
                      {
                        name: 'Bio / Medical',
                        color: 'emerald',
                        topics: [
                          { title: 'Botany', items: ['Plant Diversity', 'Plant Physiology', 'Cell Biology', 'Genetics', 'Ecology'] },
                          { title: 'Zoology', items: ['Animal Diversity', 'Human Physiology', 'Reproduction', 'Evolution', 'Biotech'] }
                        ]
                      },
                      {
                        name: 'Chemistry',
                        color: 'orange',
                        topics: [
                          { title: 'Physical', items: ['Mole Concept', 'Thermodynamics', 'Equilibrium', 'Kinetics'] },
                          { title: 'Organic', items: ['Hydrocarbons', 'Alcohols', 'Aldehydes', 'Biomolecules'] },
                          { title: 'Inorganic', items: ['Bonding', 'Coordination', 'Periodic Table', 'Block Elements'] },
                        ]
                      },
                      {
                        name: 'Physics',
                        color: 'blue',
                        topics: [
                          { title: 'Mechanics', items: ['Kinematics', 'Laws of Motion', 'Work Energy', 'Gravity'] },
                          { title: 'Electromagnetism', items: ['Electrostatics', 'Current Elec', 'Magnetism', 'AC'] },
                          { title: 'Modern Phys', items: ['Dual Nature', 'Atoms', 'Semiconductors'] },
                        ]
                      }
                    ] : [
                      {
                        name: 'Mathematics',
                        color: 'rose',
                        topics: [
                          { title: 'Algebra', items: ['Complex Numbers', 'Quadratics', 'Matrices', 'Permutations', 'Probability'] },
                          { title: 'Calculus', items: ['Limits', 'Derivatives', 'Integration', 'Diff Equations'] },
                          { title: 'Geometry', items: ['Straight Lines', 'Circles', 'Conic Sections', '3D & Vectors'] },
                        ]
                      },
                      {
                        name: 'Physics',
                        color: 'blue',
                        topics: [
                          { title: 'Mechanics', items: ['Kinematics', 'Laws of Motion', 'Work Energy', 'Rotational', 'Gravity'] },
                          { title: 'Heat & Thermo', items: ['Thermodynamics', 'KTG'] },
                          { title: 'Electromagnetism', items: ['Electrostatics', 'Current Elec', 'Magnetism', 'AC'] },
                          { title: 'Modern Phys', items: ['Dual Nature', 'Atoms', 'Semiconductors'] },
                        ]
                      },
                      {
                        name: 'Chemistry',
                        color: 'orange',
                        topics: [
                          { title: 'Physical', items: ['Mole Concept', 'Thermodynamics', 'Equilibrium', 'Kinetics'] },
                          { title: 'Organic', items: ['Hydrocarbons', 'Alcohols', 'Aldehydes', 'Biomolecules'] },
                          { title: 'Inorganic', items: ['Bonding', 'Coordination', 'Periodic Table', 'Block Elements'] },
                        ]
                      }
                    ];

                    return (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {syllabusData.map((subject, idx) => {
                            const bgHeader = subject.color === 'blue' ? 'bg-blue-500' : subject.color === 'orange' ? 'bg-orange-500' : subject.color === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500';
                            const textHeader = subject.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : subject.color === 'orange' ? 'text-orange-600 dark:text-orange-400' : subject.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400';
                            const bgSoft = subject.color === 'blue' ? 'bg-blue-50/50 dark:bg-blue-900/10' : subject.color === 'orange' ? 'bg-orange-50/50 dark:bg-orange-900/10' : subject.color === 'emerald' ? 'bg-emerald-50/50 dark:bg-emerald-900/10' : 'bg-rose-50/50 dark:bg-rose-900/10';
                            const borderSoft = subject.color === 'blue' ? 'border-blue-100 dark:border-blue-800' : subject.color === 'orange' ? 'border-orange-100 dark:border-orange-800' : subject.color === 'emerald' ? 'border-emerald-100 dark:border-emerald-800' : 'border-rose-100 dark:border-rose-800';
                            const pillBg = subject.color === 'blue' ? 'hover:bg-blue-100 dark:hover:bg-blue-900/30' : subject.color === 'orange' ? 'hover:bg-orange-100 dark:hover:bg-orange-900/30' : subject.color === 'emerald' ? 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30' : 'hover:bg-rose-100 dark:hover:bg-rose-900/30';

                            return (
                                <div key={idx} className="flex flex-col bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 group">
                                  {/* Header */}
                                  <div className={`p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 ${bgSoft}`}>
                                    <div className="flex items-center gap-3">
                                      <div className={`w-3 h-8 ${bgHeader} rounded-full`}></div>
                                      <h3 className={`text-2xl font-black ${textHeader}`}>{subject.name}</h3>
                                    </div>
                                  </div>
                                  {/* Topics List */}
                                  <div className="p-5 sm:p-6 flex-1 flex flex-col gap-6 bg-slate-50/50 dark:bg-[#111827]">
                                    {subject.topics.map((topic, tIdx) => (
                                      <div key={tIdx}>
                                        <h4 className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                          <div className={`w-1.5 h-1.5 rounded-full ${bgHeader} opacity-80`}></div> {topic.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                          {topic.items.map((item, iIdx) => (
                                            <span key={iIdx} className={`px-2.5 py-1 text-xs font-bold rounded-lg bg-white dark:bg-slate-900 border ${borderSoft} text-slate-700 dark:text-slate-300 shadow-sm transition-colors cursor-default ${pillBg}`}>
                                              {item}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                            );
                          })}
                        </div>
                    );
                  })()}
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="animate-in fade-in duration-500 py-2">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">AI Attempt History & Analytics</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Detailed history of all your attempts across {courseData.testCount} papers.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 px-3 py-1.5 rounded-lg text-xs font-bold border border-rose-200 dark:border-rose-500/20">
                      <RotateCcw className="w-3.5 h-3.5" /> Auto-deletes 7 days after attempt
                    </div>
                  </div>

                  <div className="flex bg-slate-100 dark:bg-slate-800/80 p-2 rounded-xl mb-8 items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 px-2 flex items-center gap-1"><ListFilter className="w-4 h-4" /> Filters:</span>
                    <button className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold px-4 py-1.5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 transition-colors">All Tests</button>
                    <button className="bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold px-4 py-1.5 rounded-lg transition-colors">Full Mock Test 01</button>
                    <button className="bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold px-4 py-1.5 rounded-lg transition-colors">Part Syllabus Test 03</button>
                  </div>

                  {/* Vertical Timeline */}
                  <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[34px] md:before:mx-auto md:before:translate-x-0 before:w-0.5 before:bg-gradient-to-b before:from-slate-200 before:via-slate-200 dark:before:from-slate-800 dark:before:via-slate-800 before:to-transparent">
                    {historyData.length > 0 ? historyData.map((dayLine, i) => (
                      <div key={i} className="relative z-10 w-full">

                        {/* Day Marker */}
                        <div className="flex items-center justify-start md:justify-center mb-6 pl-4 md:pl-0 mt-[-8px]">
                          <div className="bg-white dark:bg-[#111827] border-2 border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 shadow-sm z-20">
                            <span className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2"><Calendar className="w-4 h-4 text-indigo-500" /> {dayLine.date}</span>
                            <span className="text-xs font-bold text-slate-400 hidden sm:block">•</span>
                            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded">Deletes in {dayLine.deletesIn}</span>
                          </div>
                        </div>

                        {/* Card Content grouped by Day and Test */}
                        <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl shadow-slate-200/20 dark:shadow-none mb-6 lg:w-[94%] lg:mx-auto relative z-20">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                            <h3 className="text-lg md:text-xl font-black text-indigo-900 dark:text-indigo-400 flex items-center gap-2">
                              <FileText className="w-5 h-5 text-indigo-500 hidden sm:block" /> {dayLine.testName}
                            </h3>
                            <span className="text-xs text-slate-600 dark:text-slate-300 font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 w-max">{dayLine.attempts.length} Attempts this day</span>
                          </div>

                          <div className="space-y-6">
                            {dayLine.attempts.map((attempt: any, k: number) => (
                              <div key={k} className="group border-2 border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/5 bg-white dark:bg-slate-900">

                                {/* Attempt Header */}
                                <div className="bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80">
                                  <div className="flex items-center gap-3 w-full md:w-auto">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-base shrink-0 shadow-sm border border-indigo-200 dark:border-indigo-800/50">#{attempt.attemptNo}</div>
                                    <div>
                                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block">Attempt Timestamp</span>
                                      <span className="text-base font-black text-slate-900 dark:text-white block mt-0.5">{attempt.time}</span>
                                    </div>
                                  </div>

                                  <div className="flex gap-2 sm:gap-4 flex-wrap w-full md:w-auto mt-2 md:mt-0 items-center">
                                    <button onClick={() => router.push(`/test/${attempt.testId}/analysis?score=${attempt.score}&isNeet=${courseData.exam === 'Medical'}&attemptId=${attempt.rawAttemptId}`)} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm transition-colors w-full md:w-auto justify-center">
                                      <BarChart className="w-4 h-4" /> View Full Analytics
                                    </button>
                                  </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 px-4 py-3 border-b flex flex-wrap gap-4 border-slate-100 dark:border-slate-800/80">
                                  <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-0.5">Score</span>
                                    <span className="text-base font-black text-slate-900 dark:text-white">{attempt.score}<span className="text-xs text-slate-400">/{attempt.total}</span></span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-0.5">Accuracy</span>
                                    <span className="text-base font-black text-emerald-600 dark:text-emerald-400">{attempt.accuracy}</span>
                                  </div>
                                </div>

                                {/* Attempt details body */}
                                <div className="p-5 md:p-6 bg-white dark:bg-transparent">
                                  <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Left Panel: Time Stats */}
                                    <div className="lg:w-1/3 shrink-0">
                                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-300 dark:text-slate-500" /> Time Analysis</h5>
                                      <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="bg-blue-50/70 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex flex-col items-center text-center justify-center">
                                          <div className="text-2xl font-black text-blue-700 dark:text-blue-400 mb-1 leading-none">{attempt.timeTaken}</div>
                                          <div className="text-[10px] font-bold text-blue-500 dark:text-blue-600 uppercase tracking-widest">Total Mins Spent</div>
                                        </div>
                                        <div className="bg-purple-50/70 dark:bg-purple-900/10 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/30 flex flex-col items-center text-center justify-center">
                                          <div className="text-2xl font-black text-purple-700 dark:text-purple-400 mb-1 leading-none">{attempt.avgTimePerQ}</div>
                                          <div className="text-[10px] font-bold text-purple-500 dark:text-purple-600 uppercase tracking-widest">Avg Mins / Q</div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Right Panel: Subject Breakdown */}
                                    <div className="flex-1">
                                      <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5"><Activity className="w-4 h-4 text-slate-300 dark:text-slate-500" /> Subject Wise Question Breakdown</h5>
                                      <div className="space-y-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                                        {attempt.stats.map((s: any, sid: number) => {
                                          const totalQs = s.correct + s.wrong + (s.skipped || 0);
                                          const corPct = (s.correct / totalQs) * 100;
                                          const wrngPct = (s.wrong / totalQs) * 100;
                                          const skipPct = ((s.skipped || 0) / totalQs) * 100;

                                          return (
                                            <div key={sid} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                                              <div className="flex items-center gap-2 sm:w-32 shrink-0">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                                <span className="font-bold text-slate-800 dark:text-slate-200">{s.name}</span>
                                              </div>
                                              <div className="flex items-center gap-4 flex-1">
                                                <div className="flex-1 h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
                                                  <div style={{ width: `${corPct}%` }} className="h-full bg-emerald-500"></div>
                                                  <div style={{ width: `${wrngPct}%` }} className="h-full bg-rose-500"></div>
                                                  <div style={{ width: `${skipPct}%` }} className="h-full bg-slate-300 dark:bg-slate-600"></div>
                                                </div>
                                              </div>
                                              <div className="flex items-center gap-3 shrink-0 text-xs font-bold w-full sm:w-auto justify-between sm:justify-start bg-white dark:bg-slate-800 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                                                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> {s.correct} <span className="text-[10px] text-slate-400">Cor</span></span>
                                                <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {s.wrong} <span className="text-[10px] text-slate-400">Wrn</span></span>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-10 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800">
                        <History className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No attempts found</h3>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">You haven't attempted any mock tests in this series yet.</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-500/10 p-5 rounded-2xl flex items-start sm:items-center gap-4 border border-indigo-100 dark:border-indigo-500/20 text-indigo-800 dark:text-indigo-300 text-sm font-medium mt-8 shadow-sm">
                    <div className="bg-indigo-100 dark:bg-indigo-500/20 p-2 rounded-full shrink-0">
                      <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="leading-relaxed">
                      <strong className="font-bold text-indigo-900 dark:text-indigo-200">History Storage Rules:</strong> This is a detailed preview of the attempt history. Logs of individually marked questions and second-by-second analytics are stored for 7 days post-attempt to maintain UI speed. Overall aggregate scores are stored forever.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pyp' && (
                <div className="animate-in fade-in duration-500 py-2">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Previous Year Papers</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Practice exactly what was asked in the official real exam previously.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {[
                      { year: '2025', date: 'Session 2 (April Attempt)', shift: 'Morning Shift' },
                      { year: '2025', date: 'Session 1 (Jan Attempt)', shift: 'Evening Shift' },
                      { year: '2024', date: 'Session 2 (April Attempt)', shift: 'Morning Shift' },
                      { year: '2024', date: 'Session 1 (Jan Attempt)', shift: 'Evening Shift' },
                      { year: '2023', date: 'Session 1 (Jan Attempt)', shift: 'Morning Shift' }
                    ].map((p, index) => (
                      <div
                        key={index}
                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-indigo-50/30 dark:hover:bg-indigo-500/5 transition-all gap-4 bg-white dark:bg-[#111827]"
                      >
                        <div className="flex items-start gap-4 w-full">
                          <div className="w-14 h-14 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex flex-col items-center justify-center shrink-0 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400">
                            <History className="w-5 h-5 mb-0.5" />
                            <span className="font-black text-[10px] uppercase">{p.year}</span>
                          </div>
                          <div className="flex-1 mt-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-slate-900 dark:text-white">{courseData.exam} {p.year} Real Paper</h3>
                              <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">Official</span>
                            </div>
                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-3">
                              <span>{p.date}</span> <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span> <span>{p.shift}</span>
                            </div>
                          </div>
                        </div>
                        {isPurchased ? (
                          <button
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-500 transition-all shrink-0"
                          >
                            <PlayCircle className="w-4 h-4" /> Start PYP
                          </button>
                        ) : (
                          <button
                            onClick={initiatePayment}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-500 transition-all shrink-0"
                          >
                            <Lock className="w-4 h-4" /> Unlock PYP
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'aiqb' && (
                <div className="animate-in fade-in duration-500 py-2">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 p-6 sm:p-8 rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 lg:w-2/3">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase flex items-center gap-1.5 border border-white/20"><Sparkles className="w-3.5 h-3.5" /> AI Engine</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black mb-3 text-white leading-tight">Generate Unlimited <br />Chapter-wise Mocks</h2>
                      <p className="text-indigo-100 text-sm md:text-base font-medium leading-relaxed opacity-90 max-w-lg mb-6">Select your weak chapters, specify question count and difficulty, and our AI will instantly compile a fresh, non-repeating custom mock test targeted for your improvement.</p>
                      {isPurchased ? (
                        <button className="bg-white text-emerald-700 hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 text-sm w-max">
                          <CheckCircle2 className="w-4 h-4" /> Generator Ready - Start
                        </button>
                      ) : (
                        <button onClick={initiatePayment} className="bg-white text-indigo-700 hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-indigo-900/20 text-sm w-max">
                          <Lock className="w-4 h-4" /> Subscribe to Unlock Generator
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    {[
                      { step: 'Step 1', t: 'Select Subjects/Chapters', d: 'Choose from Physics, Chem, Math.' },
                      { step: 'Step 2', t: 'Set Difficulty Profile', d: 'Easy, Moderate, Hard or Mixed.' },
                      { step: 'Step 3', t: 'Select Question Count', d: 'From 10 quick MCQs up to 90.' }
                    ].map((s, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 relative overflow-hidden">
                        <span className="text-4xl text-slate-100 dark:text-slate-800/80 font-black absolute top-2 right-2 -z-10">{i + 1}</span>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 relative z-10">{s.step}</h4>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-bold mb-2 relative z-10">{s.t}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium relative z-10">{s.d}</p>
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Right Sticky Column - Purchase Widget */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-24 inline-block w-full">
              <div className="bg-white dark:bg-[#111827] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden">

                {/* Image / Graphic placeholder */}
                {courseData.imageUrl ? (
                  <div className="h-40 sm:h-48 bg-slate-100 dark:bg-slate-800 relative w-full flex items-center justify-center overflow-hidden">
                    <img src={courseData.imageUrl} alt={courseData.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="h-40 sm:h-48 bg-slate-100 dark:bg-slate-800 relative w-full flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-600/5 mix-blend-multiply dark:mix-blend-lighten"></div>
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                    <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-2xl shadow-sm rotate-3 flex items-center justify-center border border-slate-200 dark:border-slate-800 z-10 transition-transform hover:rotate-6">
                      <PlayCircle className="w-10 h-10 text-indigo-500" />
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-end gap-3 mb-2">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">₹{courseData.price}</h2>
                    <span className="text-lg font-bold text-slate-400 dark:text-slate-500 line-through mb-0.5">₹{courseData.originalPrice}</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded ml-auto mb-1 border border-emerald-100 dark:border-emerald-500/20">
                      {discountPercent}% OFF
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-6 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Unlocks full complete validity
                  </p>

                  {isPurchased ? (
                    <button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] mb-4 flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" /> Enrolled
                    </button>
                  ) : (
                    <button
                      onClick={initiatePayment}
                      disabled={isCheckoutLoading}
                      className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isCheckoutLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        "Buy Now"
                      )}
                    </button>
                  )}

                  <p className="text-xs font-semibold text-center text-slate-500 dark:text-slate-400 mb-6">
                    100% secure payment. Full access immediately.
                  </p>

                  <div className="mt-8 pt-6 border-t border-dashed border-slate-200 dark:border-slate-800">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 text-[13px] uppercase tracking-widest flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-500" /> Inside The Package
                    </h4>
                    <ul className="space-y-2.5">
                      {courseData.features.map((feature: string, idx: number) => (
                        <li key={idx} className="group relative flex items-start gap-3.5 p-3.5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-[#111827] dark:to-slate-900 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all w-full overflow-hidden">
                          {/* Inner glowing highlight */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 dark:bg-indigo-500/10 blur-2xl rounded-full group-hover:bg-indigo-500/15 transition-colors duration-500"></div>
                          
                          <div className="relative w-8 h-8 shrink-0 rounded-[10px] bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <span className="relative z-10 text-[13.5px] font-bold text-slate-700 dark:text-slate-300 leading-snug pt-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Mobile Sticky Bar - Only visible on very small screens since layout handles stacking */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 p-4 z-50 flex items-center justify-between shadow-[0_-5px_15px_rgba(0,0,0,0.05)] pt-3 pb-4">
        <div>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 line-through">₹{courseData.originalPrice}</p>
          <p className="text-xl font-black text-slate-900 dark:text-white leading-tight">₹{courseData.price}</p>
        </div>
        {isPurchased ? (
          <button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" /> Enrolled
          </button>
        ) : (
          <button
            onClick={initiatePayment}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl"
          >
            Buy Now
          </button>
        )}
      </div>

    </div>

    {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="absolute inset-0 cursor-pointer" onClick={() => setShowLoginModal(false)}></div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden relative z-10 animate-in zoom-in-95 duration-200">
                <div className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 border border-indigo-100 dark:border-indigo-500/20">
                        <Lock className="w-8 h-8 shrink-0" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Login Required</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                        You need to be signed in to purchase this Test Series and unlock your potential. Secure your access now!
                    </p>
                    <div className="flex flex-col w-full gap-3">
                       <button onClick={() => router.push('/login')} className="w-full py-3.5 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/20 flex justify-center items-center gap-2">
                           Proceed to Login
                       </button>
                       <button onClick={() => setShowLoginModal(false)} className="w-full py-3.5 rounded-xl font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                           Cancel
                       </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
}
