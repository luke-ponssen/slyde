import React, { useRef, useState, useReducer } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home, Login} from './Container';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const App = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </div>
  )
}

export default App;
