import React, { Component } from 'react';

class ToDo extends Component {

	render () {

		const listItems = this.props.items.map((item, i) => {
			return <li key={i}>{item}</li>
		})
		return(
			<div>
				<h3> To Do </h3>
					{listItems}
				<ul>
				
				</ul>
			</div>

		)
	}
}

export default ToDo;