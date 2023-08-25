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
- Furthermore, CRA has been deprecated. Womp, womp!
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

Of course, there are alternative solutions to webpack, and that's great! But since Create React App ejects a webpack configuration, webpack is the focus of this exercise!

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
- To make multiple entry points, the 'entry' key of the configuration should get set to an object rather than to a string value for the single entry path. It looks something like this:

```json
 entry: {
    app1: "./src/App1/newIndex.js",
    app2: "./src/App2/secondIndex.js",
    app3: "./src/App3/thirdIndex.js",
    vendor: "./src/vendor.js",
  },
```

The above example will spit out four, separate bundles of code, one for each entry point specified.

- Splitting code is handy for optimization because smaller code bundles can be loaded on demand, or in parallel, as needed. This can reduce load time, by allowing us to load only the code we need, in any given situation.
- Running the webpack executable will automatically generate a `dist` directory which contains the minified code bundle. This default is also customizable via the 'output' key of the configuration.
- Webpack can specify a mode of 'development' or 'production'. Development mode is more developer friendly because it's more verbose, whereas the production mode minifies bundles for optimization. When using development mode, it is most helpful to also specify `devtool: false` in the webpack.config.
- The output of webpack can be hashed using `[contenthash]` which provides cache busting. A new hash will get output any time the content is different. If the content doesn't change, the hash will remain the same. If the code changes, the new hash will force the browser to make a new request. This prevents the browser from serving an outdated file.
- webpack-dev-server is a package that can be installed to facilitate hot reloading during development. It will generate the bundle(s) and and the index.html. It can be added to the start script in the package.json as `server`. Mine looks like this: `"start": "webpack-dev-server --config dev.config.js --open"`
- Webpack supports having multiple configurations for different uses. A common separation would be to specify different configurations for production and development. These configurations might share some common configurations, but would diverge in matters such as code minification.

#### Useful plugins for the webpack config

- There are all kinds of plugins, depending on your needs... https://webpack.js.org/plugins/
- `clean-webpack-plugin`: Removes bloat by deleting old files and only keeping the most updated assets.
- `html-webpack-plugin`: This will automate the process of updating the index.html template every time the webpack script is run. If the hash changes on the bundle name, the index.html will get updated.
- `webpack-merge`: This helps with having multiple webpack configurations because you can setup basic, shared configurations and merge those common configurations into configurations for specific use-cases.
- `mini-css-extract-plugin`: This puts all of the styles into the head for a smother UI loading experience. It's most useful in production configurations because it will give the user a better experience, but can slow things down in dev, so is not necessary there.
- `terser-webpack-plugin`: This is the default minimizer for JS in webpack and it is used automatically, but gets overwritten by the use of the OptimizeCssAssetsPlugin, so it must be manually imported in some cases.

#### Useful loaders for the webpack config

- There are all kinds of loaders, depending on your needs... https://webpack.js.org/loaders/
- `css-loader`: Converts the CSS into a valid CSS module that gets read into the bundle, but does not handle injecting it into the DOM
- `style-loader`: Handles injecting the CSS into the DOM so they get applied to the UI
- There are also loaders specific to css pre-processors, for example, `sass-loader`, which can be imported based on need.
- `babel-loader`: Allows modern JS to be read into the browser. The babel loader can be configured with various presets to suit each code base's needs, for example to use React and Typescript
