import React, { Component } from 'react';

// function App() {
//   const dom = (
//     <Counter></Counter>
//   );
//   return dom;
// }

const App = () => (<Counter></Counter>);

class Counter extends Component {
  constructor(props) {
    super(props);
    // console.log(this.state);
    this.state = {
      count : 0
    }
  }

  handlePlusBtn = () => {
    this.setState({count : this.state.count + 1});
  }

  handleMinusBtn = () => {
    this.setState({count : this.state.count - 1});
  }

  render() {
    return (
      <React.Fragment>
        <div>count : {this.state.count}</div>
        <button onClick={this.handlePlusBtn}>+1</button>
        <button onClick={this.handleMinusBtn}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
