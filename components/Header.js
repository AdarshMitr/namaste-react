import React, { useState,useContext } from "react";
import Logo from "/src/Img/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedinUser}=useContext(UserContext);
  //console.log(loggedinUser);

  //Subscribing to the store using Selector
const cartItems=useSelector((store)=>store.cart.items);
console.log(cartItems);

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
          
          <li className="px-4 ">{onlineStatus ? "🟢nline" : "🔴ffline"}</li>
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
          <li className="px-4 font-bold text-xl">Cart-({cartItems.length} items)</li>
          <li className="px-4 font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );  
};

export default Header;
