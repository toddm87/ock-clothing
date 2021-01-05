import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCMxGcci9HtdTSINGiICUe85DBsSphVp8A",
  authDomain: "ock-clothing.firebaseapp.com",
  projectId: "ock-clothing",
  storageBucket: "ock-clothing.appspot.com",
  messagingSenderId: "528355846088",
  appId: "1:528355846088:web:30d56d4c04afd025b3c2fd",
  measurementId: "G-7ME1FM67TD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;