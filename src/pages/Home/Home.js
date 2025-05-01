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
                                    .typeString('Meet <strong style="color: #ff6161">Tanim Sk</strong>')
                                    .start();
                            }}
                        />
                    </h1>
                    <p className={styles.body_text}>
                        A programmer with knowledge of Python, JavaScript, HTML, CSS, and C++ and 5+ years of experience.  For web, I use Django (mainly), Flask, FastAPI for the backend, ReactJS for frontend, Postgres for database, and Redis for caching. I have deployed many webapps in AWS vps and equivalent platforms with CI/CD integration. <br/>
                        Also, I have experience on working with raspberry pi, microcontrollers like esp32, esp8266, arduino. I have done home automation projects, websocket programming, communication via radio frequency, integration of tinyML for tiny AI projects etc. <br/>
                        Currently I am learning LLM, SAM and AI agents.
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
