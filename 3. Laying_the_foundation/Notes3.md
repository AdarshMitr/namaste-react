# Namaste React webseries 🚀

## Episode-3 (Laying the foundation)

*  <code> npx parcel index.html ↵ </code>
  - A development build will be created and a server start running.

*   create a "script" in "package.json" as:
<code>
"scripts": {
    "start":"parcel index.html",
    "build":"parcel build index.html",
    "test": "jest"
  },
</code>

*   Now <code> npm run start ↵ </code> or <code> npm start ↵ </code> will call the script <code> npx parcel index.html ↵</code> and start development server. 
*   Similarly, <code> npm run build ↵ </code> will call the script <code> npx parcel build index.html ↵ </code> and start production ready build for our project.

--------------------------------------------------------------------------------------------------------------------------

*   Now, start writing "App.js" from scratch. So, delete previous code.
  - import React and ReactDom from 'react' and 'react-dom/client' respectively.
  - create a new React element
    - <code>
      const heading= React.createElement("h1",{id:"heading"},"Namaste React");
      const root=ReactDOM.createRoot(document.getElementById('root'));
      root.render(heading);

      console.log(heading); // return object in console
    </code>

--------------------------------------------------------------------------------------------------------------------------

*   create React Element using JSX syntax

    - 
        <code>
      const jsxHeading=<h1 id="heading">Namaste React using JSX</h1>
      root.render(jsxHeading);
        </code>
    - It is much cleaner than 'React.createElement();' syntax. It is more readable and easy to write.
    - The result will be the same as earlier if we use JSX syntax.
    - In JSX, to add a class we have to write ".className" in camel case.There are some other attributes which also use  camel casing.
    - To write multi-line code, we must wrap it in small brackets.
      - e.g. <code>
              (<h1 className="head">
              Namaste React by JSX
              </h1>)
              </code>

--------------------------------------------------------------------------------------------------------------------------

      React Component: In react, components can be created by two ways.
        1. Class Based Components (older way to create)
        2. Function Based Components (newer way to create)

*  Create React Component (Functional Component)
    - functions that returns JSX element are React components.
    - Name start with capital letter
    - e.g. <code>
              const HeadingComponent=()=>{
              return <h1>Namaste React functional component</h1>;
              }
            </code>
    -  We can skip return and curly braces if we have just one line of code to return as:
            <code>
              const HeadingComponent=()=><h1>Namaste React functional component</h1>
            </code>
    -  We can write mulit-line function code enclosed with small bracket as:
            <code>
            const HeadingComponent=()=>(<h1>Namaste React functional component</h1>); 
            </code>       

    -   Functional Components are rendere like this:
          - <code>
          root.render(<HeadingComponent/>);
            </code>

    -   Nesting component one inside other.
        - This is component composition.

    -   We can write any javascript expression inside JSX using {}.
