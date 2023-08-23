import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7272832&lng=77.3370089&restaurantId=56478&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[0]?.card?.card?.info;
  const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")} - {costForTwoMessage} </h3>

      <h2>Menu</h2>

      <ul>
       
      {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100||item.card.info.defaultPrice/100}</li>)}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;
