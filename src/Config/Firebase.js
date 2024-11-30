
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5oETckfwESLyhUZWziCm3giIRUJOPGs",
  authDomain: "netflix-337e0.firebaseapp.com",
  projectId: "netflix-337e0",
  storageBucket: "netflix-337e0.firebasestorage.app",
  messagingSenderId: "828424046393",
  appId: "1:828424046393:web:0b5023ecd36c735d738ae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)
