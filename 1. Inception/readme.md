# Namaste React webseries (Episode-1) 🚀

     **----------Inception----------**



 1. Google Chrome Browser
 2. VS Code (IDE)


Things to do:

1.  A basic HTML program using emmet.
    html:5 ↵ or ! ↵
    It will generate an HTML boilerplate code.
    Then create a 'Hello World' program using html markups.

--------------------------------------------------------------------------------------------------------------------------

 2. Rewrite the same program using Javascript.
 
 3. Inject React into our project using CDN links from:
     https://legacy.reactjs.org/docs/cdn-links.html

--------------------------------------------------------------------------------------------------------------------------
 4. Again write a 'Hello World' program. Use "React.createElement()" and "ReactDom.createRoot()" this time.

 5. Now, create a separate file "App.js" and put whole react code into it. Also create a file "index.css" to put style    into it. Link both files to index.html.

--------------------------------------------------------------------------------------------------------------------------

6.  Now create nested elements and siblings using 'React.createElement'. 
    It is painful. That's why JSX is used to ease this.  

--------------------------------------------------------------------------------------------------------------------------
 Order of <script> files matters a lot. Improper sequence causes an error in loading the file. Place script file of CDN before 'App.js' file in sequence as 'react' must be loaded before executing the code.
 Always place 'App.js' file just before the closing </body> tag.

 When 'root.render();' executes, it will replace everything of the div having 'root' tag with react code.
 