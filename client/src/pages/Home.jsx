import React from "react";
import Navbar from "../components/Navbar";

import { useUser } from "@clerk/clerk-react";

function Home() {

  const { isSignedIn, user} = useUser();

  if (isSignedIn) {
    return (<div>Hello {user.fullName}!
    <h1>Home page</h1>
      <Navbar />
    </div>);
  }
 
  return <div>Not signed in</div>;
}


export default Home;
