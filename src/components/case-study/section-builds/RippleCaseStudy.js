import React, { Component } from 'react';

import ProjectHeader from '../Header';
import Slider from '../slider/wrapper';
import Overview from '../Overview'
import VideoSection from '../content-sections/VideoSection';
import ResearchSection from '../content-sections/ResearchSection'
import Approach from '../content-sections/Approach';
import TakeAwaySection from '../content-sections/TakeAwaySection';
import Footer from '../../Footer';

import { animateCaseStudyData } from '../../../js/Animation';


class RippleCaseStudy extends Component {
	constructor(props) {
		super(props);
		
		this.id = this.props.content.id;		

		// components for Ripple Case Study
		this.headerInfo = this.props.content.header;
		this.overview = this.props.content.overview;

		this.approach = this.props.content.approach;
		this.approachFullImages = this.props.content.approachFullImages;

		this.sliderOne = this.props.content.headingSlider;
		this.sliderTwo = this.props.content.sliderTwo;
		
		this.video = this.props.content.videoSection;
		this.research = this.props.content.researchSection;
		this.sketchesImage = this.props.content.sketchesImg;
		
		this.takeAway = this.props.content.takeaway;
	}

	componentDidMount() {
		animateCaseStudyData();
		this.renderStyles();
	}

	renderImg = (img) => {
		//console.log(this.sketchesImage);
		const sketchesURL = require('../../../images/case-studies/'+ img);

		return sketchesURL
	}

	renderStyles = () => {
		let headings = document.querySelectorAll('.content .heading');
		let button = document.querySelector('.external-links .link-button');

		button.className += ' ripple';

		headings.forEach(function(heading) {
			heading.className += " ripple "
		});
	}

	renderApproachSection = () => {

		let approaches = this.approach;

		let sectionArray = [];
		for(let i=0; i<approaches.length; i++) {
			if(i === 0) {
				sectionArray.push(
					<span key={i}>
					<Approach content={this.approach[i]} count={i + 1} />
					<div className="case-study-wrapper image-wrapper-transparent">
						<img src={this.renderImg(this.approachFullImages[i].imageURL)} alt=""/>
					</div>
					<div className="case-hairline"></div>
					</span>
				)
			} else {
				sectionArray.push(
					<span key={i}>
						<Approach content={this.approach[i]} count={i + 1} />
						<div className="full-width image-wrapper">
							<img src={this.renderImg(this.approachFullImages[i].imageURL)} alt=""/>
						</div>
					</span>
				)
			}
		}
		return sectionArray;
	}

	render() {
		

		return (

			<div className="content">
				
				<Slider caseStudy={this.id} dotColor="black" arrowColor="black" isFullWidth={true} slides={this.sliderOne}/>
				<div className="case-hairline"></div>

				<Overview overview={this.overview} />
				<div className="case-hairline"></div>

				<VideoSection content={this.video} />
				<div className="case-hairline"></div>

				<ResearchSection wrapped={false} hasImg={true} content={this.research} />
				<div className="case-hairline"></div>

				<div className="full-width sketch"><img src={this.renderImg(this.sketchesImage)} alt=""/></div>
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
				<Slider caseStudy={this.id} dotColor="white" arrowColor="white" isFullWidth={false} slides={this.sliderTwo}/>
				<div className="case-hairline"></div>

				<TakeAwaySection content={this.takeAway} />
				<div className="case-hairline"></div>

				<Footer onCaseStudy={true} />
			</div>
		);
	}
}

export default RippleCaseStudy;