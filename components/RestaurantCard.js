
import { CDN_URL } from './../utils/constants';

const RestaurantCard = (props) => {
    const {resData } = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,} = resData?.info //optional chaining
    return (
      <div className="res-card m-4 p-4 w-[230px] bg-gray-100 hover:bg-gray-200 rounded-lg" >
        <img
          className="res-logo rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className='font-bold py-2 text-lg'>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>Delivery Time:{resData.info.sla.deliveryTime} minutes</h4> */}
      </div>
    )
  };

  export default RestaurantCard;