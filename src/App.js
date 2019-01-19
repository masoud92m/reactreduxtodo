import React, { Component } from 'react';
import './App.css';
import Todo from './containers/Todo/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes, faRedo, faCopyright } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes, faRedo, faCopyright);

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Todo />
      </div>
    );
  }
}

export default App;
