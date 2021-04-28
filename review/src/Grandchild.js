import React, { useContext } from 'react'
import { FamilyContext } from "./App"

// CLASS COMPONENT = NO HOOKS

class Grandchild extends React.Component {

  render(){
    return (
      <FamilyContext.Consumer>
        {value => (
        <div className="grandchild">
          <h1>grandchild</h1>
          <p>{person}</p>
          <button onClick={this.props.addDate}>Update
        </button>
        </div>)}
      </FamilyContext.Consumer>  
    ) 
  } 
}

// with useReducer, instead of calling a setter function directly, we'd dispatch
// this.props.dispatch({type: "ACTION_TYPE", payload: "something"})

// FUNCTIONAL COMPONENT:

// const Grandchild = () => {
// const person = useContext(FamilyContext)

//   return (
//     <div className="grandchild">
//         <h1>grandchild:</h1>
//         {/* <p>{person}</p> */}
//         <p>{person}</p>
//     </div>
//   )
// }

export default Grandchild