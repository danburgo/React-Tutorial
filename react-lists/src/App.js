import React, { Component } from 'react';
import User from './components/user';
import './App.css';
import UniqueId from 'react-html-id';

class App extends Component {

  constructor(){
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users:[
        {id:this.nextUniqueId(), name: 'John', age: 20},
        {id:this.nextUniqueId(), name: 'Peter', age: 30},
        {id:this.nextUniqueId(), name: 'Jill', age: 25}
      ]
    }
    console.log(this.state);
    
  }
  deleteUser = (index,e) => {
    const users = Object.assign([],this.state.users); //creates a copy of state
    users.splice(index,1); //Remove 1 element from array
    this.setState({users: users});
  }
  
  //Pass user.Id and element itself (automatically passed)
  changeUserName = (id,e) =>{
    //based on id find the element's index in state.users where user.id = id passed
    const index = this.state.users.findIndex(user => {
      return user.id===id
    });
    //create a separate copy of the user at the found index 
    const user = Object.assign({},this.state.users[index]);
    //change the name to the new name (stored in the e variable)
    user.name=e.target.value;
    //create a new copy of the state users
    const users = Object.assign([],this.state.users);
    //replace the modified user with the new one (with modifications)
    users[index]=user;
    //set the new state
    this.setState({users:users});


  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user,index)=>{
              return (<User age={user.age}
                key={user.id}
                changeEvent={this.changeUserName.bind(this,user.id)}
                delEvent={this.deleteUser.bind(this,index)}>
                {user.name}</User>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
