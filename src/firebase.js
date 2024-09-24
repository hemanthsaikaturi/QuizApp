// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC88PISgknYbIpEcAI9PQT2dPHaeNz8yjM",
  authDomain: "quizapp-3fc66.firebaseapp.com",
  projectId: "quizapp-3fc66",
  storageBucket: "quizapp-3fc66.appspot.com",
  messagingSenderId: "567535613233",
  appId: "1:567535613233:web:664617af36769408edec10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db
export { db };
