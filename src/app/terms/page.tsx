import React from 'react';
import Link from 'next/link';
import { BookText, ShieldAlert, Users, CreditCard, Ban, Scale, ArrowRight, BookOpen, AlertCircle, RefreshCcw, Handshake } from 'lucide-react';

export const metadata = {
    title: 'Terms and Conditions - ExamBoost',
    description: 'Read the terms of service and usage conditions for the ExamBoost platform.'
};

export default function TermsPage() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans pb-20">

            {/* 1. HERO SECTION */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-sm tracking-wide uppercase mb-6 border border-blue-200 dark:border-blue-800">
                        <BookText className="w-4 h-4" /> Legal Agreement
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight max-w-4xl mx-auto">
                        Terms & <span className="text-primary dark:text-accent">Conditions</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        These terms govern your use of ExamBoost. Please read them carefully to understand your rights and obligations while using our platform.
                    </p>
                    <p className="mt-6 text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                        Last Updated: March 2026
                    </p>
                </div>
            </section>

            {/* 2. MAIN CONTENT WITH SIDEBAR TABS */}
            <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

                    {/* Sidebar / Page Navigation */}
                    <aside className="lg:w-1/4 hidden lg:block sticky top-32 self-start">
                        <h4 className="font-black text-slate-900 dark:text-white text-lg mb-6 uppercase tracking-wider">Table of Contents</h4>
                        <nav className="space-y-1">
                            {[
                                { id: 'acceptance', label: '1. Acceptance of Terms' },
                                { id: 'about', label: '2. About Our Platform' },
                                { id: 'account', label: '3. User Account' },
                                { id: 'usage', label: '4. Use of the Platform' },
                                { id: 'access', label: '5. Test Series Access' },
                                { id: 'payments', label: '6. Pricing & Payments' },
                                { id: 'refunds', label: '7. Refund Policy' },
                                { id: 'ip', label: '8. Intellectual Property' },
                                { id: 'availability', label: '9. Platform Availability' },
                                { id: 'liability', label: '10. Limitation of Liability' },
                                { id: 'termination', label: '11. Account Termination' },
                                { id: 'governing-law', label: '12. Governing Law' },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`#${item.id}`}
                                    className="block px-4 py-3 rounded-xl font-bold text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-accent transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-12 bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-black text-slate-900 dark:text-white mb-3">Questions about terms?</h4>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">Our legal and support team is here to clarify.</p>
                            <a href="mailto:legal@examboost.com" className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-2.5 rounded-lg font-bold text-sm block text-center hover:border-primary dark:hover:border-accent transition-colors">
                                legal@examboost.com
                            </a>
                        </div>
                    </aside>

                    {/* Policy Content */}
                    <div className="lg:w-3/4">
                        <div className="bg-white dark:bg-[#0f172a] rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-200 dark:border-slate-800 shadow-sm prose prose-slate dark:prose-invert prose-headings:font-black prose-a:text-primary dark:prose-a:text-accent max-w-none prose-p:font-medium prose-li:font-medium">

                            <div id="acceptance" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent"><Handshake className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">1. Acceptance of Terms</h2>
                                </div>
                                <p>
                                    Welcome to <strong>ExamBoost</strong>. By accessing, registering for, or using our website, services, mobile applications, and test series platform, you confirm that you have read, understood, and explicitly agreed to be bound by these Terms and Conditions. These Terms apply uniformly to all users of the platform, including casual visitors, registered students, and paid customers. If you do not agree with any part of these terms, you must immediately cease the use of our platform.
                                </p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="about" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"><BookOpen className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">2. About Our Platform</h2>
                                </div>
                                <p>ExamBoost is a digital education ecosystem that provides high-quality online mock tests, practice papers, video resources, and deep analytical tools. We are committed to helping students prepare for major competitive examinations across India, including but not limited to:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8 mt-4">
                                    {[
                                        'Engineering (JEE Main/Adv, BITSAT)',
                                        'Medical (NEET UG, AIIMS)',
                                        'UPSC & State Civil Services',
                                        'SSC (CGL, CHSL, MTS)',
                                        'Banking (IBPS PO, SBI Clerk)',
                                        'Railways (RRB NTPC, Group D)',
                                        'Defense & Police Exams',
                                        'CUET & Undergrad Entrances',
                                        'MBA Entrance (CAT, XAT)',
                                        'Teaching (CTET, State TET)'
                                    ].map((exam, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent shrink-0" />
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{exam}</span>
                                        </div>
                                    ))}
                                </div>
                                <p>All data, mock questions, and analytics provided by ExamBoost are strictly intended for educational, preparatory, and practice purposes.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="account" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400"><Users className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">3. User Account Responsibilities</h2>
                                </div>
                                <p>To unlock the full potential of our test series and analytics, you are required to create a personalized account. By doing so, you agree to the following conditions:</p>
                                <ul>
                                    <li><strong>Accuracy of Information:</strong> The personal details provided during registration (Name, Email, Phone Number, Target Exam) must be entirely accurate, current, and complete.</li>
                                    <li><strong>Confidentiality:</strong> You are solely responsible for maintaining the strict confidentiality of your login credentials (passwords, OTPs).</li>
                                    <li><strong>Account Liability:</strong> You bear full responsibility for all activities, test attempts, and purchases that occur under your registered account.</li>
                                </ul>
                                <p>ExamBoost reserves the absolute right to suspend, freeze, or terminate accounts found to be using fake identities, temporary emails, or violating these security protocols.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="usage" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400"><Ban className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">4. Rules of Platform Usage</h2>
                                </div>
                                <p>ExamBoost maintains a zero-tolerance policy towards malicious platform usage. You agree to use the platform exclusively for lawful, educational purposes. You strictly agree <strong>NOT TO:</strong></p>
                                <ul>
                                    <li>Share your login credentials. <strong>Simultaneous logins from multiple devices will result in an immediate automated account ban.</strong></li>
                                    <li>Copy, screenshot, screen-record, scrape, or unlawfully distribute test questions, solutions, or PDF notes without our explicit written consent.</li>
                                    <li>Attempt to reverse engineer, hack, disrupt, DDoS, or otherwise damage the integrity of the platform infrastructure.</li>
                                    <li>Utilize automated systems, bots, or scripts to mass-download content or artificially inflate test scores.</li>
                                    <li>Resell, sublicense, or redistribute our premium test series content for commercial gain.</li>
                                </ul>
                                <strong className="text-red-600 dark:text-red-400">Violation of these rules will result in an immediate, permanent account ban without any prior notice and without any refund. Legal action may also be pursued where intellectual property theft is detected.</strong>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="access" className="scroll-mt-32">
                                <h2 className="text-3xl">5. Test Series Access & Validity</h2>
                                <p>Upon the successful purchase of a premium test series, specific conditions apply to your access:</p>
                                <ul>
                                    <li><strong>Single User License:</strong> Access is granted strictly to the individual registered user account. Group buying or account sharing is prohibited.</li>
                                    <li><strong>Time-Bound Access:</strong> The length of access to a test series will be clearly defined during checkout (e.g., 6 Months, 1 Year, or Till Exam Date). Access will automatically expire upon the completion of this duration.</li>
                                    <li><strong>Content Updates:</strong> We continuously update questions to match changing exam patterns. Old questions may be rotated out or replaced without prior notice.</li>
                                </ul>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="payments" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400"><CreditCard className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">6. Pricing & Payments</h2>
                                </div>
                                <p>We aim to keep our education highly affordable. However, all prices listed across the platform are subject to revision at our sole discretion without prior notice to users (existing purchases remain unaffected).</p>
                                <p>Payments are processed exclusively through secure, RBI-certified third-party payment gateways. We accept UPI, Net Banking, Credit/Debit cards, and major wallets. ExamBoost will never request your banking passwords or PINs over phone or email.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="refunds" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400"><RefreshCcw className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">7. Refund Policy</h2>
                                </div>
                                <p>Due to the digital nature of mock tests and study materials, <strong>Test Series purchases are generally strictly non-refundable once activated.</strong></p>
                                <p>However, we do entertain refund requests exclusively under the following circumstances:</p>
                                <ul>
                                    <li><strong>Duplicate Payments:</strong> If money was deducted twice for the same transaction/course due to a payment gateway error.</li>
                                    <li><strong>Technical Non-Delivery:</strong> If money was deducted but the course was not assigned to your account within 48 hours.</li>
                                </ul>
                                <p>All refund claims must be initiated within 7 days of the transaction by emailing <a href="mailto:support@examboost.com">support@examboost.com</a> with the transaction ID. Approved refunds are processed back to the original source within 5-7 business days.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="ip" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400"><ShieldAlert className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">8. Intellectual Property Rights</h2>
                                </div>
                                <p>The entirety of the content available on the ExamBoost platform is the exclusive intellectual property of ExamBoost Education Pvt. Ltd. This includes, but is not limited to:</p>
                                <ul>
                                    <li>All Mock Test Questions, Explanations, and Solutions.</li>
                                    <li>Proprietary UI/UX Design, Graphics, Logos, and Branding Elements.</li>
                                    <li>Downloadable Study Materials (PDF notes, formula sheets).</li>
                                </ul>
                                <p>These assets are fully protected by Indian and International copyright and intellectual property laws. Any unauthorized reproduction, modification, translation, or distribution amounts to copyright infringement.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="availability" className="scroll-mt-32">
                                <h2 className="text-3xl">9. Platform Availability</h2>
                                <p>We utilize auto-scaling cloud infrastructure to maintain 99.9% uptime. Nevertheless, we do not guarantee mathematically uninterrupted availability. The platform may temporarily go offline for critical database maintenance, feature deployments, or due to unforeseen external outages (e.g., AWS downtime). ExamBoost shall bear no financial liability for study time lost during such temporary service interruptions.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="liability" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-orange-600 dark:text-orange-400"><AlertCircle className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">10. Limitation of Liability</h2>
                                </div>
                                <p>ExamBoost serves entirely as a supplementary educational resource and practice platform.</p>
                                <p><strong>We do NOT guarantee, explicitly or implicitly:</strong></p>
                                <ul>
                                    <li>Any specific rank, score, or selection in your target examination.</li>
                                    <li>That the exact questions from our mock tests will appear in the actual exam.</li>
                                    <li>Absolute error-free content (though we maintain strict quality control, human/typographical errors may rarely occur).</li>
                                </ul>
                                <p>Under no circumstances shall ExamBoost, its directors, or its educators be held liable for any direct, indirect, incidental, or consequential damages resulting from your usage of our platform or your exam performance.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="termination" className="scroll-mt-32">
                                <h2 className="text-3xl">11. Account Suspension or Termination</h2>
                                <p>ExamBoost holds the unilateral right to immediately suspend, restrict, or irrevocably terminate any user account if we detect a breach of these Terms and Conditions, suspicious automated activity, or behavior that threatens platform security. Such actions are preventative and may be executed without giving any prior notice to the user.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="governing-law" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"><Scale className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">12. Governing Law & Jurisdiction</h2>
                                </div>
                                <p>These Terms, as well as your usage of the platform, shall be governed by, and interpreted in strict accordance with the laws of India. Any disputes, controversies, or claims arising from the platform shall be subject solely and exclusively to the jurisdiction of the competent courts located in New Delhi, India.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
