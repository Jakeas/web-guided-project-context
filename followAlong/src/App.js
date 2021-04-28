import React, { createContext, useState } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";


  // step 1 create context
  export const FamilyContext = createContext();

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  

  // step 2 provide the context, so that all the child components can across the shared context

  return (
    <div className="App">
      <FamilyContext.Provider values={activeFamily}>
        <section className="header">
          <h1>Family Trees</h1>
          {families.map(d => (
            <button
              className={`family-button ${d.familyName ===
                activeFamily.familyName && "active"}`}
              key={d.familyName}
              onClick={() => setActiveFamily(d)}
            >
              {d.familyName}
            </button>
          ))}
        </section>
        {activeFamily && <FamilyTree family={activeFamily} />}
      </FamilyContext.Provider>
    </div>
  );
}