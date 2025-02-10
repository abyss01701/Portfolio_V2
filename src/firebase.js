import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiaf__aNoWdblWhDCH5r2Nxf8B_r6Q7DI",
  authDomain: "eportfolio-bf854.firebaseapp.com",
  projectId: "eportfolio-bf854",
  storageBucket: "eportfolio-bf854.firebasestorage.app",
  messagingSenderId: "584582594160",
  appId: "1:584582594160:web:e7b8d4c68af047817dbeb5",
  measurementId: "G-CHP76K6BPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, collection };
