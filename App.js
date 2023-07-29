import React from "react";
import ReactDOM from "react-dom/client";



// const heading= React.createElement('h1',{id:'heading'},'Hello World from React');

//creating nested element and sibling element using React.createElement();

const parent= React.createElement(
    'div',{id:'parent'},[React.createElement('div',{id:'child'}),
    [React.createElement('h1',{id:'heading'},'Hello World from h1'),
    React.createElement('h2',{id:'heading'},'Hello World from h2')],


    React.createElement('div',{id:'child2'}),
    [React.createElement('h1',{id:'heading'},'Hello World from h1'),
    React.createElement('h2',{id:'heading'},'Hello World from h2')]
]
);


console.log(parent);
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

