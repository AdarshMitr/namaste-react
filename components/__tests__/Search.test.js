import { fireEvent, render,screen } from "@testing-library/react";
import Body from './../Body';
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{return Promise.resolve(MOCK_DATA);}
    })
})
it('should search Res List for burger test input ',async ()=>{
    await act(async ()=>{
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    })
    
const cardsBeforeSearch=screen.getAllByTestId('resCard');

expect(cardsBeforeSearch.length).toBe(20);


     const searchBtn=screen.getByRole('button',{name:"Search"})

const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"burger"}});
     fireEvent.click(searchBtn);

   
    // //screen should load one card with "burger" as example
     const cardsAfterSearch= screen.getAllByTestId('resCard');

     expect(cardsAfterSearch.length).toBe(1);
});