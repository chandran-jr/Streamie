import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyANk93RQ_oYQohvku7AKstclwNx3ewu68I",
    authDomain: "streamie-ba5f8.firebaseapp.com",
    projectId: "streamie-ba5f8",
    storageBucket: "streamie-ba5f8.appspot.com",
    messagingSenderId: "1036132184731",
    appId: "1:1036132184731:web:175492258cb3955df48c3e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;