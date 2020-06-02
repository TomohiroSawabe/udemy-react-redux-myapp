import React from 'react';

function App() {
  // const greeting = "Hi, Tom!"
  // const dom = <h1 className="foo">{greeting}</h1>;
  const dom = (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("Test!")}}></input>
    </React.Fragment>
  )
  return dom;
}

export default App;