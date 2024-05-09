import React, { useState } from "react";

import Layout from "../components/Layout";
import "./style/Home.css";
import SideBar from "../components/SideBar";
import Post from "../components/Post";
import Notification from "../components/Notification";
import Navbar from "../components/Navbar";

function Home() {
  //! If post is successful, trigger refresh of notifications
  const [refreshNotifications, setRefreshNotifications] = useState(false);
  const handleRefreshNotifications = () => {
    setTimeout(() => {
      setRefreshNotifications((prevRefresh) => !prevRefresh);
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  const [searchQuery, setSearchQuery] = useState(""); // Declare searchQuery state

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };


  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="content">
        <SideBar />
        <Post
          refreshNotifications={handleRefreshNotifications}
          usernameSearch={searchQuery}
        />
        <Notification key={refreshNotifications} />
      </div>
    </>
  );
}

export default Home;
