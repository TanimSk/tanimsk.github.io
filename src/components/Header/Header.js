import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <span>
                    <NavLink to='/'>Tanim Sk</NavLink>
                </span>

                <span>
                    <NavLink className={({ isActive }) => (isActive ? styles.activeLink : 'inactive')}
                        to='/contact'>Contact</NavLink>
                </span>

                <span>
                    <NavLink className={({ isActive }) => (isActive ? styles.activeLink : 'inactive')}
                        to='/certificates'>Certificates</NavLink>
                </span>
                <span>
                    <NavLink className={({ isActive }) => (isActive ? styles.activeLink : 'inactive')}
                        to='/skills'>My Skills</NavLink>
                </span>
                <span>
                    <NavLink className={({ isActive }) => (isActive ? styles.activeLink : 'inactive')}
                        to='/projects'>Projects</NavLink>
                </span>
            </nav>
        </header>
    );
}