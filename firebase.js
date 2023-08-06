// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWsDmgdIgJ32F64ES4VntxEJa9_uNlujc",
  authDomain: "nlogs-53754.firebaseapp.com",
  projectId: "nlogs-53754",
  storageBucket: "nlogs-53754.appspot.com",
  messagingSenderId: "329374962003",
  appId: "1:329374962003:web:605c9fd5de7becc44351a6",
  measurementId: "G-5JLYKCHWZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);