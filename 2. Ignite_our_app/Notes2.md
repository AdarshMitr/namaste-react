# Namaste React webseries 🚀


## Episode-2 (Igniting Our App)

*  use NPM: NPM manages packages but it is not known as node package manager.
    - npm init ↵
    - A new file "package.json" will be created automatically.It is a configuration for NPM.

* Bundler: A bundler is most important package in our project.It bundles our app so that it will be pushed to production.
    We are using "parcel" as a bundler for our react app.
    - npm install -D parcel ↵
    - A new file "package-lock.json" will be created.
    - Also, "node_modules" folder will also be created automatically.It contains actual data of dependencies.

*   Creating a ".gitignore" file and put "node_modules" inside it.

--------------------------------------------------------------------------------------------------------------------------

*   Building an app with parcel
    - npx parcel index.html ↵
    - It creates a server for us with a message in terminal "Server running at http://localhost:1234".

    CDN links are not a preferred way to fetch React in projects as we have to keep changing urls or CDN on every update.
    We will install react as a package.
    - npm install react ↵
    - React will be installed and will be shown in package file and installed in node_modules.
    Also install react-dom
    - npm install react-dom ↵ or npm i react-dom
    - react-dom dependency will be added to our project.
    We no longer need CDN links for react. So, remove CDN links for react.

--------------------------------------------------------------------------------------------------------------------------

*   Now, in file "App.js", type:
    - import React from "react";
    - import ReactDom from "react-dom/client";
    - add <code><script type='module' src='./App.js'> </script> </code>
    parcel refreshes and updates the app automatically.

    React is not the only thing that makes app fast. Bundler(here parcel) also plays this role using its helping libraries.

--------------------------------------------------------------
*  build for development
    - npx parcel build index.html ↵
    we will get an error. Remove 'main:"App.js" ' from "package.json" , then
    - npx parcel build index.html ↵

    It will build a production ready development build for our app in a separate folder namely 'dist'.
    - put 'dist' folder and '.parcel-cache' in '.gitignore' file as:  /dist </br>
             .parcel-cache

--------------------------------------------------------------
*   Make app compatible with older browsers
    - in "package.json", add 'brosersList" as for example:
    <code>


    "browsersList" :[
       "last 2 chrome versions"
    ] 
</code>