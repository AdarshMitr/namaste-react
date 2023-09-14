
import { useContext } from 'react';
import { CDN_URL } from './../utils/constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const {resData } = props;

    //console.log(resData);
    const{loggedinUser}=useContext(UserContext);
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime} = resData?.info //optional chaining
    return (
      <div data-testid="resCard" className="res-card m-4 p-4 w-[230px] bg-gray-100 hover:bg-gray-200 rounded-lg md:flex-row items-center" >
        <img
          className="res-logo rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className='font-bold py-2 text-lg'>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery Time: {resData.info.sla.deliveryTime} minutes</h4>
        <h4>User : {loggedinUser}</h4>
      </div>
    )
  };

  export default RestaurantCard;