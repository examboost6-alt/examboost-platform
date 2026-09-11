"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { getSupabaseClient } from '@/lib/supabaseClient';
import {
  Lock, FileText, CheckCircle, Award,
  Clock, ShieldCheck, PlayCircle, BookOpen,
  Check, Star, Compass, HelpCircle, ChevronDown, ArrowRight, X, Flame, Zap
} from 'lucide-react';

const MOCK_DB: Record<string, {
  title: string;
  exam: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  testCount: number;
  imageUrl: string;
  rating: number;
  ratingCount: string;
}> = {
  'mock-eng-1': {
    title: 'Shikhar JEE Main 2026 Test Series',
    exam: 'Engineering',
    price: 1399,
    originalPrice: 2999,
    description: '15 Full-Length Mock Tests strictly based on latest 2026 NTA CBT pattern with instant All India Rank and detailed solutions.',
    features: [
      '15 Full-Length Tests strictly on latest 2026 NTA pattern',
      'Real NTA CBT Interface with +4 / -1 marking scheme',
      'Instant All India Rank (AIR) & Percentile prediction',
      'Detailed step-by-step solutions for all 75 questions',
      'Unlimited re-attempts with complete validity till JEE 2026'
    ],
    testCount: 15,
    imageUrl: '/shikhar-jee.png',
    rating: 4.9,
    ratingCount: '3,800+'
  },
  'mock-eng-2': {
    title: 'Vijay IIT Advance 2026 Test Series',
    exam: 'Engineering',
    price: 1999,
    originalPrice: 3999,
    description: '35+ Advanced Multi-Concept Mock Tests for JEE Advanced aspirants. Features multi-correct, integer, and comprehension questions.',
    features: [
      '25 Full JEE Advanced Mocks with multi-pattern papers',
      '10 Official Previous Year Papers with detailed solutions',
      'Deep concept analytics & speed-accuracy breakdown',
      'Unlimited re-attempts till JEE Advanced 2026'
    ],
    testCount: 35,
    imageUrl: '/vijay-jee.png',
    rating: 4.9,
    ratingCount: '2,100+'
  },
  'mock-med-1': {
    title: 'ExamBoost NEET Shourya Test Series 2026',
    exam: 'Medical',
    price: 2999,
    originalPrice: 4999,
    description: '20 NCERT-centric Full Syllabus Mock Tests simulating the latest NEET UG 2026 pattern (720 Marks).',
    features: [
      '15 Full NEET Mock Tests (720 Marks, 200 Questions)',
      '5 Intensive High-Yield Tests on NCERT line-by-line',
      '10 Official Previous Year Papers included',
      'Detailed video & text solutions for all questions'
    ],
    testCount: 20,
    imageUrl: '/shourya-neet.png',
    rating: 4.9,
    ratingCount: '4,600+'
  }
};

export default function SeriesPage() {
  const params = useParams();
  const router = useRouter();
  const seriesId = (params.id as string) || 'mock-eng-1';
  
  const courseData = MOCK_DB[seriesId] || {
    title: 'Premium Mock Test Series',
    exam: 'Preparation',
    price: 1299,
    originalPrice: 2499,
    description: 'Full-length mock tests designed by expert educators with real NTA exam simulation.',
    features: [
      'Full-Length Examination Mocks',
      'Detailed Step-by-Step Solutions',
      'All India Rank Prediction',
      'Unlimited Re-attempts'
    ],
    imageUrl: '',
    testCount: 15,
    rating: 4.8,
    ratingCount: '1,200+'
  };

  const [activeTab, setActiveTab] = useState<'tests' | 'syllabus'>('tests');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isClient, setIsClient] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Ensure page always starts at the top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const checkPurchase = async () => {
      const supabase = getSupabaseClient();
      if (!supabase) return;
      const { data: auth } = await supabase.auth.getSession();
      if (auth.session) {
        setUserId(auth.session.user.id);
        const numExtracted = String(seriesId).replace(/[^0-9]/g, '');
        const numericSeriesId = numExtracted ? parseInt(numExtracted, 10) : -1;
        
        const { data: purchases } = await supabase
          .from('purchases')
          .select('id')
          .eq('user_id', auth.session.user.id)
          .eq('status', 'success')
          .in('series_id', [0, numericSeriesId]);

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
        name: "ExamBoost",
        description: courseData.title,
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
          name: "Student",
          email: "student@examboost.in",
          contact: "9999999999",
        },
        theme: { color: "#ea580c" },
        modal: {
          ondismiss: function() {
            setIsCheckoutLoading(false);
          }
        }
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any) {
        alert('Payment Failed: ' + response.error.description);
        setIsCheckoutLoading(false);
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong during payment initiation.");
      setIsCheckoutLoading(false);
    }
  };

  const startTestDirectly = (testId: string) => {
    router.push(`/test/${testId}/instructions`);
  };

  const tests = Array.from({ length: courseData.testCount }).map((_, i) => {
    return {
      id: `${seriesId}-test-${i + 1}`,
      number: i + 1,
      title: `${courseData.exam} Full Mock Test ${String(i + 1).padStart(2, '0')}`,
      questions: courseData.exam === 'Medical' ? 180 : courseData.exam === 'Engineering' ? 75 : 100,
      marks: courseData.exam === 'Medical' ? 720 : courseData.exam === 'Engineering' ? 300 : 100,
      duration: '180 Mins',
      isFree: i === 0,
      isLocked: i === 0 ? false : !isPurchased
    };
  });

  const discountPercent = Math.round(((courseData.originalPrice - courseData.price) / courseData.originalPrice) * 100);

  if (!isClient) return null;

  return (
    <>
      <div className="min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 font-sans pt-16 md:pt-20 lg:pt-24 pb-20 transition-colors duration-150">
        <script src="https://checkout.razorpay.com/v1/checkout.js" async />

        {/* Premium Dark Hero Banner */}
        <section className="bg-[#0B1222] text-white border-b border-slate-800/80 relative overflow-hidden py-8 sm:py-12">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
                {courseData.exam} Entrance 2026
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">
                {courseData.testCount} Full-Length Mocks
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {courseData.rating} ({courseData.ratingCount} Aspirants)
              </span>
            </div>

            {/* Big Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-[1.15] mb-3 text-white">
              {courseData.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-medium">
              {courseData.description}
            </p>

            {/* TWO PRIMARY ACTION BUTTONS (Bina padhe pata lag jaye!) */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => startTestDirectly(tests[0].id)}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/40 flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <span>Start Free Mock (Test 01)</span>
              </button>

              {!isPurchased && (
                <button
                  onClick={initiatePayment}
                  disabled={isCheckoutLoading}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-900/40 flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                >
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>Unlock All {courseData.testCount} Tests • ₹{courseData.price}</span>
                </button>
              )}
            </div>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 pt-5 border-t border-slate-800 text-xs text-slate-300">
              <span className="flex items-center gap-2 font-medium"><Check className="w-4 h-4 text-emerald-400" /> Test 01 is 100% Free</span>
              <span className="flex items-center gap-2 font-medium"><Check className="w-4 h-4 text-emerald-400" /> Real NTA CBT Interface (+4 / -1)</span>
              <span className="flex items-center gap-2 font-medium"><Check className="w-4 h-4 text-emerald-400" /> Instant All India Rank & Percentile</span>
              <span className="flex items-center gap-2 font-medium"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Re-attempts</span>
            </div>

          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Left Column: Test List & Tabs */}
            <div className="w-full lg:w-7/12">
              
              {/* Tab Navigation */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('tests')}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      activeTab === 'tests'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    All {courseData.testCount} Mock Tests
                  </button>

                  <button
                    onClick={() => setActiveTab('syllabus')}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      activeTab === 'syllabus'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    Syllabus & Pattern
                  </button>
                </div>

                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  Click any test to begin
                </span>
              </div>

              {/* TAB 1: Tests List */}
              {activeTab === 'tests' && (
                <div className="space-y-3.5">
                  {tests.map((test) => (
                    <div
                      key={test.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 bg-white dark:bg-[#0C1220] ${
                        test.isFree
                          ? 'border-emerald-500/80 dark:border-emerald-600 bg-emerald-50/30 dark:bg-emerald-950/20 shadow-sm ring-1 ring-emerald-500/30'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {/* Left: Test Info */}
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 font-bold ${
                            test.isFree
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span className="text-[10px] uppercase opacity-80 leading-none">Test</span>
                          <span className="text-base font-black leading-none mt-0.5">{String(test.number).padStart(2, '0')}</span>
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                              {test.title}
                            </h3>
                            {test.isFree && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[11px] font-black uppercase tracking-wider shrink-0 border border-emerald-300/50">
                                100% Free Demo
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <span>{test.questions} Questions</span>
                            <span>•</span>
                            <span>{test.marks} Marks</span>
                            <span>•</span>
                            <span>{test.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Button */}
                      <div className="shrink-0">
                        {test.isFree ? (
                          <button
                            onClick={() => startTestDirectly(test.id)}
                            className="px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                          >
                            <PlayCircle className="w-4 h-4" />
                            <span>Start Free</span>
                          </button>
                        ) : isPurchased ? (
                          <button
                            onClick={() => startTestDirectly(test.id)}
                            className="px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                          >
                            <PlayCircle className="w-4 h-4" />
                            <span>Start Test</span>
                          </button>
                        ) : (
                          <button
                            onClick={initiatePayment}
                            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                          >
                            <Lock className="w-3.5 h-3.5 text-slate-400" />
                            <span>Unlock</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: Syllabus & Pattern */}
              {activeTab === 'syllabus' && (
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#0C1220] border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Exam Pattern ({tests[0].questions} Questions • {tests[0].marks} Marks)</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                      Follows the official NTA CBT interface strictly with real examination timer, color-coded question palette, and instant answer submission.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold">
                      <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-center border border-slate-200/60 dark:border-slate-800">
                        <div className="text-slate-900 dark:text-white font-bold text-sm">Physics</div>
                        <div className="text-slate-500 mt-0.5">25 Questions • 100 Marks</div>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-center border border-slate-200/60 dark:border-slate-800">
                        <div className="text-slate-900 dark:text-white font-bold text-sm">Chemistry</div>
                        <div className="text-slate-500 mt-0.5">25 Questions • 100 Marks</div>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-center border border-slate-200/60 dark:border-slate-800">
                        <div className="text-slate-900 dark:text-white font-bold text-sm">Mathematics</div>
                        <div className="text-slate-500 mt-0.5">25 Questions • 100 Marks</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#0C1220] border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">Updated 2026 NCERT Syllabus</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      All 15 mock tests strictly reflect the latest rationalized syllabus, with zero out-of-syllabus questions and 100% coverage of high-yield exam topics.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Sticky Pricing & Purchase Card (Desktop) */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-28">
              <div className="rounded-2xl bg-white dark:bg-[#0C1220] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm">
                
                {/* Course Poster */}
                {courseData.imageUrl && (
                  <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200/60 dark:border-slate-800 mb-5">
                    <img 
                      src={courseData.imageUrl} 
                      alt={courseData.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                {/* Price Display */}
                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800 mb-5">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900 dark:text-white">₹{courseData.price}</span>
                      <span className="text-sm font-bold text-slate-400 line-through">₹{courseData.originalPrice}</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full">
                      Save {discountPercent}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Full access to all {courseData.testCount} Mock Tests with solutions till exam date
                  </p>
                </div>

                {/* Primary CTA Buttons */}
                <div className="space-y-2.5 mb-5">
                  {isPurchased ? (
                    <div className="w-full py-3.5 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-bold text-center text-sm flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" /> Enrolled • All Tests Unlocked
                    </div>
                  ) : (
                    <button
                      onClick={initiatePayment}
                      disabled={isCheckoutLoading}
                      className="w-full py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isCheckoutLoading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          <span>Buy Now • Unlock All {courseData.testCount} Mocks</span>
                        </>
                      )}
                    </button>
                  )}

                  <button
                    onClick={() => startTestDirectly(tests[0].id)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <PlayCircle className="w-4 h-4 text-emerald-600" />
                    <span>Try Test 01 Free (No Login Needed)</span>
                  </button>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                    What You Get
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {courseData.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Razorpay Secured</span>
                  <span>Instant Access</span>
                </div>

              </div>
            </div>

          </div>

          {/* Full-width FAQ Section Below Grid (Prevents empty right-column void) */}
          <section className="mt-12 sm:mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">Common Questions</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-3">
                {[
                  { q: "Is Test 01 really 100% free without login?", a: "Yes, you can click 'Start Free Mock' and immediately take Test 01 on the real NTA CBT interface without paying, signing up, or entering card details." },
                  { q: "How many times can I re-attempt the mock tests?", a: "You get unlimited re-attempts for all tests till your exam date. Each attempt gives you fresh analytics and rank predictions." },
                  { q: "Are solutions and answer keys provided after the test?", a: "Yes, immediately upon submitting your mock test, you receive detailed step-by-step solutions, correct answer keys, and difficulty breakdown for every question." },
                  { q: "Can I take tests on my mobile phone or tablet?", a: "Yes! ExamBoost works seamlessly on mobile phones, tablets, and laptops. However, for real exam practice, a laptop or desktop is recommended." }
                ].map((faq, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1220] p-4 sm:p-5">
                    <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1.5">{faq.q}</div>
                    <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Mobile Sticky Bottom Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0C1220]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black text-slate-900 dark:text-white">₹{courseData.price}</span>
              <span className="text-xs text-slate-400 line-through">₹{courseData.originalPrice}</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">{discountPercent}% OFF • {courseData.testCount} Mocks</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => startTestDirectly(tests[0].id)}
              className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              Start Free
            </button>

            {!isPurchased && (
              <button
                onClick={initiatePayment}
                disabled={isCheckoutLoading}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                {isCheckoutLoading ? 'Wait...' : `Buy ₹${courseData.price}`}
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Login Modal only when trying to buy locked tests */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setShowLoginModal(false)}></div>
          
          <div className="bg-white dark:bg-[#0D1322] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden relative z-10 p-6 text-center">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto mb-3 border border-orange-200 dark:border-orange-800">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Please Sign In to Enroll
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs mb-5">
              You need an account to buy and unlock all {courseData.testCount} tests.
            </p>

            <button
              onClick={() => router.push(`/login?redirect=/series/${seriesId}`)}
              className="w-full py-3 rounded-xl font-bold bg-orange-600 hover:bg-orange-700 text-white transition-colors text-xs flex justify-center items-center gap-1.5"
            >
              <span>Sign In / Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
