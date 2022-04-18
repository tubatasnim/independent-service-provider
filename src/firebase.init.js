// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhbTgU4Y4ColnfN1b9VzaUiMhplHu6o_s",
    authDomain: "fir-project-db16e.firebaseapp.com",
    projectId: "fir-project-db16e",
    storageBucket: "fir-project-db16e.appspot.com",
    messagingSenderId: "58756856369",
    appId: "1:58756856369:web:77f61d703fd4abebdc3310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;