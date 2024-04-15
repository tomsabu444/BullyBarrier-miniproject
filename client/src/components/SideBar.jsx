import React, { useState } from "react";
import "./style/SideBar.css";
import {
  SignOutButton,
  useClerk,
  UserButton,
  UserProfile,
} from "@clerk/clerk-react";

//
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import { Button } from "@mui/material";
import AlertDialog from "./AlertDialogDemo";

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
    <div className="sidebar">
      <div className="sidebar-info">
        <div className="avatar-box">
          <img draggable="false" src={user.imageUrl} alt="user-image" />
        </div>
        <div className="profile-name">
          <h2>{handleFullName()}</h2>
          <p>@{user.username}</p>
        </div>
        <div className="account-icon" onClick={handleClick}>
          <ManageAccountsSharpIcon />
        </div>
        {/* <div>{showProfile && <UserProfile />}</div> */}
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
          <Button>Profile</Button>

          <Button>Friend Request</Button>
          {/* sign out */}
         <AlertDialog/>
      </div>
    </div>
  );
}

export default SideBar;
