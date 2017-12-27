import React, { Component } from 'react';
import '../../../css/case-study/approach.css';

class Approach extends Component {

	renderImg = () => {
		const imageURL = require('../../../images/case-studies/' + this.props.content.imageURL);

		return imageURL
	}

	render() {

		return (
			<div className="case-study-wrapper">
				<div className="count">0{this.props.count}</div>
				<div className="content-container approach">
					<div className="left">
						<div className="heading">{this.props.content.heading}</div>
						{this.props.content.text !== null ? <div className="text">{this.props.content.text}</div> : null}
					</div>
					<div className="right">
						{this.props.content.hasImg === false  
							?
							<span>
								<div className="title">{this.props.content.nonImg.title}</div>
								<div className="text">{this.props.content.nonImg.text}</div>
							</span>
							:
							<img src={this.renderImg()} className="approach-img" alt="team"/>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Approach;