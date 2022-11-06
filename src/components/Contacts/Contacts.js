import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import styles from './styles.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <span>
                <a href="https://github.com/TanimSk" target="_blank">
                    <BsGithub />
                </a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/tanim-sk-04b9931b3/" target="_blank">
                    <BsLinkedin />
                </a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/tanim-sk-04b9931b3/" target="_blank">
                    <SiDiscord />
                </a>
            </span>
            <span>
                <a href="mailto:sktanim5800@gmail.com" target="_blank">
                    <MdEmail />
                </a>
            </span>
        </div>
    );
}