import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
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
