import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Cloud Eats</h1>
                <p className={styles.tagline}>Your Culinary Adventure, Delivered.</p>
                <div className={styles.buttons}>
                    <button className={styles.btnPrimary}>Order Now</button>
                    <button className={styles.btnSecondary}>Menu</button>
                </div>
            </div>
            <div className={styles.visual}>
                {/* Note: The image hero-group.png needs to be in public/ folder. 
           If missing, Next.js might show broken image symbol or alt text. 
       */}
                <Image
                    src="/hero-group.png"
                    alt="Cloud Eats Friends"
                    width={600}
                    height={500}
                    className={styles.imagePlaceholder}
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;
