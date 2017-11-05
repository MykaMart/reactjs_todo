import React, { Component } from 'react';
import './AddItem.css';
class AddItem extends Component {

	constructor () {
		super();

		this.state = {
			inputValue: ""
		}

	}

	addItem = (e) => {
			e.preventDefault()
			
			this.props.add(this.state.inputValue)
			const state = this.state
			state.inputValue = "";
			this.setState(state)

	}

	handleForm = (e) => {
		const state = this.state
		state[e.target.name] = e.currentTarget.value
		this.setState(state)
	}

	render(){

		return(
			<div id="add">
				<form>
					<h4>Add Item </h4>
					<input name="inputValue" type="text" placeholder="New Item" onChange={this.handleForm} value={this.state.inputValue}/>
					<button onClick={this.addItem}>Add Item</button>
				</form>
			</div>
			)
	}
}

export default AddItem;