import React, { Component } from 'react';
import RedRect from '../../svgs/red-rect.svg';
import BluePenta from '../../svgs/blue-penta.svg';
import BlueRect from '../../svgs/blue-rect.svg';
import GreenTri from '../../svgs/green-tri.svg';
import NavyCircle from '../../svgs/navy-circle.svg';
import OrangeTri from '../../svgs/orange-tri.svg';
import PinkCircle from '../../svgs/pink-circle.svg';
import YellowRing from '../../svgs/yellow-ring.svg';
import '../../js/parallax.js';

class HomeSlide extends Component {    
 
  render() {
    return (
      	<div className="background home">
    			<div className="content">
    				<h1>Hello! I'm Madison Yocum.</h1>
    				<p>An aspiring interaction and visual designer, with skillsets in product design and entrepreneurship.</p>
    				<a href="#">view work</a>
    			</div>
          <div id="box" className="shape-container">
            <img id="l1" src={RedRect} alt="Red Rectangle" className="shape red-rect" />
            <img id="l2" src={BluePenta} alt="Blue Pentagon" className="shape blue-penta" />
            <img id="l3" src={BlueRect} alt="Blue Rectangle" className="shape blue-rect" />
            <img id="l4" src={GreenTri} alt="Green Triangle" className="shape green-tri" />
            <img id="l5" src={NavyCircle} alt="Navy Circle" className="shape navy-circle" />
            <img id="l6" src={OrangeTri} alt="Orange Triangle" className="shape orange-tri" />
            <img id="l7" src={PinkCircle} alt="Pink Circle" className="shape pink-circle" />
            <img id="l8" src={YellowRing} alt="Yellow Ring" className="shape yellow-ring" />
          </div>
      	</div>
    );
  }
}
export default HomeSlide;
