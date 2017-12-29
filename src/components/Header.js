import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
//import logo from '../svgs/logo.svg';
import InlineSVG from 'svg-inline-react';
import { hideArrow, showArrow } from '../js/helpers';
import { animateMobileLinksIn, animateMobileLinksOut, animateWorkOut, animateIn, animateOut, animateName, hideName, staggerShowTitle } from '../js/Animation';
import $ from 'jquery';

import SocialLinks from './Social';


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

      if (url === '') {
          return true;
      } else {
          return false
      }
  }

  componentDidMount() {
      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

      if (url === 'flickr' || url === 'mycourses' || url === 'mycosmetics' || url === 'ripple' || url === 'weekly' || url === 'displaced') {
          showArrow();
      }
      if (url !== '') {
          animateName();
      }

  }

  handleSubmit = (e) => {
      this.closeMobileLinks();
      
      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

      if (url !== '') {
          animateIn();
          hideName();
          let path = "/";
          this.props.history.push(path);
      } else {}

      e.preventDefault();

  }

  workHandler = () => {

      this.closeMobileLinks();

      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      let home = $('#home');
      let arrow = $('#back-arrow')

      if (url === 'projects') {
          animateWorkOut();
      }

      if (home.css('display') === 'none') {
          if (arrow.parent().css('visibility') === 'visible') {
              staggerShowTitle(this.props.slideCount);

              hideArrow();
              return

          }
          if (url === 'projects') {
              animateWorkOut();
          } else {


              animateOut();

          }
      } else {

          animateName();
          animateOut();
      }


  }

  arrowHandler = () => {
      hideArrow();
      staggerShowTitle(this.props.slideCount);
  }

  toAboutPage = () => {
      //addAboutClasses();

      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

      if (url === '') {
          animateName();
      }

      animateOut();

  }

  showMobileLinks = () => {
    let nav = this.refs.mobileNav;
    let links = this.refs.mobileLinks;
    
    if (nav.classList.contains('clicked')) {
      links.classList.remove('clicked');
      nav.classList.remove('clicked');
      this.closeMobileLinks();

      
    } else {
      animateMobileLinksIn();
      links.classList += ' clicked'
      nav.classList += ' clicked'
    }
  }

  closeMobileLinks = () => {
    this.refs.mobileNav.classList.remove('clicked');
    this.refs.mobileLinks.classList.remove('clicked');
    animateMobileLinksOut();
    // this.refs.mobileLinks.style.display = 'none'
  }


  render() {

    return (

      <header>
        
        <div className="left">
    		<div onClick={this.handleSubmit} className="logo-container logo" to="/">
    			 <InlineSVG src={svgSource}  />
    		</div>
        <NavLink className="logo-container arrow" to="/projects"><div onClick={this.arrowHandler} id="back-arrow"></div></NavLink>
    		<div style={{visibility: 'hidden'}} className="name header-white">Madison Yocum</div>
        </div>
        <ul className="right">
          <div onClick={this.showMobileLinks} ref="mobileNav" className="mobile-nav"></div>
          
          <li onClick={this.workHandler}><NavLink id="headers" className="header-white" to="/projects">Work</NavLink></li>
          <li><NavLink onClick={this.toAboutPage} className="header-white" to="/about">About</NavLink></li>
          <li><NavLink onClick={this.toAboutPage} className="header-white" to="/resume">Resume</NavLink></li>

        </ul>

        <div ref="mobileLinks" className="mobile-links">
          <div className="center-container">
            <div onClick={this.workHandler} className="mobile-link animate-mobile" ><NavLink id="headers" className="header-white" to="/projects">Work</NavLink></div>
            <div onClick={this.closeMobileLinks} className="mobile-link animate-mobile"><NavLink onClick={this.toAboutPage} className="header-white" to="/about">About</NavLink></div>
            <div onClick={this.closeMobileLinks} className="mobile-link animate-mobile"><NavLink onClick={this.toAboutPage} className="header-white" to="/resume">Resume</NavLink></div>
            <a href="mailto:madisonyocum@gmail.com" className="header-button animate-mobile">SAY HELLO</a>
            <SocialLinks mobile={true} />
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);