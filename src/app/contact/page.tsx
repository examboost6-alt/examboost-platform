import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, HeadphonesIcon, Globe, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Us - ExamBoost',
    description: 'Get in touch with ExamBoost. We are here to help you with any questions regarding your exam preparation, test series, and strategy.'
};

export default function ContactPage() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans">

            {/* 1. HERO SECTION */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide uppercase mb-6 border border-slate-200 dark:border-slate-700">
                        <MessageSquare className="w-4 h-4" /> Reach Out To Us
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight max-w-4xl mx-auto">
                        We're Here to <span className="text-primary dark:text-accent">Help You Succeed</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        Have questions about our test series or need help with your account? Our dedicated support team is ready to assist you.
                    </p>
                </div>
            </section>

            {/* 2. SUPPORT DEPARTMENTS (Quick Contact) */}
            <section className="-mt-12 relative z-10 container mx-auto px-4 md:px-6 lg:px-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* General Support */}
                    <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-5">
                            <HeadphonesIcon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Student Support</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 flex-1">
                            For technical issues, test series access, or account-related inquiries.
                        </p>
                        <a href="mailto:support@examboost.com" className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2 hover:underline">
                            support@examboost.com <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mentorship Programs */}
                    <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-5">
                            <Globe className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Mentorship Desk</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 flex-1">
                            Connect with our expert faculties to clear doubts or plan your strategy.
                        </p>
                        <a href="mailto:mentor@examboost.com" className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2 hover:underline">
                            mentor@examboost.com <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Partnership & Press */}
                    <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-5">
                            <Mail className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Partnerships</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 flex-1">
                            For business queries, institutional tie-ups, or media interactions.
                        </p>
                        <a href="mailto:business@examboost.com" className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-2 hover:underline">
                            business@examboost.com <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. MAIN CONTACT FORM & DETAILS */}
            <section className="py-16 bg-slate-100 dark:bg-[#060c21] border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Form Column */}
                        <div className="lg:w-3/5 order-2 lg:order-1">
                            <div className="bg-white dark:bg-[#0f172a] p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Send us a message</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium mb-8">We usually respond within 24 hours.</p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">First Name <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-lg outline-none transition-colors text-slate-900 dark:text-white font-medium" placeholder="John" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-lg outline-none transition-colors text-slate-900 dark:text-white font-medium" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                                        <input type="email" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-lg outline-none transition-colors text-slate-900 dark:text-white font-medium" placeholder="john@example.com" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                                        <select className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-lg outline-none transition-colors text-slate-900 dark:text-white font-medium appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Technical Issue / Bug</option>
                                            <option>Payment & Billing</option>
                                            <option>Feedback / Suggestion</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Your Message <span className="text-red-500">*</span></label>
                                        <textarea rows={5} className="w-full px-4 py-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-accent rounded-lg outline-none transition-colors text-slate-900 dark:text-white font-medium resize-none" placeholder="Please describe your issue or inquiry in detail..." required></textarea>
                                    </div>

                                    <button type="button" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg">
                                        <Send className="w-5 h-5" /> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Direct Contacts & Address Column */}
                        <div className="lg:w-2/5 order-1 lg:order-2 space-y-10">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Our Offices</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-primary dark:text-accent shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Headquarters (New Delhi)</h4>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                                ExamBoost Education Pvt. Ltd.<br />
                                                Connaught Place, Block C,<br />
                                                New Delhi, India 110001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-primary dark:text-accent shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Phone Number</h4>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">
                                                Toll-Free: +91 1800 123 4567<br />
                                                Corporate: +91 98765 43210
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-primary dark:text-accent shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Working Hours</h4>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">
                                                Monday - Saturday<br />
                                                9:00 AM - 7:00 PM (IST)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl w-full h-48 flex items-center justify-center border border-slate-300 dark:border-slate-700 overflow-hidden relative">
                                {/* Ideally, insert a real iframe Google map here. This is a visual placeholder. */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                                <div className="bg-white dark:bg-[#020617] px-4 py-2 rounded-lg shadow-sm z-10 font-bold text-slate-500 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> View on Google Maps
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ TEASER SECTION */}
            <section className="py-20 lg:py-24 bg-white dark:bg-[#020617]">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Didn't find what you were looking for?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-8">
                        Check out our frequently asked questions. You might find your answer there immediately without having to wait for our support team.
                    </p>
                    <Link href="/faq" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors text-lg">
                        Visit FAQ Page <ArrowRight className="w-5 h-5 opacity-70" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
