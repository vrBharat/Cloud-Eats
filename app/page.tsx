import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FoodGallery from '@/components/FoodGallery';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Hero />
            <div className={styles.container}>
                <Features />
                <FoodGallery />
            </div>
            <Footer />
        </main>
    );
}
