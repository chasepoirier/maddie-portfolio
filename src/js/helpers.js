import $ from "jquery";
import React from "react";

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
	}, 101);
}  

export function centerPosition() {
	let slide = $('.slide').toArray();

	if($('.slide').hasClass('even') === true) {
		console.log('even');
	} else {
		console.log(slide);
	}
}

export function slidePosition() {
	
}

export function showArrow() {
	$('header .left .logo-container.arrow').addClass('showArrow');
	$('header .left .logo-container.logo').addClass('hide');
}

export function hideArrow() {
	$('header .left .logo-container.arrow').removeClass('showArrow');
	$('header .left .logo-container.logo').removeClass('hide');
}