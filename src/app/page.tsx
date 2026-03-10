import Hero from '@/components/Hero';
import Banners from '@/components/Banners';
import Categories from '@/components/Categories';
import PopularExams from '@/components/PopularExams';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import FreeTests from '@/components/FreeTests';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import AppPromo from '@/components/AppPromo';
import BlogSection from '@/components/BlogSection';
import TrustIndicators from '@/components/TrustIndicators';

export default function Home() {
    return (
        <div className="min-h-screen bg-transparent font-sans selection:bg-primary/30 relative overflow-hidden flex flex-col">
            <Hero />
            <Banners />
            <Categories />
            <PopularExams />
            <Features />
            <DashboardPreview />
            <FreeTests />
            <Pricing />
            <Testimonials />
            <AppPromo />
            <BlogSection />
            <TrustIndicators />
        </div>
    );
}
