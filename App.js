import React from "react";
import ReactDOM from "react-dom/client";




// React Element using JSX

const heading = <h1 id="heading" className="head">Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);

//React  Functional Component

const HeadingComponent=()=>{
    return <h1>Namaste React functional component</h1>;
}

/*
//without using return and curly braces but using small bracket

const HeadingComponent2=()=>(
    <h1>Namaste React functional component 2</h1>
)
*/