import styles from './styles.module.css';

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
    const arr = [
        'https://www.sololearn.com/Certificate/CT-INIRVBAV/png',
        'https://firebasestorage.googleapis.com/v0/b/my-porfolio-4ae5e.appspot.com/o/hackerrank.jpg?alt=media&token=fe52fc58-c434-4990-9c04-091e860be997'
    ];

    const links = [
        'https://www.sololearn.com/Certificate/CT-INIRVBAV/png',
        'https://www.sololearn.com/Certificate/CT-INIRVBAV/png'
    ];

    return (
        <div className={styles.container}>
            {
                arr.map((src, index) =>
                    <Cards img_src={src} link={links[index]} key={index}/>
                )
            }
        </div>
    );
}