import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load 'contact us' component",()=>{
render(<Contact/>);

//Querying
const heading=screen.getByRole('heading');
//Assertion
expect(heading).toBeInTheDocument();

});

test("Should load 'button' inside component",()=>{
    render(<Contact/>);
    
    //Querying

    // const button=screen.getByRole('button');
    //more ways to find button
    //const button= screen.getByText('Submit');
    const button= screen.getByRole('button');
    //Assertion
    expect(button).toBeInTheDocument();
    
    });


    test("Should load 'input' name inside component",()=>{
render(<Contact/>);

//Querying
const inputName=screen.getByPlaceholderText('name');
//Assertion
expect(inputName).toBeInTheDocument();

});

test("should load 2 input boxes on the Contact component",()=>{
  render(<Contact/>);
  const inputBoxes=screen.getAllByRole('textbox');
  console.log(inputBoxes);
  //Assertion

  expect(inputBoxes.length).toBe(2);
  //expect(inputBoxes.length).not.toBe(3);
})