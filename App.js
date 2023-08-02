import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo.png";

// Creating Food Ordering App

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

const RestaurantCard = (props) => {

 const {resName,cuisine,ratings}= props;
  return (
    <div className="res-card" style={{backgroundColor:'white'}}>
      <img className="res-logo"  alt="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/08eee882fda81b68e5c36e3a5d89d8c0"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{ratings}</h4>
      <h4>15 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="McDonald's" cuisine="Burger,Fast Food" ratings="3.0 ⭐⭐⭐"/>
        <RestaurantCard resName="Royal Rasoi" cuisine="Kadhai Paneer,Boondi Rayta" ratings="4.0 ⭐⭐⭐⭐" />
         
      </div>
    </div>
  );
  
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
