import React, { Component } from 'react';
import ToDoForm from './containers/ToDoForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <ToDoForm />
      </div>
    );
  }
}

export default App;
