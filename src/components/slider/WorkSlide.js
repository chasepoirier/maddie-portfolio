import React from 'react';

class WorkSlide extends React.Component {

	
	
	render() {
		
		return(
			<li className={this.props.isEven ? "slide even" : "slide"}>
				<div className="content project">
					<div className="left">
						<h1>{this.props.title}</h1>
						<p>{this.props.desc}</p>
						<a href="#">view work</a>
					</div>
					<div className="right">
						<div className={"header-img " + this.props.project}></div>
					</div>
				</div>
			</li>
		);
	}
}

export default WorkSlide;

