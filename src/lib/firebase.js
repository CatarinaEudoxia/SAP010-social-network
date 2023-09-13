import { initializeApp } from 'firebase/app';
import { async } from 'regenerator-runtime';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, doc, deleteDoc, getDoc, where } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
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

let currentUser = null; // Store the current user data

export const registerAccount = (email, password, userName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userId = user.uid; // Obtenha o UID do Firebase Authentication

      const userData = {
        email: user.email,
        userName: userName,
      };

      // Crie um documento de usuário no Firestore usando o mesmo UID como identificador do documento
      addDoc(collection(db, 'users'), { ...userData, userId })
        .then(() => {
          alert('Cadastro realizado com sucesso!');
          window.location.hash = '#login';
        })
        .catch((error) => {
          alert('Falha ao cadastrar usuário!', error);
        });
    })
    .catch((error) => {
      alert('Falha ao cadastrar usuário!', error);
    });
};


export const loginOn = (email, password) => {
  console.log('Função loginOn foi chamada.');
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log('Login realizado com sucesso!', userCredential);

      const user = userCredential.user;
      console.log('ID do usuário:', user.uid);

      const emailDoUsuario = user.email;
      if (emailDoUsuario) {
        const userName = await getUserNameFromDatabase(emailDoUsuario);
        console.log('Nome do usuário obtido do banco de dados:', userName);

        const userData = {
          email: emailDoUsuario,
          userName: userName,
        };

        currentUser = userData;

        alert('Login realizado com sucesso!', userCredential);
        window.location.hash = '#feed';
      } else {
        console.error('Email do usuário não encontrado.');
      }
    })
    .catch((error) => {
      console.error('Falha ao logar usuário!', error);
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

export const publishPost = async (publishData, book, userId, genre, age, content) => {
  try {
    const docRef = await addDoc(collection(db, 'collectionPosts'), {
      id: Date.now(),
      data: publishData,
      bookName: book,
      userId: userId, // Save the user ID in Firestore
      genre: genre,
      age: age,
      postContent: content,
      likes: 0,
    });
  } catch (error) {
    console.error('Falha ao salvar post:', error);
  }
};

export const getPosts = async () => {
  try {
    const q = query(collection(db, 'collectionPosts'), orderBy('data', 'desc'));
    const querySnapshot = await getDocs(q);
    const allPosts = [];
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      allPosts.push(post);
    });
    return allPosts;
  } catch (error) {
    console.error('Erro ao obter posts:', error);
    return [];
  }
};

export const deletePosts = async (postId) => {
  try {
    const docReference = doc(db, 'collectionPosts', postId);
    await deleteDoc(docReference);
  } catch (error) {
    console.error('Erro ao excluir:', error);
  }
};

export const getUserNameFromDatabase = async (email) => {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email)); // Crie uma consulta para encontrar o usuário com o email correspondente
    const querySnapshot = await getDocs(q); // Execute a consulta
    if (querySnapshot.size > 0) {
      const userDoc = querySnapshot.docs[0]; // Obtenha o primeiro documento com a correspondência de email
      return userDoc.data().userName; // Retorne o campo userName do documento
    } else {
      return null; // Usuário não encontrado
    }
  } catch (error) {
    console.error('Erro ao buscar o nome de usuário:', error);
    return null;
  }
};

export const getCurrentUser = () => {
  return currentUser;
};
