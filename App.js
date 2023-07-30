import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX 🚀
  </h1>
);

//Nesting component one inside other:

const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
