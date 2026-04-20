import styles from './styles.module.css';
import sololearn from '../../assets/sololearn.png';
import hackerrank from '../../assets/hackerrank.jpg';
import phitron from '../../assets/phitron.png';
import cuet from '../../assets/cuet-techathon.png';
import wro from '../../assets/wro.png';
import wroTeam from '../../assets/wro_sg_team_photo.jpeg';
import wroIntl from '../../assets/wro-intl.jpg';
import xylem from '../../assets/xylem_innovation_challenge.png';
import bracHackathon from '../../assets/brac_ai_hackathon.webp';



const Cards = (props) => {
    return (
        <div className={styles.card}>
            <a href={props.link} target='_blank'>
                <img src={props.img_src} alt="Certificate" />
            </a>
        </div>
    );
}

export default function Certificates() {
    const imgLink = [
        wroTeam,
        wroIntl,
        wro,
        phitron,
        cuet,
        xylem,
        sololearn,
        hackerrank,
        bracHackathon,
    ];

    const links = [
        wroTeam,
        wroIntl,
        wro,
        phitron,
        cuet,
        xylem,
        'https://www.sololearn.com/Certificate/CT-INIRVBAV/png',
        'https://www.hackerrank.com/certificates/9c1f25f4a6ea',
        bracHackathon,
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
