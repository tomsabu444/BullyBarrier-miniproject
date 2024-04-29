import React, { useState } from "react";
import "./style/SideBar.css";
import { useClerk, UserProfile } from "@clerk/clerk-react";

//
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import AlertDialog from "./AlertDialogDemo";
import Credits from "../pages/Credits"; // Import the Credits component
import { Link } from "react-router-dom";

function SideBar() {
  const { user } = useClerk();

  const handleFullName = () => {
    return user.fullName.toUpperCase();
  };

  const [showProfile, setShowProfile] = useState(false);
  const [showCredits, setShowCredits] = useState(false); // State for showing/hiding the Credits component

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const handleCreditsClick = () => {
    setShowCredits(!showCredits);
  };

  return (
    <>
      <div className="sidebar-content">
        <div className="sidebar">
          <div className="sidebar-info">
            <div className="avatar-box">
              <img draggable="false" src={user.imageUrl} alt="user-image" />
            </div>
            <div className="profile-name">
              <h2>{handleFullName()}</h2>
              <p>@{user.username}</p>
            </div>
            {/* 
        //!  show profile button 
        */}
            <div className="account-icon" onClick={handleProfileClick}>
              <ManageAccountsSharpIcon />
            </div>
          </div>
          <br />
          <div className="follow-list">
            <h4>followers 0</h4>
            <h4>following 0</h4>
          </div>
          <hr />
          <br />

          <div className="nav-list">
            <Button onClick={handleProfileClick}>Profile</Button>

            <Button>Friend Request</Button>

            {/* Show Credits component */}
            <Button onClick={handleCreditsClick}>Credits</Button>

            {/* sign out */}
            <AlertDialog />
          </div>
        </div>

        {/* Show Credits component */}
        {showCredits && <Credits onClose={handleCreditsClick} />}
      </div>
      {/* show Popup profile */}
      {showProfile && (
        <div className="popup-profile">
          {/* Close icon */}
          <div className="close-icon" onClick={handleProfileClick}>
            <CancelIcon />
          </div>
          <div className="profile">
            <UserProfile />
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
