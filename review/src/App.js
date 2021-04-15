import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("Hello World");
  return <Child title={title} />;
};

export default App;

const Child = (props) => {
  return <Grandchild title={props.title} />;
};

const Grandchild = (props) => {
  return <h1>{props.title}</h1>;
};
