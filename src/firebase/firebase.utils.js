import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB0gHS6UXQ0Npj9-982DiZdLF-a8SLPDTM",
  authDomain: "crown-db-69f65.firebaseapp.com",
  databaseURL: "https://crown-db-69f65.firebaseio.com",
  projectId: "crown-db-69f65",
  storageBucket: "crown-db-69f65.appspot.com",
  messagingSenderId: "1068286640598",
  appId: "1:1068286640598:web:2c8fc3520716232793a477"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;