import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {
  render(){

    return (
      <div className="child">
        <h1>child</h1>
        <Grandchild addDate={this.props.addDate}/>
        {/* <Grandchild person={props.person}/> */}
      </div>
    ) 
  } 
}

export default Child