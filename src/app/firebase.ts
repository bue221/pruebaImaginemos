import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4x-9YywjQ3ZJIVmRJ2QCNOTdq0zaVmOs",
  authDomain: "prueba-imaginamos.firebaseapp.com",
  projectId: "prueba-imaginamos",
  storageBucket: "prueba-imaginamos.appspot.com",
  messagingSenderId: "740766465535",
  appId: "1:740766465535:web:93882b9cb72434af043bca",
  measurementId: "G-0007BK2MRP",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(googleProvider);
};

export const onAuthStateChanged = (onChange: any) => {
  return firebase.auth().onAuthStateChanged((user) => onChange(user));
};
