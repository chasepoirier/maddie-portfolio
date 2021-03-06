import React, { Component } from 'react';

import '../../../css/case-study/research.css';

class ResearchSection extends Component {

	componentDidMount() {
		this.renderContent();
	}

	renderFindings = () => {
		let findings = [];
		this.props.content.findings.map(finding => {
			findings.push(
				<div key={finding.desc} className="finding">
					<div className="percent">{finding.percent}</div>
					<div className="text">{finding.desc}</div>
				</div>
			);
		});
		return findings;
	}

	renderImgURL = () => {
		const imageSrc = require(`../../../images/case-studies/${this.props.content.imageURL}`);
		return imageSrc
	}

	renderContent = () => {
		document.querySelector('.summary .text').innerHTML = this.props.content.summary;
	}

	renderImg = (img) => {
		const imageURL = require('../../../images/' + img);
		return imageURL;
	}

	render() {
		return (
			<div className="case-study-wrapper">
				{this.props.wrapped === false ? 
				<span>
					<div className="heading">04 - Research</div>
					<div className="content-container research">
						<div className="summary">
							<div className="text"></div>
							<label>Primary Findings</label>
							<div className="findings">
								{this.renderFindings()}
							</div>
						</div>
						{this.props.hasImg === true ?
						<div className="image">
							 <img src={this.renderImgURL()} alt="reasearch" className="full-image"/> 
						</div>
						: null}
						
					</div>
				</span>
				:
				<span>
					<div className="heading">03 - Research</div>
					<div className="content-container research">
						<div className="summary">
							<div className="text"></div>
							{this.props.hasButton === true  
							?
							<div className="external-links">
								<a href={this.renderImg(this.props.content.finalPDF)} rel="noopener noreferrer" target="_blank" className="link-button">{this.props.content.PDFtitle}</a>
							</div>
								: null
							}
						</div>
						<div className="findings">
							<label>Primary Findings</label>
							{this.renderFindings()}
						</div>
					</div>
				</span>
				}
			</div>
		);
	}
}		

export default ResearchSection;