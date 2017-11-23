import React, { Component } from 'react';
import Slider from './slider/Slider.js'
import ProjectList from '../data/projects';

class Home extends Component {    
 
  render() {
    return (
      <div className="main-content">
			   <Slider data={ProjectList} />
      </div>
    );
  }
}

export default Home;

