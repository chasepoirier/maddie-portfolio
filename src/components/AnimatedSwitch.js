import React, { Component } from "react";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { TweenMax, Elastic } from 'gsap';
import $ from 'jquery';

export default class AnimatedSwitch extends Switch {
	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0)
		};
	}
	componentWillAppear(cb) {
		const duration = 2.5;
		let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

		if(url === 'projects' || url === '') {
		setTimeout(
			() => TweenMax.to($('.animated-page-wrapper'), duration, { 
				opacity: 1, 
//				height: 0, 
				onComplete() { cb(); }, 
				ease: Elastic.easeOut.config(0.25, 1),
			}), 250)
		}
	}
	componentWillEnter(cb) {

		const duration = .5;
		let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

		if(url === 'projects' || url === '') {
		setTimeout(
			() => TweenMax.to($('.animated-page-wrapper'), duration, { 
				opacity: 1, 
//				height: 0, 
				onComplete() { cb(); }, 
				ease: Elastic.easeOut.config(0.25, 1),
			}), 250)
		}
	}
	componentWillLeave(cb) {
		const duration = .5;
		let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

		if(url === 'projects' || url === '') {
		setTimeout(
			() => TweenMax.to($('.animated-page-wrapper'), duration, { 
				opacity: 0, 
//				height: 0, 
				onComplete() { cb(); }, 
				ease: Elastic.easeOut.config(0.25, 1),
			}), 250)
		}
	}
	render() {
		const style = {
			opacity: Animated.template`${this.state.animate}`,
			transform: Animated.template`
				translate3d(0,${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["12px", "0px"]
			})},0)
			`
		};
		return (
			<Animated.div style={style} className="animated-page-wrapper">
				{super.render()}
			</Animated.div>
		);
	}
};