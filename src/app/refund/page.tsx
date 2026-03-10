import React from 'react';
import Link from 'next/link';
import { RefreshCcw, ShieldAlert, CreditCard, Clock, CheckCircle2, XCircle, AlertTriangle, FileSearch, Banknote } from 'lucide-react';

export const metadata = {
    title: 'Refund & Cancellation Policy - ExamBoost',
    description: 'Read our refund and cancellation policy regarding purchases made on the ExamBoost platform.'
};

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans pb-20">

            {/* 1. HERO SECTION */}
            <section className="bg-white dark:bg-[#060c21] border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 font-bold text-sm tracking-wide uppercase mb-6 border border-rose-200 dark:border-rose-800">
                        <RefreshCcw className="w-4 h-4" /> Billing & Returns
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight max-w-4xl mx-auto">
                        Refund & <span className="text-primary dark:text-accent">Cancellation Policy</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                        This policy outlines the rules, conditions, and procedures for refunds related to purchases made on the ExamBoost platform.
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
                                { id: 'nature', label: '1. Nature of Our Products' },
                                { id: 'general-policy', label: '2. General Refund Policy' },
                                { id: 'eligible', label: '3. Eligible Refund Cases' },
                                { id: 'non-refundable', label: '4. Non-Refundable Situations' },
                                { id: 'usage', label: '5. Test Series Usage Condition' },
                                { id: 'time-limit', label: '6. Refund Time Limit' },
                                { id: 'process', label: '7. Request & Approval Process' },
                                { id: 'timeline', label: '8. Processing Timeline' },
                                { id: 'abuse', label: '9. Abuse & Misuse' },
                                { id: 'promotions', label: '10. Promotional Offers' },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`#${item.id}`}
                                    className="block px-4 py-3 rounded-xl font-bold text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-12 bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-black text-slate-900 dark:text-white mb-3">Facing a payment issue?</h4>
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">Our billing support team can resolve transaction errors within 24 hours.</p>
                            <a href="mailto:billing@examboost.com" className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-2.5 rounded-lg font-bold text-sm block text-center hover:border-rose-500 transition-colors">
                                billing@examboost.com
                            </a>
                        </div>
                    </aside>

                    {/* Policy Content */}
                    <div className="lg:w-3/4">
                        <div className="bg-white dark:bg-[#0f172a] rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-200 dark:border-slate-800 shadow-sm prose prose-slate dark:prose-invert prose-headings:font-black prose-a:text-rose-600 dark:prose-a:text-rose-400 max-w-none prose-p:font-medium prose-li:font-medium">

                            <p className="text-lg leading-relaxed mb-10">
                                Our goal is to maintain absolute transparency while protecting the integrity of our digital educational content. Because ExamBoost delivers premium digital goods instantly, our refund policies differ from those of physical products. By purchasing any package, you explicitly agree to the terms described below.
                            </p>

                            <div id="nature" className="scroll-mt-32">
                                <h2 className="text-3xl">1. Nature of Our Products</h2>
                                <p>All products offered on ExamBoost are <strong>strictly digital educational products</strong> delivered entirely through online access to your registered user account. These include, but are not limited to:</p>
                                <ul>
                                    <li>Premium Test Series & Sectional Quizzes</li>
                                    <li>Full-Length Mock Tests</li>
                                    <li>Previous Year Practice Papers</li>
                                    <li>AI-Driven Performance Analytics</li>
                                    <li>Digital Study Resources (PDF Notes, e-Books)</li>
                                </ul>
                                <p>Due to the instantaneous nature of digital content delivery, once access is granted, the content can be viewed, attempted, downloaded, or consumed immediately. Therefore, traditional "return" policies do not apply, and refund eligibility is strictly limited.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="general-policy" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400"><ShieldAlert className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">2. General Refund Policy</h2>
                                </div>
                                <p>
                                    As a strict baseline rule, <strong>all purchases made on ExamBoost are inherently non-refundable</strong> once access to the test series or digital content has been fully provided to your account.
                                </p>
                                <p>
                                    We encourage all users to carefully review the complete details, syllabus, validity period, and language medium of the test series before completing the checkout process. We also provide free demo tests for almost every exam category so that you can evaluate our platform's quality before making a financial commitment.
                                </p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="eligible" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">3. Eligible Cases for Refund</h2>
                                </div>
                                <p>Refunds will only be considered under the following verified, exceptional technical circumstances:</p>

                                <h3>3.1 Duplicate Payment</h3>
                                <p>If you are charged multiple times for the exact same purchase due to a payment gateway timeout, bank error, or technical glitch, the extra payments will be refunded in full after a backend verification.</p>

                                <h3>3.2 Payment Successful but Access Not Provided</h3>
                                <p>If a transaction is successfully completed, money is deducted from your account, but our system fails to assign the purchased test series to your dashboard within 24 hours (and our technical team is unable to manually resolve the issue).</p>

                                <h3>3.3 Transaction Failure but Amount Deducted</h3>
                                <p>If a transaction ultimately fails on our end but the amount is deducted from your bank. Usually, the payment gateway auto-reverses such funds within 5-7 days. If they do not, we will escalate the issue with the gateway on your behalf to initiate the refund.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="non-refundable" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400"><XCircle className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">4. Non-Refundable Situations</h2>
                                </div>
                                <p>Under absolutely no circumstances will a refund be provided in the following scenarios:</p>
                                <ul className="space-y-2">
                                    <li>The user simply "changes their mind" after a successful purchase.</li>
                                    <li>The user accidentally purchased the wrong test series, wrong exam category, or wrong language medium.</li>
                                    <li>The user failed to read the product details or validity constraints before purchasing.</li>
                                    <li>The user experiences localized technical issues outside of our control (e.g., extremely slow internet connectivity, outdated device, corrupted browser).</li>
                                    <li>The user claims dissatisfaction with the test difficulty level, content quality, or UI/UX (which is why free demo tests are provided).</li>
                                    <li>The user fails to utilize the purchased test series during its active validity period.</li>
                                </ul>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="usage" className="scroll-mt-32">
                                <h2 className="text-3xl">5. Test Series Usage Condition</h2>
                                <p className="p-4 bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 rounded-r-lg">
                                    <strong>CRITICAL:</strong> Once a user clicks 'Start Test', views any restricted question, opens a solution/explanation section, or views the performance analytics for a paid test, the product is immediately classified as <strong>"100% Consumed & Used"</strong>. At this exact moment, the purchase permanently becomes strictly non-refundable, overriding any other condition.
                                </p>
                                <p>This specific policy is enforced algorithmically to protect our proprietary intellectual property and prevent targeted content scraping/misuse.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="time-limit" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400"><Clock className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">6. Refund Request Time Limit</h2>
                                </div>
                                <p>Any legitimate refund request (such as for duplicate payments) must be formally submitted within <strong>48 hours of the exact purchase timestamp</strong>.</p>
                                <p>Any requests submitted after this strict 48-hour window will be automatically rejected by our system, and no further correspondence will be entertained on the matter.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="process" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400"><FileSearch className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">7. Refund Request & Approval Process</h2>
                                </div>
                                <p>To initiate a refund request, the user must send an email to our billing team at <a href="mailto:billing@examboost.com">billing@examboost.com</a> heavily detailing the following mandatory information:</p>
                                <ul>
                                    <li>Full Registered Name</li>
                                    <li>Registered Email ID and Phone Number</li>
                                    <li>Exact Exam/Test Series Name Purchased</li>
                                    <li>The Official Transaction ID (provided by your bank/gateway)</li>
                                    <li>Clear Payment Screenshot showing the successful deduction</li>
                                    <li>The explicit, valid reason for the refund request</li>
                                </ul>
                                <p>ExamBoost’s billing and technical teams reserve the absolute right to investigate the logs of your account, verify the claims, and ultimately approve or reject the refund request. <strong>The decision made by ExamBoost management regarding any refund is final and non-negotiable.</strong></p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="timeline" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400"><Banknote className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">8. Refund Processing Timeline</h2>
                                </div>
                                <p>If a refund request is officially approved by our team in writing:</p>
                                <ul>
                                    <li>The refund will be processed from our gateway within <strong>7 to 10 standard business days</strong>.</li>
                                    <li>The exact amount will be credited back strictly to the <strong>original payment method</strong> (Credit Card, Bank Account, UPI) used during the initial purchase. We cannot refund cash or transfer to alternate accounts.</li>
                                </ul>
                                <p>Actual credit time may vary independently based on your specific bank's internal processing timelines.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="abuse" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-orange-600 dark:text-orange-400"><AlertTriangle className="w-6 h-6" /></div>
                                    <h2 className="!mb-0 !mt-0 text-3xl">9. Account Misuse and Refund Abuse</h2>
                                </div>
                                <p>If our automated security systems or manual audits detect that a user is attempting to defraud or abuse the refund policy—including, but not limited to:</p>
                                <ul>
                                    <li>Downloading PDFs/accessing content, consuming it, and then instantly claiming technical issues to request a refund.</li>
                                    <li>Filing maliciously false refund claims via email.</li>
                                    <li>Attempting unauthorized chargebacks directly via their credit card provider/bank without first discussing the issue with ExamBoost support.</li>
                                </ul>
                                <p>ExamBoost reserves the unmitigated right to permanently block the user account, ban the IP address, invalidate all current subscriptions without refund, and initiate necessary legal proceedings to recover costs.</p>
                            </div>

                            <hr className="my-10 border-slate-200 dark:border-slate-800" />

                            <div id="promotions" className="scroll-mt-32">
                                <h2 className="text-3xl">10. Promotional Offers and Discounted Purchases</h2>
                                <p>Any purchases made using promotional discount coupons, during festive sales, flash sales, or special limited-time pricing events are <strong>completely non-refundable under all circumstances</strong> (excluding extreme cases of double deduction), regardless of the conditions outlined in Section 3.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
