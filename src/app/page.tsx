
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FoodGallery from '@/components/FoodGallery';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen pb-16 relative overflow-hidden">
            {/* Global Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full bg-gray-50 -z-20"></div>
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none animate-pulse-slow"></div>
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none animate-pulse-slow animation-delay-200"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[150px] -z-10 opacity-40 pointer-events-none"></div>

            <Navbar />
            <Hero />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-16 sm:gap-32">
                <Features />
                <FoodGallery />
            </div>

            <Footer />
        </main>
    );
}
