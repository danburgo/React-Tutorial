import React, { Component } from 'react';


class Child extends Component {
    //1
    constructor(){
      super();
      this.state={
        name: 'Dan'
      };
      console.log('Child Constructor');
    }
  
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    //2
    componentWillMount() {
      if (window.innerWidth<500)
      {
        this.setState({innerWidth: window.innerWidth});
      }
      console.log('Child ComponentWillMount');
    }

    //right before the render method gets executed - you could setState  here
    componentWillReceiveProps() {
        console.log('Child componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Child shouldComponentUpdate');
        return true; //if return true - it will go thru rendering, if false- it should sstop here and will not continue rendering
      }
    
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    //Should not setState - it may result in infite loop
    componentWillUpdate(nextProps, nextState) {
        console.log('Child nextProps',nextProps);
        console.log('Child nextState',nextState);
        console.log('Child componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Child prevProps',prevProps);
        console.log('Child prevState',prevState);
        console.log('Child componentDidUpdate');
      }

    //Undo something when mounted
    componentWillUnmount() {
        console.log('Child componentWillUnmount');
      }
    //3-Render gets called everytime you change the state (NEVER set the state in render)
    render() {
      console.log('Child Render');
      return (
        <div className="App">
          Child Name: {this.props.name}
        </div>
      );
    }
  
    //4
    componentDidMount() {
      console.log('Child ComponentDidMount');
    }
  }
  
  export default Child;