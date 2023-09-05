const RestaurantCategory=({data})=>{
    console.log(data)
    return <div>
        {/* Header */}

       <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between"><span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span> 
        <span  >&#8595;</span>
       </div>
        {/* Accordion Body */}
    </div>
}

export default RestaurantCategory; 