import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./Logo.png";

// Creating Food Ordering App

const Header = () => {
  return (
    <div div className="header">
      <div className="logo-container">
        <img id="logo" src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resData } = props;
  
  return (
    <div className="res-card" style={{ backgroundColor: "white" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.restaurants[0].info.cloudinaryImageId}
      />
      <h3>{resData.restaurants[0].info.name}</h3>
      <h4>{resData.restaurants[0].info.cuisines.join(', ')}</h4>
      <h4>{resData.restaurants[0].info.avgRating} stars</h4>
      <h4>{resData.restaurants[0].info.costForTwo}</h4>
      <h4>{resData.restaurants[0].info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
// Restaurant Data

const resObj = {
  restaurants: [
    {
      info: {
        id: "651214",
        name: "McDonald's",
        cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
        locality: "Huda Market",
        areaName: "Sector 77",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "651214",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4500,
        },
        parentId: "630",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-huda-market-sector-77-gurgaon-651214",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "693409",
        name: "Punjabi Angithi",
        cloudinaryImageId: "ccbe9cf65c3f4db1762f8c90112e3ccc",
        locality: "Sector-39",
        areaName: "Huda City",
        costForTwo: "₹400 for two",
        cuisines: ["North Indian", "Punjabi", "Tandoor", "Chinese"],
        avgRating: 4.1,
        veg: true,
        feeDetails: {
          restaurantId: "693409",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4500,
        },
        parentId: "4464",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/punjabi-angithi-sector-39-huda-city-gurgaon-693409",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "443494",
        name: "EatFit",
        cloudinaryImageId: "ee4f041cd8611dccc19f4267783ab5ea",
        locality: "ISLAMPUR",
        areaName: "Sohna Road",
        costForTwo: "₹250 for two",
        cuisines: [
          "Chinese",
          "Healthy Food",
          "Tandoor",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani",
        ],
        avgRating: 4,
        feeDetails: {
          restaurantId: "443494",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4500,
        },
        parentId: "76139",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-04 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/eatfit-islampur-sohna-road-gurgaon-443494",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "154653",
        name: "Jagdish Vaishno Dhaba",
        cloudinaryImageId: "seyuhw8itjtlmvm7wscy",
        locality: "Sector 4",
        areaName: "Old Railway Road",
        costForTwo: "₹250 for two",
        cuisines: ["Indian", "North Indian", "Biryani", "Tandoor", "Punjabi"],
        avgRating: 4.1,
        veg: true,
        feeDetails: {
          restaurantId: "154653",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3700,
        },
        parentId: "15300",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹120",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/jagdish-vaishno-dhaba-sector-4-old-railway-road-gurgaon-154653",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "258155",
        name: "Great Indian Khichdi by EatFit",
        cloudinaryImageId: "89741ecb1291788f128600a5da5f18b4",
        locality: "Islampur Road",
        areaName: "Sector 33",
        costForTwo: "₹200 for two",
        cuisines: [
          "Home Food",
          "Indian",
          "North Indian",
          "Healthy Food",
          "Snacks",
          "Desserts",
          "Rajasthani",
          "South Indian",
          "Maharashtrian",
          "Sweets",
        ],
        avgRating: 4.4,
        veg: true,
        feeDetails: {
          restaurantId: "258155",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4500,
        },
        parentId: "319582",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-04 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-islampur-road-sector-33-gurgaon-258155",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "125878",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Old Railway Road",
        areaName: "Sector 4",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "125878",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3700,
        },
        parentId: "166",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-04 03:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "EVERY ITEM",
          subHeader: "@ ₹129",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-old-railway-road-sector-4-gurgaon-125878",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "676065",
        name: "Civil Lines Wala",
        cloudinaryImageId: "3fdf3d7e951ea446d5ffa2e098f39d10",
        locality: "Judiciary Complex",
        areaName: "Old Judicial Complex",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Fast Food"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "676065",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3700,
        },
        parentId: "63552",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1,
          serviceability: "SERVICEABLE",
          slaString: "17 mins",
          lastMileTravelString: "1.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 17:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/civil-lines-wala-judiciary-complex-old-judicial-complex-gurgaon-676065",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "39292",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Huda Market",
        areaName: "Sector 14",
        costForTwo: "₹450 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "39292",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4500,
        },
        parentId: "547",
        avgRatingString: "3.8",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-04 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "EVERY ITEM",
          subHeader: "@ ₹179",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-huda-market-sector-14-gurgaon-39292",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "612059",
        name: "Domino's Pizza",
        cloudinaryImageId: "uxmdoori46ztxe0pfpwf",
        locality: "Sadar Bazar",
        areaName: "Sector 11",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "612059",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3700,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3700,
        },
        parentId: "2456",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-03 22:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹999",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-3ec3f358-eef4-4c52-9f24-22c20eea2a80",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-sadar-bazar-sector-11-gurgaon-612059",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
