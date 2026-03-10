import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, Globe, Bell, FileWarning, Search, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy - ExamBoost',
    description: 'Learn how we collect, use, and protect your personal information at ExamBoost.'
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans pb-20">

            {/* 1. HERO SECTION */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 font-bold text-sm tracking-wide uppercase mb-6 border border-purple-200 dark:border-purple-800">
                        <ShieldCheck className="w-4 h-4" /> Legal & Privacy
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight max-w-4xl mx-auto">
                        ExamBoost <span className="text-primary dark:text-accent">Privacy Policy</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        Your privacy is critically important to us. This page explains how we collect, use, and protect your personal information.
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
                        <h4 className="font-black text-slate-900 dark:text-white text-lg mb-6 uppercase tracking-wider">In this policy</h4>
                        <nav className="space-y-1">
                            {[
                                { id: 'introduction', label: 'Introduction' },
                                { id: 'information-we-collect', label: '1. Information We Collect' },
                                { id: 'how-we-use', label: '2. How We Use It' },
                                { id: 'payment-security', label: '3. Payment Security' },
                                { id: 'cookies', label: '4. Cookies & Tracking' },
                                { id: 'sharing', label: '5. Sharing & Disclosure' },
                                { id: 'data-security', label: '6. Data Security' },
                                { id: 'third-party', label: '7. Third-Party Services' },
                                { id: 'children', label: "8. Children's Privacy" },
                                { id: 'user-rights', label: '9. User Rights' },
                                { id: 'contact', label: '10. Contact Us' },
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
                            <h4 className="font-black text-slate-900 dark:text-white mb-3">Still have questions?</h4>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">Our Data Protection Officer can assist you.</p>
                            <a href="mailto:privacy@examboost.com" className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-2.5 rounded-lg font-bold text-sm block text-center hover:border-primary dark:hover:border-accent transition-colors">
                                privacy@examboost.com
                            </a>
                        </div>
                    </aside>

                    {/* Policy Content */}
                    <div className="lg:w-3/4">
                        <div className="bg-white dark:bg-[#0f172a] rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-200 dark:border-slate-800 shadow-sm prose prose-slate dark:prose-invert prose-headings:font-black prose-a:text-primary dark:prose-a:text-accent max-w-none prose-p:font-medium prose-li:font-medium">

                            <div id="introduction" className="scroll-mt-32">
                                <p className="text-lg leading-relaxed">
                                    Welcome to <strong>ExamBoost</strong>. Your privacy is paramount to us. This Privacy Policy outlines the types of information we gather from you, how we use it, with whom we share it, and the steps we take to protect your data. By accessing or using our platform via desktop, mobile app, or any other medium, you agree to the practices described in this policy.
                                </p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="information-we-collect" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-primary dark:text-accent"><FileText className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">1. Information We Collect</h2>
                                </div>
                                <p>We collect information to provide better services to all our users. The data we collect generally falls into the following categories:</p>

                                <h3>1.1 Personal Information</h3>
                                <p>When you create an account, subscribe to a service, or purchase a test series, we explicitly ask for information such as:</p>
                                <ul>
                                    <li><strong>Identity Data:</strong> First Name, Last Name, Date of Birth.</li>
                                    <li><strong>Contact Data:</strong> Email Address, Mobile Number, Physical Address (for physical book deliveries).</li>
                                    <li><strong>Authentication Data:</strong> Login IDs, Passwords (stored in encrypted format), and OAuth tokens (if logging in via Google/Microsoft).</li>
                                    <li><strong>Academic Data:</strong> Standard/Grade, target exams (e.g., JEE, NEET, SSC), school or college name.</li>
                                </ul>

                                <h3>1.2 Automated Usage & Technical Data</h3>
                                <p>When you interact with our platform, our servers automatically record certain technical details:</p>
                                <ul>
                                    <li><strong>Device Information:</strong> Hardware model, operating system version, unique device identifiers, and mobile network information.</li>
                                    <li><strong>Log Information:</strong> Details of how you used our service, IP address, system activity, hardware settings, browser type, browser language, and the date and time of your request.</li>
                                    <li><strong>Test Analytics:</strong> We record your clicks, time spent per question, correctness, and reading patterns strictly to generate your AI-driven performance analytics.</li>
                                </ul>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="how-we-use" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400"><Search className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">2. How We Use Your Information</h2>
                                </div>
                                <p>We utilize the collected data to operate, maintain, and continuously improve our digital infrastructure and product offerings. Specifically, we use it for:</p>
                                <ul>
                                    <li><strong>Service Delivery:</strong> To set up your dashboard, deliver mock tests, and process your test scores.</li>
                                    <li><strong>Personalization:</strong> To analyze your test performance (weak/strong areas) and recommend tailored study materials and actionable insights.</li>
                                    <li><strong>Communication:</strong> To send you administrative messages, OTPs, receipts, syllabus change alerts, and customer support responses.</li>
                                    <li><strong>Security:</strong> To detect, prevent, and respond to fraud, abuse, and technical issues. We monitor simultaneous logins to prevent account sharing.</li>
                                </ul>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="payment-security" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400"><Lock className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">3. Payment Security</h2>
                                </div>
                                <p>
                                    All financial transactions made on our platform are processed securely. <strong>We do not store or process your complete credit card numbers, CVV, or net banking passwords on ExamBoost servers.</strong>
                                </p>
                                <p>
                                    All payments are securely routed through RBI-compliant, PCI-DSS certified third-party payment gateways (such as Razorpay, Paytm, or Stripe). We only store transaction IDs and payment status to grant you course access.
                                </p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="cookies" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400"><Eye className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">4. Cookies and Tracking Technologies</h2>
                                </div>
                                <p>We use cookies, web beacons, and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                                <ul>
                                    <li><strong>Session Cookies:</strong> Kept only while your browser is open. Used for persistent logins.</li>
                                    <li><strong>Preference Cookies:</strong> Used to remember your preferences (like Light/Dark mode).</li>
                                    <li><strong>Analytics Cookies:</strong> Utilized via tools like Google Analytics to understand how visitors interact with our website.</li>
                                </ul>
                                <p>You can instruct your browser to refuse all cookies. However, if you do not accept cookies, you may not be able to log in or use sections of our test engine.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="sharing" className="scroll-mt-32">
                                <h2 className="text-3xl">5. Sharing of Information</h2>
                                <p><strong>We do not sell, trade, or rent your personal identification information to third parties.</strong> We may share generic aggregated demographic information not linked to any personal identification information.</p>
                                <p>We may disclose your personal information under the following special circumstances:</p>
                                <ul>
                                    <li><strong>Legal Requirement:</strong> If requested or required by law, by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation of cyber incidents.</li>
                                    <li><strong>Service Providers:</strong> We employ third-party companies (cloud hosting like AWS, SMS/Email delivery like Twilio/SendGrid) to facilitate our service. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it.</li>
                                </ul>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="data-security" className="scroll-mt-32">
                                <h2 className="text-3xl">6. Data Security Measures</h2>
                                <p>
                                    We implement a variety of security measures, including AWS Web Application Firewalls (WAF), AES-256 data encryption at rest, and TLS/SSL encryption in transit to maintain the safety of your personal information.
                                    However, please acknowledge that no method of transmission over the internet, or method of electronic storage is 100% secure.
                                </p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="third-party" className="scroll-mt-32">
                                <h2 className="text-3xl">7. Third-Party Links</h2>
                                <p>Our platform may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We assume no responsibility for the content, privacy policies, or practices of any third-party websites.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="children" className="scroll-mt-32">
                                <h2 className="text-3xl">8. Children's Privacy</h2>
                                <p>While our educational content is made for students of various ages, we do not knowingly permit children under the age of 13 to register for an account without verified parental consent. If we become aware that we have collected Personal Data from children without verification of parental consent, we take immediate steps to securely remove that information from our servers.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="user-rights" className="scroll-mt-32">
                                <h2 className="text-3xl">9. Your Data Rights</h2>
                                <p>Depending on your jurisdiction, you have the right to:</p>
                                <ul>
                                    <li><strong>Access:</strong> Request clear and complete copies of your personal data held by us.</li>
                                    <li><strong>Correction:</strong> Have any inaccurate personal data about you rectified and, taking into account the purposes of the processing, to have any incomplete personal data about you completed.</li>
                                    <li><strong>Erasure / Account Deletion:</strong> You can completely delete your ExamBoost account from your dashboard settings, which will permanently wipe your test records, analytical data, and personal details. (Note: Financial transaction logs may be kept for legal tax auditing).</li>
                                </ul>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="contact" className="scroll-mt-32">
                                <h2 className="text-3xl">10. Contact Us</h2>
                                <p>If you have any questions, feedback, or concerns regarding your privacy, data deletion requests, or our overall policy, feel free to reach out to us:</p>
                                <div className="bg-slate-50 dark:bg-[#020617] p-6 rounded-xl border border-slate-200 dark:border-slate-800 mt-6 inline-block">
                                    <p className="mb-2"><strong>Grievance / Data Protection Officer:</strong> Mr. Sharma</p>
                                    <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@examboost.com">privacy@examboost.com</a></p>
                                    <p className="mb-0"><strong>Mail:</strong> ExamBoost Privacy Desk, Connaught Place, New Delhi, India 110001</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
