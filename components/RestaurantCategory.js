import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //console.log(data);


  const [showItems,setShowItems]=useState(false);
  const handleClick=()=>{
    setShowItems(!showItems); //toggle feature
  }
  return (
    <div>
      {/* Header */}

      <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>&#8595;</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
