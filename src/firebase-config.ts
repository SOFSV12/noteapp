import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgqnvHXH3orAMV78v4WtFye0pXG4V8lqw",
  authDomain: "react-http-4d9f4.firebaseapp.com",
  databaseURL: "https://react-http-4d9f4-default-rtdb.firebaseio.com",
  projectId: "react-http-4d9f4",
  storageBucket: "react-http-4d9f4.appspot.com",
  messagingSenderId: "8099051721",
  appId: "1:8099051721:web:642daf7d1c236dc9ecf518",
};

export const app = initializeApp(firebaseConfig);
