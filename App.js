import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="head">
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
      Namaste<h3>{500 + 499}</h3> times to React functional component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
