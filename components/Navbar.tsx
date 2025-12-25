import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>CLOUD EATS</div>
            <div className={styles.links}>
                <a href="#" className={styles.link}>Login</a>
                <a href="#" className={styles.link}>More Us</a>
                <div className={styles.menuIcon}>☰</div>
            </div>
        </nav>
    );
};

export default Navbar;
