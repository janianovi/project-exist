import React, { Component } from 'react';
import './Choice.css'

class Choice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPressed: false,
		};
	}

	handleClick = () => {
		if(this.state.isPressed === true)
			this.state.isPressed = false;
		else
			this.state.isPressed = true;
	}

	render() {
		return (
			<button className='Choice' onClick={this.handleClick}>
				{this.props.name}
			</button>
		);
	}
}

export default Choice;