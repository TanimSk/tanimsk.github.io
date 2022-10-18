import { useEffect } from "react";
import { GetFirestoreData } from "../firebaseFuncs/firebaseFuncs";

export default function Home() {
    useEffect(() => {
        GetFirestoreData('portfolio', 'profile_img').then(
            (items) => {
                console.log(items);
            }
        );
    }, []);

    return (
        <></>
    );
} 
