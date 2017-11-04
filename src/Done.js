import React, { Component } from 'react';

class Done extends Component {




	render() {

		const listItems = this.props.dItems.map((item, i) => {
			return <li key={i} >{item}<input type="checkbox" onClick={this.moveItem}/></li>
		})
		return(
			<div>
				<h3> Done </h3>
					
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
}

export default Done;