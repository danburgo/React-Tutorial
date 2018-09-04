import * as React from 'react';
import './App.css';
import MyClass from './components/MyClass';
import MyComp from './components/MyComp';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyClass name={'techsith'} isMarried = {true} />
        <MyComp name='techsithDEFAUULT' />
      </div>
    );
  }
}

export default App;
