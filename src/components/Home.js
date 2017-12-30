import React, { Component } from 'react';
import HomeSlide from './slider/HomeSlide';
import { animateOut, animateName } from '../js/Animation';
import $ from 'jquery';
import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6



class Home extends Component {

  constructor() {
      super();

      this.state = {
          url: false
      }
      this.bound = this._handleKeyDown.bind(this)
  }

  componentWillMount() {
      document.addEventListener("keydown", this.bound);
  }

  _handleKeyDown = (event) => {
      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      if (event.key === 'ArrowRight' || event.key === 'Enter') {
          if (url === '' && $('#home').css('display') === 'block') {
              animateOut();
              animateName();
              this.props.history.push('/projects');
          }
      }
  }


  componentDidMount() {
      let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
      if (url === '') {
          this.setState({ url: true })
      } else {
          this.setState({ url: false })
      }
  }




  render() {
  let style = {transform: 'scale(.85,.85)', opacity: 0}
  return (
      

      <TransitionGroup>

      

      {this.state.url === true 

      ? 
        <div id="home" className="main-content">
    		  <div className="background"></div>
    				<HomeSlide />
        </div>

      :
        <div id="home" style={{display: 'none'}} className="main-content">
          <div className="background"></div>
              <HomeSlide style={style} />
        </div>
      }

      
      </TransitionGroup>

    );
  }
}
export default Home;

//<Slider data={ProjectList} />