import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";

import "../App.scss";

// This is the entry point to the application
const SecondApp = () => {
  console.log("Reporting from SecondApp.js");

  const links = [
    { path: "/", name: "home" },
    { path: "/outerspace", name: "outerspace" },
  ];

  return (
    <>
      <Header title={"A very friendly page"} links={links}></Header>
      <div>hello</div>
      <div>greetings</div>
      <div>I hope you have a splendid day!</div>
      <div>Just dandy!</div>
    </>
  );
};
export default SecondApp;
