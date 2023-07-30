import React from "react";
import ReactDOM from "react-dom/client";




// React Element using JSX

const heading = <h1 id="heading" className="head">Namaste React using JSX</h1>;

//React  Functional Component

const HeadingComponent=()=>{
    return <h1>Namaste React functional component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
