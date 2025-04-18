
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq5ipUBuwB77wTCdcLiCjZZV4T0FPijYQ",
  authDomain: "skill-connect-ffeb6.firebaseapp.com",
  projectId: "skill-connect-ffeb6",
  storageBucket: "skill-connect-ffeb6.firebasestorage.app",
  messagingSenderId: "570079971802",
  appId: "1:570079971802:web:a5eadd17480282d79798e3",
  measurementId: "G-35N6MLXP9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);