import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  const { signInWithGoogle } = useUserContext();

  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <button onClick={signInWithGoogle}> Continue with Google </button>
      <p onClick={toggleIndex}>
        {!index ? "Sign up" : "Sign in"}
      </p>
    </div>
  );
};

export default Auth;