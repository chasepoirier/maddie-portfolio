import React, { Component } from 'react';
import '../../../css/case-study/approach.css';

class Approach extends Component {

	componentDidMount() {
		this.renderText(this.refs.heading, this.props.content.heading);

		if(this.props.content.text !== null) {
			this.renderText(this.refs.text, this.props.content.text);	
		}
	}

	renderImg = () => {
		const imageURL = require('../../../images/case-studies/' + this.props.content.imageURL);

		return imageURL
	}

	renderText = (src, text) => {
		src.innerHTML = text;
	}

	render() {

		return (
			<div className="case-study-wrapper">
				<div className="count">0{this.props.count}</div>
				<div className="content-container approach">
					<div className="left">
						<div ref="heading" className="heading"></div>
						<div ref="text" className="text"></div>
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