import React, { Component } from 'react';
import './App.css';
import Todo from './containers/Todo/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
