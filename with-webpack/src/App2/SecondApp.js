import React from "react";
import Header from "../components/Header";

import "./App2.scss";
import "../App.scss";

// This is the entry point to the application
const SecondApp = () => {
  console.log("Reporting from SecondApp.js");

  const links = [
    { path: "/", name: "home" },
    { path: "/outerspace", name: "outerspace" },
  ];

  return (
    <div className='app2--container'>
      <Header title={"A very friendly page"} links={links}></Header>
      <div className='app2'>hello</div>
      <div>greetings</div>
      <div>I hope you have a splendid day!</div>
      <div>Just dandy!</div>
    </div>
  );
};
export default SecondApp;
