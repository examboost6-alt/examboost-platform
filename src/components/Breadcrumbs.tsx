"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    
    const labelMap: { [key: string]: string } = {
        'exams': 'All Exams',
        'engineering-entrance': 'Engineering Entrance',
        'medical-entrance': 'Medical Entrance',
        'banking': 'Banking Exams',
        'railways': 'Railway Exams',
        'police': 'Police Exams',
        'mba': 'MBA Entrance',
        'law': 'Law Entrance',
        'cuet': 'CUET',
        'jee': 'JEE',
        'jee-advanced': 'JEE Advanced',
        'neet-ug': 'NEET UG',
        'bitsat': 'BITSAT',
        'viteee': 'VITEEE',
        'srmjeee': 'SRMJEEE',
        'ibps-po': 'IBPS PO',
        'ibps-clerk': 'IBPS Clerk',
        'sbi-po': 'SBI PO',
        'sbi-clerk': 'SBI Clerk',
        'state-engineering-exams': 'State Engineering Exams',
        'kcet': 'KCET',
        'mht-cet': 'MHT CET',
        'wbjee': 'WBJEE',
        'aiims-nursing': 'AIIMS Nursing',
        'jipmer': 'JIPMER',
        'afmc': 'AFMC',
        'full-length-tests': 'Full Length Tests',
        'pyqs': 'Previous Year Papers',
        'subject-wise-tests': 'Subject Wise Tests',
        'about': 'About Us',
        'contact': 'Contact',
        'blog': 'Blog',
        'dashboard': 'Dashboard',
        'foundation': 'Foundation'
    };

    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        
        breadcrumbs.push({
            label,
            href: currentPath
        });
    });

    return breadcrumbs;
};

export default function Breadcrumbs() {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

    useEffect(() => {
        if (pathname === '/') {
            setBreadcrumbs([]);
        } else {
            setBreadcrumbs(getBreadcrumbs(pathname));
        }
    }, [pathname]);

    if (breadcrumbs.length === 0) return null;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `https://www.examboost.in${item.href}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    {breadcrumbs.map((item, index) => (
                        <li key={item.href} className="flex items-center">
                            {index === 0 ? (
                                <Link
                                    href={item.href}
                                    className="flex items-center hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                                >
                                    <Home className="w-4 h-4 mr-1" />
                                    <span>{item.label}</span>
                                </Link>
                            ) : (
                                <>
                                    <span className="mx-2 text-gray-400 dark:text-gray-600">/</span>
                                    {index === breadcrumbs.length - 1 ? (
                                        <span className="text-gray-900 dark:text-gray-100 font-medium">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
