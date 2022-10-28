import styles from './style.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="#">Tanim Sk</a>

                <a href="#">Contact</a>
                <a href="#">Certificates</a>
                <a href="#">My Skills</a>
                <a href="#">Projects</a>
            </nav>
        </header>
    );
}