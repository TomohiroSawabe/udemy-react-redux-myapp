import React, { Component } from 'react';

function App() {
  // const greeting = "Hi, Tom!"
  // const dom = <h1 className="foo">{greeting}</h1>;
  const profiles = [
    {name : "Taro", age : 10},
    {name : "Hanako", age : 5},
    {}
  ];

  const dom = (
    <React.Fragment>
      {/* <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("Function Component")}}></input> */}

      {
        profiles.map((profile, index) => {
          return <User2 name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  )
  return dom;
}

function User(props) {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

const User2 = ((props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.(Part.2)</div>
})

User2.defaultProps = {
  name : "NoName",
  age : 0
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
