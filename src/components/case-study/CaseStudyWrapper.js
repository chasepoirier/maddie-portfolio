import React, { Component } from 'react';

// Case Study data
import ProjectInfo from '../../data/case-study';

import '../../css/case-study/body.css'
import '../../css/case-study/header.css'

// Case study components
import RippleCaseStudy from './section-builds/RippleCaseStudy';
import FlickrCaseStudy from './section-builds/FlickrCaseStudy';





class CaseStudy extends Component {
	constructor(props) {
		super(props);

		this.caseStudyData = [];
		this.caseStudy = this.props.project - 1;
	
	}

	componentWillMount() {

		if(this.props.project === 1 || this.props.project === 2) {
			this.getCaseInfo();
		}
	}

	getCaseInfo = () => {
		ProjectInfo.map(project => {
			this.caseStudyData.push(project);
		});
	}

	renderThisCaseStudy = () => {
		if(this.caseStudy === 0) {
			return <FlickrCaseStudy content={this.caseStudyData[this.caseStudy]} />
		} else if (this.caseStudy === 1) {
			return <RippleCaseStudy content={this.caseStudyData[this.caseStudy]} />
		} else {
			return null
		}
	}



	render() {
		
		// console.log(this.approachFullImages[this.caseStudy][0]);

		return (
			
			<div className={this.caseStudyData[this.caseStudy] !== undefined ? 
				`case-study ${this.caseStudyData[this.caseStudy].id}`
				:
				"case-study"
			}>
				{this.renderThisCaseStudy()}
			</div>
		);
	}
}

export default CaseStudy;