import React, { Component } from 'react';
import './App.css';
import ToDo from "./ToDo.js"

class App extends Component {

  constructor () {
    super();

    this.state = {
      todo: [],
      done: []
    }
  }
  render() {
    return (
      <div className="App">
       My App
      </div>
    );
  }
}

export default App;
