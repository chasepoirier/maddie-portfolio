import React from 'react';
import RedRect from '../../svgs/red-rect.svg';
import BluePenta from '../../svgs/blue-penta.svg';
import BlueRect from '../../svgs/blue-rect.svg';
import GreenTri from '../../svgs/green-tri.svg';
import NavyCircle from '../../svgs/navy-circle.svg';
import OrangeTri from '../../svgs/orange-tri.svg';
import PinkCircle from '../../svgs/pink-circle.svg';
import YellowRing from '../../svgs/yellow-ring.svg';
import SocialLinks from '../Social';
import { parallax } from '../../js/parallax.js';
import { NavLink } from 'react-router-dom';
import { animateOut, animateName } from '../../js/Animation';

import { withRouter } from 'react-router-dom';
import Swipe from 'react-easy-swipe';

class HomeSlide extends React.Component { 

  componentDidMount() {
      parallax();
  }

  handleAnimation = () => {
      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

      if (url !== 'projects') {
          return "project-background background"
      } else {
          return "background"
      }
  }

  pageTransition = () => {
      animateOut();
      animateName();
  }

    swipeToProjects = () => {
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

      if(url === '') {
            this.props.history.push('/projects');
            this.pageTransition();
        }
  }

  render() {

    return ( 
       <Swipe style={{display: 'inline'}} onSwipeLeft={this.swipeToProjects}
                onSwipeRight={this.swipeToProjects} >
      <div style={this.props.style} className="slide home">
    			<div className="content home">
    				<h1>Hello! I'm Madison Yocum.</h1>
    				<p>A remote product designer and entrepreneur, working with startups and product companies.</p>
    				<div className="view">view work</div>
            <div className="slide-controls mobile-controls">
                <div onClick={this.props.countDown} className="backward"></div>
                <div className="count">Swipe</div>
                <div onClick={this.props.countUp} className="forward"></div>
            </div> 
    			</div>

          <NavLink onClick={this.pageTransition} to="/projects" id="box-home" className="shape-container">
            <img id="l1" src={RedRect} alt="Red Rectangle" className="shape red-rect" />
            <img id="l2" src={BluePenta} alt="Blue Pentagon" className="shape blue-penta" />
            <img id="l3" src={BlueRect} alt="Blue Rectangle" className="shape blue-rect" />
            <img id="l4" src={GreenTri} alt="Green Triangle" className="shape green-tri" />
            <img id="l5" src={NavyCircle} alt="Navy Circle" className="shape navy-circle" />
            <img id="l6" src={OrangeTri} alt="Orange Triangle" className="shape orange-tri" />
            <img id="l7" src={PinkCircle} alt="Pink Circle" className="shape pink-circle" />
            <img id="l8" src={YellowRing} alt="Yellow Ring" className="shape yellow-ring" />
          </NavLink>

          <div className="footer-home">
          <div className="slide-controls">
            <div onClick={this.props.countDown} className="backward"></div>
            <div className="count">Use Keys</div>
            <div onClick={this.props.countUp} className="forward"></div>
          </div> 
      
            <SocialLinks />
          </div>
      </div>
      </Swipe>
    );
  }
  
}
export default withRouter(HomeSlide);

