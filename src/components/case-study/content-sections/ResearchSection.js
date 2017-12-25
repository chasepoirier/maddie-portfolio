import React, { Component } from 'react';

class ResearchSection extends Component {
	constructor() {
		super();
	}

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



	render() {
		return (
			<div className="case-study-wrapper">
				<div className="heading">04 - Research</div>
				<div className="content-container reseach">
					<div className="summary">
						<div className="text"></div>
						<label>Findings</label>
						<div className="findings">
							{this.renderFindings()}
						</div>
					</div>
					<div className="image">
						<img src={this.renderImgURL()} className="full-image"/>
					</div>
				</div>
			</div>
		);
	}
}		

export default ResearchSection;