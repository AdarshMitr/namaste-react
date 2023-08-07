import React, { useState } from "react";
import Logo from "/src/Img/Logo.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div div className="header">
      <div className="logo-container">
        <img id="logo" src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
