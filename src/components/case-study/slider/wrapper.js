import React, { Component } from 'react';
import Slide from './slide';
import '../../../css/case-study/slider.css';

class Slider extends Component {
	constructor(props) {
		super(props);
		
		this.slides = this.props.slides;

		this.state = {
			count: 1
		}
	}

	componentDidMount() {		
		this.setState({count: 1});
		
		this.refs.slideDot1.className += ' active ';
	}

	countUp = (e) => {
		if(this.state.count === this.slides.length) {
			this.setState({count: 1})
			this.handleDotChange(e , 1 );
		} else {
			this.setState({count: this.state.count + 1})
			this.handleDotChange(e , this.state.count + 1);
		}
	}

	countDown = (e) => {
		if(this.state.count === 1)	{
			this.setState({count: this.slides.length})
			this.handleDotChange(e , this.slides.length );
		} else {
			this.setState({count: this.state.count - 1})
			this.handleDotChange(e , this.state.count - 1 );	
		}
	}

	handleDotChange = (e, count) => {
		let dots = e.target.parentElement.parentElement.parentElement.children[1].childNodes;
		let dotColor = this.props.dotColor;

		dots.forEach(function(dot) {
			dot.classList.remove('active');
		});
		dots[count - 1].className += ' active ';
	}

	handleDotClick = (e) => {
		let id = e.target.id;
		let siblings = e.target.parentNode.childNodes;
		let dotColor = this.props.dotColor;

		siblings.forEach(function(dot) {
			dot.classList.remove('active');
		});

		e.target.className += ' active ';

		let newID = id.replace('slide-dot-', '');
		this.setState({count: parseInt(newID)})

	}

	renderSlides = () => {
		let slides = [];
		this.props.slides.map(slide => {
			slides.push(<Slide key={slide.url} imageURL={slide.url} />)
		})
		return slides;
	}

	renderSlideDots = () => {
		let dots = [];
		for(let i=0; i<this.slides.length; i++) {
			dots.push(
				<div ref={`slideDot${i + 1}`} 
					 id={`slide-dot-${i + 1}`} 
					 key={i} onClick={this.handleDotClick} 
					 className={`slide-dot ${this.props.dotColor}`}>
				</div>
			);
		}		
		return dots;
	}

	renderSlideStyle = () => {
		if(this.props.isFullWidth === false) {
			return "case-slider case-data-animated wrapped " + this.props.caseStudy
		} else {
			return "case-slider case-data-animated " + this.props.caseStudy
		}
	}

	render() {
		const style = {
	      transform: `translate(-${this.state.count - 1}00%, 0%)`,
	      transition: 'all cubic-bezier(.19,1,.22,1) 1s '
	    }

		return (
			<div className={this.renderSlideStyle()}>
			<div className="slider-container">
				<div className="slide-overflow">
					<ul style={style} className="case-slide-wrapper">
						{this.renderSlides()}
					</ul>
					<div onClick={this.countDown} className={this.props.arrowColor === 'black' ? "case-back-slide" : "case-back-slide white"}></div>
					<div onClick={this.countUp} className={this.props.arrowColor === 'black' ? "case-next-slide" : "case-next-slide white"}></div>
				</div>
			</div>
				<div className="dot-control-container">
					{this.renderSlideDots()}
				</div>
			</div>
		);
	}
}

export default Slider;