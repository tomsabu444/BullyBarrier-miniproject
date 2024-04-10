import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

import { ClerkLoaded } from "@clerk/clerk-react";
function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();

  return (
    <>
      <ClerkLoaded>
        {isSignedIn ? (
          children // Render children if user is signed in
        ) : (
          <Navigate to="/sign-in" replace /> // Redirect to sign-in if user is not signed in
        )}{" "}
      </ClerkLoaded>
    </>
  );
}

export default ProtectedRoute;
