import React, { Component } from 'react';

class Overview extends Component {

	componentDidMount() {
		this.renderContent(document.querySelector('.statement .text'), this.props.overview.statement);
		this.renderContent(document.querySelector('.problem .text'), this.props.overview.problem);
	}

	renderContent = (selector, content) => {
		selector.innerHTML = content;
	}

	renderTeam = () => {
		if(this.props.overview.teamImageURL !== undefined) {
			const imageSrc = require(`../../images/case-studies/${this.props.overview.teamImageURL}`);
			return <img src={imageSrc} alt="" className="overview-team" />
		}
	}

	render() {
		return (
			<div className="case-study-wrapper">
				<div className="overview-container">
					<div className="content statement">
						<div className="heading">01 - Overview</div>
						<div className="text"></div>
						{this.renderTeam()}
					</div>
					<div className="content problem">
						<div className="heading">02 - Problem</div>
						<div className="text"></div>
					</div>
				</div>
			</div>
			
		);
	}
}

export default Overview;