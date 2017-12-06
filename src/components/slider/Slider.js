import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WorkSlide from './WorkSlide';

import { showArrow, animateOut, hideArrow } from '../../js/helpers';

import { TweenMax, Elastic } from 'gsap';
import { parallaxOne } from '../../js/parallax';

import { animateFooter, staggerShowTitle, staggerHideTitle  } from '../../js/Animation';

import Animation from '../../js/Animation';
import TransitionGroup from 'react-transition-group/TransitionGroup';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import keydown from 'react-keydown';

import { withRouter } from 'react-router-dom';

import $ from 'jquery';
import SocialLinks from '../Social';

class Slider extends Component {

  constructor(props) {
    super(props);
	
	//let projects = [];

	this.state = {
		exec: true,
	}


	this.dom = {};

	this.array = [];
	this.bound_event = this._handleKeyDown.bind(this);

  }
		

	
	
  renderSlides = () => {
	
	this.projects = this.props.data.map((project) => { 
		this.array.push(project);

		if (project.key % 2 === 0) {
			
			return <WorkSlide 
    			title={project.name}
                desc={project.bio}
                key={project.key}
                number={project.number}
                project={project.project} 
                slideCount={this.props.slideCount}
                
            />
        } else {
        	return <WorkSlide
        		isEven={true}
    			title={project.name}
    			number={project.number}
                desc={project.bio}
                slideCount={this.props.slideCount}
                key={project.key} 
                project={project.project} 

            />
        }
        });
  }


  componentWillUnmount() {
  	window.removeEventListener("keydown", this.bound_event );	
  }

  componentDidMount() {
	this.dom.root = ReactDOM.findDOMNode(this);


	window.addEventListener("keydown", this.bound_event);	

	
	animateFooter();
	//parallaxOne();

}

  _handleKeyDown = (event) => {
				    
			
			
			let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

			//console.log(event)

			if(event.key === 'ArrowRight' && url === 'projects' && $('#home').css('display') === 'none' ) {
				this.props.countUp();

			} else if(event.key === 'ArrowLeft' && url === 'projects') {
				//alert('go down')
				this.props.countDown();
			} else if(event.key === 'Enter' || event.key === 'ArrowUp' || event.key === ' ' ) {
				

				
				if(url === 'projects' && $('#home').css('display') === 'none'){
					showArrow();
					staggerHideTitle(this.props.slideCount);

					if(this.props.slideCount === 1) this.props.history.push('/projects/' + this.array[0].project);
					if(this.props.slideCount === 2) this.props.history.push('/projects/' + this.array[1].project);
					if(this.props.slideCount === 3) this.props.history.push('/projects/' + this.array[2].project);
					if(this.props.slideCount === 4) this.props.history.push('/projects/' + this.array[3].project);
					if(this.props.slideCount === 5) this.props.history.push('/projects/' + this.array[4].project);
					if(this.props.slideCount === 6) this.props.history.push('/projects/' + this.array[5].project);

				} else {
					return
				}

			} else if(event.key === 'ArrowLeft' || event.key === 'ArrowDown' || event.key === 'Backspace' && url !== 'projects') {
				if(url === 'flickr' || url === 'mycourses' || url === 'mycosmetics' || url === 'ripple' || url === 'weekly' || url === 'displaced') {
					staggerShowTitle(this.props.slideCount);
					hideArrow();
					this.props.history.goBack();
				}
			} else if(event.key === 'ArrowRight' && url !== 'projects') {
				event.preventDefault();
			}





	}
	

  getStyleCounter = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(url !== 'projects') {
     return { transform: 'translateY(10px)', opacity: 0, visibility: 'hidden' }
    } else {
      return { transform: 'translateY(0px)', opacity: 1 }
    }
  }

  arrowHandler = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	//alert(url);

    if(url !== 'projects') {
     showArrow();
    }
  }

	render() {

		this.renderSlides();

		const style = {
	      transform: `translate(-${this.props.slideCount - 1}00%, 0%)`,
	      transition: 'all cubic-bezier(.19,1,.22,1) 1s '
	    }

	  return (

	  	<TransitionGroup>
		  <div style={this.divStyle} onClick={this.arrowHandler} className="slider">
		    <div id="box" className="overflow">
		    <ul style={style} className="work-list" onClick={this.props.clickHandler} >
				
					
					{this.projects}
				

			</ul>
			</div>

			<div style={this.getStyleCounter()} className="footer">
				<div className="slide-controls">
					<div onClick={this.props.countDown} className="backward"></div>
					<div className="count">{this.props.slideCount} / 6</div>
					<div onClick={this.props.countUp} className="forward"></div>
			    </div> 
			
		    	<SocialLinks />
		    </div>

		  </div>
		  </TransitionGroup>

	  );
	}
}

export default withRouter(Slider);