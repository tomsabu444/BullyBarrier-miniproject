import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./style/Navbar.css";

import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="navbar">
      <div className="topbar">
        <div className="title-name">
          <span>Bully Barrier</span>
        </div>

        <div className="nav_searchbaar">
          <input type="text" name="null" id="null" placeholder="Search...." />
          <div className="search_icon">
            <SearchIcon id="search" />
          </div>
        </div>

        <div className="user_button">
          <UserButton  />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
