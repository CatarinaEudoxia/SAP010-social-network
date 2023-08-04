// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQWC6WeCZe1egaAyDnI7EhcuUkYWmBclA",
  authDomain: "wlamel-book-s.firebaseapp.com",
  projectId: "wlamel-book-s",
  storageBucket: "wlamel-book-s.appspot.com",
  messagingSenderId: "608921320613",
  appId: "1:608921320613:web:bfada4de699f662bcca14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const email = " "
const password = " "

export function bananinha() {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("deu certo")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log("deu errado")
    });

}
