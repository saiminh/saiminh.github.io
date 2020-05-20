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
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    var st = $(this).scrollTop();
    var ht = $( '.page-header_bg' ).height()*1;
    windowScroll = st/ht;
    tl.progress( windowScroll );
});  

// ------------------------------------------
//  On Scroll stuff
// ------------------------------------------
var tl = gsap.timeline( {paused: true} )
    .fromTo(".page-header_bg", {
        duration: .5,
        autoAlpha: 1,
        //yPercent: 0
        }, {
        autoAlpha: 0,
        //yPercent: -10,
        ease: "none"
    }, 0)
    .to(".page-header-wrapper", {
        duration: .5,
        yPercent: 60,
        ease: "none"
    },0)
    .fromTo("#this_page_content", {
        duration: .5,
        scale: .5,
    }, {
        scale: 1
    }, 0)

    window.addEventListener("scroll", function(e){
    st = document.querySelector("html").scrollTop;
    ht = document.querySelector( '.page-header_bg' ).getBoundingClientRect().height*1;
   if( st < ht && st >= 0 ){
        windowScroll = st/ht;
        tl.progress( windowScroll );
    }
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

