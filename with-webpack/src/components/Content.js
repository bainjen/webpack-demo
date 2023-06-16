import React from "react";

// const Content = () => {
//   const [counter, setCounter] = React.useState(0);

//   return React.createElement(
//     "div",
//     {
//       className: "counter",
//     },
//     React.createElement("p", null, `I would like ${counter} donuts.`),
//     React.createElement(
//       "button",
//       {
//         onClick: () => setCounter(counter + 1),
//       },
//       "Another, please"
//     )
//   );
// };

// export default Content;

const Content = () => {
  console.log("phoning in from JSX land");
  const [counter, setCounter] = React.useState(0);
  return (
    <div className='counter'>
      <p>I would like {counter} donuts.</p>
      <button onClick={() => setCounter(counter + 11)}>Another, please</button>
      <p>babel is neat! I'm transpiled!</p>
      <p className='sizzle'>reload like it's hot</p>
    </div>
  );
};

export default Content;
