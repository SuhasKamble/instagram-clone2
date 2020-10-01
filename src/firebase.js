import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxaIeQJvPfOa7BIUEE92_1y42H13HO2CU",
  authDomain: "instagram-clone-by-suhas.firebaseapp.com",
  databaseURL: "https://instagram-clone-by-suhas.firebaseio.com",
  projectId: "instagram-clone-by-suhas",
  storageBucket: "instagram-clone-by-suhas.appspot.com",
  messagingSenderId: "350802801224",
  appId: "1:350802801224:web:109998f4bc08b6376cde7d",
  measurementId: "G-Y022YNXSS3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
