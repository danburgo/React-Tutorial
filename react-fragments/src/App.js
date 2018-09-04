import React, { Component, Fragment } from 'react';
import './App.css';


const Temp = (props) => {
  return( 
    <Fragment>
      {
        //props.greetings ==='hi' ? `&lt;div&gt;${props.greetings}&&lt/divgt;` : props.greetings
        props.greetings ==='hi' 
        ? <Fragment>&lt;div&gt;{props.greetings}&lt;/div&gt;</Fragment> 
        : props.greetings
      }
      <div>Hi</div>
      <div>Hello</div>
    </Fragment>
  )
}
 
class App extends Component {
  render() {
    return (
      <div className="App">
       <Temp greetings="hi" />
      </div>
    );
  }
}

export default App;
