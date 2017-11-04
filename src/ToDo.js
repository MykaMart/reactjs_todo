import React, { Component } from 'react';
import AddItem from "./AddItem"

class ToDo extends Component {

	// moveItem = (e) => {
	// 	this.

	// }


	render () {

		const listItems = this.props.items.map((item, i) => {
			return <li key={i}>{item}<input type="checkbox"/></li>
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