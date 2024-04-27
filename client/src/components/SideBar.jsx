import React, { useState } from "react";
import "./style/SideBar.css";
import {
  useClerk,
  UserProfile,
} from "@clerk/clerk-react";

//
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from "@mui/material";
import AlertDialog from "./AlertDialogDemo";
import { Link } from "react-router-dom";

function SideBar() {
  const { user } = useClerk();

  const handleFullName = () => {
    return user.fullName.toUpperCase();
  };

  const [showProfile, setShowProfile] = useState(false);

  const handleClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
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
          <div className="account-icon" onClick={handleClick}>
            <ManageAccountsSharpIcon />
          </div>
        </div>
        <br />
        <div className="follow-list">
          <h4>followers 0</h4>
          <h4>following 0</h4>
        </div>
        <br />
        <hr />
        <br />

        <div className="nav-list">
          <Button onClick={handleClick}>Profile</Button>

          <Button>Friend Request</Button>

          <Link to="/team-member">
            <Button>Credits</Button>
          </Link>

          {/* sign out */}
          <AlertDialog />
        </div>
      </div>
     {/* show Popup profile */}
      {showProfile && (
        <div className="popup-profile">
            {/* Close icon */}
            <div className="close-icon" onClick={handleClick}>
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
