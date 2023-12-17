import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAvlat4PVHZpKgobDHnNHY_qvRiYPGSsX0",
    authDomain: "kinopoisk-clone-8683c.firebaseapp.com",
    projectId: "kinopoisk-clone-8683c",
    storageBucket: "kinopoisk-clone-8683c.appspot.com",
    messagingSenderId: "675639438229",
    appId: "1:675639438229:web:28c0124203d9b7dad4a49c"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, firebase, db };