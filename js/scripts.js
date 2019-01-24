// ------------------------------------------
// slick.js gallery init
// ------------------------------------------
var galleryInit = function(){
    if( $('.gallery-xscroll').not('.slick-initialized').length ){
        $('.gallery-xscroll').not('.slick-initialized').slick();
    }
};

// ------------------------------------------
// Barba transition
// ------------------------------------------
var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        /**
         * This function is automatically called as soon the Transition starts
         * this.newContainerLoading is a Promise for the loading of the new container
         * (Barba.js also comes with an handy Promise polyfill!)
         */
        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
        /**
        * this.oldContainer is the HTMLElement of the old Container
        */
        var oldEl = $(this.oldContainer);
        var deferred = Barba.Utils.deferred();

        TweenMax.to(oldEl, .4, {
            autoAlpha: 0,
            onComplete: function () {
                deferred.resolve();
            } 
        });
        return deferred.promise;        
    },

    fadeIn: function() {
        /**
        * this.newContainer is the HTMLElement of the new Container
        * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
        * Please note, newContainer is available just after newContainerLoading is resolved!
        */

        var _this = this;
        var $el = $(this.newContainer);
        var completeHandler = function(){
            console.log('completeHandler!');                        
            smoothScrollInit();
            //animate page elements
            TweenMax.staggerTo(".col-4, .col-6, .col-12, .col-8", .5, {              
                autoAlpha: 1,
                y: 0,
                ease: Back.easeOut.config( 1.7)
            }, .05);
            bierbaumInit();
            bloatkingInit();
            galleryInit();
            _this.done();
        }; // End complete Handler function            


        TweenMax.set(".col-4, .col-6, .col-12, .col-8", {          
            autoAlpha: 0,
            y: -30,
        });

        $(this.oldContainer).hide();

        $('html, body').stop().animate({
            scrollTop: 0
        }, 0,'easeInOutExpo');

        TweenMax.from($el, .1, {
            autoAlpha: 0,
            onComplete: completeHandler
        }); 

    } //End Fade in
});// End Barba transition

/**
 * Next step, you have to tell Barba to use the new Transition
 */

 Barba.Pjax.getTransition = function() {
    /**
    * Here you can use your own logic!
    * For example you can use different Transition based on the current page or link...
    */
    return FadeTransition;
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

    //initialize Barba.js
    Barba.Pjax.start();
    Barba.Prefetch.init();
    
    bloatkingInit();
    bierbaumInit();
});  