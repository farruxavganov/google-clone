// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFCGrC2JxOBO9fiCmkkTAfiUcFos4Lqhg",
  authDomain: "whatisapp-43ac5.firebaseapp.com",
  projectId: "whatisapp-43ac5",
  storageBucket: "whatisapp-43ac5.appspot.com",
  messagingSenderId: "702690944969",
  appId: "1:702690944969:web:8ead689daeb63260f7ea18",
  measurementId: "G-N5B055VCDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider};
export default db;
