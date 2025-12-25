import styles from './FoodGallery.module.css';

const FoodGallery = () => {
    return (
        <section className={styles.gallery}>
            <div className={styles.card}>
                {/* Placeholder color for image */}
                <div className={styles.cardBg} style={{ background: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop") center/cover' }}></div>
                <div className={styles.overlay}>
                    <span className={styles.tag}>#CloudEatsAdventures</span>
                    <span className={styles.subtext}>Join the community</span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardBg} style={{ background: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop") center/cover' }}></div>
                <div className={styles.overlay}>
                    <span className={styles.tag}>#CloudEatsAdventures</span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardBg} style={{ background: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop") center/cover' }}></div>
                <div className={styles.overlay}>
                    <span className={styles.tag}>#CloudEatsAdventures</span>
                </div>
            </div>
        </section>
    );
};

export default FoodGallery;
