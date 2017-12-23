import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Document } from 'react-pdf';
import '../css/home.css';
import '../css/header.css';
import '../css/footer.css'
import '../css/project.css';
import '../css/about.css';
import '../css/animations.css';
import '../fonts/style.css'

import { hideArrow } from "../js/helpers";

import { staggerHideTitle, staggerShowTitle, animateIn, animateOut } from '../js/Animation';


//import PageShell from './PageShell';

// App components
import Home from './Home';
import Work from './Work';
import About from './About';
import Header from './Header';
import Resume from './Resume';



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }
    }

    componentDidMount() {
        let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

        window.onpopstate = () => {
            url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
            this.checkProject(url, window.event);
        }
        this.checkProject(url, 'test');
    }

    checkProject = (url, event) => {

        if (url === 'flickr') {
            this.setState({ slideCount: 1 });
            staggerHideTitle(1);
        } else if (url === 'ripple') {
            this.setState({ slideCount: 2 });
            staggerHideTitle(2);
        } else if (url === 'mycourses') {
            this.setState({ slideCount: 3 });
            staggerHideTitle(3);
        } else if (url === 'weekly') {
            this.setState({ slideCount: 4 });
            staggerHideTitle(4);
        } else if (url === 'mycosmetics') {
            this.setState({ slideCount: 5 });
            staggerHideTitle(5);
        } else if (url === 'displaced') {
            this.setState({ slideCount: 6 });
            staggerHideTitle(6);
        } else if (url === 'projects') {
            console.log(event)
            hideArrow();
            animateOut();
            staggerShowTitle(this.state.slideCount);
        } else if (url === '') {
            animateIn();
        } else if (url === 'about' || url === 'resume') {
            animateOut();
        }
    }

    nextSlide = () => {
        if (this.state.slideCount === 6) {
            this.setState({ slideCount: 1 })
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 })
        }
    }

    previousSlide = () => {
        if (this.state.slideCount === 1) {
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
            {/*<Route path="/resume_madisonyocum.pdf" render={() => <Document file="resume_madisonyocum.pdf" />} />*/}
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" render={({ match }) => <Resume />} />
            <Route path="/projects" render={( {match} ) => <Work slideCount={this.state.slideCount} path={this.url}  countUp={this.nextSlide} countDown={this.previousSlide} />} />
            <Route path="/projects/:id" render={({ match }) => <div></div>} />
      </div>
    );
  }
}
