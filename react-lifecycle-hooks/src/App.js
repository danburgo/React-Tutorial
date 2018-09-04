import React, { Component } from 'react';
import './App.css';
import Child from './child'

class App extends Component {
  //1
  constructor(){
    super();
    this.state={
      name: 'Dan'
    };
    console.log('App Constructor');
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  //2 - You could make ajax calls or subscribe to events 
  componentWillMount() {
    if (window.innerWidth<500)
    {
      this.setState({innerWidth: window.innerWidth});
    }
    console.log('App ComponentWillMount');
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps() {
    console.log('App componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App shouldComponentUpdate');
    return true; //if return true - it will go thru rendering, if false- it should sstop here and will not continue rendering
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  //Should not setState - it may result in infite loop
  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App prevProps',prevProps);
    console.log('App prevState',prevState);
    console.log('App componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount');
  }

  changeState (){
    this.setState({name: 'Jill'})
  }

  unmountChild(){
    this.setState({name: 'robert'});
  }

  //3-Render gets called everytime you change the state (NEVER set the state in render)
  render() {
    console.log('App Render');
    if (this.state.name==='robert')
      return (<div></div>);
    else
      return (
        <div className="App">
          {this.state.name}
          | innerWidth: {this.state.innerWidth}
          <Child name ={this.state.name}></Child>
          <button onClick={this.changeState.bind(this)}>Change State</button>
          <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
        </div>
      );
  }

  //4
  componentDidMount() {
    console.log('App ComponentDidMount');
  }
}

export default App;
