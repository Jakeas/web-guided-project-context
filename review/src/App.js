import React, { createContext, useState } from "react";

// STEP 1 - create a context obj
createContext();

const App = () => {
  const [title, setTitle] = useState("Hello World");
  return <Child title={title} />;
};

export default App;

// intermediary component (Dustin-ism)
const Child = (props) => {
  return <Grandchild title={props.title} />;
};

const Grandchild = (props) => {
  return <h1>{props.title}</h1>;
};
