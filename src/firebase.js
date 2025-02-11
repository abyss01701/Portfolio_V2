import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_domain_namw",
  projectId: "your_project_id",
  storageBucket: "your_sb",
  messagingSenderId: "your_messaging<id",
  appId: "your_app_id",
  measurementId: "you're measurementId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, collection };
