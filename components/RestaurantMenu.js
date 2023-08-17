import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
  resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.toString()}</h3>
      <h3>{costForTwo}</h3>
      <ul>
        <li>Chole Bhature</li>
        <li>Paneer Pakode</li>
        <li>Soyabean Chap</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
