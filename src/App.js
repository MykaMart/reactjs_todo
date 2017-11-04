import React, { Component } from 'react';
import './App.css';
import ToDo from "./ToDo.js"
import AddItem from "./AddItem"

class App extends Component {

  constructor () {
    super();

    this.state = {
      todo: ["end the universe", "pick up drycleaning", "save morty from worldender"],
      done: []
    }
  }

  addItem = (item, e) => {
    const state = this.state;
    state.todo.push(item)
    console.log(state.todo)
    this.setState(state)
  }

  render() {
    // console.log(this.state.todo)
    return (
      <div className="App">
        <ToDo items={this.state.todo} />
        <AddItem add= {this.addItem}/>
      </div>
    );
  }
}

export default App;
