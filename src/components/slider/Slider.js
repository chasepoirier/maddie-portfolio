import React, { Component } from 'react';
import HomeSlide from './HomeSlide';
import WorkSlide from './WorkSlide';


const Slider = (props) => {
  let projects = props.data.map((project) => {
    return <WorkSlide 
    			title={project.name}
                desc={project.bio}
                img={project.img_src}
                key={project.id} 
            />
  }); 


  return (
	  <div className="slider">
	    
	    <HomeSlide />
		

	    
	  </div>
  );
}

export default Slider;

//		{projects}