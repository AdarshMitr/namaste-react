import React from "react";
import ReactDOM from "react-dom/client";


const hello=<h4> 👋 Hello! from the universe.</h4>

 // injecting react element inside other react element 
const elem= <span>I am element</span>;

const Title = () => (
  <h1 id="heading" className="head">
    {elem} -
    Namaste React using JSX 🚀
    
  </h1>
);

//Nesting component one inside other:(Component composition)

const number = 5000;
const HeadingComponent = () => (
  <div id="container">
    {/* injecting js expression inside JSX */}

    <h2>{number}</h2>

    <Title />
    <h1 className="heading">
      Namaste {500 + 499} times to React functional component
    </h1>

    {/* injecting react element inside JSX */}
    {hello}

  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
