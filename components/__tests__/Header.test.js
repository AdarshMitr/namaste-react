import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Header from "./../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from './../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";

it("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  );

 // const loginButton= screen.getByRole("button");

 //For a more specific button
 const loginButton= screen.getByRole('button',{name:'Login'});


//   const loginButton=screen.getByText("Login")

  expect(loginButton).toBeInTheDocument();
});


it("Should load Header component with a Cart items (0)", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
      
    );
  
  // const cartItems= screen.getByText("Cart-(1 items)");

  // If we want to find if Cart exists or not in Header, we can pass regEx value as /Cart/.

  const cartItems= screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });


  it("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
      
    );
  
  

  const loginbutton= screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginbutton);

  const logoutbutton= screen.getByRole("button",{name:"LogOut"});
    expect(logoutbutton).toBeInTheDocument();
  });
