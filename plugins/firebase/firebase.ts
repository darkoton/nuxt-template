import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKPlzhgNuZDpvESrgJiDLqsS51JUB8FXU",
  authDomain: "nlogs-a6d1a.firebaseapp.com",
  databaseURL:
    "https://nlogs-a6d1a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nlogs-a6d1a",
  storageBucket: "nlogs-a6d1a.appspot.com",
  messagingSenderId: "993159242513",
  appId: "1:993159242513:web:f1f09a7e12d99e4c46e2b0",
  measurementId: "G-4L8B0F4GMJ",
};

const app = initializeApp(firebaseConfig, "Nlogs");

export default app