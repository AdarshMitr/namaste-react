# Namaste React webseries 🚀

## Episode-7 (Finding The Path)
  
  * Creating Routes
    - ```npm i react-router-dom ↵``` 
    - Create 'About Us' page
    - Create Routing Configuration:
      -  in 'App.js' 
        - ```import { createBrowserRouter } from "react-router-dom";```
            - ```const appRouter = createBrowserRouter([
                { path: "/", element: <AppLayout />
                errorElement: <Error/> },
                { path: "/about", element: <About /> },
                { path: "/contact", element: <Contact/> },
                ]);```

        -   Now, ```import { RouterProvider } from "react-router-dom";```
        -   Provide this configuration as: ```root.render(<RouterProvider router={appRouter} />);```
  
  Now Routes start working 😊

    -   Creating our own error page:
        - In 'Error.js', ```import { useRouteError } from 'react-router-dom';```
        - use ```const err=useRouteError();``` inside the Component.
        - use ```{err.status}``` and ```{err.statusText}``` in return.
        - add ```errorElement: <Error />``` in the "<AppLayout/> path in "appRouter".
  
  ------------------------------------------------------------------------------------------------------------------------
  