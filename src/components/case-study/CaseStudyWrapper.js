import React, { Component } from 'react';

// Case Study data
import ProjectInfo from '../../data/case-study';
import ProjectHeader from './Header';

import '../../css/case-study/body.css'
import '../../css/case-study/header.css'
import '../../css/loader.css';

// Case study components
import RippleCaseStudy from './section-builds/RippleCaseStudy';
import FlickrCaseStudy from './section-builds/FlickrCaseStudy';
import MycoursesCaseStudy from './section-builds/MycoursesCaseStudy';

import { animateCaseStudyIn, animateLoader } from '../../js/Animation';




class CaseStudy extends Component {
	constructor(props) {
		super(props);
		
		this.projectID = [];
		this.caseStudyData = [];
		this.caseStudyHeader = [];
		this.caseStudy = this.props.project - 1;
		this.boundEvent = this.resizeBackground.bind(this);
		this.state = {
			getData: false,
			visible: false
		}
	
	}

	componentWillMount() {
		this.props.onProject();
		this.getCaseHeaderInfo();

		setTimeout(() => {
			this.getCaseInfo();
			this.timeout();
			this.setState({getData: true})
		}, 200)
		
	}

	componentDidMount() {
		
		//document.querySelector('.wrapper').style.overflow = 'hidden';
		
		// if(window.innerWidth < 490) {
		// 	document.querySelector('header.fixed').classList += ' visible';
		// }

		if(this.checkCurrentCaseStudy() === true) {
		this.refs.loader.classList += ` ${this.projectID[this.caseStudy]} `;
		window.addEventListener('resize', this.boundEvent)
		animateLoader();

		setTimeout(() => {
			animateCaseStudyIn();
		}, 400);
		}
		// this.refs.case.style.display = 'none'
	}

	componentWillUnmount() {
		this.props.leaveProject();
		window.removeEventListener('resize', this.boundEvent);
		document.querySelector('header.fixed').remove('visible');
	}

	getCaseInfo = () => {
		ProjectInfo.map(project => {
			this.caseStudyData.push(project);
		});
	}

	getCaseHeaderInfo = () => {
		ProjectInfo.map(project => {
			this.projectID.push(project.id)
			this.caseStudyHeader.push(project.header);
		})
	}

	renderThisCaseStudy = () => {
		if(this.caseStudy === 0) {
			return <FlickrCaseStudy content={this.caseStudyData[this.caseStudy]} />
		} else if (this.caseStudy === 1) {
			return <RippleCaseStudy content={this.caseStudyData[this.caseStudy]} />
		} else if (this.caseStudy === 2) {
			return <MycoursesCaseStudy content={this.caseStudyData[this.caseStudy]} />
		} else {
			return null
		}
	}

	renderPage = () => {

		return (
			
			<div id="project" ref="project" style={{display: 'none'}} className={this.caseStudyData[this.caseStudy] !== undefined ? 
				`case-study ${this.caseStudyData[this.caseStudy].id}`
				:
				"case-study"
			}>
				{this.renderThisCaseStudy()}
			</div>
		);
	}

	resizeBackground = (e) => {
        let width = e.target.outerWidth - 15;

        console.log('func ' + width);
        console.log(e.target.outerWidth);
        let background = document.querySelector('#background');

        background.style.width = `${width}px`;
        background.style.transform = `translate3d(-${(width - (width*.9)) / 2}px,-100px,0)`;   
    }

	timeout = () => {

		setTimeout(() => {
			this.setState({visible: true})
		}, 2000);

		setTimeout(() => {
			// document.querySelector('#project').style.display = 'block';
			if(this.refs.project !== undefined) this.refs.project.style.display = 'block';
			if(this.refs.loader !== undefined) this.refs.loader.classList += ' loaded '
			
			// document.querySelector('#loader').style.display = 'none';
		}, 2700);
	}

	checkCurrentCaseStudy = () => {
		console.log(this.caseStudy);
		if(this.caseStudy === 0 || this.caseStudy === 1 || this.caseStudy === 2) return true
	}





	render() {

		return (
			
			<span>
				{this.checkCurrentCaseStudy() === true ?
				<span> 
				<div ref="loader" className="loader"></div>
			
				<div className={`case-study ${this.projectID[this.caseStudy]}`}>
					<div ref="content" className="content">
						<ProjectHeader headerInfo={this.caseStudyHeader[this.caseStudy]} />
					</div>
				</div>
				
				{this.state.visible === false ? null : this.renderPage()}
				</span>
				:
				null
				}
			</span>
		);
	}
}

export default CaseStudy;