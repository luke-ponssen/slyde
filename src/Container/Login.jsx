// https://www.youtube.com/watch?v=skDrUY_idJE&ab_channel=VetrivelRavi

import React from 'react'
import {FcGoogle} from 'react-icons/fc';
import './login.css';

import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {app} from '../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const firebaseAuth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const loginWithGmail = async () => {
        await signInWithPopup(firebaseAuth, googleProvider).then(userCred => {
            if (userCred) {
                firebaseAuth.onAuthStateChanged(cred => {
                    cred.getIdToken().then(token => {
                        console.log(token);
                    });
                });
            }
        });

    };

    return (
        <div>
            <div class='login-content'>
                <button onClick={loginWithGmail} class='login-button'>
                    <p>Sign in with Google</p>
                    <div class='icon'>
                        <FcGoogle />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Login
