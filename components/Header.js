import React, { useState } from "react";
import Logo from "/src/Img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between shadow-lg bg-orange-200 sm:bg-yellow-200 lg:bg-blue-200">
      <div >
        <img className="flex w-56"src={Logo} />
      </div>
      <div className="nav-items flex items-center">
        <ul className=" flex p-4 m-4 ">
          <li className="px-4 ">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 ">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="px-4 ">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-4 ">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4 ">Cart</li>
          <li className="px-4 ">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <button
            className="login-btn px-4 "
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
