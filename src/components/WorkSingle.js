import React, { Component } from 'react';
import { Link } from "react-router-dom";


import Slider from './slider/Slider.js'
import ProjectList from '../data/projects';

import * as Animated from "animated/lib/targets/react-dom";
import AnimatedWrapper from './AnimatedWrapper';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class WorkSingle extends Component {    

	constructor(props) {
		super(props);

		this.state = {
	      slideCount: 1,
	      animations: []
	    }
	}

  nextSlide = () => {
  	if(this.state.slideCount === 6) {
      this.setState({ slideCount: 1 })
  	} else {
  		this.setState({ slideCount: this.state.slideCount + 1 })
  	}
  }

  previousSlide = () => {
      if(this.state.slideCount === 1) {
      this.setState({ slideCount: 6 })
  	} else {
  		this.setState({ slideCount: this.state.slideCount - 1 })
  	}
  }
 
  render() {

  	let styleRight = { backgroundColor: 'blue' }
  	let styleLeft = { backgroundColor: 'blue' }


  	if(this.state.slideCount === 1) {
  		styleRight = { backgroundColor: '#3A3B44', transitionDelay: '.4s'}
  		styleLeft = { backgroundColor: '#3A3B44'}
  	} else if(this.state.slideCount === 2) {
  		styleRight = { backgroundColor: '#20B8FF', transform: 'translateX(100%)'}
  		styleLeft = { backgroundColor: '#20B8FF', transform: 'translateX(100%)', transitionDelay: '.4s'}
  	} else if(this.state.slideCount === 3) {
  		styleLeft = { backgroundColor: '#1C8AEE', transform: 'translateX(-100%)'}
  		styleRight = { backgroundColor: '#1C8AEE', transform: 'translateX(-100%)', transitionDelay: '.4s'}
  	} else if(this.state.slideCount === 4) {
  		styleRight = { backgroundColor: '#374269', transform: 'translateX(100%)'}
  		styleLeft = { backgroundColor: '#374269', transform: 'translateX(100%)', transitionDelay: '.4s'}
  	} else if(this.state.slideCount === 5) {
  		styleLeft = { backgroundColor: '#F55360', transform: 'translateX(-100%)'}
  		styleRight = { backgroundColor: '#F55360', transform: 'translateX(-100%)', transitionDelay: '.4s'}
  	} else if(this.state.slideCount === 6) {
  		styleRight = { backgroundColor: '#90CCDD', transform: 'translateX(100%)'}
  		styleLeft = { backgroundColor: '#90CCDD', transform: 'translateX(100%)', transitionDelay: '.4s'}
  	} 

    return (
    	

      <div className="main-content">
			<div className="background">
				<div style={styleRight} className="colored-bg right"></div>
        <div style={styleLeft} className="colored-bg left"></div>
			</div>
      		

			
      </div>
    );
  }
}

export default WorkSingle;

