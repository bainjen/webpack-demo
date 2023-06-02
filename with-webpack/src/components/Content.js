import React from "react";

const Content = () => {
  const [counter, setCounter] = React.useState(0);

  return React.createElement(
    "div",
    {
      className: "counter",
    },
    React.createElement("p", null, `I would like ${counter} donuts.`),
    React.createElement(
      "button",
      {
        onClick: () => setCounter(counter + 1),
      },
      "Another, please"
    )
  );
};
