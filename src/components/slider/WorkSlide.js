import React, { Component } from 'react';

const WorkSlide = (props) => ( 
	<div className="slide">
		<div className="content project">
			<div className="left">
				<h1>{props.title}</h1>
				<p>{props.desc}</p>
				<a href="#">view work</a>
			</div>
			<div className="right">
				<div className="header-img"></div>
			</div>
		</div>
		<div className="colored-bg"></div>
	</div>
);

export default WorkSlide;

