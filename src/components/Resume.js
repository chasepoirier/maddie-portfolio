import React, { Component } from 'react';
import $ from 'jquery';
import '../css/resume.css';


class Resume extends Component {    

	componentDidMount() {
		$('#home').css('dsplay', 'none');
	}
 
  render() {
    return (
      <div className="main-content">
			<h1>Resume</h1>
      </div>
    );
  }
}

export default Resume;

