import React from "react";
import "./style/SideBar.css";
import { useClerk } from "@clerk/clerk-react";

//
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";


function SideBar() {
  const { user } = useClerk();

  const handleFullName = () => {
    return user.fullName.toUpperCase();
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
        <div className="account-icon">
          <ManageAccountsSharpIcon />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="follow-list">
        <h4>followers 0</h4>
        <h4>following 0</h4>
      </div>
    </div>
  );
}

export default SideBar;
