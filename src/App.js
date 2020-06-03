import React, { Component } from 'react';

function App() {
  // const greeting = "Hi, Tom!"
  // const dom = <h1 className="foo">{greeting}</h1>;
  const dom = (
    <React.Fragment>
      {/* <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("Function Component")}}></input> */}
      <Cat />
      <Cat />
    </React.Fragment>
  )
  return dom;
}


function Cat() {
  return <div>Meow!</div>
}

class App2 extends Component {
  render() {
    return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("Class Component")}}></input>
    </React.Fragment>
    )
  }
}

export default App;
