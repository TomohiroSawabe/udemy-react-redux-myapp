import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action(Action type を返す)のImport
import { increment, decrement } from '../actions';


class App extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value : { props.value }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    );
  }
}

// mapStateToPropsは、
// state(引数になる)の情報から、このComponentに必要な物を取り出して、Component内のPropsにマッピングする(returnする)
const mapState = (state) => {
  return {value: state.count.value}
}

// const mapDispatch = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   }
// }

const mapDispatch = ({increment, decrement})

// state action を component に関連付ける -> connect関数 / 引数にComponent(ここでは "App")を指定
export default connect(mapState, mapDispatch)(App);
