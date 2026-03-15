"use client";

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Lock, FileText, CheckCircle, ChevronLeft, ShieldCheck, Award, ChevronRight, Menu, X, Clock, BarChart, Sun, Moon, Sparkles, BookOpen, Target, HelpCircle } from 'lucide-react';

const MOCK_DB: any = {
  'mock-eng-1': {
    title: 'Lakshya JEE Main 2026 Test Series',
    exam: 'Engineering',
    price: 1299,
    description: 'Experience the real NTA interface with 15 Full-Syllabus and 30 Part-Syllabus premium mock tests.',
    features: ['15 Full-Length Mocks', '30 Part-Syllabus Tests', 'Detailed Video Solutions', 'All India Rank Prediction'],
    testCount: 15
  }
};

export default function SeriesPage() {
  const params = useParams();
  const seriesId = params.id as string;
  const courseData = MOCK_DB[seriesId] || {
    title: 'Premium Mock Test Series',
    exam: 'Preparation',
    price: 1299,
    description: 'Advance your preparation with our premium mock tests designed by expert educators.',
    features: ['Full-Length Mocks', 'Detailed Solutions', 'Rank Prediction'],
    testCount: 15
  };

  const [activeTab, setActiveTab] = useState('tests');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex flex-col font-sans transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100">
      {/* Script for Razorpay */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      {/* Top Navbar */}
      <header className="bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="/dashboard" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300">
              <ChevronLeft className="w-5 h-5" />
            </a>
            <div className="flex flex-col">
              <h1 className="text-base md:text-xl font-black text-slate-900 dark:text-white leading-tight tracking-tight line-clamp-1">
                {courseData.title}
              </h1>
              <div className="flex items-center gap-2 mt-1 text-[11px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500"/> Verified</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span>{courseData.exam} Target</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 md:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
            
            <div className="hidden md:flex items-center">
              <button onClick={initiatePayment} className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all flex items-center gap-2">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <Lock className="w-4 h-4"/> 
                <span>Purchase • ₹{courseData.price}</span>
              </button>
            </div>
            
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-300" onClick={() => setSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row relative">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 bg-white dark:bg-[#0f172a] shadow-2xl z-50 w-72 transform transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] md:translate-x-0 md:static md:w-[280px] lg:w-80 md:border-r md:border-slate-200/60 dark:md:border-slate-800/60 md:shadow-none md:shrink-0 pt-20 md:pt-8 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="px-5 md:px-6 h-full overflow-y-auto pb-24 md:pb-8 scrollbar-hide">
            <h3 className="text-xs font-black tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-4 ml-2">Modules</h3>
            <div className="flex flex-col gap-1.5 mb-8">
              {[
                { id: 'tests', icon: BookOpen, label: 'Mock Tests' },
                { id: 'syllabus', icon: Target, label: 'Syllabus Planner' },
                { id: 'performance', icon: BarChart, label: 'Performance Stats' },
              ].map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button 
                    key={item.id}
                    onClick={() => {setActiveTab(item.id); setSidebarOpen(false)}}
                    className={`relative flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-500/10 shadow-sm border border-indigo-100/50 dark:border-indigo-500/20' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent'
                    }`}
                  >
                    {isActive && <motion.div layoutId="sidebar-active" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-md" />}
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`} /> 
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Premium Upsell Widget */}
            <div className="relative rounded-3xl p-6 overflow-hidden border border-slate-200/50 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/50 to-white dark:from-[#111827] dark:to-[#0f172a] shadow-sm">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/20 blur-2xl rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-20 h-20 bg-purple-500/10 dark:bg-purple-500/20 blur-xl rounded-full pointer-events-none"></div>
              
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-black text-lg tracking-tight mb-2">Unlock Premium</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-5 leading-relaxed">
                Get full access to all mock tests, video solutions, and detailed analytics.
              </p>
              <button 
                onClick={initiatePayment} 
                className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors text-sm flex items-center justify-center gap-2"
              >
                Enroll Now <ChevronRight className="w-4 h-4"/>
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-10 w-full overflow-y-auto">
          {activeTab === 'tests' && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-4xl mx-auto w-full"
            >
              
              {/* Grand Purchase Banner */}
              <motion.div variants={itemVariants} className="relative w-full rounded-3xl p-[1px] mb-10 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 dark:from-amber-500/50 dark:via-orange-500/50 dark:to-amber-500/50 shadow-lg shadow-amber-500/10 dark:shadow-none overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-20 dark:opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white dark:bg-[#111827] rounded-[23px] p-5 sm:p-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  
                  <div className="flex items-center gap-5 z-10 w-full md:w-auto">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center shrink-0 shadow-inner">
                      <Lock className="w-7 h-7 text-amber-500 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-black text-slate-800 dark:text-white text-lg sm:text-xl md:text-2xl mb-1 tracking-tight">Your Dashboard is Locked</h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Purchase series to unlock {courseData.testCount} Premium Mocks.</p>
                    </div>
                  </div>
                  
                  <div className="z-10 w-full md:w-auto shrink-0">
                    <button onClick={initiatePayment} className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-bold tracking-wide shadow-md shadow-amber-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                      Unlock Everything 
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Course Intro */}
              <motion.div variants={itemVariants} className="mb-8 pl-1">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Full Length Mock Tests</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-[15px] max-w-2xl leading-relaxed">
                  {courseData.testCount} meticulously researched mock tests mapped exactly to the latest NTA marking scheme, difficulty level, and interface.
                </p>
              </motion.div>

              {/* Test List */}
              <div className="space-y-4 md:space-y-5">
                {tests.map((test) => (
                  <motion.div 
                    variants={itemVariants}
                    key={test.id} 
                    className="relative bg-white dark:bg-[#0f172a] rounded-[1.5rem] p-5 sm:p-6 md:px-8 transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-indigo-500/5 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500/40 flex flex-col md:flex-row gap-5 items-center justify-between group cursor-pointer"
                    onClick={initiatePayment}
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/[0.03] to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem] pointer-events-none"></div>

                    <div className="w-full md:w-auto flex items-start sm:items-center gap-4 sm:gap-6 z-10">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700/60 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:border-indigo-200 dark:group-hover:border-indigo-500/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                        <FileText className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <h3 className="font-bold text-base sm:text-lg text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight line-clamp-1">{test.title}</h3>
                          <span className="inline-flex items-center w-fit gap-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-black uppercase px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                            <Lock className="w-3 h-3"/> Locked
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-500">
                          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400/80"/> {test.questions} Qs</span>
                          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-500 dark:text-amber-400/80"/> {test.marks} Marks</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-500 dark:text-blue-400/80"/> {test.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full md:w-auto mt-2 md:mt-0 bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-slate-500 dark:text-slate-400 group-hover:text-white dark:group-hover:text-white border border-slate-200 dark:border-slate-700 group-hover:border-transparent px-6 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base z-10"
                    >
                      <Lock className="w-4 h-4"/> Unlock
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab !== 'tests' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              className="flex flex-col items-center justify-center h-[60vh] text-center max-w-lg mx-auto"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-indigo-500/20 dark:bg-indigo-500/10 blur-3xl rounded-full scale-150"></div>
                <div className="relative w-28 h-28 bg-white dark:bg-[#0f172a] shadow-xl dark:shadow-2xl dark:shadow-black/50 border border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center">
                  <Lock className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-[#0f172a]">
                    <Sparkles className="w-5 h-5"/>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-black text-slate-800 dark:text-white mb-4 tracking-tight">Feature Locked</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed text-lg">
                Gain access to {activeTab === 'syllabus' ? "our advanced syllabus tracker" : "deep AI-driven performance analytics"} by enrolling in the full {courseData.exam} test series.
              </p>
              <button 
                onClick={initiatePayment} 
                className="group relative overflow-hidden bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-8 py-3.5 rounded-full font-bold shadow-xl transition-all text-lg flex items-center gap-2 transform hover:scale-[1.02]"
              >
                <span>Purchase Now • ₹{courseData.price}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </button>
            </motion.div>
          )}
        </main>
      </div>
      
      {/* Mobile Sticky Purchase Bar */}
      <div className="md:hidden sticky bottom-0 left-0 right-0 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 px-5 pt-4 pb-6 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.4)] z-50 flex justify-between items-center">
        <div>
          <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">Total Price</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">₹{courseData.price}</p>
        </div>
        <button onClick={initiatePayment} className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-indigo-600/20 active:scale-95 transition-transform flex items-center gap-2">
          <Lock className="w-4 h-4"/> Enroll Now
        </button>
      </div>
      
    </div>
  );
}
