import React from 'react';
import { Link } from 'react-router-dom';
import { setToWhite, setToBlack, centerPosition, showArrow } from '../../js/helpers';

import { parallaxOne } from '../../js/parallax.js';

class WorkSlide extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
	      style: null
	    }	
	}
	

	componentDidMount() {
      parallaxOne();
      
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
    	setToWhite();
     return { transform: 'translateY(10px)', opacity: 0, visibility: 'hidden' }
    } else {
    	setToBlack();
      return { transform: 'translateY(0px)', opacity: 1 }
    }
  }

  getStyleImg = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(url === 'flickr' || url === 'mycourses' || url === 'mycosmetics') {
     return "project-image"
    } else if(url === 'ripple' || url === 'weekly' || url === 'displaced') {
     return "project-image-left"
    } else {
      return ""
    }
  }

	
	render() {
	

		return(
			<Link to={"projects/"+this.props.project}>
			<li  className={this.props.isEven ? "slide even" : "slide"}>
				<div className="content project">
					<div style={this.getStyleCounter()}  id="title-revealer" className="left">
						<h1>{this.props.title}</h1>
						<p>{this.props.desc}</p>
						<div className="view">view work</div>
						
					</div>
					<div className={"right " + this.getStyleImg()}>
						<div id={"l" + this.props.number} className={"header-img " + this.props.project + " " + this.state.style + " " }></div>
					</div>
				</div>
			</li>
			</Link>
		);
	}
}

export default WorkSlide;

