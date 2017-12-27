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

	renderExternalLinks = () => {
		if(this.props.content.websiteURL === null) {
			return <a href={this.renderImg(this.props.content.finalPDF)} rel="noopener noreferrer" target="_blank" className="link-button">{this.props.content.PDFtitle}</a>
		} else {
			return (
				<span>
					<a href={this.props.content.websiteURL} rel="noopener noreferrer" target="_blank" className="link-button">{this.props.content.websiteTitle}</a>
					<a href={this.renderImg(this.props.content.finalPDF)} rel="noopener noreferrer" target="_blank" className="link-non-button">{this.props.content.PDFtitle}</a>
				</span>
			)
		}
	}

	render() {
		return(

			<div className="case-study-wrapper">
				<div className="heading">07 - Takeaways</div>
				<div className="content-container takeaway">
					<div className="left">
						<div className="heading"></div>
						<div className="text"></div>
						<div ref="links" className="external-links">
							{this.renderExternalLinks()}
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