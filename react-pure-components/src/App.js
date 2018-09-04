import React, { PureComponent } from 'react';
import './App.css';


const Temp = (props) => {
  console.log('Render val');
  return ( <div>{props.val}</div> );
}
 

//class App extends Component {
  class App extends PureComponent {
  state ={
    val:1
  }

  //Good place to make AJAX calls
  componentDidMount() {
    setInterval(()=>{
      this.setState(()=>{
        return {val:1}
        //return {val: Math.random()}
      });
    },2000);
  }

  //Here we can decide in this hook if we should rerender our component
  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('NextState',nextState);
    console.log('CurrentState',this.state);
    //return ( this.state === nextState ? false : true); //here compearing the objects it will render
    return ( this.state.val === nextState.val ? false : true);
  }*/

  render() {
    console.log('Render App');
    return (
      <div className="App">
       <Temp val={this.state.val}></Temp>
      </div>
    );
  }
}

export default App;
