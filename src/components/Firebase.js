import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-qvDOI3Sz3sNKPXNqa7l8IGInyy-pMUQ",
  authDomain: "invideo-6cdc7.firebaseapp.com",
  projectId: "invideo-6cdc7",
  storageBucket: "invideo-6cdc7.appspot.com",
  messagingSenderId: "492730334526",
  appId: "1:492730334526:web:8d33e3af074573c051406f",
};

const App = initializeApp(firebaseConfig);

const auth = getAuth(App);
const db = getFirestore(App);

export { auth, db };
