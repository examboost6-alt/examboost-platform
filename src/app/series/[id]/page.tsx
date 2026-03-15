"use client";

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Lock, FileText, CheckCircle, ChevronLeft, Award, Menu, X, Clock, BarChart, Sun, Moon, Calendar, Info } from 'lucide-react';

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
          color: "#2563eb", // Standard blue for this theme
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#111111] font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
      {/* Script for Razorpay */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      {/* Top Navbar */}
      <header className="bg-white dark:bg-[#161616] border-b border-slate-200 dark:border-slate-800/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/dashboard" className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-[#222222] transition-colors text-slate-600 dark:text-slate-300">
              <ChevronLeft className="w-5 h-5" />
            </a>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-base sm:text-lg font-bold leading-tight line-clamp-1">{courseData.title}</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md bg-slate-100 dark:bg-[#222222] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#333333] transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button onClick={initiatePayment} className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors items-center gap-2 border border-blue-700">
              Purchase • ₹{courseData.price}
            </button>
            
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-[#222222]" onClick={() => setSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row relative items-stretch min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className={`fixed md:sticky inset-y-0 left-0 top-[64px] bg-white dark:bg-[#161616] z-40 w-72 md:w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out md:shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800/80`}>
          <div className="p-5 h-full overflow-y-auto">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Curriculum</div>
            <div className="space-y-1 block">
              {[
                { id: 'tests', icon: FileText, label: 'Mock Tests' },
                { id: 'syllabus', icon: Calendar, label: 'Syllabus Planner' },
                { id: 'performance', icon: BarChart, label: 'Performance Stats' },
              ].map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button 
                    key={item.id}
                    onClick={() => {setActiveTab(item.id); setSidebarOpen(false)}}
                    className={`w-full text-left px-4 py-3.5 rounded-md font-medium flex items-center gap-3 transition-colors ${
                      isActive 
                        ? 'text-blue-700 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 shadow-sm' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#222222] border border-transparent'
                    }`}
                  >
                    <item.icon className="w-4 h-4" /> 
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="p-5 border-t border-slate-200 dark:border-slate-800/80 hidden md:block">
            <div className="text-sm font-semibold mb-2">Need Help?</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Call us on our toll-free number for any queries.</p>
            <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-[#222222] p-3 rounded-md">
              <Info className="w-4 h-4 text-slate-400" />
              1800-123-4567
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 w-full bg-white dark:bg-[#111111] md:border-l md:border-transparent">
          {activeTab === 'tests' && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10">
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Test Series Curriculum</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Attempt {courseData.testCount} full length mock tests. Evaluate your preparation.</p>
              </div>

              {/* Locked Banner */}
              <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-lg p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="flex items-start md:items-center gap-4">
                  <div className="p-3 bg-white dark:bg-[#161616] rounded-full text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800 shrink-0 mt-1 md:mt-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-white mb-1">Subscribe to unlock Mock Tests</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Get unrestricted access to all tests, detailed text & video solutions.</p>
                  </div>
                </div>
                <button onClick={initiatePayment} className="w-full md:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap shadow-sm shrink-0">
                  Get Subscription
                </button>
              </div>

              {/* Test List */}
              <div className="space-y-4">
                {tests.map((test) => (
                  <div 
                    key={test.id} 
                    className="border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#161616] rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex gap-4 items-start w-full">
                      <div className="mt-1 shrink-0 p-2 bg-slate-50 dark:bg-[#222222] rounded-md border border-slate-100 dark:border-slate-800">
                        <FileText className="w-5 h-5 text-slate-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-[15px]">{test.title}</h4>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-slate-400 dark:text-slate-500" /> {test.questions} Questions</span>
                          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-slate-400 dark:text-slate-500" /> {test.marks} Marks</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" /> {test.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={initiatePayment}
                      className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#222222] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shrink-0"
                    >
                      <Lock className="w-4 h-4 text-slate-400" /> Unlock
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== 'tests' && (
            <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center max-w-sm mx-auto px-4 py-12">
              <div className="w-20 h-20 bg-slate-50 dark:bg-[#161616] border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Section Locked</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                Subscribe to the series to access {activeTab === 'syllabus' ? "Syllabus Planner" : "Performance Analytics"}.
              </p>
              <button 
                onClick={initiatePayment} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors w-full"
              >
                Get Subscription • ₹{courseData.price}
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sticky Purchase Bar */}
      <div className="md:hidden sticky bottom-0 left-0 right-0 bg-white dark:bg-[#161616] border-t border-slate-200 dark:border-slate-800 px-4 py-4 z-40 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Subscription</span>
          <span className="text-lg font-bold">₹{courseData.price}</span>
        </div>
        <button onClick={initiatePayment} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2">
           Subscribe
        </button>
      </div>
      
    </div>
  );
}
