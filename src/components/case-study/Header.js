import React, {Component} from "react";

class ProjectHeader extends Component {
	constructor(props) {
		super(props);
		this.info = this.props.headerInfo;
	}

	renderImg = (img) => {
		const imageURL = require('../../images/' + img);
		return imageURL;
	}

	render() {
		
		return(
			
			<div className="case-study-wrapper">
				<div className="upper-header case-animate">
					<div className="desc">{this.info.desc}</div>
					<div className="external-links">

						{this.info.websiteURL !== null 
							
							?
							<span>
							<a href={this.info.websiteURL} target="blank" className="link-button">View Website</a>
							<a href={this.renderImg(this.info.finalPDF)} target="blank" className="link-non-button">Or view the investor pitch deck</a>
							</span>
							:
							null
						}
					</div>	
				</div>
				
				<div className="project-info-container case-animate">
					<div className="content">
						<div className="heading">Client</div>
						<div className="text">{this.info.client}</div>
					</div>
					<div className="content">
						<div className="heading">Role</div>
						<div className="text">{this.info.role}</div>
					</div>
					<div className="content">
						<div className="heading">Duration</div>
						<div className="text">{this.info.duration}</div>
					</div>
				</div>
			</div>
		)	
	}
}

export default ProjectHeader;