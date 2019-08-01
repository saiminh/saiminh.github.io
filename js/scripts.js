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
        }, 1000,'easeInOutExpo');

        event.preventDefault();
    });                       
};

// ------------------------------------------
// Home Page Animation
// ------------------------------------------
TweenLite.defaultEase =  Power2.easeInOut;

tlRotate = new TimelineMax({ paused: true });
tlRotate.fromTo($('.rotater_two'), .75, {
    rotationY: 0,
    y: 0
}, {
    rotationY: 40,
    ease:  Back.easeOut.config( 1.7),
    color: "#000",
    y: 0,
    scale: 1.2
}, 1.5)
/*tlRotate.fromTo($('.rotater_one'), .75, {
    rotationY: 0,
    y: 0
}, {
    rotationY: -40,
    ease:  Back.easeOut.config( 1.7),
    y: 0
}, 1.5)*/


// ------------------------------------------
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
};

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
    bloatkingInit();
    bierbaumInit();
    tlRotate.play(0);
  //  home_ani_tl.play(0);
    TweenMax.to(".preloader", .5, {
        autoAlpha:0,
        onComplete: function(){$(".preloader").remove()}
    });
    /*TweenMax.staggerFromTo(".col-4, .col-6, .col-12, .col-8", .5, {
        autoAlpha: 0,
        y: -60
    },{              
        autoAlpha: 1,
        y: 0,
        ease: Back.easeOut.config( 1.7)
    }, .05);*/
    $("body").addClass("assets_loaded");
    $(".home_hero").click(function(){
       //  home_ani_tl.play(0);
     });
});  

var tl = new TimelineLite( {paused: true} )
    .fromTo(".page-header_bg", .5, {
        autoAlpha: 1,
        yPercent: 0
    }, {
        autoAlpha: 0,
        yPercent: -30,
        ease: Power4.easeOut
    }, 0)
    .to(".page-header-wrapper", .5, {
        yPercent: 60,
        ease: Power4.easeOut
    },0);  

$(window).scroll( function(){
  var st = $(this).scrollTop();
  var ht = $( '.page-header_bg' ).height()*1.5;
   if( st < ht && st >= 0 ){
        windowScroll = st/ht;
        tl.progress( windowScroll );
    }
});