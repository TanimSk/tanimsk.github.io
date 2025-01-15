import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FaYoutube } from "react-icons/fa";
import styles from './styles.module.css';

export default function Contacts() {
    return (
        <div className={styles.container}>
            <span>
                <a href="https://github.com/TanimSk" target="_blank">
                    <BsGithub />
                </a>
            </span>
            <span>
                <a href="linkedin.com/in/md-saleh-sadiq-tanim-04b9931b3/" target="_blank">
                    <BsLinkedin />
                </a>
            </span>
            <span>
                <a href="https://discordapp.com/users/761207175376666684" target="_blank">
                    <SiDiscord />
                </a>
            </span>
        
            <span>
                <a href="https://youtube.com/@tanimsk" target="_blank">
                    <FaYoutube />
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
