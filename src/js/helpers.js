import $ from "jquery";
import React from "react";
import { TweenMax, Elastic } from 'gsap';
import { parallaxOne  } from './parallax';

export const firstChild = props => {
	const childrenArray = React.Children.toArray(props.children);
	return childrenArray[0] || null;
};

export function setToWhite() {
	window.setTimeout(function(){
		 $('#logo').css('stroke', '#fff');
  		 $('header .right li a, .header-white').css('color', '#fff');
	}, 401);
}

export function setToBlack() {
	window.setTimeout(function(){
		 $('#logo').css('stroke', '#000');
  		 $('header .right li a, .header-white').css('color', '#444');
	}, 401);
}  

export function centerPosition() {
	let slide = $('.slide').toArray();

	if($('.slide').hasClass('even') === true) {
		console.log('even');
	} else {
		console.log(slide);
	}
}

export function showArrow() {
	$('header .left .logo-container.arrow').addClass('showArrow');
	$('header .left .logo-container.logo').addClass('hide');


}

export function hideArrow() {
	$('header .left .logo-container.arrow').removeClass('showArrow');
	$('header .left .logo-container.logo').removeClass('hide');

	parallaxOne();
}


export function disableLink() {
	$('li.slide').addClass('disable-link')
}

export function activeLink() {
	$('li.slide').removeClass('disable-link')
}

export function showTitle() {
	$('.large-title').removeClass('unmount');

	setTimeout(function() {
		$('.large-title').addClass('visible');
	}, 400);
}

export function hideTitle() {
	

	setTimeout(function() {
		$('.large-title').delay(400).removeClass('visible');
	}, 100);

	$('.large-title').addClass('unmount');
}	



