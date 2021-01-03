import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmKQzuXoCoatzfSYPsGnlSl6ew1eacanw",
    authDomain: "crwn-db-b544c.firebaseapp.com",
    projectId: "crwn-db-b544c",
    storageBucket: "crwn-db-b544c.appspot.com",
    messagingSenderId: "420100118993",
    appId: "1:420100118993:web:c669b65539633eb5e268f0",
    measurementId: "G-J7KZ2Q1JHP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
