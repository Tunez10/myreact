// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEiHBxv2_lRnZmvSLscHTQlPJpYVPJOlY",
  authDomain: "fortune-665e3.firebaseapp.com",
  projectId: "fortune-665e3",
  storageBucket: "fortune-665e3.appspot.com",
  messagingSenderId: "177424464846",
  appId: "1:177424464846:web:0a6a39cab827916421c99f",
  measurementId: "G-L5CXWTZLEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);