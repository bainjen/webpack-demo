import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

import "./App.scss";

// This is the entry point to the application
const App = () => {
  console.log(
    "If we save this file change and run yarn or npm start again, we should be able to find this message in the console. This shows that webpack has spit out a new bundle ZIPPITYZAP!"
  );
  console.log(
    "Likewise, inspecting main.js in the browser will reveal the code bundle. We can also search this file to see how this code exists in the minified version"
  );

  console.log("Change is good");
  console.log("Especially when it comes in the form of loonies and toonies");
  console.log("pizza time!!");

  const links = [
    { path: "/", name: "home" },
    { path: "/buttons", name: "buttons" },
  ];

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(Header, { links }),
    React.createElement(Content, null)
  );
};
export default App;
