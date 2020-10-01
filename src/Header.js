import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";

import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />

      <div className="header__options">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <NearMeOutlinedIcon />
        </div>
        <div className="header__option">
          <ExploreOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FavoriteBorderIcon fontSize="large" />
        </div>
        <div className="header__option">
          <Avatar src={user.photoURL} className="header__avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
