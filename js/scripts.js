// ------------------------------------------
//  On Load stuff
// ------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    gsap.to(".preloader", {
        duration: .5,
        scaleY: 0,
        ease: "expo.inOut",
        onComplete: function(){
            document.querySelector("body").classList.add('loading-complete');
        }
    });
    document.querySelector("body").classList.add("assets_loaded");
    gsap.registerPlugin(ScrollTrigger);
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    let headlineUpHeight = document.querySelector('.page-header_bg').clientHeight;
var tl = gsap.timeline( {
    scrollTrigger: {
        trigger: ".page-header",
        start: "0% 0%",
        end: "100% 50%",
        scrub: true,
       // pin: ".page-header-wrapper",
        // markers: true
    }
} )
    .fromTo(".page-header_bg", {        
        autoAlpha: 1,
        yPercent: 0
        }, {
        autoAlpha: 0,
        yPercent: -10,
        ease: "none"
    }, 0)
    .to(".page-header-wrapper", {
        yPercent: 50,
        ease: "none"
    }, 0)
    // .fromTo("#this_page_content", {
    //     transformOrigin: "50% 0",
    //     ease: "none",
    //     y: 400,
    // }, { 
    //     y: 0
    // }, 0)

});  

// ------------------------------------------
//  On Click Link stuff
// ------------------------------------------

document.querySelectorAll('.work_list a, a.site-title').forEach(element => element.addEventListener("click", function(event) {
    // Remember the link href
    var href = this.href;

    // Don't follow the link
    event.preventDefault();
    document.querySelector("body").classList.remove("loading-complete");
    // Do the async thing
        gsap.to( ".preloader", {
            duration: .5,
            scaleY: 1,
            ease: "expo.inOut",
            onComplete: function(){window.location = href;}
        });
}));

// Home
window.addEventListener('DOMContentLoaded', function() {
  if ( document.body.classList.contains( 'home' ) ) {
    let hometl = gsap.timeline( {
      scrollTrigger: {
        trigger: ".page-content",
        start: "-=80 top",
        end: "bottom top",
        scrub: .25
      },
    }) 
    let mySplitText = new SplitText(".hero_headline h1", { type:"lines "})
    let lines = mySplitText.lines; //an array of all the divs that wrap each character
    hometl.set(".hero_headline h1", {
      position: "relative",
      overflow: "hidden"
    })
    .to( lines, {
      transformOrigin: "50% 50%",
      duration: 5,
      xPercent: 100,
      yPercent: 100,
      rotationX: 270,
      ease: "power2.in",
      stagger: .5
    });
    var hollertl = gsap.timeline( {paused: true} ),
    mySplitTextHoller = new SplitText(".hollerer", {type:"chars"}), 
    hollerchars = mySplitTextHoller.chars;
    hollertl.to(hollerchars, {
      duration: 0.15,
      yPercent: -10,				
      stagger: {
          each: .1,
          repeat: -1,
          yoyo: true
      }
    })
    document.querySelector('.hollerer').addEventListener('mouseenter', function(){
      hollertl.play();
    })
    document.querySelector('.hollerer').addEventListener('mouseleave', function(){
      hollertl.pause(0);
    })
  }
});