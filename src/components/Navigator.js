import React from 'react';
import styles from './Nav.module.css';
import CircleType from 'circletype';
import { Link } from 'react-router-dom';

export default class Navigator extends React.Component {

    constructor() {
        super();
        this.state = {
            segment: ""
        }

        // refs
        this.skills = React.createRef();
        this.projects = React.createRef();
        this.contact = React.createRef();
        this.cert = React.createRef();

        this.curveTextTrace = [];
        this.isMobile = (window.screen.width < 500);
    }

    componentDidMount() {
        const totalSeg = 4;
        const angle = 360 / totalSeg;
        const segmentTxtRef = [this.contact, this.skills, this.projects, this.cert];

        const links = ['contact', 'skills', 'projects', 'certificates'];
        let segment = [];

        for (let i = 1; i <= totalSeg; i++) {
            segment.push(
                <Link to={links[i - 1]} key={i.toString()}>
                    <div className={styles.segment}
                        style={{ transform: `rotate(${angle * i}deg) skewX(${90 - angle}deg)` }}>
                    </div>
                </Link>
            );
            let circle = new CircleType(segmentTxtRef[i - 1].current);
            // circle.radius(150);
            this.curveTextTrace.push(circle);
            segmentTxtRef[i - 1].current.style.transform = `rotate(${135 + (angle * i)}deg)`;
        }

        this.setState({
            segment: segment
        });

        this.changeCurve();
        window.addEventListener("resize", this.changeCurve);
    }

    changeCurve = () => {
        if (window.screen.width < 500 && this.isMobile) {
            this.curveTextTrace.map((element) => {
                element.radius(90);
            });
            this.isMobile = false;
        }

        if (window.screen.width > 500 && !this.isMobile) {
            this.curveTextTrace.map((element) => {
                element.radius(150);
            });
            this.isMobile = true;
        }
    }

    render() {
        return (
            <>
                <div className={styles.container}>
                    {this.state.segment}
                    <div className={styles.my_img} />

                    <div className={styles.segment_texts} ref={this.skills}>
                        My Skills
                    </div>

                    <div className={styles.segment_texts} ref={this.cert}>
                        Certificates
                    </div>

                    <div className={styles.segment_texts} ref={this.projects}>
                        Projects
                    </div>

                    <div className={styles.segment_texts} ref={this.contact}>
                        Contact
                    </div>

                </div>
            </>
        );
    }
}
