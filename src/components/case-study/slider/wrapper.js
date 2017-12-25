import React, { Component } from 'react';
import Slide from './slide';
import '../../../css/case-study/slider.css';
import ProjectInfo from '../../../data/case-study';

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
		document.querySelector('.slide-dot:first-child').style.backgroundColor = '#444';
	}

	componentDidUpdate(prevProps, prevState) {
		let dots = document.querySelectorAll('.slide-dot');
		dots.forEach(function(dot) {
			dot.style.backgroundColor = '#ccc';
		});
		let activeDot = document.querySelector(`#slide-dot-${this.state.count}`);
		activeDot.style.backgroundColor = '#444';
	}

	countUp = () => {
		if(this.state.count === this.slides.length) {
			this.setState({count: 1})
		} else {
			this.setState({count: this.state.count + 1})
		}
	}

	countDown = () => {
		if(this.state.count === 1)	{
			this.setState({count: this.slides.length})
		} else {
			this.setState({count: this.state.count - 1})
		}
	}

	handleDotClick = (e) => {
		let id = e.target.id;
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
				<div id={`slide-dot-${i + 1}`} key={i} onClick={this.handleDotClick} className="slide-dot"></div>
			)
		}
		return dots;
	}

	render() {
		const style = {
	      transform: `translate(-${this.state.count - 1}00%, 0%)`,
	      transition: 'all cubic-bezier(.19,1,.22,1) 1s '
	    }

		return (
			<div className="case-slider case-animate">
				<div className="slide-overflow">
					<ul style={style} className="case-slide-wrapper">
						{this.renderSlides()}
					</ul>
					<div onClick={this.countDown} className="case-back-slide"></div>
					<div onClick={this.countUp} className="case-next-slide"></div>
				</div>
				<div className="dot-control-container">
					{this.renderSlideDots()}
				</div>
			</div>
		);
	}
}

export default Slider;