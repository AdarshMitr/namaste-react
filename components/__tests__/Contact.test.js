import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


//describe ("",()=>{}) is a block used to group similar kind of test cases. We can create as many blocks as we need and even nest them for our convenience.
// We can also write 'it' in place of 'test'.



describe("Contact Us page test cases",()=>{

beforeAll(()=>{
  console.log("before all");
})

beforeEach(()=>{
  console.log('before each')
})

afterAll(()=>{
  console.log('after all');
})

afterEach(()=>{
  console.log('after each')
})
  it("Should load 'contact us' component",()=>{
    render(<Contact/>);
    
    //Querying
    const heading=screen.getByRole('heading');
    //Assertion
    expect(heading).toBeInTheDocument();
    
    });
    
    it("Should load 'button' inside component",()=>{
        render(<Contact/>);
        
        //Querying
    
        // const button=screen.getByRole('button');
        //more ways to find button
        //const button= screen.getByText('Submit');
        const button= screen.getByRole('button');
        //Assertion
        expect(button).toBeInTheDocument();
        
        });
    
    
        it("Should load 'input' name inside component",()=>{
    render(<Contact/>);
    
    //Querying
    const inputName=screen.getByPlaceholderText('name');
    //Assertion
    expect(inputName).toBeInTheDocument();
    
    });
    
    it("should load 2 input boxes on the Contact component",()=>{
      render(<Contact/>);
      const inputBoxes=screen.getAllByRole('textbox');
      //console.log(inputBoxes);
      //Assertion
    
      expect(inputBoxes.length).toBe(2);
      //expect(inputBoxes.length).not.toBe(3);
    })
});


