import React, { Component } from 'react';

const WorkSlide = (props) => ( 

  	<div className="background">
			<div className="content">
				<h1>{props.title}</h1>
				<p>{props.desc}</p>
				<a href="#">view work ></a>
			</div>
  	</div>
);

export default WorkSlide;

