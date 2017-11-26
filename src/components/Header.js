import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from '../svgs/logo.svg';
import InlineSVG from 'svg-inline-react';
import { hideArrow, showArrow } from '../js/helpers';


const svgSource = `<svg className="logo" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="logo" transform="translate(-98.000000, -31.000000)" stroke="#000000" stroke-width="1.5">
                  <g id="Group" transform="translate(99.000000, 32.000000)">
                      <polyline id="Path-2-Copy-3" stroke-linecap="round" stroke-linejoin="round" points="13 25.9413663 13 14 20.2941176 22.8998265 28 14 28 26"></polyline>
                      <circle id="Oval" cx="20" cy="20" r="20"></circle>
                  </g>
              </g>
          </g>
      </svg>`;

class Header extends React.Component { 


  checkUrl = () => {
    
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    
    if(url === '') {
     return true;
    } else {
      return false
    }
  }

  componentDidMount() {
    let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    if(url === 'flickr' || url === 'mycourses' || url === 'mycosmetics' || url === 'ripple' || url === 'weekly' || url === 'displaced') {
      showArrow();
    }
    
  }


  render() {
  
    return (

  <header>
    
    <div className="left">
		<NavLink className="logo-container logo" to="/">
			 <InlineSVG src={svgSource}  />
		</NavLink>
    <NavLink className="logo-container arrow" to="/projects"><div onClick={hideArrow} id="back-arrow"></div></NavLink>
		{this.checkUrl() === true ? null : <div className="name header-white">Madison Yocum</div>}
    </div>
    <ul className="right">
      <li onClick={hideArrow}><NavLink id="headers" className="header-white" to="/projects">Work</NavLink></li>
      <li><NavLink className="header-white" to="/about">About</NavLink></li>
      <li><NavLink className="header-white" to="/resume">Resume</NavLink></li>
    </ul>
  </header>
);
  }
}

export default Header;