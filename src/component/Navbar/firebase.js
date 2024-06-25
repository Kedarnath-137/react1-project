// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiKHc9QQWcUEm-HQ-Nh4QVSMdMNFmsauY",
  authDomain: "edusify-3c4a2.firebaseapp.com",
  projectId: "edusify-3c4a2",
  storageBucket: "edusify-3c4a2.appspot.com",
  messagingSenderId: "18671180250",
  appId: "1:18671180250:web:e81c3b2995ad7526d9c8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firebase and Authentication
const db = getFirestore(app); // for storing data
const auth = getAuth(app);

export {auth, db}