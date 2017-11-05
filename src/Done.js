import React, { Component } from 'react';
import './Done.css';

class Done extends Component {




	render() {

		const listItems = this.props.dItems.map((item, i) => {
			return <li key={i} >{item}<input type="checkbox" onClick={this.moveItem}/></li>
		})
		return(
			<div id="done">
				<h3> Done </h3>
					
				<ul id="dList">
					{listItems}
				</ul>
			</div>
		)
	}
}

export default Done;