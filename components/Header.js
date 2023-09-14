import React, { useState, useContext } from "react";
import Logo from "/src/Img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedinUser } = useContext(UserContext);
  //console.log(loggedinUser);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="header flex justify-between shadow-lg bg-zinc-50">

      <div className="pt-2">
        <img className="flex w-56" src={Logo} />
      </div>
      <div className="nav-items hidden md:flex space-x-6 items-center">
        <ul className=" flex p-4 m-4 ">
          <li className="px-4 ">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 ">
            <Link className="link hover:text-slate-400" to="/about">
              About
            </Link>
          </li>
          <li className="px-4 ">
            <Link className="link hover:text-slate-400" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-4 ">
            <Link className="link hover:text-slate-400" to="/grocery">
              Grocery
            </Link>
          </li>

          <li className="px-4 ">{onlineStatus ? "🟢nline" : "🔴ffline"}</li>
          <button
            className="login-btn px-4 "
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("LogOut")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-4 font-bold text-xl">
            <Link className="link hover:text-slate-400" to="/cart">
              Cart-({cartItems.length} items)
            </Link>
          </li>
          <li className="px-4 font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
