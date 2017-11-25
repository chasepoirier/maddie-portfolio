import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeSlide from './slider/HomeSlide';
//import AnimatedWrapper from './AnimatedWrapper';
//import { render, findDOMNode } from 'ReactDOM';

//import ReactDOM from 'react-dom';

//import Animation from '../js/Animation';
//import {TweenMax} from 'gsap';

//import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {    
 
  render() {
    return (
      <div className="main-content">
      		<div className="background"></div>

      		
      		<NavLink to="/projects">
  
      				<HomeSlide />
      			
      		</NavLink>
      		
			
      </div>
    );
  }
}
export default Home;

//<Slider data={ProjectList} />