// ------------------------------------------
// slick.js gallery init
// ------------------------------------------
var galleryInit = function(){
    if( $('.gallery-xscroll').not('.slick-initialized').length ){
        $('.gallery-xscroll').not('.slick-initialized').slick();
    }
};

// ------------------------------------------
// Smooth scrolling when clicking on anchor link
// ------------------------------------------
var smoothScrollInit =  function() {
    $('a.anchorlink').bind('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000);

        event.preventDefault();
    });                       
};

// ------------------------------------------
// Home Page Animation
// ------------------------------------------
TweenLite.defaultEase =  Power2.easeInOut;

tlRotate = new TimelineMax({ paused: true });
tlRotate.fromTo($('.rotater_two'), 1, {
    rotationY: 0,
    y: 0
}, {
    rotationY: 40,
    ease:  Back.easeOut.config( 1.7),
    color: "#000",
    y: 0,
    scale: 1.2
}, 1)
.staggerFromTo("#Layer_1 line", 1, {
    strokeWidth: 0
},{
    strokeWidth: 80,
    ease: Power0.easeNone,
    repeat: 1,
    yoyo: true
}, .02, 0)
;


/*// ------------------------------------------
// Bloat King
// ------------------------------------------
var bloatkingInit = function(){
    if( $('.animation-frame').length ){
        console.log('animation-frame');
        var iframe = $('.animation-iframe');
        $('.button_bloatking-replay').on('click', function(){
        iframe.src = iframe.src;    
        })
    };
};*/

// ------------------------------------------
// Bierbaum Tree
// ------------------------------------------
// If you use this code, please link to this pen (cdpn.io/rkcjt).
var bierbaumInit = function(){
    if( $('.bierbaum-logo').length ){
        console.log('bierbaum');
        var DrawEye = function(eyecontainer, pupil){
            // Initialise core variables
            var eyeposx = $(eyecontainer).offset().left;
            var eyeposy = $(eyecontainer).offset().top;
            var r = $(pupil).outerWidth()/2;
            var center = {
            x: $(eyecontainer).outerWidth()/2 - r, 
            y: $(eyecontainer).outerHeight()/2 - r
            };
            var distanceThreshold = $(eyecontainer).width()/2 - r;
            var mouseX = center.x, mouseY = center.y;

            // Listen for mouse movement
            $(window).mousemove(function(e){ 
                var d = {
                    x: e.pageX - r - eyeposx - center.x,
                    y: e.pageY - r - eyeposy - center.y
                };
                var distance = Math.sqrt(d.x*d.x + d.y*d.y);
                if (distance < distanceThreshold) {
                    mouseX = e.pageX - eyeposx - r;
                    mouseY = e.pageY - eyeposy - r;
                } else {
                    mouseX = d.x / distance * distanceThreshold + center.x;
                    mouseY = d.y / distance * distanceThreshold + center.y;
                }
            });       
            // Update pupil location
            var pupil = $(pupil);
            var xp = center.x, yp = center.y;
            var loop = setInterval(function(){
                // change 1 to alter damping/momentum - higher is slower
                xp += (mouseX - xp) / 50;
                yp += (mouseY - yp) / 50;
                pupil.css({left:xp, top:yp});    
            }, 1);
        };
        var theEye = new DrawEye("#Tree_Eye_BG--anim", "#Tree_Eye_inner--anim");
    };
};

// ------------------------------------------
//  On Load stuff
// ------------------------------------------
$(window).on('load', function(){   
    smoothScrollInit();
    galleryInit();    
    bierbaumInit();
    tlRotate.play(0);
    TweenMax.to(".preloader", .5, {
        autoAlpha:0,
        onComplete: function(){$(".preloader").remove()}
    });
    $("body").addClass("assets_loaded");
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});  


// ------------------------------------------
//  On Scroll stuff
// ------------------------------------------
var tl = new TimelineLite( {paused: true} )
    .fromTo(".page-header_bg", .5, {
        autoAlpha: 1,
        //yPercent: 0
    }, {
        autoAlpha: 0,
        //yPercent: -10,
        ease: Power0.easeNone
    }, 0)
    .to(".page-header-wrapper", .5, {
        yPercent: 60,
        ease: Power0.easeNone
    },0);  

$(window).scroll( function(){
  var st = $(this).scrollTop();
  var ht = $( '.page-header_bg' ).height()*1;
   if( st < ht && st >= 0 ){
        windowScroll = st/ht;
        tl.progress( windowScroll );
    }
});

