import React, { Component } from 'react';
import HomeSlide from './HomeSlide';
import WorkSlide from './WorkSlide';


class Slider extends Component {

  constructor(props) {
    super(props);
	
	let projects = [];

    this.state = {
      slideCount: 1
    }
  }

  renderSlides = () => {
	
	this.projects = this.props.data.map((project) => { return <WorkSlide 
    			title={project.name}
                desc={project.bio}
                img={project.img_src}
                key={project.key} 
            />
        });
  }

  nextSlide = () => {
  	if(this.state.slideCount === 7) {
      this.setState({ slideCount: 2 })
  	} else {
  		this.setState({ slideCount: this.state.slideCount + 1 })
  	}
  }

  previousSlide = () => {
      if(this.state.slideCount === 2) {
      this.setState({ slideCount: 7 })
  	} else {
  		this.setState({ slideCount: this.state.slideCount - 1 })
  	}
  }

	render() {

		this.renderSlides();

	  return (
		  <div className="slider">
		    
		    <div className="background">

		    	{this.state.slideCount === 1 ? <HomeSlide nextSlide={this.nextSlide} /> : null}
				{this.state.slideCount === 2 ? this.projects[0] : null}
				{this.state.slideCount === 3 ? this.projects[1] : null}
				{this.state.slideCount === 4 ? this.projects[2] : null}
				{this.state.slideCount === 5 ? this.projects[3] : null}
				{this.state.slideCount === 6 ? this.projects[4] : null}
				{this.state.slideCount === 7 ? this.projects[5] : null}

			</div>

			{this.state.slideCount === 1 ? null : 

			<div className="slide-controls">
				<div onClick={this.previousSlide} className="backward"></div>
				<div className="count">{this.state.slideCount - 1} / 6</div>
				<div onClick={this.nextSlide} className="forward"></div>
		    </div> 

			}
		    

		  </div>

	  );
	}
}

export default Slider;

