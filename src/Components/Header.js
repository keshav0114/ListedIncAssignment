import React from "react";
import "../CSS/header.css";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerTitle">Dashboard</div>
        <div className="headerInnerContainer">
          <div className="searchbar">
            <input
              type="text"
              className="searchbarInput"
              placeholder="Search..."
            />
            <img
              src="/assets/SearchIcon.svg"
              alt="notification"
              className="searchIcon"
            />
          </div>
          <img
            src="/assets/Notification.svg"
            alt="notification"
            className="notificationIcon"
          />
          <img src="/assets/Profile.svg" />
        </div>
      </div>
    </>
  );
};

export default Header;
