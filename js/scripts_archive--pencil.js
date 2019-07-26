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
var home_ani_tl = new TimelineMax( {paused:true} )
    .fromTo(".weakened", 2, {
        transformOrigin: "50% 100%",
        autoAlpha: 1,
        y: "100%",
        rotationZ: -33
    }, {
        y: "0%",
        rotationZ: 0
    }, 1)
    .fromTo(".staedler", 1, {
        transformOrigin: "50% 100%",
        autoAlpha: 1,
        y: "100%",
        rotationZ: -33
    }, {
        y: "0%",
        rotationZ: 0,
        ease: Expo.easeOut
    }, 4)
    .set(".staedler", {
        autoAlpha: 0
    }, 7)
    .set(".weakened", {
        autoAlpha: 0
    }, 7)
    .set(".powered", {
        autoAlpha: 1,
        transformOrigin: "50% 100%"
    }, 7)
    .fromTo(".powered", 1, {
        scale: .9
    }, {
        scale: 1,
        ease:  Elastic. easeOut.config( 1.5, 0.3)
    }, 7)
    .fromTo(".rays", 1, {
        autoAlpha: 1,
        scale: 0
    }, {
        scale: 3,
        ease:  Elastic. easeOut.config( 1.5, 0.3)
    }, 7)
    .to(".rays", 8, {
        transformOrigin: "50% 50%",
        rotationZ: 360,
        repeat: -1,
        ease: Linear.easeNone
    }, 7)
    ;


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
    home_ani_tl.play(0);
    TweenMax.to(".preloader", .5, {
        autoAlpha:0,
        onComplete: function(){$(".preloader").remove()}
    });
    TweenMax.staggerFromTo(".col-4, .col-6, .col-12, .col-8", .5, {
        autoAlpha: 0,
        y: -60
    },{              
        autoAlpha: 1,
        y: 0,
        ease: Back.easeOut.config( 1.7)
    }, .05);
    $("body").addClass("assets_loaded");
    $(".home_hero").click(function(){
         home_ani_tl.play(0);
     });
});  