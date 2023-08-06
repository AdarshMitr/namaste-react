import React  from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
 
const Body = () => {

  // Local State Variable-super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState(resList);

  useEffect(()=>{
   fetchData();
  },[]);

const fetchData=async()=>{
  const data=await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json=await data.json();
  console.log(json);
}
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating > 4)
          setListOfRestaurants(filteredList);
          }}>Top Rated Restaurants</button>
        </div>  
        <div className="res-container">
  
          {/* using map to iterate over resList elements */}
  
         { listOfRestaurants.map((restaurant)=>(
  <RestaurantCard key={restaurant.info.id}resData={restaurant}/>
          ))
          }
       
          
          
        </div>
      </div>
    );
  };

  export default Body;