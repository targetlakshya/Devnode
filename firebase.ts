import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdSm_5rnSShZoord8iQKSTsR51_9So7Lc",
  authDomain: "blog-app-f5c49.firebaseapp.com",
  projectId: "blog-app-f5c49",
  storageBucket: "blog-app-f5c49.appspot.com",
  messagingSenderId: "205129456867",
  appId: "1:205129456867:web:f11ce42cf24f00879b79d6",
  measurementId: "G-EV4CPYD8G0"
};

//👇🏻 Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//👇🏻 required functions
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

//👇🏻 required exports
export { db, auth, googleProvider, storage}