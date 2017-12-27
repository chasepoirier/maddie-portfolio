import React, { Component } from 'react';
import '../../../css/case-study/takeaway.css';


class TakeAwaySection extends Component {
	
	componentDidMount() {
		this.renderText(document.querySelector('.content-container.takeaway .left .heading'), this.props.content.heading);
		this.renderText(document.querySelector('.content-container.takeaway .left .text'), this.props.content.text);
	}

	renderText = (selector, text) => {
		selector.innerHTML = text;
	}

	renderImg = (img) => {
		const imageURL = require('../../../images/' + img);
		return imageURL;
	}

	render() {
		return(

			<div className="case-study-wrapper">
				<div className="heading">07 - Takeaways</div>
				<div className="content-container takeaway">
					<div className="left">
						<div className="heading"></div>
						<div className="text"></div>
						<div className="external-links">
							<a href={this.props.content.websiteURL} rel="noopener noreferrer" target="_blank" className="link-button">View Website</a>
							<a href={this.renderImg(this.props.content.finalPDF)} target="blank" className="link-non-button">Or view the investor pitch deck</a>
						</div>
					</div>
					<div className="right">
						
						<img src={this.renderImg(`case-studies/${this.props.content.imageURL}`)} className="takeaway-img" alt=""/>
						<div className="caption">{this.props.content.caption}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TakeAwaySection;