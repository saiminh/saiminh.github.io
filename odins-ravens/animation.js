var tl_intro = new TimelineLite( {paused: true} )
	.fromTo(".img_intro_raven", .5, {
		autoAlpha: 1
	}, {
		autoAlpha: 0,
		ease: Linear.easeNone
	}, 0)
	.fromTo(".img_intro_ravenface", 1, {
		scaleX: 1,
		scaleY: 1
	}, {
		scaleX: .3,
		scaleY: 0,
		ease: Power4.easeIn
	}, 0)
	.fromTo(".img_intro_blackface", 1, {
		scale: .7
	}, {
		scale: 1,
		ease: Linear.easeNone
	}, 0);

var tl = new TimelineLite( {paused: true} )
		.fromTo(".odin-vs-sint_odin", 1, {
			x: "-30%"
		}, {
			x: "0%",
			ease: Linear.easeNone
		}, 0)
		.fromTo(".odin-vs-sint_sint", 1, {
			x: "30%"
		}, {
			x: "0%",
			ease: Linear.easeNone
		}, 0)
		.fromTo(".img_odiv-vs-sint_odin_armour", .75, {
			autoAlpha: 0,
			y: "50%",
		}, {
			autoAlpha: 1,
			y: "0%",
			ease: Linear.easeNone
		}, 0.25)
		.fromTo(".img_odiv-vs-sint_odin_helmet", .75, {
			autoAlpha: 0,
			y: "-50%"
		}, {
			autoAlpha: 1,
			y: "0%",
			ease: Linear.easeNone
		}, 0.25)
		.fromTo(".img_odiv-vs-sint_odin_spear", .75, {
			autoAlpha: 0,
			y: "-30%",
			x: "30%"
		}, {
			autoAlpha: 1,
			y: "0%",
			x: "0%",
			ease: Linear.easeNone
		}, 0.25)
		.fromTo(".img_odiv-vs-sint_sint_clothes", .75, {
			autoAlpha: 0,
			y: "50%"
		}, {
			autoAlpha: 1,
			y: "0%",
			ease: Linear.easeNone
		}, 0.25)
		.fromTo(".img_odiv-vs-sint_sint_hat", .75, {
			autoAlpha: 0,
			y: "-50%"
		}, {
			autoAlpha: 1,
			y: "0%",
			ease: Linear.easeNone
		}, 0.25)
		.fromTo(".img_odiv-vs-sint_sint_staff", .75, {
			autoAlpha: 0,
			y: "-30%",
			x: "-30%"
		}, {
			autoAlpha: 1,
			y: "0%",
			x: "0%",
			ease: Linear.easeNone
		}, 0.25);	

var tl_wildhunt = new TimelineLite( {paused: true})
	.from(".wildhunt_bg", 1, {
		y: "50%",
		ease: Linear.easeNone
	}, 0)
	.from(".wildhunt_odin", 1, {
		y: "40%",
		ease: Linear.easeNone
	}, 0)
	.from(".wildhunt_ravens", 1, {
		y: "30%",
		ease: Linear.easeNone
	}, 0);

var tl_blackface = new TimelineLite( {paused: true})
	.fromTo(".blackface_stage", 1, {
		rotationZ: -2
	}, {
		rotationZ: 2, 
		repeat: 10,
		yoyo: true,
		ease: Linear.easeNone
	}, 0)
	.fromTo(".img_blackface_lefteye", 1, {
		x: "0%",
		y: "0%"
	}, {
		x: "-4%",
		y: "-1%",
		repeat: 10,
		yoyo: true,
		ease: Linear.easeNone
	}, 0)
	.fromTo(".img_blackface_righteye", 1, {
		x: "0%",
		y: "0%"
	}, {
		x: "2%",
		y: "2%",
		repeat: 10,
		yoyo: true,
		ease: Linear.easeNone
	}, 0);

	var introheight = $( '.intro_stage' ).height()/2.5;
	var introoffset = $( '.intro_stage' ).offset().top;
	var startintro = 0;
	var endintro = introheight + introoffset;

	var odinheight = $( '.odin-vs-sint_stage' ).height();
	var odinoffset = $( '.odin-vs-sint_stage' ).offset().top;
	var startOvS = odinoffset - $(window).height();
	var endOvS = odinheight + odinoffset - $(window).height()/1.25;

	var wildhuntheight = $( '.wildhunt_stage' ).height();
	var wildhuntoffset = $( '.wildhunt_stage' ).offset().top;
	var startwildhunt = wildhuntoffset - $(window).height()*2;
	var endwildhunt = wildhuntheight + wildhuntoffset;

	var blackfaceheight = $( '.img_blackface' ).height();
	var blackfaceoffset = $( '.img_blackface' ).offset().top;
	var startblackface = blackfaceoffset - $(window).height()*2;
	var endblackface = blackfaceheight + blackfaceoffset;

	var st = $(this).scrollTop();
	var windowScroll = 0;

	$(document).ready( function(){	
		if( st > startintro ){
			tl_intro.progress(1);
		} else if(st >= endintro ){
			tl_intro.progress(0);
		} else {
			tl_intro.progress( windowScroll );
		};
		if( st > startOvS ){
			tl.progress(1);
		} else if(st >= endOvS ){
			tl.progress(0);
		} else {
			tl.progress( windowScroll );
		};
		if( st > startwildhunt ){
			tl_wildhunt.progress(1);
		} else if(st >= endwildhunt ){
			tl_wildhunt.progress(0);
		} else {
			tl_wildhunt.progress( windowScroll );
		}
		if( st > startblackface ){
			tl_blackface.progress(1);
		} else if(st >= endblackface ){
			tl_blackface.progress(0);
		} else {
			tl_blackface.progress( windowScroll );
		}
	})

	$(window).scroll( function(){		
		st = $(this).scrollTop();
	   	
	   	if( st < endintro && st >= startintro ){
	        windowScroll = st/introheight
	        tl_intro.progress( windowScroll );
	    };
	  	if( st < endOvS && st >= startOvS ){
	        windowScroll = (st - endOvS)/(st - startOvS)
	        tl.progress( windowScroll );
	    };
	    if( st < endwildhunt && st >= startwildhunt ){
	        windowScroll = (st - endwildhunt)/(st - startwildhunt)
	        tl_wildhunt.progress( windowScroll );
	    };
	    if( st < endblackface && st >= startblackface ){
	        windowScroll = (st - endblackface)/(st - startblackface)
	        tl_blackface.progress( windowScroll );
	    };
	});

	$(window).resize( function(){
		introheight = $( '.intro_stage' ).height();
		introoffset = $( '.intro_stage' ).offset().top;
		startintro = 0;
		endintro = introheight + introoffset;

		odinheight = $( '.odin-vs-sint_stage' ).height();
		odinoffset = $( '.odin-vs-sint_stage' ).offset().top;
		startOvS = odinoffset - $(window).height();
		endOvS = odinheight + odinoffset - $(window).height()/1.25;

		wildhuntheight = $( '.wildhunt_stage' ).height();
		wildhuntoffset = $( '.wildhunt_stage' ).offset().top;
		startwildhunt = wildhuntoffset - $(window).height()*2;
		endwildhunt = wildhuntheight + wildhuntoffset;

		blackfaceheight = $( '.img_blackface' ).height();
		blackfaceoffset = $( '.img_blackface' ).offset().top;
		startblackface = blackfaceoffset - $(window).height()*2;
		endblackface = blackfaceheight + blackfaceoffset;

		st = $(this).scrollTop();

		if( st < endintro && st >= startintro ){
	        windowScroll = (st - endintro)/(st - startintro)
	        tl_intro.progress( windowScroll );
	    };
		if( st < endOvS && st >= startOvS ){
	        windowScroll = (st - endOvS)/(st - startOvS)
	        tl.progress( windowScroll );
	    };
	    if( st < endwildhunt && st >= startwildhunt ){
	        windowScroll = (st - endwildhunt)/(st - startwildhunt)
	        tl_wildhunt.progress( windowScroll );
	    };
	    if( st < endblackface && st >= startblackface ){
	        windowScroll = (st - endblackface)/(st - startblackface)
	        tl_blackface.progress( windowScroll );
	    };
	})