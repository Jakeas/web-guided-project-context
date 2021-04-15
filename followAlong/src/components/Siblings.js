import React, { useContext } from "react";
import { FamilyContext } from "../contexts/index";

const Siblings = () => {
  // const family = useContext(FamilyContext);
  return (
    <FamilyContext.Consumer>
      {() => (
        <section className="parents">
          {family.siblings.map((p) => (
            <div className="person" key={p.name}>
              <img width="150" src={p.img} alt={p.name} />
              <strong>{p.name}</strong>
            </div>
          ))}
        </section>
      )}
    </FamilyContext.Consumer>
  );
};

export default Siblings;
