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
import Footer from '../Footer';



class CaseStudy extends Component {
	constructor(props) {
		super(props);
		this.headerInfo = [];
		this.headerSlide = [];
		this.caseStudy = this.props.project - 1;
		this.overview = [];
		this.video = [];
		this.research = [];
		this.sketchesImage = [];
		this.approach = [];
		this.approachFullImages = [];
		this.id = [];
	}

	componentWillMount() {
		
		this.getCaseInfo();
	}

	componentDidMount() {
		console.log(this.research[this.caseStudy]);
		animateCaseStudyIn();
	}

	getCaseInfo = () => {
		ProjectInfo.map(project => {
			this.id.push(project.id);
			this.headerInfo.push(project.header);
			this.headerSlide.push(project.headingSlider);
			this.overview.push(project.overview);
			this.video.push(project.videoSection);
			this.research.push(project.researchSection);
			this.sketchesImage.push(project.sketchesImg);
			this.approach.push(project.approach);
			this.approachFullImages.push(project.approachFullImages);
		});
	}

	renderImg = (img) => {
		//console.log(this.sketchesImage);
		const sketchesURL = require('../../images/case-studies/'+ img);

		return sketchesURL
	}

	render() {
		
		// console.log(this.approachFullImages[this.caseStudy][0]);

		return (
			
			<span>
			{this.id[this.caseStudy] === 'ripple' ? 

			<div className="case-study">
				<ProjectHeader headerInfo={this.headerInfo[this.caseStudy]} />
				<Slider slides={this.headerSlide[this.caseStudy]}/>
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
				<Approach content={this.approach[this.caseStudy][0]} count={1} />
				<div className="case-study-wrapper image-wrapper-transparent">
					<img src={this.renderImg(this.approachFullImages[this.caseStudy][0].imageURL)} alt=""/>
				</div>
				<div className="case-hairline"></div>
				<Approach content={this.approach[this.caseStudy][1]} count={2} />
				<div className="full-width image-wrapper">
					<img src={this.renderImg(this.approachFullImages[this.caseStudy][1].imageURL)} alt=""/>
				</div>
				<Approach content={this.approach[this.caseStudy][2]} count={3} />
				<div className="full-width image-wrapper">
					<img src={this.renderImg(this.approachFullImages[this.caseStudy][2].imageURL)} alt=""/>
				</div>
				<Approach content={this.approach[this.caseStudy][3]} count={4} />
				<div className="full-width image-wrapper">
					<img src={this.renderImg(this.approachFullImages[this.caseStudy][3].imageURL)} alt=""/>
				</div>
				<Footer onCaseStudy={true} />
			</div>

			: null
			}
			</span>
		);
	}
}

export default CaseStudy;