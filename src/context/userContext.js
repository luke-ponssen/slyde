import { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      )
      .then((res) => console.log(res))
      .catch((err) => setError(err.code == "auth/invalid-email" ? "Invalid Email" : "Email Already In Use"))
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.code == "auth/user-not-found" ? "User Not Found" : "Incorrect Password"))
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    setError("");

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
    .then((res) => console.log(res))
    .catch((err) => setError("Invalid Email"))
    .finally(() => {
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 3000);
    });
  };

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    signInWithGoogle,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};