import React, { createContext, useState } from "react";

// STEP 1 - create a context obj
const TitleContext = createContext();
console.log(TitleContext);

const App = () => {
  const [title, setTitle] = useState("Hello World");
  return (
    <TitleContext.Provider>
      <Child title={title} />
    </TitleContext.Provider>
  );
};

export default App;

// intermediary component (Dustin-ism)
const Child = (props) => {
  return <Grandchild title={props.title} />;
};

const Grandchild = (props) => {
  return <h1>{props.title}</h1>;
};
