import React from "react";
import { useClerk } from "@clerk/clerk-react";
import Layout from "../components/Layout";
import "./style/Home.css"


function Home() {
  const { user } = useClerk();

  console.log(user);
  return (
    <>
      <Layout>
        <div>
          Home page
          <h1>Welcome {user.username}</h1>
        </div>
      </Layout>
    </>
  );
}

export default Home;
