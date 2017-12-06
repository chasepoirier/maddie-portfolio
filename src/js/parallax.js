export function parallax(event) { 

	var parallaxBox = document.getElementById ( 'box-home' );
	var c1left = document.getElementById ( 'l1' ).offsetLeft,
	c1top = document.getElementById ( 'l1' ).offsetTop,
	c2left = document.getElementById ( 'l2' ).offsetLeft,
	c2top = document.getElementById ( 'l2' ).offsetTop,
	c3left = document.getElementById ( 'l3' ).offsetLeft,
	c3top = document.getElementById ( 'l3' ).offsetTop,
	c4left = document.getElementById ( 'l4' ).offsetLeft,
	c4top = document.getElementById ( 'l4' ).offsetTop,
	c5left = document.getElementById ( 'l5' ).offsetLeft,
	c5top = document.getElementById ( 'l5' ).offsetTop,
	c6left = document.getElementById ( 'l6' ).offsetLeft,
	c6top = document.getElementById ( 'l6' ).offsetTop,
	c7left = document.getElementById ( 'l7' ).offsetLeft,
	c7top = document.getElementById ( 'l7' ).offsetTop,
	c8left = document.getElementById ( 'l8' ).offsetLeft,
	c8top = document.getElementById ( 'l8' ).offsetTop;
	
	
	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;
		
		mouseParallax ( 'l1', c1left, c1top, x, y, 8 );
		mouseParallaxReverse ( 'l2', c2left, c2top, x, y, 25 );
		mouseParallax ( 'l3', c3left, c3top, x, y, 10 );
		mouseParallaxReverse ( 'l4', c4left, c4top, x, y, 18 );
		mouseParallax ( 'l5', c5left, c5top, x, y, 32 );
		mouseParallax ( 'l6', c6left, c6top, x, y, 23 );
		mouseParallaxReverse ( 'l7', c7left, c7top, x, y, 19 );
		mouseParallax ( 'l8', c8left, c8top, x, y, 12 );
	}

	parallaxBox.onmouseout = function () {
		document.getElementById ( 'l1' ).style.transform = 'translate3d(0px,0px,0px)';
		document.getElementById ( 'l2' ).style.transform = 'translate3d(0px,0px,0px)';
		document.getElementById ( 'l3' ).style.transform = 'translate3d(0px,0px,0px)';
		document.getElementById ( 'l4' ).style.transform = 'translate3d(0px,0px,0px)';
		document.getElementById ( 'l5' ).style.transform = 'translate3d(0px,0px,0px)';
		document.getElementById ( 'l6' ).style.transform = 'translate3d(0px,0px,0px)';
		document.getElementById ( 'l7' ).style.transform = 'translate3d(0px,0px,0px)';
		document.getElementById ( 'l8' ).style.transform = 'translate3d(0px,0px,0px)';
	}
}

export function parallaxOne(event) { 

	let url = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);



	if (url !== 'projects') {
		//alert(url)

    	return

	} else {
		//alert(url)
		
	
	

	var parallaxBox = document.getElementById ( 'box' );
	var c1left = document.getElementById ( 'l1-slide' ).offsetLeft,
	c1top = document.getElementById ( 'l1-slide' ).offsetTop,
	c2left = document.getElementById ( 'l2-slide' ).offsetLeft,
	c2top = document.getElementById ( 'l2-slide' ).offsetTop,
	c3left = document.getElementById ( 'l3-slide' ).offsetLeft,
	c3top = document.getElementById ( 'l3-slide' ).offsetTop,
	c4left = document.getElementById ( 'l4-slide' ).offsetLeft,
	c4top = document.getElementById ( 'l4-slide' ).offsetTop,
	c5left = document.getElementById ( 'l5-slide' ).offsetLeft,
	c5top = document.getElementById ( 'l5-slide' ).offsetTop,
	c6left = document.getElementById ( 'l6-slide' ).offsetLeft,
	c6top = document.getElementById ( 'l6-slide' ).offsetTop
	
	
	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;
		
		mouseParallax ( 'l1-slide', c1left, c1top, x, y, 6 );
		mouseParallax ( 'l2-slide', c2left, c2top, x, y, 6 );
		mouseParallax ( 'l3-slide', c3left, c3top, x, y, 6 );
		mouseParallax ( 'l4-slide', c4left, c4top, x, y, 6 );
		mouseParallax ( 'l5-slide', c5left, c5top, x, y, 6 );
		mouseParallax ( 'l6-slide', c6left, c6top, x, y, 6 );
	}

	parallaxBox.onmouseout = function () {
		document.getElementById ( 'l1-slide' ).style.transform = 'translate(0px,0px)';
		document.getElementById ( 'l2-slide' ).style.transform = 'translate(0px,0px)';
		document.getElementById ( 'l3-slide' ).style.transform = 'translate(0px,0px)';
		document.getElementById ( 'l4-slide' ).style.transform = 'translate(0px,0px)';
		document.getElementById ( 'l5-slide' ).style.transform = 'translate(0px,0px)';
		document.getElementById ( 'l6-slide' ).style.transform = 'translate(0px,0px)';
	}

	}
}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth , 10),
	containerHeight = parseInt( parentObj.offsetHeight, 10 );

	//alert(parentObj.html);
	
	obj.style.transform = `translate(
							${0 - ( ( ( mouseX - ( parseInt( obj.offsetWidth, 10 ) / 100 + left ) ) / containerWidth ) * speed )}px,
							${0 - ( ( ( mouseY - ( parseInt( obj.offsetHeight, 10 ) / 100 + top ) ) / containerHeight ) * speed )}px)`;
	//obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 100 + top ) ) / containerHeight ) * speed ) + 'px';
}

function mouseParallaxReverse ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth , 10),
	containerHeight = parseInt( parentObj.offsetHeight, 10 );

	//alert(parentObj.html);
	
	obj.style.transform = `translate(
							${0 + ( ( ( mouseX - ( parseInt( obj.offsetWidth, 10 ) / 100 + left ) ) / containerWidth ) * speed )}px,
							${0 + ( ( ( mouseY - ( parseInt( obj.offsetHeight, 10 ) / 100 + top ) ) / containerHeight ) * speed )}px)`;
	//obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}




