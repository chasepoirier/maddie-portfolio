import React, { Component } from 'react'

class Slide extends Component {

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