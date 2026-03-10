import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'ExamBoost | India\'s Most Advanced Test Platform',
    description: 'Boost Your Exam Preparation with 12+ Exam Categories, 10,000+ Mock Tests, and AI Performance Analysis.',
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
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
