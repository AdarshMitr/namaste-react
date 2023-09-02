import React, { useState } from "react";
import Logo from "/src/Img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div div className="header">
      <div className="logo-container">
        <img id="logo" src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>Cart</li>
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Log Out")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
