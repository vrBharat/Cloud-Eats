import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                {/* Simple text icons for social */}
                <span>IG</span>
                <span>TW</span>
            </div>

            <div className={styles.links}>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Support</a>
            </div>

            <button className={styles.downloadBtn}>Download Our App</button>
        </footer>
    );
};

export default Footer;
