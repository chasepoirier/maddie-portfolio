import React, { Component } from 'react';
import '../../../css/case-study/three-cols-section.css';

class ThreeColsSection extends Component {
	constructor(props) {
		super(props);
		
		this.content = this.props.content;
	}

	render() {

		return (
			<div className="case-study-wrapper">
				{this.props.subHeading !== undefined ? <div className="subheading three-cols">{this.props.subHeading}</div> : null}
				<div className="content-container three-cols-section">
					<div className="col-1">
						<div className="heading">{this.content[0].title}</div>
						<div className="text">{this.content[0].text}</div>
					</div>
					<div className="col-2">
						<div className="heading">{this.content[1].title}</div>
						<div className="text">{this.content[1].text}</div>
					</div>
					<div className="col-3">
						<div className="heading">{this.content[2].title}</div>
						<div className="text">{this.content[2].text}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ThreeColsSection;