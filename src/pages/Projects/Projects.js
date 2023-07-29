import styles from "./Projects.module.css";
import rterminal from '../../assets/rterminal.png';
import p2a from '../../assets/p2a.png';
import djr from '../../assets/dj_react.png'

const Cards = (props) => {
    return (
        <div className={styles.card}>
            <a href={props.link} target='_blank'>
                <img src={props.img_src} alt="Certificate" />
            </a>
        </div>
    );
}


export default function Projects() {
    const imgLink = [
        rterminal,
        p2a,
        djr
    ];

    const links = [
        "https://github.com/TanimSk/Remote-Terminal",
        "https://github.com/TanimSk/poseToAnimation",
        "https://github.com/TanimSk/django-react-ecommerce/tree/django_drf"
    ];

    return (
        <div className={styles.container}>
            {
                imgLink.map((src, index) =>
                    <Cards img_src={src} link={links[index]} key={index}/>
                )
            }
        </div>
    );
}