import React from "react";
import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./../components/About";
import Contact from "./../components/Contact";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
import { useState,useEffect } from "react";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


//lazy loading
const Grocery=lazy(()=>import("../components/Grocery"));

const AppLayout = () => {

  const [userName,setUserName]=useState();

  //authentication
useEffect(()=>{
  //Make an api call and send username and password
  const data={
    name:'Adarsh Kumar Patel'
  };
  setUserName(data.name);
},[]);

  return (
    <Provider store={appStore}>
       <UserContext.Provider value={{loggedinUser:userName,setUserName}}>
 <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
   
   
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
