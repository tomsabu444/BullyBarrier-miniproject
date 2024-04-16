import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Post from "./Post";
import "./style/Layout.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="content">
        <SideBar />
        <Post/></div>
        <div>{children}</div>
      
    </>
  );
}

export default Layout;
