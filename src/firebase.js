// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3awHxLVW0VKOEt7eVD0r48uiTS83tmg",
  authDomain: "quizapp-fc78e.firebaseapp.com",
  projectId: "quizapp-fc78e",
  storageBucket: "quizapp-fc78e.appspot.com",
  messagingSenderId: "446529303086",
  appId: "1:446529303086:web:c9ab3c9319e4956c9b65bf",
  measurementId: "G-C6P42J14L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db }; // Export Firestore instance
