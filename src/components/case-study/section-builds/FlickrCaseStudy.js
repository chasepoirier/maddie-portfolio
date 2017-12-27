import React, { Component } from 'react';

import ProjectHeader from '../Header';
import Slider from '../slider/wrapper';
import Overview from '../Overview'
import Approach from '../content-sections/Approach';


import TwoColsSection from '../content-sections/TwoColsSection';
import ThreeColsSection from '../content-sections/ThreeColsSection';

import TakeAwaySection from '../content-sections/TakeAwaySection';
import Footer from '../../Footer';

import { animateCaseStudyIn } from '../../../js/Animation';

class RippleCaseStudy extends Component {
	constructor(props) {
		super(props);
		

		// components for Flickr Case Study
		this.headerInfo = this.props.content.header;

		this.sliderOne = this.props.content.headingSlider;
		this.sliderTwo = this.props.content.sliderTwo;
		this.sliderThree = this.props.content.sliderThree;
		

		this.overview = this.props.content.overview;

		this.desktopPrototype = this.props.content.desktopPrototype;
		this.mobilePrototype = this.props.content.mobilePrototype;		
		
		this.sectionThree = this.props.content.sectionThree;
		this.sectionThreeGoals = this.props.content.sectionThreeGoals;

		this.sectionFour = this.props.content.sectionFour;

		this.sectionFive = this.props.content.sectionFive;

		this.approach = this.props.content.approach;
		this.approachFullImages = this.props.content.approachFullImages;
		this.id = this.props.content.id;

		
		this.takeAway = this.props.content.takeaway;
	}

	componentDidMount() {
		
		animateCaseStudyIn();
		this.renderStyles();
		this.renderText(this.refs.desktopPrototypeHeading, this.desktopPrototype.title);
		this.renderText(this.refs.desktopPrototypeUrl, this.desktopPrototype.url);

	}



	renderStyles = () => {
		let headings = document.querySelectorAll('.content .heading');
		let button = document.querySelector('.external-links .link-button');

		button.className += ' flickr';
		button.style.width = '130px';

		headings.forEach(function(heading) {
			heading.className += " flickr"
		});
	}

	renderText = (src, content) => {
		src.innerHTML = content;
	}

	renderImg = (img) => {
		//console.log(this.sketchesImage);
		const sketchesURL = require('../../../images/case-studies/'+ img);

		return sketchesURL
	}

	render() {
		

		return (

			<div className="content">
				<ProjectHeader headerInfo={this.headerInfo} />

				<div className="case-separator"></div>
				
				<div className="case-study-wrapper case-animate">
					<div ref="desktopPrototypeHeading" className="subheading"></div>
					<div ref="desktopPrototypeUrl" className="prototype desktop"></div>
				</div>

				<div className="case-hairline"></div>

				<Overview overview={this.overview} />
				<div className="case-hairline"></div>
				
				<Slider dotColor="black" caseStudy={this.id}  arrowColor="white" isFullWidth={true} slides={this.sliderOne}/>
				<div className="case-hairline"></div>
				
				<TwoColsSection wrapped={false} hasImage={true} content={this.sectionThree} />
				<div className="case-separator"></div>
				<ThreeColsSection subHeading="Goals" content={this.sectionThreeGoals} />

				<div className="full-width image-wrapper captioned">
					<img src={this.renderImg(this.approachFullImages[0].imageURL)} alt=""/>
					<div className="caption">{this.approachFullImages[0].caption}</div>
				</div>
				<div className="case-hairline"></div>

				<TwoColsSection wrapped={true} hasImage={false} content={this.sectionFour} />
				<div className="case-hairline"></div>
				
				

				<div className="full-width image-wrapper overflow">
					<img src={this.renderImg(this.approachFullImages[1].imageURL)} alt=""/>
				</div>

				<TwoColsSection wrapped={false} hasImage={true} content={this.sectionFive} />
				<div className="full-width image-wrapper transparent">
					<img src={this.renderImg(this.approachFullImages[4].imageURL)} alt=""/>
				</div>
				<div className="case-hairline"></div>

				<Approach content={this.approach[0]} count={1} />
				<div className="full-width image-wrapper">
					<img src={this.renderImg(this.approachFullImages[2].imageURL)} alt=""/>
				</div>
				
				<Approach content={this.approach[1]} count={2} />

				<Slider caseStudy={this.id} dotColor="black" arrowColor="black" isFullWidth={false} slides={this.sliderTwo}/>

				<Approach content={this.approach[2]} count={3} />

				<Slider caseStudy={this.id} dotColor="black" arrowColor="black" isFullWidth={false} slides={this.sliderThree}/>

				<div className="case-study-wrapper flickr">
					<div className="count">04</div>
					<div className="heading">{this.approach[3].heading}</div>
					<div className="text solution">{this.approach[3].text}</div>
				</div>	

				<div className="full-width image-wrapper overflow">
					<img src={this.renderImg(this.approachFullImages[3].imageURL)} alt=""/>
				</div>

				<div className="case-hairline"></div>				
				<TwoColsSection wrapped={false} hasImage={false} content={this.mobilePrototype} />
				<div className="case-hairline"></div>

				<TakeAwaySection content={this.takeAway} />
				<div className="case-hairline"></div>

				<Footer onCaseStudy={true} />
			</div>
		);
	}
}

export default RippleCaseStudy;