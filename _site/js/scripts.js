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
    // var st = document.querySelector("body").scrollTop;
    // var ht = document.querySelector( '.page-header_bg' ).getBoundingClientRect().height*1;
    // windowScroll = st/ht;
    // tl.progress( windowScroll );

var tl = gsap.timeline( {
    scrollTrigger: {
        trigger: ".page-header",
        start: "top top",
        end: "bottom top",
        scrub: .5
    }
} )
    .fromTo(".page-header_bg", {        
        autoAlpha: 1,
        yPercent: 0
        }, {
        autoAlpha: 0,
        yPercent: -10,
        ease: "power2.out"
    }, 0)
    .to(".page-header-wrapper", {
        yPercent: 80,
        ease: "power2.out"
    }, 0)
    .fromTo("#this_page_content", {
        transformOrigin: "50% 0",
        ease: "power2.out",
        y: 400,
    }, { 
        y: 0
    }, 0)

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

