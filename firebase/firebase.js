// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyV4GQ-r6RHVDDaUjRthe0heNrB1TNdSc",
  authDomain: "fir-todo-cc112.firebaseapp.com",
  projectId: "fir-todo-cc112",
  storageBucket: "fir-todo-cc112.appspot.com",
  messagingSenderId: "527426147075",
  appId: "1:527426147075:web:7c0fccdfcaf842e92b0f36",
  measurementId: "G-8WTVX2SYMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);