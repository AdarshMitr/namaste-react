import React  from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  // Local State Variable-super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState([ 
    {
    info: {
      id: "651214",
      name: "McDonald's",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 3.9,
    }
  },
  {
    info: {
      id: "651204",
      name: "Mdabba",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.4,
    }
  },
  {
    info: {
      id: "651284",
      name: "Asli Dabba",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.5,
    }
  },]);

// Normal Js variable
let listOfRestaurantsJs=[
  {
    info: {
      id: "651214",
      name: "McDonald's",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 3.9,
    }
  },
  {
    info: {
      id: "651204",
      name: "Mdabba",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.4,
    }
  },
  {
    info: {
      id: "651284",
      name: "Asli Dabba",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      locality: "Huda Market",
      areaName: "Sector 77",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.5,
    }
  },
];



    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating > 4);
          setListOfRestaurants(filteredList);
          }}>Top Rated Restaurants</button>
        </div>  
        <div className="res-container">
  
          {/* using map to iterate over resList elements */}
  
         { listOfRestaurants.map((restaurant)=>(
  <RestaurantCard key={restaurant.info.id}resData={restaurant}/>
          ))
          };
       
          
          
        </div>
      </div>
    );
  };

  export default Body;