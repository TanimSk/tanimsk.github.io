import style from './sideBar.module.css';

export default function SideBar() {
    return (
        <nav className={style.container}>
            <span>
                <a href="#/projects">Projects</a>
            </span>
            <br />
            <span>
                <a href="#/skills">Skills</a>
            </span>
            <br />
            <span>
                <a href="#/certificates">Certificates</a>                
            </span>
            <br />
            <span>
                <a href="#/contact">Contact</a>
            </span>
        </nav>
    );
}