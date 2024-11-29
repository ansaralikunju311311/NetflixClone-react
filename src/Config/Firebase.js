
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1ysUl5urN7QQTkUeFd8RC50N-RaIOFso",
  authDomain: "netflix-clone-d74c7.firebaseapp.com",
  projectId: "netflix-clone-d74c7",
  storageBucket: "netflix-clone-d74c7.firebasestorage.app",
  messagingSenderId: "218503040232",
  appId: "1:218503040232:web:e29a0608faa3b612ad4d5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




const signup = async (name, email, password) => {
    try {
    
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
  
      // Add user details to Firestore
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
  
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(`Error: ${error.message}`);
    }
  };


const login = async (email,password)=>
{
  try {
    await signInWithEmailAndPassword(auth,email,password)
    
  } catch (error) {
    console.log(error);
    alert(error)
  }
}
const logout =async ()=>
{
signOut(auth);
}
export {auth,db,login,signup,logout}