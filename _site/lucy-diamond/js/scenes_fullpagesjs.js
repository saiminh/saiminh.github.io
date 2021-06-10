	// ––––––––––––––––––– Scene 00 Intro ––––––––––––––––––––––––––––––––––
	var scene_intro_tl_in = new TimelineMax( {paused: true} )
			.from(".scene_intro_bg", 1, {
				opacity: 0
			})
			.from(".scene_intro_title", 1.5, {
				scale: 0,
				opacity: 0
			}, 0)
			.from(".animation_stage_scene_intro .scene_intro_lucy", .6, {
				y: "200px",
				x: "-20px",
				opacity: 0
			}, 1)
			.from(".scene_intro .scene_header_lucy", 1, {
				bottom: "50px",
				opacity: 0,
				ease: Elastic.easeOut
			});


	// ––––––––––––––––––– Scene 01 Just Space ––––––––––––––––––––––––––––––––––
	var scene_1_tl = new TimelineMax( { paused: true } )
			.from(".scene_one_space .space", 3, {opacity: 0, y: "50px"});

	// ––––––––––––––––––– Scene 02 Eyes Blinking ––––––––––––––––––––––––––––––––––
	var scene_2_tl_loop = new TimelineMax( { paused: true })
			.set(".scene_two_ScaryMonsterName_eyes", {
				backgroundPositionX: "0"
			})
			.to(".scene_two_ScaryMonsterName_eyes", .3, {
				repeat:-1, 
				backgroundPositionX: "100%", 
				ease:SteppedEase.config(3), 
				repeatDelay: 3
			});

	var scene_2_tl = new TimelineMax( { paused: true } )
			
			.from(".scene_two_ScaryMonsterName_eyes", 1.5, {
				opacity: 0, 
				ease: "easeOut"
			})
			.to(".scene_two_ScaryMonsterName_eyes", .3, {
				repeat: 1, 
				backgroundPositionX: "100%", 
				ease:SteppedEase.config(3),
				onComplete: function(){scene_2_tl_loop.play()}
			})
			;		
	
	// ––––––––––––––––––– Scene 03 Guy in the dark ––––––––––––––––––––––––––––––––––
	var scene_3_tl_loop = new TimelineMax( { paused: true } )
			.set(".scene_three_GuyLostInTheDark", {
					backgroundPositionX: "0"
			})
			.to(".scene_three_GuyLostInTheDark", 1.5, {				
				backgroundPositionX: "100%", 
				ease:SteppedEase.config(2), 
				//repeatDelay: 3
			});;	

	var scene_3_tl_in = new TimelineMax( { paused: true })
			.to(".scene_three_GuyLostInTheDark", .5, {
				opacity: 1,
				onComplete: function(){scene_3_tl_loop.repeat(-1).play()}
			});

// ––––––––––––––––––– Scene 04 eating ––––––––––––––––––––––––––––––––––
	var scene_4_tl_in = new TimelineMax( { paused: true })
			.set(".scene_four_GuyBeingEaten", {
						backgroundPositionX: "0"
					})
			.from(".animation_stage_scene_four", .5, {
				opacity: 0
			});

	var scene_4_tl_bite1 = new TimelineMax( { paused: true } )						
			.to(".scene_four_GuyBeingEaten", 0.5, {							
				backgroundPositionX: "20%", 
				ease:SteppedEase.config(1)				
			});;
	var scene_4_tl_bite2 = new TimelineMax( { paused: true } )		
			.set(".scene_four_GuyBeingEaten", {
				backgroundPositionX: "20%"
			})	
			.to(".scene_four_GuyBeingEaten", 0.5, {							
				backgroundPositionX: "40%", 
				ease:SteppedEase.config(1)
			});
	var scene_4_tl_biteloop = new TimelineMax( { paused: true })
			.set(".scene_four_GuyBeingEaten", {
				backgroundPositionX: "60%"
			})
			.to(".scene_four_GuyBeingEaten", 1, {
				backgroundPositionX: "100%",
				ease:SteppedEase.config(2)
			});


// ––––––––––––––––––– Scene 05 growing menace ––––––––––––––––––––––––––––––––––
	var scene_5_tl_in = new TimelineMax( { paused: true })
			.from(".animation_stage_scene_five", .5, {
				opacity: 0
			})
			.from(".scene_five_planet", 4, {
				y: "-20px"
			}, 0)
			.from(".scene_five_devil", 4, {
				y: "20px"
			}, 0);

// –––––––––––––––––––Scene 06 fearful couple ––––––––––––––––––––––––––––––––––
	var scene_6_tl_in = new TimelineMax( { paused: true })
			.set(".scene_six_couple", {
				opacity: 1 //This is in case user goes back from 7
			})
			.set(".scene_six_light", {
				opacity: .7 //This is in case user goes back from 7
			})
			.from(".animation_stage_scene_six", .5, {
				opacity: 0
			});
	var scene_6_tl_light = new TimelineMax( { paused: true })
			.from(".scene_six_light", .4, {
				opacity: 1,
				scale: 0.95,
				force3D:true
			})
			.to(".scene_six_light", .4, {
				opacity: 1,
				scale: 0.95
			});

// –––––––––––––––––––Scene 07 fearful couple ––––––––––––––––––––––––––––––––––
	var scene_7_tl_in = new TimelineMax( { paused: true })
			.from(".animation_stage_scene_seven", .5, {
				opacity: 0
			})
			.to(".scene_seven_couple", 3, {
				opacity: 0
			}, .5);

// –––––––––––––––––––Scene 08 lights go out ––––––––––––––––––––––––––––––––––
	var scene_8_tl_in = new TimelineMax( { paused: true })
			.from(".animation_stage_scene_eight", .5, {
				opacity: 0
			});
	var scene_8_tl_lightsout = new TimelineMax( { paused: true })
			.to(".planetlights_4", 1.5, {
				delay: 1.5,
				opacity: 0
			})
			.to(".planetlights_3", 1.5, {
				opacity: 0
			})
			.to(".planetlights_2", 1.5, {
				opacity: 0
			})
			.to(".planetlights_1", 1.5, {
				opacity: 0
			});

// ––––––––––––––––––– Scene 09 Planeteater ––––––––––––––––––––––––––––––––––
	var scene_9_tl_in = new TimelineMax( { paused: true })
			.from(".animation_stage_scene_nine", .5, {
				opacity: 0
			});

// ––––––––––––––––––– Scene 10 Planetfloater ––––––––––––––––––––––––––––––––––
	var scene_10_tl_in = new TimelineMax( { paused: true })
			.from(".animation_stage_scene_ten", .5, {
				opacity: 0
			});
	var scene_10_tl_bg = new TimelineMax( { paused: true })			
			.to(".scene_ten_bg", 14, {
				x: "200%",
				ease: "linear"
			})
	var scene_10_tl_bg_2 = new TimelineMax( { paused: true })			
			.to(".scene_ten_bg_2", 12, {
				x: "200%",
				ease: "linear"
			})
	var scene_10_tl_moon = new TimelineMax( { paused: true })			
			.to(".scene_ten_moon", 12, {
				x: "200%",
				ease: "linear"
			})
	var scene_10_tl_venus = new TimelineMax( { paused: true })			
			.to(".scene_ten_venus", 9, {
				x: "200%",
				ease: "linear"
			})
	var scene_10_tl_jupiter = new TimelineMax( { paused: true })			
			.to(".scene_ten_jupiter", 7, {
				x: "200%",
				ease: "linear"
			})
	var scene_10_tl_devil = new TimelineMax( { paused: true })			
			.to(".scene_ten_devil, .scene_twelve_devil, .scene_twelve_devil_arrows", 1, {
				y: "2%"
			}, 0);

	var scene_10_tl_devilpenis_hide = new TimelineMax({ paused:true })
			.set(".scene_twelve_devil, .scene_twelve_devil_arrows", {
				opacity:0
			});

// ––––––––––––––––––– Scene 11 Planetfloater ––––––––––––––––––––––––––––––––––
	
	var scene_11_tl_in = new TimelineMax( { paused: true })
			.to(".animation_stage_scene_ten", .5, {
				opacity: 1
			});
	var scene_11_tl_planetleave = new TimelineMax({ paused: true })
			.to(".scene_ten_jupiter, .scene_ten_venus, .scene_ten_moon, .scene_ten_bg_2", 1, {
				opacity: 0
			}, 0);

// ––––––––––––––––––– Scene 12 SmallPenisReveal ––––––––––––––––––––––––––––––––––
			
	var scene_12_tl_in = new TimelineMax( { paused: true })
			.to(".scene_ten_devil", .3, {
				opacity: 0,
				marginTop: "-10vh"
			}, 0)
			.to(".scene_twelve_devil, .scene_twelve_devil_arrows", .3, {
				opacity: 1,
				marginTop: "-10vh"
			}, 0);
	var scene_12_tl_blinkarrows = new TimelineMax({ paused: true })
			.from(".scene_twelve_devil_arrows", .25, {
				opacity: 0,
				//scale: 1.1
			})
			.to(".scene_twelve_devil_arrows", .25, {
				opacity: 1,
				//scale: 1.1
			});

// ––––––––––––––––––– Scene 13 The End ––––––––––––––––––––––––––––––––––
	var scene_theEnd_tl_in = new TimelineMax({ paused:true })			
			.set(".animation_stage_scene_theEnd .scene_theEnd_lucy", {
				top: "0",
				left: "0",
				opacity: 1
			})
			.from(".animation_stage_scene_theEnd .scene_theEnd_lucy", 1.2, {
				top: "200px",
				left: "100px",
				opacity: 0
			})
			.from(".scene_theEnd .scene_header_lucy", 1, {
				bottom: "100%",
				opacity: 0,
				ease: Elastic.easeOut
			}, 1);

	var scene_theEnd_tl_out = new TimelineMax({ paused:true })
			.to(".animation_stage_scene_theEnd, .animation_stage_scene_ten", 1.5, {
				top: "-100%"
			});

// ––––––––––––––––––– Scene 14 Outro ––––––––––––––––––––––––––––––––––
	
// ------------------------
//	Inititate Fullpage.js
//-------------------------	  		
	$(document).ready(function() {
		
		var sceneAnchors = [	'scene_intro', 
								'scene_1', 
								'scene_2', 
								'scene_3', 
								'scene_4', 
								'scene_5', 
								'scene_6', 
								'scene_7', 
								'scene_8', 
								'scene_9', 
								'scene_10', 
								'scene_11', 
								'scene_11b', 
								'scene_12', 
								'scene_theend',
								'scene_outro'];
		
		var indexOfIntro			=	sceneAnchors.indexOf('scene_intro') + 1;
		var indexOfStart			=	sceneAnchors.indexOf('scene_1') + 1;
		var indexOfEnterDarkmonger	=	sceneAnchors.indexOf('scene_2') + 1;
		var indexOfLovesDarkness	=	sceneAnchors.indexOf('scene_3') + 1;
		var indexOfAteThem			=	sceneAnchors.indexOf('scene_4') + 1;
		var indexOfGrewBigger		=	sceneAnchors.indexOf('scene_5') + 1;
		var indexOfHumansTerrified	=	sceneAnchors.indexOf('scene_6') + 1;
		var indexOfHumansCandleOut	=	sceneAnchors.indexOf('scene_7') + 1;
		var indexOfPlanetDark		=	sceneAnchors.indexOf('scene_8') + 1;
		var indexOfPlanetEaten		=	sceneAnchors.indexOf('scene_9') + 1;
		var indexOfDriftingThinking	=	sceneAnchors.indexOf('scene_10') + 1;
		var indexOfDriftingWhy		=	sceneAnchors.indexOf('scene_11') + 1;
		var indexOfDriftingDawned	=	sceneAnchors.indexOf('scene_11b') + 1;
		var indexOfPenisPoint 		=	sceneAnchors.indexOf('scene_12') + 1;
		var indexOfTheEnd 			=	sceneAnchors.indexOf('scene_theend') + 1;
		var indexOfOutro			=	sceneAnchors.indexOf('scene_outro') + 1;

	    $('.wrapper').fullpage({
	    	anchors: sceneAnchors,
	  
// ------------------------
//	Execute on Enter Scene
//-------------------------
	    	afterLoad: function(anchorLink, index){
	            var loadedSection = $(this);

	            if(index == indexOfIntro){
	                scene_intro_tl_in.play(0).timeScale(1);	            	
                }

	            if(index == indexOfStart){
	                scene_1_tl.play(0).timeScale(1);	            	
                }	

	            if(index == indexOfEnterDarkmonger){	               	               		
	                scene_2_tl.play(0).timeScale(1);
	            }           		
                	
	            if(index == indexOfLovesDarkness){	
	            	scene_3_tl_in.play(0).timeScale(1);
	            }
        			
	            if(index == indexOfAteThem){	
	            	scene_4_tl_in.play(0).eventCallback("onComplete", function(){
		            	scene_4_tl_bite1.play(0).eventCallback("onComplete", function(){
		            		scene_4_tl_bite2.play(0).eventCallback("onComplete", function(){
		            			scene_4_tl_biteloop.repeat(-1).play()
		            		})
		            	})
		            })
	            }

	            if(index == indexOfGrewBigger){
	            	scene_5_tl_in.play(0).timeScale(1);
	            }

	            if(index == indexOfHumansTerrified){
	            	scene_6_tl_in.play(0);
	            	scene_6_tl_light.repeat(-1).play(0);
	            }
	            if(index == indexOfHumansCandleOut){
	            	
	            	scene_7_tl_in.play(0);
	            	scene_6_tl_in.reverse();
	        		
	            }

	            if(index == indexOfPlanetDark){
	            	scene_8_tl_in.play(0);
	            	scene_8_tl_lightsout.play(0);
	            }

	            if(index == indexOfPlanetEaten){
	            	scene_9_tl_in.play(0);	            	
	            }

	            if(index == indexOfDriftingThinking){
	            	scene_10_tl_in.play(0);
	            	scene_10_tl_devilpenis_hide.play();
	            	scene_10_tl_bg.repeat(-1).play();
	            	scene_10_tl_bg_2.repeat(-1).play();
	            	scene_10_tl_moon.repeat(-1).play();
	            	scene_10_tl_venus.repeat(-1).play();
	            	scene_10_tl_jupiter.repeat(-1).play();
	            	scene_10_tl_devil.repeat(-1).yoyo(true).play();
	            }

	            if(index == indexOfDriftingWhy){	            	
	            	scene_11_tl_in.play();
	            	scene_10_tl_bg.repeat(-1).play();
	            	scene_10_tl_devil.repeat(-1).yoyo(true).play();	            	
	            }

	            if(index == indexOfPenisPoint || index == indexOfTheEnd){
	            	scene_11_tl_planetleave.play();
	            	scene_11_tl_in.play();
	            	scene_12_tl_in.play();
	            	scene_10_tl_bg.repeat(-1).play();
	            	scene_10_tl_devil.repeat(-1).yoyo(true).play();
	            	scene_12_tl_blinkarrows.yoyo(true).repeat(-1).play();
	            }

	            if(index == indexOfTheEnd) {
	            	scene_theEnd_tl_in.play().timeScale(1);
	            }
	        },

// ------------------------
//	On Leave Scene
//-------------------------
	        onLeave: function(index, newIndex, direction){
	        	
	        	if(index == indexOfIntro) {
	        		scene_intro_tl_in.reverse().timeScale(3);
	        	}

	        	if(index == indexOfStart) {
	        		scene_1_tl.reverse().timeScale(6);
	        	}

	        	if(index == indexOfEnterDarkmonger) {
	        		scene_2_tl.reverse().timeScale(1.5);
	                scene_2_tl_loop.pause(0);
	        	}

	        	if(index == indexOfLovesDarkness) {
	        		if (newIndex == indexOfAteThem) {
	        			scene_3_tl_loop.pause(3);	        			
	        		}
	        		else{
		        		scene_3_tl_in.reverse();
		        	}
	        	}

	        	if(index == indexOfAteThem) {	        		
	        		scene_4_tl_in.reverse();	
	        		scene_4_tl_bite1.pause(0);  
	        		scene_4_tl_bite2.pause(0);
	        		scene_4_tl_biteloop.pause(0);	        		     		
	        		scene_3_tl_in.reverse().timeScale(3); // because the guy looking up is still there in the background	
	        	}

	        	if(index == indexOfGrewBigger) {
	        		scene_5_tl_in.reverse().timeScale(3);
	        	}

	        	if(index == indexOfHumansTerrified && direction == 'up') {
	        		scene_6_tl_in.reverse(0);
	        	}

	        	if(index == indexOfHumansCandleOut) {
	        		scene_7_tl_in.pause(0);
	        		scene_6_tl_in.pause(0);
	        	}

	        	if(index == indexOfPlanetDark) {
	        		if (direction == "down" && newIndex == indexOfPlanetEaten){
	        			// do nothing because we want no blackout screen
	        			// but we remove scene8_lightsout in index 9 out	        		
	        		}
	        		else {
	        			scene_8_tl_in.reverse();	
	        		}	        		
		        	
	        	}

	        	if(index == indexOfPlanetEaten) {
	        		scene_9_tl_in.reverse();
	        		scene_8_tl_in.pause(0);	        		
	        	}

	        	if(index == indexOfDriftingThinking) {
	        		if (newIndex == indexOfDriftingWhy) {
		            }
		            else {
		            	scene_10_tl_in.reverse();		        			
		            }
	        	}

	        	if(index == indexOfDriftingWhy) {
	        		if (newIndex == indexOfDriftingDawned) {	     

	        		}
	        		else if (newIndex == indexOfDriftingThinking) {	        			
	        			//scene_11_tl_planetleave.pause(0);       			
	        		}
	        		else {
	        			scene_10_tl_in.reverse();	
	        		}
	        	}

	        	if(index == indexOfDriftingDawned) {
	        		
	        	}

	        	if(index == indexOfPenisPoint) {
	        		if (newIndex == indexOfTheEnd) {
	        			//nothing
	        		}
	        		else if (newIndex == indexOfDriftingDawned || newIndex == indexOfDriftingWhy || newIndex == indexOfDriftingThinking) {
	        			scene_12_tl_in.reverse();
		        		scene_12_tl_blinkarrows.pause(0);
		        		scene_11_tl_planetleave.reverse();
	        		}
	        		else {
		        		scene_12_tl_in.reverse();
		        		scene_12_tl_blinkarrows.pause(0);
		        		scene_10_tl_in.reverse();
		        	}
	        	}

	        	if(index == indexOfTheEnd) {
        			if (newIndex == indexOfOutro) {
		        		scene_theEnd_tl_out.play(0).timeScale(1);
		        	}
		        	else if (newIndex == indexOfPenisPoint) {
		        		scene_theEnd_tl_in.reverse().timeScale(3);
		        	}
		        	else {
	        			scene_12_tl_in.reverse();
		        		scene_12_tl_blinkarrows.pause(0);
		        		scene_10_tl_in.reverse();
		        		scene_11_tl_in.pause(0);
	        			scene_11_tl_planetleave.pause(0);       
	        			scene_theEnd_tl_in.reverse();			    		        		
	        		}
	        	}

	        	if(index == indexOfOutro) {
	        		if( newIndex == (indexOfOutro - 1) ){
		        		scene_theEnd_tl_out.reverse().timeScale(3);
		        	}
		        	else {
		        		scene_theEnd_tl_out.pause(0);	
		        		scene_theEnd_tl_in.reverse().timeScale(3);
		        		scene_12_tl_in.reverse();
		        		scene_12_tl_blinkarrows.pause(0);
		        		scene_10_tl_in.reverse();
		        		scene_11_tl_in.pause(0);
	        			scene_11_tl_planetleave.pause(0);       
	        			scene_theEnd_tl_in.reverse();
		        	}
	        	}
	        },

// -----------------------------------------
// scripts fired after DOM is ready
// -----------------------------------------
	        afterRender: function(){
				var inHeight = $(window).innerHeight();
				var inWidth = 	$(window).innerWidth();
				if (inWidth <= inHeight){
					$('div[class^="animation_stage_scene_"]').width(inWidth).height(inWidth);
					$('.scene_text').height(inHeight - inWidth).css("marginTop", inWidth);
				}
				else {
					//$('div[class^="animation_stage_scene_"]').width(inWidth / 2).height(inHeight);
					//$('.scene_text').width(inWidth / 2).height(inHeight).css("marginTop", "0");
				};
				if ( $('#preloader') ) {					
					$('#preloader').fadeOut('slow',function(){
						$(this).remove();
						console.log('Removed preloader afterRender');
					});
				}
			}
	    });
	});

// -----------------------------------------
// Initiate up/down arrows
// ----------------------------------------- 
$(".nav-next").on("click", function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionDown();
});
$(".nav-prev").on("click", function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionUp();
});

// -----------------------------------------
// weirdly the fullpage.js afterResize event doesn't seem to work in the desired way
// so I had to implement resizing manually
// -----------------------------------------
$(window).on('resize', function(){
	var newinHeight = $(window).innerHeight();
	var newinWidth = 	$(window).innerWidth();
	if (newinWidth <= newinHeight){ // Portrait Mode
		$('div[class^="animation_stage_scene_"]').width(newinWidth).height(newinWidth);
		$('.scene_text').width("100%").height(newinHeight - newinWidth).css("marginTop", newinWidth);

	}
	else { // Landscape 
		$('div[class^="animation_stage_scene_"]').width('50vw').height('50vw');
		$('.scene_text').width('50vw').height('100vh').css("marginTop", "0");
	}
	$.fn.fullpage.reBuild();
});

// -----------------------------------------
// Turns out on iOS neither Chrome nor Safari support fullscreen API... 
// So let's hide the button on iOS 
// -----------------------------------------
//var isIphone = /(iPhone)/i.test(navigator.userAgent);
//var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if(isIOS){
    $('.btn_fullscreen').hide();
}

// Fullscreen Button powered by screenfull.js 	
// -----------------------------------------
const target = $('body')[0]; // Get DOM element from jQuery collection

$('.btn_fullscreen').on('click', () => {
	if (screenfull.enabled) {
		screenfull.toggle(target);
		$('.btn_fullscreen').toggleClass('exit_fullscreen');
	}
	$.fn.fullpage.reBuild();
});