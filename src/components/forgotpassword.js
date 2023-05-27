import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Forgotpassword = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();
  
  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h2>Forgot Password</h2>
      <form onSubmit={forgotPasswordHandler}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Forgotpassword;