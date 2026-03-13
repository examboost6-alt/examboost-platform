"use client";

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileExamsOpen, setMobileExamsOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [prepareMenuOpen, setPrepareMenuOpen] = useState(false);
    const [moreMenuOpen, setMoreMenuOpen] = useState(false);

    const prepareMenuRef = useRef<HTMLDivElement | null>(null);
    const moreMenuRef = useRef<HTMLDivElement | null>(null);
    const prepareCloseTimerRef = useRef<number | null>(null);
    const moreCloseTimerRef = useRef<number | null>(null);

    const openPrepareMenu = () => {
        if (prepareCloseTimerRef.current) {
            window.clearTimeout(prepareCloseTimerRef.current);
            prepareCloseTimerRef.current = null;
        }
        setPrepareMenuOpen(true);
    };

    const closePrepareMenu = (withDelay = true) => {
        if (prepareCloseTimerRef.current) {
            window.clearTimeout(prepareCloseTimerRef.current);
            prepareCloseTimerRef.current = null;
        }
        if (!withDelay) {
            setPrepareMenuOpen(false);
            return;
        }
        prepareCloseTimerRef.current = window.setTimeout(() => {
            setPrepareMenuOpen(false);
            prepareCloseTimerRef.current = null;
        }, 120);
    };

    const openMoreMenu = () => {
        if (moreCloseTimerRef.current) {
            window.clearTimeout(moreCloseTimerRef.current);
            moreCloseTimerRef.current = null;
        }
        setMoreMenuOpen(true);
    };

    const closeMoreMenu = (withDelay = true) => {
        if (moreCloseTimerRef.current) {
            window.clearTimeout(moreCloseTimerRef.current);
            moreCloseTimerRef.current = null;
        }
        if (!withDelay) {
            setMoreMenuOpen(false);
            return;
        }
        moreCloseTimerRef.current = window.setTimeout(() => {
            setMoreMenuOpen(false);
            moreCloseTimerRef.current = null;
        }, 120);
    };

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
                setMegaMenuOpen(false);
                setPrepareMenuOpen(false);
                setMoreMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen, mounted]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') return;
            setPrepareMenuOpen(false);
            setMoreMenuOpen(false);
        };

        const onPointerDown = (e: MouseEvent | PointerEvent) => {
            const target = e.target as Node | null;
            if (!target) return;
            if (prepareMenuRef.current?.contains(target)) return;
            if (moreMenuRef.current?.contains(target)) return;
            setPrepareMenuOpen(false);
            setMoreMenuOpen(false);
        };

        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('pointerdown', onPointerDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('pointerdown', onPointerDown);
        };
    }, []);

    const categories = [
        { name: "Engineering Entrance", href: "/exams/engineering-entrance" },
        { name: "Medical Entrance", href: "/exams/medical-entrance" },
        { name: "UPSC & Civil Services", href: "/exams/upsc-civil-services" },
        { name: "SSC Exams", href: "/exams/ssc-exams" },
        { name: "Banking", href: "/exams/banking" },
        { name: "Railways", href: "/exams/railways" },
        { name: "State PSC", href: "/exams/state-psc" },
        { name: "Police", href: "/exams/police" },
        { name: "Law", href: "/exams/law" },
        { name: "MBA", href: "/exams/mba" },
        { name: "Teaching", href: "/exams/teaching" },
        { name: "CUET", href: "/exams/cuet" }
    ];

    const prepareLinks = [
        { label: 'Test Series', href: '/exams' },
        { label: 'Free Mock Tests', href: '/free-mock-tests' },
    ];

    const moreLinks = [
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ];

    if (pathname.startsWith('/admin')) {
        return null;
    }

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70 shadow-sm' : 'bg-transparent'}`}>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 lg:h-24 flex items-center justify-between lg:justify-start relative z-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0 mr-4 sm:mr-8 md:mr-12 lg:mr-24">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-[8rem] h-5 sm:h-6 md:h-8 flex items-center justify-start relative">
                        <img src="/logo.png" alt="ExamBoost Logo" className="w-full h-full object-contain object-left relative z-10 scale-[1.35] origin-left dark:hidden" />
                        <img src="/white-logo.png" alt="ExamBoost Logo" className="w-full h-full object-contain object-left relative z-10 scale-[1.35] origin-left hidden dark:block" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex flex-1 items-stretch gap-3 xl:gap-6 justify-start">
                    <Link href="/" className="flex items-center h-full px-3 text-sm font-semibold text-grayText dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors relative group whitespace-nowrap">
                        Home
                    </Link>

                    <div
                        ref={prepareMenuRef}
                        className="relative group h-full flex items-center"
                        onMouseEnter={openPrepareMenu}
                        onMouseLeave={() => closePrepareMenu(true)}
                        onFocusCapture={openPrepareMenu}
                        onBlurCapture={(e) => {
                            const next = e.relatedTarget as Node | null;
                            if (next && e.currentTarget.contains(next)) return;
                            closePrepareMenu(false);
                        }}
                    >
                        <button
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={prepareMenuOpen}
                            className="flex items-center h-full px-3 gap-1.5 text-sm font-semibold text-grayText dark:text-slate-300 group-hover:text-primary dark:group-hover:text-accent transition-colors whitespace-nowrap outline-none"
                        >
                            All Exams <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${prepareMenuOpen ? 'rotate-180 text-primary dark:text-accent' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {prepareMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] max-w-[calc(100vw-2rem)] z-[100] pt-2"
                                    onMouseEnter={openPrepareMenu}
                                    onMouseLeave={() => closePrepareMenu(true)}
                                >
                                    <div className="bg-white dark:bg-[#0f172a] rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] border border-slate-200/80 dark:border-slate-800 bg-clip-padding relative overflow-hidden">
                                        {/* Invisible bridge to maintain hover state securely */}
                                        <div className="absolute -top-8 left-0 w-full h-12 bg-transparent" />

                                        <div className="flex">
                                            {/* Left Column: Featured/Quick Links */}
                                            <div className="w-[35%] bg-slate-50 dark:bg-slate-800/40 border-r border-slate-100 dark:border-slate-800/60 p-5 flex flex-col gap-4">
                                                <div>
                                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 ml-1">Featured</h3>
                                                    <div className="flex flex-col gap-2">
                                                        <Link href="/exams" className="flex flex-col p-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm cursor-pointer">
                                                            <div className="flex items-center justify-between mb-1">
                                                                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Test Series</span>
                                                            </div>
                                                            <span className="text-[11px] text-slate-500 dark:text-slate-400">Comprehensive mock tests</span>
                                                        </Link>
                                                        <Link href="/free-mock-tests" className="flex flex-col p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group/link border border-transparent hover:border-slate-100 dark:hover:border-slate-700 cursor-pointer">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-sm font-bold text-primary dark:text-accent group-hover/link:underline">Free Quizzes</span>
                                                                <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400 font-bold uppercase tracking-wider">Free</span>
                                                            </div>
                                                            <span className="text-[11px] text-slate-500 dark:text-slate-400">Practice questions</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column: Categories */}
                                            <div className="w-[65%] p-5">
                                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 ml-2">All Exam Categories</h3>
                                                <div className="grid grid-cols-2 gap-y-1 gap-x-2">
                                                    {categories.map((cat) => (
                                                        <Link
                                                            key={cat.name}
                                                            href={cat.href}
                                                            className="flex items-center gap-2.5 group/cat px-2.5 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover/cat:bg-primary dark:group-hover/cat:bg-accent transition-colors" />
                                                            <span className="group-hover/cat:translate-x-1 transition-transform">{cat.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/foundation" className="flex items-center h-full px-3 text-sm font-semibold text-grayText dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors relative group whitespace-nowrap">
                        Foundation
                    </Link>

                    <div
                        ref={moreMenuRef}
                        className="relative group h-full flex items-center"
                        onMouseEnter={openMoreMenu}
                        onMouseLeave={() => closeMoreMenu(true)}
                        onFocusCapture={openMoreMenu}
                        onBlurCapture={(e) => {
                            const next = e.relatedTarget as Node | null;
                            if (next && e.currentTarget.contains(next)) return;
                            closeMoreMenu(false);
                        }}
                    >
                        <button
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={moreMenuOpen}
                            className="flex items-center h-full px-3 gap-1.5 text-sm font-semibold text-grayText dark:text-slate-300 group-hover:text-primary dark:group-hover:text-accent transition-colors whitespace-nowrap outline-none"
                        >
                            More <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${moreMenuOpen ? 'rotate-180 text-primary dark:text-accent' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {moreMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 z-[100] pt-2"
                                    onMouseEnter={openMoreMenu}
                                    onMouseLeave={() => closeMoreMenu(true)}
                                >
                                    <div className="bg-white dark:bg-[#0f172a] rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] border border-slate-200/80 dark:border-slate-800 p-2.5 relative">
                                        {/* Invisible bridge to maintain hover state securely */}
                                        <div className="absolute -top-8 left-0 w-full h-12 bg-transparent" />

                                        <div className="flex flex-col gap-1">
                                            {moreLinks.map((l) => (
                                                <Link
                                                    key={l.label}
                                                    href={l.href}
                                                    className="flex flex-col px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group/item cursor-pointer"
                                                >
                                                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-primary dark:group-hover/item:text-accent transition-colors">{l.label}</span>
                                                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Explore our {l.label.toLowerCase()} resources</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Spacer to prevent layout shift on search expand */}
                <div className="hidden lg:block flex-1 border-transparent"></div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-3 xl:gap-6">
                    {/* Smart Search */}
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search exams..."
                            className="pl-10 pr-4 py-2.5 w-40 lg:w-48 xl:w-56 transition-all duration-300 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-slate-300 dark:focus:border-slate-700 rounded-full text-sm outline-none text-darkText dark:text-slate-200 placeholder:text-slate-400 focus:ring-4 focus:ring-slate-200/60 dark:focus:ring-slate-800/60"
                        />
                    </div>

                    {/* Dark Mode Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    )}

                    <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700/80"></div>

                    <Link href="/login" className="text-sm font-bold text-darkText dark:text-slate-200 hover:text-primary dark:hover:text-accent transition-colors whitespace-nowrap">Login</Link>
                    <Link href="/signup" className="flex-shrink-0 bg-primary hover:bg-secondary text-white px-5 xl:px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
                        <span className="relative z-10 flex items-center gap-2">
                            Sign Up
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex lg:hidden items-center gap-4">
                    {mounted && (
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 text-slate-600 dark:text-slate-300">
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    )}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-darkText dark:text-white p-2" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-slate-950/20 dark:bg-black/40 lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="fixed inset-0 z-[60] lg:hidden bg-white dark:bg-[#020617] flex flex-col h-screen w-screen overflow-hidden"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between px-4 h-16 shrink-0 border-b border-slate-100 dark:border-slate-800">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 group">
                                    <div className="w-20 sm:w-24 h-6 flex items-center justify-start relative">
                                        <img src="/logo.png" alt="ExamBoost Logo" className="w-full h-full object-contain object-left relative z-10 scale-[1.35] origin-left dark:hidden" />
                                        <img src="/white-logo.png" alt="ExamBoost Logo" className="w-full h-full object-contain object-left relative z-10 scale-[1.35] origin-left hidden dark:block" />
                                    </div>
                                </Link>
                                <div className="flex items-center gap-4">
                                    {mounted && (
                                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 text-slate-600 dark:text-slate-300">
                                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                        </button>
                                    )}
                                    <button onClick={() => setMobileMenuOpen(false)} className="text-darkText dark:text-white p-2">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="container mx-auto px-4 flex flex-col flex-1 overflow-hidden pt-6">
                                <div className="relative shrink-0 mb-6">
                                    <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <input type="text" placeholder="Search exams..." className="w-full pl-12 pr-4 py-3.5 bg-slate-100 dark:bg-slate-800/80 border border-transparent focus:border-slate-300 dark:focus:border-slate-700 rounded-2xl outline-none text-sm text-darkText dark:text-white shadow-inner" />
                                </div>
                                <div className="flex flex-col gap-2 overflow-y-auto px-2 -mx-2 custom-scrollbar">
                                    <Link
                                        href="/"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="py-3 px-5 font-bold text-darkText dark:text-slate-200 hover:bg-slate-900/[0.04] hover:text-primary dark:hover:bg-white/5 dark:hover:text-accent rounded-xl transition-colors"
                                    >
                                        Home
                                    </Link>

                                    <div className="pt-1">
                                        <button
                                            onClick={() => setMobileExamsOpen(!mobileExamsOpen)}
                                            className="w-full flex items-center justify-between py-3 px-5 font-bold text-darkText dark:text-slate-200 hover:bg-slate-900/[0.04] hover:text-primary dark:hover:bg-white/5 dark:hover:text-accent rounded-xl transition-colors outline-none"
                                        >
                                            <span>All Exams</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform ${mobileExamsOpen ? 'rotate-180 text-primary dark:text-accent' : 'text-slate-400'}`} />
                                        </button>

                                        <AnimatePresence>
                                            {mobileExamsOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-5 py-2 flex flex-col gap-1">
                                                        <Link
                                                            href="/exams"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="py-2.5 px-4 font-bold text-sm text-primary dark:text-accent bg-primary/5 dark:bg-accent/10 rounded-xl transition-colors"
                                                        >
                                                            View All Exams & Test Series
                                                        </Link>
                                                        {categories.map((cat) => (
                                                            <Link
                                                                key={cat.name}
                                                                href={cat.href}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="py-3 px-4 font-semibold text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                                                            >
                                                                {cat.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <Link
                                        href="/foundation"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="py-3 px-5 font-bold text-darkText dark:text-slate-200 hover:bg-slate-900/[0.04] hover:text-primary dark:hover:bg-white/5 dark:hover:text-accent rounded-xl transition-colors"
                                    >
                                        Foundation
                                    </Link>

                                    <div className="pt-2">
                                        <div className="px-5 text-xs font-black tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-2">More</div>
                                        {moreLinks.map((l) => (
                                            <Link
                                                key={l.label}
                                                href={l.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="py-3 px-5 font-bold text-darkText dark:text-slate-200 hover:bg-slate-900/[0.04] hover:text-primary dark:hover:bg-white/5 dark:hover:text-accent rounded-xl transition-colors block"
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-auto mb-6 pt-4 shrink-0">
                                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="py-3.5 font-bold border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 text-darkText dark:text-white rounded-xl transition-colors text-center inline-block">Login</Link>
                                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="py-3.5 font-bold bg-primary hover:bg-secondary text-white rounded-xl shadow-md transition-colors text-center inline-block">Sign Up</Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
