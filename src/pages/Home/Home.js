import Navigator from "../../components/Navigator";
import styles from './Home.module.css';
import TypewriterComponent from "typewriter-effect";
import Contacts from "../../components/Contacts/Contacts";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Navigator></Navigator>
                <article className={styles.about_article}>
                    <h1 className={styles.heading_text}>
                        <TypewriterComponent
                            options={{
                                loop: false,
                                delay: 80
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Hi ')
                                    .pauseFor(800)
                                    .typeString('Meet With <strong style="color: #ff6161">Tanim Sk</strong>')
                                    .start();
                            }}
                        />
                    </h1>
                    <p className={styles.body_text}>
                        Hi, I am a passionate programmer with knowledge of Python, JavaScript, HTML, CSS, and C++ and 4+ years of experience.
                        I've done so many projects (check my <a href="https://github.com/TanimSk/" target="_blank">GitHub</a>) with Python GUI
                        (Kivy, Tkinter, PywebView), Backend (Django, Flask), ReactJS, Opencv, Microcontrollers, and Godot Game Engine.
                        I like making new software, and websites, exploring technologies and messing around with microcontrollers.
                        <br />
                        In my free time, I like to watch movies, hear music, make hobby projects, and sleep.
                    </p>


                    <div className={styles.link_container}>
                        <a target="_blank" href="https://iris-snow-e2b.notion.site/My-Scrapbook-1329cd96cb4080389ba8eac62e59c264" className={styles.life_updates}>
                            My Scrapbook
                        </a>
                        {/* <span>
                            |
                        </span>
                        <Link to="/my-life" className={styles.life_updates}>
                            My Life
                        </Link> */}
                    </div>

                </article>
                <div className={styles.contacts}>
                    <Contacts />
                </div>
            </div>
            <div className={styles.corner_img}></div>
        </>
    );
} 
