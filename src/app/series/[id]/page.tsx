"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { 
  Lock, FileText, CheckCircle, ChevronLeft, Award, 
  Sun, Moon, Clock, BarChart, Calendar, ShieldCheck, 
  PlayCircle, BookOpen, AlertCircle
} from 'lucide-react';

const MOCK_DB: any = {
  'mock-eng-1': {
    title: 'Lakshya JEE Main 2026 Test Series',
    exam: 'Engineering',
    price: 1299,
    originalPrice: 2999,
    description: 'Experience the real NTA interface with 15 Full-Syllabus and 30 Part-Syllabus premium mock tests.',
    features: [
      '15 Full-Length Mocks based on latest NTA pattern', 
      '30 Part-Syllabus Tests for topic-wise mastery', 
      'Detailed Text & Video Solutions by top educators', 
      'All India Rank (AIR) Prediction & Percentile'
    ],
    testCount: 15
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
    testCount: 15
  };

  const [activeTab, setActiveTab] = useState('tests');
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initiatePayment = async () => {
    try {
      if (!(window as any).Razorpay) {
        alert("Payment gateway failed to load. Please check your connection.");
        return;
      }
      
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: courseData.price, courseId: seriesId }),
      });
      const orderData = await orderRes.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "ExamBoost Platform",
        description: `Purchase: ${courseData.title}`,
        order_id: orderData.id,
        handler: function (response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}. Your tests are now unlocked (Demo).`);
          // Note: In real app, we update the DB here and refresh state to unlocked.
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#4f46e5",
        },
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

  const tests = Array.from({ length: courseData.testCount }).map((_, i) => ({
    id: i + 1,
    title: `${courseData.exam} Full Mock Test - ${i + 1}`,
    questions: 90,
    marks: 300,
    duration: '180 Mins',
    isLocked: true
  }));

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
                { id: 'performance', label: 'Analytics', icon: BarChart },
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
                        <button 
                          onClick={initiatePayment} 
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all shrink-0"
                        >
                          <Lock className="w-4 h-4" /> Unlock
                        </button>
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
                <div className="h-40 sm:h-48 bg-slate-100 dark:bg-slate-800 relative w-full flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-600/5 mix-blend-multiply dark:mix-blend-lighten"></div>
                  {/* Vector-like edtech background pattern */}
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-2xl shadow-sm rotate-3 flex items-center justify-center border border-slate-200 dark:border-slate-800 z-10 transition-transform hover:rotate-6">
                    <PlayCircle className="w-10 h-10 text-indigo-500" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-end gap-3 mb-2">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">₹{courseData.price}</h2>
                    <span className="text-lg font-bold text-slate-400 dark:text-slate-500 line-through mb-0.5">₹{courseData.originalPrice}</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded ml-auto mb-1 border border-emerald-100 dark:border-emerald-500/20">
                      {discountPercent}% OFF
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-rose-500 dark:text-rose-400 mb-6 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Limited time offer
                  </p>

                  <button 
                    onClick={initiatePayment} 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] mb-4"
                  >
                    Buy Now
                  </button>

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
        <button 
          onClick={initiatePayment} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl"
        >
          Buy Now
        </button>
      </div>

    </div>
  );
}
