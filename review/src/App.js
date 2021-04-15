import React from "react";

const App = () => {
  return <Child />;
};

export default App;

const Child = () => {
  return <Grandchild />;
};

const Grandchild = () => {
  return <h1>Hello World</h1>;
};
