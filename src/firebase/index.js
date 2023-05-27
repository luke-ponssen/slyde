// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqdMf1HndNIi1I0bE2GiQxcWwV1Ouw0VA",
  authDomain: "slyd-c49ee.firebaseapp.com",
  databaseURL: "https://slyd-c49ee-default-rtdb.firebaseio.com",
  projectId: "slyd-c49ee",
  storageBucket: "slyd-c49ee.appspot.com",
  messagingSenderId: "187616058081",
  appId: "1:187616058081:web:befff1224238e05a1235a0",
  measurementId: "G-QZT1Q4L0MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);