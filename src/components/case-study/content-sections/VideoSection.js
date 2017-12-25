import React, { Component } from 'react';

class VideoSection extends Component {
	constructor() {
		super();
		
	}

	componentDidMount() {
		this.renderVideo();
	}

	renderVideo = () => {
		document.querySelector('.content-container').innerHTML = this.props.content.linkURL;
	}

	render() {
		return (
			<span>
				<div className="heading centered">03 - Investor Pitch</div>
				<div className="full-width">
					<div className="video content-container">
					</div>
				</div>
			</span>
		);
	}
}

export default VideoSection;