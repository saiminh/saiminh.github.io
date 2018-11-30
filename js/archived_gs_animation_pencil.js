{% if page.layout == 'index' %}
{% comment %}
--------------------------------------------
Homepage Greensock Code for handcreature animation
--------------------------------------------
{% endcomment %}
<script type="text/javascript">
    var handcreature_master = new TimelineMax();
    var handcreature_click = new TimelineMax({ paused: true});

    function appear() {
      var tl = new TimelineMax()
        .set("#handcreature_canvas", { 
          autoAlpha: 1
        })
        .set("#hole_fg", {
          //xPercent: -5
        })
        .set("#hole_bg", {
          //xPercent: -15
        })
        .fromTo("#creature", 1, {
          yPercent: 100,
          xPercent: 40,
          scaleX: 0.5
        }, {
          yPercent: 0,
          xPercent: 0,
          scaleX: 1,
          ease: Power4.easeOut
        }, 0)
        .from("#head", .5, {
          rotationZ: 45,
          transformOrigin: "30% 80%",
        }, 0)
        
      ;
      return tl;
    }

    function pencil_move() {
      var tl = new TimelineMax( {repeat: -1, repeatDelay: 6} )
      .to("#pencil", .25, {
        xPercent: 1,
        yPercent: 1,
        rotationZ: 1,
        transformOrigin: "80% 50%"
      }, 0)
      .to("#thumb", .25, {
        scaleX: 1.05,
        scaleY: 0.95,
        transformOrigin: "0% 50%",
        rotationZ: -1
      }, 0)
      .to("#indexfinger", .25, {
        scaleX: 1.05,
        scaleY: 0.95,
        transformOrigin: "0% 50%",
        rotationZ: 2
      }, 0)
      .to("#pencil", .25, {
        xPercent: 0,
        yPercent: 0,
        rotationZ: 0
      }, .25)
      .to("#thumb", .25, {
        scaleX: 1,
        scaleY: 1,
        transformOrigin: "0% 50%",
        rotationZ: 0
      }, .25)
      .to("#indexfinger", .25, {
        scaleX: 1,
        scaleY: 1,
        transformOrigin: "0% 50%",
        rotationZ: 0
      }, .25)
      .to("#pencil", .25, {
        xPercent: 1,
        yPercent: 1,
        rotationZ: 1
      }, .5)
      .to("#thumb", .25, {
        scaleX: 1.05,
        scaleY: 0.95,
        transformOrigin: "0% 50%",
        rotationZ: -1
      }, .5)
      .to("#indexfinger", .25, {
        scaleX: 1.05,
        scaleY: 0.95,
        transformOrigin: "0% 50%",
        rotationZ: 2
      }, .5)
      .to("#pencil", .25, {
        xPercent: 0,
        yPercent: 0,
        rotationZ: 0
      }, .75)
      .to("#thumb", .25, {
        scaleX: 1,
        scaleY: 1,
        transformOrigin: "0% 50%",
        rotationZ: 0
      }, .75)
      .to("#indexfinger", .25, {
        scaleX: 1,
        scaleY: 1,
        transformOrigin: "0% 50%",
        rotationZ: 0
      }, .75);
      return tl;
    };

    function body_sway() {
      var tl = new TimelineMax( {repeat: -1})
      .to("#creature", 2, {
        rotationZ: 2,
        transformOrigin: "50% 100%",
      }, 0)
      .to("#head", 2, {
        rotationZ: 2,
        transformOrigin: "20% 90%",
      }, 0)
      .to("#pinky", 2, {
        rotationZ: 5,
        transformOrigin: "0% 100%"
      }, 0)
      .to("#creature", 2, {
        rotationZ: 0,
        transformOrigin: "50% 100%",
      }, 2)
      .to("#head", 2, {
        rotationZ: 0,
        transformOrigin: "20% 90%",
      }, 2)
      .to("#pinky", 2, {
        rotationZ: 0,
        transformOrigin: "0% 100%"
      }, 2)
      return tl;
    };

    function eyeblink() {
      var tl = new TimelineMax( {repeat: -1, repeatDelay: 1})
      .to("#eye--open", .1, {
        autoAlpha: 0
      }, 1)
      .to("#eye--semi", .1, {
        autoAlpha: 0
      }, 1)
      .to("#eye--semi", .1, {
        autoAlpha: 1
      })
      .to("#eye--open", .1, {
        autoAlpha: 1
      })
      //Second blink
      .to("#eye--open", .1, {
        autoAlpha: 0
      })
      .to("#eye--semi", .1, {
        autoAlpha: 0
      })
      .to("#eye--semi", .1, {
        autoAlpha: 1
      })
      .to("#eye--open", .1, {
        autoAlpha: 1
      });
      return tl;
    };   
      
    handcreature_master.add( appear().timeScale(1.5), 2 );
    handcreature_master.add( body_sway(),3 );
    handcreature_master.add( eyeblink(), 4 );
    handcreature_master.add( pencil_move().timeScale(2.2), 4 );
    handcreature_master.play();    

    $("#handcreature_canvas").on("mouseover", function(){
      TweenMax.to("#creature_hover", .5, {
        yPercent: 5,
        xPercent: 1,
        scale: 1
      })
    });

    $("#handcreature_canvas").on("mouseout", function(){
      TweenMax.to("#creature_hover", .5, {
        yPercent: 0,
        xPercent: 0,
        scale: 1
      })
    });

    var buttonColor;

    $("#handcreature_canvas").on("click", function(){     
      handcreature_master.pause();
      buttonColor = "rgb(" + (Math.floor(Math.random() * 155) + 100) + "," + (Math.floor(Math.random() * 155) + 100) + "," + (Math.floor(Math.random() * 155) + 100) + ")";
      TweenMax.set("#eye--open, #eye--semi", {
        autoAlpha: 0
      });
      TweenMax.set("#eye--open, #eye--semi", {
        autoAlpha: 1,
        delay: 1
      });
      TweenMax.to("#head", .5, {
        rotationZ: -15,
        scale: .9,
        repeat: 1,
        yoyo: true,
        ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 2, points: 20, taper: "none", randomize:  true, clamp: true})
      });
      TweenMax.to(".handcreature_st2", .5, {
        fill: "#FFFFFF"
      });
      TweenMax.to(".handcreature_st5", .5, {
        fill: "#FFFFFF"
      });
      TweenMax.to(".button_home-cta", .5, {
        backgroundColor: "#FFFFFF"
      }) 
      TweenMax.to(".button_home-cta", .5, {
        backgroundColor: buttonColor,
        delay: .75
      })      
      TweenMax.to(".handcreature_st2", .25, {
        fill: buttonColor,
        delay: .75
      });
      TweenMax.to(".handcreature_st5", .25, {
        fill: "rgb(" + (Math.floor(Math.random() * 155) + 100) + "," + (Math.floor(Math.random() * 155) + 100) + "," + (Math.floor(Math.random() * 155) + 100) + ")",
        delay: .75,
        onComplete: function(){handcreature_master.play();}
      });         
    });
</script>

{% endif %}