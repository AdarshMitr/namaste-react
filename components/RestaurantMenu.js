import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7272832&lng=77.3370089&restaurantId=32128&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[0]?.card?.card?.info;
  const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")} - {costForTwoMessage} </h3>
      
      <ul>
      {itemCards.map(item=><li>{item.card.info.name}</li>)}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
