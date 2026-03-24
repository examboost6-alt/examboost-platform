"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { 
  Camera, Upload, User, Mail, Phone, MapPin, CheckCircle2, 
  ChevronRight, AlertCircle, ChevronLeft, Calendar, BookOpen, 
  FileText, ShieldCheck, Check, X, Shield, Star, Award, Sparkles, ArrowRight, ChevronDown, Target
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
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      
      {/* ERROR TOAST */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }} 
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] max-w-sm w-full bg-red-50 dark:bg-[#3f0f14] border border-red-200 dark:border-red-900/50 shadow-2xl p-4 rounded-2xl flex items-start gap-4"
          >
             <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 shrink-0" />
             <div className="flex-1">
               <h4 className="text-red-900 dark:text-red-200 font-bold text-sm">Action Required</h4>
               <p className="text-red-700 dark:text-red-300 text-sm mt-1">{errorMessage}</p>
             </div>
             <button onClick={() => setErrorMessage("")} className="shrink-0 p-2 hover:bg-red-100 dark:hover:bg-red-900/80 rounded-full transition-colors text-red-500">
               <X className="w-4 h-4" />
             </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row mb-10 mt-16 md:mt-24">
         
         {/* EXACT SAME LEFT PANEL AS LOGIN / SIGNUP */}
         <div className="hidden md:flex flex-col justify-between w-1/2 bg-slate-50 dark:bg-[#060c21] border-r border-slate-200 dark:border-slate-800 p-12 relative overflow-hidden">
            
            {/* Circle Line Background Decoration */}
            <svg className="absolute top-[-20%] right-[-20%] w-[120%] h-[120%] text-orange-600/5 dark:text-orange-400/5 pointer-events-none z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" />
                <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Floating Decorative Elements */}
            <motion.svg animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-[10%] left-[80%] w-10 h-10 text-orange-400 opacity-60 z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41Z" />
            </motion.svg>
            <motion.svg animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[35%] right-[10%] w-8 h-8 text-blue-400 opacity-60 z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26Z" />
            </motion.svg>


            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-start pt-4">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="ExamBoost Logo" className="h-[26px] object-contain dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="h-[26px] object-contain hidden dark:block" />
                    </Link>
                </div>

                <div className="mt-auto pb-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[2.2rem] lg:text-[2.5rem] font-black font-serif text-slate-900 dark:text-white leading-[1.15] mb-6 tracking-tight"
                    >
                        Complete your <br />
                        <span className="text-[#F97316] dark:text-orange-400 inline-block mt-2">Admission Profile.</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed mb-10 max-w-[90%]"
                    >
                        We need a few more details to set up your comprehensive dashboard and start tracking your preparation.
                    </motion.p>

                    <div className="space-y-6">
                        {[
                            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Identity Secured', desc: 'Auto-linked with your registration details.' },
                            { icon: <Target className="w-5 h-5" />, title: 'Exam Precision', desc: 'Dashboard curates tests according to your target.' },
                            { icon: <Award className="w-5 h-5" />, title: 'Rank Prediction', desc: 'Photo authentication enables detailed real scorecards.' },
                        ].map((feature, i) => (
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                key={i} 
                                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200/50 dark:hover:border-slate-700/50"
                            >
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center text-[#F97316] dark:text-orange-400 shrink-0 shadow-sm mt-0.5">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1.5">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium text-[15px] leading-snug">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
         </div>

         {/* RIGHT PANEL : Form Area */}
         <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 flex-1">
            
            <Link href="/" className="md:hidden inline-block mb-8">
                <img src="/logo.png" alt="ExamBoost Logo" className="h-8 object-contain dark:hidden" />
                <img src="/white-logo.png" alt="ExamBoost Logo" className="h-8 object-contain hidden dark:block" />
            </Link>

            {/* Form Progress Header */}
            <div className="mb-8">
               <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                 {step === 4 ? "Admission Confirmed!" : "Finalize Admission"}
               </h1>
               <div className="flex items-center justify-between mt-3 mb-6">
                 <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                   {step === 4 ? "Redirecting to your dashboard..." : "Please fill in the personal tracking details."}
                 </p>
                 {step < 4 && (
                    <div className="text-right">
                       <div className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-2">Step {step}/3</div>
                       <div className="flex gap-1.5">
                         {[1,2,3].map((s) => (
                            <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s === step ? 'w-8 bg-[#F97316]' : s < step ? 'w-4 bg-orange-600/30' : 'w-4 bg-slate-200 dark:bg-slate-800'}`}></div>
                         ))}
                       </div>
                    </div>
                 )}
               </div>
               {step < 4 && (
                 <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800"></div>
               )}
            </div>

            {/* Multi-step Form Container */}
            <AnimatePresence mode="wait">
              {/* STEP 1: Basic Intro */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                   <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-4 flex gap-3">
                     <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                     <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">Validating imported identity</p>
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Please confirm phone and DOB to proceed.</p>
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                     <input type="text" value={formData.name} disabled className="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-3.5 text-slate-500 dark:text-slate-500 font-bold cursor-not-allowed" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                     <input type="text" value={formData.email} disabled className="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-5 py-3.5 text-slate-500 dark:text-slate-500 font-bold cursor-not-allowed" />
                   </div>

                   <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number <span className="text-red-500">*</span></label>
                     <div className="relative">
                       <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold border-r border-slate-200 dark:border-slate-700 pr-3">+91</span>
                       <input type="tel" maxLength={10} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})} placeholder="98765 43210" className="w-full px-5 py-4 pl-[4.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium placeholder:text-slate-400" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Date of Birth <span className="text-red-500">*</span></label>
                     <input 
                       type="date" 
                       max={new Date(new Date().setFullYear(new Date().getFullYear() - 10)).toISOString().split('T')[0]}
                       min={new Date(new Date().setFullYear(new Date().getFullYear() - 35)).toISOString().split('T')[0]}
                       value={formData.dob} 
                       onChange={(e) => setFormData({...formData, dob: e.target.value})} 
                       className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium dark:[color-scheme:dark]" />
                   </div>
                </motion.div>
              )}

              {/* STEP 2: Exam & State Details */}
              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
                   
                   <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Current Residence State <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <select value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 dark:focus:border-orange-400 dark:focus:ring-orange-400/20 rounded-xl outline-none transition-all text-slate-900 dark:text-white font-medium appearance-none cursor-pointer">
                        <option value="" disabled>Search & Select State...</option>
                        {ALL_INDIAN_STATES.map((st) => (
                           <option key={st} value={st}>{st}</option>
                        ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                     </div>
                   </div>

                   <div className="space-y-3">
                     <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Target Examination <span className="text-red-500">*</span></label>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {TARGET_EXAMS.map((exam) => (
                         <div 
                           key={exam}
                           onClick={() => setFormData({...formData, targetExam: exam})}
                           className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center ${
                             formData.targetExam === exam 
                               ? 'border-[#F97316] bg-orange-50 dark:bg-orange-900/10 text-orange-700 dark:text-orange-400' 
                               : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                           }`}
                         >
                           <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mr-3 border ${formData.targetExam === exam ? 'bg-[#F97316] border-[#F97316] text-white' : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600'}`}>
                              {formData.targetExam === exam && <Check className="w-3 h-3" strokeWidth={3} />}
                           </div>
                           <h3 className="font-bold text-sm leading-snug">{exam}</h3>
                         </div>
                       ))}
                     </div>
                   </div>
                </motion.div>
              )}

              {/* STEP 3: KYC / Photo */}
              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                   
                   <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col md:flex-row items-center gap-6">
                      <div className={`w-36 h-36 rounded-2xl shrink-0 border-[3px] overflow-hidden flex items-center justify-center relative group transition-colors ${photoPreviewUrl ? 'border-[#F97316] bg-black' : 'border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0F172A]'}`}>
                        {photoPreviewUrl ? (
                          <>
                            <img src={photoPreviewUrl} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-slate-900/40 hidden group-hover:flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm">
                              <Camera className="w-8 h-8 text-white mt-1" />
                            </div>
                          </>
                        ) : (
                          <div className="text-center text-slate-400 dark:text-slate-600 flex flex-col items-center">
                            <User className="w-10 h-10 mb-2" />
                            <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Photo</span>
                          </div>
                        )}
                        <input aria-label="Upload profile photo" title="Upload profile photo" type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={handlePhotoUpload} />
                      </div>
                      
                      <div className="flex-1 w-full text-center md:text-left">
                         <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Upload Profile Photo</h3>
                         <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-4">
                           Standard passport size photo heavily recommended. This exact photo will be printed directly on your simulated Hall Tickets and Scorecards.
                         </p>
                         
                         <label className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl transition-all cursor-pointer text-slate-900 dark:text-white font-bold shadow-sm group text-sm">
                            <input aria-label="Upload profile photo" title="Upload profile photo" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} required={!photoFile} />
                            <Upload className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors" /> 
                            {photoPreviewUrl ? 'Replace Thumbnail' : 'Select Photo (JPEG/PNG)'}
                         </label>
                      </div>
                   </div>

                   <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 rounded-xl flex items-start gap-4">
                      <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                        By submitting your admission profile, you confirm all provided details are true. Rankings achieved using these credentials cannot be transferred.
                      </p>
                   </div>
                </motion.div>
              )}

              {/* STEP 4: Complete State */}
              {step === 4 && (
                <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col items-center justify-center text-center py-16">
                   <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                     <Check className="w-12 h-12" strokeWidth={3} />
                   </div>
                   <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Authenticated</h2>
                   <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm leading-relaxed">Configuring analytics algorithms and launching platform dashboard...</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Form Nav Buttons */}
            {step < 4 && (
              <div className="mt-8 flex gap-4">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="w-16 sm:w-24 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center shrink-0"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5" /> <span className="hidden sm:inline-block ml-1">Back</span>
                  </button>
                )}
                {step < 3 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    type="button"
                    onClick={handleComplete}
                    disabled={loading}
                    className={`flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white py-4 rounded-xl font-bold text-lg transition-all ${!loading && 'shadow-[0_5px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] transform hover:-translate-y-0.5'} flex items-center justify-center gap-3 disabled:opacity-70`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Finalizing...
                      </span>
                    ) : (
                      <>Enter Dashboard <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                )}
              </div>
            )}
            
         </div>

      </div>
    </div>
  );
}
