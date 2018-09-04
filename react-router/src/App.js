import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

//const User = ({match}) => {
const User = (params) => {
  return ( <h1>Welcome User: {params.username}</h1> );
}
 

class App extends Component {
  state= {loggedin: false};
  loginHandle = () => {
    //this.setState ({loggedin: true});
    this.setState(prevState => ({
      loggedin:!prevState.loggedin
    }))
  }
   
  render() {
    return (
      <Router>
        <div className="App">
        <ul>
          <li><NavLink to="/" exact activeStyle = {{color:'green'}}>
                Home
              </NavLink>
          </li>
          <li><NavLink to="/about" exact activeStyle = {{color:'green'}}>About</NavLink></li>
          <li><NavLink to="/user/John" exact activeStyle = {{color:'green'}}>User John</NavLink></li>
          <li><NavLink to="/user/Peter" exact activeStyle = {{color:'green'}}>User Peter</NavLink></li>
        </ul>
        <Prompt when={!this.state.loggedin}
          message={(location)=> {
            return location.pathname.startsWith('/user')? "Are you sure?": true;
          }}>
        </Prompt>
        
        <Link to="/user/Claire">User Claire</Link>
        <input type="button" value={this.state.loggedin?"log out": "login"} onClick={this.loginHandle.bind(this)}></input>


        <Route path ='/' exact strict render={
          () =>{
            return (<h1>Welcome Home</h1>);
          }}>
        </Route>
        <Route path ='/about' exact strict render={
          () =>{
            return (<h1>Welcome About</h1>);
          }}>
        </Route>
        <Route path ="/user/:username" exact strict /*component={User} */ render ={({match})=>(
          this.state.loggedin ? (<User username={match.params.username}></User>) : (<Redirect to="/"/>)
        )}>
        </Route>
        </div>
      </Router>
    );
  }
}

export default App;
