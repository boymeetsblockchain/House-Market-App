// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBS1juNBw5dR7UXJKTh4nUImsbwVsgFBT8",
  authDomain: "house-market-app-7420f.firebaseapp.com",
  projectId: "house-market-app-7420f",
  storageBucket: "house-market-app-7420f.appspot.com",
  messagingSenderId: "388630001326",
  appId: "1:388630001326:web:6b37eb4eb2059e33f99f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore()