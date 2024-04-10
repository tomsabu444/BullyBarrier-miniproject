import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <header>
    <div>
     

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
    </header>
  )
}

export default Navbar