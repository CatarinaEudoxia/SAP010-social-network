// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, addDoc, getDocs } from "firebase/firestore";
import { async } from 'regenerator-runtime';
import { query, orderBy, limit, doc, deleteDoc, updateDoc } from "firebase/firestore"; 

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

export const publishPost = async (publishData, book, userName, genre, age, content) => {
  try {
    const docRef = await addDoc(collection(db, 'collectionPosts'), {
      id: Date.now(),
      data: publishData,
      bookName: book, 
      nome: userName,
      genre: genre,
      age: age,
      postContent: content,
      likes: 0 ,
    });
    console.log('Post salvo com sucesso: ', docRef.id);
  } catch (error) {
    console.error('Falha ao salvar post:', error);
  }
};

export const getPosts = async () => {
  try {
    const q = query(collection(db, 'collectionPosts'), orderBy('data', 'desc')); // Order by 'data' field in descending order
    const querySnapshot = await getDocs(q);
     const allPosts = [];
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id; // Defina o ID do documento como parte dos dados
      allPosts.push(post);
    });
    return allPosts;
  } catch (error) {
    console.error('Erro ao obter posts:', error);
    return []; // Retorna uma matriz vazia em caso de erro
  }
};

/*const allPosts = [];
    querySnapshot.forEach((doc) => {
      allPosts.push(doc.data());
    });
    return allPosts;
  } catch (error) {
    console.error('Erro ao obter posts:', error);
    return [];*/

export const deletePosts = async(postId) => {
  try {
    console.log('Excluindo post', postId);
    const docReference = doc(db, 'collectionPosts', postId);
    await deleteDoc(docReference);
    console.log('Excluído')
  }
  catch (error) {
    console.error('Erro ao excluir:', error);
  }
};

// Função para curtir um post
export const likePost = async (postId) => {
  try {
    const postRef = doc(db, 'collectionPosts', postId);

    // Obtém os dados do post atual
    const postSnapshot = await getDoc(postRef);
    const postData = postSnapshot.data();

    // Atualiza o número de curtidas
    const newLikes = (postData.likes || 0) + 1;

    // Atualiza o campo "likes" no Firestore
    await updateDoc(postRef, {
      likes: newLikes
    });
  } catch (error) {
    console.error('Erro ao curtir o post:', error);
  }
};

// Função para descurtir um post
export const unlikePost = async (postId) => {
  try {
    const postRef = doc(db, 'collectionPosts', postId);

    // Obtém os dados do post atual
    const postSnapshot = await getDoc(postRef);
    const postData = postSnapshot.data();

    // Verifica se há curtidas para evitar números negativos
    const newLikes = Math.max((postData.likes || 0) - 1, 0);

    // Atualiza o campo "likes" no Firestore
    await updateDoc(postRef, {
      likes: newLikes
    });
  } catch (error) {
    console.error('Erro ao descurtir o post:', error);
  }
};
