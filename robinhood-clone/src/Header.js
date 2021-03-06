import React from "react";
import Logo from "./robinhood__logo.svg";

import SearchIcon from "@material-ui/icons/Search";

import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={25} />
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
