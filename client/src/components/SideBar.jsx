import React from "react";
import "./style/SideBar.css";
import { useClerk } from "@clerk/clerk-react";

//
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import Divider from "@mui/material/Divider";

function SideBar() {
  const { user } = useClerk();

  const handleFullName = () => {
    return user.fullName.toUpperCase();
  }

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
        <div className="account-icon">
          <ManageAccountsSharpIcon />
        </div>
      </div>
      <Divider />
      <h4>followers</h4>
      <h4>following</h4>
    </div>
  );
}

export default SideBar;
