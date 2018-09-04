import React, { Component } from 'react';
//import Child from './components/parentToChild/child';
import Parent from './components/parentToChild/parent';
import './App.css';

class App extends Component {

  state ={
    title:'placeHolder title'
  }

  changeTheWorld =(newTitle) =>{
    this.setState({title:newTitle});
  }

  render() {
    return (
      <div className="App">
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this,'New World')} 
          keepTheWorldEvent={this.changeTheWorld.bind(this,'Same World')} 
          title={this.state.title}></Parent>
        
      </div>
    );

    /*return (
      <div className="App">
        <Parent doWhatever={this.changeTheWorld.bind(this,'new World')} title={this.state.title}></Parent>
        
      </div>
    );*/
  }
}

export default App;
