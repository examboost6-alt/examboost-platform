import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const Banners = dynamic(() => import('@/components/Banners'));
const Categories = dynamic(() => import('@/components/Categories'));
const Features = dynamic(() => import('@/components/Features'));
const DashboardPreview = dynamic(() => import('@/components/DashboardPreview'));
const FreeTests = dynamic(() => import('@/components/FreeTests'));
const Pricing = dynamic(() => import('@/components/Pricing'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const AppPromo = dynamic(() => import('@/components/AppPromo'));
const BlogSection = dynamic(() => import('@/components/BlogSection'));
const TrustIndicators = dynamic(() => import('@/components/TrustIndicators'));
const TestSeriesSection = dynamic(() => import('@/components/TestSeriesSection'));

export default function Home() {
    return (
        <div className="min-h-screen bg-[#FAFBFF] dark:bg-transparent font-sans selection:bg-primary/30 relative overflow-hidden flex flex-col">
            <Hero />
            <TrustIndicators />
            <Testimonials />
            <Categories />
            <TestSeriesSection />
            <Features />
            <DashboardPreview />
            <FreeTests />
            <Pricing />
            <Banners />
            <AppPromo />
            <BlogSection />
        </div>
    );
}
