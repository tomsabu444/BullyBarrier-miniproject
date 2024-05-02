import React from "react";

import Layout from "../components/Layout";
import "./style/Home.css";
import SideBar from "../components/SideBar";
import Post from "../components/Post";
import Notification from "../components/Notification";

function Home() {


  return (
    <>
      <Layout>
        <div className="content">
          <SideBar />
          <Post />
          <Notification />
        </div>
      </Layout>
    </>
  );
}

export default Home;
