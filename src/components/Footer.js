import React, { Component } from 'react';
import SocialLinks from './Social';

class Footer extends Component {
	constructor() {	
		super();
	}

	render() {
		return (
			<div className="footer-about">
				<div className="footer-container">
					<div className="center-content">
						<div className="footer-text">I would love to talk with you!</div>
						<a href="mailto:madisonyocum@gmail.com" className="footer-button">SAY HELLO</a>
					</div>
					<div className="bottom">
						<div className="contact-container">
		            		<a href="/" className="copyright">Madison Yocum</a>
		          		</div> 
		            	<SocialLinks />
					</div>
				</div>
	        </div>
		)
	}
}

export default Footer;