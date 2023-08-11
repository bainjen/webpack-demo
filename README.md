# About

- I created this playground to serve as a learning tool with the goal of better understanding the role that webpack plays in a modern development, specifically using React.
- In order to complete this goal, I made three mini applications:
  1.  A React app, without webpack, to identify and understand some of the problems webpack solves (in the without-webpack directory)
  2.  A React app using webpack, with the purpose of learning about the role webpack plays and the various configuration options (in the with-webpack directory)
  3.  A create-react-app for the specific purpose of seeing what happens when a CRA gets ejected. (in the with-cra directory)

### Why this project?

- In order to get React up and running quickly in a pre-existing application, we set up shop using Create React App. https://create-react-app.dev/
- CRA sets up the dev environment for you to make the entry point into using React easy.
- Under the hood, CRA uses WEBPACK!!! and BABEL!!! CRA manages that for us. However, we don't have access to those configurations.
- In order to gain access, we would need to eject the React app and manage our own webpack configurations.
- Now that our React code base is growing, it makes sense for us to gain more control over how React gets bundled.
- This way we can have multiple entry points for different areas where React is used in the application and we can stop loading unnecessary code.

# Webpack

### What is webpack?

Webpack is an asset bundler. It looks at all of our scripts and bundles them together in the correct order.

https://webpack.js.org/
https://webpack.js.org/concepts/

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

### Why webpack?

Without webpack, we have to be responsible for loading everything in the correct order. That means keeping track of a dependency graph, which can quickly get complex.

For example, in side of the index.html in the `without-webpack` directory, there are script tags. The React CDN is at the top.
The Script tags at the bottom bring in all of the code that will get rendered. BUT! They must be in a certain order.
For example, index.js has a dependency on App.js -- and App.js has a dependency on Header and Content. Since HTML is read line by line by the browser to create the DOM, it must first load in the React scripts, then the Header, then the Content, then the App, then the index.
This is a simple application, with very few files, but imagine a robust codebase.
Keeping track of the dependency graph manually to make sure everything gets loaded in the correct order is time consuming and frustrating.
Webpack takes all of the script modules and builds out a dependency graph for us, then bundles the scripts, which then get fed into the index, so we don't have to keep track.

Webpack can manage other assets, too! For example, webpack can bundle CSS, too.

Webpack minifies code and puts it into compact bundles of our specifications, which can be served up to the browser.

### Babel

Babel transpiles or converts code into a single version of JS.
Babel is separate from webpack, but it is used with webpack to solve the problem of translating the latest and greatest JS (e.g.ES6) into an older version of JS (ES5).

The translated (or transpiled) code is what gets written in the bundle that webpack spits out, so that this code can reach a wider audience by being more compatible with browsers.

Since Webpack keeps track of all of our modules, it allows us to write code in a very modular way, using the most modern JS syntax. Babel is one tool that webpack uses to create seamless bundles.

Beyond using Javascript, when we write React, we use JSX, or with TypeScript, TSX. It looks similar to HTML, but it's not HTML.
Therefore, the browser does not understand it.

In the `without-webpack` directory, we cannot write JSX/TSX in React because there is nothing that will transpile this for the browser.
If we try to run the code using JSX, it will error out.
Without tools to transpile the code, it must be written in a way that the browser can understand.

### Things I learned by setting up a webpack configuration file

- The webpack configuration allows you to define a custom entry point -- or entry points! -- using the 'entry' key. If you don't define it, the assumed entry point is src/index.js
- Running the webpack executable will automatically generate a `dist` directory which contains the minified code bundle. This default is also customizable via the 'output' key of the configuration.
- Webpack
