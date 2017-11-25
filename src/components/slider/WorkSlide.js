import React from 'react';
import { Link } from 'react-router-dom';

import { parallaxOne } from '../../js/parallax.js';

class WorkSlide extends React.Component {

	componentDidMount() {
      parallaxOne();
  	}
	
	render() {
		
		return(
			<Link to={"projects/"+this.props.project}>
			<li  className={this.props.isEven ? "slide even" : "slide"}>
				<div className="content project">
					<div className="left">
						<h1>{this.props.title}</h1>
						<p>{this.props.desc}</p>
						<div className="view">view work</div>
					</div>
					<div className="right">
						<div id={"l" + this.props.number} className={"header-img " + this.props.project}></div>
					</div>
				</div>
			</li>
			</Link>
		);
	}
}

export default WorkSlide;

