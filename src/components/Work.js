import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider/Slider.js'
import ProjectList from '../data/projects';
import { animateWorkUp } from '../js/Animation';
import $ from 'jquery';
import { TweenMax, Elastic } from 'gsap';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Helmet } from 'react-helmet';
import Swipe from 'react-easy-swipe';

class Work extends Component {

    constructor(props) {
        super(props);
        this.dom = {};

        this.shouldSwipe = true;

        this.projectID = [];
        
        this.state = {  
            isClicked: false
        };
    }

    componentWillUpdate(nextProps, nextState) {

        let width = document.querySelector('body').offsetWidth;
        

        if(nextProps.onProject === true) {
            this.refs.work.classList += ' onProject ';
            this.refs.background.style.width = `${width}px`;
            this.refs.background.style.transform = `translate3d(-${(width - (width*.9)) / 2}px,-100px,0)`;
        } else {
            this.refs.background.style.width = `100%`;
            this.refs.background.style.transform = `translate3d(0px,0px,0)`;
            this.refs.work.classList.remove('onProject');    
        }
        
        //this.renderBGClass(nextProps);
        
    }

    renderBGClass = (state) => {
        //console.log(state.slideCount);
        let count = state.slideCount - 1;
        this.setState({backgroundClass: this.projectID[count]});
    }
    
    componentWillMount() {
        ProjectList.map(project => {
            this.projectID.push(project.project)
        });
    }
    
    componentDidMount() {
        console.log('Mounted');
        this.dom.root = ReactDOM.findDOMNode(this);
        $('#work').css('opacity', '0');
        animateWorkUp();
        
        
    }

    componentWillUnmount() {
        
        TweenMax.to($('#work'), .7, { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1), });
    }

    getStyleBG = () => {
        let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        if (url !== 'projects') {
            return "project-background background"
        } else {
            return "background"
        }
    }

    getStyleBgColoredRight = () => {
        let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        if (url === 'flickr' || url === 'mycourses' || url === 'mycosmetics') {
            return "project-colored-background"
        } else {
            return ""
        }
    }

    getStyleBgColoredLeft = () => {
        let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        if (url === 'ripple' || url === 'weekly' || url === 'displaced') {
            return "project-colored-background-left"
        } else {
            return ""
        }
    }

    getStyleRight = () => {
        if (this.props.slideCount === 1) {

            return { background: 'linear-gradient(135deg, #3a3b44 0%,#121214 100%)', transitionDelay: '.4s' }

        } else if (this.props.slideCount === 2) {

            return { background: 'linear-gradient(135deg, #3a3b44 0%,#121214 100%)', transform: 'translateX(100%)' }

        } else if (this.props.slideCount === 3) {

            return { background: 'linear-gradient(135deg, #1C8AEE 0%,#2346B5 100%)', transform: 'translateX(-100%)', transitionDelay: '.4s' }

        } else if (this.props.slideCount === 4) {

            return { background: 'linear-gradient(135deg, #1C8AEE 0%,#2346B5 100%)', transform: 'translateX(100%)' }

        } else if (this.props.slideCount === 5) {

            return { background: 'linear-gradient(45deg, #F55360 0%,#FF8678 100%)', transform: 'translateX(-100%)', transitionDelay: '.4s' }

        } else if (this.props.slideCount === 6) {

            return { background: 'linear-gradient(45deg, #F55360 0%,#FF8678 100%)', transform: 'translateX(100%)' }
        }

    }

    getStyleLeft = () => {
        if (this.props.slideCount === 1) {

            return { background: 'linear-gradient(45deg, #4DA8CC 0%,#90CCDD 100%)' }

        } else if (this.props.slideCount === 2) {

            return { background: 'linear-gradient(45deg, #0088C6 0%,#20B8FF 100%)', transform: 'translateX(100%)', transitionDelay: '.4s' }

        } else if (this.props.slideCount === 3) {

            return { background: 'linear-gradient(45deg, #0088C6 0%,#20B8FF 100%)', transform: 'translateX(-100%)' }

        } else if (this.props.slideCount === 4) {

            return { background: 'linear-gradient(45deg, #374269 0%,#616C94 100%)', transform: 'translateX(100%)', transitionDelay: '.4s' }

        } else if (this.props.slideCount === 5) {

            return { background: 'linear-gradient(45deg, #374269 0%,#616C94 100%)', transform: 'translateX(-100%)' }

        } else if (this.props.slideCount === 6) {

            return { background: 'linear-gradient(45deg, #4DA8CC 0%,#90CCDD 100%)', transform: 'translateX(100%)', transitionDelay: '.4s' }

        }

    }



     onSwipeMove = (position, event) => {
        let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

        console.log(this.props.onProject);
            
        if(url === 'projects') {


            if(position.x < -50) {            
                this.checkIfShouldSwipe('left');
            }

            if(position.x > 50) {
                this.checkIfShouldSwipe('right');
            }
        }

    }

    checkIfShouldSwipe = (direction) => {

        if(this.shouldSwipe === true) {



            if(direction === 'left') {
                console.log('COUNT UP');
                this.props.countUp();
            } else {
                this.props.countDown();
            }

            this.shouldSwipe = false;
            setTimeout(() => this.shouldSwipe = true, 500);
        }
    }

    render() {

        console.log(this.props.slideCount);

      return (
    	
        <Swipe style={{display: 'inline'}} onSwipeMove={this.onSwipeMove}>
        <div ref="work" id="work" className="main-content">
          <div className="overlay" />

          <Helmet>
            <title>Projects - Madison Yocum - Interaction & Visual Designer</title>
          </Helmet>
  			 <div ref="background" id="background" className={this.getStyleBG()}>
                <div className={`background-colored-mobile ${this.projectID[this.props.slideCount - 1]}`}></div>
  				<div style={this.getStyleRight()} className={this.getStyleBgColoredRight() + " colored-bg right"}></div>
                <div style={this.getStyleLeft()} className={this.getStyleBgColoredLeft() + " colored-bg left"}></div>
  			</div>
        		

  			<Slider clickHandler={this.clickHandler} data={ProjectList} slideCount={this.props.slideCount} countUp={this.props.countUp} countDown={this.props.countDown} />

        </div>

        </Swipe>
    );
  }
}

export default Work;

