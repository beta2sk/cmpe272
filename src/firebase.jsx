// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUK1OW1B5cKkxIGp28GlzyrhyAOPDh5Cw",
    authDomain: "authentication-d7edd.firebaseapp.com",
    projectId: "authentication-d7edd",
    storageBucket: "authentication-d7edd.firebasestorage.app",
    messagingSenderId: "314251808999",
    appId: "1:314251808999:web:39c9f9b82d81de6199d242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);