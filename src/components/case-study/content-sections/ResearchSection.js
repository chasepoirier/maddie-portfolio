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



	render() {
		return (
			<div className="case-study-wrapper">
				{this.props.wrapped === false ? 
				<span>
					<div className="heading">04 - Research</div>
					<div className="content-container reseach">
						<div className="summary">
							<div className="text"></div>
							<label>Primary Findings</label>
							<div className="findings">
								{this.renderFindings()}
							</div>
						</div>
						<div className="image">
							{this.props.hasImg === true ? <img src={this.renderImgURL()} alt="reasearch" className="full-image"/> : null}
						</div>
					</div>
				</span>
				:
				<span>
					<div className="heading">03 - Research</div>
					<div className="content-container reseach">
						<div className="summary">
							<div className="text"></div>
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