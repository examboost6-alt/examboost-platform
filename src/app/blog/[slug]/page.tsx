import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 font-sans">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl py-12">
                <div className="mb-8">
                    <Link href="/blog" className="text-sm font-bold text-primary dark:text-accent hover:underline">
                         Back to Blog
                    </Link>
                </div>

                <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Blog post</p>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-3 tracking-tight">
                        {params.slug.replace(/-/g, ' ')}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 font-medium mt-4 leading-relaxed">
                        This article page is a placeholder. Well connect CMS/API later.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/blog"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary hover:bg-secondary text-white font-bold transition-colors"
                        >
                            View all posts
                        </Link>
                        <Link
                            href="/exams"
                            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white dark:bg-[#0f172a] border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            Explore exams
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
