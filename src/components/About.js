import React, { Component } from 'react';
import RedRect from '../svgs/red-rect-thick.svg';
import PinkRect from '../svgs/pink-rect.svg';
import GreenTri from '../svgs/green-tri.svg';
import NavyCircle from '../svgs/navy-circle.svg';
import OrangeTri from '../svgs/orange-tri.svg';
import BlueCircle from '../svgs/blue-oval.svg';
import YellowRing from '../svgs/yellow-ring.svg';

import PDF from '../resume_madisonyocum.pdf'

import Footer from './Footer';

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
    		<div className="about_background"></div>
      			<div className="slide about">
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
	    			<div className="content about">
	    				<h1>Hello! I'm Madison Yocum.</h1>
	    				<p>An interaction designer and entrepreneur in my third year at Rochester Institute 
	    				of Technology studying New Media Design and double minoring in Marketing and Advertising
	    				 / Public Relations. Last summer, I was a Design Intern at 
	    				 <a href='https://www.flickr.com' className="about-link" rel="noopener noreferrer" target="_blank"> Flickr / YAHOO </a> 
	    				 in San Francisco, and currently, I'm looking for an internship this upcoming summer of 2018 
	    				 relating to design, product or startups. I strive every day to learn something new, improve my 
	    				 own skills, and create a better world and design solutions through problem-solving, iteration, 
	    				 and a user first mindset.
                        <br></br>
                        <br></br>
                        When I'm not designing, I lead my startups I co-founded called
                       	<a href='http://rippleplatform.io/' className="about-link" rel="noopener noreferrer" target="_blank"> Ripple</a>, which was 
                         <a href='https://cias.rit.edu/news/509' className="about-link" rel="noopener noreferrer" target="_blank"> featured at RIT</a>, 
                         and <a href='http://www.udio-ventures.com/index.html' className="about-link" rel="noopener noreferrer" target="_blank"> Udio Ventures </a> 
                         a current work-in-progress, working alongside my teams learning more about business every day. 
                         I recently <a href='../images/case-studies/about/presentation_final.pdf' className="about-link" rel="noopener noreferrer" target="_blank">spoke and held a workshop </a> 
                         at a business conference on entrepreneurship, product and my career, which was an amazing experience. 
                         If you are looking for a hardworking designer and entrepreneur who enjoys learning and a good challenge,
                         please email or send me a message at 
                         <a href="mailto:madisonyocum@gmail.com?Subject=Hello!" className="about-link"> madisonyocum@gmail.com</a></p>
	    				 <div className="about-buttons">
							<a href={PDF} rel="noopener noreferrer" target="_blank" className="link outlined">View Resume</a>
				         </div>

	    			</div>
	          
				
      	</div>
      	<Footer />
      </div>
    );
  }
}

export default About;

