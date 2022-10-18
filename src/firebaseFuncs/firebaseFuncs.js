import { db_firestore } from "./config";
import { addDoc, collection, updateDoc, doc, setDoc } from 'firebase/firestore';
import { query, where, orderBy, getDocs, limit, getDoc } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";


// ------- Firestore Database ---------

export async function AuthLogin(collection_name, email, password) {
    const ref = collection(db_firestore, collection_name);

    const q = query(ref, where('email', '==', email), where('password', '==', password), limit(1));

    const querySnapshot = await getDocs(q);

    let items = [];
    querySnapshot.forEach((doc) => {
        items.push(doc.data());
    });

    return [items.length !== 0, items];
}


export async function FirestoreQuery(collection_name, target, operator, value) {
    const ref = collection(db_firestore, collection_name);
    const q = query(ref, where(target, operator, value));

    const querySnapshot = await getDocs(q);
    let items = [];

    querySnapshot.forEach((doc) => {
        items.push(doc.data());
    });

    return items;
}

export async function GetFirestoreData(collection_name, doc_name) {

    const ref = doc(db_firestore, collection_name, doc_name);
    const querySnapshot = await getDoc(ref);

    if (querySnapshot.exists()) {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        });
        return items;
    }

    return null;
}