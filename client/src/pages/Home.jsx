import React from "react";
import Navbar from "../components/Navbar";
import { useClerk } from "@clerk/clerk-react";

function Home() {

  const {user } = useClerk();

  console.log(user);
  return (
    <>
      <div>Home page

<h1>Welcome {user.username}</h1>

      </div>

      <Navbar />
    </>
  );
}

export default Home;
