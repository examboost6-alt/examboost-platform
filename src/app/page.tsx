import Hero from '@/components/Hero';
import Banners from '@/components/Banners';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import FreeTests from '@/components/FreeTests';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import AppPromo from '@/components/AppPromo';
import BlogSection from '@/components/BlogSection';
import TrustIndicators from '@/components/TrustIndicators';
import TestSeriesSection from '@/components/TestSeriesSection';

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
