import React from "react";
import { SignIn } from "@clerk/clerk-react";
import "./style/sign.css";

function Sign_In() {
  return (
    <div className="container">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}

export default Sign_In;
