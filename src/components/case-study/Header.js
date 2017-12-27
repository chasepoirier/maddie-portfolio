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

	renderExternalLinks = () => {
		if(this.info.websiteURL === null) {
			return <a href={this.renderImg(this.info.finalPDF)} rel="noopener noreferrer" target="_blank" className="link-button">{this.info.PDFtitle}</a>
		} else {
			return (
				<span>
					<a href={this.info.websiteURL} rel="noopener noreferrer" target="_blank" className="link-button">{this.info.websiteTitle}</a>
					<a href={this.renderImg(this.info.finalPDF)} rel="noopener noreferrer" target="_blank" className="link-non-button">{this.info.PDFtitle}</a>
				</span>
			)
		}
	}

	render() {
		
		return(
			
			<div className="case-study-wrapper">
				<div className="upper-header case-animate">
					<div className="desc">{this.info.desc}</div>
					<div className="external-links">
						{this.renderExternalLinks()}
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