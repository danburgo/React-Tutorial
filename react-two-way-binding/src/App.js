import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    name: 'Techsith'
  }

  changeName = (newName) => {
    this.setState({
        name: newName
    });
  }

  changeNameFromInput= (event) => {
    this.setState({
        name: event.target.value
    });
  }

  TestJS = () => {
    let numArray = [10,5,3];
    //console.log(Math.min(1,2,3));
    console.log(Math.min(...numArray));
    
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <br></br>
        <button onClick={() => this.changeName('Awesome Dude!')}>Change State using Anon function</button>
        
        <button onClick={this.changeName.bind(this,'Awesome BIND')}>Change State using Binding</button>
        <br></br>
        <br></br>
        <input type="text" onChange={this.changeNameFromInput} value ={this.state.name}></input>
        <div>
          {this.state.name}
        </div>
        <button onClick={this.TestJS.bind(this,'Test JS')}>Test JSg</button>

      </div>
    );
  }
}

export default App;
