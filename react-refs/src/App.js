import React, { Component } from 'react';
import './App.css';

const MyInput = (props) => {
  return (
        <input 
          ref={props.inputRef}
          type="text"/>
  );
}

const FuncCustomComp  = () => {
  let inputRef = null;

  const onClick = () => {
    inputRef.focus();
  }

  return ( 
    <div>
      <div>
        <span>My Input</span>
        <MyInput
          inputRef={(input) => {inputRef = input}}
        />
           
        <input 
          type="submit" 
          value="submit"
          onClick={onClick}></input>
      </div>
    </div>
   );
}
 
class App extends Component {
    onClick = () => {
      //console.log(this.firstName.value);
      alert(`yey!!!: ${this.firstName.value} |  ${this.lastName.value} submitted`);
    }
    onKeyHandle = (target,e) => {
      if (e.keyCode===13){
        switch(target){
          case 'firstName':
            this.lastName.focus();
            break;
          case 'lastName':
            this.age.focus();
            break;
          case 'age':
            this.submit.focus();
            break;
          default:
            this.firstName.focus();
            break;
       }
      }
      //console.log(e.keyCode);
    }

    render(){
      return(
        
      <div className="App">
        <FuncCustomComp></FuncCustomComp>
        <div>
         <span>First Name:</span>
          <input ref={(input)=>{this.firstName=input}} onKeyUp ={this.onKeyHandle.bind(this,'firstName')} type="text"></input>
        </div>
        <div>
          <span>Last Name:</span>
          <input ref={(input)=>{this.lastName=input}} onKeyUp ={this.onKeyHandle.bind(this,'lastName')} type="text"></input>
        </div>
        <div>
          <span>Age:</span>
          <input ref={(input)=>{this.age=input}} onKeyUp ={this.onKeyHandle.bind(this,'age')} type="text"></input>
        </div>
        <div>
          <input ref={(input)=>{this.submit=input}} type="button" value="submit" onClick={this.onClick.bind(this)}></input>
        </div>
      </div>
    );
  }
}

export default App;
