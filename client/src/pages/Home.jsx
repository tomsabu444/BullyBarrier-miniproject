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

  // const handleSearch = (searchQuery) => {
  //   setSearchQuery(searchQuery);
  // };

  //! bully post count pass from notification
  const [flaggedCommentsCount, setFlaggedCommentsCount] = useState(0);

  const handleFlaggedCommentsCountChange = (count) => {
    setFlaggedCommentsCount(count);
  };

  return (
    <>
      <Navbar onSearch={setSearchQuery} />
      <div className="content">
        <SideBar />
        <Post
          refreshNotifications={handleRefreshNotifications}
          usernameSearch={searchQuery}
          flaggedCommentsCount={flaggedCommentsCount}
        />
        <Notification
          key={refreshNotifications}
          onFlaggedCommentsCountChange={handleFlaggedCommentsCountChange}
        />
      </div>
    </>
  );
}

export default Home;
