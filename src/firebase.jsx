import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (from your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyBgVGhilB7NU4GkCeUquz1qax56lq7_ap0",
  authDomain: "calmlynew.firebaseapp.com",
  projectId: "calmlynew",
  storageBucket: "calmlynew.appspot.com",
  messagingSenderId: "844825397343",
  appId: "1:844825397343:web:eef98a3b216de757890bea",
  measurementId: "G-SZ67PE7E7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Authentication providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Sign in functions
const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

const signInWithFacebook = () => {
  return signInWithPopup(auth, facebookProvider);
};

export { auth, db, storage, analytics, signInWithGoogle, signInWithFacebook };