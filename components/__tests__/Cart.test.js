import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "./../RestaurantMenu";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "./../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);
it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Burger and Wrap. (16)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(screen.getByText('Cart is Empty.Add items to the cart.')).toBeInTheDocument();
});
