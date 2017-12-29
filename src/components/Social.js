import React, { Component } from 'react';

class SocialLinks extends Component {

	componentDidMount() {
		this.isMobile();
	}
	
	isMobile = () => {
		if (this.props.mobile === true) {
			
			this.refs.icons.classList += ' mobile '

			let icons = this.refs.icons.childNodes;
			
			icons.forEach(function(icon) {
				icon.classList += ' animate-mobile'
			});
		}
	}

	render() {
		return (
			<div ref="icons" className="social-container">
	      		<a href="mailto:madisonyocum@gmail.com"><div className="icon email"></div></a>
	      		<a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/madisonyocum"><div className="icon dribbble"></div></a>
	      		<a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/madisonyocum"><div className="icon behance"></div></a>
	      		<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madison-yocum/"><div className="icon linkedin"></div></a>
	  		</div>
		);
	}
}

export default SocialLinks;