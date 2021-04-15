import React, { createContext, useState } from "react";

// STEP 1 - create a context obj
const TitleContext = createContext();
console.log(TitleContext);

const App = () => {
  const [title, setTitle] = useState("Hello World");

  // STEP 2 - Provide data to the component tree with
  // the Provider component
  return (
    <TitleContext.Provider value={title}>
      <Child />
    </TitleContext.Provider>
  );
};

export default App;

// intermediary component (Dustin-ism)
const Child = (props) => {
  return <Grandchild />;
};

const Grandchild = (props) => {
  // STEP 3 - consume data in a nested component from the
  // context Provider
  return <h1>{props.title}</h1>;
};
