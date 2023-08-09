# Namaste React webseries 🚀

## Episode-7 (Finding The Path)
  
  * Creating Routes
    - ```npm i react-router-dom ↵``` 
    - Create 'About Us' page
    - Create Routing Configuration:
      -  in 'App.js' 
        - ```import { createBrowserRouter } from "react-router-dom";```
            - ```const appRouter = createBrowserRouter([
                { path: "/", element: <AppLayout /> },
                { path: "/about", element: <About /> },
                { path: "/contact", element: <Contact/> },
                ]);```

        -   Now, ```import { RouterProvider } from "react-router-dom";```
        -   Provide this configuration as: ```root.render(<RouterProvider router={appRouter} />);```
  
  Now Routes start working 😊
