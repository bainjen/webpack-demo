import React from "react";
import ReactDOM from "react-dom/client";
import ThirdApp from "./ThirdApp";

const container = document.getElementById("thirdEntryPointID");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(ThirdApp));
