import React, {useState, createContext} from 'react';
import Child from './Child';
import data from './data'

// step 1 crete the context (just like a store)
export const FamilyContext = createContext()


const App = ()=> {
  const [person, setPerson] = useState('json jameson')
  // with useReducer
  // const [state, dispatch] = useReducer(familyReducer, "json jameson")
  // line 23 would be:
  // <Child dispatch={dispatch} />
  const addDate = () => {
    const now = new Date()
    setPerson('json jameson' + " " + now.getMinutes() + ":" + now.getSeconds())
  }

  return(
    <div className="app">
      <FamilyContext.Provider value={person}>
        <h1>Hello World</h1>
        <Child addDate={addDate}/>
        {/* <Child person={person}/> */}
      </FamilyContext.Provider>
    </div>    
  );
    
};

export default App;