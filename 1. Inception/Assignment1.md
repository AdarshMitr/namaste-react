# Assignment-1

1. What is Emmet?
2. What is the difference between a Library and Framework?
3. What is CDN? Why do we use it?
4. Why is React known as React?
5. What is cross-origin in script tag?
6. What is the difference between React and ReactDOM?
7. What is the difference between react.development.js and react.production.js files via CDN?
8. What are async and defer?

--------------------------------------------------------------------------------------------------------------------------
# Solution

1. What is Emmet?
   
   Emmet is a set of plug-ins(add-ons) to text editors that allow us to use dynamic snippets for fast coding. It provides CSS selector like acronyms to generate complex code instantly. It has significantly improved workflow of HTML, CSS, Javascript and other programming language.
    e.g. 1. To create a 'class' in html, we only need to type ".className" and hit ↵. We get "<div class='className'></div>" in no time. 
         1. To create html boilerplate code, we need to type:```html:5 ↵ ``` or ```! ↵``` and boilerplate code will be generated instantly viz.
        
        ``` 
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
        ```


2. What is the difference between a Library and Framework?

    
| **Library**                                                                                                                           	| **Framework**                                                                                                                                           	|
|---------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------	|
| A set of pre-written codes that are re-usable to perform specific tasks quickly .                                                     	| A framework is a  structured set of pre-written codes that provides a foundation to build applications.It can be used to perform a wide range of tasks. 	|
| Flow of application is controlled by us and we decide how to use a function and when to call it.                                      	| Framework enforces inversion of control.It controls the flow of application.                                                                            	|
| Libraries are more flexible as we are allowed to use specific parts when needed.                                                      	| Frameworks are less flexible as they impose a specific structure and architecture.                                                                      	|
| Library have a lower learning curve as we can use it for specific task without the need to understand whole application architecture. 	| Framework has a steeper learning curve as we need to work within its constraints.                                                                       	|
| Example: React Js is a javascript library which is used to build User Interfaces and HTTP requests.                                   	| Example: Angular Js is a javascript framework used to build web applications.                                                                           	|

