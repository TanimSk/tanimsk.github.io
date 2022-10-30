import styles from './style.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <span>
                    <Link to='/'>Tanim Sk</Link>
                </span>


                <span>
                    <Link to='/'>Contact</Link>
                </span>

                <span>
                    <Link to='/'>Certificates</Link>
                </span>
                <span>
                    <Link to='/'>My Skills</Link>
                </span>
                <span>
                    <Link to='/'>Projects</Link>
                </span>
            </nav>
        </header>
    );
}