import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeSlide from './slider/HomeSlide';

//import AnimatedWrapper from './AnimatedWrapper';
//import { render, findDOMNode } from 'ReactDOM';

import ReactDOM from 'react-dom';

import Animation from '../js/Animation';
import {TweenMax, Elastic} from 'gsap';

import { animateIn, animateOut } from '../js/helpers';

import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {    

  componentWillLeave(cb) {
    //Animation.hide(this.dom.root, cb);

    animateOut(cb);
  }

  componentWillEnter(cb) {
    animateIn(cb);
  }
 
  render() {
    return (

      <TransitionGroup>
        <div id="home" className="main-content">
      		<div className="background"></div>

      		
      		
  
      				<HomeSlide />
      			
      	
          
			
        </div>
      </TransitionGroup>
    );
  }
}
export default Home;

//<Slider data={ProjectList} />