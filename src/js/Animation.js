import { TweenMax, Elastic, Power3, Power2, Power4, Expo } from 'gsap';
import $ from "jquery";


export function animateFooter() {
    TweenMax.fromTo(('.footer .slide-controls'), .4, { transform: 'translateY(10px)', opacity: 0 }, { transform: 'translateY(0px)', opacity: .6, delay: .7, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)' });
    TweenMax.staggerFromTo(('.footer .icon'), .2, { transform: 'translateY(10px)', opacity: 0 }, { transform: 'translateY(0px)', opacity: .6, delay: .7, ease: Elastic.easeIn.config(0.25, 1) }, .1);
}


export function animateName() {
    TweenMax.fromTo(('.name'), .4, { transform: 'translate(55px , 10px)', opacity: 0, visibility: 'hidden' }, { transform: 'translate(55px , 0px)', visibility: 'visible', opacity: 1, delay: .7, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)' });
}

export function hideName() {
    TweenMax.to(('.name'), .4, { transform: 'translate(55px , 10px)', opacity: 0, visibility: 'hidden', ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)' });
}

export function staggerHideTitle(number) {
    TweenMax.staggerTo((`#slide-${number} .title-tag`), .2, { transform: 'translateY(10px)', opacity: 0, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }, .06);
}

export function staggerShowTitle(number) {
    TweenMax.staggerTo((`#slide-${number} .title-tag`), .2, { transform: 'translateY(0px)', opacity: 1, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)', delay: .9 }, .1);
}

export function animateIn() {

    $('#home').css('display', 'block');

    setTimeout(function() {
        $('#work').css('display', 'none');
    }, 800);

    TweenMax.fromTo($('#home'), .7, { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1), }, { transform: 'translateY(0px)', opacity: 1, delay: .4, ease: Elastic.easeOut.config(0.25, 1), });
    TweenMax.to($('.slide.home'), 0, { transform: 'scale(1,1)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1), }).delay(1.2);
}

export function animateWorkUp() {
    TweenMax.fromTo($('#work'), .7, { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1), }, { transform: 'translateY(0px)', opacity: 1, delay: .4, ease: Elastic.easeOut.config(0.25, 1), });
}

export function animateWorkOut() {
    TweenMax.fromTo($('#work'), .7, { transform: 'translateY(0px)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1), }, { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1), });
    TweenMax.to($('#work'), .7, { transform: 'translateY(0px)', opacity: 1, delay: .5, ease: Elastic.easeOut.config(0.25, 1), });
}

export function toAboutPage() {
    TweenMax.to($('.slide.home .content.home'), .7, { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1), });
}

export function animateOut() {
    $('#work').css('display', 'block', 'opacity', 0);

    setTimeout(function() {
        $('#home').css('display', 'none');
    }, 800);

    TweenMax.to($('#home'), .7, { transform: 'translateY(20px)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1), });
    animateFooter();
    animateWorkUp();
}

export function animateCaseStudyIn() {
    TweenMax.staggerFromTo(('.case-header-animated'), .8, 
        { transform: 'translateY(20px)', opacity: 0 }, 
        { transform: 'translateY(0px)', opacity: 1, delay: 1, ease: Power3.easeOut }, .1);
}

export function animateCaseStudyData() {
    TweenMax.staggerFromTo(('.case-data-animated'), 1.8, 
        { transform: 'translateY(20px)', opacity: 0 }, 
        { transform: 'translateY(0px)', opacity: 1, delay: 1.9, ease: Power3.easeOut }, .1);
}


export function animateLoader() {
    TweenMax.fromTo($('.loader'), 3.7, { transform: 'scale(0,1)',  ease: Power2.easeOut}, { transform: 'scale(1,1)',  ease: Power2.easeOut, });
    TweenMax.to($('.loader'), .2, { delay:3.7, transform: 'translateY(6px)',  ease: Power3.easeOut});
}


export function animateMobileLinksIn() {
    TweenMax.staggerFromTo(('.animate-mobile'), .6, 
        { transform: 'translateY(20px)', opacity: 0, ease: Expo.easeOut }, 
        { transform: 'translateY(0px)', opacity: 1, delay: .2, ease: Expo.easeOut }, .1);
}

export function animateMobileLinksOut() {
    TweenMax.staggerFromTo(('.animate-mobile'), .15, 
        { transform: 'translateY(0px)', opacity: 1, ease: Expo.easeIn }, 
        { transform: 'translateY(180px)', opacity: 0, ease: Expo.easeIn }, -.05);
}