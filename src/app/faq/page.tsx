import React from 'react';
import { HelpCircle, Search, Mail, Phone, ArrowRight, MessageCircleQuestion, CreditCard, Laptop, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'FAQs - ExamBoost',
    description: 'Find answers to frequently asked questions about ExamBoost courses, test series, accounts, and payments.'
};

export default function FAQPage() {
    // FAQ Data Categorized
    const faqs = [
        {
            category: "General & Account",
            icon: <MessageCircleQuestion className="w-6 h-6" />,
            questions: [
                {
                    q: "What is ExamBoost?",
                    a: "ExamBoost is India's leading EdTech platform offering comprehensive test series, video courses, and deep AI-driven analytics for various competitive exams like SSC, Banking, Railways, UPSC, and State PSCs."
                },
                {
                    q: "How do I create an account?",
                    a: "Click on the 'Sign Up' button on the top right corner of the website. You can register using your Email ID or mobile number. An OTP will be sent to verify your account."
                },
                {
                    q: "I forgot my password. How can I reset it?",
                    a: "Go to the Login page and click on 'Forgot Password'. Enter your registered email address or mobile number. We will send you a secure link or OTP to reset your password instantly."
                },
                {
                    q: "Can I change my registered email ID or phone number?",
                    a: "Currently, you cannot change your registered email or phone number directly from the dashboard for security reasons. Please contact our support team at support@examboost.com to process this request."
                }
            ]
        },
        {
            category: "Test Series & Courses",
            icon: <Laptop className="w-6 h-6" />,
            questions: [
                {
                    q: "Are the mock tests based on the latest syllabus?",
                    a: "Yes, our content team and subject matter experts continually update all mock tests and study materials strictly according to the latest exam patterns and official syllabus notifications."
                },
                {
                    q: "Can I re-attempt a mock test after submitting it?",
                    a: "Full-length mock tests can only be attempted once to provide an accurate percentile and ranking. However, you can review your answers, see detailed explanations, and attempt sectional quizzes multiple times."
                },
                {
                    q: "Is the platform bilingual? Can I switch between English and Hindi?",
                    a: "Absolutely! Most of our test series and courses are available in both English and Hindi. You can toggle the language seamlessly while attempting a test or reading study notes."
                },
                {
                    q: "Are there any free tests available?",
                    a: "Yes! We always provide at least 1-2 free full-length mock tests for every major exam so you can evaluate the quality of our content and platform interface before making a purchase."
                }
            ]
        },
        {
            category: "Payments & Subscriptions",
            icon: <CreditCard className="w-6 h-6" />,
            questions: [
                {
                    q: "What payment methods do you accept?",
                    a: "We accept all major payment methods including Credit/Debit Cards (Visa, Mastercard, RuPay), UPI (Google Pay, PhonePe, Paytm), Net Banking from all major Indian banks, and Wallet payments."
                },
                {
                    q: "Is my payment information secure?",
                    a: "100% Secure. We use industry-standard 256-bit encryption and partner with RBI-compliant payment gateways. ExamBoost never stores your sensitive card details."
                },
                {
                    q: "Do you offer refunds if I don't like a course?",
                    a: "We have a strict 3-Day Money-Back Guarantee policy for our video courses. However, test series and digital PDF purchases are non-refundable once activated. Please refer to our Refund Policy page for more details."
                },
                {
                    q: "Can I pay in EMIs?",
                    a: "Yes, No-Cost EMI options are available on select Credit Cards and Bajaj Finserv EMI cards for purchases above ₹3,000."
                }
            ]
        },
        {
            category: "Technical & Accessibility",
            icon: <ShieldCheck className="w-6 h-6" />,
            questions: [
                {
                    q: "Can I access ExamBoost from multiple devices?",
                    a: "You can log in from multiple devices (e.g., your laptop and your smartphone), but to prevent account sharing, simultaneous logins are not allowed. Logging into a second device will log you out from the first."
                },
                {
                    q: "Is there an ExamBoost Mobile App?",
                    a: "Yes, our mobile app is available for both Android (Google Play Store) and iOS (Apple App Store). You can download tests and videos on the app for offline access."
                },
                {
                    q: "The test is stuck / not loading. What should I do?",
                    a: "This usually happens due to a network drop. Try clearing your browser cache or switching to an incognito window. Don't worry, our system auto-saves your progress every 10 seconds, so your test data is safe."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans pb-20">

            {/* 1. HERO SECTION */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide uppercase mb-6 border border-slate-200 dark:border-slate-700">
                        <HelpCircle className="w-4 h-4" /> Support Center
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight max-w-4xl mx-auto">
                        Frequently Asked <span className="text-primary dark:text-accent">Questions</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        Everything you need to know about ExamBoost. Can't find the answer you're looking for? Feel free to contact us.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-10 max-w-2xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-accent transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for questions (e.g., 'refund', 'password', 'mock test')..."
                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0f172a] focus:bg-white dark:focus:bg-[#020617] text-slate-900 dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent transition-all shadow-sm font-semibold placeholder:text-slate-400 placeholder:font-medium"
                        />
                    </div>
                </div>
            </section>

            {/* 2. FAQ CONTENT BY CATEGORY */}
            <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto space-y-16">

                    {faqs.map((faqGroup, index) => (
                        <div key={index} id={`cat-${index}`}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-primary dark:text-accent shadow-sm">
                                    {faqGroup.icon}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{faqGroup.category}</h2>
                            </div>

                            <div className="space-y-4">
                                {faqGroup.questions.map((item, qIdx) => (
                                    <details key={qIdx} className="group bg-white dark:bg-[#0f172a] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-slate-900 dark:text-white select-none">
                                            {item.q}
                                            <span className="ml-4 flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 group-open:bg-primary group-open:text-white dark:group-open:bg-accent dark:group-open:text-slate-900 transition-colors">
                                                <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* 3. STILL NEED HELP */}
            <section className="container mx-auto px-4 mt-8">
                <div className="max-w-4xl mx-auto bg-primary dark:bg-[#0a1128] rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden border border-primary/20 dark:border-slate-800">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Still have a question?</h3>
                        <p className="text-white/80 font-medium max-w-lg mx-auto mb-8 text-lg">
                            If you cannot find the answer to your question in our FAQ, you can always contact us safely. We will answer you shortly!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-white text-primary dark:text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 w-full sm:w-auto">
                                Contact Support
                            </Link>
                            <a href="tel:+919876543210" className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-lg transition-colors flex items-center gap-2 w-full sm:w-auto">
                                <Phone className="w-5 h-5" /> Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
