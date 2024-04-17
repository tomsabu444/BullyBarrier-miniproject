import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Post from "./Post";
import "./style/Layout.css"
import Notify from "./Notify";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="content">
        <SideBar />
        <Post/>
        <Notify/>
        </div>
        <div>{children}</div>
      
    </>
  );
}

export default Layout;
