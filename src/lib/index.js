// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, addDoc, getDocs } from "firebase/firestore";
import { async } from 'regenerator-runtime';


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
  auth.signOut()
    .then(() => {
      window.location.hash = '#home';
    }).catch((error) => {
      alert('Erro ao fazer logout!', error);
    });
};

export const publishPost = async (userName, genre, age, content) => {
  try {
    const docRef = await addDoc(collection(db, 'collectionPosts'), {
      nome: userName,
      genre: genre,
      age: age,
      postContent: content,
      likes: 0,
    });
    console.log('Post salvo com sucesso: ', docRef.id);
  } catch (error) {
    console.error('Falha ao salvar post: ');
  }
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'collectionPosts'));
  const allPosts = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    allPosts.push(doc.data())
  });
  return allPosts
}