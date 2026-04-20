"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, HeadphonesIcon, Globe, Clock, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactClient() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#0B1120] pt-20 font-sans selection:bg-[#F97316]/30 overflow-hidden">
            
            {/* 1. HERO SECTION */}
            <section className="relative bg-white dark:bg-[#060D1A] border-b border-slate-200 dark:border-slate-800/80 pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-50 dark:opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-50 via-white to-blue-50 dark:from-orange-900/10 dark:via-[#060D1A] dark:to-blue-900/10" />
                <svg className="absolute top-[0%] left-[0%] w-[100%] h-[120%] text-orange-50 dark:text-[#F97316]/5 pointer-events-none z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path fill="none" stroke="currentColor" strokeWidth="150" strokeLinecap="round" d="M-200,800 C150,800 350,100 600,200 C850,300 800,900 1200,800" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#F97316]/20 blur-[150px] rounded-full pointer-events-none z-0" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 dark:bg-[#F97316]/10 border border-orange-200 dark:border-[#F97316]/20 text-sm font-black tracking-widest uppercase text-[#F97316] mb-8 shadow-sm"
                    >
                        <MessageSquare className="w-4 h-4 fill-[#F97316]" /> Reach Out To Us
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black font-serif text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tight max-w-4xl mx-auto"
                    >
                        We're Here to <br className="hidden md:block"/>
                        <span className="text-[#F97316] relative inline-block">
                            Help You Succeed
                            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 text-orange-300 dark:text-[#F97316]/50 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <motion.path 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M5,15 Q50,5 95,15" 
                                />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        Have questions about our test series or need help with your account? Our dedicated support team is ready to assist you.
                    </motion.p>
                </div>
            </section>

            {/* 2. SUPPORT DEPARTMENTS (Floating Cards) */}
            <section className="-mt-20 relative z-20 container mx-auto px-4 md:px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* General Support */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-[#0F172A] rounded-[2.5rem] border-[1.5px] border-slate-100 dark:border-slate-800 p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none flex flex-col items-center text-center group hover:border-[#F97316]/50 transition-colors"
                    >
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                            <HeadphonesIcon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3">Student Support</h3>
                        <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-6 flex-1">
                            For technical issues, test series access, or account-related inquiries.
                        </p>
                        <a href="mailto:support@examboost.com" className="text-blue-600 dark:text-blue-400 font-black flex items-center gap-2 hover:gap-3 transition-all text-lg">
                            support@examboost.com <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Mentorship Programs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-[#0F172A] rounded-[2.5rem] border-[1.5px] border-slate-100 dark:border-slate-800 p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none flex flex-col items-center text-center group hover:border-[#F97316]/50 transition-colors"
                    >
                        <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                            <Globe className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3">Mentorship Desk</h3>
                        <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-6 flex-1">
                            Connect with our expert faculties to clear doubts or plan your strategy.
                        </p>
                        <a href="mailto:mentor@examboost.com" className="text-emerald-600 dark:text-emerald-400 font-black flex items-center gap-2 hover:gap-3 transition-all text-lg">
                            mentor@examboost.com <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Partnership & Press */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-[#0F172A] rounded-[2.5rem] border-[1.5px] border-slate-100 dark:border-slate-800 p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none flex flex-col items-center text-center group hover:border-[#F97316]/50 transition-colors"
                    >
                        <div className="w-20 h-20 bg-[#F97316]/10 text-[#F97316] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                            <Mail className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black font-serif text-slate-900 dark:text-white mb-3">Partnerships</h3>
                        <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-6 flex-1">
                            For business queries, institutional tie-ups, or media interactions.
                        </p>
                        <a href="mailto:business@examboost.com" className="text-[#F97316] font-black flex items-center gap-2 hover:gap-3 transition-all text-lg">
                            business@examboost.com <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 3. MAIN CONTACT FORM & DETAILS */}
            <section className="py-24 container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Form Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-3/5 w-full order-2 lg:order-1 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316] to-amber-400 rounded-[3rem] transform -rotate-1 scale-100 opacity-20 blur-xl"></div>
                        <div className="bg-white dark:bg-[#0F172A] p-10 md:p-14 rounded-[3rem] border-[1.5px] border-slate-100 dark:border-slate-700/80 shadow-2xl relative z-10">
                            <h3 className="text-3xl lg:text-4xl font-black font-serif text-slate-900 dark:text-white mb-3">Send us a message</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg mb-10">We usually respond within 24 hours.</p>

                            <form className="space-y-8" onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const formData = new FormData(form);
                                const data = {
                                    name: formData.get('firstName') + ' ' + (formData.get('lastName') || ''),
                                    email: formData.get('email'),
                                    subject: formData.get('subject'),
                                    message: formData.get('message')
                                };
                                
                                try {
                                    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                                    const originalText = submitBtn.innerHTML;
                                    submitBtn.innerHTML = 'Sending...';
                                    submitBtn.disabled = true;

                                    const res = await fetch('/api/contact', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(data)
                                    });

                                    const json = await res.json();
                                    
                                    if (json.success) {
                                        alert("Message sent successfully! Our team will get back to you soon.");
                                        form.reset();
                                    } else {
                                        alert("Could not send message: " + (json.error || "Unknown error"));
                                    }

                                    submitBtn.innerHTML = originalText;
                                    submitBtn.disabled = false;
                                } catch (err) {
                                    alert("Client error. Please try again later.");
                                }
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">First Name <span className="text-[#F97316]">*</span></label>
                                        <input name="firstName" type="text" className="w-full px-5 py-4 bg-slate-50 dark:bg-[#060D1A] border border-slate-200 dark:border-slate-800 focus:border-[#F97316] dark:focus:border-[#F97316] outline-none transition-colors text-slate-900 dark:text-white font-medium rounded-2xl" placeholder="John" required />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">Last Name</label>
                                        <input name="lastName" type="text" className="w-full px-5 py-4 bg-slate-50 dark:bg-[#060D1A] border border-slate-200 dark:border-slate-800 focus:border-[#F97316] dark:focus:border-[#F97316] outline-none transition-colors text-slate-900 dark:text-white font-medium rounded-2xl" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email Address <span className="text-[#F97316]">*</span></label>
                                    <input name="email" type="email" className="w-full px-5 py-4 bg-slate-50 dark:bg-[#060D1A] border border-slate-200 dark:border-slate-800 focus:border-[#F97316] dark:focus:border-[#F97316] outline-none transition-colors text-slate-900 dark:text-white font-medium rounded-2xl" placeholder="john@example.com" required />
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">Subject</label>
                                    <select name="subject" className="w-full px-5 py-4 bg-slate-50 dark:bg-[#060D1A] border border-slate-200 dark:border-slate-800 focus:border-[#F97316] dark:focus:border-[#F97316] outline-none transition-colors text-slate-900 dark:text-white font-medium rounded-2xl appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Technical Issue / Bug</option>
                                        <option>Payment & Billing</option>
                                        <option>Feedback / Suggestion</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Message <span className="text-[#F97316]">*</span></label>
                                    <textarea name="message" rows={5} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#060D1A] border border-slate-200 dark:border-slate-800 focus:border-[#F97316] dark:focus:border-[#F97316] outline-none transition-colors text-slate-900 dark:text-white font-medium rounded-2xl resize-none" placeholder="Please describe your issue or inquiry in detail..." required></textarea>
                                </div>

                                <button type="submit" className="w-full sm:w-auto px-10 py-5 bg-[#F97316] hover:bg-[#ea580c] text-white font-black rounded-2xl transition-all shadow-lg shadow-[#F97316]/20 flex items-center justify-center gap-2 text-lg hover:-translate-y-1">
                                    <Send className="w-5 h-5" /> Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Direct Contacts & Address Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/5 w-full order-1 lg:order-2 space-y-12 pt-10"
                    >
                        <div>
                            <h3 className="text-4xl md:text-5xl font-black font-serif text-slate-900 dark:text-white mb-10">Our Offices</h3>
                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-[#F97316] shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-sm">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">Headquarters (New Delhi)</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
                                            ExamBoost Education Pvt. Ltd.<br />
                                            Connaught Place, Block C,<br />
                                            New Delhi, India 110001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-[#F97316] shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-sm">
                                        <Phone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">Phone Number</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
                                            Toll-Free: +91 1800 123 4567<br />
                                            Corporate: +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-white dark:bg-[#0F172A] border-[1.5px] border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-[#F97316] shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-sm">
                                        <Clock className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">Working Hours</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
                                            Monday - Saturday<br />
                                            9:00 AM - 7:00 PM (IST)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-slate-200 dark:bg-slate-800 rounded-[2rem] w-full h-64 flex items-center justify-center border-[1.5px] border-slate-300 dark:border-slate-700 overflow-hidden relative group shadow-inner">
                            {/* Ideally, insert a real iframe Google map here. This is a visual placeholder. */}
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                            <div className="absolute inset-0 bg-blue-50/50 dark:bg-[#0B1120]/50 mix-blend-overlay"></div>
                            <div className="bg-white dark:bg-[#060D1A] px-6 py-3 rounded-xl shadow-lg z-10 font-black text-slate-600 dark:text-slate-300 flex items-center gap-3 border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform cursor-pointer">
                                <MapPin className="w-5 h-5 text-[#F97316]" /> View on Google Maps
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 4. FAQ TEASER SECTION (Premium Box) */}
            <section className="py-24 bg-slate-50 dark:bg-[#0B1120] text-center border-t border-slate-100 dark:border-slate-800/80">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-[#0a1128] dark:bg-[#060D1A] rounded-[3rem] p-12 md:p-20 shadow-2xl border-[1.5px] border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F97316]/20 blur-[100px] rounded-full pointer-events-none" />
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-white mb-6 leading-tight relative z-10">Didn't find what you<br/>were looking for?</h2>
                        <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-10 relative z-10">
                            Check out our frequently asked questions. You might find your answer there immediately without having to wait for our support team.
                        </p>
                        <div className="flex justify-center relative z-10">
                            <Link href="/faq" className="px-10 py-5 bg-[#F97316] hover:bg-[#ea580c] text-white rounded-2xl font-black text-lg transition-all hover:-translate-y-1 shadow-lg shadow-[#F97316]/20 flex justify-center items-center gap-2">
                                Visit FAQ Page <ArrowRight className="w-5 h-5"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
