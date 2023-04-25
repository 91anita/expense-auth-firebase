// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ5M5EyO9EjIRPFrdO3oXEmGqmUAL6Gwk",
  authDomain: "expense-firebase-63610.firebaseapp.com",
  databaseURL: "https://expense-firebase-63610-default-rtdb.firebaseio.com",
  projectId: "expense-firebase-63610",
  storageBucket: "expense-firebase-63610.appspot.com",
  messagingSenderId: "644953847907",
  appId: "1:644953847907:web:e8d9ef68ed6cd0d31d6056"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};