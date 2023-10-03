// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQwJnwgqWfJq1CARLYanrbFQp5KaPnIN4",
    authDomain: "travel-app-d25b7.firebaseapp.com",
    projectId: "travel-app-d25b7",
    storageBucket: "travel-app-d25b7.appspot.com",
    messagingSenderId: "10954185986",
    appId: "1:10954185986:web:90e1a306516f243421361b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);


export { provider, auth }