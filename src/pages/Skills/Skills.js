import styles from './styles.module.css';
import { FaPython } from 'react-icons/fa';
import { SiJavascript, SiCplusplus } from 'react-icons/si';

// images
import django from '../../assets/django.png';
import react from '../../assets/react.png';
import flask from '../../assets/flask.jpg';

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

const Techs = (props) =>{
    return(
        <div className={styles.tech_container}>
            <img src={props.image} alt={props.name} className={styles.tech_img}/>
            <span className={styles.tech_name}>{props.name}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <div className={styles.container}>
            <br />
            <Langs icon={<FaPython />} name="Python" comment="Intermediate" />
            <br />
            <Langs icon={<SiJavascript />} name="JavaScript" comment="Intermediate" />
            <br />
            <Langs icon={<SiCplusplus />} name="C++" comment="Basic" />
            <br />
            <Techs image={django} name='Django'/>
            <br />
            <Techs image={react} name='React'/>
            <br />
            <Techs image={flask} name='Flask'/>
        </div>
    );
}