import React, { Component } from 'react';

// Case Study data
import ProjectInfo from '../../data/case-study';

import { animateCaseStudyIn } from '../../js/Animation';
import '../../css/case-study/body.css'
import '../../css/case-study/header.css'

// Case study components
import ProjectHeader from './Header';
import Slider from './slider/wrapper';
import Overview from './Overview'
import VideoSection from './content-sections/VideoSection';
import ResearchSection from './content-sections/ResearchSection'
import Approach from './content-sections/Approach';
import TakeAwaySection from './content-sections/TakeAwaySection';
import Footer from '../Footer';



class CaseStudy extends Component {
	constructor(props) {
		super(props);

		this.headerInfo = [];
		this.sliderOne = [];
		this.caseStudy = this.props.project - 1;
		this.overview = [];
		this.video = [];
		this.research = [];
		this.sketchesImage = [];
		this.approach = [];
		this.approachFullImages = [];
		this.id = [];
		this.sliderTwo = [];
		this.takeAway = [];
	}

	componentWillMount() {
		
		this.getCaseInfo();
	}

	componentDidMount() {
		animateCaseStudyIn();
	}

	getCaseInfo = () => {
		ProjectInfo.map(project => {
			this.id.push(project.id);
			this.headerInfo.push(project.header);
			this.sliderOne.push(project.headingSlider);
			this.overview.push(project.overview);
			this.video.push(project.videoSection);
			this.research.push(project.researchSection);
			this.sketchesImage.push(project.sketchesImg);
			this.approach.push(project.approach);
			this.approachFullImages.push(project.approachFullImages);
			this.sliderTwo.push(project.sliderTwo);
			this.takeAway.push(project.takeaway);
		});
	}

	renderImg = (img) => {
		//console.log(this.sketchesImage);
		const sketchesURL = require('../../images/case-studies/'+ img);

		return sketchesURL
	}

	renderApproachSection = () => {

		let approaches = this.approach[this.caseStudy];

		let sectionArray = [];
		for(let i=0; i<approaches.length; i++) {
			if(i === 0) {
				sectionArray.push(
					<span key={i}>
					<Approach content={this.approach[this.caseStudy][i]} count={i + 1} />
					<div className="case-study-wrapper image-wrapper-transparent">
						<img src={this.renderImg(this.approachFullImages[this.caseStudy][i].imageURL)} alt=""/>
					</div>
					<div className="case-hairline"></div>
					</span>
				)
			} else {
				sectionArray.push(
					<span key={i}>
						<Approach content={this.approach[this.caseStudy][i]} count={i + 1} />
						<div className="full-width image-wrapper">
							<img src={this.renderImg(this.approachFullImages[this.caseStudy][i].imageURL)} alt=""/>
						</div>
					</span>
				)
			}
		}
		return sectionArray;
	}

	render() {
		
		// console.log(this.approachFullImages[this.caseStudy][0]);

		return (
			
			<span>
			{this.id[this.caseStudy] === 'ripple' ? 

			<div className="case-study">
				<ProjectHeader headerInfo={this.headerInfo[this.caseStudy]} />
				<Slider isFullWidth={true} slides={this.sliderOne[this.caseStudy]}/>
				<div className="case-hairline"></div>

				<Overview overview={this.overview[this.caseStudy]} />
				<div className="case-hairline"></div>

				<VideoSection content={this.video[this.caseStudy]} />
				<div className="case-hairline"></div>

				<ResearchSection content={this.research[this.caseStudy]} />
				<div className="case-hairline"></div>

				<div className="full-width sketch"><img src={this.renderImg(this.sketchesImage[this.caseStudy])} alt=""/></div>
				<div className="case-hairline"></div>

				<div className="case-study-wrapper"><div className="heading">05 - Approach</div></div>				
				{this.renderApproachSection()}

				<div className="case-hairline"></div>

				<div className="case-study-wrapper">
					<div className="heading">06 - Solution</div>
					<div className="text solution">After a total 108+ interviews, product debates and ideations, endless mentoring and customer discovery Ripple is on 
					to launch it’s MVP, which will be released with a group of beta users or early adopters soon. Below are the final 
					design comps for our first MVP, and we are continuously working for the next launch and startup growth.</div>
				</div>				
				<Slider isFullWidth={false} slides={this.sliderTwo[this.caseStudy]}/>
				<div className="case-hairline"></div>

				<TakeAwaySection content={this.takeAway[this.caseStudy]} />
				<div className="case-hairline"></div>

				<Footer onCaseStudy={true} />
			</div>

			: null
			}
			</span>
		);
	}
}

export default CaseStudy;