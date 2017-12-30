import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import '../css/home.css';
import '../css/header.css';
import '../css/footer.css'
import '../css/project.css';
import '../css/about.css';
import '../css/animations.css';
import '../css/mobile/main.css';
import '../css/mobile/iphones.css';
import '../css/mobile/case-study.css';
import '../css/mobile/about-mobile.css';
import '../css/mobile/resume-mobile.css';
import '../fonts/style.css'

import  ReactGA from 'react-ga';







import { hideArrow } from "../js/helpers";

import { staggerHideTitle, staggerShowTitle, animateIn, animateOut } from '../js/Animation';


//import PageShell from './PageShell';

// App components
import CaseStudy from './case-study/CaseStudyWrapper';
import Home from './Home';
import Work from './Work';
import About from './About';
import Header from './Header';
import Resume from './Resume';



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          slideCount: 1,
          onProject: false
        }
    }

    componentWillMount() {
        let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

        window.onpopstate = () => {
            url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
            this.checkProject(url, window.event);
        }
        this.checkProject(url, 'test');   
    }

    componentDidMount() {

        ReactGA.initialize('UA-111707855-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
         var width = window.innerWidth;
        
        if (width < 450) {
            
         document.querySelector('#box-home').style.width = `${width}px`;
        }

        let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

        window.onpopstate = () => {
            url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
            this.checkProject(url, window.event);
        }
        this.checkProject(url);      
    }

    checkProject = (url) => {

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

    onProject = () => {
        this.setState({ onProject: true })
    }

    leaveProject = () => {
        this.setState({ onProject: false })   
    }

    

  render() {
    return (
      <div className={`wrapper ${this.state.onProject}`}>
        <Header slideCount={this.state.slideCount} />
       
        
            <Route path="/" component={Home} />
            <Route path="/about" render={({ match })  => <About />} />
            <Route path="/resume" render={({ match }) => <Resume />} />
            <Route path="/projects" render={( {match} ) => <Work onProject={this.state.onProject} slideCount={this.state.slideCount} path={this.url}  countUp={this.nextSlide} countDown={this.previousSlide} />} />
            <Route path="/projects/:id" render={({ match }) => <CaseStudy leaveProject={this.leaveProject} onProject={this.onProject} project={this.state.slideCount} />  } />
      </div>
    );
  }
}
