import React  from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
 
const Body = () => {

  // Local State Variable-super powerful variable
  const [listOfRestaurants,setListOfRestaurants] = useState([]);

  useEffect(()=>{
   fetchData();
  },[]);

const fetchData=async()=>{
  const data=await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json=await data.json();
  console.log(json);

  //Optional Chaining

  setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

//adding a loading screen when list is empty

if(listOfRestaurants.length===0){
  return <h1> Loading..........</h1>
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