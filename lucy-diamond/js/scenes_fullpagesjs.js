	// ––––––––––––––––––– Scene 00 Intro ––––––––––––––––––––––––––––––––––
	var scene_intro_tl_in = new TimelineMax( {paused: true} )
			.from(".scene_intro_bg", 1, {
				opacity: 0
			})
			.from(".scene_intro_title", 1.5, {
				scale: 0,
				opacity: 0
			}, 0)
			.from(".scene_intro_lucy", .6, {
				top: "200px",
				left: "-20px",
				opacity: 0
			}, 1)
			.from(".scene_header_lucy", 1, {
				bottom: "50px",
				opacity: 0,
				ease: Elastic.easeOut
			});


	// ––––––––––––––––––– Scene 01 Just Space ––––––––––––––––––––––––––––––––––
	var scene_1_tl = new TimelineMax( { paused: true } )
			.from(".scene_one_space .space", 3, {opacity: 0, top: "50px"});

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
				top: "-20px"
			}, 0)
			.from(".scene_five_devil", 4, {
				top: "20px"
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
				scale: 0.95
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
				left: "100%",
				ease: "linear"
			})
	var scene_10_tl_bg_2 = new TimelineMax( { paused: true })			
			.to(".scene_ten_bg_2", 12, {
				left: "100%",
				ease: "linear"
			})
	var scene_10_tl_moon = new TimelineMax( { paused: true })			
			.to(".scene_ten_moon", 12, {
				left: "100%",
				ease: "linear"
			})
	var scene_10_tl_venus = new TimelineMax( { paused: true })			
			.to(".scene_ten_venus", 9, {
				left: "100%",
				ease: "linear"
			})
	var scene_10_tl_jupiter = new TimelineMax( { paused: true })			
			.to(".scene_ten_jupiter", 7, {
				left: "100%",
				ease: "linear"
			})
	var scene_10_tl_devil = new TimelineMax( { paused: true })			
			.to(".scene_ten_devil, .scene_twelve_devil, .scene_twelve_devil_arrows", 1, {
				top: "2%"
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
			.to(".scene_ten_jupiter, .scene_ten_venus, .scene_ten_moon, .scene_ten_bg_2", 2, {
				marginLeft: "200vw"
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

	  		
	$(document).ready(function() {
		
		var sceneAnchors = ['scene_intro', 'scene_1', 'scene_2', 'scene_3', 'scene_4', 'scene_5', 'scene_6', 'scene_7', 'scene_8', 'scene_9', 'scene_10', 'scene_11', 'scene_11b', 'scene_12', 'scene_theend'];
		
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

	    $('.wrapper').fullpage({
	    	anchors: sceneAnchors,
	  
// ------------------------
//	Enter Scene
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
	            	//scene_10to11_planetmove.pause(0);
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
	            	//scene_10_tl_in.reverse();
	            	scene_12_tl_blinkarrows.yoyo(true).repeat(-1).play();
	            }

	            if(index == indexOfTheEnd) {
	            	/*scene_11_tl_in.play();
	            	scene_10_tl_bg.repeat(-1).play();
	            	scene_10_tl_devil.repeat(-1).yoyo(true).play();*/
	            }
	        },

// ------------------------
//	Leave Scene
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
	        		else if (newIndex == indexOfDriftingThinking) { //GOING BACK
	        			//scene_10_tl_in.reverse();
	        			scene_11_tl_planetleave.pause(0);       			
	        		}
	        		else {
	        			scene_10_tl_in.reverse();	
	        		}
	        	}

	        	if(index == indexOfDriftingDawned) {
	        		
	        	}

	        	if(index == indexOfPenisPoint) {
	        		if (newIndex !== indexOfTheEnd) {
		        		scene_12_tl_in.reverse();
		        		scene_12_tl_blinkarrows.pause(0);
		        	}
	        	}

	        	if(index == indexOfTheEnd) {
	        		if (newIndex !== indexOfPenisPoint) {
	        			scene_12_tl_in.reverse();
		        		scene_12_tl_blinkarrows.pause(0);
		        		scene_10_tl_in.reverse();
		        		scene_11_tl_in.pause(0);
	        			scene_11_tl_planetleave.pause(0);       			    		        		
		        	}
		        	else {
		        		//alert ('back');
		        	}
	        	}
	        },

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
				
				$('#preloader').fadeOut('slow',function(){
					$(this).remove();
				});
			}
	    });
	});

$(".nav-next").on("click", function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionDown();
});
$(".nav-prev").on("click", function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionUp();
});

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

	


	
