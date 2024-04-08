import React from 'react'
import { SignUp } from "@clerk/clerk-react";

import "./style/sign.css"

function Sign_Up() {
  return (
    <div className="container">
      <SignUp />
    </div>
  )
}

export default Sign_Up