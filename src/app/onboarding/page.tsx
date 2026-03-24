"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { 
  Camera, Upload, User, Mail, Phone, MapPin, CheckCircle2, 
  ChevronRight, AlertCircle, ChevronLeft, Calendar, BookOpen, 
  GraduationCap, FileText, ShieldCheck, Check, X, Shield, Star, Award, Sparkles, ArrowRight, ChevronDown, Target
} from "lucide-react";

const ALL_INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", 
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const TARGET_EXAMS = [
  "JEE Main & Advanced", 
  "NEET UG", 
  "CUET (UG & PG)", 
  "NDA & NA", 
  "UPSC CSE", 
  "SSC CGL & CHSL", 
  "Banking PO & Clerk", 
  "State PSC & Defensive Exams"
];

export default function OnboardingForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (msg: string) => {
    setErrorMessage(msg);
    setTimeout(() => setErrorMessage(""), 4500);
  };
  
  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }: { data: any }) => {
      if (!data.session) {
        router.replace('/login');
      }
    });

    const deriveNameFromUser = (email: string | null, first?: string | null, last?: string | null) => {
      const f = (first || '').trim();
      const l = (last || '').trim();
      const full = `${f} ${l}`.trim();
      if (full) return full;
      if (email) {
        const local = email.split('@')[0] || '';
        if (local) return local;
      }
      return '';
    };

    supabase.auth.getUser().then(({ data }: { data: any }) => {
      const user = data.user;
      if (!user) return;
      const email = user.email || '';
      const meta: any = user.user_metadata || {};
      const firstName = meta.first_name ?? meta.firstName ?? '';
      const lastName = meta.last_name ?? meta.lastName ?? '';
      const name = deriveNameFromUser(email, firstName, lastName);
      setFormData((prev) => ({
        ...prev,
        name: prev.name || name,
        email: prev.email || email,
      }));
    });
  }, [router]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    state: "",
    targetExam: "",
    preparationMode: "Online Self Study",
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    setPhotoFile(file);
    const url = URL.createObjectURL(file);
    setPhotoPreviewUrl(url);
  };

  const nextStep = () => {
    setErrorMessage(""); 
    if (step === 1) {
      if (!formData.phone || !formData.dob) {
        showError("Please enter your Phone number and Date of Birth.");
        return;
      }
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone)) {
        showError("Please enter a valid 10-digit Indian phone number.");
        return;
      }
      const dobDate = new Date(formData.dob);
      const today = new Date();
      if (isNaN(dobDate.getTime())) {
        showError("Please enter a valid Date of Birth.");
        return;
      }
      let age = today.getFullYear() - dobDate.getFullYear();
      const m = today.getMonth() - dobDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
          age--;
      }
      if (age < 10 || age > 35) {
        showError("Please enter a realistic Date of Birth. Target candidates are usually between 10 and 35 years old.");
        return;
      }
    }
    if (step === 2) {
      if (!formData.state || !formData.targetExam) {
        showError("Please accurately select your Residing State and Target Exam.");
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleComplete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFile) {
      showError("Please upload your passport size photo for ID verification.");
      return;
    }
    
    const supabase = getSupabaseClient();
    if (!supabase) {
      showError('System architecture error. Authentication configuration is missing.');
      return;
    }

    setLoading(true);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const uid = sessionData.session?.user?.id;
      if (!uid) {
        setLoading(false);
        router.replace('/login');
        return;
      }

      const updatePayload: any = {
        full_name: formData.name || null,
        phone: formData.phone || null,
        dob: formData.dob || null,
        state: formData.state || null,
        target_exam: formData.targetExam || null,
        preparation_mode: formData.preparationMode || null,
        admission_completed: true,
      };

      const submitData = new FormData();
      submitData.append('photoFile', photoFile);
      submitData.append('updatePayload', JSON.stringify(updatePayload));

      const token = sessionData.session?.access_token;
      if (!token) throw new Error('No access token');

      const response = await fetch('/api/student/onboarding', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: submitData
      });

      const result = await response.json();

      if (!response.ok) {
        setLoading(false);
        showError(result.error || 'Failed to submit admission details.');
        return;
      }

      setLoading(false);
      setStep(4);
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch {
      setLoading(false);
      showError('A generic connection error occurred while saving your admission securely. Please try again.');
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "circOut" } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712] flex flex-col md:flex-row w-full font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* ERROR TOAST */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }} 
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] max-w-md w-full bg-white dark:bg-[#1f0f12] border-2 border-red-500 shadow-[0_10px_40px_rgba(239,68,68,0.2)] p-4 rounded-2xl flex items-start gap-4"
          >
             <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center shrink-0">
               <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
             </div>
             <div className="flex-1 pt-0.5">
               <h4 className="text-slate-900 dark:text-white font-black text-sm">Action Required</h4>
               <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-snug font-medium">{errorMessage}</p>
             </div>
             <button onClick={() => setErrorMessage("")} className="shrink-0 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-red-500">
               <X className="w-4 h-4" />
             </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEFT PANEL : Branding & Trust Graphics */}
      <div className="w-full md:w-[45%] lg:w-[40%] bg-slate-900 dark:bg-[#0A0F1C] relative flex flex-col justify-between overflow-hidden border-r-[1.5px] border-slate-800 hidden md:flex min-h-screen">
         
         {/* Background Patterns */}
         <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3"></div>

         <div className="p-12 relative z-10">
            <Link href="/" className="inline-flex items-center gap-3">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
               </div>
               <span className="text-2xl font-black text-white tracking-tight">ExamBoost</span>
            </Link>
         </div>

         <div className="p-12 pb-20 relative z-10 flex-col flex gap-8">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-widest border border-white/10 mb-6 backdrop-blur-md">
                 <Sparkles className="w-4 h-4 text-orange-400" />
                 <span>Admission Portal 24-25</span>
               </div>
               <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                  Your Journey to <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Excellence</span> Starts Here.
               </h1>
               <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed">
                  Join India's most advanced AI-powered testing platform. Validate your profile to unlock extreme deep-analytics.
               </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400"><Shield className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Verified Credentials</h4>
                    <p className="text-xs text-slate-400 mt-1">Data encrypted via AES-256 standard.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-orange-400"><Award className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Rank Prediction Engine</h4>
                    <p className="text-xs text-slate-400 mt-1">Access to advanced AIR percentile mapping.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* RIGHT PANEL : Form Area */}
      <div className="w-full md:w-[55%] lg:w-[60%] flex items-center justify-center p-4 sm:p-8 lg:p-12 relative min-h-screen">
         
         {/* Mobile Header (Hidden on Desktop) */}
         <div className="absolute top-6 left-6 md:hidden flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <GraduationCap className="w-4 h-4 text-white" />
             </div>
             <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight">ExamBoost</span>
         </div>

         <div className="w-full max-w-2xl mt-12 md:mt-0">
            
            {/* Form Progress Header */}
            <div className="mb-10 flex items-end justify-between">
                <div>
                   <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                     {step === 4 ? "Admission Confirmed!" : "Complete Admission"}
                   </h2>
                   <p className="text-slate-500 dark:text-slate-400 font-medium text-base mt-2">
                     {step === 4 ? "Your dashboard is being encrypted and forged..." : "Let's personalize your testing layout."}
                   </p>
                </div>
                {step < 4 && (
                   <div className="text-right pb-1">
                      <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Step {step} of 3</div>
                      <div className="flex gap-2">
                        {[1,2,3].map((s) => (
                           <div key={s} className={`h-2 rounded-full transition-all duration-300 ${s === step ? 'w-10 bg-blue-600' : s < step ? 'w-6 bg-blue-600/30 dark:bg-blue-500/30' : 'w-6 bg-slate-200 dark:bg-slate-800'}`}></div>
                        ))}
                      </div>
                   </div>
                )}
            </div>

            {/* Flat Form Card Container */}
            <div className="bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200/80 dark:border-slate-800 rounded-[2.5rem] p-6 sm:p-10 shadow-sm relative overflow-hidden">
               
               <AnimatePresence mode="wait">
                 {/* STEP 1: Basic Intro */}
                 {step === 1 && (
                   <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
                      <div className="bg-orange-50 dark:bg-orange-900/10 border-[1.5px] border-orange-200/50 dark:border-orange-500/20 rounded-2xl p-5 flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                           <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">Identity Linked</p>
                           <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">We've securely imported your registration data. Please confirm phone and DOB to proceed.</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2"><User className="w-4 h-4" /> Full Name</label>
                          <input type="text" value={formData.name} disabled className="w-full bg-slate-50 dark:bg-slate-900 border-[1.5px] border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 text-slate-400 dark:text-slate-500 font-bold cursor-not-allowed" />
                        </div>
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2"><Mail className="w-4 h-4" /> Email Address</label>
                          <input type="text" value={formData.email} disabled className="w-full bg-slate-50 dark:bg-slate-900 border-[1.5px] border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 text-slate-400 dark:text-slate-500 font-bold cursor-not-allowed" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> Phone Number <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black border-r border-slate-200 dark:border-slate-700 pr-4">+91</span>
                            <input type="tel" maxLength={10} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} placeholder="98765 43210" className="w-full bg-white dark:bg-[#0A0F1C] border-[1.5px] border-slate-200 dark:border-slate-700/80 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:focus:ring-blue-600/20 rounded-2xl pl-[4.5rem] pr-5 py-4 text-slate-900 dark:text-white font-black outline-none transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2.5">
                          <label className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> Date of Birth <span className="text-red-500">*</span></label>
                          <input 
                            type="date" 
                            max={new Date(new Date().setFullYear(new Date().getFullYear() - 10)).toISOString().split('T')[0]}
                            min={new Date(new Date().setFullYear(new Date().getFullYear() - 35)).toISOString().split('T')[0]}
                            value={formData.dob} 
                            onChange={(e) => setFormData({...formData, dob: e.target.value})} 
                            className="w-full bg-white dark:bg-[#0A0F1C] border-[1.5px] border-slate-200 dark:border-slate-700/80 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:focus:ring-blue-600/20 rounded-2xl px-5 py-4 text-slate-900 dark:text-white font-black outline-none transition-all dark:[color-scheme:dark]" />
                        </div>
                      </div>
                   </motion.div>
                 )}

                 {/* STEP 2: Exam & State Details */}
                 {step === 2 && (
                   <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-10">
                      
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Current Sub-State <span className="text-red-500">*</span></label>
                        <div className="relative">
                           <select value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} className="w-full bg-white dark:bg-[#0A0F1C] border-[1.5px] border-slate-200 dark:border-slate-700/80 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white font-black outline-none transition-all appearance-none cursor-pointer">
                           <option value="" disabled>Search & Target Selection State...</option>
                           {ALL_INDIAN_STATES.map((st) => (
                              <option key={st} value={st}>{st}</option>
                           ))}
                           </select>
                           <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-500" /> Target Examination <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {TARGET_EXAMS.map((exam) => (
                            <div 
                              key={exam}
                              onClick={() => setFormData({...formData, targetExam: exam})}
                              className={`relative p-5 rounded-2xl border-[2px] cursor-pointer transition-all flex items-center ${
                                formData.targetExam === exam 
                                  ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 shadow-[4px_4px_0px_#2563EB]' 
                                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0F1C] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mr-4 border-2 ${formData.targetExam === exam ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-slate-300 dark:border-slate-600'}`}>
                                 {formData.targetExam === exam && <Check className="w-4 h-4" strokeWidth={4} />}
                              </div>
                              <h3 className="font-black text-[15px] leading-snug">{exam}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                   </motion.div>
                 )}

                 {/* STEP 3: KYC / Photo */}
                 {step === 3 && (
                   <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-10">
                      
                      {/* Photo Upload Container */}
                      <div className="p-8 bg-slate-50 dark:bg-[#0A0F1C] border-[1.5px] border-slate-200 dark:border-slate-800 rounded-[2rem] flex flex-col md:flex-row items-center gap-8">
                         <div className={`w-36 h-36 rounded-[2rem] shrink-0 border-4 overflow-hidden flex items-center justify-center relative group transition-colors ${photoPreviewUrl ? 'border-orange-500 bg-black' : 'border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0F172A]'}`}>
                           {photoPreviewUrl ? (
                             <>
                               <img src={photoPreviewUrl} alt="Student Preview" className="w-full h-full object-cover" />
                               <div className="absolute inset-0 bg-slate-900/40 hidden group-hover:flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm">
                                 <Camera className="w-8 h-8 text-white mt-1" />
                                 <span className="absolute bottom-4 text-xs font-black text-white uppercase tracking-widest">Retake</span>
                               </div>
                             </>
                           ) : (
                             <div className="text-center text-slate-400 dark:text-slate-600 flex flex-col items-center">
                               <User className="w-10 h-10 mb-2" />
                               <span className="text-[10px] font-black uppercase tracking-widest mt-1">4x4 Frame</span>
                             </div>
                           )}
                           <input aria-label="Upload profile photo" title="Upload profile photo" type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={handlePhotoUpload} />
                         </div>
                         
                         <div className="flex-1 w-full text-center md:text-left">
                            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-2">Admit Card Photo Verification</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-6">
                              Upload a standard passport size photo. This exact photo will be printed directly on your simulated Hall Tickets and performance scorecards.
                            </p>
                            
                            <label className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white dark:bg-[#0F172A] border-[2px] border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl transition-all cursor-pointer text-slate-900 dark:text-white font-black shadow-sm group">
                               <input aria-label="Upload profile photo" title="Upload profile photo" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} required={!photoFile} />
                               <Upload className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" /> 
                               {photoPreviewUrl ? 'Replace Photo' : 'Select Photo (JPEG/PNG)'}
                            </label>
                         </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex items-start gap-4">
                         <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                         <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                           <strong className="text-slate-800 dark:text-slate-200 font-bold block mb-1">Authenticity & Fairness Pledge</strong>
                           By submitting your admission profile, you confirm all provided details are true. Mock test rankings achieved using these credentials cannot be transferred.
                         </p>
                      </div>
                   </motion.div>
                 )}

                 {/* STEP 4: Complete State */}
                 {step === 4 && (
                   <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col items-center justify-center text-center py-16">
                      <div className="relative mb-8">
                         <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full animate-pulse"></div>
                         <div className="w-24 h-24 rounded-full bg-green-50 dark:bg-green-500/10 border-4 border-green-500 text-green-500 flex items-center justify-center relative z-10 shadow-[0_0_0_8px_rgba(34,197,94,0.1)]">
                           <Check className="w-10 h-10" strokeWidth={4} />
                         </div>
                      </div>
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Admission Authenticated</h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-sm leading-relaxed">System architecture is generating your personalized analytics dashboard...</p>
                      <div className="mt-10 flex gap-2">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>
               
               {/* Fixed Form Nav Buttons Footer */}
               {step < 4 && (
                 <div className="mt-10 pt-8 border-t-[1.5px] border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                   {step > 1 && (
                     <button 
                       type="button" 
                       onClick={prevStep}
                       className="sm:w-32 py-4.5 bg-white dark:bg-[#0A0F1C] border-[2px] border-slate-200 dark:border-slate-700 hover:border-slate-400 text-slate-700 dark:text-slate-300 font-black rounded-xl transition-all flex items-center justify-center gap-2"
                     >
                       <ChevronLeft className="w-5 h-5" /> Back
                     </button>
                   )}
                   {step < 3 ? (
                     <button 
                       type="button" 
                       onClick={nextStep}
                       className="flex-1 py-4.5 bg-slate-900 hover:bg-blue-600 dark:bg-white dark:hover:bg-blue-600 text-white dark:text-slate-900 dark:hover:text-white font-black rounded-xl transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg group"
                     >
                       Continue <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                   ) : (
                     <button 
                       type="button"
                       onClick={handleComplete}
                       disabled={loading}
                       className={`flex-1 py-4.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black rounded-xl transition-all shadow-[4px_4px_0px_#A14300] hover:shadow-[2px_2px_0px_#A14300] hover:translate-y-[2px] hover:translate-x-[2px] flex items-center justify-center gap-3 text-lg ${loading ? 'opacity-80 scale-95 shadow-none translate-y-[4px] translate-x-[4px]' : ''}`}
                     >
                       {loading ? (
                         <span className="flex items-center gap-3">
                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Verifying Form...
                         </span>
                       ) : (
                         <>Complete Admission Process <ArrowRight className="w-5 h-5" /></>
                       )}
                     </button>
                   )}
                 </div>
               )}
            </div>

            {/* Micro footer */}
            {step < 4 && (
              <p className="text-center md:text-left text-[11px] font-bold text-slate-400 dark:text-slate-600 mt-6 uppercase tracking-widest px-4">
                © {new Date().getFullYear()} ExamBoost Core System • Version 3.4
              </p>
            )}
         </div>
      </div>

    </div>
  );
}
