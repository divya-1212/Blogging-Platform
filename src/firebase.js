import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD15h0juaMgVRS7J-kaYLgOidvOPhnb4qI",
  authDomain: "blog-8e53a.firebaseapp.com",
  projectId: "blog-8e53a",
  storageBucket: "blog-8e53a.appspot.com",
  messagingSenderId: "248678898946",
  appId: "1:248678898946:web:8253bb8782a4344fccf61b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
