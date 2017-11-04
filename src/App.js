import React, { Component } from 'react';
import './App.css';
import ToDo from "./ToDo.js"

class App extends Component {

  constructor () {
    super();

    this.state = {
      todo: ["end the universe", "pick up drycleaning", "save morty from worldender"],
      done: []
    }
  }

  // addiItem = ()

  render() {
    return (
      <div className="App">
        <ToDo items={this.state.todo}/>
      </div>
    );
  }
}

export default App;
