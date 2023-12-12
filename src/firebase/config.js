// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH9KV8GL69IS1L9nUPQfeyNIXjQKj89Sg",
  authDomain: "tiendita-crossfiter-9e7ca.firebaseapp.com",
  projectId: "tiendita-crossfiter-9e7ca",
  storageBucket: "tiendita-crossfiter-9e7ca.appspot.com",
  messagingSenderId: "649786703865",
  appId: "1:649786703865:web:6a56c1e30f7115fc1b8728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);