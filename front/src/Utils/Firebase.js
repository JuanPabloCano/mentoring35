import { initializeApp } from "firebase/app";

const firebaseConfig = ({
    apiKey: "AIzaSyAbzArVnnDT6ULUfzxUGPf-DbrfNEZ05ho",
    authDomain: "mentoring35-86d68.firebaseapp.com",
    projectId: "mentoring35-86d68",
    storageBucket: "mentoring35-86d68.appspot.com",
    messagingSenderId: "1064714144487",
    appId: "1:1064714144487:web:17cd712dd10b8d2a4ab042",
    measurementId: "G-5G06QJSLWD"
});

export const app = initializeApp(firebaseConfig);