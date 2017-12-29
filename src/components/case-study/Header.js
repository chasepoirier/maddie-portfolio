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
			
			<div className="case-study-wrapper header">
				<div className="upper-header">
					<div className="desc case-header-animated">{this.info.desc}</div>
					<div className="external-links case-header-animated">
						{this.renderExternalLinks()}
					</div>	
				</div>
				
				<div className="project-info-container">
					<div className="content ">
						<div className="heading case-header-animated ">Client</div>
						<div className="text case-header-animated">{this.info.client}</div>
					</div>
					<div className="content ">
						<div className="heading case-header-animated">Role</div>
						<div className="text case-header-animated">{this.info.role}</div>
					</div>
					<div className="content ">
						<div className="heading case-header-animated">Duration</div>
						<div className="text case-header-animated">{this.info.duration}</div>
					</div>
					<div className="content mobile case-header-animated">
						<div className="external-links">
							{this.renderExternalLinks()}
						</div>	
					</div>
				</div>
			</div>
		)	
	}
}

export default ProjectHeader;