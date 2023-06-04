import React from "react";
import login from "../../Assets/icons/user-icon.svg";
import "./style.css";

const Header = () => {
  return (
    <div className="header-body">
      <div className="headerlogo">Movie Review</div>
      <div className="header-login-section">
        <img src={login} alt="" width={30} height={30} />
        <div>Log In</div>
      </div>
    </div>
  );
};

export default Header;
