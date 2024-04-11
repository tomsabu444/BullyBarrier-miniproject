import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
} from "@clerk/clerk-react";
import "./style/Navbar.css";

import SearchIcon from "@mui/icons-material/Search";

//image
import LogoImage from "../assets/logo-no-background.png";

function Navbar() {
  const { user } = useClerk();

  //user name to lowerCase
  const handleFirstname = () => {
    return (
      user.firstName.charAt(0).toUpperCase() +
      user.firstName.slice(1).toLowerCase()
    );
  };
  return (
    <div className="navbar">
      <div className="topbar">
        <div className="title-box">
          <img className="title-logo" src={LogoImage} alt="logo image" />
          <div>
            <span className="title-name">Bully Barrier</span>
          </div>
          
        </div>

        <div className="nav_searchbaar">
          <input type="text" name="null" id="null" placeholder="Search...." />
          <div className="search_icon">
            <SearchIcon id="search" />
          </div>
        </div>

        <div className="profile-box">
          <h2>Hi , {handleFirstname()}</h2>
          <div className="user_button">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
