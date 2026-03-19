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
  ListFilter, RotateCcw, Activity, Info, Sparkles, History
} from 'lucide-react';

const MOCK_DB: any = {
  'mock-eng-1': {
    title: 'Shikhar JEE Main 2026 Test Series',
    exam: 'Engineering',
    price: 1299,
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
    price: 1499,
    originalPrice: 2999,
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
    } catch(e) {
        console.error("Could not load history", e);
    }
  }, [seriesId, isClient]);

  const [isPurchased, setIsPurchased] = useState(false);
  const [userId, setUserId] = useState<string|null>(null);

  useEffect(() => {
    setIsClient(true);
    const checkPurchase = async () => {
      const supabase = getSupabaseClient();
      if (!supabase) return;
      const { data: auth } = await supabase.auth.getSession();
      if (auth.session) {
        setUserId(auth.session.user.id);
        
        // Grant free access to all logged-in users per user request
        setIsPurchased(true);
      }
    };
    checkPurchase();
  }, [seriesId]);

  const initiatePayment = async () => {
    if (!userId) {
      alert("Please login first to enroll.");
      router.push('/login');
      return;
    }
    try {
      if (!(window as any).Razorpay) {
        alert("Payment gateway failed to load. Please check your connection.");
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
        return;
      }

      if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
        alert("Razorpay Key is missing in environment variables. Please add NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env.local");
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
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
          contact: "9999999999",
        },
        theme: { color: "#4f46e5" },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any) {
        alert('Payment Failed. Reason: ' + response.error.description);
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong during payment initiation.");
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
            
            {/* Header Content Section */}
            <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/60 dark:border-slate-800/60">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-bold rounded-full border border-indigo-100 dark:border-indigo-500/20">
                  <BookOpen className="w-3.5 h-3.5" />
                  Test Series
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-100 dark:border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {courseData.exam} Target
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-snug">
                {courseData.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
                {courseData.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Mocks</span>
                  <div className="flex items-center gap-2 font-semibold">
                    <FileText className="w-5 h-5 text-indigo-500" />
                    <span>{courseData.testCount} Tests</span>
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Language</span>
                  <div className="flex items-center gap-2 font-semibold">
                    <span>English & Hindi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 p-2 flex overflow-x-auto scrollbar-hide">
              {[
                { id: 'tests', label: 'Mock Tests', icon: FileText },
                { id: 'syllabus', label: 'Syllabus', icon: Calendar },
                { id: 'performance', label: 'History', icon: History },
                { id: 'pyp', label: 'Previous Years', icon: CheckCircle2 },
                { id: 'aiqb', label: 'AI Chapter Tests', icon: Sparkles },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id 
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
                    {tests.map((test, index) => (
                      <div 
                        key={test.id} 
                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-indigo-50/30 dark:hover:bg-indigo-500/5 transition-all gap-4"
                      >
                        <div className="flex items-start gap-4 w-full">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                            <span className="font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-base text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{test.title}</h3>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> {test.questions} Qs</span>
                              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> {test.marks} Marks</span>
                              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {test.duration}</span>
                            </div>
                          </div>
                        </div>
                        {!test.isLocked ? (
                          <Link 
                            href={`/test/${test.id}/instructions`}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all shrink-0"
                          >
                            <PlayCircle className="w-4 h-4" /> Start
                          </Link>
                        ) : (
                          <button 
                            onClick={initiatePayment} 
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all shrink-0"
                          >
                            <Lock className="w-4 h-4" /> Unlock
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'syllabus' && (
                <div className="animate-in fade-in duration-500 space-y-8">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Full Official Syllabus</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Based on the latest NTA 2026 guidelines</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-4 rounded-xl flex gap-3">
                    <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" /></div>
                    <div>
                        <h4 className="font-bold text-emerald-900 dark:text-emerald-300">100% Updated Content</h4>
                        <p className="text-emerald-800 dark:text-emerald-400 font-medium mt-1 text-sm">All our mock tests are mapped strictly to this exact syllabus.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Physics */}
                    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 font-black text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                          <div className="w-2 h-6 bg-blue-500 rounded-full"></div> Physics
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-3 text-sm">Mechanics</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Kinematics</li><li>• Laws of Motion</li><li>• Work Energy Power</li><li>• Rotational Motion</li><li>• Gravitation</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-3 text-sm">Heat & Thermodynamics</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Thermodynamics</li><li>• Kinetic Theory of Gases</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-3 text-sm">Electricity & Magnetism</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Electrostatics</li><li>• Current Electricity</li><li>• Magnetism</li><li>• EMI & AC</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-3 text-sm">Modern Physics</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Dual Nature of Matter</li><li>• Atoms and Nuclei</li><li>• Semiconductors</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Chemistry */}
                    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 font-black text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                          <div className="w-2 h-6 bg-emerald-500 rounded-full"></div> Chemistry
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-3 text-sm">Physical Chemistry</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Mole Concept</li><li>• Thermodynamics</li><li>• Equilibrium</li><li>• Electrochemistry</li><li>• Chemical Kinetics</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-3 text-sm">Organic Chemistry</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Hydrocarbons</li><li>• Alcohols & Ethers</li><li>• Aldehydes & Ketones</li><li>• Carboxylic Acids</li><li>• Biomolecules</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-3 text-sm">Inorganic Chemistry</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Chemical Bonding</li><li>• Coordination Compounds</li><li>• Periodic Table</li><li>• p-Block & d-Block</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Maths */}
                    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 font-black text-lg text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                          <div className="w-2 h-6 bg-rose-500 rounded-full"></div> Mathematics
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <h5 className="font-bold text-rose-600 dark:text-rose-400 mb-3 text-sm">Algebra</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Complex Numbers</li><li>• Quadratic Equations</li><li>• Matrices & Determinants</li><li>• P & C</li><li>• Probability</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-rose-600 dark:text-rose-400 mb-3 text-sm">Calculus</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Limits & Derivates</li><li>• Indefinite Integration</li><li>• Definite Integration</li><li>• Differential Equations</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-rose-600 dark:text-rose-400 mb-3 text-sm">Coordinate Geometry</h5>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-none font-medium">
                                    <li>• Straight Lines</li><li>• Circles</li><li>• Conic Sections</li><li>• Vectors & 3D Geometry</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
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
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 px-2 flex items-center gap-1"><ListFilter className="w-4 h-4"/> Filters:</span>
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
                                  <FileText className="w-5 h-5 text-indigo-500 hidden sm:block"/> {dayLine.testName}
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
                                                        <BarChart className="w-4 h-4"/> View Full Analytics
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
                                                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-300 dark:text-slate-500"/> Time Analysis</h5>
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
                                                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5"><Activity className="w-4 h-4 text-slate-300 dark:text-slate-500"/> Subject Wise Question Breakdown</h5>
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
                                                                            <div style={{width: `${corPct}%`}} className="h-full bg-emerald-500"></div>
                                                                            <div style={{width: `${wrngPct}%`}} className="h-full bg-rose-500"></div>
                                                                            <div style={{width: `${skipPct}%`}} className="h-full bg-slate-300 dark:bg-slate-600"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center gap-3 shrink-0 text-xs font-bold w-full sm:w-auto justify-between sm:justify-start bg-white dark:bg-slate-800 px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                                                                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> {s.correct} <span className="text-[10px] text-slate-400">Cor</span></span>
                                                                        <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {s.wrong} <span className="text-[10px] text-slate-400">Wrn</span></span>
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
                      <h2 className="text-2xl md:text-3xl font-black mb-3 text-white leading-tight">Generate Unlimited <br/>Chapter-wise Mocks</h2>
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
                          <span className="text-4xl text-slate-100 dark:text-slate-800/80 font-black absolute top-2 right-2 -z-10">{i+1}</span>
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
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">FREE</h2>
                    <span className="text-lg font-bold text-slate-400 dark:text-slate-500 line-through mb-0.5">₹{courseData.originalPrice}</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded ml-auto mb-1 border border-emerald-100 dark:border-emerald-500/20">
                      100% OFF
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-rose-500 dark:text-rose-400 mb-6 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Limited time free access
                  </p>

                  {isPurchased ? (
                    <button 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] mb-4 flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" /> Enrolled
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        alert("Please login first to access the free test series.");
                        router.push('/login');
                      }} 
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] mb-4"
                    >
                      Login to Access Free
                    </button>
                  )}

                  <p className="text-xs font-semibold text-center text-slate-500 dark:text-slate-400 mb-6">
                    100% secure payment. Full access immediately.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">This package includes:</h4>
                    <ul className="space-y-3">
                      {courseData.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug">{feature}</span>
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
            <CheckCircle2 className="w-5 h-5"/> Enrolled
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
  );
}
