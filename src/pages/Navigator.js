import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

export default function Navigator() {

    const rootContainer = useRef(null);
    let [segments, setSegments] = useState([]);

    let totalSeg = 4;

    useEffect(
        () => {
            let segment = [];
            const angle = 360 / totalSeg;

            for (let i = 1; i <= totalSeg; i++) {
                segment.push(<div className={styles.segment} style={{
                    transform: `rotate(${angle * i}deg) skewX(${90 - angle}deg)`,
                    // backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
                }}>
                </div>);
            }

            setSegments(segment);

        }, []
    );


    return (
        <div className={styles.container} ref={rootContainer}>
            {segments}
            <div className={styles.my_img}>

            </div>
        </div>
    );
}