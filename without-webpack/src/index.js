// This code is telling React to insert React code into the element with the ID 'entryPointID'
const container = document.getElementById("entryPointID");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
