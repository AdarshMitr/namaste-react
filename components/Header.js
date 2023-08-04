import React from "react";
import Logo from "/src/Img/Logo.png"

const Header = () => {
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
          </ul>
        </div> 
      </div>
    );
  };


  export default Header;