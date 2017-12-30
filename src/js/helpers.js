import $ from "jquery";
import React from "react";

export const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};


export function setToWhite() {
    window.setTimeout(function() {
        $('.static #logo').css('stroke', '#fff');
        $('header.static .right li a, .static .header-white').css('color', '#fff');
        $('.static .mobile-nav').css('background-color', '#fff');

        document.querySelector('.mobile-nav').classList += ' toWhite';
        
    }, 401);
}

export function setToBlack() {
    window.setTimeout(function() {
        $('.static #logo').css('stroke', '#000');
        $('header.static .right li a, .header-white').css('color', '#444');
        $('.static .mobile-nav').css('background-color', '#000');
        document.querySelector('.mobile-nav').classList.remove('toWhite');
    }, 401);
}

export function centerPosition() {
    let slide = $('.slide').toArray();

    if ($('.slide').hasClass('even') === true) {
        console.log('even');
    } else {
        console.log(slide);
    }
}

export function showArrow() {
    $('header.static .left .logo-container.arrow').addClass('showArrow');
    $('header.static .left .logo-container.logo').addClass('hide');


}

export function hideArrow() {
    $('header.static .left .logo-container.arrow').removeClass('showArrow');
    $('header.static .left .logo-container.logo').removeClass('hide');

    //parallaxOne();
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

export function addAboutClasses() {
    $('.slide').removeClass('home');
    $('.slide').addClass('about');

    $('.slide .content').removeClass('home');
    $('.slide .content').addClass('about');
}