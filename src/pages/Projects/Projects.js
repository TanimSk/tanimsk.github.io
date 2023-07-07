import styles from "./Projects.module.css";
import rterminal from '../../assets/rterminal.png';
import p2a from '../../assets/p2a.png';

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
        p2a
    ];

    const links = [
        "https://github.com/TanimSk/Remote-Terminal",
        "https://github.com/TanimSk/poseToAnimation"
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