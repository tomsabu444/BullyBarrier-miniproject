import React from "react";
import { useClerk } from "@clerk/clerk-react";
import Layout from "../components/Layout";
import "./style/Home.css";
import SideBar from "../components/SideBar";
import Post from "../components/Post";
import Notify from "../components/Notify";

function Home() {
  const { user } = useClerk();

  return (
    <>
      <Layout>
        <div className="content">
          <SideBar />
          <Post />
          <Notify />
        </div>
      </Layout>
    </>
  );
}

export default Home;
