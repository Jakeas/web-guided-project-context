import React from "react";

const App = () => {
  const [title, setTitle] = useState("Hello World");
  return <Child />;
};

export default App;

const Child = () => {
  return <Grandchild />;
};

const Grandchild = () => {
  return <h1></h1>;
};
