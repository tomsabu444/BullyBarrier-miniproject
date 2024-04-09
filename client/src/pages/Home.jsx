import React from "react";
import Navbar from "../components/Navbar";

import { useUser } from "@clerk/clerk-react";
import Sign_In from "./Sign_In";

function Home() {

  const { isSignedIn, user} = useUser();

  if (isSignedIn) {
    return (<div>Hello {user.fullName}!
    <h1>Home page</h1>
      <Navbar />
    </div>);
  }
 
  return <div><Sign_In/></div>;
}


export default Home;
