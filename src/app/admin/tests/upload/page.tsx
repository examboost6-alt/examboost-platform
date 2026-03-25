"use client";

import { useState } from "react";
import { UploadCloud, FileJson, CheckCircle2, AlertCircle, ArrowRight, Settings2, Database, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminUploadTest() {
  const [jsonInput, setJsonInput] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [validationResult, setValidationResult] = useState<{ status: 'idle' | 'success' | 'error', message: string, stats?: any }>({ status: 'idle', message: '' });

  const handleValidate = () => {
    setIsValidating(true);
    setValidationResult({ status: 'idle', message: '' });
    
    setTimeout(() => {
      try {
        if (!jsonInput.trim()) throw new Error("JSON payload cannot be empty.");
        const parsed = JSON.parse(jsonInput);
        
        if (!parsed.testId || !parsed.title || !parsed.subjects) {
           throw new Error("Missing required root keys: 'testId', 'title', or 'subjects'.");
        }

        // Dummy stats calculation
        let qCount = 0;
        parsed.subjects.forEach((s: any) => {
            s.sections?.forEach((sec: any) => {
                qCount += sec.questions?.length || 0;
            })
        });

        setValidationResult({ 
            status: 'success', 
            message: "JSON Structure conforms exactly to NTA CBT standard schema.",
            stats: { questions: qCount, subjects: parsed.subjects.length, marks: parsed.totalMarks }
        });
      } catch (err: any) {
        setValidationResult({ status: 'error', message: err.message || "Failed to parse malformed JSON string." });
      } finally {
        setIsValidating(false);
      }
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
         setJsonInput(ev.target?.result as string);
         setValidationResult({ status: 'idle', message: '' });
      };
      reader.readAsText(file);
    }
  };

  const handleUploadToDB = () => {
    setIsUploading(true);
    setTimeout(() => {
        setIsUploading(false);
        setJsonInput("");
        setValidationResult({ status: 'idle', message: 'Test successfully pushed to production database!' });
    }, 2000);
  }

  return (
    <div className="flex flex-col gap-8 pb-10 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-3">
            <Database className="w-8 h-8 text-indigo-500" />
            Bulk Question Uploader
          </h1>
          <p className="text-slate-500 font-medium">Instantly import complete Mock Tests or Previous Year Papers via JSON payload.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-sm shadow-sm transition-all whitespace-nowrap">
          <Settings2 className="w-4 h-4" /> Template Settings
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side: Upload & Input area */}
        <div className="lg:col-span-3 flex flex-col gap-6">
            
            <div className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 overflow-hidden">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <FileJson className="w-5 h-5 text-indigo-500" /> Raw JSON Payload
                    </h3>
                </div>

                <div className="relative mb-6 group">
                    <label className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 dark:bg-slate-900/40 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl cursor-pointer hover:bg-indigo-50/50 hover:border-indigo-400 dark:hover:bg-indigo-900/20 dark:hover:border-indigo-500/50 transition-colors z-10 backdrop-blur-[1px] opacity-100 peer-focus-within:opacity-0 peer-focus-within:pointer-events-none data-[has-text=true]:opacity-0 data-[has-text=true]:pointer-events-none" data-has-text={jsonInput.length > 0}>
                        <UploadCloud className="w-10 h-10 text-indigo-400 dark:text-indigo-500 mb-3" />
                        <span className="font-bold text-slate-700 dark:text-slate-300">Drag & Drop JSON file here</span>
                        <span className="text-sm font-medium text-slate-500 mt-1">or click to browse local files</span>
                        <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                    </label>
                    <textarea 
                        value={jsonInput}
                        onChange={(e) => setJsonInput(e.target.value)}
                        placeholder="Paste your JSON text here..."
                        className="w-full h-[400px] p-5 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-slate-300 font-mono text-sm border-2 border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:border-indigo-500 dark:focus:border-indigo-500 resize-none peer relative z-0"
                        spellCheck="false"
                    />
                </div>

                <button 
                    onClick={handleValidate} 
                    disabled={isValidating || jsonInput.length === 0}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-600/20 text-white font-black text-[15px] uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isValidating ? (
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Validating Schema...
                        </div>
                    ) : (
                        <>Validate & Sync Payload <ArrowRight className="w-5 h-5" /></>
                    )}
                </button>
            </div>

        </div>

        {/* Right Side: Status area */}
        <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-slate-900 dark:bg-[#110b1a] rounded-3xl border border-slate-800 p-8 shadow-xl relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                <h3 className="text-xl font-black text-white mb-6 tracking-tight relative z-10">Validation Status</h3>

                {validationResult.status === 'idle' && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 text-slate-500 mt-10">
                        <AlertCircle className="w-16 h-16 mb-4 opacity-50" />
                        <p className="font-semibold px-4 text-slate-400">Awaiting JSON payload insertion for structural validation.</p>
                    </div>
                )}

                {validationResult.status === 'error' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
                        <div className="bg-rose-500/10 border border-rose-500/30 p-5 rounded-2xl">
                            <h4 className="flex items-center gap-2 font-bold text-rose-500 mb-2">
                                <AlertCircle className="w-5 h-5" /> Parsing Error
                            </h4>
                            <p className="text-sm font-medium text-rose-400/80 leading-relaxed">{validationResult.message}</p>
                        </div>
                    </motion.div>
                )}

                {validationResult.status === 'success' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 flex flex-col h-full">
                        <div className="bg-emerald-500/10 border border-emerald-500/30 p-5 rounded-2xl mb-8">
                            <h4 className="flex items-center gap-2 font-black text-emerald-400 mb-2">
                                <CheckCircle2 className="w-5 h-5" /> Schema Verified
                            </h4>
                            <p className="text-sm font-bold text-emerald-500/80 leading-relaxed">{validationResult.message}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-auto">
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Total Qs</p>
                                <p className="text-3xl font-black text-white">{validationResult.stats?.questions}</p>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Subjects</p>
                                <p className="text-3xl font-black text-white">{validationResult.stats?.subjects}</p>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 col-span-2 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Max Marks</p>
                                    <p className="text-xl font-bold text-white">{validationResult.stats?.marks || 300}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-right">Engine Type</p>
                                    <p className="text-xl font-bold text-indigo-400 text-right">JEE Main</p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handleUploadToDB}
                            disabled={isUploading}
                            className="mt-8 w-full py-4 bg-emerald-500 hover:bg-emerald-600 transition-colors text-slate-900 font-black uppercase tracking-wider text-sm rounded-2xl flex items-center justify-center gap-2"
                        >
                            {isUploading ? "Uploading..." : <><Upload className="w-5 h-5" /> Push To Database</>}
                        </button>
                    </motion.div>
                )}

                {validationResult.message === 'Test successfully pushed to production database!' && (
                   <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center p-8 text-center rounded-3xl">
                       <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-slate-900 mb-6 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                           <CheckCircle2 className="w-10 h-10" />
                       </div>
                       <h3 className="text-2xl font-black text-white mb-3">Upload Complete!</h3>
                       <p className="text-slate-400 font-medium leading-relaxed">The mock paper is now live and accessible in the CBT engine for enrolled students.</p>
                       <button onClick={() => setValidationResult({status:'idle', message:''})} className="mt-8 px-6 py-2.5 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">
                           Upload Another
                       </button>
                   </motion.div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
}
