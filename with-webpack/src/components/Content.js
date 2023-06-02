const Content = () => {
  const [counter, setCounter] = React.useState(0);

  // return(
  //   <div>
  //     <h1>:( :( :( </h1>
  //     <div>this will not work :(</div>
  //   </div>
  // )

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
