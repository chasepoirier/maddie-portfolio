import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

import ReactDOM from 'react-dom';
import Slider from './slider/Slider.js'
import ProjectList from '../data/projects';

import Animation from '../js/Animation';

import * as Animated from "animated/lib/targets/react-dom";
import AnimatedWrapper from './AnimatedWrapper';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Helmet } from 'react-helmet';

class Work extends Component {    

	constructor(props) {
		super(props);
    this.dom = {};

   
		
    this.state = {
      isClicked: false
    };

	}

  componentDidMount() {
    this.dom.root = ReactDOM.findDOMNode(this);

    
  }

  getStyleBG = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(url !== 'projects') {
     return "project-background background"
    } else {
      return "background"
    }
  }

  getStyleBgColoredRight = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(url === 'flickr' || url === 'mycourses' || url === 'mycosmetics') {
     return "project-colored-background"
    } else {
      return ""
    }
  }

  getStyleBgColoredLeft = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(url === 'ripple' || url === 'weekly' || url === 'displaced') {
     return "project-colored-background-left"
    } else {
      return ""
    }
  }

  getStyleRight = () => {
    

    if(this.props.slideCount === 1) {

      return { backgroundColor: '#3A3B44', transitionDelay: '.4s' }
                      //styleLeft: {backgroundColor: '#3A3B44'}});

    } else if(this.props.slideCount === 2) {
      return { backgroundColor: '#20B8FF', transform: 'translateX(100%)'}
                      //styleLeft: {backgroundColor: '#20B8FF', transform: 'translateX(100%)', transitionDelay: '.4s'}});

    } else if(this.props.slideCount === 3) {

      //this.styleLeft = { backgroundColor: '#1C8AEE', transform: 'translateX(-100%)'}
      return  { backgroundColor: '#1C8AEE', transform: 'translateX(-100%)', transitionDelay: '.4s'} 
                      //{ styleLeft: {backgroundColor: '#1C8AEE', transform: 'translateX(-100%)'}
    } else if(this.props.slideCount === 4) {

      return { backgroundColor: '#374269', transform: 'translateX(100%)'}
                      //styleLeft: {backgroundColor: '#374269', transform: 'translateX(100%)', transitionDelay: '.4s'}});

      //this.setState({ backgroundColor: '#374269', transform: 'translateX(100%)'})
      //this.styleLeft = { backgroundColor: '#374269', transform: 'translateX(100%)', transitionDelay: '.4s'}
    } else if(this.props.slideCount === 5) {

      return { backgroundColor: '#F55360', transform: 'translateX(-100%)', transitionDelay: '.4s'}

     //styleLeft: {backgroundColor: '#F55360', transform: 'translateX(-100%)'},
    } else if(this.props.slideCount === 6) {

      return { backgroundColor: '#90CCDD', transform: 'translateX(100%)'}

      //                styleLeft: {backgroundColor: '#90CCDD', transform: 'translateX(100%)', transitionDelay: '.4s'}});
    } 
    
  }

  getStyleLeft = () => {
    
    

    if(this.props.slideCount === 1) {

       //return {backgroundColor: '#3A3B44'}
                      //styleLeft: {backgroundColor: '#3A3B44'}});

    } else if(this.props.slideCount === 2) {
      return {backgroundColor: '#20B8FF', transform: 'translateX(100%)', transitionDelay: '.4s'}
                      //styleLeft: {backgroundColor: '#20B8FF', transform: 'translateX(100%)', transitionDelay: '.4s'}});

    } else if(this.props.slideCount === 3) {

      //this.styleLeft = { backgroundColor: '#1C8AEE', transform: 'translateX(-100%)'}
      return {backgroundColor: '#1C8AEE', transform: 'translateX(-100%)'}
                      //{ styleLeft: {backgroundColor: '#1C8AEE', transform: 'translateX(-100%)'}
    } else if(this.props.slideCount === 4) {

      return {backgroundColor: '#374269', transform: 'translateX(100%)', transitionDelay: '.4s'}
                      //styleLeft: {backgroundColor: '#374269', transform: 'translateX(100%)', transitionDelay: '.4s'}});

      //this.setState({ backgroundColor: '#374269', transform: 'translateX(100%)'})
      //this.styleLeft = { backgroundColor: '#374269', transform: 'translateX(100%)', transitionDelay: '.4s'}
    } else if(this.props.slideCount === 5) {

      return {backgroundColor: '#F55360', transform: 'translateX(-100%)'}

     //styleLeft: {backgroundColor: '#F55360', transform: 'translateX(-100%)'},
    } else if(this.props.slideCount === 6) {

      return {backgroundColor: '#90CCDD', transform: 'translateX(100%)', transitionDelay: '.4s'}

      //                styleLeft: {backgroundColor: '#90CCDD', transform: 'translateX(100%)', transitionDelay: '.4s'}});
    } 
    
  }

  
 
  render() {

  	let styleRight = { backgroundColor: 'blue' }
  	//let this.styleLeft = { backgroundColor: 'blue' }
    

  	

    return (
    	

      <div className="main-content">
      <Helmet>
        <title>Projects - Madison Yocum - Interaction & Visual Designer</title>
      </Helmet>
			<div className={this.getStyleBG()}>
        <TransitionGroup>
				  <div style={this.getStyleRight()} className={this.getStyleBgColoredRight() + " colored-bg right"}></div>
          <div style={this.getStyleLeft()} className={this.getStyleBgColoredLeft() + " colored-bg left"}></div>
        </TransitionGroup>
			</div>
      		

			<Slider clickHandler={this.clickHandler} data={ProjectList} slideCount={this.props.slideCount} countUp={this.props.countUp} countDown={this.props.countDown} />
      </div>
    );
  }
}

export default Work;

