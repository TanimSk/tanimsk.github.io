import styles from "./Projects.module.css";
import rterminal from '../../assets/rterminal.png';
import p2a from '../../assets/p2a.png';
import djr from '../../assets/dj_react.png'
import wroFE from '../../assets/FE-vehicle.png'

const Cards = (props) => {
    return (
        <div className={styles.card} style={{
            backgroundImage: `url(${props.img_src})`
        }}
            onClick={() => {
                window.open(props.link, '_blank').focus();
            }}
        >
        </div>
    );
}


export default function Projects() {
    const imgLink = [
        rterminal,
        wroFE,
        p2a,
        djr
    ];

    const links = [
        "https://github.com/TanimSk/Remote-Terminal",
        "https://github.com/TanimSk/WRO-FE-2025_Team-Echo-Drift",
        "https://github.com/TanimSk/poseToAnimation",
        "https://github.com/TanimSk/django-react-ecommerce/tree/django_drf"
    ];

    return (
        <div className={styles.container}>
            {
                imgLink.map((src, index) =>
                    <Cards img_src={src} link={links[index]} key={index} />
                )
            }
        </div>
    );
}
