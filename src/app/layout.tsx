import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.examboost.in'),
    title: {
        default: "ExamBoost | India's Most Advanced Test Platform",
        template: '%s | ExamBoost',
    },
    description: 'Boost your exam preparation with mock tests, real CBT UI, verified solutions, and performance analytics across top competitive exams.',
    applicationName: 'ExamBoost',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: 'https://www.examboost.in',
        siteName: 'ExamBoost',
        title: "ExamBoost | India's Most Advanced Test Platform",
        description: 'Boost your exam preparation with mock tests, real CBT UI, verified solutions, and performance analytics across top competitive exams.',
        images: [
            {
                url: '/logo.png',
                width: 512,
                height: 512,
                alt: 'ExamBoost',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "ExamBoost | India's Most Advanced Test Platform",
        description: 'Boost your exam preparation with mock tests, real CBT UI, verified solutions, and performance analytics across top competitive exams.',
        images: ['/logo.png'],
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
    },
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    const jsonLdOrganization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ExamBoost',
        url: 'https://www.examboost.in',
        logo: 'https://www.examboost.in/logo.png',
    };

    const jsonLdWebsite = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ExamBoost',
        url: 'https://www.examboost.in',
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
            </head>
            <body className="antialiased font-sans">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
