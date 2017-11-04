import React, { Component } from 'react';
import './App.css';
import ToDo from "./ToDo.js"
import AddItem from "./AddItem"
import Done from "./Done"

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

  moveItem = (item) => {
    console.log(item.target.value)
    const state = this.state;
    const index = state.todo.indexOf(item);    //fix index of
    state.todo.splice(index, 1)
    state.done.push(item.target.value)
    console.log(state.done)
    this.setState(state)
  }

  render() {
    // console.log(this.state.todo)
    return (
      <div className="App">
        <ToDo tItems={this.state.todo} move={this.moveItem}/>
        <AddItem add= {this.addItem}/>
        <Done dItems={this.state.done}/>
      </div>
    );
  }
}

export default App;
