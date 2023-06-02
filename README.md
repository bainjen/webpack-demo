# About

- This is a mini project I'm working on to understand the role that webpack plays in a modern development, specifically using React.
- While this project is meant for personal learning, the best way to follow my thought process is to read through the commit history.
- Be forewarned: commits were not proofread and some of the early commits are likely a chaotic as I was attempting to figure out how to set this up.

# Webpack

### What is webpack?

Webpack is an asset bundler. It looks at all of our scripts and bundles them together in the correct order.

https://webpack.js.org/
https://webpack.js.org/concepts/

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

### Why webpack?

### Notes to organize

When we write React, we use JSX, or with TypeScript, TSX. It looks similar to HTML, but it's not HTML. Therefore, the browser does not understand it.

In the `withoutWebpack` directory, we cannot write JSX/TSX in React because there is nothing that will transpile this for the browser. If we try to run the code using JSX, it will error out. Without tools to transpile the code, it must be written in a way that the browser can understand.

App.js is the top level of the application.
Index.js renders the App.js and is the entry point.
Inside of the index.html, there are script tags. At the top, we have the React CDNs.
The Script tags at the bottom bring in all of the code that will get rendered. BUT! They must be in a certain order.
Since index.js has a dependency on App.js and App.js has a dependency on Header and Content. Since HTML is read line by line by the browser to create the DOM, it needs to load in first the React scripts, then the Header, then the Content, then the App, then the index. As developers, we have to think about this dependency graph and keep track of it.

Webpack allows us to write code in a very modular way, using modern JS syntax (ES5, ES6), which the browser doesn't understand.
Webpack takes all of the script modules used builds out a dependency graph for us, and bundles the scripts, so we don't have to keep track.

With webpack it keeps track of the dependency graph and spits out a script that can be fed into the index.

### Babel

Babel transpiles or converts code into a single version of JS so more browsers can understand it
In this case, modern JS (ES6) is being converted to an older version of JS (ES5)
The translated code is what gets written in the bundle so that this code can reach a wider audience by being more compatible with browsers

### Current Challenge

- In order to get React up and running quickly in a pre-existing application, we set up shop using Create React App. https://create-react-app.dev/
- CRA sets up the dev environment for you to make the entry point into using React easy.
- Under the hood, CRA uses WEBPACK!!! and BABEL!!! CRA manages that for us. However, we don't have access to those configurations.
- In order to gain access, we would need to eject the React app and manage our own webpack configurations.
- Now that our React code base is growing, it makes sense for us to gain more control over how React gets bundled.
- This way we can have multiple entry points for different areas where React is used in the application
