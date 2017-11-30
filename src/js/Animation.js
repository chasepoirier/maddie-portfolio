import { TweenMax, Elastic } from 'gsap';
import $ from "jquery";

const duration = 0.5;

export default {
	show(target, cb) {
		return TweenMax
			.from(target, duration, {
				opacity: 0,
				height: 0,
				onComplete() {
					cb();
				},
				ease: Elastic.easeOut.config(0.25, 1),
			});
	},
	hide(target, cb) {
		return TweenMax
			.to(target, duration, {
				opacity: 0,
				height: 0,
				onComplete() {
					cb();
				},
				ease: Elastic.easeOut.config(0.25, 1),
			});
	},
};

export function animateFooter() {
	
	TweenMax.fromTo(('.footer .slide-controls'), .4, {transform: 'translateY(10px)', opacity: 0}, { transform: 'translateY(0px)', opacity: .6, delay: 1, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)'  });
	TweenMax.staggerFromTo(('.icon'), .2, {transform: 'translateY(10px)', opacity: 0}, { transform: 'translateY(0px)', opacity: .6, delay: 1, ease: Elastic.easeIn.config(0.25, 1) }, .1);
	
}


export function animateName() {
	TweenMax.fromTo(('.name'), .4, {transform: 'translate(55px , 10px)', opacity: 0, visibility: 'hidden'}, { transform: 'translate(55px , 0px)',  visibility: 'visible', opacity: 1, delay: 1, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)' });
}

export function hideName() {
	TweenMax.to(('.name'), .4, {transform: 'translate(55px , 10px)', opacity: 0, visibility: 'hidden', ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)' });
}

export function staggerHideTitle(number) {
	TweenMax.staggerTo((`#slide-${number} .title-tag`), .2, {transform: 'translateY(10px)', opacity: 0, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }, .1);
}

export function staggerShowTitle(number) {
	TweenMax.staggerTo((`#slide-${number} .title-tag`), .2, {transform: 'translateY(0px)', opacity: 1, ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)', delay: .9 }, .1);
}

export function animateIn() {

	
	$('#home').css('display', 'block');

	setTimeout(function() {
		$('#work').css('display', 'none');
	}, 1200);
	
	TweenMax.to($('.slider'), 1, { transform: 'scale(.85,.85)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1),});
	TweenMax.to($('#overlay'), .8, { transform: 'scale(1,1)', transformOrigin: 'right', ease: Elastic.easeOut.config(0.25, 1),}).delay(.4);
	TweenMax.to($('#overlay'), .4, { transform: 'scale(0,1)', transformOrigin: 'left', ease: Elastic.easeOut.config(0.25, 1),}).delay(1.2);
	TweenMax.to($('.slide.home'), 1, { transform: 'scale(1,1)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1),}).delay(1.2);
}

export function animateOut() {
	$('#work').css('display', 'block');

	setTimeout(function() {
		$('#home').css('display', 'none');
	}, 1200);

	TweenMax.to($('.slide.home'), 1, { transform: 'scale(.85,.85)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1),});
	TweenMax.to($('#overlay'), .8, { transform: 'scale(1,1)', ease: Elastic.easeOut.config(0.25, 1),}).delay(.4);
	TweenMax.to($('#overlay'), .4, { transform: 'scale(0,1)', transformOrigin: 'right', ease: Elastic.easeOut.config(0.25, 1),}).delay(1.2);
	TweenMax.to($('.slider'), 1, { transform: 'scale(1,1)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1),}).delay(1.2);
	animateFooter();

	//TweenMax.fromTo($('.slider'), 1, { transform: 'scale(.85,.85)', opacity: 0, ease: Elastic.easeOut.config(0.25, 1),} , { transform: 'scale(1,1)', opacity: 1, ease: Elastic.easeOut.config(0.25, 1),}).delay(1.2);

}