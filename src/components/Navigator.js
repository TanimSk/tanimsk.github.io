import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

export default function Navigator() {

    const rootContainer = useRef(null);
    let [segments, setSegments] = useState([]);

    const totalSeg = 4;
    const segmentNames = ['My Skills'];

    useEffect(
        () => {
            let segment = [];
            const angle = 360 / totalSeg;

            for (let i = 1; i <= totalSeg; i++) {
                segment.push(
                    <div className={styles.segment} key={i}
                        style={{ transform: `rotate(${angle * i}deg) skewX(${90 - angle}deg)` }}>
                        {/* <div>
                            {segmentNames[i - 1]}
                        </div> */}
                    </div>
                );
            }
            setSegments(segment);
        }, []
    );


    return (
        <div className={styles.container} ref={rootContainer}>
            {segments}
            <div className={styles.my_img} />
        </div>
    );
}