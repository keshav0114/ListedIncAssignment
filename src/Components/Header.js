import React from "react";
import "../CSS/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
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
            src="assets/Notification.svg"
            alt="notification"
            className="notificationIcon"
          />
          <img
            src={sessionUser?.picture || "assets/Profile.svg"}
            className="profilePicture"
            onClick={() => {
              sessionStorage.removeItem("user");
              navigate("/");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
