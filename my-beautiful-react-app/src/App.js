import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users title="Users list" />
      </div>
    );
  }
}

export default App;
