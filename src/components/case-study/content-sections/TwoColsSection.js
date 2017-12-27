import React, { Component } from 'react';
import '../../../css/case-study/two-cols-section.css';

class TwoColsSection extends Component {

	componentDidMount() {
		this.renderText(this.refs.twoColHeading, this.props.content.title);
		this.renderText(this.refs.twoColText, this.props.content.text);
		this.renderHTML(this.refs.colTwo, this.props.content.url)

		if(this.props.wrapped === true) {
			this.renderSecondaryText();
			console.log(this.props.content.secondaryText);
		}


	}

	renderSecondaryImg = () => {
		if(this.props.content.secondaryImage !== undefined) {
			return <img src={this.renderImg(this.props.content.secondaryImage)} className="two-cols-secondary-image" alt=""/>
		} else {
			return null
		}
	}

	renderSecondaryText = () => {
		let output = '';

		this.props.content.secondaryText.map(content => {
			output +=
				`<div class="content-container">
					<div class="subheading">${content.title}</div>
					<div class="text">${content.text}</div>
				</div>`
			;
		})
		
		this.refs.colTwo.innerHTML = output;
		
	}

	renderHTML = (src, html) => {
		if(this.props.hasImage === false) {
			src.innerHTML = html;
		}
	}

	renderImg = (src) => {
		const imageURL = require('../../../images/case-studies/' + src);
		return imageURL
	}

	renderText = (src, text) => {
		src.innerHTML = text;
	}

	render() {

		return (
			<div className="case-study-wrapper">
				{this.props.wrapped === false ?
					<div className="content-container two-cols-section">
						<div className="col-1">
							<div ref="twoColHeading" className="heading"></div>
							<div ref="twoColText" className="text"></div>
							{this.renderSecondaryImg()}
						</div>
						<div ref="colTwo" className="col-2">
							{this.props.hasImage === true ?
								<img src={this.renderImg(this.props.content.imageURL)} className="col-img" alt=""/>
								:
								null
							}
						</div>
					</div>
					:
					<div className="content-container two-cols-section wrapped">
						<div className="col-1">
							<div ref="twoColHeading" className="heading"></div>
							<div ref="twoColText" className="text"></div>
							{this.renderSecondaryImg()}
						</div>
						<div ref="colTwo" className="col-2"></div>
					</div>
				}
			</div>
		);
	}
}

export default TwoColsSection;