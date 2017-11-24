import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeSlide from './slider/HomeSlide';
//import { render, findDOMNode } from 'ReactDOM';

import ReactDOM from 'react-dom';

import Animation from '../js/Animation';
import {TweenMax} from 'gsap';

import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {    

	constructor(props) {
		super(props);
		this.dom = {};
	}

componentWillEnter (cb) {
    //Animation.show(this.dom.root, cb);
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: cb});
    
  }

  componentWillLeave (cb) {
    Animation.hide(this.dom.root, cb);
    
  }

  componentDidMount() {
  	this.dom.root = ReactDOM.findDOMNode(this);
  }
 
  render() {
    return (
      <div className="main-content">
      		<div className="background">
      		</div>

      		
      		<NavLink to="/work">
      			<ReactCSSTransitionGroup
					transitionName="slide"
			          transitionEnterTimeout={750}
			          transitionAppear={true}
			          transitionAppearTimeout={1750}
			          transitionLeaveTimeout={750}
			          component="ul">

      				<HomeSlide />
      			</ReactCSSTransitionGroup>
      		</NavLink>
      		
			
      </div>
    );
  }
}

export default Home;

//<Slider data={ProjectList} />