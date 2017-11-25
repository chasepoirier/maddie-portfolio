import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WorkSlide from './WorkSlide';

import Animation from '../../js/Animation';
import TransitionGroup from 'react-transition-group/TransitionGroup';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




class Slider extends Component {

  constructor(props) {
    super(props);
	
	//let projects = [];

	this.dom = {};

   

  }
	
	
  renderSlides = () => {
	
	this.projects = this.props.data.map((project) => { 

		if (project.key % 2 === 0) {
			return <WorkSlide 
    			title={project.name}
                desc={project.bio}
                key={project.key}
                number={project.number}
                project={project.project} 
                
            />
        } else {
        	return <WorkSlide
        		isEven={true}
    			title={project.name}
    			number={project.number}
                desc={project.bio}
                key={project.key} 
                project={project.project} 

            />
        }
        });
  }
	
componentDidMount() {
	this.dom.root = ReactDOM.findDOMNode(this);
}

  componentWillEnter(cb) {
	Animation.show(this.dom.root, cb);
	console.log('here');
  }

  componentWillLeave(cb) {
	Animation.hide(this.dom.root, cb);
  }

	render() {

		this.renderSlides();

		const style = {
	      transform: `translate(-${this.props.slideCount - 1}00%, 0%)`,
	      transition: 'all cubic-bezier(.19,1,.22,1) 1s '
	    }

	  return (

		  <div style={this.divStyle} className="slider">
		    <div id="box" className="overflow">
		    <TransitionGroup style={style} className="work-list" component="ul">
				
					
					{this.projects}
				

			</TransitionGroup>
			</div>

			
			<div className="slide-controls">
				<div onClick={this.props.countDown} className="backward"></div>
				<div className="count">{this.props.slideCount} / 6</div>
				<div onClick={this.props.countUp} className="forward"></div>
		    </div> 

		    

		  </div>

	  );
	}
}

export default Slider;