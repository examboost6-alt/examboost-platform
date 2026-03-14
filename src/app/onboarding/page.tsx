"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { 
  Camera, Upload, User, Mail, Phone, MapPin, CheckCircle2, 
  ChevronRight, AlertCircle, ChevronLeft, Calendar, BookOpen, 
  GraduationCap, FileText, ShieldCheck, Check
} from "lucide-react";

export default function OnboardingForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace('/login');
      }
    });
  }, [router]);

  const [formData, setFormData] = useState({
    name: "Rahul Sharma", 
    email: "rahul.sharma@example.com", 
    phone: "", 
    dob: "",
    state: "", 
    targetExam: "", 
    preparationMode: "Online Self Study",
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.phone || !formData.dob) {
        alert("Please enter your Phone number and Date of Birth.");
        return;
      }
    }
    if (step === 2) {
      if (!formData.state || !formData.targetExam) {
        alert("Please select your State and Target Exam.");
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photo) {
      alert("Please upload your passport size photo for ID verification.");
      return;
    }
    
    setLoading(true);
    // Simulate API call to save admission details
    setTimeout(() => {
      setLoading(false);
      setStep(4); // Success screen
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }, 1500);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-[#0f172a] text-slate-900 dark:text-white mb-6 border border-slate-200 dark:border-slate-800">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {step === 4 ? "Admission Confirmed!" : "Complete Your Admission"}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-lg mx-auto">
            {step === 4 ? "Your profile is set up. Redirecting to your dashboard..." : "Just a few more details to personalize your learning experience."}
          </p>
        </div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden relative"
        >
          {/* Progress Bar top of card */}
          {step < 4 && (
            <div className="flex bg-slate-100 dark:bg-slate-800 h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full transition-all duration-500 ease-out" 
                style={{ width: `${(step / 3) * 100}%` }} 
              />
            </div>
          )}

          {/* Stepper text indicator */}
          {step < 4 && (
             <div className="px-8 pt-8 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Step {step} of 3</span>
                <span className="text-sm font-bold text-slate-400">
                   {step === 1 ? 'Personal Info' : step === 2 ? 'Academic Goals' : 'KYC & Photo'}
                </span>
             </div>
          )}

          <div className="p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-2xl p-5 flex gap-4">
                     <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                     <div>
                        <p className="font-bold text-blue-900 dark:text-blue-300">Basic details securely auto-filled</p>
                        <p className="text-sm text-blue-700/80 dark:text-blue-400 mt-1">We've linked your logged-in Google account. Please verify your phone number to continue.</p>
                     </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5"><User className="w-4 h-4" /> Full Name</label>
                      <input type="text" value={formData.name} disabled className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-500 font-medium cursor-not-allowed" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5"><Mail className="w-4 h-4" /> Email Address</label>
                      <input type="text" value={formData.email} disabled className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-500 font-medium cursor-not-allowed" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Phone className="w-4 h-4" /> <span className="text-red-500">*</span> Phone Number</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold border-r border-slate-200 dark:border-slate-700 pr-3">+91</span>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="98765 43210" className="w-full bg-white dark:bg-[#020617] border-2 border-slate-200 dark:border-slate-800 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl pl-16 pr-4 py-3.5 text-slate-900 dark:text-white font-bold outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> <span className="text-red-500">*</span> Date of Birth</label>
                      <input type="date" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="w-full bg-white dark:bg-[#020617] border-2 border-slate-200 dark:border-slate-800 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white font-bold outline-none transition-all dark:[color-scheme:dark]" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><MapPin className="w-4 h-4" /> <span className="text-red-500">*</span> Current State / Residence</label>
                    <select value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} className="w-full bg-white dark:bg-[#020617] border-2 border-slate-200 dark:border-slate-800 focus:border-blue-600 dark:focus:border-blue-500 rounded-xl px-4 py-4 text-slate-900 dark:text-white font-bold outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Select your state</option>
                      <option value="dl">Delhi</option>
                      <option value="mh">Maharashtra</option>
                      <option value="up">Uttar Pradesh</option>
                      <option value="hr">Haryana</option>
                      <option value="rj">Rajasthan</option>
                      <option value="ka">Karnataka</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" /> <span className="text-red-500">*</span> Target Exam Category
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                      {['SSC CGL & CHSL', 'UPSC CSE', 'Banking PO & Clerk', 'JEE / NEET', 'State PSC', 'Railways (RRB)'].map((exam) => (
                        <div 
                          key={exam}
                          onClick={() => setFormData({...formData, targetExam: exam})}
                          className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.targetExam === exam 
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 hover:border-blue-300'
                          }`}
                        >
                          {formData.targetExam === exam && <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-blue-600 dark:text-blue-400" />}
                          <h3 className="font-bold text-sm md:text-base pr-8">{exam}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
                  <div className="text-center md:text-left mb-2">
                     <h3 className="font-bold text-xl text-slate-900 dark:text-white">Profile Photo Verification</h3>
                     <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Upload a clear passport size photo. This will be used in your ID card and Test Hall Ticket.</p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className={`w-32 h-32 rounded-2xl shrink-0 border-4 overflow-hidden flex items-center justify-center relative group ${photo ? 'border-emerald-500 bg-black' : 'border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0f172a]'}`}>
                      {photo ? (
                        <>
                          <img src={photo} alt="Student Preview" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center transition-all cursor-pointer">
                            <Camera className="w-8 h-8 text-white" />
                          </div>
                        </>
                      ) : (
                        <User className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                      )}
                      {/* Invisible file input over image for easy re-upload */}
                      <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={handlePhotoUpload} />
                    </div>
                    
                    <div className="flex-1 w-full text-center md:text-left">
                       <label className="w-full md:w-auto inline-flex flex-col items-center md:items-start p-4 hover:bg-white dark:hover:bg-[#0f172a] rounded-xl transition-colors cursor-pointer group">
                          <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} required={!photo} />
                          <span className="text-lg font-bold text-primary hover:text-secondary dark:text-accent flex items-center justify-center md:justify-start gap-2 mb-1">
                             <Upload className="w-5 h-5" /> {photo ? 'Change Photo' : 'Upload Photo'}
                          </span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">JPEG or PNG format. Max size 2MB.</span>
                       </label>
                       
                       <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg w-max mx-auto md:mx-0">
                          <ShieldCheck className="w-4 h-4" /> End-to-end encrypted storage
                       </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/50 p-4 rounded-xl flex gap-3">
                     <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
                     <p className="text-sm font-medium text-amber-800 dark:text-amber-400">
                       By submitting this form, you confirm that all provided details are correct. Exams booked using these details cannot be transferred.
                     </p>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col items-center justify-center text-center py-10">
                   <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                     <Check className="w-12 h-12" strokeWidth={3} />
                   </div>
                   <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Admission Submitted</h2>
                   <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">Generating your student ID card and preparing your personalized dashboard...</p>
                   <div className="mt-8 flex gap-2">
                     <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                     <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                     <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Form Nav Buttons */}
            {step < 4 && (
              <div className="mt-10 flex gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="flex-1 md:flex-[0.3] py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                )}
                {step < 3 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    Continue <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    type="button"
                    onClick={handleComplete}
                    disabled={loading}
                    className={`flex-1 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 ${loading ? 'opacity-80 scale-95' : 'hover:-translate-y-0.5'}`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Finalizing...
                      </span>
                    ) : (
                      <>Complete & Enter Dashboard <CheckCircle2 className="w-5 h-5" /></>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Footer info text */}
        {step < 4 && (
          <p className="text-center text-xs font-semibold text-slate-400 mt-6 tracking-wide">
            © {new Date().getFullYear()} ExamBoost Educational Platform. All rights reserved.
          </p>
        )}
      </div>
    </div>
  );
}
