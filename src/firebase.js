// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcOyK_8xXMAgNw88sEE1f1YkvZRNx9TI8",
  authDomain: "atestat-80d34.firebaseapp.com",
  projectId: "atestat-80d34",
  storageBucket: "atestat-80d34.firebasestorage.app",
  messagingSenderId: "39063574813",
  appId: "1:39063574813:web:ef3cbd4a2c3d71f2b229f4",
  measurementId: "G-V671Z38HLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
const analytics = getAnalytics(app);