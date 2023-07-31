import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo.png";

// Creating Food Ordering App

const Header = () => {
  return <div className="header">
    <div id="logo-container">
      <img id="logo" src={Logo}/>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  </div>
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
