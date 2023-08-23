// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQWC6WeCZe1egaAyDnI7EhcuUkYWmBclA',
  authDomain: 'wlamel-book-s.firebaseapp.com',
  projectId: 'wlamel-book-s',
  storageBucket: 'wlamel-book-s.appspot.com',
  messagingSenderId: '608921320613',
  appId: '1:608921320613:web:bfada4de699f662bcca14c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const registerAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Cadastro realizado com sucesso!', userCredential);
    })
    .catch((error) => {
      alert('Falha ao cadastrar usuário!', error);
    });
};

export const loginOn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login realizado com sucesso!', userCredential);
      window.location.hash = '#feed';
    })
    .catch((error) => {
      alert('Falha ao logar usuário!', error);
    });
};

export const logoutAccount = () => {
  auth.signOut().then(() => {
    window.location.hash = '#home';
  }).catch((error) => {
    alert('Erro ao fazer logout!', error);
  });
};
