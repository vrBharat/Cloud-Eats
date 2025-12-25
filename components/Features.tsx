import styles from './Features.module.css';

const Features = () => {
    return (
        <section className={styles.features}>
            <h2 className={styles.title}>Fresh. Fast. Fusion</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        {/* Chef Hat Icon */}
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                            <line x1="6" y1="17" x2="18" y2="17" />
                        </svg>
                    </div>
                    <p className={styles.cardTitle}>Sustainable Sourcing</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        {/* Timer/Fast Icon */}
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                            <path d="M12 2v-2" transform="translate(6, 0)" />
                        </svg>
                    </div>
                    <p className={styles.cardTitle}>Blazing Fast Delivery</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        {/* Globe/Fusion Icon */}
                        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                    <p className={styles.cardTitle}>Global Flavor Fusions</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
