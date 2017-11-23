import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../svgs/logo.svg';

const Header = () => (
  <header>
    <div className="left">
		<NavLink className="logo-container" exact to="/">
			<img src={logo} alt="logo" className="logo"/>
		</NavLink>
		<div className="name"></div>
    </div>
    <ul className="right">
      <li><NavLink to="/work">Work</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/resume">Resume</NavLink></li>
    </ul>
  </header>
);

export default Header;