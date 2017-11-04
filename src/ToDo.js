import React, { Component } from 'react';
import AddItem from "./AddItem"

class ToDo extends Component {


	moveItem = (e) => {
		const state = this.state
		this.props.move(e)
		this.setState(state)
	}


	render () {

		const listItems = this.props.tItems.map((item, i) => {
			return <li key={i} >{item}<input type="checkbox" value={item} onClick={this.moveItem}/></li>
		})

		return(
			<div>
				<h3> To Do </h3>
					
				<ul>
					{listItems}
				</ul>
			</div>

		)
	}
}

export default ToDo;