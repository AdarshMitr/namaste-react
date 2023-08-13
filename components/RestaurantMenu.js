import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

 const fetchMenu = async () => {
    const data = await fetch("https://foodishhub.live/api/menu?id=693409");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        <li>Chole Bhature</li>
        <li>Paneer Pakode</li>
        <li>Soyabean Chap</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
