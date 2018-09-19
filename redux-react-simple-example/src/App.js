import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

  // state = {
  //   age:21
  // }

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })

  // }
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })

  // }

  

  render() {
    return (
      <div className="App">
      <div>Age: <span>{this.props.age}</span></div>
      <button onClick={this.props.onAgeUp}>Age Up</button>
      <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}
  //Map props to store and actions in 2 variables
  //1
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  }
}

//2 -when the state changes we need to be able to  subscribe it
const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}



//export default App;
//review higher level component
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
