import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const heading= React.createElement("h1",{id:"heading"},"Namaste React");
const root=ReactDOM.createRoot(document.getElementById('root'));

// React Element using JSX

const jsxHeading=<h1 id="heading">Namaste React using JSX</h1>
root.render(jsxHeading);
//root.render(heading);

console.log(heading);
console.log(jsxHeading);



