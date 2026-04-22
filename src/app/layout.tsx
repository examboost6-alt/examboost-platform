import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.examboost.in'),
    title: {
        default: "ExamBoost - Best JEE/NEET/Govt Exam Prep Platform",
        template: '%s | ExamBoost',
    },
    description: 'Boost your exam preparation with free mock tests, real CBT UI, and analytics. Expert coaching for JEE, NEET, SSC, Banking, and Railway exams. Start your JEE mock test free or SSC preparation in Delhi today.',
    applicationName: 'ExamBoost',
    keywords: [
        'exam preparation',
        'mock tests',
        'JEE preparation',
        'NEET preparation',
        'banking exams',
        'railway exams',
        'police exams',
        'competitive exams',
        'online test series',
        'CBT practice',
        'exam analytics',
        'previous year papers',
        'ExamBoost India',
        'JEE mock test free',
        'SSC preparation Delhi',
        'NEET coaching Delhi fees',
        'JEE crash course 2026',
        'SSC CGL mock test free'
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: 'https://www.examboost.in',
        siteName: 'ExamBoost',
        title: "ExamBoost - Best JEE/NEET/Govt Exam Prep Platform",
        description: 'Boost your exam preparation with free mock tests, real CBT UI, and expert coaching for JEE, NEET, SSC, and Banking exams.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'ExamBoost - Advanced Test Platform',
            },
            {
                url: '/logo.png',
                width: 512,
                height: 512,
                alt: 'ExamBoost Logo',
            }
        ],
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        title: "ExamBoost - Best JEE/NEET/Govt Exam Prep Platform",
        description: 'Boost your exam preparation with free mock tests, real CBT UI, and expert coaching for JEE, NEET, SSC, and Banking exams.',
        images: ['/og-image.jpg', '/logo.png'],
        creator: '@examboost',
        site: '@examboost',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
        shortcut: '/logo.png',
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
    },
    authors: [{ name: 'ExamBoost Team' }],
    publisher: 'ExamBoost',
    category: 'Education',
    classification: 'Educational Platform',
    manifest: '/manifest.json',
};

export const viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

import dynamic from 'next/dynamic';
const AnalyticsTracker = dynamic(() => import('@/components/AnalyticsTracker'), { ssr: false });

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    const jsonLdOrganization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ExamBoost',
        alternateName: 'ExamBoost India',
        url: 'https://www.examboost.in',
        logo: 'https://www.examboost.in/logo.png',
        description: "India's Most Advanced Test Platform for competitive exam preparation",
        foundingDate: '2024',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-XXXXXXXXXX',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi']
        },
        sameAs: [
            'https://www.facebook.com/examboost',
            'https://www.twitter.com/examboost',
            'https://www.instagram.com/examboost',
            'https://www.linkedin.com/company/examboost'
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'India'
        }
    };

    const jsonLdWebsite = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ExamBoost',
        alternateName: 'ExamBoost India',
        url: 'https://www.examboost.in',
        description: "India's Most Advanced Test Platform for competitive exam preparation with mock tests, real CBT UI, verified solutions, and performance analytics",
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.examboost.in/exams?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        },
        mainEntity: {
            '@type': 'Organization',
            name: 'ExamBoost',
            url: 'https://www.examboost.in'
        }
    };

    const jsonLdBreadcrumbList = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.examboost.in'
            }
        ]
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdOrganization),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdWebsite),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdBreadcrumbList),
                    }}
                />
            </head>
            <body className={`antialiased font-sans ${inter.variable} overflow-x-hidden`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <AnalyticsTracker />
                    <Navbar />
                    <main className="overflow-x-hidden flex-1">
                    {children}
                </main>
                    <Footer />
                </ThemeProvider>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if ('serviceWorker' in navigator) {
                                window.addEventListener('load', function() {
                                    navigator.serviceWorker.register('/sw.js').catch(function(err) {});
                                });
                            }
                        `,
                    }}
                />
                <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-KFT891M6HL`}
                />
                <Script
                    id="google-analytics"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-KFT891M6HL', {
                                page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </body>
        </html>
    );
}
