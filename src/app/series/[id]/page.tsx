"use client";

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, PlayCircle, FileText, CheckCircle, ChevronLeft, ShieldCheck, Award, Zap, ChevronRight, Menu, X, Clock, BarChart } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Script for Razorpay */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/dashboard" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-600">
              <ChevronLeft className="w-5 h-5" />
            </a>
            <div>
              <h1 className="text-lg md:text-xl font-black text-slate-900 leading-tight tracking-tight line-clamp-1">{courseData.title}</h1>
              <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500"/> Verified</span>
                <span>•</span>
                <span>{courseData.exam} Mains Target</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={initiatePayment} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2">
              <Lock className="w-4 h-4"/> Purchase All @ ₹{courseData.price}
            </button>
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row relative">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 bg-white shadow-2xl z-50 w-72 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64 md:border-r md:border-slate-200 md:shadow-none md:shrink-0 pt-16 md:pt-6 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-5 h-full overflow-y-auto">
            <div className="flex flex-col gap-1 mb-6">
              <button 
                onClick={() => {setActiveTab('tests'); setSidebarOpen(false)}}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'tests' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <FileText className="w-5 h-5" /> Mock Tests
              </button>
              <button 
                onClick={() => {setActiveTab('syllabus'); setSidebarOpen(false)}}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'syllabus' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <CheckCircle className="w-5 h-5" /> Syllabus Planner
              </button>
              <button 
                onClick={() => {setActiveTab('performance'); setSidebarOpen(false)}}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'performance' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <BarChart className="w-5 h-5" /> Performance Stats
              </button>
            </div>

            <div className="bg-gradient-to-b from-indigo-50 to-white border border-indigo-100 rounded-2xl p-5 mb-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform">
                <Award className="w-24 h-24 text-indigo-600"/>
              </div>
              <h3 className="text-indigo-900 font-bold mb-1 relative z-10">Premium Access</h3>
              <p className="text-sm text-indigo-700/80 font-medium mb-4 relative z-10 leading-relaxed">Unlock complete test series and analytics dashboard.</p>
              <button onClick={initiatePayment} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl shadow-md transition-colors relative z-10 text-sm flex items-center justify-center gap-2">
                Unlock Now <ChevronRight className="w-4 h-4"/>
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {activeTab === 'tests' && (
            <div className="max-w-4xl mx-auto">
              
              {/* Purchase Banner */}
              <div className="bg-white border-l-4 border-amber-500 shadow-sm rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-800 text-lg">Your tests are locked!</h2>
                    <p className="text-slate-500 font-medium text-sm">Purchase the complete series to unlock {courseData.testCount} Full Mock Tests and solutions.</p>
                  </div>
                </div>
                <button onClick={initiatePayment} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-md shadow-amber-500/20 transition-all whitespace-nowrap">
                  Purchase All • ₹{courseData.price}
                </button>
              </div>

              {/* Course Intro */}
              <div className="mb-8">
                <h2 className="text-2xl font-black text-slate-900 mb-2">Full Length Mock Tests</h2>
                <p className="text-slate-500 font-medium">{courseData.testCount} precisely curated tests matching the exact NTA exam pattern and weightage.</p>
              </div>

              {/* Test List */}
              <div className="space-y-4">
                {tests.map((test, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={test.id} 
                    className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 transition-all shadow-sm hover:shadow-md hover:border-indigo-100 flex flex-col md:flex-row gap-5 items-center justify-between group"
                  >
                    <div className="w-full md:w-auto flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-indigo-50 group-hover:border-indigo-100 group-hover:text-indigo-600 transition-colors">
                        <FileText className="w-6 h-6 text-slate-400 group-hover:text-indigo-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg text-slate-800">{test.title}</h3>
                          <span className="bg-slate-100 text-slate-500 text-[10px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Lock className="w-3 h-3"/> Locked
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm font-medium text-slate-500">
                          <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400"/> {test.questions} Qs</span>
                          <span className="flex items-center gap-1"><Award className="w-4 h-4 text-amber-400"/> {test.marks} Marks</span>
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-blue-400"/> {test.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={initiatePayment}
                      className="w-full md:w-auto mt-4 md:mt-0 bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white border border-slate-200 hover:border-indigo-600 px-6 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4"/> Unlock Test
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== 'tests' && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center max-w-md mx-auto">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-10 h-10 text-slate-400" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-3">Feature Locked</h2>
              <p className="text-slate-500 font-medium mb-8">Purchase the full test series to access {activeTab === 'syllabus' ? "advanced syllabus planner" : "detailed performance analytics"}, all India ranking, and personalized feedback.</p>
              <button onClick={initiatePayment} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-md shadow-indigo-600/20 transition-all text-lg">
                Purchase Now for ₹{courseData.price}
              </button>
            </div>
          )}
        </main>
      </div>
      
      {/* Mobile Sticky Purchase Bar */}
      <div className="md:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-40 flex justify-between items-center">
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Price</p>
          <p className="text-xl font-black text-slate-900">₹{courseData.price}</p>
        </div>
        <button onClick={initiatePayment} className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-indigo-600/20">
          Enroll Now
        </button>
      </div>
      
    </div>
  );
}
