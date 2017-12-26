import React, { Component } from 'react'

class Slide extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		const imageSrc = require(`../../../images/case-studies/${this.props.imageURL}`);

		return (
			
			<li className="case-slide">
				<img src={imageSrc} alt="" className="slide-image"/>
			</li>
		);
	}
}

export default Slide;	