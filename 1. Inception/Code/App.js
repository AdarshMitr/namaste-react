// const heading= React.createElement('h1',{id:'heading'},'Hello World from React');

//creating nested element and sibling element using React.createElement();

const heading= React.createElement(
    'div',{id:'parent'},[React.createElement('div',{id:'child'}),
    [React.createElement('h1',{id:'heading'},'Hello World from h1'),
    React.createElement('h2',{id:'heading'},'Hello World from h2')],


    React.createElement('div',{id:'child2'}),
    [React.createElement('h1',{id:'heading'},'Hello World from h1'),
    React.createElement('h2',{id:'heading'},'Hello World from h2')]
]
);



const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

