// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCmq5xycVhJKfthei5gMyfCyfW0UJ8M9Ig",
  authDomain: "escort-booking-site.firebaseapp.com",
  projectId: "escort-booking-site",
  storageBucket: "escort-booking-site.firebasestorage.app",
  messagingSenderId: "993508382786",
  appId: "1:993508382786:web:62698c3e8d2fa94e3735db",
  measurementId: "G-YHTZXHHWXJ"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(app)

// Export Firestore instance so you can use it in Vue components
export { db }
