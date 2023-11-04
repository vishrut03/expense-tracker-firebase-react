// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw4e07-MddS6Lb4h64munCghVvd43JWEQ",
  authDomain: "expense-tracker-93ca0.firebaseapp.com",
  projectId: "expense-tracker-93ca0",
  storageBucket: "expense-tracker-93ca0.appspot.com",
  messagingSenderId: "167773533037",
  appId: "1:167773533037:web:cbeb1d81b4e15c43d12064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);