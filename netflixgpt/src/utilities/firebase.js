// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkXdtYdc0eL2GDqxzoHY0-p7YD3urIvng",
  authDomain: "netflixgpt-madhavsahi-reactjs.firebaseapp.com",
  projectId: "netflixgpt-madhavsahi-reactjs",
  storageBucket: "netflixgpt-madhavsahi-reactjs.appspot.com",
  messagingSenderId: "428968310453",
  appId: "1:428968310453:web:4b7f6f46e18ed19ab970fc",
  measurementId: "G-D392VC5RBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth();