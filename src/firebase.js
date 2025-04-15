// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAclu-tE4O2XC9Sc2h-FWB8HgIvo_2IzuY",
    authDomain: "dg-fire-bf65f.firebaseapp.com",
    projectId: "dg-fire-bf65f",
    storageBucket: "dg-fire-bf65f.firebasestorage.app",
    messagingSenderId: "469406383995",
    appId: "1:469406383995:web:4056f5dcfb8f65729f87de",
    measurementId: "G-LKLFKYV7QR"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // <-- ✅ This must be exported
