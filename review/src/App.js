import React, { createContext, useState, useContext } from "react";
import brad from "./data";

// STEP 1 - create a context obj
const TitleContext = createContext();
console.log(TitleContext);

const App = () => {
  const [title, setTitle] = useState("Hello World");
  const [person, setPerson] = useState(brad);

  // STEP 2 - Provide data to the component tree with
  // the Provider component
  // { title, person } === { title: title, person: person }
  return (
    <TitleContext.Provider value={{ title, person, setPerson }}>
      <Child />
    </TitleContext.Provider>
  );
};

export default App;

// intermediary component (Dustin-ism)
const Child = () => {
  return <Grandchild />;
};

const Grandchild = () => {
  // STEP 3 - consume data in a nested component from the
  // context Provider
  const { title } = useContext(TitleContext);

  return (
    <>
      <h1>{title}</h1>
      <Name />
      {/* <Address /> */}
      {/* <ProfilePic /> */}
    </>
  );
};

const Name = () => {
  // consume and display Brad's name data from context
  const { person, setPerson } = useContext(TitleContext);
  return (
    <>
      <h3>
        {person.name.last}, {person.name.first}
      </h3>
      <p>Age: {person.dob.age}</p>
      <button>Happy Birthday!</button>
    </>
  );
};
