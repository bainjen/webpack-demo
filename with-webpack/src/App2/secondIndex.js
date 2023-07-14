import React from "react";
import ReactDOM from "react-dom/client";
import SecondApp from "./secondApp";

const container = document.getElementById("secondEntryPointID");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(SecondApp));
