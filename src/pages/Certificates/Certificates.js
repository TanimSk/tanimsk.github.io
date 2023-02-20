import styles from './styles.module.css';
import sololearn from '../../assets/sololearn.png';
import hackerrank from '../../assets/hackerrank.jpg';
import phitron from '../../assets/phitron.png';

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
        sololearn,
        hackerrank,
        phitron
    ];

    const links = [
        'https://www.sololearn.com/Certificate/CT-INIRVBAV/png',
        'https://www.hackerrank.com/certificates/9c1f25f4a6ea',
        phitron
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