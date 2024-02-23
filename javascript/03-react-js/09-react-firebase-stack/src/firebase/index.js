import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_2eGzmY0ThUbUahsfcG4gov5iowzSFfs",
  authDomain: "hello-srilanka.firebaseapp.com",
  projectId: "hello-srilanka",
  storageBucket: "hello-srilanka.appspot.com",
  messagingSenderId: "596302994701",
  appId: "1:596302994701:web:24298ed663bfca28526444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

