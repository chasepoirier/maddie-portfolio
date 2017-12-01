import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { showTitle, hideTitle, setToWhite, setToBlack, centerPosition, showArrow, disableLink, activeLink } from '../../js/helpers';

import { parallaxOne } from '../../js/parallax.js';
import $ from 'jquery';

import { staggerHideTitle } from '../../js/Animation';



class WorkSlide extends React.Component {
	
	constructor(props) {
		super(props);
			
		this.state = {
	      style: null
	    }	
	}

	handleSubmit = (e) => { 
		let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
		staggerHideTitle(this.props.slideCount);

		//parallaxOne();

		if (url === 'projects') {


	    	let path = `projects/${this.props.project}`;
	    	this.props.history.push(path);
	    	

		} else {
			
		}

	  	e.preventDefault();
  
 	 }

	componentDidMount() {
      
      
      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

	    if(url !== 'projects') {
	    	disableLink();
	    } else {
	    	
	    	activeLink();
	    }
  	}

  	componentWillUpdate(nextProps, nextState) {
  		

  		if(this.props.slideCount !== nextProps.slideCount) {
			//this.style = "remove";
  			//setTimeout(() => {this.style = "scaling", 1000 });
  			this.handleAnimation();
  		}
  	}

  	handleAnimation(){
  		this.setState({style: null});
  		setTimeout(function() { this.setState({style: 'scaling'}); }.bind(this), 10);
  	}

  	getStyleCounter = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(url !== 'projects') {
    	disableLink();
    	setToWhite();
    	showTitle();
     
    } else {
    	hideTitle();
    	activeLink();
    	setToBlack();
     
    }
  }

  getStyleTitle = () => {
		$('.large-title').css('margin-left', '500px');
  }


  getStyleImg = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	
	
    if(url === 'flickr') {
    	//$('.large-title').css('margin-left', '0px');
     	return "project-image"

    } else if(url === 'ripple' || url === 'displaced') {
    	//$('.large-title').css('margin-left', '500px');
     	return "project-image-left"

    } else if(url === 'mycosmetics' || url === 'mycourses') {
    	//$('.large-title').css('margin-left', '0px');
     	return "project-image-more"

    } else if(url === 'weekly') {
    	$('.large-title').addClass('title-text');
     	return "project-image-short"

    } else {
    	$('.large-title').removeClass('title-text');
      	return ""
    }
  }


	
	render() {
	

		return(
			<li id={"slide-" + this.props.number} onClick={this.handleSubmit} className={this.props.isEven ? "slide even" : "slide"}>
				<div className="large-title">{this.props.project}</div>
				<div className="content project">
					<div style={this.getStyleCounter()}  id="title-revealer" className="left">
						<h1 className="title-tag">{this.props.title}</h1>
						<p className="title-tag"> {this.props.desc}</p>
						<div className="view title-tag">view work</div>
						
					</div>
					<div className={"right " + this.getStyleImg()}>
						<div id={"l" + this.props.number + "-slide"} className={"header-img " + this.props.project + " " + this.state.style + " " }></div>
					</div>
				</div>
			</li>
		);
	}
}

export default withRouter(WorkSlide);

