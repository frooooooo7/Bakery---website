import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbrkXyYfSAunqvfGFPceRDf9XCZocj_J0",
  authDomain: "sweet-bakery-65b6a.firebaseapp.com",
  projectId: "sweet-bakery-65b6a",
  storageBucket: "sweet-bakery-65b6a.appspot.com",
  messagingSenderId: "391523069186",
  appId: "1:391523069186:web:e4211cc0782f805a7da61b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)