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
*   Similarly, <code> npm run build </code> will call the script <code> npx parcel build index.html </code> and start   production ready build for our project.

--------------------------------------------------------------------------------------------------------------------------
