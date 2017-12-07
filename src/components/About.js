import React, { Component } from 'react';

import RedRect from '../svgs/red-rect-thick.svg';
import PinkRect from '../svgs/pink-rect.svg';
import GreenTri from '../svgs/green-tri.svg';
import NavyCircle from '../svgs/navy-circle.svg';
import OrangeTri from '../svgs/orange-tri.svg';
import BlueCircle from '../svgs/blue-oval.svg';
import YellowRing from '../svgs/yellow-ring.svg';
import SocialLinks from './Social';


import $ from 'jquery';
import { TweenMax, Elastic } from 'gsap';

import { setToBlack, hideArrow } from '../js/helpers';

class About extends Component { 

	componentDidMount() {
		hideArrow();
		setToBlack();
		TweenMax.fromTo($('.about.main-content'), .7, 
		{ transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1),},
		{ transform: 'translateY(0px)', opacity: 1, delay:.4,ease: Elastic.easeOut.config(0.25, 1),});
   	
   }   
 
  render() {
    return (
    	<div className="about main-content">
    		<div className="background"></div>
      			<div className="slide about">
	    			<div className="content about">
	    				<h1>Hello! I'm Madison Yocum.</h1>
	    				<p>An interaction and visual designer in my third year at Rochester 
	            Institute of Technology studying New Media Design. Last summer, I was a 
	            Design Intern at Flickr / Yahoo in San Francisco, and currently I'm looking 
	            for an internship this upcoming summer of 2018 relating to design, product 
	            or startups. I strive every day to learn something new, improve my own skills, 
	            and create a better world and design solutions through problem solving, iteration, 
	            and a user first mindset.
	            <br /><br />
	            When I'm not designing, I lead my startup I co-founded called Ripple, which was featured 
	            at RIT and work with my team learning more about entrepreneurship and business 
	            everyday. If you are looking for a hardworking designer and entrepreneur, someone with a 
	            understanding for modern design and the tech / product industry, and enjoys learning, 
	            please email or send me a message at madisonyocum@gmail.com</p>
	    				<div className="about-buttons">
							<a href="#" className="link outlined">View Resume</a>
							<a target="blank" href="https://dribbble.com/madisonyocum" className="link">Dribbble</a>
							<a target="blank" href="https://www.behance.net/madisonyocum" className="link">Behance</a>
							<a target="blank" href="https://www.linkedin.com/in/madison-yocum/" className="link">LinkedIn</a>
				          </div>

	    			</div>
	          <div className="about-pic">
					<div to="/projects" id="box-home" className="shape-container">
			            <img id="l1" src={RedRect} alt="Red Rectangle" className="shape red-rect" />
			            <img id="l3" src={PinkRect} alt="Blue Rectangle" className="shape blue-rect" />
			            <img id="l4" src={GreenTri} alt="Green Triangle" className="shape green-tri" />
			            <img id="l5" src={NavyCircle} alt="Navy Circle" className="shape navy-circle" />
			            <img id="l6" src={OrangeTri} alt="Orange Triangle" className="shape orange-tri" />
			            <img id="l7" src={BlueCircle} alt="Pink Circle" className="shape pink-circle" />
			            <img id="l8" src={YellowRing} alt="Yellow Ring" className="shape yellow-ring" />
		         	</div>
	          </div>

	          

	          <div className="footer-about">
	          <div className="contact-container">
	            <a className="contact" href="mailto:madisonyocum@gmail.com">Contact</a>
	            <div className="copyright">© Madison Yocum 2017</div>
	          </div> 
	      
	            <SocialLinks />
	          </div>
      </div>
      </div>
    );
  }
}

export default About;

