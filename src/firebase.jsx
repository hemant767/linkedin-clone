import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAYyGUR6giaCgTtRJ2iMWSE8wbVshB1lB8",
    authDomain: "linkedin-clone-2fce2.firebaseapp.com",
    projectId: "linkedin-clone-2fce2",
    storageBucket: "linkedin-clone-2fce2.appspot.com",
    messagingSenderId: "798687340464",
    appId: "1:798687340464:web:35614a7ef3c64a1a1bd875"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db , auth};