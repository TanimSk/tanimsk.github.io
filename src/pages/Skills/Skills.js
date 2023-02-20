import styles from './styles.module.css';
import { FaPython } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiHtml5 } from 'react-icons/si';

// images
import django from '../../assets/django.png';
import react from '../../assets/react.png';
import flask from '../../assets/flask.jpg';
import opencv from '../../assets/opencv.png';

import ubuntu from '../../assets/ubuntu.png';
import github from '../../assets/github.jpg';
import git from '../../assets/git.png';
import vscode from '../../assets/vscode.png';
import devops from '../../assets/devops.png';

const Langs = (props) => {
    return (
        <div className={styles.card_root}>
            <span className={styles.card_icon}>
                {props.icon}
            </span>
            <span className={styles.text_after_icon}>
                {props.name}
            </span>
            <span className={styles.text_right}>
                {props.comment}
            </span>
        </div>
    );
}

const Techs = (props) => {
    return (
        <div className={styles.tech_container}>
            <img src={props.image} alt={props.name} className={styles.tech_img} />
            {props.name !== "" &&
                <span className={styles.tech_name}>{props.name}</span>
            }
        </div>
    );
}

export default function Skills() {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.container_lang}>
                    <h1 style={{ color: 'gray' }}>
                        Languages
                    </h1>

                    <Langs icon={<FaPython />} name="Python" comment="Intermediate" />
                    <br />
                    <Langs icon={<SiJavascript />} name="JavaScript" comment="Intermediate" />
                    <br />
                    <Langs icon={<SiCplusplus />} name="C++" comment="Basic" />
                    <br />
                    <Langs icon={<SiHtml5 />} name="HTML5 & CSS3" comment="Intermediate" />
                    <br />
                </div>

                <div className={styles.container_tech}>
                    <h1 style={{ color: 'gray' }}>
                        Technologies
                    </h1>
                    <Techs image={django} name='Django' />
                    <Techs image={react} name='React' />
                    <Techs image={flask} name='Flask' />
                    <Techs image={opencv} name='OpenCV' />
                </div>

                <div className={styles.container_use}>
                    <h1 style={{ color: 'gray' }}>
                        Things I use
                    </h1>
                    <Techs image={github} name='' />
                    <Techs image={ubuntu} name='' />
                    <Techs image={devops} name='' />
                    <Techs image={git} name='' />
                    <Techs image={vscode} name='' />
                    
                </div>
            </div>
        </>
    );
}