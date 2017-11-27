import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import '../css/home.css';
import '../css/header.css';
import '../css/project.css';
import '../css/animations.css';
import '../fonts/style.css'

import TransitionGroup from "react-transition-group/TransitionGroup";
import { firstChild } from "../js/helpers";
import AnimatedSwitch from "./AnimatedSwitch";

import { spring, AnimatedRoute } from 'react-router-transition';

//import PageShell from './PageShell';

// App components
import Home from './Home';
import Work from './Work';
import About from './About';
import Header from './Header';




export default class App extends Component {
  constructor(props) {
    super(props);
    
    let url = "";

    this.state = {
        slideCount: 1,
        url: null
      }
  }

  nextSlide = () => {
    if(this.state.slideCount === 6) {
      this.setState({ slideCount: 1 })
    } else {
      this.setState({ slideCount: this.state.slideCount + 1 })
    }
  }

  previousSlide = () => {
      if(this.state.slideCount === 1) {
      this.setState({ slideCount: 6 })
    } else {
      this.setState({ slideCount: this.state.slideCount - 1 })
    }
  }

  setUrl = (url) => {
    this.url = url
  }

  render() {
    return (
      <div className="wrapper">
        <Header slideCount={this.state.slideCount} />
        <div id="overlay" />
            <Route path="/" component={Home} />
            <Route path="/projects" render={( {match} ) => <Work slideCount={this.state.slideCount} path={this.url}  countUp={this.nextSlide} countDown={this.previousSlide} />} />
            <Route path="/projects/:id" render={({ match }) => <div></div>} />
      </div>
    );
  }
}
