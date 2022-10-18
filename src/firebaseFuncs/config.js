import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9a81n8Hsm87_E87Ow2aX6Ip3DvP_0fgM",
  authDomain: "my-porfolio-4ae5e.firebaseapp.com",
  projectId: "my-porfolio-4ae5e",
  storageBucket: "my-porfolio-4ae5e.appspot.com",
  messagingSenderId: "252005417500",
  appId: "1:252005417500:web:c9ed1bf9ec764cb9cc55d9",
  measurementId: "G-4Z5DDE886T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const db_firestore = getFirestore(app);







