import React, { Component } from 'react';

import ProjectHeader from '../Header';
import Slider from '../slider/wrapper';
import Overview from '../Overview'
import Approach from '../content-sections/Approach';
import ResearchSection from '../content-sections/ResearchSection'

import TwoColsSection from '../content-sections/TwoColsSection';
import ThreeColsSection from '../content-sections/ThreeColsSection';

import TakeAwaySection from '../content-sections/TakeAwaySection';
import Footer from '../../Footer';

import { animateCaseStudyIn } from '../../../js/Animation';

class MycoursesCaseStudy extends Component {
	constructor(props) {
		super(props);
		

		// components for Flickr Case Study
		this.headerInfo = this.props.content.header;

		this.sliderOne = this.props.content.headingSlider;
		this.sliderTwo = this.props.content.sliderTwo;
		this.sliderThree = this.props.content.sliderThree;
		this.sliderFour = this.props.content.sliderFour;
		
		
		this.overview = this.props.content.overview;
		this.research = this.props.content.researchSection;

		this.sketchesImage = this.props.content.sketchesImg;

		this.desktopPrototype = this.props.content.desktopPrototype;
		this.mobilePrototype = this.props.content.mobilePrototype;

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
		//this.renderText(this.refs.desktopPrototypeUrl, this.desktopPrototype.url);

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

	iframeLoaded = () => {
		// this.refs.content.style.display = 'block';
		console.log('loaded');
	}

	render() {
		

		return (

			<div ref="content" className="content">
				<ProjectHeader headerInfo={this.headerInfo} />

				<div className="case-separator"></div>
				
				<div className="case-study-wrapper prototype case-animate">
					<div ref="desktopPrototypeHeading" className="subheading"></div>
					<div ref="desktopPrototypeUrl" className="prototype desktop">
						<iframe className="scaled" src={this.desktopPrototype.url} width="2401" height="1900" allowTransparency="true" frameborder="0"></iframe>
					</div>
				</div>

				<div className="case-hairline"></div>

				<Overview hasImage={false} overview={this.overview} />
				<div className="case-hairline"></div>
				
				<Slider dotColor="black" caseStudy={this.id}  arrowColor="white" isFullWidth={true} slides={this.sliderOne}/>
				<div className="case-hairline"></div>

				<ResearchSection twoCol={true} hasImage={false} content={this.research} />
				<div className="case-hairline"></div>

				<div className="full-width sketch"><img src={this.renderImg(this.sketchesImage)} alt=""/></div>
				<div className="case-hairline"></div>

				<div className="case-study-wrapper"><div className="heading">04 - Approach</div></div>
				<Approach content={this.approach[0]} count={1} />

				<div className="case-study-wrapper image-wrapper-transparent">
					<img src={this.renderImg(this.approachFullImages[0].imageURL)} alt=""/>
				</div>
				<div className="case-hairline"></div>

				<Approach content={this.approach[1]} count={2} />

				<div className="full-width image-wrapper overflow">
					<img src={this.renderImg(this.approachFullImages[1].imageURL)} alt=""/>
				</div>

				<Approach content={this.approach[2]} count={3} />

				<Slider caseStudy={this.id} dotColor="black" arrowColor="black" isFullWidth={false} slides={this.sliderTwo}/>

				<Approach content={this.approach[3]} count={4} />
				
				<Slider caseStudy={this.id} dotColor="black" arrowColor="black" isFullWidth={false} slides={this.sliderThree}/>

				<Approach content={this.approach[4]} count={5} />

				<Slider caseStudy={this.id} dotColor="black" arrowColor="black" isFullWidth={false} slides={this.sliderFour}/>
			
				<div className="case-hairline"></div>				
				<TwoColsSection loaded={this.iframeLoaded} wrapped={false} hasImage={false} content={this.mobilePrototype} />

				<div className="case-study-wrapper mycourses">
					<div className="count">01</div>
					<div className="heading">{this.approach[5].heading}</div>
					<div className="text solution">{this.approach[5].text}</div>
				</div>
				
				<div className="case-separator"></div>

				<div className="case-study-wrapper image-wrapper-transparent flex">
					<img src={this.renderImg(this.approachFullImages[2].imageURL)} alt=""/>
					<img src={this.renderImg(this.approachFullImages[3].imageURL)} alt=""/>
				</div>	
				<div className="case-separator"></div>
				

				<div className="case-study-wrapper mycourses">
					<div className="count">02</div>
					<div className="heading">{this.approach[6].heading}</div>
					<div className="text solution">{this.approach[6].text}</div>
				</div>
				
				<div className="case-separator"></div>

				<div className="case-study-wrapper image-wrapper-transparent flex">
					<img src={this.renderImg(this.approachFullImages[4].imageURL)} alt=""/>
					<img src={this.renderImg(this.approachFullImages[5].imageURL)} alt=""/>
				</div>

				<div className="case-separator"></div>

				<div className="case-study-wrapper image-wrapper-transparent flex centered">
					<img src={this.renderImg(this.approachFullImages[6].imageURL)} alt=""/>
				</div>	

				<div className="case-hairline"></div>
				
				<TakeAwaySection content={this.takeAway} />
				<div className="case-hairline"></div>

				<Footer onCaseStudy={true} />
			</div>
		);
	}
}

export default MycoursesCaseStudy;