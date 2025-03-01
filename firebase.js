// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6GlxL4kylO_9-YRMFPB77fY-ZYTplMII",
  authDomain: "photostudio-8da5a.firebaseapp.com",
  projectId: "photostudio-8da5a",
  storageBucket: "photostudio-8da5a.firebasestorage.app",
  messagingSenderId: "166531872371",
  appId: "1:166531872371:web:465db1825a7ca06df59c06",
  measurementId: "G-3H0PHDZ7EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
