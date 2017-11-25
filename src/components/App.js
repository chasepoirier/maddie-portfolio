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
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
         <Route
          render={({ location }) => (
            <TransitionGroup component="main">
              <AnimatedSwitch
                key={location.key}
                location={location}
              >
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/projects"
                  component={Work}
                />
                <Route component={Home} />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}
