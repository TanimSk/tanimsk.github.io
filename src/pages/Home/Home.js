import { useEffect } from "react";
import { GetFirestoreData } from "../../firebaseFuncs/firebaseFuncs";
import Navigator from "../Navigator";
import styles from './Home.module.css';

export default function Home() {
    // useEffect(() => {
    //     GetFirestoreData('portfolio', 'profile_img').then(
    //         (items) => {
    //             console.log(items);
    //         }
    //     );
    // }, []);

    return (
        <>
            <Navigator></Navigator>
            <div className={styles.corner_img}></div>
        </>


    );
} 
