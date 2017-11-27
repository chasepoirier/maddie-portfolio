import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeSlide from './slider/HomeSlide';

//import AnimatedWrapper from './AnimatedWrapper';
//import { render, findDOMNode } from 'ReactDOM';

import ReactDOM from 'react-dom';

import {withRouter} from 'react-router-dom';

//import Animation from '../js/Animation';
import {TweenMax, Elastic} from 'gsap';

import { animateIn, animateOut } from '../js/Animation';

import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {  

constructor()  {
  super();

  this.state = {
    url: false
  }
}


  componentDidMount() {
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    
    if(url === '') {
     this.setState({url: true})
    } else {
      this.setState({url: false})
    }
  }
  
 
  render() {
    let style = {transform: 'scale(.85,.85)', opacity: 0}
    return (
        

        <TransitionGroup>
        {this.state.url === true ? 
        <div id="home" className="main-content">
      		<div className="background"></div>
      				<HomeSlide />
        </div>
        : 
        <div id="home" style={{display: 'none'}} className="main-content">
            <div className="background"></div>
                <HomeSlide style={style} />
          </div>
        }
        </TransitionGroup>

    );
  }
}
export default Home;

//<Slider data={ProjectList} />