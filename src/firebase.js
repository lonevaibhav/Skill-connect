import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
